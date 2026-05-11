# Brief algorithmic breakdown of propagation diabatisation implemented in Quantics: safety checks and fallbacks

For a detailed line-by-line code discussion, see [code_propagation_diabatisation](diabatisation_code/code_propagation_diabatisation.md).

The propagation diabatisation step takes a new nuclear geometry, compares it with the existing DD-vMCG quantum-chemistry database, and decides whether the new ab initio data can be safely transformed into the current diabatic representation.

### Setup
Let the closest useful database geometry be

$$
\mat q_0,
$$

and let the new geometry be

$$
\mat q_+
=\mat q_0+\Delta \mat q .
$$

At the old database point, the algorithm has stored a diabatic model,

$$
\mat W(\mat q_0),
\qquad
\mat G^{\mathrm D}(\mat q_0),
\qquad
\mat H^{\mathrm D}(\mat q_0),
$$

where $\mat W$ is the diabatic potential matrix, $\mat G^{\mathrm D}$ is the matrix of diabatic gradient vectors, and $\mat H^{\mathrm D}$ is the matrix of diabatic Hessians. The database also stores the adiabatic-to-diabatic transformation matrix,

$$
\Cmat(\mat q_0).
$$

The DD-vMCG database is used because the method does not pre-fit a global potential energy surface. Instead, electronic energies, gradients, Hessians, and coupling information are stored at selected geometries and reused through local Taylor expansion and interpolation. In the original propagation diabatisation implementation, the interpolation follows a modified Shepard-style idea, where local Taylor expansions are weighted by distance from existing database points.

At the new geometry, the raw quantum-chemistry calculation provides

$$
\mat V^{\mathrm{QC}}(\mat q_+),
\qquad
\mat G^{\mathrm A}_{\mathrm{QC}}(\mat q_+),
\qquad
\mat H^{\mathrm A}_{\mathrm{QC}}(\mat q_+),
\qquad
\mat D_{\mathrm{QC}}(\mat q_+),
$$

where $\mat V^{\mathrm{QC}}$ is diagonal in the adiabatic representation. The matrix $\mat D$ denotes the derivative-coupling numerator,

$$
\mat D_{ij}
=\mel{\psi_i}{\nabla \hat H_{\mathrm{el}}}{\psi_j}.
$$

For non-degenerate states,

$$
\mat F_{ij}
=\frac{\mat D_{ij}}{V_j-V_i},
$$

where

$$
\mat F_{ij}
=\braket{\psi_i}{\nabla \psi_j}
$$

is the usual nonadiabatic coupling vector. This distinction is useful in the implementation because $\mat D_{ij}$ is symmetric in the state labels for real electronic states, whereas $\mat F_{ij}$ is antisymmetric:

$$
\mat D_{ij}=\mat D_{ji},
\qquad
\mat F_{ij}=-\mat F_{ji}.
$$

The transformation matrix is propagated using the ADT equation

$$
\nabla \Cmat
=-\mat F \Cmat .
$$

Along a short path from $\mat q_0$ to $\mat q_+$, the formal solution is

$$
\Cmat(\mat q_+)
=\mathcal P
\exp
\left[
-\int_{\mat q_0}^{\mat q_+}
\mat F(\mat q)\cdot d\mat q
\right]
\Cmat(\mat q_0),
$$

where $\mathcal P$ denotes path ordering. In the DD-vMCG implementation, this integral is evaluated along a local path between database geometries, with the derivative-coupling information estimated from the available quantum-chemistry and database data. Richings and Worth use this propagation of the adiabatic-to-diabatic transformation matrix as the core of propagation diabatisation.

Before accepting the propagated transformation, the algorithm first builds a predicted local model at $\mat q_+$.

If $\mat q_+$ is sufficiently close to $\mat q_0$, the diabatic matrix can be predicted by a second-order local expansion,

$$
\left[\mat W_{\mathrm{pred}}(\mat q_+)\right]_{ij}
=\W_{ij}(\mat q_0)
+\mat G^{\mathrm D}_{ij}(\mat q_0)\cdot \Delta\mat q
+\frac{1}{2}
\Delta\mat q^{\mathrm T}
\mat H^{\mathrm D}_{ij}(\mat q_0)
\Delta\mat q .
$$

If the new geometry is not close enough to a single database point, the code instead uses a database interpolation. Schematically,

$$
\mat W_{\mathrm{pred}}(\mat q_+)
=\sum_{a\in \mathrm{DB}}
w_a(\mat q_+)\,
\mat T_a(\mat q_+),
$$

