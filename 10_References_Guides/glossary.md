---
title: Glossary
---

# Glossary

This glossary collects recurring terms from the Born-Oppenheimer, nonadiabaticity, direct-dynamics, and diabatisation sections. It is intentionally concise; individual pages give the derivations and caveats.

## A

**Accidental conical intersection:** A conical intersection not forced by symmetry but obtained when independent nuclear coordinates tune both the diabatic gap and coupling to zero.

**Adiabatic approximation:** Approximation in which the nuclear dynamics is propagated on one or more adiabatic potential-energy surfaces while neglecting some or all nonadiabatic derivative couplings.

**Adiabatic electronic state:** Eigenstate of the electronic Hamiltonian at fixed nuclear geometry.

**Adiabatic representation:** Representation in which the electronic Hamiltonian is diagonal at each nuclear geometry. It is natural for electronic-structure calculations but introduces derivative couplings in the nuclear kinetic energy.

**Adiabatic-to-diabatic transformation (ADT):** Geometry-dependent transformation from adiabatic electronic states to diabatic or quasi-diabatic states. The transformation matrix is usually written as $\Cmat$.

**ADT angle:** Mixing angle used to parameterise a two-state or three-state ADT matrix.

**Anti-Hermitian coupling matrix:** Property of the first-order nonadiabatic coupling matrix in an orthonormal electronic basis. For real electronic states it becomes antisymmetric.

## B

**Berry phase:** Geometric phase acquired by an electronic state after adiabatic transport around a closed loop. Around a conical intersection, real adiabatic states can change sign after one loop.

**Born-Huang expansion:** Expansion of the full molecular wavefunction in an electronic basis with nuclear amplitudes as coefficients. It is formally exact for a complete electronic basis.

**Born-Oppenheimer approximation:** Separation of electronic and nuclear motion obtained by assuming the electrons adjust instantaneously to nuclear geometry and by neglecting nonadiabatic couplings.

**Branching plane:** Two-dimensional subspace that lifts the degeneracy of a two-state conical intersection to first order. It is spanned by the gradient-difference/tuning vector and the coupling vector.

## C

**CASSCF:** Complete active space self-consistent field method. In the Procrustes notes, CASSCF wavefunctions are expanded in configuration or Slater-determinant bases.

**CI vector:** Vector of configuration-interaction coefficients describing an electronic state in a determinant/configuration basis.

**Clamped-nuclei electronic Hamiltonian:** Electronic Hamiltonian evaluated at fixed nuclear geometry.

**Conical intersection (CI):** Degeneracy between two adiabatic potential-energy surfaces where the local energy surfaces form a double-cone structure in the branching plane.

**Configuration overlap:** Overlap between Slater determinants or configuration state functions, often built from molecular-orbital overlap determinants.

**Coupling coordinate:** Coordinate in the branching plane that controls the off-diagonal diabatic coupling to first order.

**Curl condition:** Integrability condition for constructing a path-independent diabatic transformation. If the relevant coupling field has nonzero curvature/curl, the ADT can become path dependent.

## D

**DD-vMCG:** Direct-dynamics variational multi-configuration Gaussian method. The notes use it as the dynamics context for propagation diabatisation.

**Derivative coupling:** Coupling generated because electronic basis functions depend on nuclear coordinates. The first-order derivative coupling is usually the NACV.

**Derivative-coupling numerator:** The numerator-like quantity $\mel{\psi_i}{\nabla \hat H_{\mathrm{el}}}{\psi_j}$. The NACV is obtained from this kind of object by dividing by an adiabatic energy gap, away from degeneracies.

**Diabatic potential matrix:** Potential matrix $\W$ in a diabatic or quasi-diabatic basis. It is generally not diagonal, but its elements are intended to be smooth functions of nuclear geometry.

**Diabatic representation:** Electronic representation designed to reduce or remove derivative couplings, moving the dominant nonadiabatic physics into off-diagonal potential couplings.

**Diabatic state:** Basis state intended to vary smoothly with nuclear geometry and preserve electronic character as much as possible.

**Direct dynamics:** Dynamics approach in which electronic-structure information is generated or queried on the fly rather than from a precomputed global potential-energy surface.

**Dressed kinetic energy:** Gauge-covariant form of the nuclear kinetic energy operator in the adiabatic representation, where nuclear derivatives are shifted by derivative-coupling matrices.

## F

**Finite electronic subspace:** Practical retained set of electronic states used in calculations. Many exact identities are only exact for a complete electronic basis or a well-isolated finite subspace.

**First-order nonadiabatic coupling:** Coupling involving first nuclear derivatives of electronic states. Usually represented by the NACV $\F_{ij}$.

## G

**Gaussian wavepacket (GWP):** Localised nuclear basis function used in vMCG-type dynamics. Direct-dynamics database routines often build local database lists for each GWP.

**Geometric phase:** See Berry phase.

**Gradient-difference vector:** Vector describing how the diabatic energy gap changes with nuclear displacement. Closely related to the tuning vector.

**Group Born-Oppenheimer approximation:** Approximation in which a finite group of electronic states is retained while coupling to omitted states is treated as weak or neglected.

## H

**Hellmann-Feynman theorem:** Relation connecting derivatives of electronic energies or Hamiltonian matrix elements to expectation values of derivatives of the electronic Hamiltonian.

**Hessian:** Matrix of second derivatives. In local harmonic models, Hessians describe curvature of diabatic potential matrix elements.

## I

**Intersection seam:** Set of nuclear geometries where the conical-intersection degeneracy persists. For a two-state CI in $f$ nuclear dimensions, the seam is locally $(f-2)$-dimensional.

