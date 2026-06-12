# A new diabatization scheme for direct quantum dynamics: Procrustes diabatization 2020
## Projection diabatization

**Central idea:** mix adiabatic states in such a way that the rate of change of the states with respect to the nuclear coordinates is minimized, and hence the NACTs are minimized = diabatic representation is one where the character of the states (e.g., ionic and covalent) does not change
as a function of nuclear coordinate.

### Assumption and background

The method relies on configuration interaction expansions of the electronic wavefunction (CASSCF and RASSCF) where the adiabatic states are expanded in term of a set of Slater determinants. So for state $s$:
$$
\begin{align}
\ket{\psi_s} = \sum_{i=1}^{N_{\text{config}}}c_i^s\ket{\varphi_i}
\label{eq:CI_expansion}
\end{align}
$$

with $\{c_i^s\}$  are the coefficients corresponding to each configuration
represented by the determinant, $\{\varphi_i\}$

### Projection diabatisation; Central algorithm

1. Choose a reference geometry $\qv_0$
  At $\qv_0$ the adiabatic and and diabatic states are defined to be the same $\Cmat(\qv_0)=\I$, so the adiabates at $\qv_0$ define the diabatic manifold. Perform SA-CASSCF with only number of states interested
2. At other geometry $\qv$: Perform two eletronic-structure calculations
  1. Standard SA-CASSCF with only number of states interested = produces natural orbitals and CI vectors at $\qv$
  2. rotate the active MOs at $\qv$ so that they have maximal overlap with the active MOs at $\qv_0$ (diabatize the MOs). Then perform a CI-only calculation using these diabatized MOs to get CI vectors in a basis of orbitals that closely match those at $\qv_0$. This calculation should include larger number of states than state of interest.

3. Construct a projector in CI space
  1. Take the CI vectors of the diabatic manifold at $\qv_0$ (first N states)
  2. Build a projector $\hat P$ onto the subspace spanned by these CI vectors.
  3. Apply $\hat P$ to the CI vectors for all states at $\qv$. This extracts only those components of the CI space at $\qv$ that live in the reference manifold.

4. Use Procrustes rotation in CI space
  1. After the projection, you have a set of vectors at $\qv$ that span essentially the same subspace as the reference diabats at $\qv_0$
    , but are not yet optimally aligned with them.
  2. Apply the orthogonal Procrustes solution to rotate these CI vectors so that they are as close as possible to the reference CI vectors. This gives you a unitary matrix, and that matrix is taken as the ADT matrix $\Cmat$

Intuitively:

1. The MO rotation step minimizes the part of the NACTs thatt comes from how the determinants themselves change with geometry.
2. The CI-vector Procrustes step minimizes the remaining part coming frorm changes in CI coefficients. (can been seen is we expand NACT using $\eqref{eq:CI_expansion}$)
$$
\begin{align}
\mat F_{ab}&=\braket{\psi_a}{\nabla\psi_b}\\
    &=\sum_{i,j=1}^{N_{\text{config}}}\mel{c_i^{a*}\varphi_i}{\nabla}{c_j^{b}\varphi_j}\\
    &=\sum_{i,j=1}^{N_{\text{config}}}c_i^{a*}c_j^{b}\braket{\varphi_i}{\nabla\varphi_j}+\sum_{i,j=1}^{N_{\text{config}}}c_i^{a*}{\nabla}c_j^{b}\underbrace{\braket{\varphi_i}{\varphi_j}}_{\delta_{ij}}\\
    &=\sum_{i,j=1}^{N_{\text{config}}}c_i^{a*}c_j^{b}\braket{\varphi_i}{\nabla\varphi_j}+\sum_{i=1}^{N_{\text{config}}}c_i^{a*}{\nabla}c_i^{b}
\end{align}
$$
where the orthonormality of the Slater determinants is used. Above reveals the coordinate dependence of the MOs [consisting of the
MO coefficients and the atomic orbitals (AOs)] through the gradient
of the Slater determinants and the CI coefficients

## CASSCF state wavefunction overlap

For CASSCF wavefunction of electronic state $s,u$ at geometry $\qv_i and \qv_j$ you need
$$
\begin{align}
\Smat_{su}^{\text{State}}(q_a, q_b)&=\braket{\psi_s(q_a)}{\psi_u(q_b)}\\
    &=\sum_{i,j}c_i^{s*}(q_a)c_j^{u}(q_b)\underbrace{\braket{\varphi_i(q_a)}{\varphi_j(q_b)}}_{\text{configuration overlap}}
