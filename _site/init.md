# Cubic Diabatic Model Optimization Walkthrough (`optqvc`)

**Goal:**

`optqvc` builds a **1D cubic diabatic model** along the straight line from an old database point to the current geometry. It then optimizes the cubic terms so that, at the current geometry, the model reproduces the actual QC adiabatic energies and projected derivative data.

Instead of simply propagating the ADT matrix by integrating NACs, it says: _Let me build a local diabatic Hamiltonian along this path, fit it to the new QC data, then diagonalize it to get a better transformation matrix._

This is used when `diabat4_2` detected `lflip = .true.`.

---

## Inputs / Outputs

**The routine signature is:**

Fortran

```
subroutine optqvc(xgpoint,v,av,aderiv1,dercp,adttrans,av1,idbloc)
```

**Important Inputs:**

- `xgpoint(ndofddpes)`: Current geometry.
    
- `idbloc`: Database record used as the starting point (which is the closest point index in the full DB).
    
- `av(nddstate,nddstate)`: Actual QC adiabatic energy matrix at `xgpoint`. _(Note: in `diabat4_2` `av = v0` which is the guess diabatic energy at the new point)._
    
- `aderiv1(ndofddpes,nddstate,nddstate)`: Actual QC adiabatic gradients.
    
- `dercp(ndofddpes,nactdim)`: Actual derivative coupling / off-diagonal derivative vectors. In this routine, it is **read**, not visibly modified.
    

**Outputs:**

- `v(nddstate,nddstate)`: Optimized diabatic model matrix evaluated at `xgpoint`.
    
- `adttrans(nddstate,nddstate)`: Transformation matrix produced by diagonalizing the optimized model.
    
- `av1(nddstate)`: Adiabatic eigenvalues of the optimized model at `xgpoint`.
    

_Note:_ One slightly confusing thing is that `v` is declared `intent(inout)`, but in the code shown it is not really used as an input. It gets overwritten with the optimized model at the end.

---

## The 1D Coordinate

First, the code defines a straight path from the old DB geometry to the new point:

Fortran

```
intvec = xgpoint-dbgeo(1:ndofddpes,idbloc)
call normvxd(intvec,steplength,ndofddpes)
nintvec = intvec / steplength
```

Mathematically:

$$R_0 = \text{dbgeo}(:,\text{idbloc})$$

$$R = \text{xgpoint}$$

$$\Delta R = R - R_0$$

$$L = |\Delta R|$$

$$\hat{n} = \frac{\Delta R}{L}$$

---

## Target Data

The target adiabatic energies are stored in:

- `hadv(s) = av(s,s)`: actual QC energy of state $s$ at `xgpoint`
    

Then the routine projects gradients and couplings onto the path direction `nintvec`.

**For diagonal terms:**

Fortran

```
call vvtxdd(aderiv1(:,s,s),nintvec,deriv1a(s,s),ndofddpes)
```

This computes: $\text{hadd}_{ss} = \nabla E_s \cdot \hat{n}$ and stores it in `deriv1a(s,s)`. So it is the derivative of adiabatic energy state $s$ along the path.

**For off-diagonal terms:**

Fortran

```
call vvtxdd(dercp(:,idx),nintvec,deriv1a(s1,s),ndofddpes)
```

This computes: $\text{hadd}_{s1,s} = \text{dercp}_{\text{pair}} \cdot \hat{n}$

Then:

Fortran

```
do s=1,nddstate
  hadd(s,s) = deriv1a(s,s)
  do s1 = s+1,nddstate
    hadd(s1,s) = deriv1a(s1,s)
    hadd(s,s1) = hadd(s1,s)
  enddo
enddo
```

So `hadd` becomes the target endpoint derivative matrix in the adiabatic representation:

**`hadd` = target projected adiabatic derivative matrix at $x = L$**

---

## The Cubic Diabatic Model

This is the key model:

$$V_d(x) = A + Bx + Cx^2 + Dx^3$$

where each of $A$, $B$, $C$, and $D$ is an $S \times S$ matrix. The code fixes $A$, $B$, and $C$ from the old database point.

**Matrix A:**

Fortran

