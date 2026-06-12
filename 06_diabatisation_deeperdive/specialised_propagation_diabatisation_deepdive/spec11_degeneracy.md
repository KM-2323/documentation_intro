## Foreword

[Geometrical interpretation of sign flips](spec10_geometric_interpretation_signflip.md) described a useful endpoint rule for separated adjacent conical intersections. This page addresses the limitation of that rule: genuine multistate degeneracies are not always equivalent to several ordinary two-state conical intersections placed at the same geometry.

The distinction between "breakable" and "unbreakable" degeneracies remains partly interpretive in the present notes. The working view used here is that an unbreakable degeneracy is one for which the branching coordinates are effectively the only coordinates available to lift the degeneracy. In that case, the surrounding intersection structure lacks the external dimensionality required to unfold the point into separated two-state conical intersections.

This page therefore presents the standard argument, the tension with explicit multistate model examples, and the interpretation used in these notes. The aim is not to close the classification problem completely, but to state where the adjacent-CI sign rule stops and where the full multistate topological matrix must be used.

## Genuine multistate degeneracies and the apparent contradiction

The geometrical sign-flip picture is very useful, but it has an important limitation. It assumes that the conical intersections can be treated as ordinary adjacent two-state intersections. In that picture, a conical intersection $C_j$ between states $j$ and $j+1$ flips the signs of those two eigenfunctions. If a contour surrounds a connected block of such CIs, the interior states flip twice and only the endpoint states change sign.

For example, in a three-state chain with two adjacent conical intersections,

$$
\begin{align}
C_1:
1\leftrightarrow 2,
\qquad
C_2:
2\leftrightarrow 3,
\end{align}
$$

a contour surrounding both $C_1$ and $C_2$ gives

$$
\begin{align}
\mat D(C_1+C_2)
=
\operatorname{diag}(-1,+1,-1).
\end{align}
$$

The second eigenfunction participates in both conical intersections, so it changes sign twice and returns unchanged.

Now imagine moving the two CIs together until they coincide at the same point. In the limiting picture, a closed contour around the coincident point surrounds both $C_1$ and $C_2$. If the coincidence is just the limit of two ordinary neighbouring CIs, then the same sign rule should persist:

$$
\begin{align}
\mat D
=
\operatorname{diag}(-1,+1,-1).
\end{align}
$$

Thus only the two outer eigenfunctions change sign.

However, extending the argument to a point where $n$ surfaces intersect does not change the final result: if the multi-degeneracy is understood as a collapsed chain of ordinary adjacent two-state CIs, then a contour around the collapsed object flips only the two endpoint states of the chain.

For example, if the collapsed object represents

$$
\begin{align}
C_1+C_2+\cdots+C_{n-1},
\end{align}
$$

then the expected sign pattern is

$$
\begin{align}
d_1=-1,
\qquad
d_n=-1,
\end{align}
$$

with all interior states unchanged.


However, the earlier [three-state worked example](../worked_examples/adt_topology/example02_three_state_sign_flips_and_D_matrix.md) and [four-state worked example](../worked_examples/adt_topology/example03_four_state_loop_and_D_matrix.md) show that this collapsed-chain expectation is not generally compatible with explicit multistate model calculations. In the three-state example, the allowed topological matrix does not permit a two-function sign flip. In the four-state model, the possible outcomes may be either no sign flips or all four functions changing sign, but not the intermediate case where only two functions flip.

This is not a small technical detail. It shows that a genuine multistate degeneracy is not always equivalent to several ordinary two-state conical intersections placed at the same point.

---

### The three-state example (revisit and compare)

The contrast is especially clear in the three-state model. In the separated-CI picture, surrounding $C_1$ and $C_2$ gives

$$
\begin{align}
\mat D_{\mathrm{chain}}
=
\operatorname{diag}(-1,+1,-1).
\end{align}
$$

However, in the special three-state model ([three-state worked example](../worked_examples/adt_topology/example02_three_state_sign_flips_and_D_matrix.md)), the coupling matrix has the form

$$
\begin{align}
\mat g
=
\begin{pmatrix}
0 & 1 & 0\\
-1 & 0 & \eta\\
0 & -\eta & 0
\end{pmatrix},
\qquad
\omega=\sqrt{1+\eta^2}.
\end{align}
$$

For a loop with scalar integral

