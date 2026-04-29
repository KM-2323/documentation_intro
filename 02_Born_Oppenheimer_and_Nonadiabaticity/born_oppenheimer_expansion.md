# General introduction(beginner)

## Preliminaries 
As a reminder, throughout the guides atomic units are adopted, in whcih electronic mass, charge and plank's constant $\hbar$ and unity and the unit of length is Bohr. So the electronic kinetic oeprator and potental operators are simplified as:

$$
\begin{aligned}
-\frac{1}{2m_e}\nabla^2_i&\equiv-\frac{1}{2}\nabla^2_i\\
\frac{e^2}{4\pi\epsilon_0r_{ij}}&\equiv\frac{1}{r_{ij}}
\end{aligned}
$$

Boldfaces is used for vectors and matrices and underlined boldfaces is used for tensor of $\text{rank}\geq3$. So $\mat R$ is the vector of nuclear coordiantges with component $\mat{R}_{\alpha}$ of dimenion $3N$ for system with $3N$ nuclei (Cartesian frame). The vector operator $\nabla$, will thus have components:

$$
\nabla_\alpha=\pder{R_\alpha}
$$

and is the derivative vector when applied to a scalar function, i.e. when applied to our scalar potential:

$$
\nabla V=
\begin{pmatrix}
\pdv V {R_1}\\ 
\pdv{V}{R_2}\\
\vdots\\
\pdv{V}{R_{3N}}
\end{pmatrix}
$$

Later on, the nuclear coordinates are mass-scaled:

$$
q_\alpha = \sqrt{M_\alpha} R_\alpha
$$

witj $M_\alpha$ as the mass associated iwth the coordinate, then the nuclear kinetic enegry operator is simplied as (assuming $\hbar=1$):

$$
\begin{align}
\hat T&=\sum_{\alpha=1}^{3N}-\frac{1}{2M_\alpha}\pddv{}{R_{\alpha}}
\\&=-\frac{1}{2\mat M}\nabla^2_{\mat R}\\
&=-\frac 1 2\nabla^2_{\mat q}
\end{align}
$$

For extensive explanation on mass-scaled/mass-frequency scaled coordinates. Please refer to [Coordinate Tranformation](../01_Primer/coordiante_transformation.md)
## Setting the stage
The goal of quantum dynamics is to derive the properties and time-evolution of the system of interest. For this, within the non-relativistic framework, the time-dependent Schrodinger equation (TDSE) must be solved:

$$
\begin{align}
i\hbar\frac{\partial \Psi(\mathbf{R}, \mathbf{r},t)}{\partial t}=\hat{H}\Psi(\mathbf{R}, \mathbf{r},t)\label{eq:TDSE}
\end{align}
$$

where $\hat{H}$ is the molecular Hamiltonian and $\Psi$ is the wavefunction that describes the motion of both electrons ($\mathbf{r}$) and nuclei ($\mathbf{R}$).

For a given nuclear configuration $\mathbf{R}$, if we clamp the nuclei in place, then the electronic Hamiltonain can be written as:

$$
\begin{align}
\hat{H}_{\text{el}}(\mathbf{r;\mathbf{R}}) = \hat{T}_{\text{e}}(\mat{r})+\hat{V}_{\text{ee}}(\mat{r})+\hat{V}_{\text{nn}}(\mat{R})+\hat{V}_{\text{en}}(\mat{R})
\end{align}
$$

where $\hat{T}$ is the kinetic energy operator, and $\hat{V}$ the potential energy operator with subscripts **n** and **e** relating to the nuclei and electrons. The symbol **;** is used to denote the parametric dependence of electronic Hamiltonian on the nuclear coordinates $\mat R$. That is (explaining what this parameteric dependence is).

Hence this allows the partition of the molecular Hamiltonain:

$$
\begin{align}
\hat{H} = \hat{T}_{\text{n}}(\mat{R}) + \hat{H}_{\text{el}}(\mathbf{r;\mathbf{R}})
\end{align}
$$

Above can be solved if we allow the separation of nuclear and electronic motion, via expanding the total wave function in functions of the electron coordinates, r, parametrically dependent on the nuclear coordinates. This is known as the Born-oppenheimer expansion or Born-Haung expansion (the differences is .... one is sum of product while one is only a hartree like product):

$$
\begin{align}
\Psi(\mat R,\mat r,t) = \sum_{i}^{N}\chi_i(\mat R,t)\psi_i(\mat r;\mat R)\label{eq:bo_expansion}
\end{align}
$$

with $\chi_i(\mat R,t),i \in\{1,N\}$ as the nuclear-coordinate dependent coefficients (known as the nuclear wavefunctions) and $\psi_i(\mat r;\mat R),i \in\{1,N\}$ are the electronic eigenfunctions of the
above introduced electronic Hamiltonian:

$$
\begin{align}
\hat{H}_{\text{el}}(\mathbf{r;\mathbf{R}})\psi_i(\mat r;\mat R)=V_i\psi_i(\mat r;\mat R), \quad i=1,...N
\end{align}
$$

Here, $V_i$ are the eletroncic eigenvalues (later as the adiabatic potential energy surfaces (PES) that govern the motion of the nuclei). In this treatment, we assume that our electronic Hilbert space is of dimension $N$ and is spanned by our orthonormal complete set of eigenfunction of $\hat{H}_{\text{el}}$:

$$
\begin{align}
\braket{\psi_j}{\psi_i}=\delta_{ji}\\
\sum_{i=k}^N\ket{\psi_k}\bra{\psi_k}
\end{align}
$$

where the braket notation is used to denote integration over all electronic cooridnates.

We can substitute \eqref{eq:bo_expansion} into \eqref{eq:TDSE}, left multiply by $\psi_j(\mat (r);\mat R)$ and intyegrating ober the electronic coordinates (detailed derivations are presented in [born-huang-adiabatic-expansion](adiabatic_tdse.md)):

$$
\begin{align}
-\frac{1}{2}\nabla^2\chi_j + (V_j-E)\chi_j-\frac{1}{2m}\sum_{i=1}^{N}(2\F_{ji}\cdot\nabla\psi_i+\G_{ji}\psi_i)
\end{align}
$$

with $\F$  as the non-adiabatic matrix of vectors(or a rank 3 tensor $\in{(N,N,f)}$), with elements:

$$
\begin{align}
\F_{ij} = \braket{\psi_j}{\nabla_{\mathbf{R}}\psi_i}
\end{align}
$$

(so each matric elemenet of $\F$ is a vector of $f$ dimension). Here $\F_{ij}$ is known as the derivative coupling vector or also known as the nonadiabatic coupling vector. However, in this guide, nonadiabatic coupling vector will be reserved for another quantity which will be defined later.

and $\G$ as the  non-adiabatic matrix of scalars with elements:

$$
\begin{align}
\G_{ij} = \braket{\psi_j}{\nabla_{\mathbf{R}}^2\psi_i}
\end{align}
$$

Both $\F$ and $\G$ are related to the rate of change of your electronic(here the adiabatic) function with respect to the nuclear coordinates. 
