# Propagation diabatisation in Quantics: safety checks and fallbacks

For a detailed line-by-line code discussion, see [`diabat4_2`](../code+breakdown/subroutine_diabat4_2.md).

This note expands the guard logic used in the propagation diabatisation step. The purpose of this step is to take a new nuclear geometry, compare the new quantum-chemistry data with the existing DD-vMCG database, and decide whether the new ab initio data can be safely transformed into the current diabatic representation.

The main page gives the short conceptual version. This page gives the algebra and implementation interpretation.

---

## Setup

Let the closest useful database geometry be

$$
\begin{align}
\mat q_0,
\end{align}
$$

and let the new geometry be

$$
\begin{align}
\mat q_+
=\mat q_0+
\Delta\mat q.
\end{align}
$$

At the old database point, the algorithm has stored a diabatic local model,

$$
\begin{align}
\mat W(\mat q_0),
\qquad
\Gdiab(\mat q_0),
\qquad
\Hdiab(\mat q_0),
\end{align}
$$

where $\mat W$ is the diabatic potential matrix, $\Gdiab$ is the matrix of diabatic gradient vectors, and $\Hdiab$ is the matrix of diabatic Hessians. The database also stores the adiabatic-to-diabatic transformation matrix,

$$
\begin{align}
\Cmat(\mat q_0).
\end{align}
$$

The DD-vMCG database is used because the method does not pre-fit a global potential energy surface. Instead, electronic energies, gradients, Hessians, derivative couplings, and transformed diabatic quantities are stored at selected geometries and reused through local Taylor expansion and interpolation.

At the new geometry, the raw quantum-chemistry calculation provides

$$
\begin{align}
\mat V^{\mathrm{QC}}(\mat q_+),
\qquad
\Gadiab_{\mathrm{QC}}(\mat q_+),
\qquad
\mat H^{\mathrm A}_{\mathrm{QC}}(\mat q_+),
\qquad
\D_{\mathrm{QC}}(\mat q_+).
\end{align}
$$

Here $\mat V^{\mathrm{QC}}$ is diagonal in the adiabatic representation. The matrix $\D$ denotes the derivative-coupling numerator,

$$
\begin{align}
\D_{ij}
=\mel{\psi_i}{\nabla\hat H_{\mathrm{el}}}{\psi_j}.
\label{eq:pd_guard_d_numerator}
\end{align}
$$

For non-degenerate states,

$$
\begin{align}
\F_{ij}
=\frac{\D_{ij}}{V_j-V_i},
\label{eq:pd_guard_f_from_d}
\end{align}
$$

where

$$
\begin{align}
\F_{ij}
=\braket{\psi_i}{\nabla\psi_j}
\label{eq:pd_guard_f_definition}
\end{align}
$$

is the nonadiabatic coupling vector. This distinction is useful in the implementation because, for real electronic states, $\D_{ij}$ is symmetric in the state labels whereas $\F_{ij}$ is antisymmetric:

$$
\begin{align}
\D_{ij}=\D_{ji},
\qquad
\F_{ij}=-\F_{ji}.
\end{align}
$$

The transformation matrix is propagated using the ADT equation

$$
\begin{align}
\nabla\Cmat
=-\F\Cmat.
\label{eq:pd_guard_adt_equation}
\end{align}
$$

Along a short path from $\mat q_0$ to $\mat q_+$, the formal solution is

$$
\begin{align}
\Cmat(\mat q_+)
=\mathcal P
\exp
\left[
-\int_{\mat q_0}^{\mat q_+}
\F(\mat q)\cdot d\mat q
\right]
\Cmat(\mat q_0),
\label{eq:pd_guard_path_solution}
\end{align}
$$

where $\mathcal P$ denotes path ordering. In DD-vMCG this integral is evaluated along a local path between database geometries, with the derivative-coupling information estimated from the available quantum-chemistry and database data.

---

## Predicted local model at the new point

Before accepting the propagated transformation, the algorithm builds a predicted local model at $\mat q_+$.