$$
\begin{align}
\Theta
=
\oint_\Gamma t(\mat s)\cdot d\mat s,
\end{align}
$$

the topological matrix has the form

$$
\begin{align}
\mat D
=
\frac{1}{\omega^2}
\begin{pmatrix}
\eta^2+C & -\omega S & \eta(1-C)\\
\omega S & \omega^2 C & -\eta\omega S\\
\eta(1-C) & \eta\omega S & 1+\eta^2 C
\end{pmatrix},
\end{align}
$$

where

$$
\begin{align}
C=\cos(\omega\Theta),
\qquad
S=\sin(\omega\Theta).
\end{align}
$$

For $\mat D$ to be diagonal, the off-diagonal elements must vanish. For generic $\eta\neq0$, this requires

$$
\begin{align}
S=0,
\qquad
1-C=0.
\end{align}
$$

Thus

$$
\begin{align}
\omega\Theta=2n\pi,
\qquad n\in\mathbb Z,
\end{align}
$$

and the topological matrix becomes

$$
\begin{align}
\mat D=\mat I.
\end{align}
$$

So this special three-state model allows no sign flip at all under the allowed single-valuedness condition. This is different from the endpoint rule prediction

$$
\begin{align}
\operatorname{diag}(-1,+1,-1).
\end{align}
$$

The disagreement is not caused by an algebraic mistake. It reflects the fact that the special three-state model is not simply a smooth collapse of two independent adjacent two-state conical intersections.

---

### Why the two pictures differ

The adjacent-CI sign rule assumes that each conical intersection can be treated as a separate two-state object.  In that case, a contour enclosing several CIs can be understood as a product of separate sign-flip operations.

For the three-state chain,

$$
\begin{align}
\mat D(C_1)
&=
\operatorname{diag}(-1,-1,+1),
\\
\mat D(C_2)
&=
\operatorname{diag}(+1,-1,-1).
\end{align}
$$

The product is

$$
\begin{align}
\mat D(C_1)\mat D(C_2)
=
\operatorname{diag}(-1,+1,-1).
\end{align}
$$

This works because the two sign-flip operations are being treated as separate local two-state effects.

In a genuine multistate degeneracy, however, the coupling is not necessarily decomposable into independent two-state pieces. The nonadiabatic coupling matrix is a genuinely multistate object, and the topological matrix is obtained from the full path-ordered exponential,

$$
\begin{align}
\mat D(\Gamma)
=
\mathcal P
\exp
\left[
-\oint_\Gamma \F(\mat s)\cdot d\mat s
\right].
\end{align}
$$

When different state pairs are coupled simultaneously, the corresponding generators need not behave like independent sign-flip operations. Even if the matrix elements have a simple form, the resulting holonomy can obey stricter constraints than the separated-CI picture would suggest.

Thus the order of limits matters:

$$
\begin{align}
\text{separate CIs first, then enclose them}
\end{align}
$$

is not always equivalent to

$$
\begin{align}
\text{force the CIs to coincide, then analyse the multistate point}.
\end{align}
$$

This is the core of the apparent contradiction. 

So to summarise the argument so far. The collapsed-chain argument assumes that the multi-degenerate point is continuously connected to a nearby situation in which the degeneracy splits into ordinary two-state conical intersections. Such assumptions realies on the existence of an additional nuclear coordinates that can separate the coincident CIs.

If no such coordinates are available, the degeneracy is not simply a compressed version of several ordinary CIs. It is a genuinely multistate degeneracy with its own topology. The ordinary adjacent-CI contour algebra is then not enough.

---

### Breakable multistate degeneracies

Baer resolves the issue by distinguishing between multistate degeneracies that can be broken apart and those that cannot.

A **breakable multistate degeneracy** is a coincident degeneracy that can be unfolded into ordinary two-state conical intersections by changing additional nuclear coordinates.

In that case, the multistate point is best viewed as the limiting case of separated adjacent conical intersections:

$$
\begin{align}
\text{coincident multistate degeneracy}
\quad
\longrightarrow
\quad
\text{separated two-state CIs}
\end{align}
$$

under a suitable perturbation.

For a breakable three-state degeneracy formed from $C_1$ and $C_2$, a contour surrounding the whole object inherits the endpoint sign rule:

$$
\begin{align}
\mat D
=\operatorname{diag}(-1,+1,-1).
\end{align}
$$

