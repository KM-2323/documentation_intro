Firts, apply the transformed operator to an arbitrary function $\Psi$:

$$\mathbf{C}^{-1} \left( \nabla_{\mathbf{R}} + \mathbf{F} \right) \mathbf{C} \Psi$$

Next, distribute the inner terms:

$$= \mathbf{C}^{-1} \Big[ \nabla_{\mathbf{R}} (\mathbf{C}\Psi) + \mathbf{F}(\mathbf{C}\Psi) \Big]$$

Then apply the product rule to the gradient term:The gradient acts on the product of $\mathbf{C}$ and $\Psi$, yielding two terms: $\nabla_{\mathbf{R}}(\mathbf{C}\Psi) = (\nabla_{\mathbf{R}}\mathbf{C})\Psi + \mathbf{C}(\nabla_{\mathbf{R}}\Psi)$. Substituting this back gives:

$$= \mathbf{C}^{-1} \Big[ (\nabla_{\mathbf{R}}\mathbf{C})\Psi + \mathbf{C}(\nabla_{\mathbf{R}}\Psi) + \mathbf{F}\mathbf{C}\Psi \Big]$$

Follwed by distributing the inverse matrix $\mathbf{C}^{-1}$ from the left:

$$= \mathbf{C}^{-1}(\nabla_{\mathbf{R}}\mathbf{C})\Psi + \mathbf{C}^{-1}\mathbf{C}(\nabla_{\mathbf{R}}\Psi) + \mathbf{C}^{-1}\mathbf{F}\mathbf{C}\Psi$$

Then, simplify using the identity $\mathbf{C}^{-1}\mathbf{C} = \mathbf{I}$:

$$= \mathbf{C}^{-1}(\nabla_{\mathbf{R}}\mathbf{C})\Psi + \nabla_{\mathbf{R}}\Psi + \mathbf{C}^{-1}\mathbf{F}\mathbf{C}\Psi$$

Lastly, rearrange the terms to group the operators:

$$= \left[ \nabla_{\mathbf{R}} + \mathbf{C}^{-1}\mathbf{F}\mathbf{C} + \mathbf{C}^{-1}(\nabla_{\mathbf{R}}\mathbf{C}) \right] \Psi$$

Since this equality holds for any arbitrary test function $\Psi$, we can remove $\Psi$ from both sides to establish the fundamental operator equivalence:

$$\mathbf{C}^{-1} \left( \nabla_{\mathbf{R}} + \mathbf{F} \right) \mathbf{C} = \nabla_{\mathbf{R}} + \left( \mathbf{C}^{-1}\mathbf{F}\mathbf{C} + \mathbf{C}^{-1}\nabla_{\mathbf{R}}\mathbf{C} \right)$$