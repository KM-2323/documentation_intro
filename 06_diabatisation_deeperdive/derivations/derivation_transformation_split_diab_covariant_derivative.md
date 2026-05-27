Recall 

$$
\begin{align}
\left[
-\frac{1}{2\mu}
\left(
\mathbb I\frac{\partial}{\partial R}
+
\F
\right)^2
+
\V
\right]
\boldsymbol{\chi}^{\mathrm{Adiab}}
=E\boldsymbol{\chi}^{\mathrm{Adiab}}.
\label{eq:adiabatic_covariant_1d}
\end{align}
$$


To see how it transformed under an unitary transformtion, apply the adiabatic covariant derivative to $\Cmat_a\boldsymbol{\chi}^{\mathrm{quasi}}$:

$$
\begin{align}
\mathcal D_A
\left(
\Cmat_a\boldsymbol{\chi}^{\mathrm{quasi}}
\right)
&=\left(
\frac{\partial}{\partial R}
+
\F_a+\F_b
\right)
\left(
\Cmat_a\boldsymbol{\chi}^{\mathrm{quasi}}
\right)
\nonumber\\
&=\left(
\frac{\partial \Cmat_a}{\partial R}
\right)
\boldsymbol{\chi}^{\mathrm{quasi}}
+
\Cmat_a
\frac{\partial \boldsymbol{\chi}^{\mathrm{quasi}}}{\partial R}
+
\F_a\Cmat_a
\boldsymbol{\chi}^{\mathrm{quasi}}
+
\F_b\Cmat_a
\boldsymbol{\chi}^{\mathrm{quasi}}
\nonumber\\
&=-\F_a\Cmat_a
\boldsymbol{\chi}^{\mathrm{quasi}}
+
\Cmat_a
\frac{\partial \boldsymbol{\chi}^{\mathrm{quasi}}}{\partial R}
+
\F_a\Cmat_a
\boldsymbol{\chi}^{\mathrm{quasi}}
+
\F_b\Cmat_a
\boldsymbol{\chi}^{\mathrm{quasi}}
\nonumber\\
&=\Cmat_a
\frac{\partial \boldsymbol{\chi}^{\mathrm{quasi}}}{\partial R}
+
\F_b\Cmat_a
\boldsymbol{\chi}^{\mathrm{quasi}}
\nonumber\\
&=\Cmat_a
\left(
\frac{\partial}{\partial R}
+
\Cmat_a^{-1}\F_b\Cmat_a
\right)
\boldsymbol{\chi}^{\mathrm{quasi}}.
\end{align}
$$

Define the transformed residual coupling

$$
\begin{align}
\widetilde{\F}_b
=\Cmat_a^{-1}\F_b\Cmat_a.
\label{eq:tilde_fb_definition}
\end{align}
$$

Then

$$
\begin{align}
\boxed{
\mathcal D_A
\left(
\Cmat_a\boldsymbol{\chi}^{\mathrm{quasi}}
\right)
=\Cmat_a
\left(
\frac{\partial}{\partial R}
+
\widetilde{\F}_b
\right)
\boldsymbol{\chi}^{\mathrm{quasi}}.
}
\label{eq:first_derivative_split_identity}
\end{align}
$$

Because Eq. $\eqref{eq:first_derivative_split_identity}$ holds for any vector in the transformed representation, it may be applied a second time:

let 

$$\chivec^\text{new}\equiv\left(\frac{\partial}{\partial R}+\tilde \F_b\right)\chivec^{\text{quasi}}$$

Then:

$$
\begin{align}
\mathcal D_A^2(\Cmat_a\chivec^{\text{quasi}})
&=\mathcal D_A\left[\Cmat_a\left(\frac{\partial}{\partial R}+\tilde \F_b\right)\chivec^{\text{quasi}}\right]\nonumber\\
&=\mathcal D_A\left[\Cmat_a\chivec^\text{new}\right]\nonumber\\
&=\Cmat_a\left(\frac{\partial}{\partial R}+\tilde \F_b\right)\chivec^{\text{new}}\nonumber\\
&=\Cmat_a\left(\frac{\partial}{\partial R}+\tilde \F_b\right)^2\chivec^{\text{quasi}}\nonumber
\end{align}
$$

Hence:

$$
\begin{align}
\boxed{
\mathcal D_A^2
\left(
\Cmat_a\boldsymbol{\chi}^{\mathrm{quasi}}
\right)
=\Cmat_a
\left(
\frac{\partial}{\partial R}
+
\widetilde{\F}_b
\right)^2
\boldsymbol{\chi}^{\mathrm{quasi}}.
}
\label{eq:squared_split_identity}
\end{align}
$$

Substituting

$$
\begin{align}
\boldsymbol{\chi}^{\mathrm{Adiab}}
=\Cmat_a
\boldsymbol{\chi}^{\mathrm{quasi}}
\end{align}
$$

into Eq. $\eqref{eq:adiabatic_covariant_1d}$, using Eq. $\eqref{eq:squared_split_identity}$, and left multiplying by $\Cmat_a^{-1}$ gives

$$
\begin{align}
\boxed{
\left[
-\frac{1}{2\mu}
\left(
\frac{\partial}{\partial R}
+
\widetilde{\F}_b
\right)^2
+
\W
\right]
\boldsymbol{\chi}^{\mathrm{quasi}}
=E\boldsymbol{\chi}^{\mathrm{quasi}},
}
\label{eq:split_diabatic_nuclear_equation}
\end{align}
$$

where

$$
\begin{align}
\boxed{
\W
=\Cmat_a^{-1}\V\Cmat_a.
}
\label{eq:split_diabatic_potential}
\end{align}
$$