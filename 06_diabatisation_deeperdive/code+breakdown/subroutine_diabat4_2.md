**Core Objectives:**

1. Take actual QC adiabatic data at the new geometry.

2. Predict what the diabatic/adiabatic data should look like using the DB model.
    
3. Use that prediction to fix signs/phases of the new derivative couplings.
    
4. Propagate the adiabatic-to-diabatic transformation from a nearby DB point.
    
5. Transform actual adiabatic QC data into diabatic quantities.
    

---

## Dimensions

Let:

- $N = \text{ndofddpes}$ (number of nuclear coordinates / DD PES coordinates)
    
- $S = \text{nddstate}$ (number of electronic states)
    
- $P = \text{nactdim}$ (number of unique state pairs, usually $S(S-1)/2$)
    

The pair index mapping is:

Fortran

```
kdx = (jdx-1)*(jdx-2)/2 + idx
```

_(for state pair `(idx,jdx)` with `idx < jdx`)_

**Example Mapping:** _(Effectively a formula to translate the pair interaction of an upper triangular matrix into a running index 1D array)_

- (1,2) $\rightarrow$ 1
    
- (1,3) $\rightarrow$ 2
    
- (2,3) $\rightarrow$ 3
    
- (1,4) $\rightarrow$ 4
    
- (2,4) $\rightarrow$ 5
    
- (3,4) $\rightarrow$ 6
    

---

## Input and Output

**Important Arguments:**

- `xgpoint(N)`: Current geometry.
    
- `av(S,S)` **[intent(inout)]**: Adiabatic energy matrix from QC and should be diagonal:
    
    - `av(i,i)` = adiabatic energy of state $i$
        
    - _Note:_ The routine may swap nearly degenerate diagonal entries if their ordering is numerically ambiguous.
        
- `aderiv1(N,S,S)` **[intent(inout)]**: Adiabatic first derivatives. Diagonal terms are adiabatic gradients:
    
    - $\text{aderiv1}(q,i,i) = \frac{dE_i}{dq} = \langle\psi_i|\nabla H|\psi_i\rangle$
        
    - Off-diagonal terms may be used as coupling-like derivative data depending on the path: $\text{aderiv}(q,i,j) = \langle\psi_i|\nabla H|\psi_j\rangle$
        
- `aderiv2(N,N,S,S)` **[intent(in)]**: Adiabatic Hessians from QC.
    
- `dercp(N,P)` **[intent(inout)]**: Derivative coupling / NAC-like vectors between state pairs. This is one of the most important arrays. It is modified by sign flips in `diabat4_2`.
    
- `v(S,S)` **[intent(out)]**: Final diabatic potential matrix.
    
- `deriv1(N,S,S)` **[intent(out)]**: Final diabatic first derivatives.
    
- `deriv2(N,N,S,S)` **[intent(out)]**: Final diabatic second derivatives.
    
- `adttrans(S,S)` **[intent(out)]**: Final adiabatic-to-diabatic transformation matrix used by `transform`.
    
- `linterp0` **[intent(in)]**: Flag saying the QC calculation failed, so the routine should use interpolated DB/model data instead.
    
- `idbloc0` **[intent(in)]**: Nearest DB record chosen before entering this routine.
    
- `interp` **[intent(out)]**: Flag describing whether interpolation/fallback was used.
    

---

## Important Temporary Arrays

- `v0(S,S)`: Predicted diabatic potential matrix at `xgpoint`, obtained from the database model by `dddb_rd`.
    
- `av0(S,S)`: Predicted adiabatic energies obtained by diagonalizing `v0`.
    
- `trans0(S,S)`: Predicted transformation matrix obtained from diagonalizing `v0`.
    
- `aderiv10(N,S,S)`: Predicted adiabatic gradients and off-diagonal couplings obtained by transforming the DB-predicted diabatic derivatives into the predicted adiabatic basis.
    
- `dcpover(S,S)`: Quality flag for derivative-coupling overlap:
    
    - `0` = both vectors tiny
        
    - `1` = good overlap
        
    - `2` = poor overlap
        
- `pair_sign(S,S)` / `pair_overlap(S,S)`: Debug/diagnostic storage for whether each pair was sign-flipped and how well it overlapped the model prediction that I am using to test the water.
    

---

## Routine Walkthrough

### 1. Start Of Routine (Initialization)

_(diabatmod.f90:1723)_

Fortran

```
interp=0
linterp =.false.
linterp1=.false.
linterp2=.false.
linterp3=.false.
any_dcp_flip = .false.
lforce = .true.
```

