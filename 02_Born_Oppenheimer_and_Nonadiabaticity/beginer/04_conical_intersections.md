## Introduction to Conical Intersections: The Two-State Model

A longer and more algebraic derivation of the two-state model is given in [two state model](../derivations/derivations_two_state_model.md). That derivation also discusses the relation between the nonadiabatic coupling vector, the diabatic Hamiltonian elements, and the Lorentzian form that appears along one-dimensional cuts through an avoided crossing.

The present section is intended as a first introduction. The aim is to show where the two-state conical-intersection model comes from, what the important vectors mean, and why the branching plane and intersection seam appear naturally.

At the end of this page, there is also a link to a more intermediate-level discussion of conical intersections and their relation to the NACV.

---

### The diabatic potential matrix

Consider a two-state electronic subspace described in a real diabatic basis

$$
\left\{
\ket{\varphi_1},
\ket{\varphi_2}
\right\}.
$$

In this basis, the electronic Hamiltonian is represented by the diabatic potential matrix

$$
\begin{align}
\mat W(\mat q)
=\begin{pmatrix}
W_{11}(\mat q) & W_{12}(\mat q)\\
W_{12}(\mat q) & W_{22}(\mat q)
\end{pmatrix}.
\end{align}
$$

Here $\mat q\in\mathbb R^f$ is the nuclear coordinate vector. The diagonal elements $W_{11}$ and $W_{22}$ are the diabatic potential energy surfaces, while the off-diagonal element $W_{12}$ is the diabatic coupling between the two states.

It is useful to define the average and difference of the two diabatic potentials:

$$
\begin{align}
\Sigma(\mat q)
&=\frac{1}{2}
\left[
W_{11}(\mat q)+W_{22}(\mat q)
\right],
\\
\Delta(\mat q)
&=W_{22}(\mat q)-W_{11}(\mat q).
\end{align}
$$

Then the diabatic matrix can be written as

$$
\begin{align}
\mat W
=\Sigma \mat I
+
\begin{pmatrix}
-\Delta/2 & W_{12}\\
W_{12} & \Delta/2
\end{pmatrix}.
\label{eq:two_state_pauli_form_beginner}
\end{align}
$$

The term $\Sigma \mat I$ shifts both states equally. The remaining matrix controls the splitting between the two adiabatic energies.

---

### Adiabatic energies and the conditions for degeneracy

The adiabatic energies are obtained by diagonalising the diabatic matrix $\mat W$. This gives

$$
\begin{align}
V_{\pm}(\mat q)
=\Sigma(\mat q)
\pm
\frac{1}{2}
\sqrt{
\Delta^2(\mat q)
+
4W_{12}^2(\mat q)
}.
\label{eq:two_state_adiabatic_energies_beginner}
\end{align}
$$

The adiabatic energy gap is therefore

$$
\begin{align}
V_+-V_-
=\sqrt{
\Delta^2
+
4W_{12}^{2}
}.
\end{align}
$$

For a true degeneracy, the two adiabatic surfaces must touch:

$$
V_+=V_-.
$$

This can happen only when the expression under the square root is zero. Since both terms are squared, this requires

$$
\begin{align}
\Delta(\mat q)=0,
\qquad
W_{12}(\mat q)=0.
\end{align}
$$

These are the two central conditions for a two-state conical intersection.

---

### One-dimensional cuts versus multidimensional systems

The need to satisfy two conditions is the key point.

In a system with only one nuclear coordinate, it is generally not possible to satisfy both conditions at the same time. If the two states have nonzero coupling, they may approach each other, but they usually repel and form an avoided crossing.

A true crossing can still occur in a one-dimensional scan if symmetry forces the coupling $W_{12}$ to vanish. However, for two states of the same symmetry with nonzero coupling, the usual result is an avoided crossing.

In a polyatomic molecule, there are many nuclear coordinates. This means there are enough geometric degrees of freedom to satisfy both

$$
\Delta=0
\qquad
\text{and}
\qquad
W_{12}=0
$$

at the same time. This is why conical intersections are generic in multidimensional molecular systems.

---

### Linear model near a conical intersection

Let $\mat q_0$ be a chosen point on the conical-intersection seam. We now shift the origin so that displacements from this point are written as

$$
\mat Q=\mat q-\mat q_0.
$$

At the conical intersection,

