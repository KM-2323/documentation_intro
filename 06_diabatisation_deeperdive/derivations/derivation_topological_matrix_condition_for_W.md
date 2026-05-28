# Derivation of the topological-matrix condition for single-valued diabatic potentials

## Purpose

This derivation shows how the closed-loop ADT propagator constrains the diabatic potential matrix.

The main result is that, if

$$
\begin{align}
\Cmat(\beta)=\mat D(\Gamma)\Cmat(0)
\end{align}
$$

after one closed loop $\Gamma$, then single-valuedness of

$$
\begin{align}
\W=\Cmat^\dagger\V\Cmat
\end{align}
$$

requires

$$
\begin{align}
\mat D^\dagger(\Gamma)\V(0)\mat D(\Gamma)=\V(0).
\end{align}
$$

For a non-degenerate adiabatic potential matrix $\V(0)$, this forces $\mat D(\Gamma)$ to be diagonal with unit-modulus diagonal entries. For real electronic states, those entries reduce to $\pm1$.

---

## Starting point: the ADT equation

The adiabatic-to-diabatic transformation matrix satisfies

$$
\begin{align}
\nabla_{\mat q}\Cmat+\F\Cmat=0.
\label{eq:adt_equation_derivation_topological_matrix}
\end{align}
$$

Along a path $\gamma$ from $\mat q_a$ to $\mat q_b$, the formal solution is

$$
\begin{align}
\Cmat(\mat q_b)
=\mathcal P
\exp
\left[
-\int_{\gamma:\mat q_a\to \mat q_b}
\F(\mat q)\cdot d\mat q
\right]
\Cmat(\mat q_a).
\label{eq:path_ordered_solution_derivation_topological_matrix}
\end{align}
$$

The path-ordering operator $\mathcal P$ is required because the coordinate-resolved coupling matrices need not commute along the path.

---

## Closed-loop propagation

Let $\Gamma$ be a closed loop parametrised by $\mat q(s)$, with

$$
\begin{align}
\mat q(0)=\mat q(\beta)=\mat q_0.
\end{align}
$$

Define the topological matrix

$$
\begin{align}
\mat D(\Gamma)
=\mathcal P
\exp
\left[-\oint_\Gamma
\F(\mat q)\cdot d\mat q
\right].
\label{eq:topological_matrix_definition_derivation}
\end{align}
$$

Then Eq. $\eqref{eq:path_ordered_solution_derivation_topological_matrix}$ gives

$$
\begin{align}
\Cmat(\beta)
=\mat D(\Gamma)\Cmat(0).
\label{eq:closed_loop_c_relation_derivation}
\end{align}
$$

This equation says that after one circuit around $\Gamma$, the ADT matrix may return to a transformed version of itself rather than to the identical matrix.

---

## Diabatic potential before and after the loop

The diabatic potential matrix is

$$
\begin{align}
\W(s)
=\Cmat^\dagger(s)\V(s)\Cmat(s).
\label{eq:w_definition_derivation_topological_matrix}
\end{align}
$$

At the beginning of the loop,

$$
\begin{align}
\W(0)
=\Cmat^\dagger(0)\V(0)\Cmat(0).
\label{eq:w_initial_derivation_topological_matrix}
\end{align}
$$

At the end of the loop,

$$
\begin{align}
\W(\beta)
=\Cmat^\dagger(\beta)\V(\beta)\Cmat(\beta).
\label{eq:w_final_derivation_topological_matrix}
\end{align}
$$

Since the loop returns to the same nuclear geometry,

$$
\begin{align}
\V(\beta)=\V(0),
\label{eq:v_same_point_derivation_topological_matrix}
\end{align}
$$

provided the state ordering at the base point is fixed.

Substituting Eq. $\eqref{eq:closed_loop_c_relation_derivation}$ into Eq. $\eqref{eq:w_final_derivation_topological_matrix}$ gives

$$
\begin{align}
\W(\beta)
&=\left[
\mat D(\Gamma)\Cmat(0)
\right]^\dagger
\V(0)
\left[
\mat D(\Gamma)\Cmat(0)
\right]
\nonumber\\
&=\Cmat^\dagger(0)
\mat D^\dagger(\Gamma)
\V(0)
\mat D(\Gamma)
\Cmat(0).
\label{eq:w_beta_after_substitution_derivation}
\end{align}
$$

---

## Imposing single-valuedness of the diabatic potential

The diabatic potential matrix is required to be single-valued at the same nuclear geometry:

$$
\begin{align}
\W(\beta)=\W(0).
\label{eq:w_single_valued_condition_derivation}
\end{align}
$$

