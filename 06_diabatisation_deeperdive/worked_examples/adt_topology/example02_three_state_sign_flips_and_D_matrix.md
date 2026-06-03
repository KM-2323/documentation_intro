# Three-state sign flips and the topological matrix

This worked example extends the two-state loop example to Baer's simple three-state model.

The aim is to show how the topological matrix behaves when one retained electronic manifold contains three coupled states. The example is still highly idealised: the coupling matrix is assumed to be proportional to a single constant antisymmetric generator, so all coupling matrices along the path commute. This makes the algebra tractable and allows the topological matrix to be evaluated explicitly.

The important lesson is different from the two-state case. In the two-state example, a loop with accumulated angle $\pi$ gives

$$
\mat D=-\mat I_2,
$$

which is diagonal and therefore compatible with a single-valued diabatic potential matrix. In the generic three-state model below, the same kind of half-turn generally produces off-diagonal mixing in $\mat D$. For the diabatic potential matrix to remain single-valued, the allowed closed-loop condition is therefore more restrictive.

---

## 1. Starting point: Baer's three-state generator

Baer's three-state model uses the antisymmetric matrix

$$
\begin{align}
\mat g
=\begin{pmatrix}
0 & 1 & 0\\
-1 & 0 & \eta\\
0 & -\eta & 0
\end{pmatrix}.
\label{eq:g_three_state}
\end{align}
$$

Here $\eta$ controls the relative coupling strength between states $2$ and $3$. The direct $1$-$3$ element is zero,

$$
\begin{align}
g_{13}=g_{31}=0.
\end{align}
$$

Thus this is a chain-coupled three-state model:

$$
1 \leftrightarrow 2 \leftrightarrow 3,
\qquad
1 \not\leftrightarrow 3
\quad
\text{directly}.
$$

A useful scalar is

$$
\begin{align}
\omega=\sqrt{1+\eta^2}.
\label{eq:omega_three_state}
\end{align}
$$

The eigenvalues of $\mat g$ are

$$
\begin{align}
+i\omega,
\qquad
-i\omega,
\qquad
0.
\end{align}
$$

The zero eigenvalue is important. It means that the exponential of $\mat g$ is a three-dimensional rotation with one fixed axis. In this model, that fixed axis is proportional to

$$
\begin{align}
\begin{pmatrix}
\eta\\
0\\
1
\end{pmatrix}.
\end{align}
$$

This geometric interpretation will help explain why the three-state case is more restrictive than the two-state case.

---

## 2. Topological matrix for the model

The topological matrix for a closed contour $\Gamma$ is

$$
\begin{align}
\mat D(\Gamma)
=\mathcal P
\exp
\left[
-\oint_{\Gamma}
d\mat s\cdot \F(\mat s)
\right].
\label{eq:D_three_state_def}
\end{align}
$$

Baer's model assumes

$$
\begin{align}
\F(\mat s)=\mat g\,t(\mat s),
\label{eq:F_three_state_model}
\end{align}
$$

where $\mat g$ is the constant matrix in Eq. $\eqref{eq:g_three_state}$, and $t(\mat s)$ is a vector field in configuration space.

Along the contour,

$$
\begin{align}
d\mat s\cdot \F(\mat s)
=\mat g
\left[
t(\mat s)\cdot d\mat s
\right].
\end{align}
$$

Define the scalar loop integral

$$
\begin{align}
\Theta
=\oint_\Gamma
t(\mat s)\cdot d\mat s.
\label{eq:Theta_three_state}
\end{align}
$$

Because every matrix along the path is proportional to the same constant matrix $\mat g$, the matrices commute at different contour points:

$$
\begin{align}
[\mat g f(s_1),
\mat g f(s_2)
]=0.
\end{align}
$$

Here $f(s)$ denotes the scalar factor obtained by projecting $t(\mat s)$ along the path. Therefore path ordering is not needed for this model, and

$$
\begin{align}
\mat D(\Gamma)
=\exp(-\mat g\Theta).
\label{eq:D_three_state_exp}
\end{align}
$$

> this simplification is special to the present model. In a general multistate problem, different pairwise coupling matrices need not commute, and the path-ordering symbol cannot be dropped.

---

## 3. Diagonalising the generator

A convenient diagonalisation of $\mat g$ is