If $\mat q_+$ is sufficiently close to $\mat q_0$, the diabatic matrix can be predicted by a second-order local expansion,

$$
\begin{align}
\left[\mat W_{\mathrm{pred}}(\mat q_+)\right]_{ij}
&=\W_{ij}(\mat q_0)
+
\Gdiab_{ij}(\mat q_0)
\cdot
\Delta\mat q
\\[3pt]
&\quad+
\frac{1}{2}
\Delta\mat q^{\mathrm T}
\Hdiab_{ij}(\mat q_0)
\Delta\mat q.
\label{eq:pd_guard_local_taylor_prediction}
\end{align}
$$

If the new geometry is not close enough to a single database point, the code uses a database interpolation. Schematically,

$$
\begin{align}
\mat W_{\mathrm{pred}}(\mat q_+)
=\sum_{a\in\mathrm{DB}}
w_a(\mat q_+)
\mat T_a(\mat q_+),
\label{eq:pd_guard_shepard_prediction}
\end{align}
$$

where $\mat T_a$ is the local Taylor model generated from database point $a$, and $w_a$ is a distance-based Shepard-type weight. In the improved DD-vMCG algorithm, only a selected local subset of useful database points is needed around the current Gaussian centre, rather than the full database at every step.

The predicted diabatic matrix is then diagonalised to obtain predicted adiabatic quantities,

$$
\begin{align}
\Cmat_{\mathrm{pred}}
\mat W_{\mathrm{pred}}
\Cmat_{\mathrm{pred}}^\dagger
=\mat V_{\mathrm{pred}}.
\label{eq:pd_guard_predicted_diagonalisation}
\end{align}
$$

The same predicted transformation can be applied to the predicted diabatic gradient matrix to obtain predicted adiabatic gradients and predicted derivative-coupling numerators:

$$
\begin{align}
\Cmat_{\mathrm{pred}}
\Gdiab_{\mathrm{pred}}
\Cmat_{\mathrm{pred}}^\dagger
=\Gadiab_{\mathrm{pred}}
+
\D_{\mathrm{pred}}.
\label{eq:pd_guard_predicted_gradient_transform}
\end{align}
$$

Here $\Gadiab_{\text{pred}}$ is diagonal in the electronic-state indices, while $\D_{\text{pred}}$ contains the off-diagonal derivative-coupling numerator vectors.

---

## Guard 1: continuity and sign of the derivative-coupling numerator

The first guard compares the predicted derivative-coupling numerator with the raw quantum-chemistry derivative-coupling numerator.

For each relevant state pair $(i,j)$, define the normalised overlap

$$
\begin{align}
\Omega_{ij}
=\frac{
\D^{\mathrm{pred}}_{ij}(\mat q_+)
\cdot
\D^{\mathrm{QC}}_{ij}(\mat q_+)
}{
\left\|
\D^{\mathrm{pred}}_{ij}(\mat q_+)
\right\|
\left\|
\D^{\mathrm{QC}}_{ij}(\mat q_+)
\right\|
}.
\label{eq:pd_guard_overlap}
\end{align}
$$

This is the cosine of the angle between the predicted and computed numerator vectors,

$$
\begin{align}
\Omega_{ij}=\cos\phi_{ij}.
\end{align}
$$

The current code branch being documented here uses

$$
\begin{align}
\left|\Omega_{ij}\right| < 0.866
\end{align}
$$

as the criterion that the vector field is no longer continuous. This corresponds to an angle larger than $30^\circ$ from parallel or antiparallel alignment.

Implementation note: the 2021 algorithm paper describes the same idea with a threshold of $1/\sqrt{2}$ or $\theta=45^\circ$. The code now uses $0.866$. 

If this condition is met, the calculated coupling is treated as unreliable. A typical reason is that the local two-state or few-state character has changed, for example because an intruder state has entered the relevant energy window. In that case, the propagated ADT branch is not trusted. Instead, the predicted transformation matrix is used to place the calculated adiabatic energies into a controlled diabatic representation.

