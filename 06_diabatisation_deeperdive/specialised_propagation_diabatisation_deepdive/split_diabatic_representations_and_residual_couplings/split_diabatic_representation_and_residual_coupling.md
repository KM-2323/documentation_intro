## Residual coupling and the split-diabatic representation

The residual-coupling construction and the split-diabatic construction are two ways of writing the same gauge-transformation identity. Both begin from the fact that the electronic basis depends on the nuclear geometry. Because of this geometry dependence, the nuclear kinetic energy operator contains a derivative coupling, or connection, in electronic-state space.

Let the retained adiabatic electronic basis be written as the ordered row vector

$$
\begin{align}
\ket{\boldsymbol\psi}
=\bigl(
\ket{\psi_1},
\ldots,
\ket{\psi_N}
\bigr).
\end{align}
$$

A new electronic basis is defined by a nuclear-coordinate-dependent transformation matrix $\Cmat(\mat R)$,

$$
\begin{align}
\ket{\boldsymbol\varphi}
=\ket{\boldsymbol\psi}\Cmat,
\qquad
\Cmat_{ji}
=\braket{\psi_j}{\varphi_i}.
\label{eq:basis_transformation_residual}
\end{align}
$$

Here $\Cmat$ is an $N\times N$ matrix in the retained electronic-state space. If the transformation is unitary, then $\Cmat^{-1}=\Cmat^\dagger$.

The nonadiabatic derivative coupling is defined by

$$
\begin{align}
\F_{ji}
=\braket{\psi_j}{\nabla_{\mat R}\psi_i}.
\end{align}
$$

Thus $\F$ is not a scalar matrix in the usual sense. It is an $N\times N$ matrix whose entries are vectors in nuclear-coordinate space. Equivalently, for each coordinate $R_\alpha$, one may regard the derivative coupling as a coordinate-resolved matrix $\mat F_\alpha$ with elements

$$
\begin{align}
(\mat F_\alpha)_{ji}
=\braket{\psi_j}{\pdv{\psi_i}{R_\alpha}}.
\end{align}
$$

Under the basis transformation in Eq. $\eqref{eq:basis_transformation_residual}$, the derivative-coupling matrix transforms as

$$
\begin{align}
\F^{\varphi}
=\Cmat^{-1}\F\Cmat
+
\Cmat^{-1}\nabla_{\mat R}\Cmat.
\label{eq:connection_transformation_residual}
\end{align}
$$

For a unitary transformation this may also be written as

