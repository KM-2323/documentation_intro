# `diabat4_2`: DB-Guided Phase Alignment and ADT Propagation

## Core Objectives

`diabat4_2` takes one new geometry and constructs diabatic quantities from the available adiabatic QC data. The routine does **not** normally replace the QC result with the database model. Instead, the database model is used as a local continuity guide.

At a high level, the routine does five things:

1. Takes actual QC adiabatic data at the new geometry.
2. Predicts what the diabatic and adiabatic data should look like using the existing DD database model.
3. Uses that prediction to fix the signs/phases of the new derivative-coupling vectors.
4. Propagates the adiabatic-to-diabatic transformation from a nearby database point.
5. Transforms the actual adiabatic QC data into final diabatic quantities.

The important exception is the failed-QC branch, `linterp0=.true.`, where the routine replaces the adiabatic energies, first derivatives, and derivative couplings with model-predicted quantities and sets `interp=-1`.

---

## Dimensions

Let:

- $N = \texttt{ndofddpes}$: number of DD PES nuclear coordinates.
- $S = \texttt{nddstate}$: number of electronic states.
- $P = \texttt{nactdim}$: number of stored unique state-pair couplings, usually $S(S-1)/2$.

The pair-index mapping used throughout the routine is:

```fortran
kdx = (jdx-1)*(jdx-2)/2 + idx
```

for a state pair `(idx,jdx)` with `idx < jdx`.

Equivalently,

$$
k(i,j)=\frac{(j-1)(j-2)}{2}+i,\qquad i<j.
$$

Example mapping:

- $(1,2) \rightarrow 1$
- $(1,3) \rightarrow 2$
- $(2,3) \rightarrow 3$
- $(1,4) \rightarrow 4$
- $(2,4) \rightarrow 5$
- $(3,4) \rightarrow 6$

This is just the upper-triangular state-pair index flattened into a one-dimensional array.

---

## Important Arguments

- `xgpoint(N)` **[intent(in)]**: Current geometry.

- `av(S,S)` **[intent(inout)]**: Actual QC adiabatic energy matrix. It is expected to be diagonal for same-spin adiabatic energies:

  $$
  \V_{ii}=E_i.
  $$

  In the failed-QC branch, `av` is overwritten by the model-predicted adiabatic matrix `av0`.

- `aderiv1(N,S,S)` **[intent(inout)]**: Actual QC adiabatic first derivatives. The diagonal entries are adiabatic gradients:

  $$
  \texttt{aderiv1}(q,i,i)=\pdv{E_i}{q}.
  $$

  In the failed-QC branch, this array is zeroed and then its diagonal entries are replaced by model-predicted adiabatic gradients.

- `aderiv2(N,N,S,S)` **[intent(in)]**: Actual QC adiabatic Hessians passed into `transform`.



- `dercp(N,P)` **[intent(inout)]**: Actual QC derivative-coupling / NAC-like vectors for state pairs. This is one of the most important inputs. In the normal branch, `diabat4_2` may flip signs in this array to align the QC phase convention with the DB prediction. In the failed-QC branch, `dercp` is overwritten by model-predicted pair vectors.

- `v(S,S)` **[intent(out)]**: Final diabatic potential matrix.

- `deriv1(N,S,S)` **[intent(out)]**: Final diabatic first derivatives.

- `deriv2(N,N,S,S)` **[intent(out)]**: Final diabatic second derivatives.

- `adttrans(S,S)` **[intent(out)]**: Final transformation matrix passed to `transform`.

- `linterp0` **[intent(in)]**: Flag indicating that the QC calculation failed. If true, the routine uses model-predicted data instead of actual QC data.

- `idbloc0` **[intent(in)]**: Nearest database record selected before entering this routine.

- `nrec` **[intent(in)]**: Current database record index being constructed.

- `interp` **[intent(out)]**: Interpolation/fallback flag. In this `diabat4_2` implementation, the active values are:

  - `0`: normal path using actual QC data.
  - `-1`: QC failed; model-predicted data were used.

  The source comment also describes `interp=1`, `interp=2`, and `interp=3`, but this particular code path does not set those values.

---

## Important Temporary Arrays

- `v0(S,S)`: DB/model-predicted diabatic potential matrix at `xgpoint`, produced by `dddb_rd`.

- `av0(S,S)`: DB/model-predicted adiabatic matrix. It is obtained by diagonalizing `v0` within spin blocks, then restoring spin-orbit couplings between different spin multiplicities.