\end{align}
$$
Evidently, the equation can be broken into two parts.

1. Compute all configuration overlaps $\braket{\varphi_i(q_a)}{\varphi_j(q_b)}$ between Slater determinants at different geometries.
2. Combine them with the CI coefficients to get $\Smat^{\textbf{state}}$
### Overlap between Slater determinants = determinant of overlap matrix

#### Background

Take two $N$-electron Slater determiannts built from sets of spin-orbitals $\{\chi_p^i\}$ and  $\{\chi_q^j\}$:
$$
\begin{align}
\ket{\varphi_i}=\frac1{\sqrt{N!}}\det\left|\chi_p^i...\chi_r^i\right|=\frac{1}{\sqrt{N!}}\sum_{i\in S_N}\text{sgn}(i)\cdot\chi_p^i(1)\cdot\ldots\cdot\chi_r^i(n)
\\\ket{\varphi_j}=\frac1{\sqrt{N!}}\det\left|\chi_q^j...\chi_s^j\right|=\frac{1}{\sqrt{N!}}\sum_{j\in S_N}\text{sgn}(j)\cdot\chi_q^j(1)\cdot\ldots\cdot\chi_s^j(n)
\end{align}
$$
- $i$ represent a unique permutation of the spin orbitals belonging to the symmetric group $S_N$ of order $N$, (the set of all permutations of $N$ elements)

Define the elements of one-electron overlap matrix:
$$
\begin{align}
\Smat_{pq}=\braket{\chi_p^i}{\chi_q^j}
\end{align}
$$
Then this yields the expression for the overlap
$$
\begin{align}
\braket{\varphi_i}{\varphi_j}&=\frac{1}{N!}\sum_{i\in S_n}\text{sgn}(i)\sum_{j\in S_n}\text{sgn}(j)\braket{\chi_p^i}{\chi_q^j}\cdot\ldots\cdot\braket{\chi_r^i}{\chi_s^j}
\end{align}
$$
Now recall thee Leibniz formula of determinant for matrix $\Smat$
$$
\begin{align}
\det(\Smat)=\sum_{\sigma\in S_n}\text{sgn}(\sigma)\prod_{i=1}^n s_{i,\sigma(i)}
\end{align}
$$
- Where $S_n$ is the set of all permutations of {1,..n}.
- $\sigma(i)$ is the permuted columns for row $i$
- $\text{sgn}(\sigma)$ is the sign of the permutation ($\pm1$ for even and odd permutations)
- $\prod_{i=1}^n s_{i,\sigma(i)}$ is thee product of $n$ entries, taking exactly one element from each row and each column e.g. ($s_{1,\sigma(1)}\cdot s_{2,\sigma(2)}\cdot\ldots \cdot s_{n,\sigma(n)}=s_{11}s_{22}\ldots s_{nn}$,$s_{1,\sigma(2)}\cdot s_{2,\sigma(1)}\cdot\ldots \cdot s_{n,\sigma(n)}=-s_{12}s_{21}\ldots s_{nn}$ )

Hence:
$$
\begin{align}
\sum_{j\in S_n}\text{sgn}(j)\braket{\chi_p^i}{\chi_q^j}\cdot\ldots\cdot\braket{\chi_r^i}{\chi_s^j} =
\left|\begin{array}{ccc}
\braket{\chi^i_p}{\chi_q}&\cdots&\braket{\chi^i_p}{\chi_s}\\
\vdots &\ddots&\vdots\\
\braket{\chi^i_r}{\chi_q}&\cdots&\braket{\chi^i_r}{\chi_s}
\end{array}\right|=\det\Smat
\end{align}
$$
So:
$$
\begin{align}
\braket{\varphi_i}{\varphi_j}&=\frac{1}{N!}\sum_{i\in S_N}\text{sgn}(i)\det\Smat=\frac{1}{N!}N!\det\Smat=\det\Smat
\end{align}
$$

