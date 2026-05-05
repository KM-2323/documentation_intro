## Introduction to Conical Intersections: The Two-State ModelThe Diabatic Potential Matrix

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
\end{align}$$

Here $\mat q\in\mathbb R^f$ is the nuclear coordinate vector. The diagonal elements $W_{11}$ and $W_{22}$ represent the diabatic potential energy surfaces, while the off-diagonal element $W_{12}$ represents the diabatic coupling between the states.

It is useful to define the average and difference of the diabatic potentials:

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
\end{align}
$$

### Adiabatic Energies and the Conditions for Degeneracy

The observable adiabatic energies are obtained by diagonalizing the diabatic matrix $\mat W$. Solving for the eigenvalues yields the adiabatic potential energy surfaces:

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

The adiabatic energy gap is simply the difference between these two surfaces:
$$
\begin{align}
V_{+}-V_{-}
=\sqrt{
\Delta^2+4W_{12}^{2}
}.
\end{align}
$$

For a true degeneracy to occur (where the two adiabatic surfaces touch, meaning $V_{+} = V_{-}$), the term inside the square root must be zero. Because both squared terms are positive, this requires two independent conditions to be satisfied simultaneously:

$$
\begin{align}
\Delta(\mat q)=0
\quad\text{and}\quad
W_{12}(\mat q)=0.
\end{align}
$$

### 1D Systems vs. Multidimensional Systems

Understanding how these two conditions behave depending on the size of the molecule is the key to understanding conical intersections:
* Avoided Crossings (1D Systems): If a system only has one nuclear coordinate (for example, the single internuclear bond in a diatomic molecule), it is generally impossible to satisfy both conditions at the exact same geometry if the states have non-zero coupling. The states may approach each other, but they will ultimately repel, forming an avoided crossing.

* Conical Intersections (Multidimensional Systems): In polyatomic molecules with multiple degrees of freedom, there are enough geometric parameters that both conditions for degeneracy can theoretically be fulfilled.

### The Linear Model and the Branching Plane

To understand the shape of the potential energy surfaces near a degeneracy, we can use a Taylor expansion of the potential matrix around the crossing point $\mat q_0$. Keeping only the first-order (linear) terms gives rise to the Linear Vibronic Coupling (LVC) model.

The behavior near the crossing is governed by two crucial vectors in nuclear coordinate space:

1. The Gradient Difference Vector ($\boldsymbol{\kappa}$ or $\vec{g}$): This vector relates to how the energy gap ($\Delta$) changes with nuclear geometry.
2. The Derivative Coupling Vector ($\boldsymbol{\lambda}$ or $\vec{h}$): This vector relates to how the off-diagonal coupling ($W_{12}$) changes with nuclear geometry.


The above two vectors defines the branching plane and the point of intersection is called the intersection seam. 

* The Branching Plane: The plane defined by the vectors $\vec{g}$ and $\vec{h}$ is called the branching space or branching plane. If the molecule's geometry changes along directions within this plane, the degeneracy is immediately lifted. Plotting the adiabatic energies within this 2D plane reveals the topography of a double cone touching at a point—this is the conical intersection.

* The Intersection Seam: If the geometry is displaced in a direction orthogonal to both $\vec{g}$ and $\vec{h}$, the states remain degenerate. In a molecule with $f$ vibrational degrees of freedom, the space orthogonal to the branching plane forms an $(f-2)$-dimensional seam of intersection.