$$
W_{11}(\mat q_0)=W_{22}(\mat q_0)=E,
\qquad
W_{12}(\mat q_0)=0.
$$

Equivalently,

$$
\Delta(\mat q_0)=0,
\qquad
W_{12}(\mat q_0)=0.
$$

These conditions are not a consequence of orthogonality of the electronic basis. They are the degeneracy conditions for this two-state diabatic matrix.

To describe the local shape of the surfaces, we expand the matrix elements to first order in $\mat Q$:

$$
\begin{align}
\Delta(\mat Q)
&=W_{22}(\mat Q)-W_{11}(\mat Q)
=\boldsymbol{\kappa}\cdot\mat Q
+O(Q^2),
\\[4pt]
W_{12}(\mat Q)
&=\boldsymbol{\lambda}\cdot\mat Q
+
O(Q^2).
\end{align}
$$

Here

$$
\begin{align}
\boldsymbol{\kappa}
&=\nabla_{\mat q}
\left(
W_{22}-W_{11}
\right)_{\mat q=\mat q_0},
\\
\boldsymbol{\lambda}
&=
\nabla_{\mat q}W_{12}\big|_{\mat q=\mat q_0}.
\end{align}
$$

The vector $\boldsymbol{\kappa}$ describes how the diabatic energy gap changes with nuclear geometry. The vector $\boldsymbol{\lambda}$ describes how the diabatic coupling changes with nuclear geometry.

With this notation, the first-order two-state model can be written as

$$
\begin{align}
\mat W(\mat Q)
=\left[
E+\boldsymbol{\sigma}\cdot\mat Q
\right]\mat I
+\begin{pmatrix}
-\boldsymbol{\kappa}\cdot\mat Q/2
&
\boldsymbol{\lambda}\cdot\mat Q
\\
\boldsymbol{\lambda}\cdot\mat Q
&
\boldsymbol{\kappa}\cdot\mat Q/2
\end{pmatrix}
+
O(Q^2),
\end{align}
$$

where

$$
\begin{align}
\boldsymbol{\sigma}
=\frac{1}{2}
\nabla_{\mat q}
\left(
W_{11}+W_{22}
\right)_{\mat q=\mat q_0}.
\end{align}
$$

The common term $\left[E+\boldsymbol{\sigma}\cdot\mat Q\right]\mat I$ shifts both states equally. It can tilt the cone, but it does not change the condition for degeneracy.

If we ignore this common shift for simplicity, the model becomes

$$
\begin{align}
\mat W(\mat Q)
=\begin{pmatrix}
E&0\\
0&E
\end{pmatrix}
+
\begin{pmatrix}
-\boldsymbol{\kappa}\cdot\mat Q/2
&
\boldsymbol{\lambda}\cdot\mat Q
\\
\boldsymbol{\lambda}\cdot\mat Q
&
\boldsymbol{\kappa}\cdot\mat Q/2
\end{pmatrix}.
\end{align}
$$

Some authors instead define

$$
\begin{align}
\boldsymbol{\delta}
=\frac{1}{2}
\boldsymbol{\kappa},
\end{align}
$$

so that

$$
\begin{align}
\mat W(\mat Q)
=\begin{pmatrix}
E&0\\
0&E
\end{pmatrix}
+
\begin{pmatrix}
-\boldsymbol{\delta}\cdot\mat Q
&
\boldsymbol{\lambda}\cdot\mat Q
\\
\boldsymbol{\lambda}\cdot\mat Q
&
\boldsymbol{\delta}\cdot\mat Q
\end{pmatrix}.
\end{align}
$$

This is the same model written with a different notation.

---

### Relation to a direct Taylor expansion

One can also begin from a direct Taylor expansion of the two diagonal diabatic potentials:

$$
\begin{align}
\mat W(\mat Q)
=\begin{pmatrix}
E&0\\
0&E
\end{pmatrix}
+
\begin{pmatrix}
\boldsymbol{\kappa}_1\cdot\mat Q
&
\boldsymbol{\lambda}\cdot\mat Q
\\
\boldsymbol{\lambda}\cdot\mat Q
&
\boldsymbol{\kappa}_2\cdot\mat Q
\end{pmatrix}
+
O(Q^2),
\end{align}
$$

where

$$
\begin{align}
\boldsymbol{\kappa}_i
=\nabla_{\mat q}W_{ii}\big|_{\mat q=\mat q_0}.
\end{align}
$$

In this notation,

