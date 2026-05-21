# Topological matrix and single-valued diabatic potentials

The previous section introduced the curl condition as a local integrability condition for the adiabatic-to-diabatic transformation (ADT). In a regular, simply connected region, a vanishing non-Abelian curl means that the ADT matrix can be defined independently of the path used to reach a point.

This page discusses the corresponding global question. What happens when the transformation matrix is transported around a closed loop? In particular, what must be true if the diabatic potential matrix is to remain single-valued at the same nuclear geometry?

The key object is the **topological matrix**, also called the holonomy of the nonadiabatic coupling matrix around a closed path. This object records the sign or phase change accumulated by the electronic basis after one complete circuit.

Throughout this page, the ADT convention is

$$
\begin{align}
\nabla_{\mat q}\Cmat+\F\Cmat=0,
\label{eq:adt_equation_topological_matrix_page}
\end{align}
$$

and the diabatic potential matrix is

$$
\begin{align}
\W(\mat q)
=\Cmat^\dagger(\mat q)
\V(\mat q)
\Cmat(\mat q).
\label{eq:diabatic_potential_topological_matrix_page}
\end{align}
$$

Here $\V$ is the diagonal adiabatic potential matrix, while $\W$ is the potential matrix in the transformed diabatic or quasi-diabatic representation.

Terminology note: in this page, the topological matrix is denoted by $\mat D(\Gamma)$. This should not be confused with the derivative-coupling numerator $\D$ used in the implementation notes.

---

## Path propagation and closed loops

Along an open path $\gamma$ from $\mat q_a$ to $\mat q_b$, Eq. $\eqref{eq:adt_equation_topological_matrix_page}$ has the formal path-ordered solution

$$
\begin{align}
\Cmat(\mat q_b)
=\mathcal P
\exp
\left[
-\int_{\gamma:\mat q_a\to \mat q_b}
\F(\mat q)\cdot d\mat q
\right]
\Cmat(\mat q_a).
\label{eq:path_ordered_solution_topological_matrix_page}
\end{align}
$$

The path-ordering symbol $\mathcal P$ is needed because the coordinate-resolved nonadiabatic coupling matrices need not commute with each other at different points along the path.

Now let $\Gamma$ be a closed loop with

$$
\begin{align}
\mat q(0)=\mat q(\beta)=\mat q_0.
\end{align}
$$

The corresponding closed-loop propagator is

$$
\begin{align}
\mat D(\Gamma)
=\mathcal P
\exp
\left[
-\oint_{\Gamma}
\F(\mat q)\cdot d\mat q
\right].
\label{eq:topological_matrix_definition}
\end{align}
$$

This is the topological matrix associated with the loop $\Gamma$. Transporting the ADT matrix once around the loop gives

$$
\begin{align}
\Cmat(\beta)
=\mat D(\Gamma)\Cmat(0).
\label{eq:adt_after_closed_loop}
\end{align}
$$

If $\mat D(\Gamma)=\mat I$, the ADT matrix returns to itself after the loop. If $\mat D(\Gamma)\neq \mat I$, the ADT matrix is not single-valued around that loop.

This does not automatically mean that the diabatic potential matrix is multivalued. The ADT matrix may return with a sign or phase change while $\W$ remains single-valued.

---

## Single-valuedness of the diabatic potential matrix

The physical requirement is not necessarily that $\Cmat$ itself must be single-valued. The stronger requirement is that the diabatic potential matrix at the same nuclear geometry must be single-valued:

$$
\begin{align}
\W(\beta)=\W(0).
\label{eq:single_valued_w_requirement}
\end{align}
$$

Using Eq. $\eqref{eq:diabatic_potential_topological_matrix_page}$,

$$
\begin{align}
\W(\beta)
&=\Cmat^\dagger(\beta)\V(\beta)\Cmat(\beta).
\end{align}
$$

Since $\mat q(\beta)=\mat q(0)$, the adiabatic energies are evaluated at the same nuclear geometry. Assuming the adiabatic energy ordering at the base point is fixed,

$$
\begin{align}
\V(\beta)=\V(0).
\end{align}
$$

Substituting Eq. $\eqref{eq:adt_after_closed_loop}$ gives

$$
\begin{align}
\W(\beta)
&=\left[
\mat D(\Gamma)\Cmat(0)
\right]^\dagger
\V(0)
\left[
\mat D(\Gamma)\Cmat(0)
\right]
\nonumber\\
&=\Cmat^\dagger(0)
\mat D^\dagger(\Gamma)
\V(0)
\mat D(\Gamma)
\Cmat(0).
\label{eq:w_after_loop_with_d}
\end{align}
$$

For this to equal

$$
\begin{align}
\W(0)
=\Cmat^\dagger(0)\V(0)\Cmat(0),
\end{align}
$$

we require

$$
\begin{align}
\mat D^\dagger(\Gamma)\V(0)\mat D(\Gamma)
=\V(0).
\label{eq:d_condition_for_single_valued_w}
\end{align}
$$

