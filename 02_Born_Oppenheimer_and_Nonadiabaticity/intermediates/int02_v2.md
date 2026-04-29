### The Born--Oppenheimer equation in a finite electronic subspace

In practice, the Born--Huang expansion cannot be carried out over the complete electronic Hilbert space. A finite set of $M$ electronic states is therefore retained, while the remaining states are omitted. This separation defines two complementary electronic subspaces:

- the retained subspace, or $P$-space, spanned by the states $\{\psi_1,\ldots,\psi_M\}$;
- the complementary subspace, or $Q$-space, containing all states $\{\psi_{M+1},\psi_{M+2},\ldots\}$.

The finite-subspace treatment is controlled only when the retained states are effectively decoupled from the omitted states over the region of nuclear configuration space relevant to the dynamics. In terms of the nonadiabatic coupling vector, this condition may be written as

$$
\begin{align}
\F_{ia}(\mat q)
\approx
\mat 0,
\qquad
i \leq M,\quad a > M,
\label{eq:pq_coupling_condition}
\end{align}
$$

where $\mat q$ denotes the mass-scaled nuclear coordinate vector. By anti-Hermiticity of the nonadiabatic coupling matrix, the reverse couplings $\F_{ai}$ are then also negligible. For real electronic eigenfunctions this reduces to antisymmetry,

$$
\begin{align}
\F_{ia} = -\F_{ai}.
\end{align}
$$

A large energy gap between the highest retained state and the lowest omitted state is often a useful practical indicator of this separation. This follows from the Hellmann--Feynman form of the nonadiabatic coupling, which for non-degenerate states gives

$$
\begin{align}
F_{ai,\alpha}
=\frac{
\left\langle
\psi_a
\middle|
\pdv{\hat H_{\mathrm{el}}}{q_\alpha}
\middle|
\psi_i
\right\rangle
}{
V_i - V_a
},
\qquad
a \neq i.
\label{eq:hf_nac_gap_argument}
\end{align}
$$

Thus, a large energy denominator tends to suppress the coupling. However, energetic separation alone is not a proof of negligible coupling, because the numerator also depends on how strongly the electronic Hamiltonian changes along the nuclear coordinate.

Practical note: the finite-state approximation is a statement about the region of configuration space sampled by the calculation. A set of states that is well isolated near the Franck--Condon region may cease to be isolated if the wavepacket later reaches an intruder state or an additional intersection seam.

---

#### Projection operators

The projection operator onto the retained electronic subspace is

$$
\begin{align}
\hat P_M(\mat q)
=\sum_{k=1}^{M}
\ket{\psi_k(\mat q)}
\bra{\psi_k(\mat q)}.
\label{eq:p_projector}
\end{align}
$$

The complementary projector is

$$
\begin{align}
\hat Q_M(\mat q)
=\hat I_{\mathrm{el}} - \hat P_M(\mat q),
\label{eq:q_projector}
\end{align}
$$

where $\hat I_{\mathrm{el}}$ is the identity operator in the full electronic Hilbert space. Both projectors depend parametrically on the nuclear geometry because the adiabatic electronic eigenfunctions themselves depend on $\mat q$.

For a finite electronic subspace, the nuclear wavefunction vector is

$$
\begin{align}
\boldsymbol{\chi}^{(P)}
=\begin{pmatrix}
\chi_1\\
\chi_2\\
\vdots\\
\chi_M
\end{pmatrix},
\end{align}
$$

and the adiabatic potential matrix restricted to the $P$-space is

$$
\begin{align}
\mat V^{(P)}
=\operatorname{diag}
\left(
V_1,V_2,\ldots,V_M
\right).
\label{eq:p_space_adiabatic_potential}
\end{align}
$$

This matrix has dimension $M \times M$ and acts only in the retained electronic-state space.

---

#### Object shapes and notation

Let $f$ denote the number of nuclear degrees of freedom in the coordinate representation being used. For Cartesian coordinates before removing translations and rotations, $f=3N_{\mathrm{nuc}}$.

For each pair of retained electronic states $j,i \leq M$, the nonadiabatic coupling vector is

