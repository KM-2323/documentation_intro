## Dimension of a general $M$-state degeneracy

For a two-state conical intersection, the familiar seam dimension is $f-2$, where $f$ is the number of nuclear degrees of freedom in the coordinate representation being used. This follows from the two independent scalar conditions required for a two-state degeneracy,

$$
\begin{align}
\Delta(\mat q)=0,
\qquad
W_{12}(\mat q)=0.
\end{align}
$$

These conditions state that the two diagonal diabatic energies must be equal and that the off-diagonal diabatic coupling must vanish. If the gradients of these two conditions are independent, their simultaneous solution defines an $(f-2)$-dimensional seam. This is the standard two-state result discussed in [Conical intersections](../beginer/04_conical_intersections.md) and [Conical intersections: intermediate](int02_conical_intersections.md).

For an $M$-state degeneracy, the same idea applies, but the number of independent scalar conditions is larger. The simplest way to see the counting is to first examine the three-state case explicitly.

Throughout this section, assume a real symmetric diabatic Hamiltonian matrix. This is appropriate for the usual non-relativistic, same-spin-multiplicity case with real electronic wavefunctions. If complex Hermitian matrices are required, for example in the presence of spin-orbit coupling or magnetic fields, the counting changes. This caveat is discussed at the end of the section.

---

### Three-state model

Consider a real three-state diabatic potential matrix

$$
\begin{align}
\mat W
=
\begin{pmatrix}
W_{11} & W_{12} & W_{13} \\
W_{12} & W_{22} & W_{23}\\
W_{13} & W_{23} & W_{33}
\end{pmatrix}.
\label{eq:three_state_real_symmetric_matrix}
\end{align}
$$

The characteristic polynomial, written as

$$
\begin{align}
P(E)=\det(\mat W-E\mat I_3),
\end{align}
$$

is

$$
\begin{align}
P(E)
={}&
- E^{3}
+ E^{2}
\left(
W_{11}+W_{22}+W_{33}
\right)
\nonumber\\
&+
E
\left(
- W_{11}W_{22}
- W_{11}W_{33}
- W_{22}W_{33}
+ W_{12}^{2}
+ W_{13}^{2}
+ W_{23}^{2}
\right)
\nonumber\\
&+
W_{11}W_{22}W_{33}
- W_{11}W_{23}^{2}
- W_{22}W_{13}^{2}
- W_{33}W_{12}^{2}
+ 2W_{12}W_{13}W_{23}.
\label{eq:three_state_char_poly_symmetric}
\end{align}
$$

A three-fold degeneracy at a geometry $\mat q_{\mathrm{CI}}$ means that all three eigenvalues collapse to the same energy,

$$
\begin{align}
E_1=E_2=E_3=E^\times .
\end{align}
$$

Therefore the characteristic polynomial must have the form

$$
\begin{align}
P(E)
&=
-(E-E^\times)^3
\nonumber\\
&=
-E^3
+3E^\times E^2
-3(E^\times)^2E
+(E^\times)^3.
\label{eq:three_state_target_poly}
\end{align}
$$

Matching the coefficient of $E^2$ in Eqs. \eqref{eq:three_state_char_poly_symmetric} and \eqref{eq:three_state_target_poly} gives the trace condition

$$
\begin{align}
3E^\times
=
W_{11}+W_{22}+W_{33},
\end{align}
$$

or

$$
\begin{align}
E^\times
=
\frac{1}{3}
\left(
W_{11}+W_{22}+W_{33}
\right).
\label{eq:three_state_trace_condition}
\end{align}
$$

This equation does not by itself impose a degeneracy. It only states that, if a three-fold degeneracy exists, the common degenerate energy is the average of the three diagonal matrix elements. In other words, the trace fixes the common energy level, not the splitting.

Matching the coefficient of $E$ gives

$$
\begin{align}
-3(E^\times)^2
=
- W_{11}W_{22}
- W_{11}W_{33}
- W_{22}W_{33}
+ W_{12}^{2}
+ W_{13}^{2}
+ W_{23}^{2}.
\label{eq:three_state_minor_condition}
\end{align}
$$

Substituting Eq. \eqref{eq:three_state_trace_condition} into Eq. \eqref{eq:three_state_minor_condition}, and multiplying by $-1$, gives

$$
\begin{align}
3
\left[
\frac{1}{3}
\left(
W_{11}+W_{22}+W_{33}
\right)
\right]^2
=
W_{11}W_{22}
+
W_{11}W_{33}
+
W_{22}W_{33}
-
W_{12}^{2}
-
W_{13}^{2}
-
W_{23}^{2}.
\end{align}
$$

Expanding the square on the left-hand side gives

$$
\begin{align}
\frac{1}{3}
\left(
W_{11}^{2}
+
W_{22}^{2}
+
W_{33}^{2}
+
2W_{11}W_{22}
+
2W_{11}W_{33}
+
2W_{22}W_{33}
\right)
&=
W_{11}W_{22}
+
W_{11}W_{33}
+
W_{22}W_{33}
\nonumber\\
&\quad
-
W_{12}^{2}
-
W_{13}^{2}
-
W_{23}^{2}.
\end{align}
$$

