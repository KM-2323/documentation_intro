## vMCG Equations of Motion Derivation
We begin by defining the wavefunction ansatz as a linear combination of Gaussian Wavepackets (GWPs), without explicitly attaching an electronic basis:

$$\ket{\Psi} = \sum_j A_j \ket{\gj}$$

Taking the time derivative of the wavefunction yields:

$$\ket{\dot{\Psi}} = \sum_j \left( \dot{A}_j \ket{\gj} + A_j \ket{\gjdot} \right)$$

The derivation relies on the Dirac-Frenkel Variational Principle (DFVP):

$$\braket{\delta \Psi | H - i\frac{\partial}{\partial t} | \Psi} = 0$$

### 1. EoM for the Expansion Coefficients ($A_j$)

To find the equations of motion for the expansion coefficients, we take the variation with respect to the complex conjugate of the coefficients, $\delta A_j^*$:

$$\frac{\delta \Psi}{\delta A_j} = \gj \implies \bra{\delta \Psi} = \bra{\gj}$$

Substituting this into the DFVP requires evaluating two terms. First, the Hamiltonian matrix elements:

$$\mel{\delta \Psi}{\hat{H}}{\Psi} = \mel{\gj}{\hat{H}}{\sum_l A_l \gl} = \sum_l \mel{\gj}{\hat{H}}{\gl} A_l = \sum_l H_{jl} A_l$$

where we defined $\mel{\gj}{\hat H}{\gl}=H_{jl}$

Next, the time-derivative term:

$$i \braket{\delta \Psi }{ \dot{\Psi}} = i \braket{\gj }{ \sum_l \left[ \dot{A}_l \gl + A_l \gldot \right]}$$

$$i \braket{\delta \Psi }{\dot{\Psi}} = i \sum_l \left[ \braket{\gj}{\gl} \dot{A}_l + \braket{\gj}{\gldot} A_l \right]$$

$$i \braket{\delta \Psi }{ \dot{\Psi}} = i \sum_l \left[ S_{jl} \dot{A}_l + \tau_{jl} A_l \right]$$

Equating the two evaluated terms gives:

$$i \sum_l S_{jl} \dot{A}_l + i \sum_l \tau_{jl} A_l = \sum_l H_{jl} A_l$$

$$i \sum_l S_{jl} \dot{A}_l = \sum_l \left[ H_{jl} - i\tau_{jl} \right] A_l$$

To isolate the time derivative of the coefficients, we multiply both sides by the inverse overlap matrix elements $\sum_j S^{-1}_{mj}$:

$$i \sum_{l,j} S^{-1}_{mj} S_{jl} \dot{A}_l = \sum_{l,j} S^{-1}_{mj} \left[ H_{jl} - i\tau_{jl} \right] A_l$$

Recognizing that 

$$\sum_j S^{-1}_{mj} S_{jl} = \delta_{ml}$$

the left side simplifies:

$$i \dot{A}_m = \sum_{l,j} S^{-1}_{mj} \left[ H_{jl} - i\tau_{jl} \right] A_l$$

Relabeling the indices ($m \to j$, $j \to l$, $l \to m$) gives the final coefficient equation:

$$i \dot{A}_j = \sum_{m,l} S^{-1}_{jl} \left[ H_{lm} - i\tau_{lm} \right] A_m$$

In compact matrix notation, this is written as:

$$i \dot{\mat{A}} = \Smat^{-1} \cdot (\Hmat - i\vect{\tau}) \mat{A}$$

### 2. EoM for the GWP Parameters ($\lambda_{j\alpha}$)

Next, we take the variation with respect to the GWP parameters $\lambda_{j\alpha}^*$:

$$\frac{\delta \Psi}{\delta \lambda_{j\alpha}} = A_j \pdv{\gj}{\lambda_{j\alpha}}$$

Evaluating the Hamiltonian term for the DFVP:

$$\mel{\delta \Psi}{H}{\Psi} = \mel{A_j \pdv{\gj}{\lambda_{j\alpha}}}{H}{\sum_l A_l \gl}$$

$$= \sum_l A_j^* A_l \mel{\pdv{\gj}{\lambda_{j\alpha}}}{H}{\gl}$$