Because $\mat D(\Gamma)$ is unitary when the nonadiabatic coupling matrix is anti-Hermitian, Eq. $\eqref{eq:d_condition_for_single_valued_w}$ is equivalent to

$$
\begin{align}
[\mat D(\Gamma),\V(0)]=0.
\label{eq:d_commutes_with_v}
\end{align}
$$

Thus, the topological matrix must commute with the adiabatic potential matrix at the base point.

---

## Non-degenerate base point

Suppose the adiabatic energies at the base point are non-degenerate, so that

$$
\begin{align}
\V(0)
=\operatorname{diag}
\left(
V_1,V_2,\ldots,V_N
\right),
\qquad
V_i\neq V_j
\quad
(i\neq j).
\end{align}
$$

Then Eq. $\eqref{eq:d_commutes_with_v}$ forces $\mat D(\Gamma)$ to be diagonal in the adiabatic-state basis. To see this, consider the matrix elements of the commutator:

$$
\begin{align}
0&=\left(
\mat D\V-\V\mat D
\right)_{ij}
\nonumber\\
&=D_{ij}V_j
-V_iD_{ij}
\nonumber\\
&=D_{ij}(V_j-V_i).
\end{align}
$$

For $i\neq j$, the factor $V_j-V_i$ is nonzero. Therefore

$$
\begin{align}
D_{ij}=0,
\qquad
i\neq j.
\end{align}
$$

Thus

$$
\begin{align}
\mat D(\Gamma)
=\operatorname{diag}
\left(
e^{i\chi_1},
e^{i\chi_2},
\ldots,
e^{i\chi_N}
\right)
\label{eq:complex_diagonal_topological_matrix}
\end{align}
$$

in the complex case. For real electronic wavefunctions, the transformation matrices are orthogonal rather than general unitary matrices, so the allowed phases reduce to signs:

$$
\begin{align}
\mat D(\Gamma)
=\operatorname{diag}
\left(
\pm1,\pm1,\ldots,\pm1
\right).
\label{eq:real_diagonal_topological_matrix}
\end{align}
$$

This is the usual form of the topological matrix in real-valued treatments of conical intersections.

The important point is that $\mat D(\Gamma)$ does not need to be the identity matrix for $\W$ to be single-valued. A diagonal sign matrix changes the phases or signs of the transported adiabatic-to-diabatic transformation matrix, but it leaves the diabatic potential matrix unchanged.

---

## Degenerate base point caveat

The diagonal condition above assumes that the adiabatic energies at the base point are non-degenerate. If $\V(0)$ contains an exactly degenerate block, then $\mat D(\Gamma)$ may mix states within that degenerate block while still commuting with $\V(0)$.

In that case, the condition is not that $\mat D(\Gamma)$ must be fully diagonal, but that it must be block diagonal with respect to the degenerate eigenspaces of $\V(0)$.

Important caveat: for topological analysis, it is usually cleaner to choose the base point away from the degeneracy. At an exact degeneracy, the adiabatic eigenvectors themselves are not uniquely defined, so the interpretation of state-by-state phases becomes ambiguous.

---

## Single-valued $\W$ versus single-valued $\Cmat$

The distinction between single-valued $\Cmat$ and single-valued $\W$ is central.

If

$$
\begin{align}
\mat D(\Gamma)=\mat I,
\end{align}
$$

then

$$
\begin{align}
\Cmat(\beta)=\Cmat(0).
\end{align}
$$

The ADT matrix is single-valued around the loop.

If instead

$$
\begin{align}
\mat D(\Gamma)
=\operatorname{diag}
(\pm1,\ldots,\pm1),
\end{align}
$$

then

$$
\begin{align}
\Cmat(\beta)
=\mat D(\Gamma)\Cmat(0).
\end{align}
$$

The ADT matrix may change sign or phase after one circuit. However,

$$
\begin{align}
\W(\beta)
&=
\Cmat^\dagger(0)
\mat D^\dagger(\Gamma)
\V(0)
\mat D(\Gamma)
\Cmat(0)
\nonumber\\
&=
\Cmat^\dagger(0)
\V(0)
\Cmat(0)
\nonumber\\
&=
\W(0),
\end{align}
$$

because $\mat D(\Gamma)$ commutes with $\V(0)$ and satisfies

$$
\begin{align}
\mat D^\dagger(\Gamma)\mat D(\Gamma)=\mat I.
\end{align}
$$

Thus a nontrivial topological matrix can be compatible with a single-valued diabatic potential matrix.

This is the mathematical expression of the familiar sign-change behaviour of real adiabatic electronic states around a conical intersection. The electronic basis may return with a sign change, but the potential matrix remains a well-defined function of nuclear geometry.

---

## Relation to path dependence

Consider two open paths, $\gamma_1$ and $\gamma_2$, connecting the same initial point $P$ to the same final point $Q$. Taken together, these paths form a closed loop. The corresponding ADT matrices at $Q$ differ by the holonomy associated with that loop.

In a regular simply connected region where the curl condition holds, every contractible closed loop has

$$
\begin{align}
\mat D(\Gamma)=\mat I.
\end{align}
$$

