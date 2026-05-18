# ADT integrability, topology, and finite electronic subspaces

## Purpose of this section

In (link to diabatisation.md, derivations and grouped born), it is clear through transformation (adiabatic-to-diabatic), the electronic basis are decoupled from nuclrear motions, to obtain smooth diabatic surfaces. Howeve, there were many intricacies that were not discucsed. First-off, such transformation is only exact in infinite Hilbert space. Further, it is a gauge transformation whose existence, uniqueness, and single-valuedness depend on the structure of the nonadiabatic coupling field. In the following series of notes, it is aimed to dissect such topic in one lens. 

## Starting point: the ADT equation


As a reminder, the convention used is

$$
\nabla \Cmat+\F\Cmat=0.
$$

where $\Cmat$ is the adiabatic-to-diabatic (ADT) matrix of dimension $S\times S$, $\F$ is the nonadiabatic coupling vector of dimension $f\times S \times S$. 
such that:

$$
\W=\Cmat^\dagger \V \Cmat.
$$

With $\V$ as the diagonal adiabatic potential energy matrix, while $\W$ is a non-diagonal (generally) diabatic potential energy matrix. Further it is evidenced, that $\V$ contains columns of the eigenvectors of the diabatic Hamiltonian.


## Three levels of the problem

### Local path solution

Along a specified path, the ADT equation is an ordinary first-order matrix differential equation. As long as the coupling is finite enough on the path, it can be integrated.

### Regional field solution

A path-local solution is weaker than a unique field $\Cmat(\mat q)$ over a region. A unique regional solution requires integrability.

### Global/topological solution

Even if the local curl condition holds away from singularities, a closed loop around a conical intersection can return with a nontrivial topological matrix.

## Why analyticity of $\F$ is not enough

State the core idea:

$$
\F \text{ analytic}
\quad \not\Rightarrow \quad
\Cmat \text{ analytic and path-independent}.
$$

The missing condition is the curl/integrability condition.

## The role of the curl condition

Introduce, without deriving yet, that the ADT equation is compatible only when the mixed derivatives of $\Cmat$ agree. This leads to the non-Abelian curl condition.

Mention that sign conventions depend on whether the ADT equation is written as $\nabla\Cmat+\F\Cmat=0$ or with the opposite sign.

## The role of closed loops and $\mat D$

Introduce the topological matrix as the closed-loop version of the ADT propagation. It records what happens to the ADT matrix after a loop.

## Complete versus reduced electronic spaces

Explain that in the complete Hilbert space the formal ADT conditions can be exact, while in a finite retained subspace they are only approximate.

Connect this back to the grouped-Born page:

> A retained $P$-space is useful only when coupling to the excluded $Q$-space is sufficiently small over the region sampled by the dynamics.

## Reading map

Link to:

- curl condition page;
- topological matrix page;
- reduced Hilbert-space page;
- sub-Hilbert-space construction page;
- examples;
- derivations.
