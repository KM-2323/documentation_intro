### Diabatisation

We now examine how the operators $-\frac{1}{2}\nabla_{\mat q}^{2}$ and $\mat\Lambda$ act on the transformed nuclear wavefunction

$$
\begin{align}
\chivec^{(a)}(\mat q,t)=\Cmat(\mat q)\chivec^{(d)}(\mat q,t).
\end{align}
$$

Here $\Cmat$ is an $N_{\mathrm s}\times N_{\mathrm s}$ matrix, while $\chivec^{(a)}$ and $\chivec^{(d)}$ are $N_{\mathrm s}\times 1$ column vectors. The derivative coupling $\F$ is a vector of $N_{\mathrm s}\times N_{\mathrm s}$ matrices, with components $\F_\alpha$, one for each mass-scaled nuclear coordinate $q_\alpha$. We use the conventions

$$
\begin{align}
\F\cdot\nabla_{\mat q}
&=
\sum_\alpha \mat F_\alpha \pdv{}{q_\alpha},
\\
\F\cdot\nabla_{\mat q}\Cmat
&=
\sum_\alpha \mat F_\alpha\pdv{\Cmat}{q_\alpha},
\\
\F\cdot\F
&=
\sum_\alpha \mat F_\alpha\mat F_\alpha,
\\
\nabla_{\mat q}\cdot\F
&=
\sum_\alpha \pdv{\mat F_\alpha}{q_\alpha}.
\end{align}
$$

Matrix order is important in these expressions.

First consider the Laplacian term:

$$
\begin{align}
-\frac{1}{2}\nabla_{\mat q}^2\chivec^{(a)}
&=
-\frac{1}{2}\nabla_{\mat q}^2
\left[
\Cmat\chivec^{(d)}
\right]
\nonumber\\
&=
-\frac{1}{2}
\nabla_{\mat q}\cdot
\left[
\left(\nabla_{\mat q}\Cmat\right)\chivec^{(d)}
+
\Cmat\nabla_{\mat q}\chivec^{(d)}
\right]
\nonumber\\
&=
-\frac{1}{2}
\left[
\left(\nabla_{\mat q}^{2}\Cmat\right)\chivec^{(d)}
+
2\left(\nabla_{\mat q}\Cmat\right)\cdot
\left(\nabla_{\mat q}\chivec^{(d)}\right)
+
\Cmat
\left(\nabla_{\mat q}^{2}\chivec^{(d)}\right)
\right]
\nonumber\\
&=
-\frac{1}{2}
\left[
\left(\nabla_{\mat q}^{2}\Cmat\right)
+
2\left(\nabla_{\mat q}\Cmat\right)\cdot\nabla_{\mat q}
+
\Cmat\nabla_{\mat q}^{2}
\right]
\chivec^{(d)}.
\label{eq:laplacian_on_transformed_nuclear_wf}
\end{align}
$$

Next consider the nonadiabatic coupling operator

$$
\begin{align}
\mat\Lambda
=\frac{1}{2}
\left[
2\F\cdot\nabla_{\mat q}
+
\G
\right],
\end{align}
$$

where $\G$ is the scalar second-derivative coupling matrix. Acting on $\chivec^{(a)}=\Cmat\chivec^{(d)}$ gives

$$
\begin{align}
\mat\Lambda\chivec^{(a)}
&=\frac{1}{2}
\left[
2\F\cdot\nabla_{\mat q}
+
\G
\right]
\left[
\Cmat\chivec^{(d)}
\right]
\nonumber\\
&=
\frac{1}{2}
\left[
2\F\cdot
\left(\nabla_{\mat q}\Cmat\right)
\chivec^{(d)}
+
2\left(\F\Cmat\right)\cdot
\left(\nabla_{\mat q}\chivec^{(d)}\right)
+
\G\Cmat\chivec^{(d)}
\right]
\nonumber\\
&=
\frac{1}{2}
\left[
2\F\cdot
\left(\nabla_{\mat q}\Cmat\right)
+
2\left(\F\Cmat\right)\cdot\nabla_{\mat q}
+
\G\Cmat
\right]
\chivec^{(d)}.
\label{eq:lambda_on_transformed_nuclear_wf}
\end{align}
$$

Therefore,

$$
\begin{align}
&\left[
-\frac{1}{2}\nabla_{\mat q}^{2}\mat I
+\V-\mat\Lambda
\right]
\chivec^{(a)}
\nonumber\\
&=\left[
-\frac{1}{2}\nabla_{\mat q}^{2}\mat I
+\V
-\mat\Lambda
\right]
\Cmat\chivec^{(d)}
\nonumber\\
&=\Bigg[-\frac{1}{2}
\left[
\left(\nabla_{\mat q}^{2}\Cmat\right)
+2\left(\nabla_{\mat q}\Cmat\right)\cdot\nabla_{\mat q}
+\Cmat\nabla_{\mat q}^{2}
\right]
+\V\Cmat
\nonumber\\&\hspace{2.5cm}
-\frac{1}{2}
\left[
2\F\cdot
\left(\nabla_{\mat q}\Cmat\right)
+2\left(\F\Cmat\right)\cdot\nabla_{\mat q}
+\G\Cmat
\right]
\Bigg]
\chivec^{(d)}
\nonumber\\
&=\left[
\V\Cmat
-\frac{1}{2}
\left[
\left(\nabla_{\mat q}^{2}\Cmat\right)
+2\F\cdot
\left(\nabla_{\mat q}\Cmat\right)
+\G\Cmat
\right]
\right.
\nonumber\\
&\hspace{2.5cm}
\left.
-\left[
\nabla_{\mat q}\Cmat+\F\Cmat
\right]\cdot\nabla_{\mat q}
-\frac{1}{2}\Cmat\nabla_{\mat q}^{2}
\right]
\chivec^{(d)}.
\label{eq:diabatic_tdse_intermediate}
\end{align}
$$