- `trans0(S,S)`: Eigenvector matrix from diagonalizing `v0` within spin blocks.

  The important convention is:

  $$
  \Smat^T\W_0\Smat=\V_0,
  $$

  where `trans0` is $\Smat$.

  This matters because `transform` is called with `adttrans`, not directly with `trans0`. In the failed-QC branch, the code does:

  ```fortran
  adttrans = trans0
  call tranqxd(adttrans,nddstate)
  ```

  so `adttrans` becomes $\Smat^T$ before being passed to `transform`.

- `aderiv10(N,S,S)`: DB/model-predicted adiabatic first-derivative matrix, obtained by projecting the DB-predicted diabatic derivative matrix into the predicted adiabatic basis:

  $$
  \G^{A,0}_q = \Smat^T\G^{D,0}_q\Smat.
  $$

  Its off-diagonal entries are used as the model reference direction for sign-aligning `dercp`.

- `tmpderiv1(N,S,S)`: Work array used for the matrix product

  $$
  \G^{D,0}_q\Smat.
  $$

- `dcpover(S,S)`: Pair-overlap quality flag:

  - `0`: both vectors are tiny.
  - `1`: good overlap after possible sign correction.
  - `2`: poor overlap after possible sign correction.
  - `-999`: pair was not checked, usually because the states belong to different spin multiplicities.

- `pair_sign(S,S)`: Diagnostic sign bookkeeping. `1` means no sign flip; `-1` means the QC `dercp` pair was flipped.

- `pair_overlap(S,S)`: Diagnostic storage of the final absolute overlap used in sign checking.

- `diabidx1(S)`, `diabidx2(S)`: Diabatic-state ordering at the nearest database point and at the current model prediction.

- `lintruder(S)`: Intruder-state flag, used here only for the highest state.

- `integral(P)`: Approximate line integral of the interpolated NACs along the path from the nearest DB point to `xgpoint`.

---

## High-Level Flow

The routine has four main branches:

```text
if dbnrec == 0:
    first database point
else:
    build DB prediction
    if linterp0:
        QC failed fallback
    else:
        normal QC-data branch
        if lflip:
            use optqvc
        else:
            propagate ADT by integrating NACs
        transform actual QC data
```

The key conceptual split is:

- **DB prediction branch:** builds `v0`, `av0`, `trans0`, and `aderiv10`.
- **Normal QC branch:** uses those predictions only to choose signs, detect flips, and propagate `adttrans`; the final `v`, `deriv1`, and `deriv2` are computed from the actual QC data.

---

# Routine Walkthrough

## 1. Initialization

```fortran
interp=0
linterp =.false.
linterp1=.false.
linterp2=.false.
linterp3=.false.
any_dcp_flip = .false.

lforce = .true.  ! Calculate new point from DB in dddb_rd
```

The routine initializes interpolation/control flags. In this simplified `diabat4_2`, `linterp1`, `linterp2`, and `linterp3` are legacy flags from related variants and are not used to set `interp`.

`lforce=.true.` tells `dddb_rd` to force a DB/model evaluation at the new point.

---

## 2. Adiabatic Energy Ordering Check

The routine first checks adjacent same-spin adiabatic energies:

```fortran
lcheck = .false.
do idx = 2,nddstate
   if (imultmap(idx) .ne. imultmap(idx-1)) cycle
   diff0 =  av(idx,idx) - av(idx-1,idx-1)
   if (diff0 .lt. 1.0d-6) then
      dtmp = av(idx,idx)
      av(idx,idx) = av(idx-1,idx-1)
      av(idx-1,idx-1) = dtmp
   else if (diff0 .lt. 0.0) then
      lcheck = .true.
   endif
enddo
```

### Important correction

The source comment says that nearly degenerate states are swapped, while genuinely out-of-order states are flagged as an error. But the code does **not** quite implement that logic.

Because the first branch is:

```fortran
if (diff0 .lt. 1.0d-6) then
```

it catches both:

- small positive gaps, e.g. `diff0 = 5.0d-7`, and
- negative gaps, e.g. `diff0 = -1.0d-3`.

Therefore the later branch:

```fortran
else if (diff0 .lt. 0.0) then
```

is unreachable for negative `diff0` values. As written, negative same-spin gaps are swapped, not flagged.

So the literal behavior is:

- If the same-spin adjacent energy gap is less than `1.0d-6`, swap the two diagonal energies.
- If the gap is greater than or equal to `1.0d-6`, do nothing.
- The `lcheck` error path is effectively dead code in this form.

Also note that this swap is applied only to the diagonal entries of `av`; the code shown does not simultaneously swap gradients, Hessians, or derivative couplings.

---

## 3. First Database Record Case

```fortran
if(dbnrec.eq.0)then
```

This branch is used when there is no existing DB point from which to propagate a transformation.

### 3.1 Failed first QC calculation