This initializes flags. In this simplified `diabat4_2`, `linterp1`, `linterp2`, and `linterp3` are mostly leftover control flags from related variants. `lforce=.true.` tells the DB read routine to calculate a DB/model point forcibly.

Then the routine checks that the adiabatic energies are ordered:

Fortran

``` Fortran
diff0 = av(idx,idx) - av(idx-1,idx-1)

! If two energies are almost equal, it swaps them. If genuinely out of order, it errors.
if (diff0 .lt. 1.0d-6) then
    dtmp = av(idx,idx)            ! Save current energy in a temporary dtmp
    av(idx,idx) = av(idx-1,idx-1) ! Overwrite current energy with previous energy
    av(idx-1,idx-1) = dtmp        ! Put the saved current energy into the previous spot
else if (diff0 .lt. 0.0) then
    lcheck = .true.
endif

if (lcheck) then
    routine = 'Diabat4 (diabatmod.f90)'
    write(message,'(a,i5)') 'Adiabatic energies not ordered:', nrec
    call errormsg
endif
```

### 2. First Database Record Case

_(diabatmod.f90:1759)_

Fortran

``` Fortran
if(dbnrec.eq.0)then
```

This means there is no previous DB point to propagate from. In that case, the code sets:

Fortran

```Fortran
call unitqxd(adttrans,nddstate)
```

So `adttrans` is the identity matrix. Then it calls:

Fortran

```Fortran
call transform(adttrans,av(1:nddstate,1:nddstate),&
     aderiv1(1:ndofddpes,1:nddstate,1:nddstate),&
     aderiv2(1:ndofddpes,1:ndofddpes,1:nddstate,1:nddstate),&
     v,deriv1,deriv2,dercp(1:ndofddpes,1:nactdim),&
     ndofddpes,nddstate)
```

So for the first point, the adiabatic and diabatic bases are initially taken to be the same.

### 3. Local DB Setup

_(diabatmod.f90:1805)_

Fortran

```Fortran
if (ldbsmall) then
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

This builds a local array of database record IDs. In this routine, `loc` is not heavily used afterwards; the actual DB model read is done by `dddb_rd`, which already knows whether local DB mode is active. The above translation from linked list to array is the same logic as it was done in `dddb_rd_gp`.

### 4. Predict The Diabatic Model At The New Point

_(diabatmod.f90:1823)_

Fortran

```Fortran
call dddb_rd(v0,deriv1,deriv2,tmpdip,xgpoint,.false.,.false.,lforce)
```

Which returns the guess (what the existing diabatic model predicts at `xgpoint` either shepard or interpolation):

- `v0` = predicted diabatic potential
    
- `deriv1` = predicted diabatic first derivatives
    
- `deriv2` = predicted diabatic Hessians
    

_Note:_ `deriv1` and `deriv2` are output arguments of `diabat4_2`, but at this stage they are temporarily being used to hold the DB prediction.

### 5. Diagonalize Predicted Diabatic Matrix

_(diabatmod.f90:1834)_

Fortran

```Fortran
trans0 = 0.0_dop
av0 = 0.0_dop
```

Then for each spin block, the code copies the relevant block of `v0` into `transtmp`:

Fortran

```Fortran
do idx=1,nsmult
 allocate(transtmp(imultblk(idx),imultblk(idx)))
