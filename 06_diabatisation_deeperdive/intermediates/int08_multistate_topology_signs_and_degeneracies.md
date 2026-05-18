# Multistate topology, sign changes, and degeneracies

## Purpose

Explain why multistate ADT topology is more subtle than independent two-state sign flips.

## Two-state sign change as the reference case

Recall that a loop around a two-state CI gives a sign change of the real adiabatic states and a diagonal topological matrix with entries $\pm 1$.

## Three-state topological matrices

For three real states, closed-loop sign changes can be represented by diagonal matrices such as

$$
\mat D=\operatorname{diag}(-1,-1,+1),
$$

depending on which pairwise degeneracy is enclosed.

## Combination of sign flips

Discuss how enclosing different seams can combine sign flips. For example:

- loop around a $1/2$ degeneracy;
- loop around a $2/3$ degeneracy;
- loop around both.

This should be treated in a worked example rather than fully derived here.

## Why multistate ADT is not just pairwise two-state ADT

In three or more states, the ADT matrix is non-Abelian. Rotations in different state-pair planes do not generally commute.

## Three-state ADT angles

Introduce the idea that $\mat A$ or $\Cmat$ can be written as a product of elementary rotations,

$$
\mat A
=
\mat Q_{12}(\theta_{12})
\mat Q_{13}(\theta_{13})
\mat Q_{23}(\theta_{23}),
$$

but the resulting angle equations depend on the chosen ordering.

## Geometric interpretation of sign flips

A sign flip is not an arbitrary numerical accident. It is the result of transporting a real electronic frame around a region with nontrivial topology.

## Multistate degeneracy difficulties

Explain cautiously:

True multistate degeneracies involve higher-codimension conditions and non-Abelian holonomy. The topology may not be reducible to independent two-state intersections. The current practical approach is often to build a sufficiently large retained subspace and test consistency through signs, curl residuals, and closed-loop behaviour.

## Link to examples

- [Three-state sign flips and $\mat D$ matrix](../worked_examples/adt_topology/three_state_sign_flips_and_D_matrix.md)
- [Finite subspace failure modes](../worked_examples/adt_topology/finite_subspace_failure_modes.md)