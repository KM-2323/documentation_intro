# Complete versus reduced Hilbert space ADT

The previous pages discussed the ADT equation, the curl condition, and the topological matrix as if the electronic Hilbert space were complete. In practical calculations, however, one never works with the full electronic Hilbert space. A finite number of adiabatic states is selected, and the remaining states are omitted.

This distinction is important. The ADT equation is exact in a complete electronic Hilbert space. In a reduced electronic subspace, it becomes a quasi-diabatic construction whose validity depends on how weakly the retained states are coupled to the omitted states.

This page explains the difference between the complete Hilbert-space ADT and the reduced-subspace ADT. It also explains why Baer’s finite-subspace treatment leads to an error that is second order in the coupling between the retained and omitted states.

---

## Complete Hilbert-space ADT

In the complete electronic Hilbert space, the adiabatic-to-diabatic transformation matrix satisfies

$$
\begin{align}
\nabla_{\mat q}\Cmat
+\F\Cmat
=0.
\label{eq:complete_space_adt_equation}
\end{align}
$$

Here $\F$ is the full nonadiabatic coupling matrix. More precisely, it is a vector of matrices:

$$
\begin{align}
\F
=\left\{
\mat F_\alpha
\right\}_{\alpha=1}^{f},
\qquad
(\mat F_\alpha)_{ij}
=\braket{\psi_i}{\pdv{\psi_j}{q_\alpha}}.
\end{align}
$$

For each nuclear coordinate $q_\alpha$, $\mat F_\alpha$ is a matrix in electronic-state space. The full object $\F$ is therefore a matrix-valued vector field over nuclear configuration space.

If Eq. $\eqref{eq:complete_space_adt_equation}$ can be solved consistently, the diabatic potential matrix is

$$
\begin{align}
\W
=\Cmat^\dagger
\V
\Cmat,
\label{eq:complete_space_diabatic_potential}
\end{align}
$$

where $\V$ is the diagonal adiabatic potential matrix.

In a complete Hilbert space, the nonadiabatic coupling matrix has the correct differential structure. In regular regions, this structure is expressed by the non-Abelian curl condition,

$$
\begin{align}
\pdv{\mat F_q}{q_p}
-\pdv{\mat F_p}{q_q}
=[\mat F_q,\mat F_p
],
\label{eq:complete_space_curl_condition}
\end{align}
$$

where

$$
\begin{align}
[\mat F_q,\mat F_p
]=\mat F_q\mat F_p-\mat F_p\mat F_q.
\end{align}
$$

This condition is the local integrability condition for the ADT equation. In a simply connected regular region, it ensures that the ADT matrix can be constructed without local path dependence.

The global situation is then controlled by the topological matrix. Even when the local curl condition holds away from a singularity, a closed loop around a conical-intersection seam may return a nontrivial sign or phase matrix.

---

## Why a reduced subspace changes the problem

In practice, one retains only a finite set of $M$ electronic states. These states define a retained subspace, or $P$-space. The omitted states define the complementary $Q$-space.

The full electronic space is therefore partitioned as

$$
\begin{align}
\mathcal H_{\mathrm{el}}
=P\oplus Q.
\end{align}
$$

The retained subspace is spanned by

$$
\begin{align}
\{
\psi_1,\ldots,\psi_M
\},
\end{align}
$$

while the omitted subspace contains

$$
\begin{align}
\{
\psi_{M+1},\psi_{M+2},\ldots
\}.
\end{align}
$$

The finite-subspace ADT uses only the retained block of the nonadiabatic coupling matrix,

$$
\begin{align}
\F^{(P)}
=\left\{
\mat F_\alpha^{(P)}
\right\}_{\alpha=1}^{f}.
\end{align}
$$

The reduced ADT equation is then written as

$$
\begin{align}
\nabla_{\mat q}\Cmat^{(P)}
+\F^{(P)}
\Cmat^{(P)}
=0.
\label{eq:reduced_space_adt_equation}
\end{align}
$$

This equation has the same form as the complete-space ADT equation, but its meaning is different. It is exact only if the retained subspace is closed under nuclear differentiation. In other words, differentiating a retained electronic state should not generate a significant component in the omitted subspace.

