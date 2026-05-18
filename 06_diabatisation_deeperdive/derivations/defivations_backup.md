# Derivation of the curl condition from the ADT equation

## Starting point 

$$
\nabla\Cmat + \mat F \Cmat = 0
$$

or its $P$subspace form:

$$
\nabla \Cmat_P + \F_P \Cmat_P = 0
$$


So for the matrix $\Cmat$ to to remain regular throughout the assumed region, it must be invertible and its elements must be analytic within that domain. In the following section, we will first show that if $\F$ is analytic and infitenely differentiable, the in an infinite subhilbert space, then $\Cmat$ indeed satisfies these requirements. Then we will also show for the case of finite-sub-Hilbert space, provided the $P$-subspace is decoupled from the $Q$-subspace, then $\Cmat_P$ also satisfy these conditions.

## Invertibility
The invertibility of $\Cmat$ or $\Cmat_P$ can be guarateed through proving that it is unitary matrix. To begin, consider 
the complex conjugate of above.

$$
\nabla \Cmat - \Cinv \F = 0
$$

where the anti-Hermitian (or anti-symmetric in the case when real adiabatic eletronic basis are employed) of $\F$ was used 
($\F_{ij} = -\F^\dagger_{ij}$). Then left multiplying above by $\Cmat$ and right multiplying above above by $\Cinv$ and add
the two:

$$
\begin{align}
\Cinv \nabla \Cmat + (\nabla \Cinv) \Cmat = \nabla(\Cinv \Cmat) = 0 \implies \Cinv \Cmat = \text{Const.}
\end{align}
$$

Theh given a proper choice of boundary condition, the constant matrix can be assumed to be identity matrix:

$$
\Cinv \Cmat=\I
$$

The above analysis also holds for a subhilbert space.

## Analyticity
Then for the ADT matrix to be analytic, the condition that $\F$ are regular in the region of concenrs is not sufficient.
FUrther, since $\Cmat$ are in general a function of severable variables (dimensiom f), and according to basic calculus, a
function of several variable is analytic in a region if, in additionaotion to infiniteley differnetiable for all vraiblees, 
the result of differection with respect to any two different cairbale is indpendent of the order of differnation. So the cfact that
$\Cmat$ satifies the ADT equation, enssure the existence of derivatives to any order for anay variable provided the $\F$ 
are anatotic in that region. SO next, we will determin the condition for mixed derivative to commute.

To this end, let's considr the $p$ and $q$ component of ADT equation.

$$
\pdv{}{q_p}\Cmat + \Fmat_p\Cmat = 0
$$

$$
\pdv{}{q_q}\Cmat + \Fmat_q\Cmat = 0
$$

wher ethe sub-index on $\F$ are used to denote the single $S\times S$ non-adiabatic coupling matrix along dimension $p$

TAke the partial derivative of the first with respect to $q$ we find:

$$
\pdv{}{q_qq_p}\Cmat + \left(\pdv{}{q_q}{\Fmat_p}\right)\Cmat +\Fmat_p\left(\pdv{}{q_q}{\Cmat}\right) = 0
$$

and sub $\pdv{}{q_q}\Cmat = -\Fmat_q \Cmat$

$$
\pdv{}{q_qq_p}\Cmat + \left(\pdv{}{q_q}{\Fmat_p}\right)\Cmat -\Fmat_p\Fmat_q \Cmat = 0
$$

Following the same procedure, take the partial derivative of the second equation with respect to $p$ and substituting the
respective 1D ADT equation. 

$$
\pdv{}{q_pq_q}\Cmat + \left(\pdv{}{q_p}{\Fmat_q}\right)\Cmat -\Fmat_q\Fmat_p \Cmat = 0
$$

For the mixed deriative to commute (independent of order of differentiation), subtracting above and aove shoudl be identically
0.

$$
\left(\pdv{}{q_q}{\Fmat_p}-\pdv{}{q_q}{\Fmat_p}\right)\Cmat=\left(\Fmat_q\Fmat_p -\Fmat_p\Fmat_q \right)\Cmat
$$

Since this must hold for any arbitary $\Cmat$, thus:

$$
\pdv{}{q_q}{\Fmat_p}-\pdv{}{q_q}{\Fmat_p} = [ \Fmat_q, \Fmat_p ]
$$

Then recall the curl and and cross product notation (considering a 3D example with component $p,q,r$). A the curl of a vector
$\mat F$ is expressed as:

$$
\text{\Curl}\quad \mat F = \left|\begin{matrix} i&j&k\\ \end{matrix} \right|
$$






## Take mixed derivatives

Compute

$$
\pdv{}{q_\beta}
\pdv{\Cmat}{q_\alpha}
$$

and

$$
\pdv{}{q_\alpha}
\pdv{\Cmat}{q_\beta}.
$$

## Equate mixed derivatives

Use equality of mixed derivatives for a differentiable $\Cmat$.

## Obtain the non-Abelian curl condition

Write the result and state the sign convention.

## Two-state Abelian limit

Show that for an effectively two-state Abelian case away from singularities, the commutator term vanishes or reduces, giving an ordinary curl-free condition.

## Interpretation

This is the compatibility condition for the existence of a path-independent ADT field.

## Caveat

At a conical intersection, the coupling field is singular; the curl condition should be considered on the punctured region away from the singularity.
