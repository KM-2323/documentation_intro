Let $\{\ket{\psi_i}\}$ denote a complete set of adiabatic basis and $\{\ket{\varphi_i}\}$ denote a set of diabatic/quasi-diabatic basis. Suppose you have a two state system. Then the two basis are connected through the adiabatic-to-diabatic (ADT) transformation matrix $\Cmat$ via:

$$
\begin{align}
\begin{pmatrix}
\ket{\varphi_1} ,& \ket{\varphi_2}
\end{pmatrix} = \begin{pmatrix}
\ket{\psi_1}, & \ket{\psi_2}
\end{pmatrix}\begin{pmatrix}
\cos\theta & \sin\theta\\
-\sin\theta & \cos\theta
\end{pmatrix}\nonumber\\
\begin{pmatrix}
\ket{\varphi_1} ,& \ket{\varphi_2}
\end{pmatrix} = \begin{pmatrix}
\cos\theta\ket{\psi_1}-\sin\theta \ket{\psi_2} ,&\sin\theta\ket{\psi_1}+ \cos\theta\ket{\psi_2}
\end{pmatrix}\nonumber
\end{align}
$$

such that:

$$
\begin{align}
\ket{\varphi_1}=\cos\theta\ket{\psi_1}-\sin\theta \ket{\psi_2}\\
\ket{\varphi_2} = \sin\theta\ket{\psi_1}+ \cos\theta\ket{\psi_2}
\end{align}
$$

Equally:

$$
\begin{align}
\begin{pmatrix}
\ket{\psi_1}, & \ket{\psi_2}
\end{pmatrix} = \begin{pmatrix}
\ket{\varphi_1} ,& \ket{\varphi_2}
\end{pmatrix}\begin{pmatrix}
\cos\theta & -\sin\theta\\
\sin\theta & \cos\theta
\end{pmatrix}\nonumber\\
\begin{pmatrix}
\ket{\psi_1}, & \ket{\psi_2}
\end{pmatrix} = \begin{pmatrix}
cos\theta\,\ket{\varphi_1}
+\sin\theta\,\ket{\varphi_2} ,&\sin\theta\ket{\psi_1}+ \cos\theta\ket{\psi_2}
\end{pmatrix}\nonumber
\end{align}
$$

such that

$$
\begin{align}
\ket{\psi_1}
&=\cos\theta\,\ket{\varphi_1}
+\sin\theta\,\ket{\varphi_2},\\
\ket{\psi_2}
&=\sin\theta\,\ket{\varphi_1}
-\cos\theta\,\ket{\varphi_2}.
\label{eq:adiabatic_states_from_diabatic_basis}
\end{align}
$$