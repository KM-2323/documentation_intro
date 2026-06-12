## Characterisation of conical intersections by topography

As discussed in [Introduction to conical intersections](../beginer/04_conical_intersections.md) and [Conical intersections: intermediate](int02_conical_intersections.md), conical intersections can be classified in several complementary ways. Symmetry explains why a degeneracy is allowed or required. Topology explains the phase and sign behaviour of the electronic states around a closed loop. Topography, which is the focus of this section, describes the local shape of the two adiabatic potential energy surfaces in the branching plane.

The word **topography** is important here. We are not yet discussing the Berry phase, the topological matrix, or the sign change of the electronic wavefunction after a loop around a conical intersection. Instead, we are asking how steep, asymmetric, tilted, peaked, sloped, single-path, or bifurcating the local double cone is.

The local topography can be described using the two-state Hamiltonian in the intersection-adapted coordinates introduced in [Conical intersections: intermediate](int02_conical_intersections.md). We first recall the notation, then define the topographical parameters.

---

### Quick reminder: two-state LVC form

This section briefly recalls the notation from [Conical intersections: intermediate](int02_conical_intersections.md). The purpose is not to rederive the two-state model, but to define the quantities used in the topographical classification below.

A two-state diabatic potential matrix is

$$
\begin{align}
\mat W(\mat q)
=
\begin{pmatrix}
W_{11}(\mat q) & W_{12}(\mat q)\\
W_{12}(\mat q) & W_{22}(\mat q)
\end{pmatrix}.
\label{eq:two_state_diabatic_matrix_topography}
\end{align}
$$

Define

$$
\begin{align}
\Sigma(\mat q)
&=
\frac{1}{2}
\left[
W_{11}(\mat q)+W_{22}(\mat q)
\right],
\\
\Delta(\mat q)
&=
W_{22}(\mat q)-W_{11}(\mat q).
\label{eq:delta_definition_two_state_topography}
\end{align}
$$

Then

$$
\begin{align}
\mat W(\mat q)
=
\Sigma(\mat q)\mat I
+
\begin{pmatrix}
-\Delta(\mat q)/2 & W_{12}(\mat q)\\
W_{12}(\mat q) & \Delta(\mat q)/2
\end{pmatrix}.
\label{eq:two_state_pauli_form_topography}
\end{align}
$$

Let $\mat q_{\mathrm{CI}}$ be a chosen point on the conical-intersection seam, and define the displacement

$$
\begin{align}
\mat Q
=
\mat q-\mat q_{\mathrm{CI}}.
\end{align}
$$

To first order, the local linear vibronic coupling model is

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
\label{eq:lvc_model_with_average_slope_topography}
\end{align}
$$

Here

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
\nabla_{\mat q}W_{12}\big|_{\mat q=\mat q_{\mathrm{CI}}},
\\[4pt]
E^\times
&=
W_{11}(\mat q_{\mathrm{CI}})
=
W_{22}(\mat q_{\mathrm{CI}}),
\\[4pt]
\boldsymbol{\sigma}
&=
\frac{1}{2}
\nabla_{\mat q}
\left(
W_{11}+W_{22}
\right)_{\mat q=\mat q_{\mathrm{CI}}}.
\label{eq:lvc_parameters_definitions_topography}
\end{align}
$$

The vector $\boldsymbol{\kappa}$ controls the diagonal energy splitting, while $\boldsymbol{\lambda}$ controls the off-diagonal coupling. These two vectors span the branching plane. The vector $\boldsymbol{\sigma}$ controls the common slope of the average energy and can tilt the cone, but it does not itself split the two states.

#### Relation to g-h notation
In the more common $g$-$h$ notation, often associated with Yarkony's branching-space notation, the gradient-difference vector is defined as

$$
\begin{align}
\boldsymbol g_{ij}
=
\frac{1}{2}
\nabla_{\mat q}
\left[
V_j(\mat q)-V_i(\mat q)
\right]_{\mat q=\mat q_{\mathrm{CI}}}.
\label{eq:g_vector_definition_topography}
\end{align}
$$

The interstate coupling vector is

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
\label{eq:h_vector_definition_topography}
\end{align}
$$

