---
title: Symbols And Notations
---

# Symbols And Notations

This page records the main notation used across the Born-Oppenheimer, nonadiabaticity, direct-dynamics, and diabatisation notes. Some code pages use implementation variable names in parallel with the mathematical symbols; those are collected near the end.

## General Conventions

| Symbol | Meaning |
| --- | --- |
| $N_{\mathrm{s}}$, $N_s$, $S$ | Number of retained electronic states. In code notes, $S$ often corresponds to `nddstate`. |
| $M$ | Number of electronic states in many finite-subspace and ADT-topology derivations. Often plays the same role as $N_s$, but follows the notation of those pages. |
| $N_{\mathrm{nuc}}$ | Number of nuclei. |
| $f$ | Number of nuclear degrees of freedom, often $3N_{\mathrm{nuc}}-6$ for nonlinear molecules or $3N_{\mathrm{nuc}}-5$ for linear molecules. |
| $N$ | In code walkthroughs, often the number of DD-PES nuclear coordinates, corresponding to `ndofddpes`. |
| $P$ | In code notes, number of stored unique state-pair couplings, usually $S(S-1)/2$, corresponding to `nactdim`. In finite-subspace notes, $P$ also labels a retained electronic subspace. |
| $Q$ | Complementary omitted electronic subspace in finite-subspace ADT notes. |
| $N_P$ | Number of states in the $P$-th sub-Hilbert space. |
| $\mathcal H_{\mathrm{el}}$ | Electronic Hilbert space. |
| $\mathcal H_P$ | The $P$-th sub-Hilbert space in a partition of $\mathcal H_{\mathrm{el}}$. |
| $i,j,k$ | Electronic-state indices. |
| $\alpha,\beta,\mu,\nu$ | Nuclear-coordinate indices. In topological-loop pages, $\beta$ may also denote the final value of a loop parameter; check local definitions. |
| $a,b$ | Labels for a split retained/excluded coupling partition, especially in residual-coupling notes. |
| $\I$ | Identity matrix. |
| $\mat I$, $\mathbb I$ | Identity matrix, with typography varying by page. |
| $\BigO(\cdot)$ | Asymptotic order notation. |
| $\epsilon$ | Small parameter measuring weak retained-omitted or boundary coupling. |

## Coordinates And Operators

| Symbol | Meaning |
| --- | --- |
| $\mat r$ | Electronic coordinates. |
| $\mat R$ | Nuclear geometry or nuclear coordinate vector. |
| $\mat q$ | Nuclear coordinates, often mass-weighted or normal-mode coordinates depending on context. |
| $\mat Q$ | Displacement coordinate in a local vibronic-coupling or conical-intersection model. |
| $q_\alpha$, $R_\alpha$ | A single nuclear coordinate. |
| $\mat R_0$, $\mat q_0$ | Reference geometry, often a database geometry or conical-intersection geometry. |
| $\mat q_a$, $\mat q_b$ | Initial and final geometries of an open ADT path. |
| $\Delta\mat R$ | Displacement from a reference geometry. |
| $x$ | One-dimensional path coordinate used in propagation diabatisation or QVC fallback models. |
| $L$ | Length of the straight path from a database geometry to the current geometry. |
| $s$, $s_0$, $s_f$ | Path parameter and its initial/final values in ADT line-integral derivations. |
| $\gamma$ | Open path in nuclear configuration space; also a quadratic vibronic coefficient in local model pages, depending on context. |
| $\Gamma$ | Closed loop or closed contour used to define a topological matrix. |
| $\hat{\mat n}$ | Unit vector along the straight path. |
| $p,q$ | Generic nuclear coordinates used when deriving the two-coordinate curl condition. |
| $\nabla_{\mat q}$, $\nabla_{\mat R}$ | Nuclear gradient operators. |
| $\hat T_{\mathrm n}$ | Nuclear kinetic-energy operator. |
| $\hat H_{\mathrm{el}}$ | Clamped-nuclei electronic Hamiltonian. |

## Electronic And Nuclear Wavefunctions

