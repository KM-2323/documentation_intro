# Two-state loop and sign change

This worked example shows how Baer's topological matrix reduces to the familiar two-state sign change around a conical intersection.

The aim is to connect three objects that have appeared in earlier notes:

1. the closed-contour ADT/topological matrix,
2. the two-state antisymmetric coupling generator,
3. the two-state LVC conical-intersection model.

The key result is that, for a loop encircling one two-state conical intersection, the topological matrix in the active two-state subspace is

$$
\begin{align}
\mat D(\Gamma)=-\mat I_2.
\end{align}
$$

Thus both real adiabatic eigenvectors change sign after one circuit. This is the two-state Longuet--Higgins sign-change result written in Baer's topological-matrix language.

---

## 1. Topological matrix for a closed contour

Let $\Gamma$ be a closed contour in nuclear configuration space,

$$
\begin{align}
\mat s(0)=\mat s(\beta)=\mat s_0.
\end{align}
$$

The ADT equation is

$$
\begin{align}
\nabla\Cmat+\F\Cmat=0,
\end{align}
$$

where $\F$ is the matrix-valued nonadiabatic coupling vector. Along a closed contour, the transported ADT matrix may return to the starting geometry with a nontrivial matrix factor. Baer denotes this closed-loop factor by the topological matrix,

$$
\begin{align}
\mat D(\Gamma)
=\mathcal P
\exp
\left[
-\oint_{\Gamma}
d\mat s\cdot \F(\mat s)
\right].
\label{eq:two_state_D_def}
\end{align}
$$

Here $\mathcal P$ denotes path ordering. If the ADT matrix is transported once around the loop, then

$$
\begin{align}
\Cmat(\beta)
=\mat D(\Gamma)\Cmat(0).
\label{eq:two_state_C_after_loop}
\end{align}
$$

The matrix $\mat D(\Gamma)$ measures the holonomy of the retained electronic subspace. In a real two-state problem, a nontrivial holonomy appears as a sign change of the adiabatic electronic states.

---

## 2. Why $\mat D(\Gamma)$ must be diagonal with entries $\pm 1$

The diabatic potential matrix is

$$
\begin{align}
\W
=\Cinv \V \Cmat,
\end{align}
$$

where $\V$ is the diagonal adiabatic potential matrix.

At the end of a closed loop, the nuclear geometry is the same as at the beginning. Therefore the adiabatic energy matrix is the same,

$$
\begin{align}
\V(\beta)=\V(0).
\end{align}
$$

For the diabatic potential to be single-valued, one must also have

$$
\begin{align}
\W(\beta)=\W(0).
\end{align}
$$

Using Eq. $\eqref{eq:two_state_C_after_loop}$,

$$
\begin{align}
\W(\beta)
&=\Cmat^\dagger(\beta)\V(0)\Cmat(\beta)
\nonumber\\
&=\Cmat^\dagger(0)\mat D^\dagger(\Gamma)\V(0)\mat D(\Gamma)\Cmat(0).
\end{align}
$$

Thus, single-valuedness of $\W$ requires

$$
\begin{align}
\mat D^\dagger(\Gamma)\V(0)\mat D(\Gamma)
=\V(0).
\label{eq:D_condition_W_single_valued}
\end{align}
$$

Equivalently,

$$
\begin{align}
[\mat D(\Gamma),\V(0)]=0.
\end{align}
$$

If the two adiabatic energies at the base point are nondegenerate,

$$
\begin{align}
V_1(0)\neq V_2(0),
\end{align}
$$

then any matrix that commutes with the diagonal matrix

$$
\begin{align}
\V(0)
=\begin{pmatrix}
V_1(0)&0\\
0&V_2(0)
\end{pmatrix}
\end{align}
$$

must itself be diagonal. In a real electronic basis, the allowed diagonal phases reduce to signs. Therefore

$$
\begin{align}
\mat D(\Gamma)
=\begin{pmatrix}
\pm1&0\\
0&\pm1
\end{pmatrix}.
\end{align}
$$

This is the reason Baer emphasises the condition that $\mat D(\Gamma)$ should be diagonal with elements of modulus one. For real states, those elements are simply $+1$ or $-1$.

