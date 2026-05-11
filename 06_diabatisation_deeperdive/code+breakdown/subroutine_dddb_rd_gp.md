
## Big picture
`dddb_rd_gp` is the “small/local DB per GWP” reader used when `iddrddb == 1` . for the current geometry ``xgpoint``, read/interpolate a **diabatic local harmonic approximation** from the small local DB belonging to ``num_gp``, then return potential, gradients, Hessians, and maybe dipoles.

1. using the nearest DB point directly, shifted to `xgpoint` by a 2nd-order Taylor expansion, or
2. doing a Shepard-weighted average of several shifted local harmonic approximations.
**Inputs**  
``ndofddpes``: number of DD-PES coordinates, usually Cartesian components
S ``nddstate``  = number of electronic states
M ``dbnrec_gp(num_gp)``   =number of records in this GWP’s local DB
``xgpoint(ndofddpes)``: current geometry/coordinate point where you want the PES.

``ltransder:`` if true, and lddtrans is true, transform derivatives from Cartesian-like DD coordinates to dynamics/normal-mode coordinates at the end.

``lvonly``: intended “energy only” flag. In this GP version it does **not** really prevent derivative calculation; it mainly suppresses final derivative coordinate transform.

``lforce``: assigned to initial, but in this GP routine initial is not used afterwards.

**Outputs**  
``v(nddstate,nddstate``: diabatic potential matrix at xgpoint.

``deriv1(ndofddpes,nddstate,nddstate):`` first derivative matrix, i.e. gradient of each potential matrix element with respect to each coordinate.

``deriv2(ndofddpes,ndofddpes,nddstate,nddstate):`` second derivative matrix, i.e. Hessian of each potential matrix element.

``dipole(3,nddstate,nddstate):`` dipole matrix components. Caveat: in this routine the dipole path looks incomplete, because diptmp is never filled before being accumulated.

It also modifies module variables ``rad_conf`` and ``shep_norm``.

**Important Global Data**  
let record = loc(irec) which is the translated array list from the linked list and stores the full db indedx from database base
Defined in dirdyn.f90:446:

``dbgeo(ndofddpes,record)``: DB geometries.

``dbener(nddstate,nddstate,record)``: diabatic potential matrix at DB records.

``dbgrad(ndofddpes,nddstate,nddstate,record)``: gradients.

``dbhess(ndofddpes,ndofddpes,nddstate,nddstate,record)``: Hessians.

``dbdipmom(3,nddstate,nddstate,record)``: dipoles.

``dbignore(record)``: if 1, ignore this DB record.

``dbinterp(record)``: if <0, QC/interpolation failed, do not use.

For local DBs, dirdyn.f90:521:

``num_gp``: current GWP/local DB index.

``dbnrec_gp(num_gp)``: number of local DB records.

``ngp_loc(num_gp)%locpt``: head pointer of linked list containing full DB record numbers.

**Temporary Arrays**  
``r1(dbnrec_gp(num_gp)``): distance from xgpoint to each local DB record, in local-list order.

``loc(dbnrec_gp(num_gp))``): full DB record id for each local-list position.

``weight(dbnrec_gp(num_gp))``): Shepard interpolation weight for each local DB record.

``ord_dist(dbnrec_gp(num_gp))``): sorted copy of r1, used to choose confidence radius.

``gx(N)``: geometry of one chosen DB record.

``vv(S,S), der1(ndofddpes,S,S), der2(ndofddpes,ndofddpes,S,S), dip(3,S,S)``: data copied from the nearest DB point when no interpolation is needed.

``vtmp, dertmp1, dertmp2:`` shifted contribution from one DB record.

``tv, tderiv1, tderiv2``: weighted sums over all accepted local DB records.

# Breakdown
Lines 6461-6465 check that`` num_gp > 0``. Without this, the code would try to read ngp_loc(0), illegal in normal Fortran indexing.

Lines 6467-6476 zero all outputs and set control variables. ``linterpol=.true``. means “assume we will interpolate unless we discover a very close DB point.”

Lines 6481-6498 allocate arrays. If the DB is nonempty, local arrays have length ``M = dbnrec_gp(num_gp)``. These arrays are local working memory, not the DB itself. i.ee r1, loc, weight, ord_dist

Lines 6505-6515 convert the linked list into a normal array:

```
current => ngp_loc(num_gp)%locpt 
do irec = 1,M 
	loc(irec) = current%locDB 
	current => current%Next 
enddo
```

