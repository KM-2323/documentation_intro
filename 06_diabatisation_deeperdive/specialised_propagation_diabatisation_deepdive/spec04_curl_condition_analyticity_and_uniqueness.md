# Curl condition, analyticity, and uniqueness of the ADT matrix

## Purpose of this page

The previous overview introduced the adiabatic-to-diabatic transformation (ADT) equation,

$$
\begin{align}
\nabla_{\mat R}\Cmat+\F\Cmat=0.
\label{eq:adt_equation_int04}
\end{align}
$$

This page explains the local mathematical condition under which this equation defines a regular ADT matrix over a region of nuclear configuration space.

The key point is that Eq. $\eqref{eq:adt_equation_int04}$ is not just one ordinary differential equation. In a molecule with several nuclear coordinates, it is a set of coupled first-order partial differential equations. The equation can usually be integrated along a chosen path, but a path-local solution is weaker than a unique matrix field $\Cmat(\mat R)$ defined throughout a region.

The central question is therefore:

$$
\boxed{
\text{When does the ADT equation define a unique, analytic, path-independent transformation matrix?}
}
$$

The answer is controlled by the **curl condition**, or equivalently by the vanishing of the non-Abelian curvature of the retained nonadiabatic coupling matrix.

The detailed algebra is given in [Derivation of the curl condition from the ADT equation](../derivations/derivation_curl_condition_from_adt.md).

---

## Coordinate-resolved ADT equations

Let the retained electronic-state space have dimension $M$. For each nuclear coordinate $R_\mu$, define the coordinate-resolved nonadiabatic coupling matrix

$$
\begin{align}
(\mat F_\mu)_{ji}
=F_{ji,\mu}
=\left\langle
\psi_j
\middle|
\pdv{\psi_i}{R_\mu}
\right\rangle.
\label{eq:coordinate_nacm_int04}
\end{align}
$$

Each $\mat F_\mu$ is an $M\times M$ matrix in electronic-state space. The full nonadiabatic coupling object is the matrix-valued vector

$$
\begin{align}
\F
=\left\{
\mat F_1,\mat F_2,\ldots,\mat F_f
\right\},
\end{align}
$$

where $f$ is the number of nuclear coordinates.

The ADT equation

$$
\nabla_{\mat R}\Cmat+\F\Cmat=0
$$

means, component by component,

$$
\begin{align}
\pdv{\Cmat}{R_\mu}
+\mat F_\mu\Cmat
=0,
\qquad
\mu=1,\ldots,f.
\label{eq:coordinate_adt_int04}
\end{align}
$$

For two coordinates, denoted $p$ and $q$, this becomes

$$
\begin{align}
\pdv{\Cmat}{p}
+\mat F_p\Cmat
&=0,
\label{eq:adt_p_int04}
\\
\pdv{\Cmat}{q}
+
\mat F_q\Cmat
&=0.
\label{eq:adt_q_int04}
\end{align}
$$

The question is whether the same matrix $\Cmat(p,q)$ can satisfy both equations consistently.

---

## Invertibility and unitarity

Before discussing analyticity, it is useful to note that the ADT matrix remains invertible if it is initialized as a unitary matrix.

For real adiabatic states, the coordinate-resolved NACM is antisymmetric. For complex adiabatic states, it is anti-Hermitian:

$$
\begin{align}
\mat F_\mu^\dagger=-\mat F_\mu.
\label{eq:antihermitian_F_int04}
\end{align}
$$

From Eq. $\eqref{eq:coordinate_adt_int04}$,

$$
\begin{align}
\pdv{\Cmat}{R_\mu}
=-\mat F_\mu\Cmat.
\end{align}
$$

Taking the Hermitian adjoint gives

$$
\begin{align}
\pdv{\Cmat^\dagger}{R_\mu}
=\left(
-\mat F_\mu\Cmat
\right)^\dagger
=-\Cmat^\dagger\mat F_\mu^\dagger
=\Cmat^\dagger\mat F_\mu.
\end{align}
$$

Therefore,

$$
\begin{align}
\pdv{}{R_\mu}
\left(
\Cmat^\dagger\Cmat
\right)
&=\left(
\pdv{\Cmat^\dagger}{R_\mu}
\right)\Cmat
+\Cmat^\dagger
\left(
\pdv{\Cmat}{R_\mu}
\right)
\nonumber\\
&=\Cmat^\dagger\mat F_\mu\Cmat
-\Cmat^\dagger\mat F_\mu\Cmat
\nonumber\\
&=0.
\end{align}
$$

Thus $\Cmat^\dagger\Cmat$ is constant along nuclear-coordinate displacement. If the boundary condition is chosen so that

$$
\begin{align}
\Cmat^\dagger(\mat R_0)\Cmat(\mat R_0)=\mat I,
\end{align}
$$

