## Symmetry of conical intersections

This page builds on the two-state conical-intersection model introduced in [Introduction to Conical Intersections: The Two-State Model](03_conical_intersections.md) and derived more fully in [two state model](../derivations/derivations_two_state_model.md) and  [Conical Intersection- intermediate](../intermediates/int02_conical_intersections.md)

The purpose of this page is to explain how molecular symmetry controls the terms that appear in a two-state diabatic model, and how this leads naturally to the distinction between symmetry-required, symmetry-allowed, and accidental conical intersections.

The central idea is simple:

$$
\text{symmetry tells us which matrix elements are forced to be zero.}
$$

For a two-state diabatic potential matrix,

$$
\begin{align}
\mat W(\mat q)
=\begin{pmatrix}
W_{11}(\mat q) & W_{12}(\mat q)\\
W_{12}(\mat q) & W_{22}(\mat q)
\end{pmatrix},
\end{align}
$$

define:

$$
\begin{align}
\Sigma(\mat q)
&=\frac{1}{2}
\left[
W_{11}(\mat q)+W_{22}(\mat q)
\right],
\\
\Delta(\mat q)
&=W_{22}(\mat q)-W_{11}(\mat q).
\end{align}
$$

Such that the diabatic potential matrix can be recast as:

$$
\begin{align}
\mat W
=\Sigma \mat I
+
\begin{pmatrix}
-\Delta/2 & W_{12}\\
W_{12} & \Delta/2
\end{pmatrix}.
\label{eq:two_state_pauli_form_beginner}
\end{align}
$$

leading to the adiabatic energies:

$$
\begin{align}
V_{\pm}(\mat q)
=\Sigma(\mat q)
\pm
\frac{1}{2}
\sqrt{
\Delta^2(\mat q)
+
4W_{12}^2(\mat q)
}.
\label{eq:two_state_adiabatic_energies_beginner}
\end{align}
$$

a conical intersection requires

$$
\begin{align}
\Delta(\mat q)=0,
\qquad
W_{12}(\mat q)=0,
\end{align}
$$

Thus, one nuclear direction must tune the diabatic energy gap, and another independent nuclear direction must tune the off-diagonal coupling. Symmetry tells us which normal modes can appear in each of those two quantities.

In the local two-state energy coordinate notation used in the previous page,

$$
\begin{align}
x(\mat q)=\Delta(\mat q),
\qquad
y(\mat q)=2W_{12}(\mat q).
\end{align}
$$

Then

$$
\begin{align}
V_+-V_-
=\sqrt{x^2+y^2}.
\end{align}
$$

The conical intersection is the point

$$
\begin{align}
x=0,
\qquad
y=0.
\end{align}
$$

Symmetry does not change this local topology. What symmetry changes is the physical meaning of the two branching coordinates $x$ and $y$.

---

### Local two-state expansion and notation (quick recap)

Consider a real diabatic electronic basis

$$
\left\{
\ket{\varphi_1},
\ket{\varphi_2}
\right\}.
$$

Let $\mat q_0$ be a reference geometry, and define the displacement vector

$$
\begin{align}
\mat Q=\mat q-\mat q_0.
\end{align}
$$

Near $\mat q_0$, expand the diabatic matrix elements to first order:

$$
\begin{align}
W_{11}(\mat Q)
&=
W_{11}^{(0)}
+
\sum_\alpha
\kappa_{1\alpha}Q_\alpha
+
O(Q^2),
\\
W_{22}(\mat Q)
&=
W_{22}^{(0)}
+
\sum_\alpha
\kappa_{2\alpha}Q_\alpha
+
O(Q^2),
\\
W_{12}(\mat Q)
&=
W_{12}^{(0)}
+
\sum_\alpha
\lambda_{\alpha}Q_\alpha
+
O(Q^2).
\label{eq:taylor_expand}
\end{align}
$$

The scalar coefficients (short derivations on how these expression are obtained see [diabatic linear terms](../derivations/derivations_diabatic_linearterms.md) )are

$$
\begin{align}
\kappa_{i\alpha}
=\mel
{\varphi_i
}{\pdv{H_{\mathrm{el}}}{Q_\alpha}}
{\varphi_i},
\end{align}
$$

and

$$
\begin{align}
\lambda_{\alpha}
={\varphi_1}
{\pdv{H_{\mathrm{el}}}{Q_\alpha}
}{\varphi_2}.
\end{align}
$$

The $\kappa_{i\alpha}$ coefficients describe how each diabatic state changes with the nuclear coordinate $Q_\alpha$. The $\lambda_\alpha$ coefficients describe how the same coordinate mixes the two diabatic states.

In vector notation,

$$
\begin{align}
\boldsymbol{\kappa}_i
=\nabla_{\mat q}W_{ii}\big|_{\mat q=\mat q_0},
\qquad
i=1,2,
\end{align}
$$

and

$$
\begin{align}
\boldsymbol{\lambda}
=\nabla_{\mat q}W_{12}\big|_{\mat q=\mat q_0}.
\end{align}
$$

The gap-gradient vector used in the two-state model is

$$
\begin{align}
\boldsymbol{\kappa}
=\boldsymbol{\kappa}_2-\boldsymbol{\kappa}_1.
\end{align}
$$

Therefore,

$$
\begin{align}
\Delta(\mat Q)
=W_{22}(\mat Q)-W_{11}(\mat Q)
=\Delta_0
+\boldsymbol{\kappa}\cdot\mat Q
+
O(Q^2),
\end{align}
$$

where

$$
\begin{align}
\Delta_0
=W_{22}^{(0)}-W_{11}^{(0)}.
\end{align}
$$

Similarly,

$$
\begin{align}
W_{12}(\mat Q)
=W_{12}^{(0)}
+\boldsymbol{\lambda}\cdot\mat Q
+
O(Q^2).
\end{align}
$$

At a point on the conical-intersection seam,

$$
\begin{align}
\Delta_0=0,
\qquad
W_{12}^{(0)}=0.
\end{align}
$$

Then the first-order model becomes

$$
\begin{align}
\Delta(\mat Q)
&=\boldsymbol{\kappa}\cdot\mat Q
+
O(Q^2),
\\
W_{12}(\mat Q)
&=
\boldsymbol{\lambda}\cdot\mat Q
+
O(Q^2).
\end{align}
$$

The local diabatic matrix can be written in the same notation as the two-state model:

$$
\begin{align}
\mat W(\mat Q)
=\left[
E+\boldsymbol{\sigma}\cdot\mat Q
\right]\mat I
+
\begin{pmatrix}
-\boldsymbol{\kappa}\cdot\mat Q/2
&
\boldsymbol{\lambda}\cdot\mat Q
\\
\boldsymbol{\lambda}\cdot\mat Q
&
\boldsymbol{\kappa}\cdot\mat Q/2
\end{pmatrix}
+
O(Q^2),
\end{align}
$$

where

$$
\begin{align}
\boldsymbol{\sigma}
=\frac{1}{2}
\left(
\boldsymbol{\kappa}_1+\boldsymbol{\kappa}_2
\right).
\end{align}
$$

The vector $\boldsymbol{\sigma}$ controls the common slope of the two surfaces. It can tilt the cone, but it does not change the conditions for degeneracy.

The two branching coordinates are

$$
\begin{align}
x(\mat Q)
=\boldsymbol{\kappa}\cdot\mat Q
=\Delta(\mat Q),
\end{align}
$$

and

$$
\begin{align}
y(\mat Q)
=2\boldsymbol{\lambda}\cdot\mat Q
=2W_{12}(\mat Q).
\end{align}
$$

Then

$$
\begin{align}
V_\pm(\mat Q)
=\Sigma(\mat Q)
\pm
\frac{1}{2}
\sqrt{
x^2(\mat Q)+y^2(\mat Q)
},
\end{align}
$$

with

$$
\begin{align}
\Sigma(\mat q)
=\frac{1}{2}
\left[
W_{11}(\mat q)+W_{22}(\mat q)
\right].
\end{align}
$$

Which are the notation used in the [Introduction to conical intersection](04_conical_intersections.md) and are served as a quick reminder

---

### The group-theory selection rule

The central group-theory rule is:

> A matrix element can be nonzero only if the direct product of the irreducible representations of all factors in the integrand contains the totally symmetric representation.

Let the two electronic states transform as

$$
\begin{align}
\Gamma_1,
\qquad
\Gamma_2.
\end{align}
$$

Let the normal coordinate $Q_\alpha$ transform as

$$
\begin{align}
\Gamma_\alpha.
\end{align}
$$

Let the totally symmetric irreducible representation be denoted

$$
\begin{align}
\Gamma_{\mathrm{tot}}.
\end{align}
$$

For example,

$$
\Gamma_{\mathrm{tot}}=A_1
$$

in $C_{2v}$, while

$$
\Gamma_{\mathrm{tot}}=A_g
$$

in $D_{2h}$.

For most real molecular point groups used in this context, the bra and ket irreps may be treated as the same real irreps. More generally, one should use the dual or complex-conjugate irrep for the bra. In the real case, the selection rule for a matrix element

$$
\begin{align}
\mel{\varphi_i}
{\hat O
}{\varphi_j}
\end{align}
$$

is

$$
\begin{align}
\Gamma_i
\otimes
\Gamma(\hat O)
\otimes
\Gamma_j
\supset
\Gamma_{\mathrm{tot}}.
\end{align}
$$

If this condition is not satisfied, the matrix element is exactly zero, provided the symmetry is exact.

If this condition is satisfied, the matrix element is symmetry-allowed. This does not mean it must be large. It only means that symmetry does not force it to vanish.

Thus,

$$
\begin{align}
\text{symmetry-forbidden}
&\Rightarrow
\text{zero},
\\
\text{symmetry-allowed}
&\nRightarrow
\text{large}.
\end{align}
$$

---

#### Zeroth-order electronic coupling

At the reference geometry, the zeroth-order diabatic coupling is

$$
\begin{align}
W_{12}^{(0)}
=\mel
{\varphi_1}
{H_{\mathrm{el}}
}{\varphi_2}.
\end{align}
$$

The electronic Hamiltonian is totally symmetric:

$$
\begin{align}
\Gamma(H_{\mathrm{el}})
=\Gamma_{\mathrm{tot}}.
\end{align}
$$

Therefore,

$$
\begin{align}
W_{12}^{(0)}
\neq 0
\end{align}
$$

only if

$$
\begin{align}
\Gamma_1
\otimes
\Gamma_2
\supset
\Gamma_{\mathrm{tot}}.
\end{align}
$$

For one-dimensional irreps, this normally means

$$
\begin{align}
\Gamma_1=\Gamma_2.
\end{align}
$$

Thus, if the two states have different symmetries at the reference geometry,

$$
\begin{align}
\Gamma_1\neq \Gamma_2,
\end{align}
$$

then

$$
\begin{align}
W_{12}^{(0)}=0
\end{align}
$$

by symmetry.

This is the basic reason why states of different symmetry can cross in a symmetry-preserving subspace.

---

#### Linear diagonal terms: the $\kappa_{i\alpha}$ coefficients

The diagonal linear coefficient is

$$
\begin{align}
\kappa_{i\alpha}
=\mel
{\varphi_i
}{\pdv{H_{\mathrm{el}}}{Q_\alpha}}
{\varphi_i}
\end{align}
$$

The derivative operator

$$
\begin{align}
\pdv{H_{\mathrm{el}}}{Q_\alpha}
\end{align}
$$

transforms like the coordinate $Q_\alpha$. Therefore,

$$
\begin{align}
\Gamma\left(
\pdv{H_{\mathrm{el}}}{Q_\alpha}
\right)
=\Gamma_\alpha.
\end{align}
$$

The selection rule is

$$
\begin{align}
\Gamma_i
\otimes
\Gamma_\alpha
\otimes
\Gamma_i
\supset
\Gamma_{\mathrm{tot}}.
\end{align}
$$

For an isolated nondegenerate electronic state in an Abelian point group,

$$
\begin{align}
\Gamma_i\otimes\Gamma_i
=\Gamma_{\mathrm{tot}}.
\end{align}
$$

Therefore the condition reduces to

$$
\begin{align}
\Gamma_\alpha
=\Gamma_{\mathrm{tot}}.
\end{align}
$$

So, for ordinary nondegenerate states,

$$
\boxed{
\kappa_{i\alpha}\neq 0
\quad
\text{only for totally symmetric modes.}
}
$$

These modes are often called tuning modes because they change the diagonal energies and therefore tune the energy gap

$$
\begin{align}
\Delta
=W_{22}-W_{11}.
\end{align}
$$