At this stage, we define the density matrix element $\rho_{jl} = A_j^* A_l$ and the derivative matrix element $H_{jl}^{(\alpha 0)} = \mel{\pdv{\gj}{\lambda_{j\alpha}}}{H}{\gl}$. Substituting these definitions yields:

$$\mel{\delta \Psi}{H}{\Psi} = \sum_l \rho_{jl} H_{jl}^{(\alpha 0)}$$

Now, evaluating the time-derivative term:$$i \braket{\delta \Psi }{ \dot{\Psi}} = i \braket{A_j \pdv{\gj}{\lambda_{j\alpha}} }{ \sum_l \left[ \dot{A}_l \gl + A_l \gldot \right]}$$

$$= i \sum_l \left[ A_j^* \dot{A}_l \braket{\pdv{\gj}{\lambda_{j\alpha}}|\gl} + A_j^* A_l \braket{\pdv{\gj}{\lambda_{j\alpha}}|\gldot} \right]$$

We define the overlap derivative matrix as $S_{jl}^{(\alpha 0)} = \braket{\pdv{\gj}{\lambda_{j\alpha}}}{\gl}$. For the rightmost term, we expand $\ket{\gldot}$ using the chain rule over all parameters $\beta$:

$$\ket{\gldot} = \sum_\beta \ket{\pdv{\gl}{\lambda_{l\beta}}} \dot{\lambda}_{l\beta}$$

Substituting this expansion back in, and defining the second-derivative overlap matrix $S_{jl}^{(\alpha \beta)} = \braket{\pdv{\gj}{\lambda_{j\alpha}} }{\pdv{\gl}{\lambda_{l\beta}}}$, we get:

$$i \braket{\delta \Psi }{\dot{\Psi}} = i \sum_l \left[ A_j^* \dot{A}_l S_{jl}^{(\alpha 0)} + \rho_{jl} \sum_\beta S_{jl}^{(\alpha \beta)} \dot{\lambda}_{l\beta} \right]$$

Equating this to the Hamiltonian term and rearranging to isolate the $\dot{\lambda}$ terms on the left:

$$i \sum_l \rho_{jl} \sum_\beta S_{jl}^{(\alpha \beta)} \dot{\lambda}_{l\beta} = \sum_l \rho_{jl} H_{jl}^{(\alpha 0)} - i \sum_l A_j^* \dot{A}_l S_{jl}^{(\alpha 0)}$$

### 3. Coupling the Equations

To remove the $\dot{A}_l$ dependency from the parameter equations, 

we substitute the previously derived coefficient EoM (specifically, $-i \dot{A}_l = -\sum_{m,n} [S^{-1}]_{lm} (H_{mn} - i\tau_{mn}) A_n$) into the right-hand side of our parameter equation:

$$-i \sum_l A_j^* \dot{A}_l S_{jl}^{(\alpha 0)} = -\sum_{l,m,n} A_j^* A_n [S^{-1}]_{lm} (H_{mn} - i\tau_{mn}) S_{jl}^{(\alpha 0)}$$

Applying $\rho_{jn} = A_j^* A_n$ and expanding the time-derivative overlap matrix element 

$$\tau_{mn} =\braket{\gj}{\dot{\gl}} = \sum_{\beta}\braket{\gj}{\gl}\ \sum_\beta S_{mn}^{(0\beta)} \dot{\lambda}_{n\beta}$$

such that

$$= -\sum_{l,m,n} \rho_{jn} [S^{-1}]_{lm} \left( H_{mn} - i \sum_\beta S_{mn}^{(0\beta)} \dot{\lambda}_{n\beta} \right) S_{jl}^{(\alpha 0)}$$

Substituting this expanded term back into the main parameter equation gives:$$i \sum_l \rho_{jl} \sum_\beta S_{jl}^{(\alpha \beta)} \dot{\lambda}_{l\beta} = \sum_l \rho_{jl} H_{jl}^{(\alpha 0)} - \sum_{l,m,n} \rho_{jn} S_{jl}^{(\alpha 0)} [S^{-1}]_{lm} \left( H_{mn} - i \sum_\beta S_{mn}^{(0\beta)} \dot{\lambda}_{n\beta} \right)$$

### 4. Grouping Matrices and Final Form

We now gather all terms containing the parameter time derivatives ($\dot{\lambda}$) onto the left side of the equation:

$$i \sum_l \rho_{jl} \sum_\beta S_{jl}^{(\alpha \beta)} \dot{\lambda}_{l\beta} - i \sum_{l,m,n,\beta} \rho_{jn} S_{jl}^{(\alpha 0)} [S^{-1}]_{lm} S_{mn}^{(0\beta)} \dot{\lambda}_{n\beta} = \sum_l \rho_{jl} H_{jl}^{(\alpha 0)} - \sum_{l,m,n} \rho_{jn} S_{jl}^{(\alpha 0)} [S^{-1}]_{lm} H_{mn}$$

Notice that we can group the summed matrices on both sides. Specifically, the summation over dummy indices $l$ and $m$ represents standard matrix multiplication:

$$\sum_{l,m} S_{jl}^{(\alpha 0)} [S^{-1}]_{lm} S_{mn}^{(0\beta)} = [\Smat^{(\alpha 0)} \cdot \Smat^{-1} \cdot \Smat^{(0\beta)}]_{jn}$$

$$ \sum_{l,m} S_{jl}^{(\alpha 0)} [S^{-1}]_{lm} H_{mn} = [\Smat^{(\alpha 0)} \cdot \Smat^{-1} \cdot \Hmat]_{jn} $$



Such then:

$$i \sum_l \rho_{jl} \sum_\beta S_{jl}^{(\alpha \beta)} \dot{\lambda}_{l\beta} - i \sum_{n,\beta} \rho_{jn}[\Smat^{(\alpha 0)} \cdot \Smat^{-1} \cdot \Smat^{(0\beta)}]_{jn}\dot{\lambda}_{n\beta} = \sum_l \rho_{jl} H_{jl}^{(\alpha 0)} - \sum_{n} \rho_{jn} [\Smat^{(\alpha 0)} \cdot \Smat^{-1} \cdot \Hmat]_{jn}$$

By changing the dummy index $n \to l$ in the second term on both left and right hand side

$$i \sum_l \rho_{jl} \sum_\beta S_{jl}^{(\alpha \beta)} \dot{\lambda}_{l\beta} - i \sum_{l,\beta} \rho_{jl}[\Smat^{(\alpha 0)} \cdot \Smat^{-1} \cdot \Smat^{(0\beta)}]_{jl}\dot{\lambda}_{l\beta} = \sum_l \rho_{jl} H_{jl}^{(\alpha 0)} - \sum_{l} \rho_{jl} [\Smat^{(\alpha 0)} \cdot \Smat^{-1} \cdot \Hmat]_{jl}$$

 and combine the terms by factoring out the $\rho_{jl}$

$$i \sum_l \rho_{jl} \sum_\beta \left [S_{jl}^{(\alpha \beta)}-[\Smat^{(\alpha 0)} \cdot \Smat^{-1} \cdot \Smat^{(0\beta)}]_{jl}\right]
\dot{\lambda}_{l\beta} = \sum_l \rho_{jl} \left [ H_{jl}^{(\alpha 0)} - [\Smat^{(\alpha 0)} \cdot \Smat^{-1} \cdot \Hmat]_{jl}\right ]$$

To finalize the derivation, we define the $\mat{C}$ matrix and the $\mat{Y}$ vector to capture these grouped terms:

$$C_{j\alpha, l\beta} = \rho_{jl} \left( S_{jl}^{(\alpha \beta)} - [\Smat^{(\alpha 0)} \cdot \Smat^{-1} \cdot \Smat^{(0\beta)}]_{jl} \right)$$

$$Y_{j\alpha} = \sum_l \rho_{jl} \left( H_{jl}^{(\alpha 0)} - [\Smat^{(\alpha 0)} \cdot \Smat^{-1} \cdot \Hmat]_{jl} \right)$$

This allows us to write the parameter EoM simply as:

$$i \sum_{n,\beta} C_{j\alpha, l\beta} \dot{\lambda}_{l\beta} = Y_{j\alpha}$$

Bringing both derived equations together in matrix form gives the complete, vMCG Equations of Motion:

$$\begin{aligned}
  i \dot{\mat{\Lambda}} &= \mat{C}^{-1} \mat{Y} \\
  i \dot{\mat{A}} &= \Smat^{-1} \cdot (\Hmat - i\vect{\tau}) \mat{A}
\end{aligned}$$