# Derivation of the curl condition from the ADT equation

## Purpose

This derivation starts from the ADT equation

$$
\begin{align}
\nabla_{\mat R}\Cmat+\F\Cmat=0
\end{align}
$$

and derives the curl condition required for the ADT matrix to be locally analytic and path-independent in a regular region.

The key result is

$$
\begin{align}
\pdv{\mat F_q}{p}
-\pdv{\mat F_p}{q}
=\mat F_q\mat F_p-\mat F_p\mat F_q.
\end{align}
$$

Equivalently,

$$
\begin{align}
\operatorname{curl}\F=\F\times\F.
\end{align}
$$

The latter notation is compact, but the component form is safer because it makes the matrix commutator explicit.

---

## Starting point

The ADT equation is

$$
\begin{align}
\nabla_{\mat R}\Cmat+\F\Cmat=0.
\label{eq:adt_start_derivation}
\end{align}
$$

For each coordinate $R_\mu$, this means

$$
\begin{align}
\pdv{\Cmat}{R_\mu}
+\mat F_\mu\Cmat
=0.
\label{eq:adt_component_derivation}
\end{align}
$$

Here $\mat F_\mu$ is the coordinate-resolved nonadiabatic coupling matrix,

$$
\begin{align}
(\mat F_\mu)_{ji}
=\left\langle
\psi_j
\middle|
\pdv{\psi_i}{R_\mu}
\right\rangle.
\end{align}
$$

Thus $\mat F_\mu$ is an $M\times M$ matrix in electronic-state space, while $\F$ is the full matrix-valued vector

$$
\begin{align}
\F=\left\{
\mat F_1,\ldots,\mat F_f
\right\}.
\end{align}
$$

In this derivation, choose two nuclear coordinates and denote them by $p$ and $q$. The ADT equation then gives

$$
\begin{align}
\pdv{\Cmat}{p}
+\mat F_p\Cmat
&=0,
\label{eq:adt_p_derivation}
\\
\pdv{\Cmat}{q}
+
\mat F_q\Cmat
&=0.
\label{eq:adt_q_derivation}
\end{align}
$$

---

## Invertibility of the ADT matrix

The derivation of the curl condition will require multiplying by $\Cmat^{-1}$. We therefore first recall why $\Cmat$ is invertible.

For an orthonormal adiabatic electronic basis, the coordinate-resolved NACM is anti-Hermitian:

$$
\begin{align}
\mat F_\mu^\dagger=-\mat F_\mu.
\label{eq:F_antihermitian_derivation}
\end{align}
$$

For real adiabatic states, this reduces to antisymmetry.

From Eq. $\eqref{eq:adt_component_derivation}$,

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
=-\Cmat^\dagger \mat F_\mu^\dagger
=\Cmat^\dagger \mat F_\mu.
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
+
\Cmat^\dagger
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

Hence $\Cmat^\dagger\Cmat$ is constant. If the initial condition is chosen so that

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

throughout the regular region where the solution exists.

Thus $\Cmat$ is unitary and therefore invertible.

The same argument applies to an exactly closed finite $P$-subspace, with $\Cmat$ replaced by $\Cmat_P$ and $\mat F_\mu$ replaced by $\mat F_\mu^{(P)}$.

---

## Analyticity and commuting mixed derivatives

For $\Cmat(p,q)$ to be analytic in a regular region, the mixed derivatives must commute:

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
\label{eq:mixed_derivative_commutation_derivation}
\end{align}
$$

We now compute the two sides using the ADT equations.

From Eq. $\eqref{eq:adt_p_derivation}$,

$$
\begin{align}
\pdv{\Cmat}{p}
=-\mat F_p\Cmat.
\end{align}
$$

Taking the $q$ derivative gives

$$
\begin{align}
\pdv{}{q}
\left(
\pdv{\Cmat}{p}
\right)
&=-\pdv{}{q}
\left(
\mat F_p\Cmat
\right)
\nonumber\\
&=-\left(
\pdv{\mat F_p}{q}
\right)\Cmat
-\mat F_p
\left(
\pdv{\Cmat}{q}
\right).
\label{eq:q_derivative_of_p_derivative}
\end{align}
$$

Using Eq. $\eqref{eq:adt_q_derivation}$,

