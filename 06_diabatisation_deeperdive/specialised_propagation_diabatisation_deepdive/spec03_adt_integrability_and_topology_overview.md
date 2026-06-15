# ADT integrability, topology, and finite electronic subspaces: overview

## Purpose of this page

The adiabatic-to-diabatic transformation (ADT) was introduced earlier as the transformation that removes first-order nonadiabatic coupling terms from the nuclear kinetic-energy operator. In the convention used in these notes, the local ADT equation is

$$
\begin{align}
\nabla_{\mat R}\Cmat+\F\Cmat=0.
\label{eq:adt_overview_equation}
\end{align}
$$

Here $\mat R$ denotes a nuclear coordinate vector, $\Cmat(\mat R)$ is the ADT matrix, and $\F$ is the retained nonadiabatic coupling matrix-valued vector.

This equation looks trivial, but it hides three different questions:

1. **Local compatibility:** can the coordinate-resolved ADT equations be solved consistently in a regular region?
2. **Global topology:** what happens when the ADT is transported around a closed loop enclosing a conical intersection or another singularity?
3. **Finite-subspace validity:** what changes when the retained electronic space is only a finite subset of the complete Hilbert space?

This page gives the overview. The later pages provide the detailed derivations, examples, and implementation-facing consequences.

---

## Setup and notation

Let

$$
\left\{
\ket{\psi_1(\mat R)},
\ket{\psi_2(\mat R)},
\ldots,
\ket{\psi_M(\mat R)}
\right\}
$$

be the $M$ adiabatic electronic states retained in the calculation. For each nuclear coordinate $R_\mu$, define the coordinate-resolved nonadiabatic coupling matrix

$$
\begin{align}
(\mat F_\mu)_{ji}
=F_{ji,\mu}
=
\left\langle
\psi_j
\middle|
\pdv{\psi_i}{R_\mu}
\right\rangle .
\label{eq:coordinate_resolved_nacm_overview}
\end{align}
$$

Each $\mat F_\mu$ is an $M\times M$ matrix in electronic-state space. The full coupling object is therefore a matrix-valued vector,

$$
\begin{align}
\F
=
\left\{
\mat F_1,\mat F_2,\ldots,\mat F_f
\right\},
\end{align}
$$

where $f$ is the number of nuclear coordinates in the chosen representation. Equivalently, $\F$ may be viewed as an $M\times M\times f$ object.

For real adiabatic electronic functions, the coordinate-resolved matrices are antisymmetric. For complex electronic functions, they are anti-Hermitian:

$$
\begin{align}
\mat F_\mu^\dagger=-\mat F_\mu .
\end{align}
$$

The diabatic or quasi-diabatic electronic basis is written as

$$
\begin{align}
\varphivec=\psivec\Cmat,
\label{eq:diabatic_basis_from_adiabatic_basis_overview}
\end{align}
$$

where $\psivec$ (adiabatic) and $\varphivec$ (quasi-diabatic) are row vectors of electronic functions. With this convention, the diabatic potential matrix is

$$
\begin{align}
\W(\mat R)
=\Cmat^\dagger(\mat R)\,
\V(\mat R)\,
\Cmat(\mat R),
\label{eq:diabatic_potential_overview}
\end{align}
$$

where $\V$ is the diagonal adiabatic potential matrix in the retained electronic-state space.

---

## The central distinction

The main point of this group of pages is that the ADT equation has three levels of meaning.

### 1. Path-local propagation

Along a chosen path $\Gamma$ from $\mat R_0$ to $\mat R_1$, the ADT equation can be treated as an ordinary differential equation. Formally,

$$
\begin{align}
\Cmat(\mat R_1)
=
\mathcal P
\exp
\left[
-\int_{\Gamma}
\F(\mat R)\cdot d\mat R
\right]
\Cmat(\mat R_0),
\label{eq:path_ordered_adt_solution_overview}
\end{align}
$$

where $\mathcal P$ denotes path ordering.

This path-local solution is the form used in propagation diabatisation: the transformation is updated from one geometry to another by integrating retained-state nonadiabatic couplings along a finite path.

### 2. Regional ADT field

A path-local solution is weaker than a single smooth matrix field $\Cmat(\mat R)$ defined over a region. In more than one nuclear coordinate, Eq. $\eqref{eq:adt_overview_equation}$ represents a set of coordinate-resolved equations,

$$
\begin{align}
\pdv{\Cmat}{R_\mu}
+
\mat F_\mu\Cmat
=0,
\qquad
\mu=1,\ldots,f.
\label{eq:coordinate_adt_overview}
\end{align}
$$

For these equations to define one analytic matrix field, the different coordinate directions must be mutually compatible. This requirement leads to the curl condition.

For two coordinates $p$ and $q$, the condition may be written as

