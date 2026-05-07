## Theory and brief algorithmic breakdown of propagation diabatisation implemented in quantics

Given a closest DB point to current geometry, $\mat q$, the adiabatic-to-diabatic matrix $\Cmat(\mat q)$, and the diabatic energy matrix $\W(\mat q)$. diabatic gradient matric $$

The current/reference geometry is at $\mat q_+ = \mat q + \Delta \mat q$

If the current geometry falls within a threshold, $\delta\mat q\leq \mat q_{threshold}$, use shifted taylor expansion to second order to obtain the diabatic Hamiltonain $\W(\mat q_+)$ using $\W(\mat q)$ as the reference.

Else, predict the diabatic Hamiltonian at the new point using Shepard interpolation(the code resorts to the closest 10 neighbours), form the diabatic model $\W(\mat q_+)$. Then obtain the prediced adiabatic energy and ADT matrix through:

$$
 \Cmat_\text{pred}(\q_+)\W(\mat q_+)(q_+)\Cmat^\dagger_\text{pred}(\q_+)=\V^{\text{pred}}(q_+)
$$

Then use $\Cmat$ on the diabatic gradient