Apart from unitarity, no particular choice of $\Cmat$ has yet been made. The diabatic choice is to seek a transformation satisfying the adiabatic-to-diabatic transformation condition

$$
\begin{align}
\nabla_{\mat q}\Cmat+\F\Cmat=0.
\label{eq:ADT_transform_differential}
\end{align}
$$

Componentwise, this means

$$
\begin{align}
\pdv{\Cmat}{q_\alpha}
+\F_\alpha\Cmat
=0
\qquad
\text{for every nuclear coordinate }q_\alpha.
\end{align}
$$

If the retained adiabatic electronic functions form a complete set, or an effectively closed subspace, the derivative couplings obey

$$
\begin{align}
\nabla_{\mat q}\cdot\F
=\G-\F\cdot\F.
\label{eq:divergence_identity_F_G}
\end{align}
$$

Taking the divergence of Eq. \eqref{eq:ADT_transform_differential} gives

$$
\begin{align}
0&=\nabla_{\mat q}\cdot
\left(\nabla_{\mat q}\Cmat+\F\Cmat
\right)
\nonumber\\
&=\nabla_{\mat q}^{2}\Cmat
+\left(
\nabla_{\mat q}\cdot\F
\right)\Cmat
+\F\cdot
\left(
\nabla_{\mat q}\Cmat
\right).
\end{align}
$$

Using Eq. \eqref{eq:divergence_identity_F_G},

$$
\begin{align}
\nabla_{\mat q}^{2}\Cmat
+\left(
\G-\F\cdot\F
\right)\Cmat
+\F\cdot
\left(
\nabla_{\mat q}\Cmat
\right)
&=0\nonumber\\
\nabla_{\mat q}^{2}\Cmat
+\G\Cmat
-\left(\F\cdot\F\right)\Cmat
+\F\cdot
\left(
\nabla_{\mat q}\Cmat
\right)
&=0
\nonumber\\
\nabla_{\mat q}^{2}\Cmat
+\G\Cmat
+\F\cdot
\left[
\nabla_{\mat q}\Cmat-\F\Cmat
\right]
&=0.
\end{align}
$$

Substituting Eq. \eqref{eq:ADT_transform_differential}, equivalently $\F\Cmat=-\nabla_{\mat q}\Cmat$, gives

$$
\begin{align}
\nabla_{\mat q}^{2}\Cmat
+\G\Cmat+
2\F\cdot
\left(
\nabla_{\mat q}\Cmat
\right)
=0.
\label{eq:divergence_adt_differential}
\end{align}
$$

This is precisely the scalar term that appears in Eq. \eqref{eq:diabatic_tdse_intermediate}. Applying Eqs. \eqref{eq:ADT_transform_differential} and \eqref{eq:divergence_adt_differential} to Eq. \eqref{eq:diabatic_tdse_intermediate} gives

$$
\begin{align}
\left[
-\frac{1}{2}\nabla_{\mat q}^{2}\mat I
+\V-\mat\Lambda
\right]
\chivec^{(a)}
=\left[
\V\Cmat-\frac{1}{2}
\Cmat\nabla_{\mat q}^{2}
\right]
\chivec^{(d)}.
\end{align}
$$

Finally, left multiplying by $\Cinv=\Cmat^\dagger$ gives

$$
\begin{align}
\Cinv
\left[
-\frac{1}{2}\nabla_{\mat q}^{2}\mat I
+\V
-\mat\Lambda
\right]
\chivec^{(a)}
&=\Cinv
\left[
\V\Cmat
-\frac{1}{2}
\Cmat\nabla_{\mat q}^{2}
\right]
\chivec^{(d)}
\nonumber\\
&=\left[
\Cinv\V\Cmat
-\frac{1}{2}
\Cinv\Cmat\nabla_{\mat q}^{2}
\right]
\chivec^{(d)}
\nonumber\\
&=\left[
\W
-\frac{1}{2}
\nabla_{\mat q}^{2}\mat I
\right]
\chivec^{(d)}.
\end{align}
$$

The diabatic potential matrix is therefore

$$
\begin{align}
\W
=\Cinv\V\Cmat.
\label{eq:diabatic_potential_matrix_derivation}
\end{align}
$$

Since $\Cmat$ is unitary and $\V$ is Hermitian, $\W$ is also Hermitian. In contrast to $\V$, however, $\W$ is generally not diagonal. The nonadiabatic coupling has therefore been transferred from derivative couplings in the kinetic-energy operator to off-diagonal potential couplings in $\W$.

For the time-dependent equation, the left-hand side also transforms cleanly provided $\Cmat$ has no explicit time dependence:

$$
\begin{align}
\Cinv i\hbar\pdv{}{t}
\left(
\Cmat\chivec^{(d)}
\right)
=i\hbar
\pdv{\chivec^{(d)}}{t}.
\end{align}
$$

Thus the diabatic nuclear TDSE becomes

$$
\begin{align}
i\hbar
\pdv{\chivec^{(d)}}{t}
=\left[
-\frac{1}{2}
\nabla_{\mat q}^{2}\mat I
+
\W
\right]
\chivec^{(d)}.
\label{eq:diabatic_tdse_final_derivation}
\end{align}
$$

Strictly, this cancellation is exact only when the retained electronic space is complete, or when it is an isolated subspace satisfying the required integrability conditions. In practical finite-state calculations, the same derivation motivates a quasi-diabatic representation: the derivative couplings are not necessarily removed exactly everywhere, but they are reduced enough that the dominant coupling is represented by the off-diagonal elements of $\W$.