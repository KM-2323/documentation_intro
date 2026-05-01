### Expressing the Scalar Coupling Matrix ($\G$) in terms of $\F$

To express the elements of the second derivative (scalar) coupling matrix $\G$ in terms of the non-adiabatic coupling matrix NACM $\F$, we begin by taking the nuclear gradient of the elements $\F_{ji}$:

$$
\begin{align}
\nabla\F_{ji}&=\nabla\braket{\psi_j}{\nabla\psi_i}\nonumber\\
&=\braket{\nabla\psi_j}{\nabla\psi_i}+\braket{\psi_j}{\nabla^2\psi_i}\nonumber\\
&=\braket{\nabla\psi_j}{\nabla\psi_i}+G_{ji}\nonumber\\
\end{align}
$$

Rearranging this expression to isolate $\G_{ji}$ yields:

$$
\begin{align}
G_{ji}=\nabla\F_{ji}-\braket{\nabla\psi_j}{\nabla\psi_i}\label{eq:G_raw}\\
\end{align}
$$

Assuming the electronic eigenstates form a complete basis, we can apply the resolution of the identity (see [Born-Huang expansion](../beginer/01_bornhuang_expansion.md)), defined as:

$$
\begin{align}
\sum_{k=1}^{\infty}
\ket{\psi_k(\mat R)}
\bra{\psi_k(\mat R)}
=\hat I_{\mathrm{el}}.
\label{eq:electronic_completeness}
\end{align}
$$

Inserting this identity operator into the second term of Equation \ref{eq:G_raw} allows us to expand the bra-ket:

$$
\begin{align}
G_{ji}&=\nabla\F_{ji}-\mel{\nabla\psi_j}{\hat I_{\mathrm{el}}}{\nabla\psi_i}\nonumber\\
&=\nabla\F_{ji}-\sum_{k=1}^{\infty}\mel{\nabla\psi_j}{\Big[\ket{\psi_k}
\bra{\psi_k}\Big]}{\nabla\psi_i}\nonumber\\
&=\nabla\F_{ji}-\sum_{k=1}^{\infty}\braket{\nabla\psi_j}{\psi_k}
\braket{\psi_k}{\nabla\psi_i}\nonumber\\
&=\nabla\F_{ji}-\sum_{k=1}^{\infty}\braket{\psi_k}{\nabla\psi_j}^*
\braket{\psi_k}{\nabla\psi_i}\nonumber\\
&=\nabla\F_{ji}+\sum_{k=1}^{\infty}\braket{\psi_j}{\nabla\psi_k}
\braket{\psi_k}{\nabla\psi_i}\nonumber\\
&=\nabla\F_{ji}+\sum_{k=1}^{\infty}\F_{jk}\cdot\F_{ki}
\end{align}
$$

To transition from line 3 to line 5, we utilized two key properties. First, we applied the standard complex conjugate rule for inner products: $\braket{\nabla\psi_j}{\psi_k} = \braket{\psi_k}{\nabla\psi_j}^{\*}$. 

Second, we applied the anti-Hermitian property of the non-adiabatic coupling matrix ($\F_{jk} = -\F_{kj}^{\*}$) to replace $-\braket{\psi_k}{\nabla\psi_j}^{\*}$ with $\braket{\psi_j}{\nabla\psi_k}$  (see [antihermitian proof](derivations_antihermitian_F.md)). In compact matrix notation, this gives us the relation $\G = \nabla\F + \F\cdot\F$.

---

### Factorizing the Dressed Kinetic Energy Operator
We can now substitute our expanded matrix expression for $\G$ into the non-adiabatic kinetic energy operator. Note the explicit inclusion of the identity matrix $\mat I$ to ensure dimensional consistency across the operator matrices:

$$
\begin{align}
-\frac{1}{2}\nabla^{2}\mat I
-\mat\Lambda
&=-\frac{1}{2}\nabla^2\mat I-\frac{1}{2}
\left( 2\F\cdot\nabla\mat I +\G \right)\nonumber\\
&=-\frac{1}{2}\left[\nabla^2\mat I+2\F\cdot\nabla\mat I +\G \right]\nonumber\\
&=-\frac{1}{2}\left[\nabla^2\mat I+2\F\cdot\nabla\mat I +\nabla\F+\F\cdot\F \right]
\label{eq:sub-explicit-G}
\end{align}
$$

Because these terms act as differential operators, we must carefully handle the gradient. The product rule for the gradient operator $\nabla$ acting on a matrix $\F$ multiplied by an arbitrary test vector $\boldsymbol{\chi}$ is $\nabla \cdot (\F\boldsymbol{\chi}) = (\nabla\F)\boldsymbol{\chi} + \F \cdot (\nabla\boldsymbol{\chi})$. Removing the test vector yields the purely operator-based identity:


$$
\begin{align}
\nabla \cdot (\F\boldsymbol{\chi}) &= (\nabla\F)\boldsymbol{\chi} + \F \cdot (\nabla\boldsymbol{\chi})
\end{align}
$$

or equally:

$$
\begin{align}
\nabla \cdot \F = \nabla\F + \F \cdot \nabla\mat I
\label{eq:operator-algebra}
\end{align}
$$

We can split the $2\F\cdot\nabla\mat I$ term in Equation \ref{eq:sub-explicit-G} and apply this operator identity to factorize the bracketed expression. To make the algebraic factorization explicit, we express the free gradient operators with their corresponding identity matrices ($\nabla = \nabla\mat I$):

$$
\begin{align}
\nabla^2\mat I+2\F\cdot\nabla\mat I +\nabla\F+\F\cdot\F &=\nabla^2\mat I+\F\cdot\nabla\mat I + (\nabla\F + \F\cdot\nabla\mat I)+\F\cdot\F\nonumber\\
&=\nabla^2\mat I+\F\cdot\nabla\mat I +\nabla\cdot\F+\F\cdot\F\nonumber\\
&=(\nabla\mat I)\cdot(\nabla\mat I)+\F\cdot(\nabla\mat I) +(\nabla\mat I)\cdot\F+\F\cdot\F\nonumber\\
&=(\nabla\mat I)\cdot\left(\nabla\mat I+\F\right)+\F\cdot\left(\nabla\mat I +\F\right)\nonumber\\
&=\left(\nabla\mat I+\F \right)\cdot\left(\nabla\mat I+\F\right)\nonumber\\
&=\left(\nabla\mat I+\F \right)^2
\label{eq:dressed-term-factorisation}
\end{align}
$$



Substituting this perfect square back into Equation \ref{eq:sub-explicit-G} yields the familiar, elegant "dressed" form of the non-adiabatic kinetic energy operator:


$$
\begin{align}
-\frac{1}{2}\nabla^{2}\mat I
-\mat\Lambda=-\frac{1}{2}\left(\nabla\mat I+\F \right)^2
\label{eq:dressed-term}
\end{align}
$$

---

### Comments:
When implementing these equations in practical computational chemistry or molecular dynamics codes, a vital distinction must be made regarding the matrix $\G$.The elegant relation $\G = \nabla\F + \F\cdot\F$ derived above relies heavily on Equation \ref{eq:electronic_completeness}, the exact resolution of the identity. This is only strictly true for an infinite, complete basis set. In practice, computations always employ a truncated, finite basis set. Consequently, the resolution of the identity is incomplete, and the exact equivalence breaks down. If one attempts to construct $\G$ purely from $\F$ using $\nabla\F + \F\cdot\F$ in a finite basis, it will introduce non-negligible errors into the simulation. Therefore, for rigorous numerical implementations, one must generally avoid this substitution and compute the raw scalar couplings directly via $G_{ji}=\nabla\F_{ji}-\braket{\nabla\psi_j}{\nabla\psi_i}$, or explicitly evaluate the sum over the available finite states.