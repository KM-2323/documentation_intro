# Adiabatic Aprpoximations:

Previously in [01_bornhuang_expansion](01_bornhuang_expansion.md), we have seen the TDSE expressed using the Born-Huang expansion as:

$$
\begin{align}
i\hbar \pdv{\boldsymbol{\chi}}{t}
=\left[
-\frac{1}{2}\nabla_{\mat q}^{2}\mat I
+\mat V
-\mat\Lambda
\right]
\boldsymbol{\chi}.
\label{eq:adiabatic_tdse_matrix_form}
\end{align}
$$

where we defined the adiabatic coupling operator vector $\mat \Lambda$:

$$
\begin{align}
\left[
-\frac{1}{2}\nabla_{\mat q}^{2}\mat I
+\mat V -\mat\Lambda
\right]
\boldsymbol{\chi}=E\boldsymbol{\chi}.
\label{eq:adiabatic_tise_matrix_form}
\end{align}
$$

or when written in the dressed-kinetic energy operator form:

$$
\begin{align}
i\hbar\pdv{\boldsymbol{\chi}}{t}
=\left[
-\frac{1}{2}
\left(
\nabla_{\mat q}\mat I+\F
\right)^2
+
\mat V
\right]
\boldsymbol{\chi}.
\label{eq:dressed_kinetic_tdse}
\end{align}
$$

Now to see the approximation in full, we transform the coordiantes back from mass-scaled $\mat q$ to Cartsian cooridnates $\mat R$:

$$
\begin{align}
i\hbar\pdv{\boldsymbol{\chi}}{t}
=\left[-\frac{1}{2\mat M}
\left(
\nabla_{\mat R}\mat I+\F
\right)^2
+
\mat V
\right]
\boldsymbol{\chi}.
\label{eq:dressed_kinetic_tdse_cart}
\end{align}
$$

Then assuming:


$$
\begin{align}
\frac{2\F\cdot\nabla_{\mat R}+\G}{\mat{M}}\approx0
\end{align}
$$

where the mass-discrepency of nucleus and electrons is used. Then:

$$
\begin{align}
i\hbar\pdv{\boldsymbol{\chi}}{t}
=\left[-\frac{1}{2\mat M}
\nabla_{\mat R}^2
+
\mat V
\right]
\boldsymbol{\chi}.
\label{eq:adiab_tdse_cart}
\end{align}
$$

the familiar TDSE is recovered so now the nuclei is moved on a single PES defined by our adiabatic electronic eiegenfunctions.

#### Issue with neglection of $\F$

However, it can be shown (detailed in [off-diagonal Hellmann-Feynman](../derivations/derivation_offdiagonal_Hellman.md) ), the NACV is inversely proportional to not only the $\sqrt{\mat M}$ but also the energy sepration of the two coupled states $j$ and $i$


$$
\begin{align}
F_{ji,\alpha}
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

So it is clear, as the energy gap between the two states approach degeneracy, the coupling increases, outweighting the mass factor and induces coupling between the nuclear motion on different surfaces. So in terms of dynamics, a wavepacket initially on one surface will transfer to another in a region where the two states of intersest are energetically close without losing energy (radiationless transition)