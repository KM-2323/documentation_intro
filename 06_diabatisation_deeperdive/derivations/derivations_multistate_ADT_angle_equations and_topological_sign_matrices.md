# Derivation: multistate ADT angle equations and topological sign matrices

This derivation supports [Multistate topology, signs, and degeneracies](../specialised_propagation_diabatisation_deepdive/spec08_multistate_topology_signs.md).

The purpose is to show explicitly how the multistate ADT equation leads to coupled angle equations, and how the endpoint values of those angles determine the diagonal sign structure of the topological matrix.

The worked two-state, three-state, and four-state model examples are treated separately. Here the focus is on the general derivational machinery behind the main multistate topology page.

---

## 1. Path form of the ADT equation

The ADT equation is

$$
\begin{align}
\nabla\Cmat+\F\Cmat=0.
\label{eq:adt_full_multistate_derivation}
\end{align}
$$

Along a parametrised path $\mat q(s)$, the gradient becomes a directional derivative. Define

$$
\begin{align}
\mat F_s(s)
=
\F(\mat q(s))\cdot
\frac{d\mat q}{ds}.
\label{eq:path_contracted_F}
\end{align}
$$

Then Eq. $\eqref{eq:adt_full_multistate_derivation}$ becomes

$$
\begin{align}
\frac{d\Cmat}{ds}
=
-\mat F_s(s)\Cmat(s).
\label{eq:path_adt_ode}
\end{align}
$$

For real electronic functions, the nonadiabatic coupling matrix is antisymmetric. Therefore the path-contracted matrix satisfies

$$
\begin{align}
\mat F_s^T=-\mat F_s.
\end{align}
$$

For an $M$-state system, $\mat F_s$ can be expanded in elementary antisymmetric generators,

$$
\begin{align}
\mat F_s
=
\sum_{i<j}
F_{ij}(s)\mat J_{ij},
\label{eq:F_expanded_generators}
\end{align}
$$

where $\mat J_{ij}$ generates a rotation in the $(i,j)$ plane.

For example, in a three-state system,

$$
\begin{align}
\mat J_{12}
=
\begin{pmatrix}
0&1&0\\
-1&0&0\\
0&0&0
\end{pmatrix},
\qquad
\mat J_{13}
=
\begin{pmatrix}
0&0&1\\
0&0&0\\
-1&0&0
\end{pmatrix},
\qquad
\mat J_{23}
=
\begin{pmatrix}
0&0&0\\
0&0&1\\
0&-1&0
\end{pmatrix}.
\end{align}
$$

Thus,

$$
\begin{align}
\mat F_s^{(3)}
=
F_{12}\mat J_{12}
+
F_{13}\mat J_{13}
+
F_{23}\mat J_{23}
=
\begin{pmatrix}
0 & F_{12} & F_{13}\\
-F_{12} & 0 & F_{23}\\
-F_{13} & -F_{23} & 0
\end{pmatrix}.
\label{eq:F3_generator_form}
\end{align}
$$

The main difficulty in the multistate case is that the generators $\mat J_{ij}$ do not generally commute. Therefore the ADT cannot usually be treated as several independent two-state rotations.

---

## 2. Elementary rotation matrices

An elementary rotation $\mat Q_{ij}(\gamma_{ij})$ is the identity matrix except in the $(i,j)$ plane.

For three states, we use the convention

$$
\begin{align}
\mat Q_{12}
&=
\begin{pmatrix}
c_{12} & s_{12} & 0\\
-s_{12} & c_{12} & 0\\
0 & 0 & 1
\end{pmatrix},
\\[6pt]
\mat Q_{23}
&=
\begin{pmatrix}
1 & 0 & 0\\
0 & c_{23} & s_{23}\\
0 & -s_{23} & c_{23}
\end{pmatrix},
\\[6pt]
\mat Q_{13}
&=
\begin{pmatrix}
c_{13} & 0 & s_{13}\\
0 & 1 & 0\\
-s_{13} & 0 & c_{13}
\end{pmatrix},
\end{align}
$$

where

$$
\begin{align}
c_{ij}=\cos\gamma_{ij},
\qquad
s_{ij}=\sin\gamma_{ij}.
\end{align}
$$

For each elementary rotation,

