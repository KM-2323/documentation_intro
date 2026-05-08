
The total molecular wavefunction in the adiabatic representation is expanded:
$$  
\begin{align}
\Psi(\rv, \Rv)=\sum_{i=1}^N\psivec_i(\rv; \Rv)\chivec_i^{\text{A}}(\Rv)
\end{align}
$$

where $\psi_i$ are adiabatic electronic state and $\chi_i$ are the nuclear function of the respective adiabatci states i.
$$ 
\begin{align}
\left[-\frac{1}{2\mu}\left(\I\pder{\Rv}+\F\right)^2+\V\right]\chivec^{\text{A}}=E\chivec^{\text{A}}
\label{Eq:Spit_diabatic_dressed_nuclear_SE}
\end{align}
$$
    
where:
* $\chivec$ is the column vector of adiabatic radial channel functions (nuclear function)
* $\V$ is the diagonal matrix of adiabatic potential energy
* $\F$ is the first=derivative coupling matrix with elements:
    $$\F_{mn}=\mel{\psi_m}{\pder\Rv}{\psi_n}$$
        
  
Define a covaraint derivative operator:

$$\begin{align}
    \mathcal{D}\equiv \I\pder{\Rv}+\F
\end{align}$$

Then eq.\ref{Eq:Spit_diabatic_dressed_nuclear_SE} is simply:

$$\begin{align}
     \left[-\frac{1}{2\mu}\mathcal{D}^2+\V\right]\chivec^{\text{A}}=E\chivec^{\text{A}}
\end{align}$$

### Split diabatic representation

Motivation: root cause of the problems with the strict diabatic representation is the long-range misbehaviour of the $\F$-matrix elements, a natural solution was to split $\F$ into two parts:

$$\begin{align}
    \F=\F_{a}+\F_{b}
\end{align}$$

where conceptually $\F_{a}$ contains the sharp/short range avoided crossing (removable) that will be diabatized away and $\F_b$ contains the long-range tails (as nonadiabatic coupling to retain physical long range behaviour of the adiabatic potentials). $\F_b$ is nonremovable because eliminating it causes unphysical asymptotic oscillations in strict diabatic potentials.

### Define the partial diabatization matrix $\F_a$

$$\begin{align}
    \pder{\Rv}\Cmat_a=-\F_a\Cmat_a
    \label{eq:partial_cmatric_transform}
\end{align}$$

where $\Cmat_a$ is unitary if $\F_a$ is anti-Hermitian.

$$\begin{align}
    \pder{\Rv}\left(\Cinv_a\Cmat_a\right)=\left(\pdv{\Cinv_a}{\Rv}\right)\Cmat_a+\Cinv_a\left(\pdv{\Cmat_a}{\Rv}\right)
\end{align}$$

Using $\left(\pdv{\Cmat_a}{\Rv}\right)=-\F_a\Cmat_a$

$$\begin{align}
    \left(\pdv{\Cinv_a}{\Rv}\right)=\odag{\left(\pdv{\Cmat_a}{\Rv}\right)}={\left(-\F_a\Cmat_a\right)}^{\dagger}=\Cinv_a\odag{\left(-\F_a\right)}=\Cinv_a\F_a
\end{align}$$

So:

$$
\begin{align}
    \pder{\Rv}\left(\Cinv_a\Cmat_a\right)=\left(\Cinv_a\F_a\right)\Cmat_a+\Cinv_a\left(-\F_a\Cmat_a\right)=0
\end{align}$$

So if $\Cinv_a\Cmat_a=\I$ at some reference $\Rv_0$ then $\Cmat_a$ stays untiary for all $\Rv$

### Define the new diabatic radial functions

Then the adiabatic electronic wavefunction transform as:

$$\begin{align}
    \ket{\varphivec} =\ket{\psivec}\Cmat_a
\end{align}$$

 So the nuclear wavefunction transform contravariantly with respect to the adiabatic electronic wavefunction:
 
$$\begin{align}
    \chivec^{\text{A}}=\Cinv_a\chivec^{\text{D}}\end{align}$$


where $\chivec^{\text{A}}$ is the quasi-diabatic nuclear wavefunction and the $\chivec^{\text{D}}$ is the adiabatic nuclear wavefunction. This because consider the molecular wavefunction in adiabatic expansion:

$$\begin{align}
    \Psi = \sum_i \psi_i \chi_i=\ket{\psivec}\chivec^{\text{A}}
\end{align}$$

and diabatic expansion:

$$\begin{align}
    \Psi = \sum_i \varphi_i \G_i=\ket{\varphivec}\chivec^{\text{D}}
\end{align}$$

Since:

$$\begin{align}
    \ket{\varphivec} =\ket{\psivec}\Cmat_a