In terms of the nonadiabatic coupling vector, the required condition is

$$
\begin{align}
\F_{ia}
\approx
0,
\qquad
i\leq M,\quad a>M.
\label{eq:pq_coupling_small_condition_int06}
\end{align}
$$

Here $i$ labels retained states and $a$ labels omitted states.

This is the same finite-subspace condition introduced in the group Born--Oppenheimer discussion. The retained electronic manifold may contain strong internal nonadiabatic coupling, but it must be weakly coupled to the omitted states if it is to behave as an effectively closed subspace.

---

## Exact isolated subspace

First consider the ideal case in which the retained and omitted states are exactly decoupled:

$$
\begin{align}
\F^{(P,Q)}=0,
\qquad
\F^{(Q,P)}=0.
\label{eq:exact_isolated_subspace_condition}
\end{align}
$$

Then the full nonadiabatic coupling matrix has block-diagonal form,

$$
\begin{align}
\F
=\begin{pmatrix}
\F^{(P)} & 0\\
0 & \F^{(Q)}
\end{pmatrix}.
\end{align}
$$

In this case, the retained subspace is an exact sub-Hilbert space. The ADT equation inside $P$ is not merely an approximation; it is the exact ADT equation for that subspace:

$$
\begin{align}
\nabla_{\mat q}\Cmat^{(P)}
+\F^{(P)}
\Cmat^{(P)}
=0.\end{align}
$$

The curl condition inside $P$ is also exact:

$$
\begin{align}
\pdv{\mat F_q^{(P)}}{q_p}
-\pdv{\mat F_p^{(P)}}{q_q}
=[
\mat F_q^{(P)},\mat F_p^{(P)}
].
\label{eq:exact_p_space_curl_condition}
\end{align}
$$

Thus, in an exactly isolated subspace, the ADT and the diabatic potential matrix can be discussed as if $P$ were the complete electronic space.

This is the strict group Born--Oppenheimer limit applied to ADT theory. The word “group” is important: the retained group of states may remain strongly coupled internally, but it is separated from the omitted states.

---

## Weakly coupled reduced subspace

The more realistic case is not exact isolation but weak coupling:

$$
\begin{align}
\F^{(P,Q)}
=O(\epsilon),
\qquad
\F^{(Q,P)}
=O(\epsilon),
\label{eq:weak_cross_block_coupling}
\end{align}
$$

where $\epsilon$ is small over the region of nuclear configuration space sampled by the dynamics.

In this case, the retained subspace is not exactly closed. However, Baer’s finite-subspace analysis shows that the feedback of the omitted states into the retained ADT equation is second order:

$$
\begin{align}
\nabla_{\mat q}\Cmat^{(P)}
+\F^{(P)}
\Cmat^{(P)}
=O(\epsilon^2).
\label{eq:p_space_adt_error_order}
\end{align}
$$

This is the main practical result. If the coupling between $P$ and $Q$ is first order in a small parameter $\epsilon$, the error made by using the reduced $P$-space ADT equation is second order.

The reason is simple. Coupling from $P$ into $Q$ is $O(\epsilon)$. The amplitude generated in the omitted block is therefore $O(\epsilon)$. Coupling that amplitude back into the retained block introduces another factor of $O(\epsilon)$, giving an $O(\epsilon^2)$ correction.

In words:

$$
\boxed{
P\to Q \text{ mixing is } O(\epsilon),
\qquad
Q\to P \text{ feedback is } O(\epsilon^2).
}
$$

This is the same logic that appears in the finite-subspace Born--Oppenheimer equation, where omitted states generate a correction that is quadratic in the $P$--$Q$ coupling.

---

## Reduced curl condition

The complete-space curl condition contains the full electronic Hilbert space. When it is projected onto the retained subspace, the $P$-block contains an extra term from the omitted states.

For two nuclear coordinates $q_p$ and $q_q$, the full curl condition is

$$
\begin{align}
\pdv{\mat F_q}{q_p}
-\pdv{\mat F_p}{q_q}
=[\mat F_q,\mat F_p].
\label{eq:full_curl_condition_before_projection}
\end{align}
$$

Taking the $P$-block gives