A useful warning is needed here. The statement above is for isolated nondegenerate electronic states. For a degenerate electronic irrep, such as an $E$ state, the electronic subspace is multidimensional. Then nontotally symmetric modes contained in the appropriate symmetrized product of the electronic irrep can split the degeneracy. This is the Jahn--Teller case discussed below.

---

#### Linear off-diagonal terms: the $\lambda_\alpha$ coefficients

The linear diabatic coupling coefficient is

$$
\begin{align}
\lambda_{\alpha}
=\mel{
\varphi_1}
{\pdv{H_{\mathrm{el}}}{Q_\alpha}}
{\varphi_2}.
\end{align}
$$

The selection rule is

$$
\begin{align}
\Gamma_1
\otimes
\Gamma_\alpha
\otimes
\Gamma_2
\supset
\Gamma_{\mathrm{tot}}.
\end{align}
$$

For one-dimensional irreps in Abelian point groups, this can usually be written as

$$
\begin{align}
\Gamma_\alpha
=\Gamma_1\otimes\Gamma_2.
\end{align}
$$

Therefore,

$$
\boxed{
\lambda_\alpha\neq 0
\quad
\text{only for modes whose symmetry matches the product of the two electronic-state symmetries.}
}
$$

These modes are coupling modes because they create the off-diagonal coupling

$$
\begin{align}
W_{12}
=\boldsymbol{\lambda}\cdot\mat Q
+
O(Q^2).
\end{align}
$$

Thus the basic symmetry interpretation of the two-state model is:

$$
\boxed{
\boldsymbol{\kappa}
\text{ tunes the energy gap.}
}
$$

$$
\boxed{
\boldsymbol{\lambda}
\text{ creates the interstate coupling.}
}
$$

$$
\boxed{
\text{A two-state conical intersection requires both directions (tuning and coupling).}
}
$$

---

#### Summary of allowed linear terms

For two nondegenerate electronic states, the linear vibronic-coupling model has the form

$$
\begin{align}
W_{11}
&=W_{11}^{(0)}
+
\sum_{\alpha}
\kappa_{1\alpha}Q_\alpha
+
O(Q^2),
\\
W_{22}
&=
W_{22}^{(0)}
+
\sum_{\alpha}
\kappa_{2\alpha}Q_\alpha
+
O(Q^2),
\\
W_{12}
&=
W_{12}^{(0)}
+
\sum_{\alpha}
\lambda_{\alpha}Q_\alpha
+
O(Q^2).
\end{align}
$$

The symmetry rules are:

$$
\begin{array}{c|c|c}
\text{term} & \text{matrix element} & \text{nonzero only if}\\
\hline
W_{12}^{(0)}
&
\left\langle
\varphi_1
\middle|
H_{\mathrm{el}}
\middle|
\varphi_2
\right\rangle
&
\Gamma_1\otimes\Gamma_2
\supset
\Gamma_{\mathrm{tot}}
\\[6pt]
\kappa_{i\alpha}
&
\left\langle
\varphi_i
\left|
\pdv{H_{\mathrm{el}}}{Q_\alpha}
\right|
\varphi_i
\right\rangle
&
\Gamma_i\otimes\Gamma_\alpha\otimes\Gamma_i
\supset
\Gamma_{\mathrm{tot}}
\\[6pt]
\lambda_\alpha
&
\left\langle
\varphi_1
\left|
\pdv{H_{\mathrm{el}}}{Q_\alpha}
\right|
\varphi_2
\right\rangle
&
\Gamma_1\otimes\Gamma_\alpha\otimes\Gamma_2
\supset
\Gamma_{\mathrm{tot}}
\end{array}
$$

For ordinary nondegenerate states in Abelian point groups, the tuning mode must span the totally symmetric irrep.

$$
\begin{align}
\kappa_{i\alpha}\neq 0
\quad
\Rightarrow
\quad
\Gamma_\alpha=\Gamma_{\mathrm{tot}},
\end{align}
$$

where we used the property that the direct product of any irreducible representation $\Gamma_i$ with itslef contains the totally symmetric representation

$$
\Gamma_i \otimes \Gamma_i \supset \Gamma_{\text{tot}}
$$

while the coupling mode much span the same irrep as the product of the irrep of state 1 and 2

$$
\begin{align}
\lambda_{\alpha}\neq 0
\quad
\Rightarrow
\quad
\Gamma_\alpha=\Gamma_1\otimes\Gamma_2.
\end{align}
$$


---

### Symmetry of the branching-plane vectors

At a conical intersection, the two first-order branching directions are

$$
\begin{align}
\boldsymbol{\kappa}
=\nabla_{\mat q}
\left(
W_{22}-W_{11}
\right)_{\mat q=\mat q_0},
\end{align}
$$

and

$$
\begin{align}
\boldsymbol{\lambda}
=\nabla_{\mat q}W_{12}\big|_{\mat q=\mat q_0}.
\end{align}
$$

For two nondegenerate states of different symmetry,

$$
\begin{align}
\Gamma_1\neq\Gamma_2,
\end{align}
$$

the diagonal gradients are allowed only along totally symmetric modes (to lift the degeneracy). Therefore

$$
\begin{align}
\Gamma(\boldsymbol{\kappa})
=\Gamma_{\mathrm{tot}}.
\end{align}
$$

The coupling vector has components only along modes satisfying (to list degeneracy)

$$
\begin{align}
\Gamma_\alpha
=\Gamma_1\otimes\Gamma_2.
\end{align}
$$

Therefore

$$
\begin{align}
\Gamma(\boldsymbol{\lambda})
=\Gamma_1\otimes\Gamma_2.
\end{align}
$$

If

$$
\begin{align}
\Gamma_1\otimes\Gamma_2
\neq
\Gamma_{\mathrm{tot}},
\end{align}
$$

then the tuning and coupling vectors belong to different symmetry blocks of nuclear-coordinate space. They are therefore automatically independent.

This is one of the main reasons symmetry is so powerful in conical-intersection theory. It tells us that the two conditions

$$
\begin{align}
\Delta=0,
\qquad
W_{12}=0
\end{align}
$$

can be satisfied by two different kinds of nuclear motion.

---

#### Higher-order terms

The same selection-rule logic applies to higher-order vibronic terms.

For example, a quadratic diagonal or off-diagonal coefficient of the form