> the base point of the loop should be chosen away from the degeneracy. At the exact degeneracy the adiabatic eigenvectors are not uniquely defined, so the nondegenerate diagonal argument above does not apply directly.

---

## 3. Baer's two-state model ansatz

Baer considers the model form

$$
\begin{align}
\F(\mat s)=\mat g\,t(\mat s),
\label{eq:two_state_baer_model}
\end{align}
$$

where $\mat g$ is a constant antisymmetric matrix and $t(\mat s)$ is a vector field in nuclear configuration space. Along the contour,

$$
\begin{align}
d\mat s\cdot\F(\mat s)
=\mat g\,
\left[
t(\mat s)\cdot d\mat s
\right].
\end{align}
$$

Define the scalar loop integral

$$
\begin{align}
\Theta
=\oint_\Gamma t(\mat s)\cdot d\mat s.
\label{eq:Theta_definition_two_state}
\end{align}
$$

Since all coupling matrices along the path are proportional to the same constant matrix $\mat g$, matrices at different points on the path commute:

$$
\begin{align}
[\mat g f(s_1),
\mat g f(s_2)
]
=f(s_1)f(s_2)[\mat g,\mat g]
=0.
\end{align}
$$

Here $f(s)$ denotes the scalar component of $t(\mat s)\cdot d\mat s$ along the path. Therefore the path-ordering symbol is not needed for this model, and

$$
\begin{align}
\mat D(\Gamma)
=\exp(-\mat g\,\Theta).
\label{eq:D_exp_g_theta}
\end{align}
$$

This is the first simplification in the two-state example: the closed-loop problem reduces to exponentiating one constant antisymmetric matrix.

---

## 4. Explicit two-state evaluation

Choose the two-state generator

$$
\begin{align}
\mat g
=\begin{pmatrix}
0&1\\
-1&0
\end{pmatrix}.
\label{eq:two_state_g_matrix}
\end{align}
$$

This matrix is real and antisymmetric. Its eigenvalues are

$$
\begin{align}
+i,\qquad-i.
\end{align}
$$

A convenient diagonalisation is

$$
\begin{align}
\mat g
=\mat G\,\omega\,\mat G^\dagger,
\end{align}
$$

with

$$
\begin{align}
\omega
=\begin{pmatrix}
i&0\\
0&-i
\end{pmatrix},
\end{align}
$$

and

$$
\begin{align}
\mat G
=\frac{1}{\sqrt{2}}
\begin{pmatrix}
1&1\\
i&-i
\end{pmatrix},
\qquad
\mat G^\dagger
=\frac{1}{\sqrt{2}}
\begin{pmatrix}
1&-i\\
1&i
\end{pmatrix}.
\end{align}
$$

Substituting this diagonalisation into Eq. $\eqref{eq:D_exp_g_theta}$ gives

$$
\begin{align}
\mat D(\Gamma)
&=\exp(-\mat g\Theta)
\nonumber\\
&=\exp(-\mat G\omega\mat G^\dagger\Theta)
\nonumber\\
&=\mat G
\exp(-\omega\Theta)
\mat G^\dagger.
\end{align}
$$

Since

$$
\begin{align}
\exp(-\omega\Theta)
=\begin{pmatrix}
e^{-i\Theta}&0\\
0&e^{i\Theta}
\end{pmatrix},
\end{align}
$$

we have

$$
\begin{align}
\mat D(\Gamma)
=\frac{1}{2}
\begin{pmatrix}
1&1\\
i&-i
\end{pmatrix}
\begin{pmatrix}
e^{-i\Theta}&0\\
0&e^{i\Theta}
\end{pmatrix}
\begin{pmatrix}
1&-i\\
1&i
\end{pmatrix}.
\end{align}
$$

First multiply the first two matrices:

$$
\begin{align}
\frac{1}{\sqrt{2}}
\begin{pmatrix}
1&1\\
i&-i
\end{pmatrix}
\begin{pmatrix}
e^{-i\Theta}&0\\
0&e^{i\Theta}
\end{pmatrix}
=\frac{1}{\sqrt{2}}
\begin{pmatrix}
e^{-i\Theta}&e^{i\Theta}\\
i e^{-i\Theta}&-i e^{i\Theta}
\end{pmatrix}.
\end{align}
$$

