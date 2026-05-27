In the main text, it is seen that the transformed derivative coupling is defined as

$$
\begin{align}
(\F^{\mathrm{res}})_{ij}
=\braket{\varphi_i}{\nabla_{\mat R}\varphi_j}.
\label{eq:fres_diab}
\end{align}
$$

where $\varphi_i$ is the quasi-diabtic bassis. To find the derivative of the quasi-diabatic basis substitute the relation between quasi-diabatic basis and adiabatic basis ($\ket\varphivec = \ket\psivec \Cmat$)

$$
\begin{align}
    \nabla\ket{\varphi_j}& = \nabla\sum_k\ket{\psi_k}\mat C_{kj} =\sum_k \ket{\nabla\psi_k}\mat C_{kj} + \sum_k \ket{\psi_k}\left(\nabla\mat C \right)_{kj}
\end{align}
$$

and the bra:

$$
\begin{align}
\bra{\varphi_i}& = \sum_l\left(\ket{\psi_l}\mat C_{li}\right)^\dagger = \sum_l\mat C_{li}^*\bra{\psi_l} = \sum_l (\mat C^\dagger)_{il}\bra{\psi_l}
\end{align}
$$

Now substituting above into \eqref{eq:fres_diab}

$$
\begin{align}
(\F^\text{res})_{ij}& = \sum_{l} (\mat C^\dagger)_{il}\bra{\psi_l}\left(\sum_k \left(\nabla\ket{\psi_k}\right)\mat C_{kj} + \sum_k \ket{\psi_k}\left(\nabla\mat C \right)_{kj}\right)\\
&= \sum_{lk} (\mat C^\dagger)_{il}\braket{\psi_l}{\nabla\psi_k}\mat C_{kj} + \sum_{lk}(\mat C^\dagger)_{il}\braket{\psi_l}{\psi_k}\left(\nabla\mat C \right)_{kj}\\
&= \sum_{lk} (\mat C^\dagger)_{il}\braket{\psi_l}{\nabla\psi_k}\mat C_{kj} + \sum_{lk}(\mat C^\dagger)_{il}\delta_{lk}\left(\nabla\mat C \right)_{kj}
\\ &= \sum_{lk} (\mat C^\dagger)_{il}(\F)_{lk}\mat C_{kj} + \sum_{l}(\mat C^\dagger)_{il}\left(\nabla\mat C \right)_{lj}
\end{align}
$$

Therefore

$$
\begin{align}
\boxed{
\F^{\mathrm{res}}
=\Cmat^\dagger\F\Cmat
+\Cmat^\dagger\nabla_{\mat R}\Cmat.
}
\label{eq:residual_coupling_unitary}
\end{align}
$$