```fortran
if(linterp0)then
   routine = 'Diabat4 (diabatmod.f90)'
   message = 'First QC calculation failed'
   call errormsg
endif
```

If the very first QC calculation failed, the routine stops. There is no previous DB model from which to construct a meaningful fallback.

### 3.2 First point cannot be at a degeneracy

The routine checks whether adjacent same-spin states are near degeneracy:

```fortran
linterp = .false.
do ldx = 1,nddstate-1
   if (imultmap(ldx) .ne. imultmap(ldx+1)) cycle
   if (ldx .ge. mxsinterest) cycle

   diff0 = av(ldx+1,ldx+1) - av(ldx,ldx)

   if (abs(diff0) .lt. dbdegen) then 
       linterp = .true.
       write(ilog,'(a,2i5)')'States near degeneracy : ',ldx,ldx+1
   endif
enddo
if (lnodegen0) linterp = .false.
```

If the first point is too close to a degeneracy, the routine stops unless `lnodegen0` is set:

```fortran
if (linterp) then
   routine = 'Diabat4 (diabatmod.f90)'
   message = 'First QC calculation at degeneracy. '// &
       'If critical, choose a different reference point using a diabref-section ' //&
       'OR add keyword ignore_degen0'
   call errormsg
endif
```

The reason is that the first DB point defines the initial diabatic gauge. Starting at a degeneracy gives an ambiguous initial reference.

### 3.3 Identity transformation at the first point

For the first accepted point, the code uses the identity transformation:

```fortran
call unitqxd(adttrans,nddstate)
```

Then it transforms the actual QC adiabatic data:

```fortran
call transform(adttrans,av,aderiv1,aderiv2,&
     v,deriv1,deriv2,dercp,ndofddpes,nddstate)
```

Since `adttrans` is the identity, the first point starts with the adiabatic and diabatic bases identified.

---

## 4. Local Database Setup

```fortran
if (ldbsmall) then
   call list_init(Current)
   current => ngp_loc(num_gp)%locpt
   do irec = 1,dbnrec_gp(num_gp)
      loc(irec) = current%locDB
      current => current%Next
   enddo
else
   do irec = 1,dbnrec
      loc(irec) = irec
   enddo
endif
```

This creates a local list of database record indices.

In this routine, `loc` is not used later in the visible code. The actual DB model read is done by `dddb_rd`, which already knows how to work with the DB mode being used.

---

## 5. Predict the Diabatic Model at the New Point

```fortran
call dddb_rd(v0,deriv1,deriv2,tmpdip,xgpoint,.false.,.false.,lforce)
```

This call evaluates the current DD database model at `xgpoint`.

The outputs are temporarily used as:

- `v0`: predicted diabatic potential matrix $\W_0$.
- `deriv1`: predicted diabatic first derivatives $\pdv{\W_0}{q}$.
- `deriv2`: predicted diabatic Hessians.
- `tmpdip`: predicted dipoles, not used in the shown logic.

### Important bookkeeping point

`deriv1` and `deriv2` are output arguments of `diabat4_2`, but at this stage they are being used as temporary storage for the DB prediction. They are overwritten later by the final call to `transform`.

---

## 6. Diagonalize the Predicted Diabatic Matrix

The code initializes the predicted transformation and adiabatic matrix:

```fortran
trans0 = 0.0_dop
av0 = 0.0_dop
```

Then it loops over spin-multiplicity blocks:

```fortran
jdx = 0
do idx=1,nsmult
   allocate(transtmp(imultblk(idx),imultblk(idx)))

   if (idx .gt. 1) jdx = jdx+imultblk(idx-1)

   do kdx = 1,imultblk(idx)
      do ldx = 1,imultblk(idx)
         transtmp(ldx,kdx) = v0(jdx+ldx,jdx+kdx) 
      enddo
   enddo

   call dsyev('V','U',imultblk(idx),transtmp,imultblk(idx),tmpe,work,&
        3*imultblk(idx),info)
```

The LAPACK call `dsyev` diagonalizes the symmetric spin-block of `v0`.

Within each spin block:

$$
\Smat_b^T\W_{0,b}\Smat_b=\V_{0,b}.
$$

The eigenvalues are stored on the diagonal of `av0`:

```fortran
do ldx = 1,imultblk(idx)
   av0(jdx+ldx,jdx+ldx) = tmpe(ldx)
enddo
```

Then the eigenvector phases are made consistent:

```fortran
call trmatphase(transtmp,imultblk(idx))
```

Finally, the eigenvector block is stored into `trans0`:

```fortran
do kdx = 1,imultblk(idx)
   do ldx = 1,imultblk(idx)
      trans0(jdx+ldx,jdx+kdx) = transtmp(ldx,kdx) 
   enddo
enddo
```