Using Eqs. $\eqref{eq:w_initial_derivation_topological_matrix}$ and $\eqref{eq:w_beta_after_substitution_derivation}$, this means

$$
\begin{align}
\Cmat^\dagger(0)
\mat D^\dagger(\Gamma)
\V(0)
\mat D(\Gamma)
\Cmat(0)
=\Cmat^\dagger(0)
\V(0)
\Cmat(0).
\label{eq:w_single_before_cancellation_derivation}
\end{align}
$$

Assuming $\Cmat(0)$ is unitary, left multiply by $\Cmat(0)$ and right multiply by $\Cmat^\dagger(0)$. This gives

$$
\begin{align}
\mat D^\dagger(\Gamma)
\V(0)
\mat D(\Gamma)
=\V(0).
\label{eq:d_condition_for_w_derivation}
\end{align}
$$

This is the fundamental condition imposed on the topological matrix by single-valuedness of the diabatic potential matrix.

---

## Equivalent commutator condition

If the nonadiabatic coupling matrix is anti-Hermitian, the path-ordered exponential $\mat D(\Gamma)$ is unitary:

$$
\begin{align}
\mat D^\dagger(\Gamma)\mat D(\Gamma)=\mat I.
\end{align}
$$

Starting from

$$
\begin{align}
\mat D^\dagger \V \mat D=\V,
\end{align}
$$

multiply from the left by $\mat D$:

$$
\begin{align}
\V\mat D
=\mat D\V.
\end{align}
$$

Thus

$$
\begin{align}
[\mat D(\Gamma),\V(0)]=0.
\label{eq:d_commutator_condition_derivation}
\end{align}
$$

So the topological matrix must commute with the adiabatic potential matrix at the base point.

---

## Consequence for non-degenerate adiabatic energies

Let the adiabatic potential matrix at the base point be diagonal,

$$
\begin{align}
\V(0)
=\operatorname{diag}
(V_1,V_2,\ldots,V_N).
\end{align}
$$

Assume first that the energies are non-degenerate:

$$
\begin{align}
V_i\neq V_j,
\qquad i\neq j.
\end{align}
$$

The commutator condition is

$$
\begin{align}
\mat D\V-\V\mat D=0.
\end{align}
$$

Consider the $(i,j)$ matrix element:

$$
\begin{align}
0
&=(\mat D\V-\V\mat D)_{ij}
\nonumber\\
&=(\mat D\V)_{ij}
-(\V\mat D)_{ij}.
\end{align}
$$

Since $\V$ is diagonal,

$$
\begin{align}
(\mat D\V)_{ij}
&=\sum_k D_{ik}V_{kj}
=D_{ij}V_j,
\\
(\V\mat D)_{ij}
&=\sum_k V_{ik}D_{kj}
=V_iD_{ij}.
\end{align}
$$

Therefore

$$
\begin{align}
0
=D_{ij}V_j
-V_iD_{ij}
=D_{ij}(V_j-V_i).
\end{align}
$$

For $i\neq j$, the factor $(V_j-V_i)$ is nonzero. Hence

$$
\begin{align}
D_{ij}=0,
\qquad i\neq j.
\end{align}
$$

Thus $\mat D(\Gamma)$ must be diagonal:

$$
\begin{align}
\mat D(\Gamma)
=\operatorname{diag}
(d_1,d_2,\ldots,d_N).
\label{eq:d_diagonal_general_derivation}
\end{align}
$$

Since $\mat D$ is unitary,

$$
\begin{align}
|d_i|=1,
\qquad i=1,\ldots,N.
\end{align}
$$

Therefore, in the complex case,

$$
\begin{align}
d_i=e^{i\chi_i},
\end{align}
$$

and

$$
\begin{align}
\mat D(\Gamma)
=\operatorname{diag}
\left(
e^{i\chi_1},
e^{i\chi_2},
\ldots,
e^{i\chi_N}
\right).
\label{eq:d_complex_phase_derivation}
\end{align}
$$

For real electronic wavefunctions, the transformation matrix is orthogonal. The only real numbers with unit modulus are $\pm1$, so

$$
\begin{align}
\mat D(\Gamma)
=\operatorname{diag}
\left(
\pm1,\pm1,\ldots,\pm1
\right).
\label{eq:d_real_sign_derivation}
\end{align}
$$

This is the usual real-valued topological matrix condition.

---

## Degenerate base point

If $\V(0)$ has degenerate eigenvalues, the preceding argument changes.

Suppose

$$
\begin{align}
V_i=V_j
\end{align}
$$

for some pair or block of states. Then the condition

$$
\begin{align}
D_{ij}(V_j-V_i)=0
\end{align}
$$

does not force $D_{ij}$ to vanish inside that degenerate block.