Multiplying by $3$ and bringing all terms to the left-hand side gives

$$
\begin{align}
W_{11}^{2}
+
W_{22}^{2}
+
W_{33}^{2}
-
W_{11}W_{22}
-
W_{11}W_{33}
-
W_{22}W_{33}
+
3W_{12}^{2}
+
3W_{13}^{2}
+
3W_{23}^{2}
=0.
\end{align}
$$

Multiplying by $2$ makes the diagonal part a sum of squared differences:

$$
\begin{align}
&
2W_{11}^{2}
+
2W_{22}^{2}
+
2W_{33}^{2}
-
2W_{11}W_{22}
-
2W_{11}W_{33}
-
2W_{22}W_{33}
+
6W_{12}^{2}
+
6W_{13}^{2}
+
6W_{23}^{2}
=0.
\end{align}
$$

Equivalently,

$$
\begin{align}
&
\left(W_{11}-W_{22}\right)^2
+
\left(W_{22}-W_{33}\right)^2
+
\left(W_{33}-W_{11}\right)^2
\nonumber\\
&\qquad
+
6W_{12}^{2}
+
6W_{13}^{2}
+
6W_{23}^{2}
=0.
\label{eq:three_state_sum_of_squares}
\end{align}
$$

Because the matrix elements are real, every term in Eq. \eqref{eq:three_state_sum_of_squares} is non-negative. The only way their sum can vanish is for each term to vanish individually. Therefore,

$$
\begin{align}
W_{11}=W_{22}=W_{33},
\label{eq:three_state_equal_diagonal_condition}
\end{align}
$$

and

$$
\begin{align}
W_{12}=W_{13}=W_{23}=0.
\label{eq:three_state_zero_offdiagonal_condition}
\end{align}
$$

Thus, at a generic three-state degeneracy, the diabatic matrix must be proportional to the identity matrix,

$$
\begin{align}
\mat W(\mat q_{\mathrm{CI}})
=
E^\times \mat I_3.
\label{eq:three_state_scalar_identity_condition}
\end{align}
$$


The conditiom in Eq. \eqref{eq:three_state_scalar_identity_condition} is thus both necessary and sufficient for a three-fold degeneracy of a real symmetric three-state matrix. Indeed,

$$
\det(\mat W-E\mat I_3)
=
\det[(E^\times-E)\mat I_3]
=
(E^\times-E)^3
=
-(E-E^\times)^3.
$$

Thus the constant term of the characteristic polynomial is automatically

$$
\det(\mat W)=(E^\times)^3.
$$

The constant-coefficient condition therefore does not add a new independent constraint after the matrix has been forced to be $E^\times\mat I_3$.

---

### Why the three-state seam has dimension $f-5$, not $f-6$

At first sight, Eq. \eqref{eq:three_state_sum_of_squares} appears to produce six zero conditions:

$$
\begin{align}
W_{11}=W_{22},
\qquad
W_{22}=W_{33},
\qquad
W_{33}=W_{11},
\end{align}
$$

and

$$
\begin{align}
W_{12}=0,
\qquad
W_{13}=0,
\qquad
W_{23}=0.
\end{align}
$$

However, the three diagonal equalities are not independent. If

$$
\begin{align}
W_{11}=W_{22}
\end{align}
$$

and

$$
\begin{align}
W_{22}=W_{33},
\end{align}
$$

then

$$
\begin{align}
W_{33}=W_{11}
\end{align}
$$

follows automatically. Therefore the diagonal part supplies only two independent constraints.

A convenient independent set is

$$
\begin{align}
W_{22}-W_{11}=0,
\qquad
W_{33}-W_{11}=0.
\label{eq:three_state_independent_diagonal_constraints}
\end{align}
$$

The off-diagonal part supplies three further independent constraints,

$$
\begin{align}
W_{12}=0,
\qquad
W_{13}=0,
\qquad
W_{23}=0.
\label{eq:three_state_independent_offdiag_constraints}
\end{align}
$$

Thus the total number of independent degeneracy conditions is

$$
\begin{align}
2+3=5.
\end{align}
$$

This is why a generic three-state degeneracy has a five-dimensional branching space and an $(f-5)$-dimensional seam, not an $(f-6)$-dimensional seam.

The missing “sixth” condition corresponds to the common energy shift. The value of

$$
\begin{align}
E^\times
=
\frac{1}{3}
\left(
W_{11}+W_{22}+W_{33}
\right)
\end{align}
$$

is not fixed externally. Changing all three diagonal elements by the same amount shifts the three degenerate states together and does not split the degeneracy. Only traceless deviations from $E^\times\mat I_3$ lift the degeneracy.

This is the key geometric point:

$$
\boxed{
\text{The branching space counts independent ways to split the degenerate states, not the common energy shift.}
}
$$

---

### Generalisation to an $M$-state degeneracy

The preceding argument generalises directly to an $M$-state degeneracy for a real symmetric $M\times M$ diabatic Hamiltonian. At a generic $M$-fold degeneracy, the matrix must be proportional to the identity,

