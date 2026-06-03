# ADT integrability, topology, and finite electronic subspaces: overview

## Purpose of this page

The adiabatic-to-diabatic transformation (ADT) is introduced earlier as the transformation that removes the first-order nonadiabatic coupling vectors from the nuclear kinetic-energy operator. Locally, this idea is expressed by the differential equation

$$
\begin{align}
\nabla_{\mat R}\Cmat+\F\Cmat=0.
\label{eq:adt_overview_equation}
\end{align}
$$

At first sight, this equation looks like an ordinary first-order differential equation. However, in a multidimensional nuclear configuration space it is a system of coupled first-order partial differential equations. This distinction matters. Along a single path, one can usually integrate the equation if the coupling is finite along that path. Defining a unique, smooth, path-independent transformation matrix over a whole region of nuclear configuration space is a stronger requirement.

This page gives the conceptual overview. The detailed derivations are deferred to the linked derivation pages. The main questions are:

1. When does the ADT equation define an analytic transformation matrix?
2. When is the ADT matrix path-independent?
3. What happens when a closed path surrounds a conical intersection?
4. Why can the diabatic potential matrix be single-valued even if the ADT matrix itself changes sign?
5. What changes when only a finite electronic subspace is retained?

The discussion follows Baer's formulation of nonadiabatic coupling terms, ADT matrices, line integrals, topological matrices, and finite sub-Hilbert spaces.

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

be a set of $M$ adiabatic electronic states retained in the calculation. The nuclear coordinate vector is denoted by $\mat R$. In earlier sections, mass-scaled coordinates $\mat q$ are often used; the present discussion is independent of that choice, so $\mat R$ is used as a generic nuclear coordinate vector.

For each nuclear coordinate $R_\mu$, define the coordinate-resolved nonadiabatic coupling matrix

$$
\begin{align}
(\mat F_\mu)_{ji}
=F_{ji,\mu}
=\left\langle
\psi_j
\middle|
\pdv{\psi_i}{R_\mu}
\right\rangle.
\label{eq:coordinate_resolved_nacm}
\end{align}
$$

Thus $\mat F_\mu$ is an $M\times M$ matrix in electronic-state space. The full nonadiabatic coupling object is the matrix-valued vector

$$
\begin{align}
\F
=\left\{
\mat F_1,\mat F_2,\ldots,\mat F_f
\right\},
\end{align}
$$

where $f$ is the number of nuclear degrees of freedom in the coordinate representation being used. Equivalently, $\F$ may be viewed as an $M\times M\times f$ object.

For real adiabatic electronic functions, each coordinate-resolved matrix is antisymmetric,

$$
\begin{align}
\mat F_\mu^{T}=-\mat F_\mu.
\end{align}
$$

For complex electronic functions, the corresponding statement is anti-Hermiticity,

$$
\begin{align}
\mat F_\mu^\dagger=-\mat F_\mu.
\end{align}
$$

The diabatic electronic basis is defined by the same convention used in the earlier diabatic-representation page:

$$
\begin{align}
\varphivec=\psivec\Cmat,
\label{eq:diabatic_basis_from_adiabatic_basis_overview}
\end{align}
$$

where $\psivec$ is the row vector of adiabatic electronic functions, $\varphivec$ is the row vector of diabatic or quasi-diabatic electronic functions, and $\Cmat(\mat R)$ is an $M\times M$ transformation matrix.

With this convention, the diabatic potential matrix is

$$
\begin{align}
\W(\mat R)
=\Cmat^\dagger(\mat R)
\,
\V(\mat R)
\,
\Cmat(\mat R),
\label{eq:diabatic_potential_overview}
\end{align}
$$

where $\V$ is the diagonal adiabatic potential matrix in the retained electronic-state space.

---

## The ADT equation

The derivative coupling in the transformed electronic basis is

$$
\begin{align}
\F^{(\varphi)}
=\Cmat^{-1}\F\Cmat
+\Cmat^{-1}\nabla_{\mat R}\Cmat.
\label{eq:connection_gauge_transformation_overview}
\end{align}
$$

For a unitary transformation, $\Cmat^{-1}=\Cmat^\dagger$. A strictly diabatic representation would satisfy

$$
\begin{align}
\F^{(\varphi)}=0.
\end{align}
$$

Substituting Eq. $\eqref{eq:connection_gauge_transformation_overview}$ gives

$$
\begin{align}
\nabla_{\mat R}\Cmat+\F\Cmat=0.
\label{eq:adt_equation_overview}
\end{align}
$$

In component form, this means