$$
\begin{align}
\left\langle
\varphi_i
\left|
\pddm{H_{\mathrm{el}}}{Q_\alpha}{Q_\beta}
\right|
\varphi_j
\right\rangle
\end{align}
$$

can be nonzero only if

$$
\begin{align}
\Gamma_i
\otimes
\Gamma_\alpha
\otimes
\Gamma_\beta
\otimes
\Gamma_j
\supset
\Gamma_{\mathrm{tot}}.
\end{align}
$$

Thus, if a linear term is symmetry-forbidden, the lowest allowed coupling may be quadratic or of even higher order.

This is important in cases such as Renner--Teller systems and in higher-order Jahn--Teller models, where the leading splitting may not have the same simple linear-cone form as the ordinary two-state conical intersection.

---

## Classification of conical intersections by symmetry

There are three useful categories:

1. symmetry-required conical intersections,
2. symmetry-allowed conical intersections,
3. accidental conical intersections.

The local two-state topology is the same in all ordinary cases. In the branching plane one can still write

$$
\begin{align}
x=\Delta,
\qquad
y=2W_{12},
\end{align}
$$

and

$$
\begin{align}
V_\pm
=\Sigma
\pm
\frac{1}{2}
\sqrt{x^2+y^2}.
\end{align}
$$

The classification describes why the degeneracy exists.

---

### Symmetry-required conical intersections

A symmetry-required conical intersection occurs when the electronic degeneracy is forced by the point group. This happens when the electronic state belongs to a multidimensional irreducible representation, such as an $E$ or $T$ representation.

The classic example is the Jahn--Teller effect. For a nonlinear molecule in a degenerate electronic state, the Jahn--Teller theorem states that the molecule can lower its energy by distorting along suitable nontotally symmetric vibrational coordinates. The high-symmetry geometry is therefore unstable, and the degeneracy is lifted by nuclear distortion.

The simplest linear model is the $E\otimes e$ (E denotes the degenerate electronic irrep and e denotes the vibrational mode that lift the degeneracy/our branching cooridnates)Jahn--Teller model. Let $Q_x$ and $Q_y$ be the two components of a doubly degenerate vibrational mode. Then a standard diabatic Hamiltonian is

$$
\begin{align}
\mat W(Q_x,Q_y)
=\frac{\omega}{2}
\left(
Q_x^2+Q_y^2
\right)
\mat I
+
\lambda
\begin{pmatrix}
Q_x & Q_y\\
Q_y & -Q_x
\end{pmatrix}.
\end{align}
$$

Introduce polar coordinates

$$
\begin{align}
Q_x=\rho\cos\phi,
\qquad
Q_y=\rho\sin\phi.
\end{align}
$$

such that:

$$
\rho = \sqrt{Q_x^2+Q_y^2}
$$

The adiabatic energies are

$$
\begin{align}
V_\pm(\rho)
=\frac{\omega}{2}\rho^2
\pm
\lambda\rho.
\end{align}
$$

The degeneracy is at

$$
\begin{align}
\rho=0.\rightarrow Q_x = 0, Q_y=0
\end{align}
$$

This is the familiar Mexican-hat potential. The degeneracy at the high-symmetry geometry is not accidental. It is required by the multidimensional electronic irrep.

However, a word of caution. Even though the degeneracy is at $\rho=0$, the minimum of the lower Jahn-Teller surface is not at $\rho=0$. The lower branch has energy:

$$
\begin{align}
V_-(\rho)
=\frac{\omega}{2}\rho^2
-\lambda\rho.
\end{align}
$$

Minimising gives:

$$
\pdv{V_-}{\rho} =\omega\rho-\lambda=0
$$

so

$$
\rho_{\min} = \frac{\lambda}{\omega}
$$

assuming, $\lambda, \omega$ > 0. Thus the molecule lowers its energy by distorting away from the high-symmetry point. That is the Jahn–Teller instability.

In other words:

> $$\rho =0 \quad\text{is the degenerate high-symmetry point}$$ 
$$\rho = \frac{\lambda}{\omega} \quad\text{is the minimum of the lower distorted surface.}$$


Further, the symmetry does more than say which terms are zero. It can also impose relationships between nonzero coefficients. In the common $E\otimes e$ linear Jahn--Teller model, the diagonal splitting and off-diagonal coupling are related by the symmetry of the degenerate electronic and vibrational representations.

In the example above, if we match it to out two-state notation:

$$
\begin{align}
\mat W
=\Sigma \mat I
+
\begin{pmatrix}
-\Delta/2 & W_{12}\\
W_{12} & \Delta/2
\end{pmatrix}.
\end{align}
$$

it can be identify, up to sign convention,

$$
\begin{align}
\Delta = -2\lambda Q_x,\qquad W_{12} = \lambda Q_y
\end{align}
$$

So in this particular electronic basis, $Q_x$ acts like the gap-changing (tunning) coordinate and $Q_y$ acts like the coupling cooridnate. Again, just to emphasise, both $Q_x$ and $Q_y$ transform as components of the same $e$ vibrational irrep. Unlike the symmetry-allowed case, that we will see below, where the tunning coordinate must transform as the $A_1$ irrep and the coupling coordinate transform as the non-totally symmetric coupling coordiante. 

So for the Jahn-Teller model:

> The two component of the $e$ mode form the Jahn-Teller branching plane

Summarising the main idea on symmetry-required intersections, 

$$
\boxed{
\text{the degeneracy exists because the electronic irrep is multidimensional.}
}
$$

$$
\boxed{
\text{the active vibrational modes are dictated by products of that degenerate irrep.}
}
$$

$$
\boxed{
\text{the conical intersection is usually centered at the high-symmetry geometry.}
}
$$

A useful caveat is the Renner--Teller case in linear molecules. There, a degenerate electronic state is associated with the cylindrical symmetry of the linear molecule. Bending can lift the degeneracy, but the leading splitting may be second order, and the surfaces may meet tangentially rather than as an ordinary first-order cone. Thus it is related to the same symmetry logic, but it is not always an ordinary linear two-state CI in the same sense as the $E\otimes e$ Jahn--Teller model. This also ties in later discussion on using topological spin to characterise conical intersections and its effect on the topological matrix D (a closed countour integral surrounding the CI, see [text](../../06_diabatisation_deeperdive/topological_spin.md))

---

### Symmetry-allowed conical intersections

A symmetry-allowed conical intersection occurs when two states of different symmetry are allowed to cross in a symmetry-preserving subspace.

