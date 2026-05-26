# Developer Note on `vctrans.F90`

This note is a practical guide to what `vctrans` is doing, what the important arrays mean in plain English, what mathematics and physics it is trying to apply, and how that connects to the example inputs and outputs in this repository.

Main code:

- `packages/vcham/src/vctrans.F90`
- `packages/vcham/src/includes/vctransmod.f90`
- `packages/vcham/src/includes/vchammod.f90`
- `packages/vcham/src/iofiles.f90`
- `packages/vcham/src/utils.f90`
- `HDmctdh/lib/utilities/ioqc.f90`

Useful examples:

- `../example_vctrans.info`
- `../example_vctrans.log`
- `6311-oh/vc2.inp`
- `6311-oh/vc2.info`
- `6311-oh/vc2.log`
- `../vcfit_test/s1/vctrans.inp`

## 1. What `vctrans` is for

`vctrans` takes:

- one reference frequency / normal-mode file (`file0`)
- a list of electronic-structure output files, or a DD database
- a definition of which electronic states to keep

and converts that information into a VCHam-style `.info` file plus a diagnostic `.log`.

In plain English, it is building a vibronic dataset around a reference geometry:

- the reference geometry `x0`
- the normal modes and frequencies
- the energy of each state relative to `E0`
- optionally gradients, gradient differences, derivative couplings, Hessians, and transition dipoles

The `.info` file is the machine-readable output. The `.log` file is the human-readable trace of what was found and how it was interpreted.

## 2. The two main workflows in this repo

### 2.1 QC output list workflow

This is the workflow you described with an input like:

- `file0 = freq.log`
- `nmodes = 9`
- `abinitiotype = CAS`
- `states = 1,2,3,4,5,6,7,8`
- `nstates = 8`
- `order = 0`
- `datadir = ...`
- `files ... end-files`

What happens:

1. `file0` is read for the reference geometry, masses, frequencies, and normal modes.
2. Each line in the `files` block becomes one dataset.
3. For each dataset, `vctrans` reads the geometry and state energy from the QC output.
4. The geometry is converted from Cartesian coordinates into normal-mode coordinates `q`.
5. The result is written into the `.info` file as one `#dataset_*` block.

With `order = 0`, this path is mostly:

- reference geometry and modes
- point geometry
- state energy
- point in `q`

That is exactly the shape of `../example_vctrans.info`.

### 2.2 DB / LVC workflow

The input `6311-oh/vc2.inp` is a different mode:

- `abinitiotype = DB`
- `DB0`
- `order = 2`
- `derivatives_in_q`
- `gradient_difference`
- `second_derivatives_in_q`

What happens here:

1. `file0` still defines the reference geometry and normal modes.
2. The DD database is opened instead of a list of QC outputs.
3. `DB0` means "use only the first DB geometry".
4. One dataset is produced for each selected state at that single geometry.
5. Because `order = 2`, the code also reads gradients, couplings, and Hessians.
6. `collectdblvc` and `analdblvc` then print a rough LVC-style analysis of the biggest `kappa`, `lambda`, and `gamma` terms in the log.

Important correction:

- this path does **not** automatically assume diabatic and adiabatic quantities are the same
- by default it reads the adiabatic DB data
- only `db_diab` switches the database read toward diabatic quantities

So `vc2.inp` is best described as:

- use the first DB geometry
- extract adiabatic energies, gradients, NAC-like couplings, Hessians
- project them into normal coordinates
- print a one-point LVC-style diagnostic

### 2.3 Special `theta, r1, r2, E` workflow

There is also a small special-purpose path where the data are not QC outputs at all, but lines containing:

- angle
- bond length 1
- bond length 2
- energy

That path is handled by `rdthr1r2`, `rdthr1r2_set`, and `rddata14`. It is much more specialised and mainly builds a 3-atom geometry from those four numbers.

## 3. The physical picture behind the code

### 3.1 Reference geometry and normal modes

The reference file `file0` gives the equilibrium geometry `x0` and a set of normal modes.

In this code:

- Cartesian coordinates are stored as a flat vector `x`
- the reference geometry is `xcoo0`
- the mode vectors are `nmcoo`

Each column of `nmcoo(:,m)` is the displacement pattern for one normal mode.

The inverse transformation matrix is `coonm`, which is used to map:

- from Cartesian displacement `x - x0`
- into normal coordinates `q`

Conceptually:

`q = C (x - x0)`

where `C` is represented by `coonm`.

### 3.2 Why convert to `q` coordinates

