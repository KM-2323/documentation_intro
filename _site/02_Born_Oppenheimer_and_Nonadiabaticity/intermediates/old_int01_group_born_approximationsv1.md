### The Born-Oppenheimer equation for a finite sub-Hilbert space

In practise, only a finite set of $N_{\mathrm s}$ electronic states, are used in the expansion. So, if we break the full Hilbert space into two part: a finite space with dimension M designated as the $P$-space and the complementary part, the $Q$-space which is allowed to be of an infinite dimension. A formal decomposition requires the fullfilment of the following condition:

$$
\begin{align}
\F_{ij}\approx 0;\quad \text{for}\quad i\leq M ,\quad j > M
\end{align}
$$
 
 where the non-adiabatic coupling between $P$-states and $Q$-states are assumed to be zero. This can be achieved when the highest state of $P$-space is well separated from the lowest state of $Q$-space


So like it was disccused in [Born-Huang expansion](../beginer/01_bornhuang_expansion.md), we can define a projector $\hat P_M$ onto the retained electronic subspace,

$$
\begin{align}
\hat P_{M}
=\sum_{k=1}^{M}
\ket{\psi_k}
\bra{\psi_k}.
\label{eq:P_projector}
\end{align}
$$

and $\hat Q_M$, the projection operator for the $Q$-space

$$
\begin{align}
\hat Q_{M}
=I-\hat P_M
\label{eq:Q_projector}
\end{align}
$$


With these operators defined, we can now investiagte the effective potential term that should be replaced in our:

$$
\begin{align}
\left[
-\frac{1}{2}
\left(
\nabla_{\mat q}\mat I+\F^{(P)}
\right)^2
+
\mat V^{(P)}
\right]
\boldsymbol{\chi}
=E\boldsymbol{\chi}.
\label{eq:dressed_kinetic_tise}
\end{align}
$$

To understand how truncating the Hilbert space affects our nuclear Schrödinger equation, we return to the exact definition of the scalar coupling matrix elements:

$$
\begin{align}
\G_{ji}
&=\nabla\F_{ji}-\sum_{k=1}^{\infty}\braket{\nabla\psi_j}{\psi_k}
\braket{\psi_k}{\nabla\psi_i}
\end{align}
$$

Instead of assuming a complete infinite basis, we insert the exact partitioned identity operator, $\hat I_{\mathrm{el}} = \hat P_M + \hat Q_M$, into the inner product of the gradients:

$$
\begin{align}
\braket{\nabla\psi_j}{\nabla\psi_i} &= \mel{\nabla\psi_j}{\hat P_M + \hat Q_M}{\nabla\psi_i}\nonumber\\
&= \mel{\nabla\psi_j}{\hat P_M}{\nabla\psi_i} + \mel{\nabla\psi_j}{\hat Q_M}{\nabla\psi_i}
\label{eq:partitioned_inner_product}
\end{align}
$$

We evaluate these two terms separately. For the $P$-space contribution, we substitute the explicit projector $\hat P_M = \sum_{k=1}^M \ket{\psi_k}\bra{\psi_k}$. Using the same anti-Hermitian trick we applied in the infinite basis derivation([dressed kinetic operator](../derivations/derivation_dressed_term.md)) ($\braket{\nabla\psi_j}{\psi_k} = -\braket{\psi_k}{\nabla\psi_j}^\* = -\F_{jk}$), this term becomes the square of the Non-Adiabatic Coupling Matrix NACM strictly within the $P$-space:

$$
\begin{align}
\mel{\nabla\psi_j}{\hat P_M}{\nabla\psi_i} &= \sum_{k=1}^M \braket{\nabla\psi_j}{\psi_k} \braket{\psi_k}{\nabla\psi_i}\nonumber\\
&= -\sum_{k=1}^M \F_{jk} \cdot \F_{ki}\nonumber\\
&= -(\F^{(P)} \cdot \F^{(P)})_{ji}
\end{align}
$$

