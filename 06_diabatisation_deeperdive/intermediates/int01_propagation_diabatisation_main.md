## Propagation diabatisation in DD-vMCG

### Brief theoretical background

Propagation diabatisation is used in DD-vMCG because the nuclear wavefunction is propagated in a local Gaussian basis. Around each Gaussian centre, the potential model is built from local energies, gradients, and, where available, Hessians. These quantities need to vary smoothly with nuclear geometry.

This smoothness is not guaranteed in the adiabatic representation. Near a degeneracy, the adiabatic potential energy surfaces may form a conical intersection, and the nonadiabatic derivative coupling can become singular. A diabatic or quasi-diabatic representation moves this difficulty out of the kinetic-energy operator and into smoother potential-like couplings. This is why DD-vMCG uses diabatic potential matrices rather than raw adiabatic surfaces for the local harmonic expansion.

With the row-vector convention used in these notes, the diabatic electronic basis is written as

$$
\begin{align}
\ket{\boldsymbol\varphi}
=\ket{\boldsymbol\psi}\Cmat,
\label{eq:pd_basis_convention}
\end{align}
$$

where $\ket{\boldsymbol\psi}$ is the vector of adiabatic electronic states and $\Cmat$ is the adiabatic-to-diabatic transformation matrix. The corresponding diabatic potential matrix is

$$
\begin{align}
\W
=\Cmat^{\dagger}\V\Cmat,
\label{eq:pd_w_from_v}
\end{align}
$$

where $\V$ is the diagonal matrix of adiabatic potential energies. For real orthogonal transformations, $\Cmat^{-1}=\Cmat^{T}$.

The transformation is chosen so that the derivative coupling is removed, or at least made negligible, inside the retained electronic subspace. This gives the ADT equation

$$
\begin{align}
\nabla \Cmat
=-\F\Cmat,
\label{eq:pd_adt_equation}
\end{align}
$$

where $\F$ is the matrix of nonadiabatic coupling vectors,

$$
\begin{align}
\F_{ij}
=\braket{\psi_i}{\nabla\psi_j}.
\label{eq:pd_nacv_definition}
\end{align}
$$

For non-degenerate adiabatic states, the off-diagonal Hellmann--Feynman relation gives

$$
\begin{align}
\F_{ij}
=\frac{
\mel{\psi_i}{\nabla\hat H_{\mathrm{el}}}{\psi_j}
}{
V_j-V_i
},
\qquad i\ne j.
\label{eq:pd_hf_nacv}
\end{align}
$$

This relation explains why the derivative coupling becomes large near a small adiabatic energy gap. It also explains why the sign convention must be handled carefully. For real electronic states, the numerator

$$
\begin{align}
\D_{ij}
=\mel{\psi_i}{\nabla\hat H_{\mathrm{el}}}{\psi_j}
\label{eq:pd_derivative_coupling_numerator}
\end{align}
$$

is symmetric in the state labels, whereas the derivative coupling vector $\F_{ij}$ is antisymmetric:

$$
\begin{align}
\D_{ij}=\D_{ji},
\qquad
\F_{ij}=-\F_{ji}.
\end{align}
$$

These two quantities should therefore not be treated as interchangeable. In the implementation notes below, $\D_{ij}$ denotes the derivative-coupling numerator, while $\F_{ij}$ denotes the nonadiabatic coupling vector obtained by dividing by the adiabatic energy gap.

In a complete electronic Hilbert space, Eq. $\eqref{eq:pd_adt_equation}$ can be formulated exactly. In practical direct dynamics, only a finite number of electronic states is retained. The propagated transformation is therefore a finite-subspace approximation. It is reliable when the retained states form a sufficiently isolated manifold and the neglected couplings to external states are small. Baer's line-integral formulation gives the theoretical background for this finite-subspace viewpoint, including the curl condition, the topological matrix, and the quantisation condition associated with closed paths.

Propagation diabatisation is best understood as a practical, on-the-fly construction of a quasi-diabatic basis. It does not require locating a conical intersection before the dynamics begins, and it can be extended to more than two electronic states. Richings and Worth introduced the scheme for DD-vMCG, and later work extended it to multi-state direct-dynamics calculations.

For keen readers and understanding how the adiabatic and diabatic matrix elements are related. See [deriving the relation between adiabatic and diabatic matrix elements](../derivations/derivations_adiab_diab_relation.md)

---

### Algorithmic overview

The purpose of the propagation diabatisation algorithm is to take new adiabatic quantum-chemistry data and convert it into a locally consistent diabatic representation before storing it in the DD-vMCG database.

For the detailed guard logic, see [propagation diabatisation safety-guard breakdown](int01_propagation_diabatisation_safetyguard_breakdown.md). For code breakdown see [`diabat4_2`](../code+breakdown/subroutine_diabat4_2.md)

At a new geometry, the algorithm has two sources of information.

First, it has the raw quantum-chemistry data:

$$
\begin{align}
\mat V^{\mathrm{QC}},
\qquad
\mat G^{\mathrm A}_{\mathrm{QC}},
\qquad
\mat H^{\mathrm A}_{\mathrm{QC}},
\qquad
\mat D_{\mathrm{QC}}.
\end{align}
$$

Second, it has the existing DD-vMCG database, which stores previously accepted diabatic data and can be used to predict what the local diabatic and adiabatic quantities should look like near the new point.

The database prediction is not a replacement for the quantum-chemistry calculation in the normal branch. Its main role is to choose phases, track state ordering, identify near-degenerate or discontinuous regions, and build a stable transformation. Once the normal branch is accepted, the raw quantum-chemistry adiabatic data are transformed into the diabatic representation.

The key propagation step is the finite-path form of Eq. $\eqref{eq:pd_adt_equation}$. Along a path from an old geometry $\Rv_0$ to a new geometry $\Rv_1$,

