we can investigate the effect of applying $-\frac{1}{2}\nabla_{\mat q}^2$ and $\mat \Lambda$ to adiabatic nuclear wavefunction $\chivec^{(a)}=\Cmat\chivec^{(d)}$

$$
\begin{align}
-\frac{1}{2}\nabla_{\mat q}^2\chivec^{(a)}&=-\frac{1}{2}\nabla_{\mat q}^2\left[\Cmat\chivec^{(d)}\right]\nonumber\\
&=-\frac{1}{2}\nabla_{\mat q}\left[\left(\nabla_{\mat q}\Cmat\right)\cdot\chivec^{(d)}+\Cmat\cdot\left(\nabla_{\mat q}\chivec^{(d)}\right)\right]\nonumber\\
&=-\frac{1}{2}\left[\left(\nabla_{\mat q}^2\Cmat\right)\chivec^{(d)}+2\left(\nabla_{\mat q}\Cmat\right)\cdot\left(\nabla_{\mat q}\chivec^{(d)}\right)+\Cmat\left(\nabla_{\mat q}^2\chivec^{(d)}\right)\right]\nonumber\\
&=-\frac{1}{2}\left[\left(\nabla_{\mat q}^2\Cmat\right)+2\left(\nabla_{\mat q}\Cmat\right)\cdot\nabla_{\mat q}+\Cmat\nabla_{\mat q}^2\right]\chivec^{(d)}
\end{align}
$$

$$
\begin{align}
\mat\Lambda\chivec^{(a)}&=\frac{1}{2}\left[2\F\cdot\nabla_{\mat q}
+\G\right]\left[\Cmat\chivec^{(d)}\right]\nonumber\\
&=\frac{1}{2}\left[2\F\cdot\left(\nabla_{\mat q}\Cmat\right)\chivec^{(d)}+2\F\Cmat\cdot\left(\nabla_{\mat q}\chivec^{(d)}\right)
+\G\Cmat\chivec^{(d)}\right]\nonumber\\
&=\frac{1}{2}\left[2\F\cdot\left(\nabla_{\mat q}\Cmat\right)+2\F\Cmat\cdot\nabla_{\mat q}
+\G\Cmat\right]\chivec^{(d)}
\end{align}
$$

So:

$$
\begin{align}
\left[
-\frac{1}{2}\nabla_{\mat q}^{2}\mat I
+\mat V
-\mat\Lambda
\right]
\chivec^{(a)}=&\left[
-\frac{1}{2}\nabla_{\mat q}^{2}\mat I
+\mat V
-\mat\Lambda
\right]
\Cmat\chivec^{(d)}\nonumber\\
=&\left[
-\frac{1}{2}\Big[\left(\nabla_{\mat q}^2\Cmat\right)+2\left(\nabla_{\mat q}\Cmat\right)\cdot\nabla_{\mat q}+\Cmat\nabla_{\mat q}^2\right]
+\mat V\Cmat \nonumber\\&
 -\frac{1}{2}\left[2\F\cdot\left(\nabla_{\mat q}\Cmat\right)+2\F\Cmat\cdot\nabla_{\mat q}
+\G\Cmat\right]
\Big]\chivec^{(d)}\nonumber\\
=&\left[
\V\Cmat-\frac{1}{2}\Big[\left(\nabla_{\mat q}^2\Cmat\right)+2\F\cdot\left(\nabla_{\mat q}\Cmat\right)+\G\Cmat\right]\nonumber\\
&-\frac{1}{2}2\left[\nabla_{\mat q}\Cmat+\F\Cmat\right]\cdot\nabla_{\mat q}-\frac{1}{2}\Cmat\nabla_{\mat q}^2\Big]\chivec^{(d)}
\label{eq:diabatic_tdse_intermediate}
\end{align}
$$

Apart from being unitary, $\Cmat$ has not beed restricted. So it can be chosen to solve the differential equation

$$
\begin{align}
\nabla_{\mat q}\Cmat+\F\Cmat=0
\label{eq:ADT_transform_differential}
\end{align}
$$

If further, the adiabatic function $\{\psi_n\}$ form a complete set, then we can take the divergence of equation \eqref{eq:ADT_transform_differential}

$$
\begin{align}
\nabla_{\mat q}^2\Cmat+\left(\nabla_{\mat q}\F\right)\Cmat+\F\left(\nabla_{\mat q}\Cmat\right)=0
\end{align}
$$

Then since $\{\psi_n\}$ is a complete set, recall:

$$
 \nabla_{\mat q}\F =\G - \F\cdot\F
$$

So:

$$
\begin{align}
\nabla_{\mat q}^2\Cmat+\left(\G - \F\cdot\F\right)\Cmat+\F\cdot\left(\nabla_{\mat q}\Cmat\right)=0\nonumber\\
\nabla_{\mat q}^2\Cmat+\G\Cmat - \F\cdot\F\Cmat+\F\cdot\left(\nabla_{\mat q}\Cmat\right)=0\nonumber\\
\nabla_{\mat q}^2\Cmat+\G\Cmat +\F\cdot\left(\nabla_{\mat q}\Cmat-\F\Cmat\right)=0
\end{align}
$$

Substituting \eqref{eq:ADT_transform_differential}:

$$
\begin{align}
\nabla_{\mat q}^2\Cmat+\G\Cmat +2\F\cdot\left(\nabla_{\mat q}\Cmat\right)=0
\label{eq:divergence_adt_differential}
\end{align}
$$

which is the first term inside the braket of \eqref{eq:diabatic_tdse_intermediate}. Now applying \eqref{eq:divergence_adt_differential} and \eqref{eq:ADT_transform_differential} in  \eqref{eq:diabatic_tdse_intermediate}:

$$
\begin{align}
\left[
-\frac{1}{2}\nabla_{\mat q}^{2}\mat I
+\mat V
-\mat\Lambda
\right]
\chivec^{(a)}=
&\Big[
\V\Cmat-\frac{1}{2}\Cmat\nabla_{\mat q}^2\Big]\chivec^{(d)}
\end{align}
$$

Now applting $\Cinv$ from the left:

$$
\begin{align}
\Cinv\left[
-\frac{1}{2}\nabla_{\mat q}^{2}\mat I
+\mat V
-\mat\Lambda
\right]
\chivec^{(a)}=
&\Cinv\Big[
\V\Cmat-\frac{1}{2}\Cmat\nabla_{\mat q}^2\Big]\chivec^{(d)}\nonumber\\
=&\Big[
\Cinv\V\Cmat-\frac{1}{2}\Cinv\Cmat\nabla_{\mat q}^2\Big]\chivec^{(d)}\nonumber\\
=&\Big[
\W-\frac{1}{2}\nabla_{\mat q}^2\Big]\chivec^{(d)}
\end{align}
$$

where $\W$ is known as the diabatic matrix.