Small example:
$$
\begin{align}
\ket{\varphi_i}=\frac{1}{\sqrt{2}}\left[\chi_1^i(1)\chi_2^i(2)-\chi_2^i(1)\chi_1^i(2)\right]\\
\ket{\varphi_j}=\frac{1}{\sqrt{2}}\left[\chi_3^j(1)\chi_4^j(2)-\chi_4^j(1)\chi_3^j(2)\right]
\end{align}
$$
Then
$$
\begin{align}
\Smat = \begin{pmatrix}
\braket{\chi_1^i(1)}{\chi_3^j(1)}&\braket{\chi_1^i(2)}{\chi_4^j(2)}\\[10pt]
\braket{\chi_2^i(1)}{\chi_3^j(1)}&\braket{\chi_2^i(2)}{\chi_4^j(2)}
\end{pmatrix}
\end{align}
$$
$$
\begin{align}
\braket{\varphi_i}{\varphi_j}=\frac12\Big[ \braket{\chi_1^i(1)}{\chi_3^j(1)} \braket{\chi_2^i(2)}{\chi_4^j(2)}+ \braket{\chi_2^i(1)}{\chi_4^j(1)} \braket{\chi_1^i(2)}{\chi_3^j(2)}\\
     -\braket{\chi_1^i(1)}{\chi_4^j(1)} \braket{\chi_2^i(2)}{\chi_3^j(2)}-\braket{\chi_2^i(1)}{\chi_3^j(1)} \braket{\chi_1^i(2)}{\chi_4^j(2)}\Big]\\
     =\braket{\chi_1^i(1)}{\chi_3^j(1)} \braket{\chi_2^i(2)}{\chi_4^j(2)}-\braket{\chi_1^i(2)}{\chi_3^j(1)} \braket{\chi_1^i(2)}{\chi_4^j(2)}
\end{align}
$$
where the indistinguishability of the electrons are used

While:
$$
\begin{align}
\det(\Smat)=\braket{\chi_1^i(1)}{\chi_3^j(1)} \braket{\chi_2^i(2)}{\chi_4^j(2)}-\braket{\chi_1^i(2)}{\chi_3^j(1)} \braket{\chi_1^i(2)}{\chi_4^j(2)}
\end{align}
$$

For a closed-shell determinant with separate $\alpha/\beta$ spin parts.

1. factor spin-orbitals into spatial MO x spin function
2. The $\alpha$ and $\beta$ subspace are orthogonal in spin, so the total overlap matrix is block-diagonal (order such that alpha orbital come first followed by all beta orbitals):
$$
\begin{align}
\Smat=\begin{pmatrix}
\Smat^\alpha&0\\
        0 &\Smat^\beta
\end{pmatrix}
\end{align}
$$
which using the fact thatthe determinant of a block-diagonal matrix is the product of the determinants of its constituent blocks:
$$
\begin{align}
\det(\Smat)=\det\left(\Smat^\alpha\right)\det\left(\Smat^\beta\right)
\end{align}
$$

#### Explanation + Elaboration on CASSCF wavefucntion algorithm provided in the SI on overlaps

1. AO and MO overlap matrices

2. MO and CI data at both geometries:

Store:

- MO coefficient matrices $\Cmat(\qv_i)$ and $\Cmat(\qv_j)$
- CI coefficients

3. Form AO overlap matrix $\Smat^{AO}$

$$
\Smat^{AO}_{ab}(\qv_i,\qv_j)=\braket{\phi_a(q_i)}{\phi_b(q_j)}
$$

where $\phi_a$ are the AO basis functions.

4. Full MO overlap matrix:

Any MO is expanded ins AO basis:

$$
\chi_p=\sum_a C_{ap}\phi_a
$$

So the MO overlap matrix is just:

$$
\begin{aligned}
\Smat^{MO}_{pq}(q_i,q_j)&= \braket{\chi_p(q_i)}{\chi_q(q_j)}
\\&= \sum_{ab} C_{ap}^*\phi_a^* \phi_b C_{bq}\\
&=\sum_{ab}  C_{ap}^*\Smat^{AO}_{ab}(\qv_i,\qv_j)C_{bq}
\end{aligned}
$$

Which gives:

$$
\Smat^{MO}(q_i,q_j)=\Cmat^\dagger(q_i)\Smat^{AO}(q_i,q_j)\Cmat({q_j})
$$

This contains the overlap between every MO in closed +active space.

5. Construct overlap of configuration from matrix of overlap of MO

Loop over all pairs of configuration (Slater determinants) $\varphi_k(q_i)$ and $\varphi_l(q_j)$. For each pair:

6. Identify which MOs are occupied in $\alpha$ and $\beta$ for each determinant

Configuration $k$ at $q_i$:

- occupied $\alpha$ orbitals $p_1,...p_{N_{\alpha}}$
- occupied $\beta$ orbitals $r_1,...r_{N_{\beta}}$

Configuration $l$ at $q_j$:

- occupied $\alpha$ orbitals $q_1,...q_{N_{\alpha}}$
- occupied $\beta$ orbitals $s_1,...s_{N_{\beta}}$

7. Extract $\alpha$ and $\beta$ submatrices

Construct:

- $\Smat^{\alpha}_{mn}=\Smat^{MO}_{p_mq_n}$
- $\Smat^{\beta}_{mn}=\Smat^{MO}_{r_ms_n}$

which yiled the matrices of overlap of the MOs in the current pair of configurations, considering the alpha and beta part in turn quoting from SI

8. configuration overlap as product of determinants

$$
\begin{align}
\braket{\varphi_k(q_i)}{\varphi_l(q_j)}=\det(\Smat) = \det\Smat^{\alpha}\det \Smat^{\beta}
\end{align}
$$

9. Redundancy in determinants

Many configurations share the same $\alpha$ or $\beta$ occupation patterns.

- Example: two configurations might differ only by a $\beta$ excitation; then their $\alpha$-occupied sets are identical, so their $\Smat^{\alpha}$ matrices are the same.
- As you loop over all configuration pairs, you keep seeing the same $\alpha$ or $\beta$ overlap submatrices.

I think they might haved cached the determinant values so once you computed $\det\Smat^{\alpha}$ and $\det\Smat^{\beta}$ for a given pair of occupation patterns, you reuse them the next time that pattern appears.

10. Form configuration overlap to state overlaps

Weights by CI coefficient and sum:

$$
\begin{align}
\Smat_{su}^{\text{State}}(q_i,q_j)&=\sum_{kl}c_k^{s*}(q_i)c_l^{u}\braket{\varphi_k(q_i)}{\varphi_l(q_j)}\\
  &=\sum_{kl}c_k^{s*}(q_i)c_l^{u}(q_j)\det\Smat^{\alpha,kl}\det \Smat^{\beta,kl}
\end{align}
$$

where the upper indices of $\Smat^{\alpha,kl}$ denotes that it is the overlap matrix over the MOs of configuration $k$  and $l$

## Set up for Procrustes Diabatisation

### Overlap matrices in adiabatic and diabatic bases

#### Definitions

At any geometry $\qv$, there is a row vector of adiabatic states as basis
$$
\begin{align}
\vect{\psi}^A(\qv)=(\ket{\psi_1^A(\qv)},...,\ket{\psi_n^A(\qv)})
\end{align}
$$
Then the quasi-diabatic states are defined by an orthogonal ADT matrix:
$$
\begin{align}
\vect\psi^D(\qv)=\vect{\psi}^A(\qv)\Cmat(\qv)\rightarrow \ket{\psi_i^D(\qv)}=\sum_{j}\ket{\psi_j^A(\qv)}\Cmat_{ji}(\qv)
\end{align}
$$
We fix the gauge at the reference geometry $\qv_0$ by:
$$
\begin{align}
\Cmat(\qv_0)=\I
\end{align}
$$
So the adiabatic and diabatic states coincide at the initial geometry
#### Adiabatic and diabatic overlap matrices

let
$$
\begin{align}
\Smat^{A}(\qv_a, \qv)_{ij}=\braket{\psi_i^A(\qv_a)}{\psi_j^A(\qv)}
\end{align}
$$
be the overlap matrix between the adiabatic states at $\qv_0$ and those at $\qv$. Then the diabatic overlap matrix:
$$
\begin{align}
\Smat^{D}(\qv_a, \qv)_{ij}&=\braket{\psi_i^D(\qv_a)}{\psi_j^D(\qv)}\\&=\sum_{kl}\mat C_{ki}^*(\qv_a)\mat C_{lj}\braket{\psi_k^A(\qv_a)}{\psi_l^A(\qv)}\\
     &=\left[\Cmat^T(\qv_a)\Smat^{A}(\qv_a,\qv)\Cmat(\qv)\right]_{ij}