$$
\begin{align}
\F^{\varphi}
=\Cmat^\dagger\F\Cmat
+
\Cmat^\dagger\nabla_{\mat R}\Cmat.
\end{align}
$$`

This equation is the central identity. A strictly diabatic representation is the special basis for which the transformed derivative coupling vanishes,

$$
\begin{align}
\F^{\varphi}=0.
\end{align}
$$

Using Eq. $\eqref{eq:connection_transformation_residual}$, this condition gives the adiabatic-to-diabatic transformation equation

$$
\begin{align}
\nabla_{\mat R}\Cmat
=-\F\Cmat.
\label{eq:adt_equation_residual}
\end{align}
$$

Equation $\eqref{eq:adt_equation_residual}$ is an exact gauge-removal condition only when the retained electronic space is sufficiently complete for the relevant nuclear-coordinate region. In practical finite-state calculations, the retained electronic states may not be closed under differentiation. Couplings to omitted states can then appear through the curvature of the projected connection, and a globally strict diabatic basis need not exist.

The split-diabatic representation starts from a different practical question. Instead of asking whether all of $\F$ can be removed, it asks which part of $\F$ should be removed. One writes

$$
\begin{align}
\F=\F_a+\F_b,
\end{align}
$$

where $\F_a$ denotes the part chosen for removal and $\F_b$ denotes the part retained as a derivative coupling. The corresponding transformation $\Cmat_a$ is defined by

$$
\begin{align}
\nabla_{\mat R}\Cmat_a
=-\F_a\Cmat_a.
\label{eq:split_adt_equation}
\end{align}
$$

Substitution into the transformation law gives

$$
\begin{align}
\F^{\mathrm{res}}
&=\Cmat_a^{-1}\F\Cmat_a
+\Cmat_a^{-1}\nabla_{\mat R}\Cmat_a
\nonumber\\
&=\Cmat_a^{-1}(\F_a+\F_b)\Cmat_a
-\Cmat_a^{-1}\F_a\Cmat_a
\nonumber\\
&=\Cmat_a^{-1}\F_b\Cmat_a.
\label{eq:split_residual_coupling}
\end{align}
$$

Thus the residual coupling in the partially diabatic basis is the similarity-transformed part of the original derivative coupling that was not removed by the chosen ADT equation.

The same statement can be written more compactly by introducing the covariant derivative

$$
\begin{align}
\nabla_{\mat R}+\F.
\end{align}
$$

Under the electronic basis rotation $\Cmat$, this operator transforms as (for detailed derivations on how the gauge-covariant operator transforms [guage covariant operator transformation derivations](../../derivations/derivation_gauge_covariant_operator_transformation.md))

$$
\begin{align}
\nabla_{\mat R}+\F
\mapsto
\Cmat^{-1}
\left(
\nabla_{\mat R}+\F
\right)
\Cmat
=\nabla_{\mat R}
+\left(
\Cmat^{-1}\F\Cmat
+\Cmat^{-1}\nabla_{\mat R}\Cmat
\right).
\end{align}
$$

The residual coupling is therefore not a separate physical postulate. It is the connection that remains in the transformed electronic gauge.

---

## Residual-coupling derivation

The adiabatic-to-diabatic transformation may be viewed as a gauge transformation of the derivative-coupling matrix. A strict diabatic basis is obtained only if the transformed connection can be made to vanish. In a finite retained electronic subspace, or in a representation where certain long-range couplings are deliberately left untreated, this ideal condition is replaced by a quasi-diabatic one. The derivative coupling that remains after the chosen transformation is the residual coupling.

Let the diabatic potential matrix be

$$
\begin{align}
W_{ij}
=\mel{\varphi_i}{\hat H_{\mathrm{el}}}{\varphi_j}.
\end{align}
$$

A strictly diabatic electronic basis satisfies

$$
\begin{align}
\braket{\varphi_i}{\nabla_{\mat R}\varphi_j}
=0,
\qquad
\forall i,j.
\label{eq:strict_diabatic_condition}
\end{align}
$$

In this ideal representation, the first-order derivative coupling has been removed from the nuclear kinetic energy operator. The electronic coupling then appears through the generally non-diagonal potential matrix $\mat W$.

The transformation matrix between the adiabatic and diabatic electronic bases is

$$
\begin{align}
\Cmat_{ji}
=\braket{\psi_j}{\varphi_i},
\qquad
\ket{\boldsymbol\varphi}
=\ket{\boldsymbol\psi}\Cmat.
\end{align}
$$

Taking the nuclear gradient gives

$$
\begin{align}
\nabla_{\mat R}\Cmat_{ji}
=\braket{\nabla_{\mat R}\psi_j}{\varphi_i}
+\braket{\psi_j}{\nabla_{\mat R}\varphi_i}.
\label{eq:gradient_c_element}
\end{align}
$$

In a complete electronic Hilbert space, exact resolutions of the identity may be inserted on both terms. In a practical finite-state calculation, the corresponding insertion is a projected resolution over the retained electronic manifold. The distinction is important: the omitted part of the identity is one source of finite-subspace residual coupling.

Using the retained-state resolution gives

$$
\begin{align}
\nabla_{\mat R}\Cmat_{ji}
=\sum_k
\braket{\nabla_{\mat R}\psi_j}{\psi_k}
\braket{\psi_k}{\varphi_i}
+\sum_k
\braket{\psi_j}{\varphi_k}
\braket{\varphi_k}{\nabla_{\mat R}\varphi_i}.
\label{eq:c_gradient_projected}
\end{align}
$$

For a strictly diabatic basis, the second term vanishes by Eq. $\eqref{eq:strict_diabatic_condition}$. Therefore

$$
\begin{align}
\nabla_{\mat R}\Cmat_{ji}
=\sum_k
\braket{\nabla_{\mat R}\psi_j}{\psi_k}
\Cmat_{ki}.
\end{align}
$$

Using orthonormality of the adiabatic electronic states,

$$
\begin{align}
\braket{\nabla_{\mat R}\psi_j}{\psi_k}
=-\braket{\psi_j}{\nabla_{\mat R}\psi_k}
=-\F_{jk},
\end{align}
$$

and hence

$$
\begin{align}
\nabla_{\mat R}\Cmat_{ji}
=-\sum_k
\F_{jk}\Cmat_{ki}.
\end{align}
$$`