In the local two-state notation used in these notes, the correspondence is

$$
\begin{align}
\boldsymbol g_{ij}
&\leftrightarrow
\frac{1}{2}\boldsymbol{\kappa},
\\[4pt]
\boldsymbol h_{ij}
&\leftrightarrow
\boldsymbol{\lambda}.
\label{eq:gh_kappa_lambda_correspondence_topography}
\end{align}
$$

This relation is a vector relation. For example,

$$
\begin{align}
\boldsymbol g_{ij}\cdot\mat Q
=
\frac{1}{2}
\boldsymbol{\kappa}\cdot\mat Q
=
\frac{1}{2}\Delta(\mat Q).
\end{align}
$$

The scalar quantity $\boldsymbol g_{ij}\cdot\mat Q$ is the first-order change in half the adiabatic energy gap along the displacement $\mat Q$.


#### Intersection-adapted branching coordinates
The raw vectors $\boldsymbol g_{ij}$ and $\boldsymbol h_{ij}$ need not be orthogonal. It is therefore useful to introduce an orthogonalised pair of branching-space vectors,

$$
\begin{align}
\overline{\boldsymbol g}_{ij},
\qquad
\overline{\boldsymbol h}_{ij}.
\end{align}
$$

The overbar on the vector denotes an orthogonalised branching vector. These vectors span the same branching plane as the original $\boldsymbol g_{ij}$ and $\boldsymbol h_{ij}$. Their norms are

$$
\begin{align}
\overline g
=
\left\|
\overline{\boldsymbol g}_{ij}
\right\|,
\qquad
\overline h
=
\left\|
\overline{\boldsymbol h}_{ij}
\right\|.
\end{align}
$$

The corresponding unit vectors are

$$
\begin{align}
\hat{\boldsymbol x}_{ij}
=
\frac{\overline{\boldsymbol g}_{ij}}{\overline g},
\qquad
\hat{\boldsymbol y}_{ij}
=
\frac{\overline{\boldsymbol h}_{ij}}{\overline h}.
\label{eq:intersection_adapted_unit_vectors_topography}
\end{align}
$$

The geometric branching coordinates are then

$$
\begin{align}
x
=
\hat{\boldsymbol x}_{ij}\cdot\mat Q,
\qquad
y
=
\hat{\boldsymbol y}_{ij}\cdot\mat Q.
\label{eq:geometric_branching_coordinates_topography}
\end{align}
$$

The coordinates $x$ and $y$ are scalar nuclear displacements in the branching plane. They are not energies. Energy-like branching coordinates can be recovered by multiplying them by the slopes $\overline g$ and $\overline h$.



#### Average-gradient vector and dimensional tilt components

The branching vectors determine the splitting between the two states. A separate vector determines how the average energy of the two-state pair changes with nuclear displacement. Define

$$
\begin{align}
\boldsymbol s_{ij}
=
\frac{1}{2}
\nabla_{\mat q}
\left[
V_i(\mat q)+V_j(\mat q)
\right]_{\mat q=\mat q_{\mathrm{CI}}}.
\label{eq:average_gradient_vector_topography}
\end{align}
$$

This vector is the adiabatic version of the average-gradient vector $\boldsymbol{\sigma}$ in Eq. $\eqref{eq:lvc_parameters_definitions_topography}$:

$$
\begin{align}
\boldsymbol s_{ij}
\leftrightarrow
\boldsymbol{\sigma}.
\end{align}
$$



Project $\boldsymbol s_{ij}$ onto the intersection-adapted branching coordinates:

$$
\begin{align}
s_x^{\mathrm{dim}}
=
\boldsymbol s_{ij}\cdot\hat{\boldsymbol x}_{ij},
\qquad
s_y^{\mathrm{dim}}
=
\boldsymbol s_{ij}\cdot\hat{\boldsymbol y}_{ij}.
\label{eq:dimensional_tilt_components_topography}
\end{align}
$$

The superscript "dim" is used because these quantities are dimensional slopes of the average energy surface. They have the same units as $\overline g$ and $\overline h$. The projections $s_x^{\mathrm{dim}}$ and $s_y^{\mathrm{dim}}$ tilt the cone in the branching plane. They do not change the energy gap directly, because they appear only in the common energy term.