So loc(irec) becomes the full DB record number for local entry irec.

Line 6520 calls`` distdb_gp(xgpoint,idbloc,r1,mindist,mindisp,dbnrec_gp(num_gp))``.

**Helper: distdb_gp**  
At dd_db.F90:6181, it walks the same local linked list. For each node, current%locDB is the full DB record number. It skips ignored records, calls distdb1, stores the distance in dist(irec), and tracks the nearest full DB id in iloc.

So after line 6520:

``r1(irec)`` contains distance to local record irec.
``idbloc`` is the full DB record id of the closest usable point.
``mindist`` is the smallest Euclidean distance.
``mindisp ``is the smallest maximum-atom displacement.

**Helper: distdb1**  
At dd_db.F90:2907:

```
vec = xpnt - dbpnt 
dist = dnrm2(N,vec,1) 
call maxatdist(disp,vec)
```

Mathematically:

`dist = sqrt(sum_i (xpnt_i - dbpnt_i)^2)`
so it is Euclidean norm. ``maxatdist`` reshapes the coordinate difference as (3,natm) and returns the largest per-atom displacement.

Back in dddb_rd_gp, line 6527 checks:

`if (mindist .lt. dbdisp) then`

If the nearest DB point is close enough, interpolation is skipped. and `calls shiftdd(v,deriv1,deriv2,xgpoint,vv,der1,der2,gx,2) `

Lines 6529-6556 are the no-interpolation branch. It copies DB record idbloc into vv, der1, der2, and dip, then calls shiftdd.

**Helper: shiftdd**  
At dd_db.F90:5529, this does a Taylor shift from DB geometry qcentero to current geometry qcenter.

With dx = qcenter(xgpoint) - qcentero(gx):

```
V(x) = V0 + grad0 . dx + 1/2 dx^T H0 dx 
grad(x) = grad0 + H0 dx 
H(x) = H0
```

Which uses a local harmonic approximation: each DB point supplies a quadratic model, and shiftdd evaluates that quadratic model at the new point.

Line 6558 deallocates ``gx``. From here onward, if ``linterpol`` is still true, it does weighted interpolation.

Lines 6568-6577 choose the confidence radius ``rad_conf`` by first selecting the maximum index to look for in local database via:
`dbnconf1=min(dbnconf,dbnrec_gp(num_gp))`
with `dbnconf=6` and `dbnrec_gp(num_gp)=10` 


It copies distances:
```
ord_dist = r1 
call dbubble(ord_dist,tmpmat,M,matdim = 0)
```

``dbubble`` sorts ``ord_dist`` ascending. ``tmpmat`` has zero effective columns because ``matdim=0``, so only the vector sorting matters. Then ``rad_conf`` is chosen as roughly the dbnconf-th nearest distance  (which is the largest distance that covers the radius/circle around the datapoint). 

```
irec = dbnconf1
 do
	rad_conf = ord_dist(irec)
	if (rad_conf .lt. 90000.0) exit  ! ignored points in DB
									 ! have distance of 99999.0
	irec=irec-1

 enddo
```
Distances near 99999 are ignored placeholders.

Lines 6582-6593 compute Shepard-like weights:

```
rtmp = max(r1(irec)/rad_conf,1.0d-6) 
weight(irec) = 1 / (rtmp**dbinterord1 + rtmp**dbinterord)
```
Herer
So closer points get much larger weight. dbinterord1 defaults to lower power, dbinterord to a high power, giving strong locality. Here:
`rtmp = r_i/R` with `R=rad_conf`  which in the paper is $||x_i-x||/rad_i$
then raw weight $v_i$ in the paper or `weight` in code
$$\text{raw\_weight}_i = \frac{1} {[ (\frac{r_i}{R})^4 + (\frac{r_i}{R})^{24} ]}$$

where `dbinterord1=4` controls near-region smoothness as this dominate when $r_1/R<<1$ and ``dbintorder=24`` controls far away region and kills the weight when needed if $r_1/R>>1$
Weights below dbminwgt are zeroed. Then all weights are divided by maxwgt for numerical scaling so that largest have weight of 1:
```
maxwgt = max(maxwgt,maxval(weight))
weight = weight/maxwgt  
```


Lines 6595-6603 compute:
`shep_norm = sum(weight)`
which correspond to math:
$\sum_j^Nv_j(x)$

If all weights are zero, the routine errors: no usable DB points.