In matrix notation,

$$
\begin{align}
\boxed{
\nabla_{\mat R}\Cmat
=-\F\Cmat.
}
\label{eq:adt_equation_boxed}
\end{align}
$$

This is the ADT equation. If it can be solved consistently over the relevant region of nuclear configuration space, the derivative coupling is removed in the transformed basis. If it cannot be solved globally within the retained subspace, the resulting representation is only quasi-diabatic.

The transformed derivative coupling is obtained directly from the new basis,

$$
\begin{align}
(\F^{\mathrm{res}})_{ij}
=\braket{\varphi_i}{\nabla_{\mat R}\varphi_j}.
\end{align}
$$

After substituting the relation between quasi-diabatic basis and adiabatic basis ($\ket\varphivec = \ket\psivec \Cmat$, for detailed derivtaion see [residual coupling derivations](../../derivations/derivations_residual_coupling.md)), one obtain:

$$
\begin{align}
\boxed{
\F^{\mathrm{res}}
=\Cmat^\dagger\F\Cmat
+\Cmat^\dagger\nabla_{\mat R}\Cmat.
}
\label{eq:residual_coupling_unitary}
\end{align}
$$

For a unitary transformation, $\Cmat^\dagger=\Cmat^{-1}$, so the same expression is

$$
\begin{align}
\F^{\mathrm{res}}
=\Cmat^{-1}\F\Cmat
+\Cmat^{-1}\nabla_{\mat R}\Cmat.
\label{eq:residual_coupling_inverse}
\end{align}
$$

Now suppose that the chosen transformation removes only the component $\F_a$, with

$$
\begin{align}
\F=\F_a+\F_b,
\qquad
\nabla_{\mat R}\Cmat_a
=-\F_a\Cmat_a.
\end{align}
$$

Then Eq. $\eqref{eq:residual_coupling_inverse}$ gives

$$
\begin{align}
\F^{\mathrm{res}}
&=\Cmat_a^{-1}
(\F_a+\F_b)
\Cmat_a
+\Cmat_a^{-1}
(-\F_a\Cmat_a)
\nonumber\\
&=\boxed{
\Cmat_a^{-1}\F_b\Cmat_a.
}
\label{eq:residual_from_unremoved_part}
\end{align}
$$

The residual coupling is therefore the transformed form of the part of the original connection that was not removed. This statement is independent of whether $\F_b$ is retained because it is non-removable in a finite subspace, or because it is deliberately left in the kinetic operator for physical boundary-condition reasons.

If the ADT equation is solved only approximately, one may write

$$
\begin{align}
\nabla_{\mat R}\Cmat_a
=-\F_a\Cmat_a
+\boldsymbol{\epsilon}_{\Cmat}.
\end{align}
$$

The transformed coupling then becomes


$$
\begin{align}
\F^{\mathrm{res}} &=\Cmat_a^{-1}
(\F_a+\F_b)\Cmat_a+\Cmat_a^{-1}
(-\F_a\Cmat_a+\boldsymbol{\epsilon}_{\Cmat})\nonumber\\
&=\Cmat_a^{-1}\F_b\Cmat_a +\Cmat_a^{-1}\boldsymbol{\epsilon}_{\Cmat}
\end{align}
$$

The first term is the intended residual coupling associated with the chosen split. The second term is an additional residual arising from numerical error, interpolation error, or an imperfect model for the transformation.

---

## Split-diabatic operator derivation

The strict diabatic representation removes the derivative coupling from the kinetic energy operator and transfers the electronic coupling into the potential matrix. This is useful near avoided crossings and conical intersections, where the adiabatic derivative coupling may become large or singular. However, not every part of the derivative coupling is necessarily a good candidate for removal. A long-range derivative-coupling tail may lead to a rotation matrix that has no finite asymptotic limit. In that case, the transformed potentials may oscillate rather than approach physically meaningful dissociation or ionisation limits.

The split-diabatic representation avoids this problem by removing only a selected component of the coupling. The remaining component is retained explicitly in the kinetic energy operator.

For one nuclear coordinate $R$, write the adiabatic nuclear equation in the compact covariant form

$$
\begin{align}
\left[
-\frac{1}{2\mu}
\left(
\mathbb I\frac{\partial}{\partial R}
+
\F
\right)^2
+
\V
\right]
\boldsymbol{\chi}^{\mathrm{Adiab}}
=E\boldsymbol{\chi}^{\mathrm{Adiab}}.
\label{eq:adiabatic_covariant_1d}
\end{align}
$$