$$
\begin{align}
\mat g
=\mat G\mat\Omega\mat G^\dagger,
\end{align}
$$

where

$$
\begin{align}
\mat\Omega
=\begin{pmatrix}
i\omega&0&0\\
0&-i\omega&0\\
0&0&0
\end{pmatrix}.
\end{align}
$$

One possible eigenvector matrix is

$$
\begin{align}
\mat G
=\frac{1}{\omega\sqrt{2}}
\begin{pmatrix}
1 & 1 & \eta\sqrt{2}\\
i\omega & -i\omega & 0\\
-\eta & -\eta & \sqrt{2}
\end{pmatrix},
\end{align}
$$

with conjugate transpose

$$
\begin{align}
\mat G^\dagger
=\frac{1}{\omega\sqrt{2}}
\begin{pmatrix}
1 & -i\omega & -\eta\\
1 & i\omega & -\eta\\
\eta\sqrt{2} & 0 & \sqrt{2}
\end{pmatrix}.
\end{align}
$$

Substituting this into Eq. $\eqref{eq:D_three_state_exp}$,

$$
\begin{align}
\mat D(\Gamma)
&=
\exp(-\mat g\Theta)
\nonumber\\
&=
\exp(-\mat G\mat\Omega\mat G^\dagger\Theta)
\nonumber\\
&=
\mat G
\exp(-\mat\Omega\Theta)
\mat G^\dagger.
\end{align}
$$

Since

$$
\begin{align}
\exp(-\mat\Omega\Theta)
=\begin{pmatrix}
e^{-i\omega\Theta}&0&0\\
0&e^{i\omega\Theta}&0\\
0&0&1
\end{pmatrix},
\end{align}
$$

the topological matrix is

$$
\begin{align}
\mat D
=\mat G
\begin{pmatrix}
e^{-i\omega\Theta}&0&0\\
0&e^{i\omega\Theta}&0\\
0&0&1
\end{pmatrix}
\mat G^\dagger.
\end{align}
$$

---

## 4. Explicit matrix multiplication

First multiply $\mat G$ by the diagonal exponential matrix:

$$
\begin{align}
\mat G\exp(-\mat\Omega\Theta)
=\frac{1}{\omega\sqrt{2}}
\begin{pmatrix}
e^{-i\omega\Theta}
&e^{i\omega\Theta}
&\eta\sqrt{2}
\\
i\omega e^{-i\omega\Theta}
&-i\omega e^{i\omega\Theta}
&0
\\-\eta e^{-i\omega\Theta}
&-\eta e^{i\omega\Theta}
&\sqrt{2}
\end{pmatrix}.
\end{align}
$$

Then

$$
\begin{align}
\mat D
=\frac{1}{2\omega^2}
\begin{pmatrix}
e^{-i\omega\Theta}
&e^{i\omega\Theta}
&\eta\sqrt{2}
\\
i\omega e^{-i\omega\Theta}
&-i\omega e^{i\omega\Theta}
&0
\\
-\eta e^{-i\omega\Theta}
&-\eta e^{i\omega\Theta}
&\sqrt{2}
\end{pmatrix}
\begin{pmatrix}
1 & -i\omega & -\eta\\
1 & i\omega & -\eta\\
\eta\sqrt{2} & 0 & \sqrt{2}
\end{pmatrix}.
\end{align}
$$

Carrying out the multiplication gives

$$
\begin{align}
\mat D
=\frac{1}{2\omega^2}
\begin{pmatrix}
e^{-i\omega\Theta}+e^{i\omega\Theta}+2\eta^2
&-i\omega\left(e^{-i\omega\Theta}-e^{i\omega\Theta}\right)
&-\eta\left(e^{-i\omega\Theta}+e^{i\omega\Theta}\right)+2\eta
\\
i\omega\left(e^{-i\omega\Theta}-e^{i\omega\Theta}\right)
&\omega^2\left(e^{-i\omega\Theta}+e^{i\omega\Theta}\right)
&-i\omega\eta\left(e^{-i\omega\Theta}-e^{i\omega\Theta}\right)
\\
-\eta\left(e^{-i\omega\Theta}+e^{i\omega\Theta}\right)+2\eta
&i\omega\eta\left(e^{-i\omega\Theta}-e^{i\omega\Theta}\right)
&\eta^2\left(e^{-i\omega\Theta}+e^{i\omega\Theta}\right)+2
\end{pmatrix}.
\end{align}
$$

Now define

$$
\begin{align}
C=\cos(\omega\Theta),
\qquad
S=\sin(\omega\Theta).
\end{align}
$$

Using

$$
\begin{align}
e^{-i\omega\Theta}+e^{i\omega\Theta}
&=2C,
\\
e^{i\omega\Theta}-e^{-i\omega\Theta}
&=2iS,
\end{align}
$$

the topological matrix becomes

$$
\begin{align}
\boxed{
\mat D(\Gamma)
=\frac{1}{\omega^2}
\begin{pmatrix}
\eta^2+C & -\omega S & \eta(1-C)\\
\omega S & \omega^2 C & -\eta\omega S\\
\eta(1-C) & \eta\omega S & 1+\eta^2 C
\end{pmatrix}.
}
\label{eq:D_three_state_final}
\end{align}
$$

Convention warning: the signs of the sine terms depend on the sign convention used for the generator $\mat g$ and for the orientation of the loop. With the generator in Eq. $\eqref{eq:g_three_state}$, the $(1,2)$ entry is $-\omega S/\omega^2$. Reversing the sign of $\mat g$, or reversing the contour orientation, reverses the sine terms but does not change the diagonality condition derived below.

---

## 5. Diagonality condition

For the diabatic potential matrix to remain single-valued at a nondegenerate base point, Baer's condition is that the topological matrix should be diagonal with diagonal entries of modulus one. In a real electronic basis, this means diagonal entries $\pm1$.

From Eq. $\eqref{eq:D_three_state_final}$, the off-diagonal entries are controlled by two types of terms:

$$
\begin{align}
D_{12},D_{21},D_{23},D_{32}
&\propto S,
\\
D_{13},D_{31}
&\propto \eta(1-C).
\end{align}
$$

Therefore, for generic

$$
\begin{align}
\eta\neq0,
\end{align}
$$

diagonality requires both

$$
\begin{align}
S=0
\end{align}
$$

and

$$
\begin{align}
1-C=0.
\end{align}
$$

The first condition gives

$$
\begin{align}
\omega\Theta=n\pi.
\end{align}
$$

The second condition requires

$$
\begin{align}
C=1,
\end{align}
$$

and therefore

$$
\begin{align}
\omega\Theta=2n\pi,
\qquad 
n\in\mathbb Z.
\label{eq:three_state_quantisation_condition}
\end{align}
$$

Equivalently,

$$
\boxed{
\omega
\oint_\Gamma
t(\mat s)\cdot d\mat s
=2n\pi,
\qquad
n\in\mathbb Z.
}
\label{eq:Baer_three_state_quantisation}
$$

Under this condition,

$$
\begin{align}
C=1,
\qquad
S=0,
\end{align}
$$

so Eq. $\eqref{eq:D_three_state_final}$ becomes

$$
\begin{align}
\mat D(\Gamma)=\mat I_3.
\end{align}
$$

Thus, in this generic three-state model, the allowed single-valued result is the identity topological matrix. A half-turn condition analogous to the two-state case is not sufficient, because it produces off-diagonal mixing between states $1$ and $3$.

---

## 6. Why the condition is more restrictive than in the two-state case

The two-state example produced

$$
\begin{align}
\mat D_2(\Gamma)
=\begin{pmatrix}
\cos\Theta&-\sin\Theta\\
\sin\Theta&\cos\Theta
\end{pmatrix}.
\end{align}
$$

For that matrix to be diagonal, it is enough to require

$$
\begin{align}
\sin\Theta=0.
\end{align}
$$

Thus

$$
\begin{align}
\Theta=n\pi,
\end{align}
$$

and a loop with $\Theta=\pi$ gives

$$
\begin{align}
\mat D_2=-\mat I_2.
\end{align}
$$

The three-state matrix in Eq. $\eqref{eq:D_three_state_final}$ contains an additional off-diagonal term,

$$
\begin{align}
D_{13}=D_{31}
=\frac{\eta(1-C)}{\omega^2}.
\end{align}
$$

This term is important. Even though the generator has no direct $1$-$3$ coupling,

$$
\begin{align}
g_{13}=0,
\end{align}
$$

the exponential of the generator can still mix states $1$ and $3$. This occurs because the chain

$$
1\leftrightarrow2\leftrightarrow3
$$

