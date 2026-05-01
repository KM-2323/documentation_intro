For a 2-state system, the diabatic potentials are

$$
\begin{align}
\W=\begin{pmatrix}
W_{11} & W_{12} \\
W_{12} & W_{22}
\end{pmatrix}
\end{align}
$$

where due to symmetry (the diabatic eigenfunctions are chosen to be real), the $\W_{12}=\W_{21}$. To find the eigenvalues of above we seek to find the $\lambda$ such that:

$$
\begin{align}
\det{(\W-\lambda\mat I)}=0
\end{align}
$$

for non-trivial eigenfunctions (they are the adiabatic electronic functions expressed in basis of diabatic electronic functions)

$$
\begin{align}
\det\left[\begin{pmatrix}
W_{11}-\lambda & W_{12} \\
W_{12} & W_{22}-\lambda
\end{pmatrix}\right]&=(W_{11}-\lambda)( W_{22}-\lambda)-W_{12}^2\nonumber\\
&=\lambda^2-\lambda(W_{22}+W_{11})+W_{11}W_{22}-W_{12}^2
\end{align}
$$

applying quadratic formula for finding the root:

$$
\lambda_{\pm} = \frac{-b\pm\sqrt{b^2-4ac}}{2a};\qquad a\lambda^2+b\lambda+c=0
$$

So it is clear that:

$$
a = 1;\quad b =-(W_{22}+W_{11});\quad c=W_{11}W_{22}-W_{12}^2
$$

So:

$$
\begin{align}
\lambda_{\pm} &= \frac{W_{22}+W_{11}}{2}\pm\frac{\sqrt{(W_{22}+W_{11})^2-4W_{11}W_{22}+4W_{12}^2}}{2}\nonumber\\
&= \frac{W_{22}+W_{11}}{2}\pm\frac{\sqrt{W_{22}^2+W_{11}^2+2W_{11}W_{22}-4W_{11}W_{22}+4W_{12}^2}}{2}\nonumber\\
&= \frac{W_{22}+W_{11}}{2}\pm\frac{\sqrt{W_{22}^2+W_{11}^2-2W_{11}W_{22}+4W_{12}^2}}{2}\nonumber\\
&= \frac{W_{22}+W_{11}}{2}\pm\frac{\sqrt{(W_{22}-W_{11})^2+4W_{12}^2}}{2}\nonumber\\&= 
\frac{W_{22}+W_{11}}{2}\pm\frac{\sqrt{(\Delta W)^2+4W_{12}^2}}{2}\nonumber\\
\end{align}
$$

Before substituting the eigenvalues in to fix the coefficients of the eigenfunctions. We could first find the eigenfunctions. That is suppose 