$$
\begin{align}
\pdv{\mat F_q^{(P)}}{q_p}
-\pdv{\mat F_p^{(P)}}{q_q}
&=[
\mat F_q^{(P)},\mat F_p^{(P)}]
\nonumber\\
&\quad
+\mat F_q^{(P,Q)}\mat F_p^{(Q,P)}
-\mat F_p^{(P,Q)}\mat F_q^{(Q,P)}.
\label{eq:projected_curl_condition_with_q_terms}
\end{align}
$$

The final two terms are the omitted-state correction. If the cross-block couplings are $O(\epsilon)$, then

$$
\begin{align}
\mat F_q^{(P,Q)}\mat F_p^{(Q,P)}
-\mat F_p^{(P,Q)}\mat F_q^{(Q,P)}
=O(\epsilon^2).
\end{align}
$$

Therefore the reduced curl condition is satisfied up to second order:

$$
\begin{align}
\pdv{\mat F_q^{(P)}}{q_p}
-\pdv{\mat F_p^{(P)}}{q_q}
=[\mat F_q^{(P)},\mat F_p^{(P)}]
+O(\epsilon^2).
\label{eq:reduced_curl_condition_second_order}
\end{align}
$$

This explains why a reduced subspace can still support a useful quasi-diabatic representation. The projected connection is not exactly flat, but its curvature is small when the omitted-state couplings are small.

---

## Diabatic potential matrix in the reduced subspace

The reduced-space diabatic potential matrix is

$$
\begin{align}
\W^{(P)}
=\left(\Cmat^{(P)}\right)^\dagger
\V^{(P)}
\Cmat^{(P)}.
\label{eq:reduced_diabatic_potential_definition}
\end{align}
$$

When the $P$-space is exactly isolated, this is the exact diabatic potential matrix for the retained manifold.

When $P$ is only weakly coupled to $Q$, the omitted states perturb the reduced ADT matrix at second order. Consequently, the reduced diabatic potential matrix is also reliable only to the corresponding order, provided the retained and omitted potential blocks remain well behaved over the region considered.

A useful way to state the approximation is

$$
\begin{align}
\W_{\mathrm{full}}^{(P)}
=\W_{\mathrm{red}}^{(P)}
+O(\epsilon^2).
\label{eq:reduced_w_error_order}
\end{align}
$$

Here $\W_{\mathrm{full}}^{(P)}$ denotes the retained block of the diabatic potential that would be obtained from the full-space transformation, while $\W_{\mathrm{red}}^{(P)}$ is the diabatic potential obtained using only the reduced $P$-space ADT equation.

This statement should not be interpreted as a universal numerical guarantee. It depends on the assumption that the $P$--$Q$ coupling is small over the relevant region and that the omitted states do not become intruder states.

---

## Relation to residual coupling

The reduced-subspace ADT is closely related to the residual-coupling discussion. Under a basis transformation $\Cmat$, the derivative coupling transforms as

$$
\begin{align}
\F^{\mathrm{new}}
=\Cmat^{-1}\F\Cmat
+\Cmat^{-1}\nabla\Cmat.
\label{eq:connection_transformation_int06}
\end{align}
$$

A strict diabatic representation would choose $\Cmat$ so that the transformed connection vanishes. In a finite subspace, however, the projected coupling field may not be globally removable because the retained subspace is not exactly closed. The non-removable part appears as residual derivative coupling.

Thus the reduced-subspace error has the same physical origin as residual coupling:

$$
\boxed{
\text{omitted states}
\quad
\Rightarrow
\quad
\text{projected connection not exactly complete}
\quad
\Rightarrow
\quad
\text{quasi-diabatic, not strictly diabatic, representation}.
}
$$

If the omitted-state couplings are small, the residual coupling is small and the quasi-diabatic representation is adequate. If they are not small, the selected state space is too narrow.

---

## Relation to group Born--Oppenheimer theory

The finite-subspace ADT discussion is the transformation analogue of the group Born--Oppenheimer equation.

In the group Born--Oppenheimer construction, the retained $P$-space may contain several strongly coupled states, but it is assumed to be weakly coupled to the omitted $Q$-space. The omitted states generate a scalar correction that is quadratic in the $P$--$Q$ nonadiabatic couplings.

