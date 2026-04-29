### Proving the Anti-Hermitian Property of the Non-Adiabatic Coupling Matrix (NACM)

Provided the electronic eigenstates are orthonormal:

$$
\begin{align}
\braket{\psi_j}{\psi_i}_{\mat r}
=\delta_{ji}.
\label{eq:electronic_orthonormality}
\end{align}
$$

Then take the gradient $\nabla$ of both sides of the equation. Because $\delta_{ji}$ is a constant (either 1 or 0), its gradient is strictly 0. Lastly, the subindex $\mat r$ are dropped for clarity:

$$
\begin{align}
\nabla\braket{\psi_j}{\psi_i}
&=\nabla\delta_{ji}\nonumber\\
\braket{\nabla\psi_j}{\psi_i}+\braket{\psi_j}{\nabla\psi_i}
&=0\nonumber\\
\braket{\psi_j}{\nabla\psi_i}&=-\braket{\nabla\psi_j}{\psi_i}\nonumber\\
\braket{\psi_j}{\nabla\psi_i}&=-\braket{\psi_i}{\nabla\psi_j}^*\nonumber\\
\F_{ji} &=\F_{ij}^*
\label{eq:proof-antihermitian-F}
\end{align}
$$

To evaluete the left side from line 1 to line 2, we applied the product rule (the distributyive property of the gradient operator) to the bra-kety. 

To go from line 3 to line 4, we relied on fundamental property of inner products in complex Hilbert space: reversing the order of the functions in a bra-ket yields its complex conjugate. Mathematically, this is written as:

$$
\braket{A}{B} = \braket{B}{A}^*\rightarrow\braket{\nabla\psi_j}{\psi_i}=\braket{\psi_i}{\nabla\psi_j}^*
$$

Lastly, to arrive at the last line, we recoegnise that 

$$
\braket{\psi_j}{\nabla \psi_i} = \mathbf{F}_{ji},\quad \braket{\psi_i}{\nabla \psi_j} = \mathbf{F}_{ij}
$$

### Simplification for a Real Electronic Basis

In practise, the electronic basis functions are chosen to be strictly real-valued. So if the wavefunctions are real, then taking their complex conjugate has no effect (i.e. $z^*=z$). Hence, the complex conjugate on our NACM elements can be dropped entirely ($\F_{ij}^*=\F_{ij}$).

Substituting this into our anti-Hermitian condition yields:

$$
\F_{ji} =\F_{ij}
$$

### Comments:
1. The matrix is Anti-Symmetric: Without the complex conjugate, the matrix simply becomes anti-symmetric (or skew-symmetric). This means that if you take the transpose of the matrix, you get the exact negative of the original matrix ($\mathbf{F}^T = -\mathbf{F}$). The coupling from state $j$ to state $i$ is the exact negative of the coupling from state $i$ to state $j$.
2. Diagonal elements are strictly zero: The most significant physical consequence occurs when we look at the diagonal elements, representing a state's coupling to itself ($i = j$). Plugging $i = j$ into the anti-symmetric equation gives $\mathbf{F}_{ii} = -\mathbf{F}_{ii}$. The only number that is equal to its own negative is zero. Therefore, $\mathbf{F}_{ii} = 0$. This mathematically proves that for a real basis, a state cannot have a non-adiabatic coupling with itself.