# Adiabatic Appoximations:

Previously in [01_bornhuang_expansion](01_bornhuang_expansion.md), we expressed the nuclear TDSE in the adiabatic electronic basis as:

$$
\begin{align}
i\hbar \pdv{\chivec}{t}
=\left[
-\frac{1}{2}\nabla_{\mat q}^{2}\mat I
+\mat V
-\mat\Lambda
\right]
\boldsymbol{\chi}.
\label{eq:adiabatic_tdse_matrix_form}
\end{align}
$$

Here, $\chivec$ is an $M\times 1$ column vector of nuclear wavefunctions, where $M$ is the number of adiabatic electronic states retained in the expansion. The matrix $\mat{V}$ is an $M\times M$ diagonal matrix whose entries are the adiabatic potential energy surfaces, and $\mat{I}_M$ is the $M\times M$ identity matrix. 

The non-adiabatic coupling operator is:

$$
\begin{align}
\mat\Lambda
=\frac{1}{2}
\left(
2\F\cdot\nabla_{\mat q}
+
\G
\right).
\label{eq:lambda_operator}
\end{align}
$$

where $\F$ is a vector of $M\times M$ matrices. More explicitly, for nuclear coordinate $q_\alpha$,

$$
(\mat F_\alpha)_{ji} = F_{ji,\alpha} = \braket {\psi_j}  {\frac{\partial \psi_i}{\partial q_\alpha}} , \tag{1}
$$

and

$$
(\G)_{ji} = G_{ji} = \sum_\alpha \braket{\psi_j}  {\frac{\partial^2 \psi_i}{\partial q_\alpha^2} }. \tag{1}
$$

The contraction $\F \cdot \nabla_{\mat{q}}$ means

$$
\F \cdot \nabla_{\mat{q}} = \sum_\alpha \mat F_\alpha \frac{\partial}{\partial q_\alpha}. \tag{1}
$$

At this stage, no adiabatic approximation has yet been made. We have only rewritten the full molecular problem in the adiabatic electronic basis.

Using the relation between the first- and second-order derivative couplings, the same equation can also be written in the dressed-kinetic form,

$$
\begin{align}
i\hbar\pdv{\boldsymbol{\chi}}{t}
=\left[
-\frac{1}{2}
\left(
\nabla_{\mat q}\mat I+\F
\right)^2+
\mat V
\right]
\boldsymbol{\chi}.
\label{eq:dressed_kinetic_tdse}
\end{align}
$$

This form is useful because it shows that the nuclear gradient has effectively been replaced by a modified, or dressed, gradient. The extra term $\F$ appears because the adiabatic electronic basis itself changes as the nuclei move.

To make the mass dependence explicit, we now transform from mass-scaled coordinates $\mat q$ back to Cartesian nuclear coordinates $\mat R$. If

$$
q_\alpha=\sqrt{M_\alpha}R_\alpha
$$

then:

$$
\pder{q_\alpha}=\frac{1}{\sqrt{M_\alpha}}\pder{R_\alpha},;\qquad F_{ji,\alpha}^{\mat q}=\frac{1}{\sqrt{M_\alpha}} F_{ji,\alpha}^{\mat R}
$$

Therefore, in Cartesian coordinates, the dressed-kinetic form becomes

$$
\begin{align}
i\hbar\pdv{\boldsymbol{\chi}}{t}
=\left[-\sum_{\alpha}\frac{1}{2M_\alpha}
\left(
\pder{R_\alpha}\mat I+\mat F_{\alpha}^{\mat R}
\right)^2
+
\mat V
\right]
\boldsymbol{\chi}.
\label{eq:dressed_kinetic_tdse_cart}
\end{align}
$$

The adiabatic approximation is the step where we neglect the derivative-coupling terms in this kinetic operator. In the present notation, this means assuming


$$
\begin{align}
\frac12\sum_{\alpha}\frac{1}{M_\alpha}\left({2\mat F_{\alpha}^{\mat R}\pder{R_{\alpha}}+\G_{\alpha}^{\mat R}}\right)\approx0
\end{align}
$$

