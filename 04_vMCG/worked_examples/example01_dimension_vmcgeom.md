** Array/tensor shapes and dimension

- $N$: Number of gaussian in the set (single set = total ;multiset per state)
- $\Ns$ number of electronic states
- $F$ number of nuclear DOFs
- $P$ number of Gaussian paraeters per Gaussian (size of the $\alpha$ or $\beta$ index)

*** Parameter count for thawed Gaussians
\begin{align}
    g_j(\x,t)=\exp\left(\x^T\vect{\zeta}_j(t)\x +\vect{\vec{\xi}}_j(t)x+\eta_j(t)\right)
\end{align}
with parameters $\Lambda_j=\{\vect{\zeta}_j,\vect{\vec{\xi}}_j,\eta_j\}$, where $\vect\zeta_j$ is an $F\times F$ matrix, $\vecxi_j$ is an $F$ vector and $\eta_j$ is a scalar. 

For thawed Gaussian, $\matzeta_j$ contains diagonal + off‑diagonal elements. Hence 
\begin{align}
\max{\alpha} = F^2+F+1
\end{align}

*** Shapes:overlaps and Hamiltonians
Overlap $\Smat$

- Matrix: $\Smat\in\mathbb{C}^{N\times N}$ with $\Smat_{jl}=\braket{g_j}{g_l}$
- Tensor: Rank-2 $(j,l)$ of shape $(N,N)$

Hamiltonian Blocks $\Hmat^{(ss')}$

- For each $(s,s')$:Matrix $\Hss{s}{s'}\in\mathbb{C}^{N\times N}$ 
- Full electronic+Nuclear Hamiltonian in the product basis: block matrix of size $(N\Ns)\times(N\Ns)$ with $\Ns\times\Ns$ blocks.

Density matrices $\rhoss{s}{s'}$

- For each $(s,s')$: $\rhoss{s}{s'}\in\mathbb{C}^{N\times N}$ with $\rhojlss{j}{l}{s}{s'}=\cAvecjs{j}{s}\Avecjs{j}{s'}$
- A rank 4 tensor with shape $(\Ns,\Ns, N, N)$

*** {Shapes:Derivative overlap objects}
First introduce the flattened compound index:
\[J \equiv(j,\alpha),J = 1,....NP\]
So when it is stored in a single dimension array, $J = (j-1)p+\alpha$. So suppose there are two gwps and each has three parameters.

|Wavepacket ($j$) | Parameter ($\alpha$) | Calculation: $(j-1) \times 3 + \alpha$ | Compound Index ($J$) |
| -------- | ------- | ------- | ------- |
1 | 1 | $(1-1) \times 3 + 1$ |$ \mathbf{1}$ 
1 | 2 | $(0) \times 3 + 2$   | $\mathbf{2}$ 
1 | 3 | $(0) \times 3 + 3$   | $\mathbf{3}$ 
2 | 1 | $(2-1) \times 3 + 1$ | $\mathbf{4}$  
2 | 2 | $(1) \times 3 + 2$   | $\mathbf{5}$ 
2 | 3 | $(1) \times 3 + 3$   | $\mathbf{6}$ 

$\Sab{\alpha}{0}$:

- Components:$\Sab{\alpha}{0}=\braket{\partial g_j/\partial \lambda_{j\alpha}}{g_l}$
- As a matrix:$\Sab{\alpha}{0}\in\mathbb{C}^{NP\times N}$ where row index is $(j,\alpha)$ and column index is $l$
- As a tensor: Shape $(N,P,N)$ with indices $(j,\alpha,l)$


$\Sab{0}{\beta}$

- Components:$\Sab{0}{\beta}=\braket{ g_j}{\partial g_l/\partial \lambda_{l\beta}}$
- As a matrix:$\Sab{0}{\beta}\in\mathbb{C}^{N\times NP}$ where row index is $(j)$ and column index is $(l,\beta)$
- As a tensor: Shape $(N,N,P)$ with indices $(j,l,\beta)$

$\Sab{\alpha}{\beta}$

- Components:$\Sab{\alpha}{\beta}=\braket{ \partial g_j/\partial \lambda_{j\alpha}}{\partial g_l/\partial \lambda_{l\beta}}$
- As a matrix:$\Sab{\alpha}{\beta}\in\mathbb{C}^{Np\times NP}$ where row index is $(j,\alpha)$ and column index is $(l,\beta)$
- As a tensor: Shape $(N,P,N,P)$ with indices $(j,\alpha,l,\beta)$

*** Shapes: $\Hssderiv{\alpha}{0}$

- Defined as $\Hjlss{j}{l}{ss'}{,\alpha0}=\mel{\partial g_j/\partial \lambda_{j\alpha}}{\Ham^{(ss')}}{g_l}$
- For each $(s,s')$

- Matrix $\Hssderiv{\alpha}{0}\in\mathbb{C}^{NP\times N}$
- Tensor shape $(N,P,N)$


*** Shapes: the big C matrix/tensor and Y vector/matrix 
Parameter vector $\bLambda$

- You collect all $\lambda_{j\alpha}$ into one long vector $\bLambda$.
- Matrix view: $\bLambda$ as an array of shape $(N, P)$.
- Vector view: flatten to length $NP$.

$\Cmat$


- Matrix view: $\Cmat \in \mathbb{C}^{(NP)\times(NP)}$.
- Tensor view: shape $(N, P, N, P)$.

$\Yvec$


- Vector view: $\Yvec \in \mathbb{C}^{NP}$.
- Tensor/array view: shape $(N, P)$.


And the products are dimensionally consistent:

- $\Sab{\alpha}{0} \Sinv \Sab{0}{\beta} : (NP \times N)(N \times N)(N \times NP) = NP \times NP$.
- $\Sab{\alpha}{0} \Sinv \Hss{s}{s'} : (NP \times N)(N \times N)(N \times N) = NP \times N$, matching $\Hssderiv{\alpha}{0}$.
