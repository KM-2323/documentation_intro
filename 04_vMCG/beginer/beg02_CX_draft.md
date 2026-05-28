## The $\Cmat\mat{X}$ Formalism and the Local Harmonic Approximation

### 1. Overlap Derivatives and Gaussian Moments

Before modifying the equations of motion, we must examine the structure of the overlap matrix derivatives. Let us define the first and second derivatives of the overlap matrix with respect to the GWP parameters $\alpha$ and $\beta$:

$$S_{jl}^{(\alpha \beta)} = \braket{\pdv{\gj}{\lambda_{j\alpha}}  }{\pdv{g_l}{\lambda_{l\beta}}}$$

$$S_{jl}^{(\alpha 0)} = \braket{\pdv{\gj}{\lambda_{j\alpha}} }{ g_l}$$

In fact one may show that these derivative integrals, depending on the nature of the parameters $\alpha$ and $\beta$, correspond to the Gaussian moments of different polynomial orders. 

Let's define the zeroth, first, and second-order Gaussian moments as:

$$M_{jl}^{(0)} = \braket{\gj }{ g_l}$$

$$M_{jl}^{(\kappa)} = \mel{\gj}{x_\kappa}{g_l}$$

$$M_{jl}^{(\kappa \mu)} = \mel{\gj}{x_\kappa x_\mu}{g_l}$$

For a standard Gaussian wavepacket defined as 

$$\gj = \exp(x^T \vect{\zeta}_j x + \vect{\epsilon}_j \cdot x + \eta_j)$$

we can evaluate the partial derivatives with respect to each parameter type:
* Scalar (0th order): $\pdv{\gj}{\eta_j} = \gj$
* Linear: $\pdv{\gj}{\epsilon_{j\kappa}} = x_\kappa \gj$
* Quadratic (Thawed Gaussians): $\pdv{\gj}{\zeta_{j\kappa\mu}} = x_\kappa x_\mu \gj$

So we could see, each derivative with respect to a parameter raises the polynomial order of the resulting integral by 0, 1, or 2 (scalar, linear or quadratic). 

For Frozen Gaussians, where the width matrix $\vect{\zeta}$ is fixed, only $\vect{\epsilon}$ and $\eta$ appear, leading to zero or linear polynomial increases. While, for thawed Gaussians, all orders up to the second are present.

Consequently, the derivative-type overlap matrix $S_{jl}^{(\alpha 0)}$ is directly equivalent to a specific Gaussian moment:

$$S_{jl}^{(\alpha 0)} = \braket{\gj  }{\pdv{g_l}{\lambda_{l\alpha}}} \equiv \text{Gaussian Moment}$$

Where $\alpha = \eta \implies \braket{\gj}{g_l}$, $\alpha = \epsilon_k \implies \mel{\gj}{x_k}{g_l}$, and so on.

### 2. The $C\mat{X}$ Formalism Derivation

In standard vMCG, the parameter equations of motion require multiplying by $\mat{C}^{-1}$. However, numerical difficulties (singularities) rapidly arise when inverting the $\mat{C}$ matrix as wavepackets overlap. To circumvent this, we introduce the $C\mat{X}$ formalism.

Suppose the Hamiltonian can be separated into a "separable" part that can be expressed strictly in terms of overlap matrices, and a remainder:

$$H = H^0 + H^R$$

We define the action of the separable Hamiltonian $H^0$ on a basis function $\ket{g_l}$ such that it yields a linear combination of the basis function and its parameter derivatives:

$$H^0 \ket{g_l} = X_l^{(c)} \ket{g_l} + \sum_\beta \ket{\pdv{g_l}{\lambda_{l\beta}}} X_l^{(\beta)}$$

Here, $X_l^{(c)}$ and $X_l^{(\beta)}$ are coefficients to be determined. Taking the inner product with $\bra{\gj}$ gives the matrix elements for $H^0$:

$$(H^0)_{jl} = S_{jl} X_l^{(c)} + \sum_\beta S_{jl}^{(0 \beta)} X_l^{(\beta)}$$

Similarly, taking the inner product with the derivative bra $\bra{\pdv{\gj}{\lambda_{j\alpha}}}$ gives:

$$(H^0)_{jl}^{(\alpha 0)} = S_{jl}^{(\alpha 0)} X_l^{(c)} + \sum_\beta S_{jl}^{(\alpha \beta)} X_l^{(\beta)}$$

We now substitute this separated Hamiltonian ($H = H^0 + H^R$) back into our previously derived $\mat{Y}$ vector definition:

$$Y_{j\alpha} = \sum_l \rho_{jl} \left[ H_{jl}^{(\alpha 0)} - \sum_k [\Smat^{(\alpha 0)} \Smat^{-1}]_{jk} H_{ke} \right]$$

Expanding $H$ into $H^0$ and $H^R$, and substituting our expanded forms for the $H^0$ matrix elements, we group the terms associated with $X_l^{(c)}$ and $X_l^{(\beta)}$:

$$\begin{aligned}
Y_{j\alpha} = \sum_l \rho_{jl} \Bigg[ & \left( S_{jl}^{(\alpha 0)} X_l^{(c)} + \sum_\beta S_{jl}^{(\alpha \beta)} X_l^{(\beta)} + (H^R)_{jl}^{(\alpha 0)} \right) \\
&- \sum_k [\Smat^{(\alpha 0)} \Smat^{-1}]_{jk} \left( S_{ke} X_l^{(c)} + \sum_\beta S_{ke}^{(0 \beta)} X_l^{(\beta)} + H^R_{ke} \right) \Bigg]
\end{aligned}$$

By isolating the scalar coefficients $X_l^{(c)}$, we can observe a critical cancellation:

$$X_l^{(c)} \text{ terms: } \sum_l \rho_{jl} \left[ S_{jl}^{(\alpha 0)} - \sum_k [\Smat^{(\alpha 0)} \Smat^{-1}]_{jk} S_{ke} \right] X_l^{(c)}$$

Because $\sum_k \Smat^{-1}_{jk} S_{ke} = \delta_{jl}$, the bracketed term exactly cancels to zero: $\left( S_{jl}^{(\alpha 0)} - S_{jl}^{(\alpha 0)} \right) = 0$. Therefore, $X_l^{(c)}$ does not affect the parameter equations of motion.

Collecting the remaining $X_l^{(\beta)}$ terms, we recognize the definition of our $\mat{C}$ matrix ($C_{j\alpha, e\beta}$):

$$Y_{j\alpha} = \sum_{e,\beta} \rho_{jl} \left( S_{jl}^{(\alpha \beta)} - [\Smat^{(\alpha 0)} \Smat^{-1} \Smat^{(0 \beta)}]_{jl} \right) X_l^{(\beta)} + Y_{R, j\alpha}$$

$$Y_{j\alpha} = \sum_{e,\beta} C_{j\alpha, e\beta} X_l^{(\beta)} + Y_{R, j\alpha}$$

In matrix notation, $Y = C X + Y_R$.

Substituting this back into the original parameter EoM ($i \dot{\mat{\Lambda}} = \mat{C}^{-1} \mat{Y}$), we get the final $C\mat{X}$ form:

$$i \dot{\mat{\Lambda}} = \mat{C}^{-1}(C X + Y_R)$$

$$i \dot{\mat{\Lambda}} = X + \mat{C}^{-1} Y_R$$

This effectively removes the bulk of the Hamiltonian dependence from the numerically unstable $\mat{C}^{-1}$ operation, shifting it into the analytical vector $X$, provided we can build $H^0$ to accurately approximate $H$.

### 3. The Local Harmonic Approximation (LHA)

To utilize the $C\mat{X}$ formulation, we need to supply the $X^{(\beta)}$ coefficients. This is achieved by realizing there is a one-to-one mapping between the overlap blocks $S^{(\alpha \beta)}$ and the Gaussian moments $M$.

We approximate the true Hamiltonian using the Local Harmonic Approximation (LHA), expanding the potential energy $V(\mat{r})$ up to second order around the time-dependent center coordinate $\vect{q}_{j\kappa}$ of each multi-dimensional Gaussian function:

$$V_j(\mat{r}) \approx V_{j0} + \sum_\kappa V_{j\kappa}' (r_\kappa - q_{j\kappa}) + \frac{1}{2} \sum_{\kappa\mu} V_{j\kappa\mu}'' (r_\kappa - q_{j\kappa})(r_\mu - q_{j\mu})$$

Next, we apply the kinetic energy operator $\hat{T} = \sum_\kappa -\frac{1}{2m_\kappa} \frac{\partial^2}{\partial r_\kappa^2}$ to the Gaussian wavepacket $\gj = \exp(\sum \zeta_{j\kappa} x_\kappa^2 + \epsilon_{j\kappa} x_\kappa + \eta_j)$. Evaluating the first and second spatial derivatives yields:

$$\partial_{x_\kappa} \gj = (2\zeta_{j\kappa} x_\kappa + \epsilon_{j\kappa}) \gj$$

$$\partial_{x_\kappa}^2 \gj = 2\zeta_{j\kappa} \gj + (2\zeta_{j\kappa} x_\kappa + \epsilon_{j\kappa})^2 \gj$$

Applying $\hat{T}$ to $\gj$:

$$\hat{T}\gj = -\gj \sum_\kappa \left[ \frac{\zeta_{j\kappa}}{m_\kappa} + \frac{\epsilon_{j\kappa}^2}{2m_\kappa} + \frac{2\zeta_{j\kappa}\epsilon_{j\kappa}}{m_\kappa} x_\kappa + \frac{2\zeta_{j\kappa}^2}{m_\kappa} x_\kappa^2 \right]$$

To match this with our separated Hamiltonian definition ($H^0 \ket{\gj} = X_j^{(c)} \ket{\gj} + \sum_\kappa X_j^{(\kappa)} \ket{x_\kappa \gj} + \sum_{\kappa\mu} X_j^{(\kappa\mu)} \ket{x_\kappa x_\mu \gj}$), we expand the spatial terms in the potential $(r_\kappa - q_{j\kappa}) = x_\kappa$ and group all terms by their polynomial order of $x$:

Matching Terms:

* Scalar Coefficients ($X_j^{(c)}$):

$$X_j^{(c)} = -\sum_\kappa \left[ \frac{\zeta_{j\kappa}}{m_\kappa} + \frac{\epsilon_{j\kappa}^2}{2m_\kappa} \right] + V_{j0} - \sum_\kappa V_{j\kappa}' q_{j\kappa} + \frac{1}{2}\sum_{\kappa\mu} V_{j\kappa\mu}'' q_{j\kappa} q_{j\mu}$$

* Linear Coefficients ($X_j^{(\kappa)}$):

$$X_j^{(\kappa)} = -\frac{2}{m_\kappa} \epsilon_{j\kappa} \zeta_{j\kappa} + V_{j\kappa}' - \sum_\mu q_{j\mu} V_{j\kappa\mu}''$$

*Quadratic Coefficients ($X_j^{(\kappa \mu)}$):

$$X_j^{(\kappa \mu)} = -\frac{2}{m_\kappa} \zeta_{j\kappa} \zeta_{j\mu} + \frac{1}{2} V_{j\kappa\mu}''$$

These analytically determined coefficients can now be fed directly into the $C\mat{X}$ equations of motion.