In the ADT construction, the same assumption means that the omitted states perturb the retained transformation matrix, the reduced curl condition, and the reduced diabatic potential matrix only at second order.

Thus the two discussions have the same structure:

$$
\boxed{
\text{isolated retained manifold}
\quad
\Rightarrow
\quad
\text{controlled finite-subspace dynamics and diabatisation}.
}
$$

The difference is what is being studied. The group Born--Oppenheimer section studies the finite-subspace nuclear equation. The present page studies the finite-subspace ADT and its integrability.

---

## Practical interpretation for propagation diabatisation

Propagation diabatisation in DD-vMCG uses a finite number of electronic states. Therefore it is always a reduced-subspace ADT construction.

The propagated transformation is reliable when the retained states form a good quasi-diabatic manifold over the region sampled by the dynamics. In practice this means:

- important near-degenerate or strongly coupled states must be included;
- couplings to omitted states should remain small;
- no intruder state should enter the energy window sampled by the wavepacket;
- the projected nonadiabatic coupling field should remain smooth enough for path propagation;
- the topological behaviour of the retained manifold should be represented correctly.

If these conditions fail, the propagated ADT matrix may become path-dependent, sign-inconsistent, or unable to represent the correct topology of the electronic manifold.

This is why DD-vMCG propagation diabatisation includes safety checks on derivative-coupling continuity, state ordering, small energy gaps, and failed quantum-chemistry data. These checks are practical ways of detecting when the finite retained subspace may no longer behave as a good quasi-diabatic manifold.

---

## Summary

In a complete electronic Hilbert space, the ADT equation

$$
\begin{align}
\nabla_{\mat q}\Cmat+\F\Cmat=0
\end{align}
$$

can be treated as an exact transformation equation, subject to the curl condition and topological constraints.

In a reduced $P$-space, the corresponding equation

$$
\begin{align}
\nabla_{\mat q}\Cmat^{(P)}
+\F^{(P)}\Cmat^{(P)}
=0
\end{align}
$$

is exact only if the retained subspace is isolated from the omitted states. If the cross-block couplings satisfy

$$
\begin{align}
\F^{(P,Q)},\F^{(Q,P)}=O(\epsilon),
\end{align}
$$

then the feedback from omitted states into the retained ADT equation is

$$
\begin{align}
O(\epsilon^2).
\end{align}
$$

The reduced curl condition is also satisfied up to $O(\epsilon^2)$:

$$
\begin{align}
\pdv{\mat F_q^{(P)}}{q_p}
-\pdv{\mat F_p^{(P)}}{q_q}
=[
\mat F_q^{(P)},\mat F_p^{(P)}
]+O(\epsilon^2).
\end{align}
$$

Thus a finite electronic subspace can support a controlled quasi-diabatic representation when it is sufficiently isolated. If the coupling to omitted states is not small, the retained subspace must be enlarged or the resulting diabatisation should be treated as unreliable.

---

## Links to related notes

- [The Born--Oppenheimer equation in a finite electronic subspace](../../02_Born_Oppenheimer_and_Nonadiabaticity/intermediates/int01_group_born_approximations.md)
- [Curl condition, analyticity, and uniqueness](spec04_curl_condition_analyticity_and_uniqueness.md)
- [Topological matrix and single-valued diabatic potentials](spec05_topological_matrix_and_single_valued_diabatic_potentials.md)
- [Constructing a good sub-Hilbert space](spec07_constructing_a_good_subhilbert_space.md)
- [Residual coupling and split diabatic representations](split_diabatic_representations_and_residual_couplings/)
- [Derivation: reduced sub-Hilbert-space errors](../derivations/derivation_reduced_subhilbert_space_errors.md)

---

## References

The reduced sub-Hilbert-space ADT analysis follows Baer’s treatment of nonadiabatic coupling terms, sub-Hilbert spaces, curl conditions, and topological effects [@baer_2002_nact; @baer_2000_topological_effects]. The connection to finite-state nuclear equations follows the group Born--Oppenheimer discussion in these notes and the multimode vibronic-coupling framework of Köppel, Domcke, and Cederbaum [@koppel_domcke_cederbaum_1984].