$$
\begin{align}
\frac{d\mat Q_{ij}}{ds}
\mat Q_{ij}^{T}
=
\gamma_{ij}'\mat J_{ij},
\label{eq:Qprime_QT_generator}
\end{align}
$$

where

$$
\begin{align}
\gamma_{ij}'=\frac{d\gamma_{ij}}{ds}.
\end{align}
$$

For example,

$$
\begin{align}
\mat Q_{12}'
=
\gamma_{12}'
\begin{pmatrix}
-s_{12} & c_{12} & 0\\
-c_{12} & -s_{12} & 0\\
0 & 0 & 0
\end{pmatrix},
\end{align}
$$

and therefore

$$
\begin{align}
\mat Q_{12}'\mat Q_{12}^{T}
&=
\gamma_{12}'
\begin{pmatrix}
-s_{12} & c_{12} & 0\\
-c_{12} & -s_{12} & 0\\
0 & 0 & 0
\end{pmatrix}
\begin{pmatrix}
c_{12} & -s_{12} & 0\\
s_{12} & c_{12} & 0\\
0 & 0 & 1
\end{pmatrix}
\nonumber\\
&=
\gamma_{12}'
\begin{pmatrix}
0 & 1 & 0\\
-1 & 0 & 0\\
0 & 0 & 0
\end{pmatrix}
\nonumber\\
&=
\gamma_{12}'\mat J_{12}.
\end{align}
$$

The same result holds for the other elementary rotations.

---

## 3. Three-state product parameterisation

For three states, write the ADT matrix as

$$
\begin{align}
\Cmat^{(3)}
=
\mat Q_{12}
\mat Q_{23}
\mat Q_{13}.
\label{eq:C3_product_derivation}
\end{align}
$$

Multiplying the three matrices gives

$$
\begin{align}
\Cmat^{(3)}
=
\begin{pmatrix}
c_{12}c_{13}-s_{12}s_{13}s_{23}
&
c_{23}s_{12}
&
c_{12}s_{13}+c_{13}s_{12}s_{23}
\\
-c_{12}s_{13}s_{23}-c_{13}s_{12}
&
c_{12}c_{23}
&
c_{12}c_{13}s_{23}-s_{12}s_{13}
\\
-c_{23}s_{13}
&
-s_{23}
&
c_{13}c_{23}
\end{pmatrix}.
\label{eq:C3_explicit_derivation}
\end{align}
$$

This expression will be useful later when the end-of-loop matrix is required to be diagonal.

---

## 4. Deriving the three-state coupled angle equations

Start from the path ADT equation,

$$
\begin{align}
\frac{d\Cmat^{(3)}}{ds}
=
-\mat F_s^{(3)}\Cmat^{(3)}.
\label{eq:C3_path_adt_again}
\end{align}
$$

Right multiply by $(\Cmat^{(3)})^T$. Since $\Cmat^{(3)}$ is orthogonal,

$$
\begin{align}
\Cmat^{(3)}(\Cmat^{(3)})^T=\mat I,
\end{align}
$$

so

$$
\begin{align}
\left(
\frac{d\Cmat^{(3)}}{ds}
\right)
(\Cmat^{(3)})^T
=
-\mat F_s^{(3)}.
\label{eq:Cprime_CT_equals_minus_F}
\end{align}
$$

Now differentiate the product

$$
\begin{align}
\Cmat^{(3)}
=
\mat Q_{12}\mat Q_{23}\mat Q_{13}.
\end{align}
$$

Using the product rule,

$$
\begin{align}
\frac{d\Cmat^{(3)}}{ds}
&=
\mat Q_{12}'\mat Q_{23}\mat Q_{13}
+
\mat Q_{12}\mat Q_{23}'\mat Q_{13}
+
\mat Q_{12}\mat Q_{23}\mat Q_{13}'.
\end{align}
$$

The transpose of $\Cmat^{(3)}$ is

$$
\begin{align}
(\Cmat^{(3)})^T
=
\mat Q_{13}^{T}
\mat Q_{23}^{T}
\mat Q_{12}^{T}.
\end{align}
$$

Therefore,