\end{align}
$$

So:

$$\begin{align}
    \Psi = \ket{\psivec}\Cmat_a\chivec^{\text{D}}
\end{align}$$

Which compared to:

$$\begin{align}
    \Psi = \ket{\psivec}\chivec^{\text{A}}
\end{align}$$

suggest:

$$\begin{align}
    \Cmat_a\chivec^{\text{D}} = \chivec^{\text{A}} \rightarrow  \chivec^{\text{A}}=\Cinv_a\chivec^{\text{D}}
\end{align}$$



### Derivations
#### Apply $\mathcal{D} $ to the mixed-diabatic vector

$$\begin{align}
    \mathcal{D}\chivec^{\text{D}}&=\mathcal{D}\left(\Cmat_a\chivec^{\text{A}}\right)\\&=\left(\I\pder{\Rv}+\F\right)\left(\Cmat_a\chivec^{\text{A}}\right)\\
&=\left(\pdv{\Cmat_a}{\Rv}\right)\chivec^{\text{A}}+\Cmat_a\left(\pdv{\chivec^{\text{A}}}{\Rv}\right)+\F\left(\Cmat_a\chivec^{\text{A}}\right)
\end{align}
$$

Now split $\F = \F _a+\F_b$

$$\begin{align}
    \mathcal{D}\chivec^{\text{D}}
&=\left(\pdv{\Cmat_a}{\Rv}\right)\chivec^{\text{A}}+{\Cmat}_a\left(\pdv{\chivec^{\text{A}}}{\Rv}\right)+\F_a\left(\Cmat
_a\chivec^{\text{A}}\right)+\F_b\left(\Cmat
_a\chivec^{\text{A}}\right)
\end{align}$$

Substitute equation \ref{eq:partial_cmatric_transform}.

$$\begin{align}
    \mathcal{D}\chivec^{\text{D}}
&=\left(-\F_a\Cmat_a\right)\chivec^{\text{A}}+{\Cmat}_a\left(\pdv{\chivec^{\text{A}}}{\Rv}\right)+\F_a\left(\Cmat
_a\chivec^{\text{A}}\right)+\F_b\left(\Cmat
_a\chivec^{\text{A}}\right)\\
&={\Cmat}_a\left(\pdv{\chivec^{\text{A}}}{\Rv}\right)+\F_b\left(\Cmat
_a\chivec^{\text{A}}\right)
\end{align}$$

Insert identity $\I ={\Cmat}_a\Cinv_a $

$$\begin{align}
    \mathcal{D}\chivec^{\text{D}}
&={\Cmat}_a\left(\pdv{\chivec^{\text{A}}}{\Rv}\right)+{\Cmat}_a\Cinv_a\F_b\left(\Cmat
_a\chivec^{\text{A}}\right)\\
&={\Cmat}_a\left(\pdv{\chivec^{\text{A}}}{\Rv}\right)+{\Cmat}_a\tilde{\F}_b\chivec^{\text{A}}
\end{align}$$

where the similarity-transformed residual coupling is defined:

$$\begin{align}
    \tilde{\F}_b=\Cinv_a\F_b\Cmat_a
\end{align}$$

Hence:

$$\begin{align}
    \boxed{\mathcal D\left(\Cmat
_a\chivec^{\text{A}}\right)=\left(\I\pder{\Rv}+\F\right)\left(\Cmat
_a\chivec^{\text{A}}\right)={\Cmat}_a\left(\pder{\Rv}+\tilde{\F}_b\right)\chivec^{\text{A}}}
\label{eq:partial_transformed_fristorder_d}
\end{align}$$

### Transform the squared operator

$$\begin{align}
    \mathcal{D}^2\left(\Cmat
_a\chivec^{\text{A}}\right)=\mathcal{D}\left[\mathcal{D}\left(\Cmat
_a\chivec^{\text{A}}\right)\right]=\mathcal{D}\left[{\Cmat}_a\left(\pder{\Rv}+\tilde{\F}_b\right)\chivec^{\text{A}}\right]
\end{align}$$

Let

$$\begin{align}
    \mat X_a\equiv\left(\pder{\Rv}+\tilde{\F}_b\right)\chivec^{\text{A}}
\end{align}$$

Then:
$$
\begin{align}
    \mathcal{D}^2\left(\Cmat_a\chivec^{\text{A}}\right)=\mathcal{D}\left({\Cmat}_a\mat X_a\right)
\end{align}
$$

But equation \ref{eq:partial_transformed_fristorder_d} is applicable to any arbitrary vector function in place of $\chivec^{\text{A}}$, we could simply reuse it with $\mat X_a$ in place of $\chivec^{\text{A}}$.:

