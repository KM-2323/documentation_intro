---
title: Glossary
---

# Glossary

This glossary collects recurring terms from the Born-Oppenheimer, nonadiabaticity, direct-dynamics, and diabatisation sections. It is intentionally concise; individual pages give the derivations and caveats.

## A

**Abelian ADT limit:** Case where the relevant derivative-coupling matrices commute, so path ordering becomes unnecessary. The real two-state ADT is the standard example because all coordinate-resolved NACMs are proportional to the same antisymmetric generator.

**Accidental conical intersection:** A conical intersection not forced by symmetry but obtained when independent nuclear coordinates tune both the diabatic gap and coupling to zero.

**Adiabatic approximation:** Approximation in which the nuclear dynamics is propagated on one or more adiabatic potential-energy surfaces while neglecting some or all nonadiabatic derivative couplings.

**Adiabatic electronic state:** Eigenstate of the electronic Hamiltonian at fixed nuclear geometry.

**Adiabatic representation:** Representation in which the electronic Hamiltonian is diagonal at each nuclear geometry. It is natural for electronic-structure calculations but introduces derivative couplings in the nuclear kinetic energy.

**Adiabatic-to-diabatic transformation (ADT):** Geometry-dependent transformation from adiabatic electronic states to diabatic or quasi-diabatic states. The transformation matrix is usually written as $\Cmat$.

**ADT angle:** Mixing angle used to parameterise a two-state or three-state ADT matrix.

**ADT connection:** The matrix-valued derivative-coupling field $\F$ that appears in the ADT equation. It plays the role of a gauge connection in electronic-state space.

**Anti-Hermitian coupling matrix:** Property of the first-order nonadiabatic coupling matrix in an orthonormal electronic basis. For real electronic states it becomes antisymmetric.

## B

**Base point:** Reference geometry at which a closed loop starts and ends. In topological-matrix discussions, the adiabatic potential matrix $\V(0)$ is evaluated at this point; choosing it away from degeneracies keeps state-by-state sign statements well defined.

**Berry phase:** Geometric phase acquired by an electronic state after adiabatic transport around a closed loop. Around a conical intersection, real adiabatic states can change sign after one loop.

**Born-Huang expansion:** Expansion of the full molecular wavefunction in an electronic basis with nuclear amplitudes as coefficients. It is formally exact for a complete electronic basis.

**Born-Oppenheimer approximation:** Separation of electronic and nuclear motion obtained by assuming the electrons adjust instantaneously to nuclear geometry and by neglecting nonadiabatic couplings.

**Branching plane:** Two-dimensional subspace that lifts the degeneracy of a two-state conical intersection to first order. It is spanned by the gradient-difference/tuning vector and the coupling vector.

## C

**CASSCF:** Complete active space self-consistent field method. In the Procrustes notes, CASSCF wavefunctions are expanded in configuration or Slater-determinant bases.

**CI vector:** Vector of configuration-interaction coefficients describing an electronic state in a determinant/configuration basis.

**Clamped-nuclei electronic Hamiltonian:** Electronic Hamiltonian evaluated at fixed nuclear geometry.

**Closed loop / closed contour:** Path in nuclear configuration space whose final geometry is the same as its initial geometry. Closed loops are used to define the topological matrix $\mat D(\Gamma)$.

**Commutator:** Matrix difference $[\mat A,\mat B]=\mat A\mat B-\mat B\mat A$. Nonzero commutators make multistate ADT non-Abelian and require path ordering.

**Complete electronic Hilbert space:** Formal electronic space containing all adiabatic states. Exact ADT identities, including the curl condition away from singularities, are simplest in this complete-space setting.

**Conical intersection (CI):** Degeneracy between two adiabatic potential-energy surfaces where the local energy surfaces form a double-cone structure in the branching plane.

**Configuration overlap:** Overlap between Slater determinants or configuration state functions, often built from molecular-orbital overlap determinants.

**Contractible loop:** Closed loop that can be continuously shrunk to a point without crossing a singularity or leaving the regular region. In a flat, simply connected region, contractible loops have identity holonomy.

**Coupling coordinate:** Coordinate in the branching plane that controls the off-diagonal diabatic coupling to first order.

**Covariant derivative:** Nuclear derivative shifted by the derivative-coupling connection, such as $\nabla+\F$ or $\partial_R+\F$. It is the compact way to write the dressed kinetic-energy operator and its transformation under electronic-basis rotations.

**Cross-block coupling:** Nonadiabatic coupling between retained $P$-space states and omitted $Q$-space states, usually written $\F^{(P,Q)}$ or $\F^{(Q,P)}$. A reduced ADT is controlled only when these couplings remain small.