$$
\begin{align}
\pdv{\Cmat}{q}
=-\mat F_q\Cmat,
\end{align}
$$

so Eq. $\eqref{eq:q_derivative_of_p_derivative}$ becomes

$$
\begin{align}
\pdv{}{q}
\left(
\pdv{\Cmat}{p}
\right)
&=-\left(
\pdv{\mat F_p}{q}
\right)\Cmat
+\mat F_p\mat F_q\Cmat.
\label{eq:q_then_p_result}
\end{align}
$$

Now start from Eq. $\eqref{eq:adt_q_derivation}$,

$$
\begin{align}
\pdv{\Cmat}{q}
=-\mat F_q\Cmat.
\end{align}
$$

Taking the $p$ derivative gives

$$
\begin{align}
\pdv{}{p}
\left(
\pdv{\Cmat}{q}
\right)
&=-\pdv{}{p}
\left(
\mat F_q\Cmat
\right)
\nonumber\\
&=-\left(
\pdv{\mat F_q}{p}
\right)\Cmat
-\mat F_q
\left(
\pdv{\Cmat}{p}
\right).
\label{eq:p_derivative_of_q_derivative}
\end{align}
$$

Using Eq. $\eqref{eq:adt_p_derivation}$,

$$
\begin{align}
\pdv{\Cmat}{p}
=-\mat F_p\Cmat,
\end{align}
$$

so Eq. $\eqref{eq:p_derivative_of_q_derivative}$ becomes

$$
\begin{align}
\pdv{}{p}
\left(
\pdv{\Cmat}{q}
\right)
&=-\left(
\pdv{\mat F_q}{p}
\right)\Cmat
+\mat F_q\mat F_p\Cmat.
\label{eq:p_then_q_result}
\end{align}
$$

The mixed derivatives commute only if Eqs. $\eqref{eq:q_then_p_result}$ and $\eqref{eq:p_then_q_result}$ are equal:

$$
\begin{align}
-\left(
\pdv{\mat F_p}{q}
\right)\Cmat
+\mat F_p\mat F_q\Cmat
=-\left(
\pdv{\mat F_q}{p}
\right)\Cmat
+
\mat F_q\mat F_p\Cmat.
\end{align}
$$

Rearranging,

$$
\begin{align}
\left[
\pdv{\mat F_q}{p}
-\pdv{\mat F_p}{q}
\right]\Cmat
=\left[
\mat F_q\mat F_p
-\mat F_p\mat F_q
\right]\Cmat.
\end{align}
$$

Since $\Cmat$ is invertible, multiply from the right by $\Cmat^{-1}$:

$$
\begin{align}
\boxed{
\pdv{\mat F_q}{p}
-\pdv{\mat F_p}{q}
=\mat F_q\mat F_p
-\mat F_p\mat F_q.
}
\label{eq:curl_condition_derivation}
\end{align}
$$

This is the curl condition.

Using the commutator notation,

$$
\begin{align}
[\mat A,\mat B]=\mat A\mat B-\mat B\mat A,
\end{align}
$$

Eq. $\eqref{eq:curl_condition_derivation}$ can be written as

$$
\begin{align}
\boxed{
\pdv{\mat F_q}{p}
-\pdv{\mat F_p}{q}
=[\mat F_q,\mat F_p].
}
\label{eq:curl_condition_commutator_derivation}
\end{align}
$$

---

## Curvature form

It is useful to define the curvature matrix

$$
\begin{align}
\mat\Omega_{pq}
=\pdv{\mat F_q}{p}
-\pdv{\mat F_p}{q}
-[\mat F_q,\mat F_p].
\label{eq:curvature_matrix_derivation}
\end{align}
$$

Then the curl condition is simply

$$
\begin{align}
\boxed{
\mat\Omega_{pq}=0.
}
\end{align}
$$

This is the zero-curvature condition for the nonadiabatic coupling connection.

In compact notation, it is often written as

$$
\begin{align}
\boxed{
\operatorname{curl}\F=\F\times\F.
}
\end{align}
$$

This compact notation should be interpreted with care. The right-hand side contains matrix multiplication and therefore matrix commutators. It is not an ordinary scalar vector product.

---

## Interpretation

The ADT equation gives a rule for differentiating $\Cmat$ along each nuclear coordinate. In a multidimensional region, these coordinate directions must be mutually consistent. The curl condition is precisely that consistency condition.