Therefore

$$
\begin{align}
\mat D(\Gamma)
=\frac{1}{2}
\begin{pmatrix}
e^{-i\Theta}&e^{i\Theta}\\
i e^{-i\Theta}&-i e^{i\Theta}
\end{pmatrix}
\begin{pmatrix}
1&-i\\
1&i
\end{pmatrix}.
\end{align}
$$

The four matrix elements are

$$
\begin{align}
D_{11}
&=\frac{1}{2}
\left(
e^{-i\Theta}+e^{i\Theta}
\right)
=\cos\Theta,
\\[4pt]
D_{12}
&=\frac{1}{2}
\left(
-i e^{-i\Theta}
+i e^{i\Theta}
\right)
=\frac{i}{2}
\left(
e^{i\Theta}-e^{-i\Theta}
\right)
=-\sin\Theta,
\\[4pt]
D_{21}
&=\frac{1}{2}
\left(
i e^{-i\Theta}
-i e^{i\Theta}
\right)
=-\frac{i}{2}
\left(
e^{i\Theta}-e^{-i\Theta}
\right)
=\sin\Theta,
\\[4pt]
D_{22}
&=\frac{1}{2}
\left(
e^{-i\Theta}+e^{i\Theta}
\right)
=\cos\Theta.
\end{align}
$$

Thus

$$
\begin{align}
\boxed{
\mat D(\Gamma)
=\begin{pmatrix}
\cos\Theta&-\sin\Theta\\
\sin\Theta&\cos\Theta
\end{pmatrix}.
}\label{eq:two_state_D_rotation}
\end{align}
$$

The topological matrix is therefore an ordinary two-dimensional rotation matrix. The loop integral $\Theta$ is the rotation angle generated by the closed contour.

---

## 5. Quantisation condition from single-valued diabatic potentials

For a physically acceptable loop in a real two-state problem, $\mat D(\Gamma)$ must be diagonal with entries $\pm1$ if the base point is nondegenerate. From Eq. $\eqref{eq:two_state_D_rotation}$, this requires

$$
\begin{align}
\sin\Theta=0.
\end{align}
$$

Therefore

$$
\begin{align}
\Theta=n\pi,
\qquad
n\in\mathbb Z.
\label{eq:theta_quantisation_two_state}
\end{align}
$$

Then

$$
\begin{align}
\mat D(\Gamma)
=\begin{pmatrix}
(-1)^n&0\\
0&(-1)^n
\end{pmatrix}
=(-1)^n\mat I_2.
\end{align}
$$

There are two important cases:

$$
\begin{align}
\Theta=0
\quad
&\Rightarrow
\quad
\mat D=\mat I_2,
\\[4pt]
\Theta=\pi
\quad
&\Rightarrow
\quad
\mat D=-\mat I_2.
\end{align}
$$

Thus a loop with $\Theta=\pi$ changes the sign of both real adiabatic electronic states in the active two-state subspace.

This sign change does not make the diabatic potential matrix multivalued. Since

$$
\begin{align}
\mat D=-\mat I_2,
\end{align}
$$

one has

$$
\begin{align}
\mat D^\dagger\V\mat D
=(-\mat I_2)\V(-\mat I_2)
=\V.
\end{align}
$$

Therefore

$$
\begin{align}
\W(\beta)
=\Cmat^\dagger(0)\mat D^\dagger\V\mat D\Cmat(0)
=\Cmat^\dagger(0)\V\Cmat(0)
=\W(0).
\end{align}
$$

The ADT matrix may change sign after a closed loop, but the diabatic potential matrix remains single-valued.

---

## 6. Connection with the two-state LVC conical-intersection model

Now connect the abstract angle $\Theta$ to the local two-state conical-intersection model.

For the two-state LVC model, define the energy-like branching coordinates

$$
\begin{align}
x=\Delta,
\qquad
y=2W_{12}.
\end{align}
$$

The adiabatic gap is

