# Path-ordered ADT solution and closed contours

## ADT equation along a path

Parametrise $\mat q(s)$ and write

$$
\frac{d\Cmat}{ds}
=
-\left[
\F(\mat q(s))\cdot \frac{d\mat q}{ds}
\right]\Cmat.
$$

## Formal path-ordered solution

Derive

$$
\Cmat(s)
=
\mathcal P
\exp
\left[
-\int_0^s
\F(\mat q(s'))\cdot
\frac{d\mat q}{ds'}\,ds'
\right]
\Cmat(0).
$$

## Closed-loop solution

For a closed loop,

$$
\mat D(\Gamma)
=
\mathcal P
\exp
\left[
-\oint_\Gamma \F\cdot d\mat q
\right].
$$

## Loop not enclosing a CI

Show in the simple two-state picture that a contractible loop in a regular region gives trivial holonomy.

## Loop enclosing a CI

Show how a nontrivial line integral appears in the two-state case.

## Relation to Berry/sign change

Interpret the result as a sign change of real adiabatic eigenvectors.