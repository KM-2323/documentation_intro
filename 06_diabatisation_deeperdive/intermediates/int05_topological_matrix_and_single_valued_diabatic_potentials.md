# Topological matrix and single-valued diabatic potentials

## Purpose

Explain the difference between local integrability and global topology.

## Closed-loop ADT propagation

For a closed contour $\Gamma$, define the loop-propagation matrix

$$
\mat D(\Gamma)
=
\mathcal P
\exp
\left[
-\oint_\Gamma
\F(\mat q)\cdot d\mat q
\right].
$$

Here $\mathcal P$ denotes path ordering.

## What $\mat D$ measures

Explain that $\mat D$ measures the mismatch between the ADT matrix before and after transporting it around a closed loop.

If $\mat D=\mat I$, the ADT returns to itself.

If $\mat D\neq \mat I$, the ADT has nontrivial holonomy.

## Loops not enclosing a conical intersection

In the clean two-state picture, a loop that does not enclose a conical intersection should not acquire the CI sign flip. It may still be numerically affected by nearby singular behaviour, poor state separation, or missing higher states, but the topological holonomy is controlled by what the loop encloses.

## Loops enclosing a conical intersection

For a two-state conical intersection, a loop around the CI gives a quantised line integral. In the real two-state case this corresponds to a sign change of the adiabatic eigenvectors.

## Single-valuedness of $\W$

The diabatic potential is

$$
\W=\Cmat^\dagger \V \Cmat.
$$

Even if $\Cmat$ itself changes after a loop, $\W$ may still be single-valued if the change is compatible with $\V$.

## Baer's condition on $\mat D$

State the condition carefully:

For the diabatic potential matrix to be single-valued, the closed-loop topological matrix must not mix nondegenerate adiabatic states in a way that changes $\W$ after the loop.

For nondegenerate real states, this reduces to $\mat D$ being diagonal with entries of modulus one. In the real case, the diagonal entries are usually $\pm 1$.

## Why $\Cmat$ need not be single-valued

This is a subtle but important point.

The ADT matrix itself can acquire signs after a closed loop. What is physically required is that the diabatic potential matrix remains single-valued.

## Two-state example in one paragraph

For a two-state CI, the loop integral gives an angle of $\pi$. The corresponding closed-loop matrix is equivalent to $-\mat I$ in the two-state subspace. Although the adiabatic states change sign, the diabatic potential remains single-valued because the sign change is diagonal.

## Link to derivations and examples

- [Path-ordered ADT and closed contours](../derivations/derivation_path_ordered_adt_and_closed_contours.md)
- [Topological matrix condition for $\W$](../derivations/derivation_topological_matrix_condition_for_W.md)
- [Two-state loop and sign change](../worked_examples/adt_topology/two_state_loop_and_sign_change.md)