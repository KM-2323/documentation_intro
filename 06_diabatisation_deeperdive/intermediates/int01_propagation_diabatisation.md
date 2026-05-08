## Brief Theoretical Background

For more detailed exploration on this topic ranging from residual coupling, its original refer to [text](propagation_diabatisation_deepdive/analyticity_unique_existence.md), and  [text](propagation_diabatisation_deepdive/topological_spin.md)

## Brief algorithmic breakdown of propagation diabatisation implemented in quantics

For a detailed line to line breakdown refer to [code_propagation_diabatisation](diabatisation_code/code_propagation_diabatisation.md)

Given a closest DB point to current geometry, $\mat q$, the adiabatic-to-diabatic matrix $\Cmat(\mat q)$, and the diabatic energy matrix $\W(\mat q)$. diabatic gradient matrix $\G^{\text{D}}$ (matrix of vectors), diabatic Hessian $\Hdiab$ (matrix of matrix). To understand the relationship of adiabatic and diabatic Hessian, read [adiab_diab_relation](../derivations/derivations_adiab_diab_relation.md)  

The current/reference geometry is at $\mat q_+ = \mat q + \Delta \mat q$

If the current geometry falls within a threshold, $\delta\mat q\leq \mat q_{threshold}$, use shifted taylor expansion to second order to obtain the diabatic Hamiltonain $\W_{\text{pred}}(\mat q_+)$ using $\W(\mat q)$ as the reference.

Else, predict the diabatic Hamiltonian at the new point using Shepard interpolation(the code resorts to the closest 10 neighbours), form the diabatic energy $\W_{\text{pred}}(\mat q_+)$ and gradient $\Gdiab$ and Hessian. Then obtain the prediced adiabatic energy and ADT matrix through:

$$
 \Cmat_\text{pred}(\mat q_+)\W_{\text{pred}}(\mat q_+)(q_+)\Cmat^\dagger_\text{pred}(\mat q_+)=\V_{\text{pred}}(q_+)
$$

Then use $\Cmat_\text{pred}$ on the diabatic gradient matrix to obtain adiabatic gradient and derivative coupling $\D_{ij} = \F_{ij}(\V_{jj}-\V_{ii})$ (for derivation see [adiab_diab_relation](../derivations/derivations_adiab_diab_relation.md) ):

$$
\Cmat_\text{pred}(\mat q_+)  \Gdiab(\mat q_+)\Cmat^\dagger_\text{pred}(\mat q_+) = \Gadiab_{\text{pred}} + \D_{\text{pred}}
$$

where $\Gadiab$ is the matrix of adiabiabatic gradient vector (diagonal) and $\D$ is the matrix of derivtive coupling vectors (which has zeroes along its diagonal and symmetric).

Then the following Guards are ran:

1. **Guard 1 (continuity of $\F$)**

    form:

    $$
    \frac{\D_{\text{pred}}(\mat q_+)\cdot\D_{\text{QC}}(\mat q_+)}{|\D_{\text{pred}}(\mat q_+)||\D_{\text{QC}}(\mat q_+)|} = \cos(\phi)
    $$

    if $\text{abs}\left({\cos(\phi)}\right)<0.866$ (if $\phi>30^{\circ}$), this imply the vector vield is not continuos and is an intruder state. This is because in a self-consistent 2-state manifold, $\D_{12}$ must vary smoothly with nuclear configuration, a smooth vector field. A change $>30^{\circ}$ between predicted and actual raw QC calcultion indicates the dominant coupling vector has chanegd character. The log this in the output and declare the angle of the intruder state.

    If $\cos\phi<0$ and is sufficiently large, pairwise sign fixes are applied:

    $$\D_{\text{QC}} -\rightarrow -\D_{\text{QC}}$$. Then resort to normal diabatisation scheme



2. **Guard 2 (seam crossing and ordering)**

    Compare the ordering index of the new predicted diabatic energy $\W_{\text{pred}}(\mat q_+)$ and the closest point $\W_(\mat q)$. If the order is inconsistent, the conical intersection seam is crossed while taking the step and integration of the transformation matrix cannot account for this. Then the diabatic model at the closest point, $\W(\mat q)$,  $\Gdiab(\mat q)$  and $\Hdiab(\mat q)$,  along with the calculated raw QC calculation, $\V_{\text{QC}}(\mat q_+),\Gadiab_{\text{QC}}(\mat q_+),\Hadiab_{\text{QC}}(\mat q_+), \D_{\text{QC}}(\mat q_+)$ are feed into a cubic vibronic coupling model for optimisation 

    $$
    \W_{\text{qvc}}(\mat q_+) = \W(\mat q) + \left[\Gdiab(\mat q)\cdot \Delta\mat q\right] \mat q_+\left[(\Delta\mat q)^\text{T}\cdot\Hdiab(\mat q)\cdot\Delta\mat q\right]\mat q_+^2+\mat Z\mat q_+^3
    $$

    where it aims to minimise the projected adiabatic energy $\V_{\text{proj}}(\mat q_+)$ , adiabatic derivative coupling $\D_{\text{proj}}(\mat q_+)$, and diabatic gradient $\G_{\text{proj}}(\mat q_+)$ through optimising $\mat Z$. (I know it is unlike the normal Taylor model where 1/2x^THx, but it is how it is implemented in code). Then diagnolise the optimised qvc model:

    $$
    \Cmat_{\text{QVC}}(\mat q_+)\W_{\text{QVC}}(\mat q_+)\Cmat_{\text{QVC}}^\text{T}(\mat q_+)=\V_{\text{QVC}}(\mat q_+)
    $$

    Form diabatic gradient through:

    $$
    \Cmat_{\text{QVC}}^\text{T}(\Gadiab_{\text{QC}} + \D_{\text{QC}})\Cmat_{\text{QVC}} = \Gdiab_{\text{QVC}}
    $$

    and store the $\Cmat_{\text{QVC}}(\mat q_+)$, $\W_{\text{QVC}}$, and $\Gdiab_{\text{QVC}}$ along with the raw QV calculation

3. **Guard 3 (small adiabatic energy gap)**
    The energy gap of the adiabatic states at the new point is checked. If it is less than a threshold apart (0.05 eV), this is classed as a region of degeneracy where the quantum chemistry is not to be trusted. The predicted diabatic surfaces (using the same QVC optimisation described in Guard 2) are stored in the QC database, along with the adiabatic raw data


4. **Guard 4 (failed calculations)**
    If the QC calculation has failed (e.g., CAS has failed to converge), the predicted diabatic surfaces through either second order Taylor expansion from closted data point or Shepard interpolation with nearest 10 neighbour are stored along with the projected adiabatic surfaces.

If none of the above condition is met, the points are in a continuous part of the diabatic space and the propagation diabatisation is used to propagate the transformation matrix from the old to new point, to obtain the new diabatic potentials from the adiabatic data.

Lastly,  before the final adiabatic-to-diabatic transformation
is made, the phase of the eigenvectors that forms the transformation is changed to ensure that the diagonal elements are positive. Then the determinant of this matrix is chekced to ensure it is > 0, to ensure a proper rotation between $\frac{\pi}{2}$ and $-\frac{\pi}{2}$, by multiplying the second column of the ADT matrix by -1. 