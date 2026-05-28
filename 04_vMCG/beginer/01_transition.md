3. The Numerical Bottleneck: Singularities in the $\mat{C}$ MatrixWhile the vMCG equations of motion derived above are formally exact, propagating them numerically exposes a severe instability. The vulnerability lies in the requirement to invert the $\mat{C}$ matrix to update the wavepacket parameters:

$$i \dot{\mat{\Lambda}} = \mat{C}^{-1} \mat{Y}$$

Because the Gaussian basis functions are non-orthogonal and dynamically evolving, they frequently pass through one another or cluster together to accurately describe the shape of the nuclear wavepacket. When GWPs heavily overlap, the basis becomes nearly linearly dependent. Consequently, the overlap matrix $\mat{S}$, and by extension the $\mat{C}$ matrix (which depends heavily on these overlaps and their derivatives), become extremely ill-conditioned.As the determinant of $\mat{C}$ approaches zero, it becomes near-singular. Attempting to compute $\mat{C}^{-1}$ under these conditions causes the calculated time-derivatives $\dot{\mat{\Lambda}}$ to artificially blow up, leading to unphysical integration steps and crashing the simulation.To achieve stable propagation, we must circumvent the direct inversion of $\mat{C}$ alongside the full Hamiltonian coupling $\mat{Y}$. We achieve this by introducing the $C\mat{X}$ formalism, which relies on a strategic separation of the Hamiltonian and the Local Harmonic Approximation (LHA).The $C\mat{X}$ Formalism and the Local Harmonic Approximation1. Overlap Derivatives and Gaussian MomentsBefore modifying the equations of motion, we must examine the structure of the overlap matrix derivatives. Let us define the first and second derivatives of the overlap matrix with respect to the GWP parameters $\alpha$ and $\beta$:

$$S_{je}^{(\alpha \beta)} = \braket{\pdv{\gj}{\lambda_{j\alpha}} | \pdv{g_e}{\lambda_{e\beta}}}$$

$$S_{je}^{(\alpha 0)} = \braket{\pdv{\gj}{\lambda_{j\alpha}} | g_e}$$

These derivative integrals depend intimately on the nature of the parameters $\alpha$ and $\beta$. Specifically, they map directly to Gaussian moments of different polynomial orders. We define the zeroth, first, and second-order Gaussian moments as:

$$M_{je}^{(0)} = \braket{\gj | g_e}$$

$$M_{je}^{(\kappa)} = \mel{\gj}{x_\kappa}{g_e}$$

$$M_{je}^{(\kappa \mu)} = \mel{\gj}{x_\kappa x_\mu}{g_e}$$

For a standard multidimensional Gaussian wavepacket defined as $\gj = \exp(\mat{x}^T \vect{\zeta}_j \mat{x} + \vect{\epsilon}_j \cdot \mat{x} + \eta_j)$, we can evaluate the partial derivatives with respect to each parameter type:Scalar (0th order): $\pdv{\gj}{\eta_j} = \gj$Linear: $\pdv{\gj}{\epsilon_{j\kappa}} = x_\kappa \gj$Quadratic (Thawed Gaussians): $\pdv{\gj}{\zeta_{j\kappa\mu}} = x_\kappa x_\mu \gj$Note: Each derivative with respect to a parameter raises the polynomial order of the resulting integral by 0, 1, or 2 depending on the parameter. For frozen Gaussians (where the width matrix $\vect{\zeta}$ is fixed), only $\vect{\epsilon}$ and $\eta$ appear, leading to zero or linear polynomial increases. For thawed Gaussians, all moments up to the second order are present.Consequently, the single-derivative overlap matrix $S_{je}^{(\alpha 0)}$ is directly equivalent to a specific Gaussian moment:

$$S_{je}^{(\alpha 0)} = \braket{\gj | \pdv{g_e}{\lambda_{e\alpha}}} \equiv \text{Gaussian Moment}$$

Where $\alpha = \eta \implies \braket{\gj|g_e}$, and $\alpha = \epsilon_k \implies \mel{\gj}{x_k}{g_e}$.

2. The Separable Hamiltonian and $C\mat{X}$ Derivation