### Important correction about orientation

The code comment says:

```fortran
! store transformation matrix S^T in trans0
! NB S^T V S = W
```

But the actual matrix stored in `trans0` is the eigenvector matrix $\Smat$, not $\Smat^T$, because it is used later as:

```fortran
tmpderiv1 = matmul(deriv1,trans0)
call qqtxdd(trans0,tmpderiv1,aderiv10,nddstate)
```

which gives:

$$
\texttt{aderiv10}(q,:,:)=\Smat^T\,\texttt{deriv1}(q,:,:)\,\Smat.
$$

So the useful convention is:

- `trans0` = $\Smat$.
- $\Smat^T\W_0\Smat=\V_0$.
- `transform` expects the matrix `adttrans` in the orientation used by that routine.
- In the failed-QC branch, `trans0` is explicitly transposed before being passed to `transform`.

---

## 7. Add Spin-Orbit Couplings Back to the Predicted Adiabatic Matrix

After diagonalizing each same-spin block, the code restores couplings between different spin multiplicities:

```fortran
do si=1,nddstate
   do sf=1,nddstate
      if (imultmap(si) .ne. imultmap(sf)) av0(sf,si) = v0(sf,si)
   enddo
enddo
```

This means `av0` is not necessarily globally diagonal after this step.

It is better to think of `av0` as:

- diagonal adiabatic energies inside each spin block, plus
- off-diagonal spin-orbit coupling elements between different spin blocks copied from `v0`.

---

## 8. Build the Predicted Adiabatic First-Derivative Matrix

For each nuclear coordinate, the routine projects the predicted diabatic derivative matrix into the predicted adiabatic basis:

```fortran
do ldx = 1, ndofddpes
   tmpderiv1(ldx,1:nddstate,1:nddstate) = &
        matmul(deriv1(ldx,1:nddstate,1:nddstate),trans0)
   call qqtxdd(trans0,tmpderiv1(ldx,1:nddstate,1:nddstate),&
        aderiv10(ldx,1:nddstate,1:nddstate),nddstate)
enddo
```

Since `qqtxdd(A,B,C)` computes $C=A^T B$, this is:

$$
\G^{A,0}_q
=\Smat^T\G^{D,0}_q\Smat.
$$

Here:

- $\G^{D,0}_q$ is the DB-predicted diabatic first-derivative matrix.
- $\G^{A,0}_q$ is the same derivative matrix expressed in the predicted adiabatic basis.

The diagonal entries of `aderiv10` are predicted adiabatic gradients. The off-diagonal entries are predicted pair-coupling directions used as a reference for sign alignment.

---

## 9. Failed-QC Branch

```fortran
if (linterp0) then
```

If the QC calculation failed, the routine does not trust the actual `av`, `aderiv1`, or `dercp` values. It instead builds model-predicted adiabatic data from `v0`, `av0`, `trans0`, and `aderiv10`.

### 9.1 Set fallback flag and transformation

```fortran
interp = -1
adttrans=trans0
call tranqxd(adttrans,nddstate)   ! adttrans = S
```

As explained above, `trans0` is the eigenvector matrix $\Smat$ satisfying:

$$
\Smat^T\W_0\Smat=\V_0.
$$

After `tranqxd`, `adttrans` becomes $\Smat^T$.

If `transform` computes:

$$
\W = \Cmat^T\V\Cmat,
$$

with $\Cmat=\texttt{adttrans}$, then using $\Cmat=\Smat^T$ gives:

$$
\W = (\Smat^T)^T\V_0\Smat^T
=\Smat\V_0\Smat^T
=\W_0.
$$

So the transpose is needed for consistency with the `transform` convention.

### 9.2 Replace adiabatic energies and first derivatives

```fortran
av = av0
aderiv1 = 0.0_dop
```

Then the code fills the diagonal gradients and pair couplings from `aderiv10`:

```fortran
jdx = 0
do ldx = 1,nddstate
   aderiv1(1:ndofddpes,ldx,ldx) = aderiv10(1:ndofddpes,ldx,ldx)
   do kdx = ldx+1,nddstate
      jdx = (kdx-1)*(kdx-2)/2+ldx
      dercp(1:ndofddpes,jdx) = aderiv10(1:ndofddpes,ldx,kdx)
   enddo
enddo
```

This branch fills **all** pair entries, not only same-spin pairs.

### 9.3 Transform and exit

```fortran
call transform(adttrans,av,aderiv1,aderiv2,&
     v,deriv1,deriv2,dercp,ndofddpes,nddstate)

go to 999
```

### Important Hessian caveat

The failed-QC branch does not assign model-predicted Hessians into `aderiv2`. The predicted diabatic Hessian from `dddb_rd` was temporarily stored in output array `deriv2`, but this is then overwritten by `transform`.