Here $\V$ is diagonal in the adiabatic basis and $\F$ is the first-order derivative-coupling matrix.

Important caveat: Eq. $\eqref{eq:adiabatic_covariant_1d}$ assumes that the retained electronic subspace is complete or effectively isolated, so that the scalar second-order coupling can be written in the covariant-square form. In a truncated electronic subspace with non-negligible omitted-state couplings, additional Born--Huang-type scalar corrections may be present.

Define the adiabatic covariant derivative

$$
\begin{align}
\mathcal D_A
\equiv
\mathbb I\frac{\partial}{\partial R}
+
\F.
\end{align}
$$

The split representation decomposes the derivative coupling as

$$
\begin{align}
\F=\F_a+\F_b,
\end{align}
$$

where $\F_a$ is the part to be removed and $\F_b$ is the part to be retained.

Choose $\Cmat_a$ to satisfy

$$
\begin{align}
\frac{\partial \Cmat_a}{\partial R}
=-\F_a\Cmat_a.
\label{eq:ca_split_adt}
\end{align}
$$

For the proof that $\Cmat_a$ remain unitary along the reaction path provided $\F_a$ is anti-Hermitian, see [ADT matrix unitary derivations](../../derivations/derivations_unitary_split_diabatic_transformation.md)



The split or quasi-diabatic electronic basis is

$$
\begin{align}
\ket{\boldsymbol\varphi}
=\ket{\boldsymbol\psi}\Cmat_a.
\end{align}
$$

The total molecular wavefunction is unchanged by the basis transformation,

$$
\begin{align}
\Psi
=\ket{\boldsymbol\psi}
\boldsymbol{\chi}^{\mathrm{Adiab}}
=\ket{\boldsymbol\varphi}
\boldsymbol{\chi}^{\mathrm{quasi}}
=\ket{\boldsymbol\psi}
\Cmat_a
\boldsymbol{\chi}^{\mathrm{quasi}}.
\end{align}
$$

Hence the nuclear amplitudes transform as

$$
\begin{align}
\boxed{
\boldsymbol{\chi}^{\mathrm{Adiab}}
=\Cmat_a
\boldsymbol{\chi}^{\mathrm{quasi}},
}
\qquad
\boxed{
\boldsymbol{\chi}^{\mathrm{quasi}}
=\Cmat_a^{-1}
\boldsymbol{\chi}^{\mathrm{Adiab}}.
}
\end{align}
$$

For step-by-step application of the covariant derivative/dressed kinetic operator to the transformed nuclear amplitudes, see [transformation of the covariant deirative using split diabatic representation](../../derivations/derivation_transformation_split_diab_covariant_derivative.md). 

By defining the transformed residual coupling

$$
\begin{align}
\widetilde{\F}_b
=\Cmat_a^{-1}\F_b\Cmat_a.
\label{eq:tilde_fb_definition}
\end{align}
$$

and applying the basis transformation to the original adiabatic equation, we obtain the split-diabatic nuclear equations:

$$
\begin{align}
\boxed{
\left[
-\frac{1}{2\mu}
\left(
\frac{\partial}{\partial R}
+
\widetilde{\F}_b
\right)^2
+
\W
\right]
\boldsymbol{\chi}^{\mathrm{quasi}}
=E\boldsymbol{\chi}^{\mathrm{quasi}},
}
\label{eq:split_diabatic_nuclear_equation}
\end{align}
$$

where the transformed potential is

$$
\begin{align}
\boxed{
\W
=\Cmat_a^{-1}\V\Cmat_a.
}
\label{eq:split_diabatic_potential}
\end{align}
$$

This is the split-diabatic nuclear equation. The localized or otherwise removable coupling has been transferred into the potential matrix $\W$, while the retained component appears as the residual kinetic coupling $\widetilde{\F}_b$.

Expanding the square in one dimension gives

$$
\begin{align}
\left(
\frac{\partial}{\partial R}
+
\widetilde{\F}_b
\right)^2
\boldsymbol{\chi}^{\mathrm{quasi}}
&=\frac{\partial^2\boldsymbol{\chi}^{\mathrm{quasi}}}{\partial R^2}
+
2\widetilde{\F}_b
\frac{\partial\boldsymbol{\chi}^{\mathrm{quasi}}}{\partial R}
+\left(
\frac{\partial\widetilde{\F}_b}{\partial R}
+\widetilde{\F}_b^2
\right)
\boldsymbol{\chi}^{\mathrm{quasi}}.
\end{align}
$$