If the overlap is large in magnitude but negative,

$$
\begin{align}
\Omega_{ij}<0,
\qquad
\left|\Omega_{ij}\right|\geq 0.866,
\end{align}
$$

then the direction is consistent but the sign is wrong. The code treats this as a phase convention problem and flips the sign of the quantum-chemistry numerator,

$$
\begin{align}
\D^{\mathrm{QC}}_{ij}
\longleftarrow
-\D^{\mathrm{QC}}_{ij}.
\end{align}
$$

Since $\F_{ij}=\D_{ij}/(V_j-V_i)$, the corresponding nonadiabatic coupling vector is also sign-flipped,

$$
\begin{align}
\F^{\mathrm{QC}}_{ij}
\longleftarrow
-\F^{\mathrm{QC}}_{ij}.
\end{align}
$$

This is not a physical change to the molecule. It is a gauge correction caused by the arbitrary sign of real adiabatic electronic eigenvectors.

A useful interpretation is:

> If the predicted and computed coupling vectors are nearly parallel but point in opposite directions, the code flips the sign and continues. If they are not close to parallel at all, the problem is not just a sign convention; the local state character may have changed.

Sign assignment for nonadiabatic couplings is a real issue in multistate systems. Continuity is useful, but continuity alone can fail when several conical intersections or several state pairs interact.

---

## Guard 2: diabatic ordering and seam crossing

The second guard compares the ordering of the predicted diabatic model at the new point with the ordering of the diabatic model at the old database point.

A simple way to express this is to define an ordering map from the diagonal diabatic elements,

$$
\begin{align}
\pi(\mat q)
=\operatorname{argsort}
\left(
W_{11}(\mat q),
W_{22}(\mat q),
\ldots,
W_{NN}(\mat q)
\right).
\label{eq:pd_guard_ordering_map}
\end{align}
$$

The guard compares

$$
\begin{align}
\pi(\mat q_0)
\qquad\text{and}\qquad
\pi_{\mathrm{pred}}(\mat q_+).
\end{align}
$$

If the ordering has changed,

$$
\begin{align}
\pi_{\mathrm{pred}}(\mat q_+)
\neq
\pi(\mat q_0),
\end{align}
$$

then the code interprets the step as crossing a seam or entering a region where the local diabatic ordering changes. The molecule is not forbidden from crossing such a region. The issue is numerical: the simple local propagation of

$$
\begin{align}
\nabla\Cmat
=-\F\Cmat
\end{align}
$$

may not give a reliable transformation across that step.

In the conceptual/original guard logic, the normal propagation branch is bypassed. The predicted transformation matrix,

$$
\begin{align}
\Cmat_{\mathrm{pred}}(\mat q_+),
\end{align}
$$

is used to rotate the new adiabatic information into the diabatic representation. A compact way to write the fallback transformation is

$$
\begin{align}
\mat W_{\mathrm{fb}}(\mat q_+)
=\Cmat_{\mathrm{pred}}^\dagger(\mat q_+)
\mat V^{\mathrm{QC}}(\mat q_+)
\Cmat_{\mathrm{pred}}(\mat q_+).
\label{eq:pd_guard_predicted_rotation_energy}
\end{align}
$$

The corresponding gradient transformation is

$$
\begin{align}
\Gdiab_{\mathrm{fb}}(\mat q_+)
=\Cmat_{\mathrm{pred}}^\dagger
\left(
\Gadiab_{\mathrm{QC}}
+
\D_{\mathrm{QC}}
\right)
\Cmat_{\mathrm{pred}}.
\label{eq:pd_guard_predicted_rotation_gradient}
\end{align}
$$

> However, the current code then routes into `optqvc` which is a Cubic path-model fallback

---

## Guard 3: small adiabatic energy gap

The third guard checks the adiabatic energy gap at the new point,

$$
\begin{align}
\Delta V^{\mathrm{QC}}_{ij}(\mat q_+)
=V^{\mathrm{QC}}_{j}(\mat q_+)
-V^{\mathrm{QC}}_{i}(\mat q_+).
\end{align}
$$