The vibronic Hamiltonian is normally written in normal-mode coordinates, not raw Cartesian coordinates.

That is because:

- the harmonic reference problem is diagonal in normal modes
- each `q_m` has a direct vibrational meaning
- linear and quadratic vibronic terms are naturally expressed per mode

So the code reads geometry and derivatives in Cartesian form, then projects them into `q`.

### 3.3 Energies are written relative to `E0`

The output energy is not the absolute electronic energy from the QC file.

Instead, the code writes:

`Delta E_i(q) = E_i(q) - E0`

where `E0` is:

- either read from `file0`
- or supplied explicitly with `energy0 = ...`
- or, in DB mode with a reference DB, taken from the DB reference data

This is why the `.info` file starts with `#zero_of_energy` and later each dataset has an energy relative to that zero.

### 3.4 Gradients, Hessians, and couplings

At each geometry and state, the code may read:

- gradient `dE/dx`
- Hessian `d2E/dx2`
- derivative coupling / NAC vector
- gradient difference

These are then projected into normal coordinates:

- `qder1` from `der1`
- `qder2` from `der2`
- `qdcp` from `dcp`
- `qgd` from `gd`

Conceptually:

- `qder1 = L^T der1`
- `qder2 = L^T der2 L`

where `L` is the normal-mode matrix.

### 3.5 LVC language used by the code

The code often uses LVC-style names:

- `kappa` for on-diagonal linear terms
- `lambda` for off-diagonal linear terms
- `gamma` for quadratic terms

If you write a simple vibronic expansion around `q = 0`:

`V_ii(q) ~= E_i(0) + sum_m kappa_i,m q_m + 1/2 sum_mn gamma_i,mn q_m q_n`

`V_ij(q) ~= V_ij(0) + sum_m lambda_ij,m q_m + ...`

then:

- `qder1` is the raw material for `kappa`
- `qdcp` is used by the code as the raw material for `lambda`
- `qder2` is the raw material for `gamma`

But there is an important nuance:

- in adiabatic QC mode, `dcp/qdcp` are really derivative couplings or NAC-like quantities
- in diabatic DB mode, the same arrays are reused for diabatic off-diagonal linear couplings

So the array name is stable, but the physical interpretation depends on the data source.

### 3.6 Gradient difference

Near a conical intersection, two especially important vectors are:

- derivative coupling vector
- gradient difference vector

The code uses:

- `dcp` / `qdcp` for the first
- `gd` / `qgd` for the second

These are the two vectors that span the branching plane in the usual adiabatic CI picture.

### 3.7 Eckart frame

If `eckart` is requested, the reference geometry and the current geometry are rotated into an Eckart-like frame before the normal-coordinate projection.

The physical goal is to remove:

- overall translation
- overall rotation

so that the remaining displacement is more purely vibrational.

That is why `vceckart` first recentres the geometry, diagonalises the inertia tensor, and rotates into a principal-axis frame.

### 3.8 Internal-coordinate replacement

`replace-modes` allows some modes to be replaced by:

- bond lengths
- bond angles
- torsion-like definitions

The intent is to describe a selected degree of freedom in a more chemically intuitive coordinate rather than a strict normal coordinate.

The main arrays are:

- `cootyp(m)` = what kind of internal coordinate mode `m` has become
- `coodef(:,m)` = which atoms define it
- `intcoo0(m)` = its reference value at `x0`

### 3.9 Curvilinear replacements

There is also a separate `nm2curv` feature for curvilinear transformations such as:

- spherical-type transformations
- dihedral replacement

This is more experimental than the plain `replace-modes` path. The code itself contains signs that these parts were developed for specific use cases rather than general-purpose production use.

### 3.10 Parent-to-fragment transformation

The `parent_to_fragment_trans` path tries to split the coordinate description into:

- fragment normal modes
- three system coordinates

The idea is to describe a local fragment with fragment modes, while the remaining "system" motion is described in a simpler coordinate set. This is a physically sensible idea for clustered or weakly bound systems, but the implementation is one of the rougher parts of the code.

### 3.11 Rotated modes

`rotate_modes` mixes pairs of modes with a 2x2 rotation.

Physically, this is useful when:

- two modes are strongly mixed
- a chemically meaningful linear combination is preferred
- one wants a rotated coordinate basis that follows a symmetry or local-motion idea better

The code rotates both the mode vectors and the mode-frequency block. It also records the resulting cross term in `rotmxfq`.

## 4. Array glossary in plain English

### 4.1 Size variables