The middle state is involved in both component intersections and therefore does not change sign.

More generally, if a breakable $n$-state degeneracy unfolds into a connected chain

$$
\begin{align}
C_1+C_2+\cdots+C_{n-1},
\end{align}
$$

then a contour around the full object flips only the two endpoint states:

$$
\begin{align}
\mat D
=
\operatorname{diag}
(-1,+1,\ldots,+1,-1).
\end{align}
$$

This is the same sign rule as for separated adjacent CIs.

---

### Unbreakable multistate degeneracies

An **unbreakable multistate degeneracy** is not merely several two-state conical intersections sitting on top of one another. It cannot be unfolded into separated ordinary CIs by varying additional nuclear coordinates. Its topology is intrinsically multistate.

For such a degeneracy, the endpoint sign-flip rule is not sufficient. The allowed sign patterns must be determined from the full multistate topological matrix,

$$
\begin{align}
\mat D(\Gamma)
=
\mathcal P
\exp
\left[
-\oint_\Gamma \F(\mat s)\cdot d\mat s
\right],
\end{align}
$$

together with the requirement that the diabatic potential matrix remain single-valued.

This is why special three-state and four-state models can give sign rules that do not match the naive adjacent-CI endpoint picture. They are modelling a genuinely multistate topology, not simply a collection of independent two-state CIs.

---

### Internal and external coordinates

Baer describes the distinction using the idea of internal and external coordinates.

The **internal coordinates** are those needed to describe the degeneracy itself. They are the coordinates in which the states meet.

The **external coordinates** are additional nuclear coordinates that can move, split, or unfold the degeneracy without being part of its minimal local description.

A breakable degeneracy has enough external coordinates to separate the coincident multistate point into ordinary two-state conical intersections. An unbreakable degeneracy does not.

Thus,

$$
\boxed{
\text{breakable}
\quad\Longrightarrow\quad
\text{can be unfolded into ordinary two-state CIs}
}
$$

whereas

$$
\boxed{
\text{unbreakable}
\quad\Longrightarrow\quad
\text{must be analysed as a genuine multistate degeneracy}
}
$$

This distinction prevents one from applying the two-state sign-flip rule beyond its domain of validity.

---

### What remains unresolved

The important message is not that multistate topology is impossible to analyse. Rather, the lesson is that there is no universal sign-flip rule based only on the number of states that become degenerate.

For separated two-state CIs, the sign pattern follows from the adjacent-CI contour algebra. For a breakable multistate degeneracy, the same rule can be recovered by unfolding the degeneracy. For an unbreakable multistate degeneracy, the sign pattern depends on the full multistate nonadiabatic coupling matrix and must be computed from the corresponding topological matrix.

Within the present interpretation, Baer's discussion therefore leaves a genuine classification problem:

$$
\boxed{
\text{Which multistate degeneracies are breakable, and which have intrinsic multistate topology?}
}
$$

This is not answered by the two-state conical-intersection picture alone. It requires the full multistate ADT framework, including the structure of the nonadiabatic coupling matrix, the available nuclear coordinates, and the topology of the closed contour. The sign assignment of nonadiabatic coupling vectors adds a further layer of complexity.

---

### Interpretation

The apparent contradiction is useful because it marks the boundary between two regimes.

If a multistate degeneracy can be unfolded into separated two-state CIs, then the geometric endpoint rule applies. The sign flips are determined by which eigenfunctions are touched an odd number of times by the enclosed CI structure.

If the degeneracy cannot be unfolded, then it is a genuine multistate object. In that case, the allowed sign changes are not obtained by adding two-state sign flips. They are determined by the full topological matrix of the multistate connection.

Thus, the safe conclusion is:

$$
\boxed{
\text{two-state topology explains breakable multistate degeneracies, but genuine multistate degeneracies require full multistate ADT analysis.}
}
$$

---

### Links to related notes

- [Multistate topology, signs, and degeneracies](spec08_multistate_topology_signs.md)
- [Geometric interpretation of sign flips](spec10_geometric_interpretation_signflip.md)
- [Three-state sign flips and topological matrix](../worked_examples/adt_topology/example02_three_state_sign_flips_and_D_matrix.md)
- [Four-state topological matrix and quantisation conditions](../worked_examples/adt_topology/example03_four_state_loop_and_D_matrix.md)