Therefore, for second derivatives, the fallback behavior depends on the `aderiv2` supplied to this routine and on how `transform` uses it. The code shown here does not explicitly replace failed-QC Hessians with DB-predicted Hessians.

---

## 10. Compare Model and Actual QC Energies

If QC did not fail, the routine compares the model-predicted adiabatic diagonal energies against the actual QC energies:

```fortran
verr = 0.0_dop
do idx = 1,nddstate
   diff0 = av0(idx,idx) - av(idx,idx)
   verr = verr + diff0*diff0
   if (abs(diff0) .gt. moderr) then
      write(ilog,'(a,i0,a,f12.8)') &
            'State ',idx,' (Ecalc - Emodel) / eV:  ',diff0*27.211
   endif
enddo
verr = dsqrt(verr)/dble(nddstate)
write(ilog,'(a,f12.8)') 'RMS(Ecalc - Emodel) / eV:  ',verr*27.211
```

This is a diagnostic check of how good the DB model is at the new geometry.

The variable name and printed label are slightly inconsistent:

```fortran
diff0 = av0(idx,idx) - av(idx,idx)
```

so `diff0` is actually:

$$
E_{\text{model}}-E_{\text{calc}},
$$

whereas the log label says `(Ecalc - Emodel) / eV`.

---

## 11. Derivative-Coupling Sign Alignment

This is one of the central pieces of the routine.

The idea is:

1. The QC derivative-coupling vector can have an arbitrary sign because electronic eigenvectors can be multiplied by $-1$.
2. The DB-predicted off-diagonal derivative vector gives a local reference direction.
3. If the QC vector points against the DB prediction, flip the QC vector.

The loop is:

```fortran
dotp = 0.0_dop
linterp = .false.
mindotp1 = 0.1_dop
pair_sign(:,:) = 0
pair_overlap(:,:) = 0.0_dop

dcpover(:,:)=-999
do idx = 1,nddstate-1
   do jdx = idx+1,nddstate

      if (imultmap(jdx) .ne. imultmap(idx)) cycle

      kdx = (jdx-1)*(jdx-2)/2+idx

      call normvxd(dercp(1,kdx),dotp2(kdx),ndofddpes)
      call normvxd(aderiv10(1,idx,jdx),dotp3,ndofddpes)
      call vvtxdd(dercp(1,kdx),aderiv10(1,idx,jdx),dotp1,ndofddpes)
      dotp1 = dotp1/(dotp2(kdx)*dotp3)
```

Mathematically, for pair $(i,j)$:

$$
o_{ij}
=\frac{\mat d^{\text{QC}}_{ij}\cdot \mat d^{\text{DB}}_{ij}}
{\|\mat d^{\text{QC}}_{ij}\|\,\|\mat d^{\text{DB}}_{ij}\|}.
$$

Here:

- $\mat d^{\text{QC}}_{ij}$ is `dercp(:,kdx)`.
- $\mat d^{\text{DB}}_{ij}$ is `aderiv10(:,idx,jdx)`.
- $o_{ij}$ is the cosine of the angle between them.

If the overlap is negative, the QC vector is sign-flipped:

```fortran
if (dotp1 .lt. 0.0) then
   do ldx = 1, ndofddpes
      dercp(ldx,kdx) = -dercp(ldx,kdx)
   enddo
   dotp1=-dotp1
   pair_sign(idx,jdx) = -1
   pair_sign(jdx,idx) = -1
   any_dcp_flip = .true.
endif
```

After this point, `dotp1` is non-negative because it has been converted to `abs(dotp1)` if a flip occurred.

The quality flag is then assigned:

```fortran
if (abs(dotp2(kdx)) .lt. 0.0001 .and. abs(dotp3) .lt. 0.0001) then
   dcpover(idx,jdx)=0    ! zero vector 
else if (dotp1 .gt. 0.866_dop) then   ! angle < 30deg
   dcpover(idx,jdx)=1    ! overlaps predicted
else 
   dcpover(idx,jdx)=2    ! poor overlap to be checked
endif
```

So:

- `dcpover=0`: both vectors are tiny.
- `dcpover=1`: overlap is better than $\cos 30^\circ \approx 0.866$.
- `dcpover=2`: overlap is poor even after sign correction.

### Important numerical caveat

The code computes:

```fortran
dotp1 = dotp1/(dotp2(kdx)*dotp3)
```

**before** checking whether `dotp2(kdx)` or `dotp3` is tiny.

So if either vector norm is exactly zero, the division can produce a numerical problem before the later “zero vector” branch is reached. The intended logic is clear, but the guard happens after the normalization.