| Name | Meaning |
| --- | --- |
| `natm` | Number of atoms |
| `ncoo` | Number of Cartesian coordinates, usually `3*natm` |
| `nmodes` | Number of internal vibrational coordinates kept in the model |
| `nsta` | Number of selected electronic states |
| `nsets` | Number of datasets to read |
| `ntr` | Number of trivial coordinates added to `nmodes` when `nmodes` is parsed; usually 6 for a nonlinear molecule |

Important identity in this code:

- `ncoo = nmodes + ntr`

For your 5-atom example:

- `natm = 5`
- `ncoo = 15`
- `nmodes = 9`
- `ntr = 6`

### 4.2 Reference-system arrays

| Array | Shape | Plain English meaning |
| --- | --- | --- |
| `xcoo0` | `(ncoo)` | Reference equilibrium geometry from `file0`, flattened as `x1,y1,z1,x2,...` |
| `mass` | `(ncoo)` | Atomic masses, repeated per Cartesian component |
| `freq0` | `(nmodes)` | Reference vibrational frequencies |
| `nmlab` | `(nmodes)` | Mode labels or symmetry labels |
| `nmcoo` | `(ncoo,nmodes)` | Normal-mode vectors in Cartesian space; one column per mode |
| `coonm` | `(nmodes,ncoo)` | Inverse map from Cartesian displacement to normal coordinates |
| `e0` | scalar | Energy zero used for output energies |
| `intcoo0` | `(nmodes)` | Reference values of any replaced internal coordinates |

### 4.3 Dataset bookkeeping arrays

| Array | Shape | Plain English meaning |
| --- | --- | --- |
| `states` | `(nsta)` | The actual electronic state numbers the user wants to keep |
| `asta(n)` | `(nsets)` | The model-state slot assigned to dataset `n` |
| `eigen(n)` | `(nsets)` | The actual root number to read from the QC file for dataset `n` |
| `asta1(:,n)` | `(nsta,nsets)` | Partner states coupled to dataset `n` |
| `info(n,1)` | scalar per set | Whether gradient / Hessian were found for dataset `n` |
| `info(n,2)` | scalar per set | Whether couplings were found for dataset `n` |
| `info(n,3)` | scalar per set | Whether transition dipole was found for dataset `n` |
| `datafile(n)` | `(nsets)` | QC output filename for dataset `n` |
| `abintype(n)` | `(nsets)` | Ab initio method type for dataset `n` |
| `gndfile(n)` | `(nsets)` | Optional separate ground-state file for dataset `n` |
| `gndabtype(n)` | `(nsets)` | Method type for that ground-state file |
| `dataorient(n)` | `(nsets)` | Which printed geometry orientation to read |
| `gndorient(n)` | `(nsets)` | Orientation for the separate ground-state file |
| `eshift(n)` | `(nsets)` | Optional energy shift applied to dataset `n` |
| `negphase(n)` | `(nsets)` | Flag to flip the sign of phase-sensitive couplings |
| `allen(n)` | `(nsets)` | Flag meaning "read all states from this one file" |
| `remove(n,s)` | `(nsets,nsta)` | Skip state `s` when splitting an all-states file |
| `ignore(n)` | `(nsets)` | Artificially push one state out of the ordering in `readall` |

### 4.4 Per-point physics arrays

| Array | Shape | Plain English meaning |
| --- | --- | --- |
| `xcoo` | `(ncoo)` | Current geometry in Cartesian coordinates |
| `qcoo` | `(nmodes)` or `(ncoo)` in the full-eigenvector path | Current geometry expressed in model coordinates |
| `der1` | `(ncoo)` | Cartesian gradient of the current state energy |
| `qder1` | `(nmodes)` | Same gradient projected into model coordinates |
| `gd` | `(ncoo)` | Cartesian gradient-difference vector |
| `qgd` | `(nmodes)` | Gradient-difference vector in model coordinates |
| `dcp` | `(ncoo,nsta)` | Coupling vectors from the current state to partner states |
| `qdcp` | `(nmodes,nsta)` | Those coupling vectors projected into model coordinates |
| `der2` | `(ncoo,ncoo)` | Cartesian Hessian of the current state |
| `qder2` | `(nmodes,nmodes)` | Hessian projected into model coordinates |
| `energy` | scalar | Current state energy relative to `e0` |
| `tdip(1:3)` | `(3)` | Transition-dipole Cartesian components |
| `tdip(4)` | scalar | Transition-dipole magnitude |
| `ecoup` | `(nsta)` | Constant off-diagonal diabatic couplings in DB diabatic mode |