$$
\begin{align}
\F_{ji}(\mat q)
=\braket{\psi_j}{\nabla_{\mat q}\psi_i}_{\mat{r}}
\in \mathbb{C}^{f}.
\label{eq:nac_vector_p_space}
\end{align}
$$

Its coordinate components are

$$
\begin{align}
F_{ji,\alpha}
=\left\langle
\psi_j
\middle|
\pdv{\psi_i}{q_\alpha}
\right\rangle_{\mat{r}},
\qquad
\alpha=1,\ldots,f.
\end{align}
$$

The full object $\F^{(P)}$ is therefore not an ordinary matrix of scalars. It is an $M\times M$ matrix whose elements are $f$-dimensional vectors, or equivalently a rank-three array with shape

$$
\begin{align}
M \times M \times f.
\end{align}
$$

It is often useful to regard $\F^{(P)}$ as the collection of $f$ coordinate-resolved matrices,

$$
\begin{align}
\F^{(P)}
\equiv
\left\{
\mat F_1^{(P)},\mat F_2^{(P)},\ldots,\mat F_f^{(P)}
\right\},
\end{align}
$$

where each $\mat F_\alpha^{(P)}$ is an $M\times M$ matrix with elements

$$
\begin{align}
(\mat F_\alpha^{(P)})_{ji}=F_{ji,\alpha}.
\end{align}
$$

The scalar second-order coupling matrix has elements

$$
\begin{align}
G_{ji}
=\braket{\psi_j}{\nabla_{\mat q}^2\psi_i}_{\mat{r}}.
\label{eq:scalar_coupling_definition}
\end{align}
$$

For each pair of electronic states, $G_{ji}$ is a scalar function of $\mat q$, and the collection of all $G_{ji}$ forms an $M\times M$ matrix.

---

#### Partitioning the scalar coupling

The effect of finite-state truncation is most clearly seen by returning to the exact expression for $G_{ji}$. Differentiating the nonadiabatic coupling vector gives

$$
\begin{align}
\nabla_{\mat q}\cdot\F_{ji}
&=\nabla_{\mat q}\cdot
\braket{\psi_j}{\nabla_{\mat q}\psi_i}_{\mat{r}}
\nonumber\\
&=
\braket{\nabla_{\mat q}\psi_j}{\nabla_{\mat q}\psi_i}_{\mat{r}}
+
\braket{\psi_j}{\nabla_{\mat q}^2\psi_i}_{\mat{r}}.
\end{align}
$$

Using Eq. $\eqref{eq:scalar_coupling_definition}$, this gives

$$
\begin{align}
G_{ji}
=\nabla_{\mat q}\cdot\F_{ji}
-\braket{\nabla_{\mat q}\psi_j}{\nabla_{\mat q}\psi_i}_{\mat{r}}.
\label{eq:g_from_f_and_gradient_inner_product}
\end{align}
$$

The gradient inner product is a scalar in nuclear coordinate space, defined as

$$
\begin{align}
\braket{\nabla_{\mat q}\psi_j}{\nabla_{\mat q}\psi_i}_{\mat{r}}
=\sum_{\alpha=1}^{f}
\left\langle
\pdv{\psi_j}{q_\alpha}
\middle|
\pdv{\psi_i}{q_\alpha}
\right\rangle_{\mat{r}}.
\end{align}
$$

To expose the effect of truncating the electronic Hilbert space, insert the exact identity

$$
\begin{align}
\hat I_{\mathrm{el}}
=\hat P_M+\hat Q_M
\end{align}
$$

into the gradient inner product:

$$
\begin{align}
\braket{\nabla_{\mat q}\psi_j}{\nabla_{\mat q}\psi_i}_{\mat{r}}
&=
\left\langle
\nabla_{\mat q}\psi_j
\middle|
\hat P_M
\middle|
\nabla_{\mat q}\psi_i
\right\rangle_{\mat{r}}
+
\left\langle
\nabla_{\mat q}\psi_j
\middle|
\hat Q_M
\middle|
\nabla_{\mat q}\psi_i
\right\rangle_{\mat{r}}.
\label{eq:pq_partition_gradient_inner_product}
\end{align}
$$

