

## Two-state diabatic model, conical intersections, and the Lorentzian form of the NACV

### Real two-state diabatic potential matrix

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

Here \(\mat q\in\mathbb R^f\) is the nuclear coordinate vector, usually mass-scaled in the present notes. The matrix \(\mat W\) is a \(2\times2\) matrix in electronic-state space. Each element \(W_{ij}(\mat q)\) is a scalar function of the nuclear coordinates.

The matrix is real and symmetric because the diabatic basis has been chosen real and no complex phase convention, magnetic field, or spin-orbit complication is being considered. The diagonal elements \(W_{11}\) and \(W_{22}\) are the diabatic potentials, while the off-diagonal element \(W_{12}\) is the diabatic coupling.

It is useful to define the average and difference functions

$$
\begin{align}
\bar W(\mat q)
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

Then Eq. \(\eqref{eq:two_state_diabatic_matrix}\) can be written as

$$
\begin{align}
\mat W
=\bar W \mat I
+
\begin{pmatrix}
-\Delta/2 & W_{12}\\
W_{12} & \Delta/2
\end{pmatrix}.
\label{eq:two_state_pauli_form}
\end{align}
$$

This form separates the part that shifts both adiabatic energies equally, \(\bar W\mat I\), from the part that controls the splitting between the two states.

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
=\bar W(\mat q)
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

These are two independent scalar conditions. In an \(f\)-dimensional nuclear coordinate space, their simultaneous solution generally defines an \((f-2)\)-dimensional intersection seam, provided the two conditions are independent. The two directions that lift the degeneracy form the **branching space**, also called the \(g\)-\(h\) plane. The remaining directions form the **intersection space**, along which the degeneracy is retained to first order. This is the standard local picture of a two-state conical intersection: near the degeneracy, the adiabatic surfaces form a double cone in the branching plane. :contentReference[oaicite:0]{index=0}

---

## Mixing-angle representation of the adiabatic states

Since \(\mat W\) is real symmetric, it can be diagonalised by a real orthogonal matrix. We write

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
\Cmat^{T}\mat W\Cmat
=\begin{pmatrix}
V_1 & 0\\
0 & V_2
\end{pmatrix}.
\label{eq:two_state_diagonalisation}
\end{align}
$$

Equivalently, the adiabatic states are expressed in the diabatic basis as

$$
\begin{align}
\ket{\psi_1}
&=\cos\theta\,\ket{\varphi_1}
-\sin\theta\,\ket{\varphi_2},\\
\ket{\psi_2}
&=\sin\theta\,\ket{\varphi_1}
+\cos\theta\,\ket{\varphi_2}.
\label{eq:adiabatic_states_from_diabatic_basis}
\end{align}
$$

The off-diagonal element of \(\Cmat^{T}\mat W\Cmat\) is

$$
\begin{align}
(\Cmat^{T}\mat W\Cmat)_{12}
&=W_{12}(\cos^2\theta-\sin^2\theta)
+(W_{11}-W_{22})\sin\theta\cos\theta
\nonumber\\
&=W_{12}\cos(2\theta)
-\frac{\Delta}{2}\sin(2\theta).
\end{align}
$$

Diagonalisation requires this expression to vanish:

$$
\begin{align}
W_{12}\cos(2\theta)
-\frac{\Delta}{2}\sin(2\theta)
=0.
\end{align}
$$

Therefore,

$$
\begin{align}
\tan(2\theta)
=\frac{2W_{12}}{\Delta}
=\frac{2W_{12}}{W_{22}-W_{11}}.
\label{eq:two_state_mixing_angle_tangent}
\end{align}
$$

Equivalently,

$$
\begin{align}
\theta(\mat q)
=\frac{1}{2}
\operatorname{atan2}
\left(
2W_{12}(\mat q),
\Delta(\mat q)
\right),
\label{eq:two_state_mixing_angle_atan2}
\end{align}
$$

where \(\operatorname{atan2}(y,x)\) is preferable to \(\arctan(y/x)\) because it retains the correct quadrant. This matters near a conical intersection, where the mixing angle is multivalued and the electronic eigenvectors cannot be made globally single-valued without introducing a phase convention.

At the exact degeneracy,

$$
\Delta=0,
\qquad
W_{12}=0,
$$