then

$$
\begin{align}
\Cmat^\dagger(\mat R)\Cmat(\mat R)=\mat I
\end{align}
$$

throughout the regular region reached by the solution.

Thus the ADT matrix remains unitary, and therefore invertible, provided the NACM is anti-Hermitian and the initial transformation is unitary.

This argument also applies inside an exactly closed finite subspace, because the retained coordinate-resolved matrices $\mat F_\mu^{(P)}$ are still anti-Hermitian within the retained electronic-state space.

---

## Why analyticity of $\F$ is not enough

Suppose the matrices $\mat F_p$ and $\mat F_q$ are smooth functions of the nuclear coordinates. This is necessary for a regular ADT matrix, but it is not sufficient.

The reason is that $\Cmat(p,q)$ must have consistent mixed derivatives. If $\Cmat$ is to be analytic, then

$$
\begin{align}
\pdv{}{q}
\left(
\pdv{\Cmat}{p}
\right)
=\pdv{}{p}
\left(
\pdv{\Cmat}{q}
\right).
\label{eq:mixed_derivatives_commute_int04}
\end{align}
$$

Using Eqs. $\eqref{eq:adt_p_int04}$ and $\eqref{eq:adt_q_int04}$,

$$
\begin{align}
\pdv{\Cmat}{p}
=-\mat F_p\Cmat,
\qquad
\pdv{\Cmat}{q}
=-\mat F_q\Cmat.
\end{align}
$$

Taking the $q$ derivative of the first equation gives

$$
\begin{align}
\pdv{}{q}
\left(
\pdv{\Cmat}{p}
\right)
&=-\pdv{\mat F_p}{q}\Cmat
-\mat F_p\pdv{\Cmat}{q}
\nonumber\\
&=
-\pdv{\mat F_p}{q}\Cmat
+\mat F_p\mat F_q\Cmat.
\label{eq:q_then_p_int04}
\end{align}
$$

Taking the $p$ derivative of the second equation gives

$$
\begin{align}
\pdv{}{p}
\left(
\pdv{\Cmat}{q}
\right)
&=-\pdv{\mat F_q}{p}\Cmat
-\mat F_q\pdv{\Cmat}{p}
\nonumber\\
&=-\pdv{\mat F_q}{p}\Cmat
+\mat F_q\mat F_p\Cmat.
\label{eq:p_then_q_int04}
\end{align}
$$

Equating Eqs. $\eqref{eq:q_then_p_int04}$ and $\eqref{eq:p_then_q_int04}$ gives

$$
\begin{align}
\left[
\pdv{\mat F_q}{p}
-\pdv{\mat F_p}{q}
-\left(
\mat F_q\mat F_p-\mat F_p\mat F_q
\right)
\right]\Cmat=0.
\end{align}
$$

Since $\Cmat$ is invertible, this implies

$$
\begin{align}
\pdv{\mat F_q}{p}
-\pdv{\mat F_p}{q}
=\mat F_q\mat F_p-\mat F_p\mat F_q.
\label{eq:curl_condition_int04}
\end{align}
$$

This is the curl condition.

Using the commutator notation

$$
\begin{align}
[\mat A,\mat B]
=\mat A\mat B-\mat B\mat A,
\end{align}
$$

the condition can be written as

$$
\begin{align}
\pdv{\mat F_q}{p}
-\pdv{\mat F_p}{q}
=[\mat F_q,\mat F_p].
\label{eq:curl_condition_commutator_int04}
\end{align}
$$

Equivalently, define the curvature matrix

$$
\begin{align}
\mat\Omega_{pq}
=\pdv{\mat F_q}{p}
-\pdv{\mat F_p}{q}
-[\mat F_q,\mat F_p].
\label{eq:curvature_int04}
\end{align}
$$

Then the curl condition is

$$
\begin{align}
\mat\Omega_{pq}=0.
\end{align}
$$

Thus, the ADT matrix can be analytic only if the nonadiabatic coupling field has zero non-Abelian curvature.

---

## Compact vector notation

In compact notation, the curl condition is often written as

$$
\begin{align}
\operatorname{curl}\F=\F\times\F.
\label{eq:curl_condition_compact_int04}
\end{align}
$$

This notation is concise, but it can be misleading if read as an ordinary vector identity. The product on the right-hand side contains matrix multiplication and therefore commutators.

For example, in the $(p,q)$ coordinate plane, Eq. $\eqref{eq:curl_condition_compact_int04}$ means

$$
\begin{align}
\pdv{\mat F_q}{p}
-\pdv{\mat F_p}{q}
=\mat F_q\mat F_p
-\mat F_p\mat F_q.
\end{align}
$$

The right-hand side vanishes only when $\mat F_p$ and $\mat F_q$ commute.