If Eq. $\eqref{eq:curl_condition_derivation}$ is not satisfied, then differentiating first along $p$ and then along $q$ gives a different result from differentiating first along $q$ and then along $p$. In that case, there is no single analytic matrix field $\Cmat(p,q)$ satisfying the ADT equation throughout the region.

If Eq. $\eqref{eq:curl_condition_derivation}$ is satisfied in a regular simply connected region, then the ADT equation is locally integrable and the resulting transformation is path-independent once the boundary condition has been fixed.

---

## Two-state real limit

For two real adiabatic states,

$$
\begin{align}
\mat F_p
=\begin{pmatrix}
0 & F_{12,p}\\
-F_{12,p} & 0
\end{pmatrix},
\qquad
\mat F_q
=\begin{pmatrix}
0 & F_{12,q}\\
-F_{12,q} & 0
\end{pmatrix}.
\end{align}
$$

Both matrices are proportional to the same antisymmetric generator

$$
\begin{align}
\mat J
=\begin{pmatrix}
0 & 1\\
-1 & 0
\end{pmatrix}.
\end{align}
$$

Therefore,

$$
\begin{align}
[\mat F_q,\mat F_p]=0.
\end{align}
$$

The curl condition reduces to

$$
\begin{align}
\pdv{F_{12,q}}{p}
-\pdv{F_{12,p}}{q}
=0.
\end{align}
$$

This is the ordinary curl-free condition for the two-state NACV away from singularities.

Important caveat: this local curl-free condition can hold away from a conical intersection even though a closed loop around the conical intersection gives a nontrivial sign change. The singular point invalidates the regular-region argument.

---
## Exactly closed finite subspace

The derivation above was written as if the retained electronic basis were complete. In practical calculations, however, one usually keeps only a finite set of $M$ adiabatic states. It is therefore useful to show explicitly when the same curl condition remains valid inside the retained subspace.

Let the retained $P$-space be

$$
\begin{align}
P=\operatorname{span}
\left\{
\ket{\psi_1},\ldots,\ket{\psi_M}
\right\}.
\end{align}
$$

The corresponding projection operator is

$$
\begin{align}
\hat P_M
=\sum_{i=1}^{M}
\ket{\psi_i}\bra{\psi_i},
\label{eq:p_projector_curl_derivation}
\end{align}
$$

and the complementary projector is

$$
\begin{align}
\hat Q_M
=\hat I_{\mathrm{el}}-\hat P_M.
\label{eq:q_projector_curl_derivation}
\end{align}
$$

The retained coordinate-resolved NACM is

$$
\begin{align}
(\mat F_\mu^{(P)})_{jk}
=\left\langle
\psi_j
\middle|
\pdv{\psi_k}{R_\mu}
\right\rangle,
\qquad
j,k\le M.
\label{eq:p_space_nacm_definition_curl_derivation}
\end{align}
$$

The reduced ADT equation is

$$
\begin{align}
\pdv{\Cmat_P}{R_\mu}
+\mat F_\mu^{(P)}\Cmat_P
=0.
\label{eq:p_space_adt_curl_derivation}
\end{align}
$$

The question is whether the retained matrices $\mat F_\mu^{(P)}$ satisfy the same curl condition as the full coupling matrices.

---

### Exact closure assumption

The retained $P$-space is exactly closed under nuclear differentiation if the derivative of every retained state has no component in the omitted $Q$-space:

$$
\begin{align}
\hat Q_M
\pdv{\psi_k}{R_\mu}
=0,
\qquad
k\le M.
\label{eq:exact_p_closure_derivative}
\end{align}
$$

Equivalently,

$$
\begin{align}
F_{ak,\mu}
=\left\langle
\psi_a
\middle|
\pdv{\psi_k}{R_\mu}
\right\rangle
=0,
\qquad
a>M,\quad k\le M.
\label{eq:pq_coupling_zero_curl_derivation}
\end{align}
$$

By anti-Hermiticity of the full NACM, this also implies

$$
\begin{align}
F_{ka,\mu}=0,
\qquad
k\le M,\quad a>M.
\end{align}
$$

This assumption is stronger than merely selecting $M$ states. It says that nuclear differentiation does not take the retained manifold outside itself.

Under this condition, the retained subspace behaves as a complete Hilbert space for the purpose of the ADT equation.

