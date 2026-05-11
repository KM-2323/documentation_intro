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
\mat \W(x)
=\mat A+\mat Bx+\mat C_{\mathrm{code}}x^2+\mat Kx^3,
$$

where $\mat A$, $\mat B$, $\mat C_{\mathrm{code}}$, and $\mat K$ are real symmetric matrices in the retained electronic-state space and $\W$ is the diabatic potential matrix.

The standard multidimensional Taylor expansion of a potential $V$ around a reference point $\Rv$ is:

$$ V(\Rv + \Delta\Rv) = V(\Rv) + \vec{g}^T \Delta\Rv+ \frac{1}{2} \Delta\vec{x}^T \mathbf{H} \Delta\Rv+ \dots $$

If we substitute $\Delta\Rv= x \hat{n}$ into this equation, we can factor out the scalar distance $x$:

$$ V(x) = V(\Rv) + \vec{g}^T (x \mat{\hat{n}}) + \frac{1}{2} (x \mat{\hat{n}})^T \mathbf{H} (x \mat{\hat{n}}) + \dots $$

$$ V(x) = V(\Rv) + (\vec{g} \cdot \mat{\hat{n}})x + \left(\frac{1}{2} \mat{\hat{n}}^T \mathbf{H} \mat{\hat{n}}\right)x^2 + \dots $$


The database point fixes

$$
\mat A = \W(\Rv_0),
$$

$$
\mat B_{ij}
=\hat n\cdot \Gdiab_{ij}(\Rv_0),
$$

and, in the code convention,

$$
\mat C_{\mathrm{code},ij}
=\hat n^T
\mat H_{d,ij}(\Rv_0)
\hat n.
$$

The code then uses $\mat C_{\mathrm{code},ij}x^2$ directly. If $\mat H_{d,ij}$ is the literal Hessian, this differs from the standard Taylor coefficient $\frac12\hat n^T\mat H_{d,ij}\hat n$. This page follows the code convention.

Only the cubic matrix $\mat K$ is optimised.

## Endpoint model quantities

At the current geometry $x=L$, the model gives

$$
\mat \W(L)
=\mat A+\mat BL+\mat C_{\mathrm{code}}L^2+\mat KL^3
$$

and

$$
\W'(L)
=\mat B+2\mat C_{\mathrm{code}}L+3\mat K L^2.
$$

The model adiabatic energies and eigenvectors are obtained by diagonalising $\mat \W(L)$:

$$
\mat S^T\mat \W(L)\mat S
=\operatorname{diag}
\left(
V^{\mathrm{model}}_1,\ldots,V^{\mathrm{model}}_N
\right).
$$

The corresponding projected derivative matrix in the model adiabatic basis is

$$
\mat G^{(a),\mathrm{model}}
=\mat S^T\W'(L)\mat S.
$$

## Endpoint target derivative matrix

The target endpoint derivative matrix has diagonal elements

$$
\Gmat^{(a),\mathrm{target}}_{ii}
=\Gadiab_{ii}(\Rv)\cdot\hat n
$$

and off-diagonal elements

$$
\Gmat^{(a),\mathrm{target}}_{ij}
= \D_{ij}(\Rv)\cdot\hat n,
\qquad i\ne j,
$$

where

$$
\D_{ij}
=\mel{\psi_i}{\nabla\hat H_{\mathrm{el}}}{\psi_j}
$$

is the derivative-coupling numerator. For non-degenerate states,

$$
\mat F_{ij}
=\frac{\D_{ij}}{V_j-V_i}
$$

is the NACV. Thus $\D_{ij}$ is symmetric for real states, while the NACV is antisymmetric. The `optqvc` objective compares against the symmetric numerator-like object, not directly against the gap-divided NACV.

## Objective function

The optimised cubic matrix $\mat K$ minimises the endpoint mismatch

$$
\epsilon(\mat K)
=\left[
\sum_i
\left(
V_i^{\mathrm{model}}-V_i^{\mathrm{target}}
\right)^2
+\sum_{i\le j}
\left(
G^{(a),\mathrm{model}}_{ij}
-G^{(a),\mathrm{target}}_{ij}
\right)^2
\right]^{1/2}.
$$

The code uses this mixed energy-plus-derivative error directly, without an explicit weighting matrix. This is an implementation choice rather than a dimensionless least-squares norm.