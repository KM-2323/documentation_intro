# Complete and reduced Hilbert spaces in ADT theory

## Purpose

Explain why the exact ADT theory is formulated in a complete electronic Hilbert space, and what changes when only a finite subspace is retained.

## Complete electronic Hilbert space

In a complete electronic basis, the derivative coupling matrix contains all states. The formal ADT equation can then be treated as an exact gauge-transformation equation, subject to the curl and topological conditions.

## Retained $P$-space and omitted $Q$-space

Recall the finite-subspace construction:

$$
\hat P_M
=
\sum_{i=1}^{M}
\ket{\psi_i}\bra{\psi_i},
\qquad
\hat Q_M=\hat I_{\mathrm{el}}-\hat P_M.
$$

The retained states define the working manifold. The omitted states define the external complement.

## Weak coupling to excluded states

State the condition:

$$
\F_{ia}=O(\epsilon),
\qquad
i\in P,\quad a\in Q.
$$

Then explain that the retained manifold behaves as an approximately closed electronic subspace.

## Correction to notation


$$
O(\epsilon^2),
$$

not $O(\epsilon^{-2})$.

The weak coupling to outside states should produce second-order errors in many retained-subspace quantities, not inverse-square divergences. If Baer uses a specific notation, we should verify it against the source later.

## Effect on the ADT matrix

Explain qualitatively:

If the retained subspace is weakly coupled to omitted states, the ADT matrix built from retained-state NACVs is only approximate. Its path dependence and residual coupling are controlled by the size of omitted-state coupling.

## Effect on the diabatic potential matrix

The diabatic matrix

$$
\W^{(P)}=\Cmat^{(P)\dagger}\V^{(P)}\Cmat^{(P)}
$$

is a quasi-diabatic potential matrix. It is not the exact projection of a globally strict diabatic potential unless the retained subspace is effectively closed. So if each component of the $\Cmat$ 

## Effect on the curl condition

In a reduced subspace, the exact curl condition is generally violated by terms induced by omitted states. If the omitted-state coupling is $O(\epsilon)$, the curl violation is expected to be small, often of second order in the weak coupling.

## Relation to grouped-Born approximation

Connect to the grouped-Born page:

The grouped-Born approximation assumes the retained electronic group is isolated from the omitted states. ADT theory requires the same kind of assumption if the retained-state transformation is to behave like a genuine diabatic transformation.

## Interpretation

A finite retained subspace does not invalidate propagation diabatisation. It tells us what must be checked: state isolation, smoothness, curl residuals, path consistency, and topological consistency.

## Link to derivation

[Reduced sub-Hilbert-space ADT errors](../derivations/derivation_reduced_subhilbert_space_errors.md)
