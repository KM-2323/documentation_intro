## Propagation diabatisation in DD-vMCG

### Brief theoretical background

Propagation diabatisation is used in DD-vMCG because the nuclear wavefunction is propagated with a local Gaussian basis, and the potential model around each Gaussian centre needs smooth energies, gradients, and Hessians. In the adiabatic representation, this smoothness can fail near a degeneracy: the adiabatic surfaces may form a conical intersection and the derivative coupling can become singular. Moving to a diabatic or quasi-diabatic representation replaces the singular kinetic coupling by smoother potential-like couplings, which are better suited to local harmonic expansion and interpolation.

The basic object is the adiabatic-to-diabatic transformation matrix. With the convention used here, the diabatic electronic basis is written as

$$
\ket\varphivec=\ket\psivec\Cmat\nonumber
$$

where $\ket\psivec$ is the vector of adiabatic electronic states and $\Cmat$ is the adiabatic-to-diabatic transformation matrix. The corresponding diabatic potentila matrix is

$$
\W = \Cinv \V \Cmat
$$

where $\V$ is the diagonal matrix of adiabatgic potential energies.

The transformation is chosen so that the derivative coupling is removed, or at least made negligible, withint the retianed electronic subspace. THis lead to the differenytail equation

$$\nabla \Cmat = -\F\Cmat$$

where $\F$ is the matrix of nonadiabatic coupling vectors,

$$\F_{ij}\braket{\psi_i}{\nabla \psi_j}$$

For non-generate adiabatic states, this vector can also be related to the derivative of the electronic Hamiltonin (electronic derivative coupling) by

$$
\F_{ij} \frac{\mel{\psi_i}{\nabla\hat H_{el}}{\psi_j}}{V_j-V_i}
$$

This relation explains both why the coupling becomes large near small energy gaps and why sign conventions must be treated carefully. For real electronic states, the numerator

$$\D_{ij}=\mel{\psi_i}{\nabla\hat H_{el}}{\psi_j}$$

is symmetric in the state labels, whereas the nonadiabatic coupling vector $\F_{ij}$ is antisymmetric. These two quantities should therefore not be treated as interchangeable.

In the complete Hilbert space, the adiabatic-to-diabatic transformation is formally exact. In practical direct dynamics, however, only a finite set of electronic states is retained. The propagation diabatisation equation is then used as a finite-subspace approximation: it is reliable when the retained states form a sufficiently isolated subspace and the neglected couplings to external states are small. Baer’s line-integral formulation gives the theoretical background for this finite-subspace view, including the curl condition, the topological matrix, and the quantisation condition associated with closed paths.

Propagation diabatisation is therefore best understood as a practical, on-the-fly construction of a quasi-diabatic basis. It does not require locating a conical intersection before the dynamics begins, and it can be extended to more than two electronic states. Richings and Worth introduced this scheme for DD-vMCG, and later work extended it to multi-state direct dynamics calculations.

### Related notes
* Residual derivative coupling
* Split diabatic representations
* Path-integrated ADT equation
* QVC path model
* Baer line-integral theory
* Curl condition and path dependence
* NACT sign assignment
* Three-state ADT angles
* Main code driver: diabat4_2
* Database prediction: dddb_rd_gp
* Path integration: intengap4 and stepnact4
* Fallback QVC optimisation: optqvc
* Final transformation of QC data

### Brief algorithmic breakdown of propagation diabatisation implemented in Quantics

The purpose of the propagation diabatisation algorithm is to take new adiabatic quantum-chemistry data and convert it into a locally consistent diabatic representation before storing it in the DD-vMCG database. For a more mathenatical detailed breakdown see [safetyguard breakdown](int01_propagation_diabatisation_safetyguard_breakdown.md)

The algorithm has two kinds of information available at a new geometry. The first is the raw quantum-chemistry data: adiabatic energies, gradients, Hessians where available, and derivative-coupling information. The second is the existing database model, which contains previously stored diabatic data and can be used to predict what the diabatic and adiabatic quantities should look like near the new point.

The database model acts as a compass. It gives a predicted diabatic potential matrix, which can be diagonalised to obtain predicted adiabatic energies and eigenvectors. These predicted quantities are then compared with the raw quantum-chemistry quantities. This comparison is used to detect phase errors, state-ordering problems, near-degeneracies, and failed quantum-chemistry data before the final transformation is accepted.