so the mixing angle is undefined. This is not a defect of the algebra; it reflects the fact that the two adiabatic eigenvectors are not uniquely defined at a degeneracy.

---

## Nonadiabatic coupling vector as the gradient of the mixing angle

Assume for the moment that the diabatic basis is strictly diabatic in the local region of interest, so that

$$
\begin{align}
\braket{\varphi_i}{\nabla_{\mat q}\varphi_j}
=\mat 0.
\label{eq:strict_diabatic_basis_condition}
\end{align}
$$

In practice, for polyatomic molecules one usually works with local or quasi-diabatic states, so Eq. \(\eqref{eq:strict_diabatic_basis_condition}\) is an idealisation. It is nevertheless the correct assumption for deriving the standard two-state model and explains why diabatic representations are useful: the singular derivative coupling is transferred into smooth potential-like couplings. This is also the reason DD-vMCG and related approaches prefer smooth quasi-diabatic potential surfaces near degeneracies. :contentReference[oaicite:1]{index=1}

Using Eq. \(\eqref{eq:adiabatic_states_from_diabatic_basis}\),

$$
\begin{align}
\nabla_{\mat q}\ket{\psi_2}
&=\nabla_{\mat q}
\left[
\sin\theta\,\ket{\varphi_1}
+
\cos\theta\,\ket{\varphi_2}
\right]
\nonumber\\
&=(\nabla_{\mat q}\theta)
\left[
\cos\theta\,\ket{\varphi_1}
-\sin\theta\,\ket{\varphi_2}
\right]
\nonumber\\
&=(\nabla_{\mat q}\theta)
\ket{\psi_1}.
\end{align}
$$

Therefore, the first-order nonadiabatic coupling vector is

$$
\begin{align}
\F_{12}
=\braket{\psi_1}{\nabla_{\mat q}\psi_2}
=\nabla_{\mat q}\theta.
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

Taking the gradient of Eq. \(\eqref{eq:two_state_mixing_angle_atan2}\) gives

$$
\begin{align}
\F_{12}
=\nabla_{\mat q}\theta
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

Thus \(\F_{12}\in\mathbb R^f\) is a vector in nuclear coordinate space. The denominator is the square of the adiabatic energy gap,

$$
\begin{align}
\Delta^2+4W_{12}^{2}
=(V_{+}-V_{-})^2.
\end{align}
$$

This makes the singular behaviour transparent: the derivative coupling becomes large when the adiabatic energy gap becomes small, and it is singular at the exact conical intersection.

The sign of Eq. \(\eqref{eq:nacv_general_two_state_diabatic}\) depends on the convention used for \(\Cmat\) and for the ordering of \(\psi_1,\psi_2\). Changing the sign of one adiabatic eigenvector changes the sign of the corresponding coupling vector. The physically meaningful object is the coupled nuclear equation, or equivalently the globally consistent phase convention.

---

## Linear vibronic coupling model near a conical intersection

Now expand the diabatic potential matrix around a point on the intersection seam. Let \(\mat q=\mat 0\) denote the chosen conical-intersection point. To first order,

$$
\begin{align}
\Delta(\mat q)
&=W_{22}(\mat q)-W_{11}(\mat q)
=\boldsymbol{\kappa}\cdot\mat q
+
O(q^2),
\\[4pt]
W_{12}(\mat q)
&=\boldsymbol{\lambda}\cdot\mat q
+O(q^2).
\label{eq:lvc_delta_and_coupling}
\end{align}
$$

Here

$$
\begin{align}
\boldsymbol{\kappa}
=\nabla_{\mat q}
\left(
W_{22}-W_{11}
\right)_{\mat q=\mat 0},
\qquad
\boldsymbol{\lambda}
=\nabla_{\mat q}W_{12}\big|_{\mat q=\mat 0}.
\label{eq:kappa_lambda_definitions}
\end{align}
$$

Both \(\boldsymbol{\kappa}\) and \(\boldsymbol{\lambda}\) are \(f\)-dimensional vectors in nuclear coordinate space. The vector \(\boldsymbol{\kappa}\) is the diabatic energy-gap gradient. It is proportional to the usual gradient-difference vector. The vector \(\boldsymbol{\lambda}\) is the linear diabatic coupling vector. In the notation often used in vibronic-coupling treatments, one defines