Physically, this approximation is motivated by the large nuclear masses. Since the non-adiabatic terms enter the nuclear equation with inverse powers of the nuclear masses, they are often small when the relevant electronic states are well separated in energy.

Neglecting these terms gives

$$
\begin{align}
i\hbar\pdv{\boldsymbol{\chi}}{t}
=\left[-\frac{1}{2}\sum_{\alpha}\frac{1}{M_{\alpha}}
\pddv{}{R_{\alpha}}\mat I
+
\mat V
\right]
\boldsymbol{\chi}.
\label{eq:adiab_tdse_cart}
\end{align}
$$

Because $\mat{V}$ is diagonal in the adiabatic representation, this matrix equation separates into $M$ independent single-surface equations. For one chosen electronic state $i$, we obtain the familiar adiabatic nuclear TDSE,

$$
\begin{align}
i\hbar\pdv{\chi_i}{t}
=\left[-\frac{1}{2}\sum_{\alpha}\frac{1}{M_{\alpha}}
\pddv{}{R_{\alpha}}
+
V_i
\right]
\chi_i.
\label{eq:adiab_tdse_cart_sep}
\end{align}
$$

This is the equation usually meant when we say that the nuclei move on a single potential energy surface. In this approximation, the electronic state is fixed, and the nuclear wavefunction evolves only on the corresponding adiabatic PES $V_i(\mat R)$.

A more advanced version of this idea keeps a group of strongly relevant electronic states before deciding which couplings can be neglected. That block-state version is discussed in the grouped-Born note. For the present beginner-level discussion, the key point is simply that the usual adiabatic approximation removes the derivative couplings and leaves independent nuclear motion on adiabatic PESs.

#### Why neglecting $\F$ can fail

The approximation above is reliable only when the derivative couplings are small. However, using the off-diagonal Hellmann-Feynman relation (detailed in [off-diagonal Hellmann-Feynman](../derivations/derivation_offdiagonal_Hellman.md) ), the non-adiabatic coupling vector between two different adiabatic states $j$ and $i$ is



$$
\begin{align}
F_{ji,\alpha}^{\mat q}
=\frac{
\mel{\psi_j}{\pdv{\hat H_{\mathrm{el}}}{q_\alpha}}{\psi_i}}{
V_i - V_j
}
=\frac{1}{\sqrt{M_\alpha}}\frac{
\mel{\psi_j}{\pdv{\hat H_{\mathrm{el}}}{R_\alpha}}{\psi_i}}{
V_i - V_j
}=,
\quad j \neq i.
\label{eq:hf_nac_gap_argument}
\end{align}
$$

This equation should be read component by component. It shows that the mass factor can suppress the coupling, but the energy denominator can enhance it. Therefore, when two adiabatic states are far apart in energy, the derivative coupling is usually small and the adiabatic approximation is safe. When two states become close in energy, the coupling can become large enough to overcome the mass suppression.

At an exact degeneracy, such as a conical intersection, the denominator $V_i-V_j$ vanishes. In the adiabatic representation, this makes the derivative coupling singular. Equivalently, the adiabatic electronic eigenfunctions no longer vary smoothly with the nuclear coordinates. This is problematic for nuclear dynamics because the wavepacket can no longer be described as moving independently on a single smooth adiabatic surface.

In dynamical terms, a wavepacket initially moving on one adiabatic surface can transfer population to another surface in a region where the two states are close in energy. This population transfer occurs without photon emission, so it is called a radiationless or non-radiative transition.

This is the main reason we introduce a diabatic representation. Instead of keeping singular derivative couplings in the kinetic energy operator, we transform the electronic basis so that the important couplings appear as smoother off-diagonal potential terms,

$$
\W = \Cinv \V \Cmat
$$

where $\Cmat$ is the adiabatic-to-diabatic transformation matrix. Strictly speaking, an exactly diabatic representation is not always available for a finite truncated set of molecular electronic states. In practice, we often construct a quasi-diabatic representation that is smooth enough over the region of nuclear configuration space relevant to the dynamics.

To read next:
[Diabatic Representation](03_diabatic_representation.md)