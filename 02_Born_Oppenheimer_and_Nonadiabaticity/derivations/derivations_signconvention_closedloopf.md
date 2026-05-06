### Sign of the $\pi$ loop integral under the chosen mixing-angle convention

With the convention adopted here,

$$
x=\Delta,
\qquad
y=2W_{12},
$$

and

$$
\theta
=-\frac{1}{2}\operatorname{atan2}(y,x).
$$

Define

$$
\phi=\operatorname{atan2}(y,x).
$$

Then $\phi$ is the ordinary polar angle in the $(x,y)$ plane:

$$
x=\rho\cos\phi,
\qquad
y=\rho\sin\phi.
$$

Therefore,

$$
\theta=-\frac{\phi}{2}.
$$

A positive loop/closed countour integral in the $(x,y)$ plane is taken to mean the standard mathematical positive orientation,

$$
x=\rho\cos s,
\qquad
y=\rho\sin s,
\qquad
0\le s\le 2\pi .
$$

Thus, if $x$ is drawn to the right and $y$ is drawn upward, a positive loop is anticlockwise.

Along this loop,

$$
\phi=s.
$$

Hence, after one positive loop,

$$
\Delta \phi
=\phi(2\pi)-\phi(0)
=2\pi.
$$

Since

$$
\theta=-\frac{\phi}{2},
$$

we obtain

$$
\Delta\theta
=-\frac{1}{2}\Delta\phi
=-\frac{1}{2}(2\pi)
=-\pi.
$$

So, under this convention, the mixing angle decreases by $\pi$ after one positively oriented circuit.

Now recall the nonadiabatic coupling vector convention

$$
\mathbf F_{12}
=\braket{\psi_1}{\nabla_{\mathbf q}\psi_2}
=-\nabla_{\mathbf q}\theta.
$$

Therefore, along any path,

$$
\mathbf F_{12}\cdot d\mathbf q
=-\nabla_{\mathbf q}\theta\cdot d\mathbf q
=-d\theta.
$$

Thus, around the loop,

$$
\oint \mathbf F_{12}\cdot d\mathbf q
=-\oint d\theta
=-\Delta\theta.
$$

For the positive loop,

$$
\Delta\theta=-\pi.
$$

Therefore,

$$
\oint \mathbf F_{12}\cdot d\mathbf q
=-(-\pi)
=+\pi.
$$

Hence, with the present convention,

$$
\boxed{
\text{positive loop: } \Delta\phi=+2\pi
}
$$

$$
\boxed{
\theta=-\frac{\phi}{2}
\Rightarrow
\Delta\theta=-\pi
}
$$

$$
\boxed{
\mathbf F_{12}=-\nabla\theta
\Rightarrow
\oint \mathbf F_{12}\cdot d\mathbf q=+\pi
}
$$

The same result can be seen directly from the vector-field form. Using

$$
x=\Delta,
\qquad
y=2W_{12},
$$

the local two-state nonadiabatic coupling vector can be written as

$$
\mathbf F_{12}
=\frac{1}{2}
\frac{
x\nabla_{\mathbf q}y-y\nabla_{\mathbf q}x
}{
x^2+y^2
}.
$$

Taking the dot product with a nuclear displacement $d\mathbf q$, and using

$$
dx=\nabla_{\mathbf q}x\cdot d\mathbf q,
\qquad
dy=\nabla_{\mathbf q}y\cdot d\mathbf q,
$$

gives

$$
\mathbf F_{12}\cdot d\mathbf q
=\frac{1}{2}
\frac{
x\,dy-y\,dx
}{
x^2+y^2
}.
$$

Now introduce polar coordinates in the local branching plane,

$$
x=\rho\cos\phi,
\qquad
y=\rho\sin\phi.
$$

Differentiating,

$$
dx=\cos\phi\,d\rho-\rho\sin\phi\,d\phi,
$$

$$
dy=\sin\phi\,d\rho+\rho\cos\phi\,d\phi.
$$

Then

$$
x\,dy-y\,dx
$$

becomes

$$
x\,dy
=\rho\cos\phi
\left(
\sin\phi\,d\rho+\rho\cos\phi\,d\phi
\right),
$$

and

$$
y\,dx
=\rho\sin\phi
\left(
\cos\phi\,d\rho-\rho\sin\phi\,d\phi
\right).
$$

Therefore,

$$
x\,dy-y\,dx
=\rho\cos\phi\sin\phi\,d\rho
+\rho^2\cos^2\phi\,d\phi
-\rho\sin\phi\cos\phi\,d\rho
+\rho^2\sin^2\phi\,d\phi.
$$

The $d\rho$ terms cancel, leaving

$$
x\,dy-y\,dx
=\rho^2
\left(
\cos^2\phi+\sin^2\phi
\right)d\phi.
$$

Thus,

$$
x\,dy-y\,dx
=\rho^2 d\phi.
$$

Since

$$
x^2+y^2=\rho^2,
$$

we get

$$
\mathbf F_{12}\cdot d\mathbf q
=\frac{1}{2}
\frac{\rho^2 d\phi}{\rho^2}
=\frac{1}{2}d\phi.
$$

Integrating around one positive loop gives

$$
\oint \mathbf F_{12}\cdot d\mathbf q
=\frac{1}{2}
\oint d\phi.
$$

For a positive anticlockwise loop,

$$
\oint d\phi=2\pi.
$$

Therefore,