The ADT matrix is then path-independent.

If the loop encloses a singularity, such as a conical-intersection seam, the local curl condition may hold everywhere away from the singularity, but the loop may still have nontrivial holonomy:

$$
\begin{align}
\mat D(\Gamma)\neq \mat I.
\end{align}
$$

This is not a contradiction. The curl condition is a local statement in a regular region. A loop enclosing a singular point or seam probes the global topology of the domain.

A useful way to summarise the distinction is

$$
\boxed{
\text{local curl condition}
\quad
\Rightarrow
\quad
\text{local path independence}
}
$$

in a regular simply connected region, while

$$
\boxed{
\text{closed-loop topological matrix}
\quad
\Rightarrow
\quad
\text{global sign or phase information}.
}
$$

---

## Interpretation for conical intersections

For a real two-state conical intersection, an adiabatic electronic state changes sign after a loop around the intersection seam. In the present language, this means that the topological matrix is not the identity. In a simple two-state case one commonly obtains a diagonal sign matrix, such as

$$
\begin{align}
\mat D(\Gamma)
=-\mat I
\end{align}
$$

or an equivalent diagonal sign convention.

The precise signs depend on the state labelling and phase convention. The convention-independent statement is that the loop carries a nontrivial topological phase. This is the Longuet-Higgins or Berry-phase-like sign change associated with encircling a conical intersection.

Loops that do not enclose a conical intersection should not acquire this topological sign in the clean two-state picture. However, nearby degeneracies can still make numerical propagation difficult, especially in a finite electronic subspace. The distinction is important:

$$
\boxed{
\text{enclosing the degeneracy controls the topological holonomy;}
}
$$

whereas

$$
\boxed{
\text{nearby degeneracies can affect numerical stability and subspace validity.}
}
$$

---

## Implications for quasi-diabatic representations

In a complete electronic Hilbert space, the topological matrix is a property of the exact nonadiabatic coupling field. In a finite retained electronic subspace, the situation is more delicate. If the retained subspace is effectively isolated from the omitted states, the projected nonadiabatic coupling field can still give a meaningful quasi-diabatic transformation.

If important external states are omitted, the closed-loop matrix may fail to have the required diagonal sign or phase structure. In that case, the transformed potential matrix may become path-dependent or phase-inconsistent. This is one reason why Baer’s sub-Hilbert-space discussion is important for practical diabatisation: the quality of the ADT depends on whether the retained electronic manifold behaves approximately like a closed subspace.

This point is also important in propagation diabatisation. In DD-vMCG, the transformation matrix is propagated using a finite set of electronic states. If the retained states cease to form a good quasi-diabatic manifold, the propagated transformation may no longer define a coherent global set of diabatic surfaces.

---

## Summary

The topological matrix is the closed-loop ADT propagator,

$$
\begin{align}
\mat D(\Gamma)
=\mathcal P
\exp
\left[
-\oint_{\Gamma}
\F(\mat q)\cdot d\mat q
\right].
\end{align}
$$

It measures how the ADT matrix changes after transport around a closed loop:

$$
\begin{align}
\Cmat(\beta)=\mat D(\Gamma)\Cmat(0).
\end{align}
$$

If $\mat D(\Gamma)=\mat I$, the ADT matrix is single-valued around that loop. If $\mat D(\Gamma)\neq \mat I$, the ADT matrix may be multivalued. However, the diabatic potential matrix

$$
\begin{align}
\W=\Cmat^\dagger\V\Cmat
\end{align}
$$

can still be single-valued if

$$
\begin{align}
\mat D^\dagger(\Gamma)\V(0)\mat D(\Gamma)=\V(0).
\end{align}
$$

For a non-degenerate base point, this means that $\mat D(\Gamma)$ must be diagonal with unit-modulus entries. For real electronic states, the entries reduce to $\pm1$.

Thus the ADT matrix may carry nontrivial topological sign information, while the diabatic potential matrix remains a single-valued physical object.

---

## Links to related notes

- [Curl condition, analyticity, and uniqueness](spec04_curl_condition_analyticity_and_uniqueness.md)
- [Complete versus reduced Hilbert space ADT](spec06_complete_vs_reduced_hilbert_space_adt.md)
- [Multistate topology, signs, and degeneracies](spec08_multistate_topology_signs.md)
- [Derivation: topological matrix condition for single-valued diabatic potentials](../derivations/derivation_topological_matrix_condition_for_W.md)
- [Derivation: path-ordered ADT and closed contours](../derivations/derivation_path_ordered_adt_and_closed_contours.md)
- [Worked example: two-state loop and sign change](../worked_examples/adt_topology/example01_two_state_loop_and_sign_change.md)

---

## References

The topological matrix and closed-loop ADT formulation follow Baer's treatment of nonadiabatic coupling terms, line integrals, and molecular topological effects [@baer_2000_topological_effects; @baer_2002_nact]. The sign-change interpretation around conical intersections is closely related to the Longuet-Higgins/Berry-phase picture of real adiabatic electronic states [@longuet_higgins_1975; @berry_1984].