$$
\begin{align}
\left(
\frac{d\Cmat^{(3)}}{ds}
\right)
(\Cmat^{(3)})^T
&=
\mat Q_{12}'\mat Q_{23}\mat Q_{13}
\mat Q_{13}^T\mat Q_{23}^T\mat Q_{12}^T
\nonumber\\
&\quad+
\mat Q_{12}\mat Q_{23}'\mat Q_{13}
\mat Q_{13}^T\mat Q_{23}^T\mat Q_{12}^T
\nonumber\\
&\quad+
\mat Q_{12}\mat Q_{23}\mat Q_{13}'
\mat Q_{13}^T\mat Q_{23}^T\mat Q_{12}^T.
\end{align}
$$

Using $\mat Q_{ij}\mat Q_{ij}^T=\mat I$, this simplifies to

$$
\begin{align}
\left(
\frac{d\Cmat^{(3)}}{ds}
\right)
(\Cmat^{(3)})^T
&=
\mat Q_{12}'\mat Q_{12}^T
+
\mat Q_{12}
\mat Q_{23}'\mat Q_{23}^T
\mat Q_{12}^T
\nonumber\\
&\quad+
\mat Q_{12}\mat Q_{23}
\mat Q_{13}'\mat Q_{13}^T
\mat Q_{23}^T\mat Q_{12}^T.
\label{eq:Cprime_CT_decomposed}
\end{align}
$$

Using Eq. $\eqref{eq:Qprime_QT_generator}$,

$$
\begin{align}
\left(
\frac{d\Cmat^{(3)}}{ds}
\right)
(\Cmat^{(3)})^T
&=
\gamma_{12}'\mat J_{12}
+
\gamma_{23}'
\mat Q_{12}\mat J_{23}\mat Q_{12}^T
\nonumber\\
&\quad+
\gamma_{13}'
\mat Q_{12}\mat Q_{23}\mat J_{13}\mat Q_{23}^T\mat Q_{12}^T.
\label{eq:Cprime_CT_generators}
\end{align}
$$

The remaining task is to evaluate the two rotated generators.

---

## 5. Rotated-generator algebra

First consider

$$
\begin{align}
\mat Q_{12}\mat J_{23}\mat Q_{12}^T.
\end{align}
$$

Using

$$
\mat Q_{12}
=
\begin{pmatrix}
c_{12} & s_{12} & 0\\
-s_{12} & c_{12} & 0\\
0 & 0 & 1
\end{pmatrix},
\qquad
\mat J_{23}
=
\begin{pmatrix}
0&0&0\\
0&0&1\\
0&-1&0
\end{pmatrix},
$$

one obtains

$$
\begin{align}
\mat Q_{12}\mat J_{23}\mat Q_{12}^T
=
\begin{pmatrix}
0&0&s_{12}\\
0&0&c_{12}\\
-s_{12}&-c_{12}&0
\end{pmatrix}.
\end{align}
$$

This can be written in the generator basis as

$$
\begin{align}
\mat Q_{12}\mat J_{23}\mat Q_{12}^T
=
s_{12}\mat J_{13}
+
c_{12}\mat J_{23}.
\label{eq:rotated_J23}
\end{align}
$$

Next consider

$$
\begin{align}
\mat Q_{12}\mat Q_{23}\mat J_{13}\mat Q_{23}^T\mat Q_{12}^T.
\end{align}
$$

A direct multiplication gives

$$
\begin{align}
\mat Q_{12}\mat Q_{23}\mat J_{13}\mat Q_{23}^T\mat Q_{12}^T
=
\begin{pmatrix}
0&s_{23}&c_{12}c_{23}\\
-s_{23}&0&-s_{12}c_{23}\\
-c_{12}c_{23}&s_{12}c_{23}&0
\end{pmatrix}.
\end{align}
$$

Therefore,

$$
\begin{align}
\mat Q_{12}\mat Q_{23}\mat J_{13}\mat Q_{23}^T\mat Q_{12}^T
=
s_{23}\mat J_{12}
+
c_{12}c_{23}\mat J_{13}
-
s_{12}c_{23}\mat J_{23}.
\label{eq:rotated_J13}
\end{align}
$$

Substitute Eqs. $\eqref{eq:rotated_J23}$ and $\eqref{eq:rotated_J13}$ into Eq. $\eqref{eq:Cprime_CT_generators}$:

$$
\begin{align}
\left(
\frac{d\Cmat^{(3)}}{ds}
\right)
(\Cmat^{(3)})^T
&=
\gamma_{12}'\mat J_{12}
+
\gamma_{23}'
\left(
s_{12}\mat J_{13}
+
c_{12}\mat J_{23}
\right)
\nonumber\\
&\quad+
\gamma_{13}'
\left(
s_{23}\mat J_{12}
+
c_{12}c_{23}\mat J_{13}
-
s_{12}c_{23}\mat J_{23}
\right)
\nonumber\\
&=
\left(
\gamma_{12}'
+
\gamma_{13}'s_{23}
\right)\mat J_{12}
\nonumber\\
&\quad+
\left(
\gamma_{23}'s_{12}
+
\gamma_{13}'c_{12}c_{23}
\right)\mat J_{13}
\nonumber\\
&\quad+
\left(
\gamma_{23}'c_{12}
-
\gamma_{13}'s_{12}c_{23}
\right)\mat J_{23}.
\label{eq:Cprime_CT_expanded_generators}
\end{align}
$$

But Eq. $\eqref{eq:Cprime_CT_equals_minus_F}$ gives

$$
\begin{align}
\left(
\frac{d\Cmat^{(3)}}{ds}
\right)
(\Cmat^{(3)})^T
=
-\mat F_s^{(3)}
=
-F_{12}\mat J_{12}
-F_{13}\mat J_{13}
-F_{23}\mat J_{23}.
\end{align}
$$

Since $\mat J_{12}$, $\mat J_{13}$, and $\mat J_{23}$ are linearly independent, their coefficients must match. Therefore,

$$
\begin{align}
\gamma_{12}'
+
\gamma_{13}'\sin\gamma_{23}
&=
-F_{12},
\\
\gamma_{23}'\sin\gamma_{12}
+
\gamma_{13}'\cos\gamma_{23}\cos\gamma_{12}
&=
-F_{13},
\\
\gamma_{23}'\cos\gamma_{12}
-
\gamma_{13}'\cos\gamma_{23}\sin\gamma_{12}
&=
-F_{23}.
\label{eq:gamma_linear_system_derivation}
\end{align}
$$

This is the coupled three-state angle system for the chosen rotation ordering.

---

## 6. Solving the three-state linear system

The last two equations of Eq. $\eqref{eq:gamma_linear_system_derivation}$ form a linear system for $\gamma_{23}'$ and $\gamma_{13}'$:

$$
\begin{align}
\gamma_{23}'s_{12}
+
\gamma_{13}'c_{23}c_{12}
&=
-F_{13},
\label{eq:system_line_1}
\\
\gamma_{23}'c_{12}
-
\gamma_{13}'c_{23}s_{12}
&=
-F_{23}.
\label{eq:system_line_2}
\end{align}
$$

To solve for $\gamma_{13}'$, multiply Eq. $\eqref{eq:system_line_1}$ by $c_{12}$ and Eq. $\eqref{eq:system_line_2}$ by $s_{12}$:

$$
\begin{align}
\gamma_{23}'s_{12}c_{12}
+
\gamma_{13}'c_{23}c_{12}^2
&=
-F_{13}c_{12},
\\
\gamma_{23}'c_{12}s_{12}
-
\gamma_{13}'c_{23}s_{12}^2
&=
-F_{23}s_{12}.
\end{align}
$$

Subtracting the second equation from the first eliminates $\gamma_{23}'$:

$$
\begin{align}
\gamma_{13}'c_{23}
\left(
c_{12}^2+s_{12}^2
\right)
=
-F_{13}c_{12}
+
F_{23}s_{12}.
\end{align}
$$

Since $c_{12}^2+s_{12}^2=1$,

$$
\begin{align}
\boxed{
\gamma_{13}'
=\frac{
-F_{13}\cos\gamma_{12}
+F_{23}\sin\gamma_{12}
}{\cos\gamma_{23}}.
}
\label{eq:gamma13_solution_derivation}
\end{align}
$$

To solve for $\gamma_{23}'$, multiply Eq. $\eqref{eq:system_line_1}$ by $s_{12}$ and Eq. $\eqref{eq:system_line_2}$ by $c_{12}$:

$$
\begin{align}
\gamma_{23}'s_{12}^2
+
\gamma_{13}'c_{23}c_{12}s_{12}
&=
-F_{13}s_{12},
\\
\gamma_{23}'c_{12}^2
-
\gamma_{13}'c_{23}s_{12}c_{12}
&=
-F_{23}c_{12}.
\end{align}
$$