$$
\begin{align}
\pdv{\Cmat}{R_\mu}
+\mat F_\mu \Cmat
=0,
\qquad
\mu=1,\ldots,f.
\label{eq:adt_equation_component_overview}
\end{align}
$$

This is the central ADT equation.

> Eq. $\eqref{eq:adt_equation_overview}$ is exact only when the electronic space considered is complete, or when the retained finite subspace behaves as an effectively isolated subspace. In practical calculations, the transformation is usually quasi-diabatic rather than exactly diabatic.

---

## Local path solution versus regional ADT field

Along a specified path $\Gamma$ in nuclear configuration space, the ADT equation can be viewed as an ordinary first-order equation. Let the path be parametrised by $s$,

$$
\begin{align}
\mat R=\mat R(s),
\qquad s\in[0,1],
\end{align}
$$

with $\mat R(0)=\mat R_0$ and $\mat R(1)=\mat R_1$. Along this path,

$$
\begin{align}
\frac{d\Cmat}{ds}
=-\left[
\F(\mat R(s))\cdot
\frac{d\mat R}{ds}
\right]
\Cmat.
\label{eq:path_adt_ode}
\end{align}
$$

Formally,

$$
\begin{align}
\Cmat(\mat R_1)
=\mathcal P
\exp
\left[
-\int_{\Gamma}
\F(\mat R)\cdot d\mat R
\right]
\Cmat(\mat R_0),
\label{eq:path_ordered_adt_solution}
\end{align}
$$

where $\mathcal P$ denotes path ordering.

Path ordering is required because the coupling matrices at different points, or along different coordinate directions, need not commute. In general,

