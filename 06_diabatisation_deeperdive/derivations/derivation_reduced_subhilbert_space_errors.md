# Derivation of reduced sub-Hilbert-space ADT errors

## Purpose

This derivation shows why a reduced electronic subspace can still support a controlled ADT equation when the coupling to omitted states is weak.

The key result is that if the coupling between the retained $P$-space and the omitted $Q$-space is

$$
\begin{align}
O(\epsilon),
\end{align}
$$

then the feedback of the omitted states into the retained ADT equation is

$$
\begin{align}
O(\epsilon^2).
\end{align}
$$

The same order appears in the reduced curl condition and in the reduced diabatic potential matrix.

---

## Starting point: full ADT equation along a path

The full ADT equation is

$$
\begin{align}
\nabla_{\mat q}\Cmat+\F\Cmat=0.
\label{eq:full_adt_reduced_error_start}
\end{align}
$$

Along a specified path parameter $s$, this becomes

$$
\begin{align}
\frac{d\Cmat}{ds}
+\mat F(s)\Cmat(s)
=0,
\label{eq:path_adt_reduced_error}
\end{align}
$$

where

$$
\begin{align}
\mat F(s)
=\F(\mat q(s))\cdot \frac{d\mat q}{ds}.
\end{align}
$$

Equivalently, the integral form is