Adding the two equations eliminates $\gamma_{13}'$:

$$
\begin{align}
\gamma_{23}'
\left(
s_{12}^2+c_{12}^2
\right)
=
-F_{13}s_{12}
-
F_{23}c_{12}.
\end{align}
$$

Therefore,

$$
\begin{align}
\boxed{
\gamma_{23}'
=-\left(
F_{23}\cos\gamma_{12}
+F_{13}\sin\gamma_{12}
\right).}
\label{eq:gamma23_solution_derivation}
\end{align}
$$

Finally, use the first equation of Eq. $\eqref{eq:gamma_linear_system_derivation}$,

$$
\begin{align}
\gamma_{12}'
+\gamma_{13}'\sin\gamma_{23}
=-F_{12}.
\end{align}
$$

Substituting Eq. $\eqref{eq:gamma13_solution_derivation}$ gives

$$
\begin{align}
\gamma_{12}'
&=-F_{12}
-\sin\gamma_{23}
\frac{
-F_{13}\cos\gamma_{12}
+F_{23}\sin\gamma_{12}}{
\cos\gamma_{23}
}
\nonumber\\
&=-F_{12}
-\tan\gamma_{23}
\left(
-F_{13}\cos\gamma_{12}
+F_{23}\sin\gamma_{12}
\right).
\end{align}
$$

Thus,

$$
\begin{align}
\boxed{
\gamma_{12}'
=-F_{12}
-\tan\gamma_{23}
\left(
-F_{13}\cos\gamma_{12}
+F_{23}\sin\gamma_{12}
\right).}
\label{eq:gamma12_solution_derivation}
\end{align}
$$

Together, Eqs. $\eqref{eq:gamma13_solution_derivation}$--$\eqref{eq:gamma12_solution_derivation}$ are the explicit three-state angle equations.

---

## 7. Closed-loop endpoint angles and the topological matrix

For a closed contour, let the path run from $s_0$ to $s_f$, with

$$
\begin{align}
\mat q(s_f)=\mat q(s_0).
\end{align}
$$

If the initial ADT matrix is chosen as the identity,

$$
\begin{align}
\Cmat(s_0)=\mat I,
\end{align}
$$

then the topological matrix is simply

$$
\begin{align}
\mat D(\Gamma)=\Cmat(s_f).
\end{align}
$$

More generally, if $\Cmat(s_0)\neq \mat I$,

$$
\begin{align}
\mat D(\Gamma)
=\Cmat(s_f)\Cmat^{-1}(s_0).
\end{align}
$$

In the three-state angle parameterisation, define the endpoint angles

$$
\begin{align}
\alpha_{ij}
=\gamma_{ij}(s_f).
\end{align}
$$

Then

$$
\begin{align}
\mat D^{(3)}
=\mat Q_{12}(\alpha_{12})
\mat Q_{23}(\alpha_{23})
\mat Q_{13}(\alpha_{13}),
\label{eq:D3_endpoint_angles}
\end{align}
$$

provided $\Cmat(s_0)=\mat I$. If a different initial frame is used, this expression is conjugated by the initial transformation.

Using Eq. $\eqref{eq:C3_explicit_derivation}$, the explicit endpoint matrix is

$$
\begin{align}
\mat D^{(3)}
=
\begin{pmatrix}
c_{12}c_{13}-s_{12}s_{13}s_{23}
&
c_{23}s_{12}
&
c_{12}s_{13}+c_{13}s_{12}s_{23}
\\
-c_{12}s_{13}s_{23}-c_{13}s_{12}
&
c_{12}c_{23}
&
c_{12}c_{13}s_{23}-s_{12}s_{13}
\\
-c_{23}s_{13}
&
-s_{23}
&
c_{13}c_{23}
\end{pmatrix}_{\gamma_{ij}=\alpha_{ij}}.
\label{eq:D3_explicit_endpoint}
\end{align}
$$

---

## 8. Three-state diagonal sign condition

For a nondegenerate base point, the topological matrix must be diagonal with entries $\pm 1$ if the diabatic potential matrix is to be single-valued.

From Eq. $\eqref{eq:D3_explicit_endpoint}$, the $(3,2)$ element is

$$
\begin{align}
D_{32}^{(3)}=-\sin\alpha_{23}.
\end{align}
$$

Thus diagonality requires