$$
\begin{align}
\pdv{\mat F_q}{p}
-
\pdv{\mat F_p}{q}
=
[\mat F_q,\mat F_p],
\label{eq:curl_condition_overview}
\end{align}
$$

or, equivalently,

$$
\begin{align}
\mat\Omega_{pq}
=
\pdv{\mat F_q}{p}
-
\pdv{\mat F_p}{q}
-
[\mat F_q,\mat F_p]
=0.
\label{eq:curvature_overview}
\end{align}
$$

Thus the local condition is:

$$
\boxed{
\text{A regular ADT field exists locally only when the retained coupling connection is flat.}
}
$$

Here "flat" means zero non-Abelian curvature in the region considered.

The detailed derivation and the distinction between smoothness of $\F$ and analyticity of $\Cmat$ are treated in [Curl condition, analyticity, and uniqueness](spec04_curl_condition_analyticity_and_uniqueness.md).

### 3. Closed-loop topology

Even when the curvature vanishes locally away from a singularity, a closed path may still carry nontrivial global information. This is the familiar situation around a conical intersection: locally the coupling can be regular away from the intersection, but a loop enclosing the singularity may produce a sign or phase change.

For a closed contour $\Gamma$, define the topological matrix

$$
\begin{align}
\mat D(\Gamma)
=
\mathcal P
\exp
\left[
-\oint_{\Gamma}
\F(\mat R)\cdot d\mat R
\right].
\label{eq:topological_matrix_overview}
\end{align}
$$

This matrix measures the holonomy of the ADT connection around the loop. If

$$
\begin{align}
\Cmat_{\mathrm{final}}
=
\mat D(\Gamma)
\Cmat_{\mathrm{initial}},
\end{align}
$$

then $\mat D(\Gamma)$ tells us whether the transported ADT matrix returns to its initial value.

The key distinction is:

$$
\boxed{
\text{The curl condition controls local path independence; the topological matrix controls closed-loop behaviour.}
}
$$

This distinction is developed in [Topological matrix and single-valued diabatic potentials](spec05_topological_matrix_and_single_valued_diabatic_potentials.md).

---

## Single-valued $\Cmat$ versus single-valued $\W$

The ADT matrix itself does not always need to be single-valued for the diabatic potential matrix to be single-valued. Since

$$
\begin{align}
\W
=
\Cmat^\dagger \V \Cmat,
\end{align}
$$

a closed-loop change

$$
\begin{align}
\Cmat_{\mathrm{final}}
=
\mat D
\Cmat_{\mathrm{initial}}
\end{align}
$$

gives

$$
\begin{align}
\W_{\mathrm{final}}
=
\Cmat_{\mathrm{initial}}^\dagger
\mat D^\dagger
\V
\mat D
\Cmat_{\mathrm{initial}}.
\end{align}
$$

Therefore $\W$ is single-valued when

$$
\begin{align}
\mat D^\dagger \V \mat D=\V.
\label{eq:single_valued_w_condition_overview}
\end{align}
$$

For nondegenerate adiabatic states, this usually means that $\mat D$ must be diagonal in the adiabatic basis, with diagonal elements of unit modulus. In real two-state problems, this often reduces to a sign change.

Thus:

$$
\boxed{
\text{The ADT matrix may change sign around a loop while the diabatic potential matrix remains single-valued.}
}
$$

The detailed condition, including the role of degeneracies at the base point, is discussed in [Topological matrix and single-valued diabatic potentials](spec05_topological_matrix_and_single_valued_diabatic_potentials.md).

Important notation warning: $\mat D(\Gamma)$ here denotes Baer's topological matrix. It should not be confused with derivative-coupling numerators used in the propagation-diabatisation implementation notes.

---

## Complete versus finite electronic spaces

In the complete electronic Hilbert space, the exact nonadiabatic coupling matrices have the correct differential structure. Away from singularities, the full connection is a pure gauge connection and satisfies the non-Abelian curl condition.

Practical calculations do not retain the complete electronic Hilbert space. Instead, one selects a finite retained subspace $P$ and omits the complementary $Q$-space. The reduced ADT equation is then

$$
\begin{align}
\nabla \Cmat_P
+
\F^{(P)}
\Cmat_P
=0.
\label{eq:p_space_adt_equation_overview}
\end{align}
$$

This equation is exact only if the retained subspace is closed under nuclear differentiation. In practice, this requires weak coupling between retained and omitted states,

$$
\begin{align}
\F_{ia}\approx \mat 0,
\qquad
i\in P,
\quad
a\in Q,
\end{align}
$$

over the region of nuclear configuration space sampled by the dynamics.

If the $P$--$Q$ couplings are not negligible, the projected connection $\F^{(P)}$ generally has residual curvature. The reduced curl condition then fails exactly, and the propagated transformation becomes path-dependent in a way that reflects the incompleteness of the retained state space.

