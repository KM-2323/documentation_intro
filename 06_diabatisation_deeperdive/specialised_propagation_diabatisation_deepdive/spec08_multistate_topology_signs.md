# Multistate topology, signs, and degeneracies

The preceding pages introduced the ADT equation, the curl condition, the topological matrix, and the distinction between complete and reduced electronic Hilbert spaces. This page now focuses on the multistate case.

The central question is:

> After the ADT matrix is transported around a closed loop, what kinds of sign changes or state mixing are compatible with a single-valued diabatic potential matrix?

For a two-state conical intersection, the familiar answer is simple: a loop around the intersection can produce a sign change of the real adiabatic electronic functions. In matrix language, this appears as a topological matrix with diagonal entries $\pm 1$. In a multistate system, however, the same idea becomes more restrictive. One must examine the full topological matrix, not only isolated pairwise sign changes.

This page follows the logic of Baer's general discussion of $M$-state ADT matrices. The worked examples for two-, three-, and four-state model generators are treated separately; here the aim is to explain the general construction and its interpretation.

For the detailed derivations that is used to support this page, please read [derivations: multistate ADT angles and topological sign](<../derivations/derivations_multistate_ADT_angle_equations and_topological_sign_matrices.md>)


---

## 1. From the ADT equation to a loop matrix

The adiabatic-to-diabatic transformation matrix satisfies

$$
\begin{align}
\nabla\Cmat+\F\Cmat=0.
\label{eq:adt_multistate_main}
\end{align}
$$

Here $\F$ is the matrix of nonadiabatic coupling vectors. Along a parametrised path $\mat q(s)$, this becomes a one-dimensional matrix differential equation,

$$
\begin{align}
\frac{d\Cmat}{ds}
=
-\mat F_s(s)\Cmat(s),
\label{eq:adt_path_multistate}
\end{align}
$$

where

$$
\begin{align}
\mat F_s(s)
=
\F(\mat q(s))\cdot
\frac{d\mat q}{ds}.
\end{align}
$$

Thus $\mat F_s$ is the nonadiabatic coupling matrix contracted with the tangent to the path. It is an $M\times M$ matrix in electronic-state space. For real electronic states, it is antisymmetric:

$$
\begin{align}
\mat F_s^T=-\mat F_s.
\end{align}
$$

For a closed loop $\Gamma$, the transported transformation is

$$
\begin{align}
\Cmat(s_\mathrm f)
=
\mat D(\Gamma)\Cmat(s_0),
\end{align}
$$

where

$$
\begin{align}
\mat D(\Gamma)
=
\mathcal P
\exp
\left[
-\oint_\Gamma
d\mat q\cdot \F(\mat q)
\right].
\label{eq:D_multistate_general}
\end{align}
$$

The matrix $\mat D(\Gamma)$ is the topological matrix, or holonomy matrix. It records how the electronic frame changes after being parallel transported once around the loop.

In a regular simply connected region where the curl condition is satisfied, every contractible loop gives

$$
\begin{align}
\mat D(\Gamma)=\mat I.
\end{align}
$$

A nontrivial $\mat D$ can appear when the loop encloses a degeneracy, such as a conical-intersection seam, or when the retained electronic subspace fails to behave as a closed subspace.

---

## 2. Why diagonality matters

The diabatic potential matrix is

$$
\begin{align}
\mat W
=
\Cmat^\dagger\mat V\Cmat,
\label{eq:W_from_C_multistate}
\end{align}
$$

where $\mat V$ is diagonal in the adiabatic representation.

At the beginning and end of a closed loop, the nuclear geometry is the same, so the adiabatic energy matrix is the same:

$$
\begin{align}
\mat V(s_\mathrm f)=\mat V(s_0).
\end{align}
$$

For the diabatic potential matrix to be single-valued, one requires

$$
\begin{align}
\mat W(s_\mathrm f)=\mat W(s_0).
\end{align}
$$