### 4.5 Coordinate-definition arrays

| Array | Shape | Plain English meaning |
| --- | --- | --- |
| `cootyp` | `(nmodes)` | What kind of replacement coordinate mode `m` is |
| `coodef` | `(4,nmodes)` | Which atoms define that coordinate |
| `nmcurv` | `(transform_block,maxdim)` | Which modes participate in each curvilinear transformation block |
| `nmcurvtype` | `(transform_block)` | Type of each curvilinear transformation block |
| `c0` | `(transform_block,maxdim)` | Reference values associated with each curvilinear transformation block |
| `dihedflag` | `(nmodes)` | Flags used by the dihedral path |

### 4.6 Parent-to-fragment arrays

| Array | Shape | Plain English meaning |
| --- | --- | --- |
| `fragnmcoo` | `(fragncoo,fragnmodes)` | Fragment normal-mode vectors |
| `fragcoonm` | `(fragnmodes,fragncoo)` | Inverse map for fragment modes |
| `fragfreq0` | `(fragnmodes)` | Fragment frequencies |
| `fragnmlab` | `(fragnmodes)` | Fragment mode labels |
| `adjpft` | matrix | Parent-to-fragment mode transformation |
| `adjqrt` | matrix | Transformation between `q`-like and `r`-like system coordinates |

### 4.7 Mode-rotation arrays

| Array | Shape | Plain English meaning |
| --- | --- | --- |
| `rotm(:,1:2)` | list of pairs | Which two modes are to be mixed |
| `rotang` | list | Rotation angle for each pair |
| `rotmxfq` | list | Off-diagonal mixed frequency term produced by the rotation |

### 4.8 One-point DB analysis arrays

| Array | Shape | Plain English meaning |
| --- | --- | --- |
| `maxkappa` | `(nmodes,2)` | Largest and average-like on-diagonal linear terms |
| `maxlambda` | `(nmodes,2)` | Largest and average-like off-diagonal linear terms |
| `maxgamma` | `(nmodes,nmodes)` | Largest quadratic terms |
| `maxskappa` | `(nmodes)` | State where the largest `kappa` occurred |
| `maxslambda` | `(nmodes,2)` | State pair where the largest `lambda` occurred |
| `maxsgamma` | `(nmodes,nmodes)` | State where the largest `gamma` occurred |
| `nenergy` | `(nsta)` | Energies used in the `lambda / DeltaE` analysis |

## 5. Main program flow

The main program in `vctrans.F90` does roughly this:

1. `initvcham(1)` reads dimensions from the input and sets `maxdim`, `maxsta`, and file names.
2. `rdsetsinit` pre-scans the input to estimate how many datasets will be needed and, in DB mode, how large the DB is.
3. `alloc_vctransmod` and `alloc_vchammod` allocate all global arrays.
4. `vchdefault` and `vctdefault` set default values.
5. `vctinp` parses the real input and fills all settings and dataset tables.
6. `rdpftfiles` prepares parent/fragment transforms if that feature is active.
7. `rdfile0` reads the reference geometry, masses, frequencies, and modes.
8. Optional frame or basis manipulations are applied:
   - `rotrans`
   - `vceckart`
   - `nmeckart`
   - `nmorthof`
   - `rotatemodes`
9. `wrfile0` writes the header of the `.info` file.
10. Each dataset is read by one of:
   - `rddata`
   - `rddata14`
   - `rddatadb`
   - `readall`
11. `wrdata` writes the dataset block.
12. In `DB0` mode, `collectdblvc` and `analdblvc` print the one-point LVC-like analysis.

## 6. Subroutine-by-subroutine guide

### `vctdefault`

Purpose:

- set all VCTRANS-specific flags and arrays to their defaults

What arrays it sets:

- per-dataset bookkeeping such as `asta`, `asta1`, `eigen`, `eshift`, `allen`, `ignore`, `negphase`, `remove`
- frequency override arrays `freq1`, `nmlab1`
- major flags such as `ltdip`, `lwrderq`, `lwrder2q`, `lwrgd`, `lpft`, `lreflect`, `lrotmodes`

Physics role:

- none directly; this is control setup

### `vctinp`

Purpose:

- parse the main VCTRANS input file

Main arrays filled or changed:

- global size and state choices: `nmodes`, `ncoo`, `natm`, `states`, `nsta`
- file bookkeeping: `file0`, `datadir`, `fileout`, `datafile`, `gndfile`
- method bookkeeping: `abintype0`, `abintype`, `gndabtype`
- feature controls: `order`, `ltdip`, `lwrgd`, `lwrderq`, `lwrder2q`, `eck_frame`, `ldb0`, `ldbdiab`
- coordinate controls: `cootyp`, `coodef`, `nmcurv`, `nmcurvtype`, `c0`, `reflect`
- fragment/system transform controls: `parentfile`, `fragmentfile`, `fragnmodes`, `sysfreq`, `syslab`
- mode rotation controls: `rotm`, `rotang`

Physics role:

- this is where the user tells the code what physical model is wanted

Notable features:

- `states = ...` chooses the actual electronic roots to keep
- `nstates = ...` is only a fallback if `states` was omitted
- `energy0 = ...` overrides reading `E0` from `file0`
- `abinitiotype = DB` switches to DB mode
- `db_diab` changes the interpretation of couplings in DB mode

### `rdsetsinit`

Purpose:

- make a cheap pre-scan of the input before big allocations

Inputs:

- input unit and filename

Outputs:

- no dummy-array outputs, but it updates global counters like `maxset`

Working data:

- counts `files` entries
- detects DB mode and, if needed, opens the SQL DB to get `dbnrec`

Why it matters:

- allocation depends on how many datasets may exist
- `DB0` is already detected here, so one-point analysis arrays can be allocated in time

### `rdsets`

Purpose:

- parse one `files ... end-files` block

Main arrays written:

- `datafile(nsets)`
- `asta(nsets)`
- `eigen(nsets)`
- `dataorient(nsets)`
- `abintype(nsets)`
- `gndfile(nsets)`
- `gndabtype(nsets)`
- `gndorient(nsets)`
- `eshift(nsets)`
- `ignore(nsets)`
- `remove(nsets, :)`
- `negphase(nsets)`

Plain-English meaning:

- it turns each line in `files` into one dataset description

Physics role:

- mostly bookkeeping, but the `asta` versus `eigen` distinction is important

Useful interpretation:

- `asta` = "which model state this dataset belongs to"
- `eigen` = "which root number to read from the QC output"

### `rdthr1r2`

Purpose:

- parse inline points given directly as `theta, r1, r2, E, state`

Main arrays written:

- `datafile(n)` is abused to hold the text of the four numbers
- `asta(n)` and `eigen(n)` store the state label

Physics role:

- lets the code operate on a small 3-atom internal-coordinate scan without a QC output parser

### `rdthr1r2_set`

Purpose:

- read a file containing many `theta, r1, r2, E` records for one chosen state

Main arrays written:

- `datafile(nsets)`
- `asta(nsets)`
- `eigen(nsets)`

Physics role:

- same physical idea as `rdthr1r2`, but data come from an external list file

### `rdreplace`

Purpose:

- read the `replace-modes ... end-replace` block

Main arrays written:

- `cootyp`
- `coodef`
- `linternal = .true.`

Plain-English meaning:

- it says "mode `m` should be treated as a bond / angle / torsion instead of a raw normal mode"

Physics role:

- used when a chemical internal coordinate is more meaningful than the harmonic normal coordinate

### `wrfile0`

Purpose:

- write the top part of the `.info` file

Dummy inputs:

- `adjpft`, `adjqrt`, `fragnmcoo`, `fragnmlab`

Global arrays used:

- `xcoo0`, `mass`, `freq0`, `nmlab`, `nmcoo`, `intcoo0`, `cootyp`, `coodef`, `nmcurv`, `nmcurvtype`, `c0`

What it writes:

- system dimensions
- selected states
- reference energy zero
- equilibrium geometry
- masses
- frequencies
- normal modes
- optional internal-coordinate and fragment-transform metadata

Physics role:

- this is the reference model definition that all later datasets are measured against

### `wrnmcoo`

Purpose:

- optionally write the forward and backward mode transformation matrices

Global arrays used:

- `nmcoo`
- `coonm`

Physics role:

- mostly diagnostic; it shows exactly how Cartesian displacements and normal coordinates are related

### `rddata`

Purpose:

- read one ordinary QC output file and extract one dataset

Dummy outputs:

- `xcoo`
- `qcoo`
- `der1`, `qder1`
- `der2`, `qder2`
- `gd`, `qgd`
- `dcp`, `qdcp`
- `energy`
- `tdip`
- `ifiletyp`

Working arrays:

- `iatiso`
- `nxcoo`, `nxcoo0`, `nmass`
- `xtempcoo`

Important global context:

- `dataorient(n)`
- `gndfile(n)`, `gndabtype(n)`, `gndorient(n)`
- `abintype(n)`
- `eigen(n)`
- `xcoo0`, `nmcoo`, `coonm`, `freq0`
- `cootyp`, `coodef`, `intcoo0`
- `nmcurv`, `nmcurvtype`, `c0`

What it is trying to do:

1. read the geometry
2. convert geometry to the chosen model coordinates
3. possibly apply Eckart, internal-coordinate, polyspherical, or curvilinear handling
4. optionally read a separate ground-state file
5. read energy
6. read transition dipoles if requested
7. read gradient, couplings, and Hessian according to `order`

Physics role:

- this is the core "extract physics from one QC point" routine

### `rddata14`

Purpose:

- turn a text record `theta r1 r2 E` into a 3-atom geometry plus `q`

Dummy outputs:

- `xcoo`
- `qcoo`
- `energy`

What it is trying to do:

- build a simple triatomic geometry with atom 1 at the origin, atom 2 on the `z` axis, and atom 3 in the `yz` plane

Physics role:

- a direct internal-coordinate scan for a simple system

### `rddatadb`

Purpose:

- read one dataset from a DD database instead of a QC output file

Dummy outputs:

- `xcoo`, `qcoo`
- `der1`, `qder1`
- `der2`, `qder2`
- `dcp`, `qdcp`
- `energy`
- `tdip`
- `ecoup`

Working arrays:

- `dtmp`

Global DB arrays used:

- `dbgeo`
- `dbadener`, `dbadgrad`, `dbadhess`
- `dbener`, `dbgrad`, `dbhess`
- `dbdercp`

What it is trying to do:

- map the DB record number and state index onto the same per-point arrays that `rddata` would have produced

Physics role:

- make database data look like normal vibronic point data

Important nuance:

- if `ldbdiab` is false, `dcp/qdcp` store adiabatic derivative couplings from the DB
- if `ldbdiab` is true, `dcp/qdcp` store diabatic off-diagonal linear couplings and `ecoup` stores the constant off-diagonal coupling element

### `wrdata`

Purpose:

- write one dataset block to the `.info` file

Dummy inputs:

- `xcoo`, `qcoo`
- `der1`, `qder1`
- `gd`, `qgd`
- `dcp`, `qdcp`
- `der2`, `qder2`
- `energy`
- `tdip`
- `ecoup`

What it writes:

- state label
- point in `q`
- point in Cartesian coordinates
- gradient
- gradient difference
- couplings
- Hessian
- transition dipole

Physics role:

- this is where the extracted local vibronic information becomes part of the final model file

### `fromDBtoInput`

Purpose:

- generate QC input files from DB geometries

Global arrays used:

- `xcoo`
- `atsym`
- `iatsym`
- format flags such as `lmolpro`, `loqchem`, `logaussian`

Physics role:

- not physics extraction; this is geometry export

### `getfilename`

Purpose:

- construct an output filename for `fromDBtoInput`

Physics role:

- none

### `dcptrans`

Purpose:

- transform derivative couplings for the parent-to-fragment coordinate scheme

Working arrays:

- `ndcp`
- `tmpxcoo`
- `tmp`
- `work`
- `coosph`

Global arrays used heavily:

- `dcp`
- `qdcp`
- `xcoo`, `xcoo0`
- `fragnmcoo`, `fragcoonm`
- system-definition parameters like `sysatom`, `ratm1`, `ratm2`

What it is trying to do:

- split couplings into fragment-mode contributions plus three system coordinates that look like `R`, `theta`, and `phi`

Physics role:

- approximate a mixed fragment-plus-system coordinate representation

Caution:

- this is one of the least polished parts of the file
- the code itself contains a comment saying the spherical block is probably wrong

### `vceckart`

Purpose:

- move a geometry into an Eckart-like frame

Dummy inputs/outputs:

- `xcoo` is modified in place
- `itold` returns the rotation matrix

Working arrays:

- `com`
- `iteig`
- `rotxcoo`
- `tmp`
- `work`

What it is trying to do:

1. shift the geometry to the centre of mass
2. build the inertia tensor
3. diagonalise it
4. rotate into principal axes
5. choose the best sign convention to match the reference geometry

Physics role:

- remove overall rigid-body motion so the remaining displacement is mainly vibrational

### `readall`

Purpose:

- split a single QC file containing several states into one dataset per state

Dummy arguments:

- `n` is the source dataset descriptor
- `p`, `count`, `ierr` are running counters
- `laenge` is the length of `datadir`

