---
title: Diabatisation Deep Dive
---

## Overview

This section collects the theory, implementation notes, flowcharts, and specialised topics for diabatisation in the direct-dynamics workflow.

## Recommended Reading Path

1. [Propagation diabatisation](intermediates/int01_propagation_diabatisation_main.md)
2. [Propagation diabatisation safety-guard breakdown](intermediates/int01_propagation_diabatisation_safetyguard_breakdown.md)
3. [Specialised topics overview](specialised_propagation_diabatisation_deepdive/)

## Implementation Notes

- [Subroutine optqvc](code+breakdown/subroutine_optqvc.md)
- [Subroutine integap4_stepnact](code+breakdown/subroutine_integap4_stepnact.md)
- [Subroutine diabat4_2](code+breakdown/subroutine_diabat4_2.md)
- [Subroutine dddb_rd_gp](code+breakdown/subroutine_dddb_rd_gp.md)

## Flowcharts

- [Flowchart diabat4_2, concept-oriented](code+breakdown/flowchart_diabat4_2_conceptbased.md)
- [Flowchart diabat4_2, subroutine-oriented](code+breakdown/flowchart_diabat4_2_subroutinebased.md)

## Mathematical Background

- [Transformations between adiabatic and diabatic Hamiltonians](derivations/derivations_adiab_diab_relation.md)
- [QVC path model](derivations/derivations_qvc_path_model.md)

## Specialised Topics

- [Specialised topics overview](specialised_propagation_diabatisation_deepdive/)
- [Connections between split diabatic representations and residual couplings](specialised_propagation_diabatisation_deepdive/split_diabatic_representations_and_residual_couplings/)


# for me writing sequences
1. int03_adt_integrability_and_topology_overview.md
2. int04_curl_condition_analyticity_and_uniqueness.md
3. derivation_curl_condition_from_adt.md
4. int05_topological_matrix_and_single_valued_diabatic_potentials.md
5. derivation_path_ordered_adt_and_closed_contours.md
6. derivation_topological_matrix_condition_for_W.md
7. two_state_loop_and_sign_change.md
8. int06_complete_vs_reduced_hilbert_space_adt.md
9. derivation_reduced_subhilbert_space_errors.md
10. int07_constructing_a_good_subhilbert_space.md
11. three_state_sign_flips_and_D_matrix.md
12. int08_multistate_topology_signs_and_degeneracies.md
13. finite_subspace_failure_modes.md