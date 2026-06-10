To demonstrate why the tilt heading $\theta_s$ is defined by the ratio of the dimensionless tilt components, we must isolate the average energy of the two adiabatic states and find the angular direction in which it increases most rapidly. Starting from the topography energy expression, the energies of the upper and lower adiabatic surfaces in the branching plane are

$$\begin{align}
V_{\pm}(x,y)
=
E^\times
+
\delta_{gh}
\left[
s_x^{\mathrm{top}}x
+
s_y^{\mathrm{top}}y
\pm
\sqrt{
(x^2+y^2)
+
\Delta_{gh}(x^2-y^2)
}
\right].
\end{align}$$

The average potential energy of these two surfaces at any displacement $(x,y)$ is the arithmetic mean, $V_{\mathrm{avg}} = \frac{1}{2}\left(V_+ + V_-\right)$. The square-root terms strictly govern the splitting and cancels, yielding a purely linear dependence on the nuclear displacement:

$$\begin{align}
V_{\mathrm{avg}}(x,y)
=
E^\times
+
\delta_{gh}
\left(
s_x^{\mathrm{top}}x
+
s_y^{\mathrm{top}}y
\right).
\label{eq:average_energy_xy}
\end{align}$$

To analyse the directional dependence of this energy gradient, we transform the branching coordinates into polar form, defining a constant radial displacement $r$ and a polar angle $\theta$:

$$
\begin{align}
x &= r\cos\theta, \\
y &= r\sin\theta.
\end{align}
$$

Substituting these into Eq. $\eqref{eq:average_energy_xy}$ gives the average energy as a function of the angle $\theta$:

$$\begin{align}
V_{\mathrm{avg}}(r, \theta)
=
E^\times
+
\delta_{gh}r
\left(
s_x^{\mathrm{top}}\cos\theta
+
s_y^{\mathrm{top}}\sin\theta
\right).
\end{align}$$

For a fixed distance $r$ from the intersection seam, we seek the angle $\theta_s$ that maximises $V_{\mathrm{avg}}$, corresponding to the stationary point, by differentiating with respect to $\theta$ and setting the result to zero:

$$\begin{align}
\frac{\partial V_{\mathrm{avg}}}{\partial \theta}
=
\delta_{gh}r
\left(
-s_x^{\mathrm{top}}\sin\theta
+
s_y^{\mathrm{top}}\cos\theta
\right)
=
0.
\end{align}$$

Dividing through by the constant prefactor $\delta_{gh}r$ (assuming $r \neq 0$), we rearrange the terms to solve for the maximum angle $\theta_s$:

$$\begin{align}
s_y^{\mathrm{top}}\cos\theta_s
&=
s_x^{\mathrm{top}}\sin\theta_s
\nonumber \\[6pt]
\frac{s_y^{\mathrm{top}}}{s_x^{\mathrm{top}}}
&=
\frac{\sin\theta_s}{\cos\theta_s}.
\end{align}$$

We arrive at the final definition for the tilt heading:

$$\begin{align}
\tan\theta_s
=
\frac{s_y^{\mathrm{top}}}{s_x^{\mathrm{top}}}.
\end{align}$$

So it can be seen that the linear term in Eq. $\eqref{eq:average_energy_xy}$ represents the dot product between the dimensionless topographical tilt vector $\mathbf{s}^{\mathrm{top}} = (s_x^{\mathrm{top}}, s_y^{\mathrm{top}})$ and the displacement vector $\mathbf{r} = (x, y)$. The dot product $\mathbf{s}^{\mathrm{top}} \cdot \mathbf{r}$ reaches its strict mathematical maximum when the vectors are completely parallel. Therefore, the average energy ascends most steeply exactly along the angle subtended by the vector $\mathbf{s}^{\mathrm{top}}$ in the branching plane