---

## 12. Intruder-State Check

The routine checks whether the highest state has poor coupling overlap with lower states:

```fortran
lintruder(:) = .false.
jdx = nddstate
do idx = 1,nddstate-1
   if (dcpover(idx,jdx) .eq. 2) then
      lintruder(jdx) = .true.
   endif
enddo
```

So only `lintruder(nddstate)` can be set in this code block.

If any pair involving the highest state has `dcpover=2`, the highest state is marked as an intruder candidate.

### Important logging caveat

The diagnostic log line uses `dotp1`:

```fortran
write(ilog,'(a,i0,a,f6.2)') 'Intruder State:  ',jdx,&
        ' Angle :',acos(dotp1)*(180.0/pi)
```

But `dotp1` is not recomputed in this intruder loop. It is whatever value remained from the previous pair-overlap loop. Therefore the printed angle may not correspond to the specific intruder pair.

The actual intruder flag is still based on `dcpover(idx,jdx)`.

---

## 13. Choose Nearest DB Record

```fortran
idbloc = idbloc0
```

The routine uses the nearest database record already selected by the caller.

---

## 14. Check Whether Diabatic States Have Swapped

The routine compares the order of diabatic diagonal energies at the nearest DB point against the order predicted at the new point.

For each spin block, it sorts the old DB diabatic diagonal energies:

```fortran
do kdx=1,imultblk(idx)
   ldx = jdx+kdx
   tmpe(ldx)=dbener(ldx,ldx,idbloc)
enddo
call ibubble_up(tmpe(jdx+1:jdx+imultblk(idx)), &
        diabidx1(jdx+1:jdx+imultblk(idx)),imultblk(idx))
```

Then it sorts the current predicted diabatic diagonal energies:

```fortran
do kdx=1,imultblk(idx)
   ldx = jdx+kdx
   tmpe(ldx)=v0(ldx,ldx)
enddo
call ibubble_up(tmpe(jdx+1:jdx+imultblk(idx)), &
        diabidx2(jdx+1:jdx+imultblk(idx)),imultblk(idx))
```

Here:

- `diabidx1`: ordering of diabatic diagonal energies at `idbloc`.
- `diabidx2`: ordering of DB-predicted diabatic diagonal energies at `xgpoint`.

Then the code checks whether the ordering changed:

```fortran
lflip = .false.
do idx=1,nddstate-1
   if (diabidx1(idx) .ne. diabidx2(idx)) lflip = .true.
enddo
```

It also sets `lflip` if adjacent adiabatic energies are extremely close:

```fortran
do idx = 2,nddstate
   diff0 = av(idx,idx) - av(idx-1,idx-1)
   if (abs(diff0) .lt. 1.0d-8) lflip = .true.
enddo
```

### Interpretation

`lflip=.true.` means the code thinks a state-ordering change or near-degenerate crossing may have occurred, so a simple line-integral propagation may not be reliable.

### Small correction

The degeneracy check does not skip different spin multiplicities. It checks all adjacent diagonal entries in `av`.

---

## 15. Build the Path from the Nearest DB Point

The routine logs the propagation source and allocates `transtmp`:

```fortran
write(ilog,'(2(a,i0))') &
   'Propagating diabatic states to DB record:          ',nrec,&
   '   from: ',idbloc

allocate(transtmp(nddstate,nddstate))
```

Then it constructs the vector from the nearest DB geometry to the current geometry:

```fortran
intvec = xgpoint-dbgeo(1:ndofddpes,idbloc)
call normvxd(intvec,steplength,ndofddpes)
nintvec = intvec/steplength
```

Here:

$$
\mat r = \mat Q - \mat Q_{\text{DB}},
\qquad
L=\|\mat r\|.
$$

`intvec` is the path vector and `steplength` is its norm.

### Minor code note

`nintvec` is computed in the shown code but not used afterwards. The actual interpolation routine `intengap4` receives `intvec` and `steplength`.

---

## 16. If Diabatic States Flip: Use `optqvc`

```fortran
if (lflip) then
   call optqvc(xgpoint,v0,av,aderiv1,dercp,adttrans,av1,idbloc)
```

When a state flip is detected, the routine avoids simple propagation from `dbtrans(:,:,idbloc)` using the line-integrated NACs. Instead, it calls `optqvc`.

Conceptually, this branch uses a local optimized QVC-like model to build a more appropriate transformation through the crossing/state-swap region.

Although `dercp` is passed as `intent(inout)` to `optqvc`, in the code shown here the explicit sign flips in `dercp` happen earlier in `diabat4_2` during sign alignment.

---

## 17. If No Flip: Integrate NACs Along the Straight Path

If no state flip is detected, the routine propagates the existing ADT matrix from the nearest DB point.