where $\mat T_a$ is the local Taylor model generated from database point $a$, and $w_a$ is a distance-based Shepard-type weight. In practice, the improved DD-vMCG algorithm only needs a selected local subset of database points near the current Gaussian centre, rather than the full database at every step.

The predicted diabatic matrix is then diagonalised to obtain predicted adiabatic quantities,

$$
\Cmat_{\mathrm{pred}}(\mat q_+)
\,
\mat W_{\mathrm{pred}}(\mat q_+)
\,
\Cmat_{\mathrm{pred}}^\dagger(\mat q_+)
=\mat V_{\mathrm{pred}}(\mat q_+).
$$

The same predicted transformation can be applied to the diabatic gradient matrix to obtain predicted adiabatic gradients and predicted derivative-coupling numerators:

$$
\Cmat_{\mathrm{pred}}
\,
\mat G^{\mathrm D}_{\mathrm{pred}}
\,
\Cmat_{\mathrm{pred}}^\dagger
=\mat G^{\mathrm A}_{\mathrm{pred}}
+
\mat D_{\mathrm{pred}}.
$$

Here $\mat G^{\mathrm A}_{\mathrm{pred}}$ is diagonal in the electronic-state indices, while $\mat D_{\mathrm{pred}}$ has zero diagonal and off-diagonal derivative-coupling numerator vectors.

### Cubic path-model fallback

The normal branch of propagation diabatisation obtains the local
adiabatic–diabatic transformation by integrating the derivative-coupling
field along a path in nuclear configuration space. In the DD-vMCG
implementation this is motivated by the equation

$$
\nabla\mat C \approx -\mat F\mat C,
$$

with $\mat F$ the matrix of retained-state NACVs. The approximation is finite-subspace dependent: couplings to excluded electronic states leave a non-removable residual component, so the propagated transformation is most reliable where the removable coupling between the retained states dominates,especially near the crossings included in the state manifold.

When the implementation’s safety checks indicate that the straight-line
propagation from the closest database point is unreliable, the code may enter
a fallback branch implemented in `optqvc`. This fallback constructs a
one-dimensional diabatic model along the displacement from the selected
database point to the current geometry,

$$
\mat V_d(x)=\mat A+\mat Bx+\mat C_{\mathrm{code}}x^2+\mat Kx^3,
\qquad x\in[0,L],
$$

where $\mat A$, $\mat B$, and $\mat C_{\mathrm{code}}$ come from the database point and only the symmetric cubic matrix $\mat K$ is optimised.
The optimisation asks the endpoint model to reproduce the target adiabatic energies and the projected endpoint adiabatic derivative matrix. The returnedtransformation is then used by the later transformation step to construct the diabatic quantities used by DD-vMCG.

For the algebra of this cubic endpoint fit, see
[QVC path model](../derivations/derivations_qvc_path_model.md).

For the implementation details, see
[`optqvc`](../code_breakdown/propagation_diabatisation/optqvc.md).


## Guards

### Guard 1: continuity and sign of the derivative-coupling vector

The first guard compares the predicted derivative-coupling numerator with the raw quantum-chemistry derivative-coupling numerator.

For each relevant state pair $(i,j)$, define the normalised overlap

$$
\Omega_{ij}
=\frac{
\mat D^{\mathrm{pred}}_{ij}(\mat q_+)
\cdot
\mat D^{\mathrm{QC}}_{ij}(\mat q_+)
}{
\left\|
\mat D^{\mathrm{pred}}_{ij}(\mat q_+)
\right\|
\left\|
\mat D^{\mathrm{QC}}_{ij}(\mat q_+)
\right\|
}.
$$

This is the cosine of the angle between the predicted and computed coupling vectors,

$$
\Omega_{ij}=\cos\phi_{ij}.
$$

The updated code uses the condition

$$
|\Omega_{ij}| < 0.866
$$

as the criterion that the vector field is no longer continuous (instead of $\frac{1}{\sqrt{2}}$ ). This corresponds to an angle larger than $30^\circ$. If this condition is met, the calculated coupling is treated as unreliable, probably because the local two-state or few-state character has changed, for example due to an intruder state. In that case, the propagated ADT branch is not trusted; instead, the predicted transformation matrix is used to place the calculated adiabatic energies into a controlled diabatic representation.

If the overlap is large in magnitude but negative,

$$
\Omega_{ij}<0,
\qquad
|\Omega_{ij}|\geq 0.866,
$$

then the direction is consistent but the sign is wrong. The code treats this as a phase convention problem and flips the sign of the quantum-chemistry coupling,

$$
\mat D^{\mathrm{QC}}_{ij}
\longleftarrow
-\mat D^{\mathrm{QC}}_{ij},
$$