---

### Left-hand side of the reduced curl condition

Choose two nuclear coordinates $p$ and $q$. For retained states $j,k\le M$,

$$
\begin{align}
(\mat F_q^{(P)})_{jk}
=\left\langle
\psi_j
\middle|
\pdv{\psi_k}{q}
\right\rangle.
\end{align}
$$

Differentiate with respect to $p$:

$$
\begin{align}
\left(
\pdv{\mat F_q^{(P)}}{p}
\right)_{jk}
&=
\left\langle
\pdv{\psi_j}{p}
\middle|
\pdv{\psi_k}{q}
\right\rangle
+
\left\langle
\psi_j
\middle|
\frac{\partial^2\psi_k}{\partial p\,\partial q}
\right\rangle.
\label{eq:dFp_derivative_q_component}
\end{align}
$$

Similarly,

$$
\begin{align}
\left(
\pdv{\mat F_p^{(P)}}{q}
\right)_{jk}
&=\left\langle
\pdv{\psi_j}{q}
\middle|
\pdv{\psi_k}{p}
\right\rangle
+\left\langle
\psi_j
\middle|
\frac{\partial^2\psi_k}{\partial q\,\partial p}
\right\rangle.
\label{eq:dFq_derivative_p_component}
\end{align}
$$

If the adiabatic states are analytic in the regular region being considered, then the mixed second derivatives commute:

$$
\begin{align}
\frac{\partial^2\psi_k}{\partial p\,\partial q}
=\frac{\partial^2\psi_k}{\partial q\,\partial p}.
\end{align}
$$

Subtracting Eqs. $\eqref{eq:dFp_derivative_q_component}$ and $\eqref{eq:dFq_derivative_p_component}$ therefore gives

$$
\begin{align}
\left(
\pdv{\mat F_q^{(P)}}{p}
-\pdv{\mat F_p^{(P)}}{q}
\right)_{jk}
=\left\langle
\pdv{\psi_j}{p}
\middle|
\pdv{\psi_k}{q}
\right\rangle
-\left\langle
\pdv{\psi_j}{q}
\middle|
\pdv{\psi_k}{p}
\right\rangle.
\label{eq:p_space_curl_lhs_derivation}
\end{align}
$$

This is the left-hand side of the reduced curl condition.

---

### Right-hand side: the commutator

Now evaluate the product

$$
\begin{align}
\left(
\mat F_q^{(P)}\mat F_p^{(P)}
\right)_{jk}
=\sum_{i=1}^{M}
\left\langle
\psi_j
\middle|
\pdv{\psi_i}{q}
\right\rangle
\left\langle
\psi_i
\middle|
\pdv{\psi_k}{p}
\right\rangle.
\label{eq:FqFp_start_derivation}
\end{align}
$$

Using the derivative of orthonormality,

$$
\begin{align}
\pdv{}{q}
\braket{\psi_j}{\psi_i}
=0,
\end{align}
$$

we have

$$
\begin{align}
\left\langle
\psi_j
\middle|
\pdv{\psi_i}{q}
\right\rangle
=-\left\langle
\pdv{\psi_j}{q}
\middle|
\psi_i
\right\rangle.
\label{eq:orthonormality_derivative_identity}
\end{align}
$$

Substituting Eq. $\eqref{eq:orthonormality_derivative_identity}$ into Eq. $\eqref{eq:FqFp_start_derivation}$ gives

$$
\begin{align}
\left(
\mat F_q^{(P)}\mat F_p^{(P)}
\right)_{jk}
&=
-\sum_{i=1}^{M}
\left\langle
\pdv{\psi_j}{q}
\middle|
\psi_i
\right\rangle
\left\langle
\psi_i
\middle|
\pdv{\psi_k}{p}
\right\rangle
\nonumber\\
&=-\left\langle
\pdv{\psi_j}{q}
\middle|
\hat P_M
\middle|
\pdv{\psi_k}{p}
\right\rangle.
\label{eq:FqFp_projector_derivation}
\end{align}
$$

Using

$$
\begin{align}
\hat P_M=\hat I_{\mathrm{el}}-\hat Q_M,
\end{align}
$$

this becomes