$$
\begin{align}
\Cmat(\Rv_1)
=\mathcal P
\exp\left[
-\int_{\Rv_0}^{\Rv_1}
\F(\Rv)\cdot d\Rv
\right]
\Cmat(\Rv_0),
\label{eq:pd_path_ordered_solution}
\end{align}
$$

where $\mathcal P$ denotes path ordering. In the practical DD-vMCG implementation, this path is local: the transformation is propagated from a nearby useful database point to the new geometry. The derivative coupling along the path is estimated from the available quantum-chemistry and database information.

The normal branch follows the flowcharts in [flowchart_diabat4_2_conceptbased](../diabatisation_code/flowchart_diabat4_2_conceptbased.md) and [flowchart_diabat4_2_subroutinebased](../diabatisation_code/flowchart_diabat4_2_subroutinebased.md).

A compact view of the guard logic is

$$
\boxed{
\text{predict}
\rightarrow
\text{compare}
\rightarrow
\text{guard}
\rightarrow
\text{propagate or fallback}
\rightarrow
\text{store}
}
$$

More explicitly, stored diabatic data at a nearby point are used to build a predicted diabatic model at the new point,

$$
\begin{align}
\mat W(\mat q_0),
\mat G^{\mathrm D}(\mat q_0),
\mat H^{\mathrm D}(\mat q_0)
&\longrightarrow
\mat W_{\mathrm{pred}}(\mat q_+)\\
&\longrightarrow
\Cmat_{\mathrm{pred}}(\mat q_+),
\mat V_{\mathrm{pred}}(\mat q_+),
\mat D_{\mathrm{pred}}(\mat q_+).
\end{align}
$$

These predicted quantities are compared with the raw quantum-chemistry quantities,

$$
\begin{align}
\mat V^{\mathrm{QC}},
\qquad
\mat G^{\mathrm A}_{\mathrm{QC}},
\qquad
\mat D_{\mathrm{QC}}.
\end{align}
$$

The four main guards are

$$
\begin{array}{ll}
\text{Guard 1:} & \text{coupling-vector continuity and sign},\\[3pt]
\text{Guard 2:} & \text{diabatic ordering or seam crossing},\\[3pt]
\text{Guard 3:} & \text{small adiabatic energy gap},\\[3pt]
\text{Guard 4:} & \text{failed or unusable QC calculation}.
\end{array}
$$

If none of these conditions is triggered, the new point is treated as part of a continuous region of the current diabatic representation. The propagated ADT matrix is then used to transform the raw quantum-chemistry adiabatic data into the diabatic representation.

If a guard is triggered, the algorithm uses a safer predicted or local model so that the database is not contaminated by an unstable transformation. The precise fallback depends on the guard and on the implementation branch. Conceptually, the important distinction is this:

- in the normal branch, the QC calculation supplies the final energies and derivatives, and the database prediction supplies a stable transformation;
- in a fallback branch, the predicted or locally fitted model may supply the stored diabatic quantities because the raw transformation is judged unsafe.

---

### Related notes

- Residual derivative coupling
- Split diabatic representations
- Path-integrated ADT equation
- QVC path model
- Baer line-integral theory
- Curl condition and path dependence
- NACT sign assignment
- Three-state ADT angles
- Main code driver: `diabat4_2`
- Database prediction: `dddb_rd_gp`
- Path integration: `intengap4` and `stepnact4`
- Fallback QVC optimisation: `optqvc`
- Final transformation of QC data

---

### Practical caveats

Propagation diabatisation is local and path-dependent when applied in a finite electronic subspace. In a complete Hilbert space, the ADT equation can be formulated exactly. In DD-vMCG, only a finite number of electronic states is retained, so the neglected couplings must be small for the retained manifold to behave as a good quasi-diabatic subspace. Baer's finite-subspace treatment and curl-condition analysis are the appropriate theoretical background for this point.

The multi-state case is also more delicate than the two-state case. In a three-state system, the ADT matrix can be written as a product of elementary rotations, leading to coupled first-order equations for three ADT angles. Different product orders give different angle equations. The transformation matrix is fixed once the boundary conditions and convention are fixed, but the individual angles are not independent physical observables. The main page should therefore warn the reader that multi-state propagation is not just several independent two-state transformations.

Important caveat: sign and phase conventions are part of the algorithm, not cosmetic details. A sign flip of a real adiabatic eigenvector changes the sign of the corresponding derivative-coupling vector. A propagated diabatic representation is only meaningful if the coupling-vector field is made phase-consistent across the database.

---

### References to keep near this section

- G. W. Richings and G. A. Worth, **A Practical Diabatisation Scheme for Use with the Direct-Dynamics Variational Multi-Configuration Gaussian Method**, *Journal of Physical Chemistry A* **119**, 12457--12470 (2015).
- G. W. Richings and G. A. Worth, **Multi-state non-adiabatic direct-dynamics on propagated diabatic potential energy surfaces**, *Chemical Physics Letters* **683**, 606--612 (2017).
- G. Christopoulou, A. Freibert, and G. A. Worth, **Improved algorithm for the direct dynamics variational multi-configurational Gaussian method**, *Journal of Chemical Physics* **154**, 124127 (2021).
- M. Baer, **Topological effects in molecular systems: an attempt towards a complete theory**, *Chemical Physics* **259**, 123--147 (2000).
- M. Baer, **Introduction to the theory of electronic non-adiabatic coupling terms in molecular systems**, *Physics Reports* **358**, 75--142 (2002).
- A. Vibók, G. J. Halász, S. Suhai, and M. Baer, **Assigning signs to the electronic nonadiabatic coupling terms**, *Journal of Chemical Physics* **122**, 134109 (2005).