If

$$
\begin{align}
\left|
\Delta V^{\mathrm{QC}}_{ij}(\mat q_+)
\right|
<\Delta V_{\mathrm{min}},
\end{align}
$$

with

$$
\begin{align}
\Delta V_{\mathrm{min}}
=0.05\,\mathrm{eV},
\end{align}
$$

then the point is treated as lying in a near-degenerate region where the raw quantum-chemistry data are not trusted for the normal propagation branch. The improved DD-vMCG algorithm describes this as a region where the quantum chemistry is not numerically reliable for constructing the propagated transformation. In this branch, the predicted diabatic surfaces are stored in the QC database, together with the raw adiabatic data.

The numerical reason is clear from

$$
\begin{align}
\F_{ij}
=\frac{\D_{ij}}{V_j-V_i}.
\end{align}
$$

When $V_j-V_i$ is very small, direct division by the gap can produce an unstable coupling vector. This is not a statement that small gaps are unphysical. Small gaps are exactly where nonadiabatic effects are important. The guard only says that the direct numerical construction of $\F_{ij}$ from raw quantum-chemistry data is unsafe at that step.

Symbolically, the stored diabatic model is therefore taken from a predicted or local fallback model,

$$
\begin{align}
\mat W^{\mathrm D}(\mat q_+)
\longleftarrow
\mat W_{\mathrm{fb}}(\mat q_+),
\end{align}
$$

while the raw adiabatic data are retained as diagnostic information.

> In current implementation, the prediced diabatic model are further tuned with the fall back QVC model as described later on this page
---

## Guard 4: failed or unusable quantum-chemistry calculation

The fourth guard handles cases where the quantum-chemistry calculation fails or returns unusable data. Examples include failed CASSCF convergence, inconsistent electronic-state ordering, missing derivative-coupling data, or numerical output that cannot be reconciled with the local database prediction.

If the quantum-chemistry calculation fails, the algorithm does not store the failed raw data as valid ab initio data. Instead, it stores the predicted diabatic surfaces and the corresponding predicted adiabatic surfaces:

$$
\begin{align}
\mat W^{\mathrm D}(\mat q_+)
\longleftarrow
\mat W_{\mathrm{pred}}(\mat q_+),
\end{align}
$$

and

$$
\begin{align}
\mat V^{\mathrm A}(\mat q_+)
\longleftarrow
\Cmat_{\mathrm{pred}}(\mat q_+)
\mat W_{\mathrm{pred}}(\mat q_+)
\Cmat_{\mathrm{pred}}^\dagger(\mat q_+).
\end{align}
$$

This guard separates two different problems:

1. physical nonadiabatic behaviour, where the electronic states are genuinely close or strongly coupled;
2. unusable electronic-structure output, where the calculation itself cannot be trusted.

Only the first should influence the physical interpretation of the dynamics. The second is an implementation and data-quality issue.

---

## Cubic path-model fallback

The normal branch of propagation diabatisation obtains the local adiabatic-to-diabatic transformation by integrating the derivative-coupling field along a path in nuclear configuration space. In the DD-vMCG implementation this is motivated by

$$
\begin{align}
\nabla\Cmat
\approx
-\F\Cmat.
\end{align}
$$

The approximation is finite-subspace dependent: couplings to excluded electronic states leave a non-removable residual component. The propagated transformation is most reliable where the removable coupling between the retained states dominates, especially near crossings included in the retained state manifold.

When the implementation's safety checks indicate that direct propagation from the selected database point is unreliable, the code may enter a fallback branch implemented in `optqvc`. This branch constructs a one-dimensional diabatic model along the displacement from the database point to the current geometry,

$$
\begin{align}
\mat q(x)
=\mat q_0+
\frac{x}{L}\Delta\mat q,
\qquad
x\in[0,L].
\end{align}
$$

The local model can be written schematically as