$$
\begin{align}
\left(
\mat F_q^{(P)}\mat F_p^{(P)}
\right)_{jk}
=-\left\langle
\pdv{\psi_j}{q}
\middle|
\pdv{\psi_k}{p}
\right\rangle
+\left\langle
\pdv{\psi_j}{q}
\middle|
\hat Q_M
\middle|
\pdv{\psi_k}{p}
\right\rangle.
\label{eq:FqFp_with_Q_derivation}
\end{align}
$$

If the $P$-space is exactly closed, then

$$
\begin{align}
\hat Q_M
\pdv{\psi_k}{p}
=0,
\end{align}
$$

and the $Q$-space term vanishes. Thus

$$
\begin{align}
\left(
\mat F_q^{(P)}\mat F_p^{(P)}
\right)_{jk}
=-\left\langle
\pdv{\psi_j}{q}
\middle|
\pdv{\psi_k}{p}
\right\rangle.
\label{eq:FqFp_closed_derivation}
\end{align}
$$

Repeating the same calculation with $p$ and $q$ interchanged gives

$$
\begin{align}
\left(
\mat F_p^{(P)}\mat F_q^{(P)}
\right)_{jk}
=-\left\langle
\pdv{\psi_j}{p}
\middle|
\pdv{\psi_k}{q}
\right\rangle.
\label{eq:FpFq_closed_derivation}
\end{align}
$$

Therefore

$$
\begin{align}
&\left(
\mat F_q^{(P)}\mat F_p^{(P)}
-\mat F_p^{(P)}\mat F_q^{(P)}
\right)_{jk}
\nonumber\\
&\qquad =\left\langle
\pdv{\psi_j}{p}
\middle|
\pdv{\psi_k}{q}
\right\rangle
-\left\langle
\pdv{\psi_j}{q}
\middle|
\pdv{\psi_k}{p}
\right\rangle.
\label{eq:p_space_commutator_rhs_derivation}
\end{align}
$$

Comparing Eq. $\eqref{eq:p_space_commutator_rhs_derivation}$ with Eq. $\eqref{eq:p_space_curl_lhs_derivation}$ gives

$$
\begin{align}
\left(
\pdv{\mat F_q^{(P)}}{p}
-\pdv{\mat F_p^{(P)}}{q}
\right)_{jk}
=\left(
\mat F_q^{(P)}\mat F_p^{(P)}
-\mat F_p^{(P)}\mat F_q^{(P)}
\right)_{jk}.
\end{align}
$$

Since this holds for all retained-state indices $j,k\le M$,

$$
\begin{align}
\boxed{
\pdv{\mat F_q^{(P)}}{p}
-\pdv{\mat F_p^{(P)}}{q}
=\mat F_q^{(P)}\mat F_p^{(P)}
-\mat F_p^{(P)}\mat F_q^{(P)}.
}
\label{eq:p_space_curl_condition_derivation}
\end{align}
$$

This is the curl condition in an exactly closed finite subspace.

---

### Interpretation

The derivation shows why exact subspace closure is the finite-dimensional analogue of completeness. If the derivatives of the retained states remain inside the retained subspace, then the $P$-space projector acts like the identity on those derivatives. The same cancellation that occurs in the full Hilbert space then occurs inside $P$, and the retained NACM satisfies the same curl condition.

If the $P$-space is not exactly closed, the $Q$-space terms in Eq. $\eqref{eq:FqFp_with_Q_derivation}$ do not vanish. Those terms are the source of the reduced-space curl defect. They are not analysed here because this page is concerned only with the exactly closed case. The size and consequences of the omitted-state terms are treated in [Reduced sub-Hilbert-space errors](derivation_reduced_subhilbert_space_errors.md).


## Summary

Starting from

$$
\begin{align}
\pdv{\Cmat}{R_\mu}
+\mat F_\mu\Cmat
=0,
\end{align}
$$

the requirement that mixed derivatives of $\Cmat$ commute gives

$$
\begin{align}
\pdv{\mat F_q}{p}
-\pdv{\mat F_p}{q}
=\mat F_q\mat F_p-\mat F_p\mat F_q.
\end{align}
$$

This is the curl condition. It is the local integrability condition for the ADT equation. In a regular simply connected region, it ensures that the ADT matrix is locally analytic and path-independent once the boundary condition is fixed. In regions containing singularities, the local argument no longer guarantees global single-valuedness; closed-loop topology must then be analysed separately. 