# Diabatic representation

Before introducing conical intersections and the topology associated with them, it is useful to clarify what is meant by changing from an adiabatic to a diabatic representation.

The essential point is that a change of electronic basis does not change the total molecular wavefunction. It only changes how the same wavefunction is partitioned between electronic basis functions and nuclear expansion coefficients. Recall the Born-Huang expansion,

$$
\begin{align}
\Psi(\mat R,\mat r,t)
&=
\sum_{i=1}^{N_{\mathrm s}}
\psi_i(\mat r;\mat R)\,
\chi_i^{(a)}(\mat R,t) \nonumber\\
&=
\psivec\,\chivec^{(a)}.
\label{eq:adiabatic_born_huang_expansion}
\end{align}
$$



Here $N_{\mathrm s}$ is the number of electronic states included in the representation. By convention, $\psivec$ is a $1\times N_{\mathrm s}$ row vector of electronic basis functions, while $\chivec^{(a)}$ is an $N_{\mathrm s}\times 1$ column vector of nuclear wavefunctions. Their product is therefore a scalar wavefunction in the full electron-nuclear coordinate space.

Now introduce a coordinate-dependent unitary transformation $\Cmat(\mat R)$ in the electronic state space. We define the diabatic electronic basis $\varphivec$ by

$$
\begin{align}
\varphivec
=\psivec\Cmat,
\label{eq:adiabatic_to_diabatic_basis_transform}
\end{align}
$$

where

$$
\begin{align}
\Cinv\Cmat
=\Cmat\Cinv=\mat I_{N_{\mathrm s}},
\qquad
\Cinv=\Cmat^\dagger.
\label{eq:unitary_identity_C}
\end{align}
$$

The total wavefunction is unchanged under this transformation:

$$
\begin{align}
\Psi
&=\psivec\,\chivec^{(a)}
=\psivec\Cmat\Cinv\chivec^{(a)} \nonumber\\
&=\varphivec\,\chivec^{(d)}.
\label{eq:wavefunction_invariant_under_C}
\end{align}
$$

Therefore the diabatic nuclear wavefunction is

$$
\begin{align}
\chivec^{(d)}
=\Cinv\chivec^{(a)},
\qquad
\chivec^{(a)}
=\Cmat\chivec^{(d)}.
\label{eq:diabatic_nuclear_coefficients}
\end{align}
$$

This is only a change of representation. If the electronic basis and the nuclear coefficient vector are transformed consistently, the total wavefunction $\Psi$ and all physical observables remain unchanged.




In the adiabatic representation, the nuclear TDSE may be written in the dressed kinetic energy form as

$$
\begin{align}
i\hbar\pdv{\chivec^{(a)}}{t}
=\left[
-\frac{1}{2}
\left(
\nabla_{\mat q}\mat I_{N_{\mathrm s}}
+\F\right)^2
+\V
\right]
\chivec^{(a)}.
\label{eq:adiabatic_tdse_dressed_for_diabatic}
\end{align}
$$

Here $\mat q$ denotes mass-scaled nuclear coordinates, $\V$ is an $N_{\mathrm s}\times N_{\mathrm s}$ diagonal matrix of adiabatic potential energy surfaces, and $\F$ is a matrix-valued vector of first-derivative nonadiabatic couplings. For each nuclear coordinate $q_\alpha$, the component $\F_\alpha$ is an $N_{\mathrm s}\times N_{\mathrm s}$ matrix with elements

$$
\begin{align}
F_{ji,\alpha}
=\mel{\psi_j}{\pdv{}{q_\alpha}}{\psi_i}.
\label{eq:nacv_component_definition_diabatic}
\end{align}
$$


Using $\chivec^{(a)}=\Cmat\chivec^{(d)}$ and left multiplying by $\Cinv$, Eq. \eqref{eq:adiabatic_tdse_dressed_for_diabatic} becomes