| Symbol | Meaning |
| --- | --- |
| $\Psi(\mat r,\mat R,t)$ | Full molecular wavefunction. |
| $\ket{\psi_i}$ | Adiabatic electronic basis function or electronic eigenstate. |
| $\psivec$ | Row vector of adiabatic electronic states. |
| $\ket{\varphi_i}$ | Diabatic or quasi-diabatic electronic basis function. |
| $\varphivec$ | Row vector of diabatic or quasi-diabatic electronic states. |
| $\chi_i(\mat R,t)$ | Nuclear wavefunction amplitude associated with electronic state $i$. |
| $\chivec$ | Vector of nuclear wavefunction amplitudes. |
| $\ket{\phi_i}$ | Usually a Slater determinant or configuration basis function in CASSCF/Procrustes notes. |
| $c_i^s$ | Configuration-interaction coefficient for configuration $i$ in electronic state $s$. |

## Potential And Hamiltonian Matrices

| Symbol | Meaning |
| --- | --- |
| $V_i(\mat R)$ | Adiabatic potential-energy surface for state $i$. |
| $\V$ | Adiabatic potential matrix. Usually diagonal in the adiabatic electronic basis. |
| $\V^{(P)}$, $\V^{(Q)}$ | Retained and omitted blocks of the diagonal adiabatic potential matrix. |
| $\W$ | Diabatic potential matrix. Generally smooth but not diagonal. |
| $\W^{(P)}_{\mathrm{full}}$ | Retained block of the diabatic potential that would be obtained from the full-space ADT. |
| $\W^{(P)}_{\mathrm{red}}$ | Reduced $P$-space diabatic potential obtained using only the retained ADT equation. |
| $\Gadiab$ | Adiabatic gradient matrix or vector, depending on page context. |
| $\Gdiab$ | Diabatic gradient matrix or vector, depending on page context. |
| $\Hadiab$ | Adiabatic Hessians. |
| $\Hdiab$ | Diabatic Hessians. |
| $W_{ij}$ | Diabatic potential matrix element. |
| $\Delta$ | Diabatic energy gap, commonly $W_{22}-W_{11}$ in a two-state model. |
| $\Sigma$ | Average diabatic energy, commonly $(W_{11}+W_{22})/2$. |
| $E_+$, $E_-$ | Upper and lower adiabatic energies in a two-state model. |
| $E_0$ | Reference energy, often the energy at a conical intersection. |

## Nonadiabatic Couplings

| Symbol | Meaning |
| --- | --- |
| $\F_{ij}$ | Nonadiabatic coupling vector (NACV), often $\braket{\psi_i}{\nabla\psi_j}$. |
| $\mat F_\alpha$ | Coordinate-resolved nonadiabatic coupling matrix for coordinate $q_\alpha$ or $R_\alpha$. |
| $\mat F_\mu$, $\mat F_p$, $\mat F_q$ | Coordinate-resolved NACMs used in curl-condition derivations. |
| $\mat F_s(s)$ | Path-contracted NACM, $\F(\mat q(s))\cdot d\mat q/ds$. |
| $F_{ij}(s)$ | Scalar coefficient of the elementary generator $\mat J_{ij}$ in a path-contracted real NACM. |
| $\F$ | Vector/tensor of first-order nonadiabatic coupling matrices. Shape is often $N_s \times N_s \times f$. |
| $\F^{(P)}$, $\F^{(Q)}$ | Retained and omitted diagonal blocks of the nonadiabatic coupling matrix. |
| $\F^{(P,Q)}$, $\F^{(Q,P)}$ | Cross-block couplings between retained and omitted electronic subspaces. |
| $\F^{(\varphi)}$ | Derivative-coupling matrix after transformation into the $\varphi$ basis. |
| $\F^{\mathrm{res}}$ | Residual derivative coupling that remains after a chosen transformation. |
| $\F^{\mathrm{new}}$ | Generic transformed derivative-coupling connection. |
| $\F\cdot\nabla_{\mat q}$ | Contraction of derivative-coupling matrices with the nuclear gradient. |
| $\Gmat_{ij}$ | Second-order scalar coupling matrix element, often $\sum_\alpha \braket{\psi_i}{\partial^2\psi_j/\partial q_\alpha^2}$. |
| $\Gmat$ | Matrix of second-order scalar couplings. |
| $\D_{ij}$ | Numerator-like derivative matrix element, often $\mel{\psi_i}{\nabla \hat H_{\mathrm{el}}}{\psi_j}$. This is not the same as the gap-divided NACV. |
| $\Dmat$ | Matrix form of derivative/numerator-like quantities. |
| $\Lambda$ | Nonadiabatic coupling operator in older derivations. |
| $[\mat A,\mat B]$ | Matrix commutator, $\mat A\mat B-\mat B\mat A$. |
| $\mat\Omega_{\mu\nu}$ | Non-Abelian curvature or field strength of the retained ADT connection. |
| $\mathcal D_A$ | Adiabatic covariant derivative, often $\partial_R+\F$ in one-dimensional split-diabatic derivations. |