**Curl condition:** Integrability condition for constructing a path-independent diabatic transformation. If the relevant coupling field has nonzero curvature/curl, the ADT can become path dependent.

## D

**DD-vMCG:** Direct-dynamics variational multi-configuration Gaussian method. The notes use it as the dynamics context for propagation diabatisation.

**Derivative coupling:** Coupling generated because electronic basis functions depend on nuclear coordinates. The first-order derivative coupling is usually the NACV.

**Derivative-coupling numerator:** The numerator-like quantity $\mel{\psi_i}{\nabla \hat H_{\mathrm{el}}}{\psi_j}$. The NACV is obtained from this kind of object by dividing by an adiabatic energy gap, away from degeneracies.

**Degenerate base point:** Base point at which two or more adiabatic energies are exactly equal. In that case, the topological matrix may mix states within the degenerate block while still preserving the diabatic potential matrix.

**Demkov-type interaction:** Weak interaction used in Baer's sub-Hilbert-space discussion to describe boundary couplings between neighbouring subspaces, in contrast to strong Landau-Zener-type internal interactions.

**Diabatic potential matrix:** Potential matrix $\W$ in a diabatic or quasi-diabatic basis. It is generally not diagonal, but its elements are intended to be smooth functions of nuclear geometry.

**Diabatic representation:** Electronic representation designed to reduce or remove derivative couplings, moving the dominant nonadiabatic physics into off-diagonal potential couplings.

**Diabatic state:** Basis state intended to vary smoothly with nuclear geometry and preserve electronic character as much as possible.

**Diagonal sign matrix:** Diagonal topological matrix whose entries are $\pm1$. For real non-degenerate electronic states, this is the allowed closed-loop form compatible with single-valued diabatic potentials.

**Direct dynamics:** Dynamics approach in which electronic-structure information is generated or queried on the fly rather than from a precomputed global potential-energy surface.

**Dressed kinetic energy:** Gauge-covariant form of the nuclear kinetic energy operator in the adiabatic representation, where nuclear derivatives are shifted by derivative-coupling matrices.

## F

**Finite electronic subspace:** Practical retained set of electronic states used in calculations. Many exact identities are only exact for a complete electronic basis or a well-isolated finite subspace.

**Field strength:** See non-Abelian curvature.

**First-order nonadiabatic coupling:** Coupling involving first nuclear derivatives of electronic states. Usually represented by the NACV $\F_{ij}$.

**Flat connection:** Matrix-valued coupling field with zero non-Abelian curvature. In a regular simply connected region, a flat ADT connection gives local path independence.

## G

**Gaussian wavepacket (GWP):** Localised nuclear basis function used in vMCG-type dynamics. Direct-dynamics database routines often build local database lists for each GWP.

**Gauge transformation:** Geometry-dependent rotation of the electronic basis. Under such a transformation the derivative-coupling connection gains both a similarity-transformed coupling term and a derivative of the transformation matrix.

**Geometric phase:** See Berry phase.

**Gradient-difference vector:** Vector describing how the diabatic energy gap changes with nuclear displacement. Closely related to the tuning vector.

**Group Born-Oppenheimer approximation:** Approximation in which a finite group of electronic states is retained while coupling to omitted states is treated as weak or neglected.

## H

**Hellmann-Feynman theorem:** Relation connecting derivatives of electronic energies or Hamiltonian matrix elements to expectation values of derivatives of the electronic Hamiltonian.

**Hessian:** Matrix of second derivatives. In local harmonic models, Hessians describe curvature of diabatic potential matrix elements.

**Holonomy:** Closed-loop transformation produced by parallel transport of the electronic frame. In the ADT topology notes, the holonomy is the topological matrix $\mat D(\Gamma)$.

## I

**Inter-subspace coupling:** Nonadiabatic coupling between states in different sub-Hilbert spaces, especially between a retained $P$-space and an omitted or neighbouring $Q$-space.

**Intersection seam:** Set of nuclear geometries where the conical-intersection degeneracy persists. For a two-state CI in $f$ nuclear dimensions, the seam is locally $(f-2)$-dimensional.

**Intra-subspace coupling:** Nonadiabatic coupling between states inside the same retained sub-Hilbert space. These couplings are kept in the reduced ADT equation.

**Intruder state:** Electronic state outside the intended active/retained subspace that comes close in energy or character and can disrupt state tracking or diabatisation.

## L

**Landau-Zener-type interaction:** Strong near-degeneracy or avoided-crossing interaction used in Baer's sub-Hilbert-space construction to decide which states should be retained together.

