# Born--Huang expansion and adiabatic nuclear equations

## Purpose

This page introduces the Born--Huang expansion and the coupled nuclear equations obtained by projecting the molecular time-dependent Schrodinger equation onto an adiabatic electronic basis. The central point is that the Born--Huang expansion is a representation of the full molecular wavefunction. It is not yet the Born--Oppenheimer or adiabatic approximation.

The page therefore establishes three objects needed throughout the following notes:

1. the adiabatic electronic basis $\{\psi_i(\mat r;\mat R)\}$;
2. the nuclear coefficient functions $\chi_i(\mat R,t)$;
3. the derivative-coupling terms that appear because the electronic basis depends on nuclear geometry.

The next page, [Adiabatic approximations](02_adiabatic_approximations.md), explains which additional terms are neglected to obtain independent nuclear motion on one or more adiabatic potential energy surfaces.

---

## Notation and coordinate conventions

Throughout these guides, atomic units are used unless stated otherwise. In atomic units,

$$
m_{\mathrm e}=1,\qquad |e|=1,\qquad \hbar=1,\qquad 4\pi\epsilon_0=1,
$$

and the units of length and energy are the Bohr and Hartree, respectively. With this convention, common electronic kinetic and Coulomb terms simplify to

$$
\begin{aligned}
-\frac{\hbar^2}{2m_{\mathrm e}}\nabla_i^2
&\equiv
-\frac{1}{2}\nabla_i^2,\\[4pt]
\frac{e^2}{4\pi\epsilon_0 r_{ij}}
&\equiv
\frac{1}{r_{ij}}.
\end{aligned}
$$

Here, $r_{ij}$ denotes the distance between two charged particles. The sign and nuclear charge factors are determined by the particular interaction. For example, an electron--nucleus attraction contributes a term proportional to $-Z_A/r_{iA}$, whereas electron--electron and nucleus--nucleus interactions are repulsive.

Bold symbols are used for vectors and matrices. Underlined bold symbols are reserved for quantities with tensorial structure, such as a matrix of vectors. 

The nuclear coordinate vector is denoted by $\mat R$. For a molecule with $N_{\mathrm{nuc}}$ nuclei, a Cartesian representation has

$$
f = 3N_{\mathrm{nuc}}
$$

nuclear coordinates before removing translations and rotations. Thus,

$$
\mat R =\begin{pmatrix}
R_1\\
R_2\\
\vdots\\
R_f
\end{pmatrix}
\in \mathbb{R}^{f}.
$$

For a nonlinear molecule, the number of internal vibrational degrees of freedom is $3N_{\mathrm{nuc}}-6$, while for a linear molecule it is $3N_{\mathrm{nuc}}-5$. Unless otherwise specified, the present introductory discussion uses Cartesian nuclear coordinates.

The gradient with respect to the nuclear coordinates is the vector differential operator

$$
\begin{align}
\nabla_{\mat R}
=\begin{pmatrix}
\pder{R_1}\\
\pder{R_2}\\
\vdots\\
\pder{R_f}
\end{pmatrix}
\end{align}
$$

When this operator acts on a scalar function, such as a potential energy surface $V(\mat R)$, it produces the gradient vector

$$
\begin{align}
\nabla_{\mat R} V(\mat R)
=\begin{pmatrix}
\pdv{V}{R_1}\\
\pdv{V}{R_2}\\
\vdots\\
\pdv{V}{R_f}
\end{pmatrix}.
\end{align}
$$

It is often convenient to introduce mass-scaled Cartesian coordinates,

$$
q_\alpha = \sqrt{M_\alpha}\,R_\alpha,
\qquad
\alpha=1,\ldots,f,
$$

where $M_\alpha$ is the nuclear mass associated with the Cartesian coordinate $R_\alpha$. Equivalently,

$$
\mat q = \mat M^{1/2}\mat R,
$$

where

$$
\mat M =\operatorname{diag}(M_1,M_2,\ldots,M_f)
$$

is the diagonal mass matrix. In unscaled Cartesian coordinates, the nuclear kinetic energy operator is

$$
\hat T_{\mathrm n}
=-\frac{1}{2}
\nabla_{\mat R}^{T}
\mat M^{-1}
\nabla_{\mat R}.
$$

Using $\mat q=\mat M^{1/2}\mat R$, this becomes

$$
\hat T_{\mathrm n}
=-\frac{1}{2}
\nabla_{\mat q}^{T}\nabla_{\mat q}
=-\frac{1}{2}\nabla_{\mat q}^{2}.
$$