Next, we look at the $Q$-space contribution. By substituting $\hat Q_M = \sum_{k=M+1}^\infty \ket{\psi_k}\bra{\psi_k}$, we obtain:

$$
\begin{align}
\mel{\nabla\psi_j}{\hat Q_M}{\nabla\psi_i} &= \sum_{k=M+1}^\infty \braket{\nabla\psi_j}{\psi_k} \braket{\psi_k}{\nabla\psi_i}
\end{align}
$$

Unlike the $P$-space term, this summation runs over the omitted states ($k > M$). Therefore, it cannot be expressed in terms of our retained $M \times M$ matrix $\F^{(P)}$. It represents an irreducible scalar coupling to the discarded electronic states.Substituting both partitioned results back into our expression for $\G_{ji}$ yields the subspace-restricted scalar coupling:

$$
\begin{align}
\G_{ji}^{(P)} &= \nabla\F_{ji}^{(P)} + (\F^{(P)} \cdot \F^{(P)})_{ji} - \sum_{k=M+1}^\infty \braket{\nabla\psi_j}{\psi_k} \braket{\psi_k}{\nabla\psi_i}
\end{align}
$$

### The Dressed Kinetic and Potential Energy Operators

We are now ready to substitute $\G^{(P)}$ into the kinetic energy brackets for the $M$-dimensional $P$-space. Notice how we group the terms:$$\begin{align}
-\frac{1}{2} \left[ \nabla^2\mat I + 2\F^{(P)}\cdot\nabla\mat I + \G^{(P)} \right] &= -\frac{1}{2} \left[ \nabla^2\mat I + 2\F^{(P)}\cdot\nabla\mat I + \nabla\F^{(P)} + \F^{(P)}\cdot\F^{(P)} - \mel{\nabla\psi_j}{\hat Q_M}{\nabla\psi_i} \right]\nonumber\\
&= -\frac{1}{2} \left[ \left(\nabla\mat I + \F^{(P)}\right)^2 \right] + \frac{1}{2} \sum_{k=M+1}^\infty \braket{\nabla\psi_j}{\psi_k} \braket{\psi_k}{\nabla\psi_i}
\end{align}$$The first four terms perfectly construct our familiar dressed kinetic energy perfect square, just restricted to the $M$-dimensional subspace. However, the truncation leaves behind a positive scalar term from the $Q$-space. Because this leftover term contains no differential operators acting on the nuclear coordinates, it behaves strictly as a potential energy contribution.When we insert this into the full Time-Independent Schrödinger Equation, we combine this residual $Q$-space term with the standard adiabatic potential $\mat V^{(P)}$ to form a new dressed potential-energy matrix, $\mat V^{(P)}$:

$$
\begin{align}
\left[ -\frac{1}{2} \left(\nabla\mat I + \F^{(P)}\right)^2 + \mat V^{(P)} \right] \boldsymbol{\chi}^{(P)} = E \boldsymbol{\chi}^{(P)}
\label{eq:group_BO_equation}
\end{align}
$$

where the elements of the dressed potential matrix are explicitly defined as:

$$
\begin{align}
\V_{ji}^{(P)} = V_i \delta_{ji} + \frac{1}{2} \sum_{k=M+1}^\infty \braket{\nabla\psi_j}{\psi_k} \braket{\psi_k}{\nabla\psi_i}
\label{eq:dressed_potential_elements}
\end{align}
$$

This final equation represents the Group Born-Oppenheimer approximation. It demonstrates that when we discard a subset of electronic states ($Q$-space), their influence is not entirely lost. Since in practise, the first-derivative non-adiabatic couplings ($\F_{ji}$) to these higher states are never 0 (a constant interaction of $\varepsilon$), their second-derivative couplings survive as an effective repulsive mass-dependent potential that "dresses" the adiabatic states we chose to keep. So if $\varepsilon>>1$, then .. 