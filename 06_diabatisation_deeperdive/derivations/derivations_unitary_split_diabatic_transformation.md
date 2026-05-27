If $\F_a$ is anti-Hermitian and $\Cmat_a(R_0)$ is unitary, then $\Cmat_a(R)$ remains unitary. To see this, differentiate $\Cmat_a^\dagger\Cmat_a$. 

First, we find the derivative of $\Cinv_a$

$$
\begin{align}
\frac{\partial \Cmat_a^\dagger}{\partial R}
&=\left(
-\F_a\Cmat_a
\right)^\dagger
\nonumber\\
&=-\Cmat_a^\dagger\F_a^\dagger
\nonumber\\
&=\Cmat_a^\dagger\F_a,
\end{align}
$$

where anti-Hermiticity, $\F_a^\dagger=-\F_a$, has been used. Therefore the derivative of $\Cmat_a^\dagger\Cmat_a$ is:

$$
\begin{align}
\frac{\partial}{\partial R}
\left(
\Cmat_a^\dagger\Cmat_a
\right)
&=\left(
\frac{\partial \Cmat_a^\dagger}{\partial R}
\right)
\Cmat_a
+
\Cmat_a^\dagger
\left(
\frac{\partial \Cmat_a}{\partial R}
\right)
\nonumber\\
&=\Cmat_a^\dagger\F_a\Cmat_a
-\Cmat_a^\dagger\F_a\Cmat_a
\nonumber\\
&=0.
\end{align}
$$

Thus, if $\Cmat_a^\dagger\Cmat_a=\mathbb I$ at the reference point, it remains equal to $\mathbb I$ along the path.