This is why multistate ADT problems are more delicate than two-state real ADT problems. In a real two-state problem, all coordinate-resolved coupling matrices are proportional to the same antisymmetric generator, so they commute. In a general multistate problem, different coordinate-resolved matrices need not commute.

---

## Two-state Abelian limit

For two real electronic states,

$$
\begin{align}
\mat F_\mu
=\begin{pmatrix}
0 & F_{12,\mu}\\
-F_{12,\mu} & 0
\end{pmatrix}.
\end{align}
$$

This can be written as

$$
\begin{align}
\mat F_\mu
=F_{12,\mu}
\mat J,
\qquad
\mat J
=\begin{pmatrix}
0 & 1\\
-1 & 0
\end{pmatrix}.
\end{align}
$$

Since every component is proportional to the same matrix $\mat J$,

$$
\begin{align}
[\mat F_p,\mat F_q]=0.
\end{align}
$$

The curl condition therefore reduces to

$$
\begin{align}
\pdv{F_{12,q}}{p}
-\pdv{F_{12,p}}{q}
=0,
\label{eq:two_state_curl_condition_int04}
\end{align}
$$

away from singularities.

This is the familiar statement that, locally, the two-state NACV can be written as the gradient of a mixing angle,

$$
\begin{align}
\F_{12}=\nabla\theta
\end{align}
$$

up to sign convention. Around a conical intersection, however, the mixing angle is multivalued. Thus Eq. $\eqref{eq:two_state_curl_condition_int04}$ can hold locally away from the singularity while a closed loop around the singularity still produces nontrivial topology.

This is the distinction between local curl-free behaviour and global single-valuedness.

---

## Analyticity and local uniqueness

If the matrices $\mat F_\mu$ are analytic in a regular region and the curvature vanishes,

$$
\begin{align}
\mat\Omega_{\mu\nu}=0
\qquad
\text{for all coordinate pairs }(\mu,\nu),
\end{align}
$$

then the coordinate equations

$$
\begin{align}
\pdv{\Cmat}{R_\mu}
+\mat F_\mu\Cmat
=0
\end{align}
$$

are mutually compatible. In that case, an analytic ADT matrix can be constructed locally once a boundary condition is specified.

The boundary condition fixes the gauge. For example, one may choose

$$
\begin{align}
\Cmat(\mat R_0)=\mat I
\end{align}
$$

at a reference geometry $\mat R_0$. A different choice,

$$
\begin{align}
\Cmat'(\mat R_0)=\Cmat(\mat R_0)\mat U_0,
\end{align}
$$

where $\mat U_0$ is a constant unitary matrix, gives a different but equivalent diabatic basis.

This can be seen directly. Suppose $\Cmat_1$ and $\Cmat_2$ are two solutions of the ADT equation in the same regular region. Define

$$
\begin{align}
\mat M(\mat R)
=\Cmat_1^{-1}(\mat R)\Cmat_2(\mat R).
\end{align}
$$

Using

$$
\begin{align}
\nabla \Cmat_i=-\F\Cmat_i,
\qquad i=1,2,
\end{align}
$$

one finds

$$
\begin{align}
\nabla \mat M=0.
\end{align}
$$

Therefore $\mat M$ is constant. If the two solutions have the same boundary condition at $\mat R_0$, then

$$
\begin{align}
\mat M=\mat I,
\end{align}
$$

and the two solutions are identical.

Thus the ADT matrix is locally unique once the initial gauge has been fixed.

---

## Path independence in a simply connected regular region

The curl condition is local. To turn local compatibility into global path independence, the region must also be topologically simple.

If a region is simply connected, contains no singularities, and satisfies

$$
\begin{align}
\mat\Omega_{\mu\nu}=0
\end{align}
$$

throughout the region, then the path-ordered integral

$$
\begin{align}
\Cmat(\mat R_1)
=\mathcal P
\exp
\left[
-\int_{\mat R_0}^{\mat R_1}
\F(\mat R)\cdot d\mat R
\right]
\Cmat(\mat R_0)
\end{align}
$$

is independent of the path chosen from $\mat R_0$ to $\mat R_1$.

A useful way to understand this is to compare two nearby rectangular paths. The difference between the ADT matrices obtained from the two paths is proportional, to leading order, to the curvature matrix times the area of the small rectangle:

$$
\begin{align}
\Delta \Cmat
\sim
\mat\Omega_{pq}\,
\Cmat\,
\Delta p\,\Delta q.
\end{align}
$$

If $\mat\Omega_{pq}=0$, then the two elementary paths give the same transformation. A larger loop in a regular region can be divided into many small rectangles. If each small rectangle gives no net holonomy, the full loop also gives no net holonomy.