```fortran
nstep = 20

transtmp(1:nddstate,1:nddstate) = dbtrans(1:nddstate,1:nddstate,idbloc)
```

So propagation starts from the stored transformation at the nearest DB point.

### 17.1 Build one-dimensional interpolation along the path

```fortran
call intengap4(intvec,exppar,nacpar,itpdcp0,itpdcp,&
     dbadener(1:ns,1:ns,idbloc),&
     dbadgrad(1:nd,1:ns,1:ns,idbloc),&
     dbdercp(1:nd,1:nactdim,idbloc),&
     av(1:ns,1:ns),aderiv1(1:nd,1:ns,1:ns),&
     dercp(1:nd,1:nactdim),steplength)
```

This constructs a one-dimensional interpolation along the straight segment from the DB point to `xgpoint`.

The inputs include:

- adiabatic energies, gradients, and derivative couplings at the DB point;
- actual QC adiabatic energies, gradients, and sign-aligned derivative couplings at the new point;
- the path vector and path length.

Conceptually, `intengap4` prepares:

1. interpolated adiabatic energy-gap parameters `exppar`,
2. interpolated NAC parameters `nacpar`,
3. endpoint projected couplings `itpdcp0` and `itpdcp`.

### 17.2 Trapezoidal integration

The integral is initialized with the starting endpoint value:

```fortran
integral = 0.0_dop
sumint1d = itpdcp0
```

The step size is:

```fortran
ddelx = steplength/nstep
x = 0.0_dop
```

Intermediate points are evaluated using `stepnact4`:

```fortran
do istep = 1, nstep-1
   x = x + ddelx

   call stepnact4(x,nac,exppar,nacpar)

   sumint1d = sumint1d + 2.0_dop * nac
enddo
```

Then the endpoint is added:

```fortran
sumint1d = sumint1d + itpdcp
```

The trapezoidal result is:

```fortran
do jdx = 1, nactdim
   integral(jdx) = integral(jdx) + sumint1d(jdx)*ddelx
enddo
integral = integral * 0.5_dop
```

Mathematically, for each pair $k$:

$$
I_k \approx \int_0^L F_k(x)\,dx.
$$

The code uses the trapezoidal rule with `nstep=20` intervals.

### 17.3 Propagate the ADT matrix

```fortran
call propadt(integral,transtmp,adttrans)
```

This uses the integrated pair couplings to propagate the transformation from the stored DB transformation to the new geometry.

Conceptually:

$$
\Cmat(Q) \approx \exp\left[-\int_{Q_{\text{DB}}}^{Q}\Fmat\cdot d\mat Q\right]\Cmat(Q_{\text{DB}}),
$$

with the precise sign and ordering convention handled inside `propadt`.

---

## 18. Final Transform

The final transformation is always performed after either the `optqvc` branch or the normal propagation branch:

```fortran
call transform(adttrans, &
     av(1:nddstate,1:nddstate), &
     aderiv1(1:ndofddpes,1:nddstate,1:nddstate),&
     aderiv2(1:ndofddpes,1:ndofddpes,1:nddstate,1:nddstate),&
     v,deriv1,deriv2,dercp(1:ndofddpes,1:nactdim),&
     ndofddpes,nddstate)
```

This is the step where the data become final diabatic quantities.

The conceptual transformation is:

$$
\W = \Cmat^T\V\Cmat,
$$

where:

- $\V$ is the actual QC adiabatic matrix `av`, except in the failed-QC branch where it is `av0`.
- $\Cmat$ is `adttrans`.
- $\W$ is the output `v`.

The first and second derivatives are transformed consistently by `transform`, using `aderiv1`, `aderiv2`, and `dercp`.

The sign-corrected `dercp` directly affects the final diabatic first derivatives.

---

## 19. Cleanup

```fortran
if(allocated(transtmp)) deallocate(transtmp)
if(allocated(transtmp1)) deallocate(transtmp1)

999 continue
call myflush(ilog)
return
```

`transtmp1` is declared and deallocated if allocated, but it is not allocated or used in the shown code.

---

# What the DB Model Is Actually Used For

In the normal successful-QC branch, the DB model is used for:

1. predicting the local diabatic matrix `v0`,
2. predicting the local adiabatic transformation `trans0`,
3. predicting the projected adiabatic derivative matrix `aderiv10`,
4. fixing the sign gauge of actual QC derivative couplings `dercp`,
5. checking whether diabatic state ordering has changed,
6. helping decide whether to use `optqvc`,
7. providing the previous transformation `dbtrans(:,:,idbloc)` from which to propagate.

The DB model is **not** normally the source of the final local potential matrix. The final `v` comes from transforming the actual QC `av` using the propagated transformation.