$$
\begin{align}
V_+-V_-=\sqrt{x^2+y^2}.
\end{align}
$$

With the sign convention used in the two-state conical-intersection derivation,

$$
\begin{align}
\F_{12}
=\frac{1}{2}
\frac{
x\nabla y-y\nabla x
}{x^2+y^2}.
\end{align}
$$

Along a path in the $(x,y)$ branching plane,

$$
\begin{align}
\F_{12}\cdot d\mat q
=\frac{1}{2}
\frac{
x\,dy-y\,dx
}{x^2+y^2}.
\label{eq:F12_dq_branching_plane}
\end{align}
$$

Parameterise a positively oriented loop around the conical intersection by

$$
\begin{align}
x=\rho\cos\phi,
\qquad
y=\rho\sin\phi,
\qquad
0\leq \phi\leq 2\pi.
\end{align}
$$

Then

$$
\begin{align}
dx&=-\rho\sin\phi\,d\phi,
\\
dy&=\rho\cos\phi\,d\phi.
\end{align}
$$

Therefore

$$
\begin{align}
x\,dy-y\,dx
&=(\rho\cos\phi)(\rho\cos\phi\,d\phi)
-(\rho\sin\phi)(-\rho\sin\phi\,d\phi)
\nonumber\\
&=\rho^2
\left(
\cos^2\phi+\sin^2\phi
\right)
d\phi
\nonumber\\
&=\rho^2\,d\phi.
\end{align}
$$

Since

$$
\begin{align}
x^2+y^2=\rho^2,
\end{align}
$$

Eq. $\eqref{eq:F12_dq_branching_plane}$ becomes

$$
\begin{align}
\F_{12}\cdot d\mat q
=\frac{1}{2}d\phi.
\end{align}
$$

Thus the scalar loop integral is

$$
\begin{align}
\Theta
=\oint_\Gamma \F_{12}\cdot d\mat q
=\frac{1}{2}
\int_0^{2\pi}d\phi
=\pi.
\end{align}
$$

Substituting this into Eq. $\eqref{eq:two_state_D_rotation}$ gives

$$
\begin{align}
\mat D(\Gamma)
=\begin{pmatrix}
\cos\pi&-\sin\pi\\
\sin\pi&\cos\pi
\end{pmatrix}
=\begin{pmatrix}
-1&0\\
0&-1
\end{pmatrix}
=-\mat I_2.
\end{align}
$$

This is the topological sign change associated with encircling a two-state conical intersection once.

---

## 7. Loops that do not enclose the conical intersection

If the loop does not enclose the conical intersection, the polar angle $\phi$ has no net winding around the origin in the $(x,y)$ plane. In that case,

$$
\begin{align}
\Delta\phi=0,
\end{align}
$$

and therefore

$$
\begin{align}
\Theta
=\frac{1}{2}\Delta\phi
=0.
\end{align}
$$

The topological matrix is then

$$
\begin{align}
\mat D(\Gamma)=\mat I_2.
\end{align}
$$

Thus the clean two-state model distinguishes between local proximity to a conical intersection and topological enclosure of the conical intersection. A nearby conical intersection can make the derivative coupling large and can cause numerical difficulty, but the topological sign change is controlled by the winding of the loop around the degeneracy.

More generally, if the loop winds $n$ times around the conical intersection, then

$$
\begin{align}
\Theta=n\pi,
\end{align}
$$

and

$$
\begin{align}
\mat D(\Gamma)=(-1)^n\mat I_2.
\end{align}
$$

---

## 8. Relation to the mixing angle

The same result can be stated in terms of the two-state mixing angle.

In the local branching coordinates,

$$
\begin{align}
\phi=\operatorname{atan2}(y,x),
\end{align}
$$

and the two-state mixing angle is one half of this polar angle, up to sign convention. With the convention used above,

$$
\begin{align}
\theta=-\frac{1}{2}\phi,
\qquad
\F_{12}=-\nabla\theta.
\end{align}
$$

Then

$$
\begin{align}
\oint_\Gamma \F_{12}\cdot d\mat q
=-\oint_\Gamma \nabla\theta\cdot d\mat q
=-\Delta\theta.
\end{align}
$$

