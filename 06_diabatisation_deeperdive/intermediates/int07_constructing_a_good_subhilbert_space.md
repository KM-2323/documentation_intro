# Constructing a useful sub-Hilbert space for diabatisation

## Purpose

Explain how to choose a retained electronic subspace suitable for ADT construction.

## Why subspace construction matters

The ADT equation is exact only in a complete or effectively isolated electronic space. A poor choice of retained states leads to path dependence, phase inconsistency, and incorrect topology.

## Basic criterion: weak $P$-$Q$ coupling

The first condition is

$$
\F_{ia}\approx 0,
\qquad
i\in P,\quad a\in Q.
$$

This condition must hold over the region sampled by the nuclear dynamics.

## Energy separation as a useful but insufficient indicator

Use Hellmann--Feynman:

$$
F_{ia,\alpha}
=
\frac{
\mel{\psi_i}{\pdv{\hat H_{\mathrm{el}}}{q_\alpha}}{\psi_a}
}{
V_a-V_i
}.
$$

A large energy gap helps, but the numerator also matters.

## Intruder states

Define intruder states as states outside the chosen $P$-space that enter the energy window or become strongly coupled in the sampled region.

## Practical diagnostics

### Smoothness of retained NACV field

### Stability of signs and phases

### Approximate curl condition

### Closed-loop topological matrix

### Consistency under enlargement of the retained state set

## When to enlarge the subspace

State that if a $Q$-state strongly couples to $P$-states, the appropriate response is usually to include it in $P$, not to reinterpret the residual term qualitatively.

## Relation to DD-vMCG propagation diabatisation

The DD-vMCG propagation algorithm uses retained-state coupling information. If important states are omitted, the propagated transformation can become path-dependent or phase-inconsistent.

## Summary

A good sub-Hilbert space is not only a set of low-energy states. It is a dynamically relevant and approximately closed electronic manifold.