The $P$-space contribution is obtained by substituting the explicit projector:

$$
\begin{align}
\left\langle
\nabla_{\mat q}\psi_j
\middle|
\hat P_M
\middle|
\nabla_{\mat q}\psi_i
\right\rangle_{\mat{r}}
&=\sum_{k=1}^{M}
\braket{\nabla_{\mat q}\psi_j}{\psi_k}_{\mat{r}}
\cdot
\braket{\psi_k}{\nabla_{\mat q}\psi_i}_{\mat{r}}
\nonumber\\
&=
-\sum_{k=1}^{M}
\F_{jk}\cdot\F_{ki}
\nonumber\\
&=
-\left(
\F^{(P)}\cdot\F^{(P)}
\right)_{ji}.
\label{eq:p_space_gradient_inner_product}
\end{align}
$$

Here the dot denotes contraction over nuclear-coordinate components, while the summation over $k$ is the usual matrix multiplication over electronic-state indices. Explicitly,

$$
\begin{align}
\left(
\F^{(P)}\cdot\F^{(P)}
\right)_{ji}
=\sum_{k=1}^{M}
\F_{jk}\cdot\F_{ki}.
\end{align}
$$

The $Q$-space contribution is

$$
\begin{align}
B_{ji}^{(Q)}
&\equiv
\left\langle
\nabla_{\mat q}\psi_j
\middle|
\hat Q_M
\middle|
\nabla_{\mat q}\psi_i
\right\rangle_{\mat{r}}
\nonumber\\
&=\sum_{a=M+1}^{\infty}
\braket{\nabla_{\mat q}\psi_j}{\psi_a}_{\mat{r}}
\cdot
\braket{\psi_a}{\nabla_{\mat q}\psi_i}_{\mat{r}}.
\label{eq:q_space_residual_b}
\end{align}
$$

This term contains the nonadiabatic coupling to omitted electronic states. It cannot be reconstructed from the retained $M\times M$ coupling object $\F^{(P)}$ alone.

Combining Eqs. $\eqref{eq:g_from_f_and_gradient_inner_product}$--$\eqref{eq:q_space_residual_b}$ gives

$$
\begin{align}
G_{ji}
=\nabla_{\mat q}\cdot\F_{ji}^{(P)}
+\left(
\F^{(P)}\cdot\F^{(P)}
\right)_{ji}
-B_{ji}^{(Q)}.
\label{eq:g_partitioned_final}
\end{align}
$$

Equation $\eqref{eq:g_partitioned_final}$ is the key finite-subspace result. In a complete electronic Hilbert space, there is no omitted $Q$-space contribution. In an exactly isolated $P$-space, $B_{ji}^{(Q)}=0$. In a practical finite-state calculation, $B_{ji}^{(Q)}$ is generally non-zero but may be neglected if the $P$--$Q$ couplings are sufficiently small.

---

#### Dressed kinetic energy operator in the finite subspace

The coupled nuclear equation in the retained $P$-space has the form

$$
\begin{align}
\left[
-\frac{1}{2}
\left(
\nabla_{\mat q}^{2}\mat I_M
+2\F^{(P)}\cdot\nabla_{\mat q}
+\mat G
\right)
+\mat V_{\mathrm A}^{(P)}
\right]
\boldsymbol{\chi}^{(P)}
=E\boldsymbol{\chi}^{(P)}.
\label{eq:p_space_before_dressed_form}
\end{align}
$$

Using Eq. $\eqref{eq:g_partitioned_final}$,

$$
\begin{align}
\nabla_{\mat q}^{2}\mat I_M+
2\F^{(P)}\cdot\nabla_{\mat q}
+\mat G
=\left(
\nabla_{\mat q}\mat I_M+\F^{(P)}
\right)^2
-\mat B^{(Q)}.
\label{eq:p_space_kinetic_partition}
\end{align}
$$

Here,