To avoid the full $\mat{C}$ matrix inversion, suppose the Hamiltonian can be separated into a "separable" part that can be expressed strictly in terms of these overlap matrices, and a smaller remainder:$$H = H^0 + H^R$$We define the action of the separable Hamiltonian $H^0$ on a basis function $\ket{g_e}$ such that it yields a linear combination of the basis function itself and its parameter derivatives:

$$H^0 \ket{g_e} = X_e^{(c)} \ket{g_e} + \sum_\beta \ket{\pdv{g_e}{\lambda_{e\beta}}} X_e^{(\beta)}$$

Here, $X_e^{(c)}$ and $X_e^{(\beta)}$ are coefficients to be analytically determined. Taking the inner product with $\bra{\gj}$ gives the matrix elements for $H^0$:

$$(H^0)_{je} = S_{je} X_e^{(c)} + \sum_\beta S_{je}^{(0 \beta)} X_e^{(\beta)}$$

Similarly, taking the inner product with the derivative bra $\bra{\pdv{\gj}{\lambda_{j\alpha}}}$ gives:

$$(H^0)_{je}^{(\alpha 0)} = S_{je}^{(\alpha 0)} X_e^{(c)} + \sum_\beta S_{je}^{(\alpha \beta)} X_e^{(\beta)}$$

We now substitute this separated Hamiltonian ($H = H^0 + H^R$) back into the definition of our $\mat{Y}$ vector from the original EoM derivation:

$$Y_{j\alpha} = \sum_e \rho_{je} \left[ H_{je}^{(\alpha 0)} - \sum_k [\Smat^{(\alpha 0)} \Smat^{-1}]_{jk} H_{ke} \right]$$

Expanding $H$ into $H^0$ and $H^R$, and substituting our derived matrix elements for $H^0$, we group the terms associated with the $X_e^{(c)}$ and $X_e^{(\beta)}$ coefficients:

$$\begin{aligned}
Y_{j\alpha} = \sum_e \rho_{je} \Bigg[ & \left( S_{je}^{(\alpha 0)} X_e^{(c)} + \sum_\beta S_{je}^{(\alpha \beta)} X_e^{(\beta)} + (H^R)_{je}^{(\alpha 0)} \right) \\
&- \sum_k [\Smat^{(\alpha 0)} \Smat^{-1}]_{jk} \left( S_{ke} X_e^{(c)} + \sum_\beta S_{ke}^{(0 \beta)} X_e^{(\beta)} + H^R_{ke} \right) \Bigg]
\end{aligned}$$


By isolating the scalar coefficients $X_e^{(c)}$, a critical cancellation occurs:$$X_e^{(c)} \text{ terms: } \sum_e \rho_{je} \left[ S_{je}^{(\alpha 0)} - \sum_k [\Smat^{(\alpha 0)} \Smat^{-1}]_{jk} S_{ke} \right] X_e^{(c)}$$

Because the matrix product $\sum_k \Smat^{-1}_{jk} S_{ke} = \delta_{je}$, the bracketed term exactly cancels to zero: $\left( S_{je}^{(\alpha 0)} - S_{je}^{(\alpha 0)} \right) = 0$. Therefore, $X_e^{(c)}$ effectively drops out and does not impact the parameter equations of motion.Collecting the remaining $X_e^{(\beta)}$ terms, we recognize the formal definition of our $\mat{C}$ matrix ($C_{j\alpha, e\beta}$):

$$Y_{j\alpha} = \sum_{e,\beta} \rho_{je} \left( S_{je}^{(\alpha \beta)} - [\Smat^{(\alpha 0)} \Smat^{-1} \Smat^{(0 \beta)}]_{je} \right) X_e^{(\beta)} + Y_{R, j\alpha}$$

$$Y_{j\alpha} = \sum_{e,\beta} C_{j\alpha, e\beta} X_e^{(\beta)} + Y_{R, j\alpha}$$

In compact matrix notation, this is:

$$\mat{Y} = \mat{C} \mat{X} + \mat{Y}_R$$

Substituting this back into the original parameter EoM gives us the final $C\mat{X}$ formulation:

$$i \dot{\mat{\Lambda}} = \mat{C}^{-1}(\mat{C} \mat{X} + \mat{Y}_R)$$

$$i \dot{\mat{\Lambda}} = \mat{X} + \mat{C}^{-1} \mat{Y}_R$$

