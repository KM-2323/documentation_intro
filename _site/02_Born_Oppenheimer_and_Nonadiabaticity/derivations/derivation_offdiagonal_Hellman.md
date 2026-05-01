### The Diagonal Hellmann-Feynman Theorem

Before detailing the equations of motion for the coupled nuclear-electronic system, it is necessary to establish the diagonal Hellmann-Feynman theorem. This theorem relates the nuclear gradient of the adiabatic potential energy to the expectation value of the derivative of the electronic Hamiltonian.

Let $\mat R$ be the vector of nuclear coordinates and $\hat H_{el}$ be the electronic Hamiltonian operator. The adiabatic electronic states $\ket{\psi_j}$ satisfy the time-independent Schrödinger equation $\hat H_{el}\ket{\psi_j} = V_j\ket{\psi_j}$, where $V_j$ is the scalar adiabatic potential energy. Taking the nuclear gradient ($\nabla_{\mat R}$) of the expectation value of the energy gives:

$$
\begin{align}
\nabla_{\mat R} V_j &= \nabla_{\mat R} \mel{\psi_j}{\hat H_{el}}{\psi_j} \nonumber \\
&= \mel{\nabla_{\mat R} \psi_j}{\hat H_{el}}{\psi_j} + \mel{\psi_j}{\nabla_{\mat R} \hat H_{el}}{\psi_j} + \mel{\psi_j}{\hat H_{el}}{\nabla_{\mat R} \psi_j}.
\end{align}
$$


Because the electronic Hamiltonian $\hat H_{el}$ is a Hermitian operator, it acts on the bra and ket symmetrically. Specifically, the eigenvalues $V_j$ are real scalars, such that

$$
\begin{align}
\bra{\psi_j}\hat H_{el} &= \bra{\hat H_{el}\psi_j}\nonumber\\
&=\bra{V_j\psi_j}\nonumber\\
&=\bra{\psi_j}V_j^{*}\nonumber\\
&=\bra{\psi_j}V_j
\end{align}
$$

Consequently, the expression evaluates to:

$$
\begin{align}
\nabla_{\mat R} V_j = V_j\braket{\nabla_{\mat R} \psi_j}{\psi_j} + \mel{\psi_j}{\nabla_{\mat R} \hat H_{el}}{\psi_j} + V_j\braket{\psi_j}{\nabla_{\mat R} \psi_j}.
\end{align}
$$

Since the electronic eigenfunctions are normalized at all nuclear geometries, their inner product is identically unity ($\braket{\psi_j}{\psi_j} = 1$). Taking the nuclear gradient of this scalar condition yields:

$$
\begin{align}
\nabla_{\mat R} \braket{\psi_j}{\psi_j} &= 0 \nonumber \\
\braket{\nabla_{\mat R} \psi_j}{\psi_j} + \braket{\psi_j}{\nabla_{\mat R} \psi_j} &= 0 \nonumber \\
\braket{\nabla_{\mat R} \psi_j}{\psi_j} &= -\braket{\psi_j}{\nabla_{\mat R} \psi_j}.
\end{align}
$$

Substituting this relationship back into the gradient of the potential energy exactly cancels the terms involving the derivatives of the wavefunctions:

$$
\begin{align}
\nabla_{\mat R} V_j &= -V_j\braket{\psi_j}{\nabla_{\mat R} \psi_j} + \mel{\psi_j}{\nabla_{\mat R} \hat H_{el}}{\psi_j} + V_j\braket{\psi_j}{\nabla_{\mat R} \psi_j} \nonumber \\
&= \mel{\psi_j}{\nabla_{\mat R} \hat H_{el}}{\psi_j}.
\label{eq:diagonal_hellmann_feynman}
\end{align}
$$

This demonstrates the diagonal Hellmann-Feynman theorem: the gradient of the adiabatic energy eigenvalue depends strictly on the expectation value of the derivative of the Hamiltonian operator, circumventing the need to compute the gradients of the electronic wavefunctions.

### Off-diagonal Hellman-Feynmann

Next, we evaluate the off-diagonal elements. The nonadiabatic derivative coupling matrix elements, represented as vectors $\mat F_{ji} = \braket{\psi_j}{\nabla_{\mat R} \psi_i}$, can be evaluated using an off-diagonal form of the Hellmann-Feynman theorem.Consider two orthogonal electronic states, $\ket{\psi_i}$ and $\ket{\psi_j}$ (where $i \neq j$), such that $\braket{\psi_j}{\psi_i} = 0$. Taking the nuclear gradient of this off-diagonal matrix element of the Hamiltonian, which is identically zero, we obtain:

$$
\begin{align}
\nabla_{\mat R} \mel{\psi_j}{\hat H_{el}}{\psi_i} = \mel{\nabla_{\mat R} \psi_j}{\hat H_{el}}{\psi_i} + \mel{\psi_j}{\nabla_{\mat R} \hat H_{el}}{\psi_i} + \mel{\psi_j}{\hat H_{el}}{\nabla_{\mat R} \psi_i}.
\end{align}
$$

Applying the eigenvalue relation $\hat H_{el}\ket{\psi_i} = V_i\ket{\psi_i}$ and its Hermitian conjugate $\bra{\psi_j}\hat H_{el} = V_j\bra{\psi_j}$, the expression simplifies to:

$$
\begin{align}
0 = V_i\braket{\nabla_{\mat R} \psi_j}{\psi_i} + \mel{\psi_j}{\nabla_{\mat R} \hat H_{el}}{\psi_i} + V_j\braket{\psi_j}{\nabla_{\mat R} \psi_i}.
\end{align}
$$

To evaluate the first term, we use the anti-Hermitian property of the nonadiabatic coupling vectors ([anti-Hermitian property of NACV](derivations_antihermitian_F.md)):

$$
\begin{align}
\braket{\nabla_{\mat R} \psi_j}{\psi_i} &= -\braket{\psi_j}{\nabla_{\mat R} \psi_i}.
\end{align}
$$

Substituting this property into our Hamiltonian derivative expression yields:

$$
\begin{align}
0 &= -V_i\braket{\psi_j}{\nabla_{\mat R} \psi_i} + \mel{\psi_j}{\nabla_{\mat R} \hat H_{el}}{\psi_i} + V_j\braket{\psi_j}{\nabla_{\mat R} \psi_i} \nonumber \\
0 &= (V_j - V_i)\braket{\psi_j}{\nabla_{\mat R} \psi_i} + \mel{\psi_j}{\nabla_{\mat R} \hat H_{el}}{\psi_i}.
\end{align}
$$

Rearranging this equation provides a direct expression for the nonadiabatic derivative coupling vector:

$$
\begin{align}
\mat F_{ji} = \braket{\psi_j}{\nabla_{\mat R} \psi_i} = \frac{\mel{\psi_j}{\nabla_{\mat R} \hat H_{el}}{\psi_i}}{V_i - V_j}.
\label{eq:off_diagonal_hellmann_feynman}
\end{align}
$$

This form reveals a critical physical consequence: as the adiabatic potential energy surfaces become degenerate ($V_i \to V_j$), the denominator approaches zero, and the nonadiabatic coupling matrix elements become singular. These localized singularities (such as conical intersections) drastically break the Born-Oppenheimer approximation, and drive the necessity to seek a transformation into a diabatic representation, where such derivative couplings are systematically removed or minimized.



---


As $\psi_j$ and $\psi_i$ are eigenfunctions of $\hat H_{el}$ at all values of $\mat R$, the above expression at a chosen set of nuclear cooridnates simplfies to:














