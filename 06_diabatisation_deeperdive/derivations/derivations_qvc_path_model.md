# One-dimensional cubic path model used by `optqvc`

## Purpose

The routine `optqvc` uses a one-dimensional diabatic model as a fallback when the usual propagated-ADT branch is considered unreliable. The model is not a full multidimensional QVC Hamiltonian. It is a path-local construction along the straight line from a selected database geometry $R_0$ to the current geometry $\Rv$.

Let

$$
\Delta \Rv = \Rv-\Rv_0,
\qquad
L = |\Delta \Rv|,
\qquad
\hat n = \frac{\Delta \Rv}{L}.
$$

The path coordinate is

$$
x\in[0,L],
\qquad
\Rv(x)=\Rv_0+x\hat n.
$$

## Cubic diabatic model

The model used in the code is

$$
\mat V_d(x)
=\mat A+\mat Bx+\mat C_{\mathrm{code}}x^2+\mat Kx^3,
$$

where $\mat A$, $\mat B$, $\mat C_{\mathrm{code}}$, and $\mat K$ are real symmetric matrices in the retained electronic-state space.

The standard multidimensional Taylor expansion of a potential $V$ around a reference point $\Rv$ is:

$$ V(\Rv + \Delta\Rv) = V(\Rv) + \vec{g}^T \Delta\Rv+ \frac{1}{2} \Delta\vec{x}^T \mathbf{H} \Delta\Rv+ \dots $$

If we substitute $\Delta\Rv= x \hat{n}$ into this equation, we can factor out the scalar distance $x$:

$$ V(x) = V(\Rv) + \vec{g}^T (x \mat{\hat{n}}) + \frac{1}{2} (x \mat{\hat{n}})^T \mathbf{H} (x \mat{\hat{n}}) + \dots $$

$$ V(x) = V(\Rv) + (\vec{g} \cdot \mat{\hat{n}})x + \left(\frac{1}{2} \mat{\hat{n}}^T \mathbf{H} \mat{\hat{n}}\right)x^2 + \dots $$


The database point fixes

$$
\mat A = \mat V_d(\Rv_0),
$$

$$
B_{ij}
=\hat n\cdot \nabla V_{d,ij}(\Rv_0),
$$

and, in the code convention,

$$
C_{\mathrm{code},ij}
=\hat n^T
\mat H_{d,ij}(\Rv_0)
\hat n.
$$

The code then uses $C_{\mathrm{code},ij}x^2$ directly. If $\mat H_{d,ij}$ is the literal Hessian, this differs from the standard Taylor coefficient $\frac12\hat n^T\mat H_{d,ij}\hat n$. This page follows the code convention.

Only the cubic matrix $\mat K$ is optimised.

## Endpoint model quantities

At the current geometry $x=L$, the model gives

$$
\mat V_d(L)
=\mat A+\mat BL+\mat C_{\mathrm{code}}L^2+\mat KL^3
$$

and

$$
\mat V'_d(L)
=\mat B+2\mat C_{\mathrm{code}}L+3\mat K L^2.
$$

The model adiabatic energies and eigenvectors are obtained by diagonalising $\mat V_d(L)$:

$$
\mat S^T\mat V_d(L)\mat S
=\operatorname{diag}
\left(
E^{\mathrm{model}}_1,\ldots,E^{\mathrm{model}}_N
\right).
$$

The corresponding projected derivative matrix in the model adiabatic basis is

$$
\mat G^{(a),\mathrm{model}}
=\mat S^T\mat V'_d(L)\mat S.
$$

## Endpoint target derivative matrix

The target endpoint derivative matrix has diagonal elements

$$
G^{(a),\mathrm{target}}_{ii}
=\nabla E_i(\Rv)\cdot\hat n
$$

and off-diagonal elements

$$
G^{(a),\mathrm{target}}_{ij}
=\mathcal D_{ij}(\Rv)\cdot\hat n,
\qquad i\ne j,
$$

where

$$
\mathcal D_{ij}
=\mel{\psi_i}{\nabla\hat H_{\mathrm{el}}}{\psi_j}
$$

is the derivative-coupling numerator. For non-degenerate states,

$$
\mat F_{ij}
=\frac{\mathcal D_{ij}}{E_j-E_i}
$$

is the NACV. Thus $\mathcal D_{ij}$ is symmetric for real states, while the NACV is antisymmetric. The `optqvc` objective compares against the symmetric numerator-like object, not directly against the gap-divided NACV.

## Objective function

The optimised cubic matrix $\mat K$ minimises the endpoint mismatch

$$
\epsilon(\mat K)
=\left[
\sum_i
\left(
E_i^{\mathrm{model}}-E_i^{\mathrm{target}}
\right)^2
+\sum_{i\le j}
\left(
G^{(a),\mathrm{model}}_{ij}
-G^{(a),\mathrm{target}}_{ij}
\right)^2
\right]^{1/2}.
$$

The code uses this mixed energy-plus-derivative error directly, without an explicit weighting matrix. This is an implementation choice rather than a dimensionless least-squares norm.