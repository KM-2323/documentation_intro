# General introduction(beginner)
The goal of quantum dynamics is to derive the properties and 
time-evolution of the system of interest. For this, within the 
non-relativistic framework, the time-dependent Schrodinger 
equation (TDSE) must be solved:

$$
\begin{align}
i\hbar\frac{\partial \Psi(\mathbf{R}, \mathbf{r},t)}{\partial t}=\hat{H}\Psi(\mathbf{R}, \mathbf{r},t)
\end{align}
$$

where $\hat{H}$ is the molecular Hamiltonian and $\Psi$ is the wavefunction that describes the motion of both electrons ($\mathbf{r}$) and nuclei ($\mathbf{R}$).

For a given nuclear configuration $\mathbf{R}$, if we clamp the nuclei in place, then the electronic Hamiltonain can be written as:

$$
\begin{align}
\hat{H}_{\text{el}}(\mathbf{r;\mathbf{R}}) = \hat{T}\mat{asd}
\end{align}
$$