$$
\begin{align}
\mat V_d(x)
=\mat A
+
\mat Bx
+
\mat Q_2x^2
+
\mat Kx^3,
\label{eq:pd_guard_cubic_path_model}
\end{align}
$$

where $\mat A$, $\mat B$, and $\mat Q_2$ are fixed by the database point and only the symmetric cubic correction $\mat K$ is optimised. The optimisation asks the endpoint model to reproduce the target adiabatic energies and the projected endpoint adiabatic derivative matrix. The returned transformation is then used by the later transformation step to construct the diabatic quantities used by DD-vMCG.

For the algebra of this cubic endpoint fit, see [QVC path model](../derivations/derivations_qvc_path_model.md). For implementation details, see [`optqvc`](../code_breakdown/propagation_diabatisation/optqvc.md).

---

## Normal branch: propagation diabatisation

If none of the guards is triggered, the new point is treated as lying in a continuous region of the current diabatic representation. The transformation matrix is then propagated from $\mat q_0$ to $\mat q_+$.

The formal propagation is

$$
\begin{align}
\Cmat(\mat q_+)
=\mathcal P
\exp
\left[
-\int_{\mat q_0}^{\mat q_+}
\F(\mat q)\cdot d\mat q
\right]
\Cmat(\mat q_0).
\end{align}
$$

In the local implementation, the path is normally a straight path between the old database point and the new point,

$$
\begin{align}
\mat q(s)
=\mat q_0+s\Delta\mat q,
\qquad
0\leq s\leq 1.
\end{align}
$$

Define

$$
\begin{align}
\mat A
=\int_0^1
\F(\mat q(s))\cdot\Delta\mat q\,ds.
\end{align}
$$

Then

$$
\begin{align}
\Cmat(\mat q_+)
\approx
\exp(-\mat A)
\Cmat(\mat q_0).
\end{align}
$$

Because a direct numerical approximation to the exponential may not preserve unitarity exactly, the implementation uses a symmetrised Cayley-like rearrangement,

$$
\begin{align}
\exp\left(\frac{1}{2}\mat A\right)
\Cmat(\mat q_+)
=\exp\left(-\frac{1}{2}\mat A\right)
\Cmat(\mat q_0),
\end{align}
$$

so that

$$
\begin{align}
\Cmat(\mat q_+)
=\left[
\exp\left(\frac{1}{2}\mat A\right)
\right]^{-1}
\exp\left(-\frac{1}{2}\mat A\right)
\Cmat(\mat q_0).
\end{align}
$$

This is the numerical form of the propagated ADT idea used in practical DD-vMCG calculations.

The final diabatic energy matrix is then obtained from the raw quantum-chemistry adiabatic energies,

$$
\begin{align}
\mat W^{\mathrm D}(\mat q_+)
=\Cmat^\dagger(\mat q_+)
\mat V^{\mathrm{QC}}(\mat q_+)
\Cmat(\mat q_+).
\label{eq:pd_guard_normal_w}
\end{align}
$$

The final diabatic gradient matrix is similarly obtained from the adiabatic gradients and derivative-coupling numerators,

$$
\begin{align}
\Gdiab(\mat q_+)
=\Cmat^\dagger(\mat q_+)
\left(
\Gadiab_{\mathrm{QC}}(\mat q_+)
+
\D_{\mathrm{QC}}(\mat q_+)
\right)
\Cmat(\mat q_+).
\label{eq:pd_guard_normal_g}
\end{align}
$$

This equation is important because it makes clear that the database prediction does not replace the quantum-chemistry calculation in the normal branch. The prediction is used to choose a stable transformation and to check for unsafe cases. Once the normal branch is accepted, the raw quantum-chemistry data are transformed into the diabatic representation.

---

## Final phase convention

Before the final adiabatic-to-diabatic transformation is stored, the phase of the eigenvectors used to form the transformation matrix is adjusted.

For real electronic states, the electronic eigenvectors are defined only up to a sign. Therefore, columns of $\Cmat$ may be multiplied by $\pm1$ without changing the underlying adiabatic energies. The implementation fixes this freedom by choosing signs so that the diagonal elements of the transformation matrix are positive where possible,