Working arrays:

- `eigensave`
- `dum`
- `dum2`
- `maptdip`
- `maptdiprow`
- `duminfo`
- `duminforow`
- `dumtdip`

What it is trying to do:

1. read the geometry once
2. reread the same file for each state energy
3. optionally reread transition dipoles
4. sort states by energy
5. write separate datasets

Physics role:

- useful when one QC output file already contains a whole state manifold

Important note:

- this path is more complicated than the one-file-one-state path, because it sorts energies before assigning the per-state datasets

### `reflection`

Purpose:

- write reflected copies of a dataset about selected internal coordinates

Dummy inputs/outputs:

- `ndx` is incremented
- `qcoo` is modified before the reflected dataset is written

Physics role:

- generate symmetry-related points when a coordinate should be mirrored

### `collectdblvc`

Purpose:

- accumulate the largest `kappa`, `lambda`, and `gamma` values from the DB0 point set

Dummy inputs:

- `qder1`
- `qdcp`
- `qder2`
- `energy`

Global arrays updated:

- `maxkappa`
- `maxlambda`
- `maxgamma`
- `maxskappa`
- `maxslambda`
- `maxsgamma`
- `nenergy`

Physics role:

- rough one-point screening of which modes and state pairs are most important in an LVC sense

### `analdblvc`

Purpose:

- print the collected one-point LVC-style diagnostics

Working arrays:

- `vec`
- `ordpar`

What it prints:

- maximum `|kappa| / omega`
- average `|kappa| / omega`
- maximum `|lambda| / omega`
- average `|lambda| / omega`
- maximum `|lambda| / DeltaE`
- largest diagonal and off-diagonal `gamma`

Physics role:

- quick ranking of important modes and couplings near the reference point

## 7. Common input keywords and what they affect

### Reference and units

- `file0 = ...`
  - sets the reference QC file
  - later fills `xcoo0`, `mass`, `freq0`, `nmcoo`

- `file0abtype = ...`
  - tells `rdfile0` how to interpret `file0`

- `file0orient = ...`
  - chooses which printed orientation to read from the QC output

- `energy0 = ...`
  - sets `e01` explicitly and skips reading `E0` from `file0`

- `units_au`
  - changes output units from eV/Angstrom to Hartree/Bohr

### Model size and state selection

- `nmodes = M [, ntr]`
  - sets `nmodes`
  - sets `ncoo = nmodes + ntr`
  - sets `natm = ncoo / 3`

- `states = ...`
  - fills `states(1:nsta)`
  - this is the preferred explicit state selection

- `nstates = ...`
  - fallback if `states` was not given

### Data source selection

- `abinitiotype = ...`
  - default method type for the data files
  - `DB` turns on the database path

- `datadir = ...`
  - path prefix for data files, or the DB directory

- `files ... end-files`
  - defines one dataset per line

- `datasets ... end-datasets`
  - includes dataset-description files containing their own `files` blocks

- `thr1r2-points`
  - inline special internal-coordinate points

- `thr1r2-files`
  - special internal-coordinate points from external files

### Per-dataset controls inside `files`

Each line starts with:

- filename
- state index for `asta`

Optional extra tags can then set:

- `root = ...` -> `eigen(n)`
- `orient = ...` -> `dataorient(n)`
- `abintype = ...` -> `abintype(n)`
- `gndfile = ...` -> `gndfile(n)`
- `gndabtype = ...` -> `gndabtype(n)`
- `gndorient = ...` -> `gndorient(n)`
- `eshift = ...` -> `eshift(n)`
- `negphase` -> flip sign of phase-sensitive couplings
- `ignore = ...` / `remove = ...` -> special `readall` controls

### Property extraction controls

- `order = 0`
  - energy and coordinates only

- `order = 1`
  - add gradients and couplings

- `order = 2`
  - add Hessians as well

- `derivatives_in_q`
  - write `qder1`, `qdcp`, `qgd`

- `gradient_difference`
  - request `gd` / `qgd`

- `second_derivatives_in_q`
  - write `qder2`

- `transition_dipoles`
  - request `tdip`

- `velocity_gauge`
  - choose velocity-gauge dipoles where supported

### Geometry / coordinate controls

- `eckart`
  - rotate reference and current geometries into an Eckart-like frame

- `replace-modes ... end-replace`
  - populate `cootyp` and `coodef`

- `nm2curv ...`
  - populate `nmcurv`, `nmcurvtype`, and `c0`

