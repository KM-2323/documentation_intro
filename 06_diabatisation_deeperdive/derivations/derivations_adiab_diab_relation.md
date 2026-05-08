## Diabatic gradient and diabatic Hessian

### Diabatic gradient

$$\begin{align}
    \partial_\alpha \W  = \partial_\alpha(\Cinv\V\Cmat)=(\partial_\alpha\Cinv)\V\Cmat + \Cinv(\partial_\alpha\V)\Cmat + \Cinv\V\partial_\alpha(\Cmat)
\end{align}$$


Assume strict diabatisation:

$$\begin{align}
    \partial_\alpha\Cmat =& -\mat F_{\alpha} \Cmat\\
    \partial_\alpha\Cinv =& -(\mat F_{\alpha} \Cmat)^\dagger =- \Cinv \mat F^\dagger_\alpha= \Cinv \mat F_\alpha
\end{align}$$

Then:

$$\begin{align}
    \partial_\alpha \W  &=  \Cinv \mat F_\alpha\V\Cmat + \Cinv\mat G^\mat A_\alpha\Cmat - \Cinv\V\mat F_{\alpha} \Cmat\\
   \mat G^\mat D_\alpha &=\Cinv \left(\G^\mat A_\alpha+[ \mat F_\alpha,\V]\right)\Cmat
\end{align}$$

Now 

$$\begin{align}
    [ \mat F_\alpha,\V]_{ij} = \mat F_{\alpha,ik}\V_{kj}-\V_{ik}\mat F_{\alpha,kj}
\end{align}$$

But since adiabatic potential matrix is diagonal.

$$\begin{align}
    [ \mat F_\alpha,\V]_{ij} =& \mat F_{\alpha,ik}\V_{kj}\delta_{kj}-\V_{ik}\mat F_{\alpha,kj}\delta_{ik}\\=&\mat F_{\alpha,ij}V_{jj} - V_{ii}\mat F_{\alpha,ij}
    \\=&(V_{jj} - V_{ii})\mat F_{\alpha,ij}
\end{align}$$

Recall relationship:

$$\begin{align}
    \mat F_{ij}=\frac{\mat D_{ij}}{V_{jj}-V_{ii}}=\frac{\mel{\psi_i}{\nabla\hat H}{\psi_j}}{V_{jj}-V_{ii}}
\end{align}$$

Hence:

$$\begin{align}
     [ \mat F_\alpha,\V]_{ij} = \mat D_{\alpha,ij}
\end{align}$$

Thus:

$$
\begin{align}
   \mat G^\mat D_\alpha &=\Cinv \left(\G^\mat A_\alpha+\mat D_{\alpha}\right)\Cmat\\
   \mat G^\mat D &=\Cinv \left(\G^\mat A+\mat D\right)\Cmat
\end{align}$$

### Diabatic Hessian

$$\begin{align}
    \partial_\beta\mat G^\mat D_\alpha &=\partial_\beta\left(\Cinv \left(\G^\mat A_\alpha+[ \mat F_\alpha,\V]\right)\Cmat\right) =\partial_\beta\left(\Cinv \mat K^\mat D_\alpha\Cmat\right)  \\
    &=\Cinv \left(\partial_\beta \mat K^\mat D_\alpha+[ \mat F_\beta,\mat K^\mat D_\alpha]\right)\Cmat
\end{align}$$

While:

$$\begin{align}
    \partial_\beta \mat K^\mat D_\alpha &= \partial_\beta\partial_\alpha\V+\partial _\beta[ \mat F_\alpha,\V]\\
    &= \partial_\beta\partial_\alpha\V+[ \partial _\beta\mat F_\alpha,\V]+[ \mat F_\alpha,\partial _\beta\V]
\end{align}$$

$$\begin{align}
    [ \mat F_\beta,\mat K^\mat D_\alpha] = &[ \mat F_\beta,\G^\mat A_\alpha+[ \mat F_\alpha,\V]]\\
    =& [ \mat F_\beta,\G^\mat A_\alpha]+[ \mat F_\beta,[ \mat F_\alpha,\V]]
\end{align}$$

Therefore:

$$\begin{align}
    \partial_\beta\partial_\alpha\W = \Cinv\Bigg [
    &\partial_\beta\partial_\alpha\V+\\
    &[ \partial _\beta\mat F_\alpha,\V]+
    \\&[ \mat F_\alpha,\G^\mat A_\beta] + [ \mat F_\beta,\G^\mat A_\alpha]+
    \\&\bigg[ \mat F_\beta,[ \mat F_\alpha,\V]\bigg]\Bigg]\Cmat \end{align}$$

Now define

$$\begin{align}
    \mathcal{H}_{\alpha\beta} = \partial_\beta\partial_\alpha\V+
    [ \partial _\beta\mat F_\alpha,\V]+
    [ \mat F_\alpha,\G^\mat A_\beta] + [ \mat F_\beta,\G^\mat A_\alpha]+
    \bigg[ \mat F_\beta,[ \mat F_\alpha,\V]\bigg]
\end{align}$$

Then for the element of $ \mathcal{H}_{\alpha\beta,ij}$

$$\begin{align}
    \mathcal{H}_{\alpha\beta,ij} = \mat H_{\alpha\beta, ij}^{\text{ad}}\delta_{ij}+
    [ \partial _\beta\mat F_\alpha,\V]_{ij}+
    [ \mat F_\alpha,\G^\mat A_\beta]_{ij} + [ \mat F_\beta,\G^\mat A_\alpha]_{ij}+
    \Big[ \mat F_\beta,[ \mat F_\alpha,\V]\Big]_{ij}\\
\end{align}$$

Let's examine the non-nested commutator term

$$\begin{align}
    [ \partial _\beta\mat F_\alpha,\V]_{ij} &= \partial _\beta\mat F_{\alpha,ik}\V_{kj} - \V_{ik}\partial _\beta\mat F_{\alpha,kj} =  \partial _\beta\mat F_{\alpha,ij}V_{jj} - V_{ii}\partial _\beta\mat F_{\alpha,ij} =(V_{jj}-V_{ii})\partial _\beta\mat F_{\alpha,ij}\\
     [ \mat F_\alpha,\G^\mat A_\beta]_{ij}&=\mat F_{\alpha,ik}\G^\mat A_{\beta,kj}\delta_{kj} -\G^\mat A_{\beta,ik} \delta_{ik}\mat F_{\alpha,kj} = \mat F_{\alpha,ik}\G^\mat A_{\beta,jj} -\G^\mat A_{\beta,ii} \mat F_{\alpha,ij} = (\G^\mat A_{\beta,jj} -\G^\mat A_{\beta,ii} )\mat F_{\alpha,ij}
\end{align}$$

Now for the nested commutator:

$$\begin{align}
    [ \mat F_\alpha,\V]_{ij}&= (V_{jj}-V_{ii})\mat F_{\alpha, ij} = \mathcal{B}_{ij}\\
    \Big[ \mat F_\beta,[ \mat F_\alpha,\V]\Big]_{ij} &= \Big[ \mat F_\beta, \mathcal{B}\Big]_{ij}
    \\&=\sum_k\mat F_{\beta,ik}\mathcal{B}_{kj}-\sum_k\mathcal{B}_{ik}\mat F_{\beta,kj}\\
    &=\sum_k\mat F_{\beta,ik}(V_{jj}-V_{kk})\mat F_{\alpha, kj} -\sum_k(V_{kk}-V_{ii})\mat F_{\alpha, ik}\mat F_{\beta,kj}\\
    &= \sum_k(V_{jj}-V_{kk})\mat F_{\beta,ik}\mat F_{\alpha, kj} -\sum_k(V_{kk}-V_{ii})\mat F_{\alpha, ik}\mat F_{\beta,kj}
\end{align}$$

Hence collecting everything

$$\begin{align}
    \mathcal{H}_{\alpha\beta,ij} =& \mat H_{\alpha\beta, ij}^{\text{ad}}\delta_{ij}+
  (V_{jj}-V_{ii})\partial _\beta\mat F_{\alpha,ij}+
   (\G^\mat A_{\beta,jj} -\G^\mat A_{\beta,ii} )\mat F_{\alpha,ij} +(\G^\mat A_{\alpha,jj} -\G^\mat A_{\alpha,ii} )\mat F_{\beta,ij}\\&+\sum_k(V_{jj}-V_{kk})\mat F_{\beta,ik}\mat F_{\alpha, kj} -\sum_k(V_{kk}-V_{ii})\mat F_{\alpha, ik}\mat F_{\beta,kj}