Suppose the two electronic states have different irreps:

$$
\begin{align}
\Gamma_1\neq\Gamma_2.
\end{align}
$$

Then the zeroth-order coupling is symmetry-forbidden:

$$
\begin{align}
W_{12}^{(0)}
=\left\langle
\varphi_1
\middle|
H_{\mathrm{el}}
\middle|
\varphi_2
\right\rangle
=0.
\end{align}
$$

Along a totally symmetric distortion, the molecule remains in the same point group, and the two states remain in different irreps. Therefore

$$
\begin{align}
W_{12}=0
\end{align}
$$

throughout the symmetry-preserving subspace. Thus in a symmetry preserving subspace, $W_{12} = 0$, the adiabatic gap is:

$$V_+-V_-=|\Delta|$$

However, the diagonal energies can still change along totally symmetric modes. Therefore the gap can be tuned:

$$
\begin{align}
\Delta(Q_t)
=\Delta_0+\kappa_t Q_t+\cdots.
\end{align}
$$

If some totally symmetric coordinate $Q_t$ brings the two energies together,

$$
\begin{align}
\Delta(Q_t^\ast)=0,
\end{align}
$$

then the two states cross in the symmetry-preserving subspace.

However, to see the conical-intersection topology, one must also include a symmetry-breaking coupling coordinate $Q_c$. This coordinate must satisfy

$$
\begin{align}
\Gamma_1
\otimes
\Gamma_c
\otimes
\Gamma_2
\supset
\Gamma_{\mathrm{tot}}.
\end{align}
$$

Equivalently, for many Abelian point groups,

$$
\begin{align}
\Gamma_c
=\Gamma_1\otimes\Gamma_2.
\end{align}
$$

Then (where instead of going over all linear coupling terms only the symmetry breaking coordiantes in the taylor expansion in \eqref{eq:taylor_expand} is included)

$$
\begin{align}
W_{12}(Q_c)
=\lambda_c Q_c+\cdots.
\end{align}
$$

Near the crossing, the local diabatic matrix has the form

$$
\begin{align}
\mat W
=\Sigma \mat I
+
\begin{pmatrix}
-\kappa_t(Q_t-Q_t^\ast)/2
&
\lambda_c Q_c
\\
\lambda_c Q_c
&
\kappa_t(Q_t-Q_t^\ast)/2
\end{pmatrix}
+
\cdots.
\end{align}
$$

In above, we used the linear approximation so that:

$$
\begin{align}
0=\Delta_0 +\kappa_t Q_t^*\rightarrow \Delta_0 = -\kappa_tQ_t^*
\end{align}
$$

Which convert the energy gap term (to first order):

$$
\begin{align}
\Delta(Q_t)
=\Delta_0+\kappa_t Q_t+\cdots \approx -\kappa_tQ_t^* + \kappa_t Q_t=\kappa_t(Q_t-Q_t^*)
\end{align}
$$

Leading to an adiabatic energy gap of:

$$
V_+ -V_- = \sqrt{\kappa_t^2(Q_t-Q_t^\ast)^2+4\lambda_c^2 Q_c^2}
$$

The two CI conditions are

$$
\begin{align}
Q_t=Q_t^\ast,
\qquad
Q_c=0.
\end{align}
$$

This is a conical intersection in the $(Q_t,Q_c)$ plane.

The important point is:

$$
\boxed{
\text{different-symmetry states can cross in the symmetry-preserving subspace.}
}
$$

But also:

$$
\boxed{
\text{the conical topology appears only when the symmetry-breaking coupling coordinate is included.}
}
$$

A one-dimensional scan along $Q_t$ alone may show a crossing, but it does not by itself reveal the full branching plane.

---

### Accidental conical intersections

An accidental conical intersection is not forced by symmetry.

This does not mean it is rare or unimportant. It means only that group theory does not require the degeneracy.

In a low-symmetry molecule, especially in $C_1$, all modes are totally symmetric. Then symmetry does not distinguish tuning modes from coupling modes. Both

$$
\begin{align}
\Delta(\mat q)
\end{align}
$$

and

$$
\begin{align}
W_{12}(\mat q)
\end{align}
$$

may depend on many of the same nuclear coordinates.

For same-symmetry states,

$$
\begin{align}
\Gamma_1=\Gamma_2,
\end{align}
$$

the off-diagonal coupling is not symmetry-forbidden. Therefore, along a one-dimensional scan, the usual result is an avoided crossing rather than a true crossing.

But in two or more nuclear dimensions, it is possible to satisfy the two scalar conditions

$$
\begin{align}
\Delta(\mat q)=0,
\qquad
W_{12}(\mat q)=0
\end{align}
$$

simultaneously.

For example, in two local coordinates $Q_a,Q_b$, suppose (Taylor expand to first order)

$$
\begin{align}
\Delta(Q_a,Q_b)
&=
\Delta_0+aQ_a+bQ_b,
\\
W_{12}(Q_a,Q_b)
&=
W_{12}^{(0)}+cQ_a+dQ_b.
\end{align}
$$

with:


$$
\begin{align}
a=\pdv{\Delta}{Q_a},\qquad b=\pdv{\Delta}{Q_b}\nonumber\\
c=\pdv{\\W_{12}}{Q_a},\qquad d=\pdv{W_{12}}{Q_b}\nonumber\\
\end{align}
$$
A conical intersection exists if the two linear equations

$$
\begin{align}
\Delta(Q_a,Q_b)=0,
\qquad
W_{12}(Q_a,Q_b)=0
\end{align}
$$

which in matrix form:

$$
\begin{align}
\begin{pmatrix}
a&b\\ c&d
\end{pmatrix}\begin{pmatrix}
Q_a\\ Q_b 
\end{pmatrix} = -\begin{pmatrix}
\lambda_0\\ W_{12}^{(0)}
\end{pmatrix}
\end{align}
$$

have a solution provided their gradients are independent 

$$
\begin{align}
\begin{vmatrix}
a & b\\
c & d
\end{vmatrix}
\neq 0.
\end{align}
$$

where the non-zero determinant guarantees that this matrix is invertible, implying its rows are linearly independent. Since the first row corresponds to the gradient of the energy-gap ($\nabla \Delta = (a, b)$) and the second row corresponds to the gradient of the coupling component ($\nabla W_{12} = (c, d)$), this directly implies that the two gradient vectors themselves are linearly independent.