If

$$
\begin{align}
\Cmat(s_\mathrm f)=\mat D\Cmat(s_0),
\end{align}
$$

then

$$
\begin{align}
\mat W(s_\mathrm f)
=
\Cmat^\dagger(s_0)
\mat D^\dagger
\mat V(s_0)
\mat D
\Cmat(s_0).
\end{align}
$$

Therefore $\mat W(s_\mathrm f)=\mat W(s_0)$ requires

$$
\begin{align}
\mat D^\dagger\mat V\mat D=\mat V.
\end{align}
$$

Equivalently,

$$
\begin{align}
[\mat D,\mat V]=0.
\label{eq:D_commutes_with_V}
\end{align}
$$

If the adiabatic energies at the base point are nondegenerate, then $\mat V$ has distinct diagonal entries. In that case, Eq. $\eqref{eq:D_commutes_with_V}$ forces $\mat D$ to be diagonal.

For real electronic functions, the allowed diagonal entries are signs:

$$
\begin{align}
\mat D
=
\operatorname{diag}(\pm 1,\pm 1,\ldots,\pm 1).
\label{eq:D_diagonal_signs}
\end{align}
$$

This is the multistate version of the two-state sign-change condition. The ADT matrix itself may be multivalued around the loop, but the diabatic potential matrix remains single-valued if the loop-induced change is only a diagonal sign matrix.

Important caveat: if the base point is degenerate, then $\mat V$ contains a degenerate block. In that case, $\mat D$ may mix states inside the degenerate subspace while still commuting with $\mat V$. The diagonal-sign statement is the usual nondegenerate-base-point case.

---

## 3. The two-state case as the simplest limit

For two states, the contracted nonadiabatic coupling matrix along the path has the form

$$
\begin{align}
\mat F_s^{(2)}
=
\begin{pmatrix}
0 & F_{12}(s)\\
-F_{12}(s) & 0
\end{pmatrix}.
\label{eq:F_two_state_path}
\end{align}
$$

Introduce the generator

$$
\begin{align}
\mat J_{12}
=
\begin{pmatrix}
0&1\\
-1&0
\end{pmatrix},
\qquad
\mat J_{12}^2=-\mat I.
\end{align}
$$

Then

$$
\begin{align}
\mat F_s^{(2)}=F_{12}(s)\mat J_{12}.
\end{align}
$$

The path equation is

$$
\begin{align}
\frac{d\Cmat^{(2)}}{ds}
=
-F_{12}(s)\mat J_{12}\Cmat^{(2)}.
\end{align}
$$

Because the same generator $\mat J_{12}$ appears at every point along the path, the solution is a simple rotation:

$$
\begin{align}
\Cmat^{(2)}(s)
=
\exp
\left[
-\mat J_{12}
\int_{s_0}^{s}
F_{12}(s')\,ds'
\right].
\end{align}
$$

Define

$$
\begin{align}
\gamma_{12}(s)
=
\int_{s_0}^{s}
F_{12}(s')\,ds'.
\end{align}
$$

Using $\mat J_{12}^2=-\mat I$,

$$
\begin{align}
\exp(-\mat J_{12}\gamma_{12})
=
\cos\gamma_{12}\,\mat I
-
\sin\gamma_{12}\,\mat J_{12}.
\end{align}
$$

Thus, with the sign convention used above,

$$
\begin{align}
\Cmat^{(2)}(s)
=
\begin{pmatrix}
\cos\gamma_{12}(s) & -\sin\gamma_{12}(s)\\
\sin\gamma_{12}(s) & \cos\gamma_{12}(s)
\end{pmatrix}.
\label{eq:C_two_state_rotation}
\end{align}
$$

For a closed loop, define

$$
\begin{align}
\alpha_{12}
=
\oint_\Gamma F_{12}(s)\,ds.
\end{align}
$$

Then the topological matrix is

$$
\begin{align}
\mat D^{(2)}
=
\begin{pmatrix}
\cos\alpha_{12} & -\sin\alpha_{12}\\
\sin\alpha_{12} & \cos\alpha_{12}
\end{pmatrix}.
\label{eq:D_two_state_general}
\end{align}
$$

For $\mat D^{(2)}$ to be diagonal, one needs

$$
\begin{align}
\sin\alpha_{12}=0.
\end{align}
$$

Therefore

$$
\begin{align}
\alpha_{12}=n\pi,
\qquad
n\in\mathbb Z,
\end{align}
$$

and

$$
\begin{align}
\mat D^{(2)}
=
(-1)^n\mat I.
\label{eq:D_two_state_quantized}
\end{align}
$$

If $n$ is odd, both real electronic functions change sign after one loop. This is the usual two-state conical-intersection sign change.

Convention warning: reversing the loop orientation, or choosing the opposite sign convention for the generator, changes the sign of $\alpha_{12}$ and reverses the off-diagonal signs in Eq. $\eqref{eq:D_two_state_general}$. The quantisation condition $\alpha_{12}=n\pi$ is unchanged.

---

## 4. Why the multistate case is not just several two-state cases

For two states, there is only one coupling generator. Therefore all matrices along the loop commute, and the topological matrix is determined by one scalar integral.

For $M>2$, there are several possible pairwise coupling generators:

$$
\begin{align}
\mat J_{12},
\mat J_{13},
\mat J_{23},
\ldots
\end{align}
$$

These generators do not generally commute. For example, in a three-state space,

$$
\begin{align}
[\mat J_{12},\mat J_{23}]
\neq 0.
\end{align}
$$

Therefore, in a general multistate problem, one cannot usually write

$$
\begin{align}
\mat D
=
\exp
\left[
-\sum_{i<j}
\mat J_{ij}
\oint F_{ij}(s)\,ds
\right]
\end{align}
$$

as if all pairwise rotations were independent. The ordering of the rotations along the path matters.

This is the reason Baer introduces a general angle parameterisation for the ADT matrix. Instead of pretending that the multistate problem is a set of independent two-state rotations, one writes the full transformation matrix as a product of elementary rotations and derives coupled differential equations for the rotation angles.

---

## 5. Three-state ADT angle parameterisation

For three states, Baer writes the ADT matrix as a product of three plane rotations:

$$
\begin{align}
\Cmat^{(3)}
=
\mat Q_{12}(\gamma_{12})
\mat Q_{23}(\gamma_{23})
\mat Q_{13}(\gamma_{13}).
\label{eq:C3_product}
\end{align}
$$

Here each $\mat Q_{ij}$ is the identity matrix except in the $(i,j)$ plane. With one common sign convention,

$$
\begin{align}
\mat Q_{12}
&=
\begin{pmatrix}
c_{12} & s_{12} & 0\\
-s_{12} & c_{12} & 0\\
0 & 0 & 1
\end{pmatrix},
\\
\mat Q_{23}
&=
\begin{pmatrix}
1 & 0 & 0\\
0 & c_{23} & s_{23}\\
0 & -s_{23} & c_{23}
\end{pmatrix},
\\
\mat Q_{13}
&=
\begin{pmatrix}
c_{13} & 0 & s_{13}\\
0 & 1 & 0\\
-s_{13} & 0 & c_{13}
\end{pmatrix},
\end{align}
$$

where

$$
\begin{align}
c_{ij}=\cos\gamma_{ij},
\qquad
s_{ij}=\sin\gamma_{ij}.
\end{align}
$$

Multiplying the three rotations gives

$$
\begin{align}
\Cmat^{(3)}
=
\begin{pmatrix}
c_{12}c_{13}-s_{12}s_{13}s_{23}
&
c_{23}s_{12}
&
c_{12}s_{13}+c_{13}s_{12}s_{23}
\\
-c_{12}s_{13}s_{23}-c_{13}s_{12}
&
c_{12}c_{23}
&
c_{12}c_{13}s_{23}-s_{12}s_{13}
\\
-c_{23}s_{13}
&
-s_{23}
&
c_{13}c_{23}
\end{pmatrix}.
\label{eq:C3_explicit}
\end{align}
$$

This explicit form is useful because it shows that the off-diagonal entries contain sine factors. Therefore, if all end-of-loop angles are integer multiples of $\pi$, all sine terms vanish and the topological matrix becomes diagonal.

---

## 6. Where Baer's coupled angle equations come from

Along a path coordinate $x$, the three-state ADT equation is

$$
\begin{align}
\frac{d\Cmat^{(3)}}{dx}
=
-\mat F_x^{(3)}\Cmat^{(3)},
\label{eq:adt_3state_path_general}
\end{align}
$$

with

$$
\begin{align}
\mat F_x^{(3)}
=
\begin{pmatrix}
0 & F_{12} & F_{13}\\
-F_{12} & 0 & F_{23}\\
-F_{13} & -F_{23} & 0
\end{pmatrix}.
\label{eq:F3_path_matrix}
\end{align}
$$

Insert the product form

$$
\begin{align}
\Cmat^{(3)}
=
\mat Q_{12}\mat Q_{23}\mat Q_{13}.
\end{align}
$$

Differentiating gives

$$
\begin{align}
\frac{d\Cmat^{(3)}}{dx}
&=
\mat Q_{12}'\mat Q_{23}\mat Q_{13}
+
\mat Q_{12}\mat Q_{23}'\mat Q_{13}
+
\mat Q_{12}\mat Q_{23}\mat Q_{13}'.
\end{align}
$$

Right-multiplying by $(\Cmat^{(3)})^T$ gives

$$
\begin{align}
\left(
\frac{d\Cmat^{(3)}}{dx}
\right)
(\Cmat^{(3)})^T
=
-\mat F_x^{(3)}.
\label{eq:Cprime_CT_minusF}
\end{align}
$$

The left-hand side is an antisymmetric matrix. It can therefore be expanded in the three generators

$$
\begin{align}
\mat J_{12}
=
\begin{pmatrix}
0&1&0\\
-1&0&0\\
0&0&0
\end{pmatrix},
\qquad
\mat J_{23}
=
\begin{pmatrix}
0&0&0\\
0&0&1\\
0&-1&0
\end{pmatrix},
\qquad
\mat J_{13}
=
\begin{pmatrix}
0&0&1\\
0&0&0\\
-1&0&0
\end{pmatrix}.
\end{align}
$$

Equating the independent matrix elements gives the system

$$
\begin{align}
\gamma_{12}'
+
\gamma_{13}'\sin\gamma_{23}
&=
-F_{12},
\\
\gamma_{23}'\sin\gamma_{12}
+
\gamma_{13}'\cos\gamma_{23}\cos\gamma_{12}
&=
-F_{13},
\\
\gamma_{23}'\cos\gamma_{12}
-
\gamma_{13}'\cos\gamma_{23}\sin\gamma_{12}
&=
-F_{23}.
\label{eq:gamma_linear_system_3state}
\end{align}
$$

This is the key point: the angle derivatives are not simply the coupling elements. They are coupled to each other through the existing rotation angles.

Solving Eq. $\eqref{eq:gamma_linear_system_3state}$ gives

$$
\begin{align}
\gamma_{13}'
&=
\frac{
-F_{13}\cos\gamma_{12}
+
F_{23}\sin\gamma_{12}
}{
\cos\gamma_{23}
},
\label{eq:gamma13_prime_3state}
\\
\gamma_{23}'
&=
-
\left(
F_{23}\cos\gamma_{12}
+
F_{13}\sin\gamma_{12}
\right),
\label{eq:gamma23_prime_3state}
\\
\gamma_{12}'
&=
-F_{12}
-
\tan\gamma_{23}
\left(
-F_{13}\cos\gamma_{12}
+
F_{23}\sin\gamma_{12}
\right).
\label{eq:gamma12_prime_3state}
\end{align}
$$

These are Baer's three coupled first-order equations for this rotation ordering.

> the denominator $\cos\gamma_{23}$ reflects the coordinate chart used for the rotation angles. If $\cos\gamma_{23}=0$, this angle parameterisation becomes singular, similar to a gimbal-lock singularity in Euler angles. That does not necessarily imply a physical singularity in the ADT matrix; it may only mean that this particular set of angles is a poor coordinate chart there.

---

## 7. Numerical integration along a closed contour

To compute the topological matrix for a loop, one integrates the angle equations around a closed contour.

For a circular loop, the path may be parameterised by an angle

$$
\begin{align}
\phi\in[0,2\pi].
\end{align}
$$

Then the path equation becomes an initial-value problem in $\phi$:

$$
\begin{align}
\frac{d\gamma_{12}}{d\phi}
&=
-F_{12}(\phi)
-
\tan\gamma_{23}(\phi)
\left[
-F_{13}(\phi)\cos\gamma_{12}(\phi)
+
F_{23}(\phi)\sin\gamma_{12}(\phi)
\right],
\\
\frac{d\gamma_{23}}{d\phi}
&=
-
F_{23}(\phi)\cos\gamma_{12}(\phi)
-
F_{13}(\phi)\sin\gamma_{12}(\phi),
\\
\frac{d\gamma_{13}}{d\phi}
&=
\frac{
-F_{13}(\phi)\cos\gamma_{12}(\phi)
+
F_{23}(\phi)\sin\gamma_{12}(\phi)
}{
\cos\gamma_{23}(\phi)
}.
\end{align}
$$

A common boundary condition is to take the adiabatic and diabatic bases to coincide at the initial point:

$$
\begin{align}
\gamma_{12}(0)=\gamma_{23}(0)=\gamma_{13}(0)=0.
\end{align}
$$

After integration around the loop, define the end-of-loop angles

$$
\begin{align}
\alpha_{ij}
=
\gamma_{ij}(2\pi).
\end{align}
$$

The topological matrix is then obtained by evaluating the product of rotations at these final angles:

$$
\begin{align}
\mat D^{(3)}
=
\mat Q_{12}(\alpha_{12})
\mat Q_{23}(\alpha_{23})
\mat Q_{13}(\alpha_{13}).
\label{eq:D3_from_final_angles}
\end{align}
$$

---

## 8. Three-state diagonal condition and sign patterns

From the explicit matrix in Eq. $\eqref{eq:C3_explicit}$, all off-diagonal elements vanish if

$$
\begin{align}
\sin\alpha_{12}
=
\sin\alpha_{23}
=
\sin\alpha_{13}
=
0.
\end{align}
$$

Therefore

$$
\begin{align}
\alpha_{ij}=n_{ij}\pi,
\qquad
n_{ij}\in\mathbb Z.
\label{eq:alpha_ij_integer_pi_3state}
\end{align}
$$

Then

$$
\begin{align}
\cos\alpha_{ij}=(-1)^{n_{ij}}.
\end{align}
$$

Substituting $s_{ij}=0$ into Eq. $\eqref{eq:C3_explicit}$, the diagonal entries are

$$
\begin{align}
D_{11}^{(3)}
&=
\cos\alpha_{12}\cos\alpha_{13},
\\
D_{22}^{(3)}
&=
\cos\alpha_{12}\cos\alpha_{23},
\\
D_{33}^{(3)}
&=
\cos\alpha_{13}\cos\alpha_{23}.
\label{eq:D3_diagonal_entries}
\end{align}
$$

Since $\mat D^{(3)}$ is an orthogonal rotation matrix, its determinant is $+1$. Therefore the number of negative diagonal entries must be even.

Thus the possible sign patterns are

$$
\begin{align}
(+,+,+)
\end{align}
$$

or

$$
\begin{align}
(+,-,-),
\qquad
(-,+,-),
\qquad
(-,-,+).
\end{align}
$$

In words, a three-state closed-loop topological matrix can produce either no sign flips or two sign flips. It cannot produce exactly one sign flip.

This differs from a naive pairwise picture. Once three states are coupled, the signs are constrained by the full orthogonal frame, not by independent two-state loops.

---

## 9. Connection with Baer's special three-state model

The general three-state result above should be distinguished from the special three-state model discussed in the worked examples.

In that model, the coupling matrix has the form

$$
\begin{align}
\mat F(\mat s)=\mat g\,t(\mat s),
\end{align}
$$

with one constant generator $\mat g$. Because all matrices along the loop are proportional to the same $\mat g$, the path-ordered exponential collapses to an ordinary exponential. For the particular connected three-state generator used there, diagonality requires a stronger condition, and the topological matrix reduces to

$$
\begin{align}
\mat D^{(3)}=\mat I_3
\end{align}
$$

under the allowed quantisation condition.

This is not a contradiction. The special model imposes a highly constrained, collective three-state motion. The general rotation-angle construction allows more flexible sign patterns, including two-state-like sign flips within a three-state manifold.

This distinction is important for interpreting multistate degeneracies. Some model degeneracies behave as if several states are locked together by a special symmetry or generator structure. In more general cases, the topological effect may be decomposed into sign changes involving subsets of states.

---

## 10. General $M$-state construction

For $M$ states, Baer generalises the rotation-angle parameterisation by writing the ADT matrix as a product of elementary plane rotations:

$$
\begin{align}
\Cmat^{(M)}
=
\prod_{i=1}^{M-1}
\prod_{j=i+1}^{M}
\mat Q_{ij}^{(M)}(\gamma_{ij}).
\label{eq:CM_general_product}
\end{align}
$$

Each $\mat Q_{ij}^{(M)}$ is the $M\times M$ identity matrix except in the $(i,j)$ plane, where it is a two-state rotation.

There are

$$
\begin{align}
\frac{M(M-1)}{2}
\end{align}
$$

such angles, one for each pair of states.

Important convention: the order of the product in Eq. $\eqref{eq:CM_general_product}$ matters. Different orderings lead to different coupled differential equations for the angles. The final ADT matrix is the physical object; the angles are coordinates used to parameterise it.

The angle equations are obtained in the same way as in the three-state case:

1. insert the product form of $\Cmat^{(M)}$ into the path ADT equation;
2. differentiate using the product rule;
3. form $(d\Cmat^{(M)}/ds)(\Cmat^{(M)})^T$;
4. equate the independent antisymmetric matrix elements to $-\mat F_s^{(M)}$.

For $M>2$, these equations are generally coupled and nonlinear in the angles. Thus the end-of-loop angles

$$
\begin{align}
\alpha_{ij}
=
\gamma_{ij}(s_\mathrm f)
\end{align}
$$

are not usually simple pairwise line integrals of $F_{ij}$. They must be obtained by integrating the full coupled system.

---

## 11. General diagonal condition

The product form in Eq. $\eqref{eq:CM_general_product}$ has a useful structural property.

Every off-diagonal element of $\Cmat^{(M)}$ contains at least one sine factor of some angle. Therefore, if all end-of-loop angles satisfy

$$
\begin{align}
\alpha_{ij}=n_{ij}\pi,
\qquad
n_{ij}\in\mathbb Z,
\qquad
n_{ij}=n_{ji},
\label{eq:general_alpha_integer_pi}
\end{align}
$$

then

$$
\begin{align}
\sin\alpha_{ij}=0
\end{align}
$$

for all pairs, and all off-diagonal entries of $\mat D^{(M)}$ vanish.

The diagonal entries are products of cosines involving each state index:

$$
\begin{align}
D_{ii}^{(M)}
=
\prod_{k\ne i}
\cos\alpha_{ik}.
\label{eq:Dii_general_product_cos}
\end{align}
$$

Since

$$
\begin{align}
\cos(n_{ik}\pi)=(-1)^{n_{ik}},
\end{align}
$$

this gives

$$
\boxed{
D_{ij}^{(M)}
=
\delta_{ij}
\prod_{k\ne i}\cos\alpha_{ik}
=
\delta_{ij}
(-1)^{\sum_{k\ne i}n_{ik}}.
}
\label{eq:Dij_general_baer82}
$$

This is Baer's general sign formula.

The number of negative diagonal entries is constrained by the determinant. Since each elementary $\mat Q_{ij}^{(M)}$ is a proper rotation,

$$
\begin{align}
\det \mat D^{(M)}=+1.
\end{align}
$$

Therefore the number of $-1$ diagonal entries must be even.

Equivalently,

$$
\begin{align}
\prod_{i=1}^{M}
D_{ii}^{(M)}
=
(-1)^{
\sum_i\sum_{k\ne i}n_{ik}
}
=
(-1)^{2\sum_{i<k}n_{ik}}
=
+1.
\end{align}
$$

Thus an admissible real topological matrix can have

$$
\begin{align}
K=0,2,4,\ldots
\end{align}
$$

negative diagonal entries, but not an odd number.

---

## 12. What $K$ means

Let $K$ be the number of $-1$ entries on the diagonal of $\mat D^{(M)}$. Then $K$ counts how many components of the transported real electronic frame return with a sign reversal.

If the loop is contractible in a regular simply connected region, then

$$
\begin{align}
\mat D^{(M)}=\mat I,
\end{align}
$$

and therefore

$$
\begin{align}
K=0.
\end{align}
$$

A nonzero $K$ indicates a nontrivial topological effect, usually associated with a loop enclosing a degeneracy or seam.

This statement should be interpreted with care. In a reduced electronic subspace, a nontrivial or non-diagonal $\mat D$ may also signal that important external states have been omitted, so that the retained subspace is not a good closed sub-Hilbert space over the region sampled by the loop.

<!-- ---

## 13. Geometric interpretation of sign flips

For real electronic functions, each adiabatic electronic state is defined only up to a sign:

$$
\begin{align}
\ket{\psi_i}
\sim
-\ket{\psi_i}.
\end{align}
$$

This sign freedom is local. Around a loop enclosing a conical intersection, it may be impossible to choose the signs continuously so that every state returns to itself. Instead, some states may return with a sign reversal.

The topological matrix records this effect. A diagonal entry

$$
\begin{align}
D_{ii}=-1
\end{align}
$$

means that the corresponding transported component of the real electronic frame changes sign after completing the loop.

However, in a multistate system, sign flips are not independent labels attached to isolated pairs. The full frame must remain an orthogonal frame. This is why the number of sign flips must be even and why the full matrix $\mat D$, rather than isolated pairwise phases, is the relevant object.

---

## 14. Relation to multistate degeneracies

The two-state conical intersection has a simple local topology: a loop around the intersection gives a $\pi$ rotation of the mixing angle and a sign change of the real adiabatic eigenvectors.

In a multistate system, several complications appear.

First, the nonadiabatic coupling matrices for different pairs generally do not commute. Therefore the loop cannot usually be described by independent pairwise integrals.

Second, the sign pattern must be compatible with a single orthogonal transformation of the entire retained electronic frame.

Third, some apparent multistate degeneracies may be special model constructions. For example, a constant-generator model may lock several states into a collective topology, producing stronger quantisation conditions than would appear in a more general multistate system.

Finally, in a finite retained electronic subspace, the topological result depends on whether the selected states form a good sub-Hilbert space. If important states are omitted, the computed $\mat D$ may fail to be diagonal or may show unstable sign behaviour. In that case, the issue is not merely topological; the retained electronic manifold itself may be incomplete.

--- -->

## 15. Common pitfalls

### Pitfall 1: Treating multistate topology as independent two-state topology

For $M>2$, the coupling generators generally do not commute. Pairwise intuition is useful, but it does not replace the full topological matrix.

### Pitfall 2: Assuming end-of-loop angles are simple line integrals

In the two-state case,

$$
\begin{align}
\alpha_{12}=\oint F_{12}(s)\,ds.
\end{align}
$$

For $M>2$, the angles are solutions of coupled nonlinear differential equations. They are not generally equal to independent pairwise line integrals.

### Pitfall 3: Forgetting that $\mat D$ must be diagonal

A nontrivial topological matrix is allowed, but for a nondegenerate base point it must be diagonal with entries $\pm 1$ if the diabatic potential matrix is to remain single-valued.

### Pitfall 4: Ignoring finite-subspace effects

If the retained electronic states are not well separated from omitted states, the computed ADT matrix may become path-dependent or non-quantised. This is a finite-subspace failure, not simply a new kind of physical sign flip.

### Pitfall 5: Confusing model restrictions with general topology

The special three- and four-state constant-generator models impose additional structure. Their quantisation conditions should not be mistaken for the most general multistate result.

---

## Summary

Baer's general multistate construction parameterises the ADT matrix as a product of elementary rotations,

$$
\begin{align}
\Cmat^{(M)}
=
\prod_{i=1}^{M-1}
\prod_{j=i+1}^{M}
\mat Q_{ij}^{(M)}(\gamma_{ij}).
\end{align}
$$

The ADT equation then becomes a coupled system of first-order differential equations for the angles $\gamma_{ij}$. After integrating around a closed loop, the final angles $\alpha_{ij}$ determine the topological matrix.

The condition for a diagonal topological matrix is

$$
\begin{align}
\alpha_{ij}=n_{ij}\pi.
\end{align}
$$

The resulting diagonal entries are

$$
\begin{align}
D_{ij}^{(M)}
=
\delta_{ij}
(-1)^{\sum_{k\ne i}n_{ik}}.
\end{align}
$$

Thus, for real electronic functions, the allowed closed-loop effect is a diagonal sign matrix with an even number of negative signs. This is the multistate generalisation of the two-state sign change, but it must be understood as a constraint on the full electronic frame, not as a set of independent pairwise Berry phases.

---

## Links to related notes

- [ADT integrability and topology overview](spec03_adt_integrability_and_topology_overview.md)
- [Curl condition, analyticity, and uniqueness](spec04_curl_condition_analyticity_and_uniqueness.md)
- [Topological matrix and single-valued diabatic potentials](spec05_topological_matrix_and_single_valued_diabatic_potentials.md)
- [Complete versus reduced Hilbert-space ADT](spec06_complete_vs_reduced_hilbert_space_adt.md)
- [Two-state loop and sign change](../worked_examples/adt_topology/example01_two_state_loop_and_sign_change.md)
- [Three-state sign flips and topological matrix](../worked_examples/adt_topology/example02_three_state_sign_flips_and_D_matrix.md)
- [Four-state topological matrix and quantisation conditions](../worked_examples/adt_topology/example03_four_state_topological_matrix.md)
- [Derivation: path-ordered ADT and closed contours](../derivations/derivation_path_ordered_adt_and_closed_contours.md)
- [Derivation: topological matrix condition for diabatic potentials](../derivations/derivation_topological_matrix_condition_for_W.md)

---

## References

This page follows Baer's treatment of the multistate ADT matrix, topological matrix, and quantisation conditions for real electronic functions. The use of elementary rotations for a three-state ADT matrix is also closely related to the three-state ADT-angle construction discussed by Alijah and Baer.