**Intruder state:** Electronic state outside the intended active/retained subspace that comes close in energy or character and can disrupt state tracking or diabatisation.

## L

**Linear vibronic coupling (LVC) model:** Local first-order diabatic model near a conical intersection. It describes the leading tuning and coupling directions.

**Local database:** Small subset of nearby direct-dynamics database records selected for a particular GWP or current geometry.

**Local harmonic approximation (LHA):** Local quadratic expansion of potential matrix elements around a database geometry.

**Lorentzian NACV form:** One-dimensional cut of the two-state NACV near an avoided crossing or conical intersection that produces a Lorentzian-shaped coupling profile.

## N

**NACM:** Nonadiabatic coupling matrix, whose elements are nonadiabatic coupling vectors or coordinate-resolved couplings.

**NACT:** Nonadiabatic coupling term. The notes sometimes use this for component-wise or path-projected derivative couplings.

**NACV:** Nonadiabatic coupling vector, usually $\F_{ij}=\braket{\psi_i}{\nabla\psi_j}$.

**Nonadiabatic coupling:** Coupling between electronic states induced by nuclear motion. It appears naturally in the adiabatic representation.

**Noncrossing rule:** Heuristic rule that states of the same symmetry generally avoid crossing along a one-dimensional coordinate, while true degeneracies require enough independent coordinates.

## P

**Path dependence:** Situation where the ADT obtained by integrating derivative couplings depends on the path through nuclear coordinate space.

**Peaked conical intersection:** CI where the local cone is effectively peaked, often associated with opposing slopes of diabatic surfaces along a relevant tuning direction.

**Phase convention:** Choice of signs/phases for electronic states. Many quantities, especially NACVs and ADT matrices, depend on consistent phase choices even though observables do not.

**Projection diabatisation:** Diabatisation approach based on projecting states at a new geometry onto a reference diabatic manifold.

**Propagation diabatisation:** DD-vMCG diabatisation scheme that propagates an ADT from known database information to a new geometry, with safety checks and fallbacks.

**Procrustes diabatisation:** Diabatisation method that uses an orthogonal Procrustes problem to align orbitals or CI vectors across geometries.

## Q

**Quadratic vibronic coupling (QVC) model:** Vibronic-coupling model including second-order terms in nuclear displacements. In `optqvc`, a related one-dimensional cubic path model is used as a fallback, not a full multidimensional QVC model.

**Quasi-diabatic representation:** Practical finite-state representation that reduces derivative couplings over a region but may not remove them exactly or globally.

## R

**Residual coupling:** Coupling that remains after a partial diabatisation or after restricting attention to a finite retained subspace. It can represent coupling to omitted states or coupling that cannot be removed under the chosen boundary/topological constraints.

**Retained subspace:** Electronic-state subspace kept explicitly in the dynamics or derivation.

## S

**SA-CASSCF:** State-averaged CASSCF. Used in Procrustes-type discussions where several states are treated together.

**Scalar coupling:** Second-order nonadiabatic coupling matrix $\G$.

**Shepard weighting:** Distance-based interpolation scheme used to average local database records, with closer records receiving larger weights.

**Sign alignment:** Procedure for making derivative-coupling or eigenvector signs consistent between quantum-chemistry output and database/model predictions.

**Slater determinant:** Antisymmetrised product of spin-orbitals used as a many-electron basis function.

**Sloped conical intersection:** CI where the cone is tilted enough that the local intersection is not a peak on the upper surface.

**Spin-orbit coupling (SOC):** Coupling between spin and orbital angular momentum. Some code paths add SOC terms back into predicted adiabatic matrices.

**Split diabatic representation:** Representation that separates a removable coupling component from a residual coupling component, often used to reconcile finite-subspace diabatisation with residual coupling.

**Strict diabatic representation:** Ideal representation in which derivative couplings vanish. Usually unavailable globally for finite molecular electronic subspaces.

**Symmetry-allowed conical intersection:** CI enabled by symmetry rules, often involving states of different symmetry crossing in a symmetry-preserving subspace and coupling through a symmetry-breaking mode.

**Symmetry-required conical intersection:** CI forced by degeneracy from a multidimensional electronic irreducible representation, as in Jahn-Teller situations.

## T

**Taylor shift:** Evaluation of a local Taylor or harmonic model at a displaced geometry.

**Topological matrix:** Matrix quantity obtained from transporting an ADT or related transformation around a closed loop. It diagnoses global sign/phase/topological effects.

**Topological spin:** Classification idea used in the specialised diabatisation notes to describe the topological behaviour of conical intersections and ADT matrices.

**Tuning coordinate:** Coordinate in the branching plane that changes the diabatic energy gap to first order.

## V

**vMCG:** Variational multi-configuration Gaussian method.

**Vibronic coupling:** Coupling between electronic states mediated by nuclear motion.

## Code Routine Names

**`dddb_gp`:** Builds a small local database list for one Gaussian wavepacket.

**`dddb_rd_gp`:** Reads and interpolates a GWP-local direct-dynamics diabatic database.

**`diabat4_2`:** Main routine discussed for DB-guided phase alignment and ADT propagation.

**`intengap4`:** Builds path interpolation information for energy gaps and projected coupling numerators.

**`stepnact4`:** Evaluates path-projected scalar NACT values from interpolation data.

**`optqvc`:** Optimisation-based cubic path-model fallback for difficult diabatisation cases.

**`propadt`:** Propagates the ADT matrix using integrated coupling information.

**`shiftdd`:** Shifts a local harmonic diabatic model from a database geometry to a target geometry.
