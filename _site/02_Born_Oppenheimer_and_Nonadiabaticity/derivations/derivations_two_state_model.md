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

Before substituting the eigenvalues in to fix the coefficients of the eigenfunctions. We could first find the eigenfunctions. That is we could apply a generic unitary transformation matrix of form:

$$
\begin{align}
\Cmat = \begin{pmatrix}
\cos\theta&\sin\theta\\
-\sin\theta&\cos\theta\\
\end{pmatrix}
\end{align}
$$

Then:

$$
\begin{align}
\Cinv \W \Cmat& = \V\nonumber\\
\begin{pmatrix}
\cos\theta&-\sin\theta\\
\sin\theta&\cos\theta\\
\end{pmatrix}
\begin{pmatrix}
W_{11} & W_{12} \\
W_{12} & W_{22}
\end{pmatrix}
\begin{pmatrix}
\cos\theta&\sin\theta\\
-\sin\theta&\cos\theta\\
\end{pmatrix}&=
\begin{pmatrix}
V_{11} & 0 \\
0 & V_{22}
\end{pmatrix}\nonumber\\
\begin{pmatrix}
c&-s\\
s&c\\
\end{pmatrix}\begin{pmatrix}W_{11} c - W_{12} s & W_{11} s + W_{12} c\\W_{12} c - W_{22} s & W_{12} s + W_{22} c\end{pmatrix}&=
\begin{pmatrix}
V_{11} & 0 \\
0 & V_{22}
\end{pmatrix}\nonumber\\
\begin{pmatrix}W_{11} c^2 - 2 W_{12} s c+ W_{22} s^2 & W_{11} s c- W_{12} s^2 + W_{12} c^2 - W_{22} s c\\W_{11} s c- W_{12} s^2 + W_{12} c^2 - W_{22} s c& W_{11} s^2 + 2 W_{12} s c+ W_{22} c^2\end{pmatrix}
&=
\begin{pmatrix}
V_{11} & 0 \\
0 & V_{22}
\end{pmatrix}\nonumber\\
\end{align}
$$

This implies:

$$
\begin{align}
W_{11} s c- W_{12} s^2 + W_{12} c^2 - W_{22} s c=0
\end{align}
$$

First apply double angle formula:

$$
\begin{align}
\cos(A\pm B) =\cos(A)\cos(B)\mp\sin(A)\sin(B) \nonumber\\
\sin(A\pm B) = \sin(A)\cos(B)\pm\cos(A)\sin(B)
\end{align}
$$

Such that:

$$
\begin{align}
W_{12}(c^2-s^2) = W_{12}\cos(2\theta)\\
(W_{11}-W_{22})sc = \frac{1}{2}\sin(2\theta)
\end{align}
$$

Then:

$$
\begin{align}
W_{11} s c- W_{12} s^2 + W_{12} c^2 - W_{22} s c=\frac{1}{2}\sin(2\theta)(W_{11}-W_{22}) + W_{12} \cos(2\theta) 
\end{align}
$$

Hence:

$$
\begin{align}
\frac{1}{2}\sin(2\theta)(W_{11}-W_{22}) + W_{12} \cos(2\theta) &=0\nonumber\\
-\frac{1}{2}\frac{\sin(2\theta)}{\cos(2\theta)}&= \frac{W_{12}}{W_{11}-W_{22}}  \nonumber\\
\tan{2\theta}&= \frac{2W_{12}}{W_{22}-W_{11}}  \nonumber\\
\end{align}
$$

This implies, as long as $\theta$ satisfies the above condition, then the columns in $\Cmat$ defines our eigenvectors (adiabatic eigenfunction). Then we could trivially take:

$$
\begin{align}
\ket{\psi_1} =\cos{\theta}\ket{\varphi_1} -  \sin{\theta}\ket{\varphi_2}\nonumber\\
\ket{\psi_2} =\sin{\theta}\ket{\varphi_1} +  \cos{\theta}\ket{\varphi_2}
\end{align}
$$

or in vector notation:

$$
\begin{align}
\ket{\psi_1} = \begin{pmatrix}\cos\theta \\ -\sin{\theta}\end{pmatrix}\nonumber\\
\ket{\psi_2} = \begin{pmatrix}\sin\theta \\ \cos{\theta}\end{pmatrix}
\end{align}
$$
### The derivative coupling identity in two state model + 1D?

The NACV $\F_{12}$

$$
\begin{align}
\pder{q}\ket{\psi_2} = \pder{q}\left[\sin{\theta}\ket{\varphi_1} +  \cos{\theta}\ket{\varphi_2}\right]
\end{align}
$$

Using chain rule:


$$
\begin{align}
\pder{q}\ket{\psi_2} &= \pdv{\theta}{q}\pder{\theta}\left[\sin{\theta}\ket{\varphi_1} +  \cos{\theta}\ket{\varphi_2}\right] \nonumber\\&= \pdv{\theta}{q}\left[\cos{\theta}\ket{\varphi_1} -  \sin{\theta}\ket{\varphi_2}\right] \nonumber \\
&=\pdv{\theta}{q}\ket{\psi_1}
\end{align}
$$

Hence:

$$
\F_{12} = \braket{\psi_1}{\pdv{\theta}{q}\psi_1}=\pdv{\theta}{q}
$$

Now since:

$$
\begin{align}
\tan{2\theta}&= \frac{2W_{12}}{W_{22}-W_{11}} 
\end{align}
$$

Using implicit differentiation:



For the RHS applying quotient rule $\pder{q}(\frac uv)=\frac{\pdv{u}{q}v-u\pdv{v}{q}}{v^2}$

$$
\pdv{}{ q}\left(\frac{2W_{12}}{W_{22}-W_{11}}\right) = \frac{2\pdv{ W_{12}}{ q}(W_{22}-W_{11}) - 2W_{12}\left(\pdv{ W_{22}}{ q} - \pdv{ W_{11}}{ q}\right)}{(W_{22}-W_{11})^2}
$$

For the LHS:

$$
\begin{align}
\pdv{}{q}\tan{2\theta}&= \sec^2(2\theta)\pdv{}{q}(2\theta)=2\sec^2(2\theta)\pdv{\theta}{q}
\end{align}
$$

Now using $\sec^2(2\theta) = 1 + \tan^2(2\theta)$, :

$$\sec^2(2\theta) = 1 + \left(\frac{2W_{12}}{W_{22}-W_{11}}\right)^2 = \frac{(W_{22}-W_{11})^2 + 4W_{12}^2}{(W_{22}-W_{11})^2}$$

Hence:

$$2 \left[ \frac{(W_{22}-W_{11})^2 + 4W_{12}^2}{(W_{22}-W_{11})^2} \right] \pdv{\theta}{ q} = \frac{2\pdv{ W_{12}}{ q}(W_{22}-W_{11}) - 2W_{12}\left(\pdv{ W_{22}}{ q} - \pdv{ W_{11}}{ q}\right)}{(W_{22}-W_{11})^2}$$

Divide by the bracketed term on the left to isolate $\frac{\partial \theta}{\partial q}$,

$$F_{12} = \pdv{\theta}{q} = \frac{\pdv{ W_{12}}{ q}(W_{22}-W_{11}) - W_{12}\left(\pdv{ W_{22}}{ q} - \pdv{ W_{11}}{ q}\right)}{(W_{22}-W_{11})^2 + 4W_{12}^2}$$

need to link to LVC models $W_{22}-W_{11}=\boldsymbol{\kappa}\cdot\mat q$ and $W_{12} =\boldsymbol{\lambda}\cdot \mat q $ explaining the two branching coordiantes and also how to lead to the Lorentizian form. 