\end{align}
$$
Or in matrix notation
$$
\begin{align}
\Smat^D(\qv_a,\qv)=\Cmat^\dagger(\qv_a)\Smat^A(\qv_a,\qv)\Cmat(\qv)
\end{align}
$$
The central idea is to make state to be invaraint with respect to the change in geometry:
$$
\begin{align}
\Smat^D(\qv_a,\qv)\approx \I
\end{align}
$$
which is equivalnet of minimising the Frobenius norm of the differences:
$$
\begin{align}
\left\lVert \Smat^D-\I \right\rVert_F
\end{align}
$$
### The Procrustes problem

The orthogonal Procrustes problem stated; Given matrices $\mat P, \mat Q$, find orthogonal $\mat \Omega$ that minimise
$$
\begin{align}
\left\lVert \mat P\mat \Omega-\mat Q \right\rVert_F
\end{align}
$$
have solution

$$
\begin{align}
\mat \Omega=\mat U\mat V^T
\end{align}
$$
where $\mat U$ and $\mat V$ come from SVD of $\mat P^T\mat Q$

Recall we want to minimise:
$$
\begin{align}
\left\lVert \Smat^D-\I \right\rVert_F = \left\lVert \Cmat^\dagger(\qv_a)\Smat^A(\qv_a,\qv)\Cmat(\qv)-\I \right\rVert_F
\end{align}
$$
over orthogonal $\Cmat$
Then using that Frobenius norm is invariant under transpose:
$$
\begin{align}
\left\lVert (\Cmat^\dagger(\qv_a)\Smat^A(\qv_a,\qv)\Cmat(\qv)-\I)^T \right\rVert_F
=\left\lVert \Cmat^\dagger(\qv)(\Smat^{A})^{T}(\qv,\qv_a)\Cmat(\qv_a)-\I \right\rVert_F
\end{align}
$$
equally
$$
\begin{align}
\left\lVert \mat \Omega^T\mat P^T-\mat Q \right\rVert_F
\end{align}
$$
so:

$$
\begin{align}
\mat \Omega^T\mat P^T=\Cmat^\dagger(\qv)(\Smat^{A})^{T}(\qv,\qv_a)\Cmat(\qv_a)
\end{align}
$$
which gives:
$$
\begin{align}
\mat \Omega&=\Cmat(\qv)\\
\mat P&=\Cmat(\qv_a)(\Smat^{A})(\qv_a,\qv)\\
\mat Q &= \I
\end{align}
$$
Then the necessary SVD is:
$$
\begin{align}
\mat P^T\mat Q=(\Smat^{A})^{T}(\qv,\qv_a)\Cmat^T(\qv_a)=\mat U\mat \Sigma\mat V^T
\end{align}
$$
which gives the ADT matrix:
$$
\begin{align}
\mat C(q)=\mat U\mat V^T
\end{align}
$$
Note in above, the paper had $\qv_a$ as the previously diabatized geoemetry that is closest to current $\qv$
### Higher level overview

We have:
- A set of geometries $\mathcal{Q}$ used to build and fit KRR PESs
- At each geometry $\qv_i\in\mathcal{Q}$,we know adiabatic electronic energies and wavefunctions from SA-CASSCF
- For dynamics, it is better to use diabatic PESs as they are smoothly varying with finite coupling

So we want, for every sampled geometry $q_i$:
- a ADT matrix $\Cmat$
- Diabatic energy

The Procrustes diabatization does this without ever computing NACs, by:
- Making the orbitals at neighbouring geometries maximally coincident.
- Using state overlaps between those geometries
- Solving an orthogonal Procrustes problem to get the best rotation $\Cmat(\qv)$ that makes diabatic states at neighbouring geometries look the same

### Notation and object preceeding breakdown of the algorithm

#### Sets of geometries

- $\mathcal{Q}=\{\qv_i:i=1,.. N, N+1, ..N+M\}$: All geometries used in the KRR fit
- $\qv_1$: designated reference geometry $\qv_1$ (Fc point). At this geometry set up the gauge such that:
$$
\Cmat(\qv_1) = \I
$$
  so adiabatic and diabatic states coincide there. At t = 0 , $\mathcal{Q}'={\qv_1}$
