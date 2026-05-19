## Integral formulation and path (in)dependence of the ADT matrix

Let $(p,q)$ be two nuclear coordinates. Let $\Cmat(p,q)$ be the adiabatic-to-diabatic transformation (ADT) matrix, and let $\mat{F}_p(p,q)$ and $\mat{F}_q(p,q)$ be the nonadiabatic coupling matrices (real case: antisymmetric matrices). The ADT equations read:

$$
\begin{aligned}
\partial_p \Cmat(p,q) + \mat{F}_p(p,q)\Cmat(p,q) &= 0, \\
\partial_q \Cmat(p,q) + \mat{F}_q(p,q)\Cmat(p,q) &= 0.
\end{aligned}
$$

Integral equations along two rectangular pathsFix an initial point $P(p_0,q_0)$ and a final point $Q(p,q)$.Path 1: $p$ then $q$.Integrate the $p$-equation at fixed $q=q_0$:

$$\begin{aligned}
\int_{p_0}^{p} dp'\partial_{p'} \Cmat(p',q_0) &=-\int_{p_0}^{p} dp'\,\mat{F}_p(p',q_0)\Cmat(p',q_0)\\
\Cmat(p,q_0)-\Cmat(p_0,q_0)&=-\int_{p_0}^{p} dp'\,\mat{F}_p(p',q_0)\Cmat(p',q_0)\\
\Cmat(p,q_0)&=\Cmat(p_0,q_0)-\int_{p_0}^{p} dp'\,\mat{F}_p(p',q_0)\Cmat(p',q_0).
\end{aligned}
$$

Then integrate the $q$-equation at fixed $p$:

$$\Cmat(p,q)=\Cmat(p,q_0)-\int_{q_0}^{q} dq'\,\mat{F}_q(p,q')\Cmat(p,q').$$

Substituting yields the integral equation:

$$
\boxed{
\Cmat(p,q)=\Cmat(p_0,q_0)
-\int_{p_0}^{p} dp'\,\mat{F}_p(p',q_0)\Cmat(p',q_0)
-\int_{q_0}^{q} dq'\,\mat{F}_q(p,q')\Cmat(p,q').
}
$$

Path 2: $q$ then $p$.Integrate first in $q$ at fixed $p=p_0$, then in $p$ at fixed $q$:

$$\boxed{
\widetilde{\Cmat}(p,q)=\Cmat(p_0,q_0)
-\int_{q_0}^{q} dq'\,\mat{F}_q(p_0,q')\widetilde{\Cmat}(p_0,q')
-\int_{p_0}^{p} dp'\,\mat{F}_p(p',q)\widetilde{\Cmat}(p',q).
}$$

The two resulting paths are shown in Fig. 1. Here path $\Gamma'$ is for solving Path 2 while $\Gamma''$ is for solving Path 1.Difference of the two path solutions and the curvatureFig. 1: Integral paths.Define $\Delta \Cmat(p,q)=\widetilde{\Cmat}(p,q)-\Cmat(p,q)$.For a small rectangle, write

$$p=p_0+\Delta p,\qquad q=q_0+\Delta q,\qquad \Delta p,\Delta q \ \text{small}.$$

which yields:

$$\begin{aligned}
\Delta\Cmat(p,q) &= 
-\int_{q_0}^{q_0+\Delta q} dq'\,\mat{F}_q(p_0,q')\widetilde{\Cmat}(p_0,q')
-\int_{p_0}^{p_0+\Delta p} dp'\,\mat{F}_p(p',q)\widetilde{\Cmat}(p',q)\\
&\quad + \int_{p_0}^{p_0+\Delta p} dp'\,\mat{F}_p(p',q_0)\Cmat(p',q_0)
+\int_{q_0}^{q_0+\Delta q} dq'\,\mat{F}_q(p,q')\Cmat(p,q')\\
&= 
-\int_{q_0}^{q_0+\Delta q} dq'\,\mat{F}_q(p_0,q')\Cmat(p_0,q')
-\int_{p_0}^{p_0+\Delta p} dp'\,\mat{F}_p(p',q)\Cmat(p',q)\\
&\quad + \int_{p_0}^{p_0+\Delta p} dp'\,\mat{F}_p(p',q_0)\Cmat(p',q_0)
+\int_{q_0}^{q_0+\Delta q} dq'\,\mat{F}_q(p,q')\Cmat(p,q')\\
&= -\int_{q_0}^{q_0+\Delta q} dq'\,\left(\mat{F}_q(p_0,q')\Cmat(p_0,q')-\,\mat{F}_q(p,q')\Cmat(p,q')\right) \\
&\quad + \int_{p_0}^{p_0+\Delta p} dp'\,\left(\mat{F}_p(p',q_0)\Cmat(p',q_0)-\,\mat{F}_p(p',q)\Cmat(p',q)\right)
\end{aligned}$$

Now if we inspect the first integrand difference schematically:

$$
\begin{aligned}
\G(p_0,q')-\G(p,q')\,\quad , \text{where }\G(p,q')=\mat{F}_q(p,q') \Cmat(p,q')
\end{aligned}
$$

By the fundamental theorem of calculus:

$$
\begin{aligned}
-\int_{p_0}^{p_0+\Delta p }\pdv{\G(p'',q')}{p''}dp''= \G(p_0,q')-\G(p,q')
\end{aligned}
$$

Then using the integral mean value theorem which states that for a continuous function $f(x)$ on a closed interval $[a,b]$, there exists at least one number $c$ in $[a,b]$ such that $f(c)$ equals the average value of the function. It is defined by the formula:

$$\begin{aligned}
f(c)=\frac{1}{b-a}\int_a^bf(x)dx
\end{aligned}$$

So if $\Delta p $ is small and $\partial \G$ is continuous, there exists an intermediate $\tilde{p}\in(p_0,p)$ such that:

$$\begin{aligned}
\int_{p_0}^{p_0+\Delta p}\pdv{\G(p'',q')}{p''}dp''\approx (p_0+\Delta p-p_0)\pdv{\G(\tilde p,q')}{p} = \Delta p\pdv{\G(\tilde p,q')}{p}
\end{aligned}$$

Do the analogues for the second integrand:

$$\begin{aligned}
\G(p',q_0)-\G(p',q)=-\int_{q_0}^{q_0+\Delta q}\pdv{\G(p',q'')}{q''}dq'' \approx-\Delta q\pdv{\G(p',\tilde{q})}{q}
\end{aligned}$$

So the overall equation transforms as follows:

$$\begin{aligned}
\Delta\Cmat(p,q) 
&= -\int_{q_0}^{q_0+\Delta q} dq'\,\left(\mat{F}_q(p_0,q')\Cmat(p_0,q')-\,\mat{F}_q(p,q')\Cmat(p,q')\right) \\
&\quad + \int_{p_0}^{p_0+\Delta p} dp'\,\left(\mat{F}_p(p',q_0)\Cmat(p',q_0)-\,\mat{F}_p(p',q)\Cmat(p',q)\right)\\
&= \int_{q_0}^{q_0+\Delta q} dq'\, \int_{p_0}^{p}dp''\pdv{\left( \mat{F}_q(p'',q') \Cmat(p'',q')\right)}{p''} \\
&\quad -\int_{p_0}^{p_0+\Delta p} dp'\,\int_{q_0}^{q}dq''\pdv{\left( \mat{F}_q(p',q'') \Cmat(p',q'')\right)}{q''} \\
&= \Delta p\int_{q_0}^{q_0+\Delta q} dq'\, \pder{p}\left( \mat{F}_q(\tilde p,q') \Cmat(\tilde p,q')\right) \\
&\quad -\Delta q\int_{p_0}^{p_0+\Delta p} dp'\,\pder{q}\left( \mat{F}_q(p',\tilde q) \Cmat(p',\tilde q)\right)
\end{aligned}$$

If we apply the same theorem again, assuming $\Delta q$ is small and $\partial(\mat{F}_q\Cmat)$ does not vary much over the interval $q'\in[q_0,q_0+\Delta q]$ then:

$$\begin{aligned}
\Delta p\int_{q_0}^{q_0+\Delta q} dq'\, \pder{p}\left( \mat{F}_q(\tilde p,q') \Cmat(\tilde p,q')\right)\approx \Delta p\Delta q\pder{p}\left( \mat{F}_q(\tilde p,\tilde{\tilde{q}}) \Cmat(\tilde p,\tilde{\tilde{q}})\right)
\end{aligned}$$

equally:

$$\begin{aligned}
-\Delta q\int_{p_0}^{p_0+\Delta p} dp'\,\pder{q}\left( \mat{F}_q(p',\tilde q) \Cmat(p',\tilde q)\right)\approx -\Delta q\Delta p\pder{q}\left( \mat{F}_q(\tilde{\tilde{p}},\tilde q) \Cmat(\tilde{\tilde{p}},\tilde q)\right)
\end{aligned}$$

Hence:

$$\begin{aligned}
\Delta\Cmat(p,q) 
&=\Delta p\Delta q\pder{p}\left( \mat{F}_q(\tilde p,\tilde{\tilde{q}}) \Cmat(\tilde p,\tilde{\tilde{q}})\right)-\Delta q\Delta p\pder{q}\left( \mat{F}_q(\tilde{\tilde{p}},\tilde q) \Cmat(\tilde{\tilde{p}},\tilde q)\right)\\
&=\Delta p\Delta q\left(\pder{p}\left( \mat{F}_q(\tilde p,\tilde{\tilde{q}}) \Cmat(\tilde p,\tilde{\tilde{q}})\right)-\pder{q}\left( \mat{F}_q(\tilde{\tilde{p}},\tilde q) \Cmat(\tilde{\tilde{p}},\tilde q)\right)\right)
\end{aligned}$$

Equally:
$$\Delta\Cmat(p,q)\approx
\Delta p\Delta q\left\{
\partial_p(\mat{F}_q\Cmat)-\partial_q(\mat{F}_p\Cmat)
\right\},
$$

Expanding derivatives:

$$\begin{aligned}
\partial_p(\mat{F}_q\Cmat)-\partial_q(\mat{F}_p\Cmat)
&=
(\partial_p\mat{F}_q-\partial_q\mat{F}_p)\Cmat
+\mat{F}_q(\partial_p\Cmat)-\mat{F}_p(\partial_q\Cmat).
\end{aligned}$$

Use the ADT equations $\partial_p\Cmat=-\mat{F}_p\Cmat$ and $\partial_q\Cmat=-\mat{F}_q\Cmat$ to obtain:

$$\begin{aligned}
\mat{F}_q(\partial_p\Cmat)-\mat{F}_p(\partial_q\Cmat)
&=
-\mat{F}_q\mat{F}_p\Cmat+\mat{F}_p\mat{F}_q\Cmat
= -[\mat{F}_q,\mat{F}_p]\Cmat.
\end{aligned}$$

Therefore,

$$\boxed{
\Delta\Cmat(p,q)\approx
\left\{(\partial_p\mat{F}_q-\partial_q\mat{F}_p)-[\mat{F}_q,\mat{F}_p]\right\}
\Cmat(p,q)\,\Delta p\Delta q.
}$$

If the curl condition (zero nonabelian curvature) holds:

$$\boxed{
\partial_p\mat{F}_q-\partial_q\mat{F}_p = [\mat{F}_q,\mat{F}_p],
}$$

then $\Delta\Cmat(p,q)=0$ for any sufficiently small rectangle, i.e. the two elementary rectangular paths yield the same ADT matrix.

A finite closed loop in a smooth region can be tiled by many infinitesimal loops. If each infinitesimal loop contributes identity holonomy, then the total holonomy of the finite loop is also identity, implying path independence (and single-valuedness) of $\Cmat$ throughout that region.

### Why singularities break the argument

If there exists a point $B(a,b)$ where at least one matrix element of $\mat{F}_p$ and $\mat{F}_q$ is singular, then near $B$ these quantities can diverge and $\partial_p(\mat{F}_q\Cmat)$, $\partial_q(\mat{F}_p\Cmat)$ may fail to be bounded/estimable.

Consequences:

* The mean-value replacement used to turn differences into derivatives can fail.
* The "slow variation" step that replaces integrals by $\Delta p\Delta q$ times an intermediate value can fail.
* As a result one cannot conclude $\Delta \Cmat=0$ for loops enclosing $B$.
* Loops encircling $B$ may have nontrivial holonomy $D(\Gamma)\neq \I$, hence $\Cmat$ can become multi-valued.

### Why a small loop around the singularity controls large loops

If $\mat{F}$ is regular away from $B$, then any large loop $\Gamma$ encircling $B$ can be decomposed into a product/concatenation of loops, where only one small loop $\Gamma_d$ actually surrounds $B$ and the others do not.

Loops that do not surround $B$ have identity holonomy in the regular region.Therefore:

$$D(\Gamma)=D(\Gamma_p)D(\Gamma_i)D(\Gamma_d)=\I \cdot\I \cdot D(\Gamma_d)=D(\Gamma_d)$$

The local neighborhood of the singularity governs the global multi-valuedness for any loop encircling it. Or using the paper's phrasing, the small region surrounded by $\Gamma_d$ governs the feature of $\Cmat$ in the entire region surrounded by $\Gamma$, regardless of how large $\Gamma$ is.

If $\mat{F}_p$ or $\mat{F}_q$ are singular at a point inside the loop, the above smoothness estimates break down and a nontrivial holonomy (multi-valued $\Cmat$) may occur.