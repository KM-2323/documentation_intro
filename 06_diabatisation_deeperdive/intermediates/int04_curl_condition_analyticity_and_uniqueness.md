# Curl condition, analyticity, and uniqueness of the ADT matrix

## Purpose

Explain what the curl condition means and why it is needed for a unique ADT field.

## Recall: the ADT equation

$$
\nabla \Cmat+\F\Cmat=0.
$$

In component form,

$$
\pdv{\Cmat}{q_\alpha}
+
\mat F_\alpha \Cmat
=0.
$$

Define $\mat F_\alpha$ as the coordinate-resolved NACM.

## Local path existence

Along a parametrised path $\mat q(s)$, the ADT equation becomes

$$
\frac{d\Cmat}{ds}
=
-\left[
\F(\mat q(s))\cdot \frac{d\mat q}{ds}
\right]\Cmat.
$$

Explain:

- this is an ordinary first-order matrix ODE;
- it has a local path solution under ordinary regularity conditions;
- this does not yet imply path independence.

## Why path independence is stronger

Suppose two paths connect the same endpoints. A unique ADT field requires both integrations to give the same $\Cmat$ up to the fixed initial gauge.

This is where the curl condition enters.

## Mixed derivatives and integrability

State that a single-valued differentiable $\Cmat(\mat q)$ must satisfy

$$
\pdv{}{q_\alpha}
\pdv{\Cmat}{q_\beta}
=
\pdv{}{q_\beta}
\pdv{\Cmat}{q_\alpha}.
$$

Substituting the ADT equation gives the non-Abelian curl condition.

Use a convention warning:

> With the convention $\nabla\Cmat+\F\Cmat=0$, the sign/order of the commutator must be kept consistent.

## The curl condition

Write the condition in component form, for example

$$
\pdv{\mat F_\beta}{q_\alpha}
-
\pdv{\mat F_\alpha}{q_\beta}
=
\mat F_\beta \mat F_\alpha
-
\mat F_\alpha \mat F_\beta.
$$

Then explain that this is the vanishing-curvature condition for the connection associated with the NACV field.

## Analyticity of $\Cmat$

State carefully:

If $\F$ is analytic in a simply connected region and satisfies the curl condition there, then the ADT matrix constructed from a fixed reference point is locally analytic and path-independent in that region.

## Uniqueness of $\Cmat$

Explain that $\Cmat$ is unique only after a boundary condition is fixed:

$$
\Cmat(\mat q_0)=\Cmat_0.
$$

Without this, $\Cmat U_0$ with constant unitary $U_0$ is also a solution.

## Uniqueness of $\W$

Since

$$
\W=\Cmat^\dagger \V \Cmat,
$$

a constant right-unitary change in $\Cmat$ changes $\W$ by a constant unitary similarity transformation. Therefore the diabatic representation is unique only after the gauge/reference convention has been fixed.

## Practical interpretation

The curl condition is not merely a formal equation. It tells us whether the propagated ADT matrix can be regarded as a field over a region rather than as a path-dependent object.

## Link to derivation

Full algebra:

[Derivation of the curl condition from the ADT equation](../derivations/derivation_curl_condition_from_adt.md)