Thus, for accidental CIs,

$$
\boxed{
\text{neither condition is forced by symmetry.}
}
$$

$$
\boxed{
\text{the CI exists because the nuclear coordinates happen to satisfy both conditions.}
}
$$

$$
\boxed{
\text{the branching directions are independent by geometry, not by symmetry.}
}
$$

This is the generic situation in low-symmetry polyatomic molecules.

---

### Comparing the three categories

The three categories can be summarized as follows:

$$
\begin{array}{c|c|c|c}
\text{type}
&
\text{what symmetry does}
&
\text{typical condition}
&
\text{example}
\\
\hline
\text{symmetry-required}
&
\text{forces an electronic degeneracy}
&
\text{multidimensional electronic irrep}
&
E\otimes e \text{ Jahn--Teller}
\\[4pt]
\text{symmetry-allowed}
&
\text{forbids } W_{12} \text{ in a symmetry-preserving subspace}
&
\Gamma_1\neq\Gamma_2
&
\text{different-symmetry state crossing}
\\[4pt]
\text{accidental}
&
\text{does not force the degeneracy}
&
\Delta=0,\;W_{12}=0 \text{ by tuning}
&
\text{same-symmetry or low-symmetry CI}
\end{array}
$$

All three can reduce locally to the same two-state conical-intersection form:

$$
\begin{align}
V_\pm
=\Sigma
\pm
\frac{1}{2}
\sqrt{
\Delta^2+4W_{12}^2
}.
\end{align}
$$

The classification tells us where $\Delta$ and $W_{12}$ come from.

---

### Example: pyrazine

Pyrazine is a useful example because the symmetry assignment is clean.

In $D_{2h}$, the two low-lying singlet states commonly used in the two-state vibronic-coupling model are

$$
\begin{align}
S_1(B_{3u}),
\qquad
S_2(B_{2u}).
\end{align}
$$

The off-diagonal linear coupling coefficient

$$
\begin{align}
\lambda_\alpha
=\left\langle
S_1(B_{3u})
\left|
\pdv{H_{\mathrm{el}}}{Q_\alpha}
\right|
S_2(B_{2u})
\right\rangle
\end{align}
$$

is nonzero only if

$$
\begin{align}
B_{3u}
\otimes
\Gamma_\alpha
\otimes
B_{2u}
\supset
A_g.
\end{align}
$$

Equivalently,

$$
\begin{align}
\Gamma_\alpha
=B_{3u}
\otimes
B_{2u}
=B_{1g}.
\end{align}
$$

Therefore only $B_{1g}$ modes can linearly couple these two states.

The well-known coupling mode is often written as

$$
\begin{align}
\nu_{10a}.
\end{align}
$$

This mode has $B_{1g}$ symmetry.

The diagonal terms are different. Since each state is nondegenerate, the diagonal linear coefficients

$$
\begin{align}
\kappa_{1\alpha},
\qquad
\kappa_{2\alpha}
\end{align}
$$

are nonzero only for totally symmetric modes:

$$
\begin{align}
\Gamma_\alpha=A_g.
\end{align}
$$

Thus, in pyrazine,

$$
\boxed{
A_g \text{ modes tune the } S_2-S_1 \text{ energy gap.}
}
$$

and

$$
\boxed{
B_{1g} \text{ modes couple } S_1(B_{3u}) \text{ and } S_2(B_{2u}).
}
$$

A minimal pyrazine model therefore has the structure

$$
\begin{align}
\mat W(\mat Q)
=\mat W^{(0)}
+
\sum_{\alpha\in A_g}
\begin{pmatrix}
\kappa_{1\alpha} & 0\\
0 & \kappa_{2\alpha}
\end{pmatrix}
Q_\alpha
+
\sum_{\beta\in B_{1g}}
\begin{pmatrix}
0 & \lambda_\beta\\
\lambda_\beta & 0
\end{pmatrix}
Q_\beta
+
O(Q^2).
\end{align}
$$

In many reduced pyrazine models, $A_g$ modes such as $Q_1$, $Q_{6a}$, and $Q_{9a}$ act as tuning modes, while $Q_{10a}$ is the $B_{1g}$ coupling mode.

This example makes the branching-plane interpretation very concrete:

$$
\begin{align}
\boldsymbol{\kappa}
\quad
\text{lives in the } A_g \text{ subspace},
\end{align}
$$

while

$$
\begin{align}
\boldsymbol{\lambda}
\quad
\text{lives in the } B_{1g} \text{ subspace}.
\end{align}
$$

Because these subspaces are symmetry-distinct, the two branching directions are independent.

---

## Relation to the NACV and geometric phase

The adiabatic nonadiabatic coupling vector is

$$
\begin{align}
\F_{12}
=\braket{\psi_1}{\nabla_{\mat q}\psi_2}.
\end{align}
$$

Using the Hellmann--Feynman relation, its components are related to derivative matrix elements:

$$
\begin{align}
F_{12,\alpha}
\sim
\frac{
\left\langle
\psi_1
\left|
\pdv{H_{\mathrm{el}}}{q_\alpha}
\right|
\psi_2
\right\rangle
}{
V_2-V_1
}.
\end{align}
$$

The numerator obeys the same symmetry selection rule as the linear vibronic coupling coefficient. The denominator becomes small near a degeneracy. Therefore the NACV becomes large near a conical intersection and is singular at the exact degeneracy.

In the local two-state LVC model,

$$
\begin{align}
x=\Delta,
\qquad
y=2W_{12}.
\end{align}
$$

The mixing angle convention used in the two-state derivation is

$$
\begin{align}
\theta(\mat q)
=-\frac{1}{2}
\operatorname{atan2}
\left(
2W_{12}(\mat q),
\Delta(\mat q)
\right)
=-\frac{1}{2}
\operatorname{atan2}
\left(
y,
x
\right).
\end{align}
$$

With the convention used there,

$$
\begin{align}
\F_{12}
=-\nabla_{\mat q}\theta.
\end{align}
$$

In the energy-like branching coordinates,

$$
\begin{align}
\F_{12}
=\frac{1}{2}
\frac{
x\nabla_{\mat q}y-y\nabla_{\mat q}x
}{
x^2+y^2
}.
\end{align}
$$

If $x$ and $y$ themselves are used as local coordinates in the branching plane, then