and therefore also

$$
\mat F^{\mathrm{QC}}_{ij}
\longleftarrow
-\mat F^{\mathrm{QC}}_{ij}.
$$

This is not a physical change to the molecule. It is a gauge correction caused by the arbitrary sign of real adiabatic electronic eigenvectors. Sign assignment for nonadiabatic couplings is a real issue in multistate systems: continuity is often useful, but continuity alone can fail when several conical intersections or state pairs interact.

A useful interpretation is:

> If the predicted and computed coupling vectors are nearly parallel but point in opposite directions, the code flips the sign and continues. If they are not close to parallel at all, the problem is not just a sign convention: the local state character may have changed.



---

### Guard 2: diabatic ordering and seam crossing

The second guard compares the ordering of the predicted diabatic model at the new point with the ordering of the diabatic model at the old database point.

A simple way to express this is to define an ordering map from the diagonal diabatic elements,

$$
\pi(\mat q)
=\operatorname{argsort}
\left(
W_{11}(\mat q),
W_{22}(\mat q),
\ldots,
W_{NN}(\mat q)
\right).
$$

The guard compares

$$
\pi(\mat q_0)
\quad\text{and}\quad
\pi_{\mathrm{pred}}(\mat q_+).
$$

If the ordering has changed,

$$
\pi_{\mathrm{pred}}(\mat q_+)
\neq
\pi(\mat q_0),
$$

the code interprets the step as crossing a seam or crossing a region where the local diabatic ordering changes. The issue is not that the molecule is forbidden from crossing a seam. The issue is that the simple local straight-line propagation of

$$
\nabla \Cmat = -\mat F\Cmat
$$

may not give a reliable transformation across that step.

In this case, the normal propagation branch is bypassed. The predicted transformation matrix,

$$
\Cmat_{\mathrm{pred}}(\mat q_+),
$$

is used to transform the new adiabatic information into the diabatic representation. The 2021 algorithm describes this as using the predicted transformation matrix to rotate the adiabatic data at the new point, because the propagated transformation cannot safely account for the ordering change.

<!-- A compact way to write the fallback transformation is

$$
\mat W_{\mathrm{fb}}(\mat q_+)
=\Cmat_{\mathrm{pred}}^\dagger(\mat q_+)
\,
\mat V^{\mathrm{QC}}(\mat q_+)
\,
\Cmat_{\mathrm{pred}}(\mat q_+).
$$

The corresponding gradient transformation is

$$
\mat G^{\mathrm D}_{\mathrm{fb}}(\mat q_+)
=\Cmat_{\mathrm{pred}}^\dagger
\left(
\mat G^{\mathrm A}_{\mathrm{QC}}
+
\mat D_{\mathrm{QC}}
\right)
\Cmat_{\mathrm{pred}}.
$$ -->

Then it uses `optqvc` / local vibronic-coupling fallback, which written it as a one-dimensional expansion along the attempted step,

$$
\mat q(s)=\mat q_0+s\Delta\mat q,
\qquad
0\leq s\leq 1,
$$

with

$$
\mat W_{\mathrm{fb}}(s)
=\mat W(\mat q_0)
+
s\,\mat A
+
s^2\,\mat B
+
s^3\,\mat Z.
$$

Here $\mat A$ and $\mat B$ are fixed by the stored local diabatic model, while $\mat Z$ is an adjustable cubic correction. The purpose of this fallback model is to match the available projected adiabatic energies, derivative-coupling information, and gradient information at the new point as smoothly as possible.

---

### Guard 3: small adiabatic energy gap

The third guard checks the adiabatic energy gap at the new point,

$$
\Delta V^{\mathrm{QC}}_{ij}(\mat q_+)
=V^{\mathrm{QC}}_{j}(\mat q_+)
-V^{\mathrm{QC}}_{i}(\mat q_+).
$$

If

$$
\left|\Delta V^{\mathrm{QC}}_{ij}(\mat q_+)
\right|
<\Delta V_{\mathrm{min}},
$$

with

$$
\Delta V_{\mathrm{min}} = 0.05\,\mathrm{eV},
$$

then the point is treated as lying in a near-degenerate region where the raw quantum-chemistry data are not trusted for the normal propagation branch. The improved DD-vMCG paper states this small-gap guard explicitly: if the adiabatic states are less than $0.05$ eV apart, the predicted diabatic surfaces are stored in the QC database together with the raw adiabatic data.

The numerical reason is clear from

$$
\mat F_{ij}
=\frac{\mat D_{ij}}{V_j-V_i}.
$$