Thus Eq. $\eqref{eq:split_diabatic_nuclear_equation}$ may also be written as

$$
\begin{align}
-\frac{1}{2\mu}
\frac{\partial^2\boldsymbol{\chi}^{\mathrm{quasi}}}{\partial R^2}
-\frac{1}{\mu}
\widetilde{\F}_b
\frac{\partial\boldsymbol{\chi}^{\mathrm{quasi}}}{\partial R}
-\frac{1}{2\mu}
\left(
\frac{\partial\widetilde{\F}_b}{\partial R}
+\widetilde{\F}_b^2
\right)
\boldsymbol{\chi}^{\mathrm{quasi}}
+\W
\boldsymbol{\chi}^{\mathrm{quasi}}
=E\boldsymbol{\chi}^{\mathrm{quasi}}.
\end{align}
$$

Matrix order is important in this expression. The derivative acts on both the nuclear amplitudes and the coordinate-dependent residual-coupling matrix.

---

## Why the split representation is useful

The split representation is a controlled mixed representation. It does not require the derivative coupling to vanish everywhere. Instead, it asks which part of the derivative coupling improves the potential representation when removed, and which part is better retained in the kinetic operator.

This distinction matters because the quality of a diabatic representation is not determined only by local smoothness near an avoided crossing or conical intersection. It also depends on the large-$R$ behaviour of the transformed potentials.

In a two-state, one-dimensional example, the strict diabatic transformation may be written in terms of a mixing angle. Up to a sign convention,

