

# Two-state diabatic model, conical intersections, and the Lorentzian form of the NACV

## Real two-state diabatic potential matrix

Consider a two-state electronic subspace described in a real diabatic basis

$$
\left\{
\ket{\varphi_1},
\ket{\varphi_2}
\right\}.
$$

In this basis the electronic Hamiltonian is represented by the diabatic potential matrix

$$
\begin{align}
\mat W(\mat q)
=\begin{pmatrix}
W_{11}(\mat q) & W_{12}(\mat q)\\
W_{12}(\mat q) & W_{22}(\mat q)
\end{pmatrix}.
\label{eq:two_state_diabatic_matrix}
\end{align}
$$

Here $\mat q\in\mathbb R^f$ is the nuclear coordinate vector, usually mass-scaled in the present notes. The matrix $\mat W$ is a $2\times2$ matrix in electronic-state space. Each element $W_{ij}(\mat q)$ is a scalar function of the nuclear coordinates.

The matrix is real and symmetric because the diabatic basis has been chosen real and no complex phase convention, magnetic field, or spin-orbit complication is being considered. The diagonal elements $W_{11}$ and $W_{22}$ are the diabatic potentials, while the off-diagonal element $W_{12}$ is the diabatic coupling.

It is useful to define the average and difference functions

$$
\begin{align}
\Sigma(\mat q)
&=
\frac{1}{2}
\left[
W_{11}(\mat q)+W_{22}(\mat q)
\right],\\
\Delta(\mat q)
&=W_{22}(\mat q)-W_{11}(\mat q).
\label{eq:delta_definition_two_state}
\end{align}
$$

Then Eq. $\eqref{eq:two_state_diabatic_matrix}$ can be written as

$$
\begin{align}
\mat W
=\Sigma \mat I
+
\begin{pmatrix}
-\Delta/2 & W_{12}\\
W_{12} & \Delta/2
\end{pmatrix}.
\label{eq:two_state_pauli_form}
\end{align}
$$

This form separates the part that shifts both adiabatic energies equally, $\Sigma\mat I$, from the part that controls the splitting between the two states.

---

## Adiabatic energies from diagonalising the diabatic matrix

The adiabatic energies are obtained by solving

$$
\begin{align}
\det\left(\mat W-\lambda \mat I\right)=0.
\end{align}
$$

Explicitly,

$$
\begin{align}
\det
\begin{pmatrix}
W_{11}-\lambda & W_{12}\\
W_{12} & W_{22}-\lambda
\end{pmatrix}
&=
(W_{11}-\lambda)(W_{22}-\lambda)-W_{12}^{2}
\nonumber\\
&=
\lambda^2
-\lambda(W_{11}+W_{22})
+
W_{11}W_{22}-W_{12}^{2}.
\end{align}
$$

The two eigenvalues are therefore

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
\label{eq:two_state_adiabatic_energies}
\end{align}
$$

The adiabatic energy gap is

$$
\begin{align}
V_{+}-V_{-}
=\sqrt{
\Delta^2+4W_{12}^{2}
}.
\label{eq:two_state_gap}
\end{align}
$$

A degeneracy requires

$$
\begin{align}
V_{+}=V_{-}
\quad
\Longleftrightarrow
\quad
\Delta(\mat q)=0
\quad\text{and}\quad
W_{12}(\mat q)=0.
\label{eq:ci_conditions_two_state}
\end{align}
$$

These are two independent scalar conditions. In an $f$-dimensional internal nuclear coordinate space, their simultaneous solution generally defines an $(f-2)$-dimensional intersection seam, provided the two conditions are independent. For a nonlinear molecule $f=3N_{\mathrm{nuc}}-6$, while for a linear molecule $f=3N_{\mathrm{nuc}}-5$. The two directions that lift the degeneracy form the **branching space**, also called the $g$-$h$ plane. The remaining directions form the **intersection space**, along which the degeneracy is retained to first order. This is the standard local picture of a two-state conical intersection: near the degeneracy, the adiabatic surfaces form a double cone in the branching plane.

---

## Mixing-angle representation of the adiabatic states

Since $\mat W$ is real symmetric, it can be diagonalised by a real orthogonal matrix. We write

$$
\begin{align}
\Cmat(\theta)
=\begin{pmatrix}
\cos\theta & \sin\theta\\
-\sin\theta & \cos\theta
\end{pmatrix},
\qquad
\Cmat^{-1}=\Cmat^{T}.
\label{eq:two_state_rotation_matrix}
\end{align}
$$

With this convention,

$$
\begin{align}
\Cmat\mat W\Cmat^T
=\begin{pmatrix}
V_1 & 0\\
0 & V_2
\end{pmatrix}.
\label{eq:two_state_diagonalisation}
\end{align}
$$

Equivalently, the adiabatic states are expressed in the diabatic basis as (see [row vecctor convention](../derivations/derivations_adiab_diab_convention.md) )

$$
\begin{align}
\ket{\psi_1}
&=\cos\theta\,\ket{\varphi_1}
+\sin\theta\,\ket{\varphi_2},\\
\ket{\psi_2}
&=-\sin\theta\,\ket{\varphi_1}
+\cos\theta\,\ket{\varphi_2}.
\label{eq:adiabatic_states_from_diabatic_basis}
\end{align}
$$

