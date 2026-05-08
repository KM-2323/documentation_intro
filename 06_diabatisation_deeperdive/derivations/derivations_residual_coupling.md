## Residual coupling
Let:

$$\begin{align}
    \mat V_{ij} = \mel{\varphi_i}{\hat H_{el}}{\varphi_j}
\end{align}$$

be the potential electronic coupling between diabatic states. 

Strictly diabatic is when:
$$\begin{align}
    \braket{\varphi_i}{\nabla_\mat R\varphi_j}=0,\qquad \forall i,j
\end{align}$$

and also:

$$\begin{align}
    \Cmat_{ji} = \braket{\psi_j}{\varphi_i}
\end{align}$$

Then the gradient is:

$$\begin{align}
     \nabla\Cmat_{ji} = \braket{\nabla\psi_j}{\varphi_i}+\braket{\psi_j}{\nabla\varphi_i}
\end{align}$$

Assume that the sets of adiabatic and diabatic states are individually complete:

$$\begin{align}
     \nabla\Cmat_{ji} &= \sum_k\braket{\nabla\psi_j}{\psi_k}\braket{\psi_k}{\varphi_i}+\sum_k\braket{\psi_j}{\varphi_k}\braket{\varphi_k}{\nabla\varphi_i}
\end{align}$$

Assuming strictly diabatic then the second term is 0. But since we are dealing with quasi-diabatic representation, this will not strictly hold. But if we suppose the couplings are sufficiently small:

$$\begin{align}
     \nabla\Cmat_{ji} &= \sum_k\braket{\nabla\psi_j}{\psi_k}\braket{\psi_k}{\varphi_i}+\sum_k\braket{\psi_j}{\varphi_k}\underbrace{\braket{\varphi_k}{\nabla\varphi_i}}_{\text{small}}\\
      \nabla\Cmat_{ji} &\approx   \sum_k\braket{\nabla\psi_j}{\psi_k}\braket{\psi_k}{\varphi_i}\\
        \nabla\Cmat_{ji} &\approx  -\sum_k\braket{\psi_j}{\nabla\psi_k}\Cmat_{ki}=-\sum_k\F_{jk}\Cmat_{ki}\\
\end{align}$$

So:

$$\begin{align}
    \nabla \Cmat \approx -\F \Cmat
\end{align}$$

The residual coupling is:

$$\begin{align}
    (\F^\text{res})_{ij} = \mel{\varphi_i}{\nabla}{\varphi_j}
\end{align}$$

where $\ket{\varphi_i}$ and $\ket{\varphi_j}$ are the diabatic states. Since:

$$\begin{align}
    \nabla\ket{\varphi_j}& = \nabla\sum_k\ket{\psi_k}\Cmat_{kj} =\sum_k \ket{\nabla\psi_k}\Cmat_{kj} + \sum_k \ket{\psi_k}\left(\nabla\Cmat \right)_{kj}
    \\
    \bra{\varphi_i}& = \sum_l\left(\ket{\psi_l}\Cmat_{li}\right)^\dagger = \sum_l\Cmat_{li}^*\bra{\psi_l} = \sum_l (\Cmat^\dagger)_{il}\bra{\psi_l}
\end{align}$$

(Quick mental check, when doing bra, you take dagger of the components. Then since the li component of matrix C is scalar, so dagger is effectively taking tthe complex conjugate. So I have $C_{li}^{\*}$. Then by definition the il component of the matrix $\Cinv$ is the complex conjugate of the li component of matrix $\Cmat$)
Hence:

$$\begin{align}
     (\F^\text{res})_{ij}& = \sum_{l} (\Cmat^\dagger)_{il}\bra{\psi_l}\left(\sum_k \left(\nabla\ket{\psi_k}\right)\Cmat_{kj} + \sum_k \ket{\psi_k}\left(\nabla\Cmat \right)_{kj}\right)\\
     &= \sum_{lk} (\Cmat^\dagger)_{il}\braket{\psi_l}{\nabla\psi_k}\Cmat_{kj} + \sum_{lk}(\Cmat^\dagger)_{il}\braket{\psi_l}{\psi_k}\left(\nabla\Cmat \right)_{kj}\\
      &= \sum_{lk} (\Cmat^\dagger)_{il}\braket{\psi_l}{\nabla\psi_k}\Cmat_{kj} + \sum_{lk}(\Cmat^\dagger)_{il}\delta_{lk}\left(\nabla\Cmat \right)_{kj}
     \\ &= \sum_{lk} (\Cmat^\dagger)_{il}(\F)_{lk}\Cmat_{kj} + \sum_{l}(\Cmat^\dagger)_{il}\left(\nabla\Cmat \right)_{lj}
\end{align}$$

Hence:

$$\begin{align}
    \F^\text{res} = \Cinv \F\Cmat + \Cinv \nabla\Cmat\quad  \F^\text{res} \in \mathbb{C}^{ n\times n\times f}
\end{align}$$

Now, if we further consider the $\F$ as two parts 1. the longitudinal/removable and the 2. transverse part/non-removable part:

$$\begin{align}
    \F=\F_a+\F_b
\end{align}$$

implying:
$$\begin{align}
    \nabla \Cmat = -\F_a\Cmat
\end{align}$$

Then:

$$\begin{align}
    \F^\text{res} &= \Cinv \F_a\Cmat + \Cinv \F_b\Cmat - \Cinv \F_a\Cmat
    \\
    &=\Cinv \F_b\Cmat
\end{align}$$

So quite clearly, the measured residual coupling measuree the non-removable coupling.