**Leakage block:** Part of a full ADT matrix that maps retained columns into an omitted $Q$-space. In the reduced-subspace derivation it is first order in the weak $P$--$Q$ coupling.

**Linear vibronic coupling (LVC) model:** Local first-order diabatic model near a conical intersection. It describes the leading tuning and coupling directions.

**Line-integral ADT propagation:** Construction of an ADT matrix by integrating the path-contracted nonadiabatic coupling along a specified path.

**Local database:** Small subset of nearby direct-dynamics database records selected for a particular GWP or current geometry.

**Local harmonic approximation (LHA):** Local quadratic expansion of potential matrix elements around a database geometry.

**Lorentzian NACV form:** One-dimensional cut of the two-state NACV near an avoided crossing or conical intersection that produces a Lorentzian-shaped coupling profile.

## N

**NACM:** Nonadiabatic coupling matrix, whose elements are nonadiabatic coupling vectors or coordinate-resolved couplings.

**NACT:** Nonadiabatic coupling term. The notes sometimes use this for component-wise or path-projected derivative couplings.

**NACV:** Nonadiabatic coupling vector, usually $\F_{ij}=\braket{\psi_i}{\nabla\psi_j}$.

**Non-Abelian ADT problem:** Multistate ADT case in which coupling matrices along different directions or at different path points do not commute. The ADT then depends on matrix ordering, not just scalar line integrals.

**Non-Abelian curvature:** Matrix-valued curvature or field strength of the ADT connection, often written $\mat\Omega_{\mu\nu}$. The curl condition is the requirement that this curvature vanish in the regular region considered.

**Nonadiabatic coupling:** Coupling between electronic states induced by nuclear motion. It appears naturally in the adiabatic representation.

**Non-removable coupling:** Coupling that remains after a chosen transformation. It may remain because a finite retained subspace has residual curvature, or because a split-diabatic construction deliberately leaves a long-range tail in the kinetic operator.

**Noncrossing rule:** Heuristic rule that states of the same symmetry generally avoid crossing along a one-dimensional coordinate, while true degeneracies require enough independent coordinates.

## O

**Omitted-state feedback:** Second-order effect by which weak coupling from a retained $P$-space into an omitted $Q$-space feeds back into the retained ADT equation.

## P

**P-space / Q-space partition:** Split of the electronic Hilbert space into a retained subspace $P$ and an omitted complementary subspace $Q$. Reduced ADT theory is accurate only when the $P$--$Q$ coupling is controlled.

**Parabolic intersection:** Degeneracy structure, often associated with Renner-Teller-type physics, that can act as a strong interaction for defining a sub-Hilbert space in Baer's terminology.

**Path dependence:** Situation where the ADT obtained by integrating derivative couplings depends on the path through nuclear coordinate space.

**Path-ordered exponential:** Matrix exponential with an ordering operator $\mathcal P$ that keeps noncommuting coupling matrices in their order along the path. It is the formal solution of the multistate ADT path equation.

**Peaked conical intersection:** CI where the local cone is effectively peaked, often associated with opposing slopes of diabatic surfaces along a relevant tuning direction.

**Phase convention:** Choice of signs/phases for electronic states. Many quantities, especially NACVs and ADT matrices, depend on consistent phase choices even though observables do not.

**Projected connection:** Retained-block derivative-coupling field obtained by projecting the full electronic connection onto a finite subspace. It need not be exactly flat if omitted states remain coupled.

**Projection diabatisation:** Diabatisation approach based on projecting states at a new geometry onto a reference diabatic manifold.

**Propagation diabatisation:** DD-vMCG diabatisation scheme that propagates an ADT from known database information to a new geometry, with safety checks and fallbacks.

**Procrustes diabatisation:** Diabatisation method that uses an orthogonal Procrustes problem to align orbitals or CI vectors across geometries.

**Pure gauge connection:** Connection that can be written globally as a basis transformation derivative and therefore has zero curvature in a regular region.

## Q

**Quadratic vibronic coupling (QVC) model:** Vibronic-coupling model including second-order terms in nuclear displacements. In `optqvc`, a related one-dimensional cubic path model is used as a fallback, not a full multidimensional QVC model.

**Quasi-diabatic representation:** Practical finite-state representation that reduces derivative couplings over a region but may not remove them exactly or globally.

## R

**Residual coupling:** Coupling that remains after a partial diabatisation or after restricting attention to a finite retained subspace. It can represent coupling to omitted states or coupling that cannot be removed under the chosen boundary/topological constraints.

**Residual curvature:** Nonzero curvature left in a projected finite-subspace connection after omitting states outside the retained manifold. It is the mathematical obstruction to an exact global diabatic basis inside that reduced space.