For one positive loop,

$$
\begin{align}
\Delta\phi=2\pi,
\qquad
\Delta\theta=-\pi.
\end{align}
$$

Therefore

$$
\begin{align}
\oint_\Gamma \F_{12}\cdot d\mat q
=+\pi.
\end{align}
$$

This agrees with the LVC calculation above. A different sign convention for the adiabatic states or the rotation matrix may give $-\pi$ instead, but the closed-loop topological matrix for one encircled two-state conical intersection remains

$$
\begin{align}
\mat D=-\mat I_2.
\end{align}
$$

The sign of the scalar integral depends on convention and orientation. The existence of the sign change does not.

---

## 9. Interpretation

The two-state example gives the simplest possible picture of Baer's topological matrix.

The closed-loop integral of the NACV produces a rotation,

$$
\begin{align}
\mat D(\Gamma)
=\begin{pmatrix}
\cos\Theta&-\sin\Theta\\
\sin\Theta&\cos\Theta
\end{pmatrix}.
\end{align}
$$

Single-valued diabatic potentials require this rotation to reduce to a diagonal sign matrix. Therefore the loop integral must be quantised,

$$
\begin{align}
\Theta=n\pi.
\end{align}
$$

For a loop that encloses one two-state conical intersection,

$$
\begin{align}
\Theta=\pi,
\qquad
\mat D=-\mat I_2.
\end{align}
$$

Thus the adiabatic electronic states are not individually single-valued around the conical intersection. They return with a sign change. The diabatic potential matrix can nevertheless remain single-valued because the sign matrix commutes with the diagonal adiabatic energy matrix.

This is the local two-state version of the general statement:

$$
\boxed{
\text{The ADT matrix may have nontrivial holonomy, but the diabatic potential matrix must remain single-valued.}
}
$$

---

## Common pitfalls

### 1. Confusing nontrivial holonomy with a multivalued potential

A nontrivial $\mat D(\Gamma)$ does not automatically mean the diabatic potential matrix is multivalued. In the two-state CI case,

$$
\begin{align}
\mat D=-\mat I_2,
\end{align}
$$

and this leaves

$$
\begin{align}
\W=\Cinv\V\Cmat
\end{align}
$$

unchanged.

### 2. Thinking that the sign of the loop integral is absolute

The sign of

$$
\begin{align}
\oint \F_{12}\cdot d\mat q
\end{align}
$$

depends on the ordering of the states, the sign convention for the eigenvectors, and the orientation of the loop. The convention-independent statement is that a loop encircling one two-state conical intersection has accumulated angle of magnitude $\pi$.

### 3. Thinking that proximity is the same as encircling

A loop close to a conical intersection may have large derivative couplings along part of the path. However, the topological sign change is controlled by whether the loop winds around the degeneracy.

### 4. Forgetting the finite-subspace caveat

The clean result above assumes that the active two-state subspace is a good isolated subspace over the loop. If additional states become important, the two-state topological matrix may not correctly describe the full holonomy.

---

## Links to related notes

- [ADT integrability and topology overview](../../specialised_propagation_diabatisation_deepdive/spec03_adt_integrability_and_topology_overview.md)
- [Curl condition, analyticity, and uniqueness](../../specialised_propagation_diabatisation_deepdive/spec04_curl_condition_analyticity_and_uniqueness.md)
- [Topological matrix and single-valued diabatic potentials](../../specialised_propagation_diabatisation_deepdive/spec05_topological_matrix_and_single_valued_diabatic_potentials.md)
- [Complete versus reduced Hilbert-space ADT](../../specialised_propagation_diabatisation_deepdive/spec06_complete_vs_reduced_hilbert_space_adt.md)
- [Two-state diabatic model and conical intersections](../../../02_Born_Oppenheimer_and_Nonadiabaticity/intermediates/int02_conical_intersections.md)
- [Derivation: path-ordered ADT and closed contours](../../derivations/derivation_path_ordered_adt_and_closed_contours.md)
- [Derivation: topological matrix condition for diabatic potentials](../../derivations/derivation_topological_matrix_condition_for_W.md)