$$\begin{align}
   \mathcal D\left({\Cmat}_a\mat X_a\right)={\Cmat}_a\left(\pder{\Rv}+\tilde{\F}_b\right) \mat X_a
\end{align}
$$

Now substitute back $ \mat X_a\equiv\left(\pder{\Rv}+\tilde{\F}_b\right)\chivec^{\text{A}}$:

$$\begin{align}
     \mathcal{D}^2\left(\Cmat
_a\chivec^{\text{A}}\right)=\mathcal D\left({\Cmat}_a\mat X_a\right)&={\Cmat}_a\left(\pder{\Rv}+\tilde{\F}_b\right) \mat X_a
\\
&={\Cmat}_a\left(\pder{\Rv}+\tilde{\F}_b\right) \left(\pder{\Rv}+\tilde{\F}_b\right)\chivec^{\text{A}}\\
&={\Cmat}_a\left(\pder{\Rv}+\tilde{\F}_b\right)^2\chivec^{\text{A}}
\end{align}$$

Hence:

$$\begin{align}
    \boxed{\left(\I\pder{\Rv}+\F\right)^2\left(\Cmat
_a\chivec^{\text{A}}\right)={\Cmat}_a\left(\pder{\Rv}+\tilde{\F}_b\right)^2\chivec^{\text{A}}}
\label{Eq:gauge_transfomred_dressed_splittdaiabic}
\end{align}$$

### Substitute back into the SE equation
Start from eq.\ref{Eq:Spit_diabatic_dressed_nuclear_SE}, insert $\chivec=\Cmat_a\chivec^{\text{A}}$ and use eq\ref{Eq:gauge_transfomred_dressed_splittdaiabic}:

$$\begin{align}
        \left[-\frac{1}{2\mu}\left(\I\pder{\Rv}+\F\right)^2+\V\right]\chivec&=E\chivec
       \\
       \left[-\frac{1}{2\mu}\left(\I\pder{\Rv}+\F\right)^2+\V\right]\Cmat_a\chivec^{\text{A}}&=E\Cmat_a\chivec^{\text{A}}\\
    -\frac{1}{2\mu}\left(\I\pder{\Rv}+\F\right)^2\Cmat_a\chivec^{\text{A}}+\V\Cmat_a\chivec^{\text{A}}&=E\Cmat_a\chivec^{\text{A}}\\
    -\frac{1}{2\mu}{\Cmat}_a\left(\pder{\Rv}+\tilde{\F}_b\right)^2\chivec^{\text{A}}+\V\Cmat_a\chivec^{\text{A}}&=E\Cmat_a\chivec^{\text{A}}
    \end{align}$$

Left multiply by $\Cinv_a$:

$$\begin{align}
    -\frac{1}{2\mu}\left(\pder{\Rv}+\tilde{\F}_b\right)^2\G_a+\Cinv_a\V\Cmat_a\chivec^{\text{A}}&=E\chivec^{\text{A}}
\end{align}$$

Define similarity-transformed quasi-diabatic potential matrix:

$$\begin{align}
    \W = \Cinv_a\V\Cmat_a
\end{align}$$

we obtain:

$$\begin{align}
   \boxed{\left[-\frac{1}{2\mu}\left(\I\pder{\Rv}+\tilde{\F}_b\right)^2+\W\right]\chivec^{\text{A}}=E\chivec^{\text{A}}}
\end{align}
$$
By expanding the square terms:

$$\begin{align}
    \left(\I\pder{\Rv}+\tilde{\F}_b\right)\left(\I\pder{\Rv}+\tilde{\F}_b\right)\G_a &=\left(\I\pder{\Rv}+\tilde{\F}_b\right)\left(\pdv{\G_a}{\Rv}+\tilde{\F}_b\G_a\right) \\
    &=\left(\pddv{\G_a}{\Rv}+\pdv{\tilde{\F}_b}{\Rv}\G_a+2\tilde{\F}_b\pdv{\G_a}{\Rv}+\tilde{\F}_b\cdot\tilde{\F}_b\G_a\right)\\
    &=\left(\pddv{}{\Rv}+\pdv{\tilde{\F}_b}{\Rv}+2\tilde{\F}_b\pder{\Rv}+\tilde{\F}_b^2\right)\G_a
\end{align}$$

Hence in the expanded channel form:
$$
\begin{align}
    -\frac{1}{2\mu}\pddv{\G_a}{\Rv} -\frac{1}{\mu}\tilde{\F}_b\pdv{\G_a}{\Rv}-\left(\pdv{\tilde{\F}_b}{\Rv}+\tilde{\F}_b^2\right)\G_a+\W \chivec^{\text{A}}=E\chivec^{\text{A}}
\end{align}$$