The normal branch of the algorithm follows the flowchart in [flowchart_diabat4_2_conceptbased](../diabatisation_code/flowchart_diabat4_2_conceptbased.md) or its code based [flowchart_diabat4_2_subroutinebased](../diabatisation_code/flowchart_diabat4_2_subroutinebased.md)

The key propagation step is the finite-path version of

$$\nabla \Cmat = -\F\Cmat$$

Along a path from an old geometry $\Rv_0$ to a new geometry $\Rv_1$, this is written formally as

$$\Cmat(\Rv_1)  = \mathcal P\exp\left[-\int_{\Rv_0}^{\Rv_1}\F(\Rv)\cdot d\Rv\right]\Cmat(\Rv_0)$$
	​
where $\mathcal p$ denotes path ordering. In the implementation, the path is normally treated as a local path between the nearest useful database point and the new geometry. The derivative coupling along this path is estimated from the available quantum-chemistry and database information. Richings and Worth describe this propagated-ADT idea as the basis of propagation diabatisation in DD-vMCG.

Once the propagated transformation has been obtained, the final stored diabatic quantities are not just the predicted database quantities. In the normal successful branch, the actual quantum-chemistry adiabatic data are transformed into the diabatic representation. This is important: the database prediction is mainly used to choose phases, order states, detect dangerous cases, and build a stable transformation. It is not meant to replace the quantum-chemistry calculation unless the algorithm enters a fallback branch.


The improved DD-vMCG implementation also refines database handling, interpolation, symmetry usage, and phase conventions. These refinements are part of making the propagated diabatic representation consistent over many on-the-fly quantum-chemistry points rather than just locally correct at a single step.


## Summary of the guard logic

The guard logic can be summarised as

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

More explicitly:

$$
\mat W(\mat q_0),\mat G^{\mathrm D}(\mat q_0),\mat H^{\mathrm D}(\mat q_0)
\longrightarrow
\mat W_{\mathrm{pred}}(\mat q_+)
\longrightarrow
\Cmat_{\mathrm{pred}}(\mat q_+),\mat V_{\mathrm{pred}}(\mat q_+),\mat D_{\mathrm{pred}}(\mat q_+).
$$

Then the predicted quantities are compared with the raw quantum-chemistry quantities,

$$
\mat V^{\mathrm{QC}},
\qquad
\mat G^{\mathrm A}_{\mathrm{QC}},
\qquad
\mat D_{\mathrm{QC}}.
$$

The four guards are:

$$
\begin{array}{ll}
\text{Guard 1:} &
\text{coupling-vector continuity and sign},\\[3pt]
\text{Guard 2:} &
\text{diabatic ordering or seam crossing},\\[3pt]
\text{Guard 3:} &
\text{small adiabatic energy gap},\\[3pt]
\text{Guard 4:} &
\text{failed or unusable QC calculation}.
\end{array}
$$

If none of these conditions is triggered, the point is accepted as part of a continuous region of the diabatic representation, and the propagated ADT matrix is used to transform the raw quantum-chemistry data. If any guard is triggered, the algorithm falls back to a predicted or local model so that the database is not contaminated by an unstable transformation.

This is best understood as a practical finite-subspace algorithm. In the complete Hilbert space, the ADT equation can be formulated exactly. In DD-vMCG, only a finite number of electronic states is retained, so the algorithm relies on the retained subspace being sufficiently isolated and on the neglected couplings being small. Baer's finite-subspace ADT theory gives the theoretical background for this quasi-diabatic viewpoint.

---


### Practical caveats

Propagation diabatisation is a local and path-dependent construction when applied in a finite electronic subspace. In a complete Hilbert space, the ADT condition can be formulated exactly. In a practical calculation, only a finite number of electronic states is retained, so the neglected couplings must be small for the transformed subspace to behave as a good quasi-diabatic space. Baer’s finite-subspace treatment and curl-condition analysis are the appropriate theoretical background for this point.

The multi-state case is also more delicate than the two-state case. In a three-state system, the ADT matrix can be written as a product of elementary rotations, leading to coupled first-order equations for three ADT angles. Different product orders give different angle equations, although the transformation matrix is fixed once the boundary conditions are fixed. This belongs in a deep-dive page, but the main intermediate page should warn the reader that multi-state propagation is not just several independent two-state transformations.