$$
\begin{align}
\boldsymbol{\kappa}
=\boldsymbol{\kappa}_2-\boldsymbol{\kappa}_1,
\qquad
\boldsymbol{\sigma}
=\frac{1}{2}
\left(
\boldsymbol{\kappa}_1+\boldsymbol{\kappa}_2
\right).
\end{align}
$$

Thus the symmetric form and the direct Taylor-expansion form contain the same information. They simply organise the terms differently.

---

### The branching plane and the intersection seam

Substituting the linear model into the adiabatic energy gap gives

$$
\begin{align}
V_+-V_-
=\sqrt{
\left(
\boldsymbol{\kappa}\cdot\mat Q
\right)^2
+
4
\left(
\boldsymbol{\lambda}\cdot\mat Q
\right)^2
}
+
O(Q^2).
\end{align}
$$

This equation shows that only two scalar quantities lift the degeneracy to first order:

$$
\boldsymbol{\kappa}\cdot\mat Q,
\qquad
\boldsymbol{\lambda}\cdot\mat Q.
$$

The two vectors

$$
\boldsymbol{\kappa},
\qquad
\boldsymbol{\lambda}
$$

therefore define the local branching space, or branching plane.

In the more common $g$-$h$ notation, $\boldsymbol{\kappa}$ is related to the gradient-difference vector $g$, while $\boldsymbol{\lambda}$ is related to the interstate coupling vector $h$. The precise factors depend on convention, especially on whether one writes the coupling coordinate as $W_{12}$ or $2W_{12}$.

It is important not to confuse $\boldsymbol{\lambda}$ with the NACV itself. The vector $\boldsymbol{\lambda}$ is a smooth diabatic coupling-gradient vector. The NACV,

$$
\F_{12}
=\braket{\psi_1}{\nabla_{\mat q}\psi_2},
$$

is a derivative coupling between adiabatic states and becomes singular at the conical intersection. That more detailed relation is discussed in the intermediate-level derivation.

The degeneracy is retained, to first order, for displacements satisfying

$$
\begin{align}
\boldsymbol{\kappa}\cdot\mat Q=0,
\qquad
\boldsymbol{\lambda}\cdot\mat Q=0.
\end{align}
$$

These two equations define the local intersection seam. If the molecule has $f$ nuclear degrees of freedom, and if $\boldsymbol{\kappa}$ and $\boldsymbol{\lambda}$ are linearly independent, then the seam has dimension

$$
f-2.
$$

Thus:

$$
\begin{array}{c|c}
f & \text{generic seam dimension}\\
\hline
2 & 0\text{-dimensional point}\\
3 & 1\text{-dimensional line}\\
4 & 2\text{-dimensional surface}
\end{array}
$$

In the full nuclear coordinate space, the conical intersection is therefore usually a seam rather than a single point. However, if we take a two-dimensional slice through the branching plane, the seam appears as a single point, and the two adiabatic surfaces form the familiar double-cone shape.

---

### Tuning and coupling coordinates

In many symmetry-induced conical intersections, the two branching directions have a simple interpretation.

One direction changes the diagonal energy gap,

$$
\Delta=W_{22}-W_{11}.
$$

This is often called the tuning direction.

The other direction changes the off-diagonal coupling,

$$
W_{12}.
$$

This is often called the coupling direction.

For this reason, a minimal two-mode linear vibronic coupling model often contains one tuning mode and one coupling mode. This model is simple, but it captures the essential local topology of a two-state conical intersection.

---

### To read next

[Symmetry of conical intersection](05_symmetry_of_conical_intersections.md)

---

## Reading path

This page introduces the minimal mathematical framework needed for the beginner-level sections that follow:

1. [Born-Huang Expansion](beginer/01_bornhuang_expansion.md)
2. [Adiabatic Approximations](beginer/02_adiabatic_approximations.md)
3. [Diabatic Representation](beginer/03_diabatic_representation.md)
4. [Introduction to Conical Intersection](beginer/04_conical_intersections.md)
5. [Symmetry of Conical Intersections](beginer/05_symmetry_of_conical_intersections.md) (note it is more of a blend of intermediate and beginer)

These sections provide first-level explanations of the physical meaning of the equations derived above. More detailed intermediate material is given in

- [Conical intersection (intermediate)](../intermediates/int02_conical_intersections.md)

which presents conical intersections more formally and discusses their relation to the nonadiabatic coupling vector.