The off-diagonal element of $\Cmat\mat W\Cmat^T$ is

$$
\begin{align}
(\Cmat\mat W\Cmat^T)_{12}
&=W_{12}(\cos^2\theta-\sin^2\theta)
+(W_{22}-W_{11})\sin\theta\cos\theta
\nonumber\\
&=W_{12}\cos(2\theta)
+\frac{\Delta}{2}\sin(2\theta).
\end{align}
$$

Diagonalisation requires this expression to vanish:

$$
\begin{align}
W_{12}\cos(2\theta)
+\frac{\Delta}{2}\sin(2\theta)
=0.
\end{align}
$$

Therefore,

$$
\begin{align}
\tan(2\theta)
=-\frac{2W_{12}}{\Delta}
=-\frac{2W_{12}}{W_{22}-W_{11}}.
\label{eq:two_state_mixing_angle_tangent}
\end{align}
$$

Equivalently,

$$
\begin{align}
\theta(\mat q)
=-\frac{1}{2}
\operatorname{atan2}
\left(
2W_{12}(\mat q),
\Delta(\mat q)
\right),
\label{eq:two_state_mixing_angle_atan2}
\end{align}
$$

where $\operatorname{atan2}(y,x)$ is preferable to $\arctan(y/x)$ because it retains the correct quadrant. This matters near a conical intersection, where the mixing angle is multivalued and the electronic eigenvectors cannot be made globally single-valued without introducing a phase convention.

At the exact degeneracy,

$$
\Delta=0,
\qquad
W_{12}=0,
$$

so the mixing angle is undefined. This is not a defect of the algebra; it reflects the fact that the two adiabatic eigenvectors are not uniquely defined at a degeneracy.

---

### Nonadiabatic coupling vector as the gradient of the mixing angle

Assume for the moment that the diabatic basis is strictly diabatic in the local region of interest, so that

$$
\begin{align}
\braket{\varphi_i}{\nabla_{\mat q}\varphi_j}
=\mat 0.
\label{eq:strict_diabatic_basis_condition}
\end{align}
$$

In practice, for polyatomic molecules one usually works with local or quasi-diabatic states, so Eq. $\eqref{eq:strict_diabatic_basis_condition}$ is an idealisation. It is nevertheless the correct assumption for deriving the standard two-state model and explains why diabatic representations are useful: the singular derivative coupling is transferred into smooth potential-like couplings. This is also the reason DD-vMCG and related approaches prefer smooth quasi-diabatic potential surfaces near degeneracies. 

Using Eq. $\eqref{eq:adiabatic_states_from_diabatic_basis}$,

$$
\begin{align}
\nabla_{\mat q}\ket{\psi_2}
&=\nabla_{\mat q}
\left[
-\sin\theta\,\ket{\varphi_1}
+
\cos\theta\,\ket{\varphi_2}
\right]
\nonumber\\
&=(\nabla_{\mat q}\theta)
\left[
-\cos\theta\,\ket{\varphi_1}
-\sin\theta\,\ket{\varphi_2}
\right]
\nonumber\\
&=-(\nabla_{\mat q}\theta)
\ket{\psi_1}.
\end{align}
$$

Therefore, the first-order nonadiabatic coupling vector is

$$
\begin{align}
\F_{12}
=\braket{\psi_1}{\nabla_{\mat q}\psi_2}
=-\nabla_{\mat q}\theta.
\label{eq:nacv_as_gradient_theta}
\end{align}
$$

By antisymmetry,

$$
\begin{align}
\F_{21}
=-\F_{12}.
\end{align}
$$

Taking the gradient of Eq. $\eqref{eq:two_state_mixing_angle_atan2}$ gives

$$
\begin{align}
\F_{12}
=-\nabla_{\mat q}\theta
=\frac{
\Delta\,\nabla_{\mat q} W_{12}
-W_{12}\,\nabla_{\mat q}\Delta
}{
\Delta^2+4W_{12}^{2}
}.
\label{eq:nacv_general_two_state_diabatic}
\end{align}
$$

In component form,

$$
\begin{align}
F_{12,\alpha}
=\frac{
\Delta\,\pdv{W_{12}}{q_\alpha}
-W_{12}\,\pdv{\Delta}{q_\alpha}
}{
\Delta^2+4W_{12}^{2}
},
\qquad
\alpha=1,\ldots,f.
\label{eq:nacv_general_two_state_diabatic_component}
\end{align}
$$

Thus $\F_{12}\in\mathbb R^f$ is a vector in nuclear coordinate space. The denominator is the square of the adiabatic energy gap,

$$
\begin{align}
\Delta^2+4W_{12}^{2}
=(V_{+}-V_{-})^2.
\end{align}
$$

which reveals the nonadiabatic derivative coupling vector becomes large when the adiabatic energy gap becomes small, and it is singular at the exact conical intersection.