This is a powerful result. We have shifted the bulk of the Hamiltonian dependence into the analytical vector $\mat{X}$, which does not require inversion. The numerically unstable $\mat{C}^{-1}$ operation is now only applied to $\mat{Y}_R$, which is constructed from the small remainder $H^R$, drastically improving integration stability.

## 3. Providing the Coefficients: The Local Harmonic Approximation (LHA)

To utilize the $C\mat{X}$ formalism, we need a physical mechanism to determine the $\mat{X}^{(\beta)}$ coefficients. We achieve this by approximating the true Hamiltonian using the Local Harmonic Approximation (LHA).We expand the potential energy $V(\mat{r})$ up to second order around the time-dependent center coordinate $\vect{q}_{j\kappa}$ of each individual multi-dimensional Gaussian function:$$V_j(\mat{r}) \approx V_{j0} + \sum_\kappa V_{j\kappa}' (r_\kappa - q_{j\kappa}) + \frac{1}{2} \sum_{\kappa\mu} V_{j\kappa\mu}'' (r_\kappa - q_{j\kappa})(r_\mu - q_{j\mu})$$Next, we apply the standard kinetic energy operator $\hat{T} = \sum_\kappa -\frac{1}{2m_\kappa} \frac{\partial^2}{\partial r_\kappa^2}$ to the Gaussian wavepacket $\gj = \exp(\sum \zeta_{j\kappa} x_\kappa^2 + \epsilon_{j\kappa} x_\kappa + \eta_j)$, where $x_\kappa = r_\kappa - q_{j\kappa}$. Evaluating the spatial derivatives yields:$$\partial_{x_\kappa} \gj = (2\zeta_{j\kappa} x_\kappa + \epsilon_{j\kappa}) \gj$$$$\partial_{x_\kappa}^2 \gj = 2\zeta_{j\kappa} \gj + (2\zeta_{j\kappa} x_\kappa + \epsilon_{j\kappa})^2 \gj$$Applying $\hat{T}$ to $\gj$ gives:$$\hat{T}\gj = -\gj \sum_\kappa \left[ \frac{\zeta_{j\kappa}}{m_\kappa} + \frac{\epsilon_{j\kappa}^2}{2m_\kappa} + \frac{2\zeta_{j\kappa}\epsilon_{j\kappa}}{m_\kappa} x_\kappa + \frac{2\zeta_{j\kappa}^2}{m_\kappa} x_\kappa^2 \right]$$To map this physical Hamiltonian onto our separated form ($H^0 \ket{\gj} = X_j^{(c)} \ket{\gj} + \sum_\kappa X_j^{(\kappa)} \ket{x_\kappa \gj} + \sum_{\kappa\mu} X_j^{(\kappa\mu)} \ket{x_\kappa x_\mu \gj}$), we group all terms from the LHA potential and the kinetic energy by their polynomial order of $x$:Analytical Coefficients:Scalar Coefficients ($X_j^{(c)}$):$$X_j^{(c)} = -\sum_\kappa \left[ \frac{\zeta_{j\kappa}}{m_\kappa} + \frac{\epsilon_{j\kappa}^2}{2m_\kappa} \right] + V_{j0} - \sum_\kappa V_{j\kappa}' q_{j\kappa} + \frac{1}{2}\sum_{\kappa\mu} V_{j\kappa\mu}'' q_{j\kappa} q_{j\mu}$$Linear Coefficients ($X_j^{(\kappa)}$):$$X_j^{(\kappa)} = -\frac{2}{m_\kappa} \epsilon_{j\kappa} \zeta_{j\kappa} + V_{j\kappa}' - \sum_\mu q_{j\mu} V_{j\kappa\mu}''$$Quadratic Coefficients ($X_j^{(\kappa \mu)}$):$$X_j^{(\kappa \mu)} = -\frac{2}{m_\kappa} \zeta_{j\kappa} \zeta_{j\mu} + \frac{1}{2} V_{j\kappa\mu}''$$These coefficients completely define the separable part of the Hamiltonian, allowing us to evaluate the robust $i \dot{\mat{\Lambda}} = \mat{X} + \mat{C}^{-1} \mat{Y}_R$ equations of motion.