This simplification is one of the main reasons for introducing mass-scaled coordinates. A more detailed discussion of mass-scaled and mass-frequency-scaled coordinates is given in [Coordinate transformations](../../01_Primer/coordiante_transformation.md).

---

## Molecular Hamiltonian and clamped-nuclei electronic basis

The aim of quantum dynamics is to describe the time evolution of a molecular system. Within the non-relativistic framework, this evolution is governed by the time-dependent Schrödinger equation (TDSE),

$$
\begin{align}
i\hbar \pdv{\Psi(\mat R,\mat r,t)}{t}
=\hat H(\mat R,\mat r)\Psi(\mat R,\mat r,t),
\label{eq:tdse}
\end{align}
$$

where $\Psi(\mat R,\mat r,t)$ is the full molecular wavefunction. The vector $\mat r$ collects the electronic coordinates, while $\mat R$ collects the nuclear coordinates. The molecular Hamiltonian can be partitioned as

$$
\begin{align}
\hat H(\mat R,\mat r)
=\hat T_{\mathrm n}(\mat R)
+\hat H_{\mathrm{el}}(\mat r;\mat R).
\label{eq:hamiltonian_partition}
\end{align}
$$

Here, $\hat T_{\mathrm n}$ is the nuclear kinetic energy operator and $\hat H_{\mathrm{el}}$ is the clamped-nuclei electronic Hamiltonian. The common convention is to include the nuclear--nuclear repulsion in $\hat H_{\mathrm{el}}$, so that the electronic eigenvalues directly define the adiabatic potential energy surfaces. With this convention,

$$
\begin{align}
\hat H_{\mathrm{el}}(\mat r;\mat R)
=\hat T_{\mathrm e}(\mat r)
+\hat V_{\mathrm{ee}}(\mat r)
+\hat V_{\mathrm{en}}(\mat r,\mat R)
+\hat V_{\mathrm{nn}}(\mat R).
\label{eq:electronic_hamiltonian}
\end{align}
$$

The semicolon in $\hat H_{\mathrm{el}}(\mat r;\mat R)$ indicates that $\mat R$ is treated as a parameter in the electronic problem. In other words, for each fixed nuclear geometry $\mat R$, the electronic Schrödinger equation is solved as an eigenvalue problem in the electronic coordinates $\mat r$. The resulting electronic eigenfunctions and eigenvalues nevertheless change as the nuclear geometry changes.

The clamped-nuclei electronic eigenvalue problem of interest is thus:

$$
\begin{align}
\hat H_{\mathrm{el}}(\mat r;\mat R)\psi_i(\mat r;\mat R)
=V_i(\mat R)\psi_i(\mat r;\mat R),
\qquad
i=1,\ldots,N_{\mathrm s},
\label{eq:electronic_eigenvalue_problem}
\end{align}
$$

where $V_i(\mat R)$ is the $i$-th adiabatic potential energy surface and $\psi_i(\mat r;\mat R)$ is the corresponding electronic eigenfunction. 

Then at each nuclear geometry, the electronic eigenfunctions are taken to be orthonormal with respect to integration over the electronic coordinates,

$$
\begin{align}
\braket{\psi_j}{\psi_i}_{\mat r}
=\int \psi_j^*(\mat r;\mat R)\psi_i(\mat r;\mat R)\,d\mat r
=\delta_{ji}.
\label{eq:electronic_orthonormality}
\end{align}
$$

For a complete electronic basis, the corresponding resolution of identity is

$$
\begin{align}
\sum_{k=1}^{\infty}
\ket{\psi_k(\mat R)}
\bra{\psi_k(\mat R)}
=\hat I_{\mathrm{el}}.
\label{eq:electronic_completeness}
\end{align}
$$

For a finite set of $N_{\mathrm s}$ electronic states, the same sum defines a projector onto the retained electronic subspace,

$$
\begin{align}
\hat P_{N_{\mathrm s}}(\mat R)
=\sum_{k=1}^{N_{\mathrm s}}
\ket{\psi_k(\mat R)}
\bra{\psi_k(\mat R)}.
\label{eq:finite_electronic_projector}
\end{align}
$$

---

## Born--Huang expansion of the molecular wavefunction

The full molecular wavefunction can be expanded in the electronic eigenfunctions as

$$
\begin{align}
\Psi(\mat R,\mat r,t)
=\sum_{i=1}^{N_{\mathrm s}}
\psi_i(\mat r;\mat R)\chi_i(\mat R,t).
\label{eq:born_huang_expansion}
\end{align}
$$