$$
\begin{align}
\Cmat(s)
=\Cmat(s_0)
-\int_{s_0}^{s}
ds'\,
\mat F(s')
\Cmat(s').
\label{eq:line_integral_adt_reduced_error}
\end{align}
$$

This equation is exact in the complete electronic Hilbert space.

---

## Warm-up: two retained states plus one omitted state

First consider the simplest useful case. Suppose states $1$ and $2$ are retained, while state $3$ is omitted. Thus the retained $P$-space has dimension $M=2$, and the omitted $Q$-space has dimension $L=1$.

For columns $j=1,2$, the full integral equation is

$$
\begin{align}
C_{ij}(s)
=C_{ij}(s_0)
-\sum_{k=1}^{3}
\int_{s_0}^{s}
ds'\,
F_{ik}(s')C_{kj}(s'),
\qquad
i=1,2,3.
\label{eq:three_state_integral_equation}
\end{align}
$$

Set $i=3$. Then

$$
\begin{align}
C_{3j}(s)
&=C_{3j}(s_0)
-\int_{s_0}^{s}
ds'\,
F_{31}(s')C_{1j}(s')
\nonumber\\
&\quad
-\int_{s_0}^{s}
ds'\,
F_{32}(s')C_{2j}(s')
-\int_{s_0}^{s}
ds'\,
F_{33}(s')C_{3j}(s').
\end{align}
$$

For real adiabatic electronic states, the diagonal nonadiabatic coupling vanishes,

$$
\begin{align}
F_{33}=0.
\end{align}
$$

With the natural initial condition that the diabatic and adiabatic representations coincide at the reference geometry $s_0$ (i.e., the ADT matrix is the identity, $\mathbf{C}(s_0) = \mathbf{I}$), the initial mixing between the retained and omitted manifolds is strictly zero:
$$
\begin{align}
C_{3j}(s_0)=0,
\qquad j=1,2,
\end{align}
$$

Substituting this into the integral equation, we obtain

$$\begin{align}
C_{3j}(s)
=-\int_{s_0}^{s}
ds'\,
\left[
F_{31}(s')C_{1j}(s')
+F_{32}(s')C_{2j}(s')
\right].
\label{eq:c3j_first_order_solution}
\end{align}$$

Now assume that the omitted state is weakly coupled to the retained states:

$$\begin{align}
F_{31},F_{32},F_{13},F_{23}=O(\epsilon).
\label{eq:three_state_weak_coupling}
\end{align}$$

Because the ADT matrix is unitary (or orthogonal for real states), its individual elements are strictly bounded in magnitude, $|C_{ij}(s)| \le 1$. Consequently, the coefficients $C_{1j}(s')$ and $C_{2j}(s')$ in Equation $\eqref{eq:c3j_first_order_solution}$ act only as bounded modulators. Since the integrand consists of a finite sum of $O(\epsilon)$ coupling terms multiplied by bounded $O(1)$ coefficients, the total integrand is strictly $O(\epsilon)$. Integrating this uniformly bounded quantity over a finite path length $\Delta s = s - s_0$ yields an accumulated value proportional to $\Delta s \cdot O(\epsilon)$. Therefore, the leakage into the omitted state scales linearly with the weak coupling,

$$\begin{align}
C_{3j}(s)=O(\epsilon).
\label{eq:c3j_order_epsilon}
\end{align}$$

Now examine the retained block. For $i=1,2$ and $j=1,2$,

$$
\begin{align}
C_{ij}(s)
&=C_{ij}(s_0)
-\int_{s_0}^{s}
ds'\,
\left[
F_{i1}C_{1j}
+F_{i2}C_{2j}
+F_{i3}C_{3j}
\right]_{s'}.
\label{eq:retained_block_three_state_integral}
\end{align}
$$

The omitted-state feedback term is

$$
\begin{align}
I_{ij}(s)
=\int_{s_0}^{s}
ds'\,
F_{i3}(s')C_{3j}(s').
\label{eq:three_state_feedback_term}
\end{align}
$$

Using

$$
\begin{align}
F_{i3}=O(\epsilon),
\qquad
C_{3j}=O(\epsilon),
\end{align}
$$

we find

$$
\begin{align}
I_{ij}(s)=O(\epsilon^2).
\label{eq:three_state_feedback_order}
\end{align}
$$

Thus

$$
\begin{align}
C_{ij}(s)
=C_{ij}(s_0)
-\int_{s_0}^{s}
ds'\,
\left[
F_{i1}C_{1j}
+F_{i2}C_{2j}
\right]_{s'}
+
O(\epsilon^2).
\label{eq:three_state_reduced_result}
\end{align}
$$

This is the essential result in its simplest form. If coupling to the omitted state is $O(\epsilon)$, then the error introduced into the retained ADT equation is $O(\epsilon^2)$.

> bounded: Because $\mathbf{C}(s)$ is an orthogonal (or unitary) matrix, the sum of the squares of the elements in any row or column must equal 1. Therefore, no single element can ever have an absolute value greater than 1 ($|C_{ij}(s)| \le 1$). They cannot blow up to infinity or scale as $1/\epsilon$. When you multiply an $O(\epsilon)$ term (the coupling $F$) by a strictly bounded $O(1)$ term (the matrix element $C$), the product remains $O(\epsilon)$.

> Why $O(\epsilon) + O(\epsilon) = O(\epsilon)$: In asymptotic Big-O notation, scalar multipliers are absorbed. A finite sum of terms that scale linearly with $\epsilon$ still scales linearly with $\epsilon$. When you integrate this $O(\epsilon)$ integrand over a finite path length ($\Delta s = s - s_0$), the result is proportional to $\Delta s \cdot O(\epsilon)$, which remains formally $O(\epsilon)$ with respect to the coupling strength.
---

## General block partition

Now consider the general case. Let the total electronic space be partitioned into a retained $P$-space of dimension $M$ and an omitted $Q$-space of dimension $L$, so that

$$
\begin{align}
N=M+L.
\end{align}
$$

Write the full nonadiabatic coupling matrix in block form:

$$
\begin{align}
\mat F
=\begin{pmatrix}
\mat F^{(P)}
&\mat F^{(P,Q)}
\\[3pt]
\mat F^{(Q,P)}
&
\mat F^{(Q)}
\end{pmatrix}.
\label{eq:block_f_reduced_error}
\end{align}
$$

Here

$$
\begin{array}{ccl}
\mat F^{(P)} &:& M\times M \text{ retained block},\\
\mat F^{(Q)} &:& L\times L \text{ omitted block},\\
\mat F^{(P,Q)} &:& M\times L \text{ coupling from } Q \text{ columns to } P \text{ rows},\\
\mat F^{(Q,P)} &:& L\times M \text{ coupling from } P \text{ columns to } Q \text{ rows}.
\end{array}
$$

And the full ADT matrix

$$
\begin{equation}
\Cmat = \begin{pmatrix} \Cmat^{(M)} & \Cmat^{(M,L)} \\ \Cmat^{(L,M)} & \Cmat^{(L)} 
\end{pmatrix} \label{eq:cmatblock_partition}
\end{equation}
$$


For the columns belonging to the retained manifold, write the corresponding part of the ADT matrix as

$$
\begin{align}
\begin{pmatrix}
\Cmat^{(P)}
\\
\Cmat^{(Q,P)}
\end{pmatrix}.
\end{align}
$$

Here $\Cmat^{(P)}$ is the retained $M\times M$ block, while $\Cmat^{(Q,P)}$ is the $L\times M$ block measuring leakage into the omitted space.

To see how the block form of the path ADT equation is derived, we start with the full path ADT equation for the retained columns:

$$\frac{d}{ds} \begin{pmatrix} \mathbf{C}^{(P)} \\ \mathbf{C}^{(Q,P)} \end{pmatrix} + \mathbf{F} \begin{pmatrix} \mathbf{C}^{(P)} \\ \mathbf{C}^{(Q,P)} \end{pmatrix} = \begin{pmatrix} \mathbf{0} \\ \mathbf{0} \end{pmatrix}$$

Substituting the partitioned form of $\mathbf{F}$, we carry out the block matrix multiplication:

$$\frac{d}{ds} \begin{pmatrix} \mathbf{C}^{(P)} \\ \mathbf{C}^{(Q,P)} \end{pmatrix} + \begin{pmatrix} \mathbf{F}^{(P)} & \mathbf{F}^{(P,Q)} \\ \mathbf{F}^{(Q,P)} & \mathbf{F}^{(Q)} \end{pmatrix} \begin{pmatrix} \mathbf{C}^{(P)} \\ \mathbf{C}^{(Q,P)} \end{pmatrix} = \begin{pmatrix} \mathbf{0} \\ \mathbf{0} \end{pmatrix}$$

Evaluating the product yields a single block-column vector:

$$\begin{pmatrix} \frac{d\mathbf{C}^{(P)}}{ds} \\ \frac{d\mathbf{C}^{(Q,P)}}{ds} \end{pmatrix} + \begin{pmatrix} \mathbf{F}^{(P)}\mathbf{C}^{(P)} + \mathbf{F}^{(P,Q)}\mathbf{C}^{(Q,P)} \\ \mathbf{F}^{(Q,P)}\mathbf{C}^{(P)} + \mathbf{F}^{(Q)}\mathbf{C}^{(Q,P)} \end{pmatrix} = \begin{pmatrix} \mathbf{0} \\ \mathbf{0} \end{pmatrix}$$

Separating this into the upper ($M$-dimensional) and lower ($L$-dimensional) components directly yields the block forms of the path ADT equation:

$$
\begin{align}
\frac{d\Cmat^{(P)}}{ds}
+\mat F^{(P)}\Cmat^{(P)}
+\mat F^{(P,Q)}\Cmat^{(Q,P)}
&=
0,
\label{eq:p_block_adt_reduced_error}
\\
\frac{d\Cmat^{(Q,P)}}{ds}
+
\mat F^{(Q,P)}\Cmat^{(P)}
+
\mat F^{(Q)}\Cmat^{(Q,P)}
&=
0.
\label{eq:q_block_adt_reduced_error}
\end{align}
$$

Equation $\eqref{eq:p_block_adt_reduced_error}$ shows that the retained block is driven not only by $\mat F^{(P)}$, but also by the leakage block $\Cmat^{(Q,P)}$. Equation $\eqref{eq:q_block_adt_reduced_error}$ shows that this leakage is generated by the cross-block coupling $\mat F^{(Q,P)}$.

Notice that the coupling term driving the upper block in Equation \ref{eq:p_block_adt_reduced_error}, which is $\mathbf{F}^{(P)}\mathbf{C}^{(P)} + \mathbf{F}^{(P,Q)}\mathbf{C}^{(Q,P)}$, is exactly equivalent to computing the $(P,P)$ block of the full matrix product $\mathbf{FC}$. By definition of block matrix multiplication, finding the $(P,P)$ block of $\mathbf{FC}$ requires taking the inner product of the $P$-th block-row of $\mathbf{F}$ with the $P$-th block-column of $\mathbf{C}$, which gives precisely this two-term sum.

---

## Solving the leakage block

Rearrange Eq. $\eqref{eq:q_block_adt_reduced_error}$ as

$$
\begin{align}
\frac{d\Cmat^{(Q,P)}}{ds}
+\mat F^{(Q)}\Cmat^{(Q,P)}
=-\mat F^{(Q,P)}\Cmat^{(P)}.
\label{eq:q_leakage_inhomogeneous_equation}
\end{align}
$$

Define the propagator in the omitted $Q$-space by

$$
\begin{align}
\frac{d\mat U_Q(s,s_0)}{ds}
+\mat F^{(Q)}(s)\mat U_Q(s,s_0)
=0,
\qquad
\mat U_Q(s_0,s_0)=\mat I_Q.
\label{eq:q_space_propagator_definition}
\end{align}
$$

To find the derivative of the inverse propagator, $\mathbf{U}_Q^{-1}(s,s_0)$, we start with the identity relation:

$$\mathbf{U}_Q^{-1}\mathbf{U}_Q = \mathbf{I}$$

Differentiating both sides with respect to $s$ using the product rule gives:

$$\frac{d\mathbf{U}_Q^{-1}}{ds}\mathbf{U}_Q + \mathbf{U}_Q^{-1}\frac{d\mathbf{U}_Q}{ds} = 0$$

Rearranging Equation \eqref{eq:q_space_propagator_definition} gives $\frac{d\mathbf{U}_Q}{ds} = -\mathbf{F}^{(Q)}\mathbf{U}_Q$. Substituting this into our differentiated identity yields:

$$\frac{d\mathbf{U}_Q^{-1}}{ds}\mathbf{U}_Q - \mathbf{U}_Q^{-1}\mathbf{F}^{(Q)}\mathbf{U}_Q = 0$$

Finally, moving the second term to the right-hand side and right-multiplying by $\mathbf{U}_Q^{-1}$ isolates the derivative of the inverse:

$$\frac{d\mathbf{U}_Q^{-1}}{ds} = \mathbf{U}_Q^{-1}\mathbf{F}^{(Q)}$$

Formally,

$$
\begin{align}
\mat U_Q(s,s_0)
=\mathcal P
\exp
\left[
-\int_{s_0}^{s}
ds'\,
\mat F^{(Q)}(s')
\right].
\label{eq:q_space_propagator_formal}
\end{align}
$$

Because $\mat F^{(Q)}$ is anti-Hermitian, $\mat U_Q$ is unitary. Therefore it is bounded in norm along a finite path.

Using the integrating-factor method,

$$
\begin{align}
\frac{d}{ds} \left[ \mathbf{U}_Q^{-1}(s,s_0) \mathbf{C}^{(Q,P)}(s) \right] 
&= \frac{d \mathbf{U}_Q^{-1}(s,s_0)}{ds}\mathbf{C}^{(Q,P)}(s) + \mathbf{U}_Q^{-1}(s,s_0)\frac{d \mathbf{C}^{(Q,P)}(s)}{ds} \\
&= \mathbf{U}_Q^{-1}(s,s_0) \mathbf{F}^{(Q)}(s)\mathbf{C}^{(Q,P)}(s) + \mathbf{U}_Q^{-1}(s,s_0)\frac{d \mathbf{C}^{(Q,P)}(s)}{ds} \\
&= \mathbf{U}_Q^{-1}(s,s_0) \left[ \mathbf{F}^{(Q)}(s)\mathbf{C}^{(Q,P)}(s) + \frac{d \mathbf{C}^{(Q,P)}(s)}{ds} \right] \\
&= -\mathbf{U}_Q^{-1}(s,s_0) \mathbf{F}^{(Q,P)}(s) \mathbf{C}^{(P)}(s).\label{eq:intgrat_trick}
\end{align}
$$

where Equation $\eqref{eq:q_leakage_inhomogeneous_equation}$ was used to simplify the last line.


Integrating from $s_0$ to $s$ gives

$$\begin{align}
\int_{s_0}^{s} ds'\, \frac{d}{ds'} \left[ \mathbf{U}_Q^{-1}(s',s_0) \mathbf{C}^{(Q,P)}(s') \right] &= -\int_{s_0}^{s} ds'\, \mathbf{U}_Q^{-1}(s',s_0) \mathbf{F}^{(Q,P)}(s') \mathbf{C}^{(P)}(s') \\
\left[ \mathbf{U}_Q^{-1}(s',s_0) \mathbf{C}^{(Q,P)}(s') \right]_{s_0}^{s} &= -\int_{s_0}^{s} ds'\, \mathbf{U}_Q^{-1}(s',s_0) \mathbf{F}^{(Q,P)}(s') \mathbf{C}^{(P)}(s')
\end{align}$$

Evaluating the boundaries on the left side yields:
$$\begin{align}
\mathbf{U}_Q^{-1}(s,s_0)\mathbf{C}^{(Q,P)}(s) - \mathbf{U}_Q^{-1}(s_0,s_0)\mathbf{C}^{(Q,P)}(s_0) = -\int_{s_0}^{s} ds'\, \mathbf{U}_Q^{-1}(s',s_0) \mathbf{F}^{(Q,P)}(s') \mathbf{C}^{(P)}(s')
\end{align}$$

Since the propagator at the initial time is the identity matrix ($\mathbf{U}_Q^{-1}(s_0,s_0) = \mathbf{I}$), this simplifies to:


$$
\begin{align}
\mat U_Q^{-1}(s,s_0)\Cmat^{(Q,P)}(s)
-\Cmat^{(Q,P)}(s_0)
=-\int_{s_0}^{s}
ds'\,
\mat U_Q^{-1}(s',s_0)
\mat F^{(Q,P)}(s')
\Cmat^{(P)}(s').
\end{align}
$$

Choose the initial condition

$$
\begin{align}
\Cmat^{(Q,P)}(s_0)=0.
\end{align}
$$

This means that at the reference point the ADT columns associated with the retained manifold are initially chosen to lie inside the retained subspace.

Multiplying by $\mat U_Q(s,s_0)$ gives

$$
\begin{align}
\Cmat^{(Q,P)}(s)
=-\mat U_Q(s,s_0)
\int_{s_0}^{s}
ds'\,
\mat U_Q^{-1}(s',s_0)
\mat F^{(Q,P)}(s')
\Cmat^{(P)}(s').
\label{eq:leakage_block_formal_solution}
\end{align}
$$

Now assume

$$
\begin{align}
\mat F^{(Q,P)}=O(\epsilon).
\label{eq:q_p_cross_block_scaling}
\end{align}
$$

Since $\mat U_Q$, $\mat U_Q^{-1}$, and $\Cmat^{(P)}$ are bounded over a finite path, Eq. $\eqref{eq:leakage_block_formal_solution}$ gives

$$
\begin{align}
\Cmat^{(Q,P)}(s)=O(\epsilon).
\label{eq:leakage_block_order}
\end{align}
$$

Thus the leakage into the omitted block is first order in the cross-block coupling.

---

## Feedback into the retained block

Return to the retained-block equation,

$$
\begin{align}
\frac{d\Cmat^{(P)}}{ds}
+\mat F^{(P)}\Cmat^{(P)}
+\mat F^{(P,Q)}\Cmat^{(Q,P)}=0.
\end{align}
$$

The omitted-state feedback term is

$$
\begin{align}
\mat R(s)
=\mat F^{(P,Q)}(s)\Cmat^{(Q,P)}(s).
\label{eq:feedback_term_definition}
\end{align}
$$

Assume also

$$
\begin{align}
\mat F^{(P,Q)}=O(\epsilon).
\label{eq:p_q_cross_block_scaling}
\end{align}
$$

Using Eq. $\eqref{eq:leakage_block_order}$,

$$
\begin{align}
\mat R(s)
=O(\epsilon)\,O(\epsilon)
=O(\epsilon^2).
\label{eq:feedback_term_order}
\end{align}
$$

Therefore the retained-block equation becomes

$$
\begin{align}
\frac{d\Cmat^{(P)}}{ds}
+\mat F^{(P)}\Cmat^{(P)}
=O(\epsilon^2).
\label{eq:p_block_adt_with_second_order_error}
\end{align}
$$

Equivalently, in integral form,

$$
\begin{align}
\Cmat^{(P)}(s)
=\Cmat^{(P)}(s_0)
-\int_{s_0}^{s}
ds'\,
\mat F^{(P)}(s')\Cmat^{(P)}(s')
+O(\epsilon^2).
\label{eq:p_block_integral_second_order_error}
\end{align}
$$

Note that integrating the $O(\epsilon^2)$ error term over the path yields an accumulated error of $\int_{s_0}^{s} O(\epsilon^2) ds' \propto (s - s_0) O(\epsilon^2)$. Provided the integration path length $\Delta s = s - s_0$ is finite, the accumulated leakage error remains strictly second-order in the weak coupling parameter $\epsilon$.

This is the general version of the three-state result.

The reduced ADT equation,

$$
\begin{align}
\frac{d\Cmat^{(P)}}{ds}
+\mat F^{(P)}\Cmat^{(P)}
=0,
\label{eq:reduced_adt_equation_derivation}
\end{align}
$$

therefore neglects a second-order term in the weak $P$--$Q$ coupling.

---

## Reduced curl condition

The complete-space curl condition for two coordinates $q_p$ and $q_q$ is

$$
\begin{align}
\pdv{\mat F_q}{q_p}
-\pdv{\mat F_p}{q_q}
=[
\mat F_q,\mat F_p
].
\label{eq:full_curl_condition_reduced_derivation}
\end{align}
$$

Now write the coordinate-resolved matrices in block form:

$$
\begin{align}
\mat F_x
=\begin{pmatrix}
\mat F_x^{(P)}
&
\mat F_x^{(P,Q)}
\\[3pt]
\mat F_x^{(Q,P)}
&
\mat F_x^{(Q)}
\end{pmatrix},
\qquad
x=p,q.
\label{eq:block_coordinate_matrices_reduced_derivation}
\end{align}
$$

Taking the $P$-block of the left-hand side gives

$$
\begin{align}
\left(
\pdv{\mat F_q}{q_p}
-\pdv{\mat F_p}{q_q}
\right)^{(P)}
=\pdv{\mat F_q^{(P)}}{q_p}
-\pdv{\mat F_p^{(P)}}{q_q}.
\end{align}
$$

Taking the $P$-block of the commutator gives

$$
\begin{align}
[
\mat F_q,\mat F_p
]^{(P)}
&=\left(
\mat F_q\mat F_p-\mat F_p\mat F_q
\right)^{(P)}
\nonumber\\
&=\mat F_q^{(P)}\mat F_p^{(P)}
+\mat F_q^{(P,Q)}\mat F_p^{(Q,P)}
\nonumber\\
&\quad
-\mat F_p^{(P)}\mat F_q^{(P)}
-\mat F_p^{(P,Q)}\mat F_q^{(Q,P)}
\nonumber\\
&=[
\mat F_q^{(P)},\mat F_p^{(P)}
]
+\mat F_q^{(P,Q)}\mat F_p^{(Q,P)}
-\mat F_p^{(P,Q)}\mat F_q^{(Q,P)}.
\label{eq:p_block_commutator_reduced_derivation}
\end{align}
$$

Substituting into the full curl condition gives

$$
\begin{align}
\pdv{\mat F_q^{(P)}}{q_p}
-\pdv{\mat F_p^{(P)}}{q_q}
&=[
\mat F_q^{(P)},\mat F_p^{(P)}
]\nonumber\\
&\quad
+\mat F_q^{(P,Q)}\mat F_p^{(Q,P)}
-\mat F_p^{(P,Q)}\mat F_q^{(Q,P)}.
\label{eq:p_block_curl_exact_projected}
\end{align}
$$

If

$$
\begin{align}
\mat F_p^{(P,Q)},\mat F_q^{(P,Q)},\mat F_p^{(Q,P)},\mat F_q^{(Q,P)}
=O(\epsilon),
\end{align}
$$

then the extra terms are $O(\epsilon^2)$. Therefore

$$
\begin{align}
\pdv{\mat F_q^{(P)}}{q_p}
-\pdv{\mat F_p^{(P)}}{q_q}
=[
\mat F_q^{(P)},\mat F_p^{(P)}
]+O(\epsilon^2).
\label{eq:p_block_curl_second_order_result}
\end{align}
$$

This is the reduced-subspace curl condition. The projected $P$-space connection satisfies the exact curl condition only when the $P$--$Q$ coupling vanishes. If the coupling is weak, the violation is second order.

---

## Reduced diabatic potential matrix

The full diabatic potential matrix is

$$
\begin{align}
\W
=\Cmat^\dagger\V\Cmat.
\end{align}
$$

Focus on the retained columns. With the block notation used above, the retained block obtained from the full transformation contains two contributions:

$$
\begin{align}
\W^{(P)}_{\mathrm{full}}
=\left(\Cmat^{(P)}\right)^\dagger
\V^{(P)}
\Cmat^{(P)}
+\left(\Cmat^{(Q,P)}\right)^\dagger
\V^{(Q)}
\Cmat^{(Q,P)}.
\label{eq:full_w_p_block_with_q_contribution}
\end{align}
$$

Here $\V$ is diagonal in the full adiabatic basis and has been partitioned as

$$
\begin{align}
\V
=\begin{pmatrix}
\V^{(P)} & 0\\
0 & \V^{(Q)}
\end{pmatrix}.
\end{align}
$$

From Eq. $\eqref{eq:leakage_block_order}$,

$$
\begin{align}
\Cmat^{(Q,P)}=O(\epsilon).
\end{align}
$$

Therefore the explicit omitted-block contribution to Eq. $\eqref{eq:full_w_p_block_with_q_contribution}$ is

$$
\begin{align}
\left(\Cmat^{(Q,P)}\right)^\dagger
\V^{(Q)}
\Cmat^{(Q,P)}
=O(\epsilon^2),
\end{align}
$$

provided the omitted adiabatic potentials remain bounded over the region considered.

The retained block $\Cmat^{(P)}$ itself differs from the reduced-subspace solution only at $O(\epsilon^2)$, as shown above. Therefore the reduced diabatic potential matrix

$$
\begin{align}
\W^{(P)}_{\mathrm{red}}
=\left(\Cmat_{\mathrm{red}}^{(P)}\right)^\dagger
\V^{(P)}
\Cmat_{\mathrm{red}}^{(P)}
\label{eq:reduced_w_definition_derivation}
\end{align}
$$

satisfies

$$
\begin{align}
\W^{(P)}_{\mathrm{full}}
=\W^{(P)}_{\mathrm{red}}
+O(\epsilon^2).
\label{eq:w_reduced_second_order_result}
\end{align}
$$

This is the potential-matrix analogue of the reduced ADT result.

---

## Interpretation

The derivation has three linked conclusions.

First, the leakage of the retained ADT columns into the omitted subspace is first order in the weak cross-block coupling:

$$
\begin{align}
\Cmat^{(Q,P)}=O(\epsilon).
\end{align}
$$

Second, the feedback of that leakage into the retained ADT block is second order:

$$
\begin{align}
\frac{d\Cmat^{(P)}}{ds}
+\mat F^{(P)}\Cmat^{(P)}
=O(\epsilon^2).
\end{align}
$$

Third, the reduced curl condition and the reduced diabatic potential matrix are also correct only up to the same order:

$$
\begin{align}
\pdv{\mat F_q^{(P)}}{q_p}
-\pdv{\mat F_p^{(P)}}{q_q}
=[
\mat F_q^{(P)},\mat F_p^{(P)}
]
+O(\epsilon^2),
\end{align}
$$

and

$$
\begin{align}
\W^{(P)}_{\mathrm{full}}
=\W^{(P)}_{\mathrm{red}}
+O(\epsilon^2).
\end{align}
$$

This is why a reduced electronic subspace can be useful even though it is not the complete Hilbert space. The approximation is controlled when the cross-block nonadiabatic coupling is small over the region of nuclear configuration space being sampled.

---

## Connection to residual coupling

The result also explains the origin of residual coupling in a finite-state diabatisation. The reduced ADT equation removes the coupling inside the retained $P$-space, but it cannot fully represent the effect of omitted states unless the $P$--$Q$ coupling is negligible.

In the language of transformed connections,

$$
\begin{align}
\F^{\mathrm{res}}
=\Cmat^{-1}\F\Cmat+\Cmat^{-1}\nabla\Cmat.
\end{align}
$$

A reduced transformation removes only the part represented in the retained subspace. Coupling through omitted states appears as a residual or non-removable contribution. If the omitted-state coupling is $O(\epsilon)$, its feedback into the retained block is $O(\epsilon^2)$.

Thus, the reduced-subspace derivation and the residual-coupling discussion describe the same physical limitation from two directions.

---

## Final result

If the retained $P$-space is weakly coupled to the omitted $Q$-space,

$$
\begin{align}
\F^{(P,Q)},\F^{(Q,P)}=O(\epsilon),
\end{align}
$$

then the reduced ADT equation

$$
\begin{align}
\nabla \Cmat^{(P)}+\F^{(P)}\Cmat^{(P)}=0
\end{align}
$$

is accurate up to

$$
\begin{align}
O(\epsilon^2).
\end{align}
$$

The reduced curl condition and reduced diabatic potential matrix are also valid up to $O(\epsilon^2)$ under the same assumptions.

This is Baer’s finite sub-Hilbert-space result in practical form: a finite set of electronic states can define a useful quasi-diabatic representation only when it behaves as an effectively closed subspace over the region of nuclear configuration space relevant to the dynamics.

---

## References

This derivation follows Baer’s reduced sub-Hilbert-space analysis of the ADT equation, the projected curl condition, and the error induced by weak coupling to omitted electronic states [@baer_2002_nact; @baer_2000_topological_effects]. It is also closely connected to the finite-subspace Born--Oppenheimer and group Born--Oppenheimer discussion in these notes.