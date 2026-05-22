## Gaussian distributions and Gaussian wavepackets
### Classical Gaussian /normal distribution
A 1D normal distribution with mean $\mu$ and standard deviation/width $\sigma$ is:

$$
\begin{align}
P(x)=\frac{1}{\sigma\sqrt{2\pi}}\exp{-\frac{(x-\mu)^2}{2\sigma^2}}\label{eq:gauss_pdf}
\end{align}
$$

* $\mu$ centre/mean
* $\sigma$ - width $P(x)$ decreases as you move $\approx\sigma$ away from $\mu$
* $\sigma^2$ variance:\[
<{(x-\mu)^2}>=\sigma^2
\]
* Prefactor $\frac{1}{\sigma\sqrt{2\pi}}$ makes $\int P(x)dx=1$


In QM, the probability density is $\vert g(x)\vert^2$. Then if we want $\vert g(x)\vert^2$ (the square magnitude of the gaussian function) to be the Gaussian distribution above, then $g(x)$ itself is the square root of the denisty/ amplitude of probability:

$$
\begin{align}
g(x)=\frac{1}{\left(\sigma\sqrt{2\pi}\right)^{\frac12}}\exp{\left[-\frac14\left(\frac{x-q}{\sigma}\right)^2+i\phi(x)\right]}
\end{align}
$$

where $\phi(x)$ is a real-valued phase function. By letting 

$$
\begin{align}
\phi(x)=\frac{p(t)(x-q(t))}{\hbar}+\theta(t)
\end{align}
$$

with $p(t)$ as the mean momentum and $\theta(t)$ as the real phase offset. In semi-classical context, $\hbar\theta$ is the action. 

To recast into quadratic form in common dd-vMCG literature and by letting $\theta=0$ 

$$
\begin{align}
g(x,t)=\exp\left(\zeta(t)x^2 +\xi(t)x+\eta(t)\right)
\end{align}
$$

with 

$$
\begin{align}
\zeta(t)&=-\frac{1}{4\sigma(t)^2}\\
\xi(t)&=\frac{q(t)}{2\sigma(t)^2}+i\frac{p(t)}{\hbar}\\
\eta(t)&=-\frac{q(t)^2}{4\sigma(t)^2}-i\frac{p(t)q(t)}{\hbar} -\frac{\ln\left(\sigma(t)\sqrt{2\pi}\right)}{2}
\end{align}
$$ 
where the normalization constant is exponentiated. 

where the classic Heller's form is:

$$
g(x,t) = \exp{\frac{1}{\hbar}\lrp{-a(x-q)^2+ip(x-q)+i\gamma}}
$$

## Harmonic oscillator ground state and its width

### Harmonic Hamiltonian and eigenfunction
The harmonic Hamiltonian operator is:

$$
\begin{align}
\hat H= -\frac{\hbar^2}{2\mu}\pder{2}{x}+\frac{k}{2}(x-c)^2
\end{align}
$$

and the ground eigenstate is written as:

$$
\begin{align}
g_0(x)=\left(\frac{\mu \omega}{\pi\hbar}\right)^{1/4}\exp\lrp{-\frac{\mu \omega}{2\hbar}\lrp{x-c}^2}
\end{align}
$$

where $\omega=\sqrt{\frac{k}{\mu}}$. The corresponding probability density is:

$$
\begin{align}
|g_0(x)|^2=\left(\frac{\mu \omega}{\pi\hbar}\right)^{1/2}\exp\lrp{-\frac{\mu \omega}{\hbar}\lrp{x-c}^2}
\end{align}
$$

Then matching the exponents in eq.\ref{eq:gauss_pdf} it is clear that the ground-state vibrational wavefunction has standard deviation

$$
\begin{align}
\frac{1}{2\sigma^2}=\frac{\mu \omega}{\hbar}\rightarrow \sigma=\sqrt{\frac{\hbar}{2\mu\omega}}\label{eq:ground_eigen_harmonic_width}
\end{align}
$$

## Mass-frequency scaled normal coordinates:
Recall:

$$
\begin{align}
\hat H&= -\frac{\hbar^2}{2\mu}\pder{2}{x}+\frac{k}{2}(x-c)^2\\&=-\frac{\hbar^2}{2\mu}\pder{2}{x}+\frac{\omega^2\mu}{2}(x-c)^2\\
&=\frac{\hbar\omega}{2}(-\frac{\hbar}{\omega\mu}\pder{2}{x}+\frac{\omega\mu}{\hbar}(x-c)^2)
\end{align}
$$

Let:
$$
\begin{align}
Q = \sqrt{\frac{\mu \omega}{\hbar}}(x-c)\label{eq:sclaed_frequency}
\end{align}
$$

Then:

$$
\begin{align}
\pder{Q} = \sqrt{\frac{\hbar}{\mu \omega}}\pder{x}\rightarrow \pder{2}{Q} = \frac{\hbar}{\mu \omega}\pder{2}{x}
\end{align}
$$

So:

$$
\begin{align}
\hat H
&=\frac{\hbar\omega}{2}(-\frac{\hbar}{\omega\mu}\pder{2}{x}+\frac{\omega\mu}{\hbar}(x-c)^2)\\&=\frac{\hbar\omega}{2}(-\pder{2}{Q}+Q^2)
\end{align}
$$

and the ground state eigenfunction is subsequently:

$$
\begin{align}
g_0(Q)=\pi^{-1/4}\exp\lrp{-\frac{Q^2}{2}}
\end{align}
$$

which has a density:

$$
\begin{align}
|g_0(Q)|^2=\pi^{-1/2}\exp\lrp{-{Q^2}}
\end{align}
$$

Thus:

$$
\begin{align}
\frac{1}{2\sigma_Q^2}=1\rightarrow\sigma_Q^2=\frac{1}{\sqrt2}
\end{align}
$$

which is the 0.7071 initialized frozen width use in dd-vMCG. i.e. The GWPs used for the basis functions have a width $1/\sqrt2$ along all normal coordinates. In the mass–frequency scaled coordinate system used, this is the width of the neutral ground‑state vibrational eigenfunction in the harmonic approximation.”

Equally from eq\ref{eq:sclaed_frequency} and eq\ref{eq:ground_eigen_harmonic_width} it is clear we can define the natural unit of length for this system as:

$$
\begin{align}
\beta=\sqrt{\frac{\hbar}{\mu \omega}}
\end{align}
$$