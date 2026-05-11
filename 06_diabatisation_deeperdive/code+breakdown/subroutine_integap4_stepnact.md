# 1D Construction Routine for ADT Propagation

This routine performs a very specific 1D construction to integrate the coupling for ADT propagation. The process follows these steps:

1. **Take adiabatic data** at the old DB point and the current QC point.
    
2. **Project vector quantities** onto the straight path between them.
    
3. **Build a smooth 1D interpolation** along that path.
    
4. **Use that interpolation** to integrate the coupling for ADT propagation.
    

The routine starts at `diabatmod.f90` (line 2733).

---

## Where It Is Called

In `diabat4_2` and `diabat4_3`, it is called only in the branch where states have **not** flipped (e.g., `diabatmod.f90`, line 2586):

Fortran

``` Fortran
call intengap4(intvec,exppar,nacpar,itpdcp0,itpdcp,&
               dbadener(:,:,idbloc),&
               dbadgrad(:,:,:,idbloc),&
               dbdercp(:,:,idbloc),&
               av,aderiv1,dercp,steplength)
```

There are two endpoints defining the path:

- $x = 0$: old database point `idbloc`
    
- $x = \text{steplength}$: current geometry `xgpoint`
    

### State Diagram

Plaintext

``` Fortran
old DB point                              current QC point
x = 0                                     x = L
dbadener, dbadgrad, dbdercp   ----->      av, aderiv1, dercp
```

_(Where $L = \text{steplength}$)_

---

## Are These Adiabatic Or Diabatic?

**Everything passed into `intengap4` is adiabatic-side data.** The routine is **not** working with diabatic `dbener`, `dbgrad`, or `dbhess`.

**Old/Start Point ($x=0$):**

Fortran

```Fortran
aden0   = dbadener(:,:,idbloc)
adgrad0 = dbadgrad(:,:,:,idbloc)
nac0    = dbdercp(:,:,idbloc)
```

These are the stored adiabatic energies, adiabatic gradients, and coupling vectors at the nearest database point.

**New/End Point ($x=L$):**

Fortran

```Fortran
aden   = av
adgrad = aderiv1
nac    = dercp
```

These are the current QC adiabatic energies, gradients, and coupling vectors at `xgpoint`, after any sign-alignment logic.

---

## Dimensions and Variables

Let:

- $N = \text{ndofddpes}$
    
- $S = \text{nddstate}$
    
- $P = \text{nactdim}$
    

Usually, $P = S(S-1)/2$ because there is one coupling vector for each unique state pair. For a pair $(s, s1)$ with $s < s1$, the pair index is:

Fortran

```Fortran
idx = (s1-1)*(s1-2)/2+s
```

### Inputs

- `intvec(N)`: Vector from old DB geometry to current geometry. $\vec{\text{intvec}} = \text{xgpoint} - \text{dbgeo(:,idbloc)}$
    
- `steplength`: Length of that vector. $L = |\vec{\text{intvec}}|$
    
- `aden0(S,S)`: Adiabatic energy matrix at old DB point. Mostly diagonal: $\text{aden0}(s,s) = E_s(0)$
    
- `aden(S,S)`: Adiabatic energy matrix at current point: $\text{aden}(s,s) = E_s(L)$
    
- `adgrad0(N,S,S)`: Adiabatic gradients at old DB point: $\text{adgrad0}(:,s,s) = \nabla E_s(0)$
    
- `adgrad(N,S,S)`: Adiabatic gradients at current point.
    
- `nac0(N,P)`: Coupling vector for each pair at old DB point.
    
- `nac(N,P)`: Coupling vector for each pair at current point.
    

### Outputs

- `exppar(4,S)`: Cubic energy interpolation coefficients for each state.
    
- `nacpar(2,P)`: Linear interpolation coefficients for the projected coupling numerator for each pair.
    
- `itpdcp0(P)`, `itpdcp(P)`: Endpoint scalar couplings after projection and energy-gap division. These are later used as the first and last points in the trapezoidal integration.
    

---

## Path Direction & Projection

The routine creates a unit vector along the path:

Fortran

```Fortran
nintvec = intvec/steplength
```

$$\hat{n} = \frac{\vec{\text{intvec}}}{|\vec{\text{intvec}}|}$$

Any vector $\vec{A}$ can be projected along the path via the dot product: 
$$A_{\parallel} = \vec{A} \cdot \hat{n}$$. That is exactly what the `vvtxdd` subroutine does.

### Projecting the Coupling Vector

For each state pair `(s,s1)`:

Fortran

```
call vvtxdd(nac0(1,idx),nintvec,itpdcp0(idx),ndofddpes)
call vvtxdd(nac(1,idx),nintvec,itpdcp(idx),ndofddpes)
```

This computes:

$$\text{itpdcp0(idx)} = \vec{\text{nac0}}_{\text{pair}} \cdot \hat{n}$$

$$\text{itpdcp(idx)} = \vec{\text{nac}}_{\text{pair}} \cdot \hat{n}$$

The full $N$-dimensional coupling vector becomes a **single scalar along the path**. This is critical because the later ADT propagation integrates along a 1D path and needs the coupling along the path direction, not the full vector.

---

## Why `nacpar` Has Two Rows

This explains the specific linear interpolation logic:

Fortran

``` Fortran
nacpar(1,idx) = itpdcp0(idx)
nacpar(2,idx) = (itpdcp(idx) - itpdcp0(idx)) / steplength
```

The code builds a **linear interpolation** for the projected coupling numerator. For each pair, let $N_{ij}(x)$ be the projected coupling numerator along the path.

The code models this as a line:

$$N_{ij}(x) = a + bx$$

We know the values at both endpoints ($x=0$ and $x=L$):