The sign of Eq. $\eqref{eq:nacv_general_two_state_diabatic}$ depends on the convention used for $\Cmat$ and for the ordering of $\psi_1,\psi_2$ 

If instead one uses the transposed rotation convention

$$
\Cmat'=\Cmat^T
=\begin{pmatrix}
\cos\theta & -\sin\theta\\
\sin\theta & \cos\theta
\end{pmatrix},
$$

then the sign of the mixing angle and hence the sign assigned to $\F_{12}$ changes.

---

## Linear vibronic coupling model near a conical intersection

Now expand the diabatic potential matrix around a point on the conical-intersection seam. Let this point be denoted by

$$
\begin{align}
\mat q_{\mathrm{CI}},
\end{align}
$$

and define the displacement from it as

$$
\begin{align}
\mat Q
=
\mat q-\mat q_{\mathrm{CI}}.
\end{align}
$$

At the conical intersection,

$$
\begin{align}
W_{11}(\mat q_{\mathrm{CI}})
=
W_{22}(\mat q_{\mathrm{CI}})
=
E^\times,
\qquad
W_{12}(\mat q_{\mathrm{CI}})=0.
\end{align}
$$

Equivalently,

$$
\begin{align}
\Delta(\mat q_{\mathrm{CI}})=0,
\qquad
W_{12}(\mat q_{\mathrm{CI}})=0.
\end{align}
$$

To first order in $\mat Q$, the two quantities that control the splitting are

$$
\begin{align}
\Delta(\mat Q)
&=
W_{22}(\mat Q)-W_{11}(\mat Q)
=\boldsymbol{\kappa}\cdot\mat Q
+O(Q^2),
\\[4pt]
W_{12}(\mat Q)
&=\boldsymbol{\lambda}\cdot\mat Q
+O(Q^2),
\label{eq:lvc_delta_and_coupling}
\end{align}
$$

where

$$
\begin{align}
\boldsymbol{\kappa}
&=
\nabla_{\mat q}
\left(
W_{22}-W_{11}
\right)_{\mat q=\mat q_{\mathrm{CI}}},
\\[4pt]
\boldsymbol{\lambda}
&=
\nabla_{\mat q}W_{12}\big|_{\mat q=\mat q_{\mathrm{CI}}}.
\label{eq:kappa_lambda_definitions}
\end{align}
$$

Both $\boldsymbol{\kappa}$ and $\boldsymbol{\lambda}$ are vectors in nuclear coordinate space. The vector $\boldsymbol{\kappa}$ describes how the diabatic energy gap changes with nuclear displacement. The vector $\boldsymbol{\lambda}$ describes how the off-diagonal diabatic coupling changes with nuclear displacement.

It is also useful to keep the average energy to first order. Define

$$
\begin{align}
\boldsymbol{\sigma}
=
\frac{1}{2}
\nabla_{\mat q}
\left(
W_{11}+W_{22}
\right)_{\mat q=\mat q_{\mathrm{CI}}}.
\label{eq:sigma_average_gradient_definition}
\end{align}
$$

Then the local two-state diabatic matrix may be written as

$$
\begin{align}
\mat W(\mat Q)
=
\left[
E^\times
+
\boldsymbol{\sigma}\cdot\mat Q
\right]\mat I
+
\begin{pmatrix}
-\boldsymbol{\kappa}\cdot\mat Q/2
&
\boldsymbol{\lambda}\cdot\mat Q
\\
\boldsymbol{\lambda}\cdot\mat Q
&
\boldsymbol{\kappa}\cdot\mat Q/2
\end{pmatrix}
+
O(Q^2).
\label{eq:lvc_model_with_average_slope}
\end{align}
$$

The common term $[E^\times+\boldsymbol{\sigma}\cdot\mat Q]\mat I$ shifts both states equally. It can tilt the conical intersection, but it does not lift the degeneracy.

Diagonalising Eq. $\eqref{eq:lvc_model_with_average_slope}$ gives