```
a(1:nddstate,1:nddstate) = dbener(1:nddstate,1:nddstate,idbloc)
```

So: $A_{ij}$ = diabatic potential at the old closest DB point.

**Matrix B:**

Fortran

```
call vvtxdd(dbgrad(1:ndofddpes,s,s,idbloc),nintvec,b(s,s),ndofddpes)
```

i.e., $b_{ij} = \text{dbgrad}(:,i,j,\text{idbloc}) \cdot \hat{n}$

So: $B_{ij}$ = directional first derivative of diabatic matrix element $ij$.

**Matrix C:**

Fortran

```
call qvxxdd(dbhess(1:ndofddpes,1:ndofddpes,s,s,idbloc),nintvec,tmpvec,ndofddpes)
! (Multiplication of a real quadratic matrix with a real vector a(i,j) * v(j)=w(i), for qvxxdd a,v,w)

call vvtxdd(nintvec,tmpvec,c(s,s),ndofddpes)
```

$c_{ij} = \hat{n}^T \cdot \text{dbhess}(:,:,i,j,\text{idbloc}) \cdot \hat{n}$

So: $C_{ij}$ = projected Hessian along the path.

_Important detail:_ In this code, $C$ is used directly as the coefficient of $x^2$:

$$V_d(x) = A + Bx + Cx^2 + Dx^3$$

That differs from the textbook Taylor form ($A + Bx + \frac{1}{2}Hx^2$). So either this is a local convention in this QVC fitting step, or it is a factor to be aware of when comparing against `shiftdd`, which explicitly uses $0.5 \times \text{Hessian}$.

Then:

Fortran

```
diva = a
divb = b
divc = c
```

These are saved as module-level arrays because the optimizer callback `qvcerr(qvcpar)` can only receive the parameter vector, not all this extra context.

---

## What Gets Optimized

**Only the cubic matrix $D$ is optimized.**

The number of independent parameters is:

Fortran

```
nqvcpar = nddstate*(nddstate-1)/2
nqvcpar = nqvcpar + nddstate
```

So: $nqvcpar = S(S+1)/2$. That is the number of independent elements in a symmetric $S \times S$ matrix.

For $S = 3$, the packed parameter vector is (how it orders inside subroutine `cppar2qvc`):

`qvcpar = [d11, d21, d31, d22, d32, d33]`

This packing is done by `cppar2qvc`, and unpacking is done by `cpqvc2par`.

**Initial guess:**

Fortran

```
d(:,:) = 0.0
```

So the starting model is just $V_d(x) = A + Bx + Cx^2$, and then the optimizer adjusts $D$.

---

## The Objective Function (`qvcerr`)

The optimizer minimizes `qvcerr(qvcpar)`, defined at `diabatmod.f90:3942`. Just to repeat, it is using diabatic information from the closest point and doing a sort of small step size prediction in the next point.

Given a trial cubic matrix $D$, it evaluates the diabatic model at the endpoint $x = L$:

$$V_d(L) = A + BL + CL^2 + DL^3$$

and its path derivative:

$$\text{deriv1d} = V'_d(L) = B + 2CL + 3DL^2$$

