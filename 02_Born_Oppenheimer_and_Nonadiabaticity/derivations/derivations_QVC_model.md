## Derivation of the Quadratic Vibronic Coupling (QVC) Model1

### 1. The Starting Point: The Conical Intersection (CI)

We want to evaluate the electronic Hamiltonian ($H_{el}$) in the diabatic basis ($\ket \phi_1$ and $|\ket\phi_2$) around a specific point in space: the Conical Intersection geometry ($\vec{R}_0$).

We define our nuclear coordinates as the displacement away from this CI: $q = \vec{R} - \vec{R}_0$. For a branching plane, we use two coordinates: $x$ and $y$. At the exact CI, $x=0$ and $y=0$.

By definition, at the CI:
1. The two states are perfectly degenerate with energy $E_0$.

2. In the diabatic basis, the states are completely uncoupled at this point.$$H_{11}(0,0) = E_0$$$$H_{22}(0,0) = E_0$$$$H_{12}(0,0) = H_{21}(0,0) = 0$$

### 2. The Taylor Expansion

To find the energy at any nearby geometry $(x,y)$, we write out a 2D Taylor series for each matrix element. The general formula for a 2D Taylor series up to the second order is:
$$
f(x,y) = f(0,0) + \left[ \frac{\partial f}{\partial x}x + \frac{\partial f}{\partial y}y \right] + \frac{1}{2} \left[ \frac{\partial^2 f}{\partial x^2}x^2 + \frac{\partial^2 f}{\partial y^2}y^2 + 2\frac{\partial^2 f}{\partial x \partial y}xy \right] + \dots
$$

We apply this expansion to the matrix elements $H_{11}$, $H_{22}$, and $H_{12}$. We typically drop $E_0$ moving forward, as it merely shifts the zero-point energy of the entire system.

### 3. First-Order Terms: Linear Vibronic Coupling (LVC)

We evaluate the first derivatives (gradients/forces) at the CI.

By convention, we align our $x$-axis (the tuning coordinate) in the direction where the slopes of the two states differ the most, setting the diagonal $y$-gradients to zero. We align our $y$-axis (the coupling coordinate) in the direction that maximizes interstate coupling.

* Tuning ($\kappa$): The linear slope that drives the diabatic energies apart.

$$\kappa_1 = \frac{\partial H_{11}}{\partial x}$$

$$\kappa_2 = \frac{\partial H_{22}}{\partial x}$$

* Coupling ($\lambda$): The linear slope that mixes the wavefunctions

$$
\lambda = \frac{\partial H_{12}}{\partial y}
$$

### 4. Second-Order Terms: Quadratic Vibronic Coupling (QVC)

We evaluate the second derivatives (the Hessian matrix) to capture the curvature of the potential energy surface. This creates the bound "bowl" that prevents energies from dropping to negative infinity.
* Harmonic Curvature ($\gamma_{xx}, \gamma_{yy}$): The spring constants along the principal axes.

    * $$\gamma_{1xx} = \frac{1}{2}\frac{\partial^2 H_{11}}{\partial x^2}$$

    * $$\gamma_{1yy} = \frac{1}{2}\frac{\partial^2 H_{11}}{\partial y^2}$$

    * (Similar terms exist for State 2)

* Bilinear Mixing ($\gamma_{xy}$): The mixed partial derivative. This term represents Duschinsky rotation (inter-mode mixing), where moving along $x$ alters the vibrational frequency along $y$. It visually "twists" the parabolic bowl diagonally.

    * $$\gamma_{1xy} = \frac{\partial^2 H_{11}}{\partial x \partial y}$$

    * $$\gamma_{2xy} = \frac{\partial^2 H_{22}}{\partial x \partial y}$$


### 5. The Full QVC Diabatic Matrix

Combining all terms from the Taylor expansion yields the full, general, non-symmetric diabatic matrix:

* State 1 (Diagonal):

    * $$H_{11}(x,y) = \kappa_1 x + \gamma_{1xx} x^2 + \gamma_{1yy} y^2 + \gamma_{1xy} xy$$

* State 2 (Diagonal):

    * $$H_{22}(x,y) = \kappa_2 x + \gamma_{2xx} x^2 + \gamma_{2yy} y^2 + \gamma_{2xy} xy$$

* Coupling (Off-Diagonal):

    * $$H_{12}(x,y) = \lambda y$$

(Note: Second-order off-diagonal terms like $\gamma_{12}xy$ can also be added here if higher-order coupling is required).

### 6. Adiabatic Energies

The physical surfaces the molecule experiences are the adiabatic energies, found by diagonalizing the $2 \times 2$ diabatic matrix $H^d$:

$$
E_{\pm}(x,y) = \frac{H_{11} + H_{22}}{2} \pm \sqrt{\left(\frac{H_{11} - H_{22}}{2}\right)^2 + H_{12}^2}
$$