- $\mathcal{Q}'\subseteq\mathcal{Q} =\{\qv_i:i=1,.. N\} $: Those geometries that have already been diabatized (with known $\Cmat(\qv_i)$ diabatic orbitals and states)
- when adding more points, they define $\overline{\mathcal{Q}} = \mathcal{Q}\setminus\{\qv_1\}$ and pick members to diabatized iin order of increasing distance from $\qv_1$ (a new set to be loop over for later)
- $\mathcal{Q}''\subseteq\mathcal{Q} =\{\qv_i:i=N+1,.. M\} $: $M$ new geometries that will be added that is not yet diabtized

#### Data stored at each geometry

For each $\qv_i$ (after some processing):
- Adiabatic energies $\V^{\text{A}}(\qv_i)$
- A set of molecular orbitals (MO); these will be turned into diabatic orbital basis at each geometry so that character is consistent across space
- CI vectors (coefficients and associated determinant occupations ) for adiabatic states in that MO basis

For geometries that have already been diabatized $\mathcal{Q}'$ you also store:
- Thee ADT matrix $\Cmat(\qv_i)$
- Diabatic energies and couplings
- Diabatic MOs (i.e. the orbitals after the Procrustes-based orthogonal rotations)

### Step-by-step Algorithm

#### Initial Setup

1. Pre-compute and store electrornic-structure data

  For all $\qv_i\in\mathcal{Q}:$
  - Run your SA-CASSCF  calculation
  - Save for all $\qv_i\in \mathcal{Q}''$:
    - Adiabatic energies $\V^{\text{A}}(\qv_i)$
    - the MO coefficients matrix $\boldsymbol{C}(\qv_i)$
    - CI vectors $c_k^s$ for state $s$ and configuration $k$

2. Initialization diabatization
  - Take $\qv_1$ as reference
  - AT $\qv_1$ define $\Cmat(\qv_1)=\I$
  - Take the MOs and CI vectors there as you reference diabatic states
  - Put $\qv_1$ into the diabatized set $\mathcal{Q}'$

3. Flag all memberd of $\mathcal{Q}'$ those points which have been diabatized during previous
  time-steps

#### Choosing processing order and proximal anchor

For all geometries $\qv_i\in \overline{\mathcal{Q}} \setminus\mathcal{Q}'$ (initially that will be all $\qv_i\neq \qv_1$)

4. Compute distances from the reference:
  For reach such $\qv_i$
  - Compute $r_i=\left\lVert \qv_i-\qv_1 \right\rVert$ in the dynamics coordinates system (mass-frequency scaled normal modes or Cartesian coordinates)
  - Sort and label them in increasing $r_i$

5. For each geometry, choose a proximal diabatized neighbour

  For each non-reference geometry $\qv_i\in \overline{\mathcal{Q}} \setminus\qv_1$. Define $\qv_i^{prox}$ the member of $\overline{\mathcal{Q}} $ that.
  - is closest to $\qv_i$
  - is also closer to $\qv_1$ than $\qv_i$ is

  Idea: You build a tree from the reference outwards. For each new point, you diabatize it relative to the closest previously diabatized point that lies between it and the reference. This tends to minimse sudden basis flips.
6. Main loop over geometries

  Loop over all members of $\overline{\mathcal{Q}}$ in order of increasing $r_i$
  - **Case 1:** : Already Handled
    - If the energies at $\qv_i$ have already been diabatized in a previous time and every geometry along the path from $\qv_1$ to $\qv_i$ were also diabatized during earlier time steps, then cycle the loop as the diabatized states are unchanged

  - **Case 2:** : Need to diabatize $\qv_i$

  - **Step A:** : Diabatize orbitals at $\qv_i$ using $\qv_i^{prox}$
    1. **A.1** Form overlap of the diabatic MOs at $\qv_i^{prox}$ and the natural MOs from Molpro at $\qv_i$:
$$
\begin{align}
\Smat^{MO} = (\boldsymbol{C}^{(prox)})^\dagger\Smat^{AO}\boldsymbol{C}^{(i)}
\end{align}
$$
      - $\Smat^{AO}_{ab}(\qv_i^{prox},\qv_i)=\braket{\phi_a(\qv_i^{prox})}{\phi_b(\qv_i)}$
      - $\boldsymbol{C}^{(prox)}$: The MO coefficient matrices that transformed AOs to diabtic MOs at $\qv_i^{prox}$
      - $\boldsymbol{C}^{(i)}$: The MO coefficient matrices that transformed AOs to natural MOs at $\qv_i$

    1. **A.2** Procrustes rotation of MOs at $q_i$

      Goal: Find an orthogonal MO rotation $\mat \Omega^{MO}(\qv_i)$ so that in the subspace you are allowed to rotate, the overlap

      Concretely:
      - Split MOs into blocks: Closed, active, virtual
      - For each block separately extract the corresponding block of $\Smat^{MO}$, say $\Smat_{block}^{MO}$
      - Solve Procrustes:
$$
\min||\Smat_{block}^{MO}\Omega^{MO}(\qv_i)-\I||_F
$$
        Has solution: $\Omega^{MO}_{block}(\qv_i)=\mat U\mat V^T$ for $(\Smat_{block}^{MO})^T\I=(\Smat_{block}^{MO})^T=\mat U\mat \Sigma \mat V^T$

        Apply these block rotation to the MOs at $\qv_i$
$$
\boldsymbol{C}^{(i)\text{diab}}= \boldsymbol{C}^{(i)}\Omega^{MO}(\qv_i)
$$
        So now the orbitals at $\qv_i$ are diabatic orbitals which maximally coincident with those at $\qv_i^{prox}$

  - **Step B:** Recompute CI coefficients with orbitals frozen (a MRCI step)

    Molpro's SA-CASSCF implementation tends to rotate the orbitals to natural orbitals each time you run CASSCF - which would undo the carefully constructed "diabatic" orbitals if you just ran CASSCF again.

    To get CI vectors expressed in the diabatic orbitals basis:
    - Run a multi-reference CI (MRCI) at $\qv_i$ using the diabatized orbitals as a fixed orbital set and allowing only CI coefficient to change
    - Run it without external excitation (NOEXC keyword in the input card)

  - **Step C:** State overlaps beteween $\qv_i^{prox}$ and $\qv_i$

    compute the wavefunction overlaps between these sets of states using the CASSCF-overlap machinery described earliear:
    1. Use AO and MO coefficients (for the diabatic orbitals at both geometries) to computee the MO overlap matrrix $\Smat^{MO}$ again
    2. For each pair of Slater-determinant/configurations $\varphi_k(\qv_i^{prox})$, $\varphi_l(\qv_i)$ form $\alpha$ and $\beta$ overlap submatrices and take the determinant of the overlap to get $\braket{\varphi_k(q_i^{prox})}{\varphi_l(q_i)}$
    3. 
$$
\begin{align}
\Smat_{su}^{\text{A,State}}(q_i^{prox},q_i)=\sum_{kl}c_k^{s*}(q_i^{prox})c_l^{u}(q_i)\braket{\varphi_k(q_i^{prox})}{\varphi_l(q_i)}
\\=\sum_{kl}c_k^{s*}(q_i^{prox})c_l^{u}(q_i)\det\Smat^{\alpha,kl}\det \Smat^{\beta,kl}
\end{align}
$$

  - **Step D:** Solve Procrustes problem:

    Minimise
$$
\left\lVert \Cmat^\dagger(\qv_i^{prox})\Smat^{A,\text{State}}(\qv_i^{prox},\qv_i)\Cmat(\qv_i)-\I \right\rVert_F
=
\left\lVert \Smat^{D,\text{State}}-\I \right\rVert_F
$$
    with:
$$
\mat P=\Cmat(\qv_i^{prox})\Smat^{A,\text{State}}(\qv_i^{prox},\qv_i),\qquad \mat Q=\I,\qquad\mat \Omega=\Cmat(\qv_i)
$$
    and the solution:
$$
\Cmat(\qv_i)=\mat U\mat V^T
$$
    by computing the SvD:
$$
\mat P^T\mat Q= \left(\Smat^{A,\text{State}}\right)^T\Cmat^T(\qv_i^{prox})=\mat U\mat \Sigma\mat V^T
$$
  - **Step E:** Transform energies and store everything

    1. Diabatic energies and coupling
$$
\mat H^D(\qv_i)=\Cmat^T(\qv_i)\mat H^{A}(\qv_i)\Cmat(\qv_i)
$$
    2. Store for later:
      - Save $\Cmat(\qv_i)$
      - Save the diabatic orbitals at $\qv_i$
      - Mark $\qv_i$ as diabatized and add it to $\mathcal{Q}'$

    3. Return to the beginning of the loop to process the next geometry in increasing distance order.