Then it diagonalizes $V_d(L)$. _(Note it needs to do the loop of:_

Fortran

```
jdx=0
do idx=1,nsmult
    allocate(transtmp(imultblk(idx),imultblk(idx)))
                        
    ! jdx is offset for spin blocks in Hamiltonian matrix
    if (idx .gt. 1) jdx = jdx+imultblk(idx-1)

    do kdx = 1,imultblk(idx)
        do ldx = 1,imultblk(idx)                   
           transtmp(ldx,kdx) = v(jdx+ldx,jdx+kdx)
        enddo
    enddo
```

Fortran

```
    call dsyev('V','U',imultblk(idx),transtmp,imultblk(idx),tmpe,work,3*imultblk(idx),info)
```

This gives:

$$S^T V_d(L) S = \text{diagonal adiabatic energies}$$

which are saved as: `av(jdx+kdx) = tmpe(kdx)`. The eigenvalues are the model-predicted adiabatic energies.

Then it transforms the derivative matrix into the adiabatic basis:

$$\text{deriv1a} = S^T V'_d(L) S$$

**The error is:**

$$\text{error}(D) = \sqrt{\sum_s \left[ E_{\text{model}, s} - E_{\text{QC}, s} \right]^2 + \sum_{i \le j} \left[ D_{\text{model}, ij} - D_{\text{QC}, ij} \right]^2}$$

In code, the adiabatic energy error is calculated by comparing the transformed diabatic model at the new point against target adiabatic energy actually calculated:

Fortran

```
diffe = av(s) - hadv(s)
err1 = err1 + diffe*diffe
```

And for projected derivative data:

Fortran

```
diffe = deriv1a(s1,s) - hadd(s1,s)
err2 = err2 + diffe*diffe
```

So the cubic coefficients are chosen to make the endpoint model reproduce both:

1. Actual adiabatic energies
    
2. Actual projected adiabatic gradient/coupling matrix
    

---

## Optimization

At `diabatmod.f90:3815`:

Fortran

```
iter = 40
tol = 1.0d-6
qvclength = steplength  ! the length of our vector
fret=qvcerr(qvcpar)     ! this calls the function qvcerr that does what is described above

call frprmn(qvcpar,nqvcpar,tol,iter,fret,qvcerr,dqvcerr,&
           ilog,0.0_dop,0)
```

`frprmn` is a conjugate-gradient optimizer. The gradient `dqvcerr` is computed numerically using finite differences:

Fortran

```
dqvcpar(n)=numder1(qvcerr,qvcpar,nqvcpar,n,work,macheps,h)
```

So this is not using an analytic derivative of the fit error. It repeatedly perturbs each cubic coefficient, evaluates `qvcerr`, and estimates the gradient.

---

## After Optimization

After the optimizer finishes:

Fortran

```
call cpqvc2par(qvcpar,d)
```

unpacks the optimized cubic coefficients.

Then the routine evaluates the final optimized diabatic matrix at $x = L$:

Fortran

```
v = a + b*L + c*L**2 + d*L**3
```

That final `v` is the optimized diabatic Hamiltonian at the new point.

Then it diagonalizes this final `v` again, block by block in spin multiplicity:

Fortran

```
call dsyev('V','U',imultblk(idx),transtmp,imultblk(idx),tmpe,work,&
           3*imultblk(idx),info)
! set phases on trafo matrix vectors
call trmatphase(transtmp,imultblk(idx))
```

`trmatphase` fixes arbitrary eigenvector signs so the transformation is more consistent. The eigenvectors are stored into `adttrans`, and then:

Fortran

```
call tranqxd(adttrans,nddstate)
```

transposes the matrix before returning it. This is because the later `transform` routine expects the matrix in the orientation needed for:

$$V_{\text{diabatic}} = S W_{\text{adiabatic}} S^T = C^T V_{\text{adiabatic}} C$$

_(when used in transform)._

---

## Why This Helps When States Flip

When states swap order, a simple NAC integration can become unreliable because the identity of “state 1” and “state 2” changes along the path. `optqvc` instead builds a diabatic model that can naturally represent crossings or avoided crossings.

It asks: _Can I choose cubic diabatic terms so that, when I diagonalize this model at the new geometry, I reproduce the actual QC energies and derivatives?_

That gives a more robust transformation matrix in a flip/crossing region.

---

## Important Takeaways

- `optqvc` is not a full multidimensional QVC fit. It is a **1D path model** between one DB point and the current geometry.
    
- The model is $V_d(x) = A + Bx + Cx^2 + Dx^3$, where $A$, $B$, and $C$ come from the old DB point, and only $D$ is optimized.
    
- `dercp` is used as target endpoint derivative/coupling information, but this routine does not visibly flip or overwrite it.
    
- The final product used by `diabat4_2` is mainly `adttrans`, because after `optqvc` returns, `diabat4_2` calls `transform(...)` to transform the actual QC adiabatic data into final diabatic data.
    
- **Implementation Caveat:** `qvcerr` mixes energy errors and derivative/coupling errors directly in one unweighted square-root error. That is exactly what the code does, but it is worth remembering when interpreting the fit quality.