For real adiabatic electronic states, the NACM is antisymmetric:

$$
\F_{ij}=-\F_{ji},\qquad \F_{ii}=0.
$$

## ADT And Diabatisation Matrices

| Symbol | Meaning |
| --- | --- |
| $\Cmat$ | Adiabatic-to-diabatic transformation (ADT) matrix. |
| $\Cmat_P$, $\Cmat^{(P)}$ | ADT matrix or ADT block restricted to a retained $P$-space. |
| $\Cmat^{(Q,P)}$ | Leakage block of the full ADT matrix, mapping retained columns into the omitted $Q$-space. |
| $\Cinv$ | In this site, usually $\Cmat^\dagger$ for a unitary transformation (inverse of ADT matrix $\Cmat$). |
| $\Smat$ | Overlap or eigenvector matrix, depending on context. In code notes, `trans0` is often best interpreted as an eigenvector matrix $\Smat$. |
| $\mat D(\Gamma)$, $\Dmat$ | Topological matrix or closed-loop ADT propagator in topology pages. The symbol $\Dmat$ can also mean derivative/numerator-like quantities in implementation notes, so check the local definition. |
| $\Cmat_a$, $\Cmat_b$ | Transformations associated with split retained/excluded coupling components. In split-diabatic notes, $\Cmat_a$ removes the selected component $\F_a$. |
| $\F_a$, $\F_b$ | Removable and residual/non-removable coupling components in split representations. |
| $\widetilde{\F}_b$ | Residual coupling after transformation into a partially diabatic representation. |
| $\theta$ | Two-state mixing angle or ADT angle. |
| $\gamma_{ij}$ | Path-dependent multistate ADT angle for the elementary rotation in the $(i,j)$ plane. |
| $\alpha_{ij}$ | Endpoint value of $\gamma_{ij}$ after a closed loop. |
| $n_{ij}$ | Integer used in endpoint quantisation conditions, $\alpha_{ij}=n_{ij}\pi$. |
| $c_{ij}$, $s_{ij}$ | Shorthand for $\cos\gamma_{ij}$ and $\sin\gamma_{ij}$, or endpoint versions when $\gamma_{ij}=\alpha_{ij}$. |
| $\mat Q_{ij}(\gamma_{ij})$ | Elementary rotation matrix acting in the $(i,j)$ state plane. |
| $\mat J_{ij}$ | Antisymmetric generator of an elementary rotation in the $(i,j)$ plane. |
| $\mathcal P$ | Path-ordering operator in ADT path-ordered exponentials. |
| $\mat U_Q(s,s_0)$ | Propagator inside the omitted $Q$-space in reduced-subspace error derivations. |
| $\delta_{ij}$ | Kronecker delta. |
| $K$ | Number of negative diagonal entries in a diagonal real topological matrix. |
| $\Omega$ | Orthogonal Procrustes rotation matrix in the Procrustes notes. |

Common transformation relations:

$$
\varphivec=\psivec\Cmat,
\qquad
\W=\Cinv\V\Cmat.
$$

A common ADT differential condition is:

$$
\nabla_{\mat q}\Cmat+\F\Cmat=0.
$$

## Conical-Intersection And Vibronic-Coupling Notation

| Symbol | Meaning |
| --- | --- |
| CI | Conical intersection. |
| $\boldsymbol{\kappa}$ | Gradient-difference or tuning vector. Controls the diabatic energy gap to first order. |
| $\boldsymbol{\lambda}$ | Coupling vector. Controls the off-diagonal diabatic coupling to first order. |
| $\boldsymbol{\sigma}$ | Average-slope or tilt vector, often related to $\boldsymbol{\kappa}_1+\boldsymbol{\kappa}_2$. |
| $q_\kappa$ | Tuning coordinate in the branching plane. |
| $q_\lambda$ | Coupling coordinate in the branching plane. |
| $\Gamma_i$ | Irreducible representation of electronic state or mode, depending on context. |
| $\Gamma_\alpha$ | Irreducible representation of nuclear mode $\alpha$. |
| $\Gamma_{\mathrm{tot}}$ | Totally symmetric irreducible representation. |
| $\kappa_1,\kappa_2$ | Linear slopes of two diabatic diagonal elements. |
| $\lambda$ | Linear off-diagonal vibronic coupling coefficient. |
| $\gamma$ | Quadratic vibronic coupling coefficient. |
| $\mat A,\mat B,\mat C_{\mathrm{code}},\mat K$ | Matrices in the one-dimensional cubic path model used by `optqvc`. |

