# Constructing a good sub-Hilbert space

The previous page explained why a reduced electronic subspace can support an approximate ADT when the retained states are weakly coupled to the omitted states. This page addresses the next question:

$$
\boxed{
\text{How should the retained sub-Hilbert space be chosen?}
}
$$

The answer is not simply to keep a fixed number of low-lying states. A good sub-Hilbert space should contain the states that are strongly connected by nonadiabatic interactions over the region of nuclear configuration space relevant to the dynamics. States outside this subspace may be omitted only if their couplings to the retained states are weak.

In Baer's terminology, the retained set is called a **sub-Hilbert space** (SHS). If the construction is restricted to a finite region of nuclear configuration space, one may also speak of a **sub-sub-Hilbert space** (SSHS).

---

## Why the choice of subspace matters

The ADT equation in a retained subspace is

$$
\begin{align}
\nabla_{\mat q}\Cmat_P+\F^{(P)}\Cmat_P=0.
\label{eq:adt_in_chosen_shs}
\end{align}
$$

This equation uses only the nonadiabatic coupling matrix inside the selected subspace \(P\). It is a good approximation only when the couplings to omitted states are small,

$$
\begin{align}
\F^{(P,Q)}
=O(\epsilon),
\qquad
\F^{(Q,P)}
=O(\epsilon).
\label{eq:shs_boundary_small_coupling}
\end{align}
$$

If this condition is satisfied, the retained ADT matrix, the reduced curl condition, and the diabatic potential matrix are perturbed only to order \(O(\epsilon^2)\). This was the main result of the previous page.

If the condition is not satisfied, the chosen subspace is too small. In that case, the ADT constructed inside \(P\) may become path-dependent, the curl condition may fail, and the resulting diabatic matrix may not represent the correct electronic topology.

Thus, the quality of a diabatisation is strongly tied to the quality of the electronic subspace.

---

## Strong and weak nonadiabatic interactions

Baer's construction separates nonadiabatic interactions into two broad types.

The first type is a strong interaction associated with a near-degeneracy or degeneracy. In one-dimensional language this is often associated with a Landau--Zener-type crossing. In two-dimensional nuclear configuration space, the corresponding structure becomes a conical intersection or, in some cases, a Renner--Teller-type parabolic intersection.

The second type is a weaker interaction, often described in Baer's discussion as Demkov-type. Here the states interact, but they do not form the same kind of strong crossing structure. Such interactions may still affect the dynamics, but they are assumed to be weak enough to define boundaries between subspaces.

In the notation used here, the retained subspace \(P\) contains states that are strongly coupled to each other. The neighbouring subspaces contain states that are only weakly coupled to \(P\).

This gives the practical rule:

$$
\boxed{
\text{Keep strongly coupled states together; omit only weakly coupled states.}
}
$$

---

## Intra- and inter-subspace coupling terms

Let the full electronic Hilbert space be divided into several sub-Hilbert spaces,

$$
\begin{align}
\mathcal H_{\mathrm{el}}
=
\bigoplus_{P=1}^{L}\mathcal H_P.
\end{align}
$$

Suppose the \(P\)-th subspace contains \(N_P\) states,

$$
\begin{align}
\mathcal H_P
=
\operatorname{span}
\left\{
\psi^{(P)}_1,\ldots,\psi^{(P)}_{N_P}
\right\}.
\end{align}
$$

The nonadiabatic coupling terms inside this subspace are

$$
\begin{align}
\F^{(P)}_{ij}
=
\braket{\psi_i^{(P)}}{\nabla_{\mat q}\psi_j^{(P)}},
\qquad
i,j=1,\ldots,N_P.
\label{eq:intra_shs_couplings}
\end{align}
$$

These are the **intra-subspace** couplings. They are retained in the ADT equation for the \(P\)-space.

The couplings between the \(P\)-space and a neighbouring \(Q\)-space are

$$
\begin{align}
\F^{(P,Q)}_{ij}
=
\braket{\psi_i^{(P)}}{\nabla_{\mat q}\psi_j^{(Q)}}.
\label{eq:inter_shs_couplings}
\end{align}
$$

These are the **inter-subspace** couplings. They are omitted when one constructs the ADT only inside \(P\). Therefore, they must be small over the region of interest.

A useful way to summarise the construction is

$$
\boxed{
\begin{array}{c}
\text{large couplings inside } P
\\[3pt]
\text{small couplings across the boundary of } P
\end{array}
}
$$

or, more explicitly,

$$
\begin{align}
\F^{(P)}_{ij}
\quad
\text{may be large},
\qquad
\F^{(P,Q)}_{ij}
=
O(\epsilon).
\end{align}
$$

---

## Baer's two requirements for a sub-Hilbert space

Baer's construction can be expressed as two requirements.

### 1. Strong internal connectivity

All states inside the \(P\)-th sub-Hilbert space should be connected by strong interactions. In Baer's formulation, each pair of consecutive states inside the subspace should form at least one Landau--Zener-type interaction somewhere in the nuclear configuration space. In two-dimensional language, this corresponds to a conical intersection or parabolic intersection between the relevant consecutive states.