$$
\begin{align}
C_{ii}>0.
\end{align}
$$

Equivalently,

$$
\begin{align}
\Cmat
\longleftarrow
\Cmat\mat P,
\end{align}
$$

where

$$
\begin{align}
\mat P
=\operatorname{diag}(p_1,p_2,\ldots,p_N),
\qquad
p_i=\pm1.
\end{align}
$$

The determinant is then checked so that the transformation is a proper rotation,

$$
\begin{align}
\det\Cmat>0.
\end{align}
$$

For a two-state transformation, this convention keeps the rotation angle in the range

$$
\begin{align}
-\frac{\pi}{2}
<
\theta
<
\frac{\pi}{2}.
\end{align}
$$

In the two-state implementation, if the determinant is negative after the diagonal sign convention has been applied, this may be corrected by multiplying one column of the ADT matrix, for example the second column, by $-1$. This is a phase convention, not a physical change.

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
\begin{align}
\mat W(\mat q_0),
\Gdiab(\mat q_0),
\Hdiab(\mat q_0)
&\longrightarrow
\mat W_{\mathrm{pred}}(\mat q_+)\\
&\longrightarrow
\Cmat_{\mathrm{pred}}(\mat q_+),
\mat V_{\mathrm{pred}}(\mat q_+),
\D_{\mathrm{pred}}(\mat q_+).
\end{align}
$$

Then the predicted quantities are compared with the raw quantum-chemistry quantities,

$$
\begin{align}
\mat V^{\mathrm{QC}},
\qquad
\Gadiab_{\mathrm{QC}},
\qquad
\D_{\mathrm{QC}}.
\end{align}
$$

The four guards are

$$
\begin{array}{ll}
\text{Guard 1:} & \text{coupling-vector continuity and sign},\\[3pt]
\text{Guard 2:} & \text{diabatic ordering or seam crossing},\\[3pt]
\text{Guard 3:} & \text{small adiabatic energy gap},\\[3pt]
\text{Guard 4:} & \text{failed or unusable QC calculation}.
\end{array}
$$

If none of these conditions is triggered, the point is accepted as part of a continuous region of the diabatic representation, and the propagated ADT matrix is used to transform the raw quantum-chemistry data. If a guard is triggered, the algorithm falls back to a predicted or local model so that the database is not contaminated by an unstable transformation.

This is a practical finite-subspace algorithm. In the complete Hilbert space, the ADT equation can be formulated exactly. In DD-vMCG, only a finite number of electronic states is retained, so the algorithm relies on the retained subspace being sufficiently isolated and on the neglected couplings being small. Baer's finite-subspace ADT theory gives the theoretical background for this quasi-diabatic viewpoint.

---

## References to keep near this section

- G. W. Richings and G. A. Worth, **A Practical Diabatisation Scheme for Use with the Direct-Dynamics Variational Multi-Configuration Gaussian Method**, *Journal of Physical Chemistry A* **119**, 12457--12470 (2015).
- G. Christopoulou, A. Freibert, and G. A. Worth, **Improved algorithm for the direct dynamics variational multi-configurational Gaussian method**, *Journal of Chemical Physics* **154**, 124127 (2021).
- G. W. Richings and G. A. Worth, **Multi-state non-adiabatic direct-dynamics on propagated diabatic potential energy surfaces**, *Chemical Physics Letters* **683**, 606--612 (2017).
- Á. Vibók, G. J. Halász, S. Suhai, and M. Baer, **Assigning signs to the electronic nonadiabatic coupling terms**, *Journal of Chemical Physics* **122**, 134109 (2005).
- M. Baer, **Topological effects in molecular systems: an attempt towards a complete theory**, *Chemical Physics* **259**, 123--147 (2000).
- M. Baer, **Introduction to the theory of electronic non-adiabatic coupling terms in molecular systems**, *Physics Reports* **358**, 75--142 (2002).