$$
\begin{align}
\sin\alpha_{23}=0.
\end{align}
$$

The $(1,2)$ element is

$$
\begin{align}
D_{12}^{(3)}=\cos\alpha_{23}\sin\alpha_{12}.
\end{align}
$$

Since $\sin\alpha_{23}=0$, one has $\cos\alpha_{23}=\pm 1$. Therefore diagonality also requires

$$
\begin{align}
\sin\alpha_{12}=0.
\end{align}
$$

The $(3,1)$ element is

$$
\begin{align}
D_{31}^{(3)}=-\cos\alpha_{23}\sin\alpha_{13}.
\end{align}
$$

Again, since $\cos\alpha_{23}=\pm 1$, diagonality requires

$$
\begin{align}
\sin\alpha_{13}=0.
\end{align}
$$

Thus

$$
\begin{align}
\boxed{
\alpha_{12}=n_{12}\pi,
\qquad
\alpha_{23}=n_{23}\pi,
\qquad
\alpha_{13}=n_{13}\pi,}
\label{eq:three_state_alpha_integer_pi}
\end{align}
$$

where $n_{ij}\in\mathbb Z$.

Under this condition,

$$
\begin{align}
s_{ij}=0,
\qquad
c_{ij}=(-1)^{n_{ij}}.
\end{align}
$$

Substituting into Eq. $\eqref{eq:D3_explicit_endpoint}$ gives

$$
\begin{align}
\mat D^{(3)}
=
\begin{pmatrix}
c_{12}c_{13} & 0 & 0\\
0 & c_{12}c_{23} & 0\\
0 & 0 & c_{13}c_{23}
\end{pmatrix}.
\end{align}
$$

Therefore,

$$
\begin{align}
D_{11}^{(3)}
&=
(-1)^{n_{12}+n_{13}},
\\
D_{22}^{(3)}
&=
(-1)^{n_{12}+n_{23}},
\\
D_{33}^{(3)}
&=
(-1)^{n_{13}+n_{23}}.
\label{eq:D3_diagonal_sign_entries}
\end{align}
$$


Multiplying the three diagonal entries gives

$$
\begin{align}
D_{11}^{(3)}D_{22}^{(3)}D_{33}^{(3)}
&=(-1)^{n_{12}+n_{13}+n_{12}+n_{23}+n_{13}+n_{23}}
\nonumber\\
&=(-1)^{2(n_{12}+n_{13}+n_{23})}
\nonumber\\
&=+1.
\end{align}
$$

Thus the number of negative diagonal signs must be even. For three states, the allowed sign patterns are

$$
\begin{align}
(+,+,+),
\qquad
(+,-,-),
\qquad
(-,+,-),
\qquad
(-,-,+).
\end{align}
$$

This is the first major difference from a naive pairwise interpretation: in a real three-state frame, a single isolated sign flip is not compatible with a proper orthogonal topological matrix.

---

## 9. General $M$-state product of rotations

For $M$ states, write the ADT matrix as a product of elementary rotations,

$$
\begin{align}
\Cmat^{(M)}
=
\prod_{i=1}^{M-1}
\prod_{j=i+1}^{M}
\mat Q_{ij}^{(M)}(\gamma_{ij}).
\label{eq:CM_product_general_derivation}
\end{align}
$$

There are

$$
\begin{align}
\frac{M(M-1)}{2}
\end{align}
$$

angles, one for each state pair.

Important convention: the product ordering matters. Different orderings produce different angle equations. The ADT matrix itself is the physical object; the angles are coordinates used to represent it.

For a closed loop, define

$$
\begin{align}
\alpha_{ij}
=
\gamma_{ij}(s_f).
\end{align}
$$

The topological matrix is obtained by substituting these endpoint angles into the same product,

$$
\begin{align}
\mat D^{(M)}
=
\prod_{i=1}^{M-1}
\prod_{j=i+1}^{M}
\mat Q_{ij}^{(M)}(\alpha_{ij}),
\label{eq:DM_product_general_derivation}
\end{align}
$$

assuming $\Cmat(s_0)=\mat I$.

---

## 10. General diagonal sign formula

Suppose the endpoint angles satisfy

$$
\begin{align}
\alpha_{ij}=n_{ij}\pi,
\qquad
n_{ij}\in\mathbb Z.
\label{eq:alpha_integer_general_derivation}
\end{align}
$$