This is the Born--Huang expansion. The functions $\chi_i(\mat R,t)$ are nuclear wavefunctions associated with the electronic states $\psi_i$. Each $\chi_i$ is a scalar function on nuclear configuration space, while the collection of all nuclear amplitudes can be written as the vector

$$
\boldsymbol{\chi}(\mat R,t)
=\begin{pmatrix}
\chi_1(\mat R,t)\\
\chi_2(\mat R,t)\\
\vdots\\
\chi_{N_{\mathrm s}}(\mat R,t)
\end{pmatrix}.
$$

> Finite-subspace caveat: the Born--Huang expansion is formally exact only when the electronic basis is complete. A finite-state expansion is controlled only when the omitted electronic states are weakly coupled to the retained subspace over the region of nuclear configuration space relevant to the dynamics. This finite-subspace issue is treated more carefully in [The Born--Oppenheimer equation in a finite electronic subspace](../intermediates/int01_group_born_approximations.md).


The Born--Huang expansion should be distinguished from the Born--Oppenheimer approximation. The expansion in Eq. $\eqref{eq:born_huang_expansion}$ is a sum over electronic states and is formally exact in a complete electronic basis. The Born--Oppenheimer or adiabatic approximation is introduced only later, when derivative couplings are neglected and nuclear motion is assumed to proceed on decoupled adiabatic surfaces.

> Key point: the electronic basis functions $\psi_i(\mat r;\mat R)$ depend on $\mat R$. Therefore, the nuclear kinetic energy operator does not act only on $\chi_i(\mat R,t)$; it also acts on the electronic basis. This is the origin of the derivative-coupling terms.



---

## Projection onto the adiabatic electronic basis

Substituting Eq. $\eqref{eq:born_huang_expansion}$ into the TDSE and projecting from the left with $\bra{\psi_j}$, followed by integration over electronic coordinates, gives a set of coupled nuclear equations. This is the central result of the page. In mass-scaled coordinates $\mat q$, the component form is

$$
\begin{align}
i\hbar \pdv{\chi_j}{t}
=-\frac{1}{2}\nabla_{\mat q}^{2}\chi_j
+V_j\chi_j
-\frac{1}{2}
\sum_{i=1}^{N_{\mathrm s}}
\left(
2\F_{ji}\cdot\nabla_{\mat q}\chi_i
+G_{ji}\chi_i
\right),
\qquad
j=1,\ldots,N_{\mathrm s}.
\label{eq:adiabatic_tdse_component_form}
\end{align}
$$

The corresponding time-independent form is obtained by substituting

$$
\chi_j(\mat q,t)=\chi_j(\mat q)e^{-iEt/\hbar},
$$

which gives

$$
\begin{align}
-\frac{1}{2}\nabla_{\mat q}^{2}\chi_j
+\left(V_j-E\right)\chi_j
-\frac{1}{2}
\sum_{i=1}^{N_{\mathrm s}}
\left(
2\F_{ji}\cdot\nabla_{\mat q}\chi_i
+
G_{ji}\chi_i
\right)
=0.
\label{eq:adiabatic_tise_component_form}
\end{align}
$$

A detailed derivation is given in [Born--Huang adiabatic expansion](../derivations/derivation_adiabatic_tdse.md).

The first derivative coupling vector is defined as

$$
\begin{align}
\F_{ji}(\mat q)
=\braket{\psi_j}{\nabla_{\mat q}\psi_i}_{\mat r}.
\label{eq:first_derivative_coupling}
\end{align}
$$

In component form,

$$
\begin{align}
F_{ji,\alpha}(\mat q)
=\left\langle
\psi_j
\middle|
\pdv{\psi_i}{q_\alpha}
\right\rangle_{\mat r},
\qquad
\alpha=1,\ldots,f.
\label{eq:first_derivative_coupling_component}
\end{align}
$$

For each pair of electronic states $(j,i)$, $\F_{ji}$ is a vector in nuclear coordinate space,

$$
\F_{ji}\in\mathbb{C}^{f}.
$$

The full collection of these objects may be viewed either as an $N_{\mathrm s}\times N_{\mathrm s}$ matrix whose elements are $f$-dimensional vectors, or equivalently as a rank-three array with shape

$$
N_{\mathrm s}\times N_{\mathrm s}\times f.
$$

This guide denotes that collection by $\F$. Its coordinate components are matrices $\F_\alpha$, with