Lines 6605-6620 allocate and zero accumulation arrays.

Lines 6622-6645 loop over all local DB entries. For each local entry:

``loc(irec)`` is the translated array from earlier linked list which converts local index to full DB record.

It skips ignored records, failed records, and tiny-weight records.

Lines 6629-6633 are a special two-state regularisation check. For a 2x2 diabatic matrix, the adiabatic gap is:

`dv = sqrt((V22 - V11)^2 + 4 V21^2)`

If dv < dddvmin, that DB point is skipped.

Lines 6635-6639 call shiftdd for this DB record, producing vtmp, dertmp1, dertmp2: the local quadratic model from record loc(irec) evaluated at xgpoint.

Lines 6641-6644 accumulate weighted sums:


```
tv += weight * vtmp 
tderiv1 += weight * dertmp1 
tderiv2 += weight * dertmp2
```

Line 6641 tries to accumulate dipoles, but diptmp was initialized to zero and never loaded from dbdipmom, so this currently contributes zero.

Lines 6647-6650 copy the sums into outputs. (note all elemnets of v, deriv1 and deriv2 aree initialised as = 0.0_dop)
```
v = v + tv
deriv1 = deriv1 + tderiv1
deriv2 = deriv2 + tderiv2
```
Lines 6656-6659 normalize by shep_norm:

```
v = sum(w_i V_i) / sum(w_i) 
deriv1 = sum(w_i grad_i) / sum(w_i) 
deriv2 = sum(w_i Hessian_i)/ sum(w_i)
```

This is weighted interpolation of shifted local harmonic approximations.

Line 6664 rescales ``shep_norm`` back to the unnormalized sum by multiplying by ``maxwgt``. Other diabatisation routines use this value.

Lines 6671-6674 optionally call ddpes2q.

**Helper: ddpes2q**  
At dd_db.F90:5369, it transforms deriv1 and deriv2 from Cartesian DD-PES coordinates to dynamics/normal-mode coordinates using ddf2q and ddfc2q. It also zeroes derivatives for coordinates not assigned to active modes.

Lines 6676-6688 deallocate all temporary arrays.

Main issue read so far: lvonly does not really make this energy-only; the dipole output path appears incomplete; and the no-interpolation test uses mindist, whereas the full DB reader uses mindisp, so this GP version’s cutoff criterion differs.
















### Outputs:  
`v(nddstate,nddstate), deriv1(ndofddpes,nddstate,nddstate), deriv2(ndofddpes,ndofddpes,nddstate,nddstate), dipole(3,nddstate,nddstate).`

### Important globals used:  
`num_gp, dbnrec_gp, ngp_loc, dbgeo, dbener, dbgrad, dbhess, dbdipmom, dbignore, dbinterp, dbdisp, dbnconf, dbminwgt, dbinterord, dbinterord1, rad_conf, shep_norm.`

**Line Flow**  
At dd_db.F90 line 6423, flags are declared. `ltransder` controls derivative transformation at the end, `lvonly` mostly only suppresses that transformation here, and `lforce` is assigned to initial but effectively not used in this GP routine.

Lines 6427-6433 declare the main arguments. 
- `xgpoint` is the current Cartesian DD-PES coordinate vector. 
- `v` is the diabatic potential matrix. 
- `deriv1` stores first derivatives, 
- `deriv2` stores Hessians
- `dipole` stores dipole matrices.

Lines 6434-6459 declare work arrays. 
- `dbnrec_gp(num_gp)` stores the number of db point that forms the local/dynamics database for a specific gwp point in database 
- `r1(dbnrec_gp(num_gp))` will hold distances. 
- `loc(dbnrec_gp(num_gp))` maps local-list positions to full DB record numbers. 
- `weight(dbnrec_gp(num_gp))` stores interpolation weights. 
- `idbloc` is the nearest full DB record. 
- `current` is a linked-list pointer.

Lines 6461-6465 check num_gp > 0, ensuring a proper number is used;
- num_gp is the current GWP-local DB index

Lines 6467-6476 zero the outputs and local scalars. 
- ``v, deriv1, deriv2,`` and ``dipole`` start as zero. 
- ``linterpol=.true``. assumes interpolation until the nearest-point branch says otherwise.

Lines 6481-6502 allocate local arrays. 
- If the full DB has records, arrays are sized to ``dbnrec_gp(num_gp)``, the number of records in this GWP’s local DB. 
- Otherwise they use length 1 as a defensive fallback.