$$
\begin{align}
[
\mat F_\mu(\mat R),
\mat F_\nu(\mat R')
]
\neq
0.
\end{align}
$$

This is the non-Abelian character of the multistate ADT problem.

For two real electronic states, however, the situation is simpler. Each coordinate-resolved coupling matrix has the form

$$
\begin{align}
\mat F_\mu
=\begin{pmatrix}
0 & F_{12,\mu}\\
-F_{12,\mu} & 0
\end{pmatrix}
=F_{12,\mu}
\begin{pmatrix}
0 & 1\\
-1 & 0
\end{pmatrix}.
\end{align}
$$

All components are scalar multiples of the same antisymmetric generator. Therefore the matrices commute with each other, and the two-state real case behaves as an Abelian problem. This is why the two-state ADT is often describable in terms of a single mixing angle.

---

## Why analyticity of $\F$ alone is not enough

It is tempting to think that if $\F$ is smooth or analytic, then $\Cmat$ must also be smooth or analytic. This is not sufficient in more than one nuclear coordinate.

The reason is that Eq. $\eqref{eq:adt_equation_component_overview}$ gives one differential equation for every coordinate direction. For two coordinates $p$ and $q$,

$$
\begin{align}
\pdv{\Cmat}{p}
+\mat F_p\Cmat
&=0,
\\
\pdv{\Cmat}{q}
+\mat F_q\Cmat
&=0.
\end{align}
$$

If a single analytic matrix $\Cmat(p,q)$ is to satisfy both equations, the mixed derivatives of $\Cmat$ must be consistent:

$$
\begin{align}
\frac{\partial^2\Cmat}{\partial p\,\partial q}
=\frac{\partial^2\Cmat}{\partial q\,\partial p}.
\end{align}
$$

This compatibility requirement gives the matrix curl condition,

$$
\begin{align}
\pdv{\mat F_q}{p}
-\pdv{\mat F_p}{q}
=\mat F_q\mat F_p
-\mat F_p\mat F_q.
\label{eq:matrix_curl_condition_overview}
\end{align}
$$

Equivalently,

$$
\begin{align}
\pdv{\mat F_q}{p}
-\pdv{\mat F_p}{q}
=[\mat F_q,\mat F_p].
\end{align}
$$

This is often written compactly as

$$
\begin{align}
\operatorname{curl}\F
=\F\times\F.
\label{eq:compact_curl_condition_overview}
\end{align}
$$

The right-hand side is not an ordinary scalar vector product. It contains matrix commutators. This is the non-Abelian part of the condition.

A useful way to express the same idea is to define a curvature, or field strength,

$$
\begin{align}
\mat\Omega_{pq}
=\pdv{\mat F_q}{p}
-\pdv{\mat F_p}{q}
-[\mat F_q,\mat F_p].
\label{eq:curvature_definition_overview}
\end{align}
$$

Then the curl condition is simply

$$
\begin{align}
\mat\Omega_{pq}=0.
\end{align}
$$

In words:

$$
\boxed{
\text{The ADT equation defines a locally consistent analytic transformation only when the retained coupling field is flat.}
}
$$

Here “flat” means zero non-Abelian curvature in the region considered.

The detailed derivation of Eq. $\eqref{eq:matrix_curl_condition_overview}$ is given in [Derivation of the ADT curl condition](../derivations/derivation_curl_condition_from_adt.md).

---

## Analyticity, path independence, and topology

The curl condition is a local integrability condition. If $\F$ is analytic and Eq. $\eqref{eq:compact_curl_condition_overview}$ holds in a regular region, then the ADT equation has a locally analytic solution.

However, local analyticity and global single-valuedness are different questions.

If the region is simply connected and contains no singularities, then a flat connection implies that the result of integrating Eq. $\eqref{eq:path_adt_ode}$ is path-independent. In that case, the ADT matrix obtained at $\mat R_1$ does not depend on the path chosen from $\mat R_0$ to $\mat R_1$.

If the region is not simply connected, or if a conical intersection or other singularity is removed from the region, the situation changes. The coupling may be curl-free away from the singularity, but a closed path that surrounds the singularity can still produce a nontrivial transformation.

This is the same distinction that appears in the two-state conical-intersection model. Away from the intersection point, the NACV field can be locally written as the gradient of a mixing angle. Yet a closed loop around the conical intersection changes the mixing angle by $\pi$, producing the familiar sign change of real adiabatic electronic states.

Thus:

$$
\boxed{
\text{Curl-free locally does not automatically mean globally trivial.}}
$$

The global information is carried by closed-loop integrals.

---

## The topological matrix

For a closed contour $\Gamma$, define the topological matrix

$$
\begin{align}
\mat D(\Gamma)
=\mathcal P
\exp
\left[
-\oint_{\Gamma}
\F(\mat R)\cdot d\mat R
\right].
\label{eq:topological_matrix_overview}
\end{align}
$$

This matrix measures the holonomy of the ADT connection around the loop. If the ADT matrix is propagated around $\Gamma$, then

$$
\begin{align}
\Cmat_{\mathrm{final}}
=\mat D(\Gamma)
\Cmat_{\mathrm{initial}}.
\label{eq:closed_loop_cmat_holonomy}
\end{align}
$$

If

$$
\begin{align}
\mat D(\Gamma)=\mat I,
\end{align}
$$

then the ADT matrix returns to itself after the loop. If $\mat D(\Gamma)\neq\mat I$, the ADT matrix is not single-valued around that loop.

Convention warning: the precise sign in the exponent depends on whether one writes the ADT equation as $\nabla\Cmat+\F\Cmat=0$ or uses the opposite convention. The physical content is unchanged if the convention is used consistently.

In the real two-state case, the topological matrix often reduces to a sign,

$$
\begin{align}
\mat D(\Gamma)=\pm \mat I
\end{align}
$$

or to a diagonal sign matrix, depending on the state labelling and the chosen electronic gauge. A loop enclosing a simple conical intersection gives a sign change in the real adiabatic eigenvectors. This is the same topology that appears in the Berry-phase description of conical intersections.

Important notation warning: $\mat D(\Gamma)$ here denotes Baer's topological matrix. It should not be confused with the derivative-coupling numerator $\D_{ij}$ used in the propagation-diabatisation implementation notes.

---

## Single-valued ADT matrices versus single-valued diabatic potentials

A subtle but important point is that the ADT matrix itself need not always be single-valued for the diabatic potential matrix to be single-valued.

The diabatic potential matrix is

$$
\begin{align}
\W
=\Cmat^\dagger
\V
\Cmat.
\end{align}
$$

Suppose a closed loop gives

$$
\begin{align}
\Cmat_{\mathrm{final}}
=\mat D
\Cmat_{\mathrm{initial}}.
\end{align}
$$

Then, because the adiabatic energy matrix $\V$ returns to the same value after the loop,

$$
\begin{align}
\W_{\mathrm{final}}
&=\Cmat_{\mathrm{final}}^\dagger
\V
\Cmat_{\mathrm{final}}
\nonumber\\
&=
\Cmat_{\mathrm{initial}}^\dagger
\mat D^\dagger
\V
\mat D
\Cmat_{\mathrm{initial}}.
\end{align}
$$

For the diabatic potential to be single-valued, we need

$$
\begin{align}
\mat D^\dagger
\V
\mat D
=\V.
\label{eq:single_valued_w_condition_overview}
\end{align}
$$

For nondegenerate adiabatic states, $\V$ is diagonal with distinct entries. Then Eq. $\eqref{eq:single_valued_w_condition_overview}$ requires $\mat D$ to be diagonal with diagonal elements of unit modulus. For real electronic functions, this usually means diagonal entries equal to $+1$ or $-1$.

Therefore,

$$
\boxed{
\text{The ADT matrix may change sign around a loop, while the diabatic potential matrix remains single-valued.}
}
$$

This is why Baer's topological condition is usually stated in terms of the topological matrix and the single-valuedness of the diabatic potentials, not merely in terms of whether $\Cmat$ itself returns to the identical matrix.

The detailed derivation is given in [Topological matrix and single-valued diabatic potentials](spec05_topological_matrix_and_single_valued_diabatic_potentials.md).

---

## Complete electronic Hilbert space versus finite retained subspace

In the complete electronic Hilbert space, the nonadiabatic coupling matrix is generated by a complete set of electronic states. Under suitable regularity assumptions, the corresponding connection satisfies the exact non-Abelian curl condition. The ADT construction is then a property of the full electronic Hilbert space.

Practical calculations never retain the full space. Instead, one selects a finite $P$-space of $M$ electronic states and omits the complementary $Q$-space. The retained coupling field is then

$$
\begin{align}
\F^{(P)}
=\left\{
\mat F^{(P)}_1,\ldots,\mat F^{(P)}_f
\right\},
\end{align}
$$

where each $\mat F^{(P)}_\mu$ is an $M\times M$ matrix.

The finite-subspace ADT equation is

$$
\begin{align}
\nabla \Cmat_P+\F^{(P)}\Cmat_P=0.
\label{eq:p_space_adt_equation_overview}
\end{align}
$$

This equation is exact only if the retained subspace is closed under nuclear differentiation. In the notation of the group Born--Oppenheimer discussion, this means that the nonadiabatic couplings between retained $P$-states and omitted $Q$-states are negligible:

$$
\begin{align}
\F_{ia}\approx \mat 0,
\qquad
i\leq M,
\quad
a>M.
\end{align}
$$

If these $P$--$Q$ couplings are not negligible, the projected connection $\F^{(P)}$ generally has residual curvature. In that case, the curl condition is not satisfied exactly inside the retained subspace, and the ADT matrix constructed from $\F^{(P)}$ becomes path-dependent.

This is the finite-subspace version of the residual-coupling problem. A finite retained manifold can support a useful quasi-diabatic representation only when the omitted-state couplings are sufficiently small over the region of nuclear configuration space sampled by the dynamics.

If the neglected $P$--$Q$ coupling is of order $\epsilon$, then the corrections to the reduced-space ADT construction and to the corresponding diabatic potential matrix are expected to enter at second order in the omitted coupling, schematically

$$
\begin{align}
\text{finite-subspace error}
=O(\epsilon^2),
\end{align}
$$

provided the retained space is otherwise well behaved. This is the same hierarchy that appeared in the finite-subspace Born--Oppenheimer discussion: omitted-state effects are not absent, but they may be controlled if the retained electronic manifold is sufficiently isolated.

> this is why propagation diabatisation in DD-vMCG must monitor intruder states, phase consistency, and state ordering. These are not merely numerical details. They are symptoms of whether the retained finite electronic subspace is behaving like a good quasi-diabatic manifold.

---

## Relation to propagation diabatisation

Propagation diabatisation uses the path form of the ADT equation,

$$
\begin{align}
\Cmat(\mat R_1)
=\mathcal P
\exp
\left[
-\int_{\mat R_0}^{\mat R_1}
\F(\mat R)\cdot d\mat R
\right]
\Cmat(\mat R_0),
\end{align}
$$

as a practical finite-path update between nearby nuclear geometries. In a complete and regular Hilbert space, this transformation can be treated as an exact ADT. In DD-vMCG, it is used in a finite retained electronic subspace and is therefore a quasi-diabatic construction.

The algorithmic safeguards in propagation diabatisation can be interpreted through the present theory:

- poor coupling-vector overlap suggests that the local retained-state character may have changed;
- small adiabatic gaps make the numerical construction of $\F_{ij}$ from derivative-coupling numerators unstable;
- state reordering may indicate that the path has crossed a region where the local diabatic labelling is unreliable;
- intruder states signal that the chosen finite $P$-space may not be isolated.

Thus, the ADT topology and the finite-subspace theory are not separate from the implementation. They explain why a propagated diabatic representation must be treated as local, gauge-dependent, and sensitive to the quality of the retained electronic state manifold.

---