When $V_j-V_i$ is very small, direct division by the gap can produce an unstable coupling vector. This is not a statement that small gaps are unphysical. Small gaps are exactly where nonadiabatic effects are important. The guard only says that the naive numerical construction of $\mat F_{ij}$ from raw quantum-chemistry data is unsafe at that step.

In this branch, the stored diabatic model is therefore taken from the fallback lvc model,

$$
\mat W^{\mathrm D}(\mat q_+)
\leftarrow
\mat W_{\mathrm{fb}}(\mat q_+),
$$

while the raw adiabatic data are still stored as diagnostic information.

---

### Guard 4: failed or unusable quantum-chemistry calculation

The fourth guard handles cases where the quantum-chemistry calculation fails or returns unusable data. Examples include a failed CASSCF convergence, inconsistent electronic-state ordering, missing derivative-coupling data, or numerical output that cannot be reconciled with the local database prediction.

If the quantum-chemistry calculation fails, the algorithm does not store the failed raw data as if they were valid ab initio data. Instead, it stores the predicted diabatic surfaces and the corresponding predicted adiabatic surfaces. The improved DD-vMCG algorithm states this as a separate branch: if the QC calculation fails, the predicted diabatic surfaces are stored together with the predicted adiabatic surfaces.

Symbolically,

$$
\mat W^{\mathrm D}(\mat q_+)
\leftarrow
\mat W_{\mathrm{pred}}(\mat q_+),
$$

and

$$
\mat V^{\mathrm A}(\mat q_+)
\leftarrow
\Cmat_{\mathrm{pred}}(\mat q_+)
\mat W_{\mathrm{pred}}(\mat q_+)
\Cmat_{\mathrm{pred}}^\dagger(\mat q_+).
$$

This guard separates two different problems:

1. physical nonadiabatic behaviour, where the electronic states are genuinely close or strongly coupled;
2. unusable electronic-structure output, where the calculation itself cannot be trusted.

Only the first should influence the physical interpretation of the dynamics. The second is an implementation and data-quality issue.

---

## Normal branch: propagation diabatisation

If none of the guards is triggered, the new point is treated as lying in a continuous region of the current diabatic representation. The transformation matrix is then propagated from $\mat q_0$ to $\mat q_+$.

The formal propagation is

$$
\Cmat(\mat q_+)
=\mathcal P
\exp
\left[
-\int_{\mat q_0}^{\mat q_+}
\mat F(\mat q)\cdot d\mat q
\right]
\Cmat(\mat q_0).
$$

In practical implementation, the path is normally a straight local path between the old database point and the new point,

$$
\mat q(s)
=\mat q_0+s\Delta\mat q,
\qquad
0\leq s\leq 1.
$$

Then

$$
\mat A
=\int_0^1
\mat F(\mat q(s))\cdot \Delta\mat q\, ds,
$$

and

$$
\Cmat(\mat q_+)
\approx
\exp(-\mat A)\Cmat(\mat q_0).
$$

Because a straightforward matrix exponential approximation may not preserve unitarity exactly, the implementation uses a symmetrised/Cayley-like rearrangement,

$$
\exp\left(\frac{1}{2}\mat A\right)
\Cmat(\mat q_+)
=\exp\left(-\frac{1}{2}\mat A\right)
\Cmat(\mat q_0),
$$

so that

$$
\Cmat(\mat q_+)
=\left[
\exp\left(\frac{1}{2}\mat A\right)
\right]^{-1}
\exp\left(-\frac{1}{2}\mat A\right)
\Cmat(\mat q_0).
$$

This is the numerical form of the propagated ADT idea used in the practical DD-vMCG implementation.

The final diabatic energy matrix is then obtained from the raw quantum-chemistry adiabatic energies,

$$
\mat W^{\mathrm D}(\mat q_+)
=\Cmat^\dagger(\mat q_+)
\,
\mat V^{\mathrm{QC}}(\mat q_+)
\,
\Cmat(\mat q_+).
$$

The final diabatic gradient matrix is similarly obtained from the adiabatic gradients and derivative-coupling numerators,

$$
\mat G^{\mathrm D}(\mat q_+)
=\Cmat^\dagger(\mat q_+)
\left(
\mat G^{\mathrm A}_{\mathrm{QC}}(\mat q_+)
+
\mat D_{\mathrm{QC}}(\mat q_+)
\right)
\Cmat(\mat q_+).
$$

<!-- This equation is important because it makes clear that the database prediction is not simply replacing the quantum-chemistry calculation in the normal branch. The database prediction is used to choose a stable transformation, check signs and ordering, and detect unsafe points. Once the normal branch is accepted, the raw quantum-chemistry adiabatic data are transformed into the diabatic representation. -->