$$
\begin{align}
(\F_\alpha)_{ji}=F_{ji,\alpha}.
\end{align}
$$

The second derivative coupling is defined as

$$
\begin{align}
G_{ji}(\mat q)
=\braket{\psi_j}{\nabla_{\mat q}^{2}\psi_i}_{\mat r}.
\label{eq:second_derivative_coupling}
\end{align}
$$

Unlike $\F_{ji}$, $G_{ji}$ is a scalar function of the nuclear coordinates for each pair of electronic states. The collection of all $G_{ji}$ forms an $N_{\mathrm s}\times N_{\mathrm s}$ matrix $\mat G$.

Terminology note: $\F_{ji}$ is often called the derivative coupling vector, nonadiabatic coupling vector, or first-order nonadiabatic coupling term. To avoid ambiguity in later sections, this page uses the term *nonadiabatic coupling vector (NACV)* for Eq. $\eqref{eq:first_derivative_coupling}$. Related terminology, including electronic derivative coupling, is introduced more carefully in the diabatisation and DD-vMCG notes.

For real electronic eigenfunctions, the nonadiabatic coupling matrix (NACM) is antisymmetric,

$$
\begin{align}
\F_{ji}=-\F_{ij}.
\end{align}
$$

For complex electronic eigenfunctions, the corresponding statement is anti-Hermiticity([proof](../derivations/derivations_antihermitian_F.md)),

$$
\begin{align}
\F_{ji}=-\F_{ij}^{\,*}.
\end{align}
$$

Both $\F_{ji}$ and $G_{ji}$ measure how the electronic basis changes as the nuclear geometry changes. Therefore, they are absent only if the electronic basis is independent of nuclear geometry, which is not the case for the adiabatic electronic basis.

---

## Matrix form of the coupled nuclear equations

The coupled equations can be written compactly by introducing the diagonal adiabatic potential matrix

$$
\begin{align}
\mat V(\mat q)
=\operatorname{diag}
\left(
V_1(\mat q),
V_2(\mat q),
\ldots,
V_{N_{\mathrm s}}(\mat q)
\right).
\label{eq:adiabatic_potential_matrix}
\end{align}
$$

This matrix acts in the retained electronic-state space and has dimension

$$
N_{\mathrm s}\times N_{\mathrm s}.
$$

The nonadiabatic coupling operator is an $N_{\mathrm s}\times N_{\mathrm s}$ matrix of differential operators. Its elements are

$$
\begin{align}
\mat\Lambda_{ji}
=\frac{1}{2}
\left(
2\F_{ji}\cdot\nabla_{\mat q}
+
G_{ji}
\right).
\label{eq:lambda_operator}
\end{align}
$$

The action of $\mat\Lambda$ on the nuclear wavefunction vector is therefore

$$
\begin{align}
(\mat\Lambda\boldsymbol{\chi})_j
=\sum_{i=1}^{N_{\mathrm s}}
\frac{1}{2}
\left(
2\F_{ji}\cdot\nabla_{\mat q}\chi_i
+G_{ji}\chi_i
\right).
\end{align}
$$

Equation $\eqref{eq:adiabatic_tdse_component_form}$ can then be written as

$$
\begin{align}
i\hbar \pdv{\boldsymbol{\chi}}{t}
=\left[
-\frac{1}{2}\nabla_{\mat q}^{2}\mat I
+\mat V
-\mat\Lambda
\right]
\boldsymbol{\chi}.
\label{eq:adiabatic_tdse_matrix_form}
\end{align}
$$

The time-independent version is

$$
\begin{align}
\left[
-\frac{1}{2}\nabla_{\mat q}^{2}\mat I
+\mat V -\mat\Lambda
\right]
\boldsymbol{\chi}=E\boldsymbol{\chi}.
\label{eq:adiabatic_tise_matrix_form}
\end{align}
$$

Here, $\mat I$ is the $N_{\mathrm s}\times N_{\mathrm s}$ identity matrix in electronic-state space.

---

## Dressed kinetic energy form

A compact form often used in the literature rewrites the derivative-coupling terms as part of a dressed, or gauge-covariant, kinetic energy operator. This section is included as a bridge to [Adiabatic approximations](02_adiabatic_approximations.md) and [Diabatic representation](03_diabatic_representation.md), where this form becomes the starting point for controlled approximations and basis transformations. The compact form follows from expressing the second derivative coupling matrix $\mat G$ in terms of the first derivative couplings $\F$.

For a complete electronic basis,