$$
\begin{align}
\F_{12}
=\frac{1}{2(x^2+y^2)}
\begin{pmatrix}
-y\\
x
\end{pmatrix}.
\end{align}
$$

This has the form of a vortex centered at the conical intersection.

For a positively oriented loop in the $(x,y)$ plane, the convention used in the two-state derivation gives

$$
\begin{align}
\oint
\F_{12}\cdot d\mat q
=+\pi.
\end{align}
$$

Changing the electronic phase convention or reversing the loop orientation changes the sign. The convention-independent statement is that the magnitude of the accumulated rotation is $\pi$.

Equivalently, real adiabatic electronic eigenvectors change sign after one closed circuit around a conical intersection.

Symmetry tells us which physical nuclear modes form the $x$ and $y$ directions. Topology tells us what happens when we loop around the origin in that branching plane.

---

## Sloped and peaked conical intersections

Symmetry determines which terms are allowed, but the numerical values of the allowed terms determine the detailed shape of the cone.

In the direct Taylor-expansion form,

$$
\begin{align}
\mat W(\mat Q)
=\begin{pmatrix}
E&0\\
0&E
\end{pmatrix}
+
\begin{pmatrix}
\boldsymbol{\kappa}_1\cdot\mat Q
&
\boldsymbol{\lambda}\cdot\mat Q
\\
\boldsymbol{\lambda}\cdot\mat Q
&
\boldsymbol{\kappa}_2\cdot\mat Q
\end{pmatrix}
+
O(Q^2).
\end{align}
$$

The gap-gradient and common-slope vectors are

$$
\begin{align}
\boldsymbol{\kappa}
=\boldsymbol{\kappa}_2-\boldsymbol{\kappa}_1,
\end{align}
$$

and

$$
\begin{align}
\boldsymbol{\sigma}
=\frac{1}{2}
\left(
\boldsymbol{\kappa}_1+\boldsymbol{\kappa}_2
\right).
\end{align}
$$

The vector $\boldsymbol{\kappa}$ controls the splitting of the two surfaces. The vector $\boldsymbol{\sigma}$ controls the tilt of the average surface $\Sigma$.

In a simple two-dimensional branching-plane model, let $q_\kappa$ be the tuning coordinate and $q_\lambda$ the coupling coordinate. Then

$$
\begin{align}
\Delta
=a q_\kappa,
\qquad
W_{12}
=b q_\lambda.
\end{align}
$$

If $\Sigma$ has a strong slope along $q_\kappa$, the cone is tilted. In the simple direct-slope picture, if the two diabatic slopes along the tuning coordinate have the same sign, the intersection is sloped. If they have opposite signs, the intersection is peaked.

Symbolically,

$$
\begin{align}
\kappa_{1t},\kappa_{2t}
\text{ same sign}
\quad
\Rightarrow
\quad
\text{sloped CI},
\end{align}
$$

whereas

$$
\begin{align}
\kappa_{1t},\kappa_{2t}
\text{ opposite signs}
\quad
\Rightarrow
\quad
\text{peaked CI}.
\end{align}
$$

This classification is about surface topography, not about the symmetry origin of the CI. A symmetry-required, symmetry-allowed, or accidental CI can be sloped or peaked depending on the numerical values of the slopes.

---

## Symmetry and diabatic representations

The adiabatic representation is natural for electronic-structure calculations, but it is awkward at a conical intersection because the NACV becomes singular.

A diabatic or quasi-diabatic representation moves the singularity out of the derivative couplings ($\F \texty{ and } \Gmat$) and into smooth potential-like couplings. In such a representation, the nuclear dynamics is governed by a smooth diabatic potential matrix $\mat W$.

This is why the symmetry selection rules are especially useful in diabatic models:

- they identify which diagonal terms belong in $W_{11}$ and $W_{22}$;
- they identify which coupling terms belong in $W_{12}$;
- they tell us which entries of $\mat W$ must be zero;
- they help assign the physical meaning of the branching-plane vectors.

For a finite set of adiabatic states, an exact global diabatic representation is generally not available for a nonlinear polyatomic molecule. In practice one works with local or quasi-diabatic states. The adiabatic-to-diabatic transformation is often written in terms of a transformation matrix $\Cmat$, with a condition of the form

$$
\begin{align}
\nabla_{\mat q}\Cmat
+\mat F\Cmat
=0,
\end{align}
$$

where $\mat F$ is the matrix of nonadiabatic coupling vectors. The resulting diabatic potential matrix has the form

$$
\begin{align}
\mat W
=\Cmat^\dagger
\mat V
\Cmat,
\end{align}
$$

where $\mat V$ is the diagonal adiabatic potential matrix.

The usefulness of this transformation depends on whether the chosen electronic-state subspace is sufficiently isolated from the rest of the electronic spectrum. In more formal ADT treatments, this is related to curl or integrability conditions for the nonadiabatic coupling matrix.

For the present symmetry discussion, the practical point is simpler:

$$
\boxed{
\text{a good diabatic model should respect all symmetry-forced zeros.}
}
$$

If a symmetry-forbidden term appears in a fitted diabatic model, the model has either lost the assumed symmetry or mixed conventions in an inconsistent way.

---

## Practical workflow for constructing a symmetry-based two-state model

### Step 1: Choose the reference geometry

The reference geometry may be a Franck--Condon geometry, a high-symmetry geometry, or a point on a conical-intersection seam.

Define

$$
\begin{align}
\mat Q=\mat q-\mat q_0.
\end{align}
$$

Identify the point group at $\mat q_0$.

---

### Step 2: Assign electronic-state irreps

Assign

$$
\begin{align}
\Gamma_1,
\qquad
\Gamma_2
\end{align}
$$

for the two electronic states.

This must be done at the reference geometry and within the chosen point group.

---

### Step 3: Assign normal-mode irreps

For each normal coordinate $Q_\alpha$, assign

$$
\begin{align}
\Gamma_\alpha.
\end{align}
$$

---

### Step 4: Determine allowed diagonal linear terms

Check

$$
\begin{align}
\Gamma_i
\otimes
\Gamma_\alpha
\otimes
\Gamma_i
\supset
\Gamma_{\mathrm{tot}}.
\end{align}
$$

For nondegenerate states in Abelian point groups, this usually means

$$
\begin{align}
\Gamma_\alpha=\Gamma_{\mathrm{tot}}.
\end{align}
$$

These modes contribute to