- $N_{ij}(0) = N_0 = \text{itpdcp0(idx)}$ (before gap division)
    
- $N_{ij}(L) = N_1 = \text{itpdcp(idx)}$ (before gap division)
    

Solving for the line parameters:

- **Intercept ($a$):** $N_0$
    
- **Slope ($b$):** $\frac{N_1 - N_0}{L}$
    

This perfectly maps to the Fortran array:

Fortran

```Fortran
nacpar(1,idx) = N0      ! intercept
nacpar(2,idx) = slope   ! slope
```

This is why `nacpar` has dimensions `(2, nactdim)`. The first dimension stores the two coefficients of the line, and the second dimension selects the state pair.

Later, for any point $x$ along the path (in `stepnact4`, line 2832):

Fortran

```Fortran
stnac(idx) = nacpar(1,idx) + nacpar(2,idx)*x
```

---

## Energy Gap Division

After building `nacpar`, the routine prevents division by zero near degeneracies using a numerical safeguard (`max(ediff, 1.0d-8)`), and divides the projected couplings by the energy gap:

Fortran

``` Fortran
  do s=1,nddstate-1
	 do s1=s+1,nddstate
		idx = (s1-1)*(s1-2)/2+s
		ediff=aden0(s1,s1) - aden0(s,s)
		ediff=max(ediff,1.0d-8)
		itpdcp0(idx) = itpdcp0(idx)/ediff
		ediff=aden(s1,s1) - aden(s,s)
		ediff=max(ediff,1.0d-8)
		itpdcp(idx) = itpdcp(idx)/ediff

	 enddo
  enddo
```

_(and similarly for `itpdcp(idx)` at the current point)_

After this point:

- $\text{itpdcp0} = \frac{\text{projected coupling}}{\text{energy gap at } x=0}$
    
- $\text{itpdcp} = \frac{\text{projected coupling}}{\text{energy gap at } x=L}$
    

**Important Detail Regarding Order of Operations:**

Notice that `nacpar` is built _before_ `itpdcp0` / `itpdcp` are divided by the energy gap. Therefore, `nacpar` stores the interpolation of the projected coupling _numerator_, not the final divided quantity.

At interior points, `stepnact4` computes:

$$\text{coupling}(x) = \frac{\text{interpolated numerator}(x)}{\text{interpolated energy gap}(x)}$$

This division of two interpolated functions is more flexible and accurate than simply linearly interpolating the final divided quantity directly.

---

## Cubic Energy Interpolation

The routine builds a cubic adiabatic energy + gradient interpolation for each state $s$:

$$
\begin{align}
E_s(x) &= a + bx + cx^2 + dx^3
\\ E'_s&=b+2cx+3dx^2
\end{align}$$

This requires four constraints:

1. $E_s(0) = \text{old DB energy}$
    
2. $E'_s(0) = \text{old DB energy gradient projected along path}$
    
3. $E_s(L) = \text{current QC energy}$
    
4. $E'_s(L) = \text{current QC energy gradient projected along path}$
    

**Solving the Coefficients:**

- `exppar(1,s)` $\rightarrow a = E_s(0)$
    
- `exppar(2,s)` $\rightarrow b = E'_s(0) = \nabla E_s(0) \cdot \hat{n}$
    

To find $c$ and $d$, the code defines:

$$a_{\text{end}} = E_s(L) - a - bL$$

$$b_{\text{end}} = E'_s(L) - b$$

Which yields a system of two equations:

$$cL^2 + dL^3 = a_{\text{end}}$$

$$2cL + 3dL^2 = b_{\text{end}}$$

The routine solves this system and stores $c$ in `exppar(3,s)` and $d$ in `exppar(4,s)`.

### Reconstruction in `stepnact4`

For a chosen intermediate path coordinate $x$, `stepnact4` reconstructs the interpolated energy:

Fortran

```
sten(s) = exppar(1,s) + exppar(2,s)*x
sten(s) = sten(s) + exppar(3,s)*(x**2)
sten(s) = sten(s) + exppar(4,s)*(x**3)
```

$$\text{sten}(s) = E_s(x)$$

Then for each pair:

Fortran

```
stnac(idx) = nacpar(1,idx) + nacpar(2,idx)*x
stnac(idx) = stnac(idx)/(sten(s1) - sten(s))
```

Which equates to:

$$\text{stnac(idx)} = \frac{\text{interpolated projected coupling numerator}}{\text{interpolated adiabatic energy gap}}$$

---

## Integration for ADT Propagation

Back in `diabat4_2`/`diabat4_3`, the code performs a trapezoidal integration over the path:

Fortran

```
sumint1d = itpdcp0
...
sumint1d = sumint1d + 2.0_dop * nac
...
sumint1d = sumint1d + itpdcp
integral = 0.5_dop * sumint1d * ddelx
```

Mathematically, this evaluates:

$$\text{integral}_{ij} \approx \int_0^L F_{ij}(x) \, dx$$

Where:

$$F_{ij}(x) = \frac{\text{projected coupling numerator}_{ij}(x)}{E_j(x) - E_i(x)}$$

Finally, `call propadt(integral,transtmp,adttrans)` uses those integrated scalar couplings to propagate the ADT matrix.

---

## Summary: Why `nacpar` has two rows

The initialization:

Fortran

```
nacpar(1,idx) = itpdcp0(idx)
nacpar(2,idx) = (itpdcp(idx) - itpdcp0(idx)) / steplength
```

Means: For pair `idx`, store the two coefficients of a straight line representing the coupling numerator:

$$\text{coupling\_numerator}(x) = \text{intercept} + \text{slope} \cdot x$$

- `nacpar(1, ...)` = **starting value** (intercept)
    
- `nacpar(2, ...)` = **slope** (change from old DB to current point / path length)