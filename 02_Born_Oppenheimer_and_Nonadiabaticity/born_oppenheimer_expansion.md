---
math: mathjax
---

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
\hat{H}_{\text{el}}(\mathbf{r;\mathbf{R}}) = \hat{T}_{\text{e}}(\mat{r})+\hat{V}_{\text{ee}}(\mat{r})+\hat{V}_{\text{nn}}(\mat{R})+\hat{V}_{\text{en}}(\mat{R})
\end{align}
$$

where $\hat{T}$ is the kinetic energy operator, and $\hat{V}$ the potential energy operator with
subscripts **n** and **e** relating to the nuclei and electrons. The symbol **;** is used to denote the parametric dependence of electronic Hamiltonian on the nuclear coordinates $\mat R$. That is  (explaining what this parameteric dependence is).

Hence this allows the partition of the molecular Hamiltonain:

$$
\begin{align}
\hat{H} = \hat{T}_{\text{n}}(\mat{R}) + \hat{H}_{\text{el}}(\mathbf{r;\mathbf{R}})
\end{align}
$$

Above can be solved if we allow the separation of nuclear and electronic motion, via
expanding the total wave function in functions of the electron coordinates, r,
parametrically dependent on the nuclear coordinates. This is known as the Born-oppenheimer expansion or Born-Haung expansion (the differences is .... one is sum of product while one is only a hartree like product):

$$
\begin{align}
\Psi(\mat R,\mat r,t) = \sum_{i}^{N}\chi_i(\mat R,t)\psi_i(\mat r;\mat R)\label{eq:bo_expansion}
\end{align}
$$

with $\chi_i(\mat R,t),i \in\{1,N\}$ as the nuclear-coordinate dependent coefficients (known as the nuclear wavefunctions) and $\psi_i(\mat r;\mat R),i \in\{1,N\}$ are the electronic eigenfunctions of the
above introduced electronic Hamiltonian:

$$
\begin{align}
\hat{H}_{\text{el}}(\mathbf{r;\mathbf{R}})\psi_i(\mat r;\mat R)=\text{V}_i\psi_i(\mat r;\mat R), \quad i=1,...N
\end{align}
$$

Here, \(\text{V}_i\) are the electronic eigenvalues, later interpreted as the adiabatic potential energy surfaces (PES) that govern the motion of the nuclei. In this treatment, we assume that our electronic Hilbert space is of dimension \(N\) and is spanned by our orthonormal complete set of eigenfunctions of \(\hat{H}_{\text{el}}\):


Here, $V_i$ are the eletroncic eigenvalues (later as the adiabatic potential energy surfaces (PES) that govern the motion of the nuclei). In this treatment, we assume that our electronic Hilbert space is of dimension $N$ and is spanned by our orthonormal complete set of eigenfunction of $\hat{H}_{\text{el}}$:

$$
\begin{align}
\braket{\psi_j}{\psi_i}=\delta_{ji}\\
\sum_{i=k}^N\ket{\psi_k}\bra{\psi_k}
\end{align}
$$

We can substitute \eqref{eq:bo_expansion} into 