The detailed rectangular-path derivation is given in [Path-ordered ADT and closed contours](../derivations/derivation_path_ordered_adt_and_closed_contours.md).

---

## What happens when singularities are present

The previous argument assumes that the coupling matrices are regular throughout the region. This fails near degeneracies such as conical intersections, where the adiabatic derivative coupling may become singular.

If a singular point lies inside a closed loop, then the loop cannot be contracted to a point without crossing the singularity. Even if the curl condition holds locally away from the singularity, the closed loop may still acquire a nontrivial topological factor.

This is the origin of the topological matrix discussed in the next page. For a closed contour $\Gamma$,

$$
\begin{align}
\mat D(\Gamma)
=\mathcal P
\exp
\left[
-\oint_\Gamma
\F(\mat R)\cdot d\mat R
\right].
\end{align}
$$

If $\mat D(\Gamma)\neq \mat I$, then the ADT matrix does not return to itself after being transported around the loop.

Thus:

$$
\boxed{
\text{The curl condition controls local path independence; the topological matrix controls closed-loop behaviour around singularities.}
}
$$

---

## Complete Hilbert space and exactly closed subspaces

In the complete electronic Hilbert space, the exact nonadiabatic coupling matrices satisfy the curl condition away from singularities. This is because the full electronic basis provides a complete resolution of identity and the corresponding coupling field is a pure gauge connection.

In practical calculations, however, only a finite set of states is retained. The retained subspace is denoted by $P$, while the omitted states form the complementary $Q$-space.

If the retained $P$-space is exactly closed, meaning that

$$
\begin{align}
\F_{ia}=0,
\qquad
i\in P,
\quad
a\in Q,
\end{align}
$$

then the same ADT analysis applies inside the $P$-space. The reduced ADT equation is

$$
\begin{align}
\nabla \Cmat_P+\F^{(P)}\Cmat_P=0,
\end{align}
$$

and the reduced curl condition is

$$
\begin{align}
\pdv{\mat F_q^{(P)}}{p}
-\pdv{\mat F_p^{(P)}}{q}=
[\mat F_q^{(P)},
\mat F_p^{(P)}].
\label{eq:p_space_curl_condition_int04}
\end{align}
$$

If the retained subspace is not exactly closed, then Eq. $\eqref{eq:p_space_curl_condition_int04}$ is generally not exact. Couplings to omitted states produce residual curvature in the projected connection. This is the finite-subspace obstruction to a globally exact diabatic representation.

The detailed finite-subspace corrections are not introduced here. They are treated in [Complete versus reduced Hilbert spaces in ADT theory](spec06_complete_vs_reduced_hilbert_space_adt.md).

---

## Interpretation

The curl condition is the local consistency condition for the ADT equation. It answers the question: if the transformation is propagated by differentiating along different nuclear coordinates, do all routes give the same local result?

In a complete or exactly closed electronic space, the answer is yes away from singularities. In a finite approximate subspace, the answer is only approximately yes when the retained states are sufficiently decoupled from omitted states.

This distinction is important for propagation diabatisation. The practical DD-vMCG algorithm propagates a transformation matrix along local paths using retained-state nonadiabatic couplings. The method works well when the retained state manifold behaves like an isolated subspace. If omitted states become important, the reduced coupling field may no longer satisfy the curl condition accurately, and the propagated transformation can become path-dependent or phase-inconsistent.

---

## Common pitfalls

### Pitfall 1: Thinking that smooth $\F$ automatically gives a smooth ADT matrix

Smoothness of $\F$ is necessary but not sufficient. The coordinate components of $\F$ must also satisfy the curl condition. Otherwise the mixed derivatives of $\Cmat$ are inconsistent.

### Pitfall 2: Confusing a path-local solution with a regional ADT field

The ADT equation can be integrated along a specified path. This does not guarantee that the result is independent of the path. Path independence requires the integrability condition.

### Pitfall 3: Forgetting the commutator term

In multistate problems, the coordinate-resolved coupling matrices generally do not commute. The curl condition is therefore not simply

$$
\pdv{\mat F_q}{p}
-\pdv{\mat F_p}{q}
=0.
$$

The correct condition includes the commutator.

### Pitfall 4: Applying the regular-region argument through a conical intersection

The curl condition should be applied in regular regions. A loop enclosing a conical intersection may have nontrivial topology even if the coupling is curl-free away from the singularity.

### Pitfall 5: Treating the finite subspace as automatically complete

A retained finite state manifold is not automatically closed. If couplings to omitted states are significant, the reduced curl condition may fail.

---

## References

The ADT equation, curl condition, and topological interpretation follow Baer's treatment of electronic nonadiabatic coupling terms and molecular topological effects. 

The finite-subspace interpretation connects to the group Born--Oppenheimer construction discussed earlier and to practical propagation diabatisation in DD-vMCG.