#### Branching-space Hamiltonian

Restricting to the branching plane, the local two-state Hamiltonian can be written as

$$
\begin{align}
\mat W_{\mathrm{bs}}(x,y)
=
\left[
E^\times
+
s_x^{\mathrm{dim}}x
+
s_y^{\mathrm{dim}}y
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
\label{eq:branching_space_hamiltonian_topography}
\end{align}
$$



Diagonalising Eq. \eqref{eq:branching_space_hamiltonian_topography} gives

$$
\begin{align}
V_{\pm}(x,y)
=
E^\times
+
s_x^{\mathrm{dim}}x
+
s_y^{\mathrm{dim}}y
\pm
\sqrt{
(\overline g x)^2
+
(\overline h y)^2
}.
\label{eq:branching_space_eigenvalues_topography}
\end{align}
$$

The gap is therefore

$$
\begin{align}
V_+-V_-
=
2
\sqrt{
(\overline g x)^2
+
(\overline h y)^2
}.
\label{eq:branching_space_gap_topography}
\end{align}
$$

The gap depends only on the two branching coordinates and the two branching slopes. The terms $s_x^{\mathrm{dim}}$ and $s_y^{\mathrm{dim}}$ tilt both surfaces together.

One may also define energy-like branching coordinates

$$
\begin{align}
x_{\mathrm E}
=
2\overline g x,
\qquad
y_{\mathrm E}
=
2\overline h y,
\end{align}
$$

so that

$$
\begin{align}
V_+-V_-
=
\sqrt{
x_{\mathrm E}^2+y_{\mathrm E}^2
}.
\end{align}
$$

This energy-like form is useful for displaying the conical topology, while the geometric $x,y$ coordinates are more useful for classifying the local topography. The following discussion therefore works mainly with Eq. \eqref{eq:branching_space_gap_topography}. 

---

## Topography parameters

Building on this coordinate framework, the following section introduces the topographical parameters that characterise the local environment of the conical intersection. These parameters provide the machinery needed to classify and visualise the surfaces within the branching coordinates.

### Pitch and asymmetry of the cone

The parameters $\overline g$ and $\overline h$ control the slopes of the cone along the two orthonormal branching directions. It is useful to combine them into a pitch parameter and an asymmetry parameter.

The pitch is defined as

$$
\begin{align}
\delta_{gh}
=
\sqrt{
\frac{1}{2}
\left(
\overline g^2+\overline h^2
\right)
}.
\label{eq:pitch_parameter_delta_gh}
\end{align}
$$

This parameter measures the overall steepness of the two adiabatic surfaces in the branching plane.

The asymmetry is defined as

$$
\begin{align}
\Delta_{gh}
=
\frac{
\overline g^2-\overline h^2
}{
\overline g^2+\overline h^2
}.
\label{eq:asymmetry_parameter_delta_gh}
\end{align}
$$

This parameter measures the extent to which the cone differs from a radially symmetric double cone.

That is, if


$$
\begin{align}
\Delta_{gh}=0,
\end{align}
$$

implying the two branching directions have the same slope, $\overline g=\overline h$. Visually, the cone will be radially symmetric in the branching plane.

But if

$$
\begin{align}
\Delta_{gh}\neq 0,
\end{align}
$$

then the slopes differ in the two branching directions and will be asymmetric. 

Before moving to the on, it is also convinient to recast the terms under the square root using the introduced notation. From Eqs. \eqref{eq:pitch_parameter_delta_gh} and \eqref{eq:asymmetry_parameter_delta_gh}, one obtains

$$
\begin{align}
\overline g^2
=\delta_{gh}^2
\left(
1+\Delta_{gh}
\right),
\qquad
\overline h^2
=\delta_{gh}^2
\left(
1-\Delta_{gh}
\right).
\label{eq:gbar_hbar_pitch_asymmetry_relation}
\end{align}
$$

Substituting these into the square-root term gives

$$
\begin{align}
(\overline g x)^2+(\overline h y)^2
&=
\delta_{gh}^2
\left[
(1+\Delta_{gh})x^2
+
(1-\Delta_{gh})y^2
\right]
\nonumber\\
&=
\delta_{gh}^2
\left[
(x^2+y^2)
+
\Delta_{gh}(x^2-y^2)
\right].
\end{align}
$$

Therefore

$$
\begin{align}
\sqrt{
(\overline g x)^2+(\overline h y)^2
}
=
\delta_{gh}
\sqrt{
(x^2+y^2)
+
\Delta_{gh}(x^2-y^2)
}.
\label{eq:splitting_pitch_asymmetry_form}
\end{align}
$$



### Dimensional and dimensionless tilt notation

The average-gradient projections $s_x^{\mathrm{dim}}$ and $s_y^{\mathrm{dim}}$ are dimensional. For topographical classification, it is convenient to scale them by the pitch parameter $\delta_{gh}$. Define

$$
\begin{align}
s_x^{\mathrm{top}}
=
\frac{s_x^{\mathrm{dim}}}{\delta_{gh}},
\qquad
s_y^{\mathrm{top}}
=
\frac{s_y^{\mathrm{dim}}}{\delta_{gh}}.
\label{eq:dimensionless_tilt_components_topography}
\end{align}
$$

The superscript "top" denotes dimensionless topographical tilt components.

> Notation warning: some papers denote the dimensionless quantities in Eq. \eqref{eq:dimensionless_tilt_components_topography} simply by $s_x$ and $s_y$. In these notes, the superscript is retained to distinguish them from the dimensional projections in Eq. \eqref{eq:dimensional_tilt_components_topography}.

Using Eq. \eqref{eq:dimensionless_tilt_components_topography}, the tilted two-state energies can be written as

$$
\begin{align}
V_{\pm}(x,y)
=
E^\times
+
\delta_{gh}
\left[
s_x^{\mathrm{top}}x
+
s_y^{\mathrm{top}}y
\pm
\sqrt{
(x^2+y^2)
+
\Delta_{gh}(x^2-y^2)
}
\right].
\label{eq:topography_energy_xy_form}
\end{align}
$$

This is the most convenient form for comparing different conical-intersection topographies. The pitch $\delta_{gh}$ sets the overall energy scale. The asymmetry $\Delta_{gh}$ determines how unequal the two branching slopes are. The dimensionless pair $s_x^{\mathrm{top}},s_y^{\mathrm{top}}$ determines the tilt of the average surface.



### Tilt magnitude and tilt heading

The two dimensionless tilt components can be combined into a tilt magnitude,

$$
\begin{align}
\sigma
=
\sqrt{
\left(s_x^{\mathrm{top}}\right)^2
+
\left(s_y^{\mathrm{top}}\right)^2
}.
\label{eq:collective_tilt_parameter_sigma}
\end{align}
$$

which is a dimensionless measure of how strongly the average surface is tilted relative to the cone pitch. The corresponding tilt heading is the polar angle of the tilt direction in the branching plane, equivalently the direction in which the average energy of the two PES increases most steeply. A derivation is given in [Derivation: tilt heading for conical-intersection topography](../derivations/derivations_tilt_heading_CX_topography.md):

$$
\begin{align}
\tan\theta_s
=
\frac{s_y^{\mathrm{top}}}{s_x^{\mathrm{top}}}
\label{eq:tilt_heading_theta_s}
\end{align}
$$

Using polar coordinates,

$$
\begin{align}
x=r\cos\theta,
\qquad
y=r\sin\theta,
\end{align}
$$

we have

$$
\begin{align}
s_x^{\mathrm{top}}x+s_y^{\mathrm{top}}y
&=r\sigma\cos{\theta_s} \cos\theta + r \sigma \sin\theta_s \sin\theta
\\
&=\sigma r\cos(\theta-\theta_s),
\end{align}
$$

where the angle-difference identity $\cos(A-B)=\cos(A)\cos(B)+\sin(A)\sin(B)$ has been used,
and

$$
\begin{align}
(x^2+y^2)
+
\Delta_{gh}(x^2-y^2)
&=r^2+\Delta_{gh}r^2\left(\cos^2\theta-\sin^2\theta\right)
\\
&=
r^2
\left[
1+\Delta_{gh}\cos(2\theta)
\right].
\end{align}
$$

where the double-angle identity $\cos(2A)=\cos^2(A)-\sin^2(A)$ has been used.

Therefore Eq. \eqref{eq:topography_energy_xy_form} becomes

$$
\begin{align}
V_{\pm}(r,\theta)
=
E^\times
+
\delta_{gh}r
\left[
\sigma\cos(\theta-\theta_s)
\pm
\sqrt{
1+\Delta_{gh}\cos(2\theta)
}
\right].
\label{eq:topography_energy_polar_form}
\end{align}
$$

which makes the topographical meaning of the parameters explicit. The splitting part is controlled by $\delta_{gh}$ and $\Delta_{gh}$, while the tilt of the average surface is controlled by $\sigma$ and $\theta_s$.

---

## Peaked and sloped conical intersections

The parameters $s_x^{\mathrm{top}}$ and $s_y^{\mathrm{top}}$, or equivalently $\sigma$ and $\theta_s$, determine whether the cone is strongly tilted.

A completely untilted cone has

$$
\begin{align}
s_x^{\mathrm{top}}=0,
\qquad
s_y^{\mathrm{top}}=0,
\qquad
\sigma=0.
\end{align}
$$

In that case the conical-intersection point is the minimum of the upper surface and the maximum of the lower surface within the branching plane. This is the ideal peaked case.

More generally, the distinction between peaked and sloped conical intersections is controlled by the composite parameter

$$
\begin{align}
\mathcal P
=
\frac{
\sigma^2
}{
1-\Delta_{gh}^2
}
\left[
1-\Delta_{gh}\cos(2\theta_s)
\right].
\label{eq:P_parameter_dimensionless}
\end{align}
$$

Equivalently, if one uses the dimensional tilt magnitude

$$
\begin{align}
\sigma_{\mathrm{dim}}
=
\sqrt{
\left(s_x^{\mathrm{dim}}\right)^2
+
\left(s_y^{\mathrm{dim}}\right)^2
}
=
\delta_{gh}\sigma,
\end{align}
$$

then

$$
\begin{align}
\mathcal P
=
\frac{
\sigma_{\mathrm{dim}}^2
}{
\delta_{gh}^2
\left(
1-\Delta_{gh}^2
\right)
}
\left[
1-\Delta_{gh}\cos(2\theta_s)
\right].
\label{eq:P_parameter_dimensional}
\end{align}
$$

The two forms are the same; Eq. \eqref{eq:P_parameter_dimensionless} uses scaled tilt components, while Eq. \eqref{eq:P_parameter_dimensional} uses dimensional slopes.

The classification is

$$
\begin{align}
\mathcal P < 1
&\quad\Rightarrow\quad
\text{peaked CI},
\\
\mathcal P > 1
&\quad\Rightarrow\quad
\text{sloped CI}.
\end{align}
$$

The physical interpretation is as follows. In a peaked conical intersection, the intersection point remains an extremal point of the two surfaces within the branching plane: the upper surface rises away from the intersection and the lower surface falls away from it. In a sloped conical intersection, the average-energy tilt is strong enough that, along some directions in the branching plane, the upper surface can lie below its value at the intersection point, or the lower surface can lie above its value at the intersection point.

> A peaked conical intersection is not a stationary point in the ordinary sense. The gradient of an adiabatic surface at the conical-intersection point is not well-defined because the surface is conical and non-differentiable there. Peaked means extremal in the local conical topography, not stationary in the smooth single-surface sense.

---

## Single-path and bifurcating conical intersections

A second topographical distinction concerns the number of preferred downhill paths on the lower adiabatic surface as the system leaves the conical-intersection region. This is described by a second composite parameter, often denoted $\mathcal B$.

Using the dimensionless tilt parameter $\sigma$, the bifurcation parameter may be written as

$$
\begin{align}
\mathcal B
=
\sqrt[3]{
\frac{
\sigma^2
}{
4\Delta_{gh}^2
}
}
\left[
\sqrt[3]{
(1+\Delta_{gh})\cos^2\theta_s
}
+
\sqrt[3]{
(1-\Delta_{gh})\sin^2\theta_s
}
\right].
\label{eq:B_parameter_dimensionless}
\end{align}
$$

Equivalently, using the dimensional tilt magnitude $\sigma_{\mathrm{dim}}$,

$$
\begin{align}
\mathcal B
=
\sqrt[3]{
\frac{
\sigma_{\mathrm{dim}}^2
}{
4
\left(
\delta_{gh}\Delta_{gh}
\right)^2
}
}
\left[
\sqrt[3]{
(1+\Delta_{gh})\cos^2\theta_s
}
+
\sqrt[3]{
(1-\Delta_{gh})\sin^2\theta_s
}
\right].
\label{eq:B_parameter_dimensional}
\end{align}
$$

Again, the two forms are equivalent once

$$
\begin{align}
\sigma_{\mathrm{dim}}=\delta_{gh}\sigma
\end{align}
$$

is used.

The classification is

$$
\begin{align}
\mathcal B < 1
&\quad\Rightarrow\quad
\text{bifurcating CI},
\\
\mathcal B > 1
&\quad\Rightarrow\quad
\text{single-path CI}.
\end{align}
$$

A bifurcating conical intersection has two preferred downhill paths on the lower surface. A single-path conical intersection has one dominant downhill path. This classification is useful because two conical intersections may both be peaked or both be sloped but still differ in how the lower surface guides the nuclear wavepacket away from the intersection.

> The expression for $\mathcal B$ contains $\Delta_{gh}$ in the denominator, so the perfectly symmetric limit $\Delta_{gh}=0$ should be treated with care. In that limit, the geometric distinction between single-path and bifurcating behaviour must be interpreted directly from the local surface shape rather than from Eq. \eqref{eq:B_parameter_dimensionless} alone.

---

## Summary of the topographical parameters

The local branching-plane topography of a two-state conical intersection can be described by four basic quantities:

$$
\begin{align}
\delta_{gh},
\qquad
\Delta_{gh},
\qquad
s_x^{\mathrm{top}},
\qquad
s_y^{\mathrm{top}}.
\end{align}
$$

Their meanings are:

$$
\begin{array}{c|c}
\text{parameter} & \text{meaning}\\
\hline
\delta_{gh} & \text{overall pitch or steepness of the cone}\\[3pt]
\Delta_{gh} & \text{asymmetry between the two branching slopes}\\[3pt]
s_x^{\mathrm{top}},s_y^{\mathrm{top}} & \text{dimensionless tilt components of the average surface}\\[3pt]
\sigma & \text{overall tilt magnitude}\\[3pt]
\theta_s & \text{tilt heading in the branching plane}\\[3pt]
\mathcal P & \text{peaked versus sloped classification}\\[3pt]
\mathcal B & \text{single-path versus bifurcating classification}
\end{array}
$$

In short,

$$
\boxed{
\delta_{gh}
\text{ controls steepness,}
\qquad
\Delta_{gh}
\text{ controls asymmetry,}
}
$$

and

$$
\boxed{
s_x^{\mathrm{top}},s_y^{\mathrm{top}}
\text{ control tilt.}
}
$$

The composite parameters $\mathcal P$ and $\mathcal B$ combine these effects into two practical labels for the branching-plane topography:

$$
\begin{align}
\mathcal P<1
&\Rightarrow
\text{peaked},
&
\mathcal P>1
&\Rightarrow
\text{sloped},
\\
\mathcal B<1
&\Rightarrow
\text{bifurcating},
&
\mathcal B>1
&\Rightarrow
\text{single-path}.
\end{align}
$$

This classification describes the local shape of the adiabatic surfaces. It should not be confused with the topological classification associated with Berry phases, sign changes, and the topological matrix. Topography describes the local cone shape; topology describes the global behaviour of electronic states around closed loops.

---

## Links to related notes

- [Introduction to conical intersections](../beginer/04_conical_intersections.md)
- [Conical intersections: intermediate](int02_conical_intersections.md)
- [Dimension of a general $M$-state degeneracy](int04_M_state_degeneracy_dimension.md)
- [Derivation: tilt heading for conical-intersection topography](../derivations/derivations_tilt_heading_CX_topography.md)
- [Visuals: different conical intersections](../visuals/different_conical_intersections.md)