```

_(Where `imultblk` is the number of states in each spin block, while `nsmult` is the number of different multiplicities present)._

And diagonalizes it:

Fortran

```Fortran
call dsyev('V','U',imultblk(idx),transtmp,...,tmpe,...)
```

`dsyev` gives eigenvalues in `tmpe` and eigenvectors in `transtmp` of the real symmetric matrix.

**Flow:**

`v0` (diabatic matrix) $\rightarrow$ diagonalization $\rightarrow$ predicted adiabatic energies `av0` $\rightarrow$ predicted transformation `trans0`

The eigenvalues go into:

Fortran

```Fortran
av0(jdx+ldx,jdx+ldx) = tmpe(ldx)
```

Then:

Fortran

```Fortran
call trmatphase(transtmp,imultblk(idx))
```

fixes arbitrary eigenvector signs/phases so the transformation matrix has a consistent convention.

### 6. Add Spin-Orbit Couplings Back

_(diabatmod.f90:1874)_

Fortran

```Fortran
if (imultmap(si) .ne. imultmap(sf)) av0(sf,si) = v0(sf,si)
```

Inside each spin block, the model was diagonalized. Between different spin multiplicities, the code restores off-diagonal spin-orbit couplings from the diabatic model `v0`.

### 7. Build Predicted Adiabatic Derivative Matrix

_(diabatmod.f90:1883)_

Fortran

```Fortran
tmpderiv1(ldx,:,:) = matmul(deriv1(ldx,:,:),trans0)
call qqtxdd(trans0,tmpderiv1(ldx,:,:),aderiv10(ldx,:,:),nddstate)
```

`qqtxdd(A,B,C)` computes $C = A^T B$.

So this is doing:

$$\text{aderiv10}(q,:,:) = \text{trans0}^T \cdot \text{deriv1}(q,:,:) \cdot \text{trans0}$$

**Meaning:** Take the DB-predicted diabatic derivative matrix and project it into the predicted adiabatic basis. This gives a predicted version of the adiabatic gradients and off-diagonal coupling vectors. That prediction is later used to decide whether the actual QC `dercp` has the correct sign.

### 8. If QC Failed

_(diabatmod.f90:1893)_

Fortran

```Fortran
if (linterp0) then
```

If the QC calculation failed, the code cannot trust actual `av`, `aderiv1`, or `dercp`. So it uses the DB-predicted data instead:

Fortran

```
interp = -1
adttrans=trans0
call tranqxd(adttrans,nddstate)  ! which transposes S so it becomes C in C^TVC=W
av = av0
aderiv1 = 0.0_dop
```

Then it fills:

Fortran

```
aderiv1(:,i,i) = aderiv10(:,i,i)
dercp(:,pair) = aderiv10(:,i,j)
```

So in this branch, `dercp` is overwritten by the predicted coupling from the model. Then it calls `transform` and exits.

### 9. Compare Model vs Actual QC Energies

If QC did not fail, the routine compares predicted adiabatic energies `av0` against actual QC adiabatic energies `av`:

Fortran

```
diff0 = av0(idx,idx) - av(idx,idx)
```

This is just a diagnostic quality check: how wrong is the DB model at this new point?

### 10. Derivative Coupling Sign Alignment

_(diabatmod.f90:1942)_

Fortran

```
dotp = 0.0_dop
dcpover(:,:)=-999

! Then for each pair of states:
call normvxd(dercp(1,kdx),dotp2(kdx),ndofddpes)
call normvxd(aderiv10(1,idx,jdx),dotp3,ndofddpes)
call vvtxdd(dercp(1,kdx),aderiv10(1,idx,jdx),dotp1,ndofddpes)
dotp1 = dotp1/(dotp2(kdx)*dotp3)
```

This computes the normalized dot product:

$$\text{dotp1} = \cos(\theta)$$

_(Where $\theta$ is the angle between the actual QC `dercp` and predicted model coupling)._

Fortran

```
if (dotp1 .lt. 0.0) then
   dercp(:,kdx) = -dercp(:,kdx)
endif
```

If the actual derivative coupling points in the opposite direction to the model prediction, the routine flips its sign. This is not changing the physical coupling magnitude. It is fixing the arbitrary electronic phase/sign convention.

Then:

Fortran

```
if (abs(dotp2(kdx)) .lt. 0.0001 .and. abs(dotp3) .lt. 0.0001) then 
   ! both vectors tiny
   dcpover(idx,jdx)=0    
else if (dotp1 .gt. 0.866_dop) then   
   ! angle < 30deg
   dcpover(idx,jdx)=1    ! overlaps predicted
else
   dcpover(idx,jdx)=2    ! poor overlap to be checked
endif
```

So `dcpover=1` means the actual and predicted couplings agree within 30 degrees.

### 11. Intruder State Check

_(diabatmod.f90:2009)_

Fortran

```
lintruder(:) = .false.
jdx = nddstate
do idx = 1,nddstate-1
   if (dcpover(idx,jdx) .eq. 2) then
      lintruder(jdx) = .true.
   endif