In notation, for a subspace containing states

$$
\begin{align}
1,2,\ldots,N_P,
\end{align}
$$

one requires strong interactions between consecutive pairs,

$$
\begin{align}
(1,2),\quad
(2,3),\quad
\ldots,\quad
(N_P-1,N_P).
\end{align}
$$

Equivalently, the chain of strong couplings should connect the whole retained subspace.

This does not mean that every possible pair of states inside \(P\) must form a conical intersection. It means that the retained states form one connected strongly interacting manifold.

### 2. Weak boundary coupling

The boundary of the subspace should be weakly coupled to neighbouring subspaces.

If the \(P\)-th subspace lies between a lower subspace \(P-1\) and an upper subspace \(P+1\), then the boundary couplings should satisfy

$$
\begin{align}
\F^{(P-1,P)}
=
O(\epsilon),
\qquad
\F^{(P,P+1)}
=
O(\epsilon).
\label{eq:baer_boundary_coupling_condition}
\end{align}
$$

More explicitly, the lowest state of \(P\) should be weakly coupled to the highest state of the lower neighbouring subspace, and the highest state of \(P\) should be weakly coupled to the lowest state of the upper neighbouring subspace.

The physical meaning is that the retained block is internally strongly connected but externally only weakly connected.

---

## Why the subspace must be treated as a whole

A key point in Baer's discussion is that a well-defined sub-Hilbert space should be treated as a whole. It should not be split into independent state-by-state calculations.

The reason is that strong nonadiabatic coupling inside the subspace means that the retained states share a common electronic topology. The ADT matrix is then a transformation of the whole retained electronic manifold,

$$
\begin{align}
\Cmat_P
\in
\mathbb C^{N_P\times N_P}.
\end{align}
$$

It is not a separate transformation for each adiabatic state.

This is especially important near conical intersections. If two states form a conical intersection, treating either state alone is not meaningful for nonadiabatic dynamics. If three states are linked by two adjacent intersections, the correct retained space may be three-dimensional, even if the dynamics initially appears to involve only two states.

Thus,

$$
\boxed{
\text{a strongly coupled manifold is the unit of diabatisation, not an individual state.}
}
$$

---

## Graph interpretation

A useful practical interpretation is to view the electronic states as vertices of a graph.

Each electronic state is a vertex. A strong nonadiabatic interaction between two states is an edge. Then a candidate sub-Hilbert space is a connected component of this graph.

For example,

$$
\begin{align}
1 \longleftrightarrow 2 \longleftrightarrow 3
\end{align}
$$

suggests a three-state subspace. Even if state \(1\) and state \(3\) do not directly form a strong pairwise crossing, they belong to the same connected manifold through state \(2\).

In contrast,

$$
\begin{align}
1 \longleftrightarrow 2
\qquad
\text{and}
\qquad
3
\end{align}
$$

suggests a two-state subspace plus an omitted third state, provided the coupling between \(\{1,2\}\) and \(3\) is weak.

This graph picture is not a replacement for the mathematical conditions, but it is useful for deciding which states should be included before checking the curl condition, topological matrix, and boundary couplings.

---

## Local sub-sub-Hilbert spaces

The construction above defines a sub-Hilbert space over the whole nuclear configuration space. This can be too demanding. A molecule may have many conical intersections or parabolic intersections distributed across its full configuration space, while a particular calculation samples only one region.

For this reason, Baer also discusses a more local construction. If the dynamics takes place in an isolated region of configuration space, one may define a smaller sub-sub-Hilbert space for that region.

The question is then:

$$
\boxed{
\text{Can the effects of intersections outside the sampled region be ignored?}
}
$$

The answer is again controlled by coupling strength. If the non-interesting or external couplings are \(O(\epsilon)\) along the relevant contours in the region, then their effect on the ADT matrix for the interesting subspace is \(O(\epsilon^2)\).

Symbolically,

$$
\begin{align}
\F^{(\mathrm{interesting},\mathrm{external})}
=
O(\epsilon)
\quad
\Longrightarrow
\quad
\Delta \Cmat_{\mathrm{interesting}}
=
O(\epsilon^2).
\end{align}
$$

If this condition holds for the contours relevant to the dynamics, then the outside intersections may be ignored for the local calculation. If it does not hold, the local subspace must be enlarged.

Practical note: this is a local statement in nuclear configuration space. A subspace that is adequate near one Franck--Condon region may cease to be adequate if the wavepacket later reaches another intersection seam or an intruder state.

---

## Practical workflow for choosing a subspace

A practical workflow is:

1. Choose the region of nuclear configuration space relevant to the calculation.

2. Identify the electronic states that are energetically accessible or dynamically important in that region.

3. Inspect energy gaps and nonadiabatic coupling vectors between those states.

4. Include states connected by strong near-degeneracies, avoided crossings, conical intersections, or parabolic intersections.

5. Check whether couplings from the retained states to omitted states are small over the sampled region.

6. Check whether the retained coupling field approximately satisfies the curl condition.

7. Check closed-loop behaviour where topology is important, using the topological matrix or equivalent sign/phase tracking.