$$
\begin{align}
\boldsymbol{\delta}
=\frac{1}{2}
\boldsymbol{\kappa}.
\end{align}
$$

so that \(\Delta/2=\boldsymbol{\delta}\cdot\mat q\). The linear vibronic coupling expansion and the identification of the gradient-difference and coupling vectors are standard in vibronic-coupling descriptions of conical intersections. :contentReference[oaicite:2]{index=2}

Substituting Eq. \(\eqref{eq:lvc_delta_and_coupling}\) into Eq. \(\eqref{eq:two_state_adiabatic_energies}\) gives

$$
\begin{align}
V_{\pm}(\mat q)
=\bar W(\mat q)
\pm
\frac{1}{2}
\sqrt{
\left(
\boldsymbol{\kappa}\cdot\mat q
\right)^2
+
4
\left(
\boldsymbol{\lambda}\cdot\mat q
\right)^2
}
+
O(q^2).
\label{eq:lvc_adiabatic_surfaces}
\end{align}
$$

The degeneracy is lifted only by displacements for which at least one of the two scalar projections

$$
\begin{align}
\boldsymbol{\kappa}\cdot\mat q,
\qquad
\boldsymbol{\lambda}\cdot\mat q
\end{align}
$$

is nonzero. Therefore, the branching plane is spanned by \(\boldsymbol{\kappa}\) and \(\boldsymbol{\lambda}\). The intersection seam consists of displacements satisfying

$$
\begin{align}
\boldsymbol{\kappa}\cdot\mat q=0,
\qquad
\boldsymbol{\lambda}\cdot\mat q=0.
\label{eq:lvc_seam_conditions}
\end{align}
$$

For a system with \(f\) nuclear degrees of freedom, this seam has dimension \(f-2\), provided \(\boldsymbol{\kappa}\) and \(\boldsymbol{\lambda}\) are linearly independent.

In many symmetry-induced conical intersections, these two vectors have a simple physical interpretation. The diagonal energy gap is modulated by a totally symmetric tuning coordinate, while the off-diagonal coupling is generated by a non-totally symmetric coupling coordinate. This is the standard tuning-mode/coupling-mode picture of linear vibronic coupling. :contentReference[oaicite:3]{index=3}

---

## Branching coordinates

There are two common ways to define the branching coordinates.

First, one may define **energy-like branching coordinates**

$$
\begin{align}
x(\mat q)
=\boldsymbol{\kappa}\cdot\mat q,
\qquad
y(\mat q)
=2\boldsymbol{\lambda}\cdot\mat q.
\label{eq:energy_like_branching_coordinates}
\end{align}
$$

Then the local adiabatic gap is simply

$$
\begin{align}
V_{+}-V_{-}
=\sqrt{x^2+y^2}.
\label{eq:lvc_gap_energy_coordinates}
\end{align}
$$

In these coordinates the conical topology is immediate.

Second, one may define **orthonormal geometric branching coordinates**. If \(\boldsymbol{\kappa}\) and \(\boldsymbol{\lambda}\) are orthogonal, set

$$
\begin{align}
q_{\kappa}
=\hat{\boldsymbol{\kappa}}\cdot\mat q,
\qquad
q_{\lambda}
=\hat{\boldsymbol{\lambda}}\cdot\mat q,
\end{align}
$$

where

$$
\begin{align}
\hat{\boldsymbol{\kappa}}
=\frac{\boldsymbol{\kappa}}{\lVert\boldsymbol{\kappa}\rVert},
\qquad
\hat{\boldsymbol{\lambda}}
=\frac{\boldsymbol{\lambda}}{\lVert\boldsymbol{\lambda}\rVert}.
\end{align}
$$

Then

$$
\begin{align}
\Delta
=\lVert\boldsymbol{\kappa}\rVert q_{\kappa},
\qquad
W_{12}
=\lVert\boldsymbol{\lambda}\rVert q_{\lambda}.
\end{align}
$$

If \(\boldsymbol{\kappa}\) and \(\boldsymbol{\lambda}\) are not orthogonal, one can orthonormalise the two-dimensional space they span, for example by Gram-Schmidt orthogonalisation. The branching space is unchanged; only the coordinate representation changes.

In this orthogonal branching-plane representation, Eq. \(\eqref{eq:lvc_adiabatic_surfaces}\) becomes