$$
\begin{align}
\mat W(\mat q_{\mathrm{CI}})
=
E^\times \mat I_M.
\label{eq:m_state_scalar_identity_condition}
\end{align}
$$

Equivalently, the matrix must satisfy two types of conditions.

First, all $M$ diagonal elements must be equal:

$$
\begin{align}
W_{11}=W_{22}=\cdots=W_{MM}.
\end{align}
$$

This gives $M-1$ independent constraints, because one diagonal element may be chosen as a reference:

$$
\begin{align}
W_{22}-W_{11}=0,
\quad
W_{33}-W_{11}=0,
\quad
\ldots,
\quad
W_{MM}-W_{11}=0.
\end{align}
$$

Second, all off-diagonal elements must vanish:

$$
\begin{align}
W_{ij}=0,
\qquad
i<j.
\end{align}
$$

For a real symmetric $M\times M$ matrix, the number of unique off-diagonal elements is

$$
\begin{align}
\frac{M(M-1)}{2}.
\end{align}
$$

Therefore the number of independent scalar conditions required for a generic $M$-state degeneracy is

$$
\begin{align}
\eta
&=
(M-1)
+
\frac{M(M-1)}{2}
\nonumber\\[4pt]
&=
\frac{2(M-1)+M(M-1)}{2}
\nonumber\\[4pt]
&=
\frac{(M-1)(M+2)}{2}.
\label{eq:m_state_branching_dimensionality}
\end{align}
$$

This number $\eta$ is the codimension of the generic $M$-fold degeneracy in nuclear coordinate space. It is also the dimension of the local branching space: these are the independent directions that split the $M$-fold degeneracy to first order.

If the nuclear coordinate space has dimension $f$, and if the $\eta$ scalar constraints are independent, the seam dimension is

$$
\begin{align}
\dim(\text{seam})
=
f-\eta
=
f-
\frac{(M-1)(M+2)}{2}.
\label{eq:m_state_seam_dimension}
\end{align}
$$

This formula recovers the usual two-state result:

$$
\begin{align}
M=2
\quad\Rightarrow\quad
\eta
=
\frac{(2-1)(2+2)}{2}
=2,
\end{align}
$$

so the seam has dimension $f-2$.

For the three-state case,

$$
\begin{align}
M=3
\quad\Rightarrow\quad
\eta
=
\frac{(3-1)(3+2)}{2}
=5,
\end{align}
$$

so the seam has dimension $f-5$.

For a four-state degeneracy,

$$
\begin{align}
M=4
\quad\Rightarrow\quad
\eta
=
\frac{(4-1)(4+2)}{2}
=9,
\end{align}
$$

so a generic four-fold degeneracy has an $(f-9)$-dimensional seam.

---

### Equivalent matrix-space counting

The same result can be obtained more compactly by counting matrix dimensions.

The space of real symmetric $M\times M$ matrices has dimension

$$
\begin{align}
\frac{M(M+1)}{2}.
\end{align}
$$

The subspace of matrices with an $M$-fold degeneracy is the one-dimensional subspace of scalar matrices,

$$
\begin{align}
\mat W=E^\times\mat I_M.
\end{align}
$$

Therefore the codimension of the degenerate subspace inside the space of real symmetric matrices is

$$
\begin{align}
\frac{M(M+1)}{2}-1
=
\frac{M^2+M-2}{2}
=
\frac{(M-1)(M+2)}{2}.
\end{align}
$$

This is the same $\eta$ obtained above. It also clarifies why the common energy shift is not counted as a branching direction: the scalar matrices $E^\times\mat I_M$ form the one-dimensional direction that preserves the degeneracy rather than lifting it.

---

### Caveats

The counting above describes a generic accidental $M$-state degeneracy for a real symmetric Hamiltonian with no additional symmetry constraints. Symmetry can change the counting. For example, a point-group symmetry may force some off-diagonal matrix elements to vanish or may enforce degeneracy through a multidimensional irreducible representation. In such cases, the degeneracy is not described by the same generic codimension argument.

The counting also changes if the electronic Hamiltonian must be treated as complex Hermitian. The space of complex Hermitian $M\times M$ matrices has dimension $M^2$, not $M(M+1)/2$. The scalar identity subspace is still one-dimensional, so the generic codimension becomes

$$
\begin{align}
M^2-1.
\end{align}
$$

For $M=2$, this gives three independent conditions rather than two. This is the usual reason why real two-state conical intersections are generic in polyatomic molecules, while complex Hermitian two-state degeneracies require one additional condition.

Practical note: the formula

$$
\begin{align}
\dim(\text{seam})=f-\eta
\end{align}
$$

assumes that the $\eta$ constraints are independent. If their gradients are linearly dependent, or if symmetry forces some conditions automatically, the actual seam dimension may differ from the generic value.

References: [@von_neumann_wigner_1929; @baer_2002_nact; @yarkony_1996_diabolical_intersections; @worth_cederbaum_2004_conical_intersections]