---

# What Happens to `dercp`

`dercp` has three possible treatments:

## First DB point

No sign alignment is possible because there is no previous DB model. `dercp` is passed directly into `transform` with the identity transformation.

## Failed QC

`dercp` is overwritten using the DB-predicted projected derivative matrix:

$$
\texttt{dercp}(:,k(i,j)) \leftarrow \texttt{aderiv10}(:,i,j).
$$

## Normal QC

`dercp` is compared pair-by-pair with `aderiv10`. For same-spin pairs only:

$$
\texttt{if}\quad
\mat d_{ij}^{\text{QC}}\cdot\mat d_{ij}^{\text{DB}} < 0,
\quad
\mat d_{ij}^{\text{QC}}\leftarrow -\mat d_{ij}^{\text{QC}}.
$$

After this, the sign-aligned `dercp` is used in:

1. `intengap4`, to build the interpolation for ADT propagation.
2. `transform`, to produce final diabatic first derivatives.

---
<!-- 
# Important Corrections and Caveats

## 1. Energy-ordering check does not match its comment

The code swaps adjacent same-spin energies whenever:

```fortran
diff0 .lt. 1.0d-6
```

This includes genuinely negative gaps. Therefore the later out-of-order error branch is unreachable for negative gaps.

## 2. `trans0` is best interpreted as $\Smat$, not $\Smat^T$

The derivative projection confirms:

$$
\texttt{aderiv10}=\Smat^T\texttt{deriv1}\Smat.
$$

The failed-QC branch transposes `trans0` before passing it to `transform`.

## 3. Failed-QC branch does not visibly replace Hessians

The code replaces:

- `av`,
- diagonal `aderiv1`,
- `dercp`,

but not `aderiv2`.

## 4. Zero-vector handling in sign alignment happens after normalization

The intended logic has a zero-vector category, but the normalized dot product is computed before the tiny-vector check.

## 5. Intruder-state printed angle may be stale

The intruder flag uses `dcpover`, but the printed angle uses the last available `dotp1` from the previous loop.

## 6. `interp=1`, `interp=2`, and `interp=3` are legacy comments here

This implementation only actively sets:

- `interp=0`, normal branch;
- `interp=-1`, failed-QC fallback.

## 7. `loc`, `mindotp1`, and `transtmp1` are effectively unused in the shown logic

They are either legacy variables or used by related variants of the routine.

--- -->

# Very Important Takeaway

> `diabat4_2` does not normally compute the final diabatic PES from the DB model alone.

Instead:

1. The DB model predicts local phase/order/continuity information.
2. Actual QC data provide the local adiabatic energies, gradients, Hessians, and derivative couplings.
3. The routine sign-aligns the QC derivative couplings using the DB prediction.
4. The routine propagates or reconstructs the ADT matrix.
5. The final call to `transform` converts the actual QC data into diabatic data.

So the DB model acts as a **phase, ordering, and continuity compass**, while the actual QC calculation supplies the final local data, unless `linterp0=.true.`.

---

# Minimal Pseudocode Summary

```text
diabat4_2(Q, QC adiabatic data, nearest DB record):

    initialise flags
    check / swap adjacent same-spin adiabatic energies

    if no DB records exist:
        if QC failed: error
        if first point near degeneracy: error unless ignored
        adttrans = identity
        transform(QC adiabatic data -> diabatic data)
        return

    build local DB record list

    # DB model prediction
    dddb_rd(Q) -> v0, predicted diabatic derivatives
    diagonalize v0 inside spin blocks -> av0, trans0
    restore spin-orbit couplings into av0
    project predicted diabatic derivatives:
        aderiv10 = trans0^T * deriv1 * trans0

    if QC failed:
        interp = -1
        adttrans = transpose(trans0)
        av = av0
        fill diagonal aderiv1 from aderiv10
        fill dercp from off-diagonal aderiv10
        transform(model adiabatic data -> diabatic data)
        return

    compare av0 with actual QC av

    for each same-spin state pair:
        compute overlap between actual dercp and predicted aderiv10
        if overlap < 0:
            dercp(pair) = -dercp(pair)
        classify overlap quality in dcpover

    mark highest state as intruder if its checked pair overlap is poor

    compare old and new diabatic ordering
    if ordering changed or adiabatic energies are nearly degenerate:
        lflip = true

    if lflip:
        optqvc(...) -> adttrans
    else:
        build straight path from nearest DB geometry to Q
        intengap4(...) -> interpolation parameters
        integrate NACs along path by trapezoidal rule
        propadt(integral, dbtrans(idbloc), adttrans)

    transform(actual QC adiabatic data -> final diabatic data)
```