$$
\boxed{
\oint \mathbf F_{12}\cdot d\mathbf q
=\frac{1}{2}(2\pi)
=+\pi
}.
$$

This can also be checked explicitly on the circular loop

$$
x=\rho\cos s,
\qquad
y=\rho\sin s,
\qquad
s:0\to2\pi.
$$

In the $(x,y)$ coordinate representation,

$$
\mathbf F_{12}
=\frac{1}{2(x^2+y^2)}
\begin{pmatrix}
-y\\
x
\end{pmatrix}.
$$

Since

$$
x^2+y^2=\rho^2,
$$

we have

$$
\mathbf F_{12}
=\frac{1}{2\rho^2}
\begin{pmatrix}
-\rho\sin s\\
\rho\cos s
\end{pmatrix}
=\frac{1}{2\rho}
\begin{pmatrix}
-\sin s\\
\cos s
\end{pmatrix}.
$$

Also,

$$
d\mathbf r
=\begin{pmatrix}
dx\\
dy
\end{pmatrix}
=\begin{pmatrix}
-\rho\sin s\\
\rho\cos s
\end{pmatrix}ds.
$$

Therefore,

$$
\mathbf F_{12}\cdot d\mathbf r
=\frac{1}{2\rho}
\begin{pmatrix}
-\sin s\\
\cos s
\end{pmatrix}
\cdot
\begin{pmatrix}
-\rho\sin s\\
\rho\cos s
\end{pmatrix}
ds.
$$

Thus,

$$
\mathbf F_{12}\cdot d\mathbf r
=\frac{1}{2}
\left(
\sin^2s+\cos^2s
\right)ds
=\frac{1}{2}ds.
$$

Hence,

$$
\oint \mathbf F_{12}\cdot d\mathbf r
=\int_0^{2\pi}\frac{1}{2}ds
=+\pi.
$$

For comparison, a clockwise loop may be written as

$$
x=\rho\cos s,
\qquad
y=-\rho\sin s,
\qquad
s:0\to2\pi.
$$

Equivalently,

$$
\Delta\phi=-2\pi.
$$

Then

$$
\Delta\theta
=-\frac{1}{2}(-2\pi)
=+\pi.
$$

Since

$$
\mathbf F_{12}=-\nabla\theta,
$$

we get

$$
\oint_{\text{clockwise}}
\mathbf F_{12}\cdot d\mathbf q
=-\Delta\theta
=-\pi.
$$

Therefore, with the present convention,

$$
\boxed{
\text{anticlockwise loop: }
\oint \mathbf F_{12}\cdot d\mathbf q=+\pi
}
$$

and

$$
\boxed{
\text{clockwise loop: }
\oint \mathbf F_{12}\cdot d\mathbf q=-\pi
}.
$$

The nonzero loop integral is possible even though locally

$$
\mathbf F_{12}=-\nabla\theta,
$$

because $\theta$ is not globally single-valued around the conical intersection. Locally, $\theta$ is a perfectly well-defined scalar function. Globally, after one positive loop,

$$
\Delta\theta=-\pi.
$$

Thus,

$$
-\oint d\theta
=-\Delta\theta
=+\pi.
$$

This is the same mathematical structure as the polar-angle field

$$
\nabla\phi
=\frac{1}{x^2+y^2}
\begin{pmatrix}
-y\\
x
\end{pmatrix},
$$

whose circulation around the origin is $2\pi$, even though locally it is the gradient of the angle $\phi$. The origin is singular, and $\phi$ cannot be defined as one continuous single-valued function on a loop enclosing the origin.

The corresponding physical statement is that the real adiabatic states change sign after one circuit around the conical intersection. At the start of a positive loop, choose

$$
\phi=0,
\qquad
\theta=0.
$$

Then

$$
\ket{\psi_1}
=\ket{\varphi_1},
\qquad
\ket{\psi_2}
=\ket{\varphi_2}.
$$

After one positive loop,

$$
\phi=2\pi,
\qquad
\theta=-\pi.
$$

Then

$$
\ket{\psi_1}
=\cos(-\pi)\ket{\varphi_1}
+
\sin(-\pi)\ket{\varphi_2}
=-\ket{\varphi_1},
$$

and

$$
\ket{\psi_2}
=-\sin(-\pi)\ket{\varphi_1}
+\cos(-\pi)\ket{\varphi_2}
=-\ket{\varphi_2}.
$$

Thus both real adiabatic eigenvectors return with a minus sign after a positive loop around the conical intersection.

In summary, for the convention

$$
\theta
=-\frac{1}{2}\operatorname{atan2}(y,x),
\qquad
\mathbf F_{12}
=-\nabla\theta,
$$

a positive loop means

$$
(x,y)=(\rho\cos s,\rho\sin s),
\qquad
s:0\to2\pi,
$$

which is anticlockwise in the usual $x$-right, $y$-up plot. Therefore,

$$
\Delta\phi=+2\pi,
$$

$$
\Delta\theta=-\pi,
$$

and

$$
\boxed{
\oint \mathbf F_{12}\cdot d\mathbf q=+\pi.
}
$$

Reversing the loop direction, using $\mathbf F_{21}$ instead of $\mathbf F_{12}$, or choosing the opposite adiabatic-state rotation convention flips the sign. The convention-independent statement is that one circuit around the conical intersection gives a $\pi$-rotation of the two-state adiabatic basis, equivalently a sign change of the real adiabatic eigenvectors.