$$
\begin{align}
\left(\nabla_{\mat q}\mat I_M+\F^{(P)}\right)^2
\equiv\sum_{\alpha=1}^{f}
\left(
\pder{q_\alpha}\mat I_M+\mat F_\alpha^{(P)}
\right)
\left(
\pder{q_\alpha}\mat I_M+\mat F_\alpha^{(P)}
\right).
\end{align}
$$

Substitution into Eq. $\eqref{eq:p_space_before_dressed_form}$ yields

$$
\begin{align}
\left[
-\frac{1}{2}
\left(\nabla_{\mat q}\mat I_M+\F^{(P)}\right)^2
+\mat V_{\mathrm A}^{(P)}
+\frac{1}{2}\mat B^{(Q)}
\right]
\boldsymbol{\chi}^{(P)}
=E\boldsymbol{\chi}^{(P)}.
\label{eq:p_space_with_q_correction}
\end{align}
$$

It is therefore natural to define an effective, or dressed, potential matrix

$$
\begin{align}
\mat V_{\mathrm{eff}}^{(P)}
=\mat V_{\mathrm A}^{(P)}
+\frac{1}{2}\mat B^{(Q)}.
\label{eq:effective_p_space_potential}
\end{align}
$$

The finite-subspace equation can then be written compactly as

$$
\begin{align}
\left[
-\frac{1}{2}
\left(\nabla_{\mat q}\mat I_M+\F^{(P)}\right)^2
+\mat V_{\mathrm{eff}}^{(P)}
\right]
\boldsymbol{\chi}^{(P)}
=E\boldsymbol{\chi}^{(P)}.
\label{eq:finite_subspace_bo_equation}
\end{align}
$$

The matrix elements of the effective potential are

$$
\begin{align}
\left(
V_{\mathrm{eff}}^{(P)}
\right)_{ji}
=V_i\delta_{ji}
+\frac{1}{2}
\sum_{a=M+1}^{\infty}
\braket{\nabla_{\mat q}\psi_j}{\psi_a}_{\mat{r}}
\cdot
\braket{\psi_a}{\nabla_{\mat q}\psi_i}_{\mat{r}}.
\label{eq:effective_p_space_potential_elements}
\end{align}
$$

This expression shows explicitly how omitted electronic states affect the retained subspace. Their influence enters through a scalar, potential-like correction, rather than through first-order differential operators acting on the nuclear wavefunction.

---

#### Strict group Born--Oppenheimer limit

If the $P$--$Q$ couplings vanish exactly,

$$
\begin{align}
\F_{ia}=0,
\qquad
i\leq M,\quad a>M,
\end{align}
$$

then

$$
\begin{align}
\mat B^{(Q)}=\mat 0.
\end{align}
$$

Equation $\eqref{eq:finite_subspace_bo_equation}$ then reduces to

$$
\begin{align}
\left[
-\frac{1}{2}
\left(
\nabla_{\mat q}\mat I_M+\F^{(P)}
\right)^2
+
\mat V_{\mathrm A}^{(P)}
\right]
\boldsymbol{\chi}^{(P)}
=E\boldsymbol{\chi}^{(P)}.
\label{eq:strict_group_bo_equation}
\end{align}
$$

This is the group Born--Oppenheimer equation for an isolated $M$-state subspace. The word "group" emphasises that the approximation is not applied to a single electronic state, but to a group of electronic states that may remain strongly coupled to each other while being weakly coupled to all other states.

---

#### Weak coupling to omitted states

In realistic molecular systems, the condition $\F_{ia}=0$ is rarely exact. A more useful assumption is

$$
\begin{align}
\F_{ia}
=O(\epsilon),
\qquad
i\leq M,\quad a>M,
\label{eq:weak_pq_coupling}
\end{align}
$$

where $\epsilon$ is small in the region of nuclear configuration space relevant to the calculation. Since $\mat B^{(Q)}$ is quadratic in the $P$--$Q$ nonadiabatic couplings,

$$
\begin{align}
\mat B^{(Q)}
=O(\epsilon^2).
\end{align}
$$