allows indirect coupling through powers of $\mat g$. In other words, the absence of a direct $1$-$3$ element in $\mat g$ does not imply the absence of a $1$-$3$ element in $\exp(-\mat g\Theta)$.

For this indirect $1$-$3$ mixing to vanish when $\eta\neq0$, one must have

$$
\begin{align}
1-C=0.
\end{align}
$$

This is why the three-state condition is

$$
\begin{align}
\omega\Theta=2n\pi,
\end{align}
$$

rather than merely

$$
\begin{align}
\omega\Theta=n\pi.
\end{align}
$$

---

## 7. Special limiting case: $\eta=0$

The generic three-state model assumes $\eta\neq0$. If

$$
\begin{align}
\eta=0,
\end{align}
$$

then

$$
\begin{align}
\omega=1,
\end{align}
$$

and the generator reduces to

$$
\begin{align}
\mat g
=\begin{pmatrix}
0&1&0\\
-1&0&0\\
0&0&0
\end{pmatrix}.
\end{align}
$$

State $3$ is now a spectator, and the active part is just the two-state $1$-$2$ block. Equation $\eqref{eq:D_three_state_final}$ reduces to

$$
\begin{align}
\mat D(\Gamma)
=\begin{pmatrix}
\cos\Theta&-\sin\Theta&0\\
\sin\Theta&\cos\Theta&0\\
0&0&1
\end{pmatrix}.
\end{align}
$$

The diagonality condition is then only

$$
\begin{align}
\sin\Theta=0,
\end{align}
$$

so

$$
\begin{align}
\Theta=n\pi.
\end{align}
$$

For $\Theta=\pi$,

$$
\begin{align}
\mat D(\Gamma)
=\begin{pmatrix}
-1&0&0\\
0&-1&0\\
0&0&1
\end{pmatrix}.
\end{align}
$$

This is exactly what one expects for an isolated two-state conical intersection involving states $1$ and $2$, with state $3$ acting as a spectator.

This limiting case is useful because it shows how the two-state sign flip is embedded inside a larger electronic manifold. It also shows why coupling to an additional state changes the topological restrictions.

---

## 8. Geometric interpretation

A real antisymmetric $3\times3$ matrix generates an ordinary rotation in three dimensions. The matrix $\mat g$ in Eq. $\eqref{eq:g_three_state}$ generates a rotation about the fixed axis

$$
\begin{align}
\mat u
=\frac{1}{\omega}
\begin{pmatrix}
\eta\\
0\\
1
\end{pmatrix}.
\end{align}
$$

The topological matrix

$$
\begin{align}
\mat D(\Gamma)=\exp(-\mat g\Theta)
\end{align}
$$

is therefore a rotation by an angle controlled by $\omega\Theta$ about this axis.

If $\eta=0$, the rotation axis is aligned with the third coordinate axis. A rotation by $\pi$ then gives

$$
\begin{align}
\operatorname{diag}(-1,-1,1),
\end{align}
$$

which is diagonal and physically acceptable as a sign flip of states $1$ and $2$.

If $\eta\neq0$, the rotation axis is tilted into the $1$-$3$ plane. A rotation by $\pi$ about this tilted axis is not diagonal in the original electronic-state basis. It mixes states $1$ and $3$, so it is not compatible with a single-valued diabatic potential matrix at a nondegenerate base point.

Only a full $2\pi$ rotation about this tilted axis returns the matrix to the identity. This is the geometric reason behind the condition

$$
\begin{align}
\omega\Theta=2n\pi.
\end{align}
$$

---

## 9. Relation to multistate topology

This example should not be interpreted as the general answer for all three-state systems. It is a special model with three important simplifying features:

1. all coupling matrices along the loop are proportional to one constant generator $\mat g$;
2. there is no direct $1$-$3$ coupling in $\mat g$;
3. path ordering is unnecessary because all matrices commute.

A general three-state or multistate problem may involve several independent pairwise coupling matrices, such as $1$-$2$, $2$-$3$, and $1$-$3$ generators. These generators do not necessarily commute. In that case, the order in which the coupling is encountered along the path matters, and the path-ordered exponential cannot be replaced by an ordinary exponential.

This is why multistate topology is not simply a collection of independent two-state sign flips. If different two-state seams are well separated and one state remains a spectator, the local result may reduce to a two-state block such as