$$
\begin{align}
\theta(R)
=\int_{R_0}^{R}
F_{12}(R')\,dR'.
\label{eq:two_state_angle_integral}
\end{align}
$$

Convention warning: the sign of $\theta$ depends on the definition of the two-state rotation matrix and on the phase convention chosen for the adiabatic states. The convergence argument below is independent of this sign.

The strict diabatic potentials contain trigonometric functions of this angle. Schematically,

$$
\begin{align}
W_{11}
&\sim
V_1\cos^2\theta
+
V_2\sin^2\theta,
\nonumber\\
W_{22}
&\sim
V_1\sin^2\theta
+
V_2\cos^2\theta.
\end{align}
$$

Thus the asymptotic behaviour of the strict diabatic potentials depends on whether $\theta(R)$ approaches a finite limit.

Suppose that the long-range derivative coupling behaves as

$$
\begin{align}
F_{12}(R)
\sim
\frac{a}{R^\alpha}.
\end{align}
$$

Then the accumulated angle behaves as

$$
\begin{align}
\theta(R)
\sim
\begin{cases}
\theta_\infty, & \alpha>1,\\[4pt]
a\log R, & \alpha=1,\\[4pt]
\dfrac{a}{1-\alpha}R^{1-\alpha}, & \alpha<1.
\end{cases}
\end{align}
$$

If the coupling decays as $1/R$ or more slowly, the rotation angle has no finite asymptotic limit. Since the transformed potentials depend on $\sin\theta$ and $\cos\theta$, the strict diabatic potentials do not settle into stable asymptotes. Instead, they oscillate, including logarithmic oscillations in the $1/R$ case.

This gives the practical motivation for the split representation. One removes the short-range, sharply peaked, or otherwise localized part of the coupling,

$$
\begin{align}
\F=\F_a+\F_b,
\qquad
\nabla_{\mat R}\Cmat_a
=-\F_a\Cmat_a,
\end{align}
$$

and leaves the long-range tail in the kinetic operator. The transformed potential matrix

$$
\begin{align}
\W
=\Cmat_a^{-1}\V\Cmat_a
\end{align}
$$

then has a better chance of approaching physically meaningful asymptotic limits, while the retained tail appears explicitly as

$$
\begin{align}
\widetilde{\F}_b
=\Cmat_a^{-1}\F_b\Cmat_a.
\end{align}
$$

The key point is that the split representation is not an unsuccessful diabatisation. It is a deliberate choice not to diabatize the part of the coupling whose removal would damage the asymptotic behaviour of the transformed potentials.

---

## Two meanings of non-removable coupling

The phrase *non-removable coupling* is used in two related but distinct ways. Keeping these meanings separate avoids a common source of confusion.

### Non-removable coupling from excluded states

In a finite electronic subspace, the retained adiabatic states do not span the full electronic Hilbert space. Differentiating a retained state with respect to nuclear geometry may generate components outside the retained subspace. These omitted components appear as couplings to the complementary $Q$-space.

The consequence is that the projected derivative-coupling matrix need not be a pure gauge. In other words, it may not be possible to write

$$
\begin{align}
\F
=-\nabla_{\mat R}\Cmat\,
\Cmat^{-1}
\end{align}
$$

globally within the retained subspace. Equivalently, the projected connection may have non-zero curvature.

A useful summary is

$$
\begin{align}
\text{finite retained subspace}
\quad\Longrightarrow\quad
\text{projected connection may have curvature}
\quad\Longrightarrow\quad
\text{strict global diabatisation may fail.}
\end{align}
$$

If the coupling between retained and omitted states is small over the dynamically sampled region of nuclear configuration space, this residual effect is also small. In that case, a quasi-diabatic representation can still be a controlled approximation.

### Non-removable coupling from boundary conditions

The second meaning arises in split-diabatic constructions. A long-range derivative coupling may be removable in a formal one-dimensional sense, but still undesirable to remove. If its integral does not converge, the resulting transformation matrix does not approach a constant limit at large $R$. The transformed potentials may then oscillate and fail to reproduce the correct dissociation or ionisation limits.

This is a different kind of non-removability. It is not caused by missing electronic states. It is caused by the physical boundary condition imposed on the transformed potentials:

$$
\begin{align}
\text{long-range non-integrable tail}
\quad\Longrightarrow\quad
\Cmat(R)
\text{ has no asymptotic limit}
\quad\Longrightarrow\quad
\W(R)
\text{ oscillates.}
\end{align}
$$

### Reconciled interpretation

The symbol $\F_b$ can therefore represent different things in different contexts.

In the finite-subspace discussion, $\F_b$ denotes the part of the projected connection that cannot be consistently removed within the chosen retained manifold. In the split-diabatic asymptotic discussion, $\F_b$ denotes the part of the derivative coupling that is deliberately retained because removing it would impose poor boundary conditions on the transformed potentials.

These effects may coexist in a real calculation, but they should not be conflated. The common mathematical structure is the transformed-connection formula

$$
\begin{align}
\F^{\mathrm{new}}
=\Cmat^{-1}\F\Cmat
+
\Cmat^{-1}\nabla_{\mat R}\Cmat.
\end{align}
$$

If the chosen transformation removes only $\F_a$, then

$$
\begin{align}
\F^{\mathrm{new}}
=\Cmat_a^{-1}\F_b\Cmat_a.
\end{align}
$$

Thus residual coupling always means coupling that remains in the transformed basis. The reason it remains may be mathematical, as in finite-subspace curvature, or practical, as in the long-range split-diabatic construction.

---

## Conclusion

The residual coupling is the nonadiabatic derivative coupling that remains after a chosen adiabatic-to-diabatic transformation has been applied. Under a nuclear-coordinate-dependent electronic basis transformation $\Cmat$, the derivative-coupling matrix transforms as

$$
\begin{align}
\F
\mapsto
\Cmat^{-1}\F\Cmat
+
\Cmat^{-1}\nabla_{\mat R}\Cmat.
\end{align}
$$

A strictly diabatic representation corresponds to the special choice of $\Cmat$ for which this transformed connection vanishes. In practical applications, this ideal limit is constrained in two ways. First, the retained electronic manifold may be finite and not fully closed under nuclear differentiation. Couplings to omitted states can then produce curvature in the projected connection, so that a globally strict diabatic basis cannot generally be constructed within the selected subspace. Second, some long-range derivative-coupling tails may be deliberately left untransformed because their removal would prevent the transformed potentials from approaching physically meaningful asymptotic limits.

The split-diabatic representation therefore removes only the localized or otherwise removable component $\F_a$, while retaining the remaining component $\F_b$ as an explicit kinetic coupling. The residual coupling in the split basis is

$$
\begin{align}
\F^{\mathrm{res}}
=\Cmat_a^{-1}\F_b\Cmat_a.
\end{align}
$$

The residual-coupling derivation and the split-diabatic operator derivation are therefore not separate constructions. They are two forms of the same gauge-transformation statement: the derivative coupling that remains in the transformed basis is precisely the part of the original connection that was not removed by the chosen ADT equation.