\end{align}$$

Further simplification could be made where we substituted the off-diagonal Hellman-Feynman relationship for derivative coupling.

$$\begin{align}
    \mathcal{H}_{\alpha\beta,ij} =& \mat H_{\alpha\beta, ij}^{\text{ad}}\delta_{ij}+
  (V_{jj}-V_{ii})\partial _\beta\mat F_{\alpha,ij}+
   (\G^\mat A_{\beta,jj} -\G^\mat A_{\beta,ii} )\frac{\mat D_{\alpha,ij}}{V_{jj}-V_{ii}} +(\G^\mat A_{\alpha,jj} -\G^\mat A_{\alpha,ii} )\frac{\mat D_{\beta,ij}}{V_{jj}-V_{ii}}\nonumber \\&+\sum_k(V_{jj}-V_{kk})\frac{\mat D_{\beta,ik}}{V_{kk}-V_{ii}}\frac{\mat D_{\alpha,kj}}{V_{jj}-V_{kk}} -\sum_k(V_{kk}-V_{ii})\frac{\mat D_{\alpha,ik}}{V_{kk}-V_{ii}}\frac{\mat D_{\beta,kj}}{V_{jj}-V_{kk}}\nonumber\\
   =& \mat H_{\alpha\beta, ij}^{\text{ad}}\delta_{ij}+
  (V_{jj}-V_{ii})\partial _\beta\mat F_{\alpha,ij}\nonumber\\&+
   (\G^\mat A_{\beta,jj} -\G^\mat A_{\beta,ii} )\frac{\mat D_{\alpha,ij}}{V_{jj}-V_{ii}} +(\G^\mat A_{\alpha,jj} -\G^\mat A_{\alpha,ii} )\frac{\mat D_{\beta,ij}}{V_{jj}-V_{ii}} \nonumber\\&+\sum_k\frac{\mat D_{\beta,ik}\mat D_{\alpha,kj}}{V_{kk}-V_{ii}} -\sum_k\frac{\mat D_{\alpha,ik}\mat D_{\beta,kj}}{V_{jj}-V_{kk}}
\end{align}$$

##### For $i=j$

$$\begin{align}
    \mathcal{H}_{\alpha\beta,ii}
   =& \mat H_{\alpha\beta, ii}^{\text{ad}}+\sum_k\frac{\mat D_{\beta,ik}\mat D_{\alpha,ki}}{V_{kk}-V_{ii}} -\sum_k\frac{\mat D_{\alpha,ik}\mat D_{\beta,ki}}{V_{ii}-V_{kk}}\\
   =& \mat H_{\alpha\beta, ii}^{\text{ad}}+\sum_k\frac{\left(\mat D_{\beta,ik}\mat D_{\alpha,ki}+\mat D_{\alpha,ik}\mat D_{\beta,ki}\right)}{V_{kk}-V_{ii}} 
\end{align}$$

Since $\mat D_{\alpha,ik} =\mat D_{\alpha,ki} $

$$
\begin{align}
    \mathcal{H}_{\alpha\beta,ii}
= \mat H_{\alpha\beta, ii}^{\text{ad}}+2\sum_k\frac{\left(\mat D_{\alpha,ik}\mat D_{\beta,ki}\right)}{V_{kk}-V_{ii}} 
\end{align}$$

##### For $i\neq j$

$$\begin{align}
    \mathcal{H}_{\alpha\beta,ij} 
   =&
  (V_{jj}-V_{ii})\partial _\beta\mat F_{\alpha,ij}\nonumber\\&+
   (\G^\mat A_{\beta,jj} -\G^\mat A_{\beta,ii} )\frac{\mat D_{\alpha,ij}}{V_{jj}-V_{ii}} +(\G^\mat A_{\alpha,jj} -\G^\mat A_{\alpha,ii} )\frac{\mat D_{\beta,ij}}{V_{jj}-V_{ii}} \nonumber\\&+\sum_k\frac{\mat D_{\beta,ik}\mat D_{\alpha,kj}}{V_{kk}-V_{ii}} -\sum_k\frac{\mat D_{\alpha,ik}\mat D_{\beta,kj}}{V_{jj}-V_{kk}}
\end{align}$$