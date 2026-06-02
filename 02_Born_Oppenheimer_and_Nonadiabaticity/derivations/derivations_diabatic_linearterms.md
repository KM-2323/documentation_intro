### The On-Diagonal Diabatic Derivative

At the specific coordinate $q_0$, the transformation between the adiabatic and diabatic bases is the identity matrix, meaning the wavefunctions are identical: $\ket{\varphi_i} = \ket{\psi_i^{(a)}}$. 

Therefore, the diabatic matrix element is exactly equal to the adiabatic potential $V_i$ at this point:

$$ \mel{\varphi_i}{H_{el}}{\varphi_i} = V_i $$

To find the gradient of this term, we take the derivative with respect to the nuclear coordinate $q_\alpha$. Because the adiabatic states are exact eigenstates of the electronic Hamiltonian $H_{el}$, we can apply the **Hellmann-Feynman theorem**. This theorem dictates that the derivative of the eigenvalue (the potential) is equal to the expectation value of the derivative of the Hamiltonian:

$$ \pder{q_\alpha} V_i = \mel{\psi_i^{(a)}}{\pdv{H_{el}}{q_\alpha}}{\psi_i^{(a)}} $$

Putting the equalities together yields:

$$ \kappa_{\alpha,i} = \pder{q_\alpha} \mel{\varphi_i}{H_{el}}{\varphi_i} = \pder{q_\alpha} V_i = \mel{\psi_i^{(a)}}{\pdv{H_{el}}{q_\alpha}}{\psi_i^{(a)}} $$

---

###  The Off-Diagonal Diabatic Derivative

We start by taking the derivative of the off-diagonal diabatic matrix element, expanding it using the product rule. This generates three terms:

$$ \lambda_\alpha = \pder{q_\alpha} \mel{\varphi_j}{H_{el}}{\varphi_i} $$

$$ \lambda_\alpha = \mel{\pdv{\varphi_j}{q_\alpha}}{H_{el}}{\varphi_i} + \mel{\varphi_j}{\pdv{H_{el}}{q_\alpha}}{\varphi_i} + \mel{\varphi_j}{H_{el}}{\pdv{\varphi_i}{q_\alpha}} $$

 Insert the resolution of the identity operator, $\sum_k \ket{\varphi_k}\bra{\varphi_k} = I$, right between the Hamiltonian and the derivative of the wavefunction in term 3:

$$ \text{Term 3} = \sum_k \mel{\varphi_j}{H_{el}}{\varphi_k} \braket{\varphi_k}{\pdv{\varphi_i}{q_\alpha}} $$

The second bracket in this expression is the exact definition of the derivative coupling vector in the diabatic basis, $d_{k2}^{(d)}$:

$$ d_{ki}^{(d)} = \braket{\varphi_k}{\pdv{\varphi_i}{q_\alpha}} $$

By definition, the derivative coupling between states in a strictly diabatic basis is zero. Therefore, $d_{k2}^{(d)} = 0$ for all $k$, and **Term 3 evaluates entirely to zero.**

By using the same logic and the property that $\braket{\pdv{\varphi_1}{q}}{\varphi_k} = - \braket{\varphi_1}{\pdv{\varphi_k}{q}}$, the vanishing derivative coupling causes **Term 1 to also evaluate entirely to zero.**

Because the derivative couplings vanish, the derivatives of the wavefunctions don't contribute. The three-term expansion collapses down to just the middle term:

$$ \pder{q_\alpha} \mel{\varphi_j}{H_{el}}{\varphi_i} = \mel{\varphi_j}{\pdv{H_{el}}{q_\alpha}}{\varphi_i} $$

Finally, we apply the same fact used in Equation (57): exactly at the coordinate point $q_0$, $\ket{\varphi_j} = \ket{\psi_1^{(a)}}$ and $\ket{\varphi_i} = \ket{\psi_2^{(a)}}$. Substituting the adiabatic functions into our surviving term yields Equation (58):

$$ \lambda_\alpha = \mel{\psi_1^{(a)}}{\pdv{H_{el}}{q_\alpha}}{\psi_2^{(a)}} $$