$$
\begin{align}
G_{ji}
=\nabla_{\mat q}\cdot\F_{ji}
+
\sum_{k=1}^{\infty}
\F_{jk}\cdot\F_{ki}.
\label{eq:g_from_f_complete}
\end{align}
$$

In a finite electronic subspace, the same relation is exact only if the retained subspace is effectively decoupled from the omitted states. Otherwise, it should be interpreted as a subspace approximation.

Using the coordinate-resolved NACM $\F_\alpha$, define

$$
\begin{align}
\nabla_{\mat q}\mat I+\F
\equiv
\left\{
\pder{q_\alpha}\mat I+\F_\alpha
\right\}_{\alpha=1}^{f}.
\end{align}
$$

The square of this operator means

$$
\begin{align}
\left(\nabla_{\mat q}\mat I+\F\right)^2
\equiv
\sum_{\alpha=1}^{f}
\left(
\pder{q_\alpha}\mat I+\F_\alpha
\right)
\left(
\pder{q_\alpha}\mat I+\F_\alpha
\right).
\label{eq:dressed_derivative_definition}
\end{align}
$$

When this operator acts on $\boldsymbol{\chi}$, it produces

$$
\begin{align}
\left[
\left(\nabla_{\mat q}\mat I+\F\right)^2
\boldsymbol{\chi}
\right]_j
=\nabla_{\mat q}^{2}\chi_j
+
\sum_{i=1}^{N_{\mathrm s}}
\left(
2\F_{ji}\cdot\nabla_{\mat q}\chi_i
+
G_{ji}\chi_i
\right),
\end{align}
$$

provided Eq. $\eqref{eq:g_from_f_complete}$ is valid in the electronic space considered. The coupled nuclear equations can therefore be written as

$$
\begin{align}
i\hbar\pdv{\boldsymbol{\chi}}{t}
=\left[
-\frac{1}{2}
\left(
\nabla_{\mat q}\mat I+\F
\right)^2
+
\mat V
\right]
\boldsymbol{\chi}.
\label{eq:dressed_kinetic_tdse}
\end{align}
$$

Equivalently, the stationary equation is

$$
\begin{align}
\left[
-\frac{1}{2}
\left(
\nabla_{\mat q}\mat I+\F
\right)^2
+
\mat V
\right]
\boldsymbol{\chi}
=E\boldsymbol{\chi}.
\label{eq:dressed_kinetic_tise}
\end{align}
$$

This equation is mathematically compact but physically important. It shows that, in the adiabatic representation, the nuclear kinetic energy is not simply $-\frac{1}{2}\nabla_{\mat q}^{2}$. Instead, the nuclear derivatives are modified by the geometry-dependence of the electronic basis.

> Interpretation: this is the point at which the adiabatic representation becomes inconvenient for nonadiabatic dynamics. The NACV can become large, or even singular, near electronic degeneracies. This motivates the later discussions of adiabatic approximations, conical intersections, and diabatic or quasi-diabatic representations.

---

## Summary

The Born--Huang expansion rewrites the full molecular wavefunction as a sum of adiabatic electronic functions multiplied by nuclear coefficient functions. This expansion is exact in a complete electronic basis. Once the electronic basis is truncated to a finite set of states, the result becomes a finite-subspace approximation whose reliability depends on the neglected couplings to omitted states.

Projecting the molecular TDSE onto the adiabatic electronic basis gives coupled nuclear equations. The coupling terms arise because the electronic eigenfunctions depend on nuclear geometry. These terms are collected in the NACV $\F_{ji}$ and the scalar second-derivative coupling $G_{ji}$. The dressed kinetic energy form shows the same point compactly: in the adiabatic representation, the nuclear derivative is modified by the geometry-dependence of the electronic basis.

This is the starting point for the next pages. [Adiabatic approximations](02_adiabatic_approximations.md) explains what is neglected to obtain independent motion on adiabatic potential energy surfaces. [Diabatic representation](03_diabatic_representation.md) explains how the same physics can be represented by changing the electronic basis so that important couplings appear in the potential matrix instead.

---

## To read next

- [Adiabatic approximations](02_adiabatic_approximations.md)
- [Diabatic representation](03_diabatic_representation.md)
- [The Born--Oppenheimer equation in a finite electronic subspace](../intermediates/int01_group_born_approximations.md)
- [Derivation: adiabatic TDSE from the Born--Huang expansion](../derivations/derivation_adiabatic_tdse.md)
- [Derivation: dressed kinetic energy operator](../derivations/derivation_dressed_term.md)

---