- `reflect = ...`
  - populate `reflect(m)` and enable reflected dataset writing

- `rotate_modes = ...`
  - populate `rotm` and `rotang`

### DB controls

- `DB0`
  - use only the first DB geometry
  - enable one-point LVC-style analysis

- `db_diab`
  - read diabatic rather than adiabatic DB quantities

- `generate_input`
  - export QC inputs from DB geometries

### Fragment/system transform controls

- `parent_to_fragment_trans`
  - enable fragment/system transformation mode

- `parent_file = ...`
  - parent reference file

- `fragment_file = ...`
  - fragment reference file

- `fragment_nmodes = ...`
  - number of fragment modes

- `system_atom = ...`
  - which atom is treated as the "system" atom

- `system_define = a b c d`
  - system-geometry defining atoms used in the spherical-like coordinate treatment

## 8. How the example outputs connect to the arrays

### `example_vctrans.info`

The top section contains:

- `xcoo0`
- `mass`
- `freq0`
- `nmcoo`

Each `#dataset_*` block contains:

- `energy`
- `asta(n)` under `#state`
- `qcoo`
- `xcoo`

Because this example is effectively low order, you mainly see:

- energies
- points in `q`
- points in Cartesian coordinates

### `vc2.info`

This contains the same reference section, but because `order = 2` and the DB has more data, it can also include:

- gradients
- `q`-projected gradients
- couplings
- Hessians
- `q`-projected Hessians

### `vc2.log`

The later "Maximum Kappa/Lambda/Gamma" sections come from:

- `collectdblvc`
- `analdblvc`

and are based on:

- `qder1`
- `qdcp`
- `qder2`
- `freq0`
- `nenergy`

## 9. Closely related files worth reviewing next

If you want to understand `vctrans` properly, these are the next files I would review:

### `packages/vcham/src/iofiles.f90`

Why it matters:

- `rdfile0` reads the reference file
- `cpfreq` applies input frequency overrides
- `rdpftfiles` prepares the parent/fragment transformation

### `packages/vcham/src/utils.f90`

Why it matters:

- `x2q` and `x2qf` are the core coordinate transforms
- `q2intcoo` defines what internal-coordinate replacement really means numerically
- `dattrans` is the parent-to-fragment geometry transform
- `rotatemodes` mixes normal modes
- `q2curv` handles experimental curvilinear transforms
- `nmeckart` and `rotrans` support the frame / full-basis logic

### `HDmctdh/lib/utilities/ioqc.f90`

Why it matters:

- this is where the real QC parsing happens
- `getxcoo`, `geten`, `getder1`, `getgd`, `getdcp`, `getder2`, and `getnm` all live there

If you specifically care about Q-Chem or Molpro extraction details, this is the file to inspect after `vctrans.F90`.

### `packages/vcham/src/info_to_db.f90`

Why it matters:

- useful if you want to understand the bridge between `.info` files and the database representation

### `packages/vcham/src/vcpnt.F90`

Why it matters:

- it is a close conceptual partner to `vctrans`
- `vcpnt` generates or manipulates point sets, while `vctrans` harvests the resulting electronic-structure data

## 10. Caveats and rough edges from this review

These are worth keeping in mind if you extend or trust the code:

- `readall` declares running counters with `intent(out)` even though they are used like `intent(inout)`.
- `vceckart` has a sign-choice section that can overwrite the best sign flags after a good match was already found.
- `fromDBtoInput` is called with an uninitialised output unit in the current DB path.
- `dcptrans` contains an in-code warning that part of the transformation is probably wrong.
- `readall` still contains a stray debug print.
- the curvilinear transformation path looks tailored to specific systems rather than fully general.
- `q2intcoo` does not provide a full general torsion implementation in the basic replacement path.

## 11. Bottom line

The cleanest mental model of `vctrans` is:

- read a reference harmonic model from `file0`
- read electronic-structure data at nearby geometries
- convert everything into the chosen model coordinates
- write a local vibronic dataset

The most important arrays, in plain English, are:

- `xcoo0`: reference geometry
- `nmcoo`: reference normal-mode directions
- `coonm`: map from Cartesian displacement to normal coordinates
- `qcoo`: where the current geometry sits in that model space
- `qder1`: on-diagonal linear vibronic information
- `qdcp`: off-diagonal coupling information
- `qder2`: quadratic vibronic information

If you only remember one physical idea, it is this:

- the whole file is about taking raw QC information in Cartesian space and re-expressing it as a vibronic model in a mode-based coordinate system around one chosen reference geometry