enddo
```

This checks whether the highest state has poor coupling overlap with lower states. That can indicate an intruder-state problem.

### 12. Check Whether Diabatic States Have Swapped

_(diabatmod.f90:2033)_

The routine compares the ordering of diabatic diagonal energies at the nearest DB point against the predicted model at the new point.

It sorts `dbener(ldx,ldx,idbloc)` and stores the index in `diabidx1` (which is for the ordering of the diabatic model at the closest point `idbloc`).

It also sorts `v0(ldx,ldx)` and stores the index in `diabidx2` (which is the predicted diabatic model ordering at Q) using `ibubble_up`.

_Note on indexing:_

- `jdx` = the offset for spin blocks in accessing the right component from the `dbener` array.
    
- `idx` = loops over the number of spin multiplicity.
    
- `jdx = jdx + imutlblk(idx-1)` gives the offset needed to access the right index.
    
- `ldx = kdx + jdx` with `kdx = 1...imultblk(idx)` so `kdx` loops through all the states in each spin block `imultblk(idx)`.
    

If the order changes:

Fortran

```
if (diabidx1(idx) .ne. diabidx2(idx)) lflip = .true.
```

Then the code thinks a conical-intersection-like crossing / state flip may have happened.

It also sets `lflip` if actual adiabatic energies are extremely degenerate:

Fortran

```
if (abs(diff0) .lt. 1.0d-8) lflip = .true.
```

### 13. If States Flip

_(diabatmod.f90:2088)_

Fortran

```
if (lflip) then
   call optqvc(xgpoint,v0,av,aderiv1,dercp,adttrans,av1,idbloc)
endif
```

This branch avoids simple propagation of the transformation. Instead, it calls `optqvc`, which builds/optimizes a cubic vibronic-coupling-like model along the path so the transformation can handle the state swap better.

_Note:_ Even though `optqvc` declares `dercp` as `intent(inout)`, in the code shown it mainly reads it to build target derivative data. The obvious direct sign modifications happen earlier in `diabat4_2`.

### 14. If States Do Not Flip

_(diabatmod.f90:2106)_

Fortran

```
nstep = 20
transtmp = dbtrans(:,:,idbloc)
```

The routine starts from the transformation stored at the nearest DB point. It constructs the path (line 2081):

Fortran

```
intvec = xgpoint - dbgeo(:,idbloc)
steplength = norm(intvec)
nintvec = intvec/steplength
```

Then:

Fortran

```
call intengap4(intvec,exppar,nacpar,itpdcp0,itpdcp,&
  dbadener(1:ns,1:ns,idbloc),&
  dbadgrad(1:nd,1:ns,1:ns,idbloc),&
  dbdercp(1:nd,1:nactdim,idbloc),&
  av(1:ns,1:ns),aderiv1(1:nd,1:ns,1:ns),&
  dercp(1:nd,1:nactdim),steplength)
```

This sets up a 1D interpolation along this path. `intengap4` does two main things:

1. Projects NAC/derivative coupling vectors onto the path direction.
    
2. Builds cubic interpolation parameters for adiabatic energy gaps.
    

Then the code integrates the coupling along the path using a trapezoidal rule:

Fortran

```Fortran
sumint1d = itpdcp0
do istep = 1, nstep-1
  x = x + ddelx
  call stepnact4(x,nac,exppar,nacpar)
  sumint1d = sumint1d + 2.0_dop * nac
enddo
sumint1d = sumint1d + itpdcp
integral = 0.5 * sumint1d * ddelx
```

Mathematically:

$$\text{integral(pair)} \approx \int \text{NAC}_{\text{pair}}(x) \, dx$$

along the straight line from the DB point to `xgpoint`.

Then:

Fortran

```
call propadt(integral,transtmp,adttrans)
```

This uses that integrated coupling to propagate the ADT transformation matrix from the old DB point to the new geometry.

### 15. Final Transform

_(diabatmod.f90:2153)_

Fortran

```
call transform(adttrans,av,aderiv1,aderiv2,v,deriv1,deriv2,dercp,...)
```

This is where actual QC adiabatic data becomes final diabatic data.

Inside `transform`, the potential is transformed as:

$$v = \text{adttrans}^T \cdot \text{av} \cdot \text{adttrans}$$

And each first derivative matrix is transformed similarly, after inserting:

- `diagonal terms` = adiabatic gradients
    
- `off-diagonal terms` = `dercp` coupling vectors
    

So `dercp` affects the final diabatic first derivatives through `transform`.

---

## Very Important Takeaway

> **`diabat4_2` does not compute the final diabatic PES only from the DB model.**

Instead:

1. **DB model is used as a guide:** to predict signs, to predict state ordering, and to propagate the transformation.
    
2. **Actual QC data is then transformed:** `av, aderiv1, aderiv2, dercp` $\rightarrow$ `v, deriv1, deriv2`.
    

So the DB model is like a **“phase/order/continuity compass,”** while the actual QC calculation supplies the final local adiabatic data, unless QC failed.

---