The linked-list block at dd_db.F90:6503:

```
call list_init(Current) 
current => ngp_loc(num_gp)%locpt 
do irec = 1,dbnrec_gp(num_gp) 
	loc(irec) = current%locDB 
	current => current%Next enddo
```

means: make local pointer ``current`` null, then point it at the head of the linked list `ngp_loc` for GWP ``num_gp``. % accesses a component of a derived type, like object.field. => is pointer assignment, not a value copy. Each node has ``locDB``, the record/index number in the full DB(i.e. irec in the local record loop is from 1 to ``dbnrec_gp(num_gp)`` while the loc(irec) will be the array of the index of the local database surrounding your local point), and Next, a pointer to the next node. The loop copies the full DB record ids into the plain array ``loc``.

``ngp_loc`` is declared in dirdyn.f90:536 as an allocatable array of type(list), where each list has locpt, a pointer to the first type(nextptr) node. The node type at dirdyn.f90:531 is:

```
type nextptr 
	integer(long) :: locDB 
	type(nextptr), pointer :: next 
end type nextptr
```

ngp_loc is built by dddb_gp at dd_db.F90:6083. It finds the nearest numrec DB structures to each GWP and stores their full DB indices in the list. One subtlety: list_insert at dd_db.F90:6967 inserts at the head of the list, so traversal order is reverse insertion order.

Line 6513 
``` call distdb_gp(xgpoint,idbloc,r1,mindist,mindisp,dbnrec_gp(num_gp))``` 
which fills r1 with distances from xgpoint to each local DB point and returns idbloc, the nearest full DB record.

If ``mindist < dbdisp`` at line 6520, the code does no interpolation. It reads geometry, energy, gradient, and Hessian from the nearest DB record ``idbloc``, then calls ``shiftdd`` at line 6547. Mathematically this is:  
``V(x) = V(x0) + g(x0)·dx + 1/2 dx^T H(x0) dx `` 
and  
``grad(x) = g(x0) + H(x0) dx `` 
with ``dx = xgpoint - dbgeo(:,idbloc)``.

If interpolation is needed, lines 6561-6570 choose ``rad_conf``, the confidence radius, as roughly the dbnconf-th nearest local-DB distance after sorting r1. Ignored DB entries have distance 99999, so the loop skips those.

Lines 6575-6596 compute Shepard-like weights:  
rtmp = max(r1(irec)/rad_conf, 1e-6)  
weight = 1 / (rtmp^dbinterord1 + rtmp^dbinterord)  
then weights below dbminwgt are zeroed. The weights are scaled by maxwgt for numerical stability, and shep_norm = sum(weight).

Lines 6615-6638 loop over local DB records. Ignored records, failed/interpolated-invalid records, and tiny weights are skipped. For 2-state dddiab == 1, it computes  
dv = sqrt((V22 - V11)^2 + 4 V21^2),  
the 2-state adiabatic gap implied by the diabatic 2x2 matrix, and skips points with dv < dddvmin.

For each accepted record, shiftdd shifts that record’s local harmonic model to xgpoint, then the code accumulates:  
tv += weight * vtmp,  
tderiv1 += weight * dertmp1,  
tderiv2 += weight * dertmp2.

Lines 6649-6652 divide by shep_norm, giving the weighted average. Then line 6657 restores shep_norm to the unscaled weight sum, because other routines, especially diabatisation code, use it.

Lines 6664-6667 optionally call ddpes2q, which transforms derivatives from Cartesian DD-PES coordinates to dynamics coordinates/normal-mode coordinates when lddtrans, ltransder, and not lvonly.

**Important Helpers**  
distdb_gp at dd_db.F90:6181 walks the same ngp_loc(num_gp)%locpt linked list. For each full DB record current%locDB, it calls distdb1, stores the distance in local order, and tracks the nearest full DB record in iloc.

distdb1 at dd_db.F90:2907 computes vec = xpnt - dbpnt, then dist = ||vec||_2 using BLAS dnrm2. The comment says RMSD, but the division by sqrt(natm) is commented out, so it is actually Euclidean norm, not RMSD. It also calls maxatdist, which computes the maximum per-atom displacement over all atoms.

shiftdd at dd_db.F90:5529 is the Taylor-shift routine. It takes old values at qcentero and returns values at qcenter. With order=2, it shifts energies, gradients, and Hessians, and enforces symmetry over state pairs and coordinate Hessian indices.

**A Couple Of Caveats**