$$
\begin{align}
i\hbar
\Cinv
\pdv{}{\!t}
\left(
\Cmat\chivec^{(d)}
\right)
=\Cinv
\left[
-\frac{1}{2}
\left(
\nabla_{\mat q}\mat I_{N_{\mathrm s}}
+
\F
\right)^2
+
\V
\right]
\Cmat
\chivec^{(d)}.
\label{eq:pre_diabatic_tdse}
\end{align}
$$

Since $\Cmat$ depends on nuclear coordinates but has no explicit time dependence, the time derivative acts only on $\chivec^{(d)}$. The derivative couplings disappear from the kinetic energy if $\Cmat$ satisfies the adiabatic-to-diabatic transformation condition

$$
\begin{align}
\nabla_{\mat q}\Cmat
+\F\Cmat
=0.
\label{eq:ADT_transform_differential}
\end{align}
$$

then:
$$
\Cinv\left[
-\frac{1}{2}\nabla_{\mat q}^{2}\mat I
-\mat\Lambda
\right]
\Cmat=-\frac{1}{2}\nabla_{\mat q}^2
$$


such that the Hamiltonian can be written as (derivations presented in [diabatisation](../derivations/derivations_diabatisation.md)):


$$
\begin{align}
i\hbar\pdv{\chivec^{(d)}}{t}
=&\Big[
\W-\frac{1}{2}\nabla_{\mat q}^2\Big]\chivec^{(d)}
\end{align}
$$

where the diabatic potential $\W$ is defined as:

$$
\begin{align}
\W=\Cinv\V\Cmat
\end{align}
$$


The important consequence is that the coupling has changed form. In the adiabatic representation, $\V$ is diagonal and the electronic states are coupled through derivative operators in the nuclear kinetic energy. In the diabatic representation, the kinetic energy is diagonal in electronic-state space, while $\W$ is generally a full Hermitian matrix:

$$
\begin{align}
\W
=\begin{pmatrix}
W_{11} & W_{12} & \cdots \\
W_{21} & W_{22} & \cdots \\
\vdots & \vdots & \ddots
\end{pmatrix}.
\label{eq:generic_diabatic_potential_matrix}
\end{align}
$$

The diagonal elements $W_{ii}$ are diabatic potential energy surfaces, while the off-diagonal elements $W_{ij}$ are potential couplings between diabatic states.

### Comments

A diabatic basis is therefore not, in general, an eigenbasis of the electronic Hamiltonian. In the adiabatic representation,

$$
\begin{align}
\mel{\psi_i}{\hat H_{\mathrm{el}}}{\psi_j}
=V_i\delta_{ij},
\end{align}
$$

whereas in the diabatic representation,

$$
\begin{align}
\mel{\varphi_i}{\hat H_{\mathrm{el}}}{\varphi_j}
=W_{ij},
\end{align}
$$

which is not diagonal in general. The price paid for removing the derivative couplings is the appearance of off-diagonal potential couplings.

Strictly speaking, Eq. \eqref{eq:ADT_transform_differential} can be satisfied globally only when the chosen electronic space has the required integrability properties. In a complete Hilbert space, or in an isolated finite subspace that behaves as a complete subspace, this condition can be treated exactly. In practical calculations, however, only a finite number of electronic states is retained, so one usually constructs a quasi-diabatic representation: the derivative couplings are not always removed exactly, but are made sufficiently small and smooth that the dominant coupling is represented by the off-diagonal elements of $\W$.

This distinction is important. Diabatisation does not remove nonadiabatic physics; it moves the coupling from the nuclear kinetic energy operator into the potential energy matrix. This is especially useful near degeneracies, where the adiabatic derivative couplings may become singular, while the corresponding diabatic potential couplings can remain smooth.

This also prepares the way for the next topic. Around a conical intersection, the adiabatic electronic states can acquire a sign change after encircling the degeneracy. The transformation $\Cmat$ therefore carries not only local information about derivative couplings, but also global topological information. This is why the existence of a smooth local diabatic representation does not automatically guarantee a globally single-valued diabatic representation.

Read next:
[Conical intersections](04_conical_intersections.md)