$$
\begin{align}
W_{11},
\qquad
W_{22},
\qquad
\Delta=W_{22}-W_{11}.
\end{align}
$$

They are tuning modes.

---

### Step 5: Determine allowed off-diagonal linear terms

Check

$$
\begin{align}
\Gamma_1
\otimes
\Gamma_\alpha
\otimes
\Gamma_2
\supset
\Gamma_{\mathrm{tot}}.
\end{align}
$$

For one-dimensional irreps in Abelian point groups, this often reduces to

$$
\begin{align}
\Gamma_\alpha
=\Gamma_1\otimes\Gamma_2.
\end{align}
$$

These modes contribute to

$$
\begin{align}
W_{12}.
\end{align}
$$

They are coupling modes.

---

### Step 6: Build the local model

The first-order model is

$$
\begin{align}
\mat W(\mat Q)
=\left[
E+\boldsymbol{\sigma}\cdot\mat Q
\right]\mat I
+
\begin{pmatrix}
-\boldsymbol{\kappa}\cdot\mat Q/2
&
\boldsymbol{\lambda}\cdot\mat Q
\\
\boldsymbol{\lambda}\cdot\mat Q
&
\boldsymbol{\kappa}\cdot\mat Q/2
\end{pmatrix}
+
O(Q^2).
\end{align}
$$

The gap is

$$
\begin{align}
\Delta(\mat Q)
=\boldsymbol{\kappa}\cdot\mat Q.
\end{align}
$$

The coupling is

$$
\begin{align}
W_{12}(\mat Q)
=\boldsymbol{\lambda}\cdot\mat Q.
\end{align}
$$

The conical-intersection conditions are

$$
\begin{align}
\boldsymbol{\kappa}\cdot\mat Q=0,
\qquad
\boldsymbol{\lambda}\cdot\mat Q=0.
\end{align}
$$

---

### Step 7: Classify the CI

Ask the following questions.

First, is the electronic degeneracy forced by a multidimensional irrep?

If yes, the CI is symmetry-required.

Second, are the two states of different symmetry, so that $W_{12}$ is forbidden in a symmetry-preserving subspace?

If yes, the CI is symmetry-allowed, provided the diagonal gap can be tuned to zero and the proper symmetry-breaking coupling coordinate is included.

Third, is there no useful symmetry forcing either condition?

If yes, the CI is accidental. It exists if the two equations

$$
\begin{align}
\Delta=0,
\qquad
W_{12}=0
\end{align}
$$

can be solved simultaneously with independent gradients.

---

### Common mistakes

#### Mistake 1: Thinking that different-symmetry crossings are automatically full CIs

A crossing of different-symmetry states in a symmetry-preserving one-dimensional scan is not the full branching-plane picture.

It becomes a conical intersection only when the symmetry-breaking coupling coordinate is included.

---

#### Mistake 2: Thinking that allowed means large

A symmetry-allowed term may still be numerically small.

Symmetry says whether a term is forced to be zero. It does not determine the magnitude of an allowed coefficient.

---

#### Mistake 3: Thinking that accidental means rare

Accidental means not symmetry-forced.

In low-symmetry polyatomic molecules, accidental conical intersections are common because there are many nuclear coordinates available to satisfy

$$
\begin{align}
\Delta=0,
\qquad
W_{12}=0.
\end{align}
$$

---

#### Mistake 4: Thinking that the noncrossing rule forbids conical intersections

The noncrossing rule is mainly a statement about one-dimensional scans of states with the same symmetry.

In a multidimensional nuclear-coordinate space, two scalar conditions can be satisfied simultaneously. That is why conical intersections are generic in polyatomic molecules.

---

#### Mistake 5: Forgetting that degenerate electronic irreps are special

For nondegenerate states, diagonal linear terms are usually only totally symmetric.

For degenerate electronic irreps, nontotally symmetric modes can split the degenerate subspace. This is the Jahn--Teller mechanism.

---

## One-paragraph summary

Symmetry controls conical intersections by determining which diabatic Hamiltonian matrix elements are forced to vanish. In the two-state model, the diagonal difference $\Delta=W_{22}-W_{11}$ is controlled by tuning modes, while the off-diagonal coupling $W_{12}$ is controlled by coupling modes. For nondegenerate states, diagonal linear terms are usually allowed only for totally symmetric modes, whereas off-diagonal linear terms are allowed only when $\Gamma_1\otimes\Gamma_\alpha\otimes\Gamma_2$ contains the totally symmetric irrep. A two-state CI requires both $\Delta=0$ and $W_{12}=0$, so the branching plane is formed by the gap-gradient vector $\boldsymbol{\kappa}$ and the coupling vector $\boldsymbol{\lambda}$. Symmetry-required CIs arise from multidimensional electronic irreps, as in Jahn--Teller systems. Symmetry-allowed CIs arise when different-symmetry states cross in a symmetry-preserving subspace and become conical when the correct symmetry-breaking coordinate is included. Accidental CIs are not forced by symmetry but occur when independent nuclear coordinates tune both $\Delta$ and $W_{12}$ to zero. In all cases, the local two-state topology is the same cone described by $x=\Delta$ and $y=2W_{12}$.

---

## Source notes for this page

The local two-state branching-plane notation follows the notation used in the two-state model pages of this knowledge base.

For the classification of conical intersections, the symmetry selection rule, and the distinction between symmetry-required, symmetry-allowed, and accidental cases, see Worth and Cederbaum, *Beyond Born--Oppenheimer: Molecular Dynamics Through a Conical Intersection*.

For the vibronic-coupling Hamiltonian, the $\kappa$ and $\lambda$ notation, and the role of tuning and coupling modes, see Köppel, Domcke, and Cederbaum, *Multimode Molecular Dynamics Beyond the Born--Oppenheimer Approximation*.

For the ADT, topological matrix, line-integral, and quantization discussion, see Baer, *Introduction to the Theory of Electronic Non-Adiabatic Coupling Terms in Molecular Systems* and related ADT/topological-effect papers.

For direct-dynamics diabatisation and the use of smooth diabatic potential matrices in DD-vMCG, see Richings and Worth, *A Practical Diabatisation Scheme for Use with the Direct-Dynamics Variational Multi-Configuration Gaussian Method*.

For the pyrazine LVC example with $A_g$ tuning modes and the $B_{1g}$ coupling mode, see the vMCG/DD-vMCG and pyrazine model discussions in the uploaded Worth/Richings materials.