Thus, neglecting $\mat B^{(Q)}$ introduces a second-order error in the finite-subspace equation. When $\epsilon\ll1$, the group Born--Oppenheimer equation in Eq. $\eqref{eq:strict_group_bo_equation}$ is therefore a controlled approximation. When $\epsilon$ is not small, the approximation is no longer justified.

This situation commonly arises when an intruder state enters the energy window explored by the nuclear wavepacket. In that case, the retained $P$-space must be enlarged, or the calculation must be reformulated using a larger multistate model.

Important caveat: the diagonal elements of $\mat B^{(Q)}$ are non-negative because they are squared norms of the omitted components of $\nabla_{\mat q}\psi_j$. They therefore act as positive Born--Huang-type corrections to the retained adiabatic potentials. The off-diagonal elements, however, are coupling terms between retained states and should not generally be described as repulsive.

In unscaled Cartesian coordinates, the same correction contains explicit inverse-mass factors,

$$
\begin{align}
\Delta V_{ji}^{(Q)}
=\frac{1}{2}
\sum_{\alpha=1}^{f}
\frac{1}{M_\alpha}
\left\langle
\pdv{\psi_j}{R_\alpha}
\middle|
\hat Q_M
\middle|
\pdv{\psi_i}{R_\alpha}
\right\rangle_{\mat{r}}.
\label{eq:q_correction_unscaled_coordinates}
\end{align}
$$

The mass dependence is hidden in Eq. $\eqref{eq:effective_p_space_potential_elements}$ because mass-scaled coordinates have already been used.

---

#### Interpretation

Equation $\eqref{eq:finite_subspace_bo_equation}$ separates the effect of finite-state truncation into two parts.

First, the retained nonadiabatic coupling vector $\F^{(P)}$ appears inside a dressed kinetic energy operator,

$$
\begin{align}
-\frac{1}{2}
\left(
\nabla_{\mat q}\mat I_M+\F^{(P)}
\right)^2.
\end{align}
$$

This term describes the coupling between the retained adiabatic states induced by the geometry-dependence of the electronic basis.

Second, the omitted states generate the scalar correction $\frac{1}{2}\mat B^{(Q)}$. This term contains no derivatives acting on the nuclear wavefunction and therefore behaves as an additional potential-energy contribution. In the one-state limit, its diagonal part is closely related to the diagonal Born--Oppenheimer correction. In a multistate retained subspace, it becomes a matrix correction.

The group Born--Oppenheimer approximation neglects $\mat B^{(Q)}$ when the omitted states are weakly coupled to the retained manifold. This approximation is reliable only if the neglected $P$--$Q$ couplings are small over the dynamically relevant region of nuclear configuration space.

Common pitfall: if the $Q$-space coupling is large, the correct conclusion is not that the residual term should be interpreted qualitatively. Rather, the finite electronic subspace has been chosen too narrowly. The appropriate remedy is to include the relevant omitted state or states in the retained $P$-space.

---

#### Connection to later sections

This finite-subspace construction is important for later discussions of diabatisation. The adiabatic-to-diabatic transformation is exact only for a complete electronic Hilbert space or for an effectively isolated finite subspace. In practical calculations, the retained electronic states define a quasi-diabatic manifold whose accuracy depends on the neglected coupling to states outside the selected subspace.

This point becomes essential in propagation diabatisation and DD-vMCG. The propagated adiabatic--diabatic transformation matrix is constructed from the retained nonadiabatic coupling vector field. If important states are omitted, the resulting transformation may become path-dependent, phase-inconsistent, or unable to represent the correct topology of the electronic manifold.

---

#### References

The projection-operator derivation of the finite sub-Hilbert-space Born--Oppenheimer equation follows Baer's treatment of nonadiabatic coupling terms and the construction of sub-Hilbert spaces [@baer_2002_nact]. The group interpretation of the adiabatic approximation, in which a set of strongly coupled electronic states is retained while external states are neglected, is closely related to the multimode vibronic-coupling framework of Köppel, Domcke, and Cederbaum [@koppel_domcke_cederbaum_1984]. The consequences for adiabatic-to-diabatic transformations and topological effects are discussed in Baer's work on molecular topological effects [@baer_2000_topological_effects].