$$
\begin{align}
\operatorname{diag}(-1,-1,1).
\end{align}
$$

If all three states are coupled over the same loop, the topological matrix may contain off-diagonal mixing unless the loop integral satisfies a stronger quantisation condition.

The example therefore prepares the way for the more general $N$-state discussion. In the general case, one must ask not only which states change sign, but also whether the closed-loop matrix remains diagonal at all.

---

## 10. Interpretation

The three-state example shows why Baer's topological-matrix condition is stronger than simply requiring a quantised scalar loop integral.

For the model

$$
\begin{align}
\mat g
=\begin{pmatrix}
0 & 1 & 0\\
-1 & 0 & \eta\\
0 & -\eta & 0
\end{pmatrix},
\end{align}
$$

the closed-loop topological matrix is

$$
\begin{align}
\mat D(\Gamma)
=\frac{1}{\omega^2}
\begin{pmatrix}
\eta^2+C & -\omega S & \eta(1-C)\\
\omega S & \omega^2 C & -\eta\omega S\\
\eta(1-C) & \eta\omega S & 1+\eta^2 C
\end{pmatrix},
\end{align}
$$

where

$$
\begin{align}
C=\cos(\omega\Theta),
\qquad
S=\sin(\omega\Theta),
\qquad
\omega=\sqrt{1+\eta^2}.
\end{align}
$$

For $\eta\neq0$, diagonality requires

$$
\begin{align}
S=0,
\qquad
1-C=0.
\end{align}
$$

Thus

$$
\begin{align}
\omega\Theta=2n\pi,
\end{align}
$$

and the allowed topological matrix is

$$
\begin{align}
\mat D=\mat I_3.
\end{align}
$$

For $\eta=0$, state $3$ decouples and the model reduces to the two-state result embedded in a three-state space:

$$
\begin{align}
\mat D
=\operatorname{diag}((-1)^n,(-1)^n,1).
\end{align}
$$

The main point is therefore:

$$
\boxed{
\text{A multistate topological matrix must be diagonal for single-valued diabatic potentials, and coupling to additional states can make this condition more restrictive than in the two-state case.}
}
$$

---

## Common pitfalls

### 1. Thinking that $g_{13}=0$ means $D_{13}=0$

The generator has no direct $1$-$3$ coupling, but the exponential of the generator can still produce $1$-$3$ mixing. This occurs through the chain $1\leftrightarrow2\leftrightarrow3$.

### 2. Treating the three-state result as three independent two-state results

The three-state model is not simply the product of an independent $1$-$2$ sign flip and an independent $2$-$3$ sign flip. The same generator couples the retained states into one collective rotation.

### 3. Forgetting the special nature of the model

The result

$$
\omega\Theta=2n\pi
$$

is a result for this specific three-state generator. A more general multistate problem can involve noncommuting generators and requires the full path-ordered exponential.

### 4. Ignoring the spectator-state limit

When $\eta=0$, state $3$ is a spectator. The model then reduces to the ordinary two-state sign-change result embedded in a larger electronic space. This limiting case is often the easiest way to interpret the diagonal sign matrices that arise from isolated two-state conical intersections.

---

## Links to related notes

- [ADT integrability and topology overview](../../specialised_propagation_diabatisation_deepdive/spec03_adt_integrability_and_topology_overview.md)
- [Curl condition, analyticity, and uniqueness](../../specialised_propagation_diabatisation_deepdive/spec04_curl_condition_analyticity_and_uniqueness.md)
- [Topological matrix and single-valued diabatic potentials](../../specialised_propagation_diabatisation_deepdive/spec05_topological_matrix_and_single_valued_diabatic_potentials.md)
- [Complete versus reduced Hilbert-space ADT](../../specialised_propagation_diabatisation_deepdive/spec06_complete_vs_reduced_hilbert_space_adt.md)
- [Multistate topology, signs, and degeneracies](../../specialised_propagation_diabatisation_deepdive/spec08_multistate_topology_signs.md)
- [Two-state loop and sign change](example01_two_state_loop_and_sign_change.md)
- [Derivation: path-ordered ADT and closed contours](../../derivations/derivation_path_ordered_adt_and_closed_contours.md)
- [Derivation: topological matrix condition for diabatic potentials](../../derivations/derivation_topological_matrix_condition_for_W.md)