This is the finite-subspace version of the residual-coupling problem:

$$
\boxed{
\text{A finite retained manifold supports a controlled quasi-diabatic representation only when it behaves as an effectively isolated subspace.}
}
$$

The complete-versus-reduced distinction is treated in [Complete versus reduced Hilbert space ADT](spec06_complete_vs_reduced_hilbert_space_adt.md). The practical question of how to choose a good retained space is treated in [Constructing a good sub-Hilbert space](spec07_constructing_a_good_subhilbert_space.md).

---

## Multistate topology and sign structure

The real two-state case is the simplest limit: a loop around a simple conical intersection produces a sign change in the adiabatic electronic states. The multistate case is more delicate.

In a multistate retained space, the topological matrix need not behave like a set of independent two-state signs. Different coordinate-resolved coupling matrices may not commute, and the closed-loop transformation may contain genuinely multistate structure.

For a single-valued diabatic potential matrix, the relevant question is not merely whether individual pairs change sign. It is whether the loop matrix $\mat D(\Gamma)$ has a form compatible with

$$
\begin{align}
\mat D^\dagger \V \mat D=\V.
\end{align}
$$

This leads naturally to the later sign and degeneracy discussions:

- [Multistate topology, signs, and degeneracies](spec08_multistate_topology_signs.md) explains why multistate topology is not just several independent two-state problems.
- [Sign assignment of NACTs](spec09_sign_assignment_of_nacts.md) is the planned place for the pairwise sign-assignment discussion.
- [Geometrical interpretation of sign flips](spec10_geometric_interpretation_signflip.md) gives the graph and loop interpretation of sign patterns.
- [Degeneracy](spec11_degeneracy.md) discusses genuine multistate degeneracies and why some apparent contradictions arise.

---

## Relation to propagation diabatisation

Propagation diabatisation uses the path-ordered ADT expression as a practical finite-path update between nearby nuclear geometries. In a complete and regular electronic Hilbert space, this can be viewed as an exact ADT. In DD-vMCG, it is used in a finite retained electronic subspace, so it is a quasi-diabatic construction.

The implementation safeguards can be interpreted through the theory above:

- poor coupling-vector overlap suggests that the local retained-state character may have changed;
- small adiabatic gaps make the numerical construction of $\F_{ij}$ from derivative-coupling numerators unstable;
- state reordering may indicate that the local diabatic labelling is unreliable along the chosen path;
- intruder states signal that the chosen finite $P$-space may no longer be isolated.

These are not merely numerical details. They are practical diagnostics of whether the retained electronic manifold is still behaving like a useful quasi-diabatic subspace over the region sampled by the dynamics.

---

## Reading map

This overview is intended to orient the following pages:

1. [Curl condition, analyticity, and uniqueness](spec04_curl_condition_analyticity_and_uniqueness.md)  
   Local compatibility of the coordinate-resolved ADT equations.

2. [Topological matrix and single-valued diabatic potentials](spec05_topological_matrix_and_single_valued_diabatic_potentials.md)  
   Closed-loop ADT propagation, the topological matrix, and the condition for single-valued $\W$.

3. [Complete versus reduced Hilbert space ADT](spec06_complete_vs_reduced_hilbert_space_adt.md)  
   How finite retained spaces modify the ADT equation and the curl condition.

4. [Constructing a good sub-Hilbert space](spec07_constructing_a_good_subhilbert_space.md)  
   Practical criteria for choosing a retained electronic manifold.

5. [Multistate topology, signs, and degeneracies](spec08_multistate_topology_signs.md)  
   Multistate loop matrices, sign patterns, and diagonal conditions.

6. [Sign assignment of NACTs](spec09_sign_assignment_of_nacts.md)  
   Planned discussion of pairwise NACT sign assignment and gauge consistency.

7. [Geometrical interpretation of sign flips](spec10_geometric_interpretation_signflip.md)  
   Graph-based interpretation of sign flips around enclosed intersections.

8. [Degeneracy](spec11_degeneracy.md)  
   Genuine multistate degeneracies and the distinction between breakable and unbreakable cases.

---

## Summary

The ADT equation can be used at three levels. Along a chosen path, it gives a path-ordered propagation rule. Over a regular region, it defines a unique local ADT field only when the retained coupling connection has zero curvature. Around a closed loop, especially one enclosing a conical intersection, the topological matrix records whether the transported ADT matrix returns to itself.

In a complete Hilbert space, these statements can be made exactly away from singularities. In a finite retained electronic subspace, they become controlled approximations only when the retained states are sufficiently isolated from omitted states. This is why propagation diabatisation must be treated as local, gauge-dependent, and sensitive to the quality of the retained electronic manifold.