In a simple two-state diabatic model:

$$
\W =
\begin{pmatrix}
W_{11} & W_{12}\\
W_{12} & W_{22}
\end{pmatrix},
\qquad
\Delta=W_{22}-W_{11}.
$$

A conical intersection requires:

$$
\Delta=0,
\qquad
W_{12}=0.
$$

## Direct-Dynamics And Code Notation

| Symbol or variable | Meaning |
| --- | --- |
| GWP | Gaussian wavepacket. |
| DB | Database, usually the direct-dynamics database of previously computed geometries and electronic-structure quantities. |
| `dddb_gp` | Builds the local database list for one GWP. |
| `dddb_rd_gp` | Reads and interpolates a GWP-local diabatic DD database. |
| `diabat4_2` | Main DB-guided phase-alignment and ADT-propagation routine described in the code notes. |
| `intengap4` | Builds one-dimensional interpolation data along a path for energy gaps and projected numerator-like couplings. |
| `stepnact4` | Evaluates scalar NACTs along the interpolation path. |
| `optqvc` | Cubic path-model fallback used when the usual propagated-ADT branch is unreliable. |
| `propadt` | Propagates the ADT matrix from integrated coupling information. |
| `transform` | Transforms adiabatic quantities into the diabatic representation. |
| `shiftdd` | Shifts a local harmonic diabatic model from its database geometry to a target geometry. |
| `distdb_gp`, `distdb1` | Distance routines used for database/local-database selection. |
| `xgp` | Geometry of one GWP in `dddb_gp`. |
| `xgpoint` | Current target geometry in DD-PES coordinates. |
| `dbgeo` | Stored database geometries. |
| `dbener` | Stored database energy or potential matrices. |
| `dbgrad` | Stored first derivatives. |
| `dbhess` | Stored second derivatives/Hessians. |
| `dbdercp` | Stored derivative-coupling or numerator-like pair vectors. |
| `dercp` | Current derivative-coupling or numerator-like pair vectors after sign alignment. |
| `adttrans` | ADT matrix used by transformation routines. |
| `trans0` | Eigenvector matrix from diagonalising the predicted diabatic model; often interpreted as $\Smat$. |
| `av`, `av0`, `av1` | Adiabatic energy/value arrays in code notes. |
| `v`, `v0` | Diabatic potential matrices in code notes. |
| `deriv1`, `aderiv1` | Diabatic and adiabatic first derivatives. |
| `deriv2`, `aderiv2` | Diabatic and adiabatic second derivatives/Hessians. |
| `loc_gp` | Temporary list of selected database-record indices for one GWP. |
| `dist_gp`, `dist_gpt` | Local and full distance arrays used in database selection. |
| `ngp_loc(e)%locpt` | Linked-list storage for local database records of GWP `e`. |
| `nrec`, `numrec`, `dbnrec` | Counts of database records, with meaning depending on local context. |
| `rad_conf` | Confidence radius used in Shepard-like interpolation. |
| `shep_norm` | Sum/normalisation of Shepard-like weights; used as a support measure for the local database. |
| `maxwgt` | Maximum raw weight used when scaling Shepard-like weights. |
| `lvonly` | Intended energy-only flag in `dddb_rd_gp`; code notes flag that derivative data can still be needed. |

## MathJax Macros Used On This Site

These commands are defined in `assets/js/mathjax-config.js`.

| Macro | Renders as or means |
| --- | --- |
| `\mat{x}` | Bold matrix/vector symbol. |
| `\vect{x}` | Bold symbol. |
| `\ket{x}`, `\bra{x}` | Ket and bra notation. |
| `\braket{x}{y}` | Inner product. |
| `\mel{x}{A}{y}` | Matrix element. |
| `\pdv{f}{x}` | Partial derivative. |
| `\pddv{f}{x}` | Second partial derivative. |
| `\pddm{f}{x}{y}` | Mixed second partial derivative. |
| `\Cmat`, `\Smat`, `\Dmat`, `\Hmat` | Common matrix symbols. |
| `\F`, `\G`, `\W`, `\V` | Common coupling and potential symbols. |
| `\psivec`, `\varphivec`, `\chivec` | Electronic and nuclear state vectors. |