$$
\begin{align}
V_{\pm}
=\bar W
\pm
\frac{1}{2}
\sqrt{
\lVert\boldsymbol{\kappa}\rVert^2 q_{\kappa}^{2}
+
4\lVert\boldsymbol{\lambda}\rVert^2 q_{\lambda}^{2}
}.
\label{eq:lvc_surfaces_orthogonal_branching_coords}
\end{align}
$$

If \(\bar W\) is locally flat, this is a symmetric double cone. If \(\bar W\) has a nonzero gradient in the branching plane, the cone is tilted. This gives the usual distinction between peaked and sloped conical intersections. A two-mode LVC Hamiltonian with one tuning mode and one coupling mode is often the minimal model needed to capture this local topology. :contentReference[oaicite:4]{index=4}

---

## NACV in the LVC model

Substituting the LVC expressions

$$
\Delta=\boldsymbol{\kappa}\cdot\mat q,
\qquad
W_{12}=\boldsymbol{\lambda}\cdot\mat q
$$

into Eq. \(\eqref{eq:nacv_general_two_state_diabatic}\) gives

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

Equivalently, using the energy-like coordinates \(x=\Delta\) and \(y=2W_{12}\),

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

This form shows that the two-state NACV has a vortex-like structure in the branching plane. Away from the conical intersection, it is locally the gradient of the mixing angle. At the conical intersection, the field is singular because \(x=y=0\).

If a closed loop encircles the conical intersection once, the mixing angle changes by \(\pi\). Equivalently,

$$
\begin{align}
\oint \F_{12}\cdot d\mat q
=\oint \nabla_{\mat q}\theta\cdot d\mat q
=\pi
\end{align}
$$

up to sign convention. This is the local two-state expression of the familiar sign change of real adiabatic eigenvectors around a conical intersection.

---

## Lorentzian form along a one-dimensional cut

The full two-dimensional NACV in Eq. \(\eqref{eq:lvc_nacv_vector}\) is not itself a Lorentzian; it is a singular vector field in the branching plane. The Lorentzian form appears when one takes a one-dimensional cut through the branching plane while holding the other branching coordinate fixed.

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

Now take a cut along the tuning coordinate \(q_{\kappa}\), while holding the coupling coordinate fixed at \(q_{\lambda}=q_{\lambda}^{(0)}\neq0\). The component of the NACV along the tuning coordinate is

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

Thus, along a one-dimensional slice, the derivative coupling is peaked at the avoided crossing point \(q_{\kappa}=0\). The smaller the fixed off-diagonal coupling \(bq_{\lambda}^{(0)}\), the narrower and taller the Lorentzian becomes. In the limit

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

assuming \(a,b>0\). This finite area reflects the finite change in the mixing angle as the system passes through the avoided crossing.

A similar Lorentzian is obtained for the component along the coupling coordinate if one instead holds \(q_{\kappa}\) fixed and scans along \(q_{\lambda}\).

---

## Practical comments for the surrounding discussion

The two-state LVC model is local. It is designed to describe the topology near a chosen point on the conical-intersection seam. Higher-order terms, additional tuning modes, and additional electronic states can change the global shape of the surfaces, but the local two-condition structure

$$
\Delta=0,
\qquad
W_{12}=0
$$

is the essential reason a two-state conical intersection has a two-dimensional branching plane and an \((f-2)\)-dimensional seam.

In direct-dynamics contexts, this local picture explains why smooth diabatic or quasi-diabatic surfaces are preferred. In the adiabatic representation, the surfaces are not differentiable at the degeneracy and the nonadiabatic coupling diverges; in the diabatic representation, the singular derivative coupling is replaced by smooth potential couplings. DD-vMCG implementations therefore use diabatisation schemes to generate smooth diabatic potential surfaces suitable for local harmonic approximations and propagation. :contentReference[oaicite:5]{index=5}

A final convention warning is important. If the rotation matrix is chosen as

$$
\begin{pmatrix}
\cos\theta & -\sin\theta\\
\sin\theta & \cos\theta
\end{pmatrix}
$$

instead of Eq. \(\eqref{eq:two_state_rotation_matrix}\), then the sign of \(\theta\) and of \(\F_{12}\) changes. This is not a physical change. It is only a phase convention for the adiabatic eigenvectors. What matters is that the convention is used consistently throughout the derivation and in the coupled nuclear equations.

---