**Reduced ADT:** ADT construction performed only inside a retained $P$-space. It is exact for an isolated subspace and approximate when omitted-state couplings are small.

**Retained subspace:** Electronic-state subspace kept explicitly in the dynamics or derivation.

## S

**SA-CASSCF:** State-averaged CASSCF. Used in Procrustes-type discussions where several states are treated together.

**Scalar coupling:** Second-order nonadiabatic coupling matrix $\G$.

**Shepard weighting:** Distance-based interpolation scheme used to average local database records, with closer records receiving larger weights.

**Sign alignment:** Procedure for making derivative-coupling or eigenvector signs consistent between quantum-chemistry output and database/model predictions.

**Simply connected region:** Region in which every closed loop can be continuously contracted to a point. With zero curvature and no singularities, this is the setting where the ADT is path-independent.

**Single-valued diabatic potential matrix:** Requirement that $\W$ return to the same matrix after a closed loop in nuclear geometry. This is weaker than requiring the ADT matrix itself to return to the identity.

**Slater determinant:** Antisymmetrised product of spin-orbitals used as a many-electron basis function.

**Sloped conical intersection:** CI where the cone is tilted enough that the local intersection is not a peak on the upper surface.

**Spin-orbit coupling (SOC):** Coupling between spin and orbital angular momentum. Some code paths add SOC terms back into predicted adiabatic matrices.

**Split diabatic representation:** Representation that separates a removable coupling component from a residual coupling component, often used to reconcile finite-subspace diabatisation with residual coupling.

**Strong internal connectivity:** Requirement that states inside a retained sub-Hilbert space be linked by strong nonadiabatic interactions, so the retained manifold should be treated as one diabatisation unit.

**Strict diabatic representation:** Ideal representation in which derivative couplings vanish. Usually unavailable globally for finite molecular electronic subspaces.

**Sub-Hilbert space (SHS):** Retained electronic manifold chosen for ADT construction. In Baer's usage, a good SHS is internally strongly coupled and externally weakly coupled.

**Sub-sub-Hilbert space (SSHS):** Local retained subspace chosen for a restricted region of nuclear configuration space when the full molecule has more intersections or couplings than are relevant to the sampled dynamics.

**Symmetry-allowed conical intersection:** CI enabled by symmetry rules, often involving states of different symmetry crossing in a symmetry-preserving subspace and coupling through a symmetry-breaking mode.

**Symmetry-required conical intersection:** CI forced by degeneracy from a multidimensional electronic irreducible representation, as in Jahn-Teller situations.

## T

**Taylor shift:** Evaluation of a local Taylor or harmonic model at a displaced geometry.

**Topological matrix:** Matrix quantity obtained from transporting an ADT or related transformation around a closed loop. It diagnoses global sign/phase/topological effects.

**Topological quantisation condition:** Closed-loop condition requiring endpoint ADT angles to give a diagonal unit-modulus topological matrix. In real multistate examples this usually appears as integer multiples of $\pi$ and an even number of sign flips.

**Topological spin:** Classification idea used in the specialised diabatisation notes to describe the topological behaviour of conical intersections and ADT matrices.

**Tuning coordinate:** Coordinate in the branching plane that changes the diabatic energy gap to first order.

## U

**Unit-modulus diagonal entry:** Diagonal element of a topological matrix whose absolute value is one. In complex electronic bases these entries are phases $e^{i\chi_i}$; in real bases they reduce to signs $\pm1$.

## V

**vMCG:** Variational multi-configuration Gaussian method.

**Vibronic coupling:** Coupling between electronic states mediated by nuclear motion.

## W

**Weak boundary coupling:** Requirement that a retained sub-Hilbert space be only weakly coupled to neighbouring or omitted subspaces, usually expressed as $O(\epsilon)$.

## Code Routine Names

**`dddb_gp`:** Builds a small local database list for one Gaussian wavepacket.

**`dddb_rd_gp`:** Reads and interpolates a GWP-local direct-dynamics diabatic database.

**`diabat4_2`:** Main routine discussed for DB-guided phase alignment and ADT propagation.

**`intengap4`:** Builds path interpolation information for energy gaps and projected coupling numerators.

**`stepnact4`:** Evaluates path-projected scalar NACT values from interpolation data.

**`optqvc`:** Optimisation-based cubic path-model fallback for difficult diabatisation cases.

**`propadt`:** Propagates the ADT matrix using integrated coupling information.

**`shiftdd`:** Shifts a local harmonic diabatic model from a database geometry to a target geometry.