Therefore, for a degenerate base point, $\mat D(\Gamma)$ need only be block diagonal with respect to the degenerate eigenspaces of $\V(0)$. It may mix states inside an exactly degenerate block while still satisfying

$$
\begin{align}
\mat D^\dagger(\Gamma)\V(0)\mat D(\Gamma)=\V(0).
\end{align}
$$

Important caveat: this is one reason why topological discussions usually choose a base point away from the degeneracy. At the exact degeneracy, the adiabatic eigenvectors are not uniquely defined, and state-by-state phase statements become ambiguous.

---

## Sufficiency of the diagonal condition

The derivation above showed that single-valuedness of $\W$ forces $\mat D$ to commute with $\V$. We can also check the converse.

Assume that

$$
\begin{align}
[\mat D,\V]=0,
\qquad
\mat D^\dagger\mat D=\mat I.
\end{align}
$$

Then

$$
\begin{align}
\W(\beta)
&=
\Cmat^\dagger(0)
\mat D^\dagger
\V
\mat D
\Cmat(0)
\nonumber\\
&=
\Cmat^\dagger(0)
\mat D^\dagger
\mat D
\V
\Cmat(0)
\nonumber\\
&=
\Cmat^\dagger(0)
\V
\Cmat(0)
\nonumber\\
&=
\W(0).
\end{align}
$$

In the second line we used the fact that $\mat D$ commutes with $\V$. This proves that a diagonal unit-modulus topological matrix is compatible with a single-valued diabatic potential matrix.

---

## Interpretation

The ADT matrix itself may be multivalued around a closed loop:

$$
\begin{align}
\Cmat(\beta)
=\mat D(\Gamma)\Cmat(0).
\end{align}
$$

However, the diabatic potential matrix can still be single-valued if the topological matrix has the allowed diagonal phase or sign form.

This is why one should distinguish between two statements:

$$
\boxed{
\mat D(\Gamma)=\mat I
\quad
\Longrightarrow
\quad
\Cmat
\text{ is single-valued around the loop.}
}
$$

and

$$
\boxed{
\mat D^\dagger(\Gamma)\V(0)\mat D(\Gamma)=\V(0)
\quad
\Longrightarrow
\quad
\W
\text{ is single-valued around the loop.}
}
$$

The second condition is weaker. It allows nontrivial sign or phase changes of the electronic basis, provided those changes do not alter the diabatic potential matrix.

For real electronic states, this is the familiar situation around a conical intersection: the transported adiabatic electronic states may return with sign changes, but the potential matrix can remain a single-valued function of nuclear geometry.

---

## Connection to path dependence

Let $\gamma_1$ and $\gamma_2$ be two paths from the same initial point $P$ to the same final point $Q$. Together they define a closed loop. With an appropriate base-point convention, the two transported ADT matrices at $Q$ differ by the holonomy of that loop.

Thus, path independence of $\Cmat$ requires

$$
\begin{align}
\mat D(\Gamma)=\mat I
\end{align}
$$

for all relevant closed loops.

In a regular simply connected region where the curl condition holds, all contractible loops have identity holonomy. In a region containing a conical-intersection seam or another singularity, a loop may have nontrivial holonomy even though the local curl condition holds away from the singularity.

This is the global topological obstruction: local integrability does not by itself remove the sign or phase structure generated by encircling a degeneracy.

---

## Final result

The topological matrix is

$$
\begin{align}
\mat D(\Gamma)
=\mathcal P
\exp
\left[
-\oint_\Gamma
\F(\mat q)\cdot d\mat q
\right].
\end{align}
$$

It relates the ADT matrix before and after one closed loop:

$$
\begin{align}
\Cmat(\beta)
=\mat D(\Gamma)\Cmat(0).
\end{align}
$$

Single-valuedness of the diabatic potential matrix requires

$$
\begin{align}
\mat D^\dagger(\Gamma)\V(0)\mat D(\Gamma)=\V(0).
\end{align}
$$

For non-degenerate adiabatic energies at the base point, this implies

$$
\begin{align}
\mat D(\Gamma)
=\operatorname{diag}
\left(
e^{i\chi_1},
\ldots,
e^{i\chi_N}
\right)
\end{align}
$$

in the complex case, and

$$
\begin{align}
\mat D(\Gamma)
=\operatorname{diag}
\left(
\pm1,\ldots,\pm1
\right)
\end{align}
$$

for real electronic states.

Thus the topological matrix may be nontrivial while the diabatic potential matrix remains single-valued.

---

## References

This derivation follows Baer's line-integral treatment of the ADT matrix and the topological matrix condition for single-valued diabatic potentials.