8. Enlarge the retained subspace if the curl condition fails, if the topological matrix is inconsistent, or if an omitted state becomes strongly coupled.

This workflow is not purely energetic. A large energy gap is often a useful indicator of weak coupling, but it is not a proof. The derivative matrix element in the numerator of the Hellmann--Feynman relation may still be important.

---

## Diagnostics for a poor subspace

A chosen sub-Hilbert space may be inadequate if any of the following occur:

- the coupling to an omitted state becomes large;
- an omitted state enters the energy window explored by the wavepacket;
- the reduced curl condition is badly violated;
- the topological matrix is not approximately diagonal with unit-norm diagonal entries;
- the propagated ADT matrix becomes strongly path-dependent;
- derivative-coupling signs cannot be made continuous;
- a supposedly two-state problem shows strong coupling to a third state.

These are not merely numerical inconveniences. They indicate that the retained electronic manifold may not be closed enough to support the intended diabatisation.

In that case, the correct remedy is usually to enlarge the retained subspace, not to force a two-state or too-small model.

---

## Connection to propagation diabatisation

Propagation diabatisation in DD-vMCG is a finite-state ADT construction. It therefore depends directly on the quality of the retained electronic subspace.

In practice, the propagated transformation is built from the NACVs of the states included in the calculation. If an important state is omitted, the propagated ADT can become path-dependent, phase-inconsistent, or unable to represent the correct topology.

This is why the implementation includes guards for derivative-coupling continuity, state ordering, small gaps, and failed quantum-chemistry calculations. These guards are not arbitrary. They are practical tests of whether the retained manifold still behaves like a usable quasi-diabatic subspace.

For example, an intruder state is precisely a failure of the assumed sub-Hilbert space: a state that was treated as external has entered the dynamically relevant region and can no longer be ignored.

---

## Common pitfalls

### Choosing states only by energy

It is tempting to choose the lowest \(M\) electronic states and assume that they form a good subspace. This may work, but it is not the defining criterion. The defining criterion is coupling: important strongly coupled states should be included, and omitted-state couplings should be small.

### Treating a strongly coupled group state by state

If a group of states is connected by conical intersections or strong avoided crossings, it should be diabatised as a group. Treating one state at a time destroys the structure that the ADT is meant to represent.

### Ignoring local versus global validity

A subspace may be good in one region and poor in another. The validity of a reduced subspace is a statement about the region sampled by the dynamics, not a universal statement about the molecule.

### Confusing weak boundary coupling with no coupling

The boundary condition is not usually exact. In realistic systems one normally asks for

$$
\begin{align}
\F^{(P,Q)}=O(\epsilon),
\end{align}
$$

not

$$
\begin{align}
\F^{(P,Q)}=0.
\end{align}
$$

The reduced ADT is then quasi-diabatic rather than strictly diabatic.

---

## Summary

A good sub-Hilbert space is a retained electronic manifold that is internally strongly coupled and externally weakly coupled. In Baer's construction, the internal strong interactions are associated with consecutive states forming Landau--Zener-type crossings, conical intersections, or parabolic intersections. The boundaries of the subspace are chosen so that couplings to neighbouring subspaces are weak, usually written as \(O(\epsilon)\).

Once such a subspace is chosen, it should be treated as a whole. The ADT matrix is a transformation of the retained manifold, not of isolated states. If the coupling to omitted states remains small over the relevant region of nuclear configuration space, the retained ADT, curl condition, and diabatic potential matrix are accurate to \(O(\epsilon^2)\). If the omitted-state coupling is not small, the subspace must be enlarged.

This page therefore completes the practical logic begun in the previous page:

$$
\boxed{
\text{choose a strongly connected, weakly bounded manifold}
\quad
\Longrightarrow
\quad
\text{construct a controlled quasi-diabatic ADT.}
}
$$

---

## Links to related notes

- [Complete versus reduced Hilbert space ADT](int06_complete_vs_reduced_hilbert_space_adt.md)
- [Curl condition, analyticity, and uniqueness](int04_curl_condition_analyticity_and_uniqueness.md)
- [Topological matrix and single-valued diabatic potentials](int05_topological_matrix_and_single_valued_diabatic_potentials.md)
- [Multistate topology, signs, and degeneracies](int08_multistate_topology_signs_and_degeneracies.md)
- [The Born--Oppenheimer equation in a finite electronic subspace](int01_group_born_approximations.md)
- [Residual coupling and split diabatic representations](../derivations/derivations_residual_coupling.md)
- [Derivation: reduced sub-Hilbert-space errors](../derivations/derivation_reduced_subhilbert_space_errors.md)

---

## References

This page follows Baer's construction of sub-Hilbert spaces and sub-sub-Hilbert spaces, especially the distinction between intra-subspace and inter-subspace NACTs, the use of strong Landau--Zener/conical-intersection-type interactions to define the retained manifold, and the weak Demkov-type boundary condition used to separate neighbouring subspaces [@baer_2002_nact]. The connection to reduced ADT errors and quasi-diabatic representations follows the finite-subspace discussion in [Complete versus reduced Hilbert space ADT](int06_complete_vs_reduced_hilbert_space_adt.md).