---

## Final phase convention

Before the final adiabatic-to-diabatic transformation is stored, the phase of the eigenvectors used to form the transformation matrix is adjusted.

For real electronic states, the electronic eigenvectors are defined only up to a sign. Therefore the columns of $\Cmat$ may be multiplied by $\pm 1$ without changing the underlying adiabatic energies. The implementation fixes this freedom by choosing the signs so that the diagonal elements of the transformation matrix are positive where possible,

$$
C_{ii} > 0.
$$

Equivalently, one may write

$$
\Cmat
\longleftarrow
\Cmat \mat P,
$$

where

$$
\mat P
=\operatorname{diag}(p_1,p_2,\ldots,p_N),
\qquad
p_i=\pm 1.
$$

The signs $p_i$ are chosen to enforce a consistent phase convention. 

The determinant is then checked so that the transformation is a proper rotation,

$$
\det \Cmat > 0.
$$

For a two-state transformation, this convention keeps the rotation angle in the range

$$
-\frac{\pi}{2}
<
\theta
<
\frac{\pi}{2}.
$$

Currently, the code enforces this final phase convention explicitly: the eigenvector phases are changed so that the diagonal elements are positive and the transformation matrix represents a proper rotation (by mutliplying the second columns of the ADT matrix by -1 if $\det \Cmat <0$)

---

## Summary of the guard logic

The guard logic can be summarised as

$$
\boxed{
\text{predict}
\rightarrow
\text{compare}
\rightarrow
\text{guard}
\rightarrow
\text{propagate or fallback}
\rightarrow
\text{store}
}
$$

More explicitly:

$$
\mat W(\mat q_0),\mat G^{\mathrm D}(\mat q_0),\mat H^{\mathrm D}(\mat q_0)
\longrightarrow
\mat W_{\mathrm{pred}}(\mat q_+)
\longrightarrow
\Cmat_{\mathrm{pred}}(\mat q_+),\mat V_{\mathrm{pred}}(\mat q_+),\mat D_{\mathrm{pred}}(\mat q_+).
$$

Then the predicted quantities are compared with the raw quantum-chemistry quantities,

$$
\mat V^{\mathrm{QC}},
\qquad
\mat G^{\mathrm A}_{\mathrm{QC}},
\qquad
\mat D_{\mathrm{QC}}.
$$

The four guards are:

$$
\begin{array}{ll}
\text{Guard 1:} &
\text{coupling-vector continuity and sign},\\[3pt]
\text{Guard 2:} &
\text{diabatic ordering or seam crossing},\\[3pt]
\text{Guard 3:} &
\text{small adiabatic energy gap},\\[3pt]
\text{Guard 4:} &
\text{failed or unusable QC calculation}.
\end{array}
$$

If none of these conditions is triggered, the point is accepted as part of a continuous region of the diabatic representation, and the propagated ADT matrix is used to transform the raw quantum-chemistry data. If any guard is triggered, the algorithm falls back to a predicted or local model so that the database is not contaminated by an unstable transformation.

This is best understood as a practical finite-subspace algorithm. In the complete Hilbert space, the ADT equation can be formulated exactly. In DD-vMCG, only a finite number of electronic states is retained, so the algorithm relies on the retained subspace being sufficiently isolated and on the neglected couplings being small. Baer's finite-subspace ADT theory gives the theoretical background for this quasi-diabatic viewpoint.

---

## References to keep near this section

- G. W. Richings and G. A. Worth, **A Practical Diabatisation Scheme for Use with the Direct-Dynamics Variational Multi-Configuration Gaussian Method**, *Journal of Physical Chemistry A* **119**, 12457-12470 (2015).
- G. Christopoulou, A. Freibert, and G. A. Worth, **Improved algorithm for the direct dynamics variational multi-configurational Gaussian method**, *Journal of Chemical Physics* **154**, 124127 (2021).
- G. W. Richings and G. A. Worth, **Multi-state non-adiabatic direct-dynamics on propagated diabatic potential energy surfaces**, *Chemical Physics Letters* **683**, 606-612 (2017).
- Á. Vibók, G. J. Halász, S. Suhai, and M. Baer, **Assigning signs to the electronic nonadiabatic coupling terms**, *Journal of Chemical Physics* **122**, 134109 (2005).
- M. Baer, **Topological effects in molecular systems: an attempt towards a complete theory**, *Chemical Physics* **259**, 123-147 (2000).
- M. Baer, **Introduction to the theory of electronic non-adiabatic coupling terms in molecular systems**, *Physics Reports* **358**, 75-142 (2002).