Then

$$
\begin{align}
\sin\alpha_{ij}=0,
\qquad
\cos\alpha_{ij}=(-1)^{n_{ij}}.
\end{align}
$$

Under this condition, each elementary rotation $\mat Q_{ij}^{(M)}$ becomes diagonal. Specifically, it acts as

$$
\begin{align}
\mat Q_{ij}^{(M)}(\alpha_{ij}=n_{ij}\pi)
=
\operatorname{diag}
(1,\ldots,\cos\alpha_{ij},\ldots,\cos\alpha_{ij},\ldots,1),
\end{align}
$$

where the two entries $\cos\alpha_{ij}$ occur in positions $i$ and $j$. All other diagonal entries are $1$.

Since all these endpoint matrices are diagonal, they commute. Therefore the final diagonal entry $D_{ii}^{(M)}$ is the product of all cosine factors from rotations involving state $i$:

$$
\begin{align}
D_{ii}^{(M)}
=
\prod_{k\neq i}
\cos\alpha_{ik}.
\label{eq:Dii_product_cos_derivation}
\end{align}
$$

Using $\cos(n_{ik}\pi)=(-1)^{n_{ik}}$, this becomes

$$
\begin{align}
D_{ii}^{(M)}
=
\prod_{k\neq i}
(-1)^{n_{ik}}
=
(-1)^{\sum_{k\neq i}n_{ik}}.
\end{align}
$$

Therefore,

$$
\begin{align}
\boxed{
D_{ij}^{(M)}
=\delta_{ij}
\prod_{k\neq i}
\cos\alpha_{ik}
=\delta_{ij}
(-1)^{\sum_{k\neq i}n_{ik}}}
\label{eq:Dij_general_sign_formula_derivation}
\end{align}
$$

This is the general multistate sign formula.

---

## 11. Even number of sign flips

The determinant of each elementary rotation is $+1$:

$$
\begin{align}
\det \mat Q_{ij}^{(M)}=+1.
\end{align}
$$

Therefore the determinant of their product is also $+1$:

$$
\begin{align}
\det \mat D^{(M)}
=\prod_{i<j}
\det\mat Q_{ij}^{(M)}
=+1.
\end{align}
$$

If $\mat D^{(M)}$ is diagonal with entries $\pm 1$, then

$$
\begin{align}
\det\mat D^{(M)}
=\prod_{i=1}^{M}D_{ii}^{(M)}.
\end{align}
$$

Let $K$ be the number of negative diagonal entries. Then

$$
\begin{align}
\prod_{i=1}^{M}D_{ii}^{(M)}
=(-1)^K.
\end{align}
$$

Since $\det\mat D^{(M)}=+1$,

$$
\begin{align}
(-1)^K=+1.
\end{align}
$$

Therefore,

$$
\begin{align}
\boxed{
K\ \text{must be even}.}
\label{eq:even_number_sign_flips}
\end{align}
$$

Equivalently, this follows directly from Eq. $\eqref{eq:Dij_general_sign_formula_derivation}$:

$$
\begin{align}
\prod_{i=1}^{M}D_{ii}^{(M)}
&=\prod_{i=1}^{M}
(-1)^{\sum_{k\neq i}n_{ik}}
\nonumber\\
&=(-1)^{\sum_i\sum_{k\neq i}n_{ik}}.
\end{align}
$$

Each pair $n_{ik}$ appears twice in the double sum, once as $n_{ik}$ and once as $n_{ki}$. Thus

$$
\begin{align}
\sum_i\sum_{k\neq i}n_{ik}
=2\sum_{i<k}n_{ik},
\end{align}
$$

and

$$
\begin{align}
\prod_{i=1}^{M}D_{ii}^{(M)}
=(-1)^{2\sum_{i<k}n_{ik}}
=+1.
\end{align}
$$

Thus, for real electronic states, the topological matrix may contain sign flips, but the number of sign-flipped components of the real electronic frame must be even.

---

## 12. Relation to the single-valued diabatic potential condition

The diagonal sign condition is not imposed only for aesthetic reasons. It follows from the requirement that the diabatic potential matrix be single-valued.

At a nondegenerate base point,

$$
\begin{align}
\mat V
=\operatorname{diag}
(V_1,V_2,\ldots,V_M),
\qquad
V_i\neq V_j \ \text{for}\ i\neq j.
\end{align}
$$