$$
\begin{align}
V_{\pm}(\mat Q)
=
E^\times
+
\boldsymbol{\sigma}\cdot\mat Q
\pm
\frac{1}{2}
\sqrt{
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
\label{eq:lvc_adiabatic_surfaces}
\end{align}
$$

The degeneracy is lifted only by displacements for which at least one of the two scalar projections

$$
\begin{align}
\boldsymbol{\kappa}\cdot\mat Q,
\qquad
\boldsymbol{\lambda}\cdot\mat Q
\end{align}
$$

is nonzero. Therefore the branching plane is spanned by $\boldsymbol{\kappa}$ and $\boldsymbol{\lambda}$. The intersection seam, to first order, consists of displacements satisfying

$$
\begin{align}
\boldsymbol{\kappa}\cdot\mat Q=0,
\qquad
\boldsymbol{\lambda}\cdot\mat Q=0.
\label{eq:lvc_seam_conditions}
\end{align}
$$

For a system with $f$ nuclear degrees of freedom, this seam has dimension $f-2$, provided $\boldsymbol{\kappa}$ and $\boldsymbol{\lambda}$ are linearly independent.

In many symmetry-induced conical intersections, these two vectors have a simple physical interpretation. The diagonal energy gap is modulated by a tuning coordinate, while the off-diagonal coupling is generated by a coupling coordinate. This is the standard tuning-mode/coupling-mode picture of the linear vibronic coupling model.

In vibronic-coupling notation one often defines

$$
\begin{align}
\boldsymbol{\delta}
=
\frac{1}{2}\boldsymbol{\kappa},
\end{align}
$$

so that

$$
\begin{align}
\frac{\Delta}{2}
=
\boldsymbol{\delta}\cdot\mat Q.
\end{align}
$$

This is the same local model written with a half-gap vector rather than the full gap-gradient vector $\boldsymbol{\kappa}$.

---

## Branching coordinates, $g$-$h$ notation, and seam coordinates

The previous section already identifies the two first-order directions that lift the degeneracy: $\boldsymbol{\kappa}$ and $\boldsymbol{\lambda}$. This section only changes the language used to describe them. It connects the local diabatic notation to the more common $g$-$h$ notation and then separates three related ideas:

1. the two branching coordinates, which lift the degeneracy;
2. the $f-2$ seam coordinates, which retain the degeneracy to first order;
3. the average-gradient vector, which tilts or shifts the degenerate pair but does not split it.

This distinction is useful because the phrase “branching space” is sometimes used loosely. Strictly, for a two-state conical intersection, the branching space is two-dimensional. The seam coordinates and the average-gradient vector are additional geometric objects, not additional branching directions.

---

### Relation to the $g$-$h$ branching-space notation

In the common $g$-$h$ notation, the branching plane is described by two vectors

$$
\begin{align}
\boldsymbol g_{ij},
\qquad
\boldsymbol h_{ij}.
\end{align}
$$

These are the gradient-difference vector and the interstate coupling vector, respectively.

For two states $i$ and $j$, the gradient-difference vector is commonly written as

$$
\begin{align}
\boldsymbol g_{ij}
=
\frac{1}{2}
\nabla_{\mat q}
\left[
V_j(\mat q)-V_i(\mat q)
\right]_{\mat q=\mat q_{\mathrm{CI}}},
\label{eq:g_vector_definition_intermediate}
\end{align}
$$

up to the sign convention used for ordering the two states. Reversing the labels $i$ and $j$ changes the sign of $\boldsymbol g_{ij}$, but not the branching plane.

> at an exact conical intersection, the individual adiabatic eigenvectors are not uniquely defined and the adiabatic energy surfaces are not differentiable in the usual single-surface sense. Equation $\eqref{eq:g_vector_definition_intermediate}$ should therefore be understood as a local branching-space definition within a chosen two-state degenerate subspace. Different choices of electronic gauge within that subspace can change signs or rotate the pair of branching vectors, but they do not change the two-dimensional branching plane.

The second branching-space vector is

$$
\begin{align}
\boldsymbol h_{ij}
=
\mel{\psi_i}
{
\nabla_{\mat q}\hat H_{\mathrm{el}}
}
{\psi_j}_{\mat r}
\bigg|_{\mat q=\mat q_{\mathrm{CI}}}.
\label{eq:h_vector_definition_intermediate}
\end{align}
$$

This vector is often called the derivative-coupling vector in the conical-intersection literature. In these notes it is better to call it the interstate coupling vector, or the derivative-coupling numerator, because the nonadiabatic coupling vector itself is

$$
\begin{align}
\F_{ij}
=
\braket{\psi_i}{\nabla_{\mat q}\psi_j}_{\mat r}
=
\frac{
\mel{\psi_i}
{
\nabla_{\mat q}\hat H_{\mathrm{el}}
}
{\psi_j}_{\mat r}
}{
V_j-V_i
},
\qquad
 i\neq j.
\label{eq:h_vector_nacv_relation_intermediate}
\end{align}
$$

Thus $\boldsymbol h_{ij}$ remains finite in the local branching-space model, while the NACV $\F_{ij}$ becomes singular as $V_j-V_i\rightarrow 0$.

The connection with the local diabatic notation is now direct. Since

$$
\begin{align}
\Delta(\mat Q)
=
W_{22}(\mat Q)-W_{11}(\mat Q)
=
\boldsymbol{\kappa}\cdot\mat Q
+O(Q^2),
\end{align}
$$

and

$$
\begin{align}
W_{12}(\mat Q)
=
\boldsymbol{\lambda}\cdot\mat Q
+O(Q^2),
\end{align}
$$

we have

$$
\begin{align}
\nabla_{\mat q}\Delta\big|_{\mat q=\mat q_{\mathrm{CI}}}
=\boldsymbol{\kappa},
\qquad
\nabla_{\mat q}W_{12}\big|_{\mat q=\mat q_{\mathrm{CI}}}
=\boldsymbol{\lambda}.
\end{align}
$$

With the convention $\Delta=W_{22}-W_{11}$, the local correspondence is

$$
\begin{align}
\boldsymbol g_{ij}
&\leftrightarrow
\frac{1}{2}\boldsymbol{\kappa},
\\[4pt]
\boldsymbol h_{ij}
&\leftrightarrow
\boldsymbol{\lambda},
\label{eq:gh_kappa_lambda_correspondence_intermediate}
\end{align}
$$

again up to signs set by the ordering of the electronic states and the local electronic gauge. Therefore the two scalar quantities that lift the degeneracy can be written either as

$$
\begin{align}
\boldsymbol{\kappa}\cdot\mat Q,
\qquad
\boldsymbol{\lambda}\cdot\mat Q,
\end{align}
$$

or, equivalently, in $g$-$h$ notation as

$$
\begin{align}
2\boldsymbol g_{ij}\cdot\mat Q,
\qquad
\boldsymbol h_{ij}\cdot\mat Q.
\end{align}
$$

Both descriptions define the same branching plane.

---

### Energy-like branching coordinates

One way to introduce coordinates in the branching plane is to use energy-like coordinates,

$$
\begin{align}
x_{\mathrm E}(\mat Q)
&=
\Delta(\mat Q)
=
\boldsymbol{\kappa}\cdot\mat Q
=
2\boldsymbol g_{ij}\cdot\mat Q,
\\[4pt]
y_{\mathrm E}(\mat Q)
&=
2W_{12}(\mat Q)
=2\boldsymbol{\lambda}\cdot\mat Q
=2\boldsymbol h_{ij}\cdot\mat Q.
\label{eq:energy_like_branching_coordinates}
\end{align}
$$

Then the local adiabatic gap becomes

$$
\begin{align}
V_+-V_-
=
\sqrt{x_{\mathrm E}^2+y_{\mathrm E}^2}.
\label{eq:lvc_gap_energy_coordinates}
\end{align}
$$

This coordinate choice is useful because the local double-cone topology is immediate. The degeneracy is retained only when both energy-like branching coordinates vanish,


$$
\begin{align}
x_{\mathrm E}=0,
\qquad
y_{\mathrm E}=0.
\end{align}
$$

These coordinates are useful because they are directly tied to the energy splitting. They are not necessarily orthonormal geometric coordinates in nuclear configuration space.

---

### Intersection-adapted geometric coordinates
A second approach is to choose an orthonormal coordinate system adapted to the conical intersection. The first two coordinates span the branching plane, while the remaining coordinates span the seam space.

Let
$$
\begin{align}
\hat{\boldsymbol x}_{ij},
\qquad
\hat{\boldsymbol y}_{ij}.
\end{align}
$$

These may be constructed from orthogonalised versions of $\boldsymbol g_{ij}$ and $\boldsymbol h_{ij}$. For example, after orthogonalising the two branching vectors, write

$$
\begin{align}
\hat{\boldsymbol x}_{ij}
=
\frac{\overline{\boldsymbol g}_{ij}}{\overline g},
\qquad
\hat{\boldsymbol y}_{ij}
=
\frac{\overline{\boldsymbol h}_{ij}}{\overline h},
\end{align}
$$

where

$$
\begin{align}
\overline g
=
\left\|\overline{\boldsymbol g}_{ij}\right\|,
\qquad
\overline h
=
\left\|\overline{\boldsymbol h}_{ij}\right\|.
\end{align}
$$

The corresponding geometric branching coordinates are

$$
\begin{align}
x
=
\hat{\boldsymbol x}_{ij}\cdot\mat Q,
\qquad
y
=
\hat{\boldsymbol y}_{ij}\cdot\mat Q.
\end{align}
$$

Now choose an orthonormal basis for the seam space,

$$
\begin{align}
\hat{\boldsymbol z}_1,
\hat{\boldsymbol z}_2,
\ldots,
\hat{\boldsymbol z}_{f-2},
\end{align}
$$

where each seam direction is orthogonal to the branching plane:

$$
\begin{align}
\hat{\boldsymbol z}_a\cdot\boldsymbol{\kappa}=0,
\qquad
\hat{\boldsymbol z}_a\cdot\boldsymbol{\lambda}=0,
\qquad
a=1,\ldots,f-2.
\end{align}
$$

Equivalently, in $g$-$h$ notation,

$$
\begin{align}
\hat{\boldsymbol z}_a\cdot\boldsymbol g_{ij}=0,
\qquad
\hat{\boldsymbol z}_a\cdot\boldsymbol h_{ij}=0.
\end{align}
$$

A general displacement from the chosen conical-intersection point can then be written as

$$
\begin{align}
\mat Q
=
x\,\hat{\boldsymbol x}_{ij}
+
y\,\hat{\boldsymbol y}_{ij}
+
\sum_{a=1}^{f-2}
z_a\,\hat{\boldsymbol z}_a.

\end{align}
$$

The coordinates $x$ and $y$ are branching coordinates. They move the system away from the seam and lift the degeneracy to first order. The coordinates

$$
\begin{align}
z_1,z_2,\ldots,z_{f-2}
\end{align}
$$

are seam coordinates. Motion along these directions does not lift the degeneracy to first order because it is orthogonal to both branching vectors.





---

### The average-gradient vector and cone tilt

The branching vectors determine the energy splitting. A separate vector determines the common slope of the two-state pair. Define the average-gradient vector

$$
\begin{align}
\boldsymbol s_{ij}
=
\frac{1}{2}
\nabla_{\mat q}
\left[
V_i(\mat q)+V_j(\mat q)
\right]_{\mat q=\mat q_{\mathrm{CI}}}.
\label{eq:average_gradient_vector_sij}
\end{align}
$$

In the local diabatic notation, this corresponds to

$$
\begin{align}
\boldsymbol s_{ij}
\leftrightarrow
\boldsymbol{\sigma}
=
\frac{1}{2}
\nabla_{\mat q}
\left(
W_{11}+W_{22}
\right)_{\mat q=\mat q_{\mathrm{CI}}}.
\end{align}
$$

The vector in Eq. $\eqref{eq:average_gradient_vector_sij}$ does not split the two states. It shifts both adiabatic energies by the same amount because it contributes to the part of the two-state Hamiltonian proportional to the identity matrix.

Its projections onto the intersection-adapted coordinate system are

$$
\begin{align}
s_x
=
\boldsymbol s_{ij}\cdot\hat{\boldsymbol x}_{ij},
\qquad
s_y
=
\boldsymbol s_{ij}\cdot\hat{\boldsymbol y}_{ij},
\end{align}
$$

and

$$
\begin{align}
s_a
=
\boldsymbol s_{ij}\cdot\hat{\boldsymbol z}_a,
\qquad
a=1,\ldots,f-2.
\end{align}
$$

The projections $s_x$ and $s_y$ tilt the cone in the branching plane. The projections $s_a$ describe how the common energy of the degenerate pair changes as one moves along the seam.

Important caveat: saying that $\boldsymbol s_{ij}$ does not lift the degeneracy does not mean that a displacement parallel to $\boldsymbol s_{ij}$ is automatically a seam displacement. If $\boldsymbol s_{ij}$ has components in the branching plane, then moving along $\boldsymbol s_{ij}$ also changes $x$ and $y$, and the degeneracy is lifted by the branching terms. The point is only that $\boldsymbol s_{ij}$ itself enters the Hamiltonian as a common energy shift, not as a splitting term.

---

### Local Hamiltonian in intersection-adapted coordinates

With these definitions, the first-order local Hamiltonian can be written as

$$
\begin{align}
\mat W_{\mathrm{IA}}(x,y,\{z_a\})
=
\left[
E^\times
+
s_x x
+
s_y y
+
\sum_{a=1}^{f-2}
s_a z_a
\right]\mat I
+
\begin{pmatrix}
-\overline g x
&
\overline h y
\\
\overline h y
&
\overline g x
\end{pmatrix}
+
O(Q^2).
\label{eq:intersection_adapted_hamiltonian_full}
\end{align}
$$

Here $E^\times$ is the energy at the chosen conical-intersection point. The first term is proportional to the identity matrix and therefore shifts both states equally. The second term is the part that splits the two states.

The corresponding adiabatic energies are

$$
\begin{align}
V_{\pm}(x,y,\{z_a\})
=
E^\times
+
s_x x
+
s_y y
+
\sum_{a=1}^{f-2}
s_a z_a
\pm
\sqrt{
(\overline g x)^2
+
(\overline h y)^2
}
+
O(Q^2).
\label{eq:intersection_adapted_eigenvalues_full}
\end{align}
$$

Therefore the adiabatic energy gap is

$$
\begin{align}
V_+-V_-
=
2
\sqrt{
(\overline g x)^2
+
(\overline h y)^2
}
+
O(Q^2).
\label{eq:intersection_adapted_gap}
\end{align}
$$

The gap depends only on the branching coordinates to first order. It does not depend on $s_x$, $s_y$, or $s_a$, because these coefficients appear only in the common energy shift.

If

$$
\begin{align}
x=0,
\qquad
y=0,
\end{align}
$$

then the splitting vanishes to first order for arbitrary seam coordinates $z_a$. Along the seam,

$$
\begin{align}
V_+
=
V_-
=
E^\times
+
\sum_{a=1}^{f-2}
s_a z_a
+
O(z^2).
\label{eq:energy_along_seam}
\end{align}
$$

Thus the seam coordinates move the system along the intersection seam, while the branching coordinates move the system away from the seam and lift the degeneracy.

---

### Branching-plane restriction

If one restricts attention to the branching plane itself, then all seam coordinates are set to zero:

$$
\begin{align}
z_a=0,
\qquad
a=1,\ldots,f-2.
\end{align}
$$

Equation $\eqref{eq:intersection_adapted_hamiltonian_full}$ then reduces to

$$
\begin{align}
\mat W_{\mathrm{bs}}(x,y)
=
\left[
E^\times
+
s_x x
+
s_y y
\right]\mat I
+
\begin{pmatrix}
-\overline g x
&
\overline h y
\\
\overline h y
&
\overline g x
\end{pmatrix}.
\label{eq:branching_space_hamiltonian_gh}
\end{align}
$$

The corresponding energies are

$$
\begin{align}
V_{\pm}(x,y)
=
E^\times
+
s_x x
+
s_y y
\pm
\sqrt{
(\overline g x)^2
+
(\overline h y)^2
}.
\label{eq:branching_space_eigenvalues_gh}
\end{align}
$$

This is the familiar double-cone form, tilted by the common term $s_x x+s_y y$. The parameters $\overline g$ and $\overline h$ control the slopes of the cone in the two branching directions, while $s_x$ and $s_y$ control the tilt of the cone.

The relation between the energy-like coordinates and these geometric coordinates is, in this canonical representation,

$$
\begin{align}
x_{\mathrm E}
=
2\overline g x,
\qquad
y_{\mathrm E}
=
2\overline h y.
\end{align}
$$

Thus the energy-like and geometric descriptions differ only by scale factors and by the chosen orthonormal basis in the branching plane.

---

### Summary

The local two-state conical-intersection model can therefore be described in three related languages.

In the diabatic LVC notation,

$$
\begin{align}
\boldsymbol{\kappa}
=
\nabla_{\mat q}
(W_{22}-W_{11})_{\mat q=\mat q_{\mathrm{CI}}},
\qquad
\boldsymbol{\lambda}
=
\nabla_{\mat q}W_{12}\big|_{\mat q=\mat q_{\mathrm{CI}}}.
\end{align}
$$

In the $g$-$h$ notation,

$$
\begin{align}
\boldsymbol g_{ij}
\leftrightarrow
\frac{1}{2}\boldsymbol{\kappa},
\qquad
\boldsymbol h_{ij}
\leftrightarrow
\boldsymbol{\lambda}.
\end{align}
$$

In intersection-adapted coordinates,

$$
\begin{align}
\mat Q
=
x\,\hat{\boldsymbol x}_{ij}
+
y\,\hat{\boldsymbol y}_{ij}
+
\sum_{a=1}^{f-2}
z_a\,\hat{\boldsymbol z}_a.
\end{align}
$$

The two coordinates $x$ and $y$ form the branching plane. The remaining $f-2$ coordinates $z_a$ form the seam space.

The average-gradient vector

$$
\begin{align}
\boldsymbol s_{ij}
=
\frac{1}{2}
\nabla_{\mat q}
(V_i+V_j)_{\mat q=\mat q_{\mathrm{CI}}}
\end{align}
$$

is not an additional branching vector. It controls the common slope of the two surfaces. Its projections $s_x$ and $s_y$ tilt the cone in the branching plane, while its projections $s_a$ describe how the common energy changes along the seam.

The essential distinction is

$$
\boxed{
\text{branching coordinates lift the degeneracy;}
}
$$

$$
\boxed{
\text{seam coordinates retain the degeneracy to first order;}
}
$$

$$
\boxed{
\text{the average-gradient vector shifts or tilts the degenerate pair but does not split it.}
}
$$

--- 

## NACV in the LVC model

Substituting the LVC expressions

$$
\Delta=\boldsymbol{\kappa}\cdot\mat q,
\qquad
W_{12}=\boldsymbol{\lambda}\cdot\mat q,
\qquad
\boldsymbol{\kappa} =\nabla_\mat q \Delta,\qquad
 \boldsymbol{\lambda} = \nabla_\mat q W_{12}
$$

into Eq. $\eqref{eq:nacv_general_two_state_diabatic}$ gives

$$
\begin{align}
\F_{12}(\mat q)
=\frac{
(\boldsymbol{\kappa}\cdot\mat q)\boldsymbol{\lambda}
-(\boldsymbol{\lambda}\cdot\mat q)\boldsymbol{\kappa}
}{
(\boldsymbol{\kappa}\cdot\mat q)^2
+
4(\boldsymbol{\lambda}\cdot\mat q)^2
}.
\label{eq:lvc_nacv_vector}
\end{align}
$$

Equivalently, using the energy-like coordinates


$$
x=\Delta,
\qquad
y=2W_{12},
$$

one obtains

$$
\begin{align}
\F_{12}
=\frac{1}{2}
\frac{
x\,\nabla_{\mat q}y
-y\,\nabla_{\mat q}x
}{
x^2+y^2
}.
\label{eq:lvc_nacv_energy_coordinate_form}
\end{align}
$$

If $x$ and $y$ themselves are used as the local coordinates in the branching plane, this becomes

$$
\begin{align}
\F_{12}
=\frac{1}{2(x^2+y^2)}
\begin{pmatrix}
-y\\
x
\end{pmatrix}.
\end{align}
$$

This form shows that the two-state NACV has a vortex-like structure in the branching plane. Away from the conical intersection, it is locally the gradient of the mixing angle. At the conical intersection, the field is singular because $x=y=0$.

For a positively oriented loop in the $(x,y)$ branching plane, the convention used above gives (see [sign of closed-contour integral of F](../derivations/derivations_signconvention_closedloopf.md) for the origin of the sign convention in this knowledge base)

$$
\begin{align}
\oint \F_{12}\cdot d\mat q
=-\oint \nabla_{\mat q}\theta\cdot d\mat q=+\pi.
\end{align}
$$

Changing the sign convention for the adiabatic states or reversing the orientation of the loop changes the sign. Thus the convention-independent statement is that the magnitude of the accumulated rotation is $\pi$, corresponding to the familiar sign change of real adiabatic eigenvectors after one circuit around a conical intersection.



---

### Lorentzian form along a one-dimensional cut

The full two-dimensional NACV in Eq. $\eqref{eq:lvc_nacv_vector}$ is not itself a Lorentzian; it is a singular vector field in the branching plane. The Lorentzian form appears when one takes a one-dimensional cut through the branching plane while holding the other branching coordinate fixed.

Assume that the two branching coordinates are orthogonal and write

$$
\begin{align}
\Delta
=a\,q_{\kappa},
\qquad
W_{12}
=b\,q_{\lambda},
\label{eq:lvc_orthogonal_ab_model}
\end{align}
$$

where

$$
\begin{align}
a=\lVert\boldsymbol{\kappa}\rVert,
\qquad
b=\lVert\boldsymbol{\lambda}\rVert.
\end{align}
$$

Then

$$
\begin{align}
\F_{12}
=\frac{
ab\left(
q_{\kappa}\hat{\boldsymbol{\lambda}}
-q_{\lambda}\hat{\boldsymbol{\kappa}}
\right)
}{a^2q_{\kappa}^{2}
+4b^2q_{\lambda}^{2}
}.
\label{eq:lvc_nacv_orthogonal_branching_plane}
\end{align}
$$

Now take a cut along the tuning coordinate $q_{\kappa}$, while holding the coupling coordinate fixed at $q_{\lambda}=q_{\lambda}^{(0)}\neq0$. The component of the NACV along the tuning coordinate is

$$
\begin{align}
F_{12,\kappa}
(q_{\kappa};q_{\lambda}^{(0)})
&=
\F_{12}\cdot\hat{\boldsymbol{\kappa}}
\nonumber\\
&=-\frac{
ab\,q_{\lambda}^{(0)}
}{
a^2q_{\kappa}^{2}
+4b^2
\left(q_{\lambda}^{(0)}\right)^2
}.
\label{eq:lvc_lorentzian_raw}
\end{align}
$$

This can be written in Lorentzian form as

$$
\begin{align}
F_{12,\kappa}
(q_{\kappa};q_{\lambda}^{(0)})
=-\frac{a}{4b\,q_{\lambda}^{(0)}}
\frac{1}{
1+\left(
q_{\kappa}/\Gamma_{\kappa}
\right)^2
},
\label{eq:lvc_lorentzian_form}
\end{align}
$$

with half-width

$$
\begin{align}
\Gamma_{\kappa}
=\frac{
2|bq_{\lambda}^{(0)}|
}{
|a|
}.
\label{eq:lvc_lorentzian_width}
\end{align}
$$

Thus, along a one-dimensional slice, the derivative coupling is peaked at the avoided crossing point $q_{\kappa}=0$. The smaller the fixed off-diagonal coupling $bq_{\lambda}^{(0)}$, the narrower and taller the Lorentzian becomes. In the limit

$$
q_{\lambda}^{(0)}\rightarrow 0,
$$

the avoided crossing becomes the true conical intersection, and the NACV becomes singular.

The integrated area remains finite:

$$
\begin{align}
\int_{-\infty}^{+\infty}
F_{12,\kappa}(q_{\kappa};q_{\lambda}^{(0)})
\,dq_{\kappa}
=-\frac{\pi}{2}
\,\operatorname{sgn}
\left(q_{\lambda}^{(0)}\right),
\label{eq:lvc_lorentzian_integral}
\end{align}
$$

assuming $a,b>0$. This finite area reflects the finite change in the mixing angle as the system passes through the avoided crossing.

A similar Lorentzian is obtained for the component along the coupling coordinate if one instead holds $q_{\kappa}$ fixed and scans along $q_{\lambda}$.

---

## Practical comments for the surrounding discussion

The two-state LVC model is local. It is designed to describe the topology near a chosen point on the conical-intersection seam. Higher-order terms, additional tuning modes, and additional electronic states can change the global shape of the surfaces, but the local two-condition structure

$$
\Delta=0,
\qquad
W_{12}=0
$$

is the essential reason a two-state conical intersection has a two-dimensional branching plane and an $(f-2)$-dimensional seam.

In direct-dynamics contexts, this local picture explains why smooth diabatic or quasi-diabatic surfaces are preferred. In the adiabatic representation, the surfaces are not differentiable at the degeneracy and the nonadiabatic coupling diverges; in the diabatic representation, the singular derivative coupling is replaced by smooth potential couplings. DD-vMCG implementations therefore use diabatisation schemes to generate smooth diabatic potential surfaces suitable for local harmonic approximations and propagation. 

However, if the rotation matrix is chosen as

$$
\begin{pmatrix}
\cos\theta & -\sin\theta\\
\sin\theta & \cos\theta
\end{pmatrix}
$$

instead of Eq. $\eqref{eq:two_state_rotation_matrix}$, then the sign of $\theta$ and of $\F_{12}$ changes. This is not a physical change. It is only a phase convention for the adiabatic eigenvectors. What matters is that the convention is used consistently throughout the derivation and in the coupled nuclear equations.

---