If the ADT matrix returns as

$$
\begin{align}
\Cmat(s_f)=\mat D\Cmat(s_0),
\end{align}
$$

then

$$
\begin{align}
\mat W(s_f)
=
\Cmat^\dagger(s_0)\mat D^\dagger \mat V\mat D\Cmat(s_0).
\end{align}
$$

For $\mat W(s_f)=\mat W(s_0)$, one needs

$$
\begin{align}
\mat D^\dagger \mat V\mat D=\mat V.
\end{align}
$$

Equivalently,

$$
\begin{align}
[\mat D,\mat V]=0.
\end{align}
$$

For nondegenerate $\mat V$, this forces $\mat D$ to be diagonal. For real electronic states, the diagonal entries must be $\pm1$.

The preceding angle derivation shows how such diagonal sign matrices arise from endpoint ADT angles satisfying

$$
\begin{align}
\alpha_{ij}=n_{ij}\pi.
\end{align}
$$

Thus the topological quantisation condition is the compatibility condition between closed-loop ADT transport and single-valued diabatic potentials.

---

## 13. Finite-subspace caveat

The derivation above assumes that the retained $M$-state space behaves as a closed electronic subspace over the region sampled by the loop. In a complete Hilbert space this is the formal setting of the ADT. In a practical finite-state calculation, this assumption may fail.

If important states are excluded, the retained nonadiabatic coupling matrix may not satisfy the required integrability and topological conditions. Then the computed $\mat D$ may fail to be diagonal, or the endpoint signs may not be stable under changes of path or basis convention.

In that case, the problem is not only a sign-assignment issue. It indicates that the selected electronic subspace may not be a good sub-Hilbert space for the loop being considered.

---

## Summary

The multistate ADT matrix can be parameterised as a product of elementary rotations. In the three-state case,

$$
\begin{align}
\Cmat^{(3)}
=
\mat Q_{12}\mat Q_{23}\mat Q_{13}.
\end{align}
$$

Inserting this product into the path ADT equation and equating the independent antisymmetric generator components gives coupled differential equations for the angles. These equations are coupled because the different plane rotations do not generally commute.

For a closed loop, the endpoint angles $\alpha_{ij}$ determine the topological matrix. Requiring the topological matrix to be diagonal with real entries $\pm1$ gives the quantisation condition

$$
\begin{align}
\alpha_{ij}=n_{ij}\pi.
\end{align}
$$

The resulting general sign formula is

$$
\begin{align}
D_{ij}^{(M)}
=
\delta_{ij}
(-1)^{\sum_{k\neq i}n_{ik}}.
\end{align}
$$

Since $\mat D^{(M)}$ is a product of proper rotations, it has determinant $+1$. Therefore the number of negative diagonal entries must be even. This is the multistate version of the two-state sign-change condition, but it applies to the full transported electronic frame rather than to independent pairwise phases.

---

## Links to related notes

- [Multistate topology, signs, and degeneracies](../specialised_propagation_diabatisation_deepdive/spec08_multistate_topology_signs.md)
- [Topological matrix and single-valued diabatic potentials](../specialised_propagation_diabatisation_deepdive/spec05_topological_matrix_and_single_valued_diabatic_potentials.md)
- [Complete versus reduced Hilbert-space ADT](../specialised_propagation_diabatisation_deepdive/spec06_complete_vs_reduced_hilbert_space_adt.md)
- [Two-state loop and sign change](../worked_examples/adt_topology/example01_two_state_loop_and_sign_change.md)
- [Three-state sign flips and topological matrix](../worked_examples/adt_topology/example02_three_state_sign_flips_and_D_matrix.md)
- [Four-state topological matrix and quantisation conditions](../worked_examples/adt_topology/example03_four_state_topological_matrix.md)
- [Derivation: path-ordered ADT and closed contours](derivation_path_ordered_adt_and_closed_contours.md)
- [Derivation: topological matrix condition for diabatic potentials](derivation_topological_matrix_condition_for_W.md)

---

## References

This derivation follows Baer's multistate ADT-angle construction and the associated topological-matrix quantisation conditions [@baer_2002_nact; @baer_2000_topological_effects]. The three-state rotation-angle formalism is also related to the ADT angle equations discussed by Alijah and Baer [@alijah_baer_2000_three_state_adt].