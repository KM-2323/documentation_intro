---
title: Diabatisation Deep Dive
---

## Overview

This section collects the theory, implementation notes, flowcharts, derivations, worked examples, and specialised topics for diabatisation in the direct-dynamics workflow.

## Recommended Reading Path

1. [Propagation diabatisation](intermediates/int01_propagation_diabatisation_main.md)
2. [Propagation diabatisation safety-guard breakdown](intermediates/int01_propagation_diabatisation_safetyguard_breakdown.md)
3. [Procrustes diabatisation](intermediates/int02_proscrutes_diabatisation.md)
4. [Specialised topics overview](specialised_propagation_diabatisation_deepdive/index.md)
5. [ADT integrability, topology, and finite electronic subspaces](specialised_propagation_diabatisation_deepdive/spec03_adt_integrability_and_topology_overview.md)
6. [Curl condition, analyticity, and uniqueness of the ADT matrix](specialised_propagation_diabatisation_deepdive/spec04_curl_condition_analyticity_and_uniqueness.md)
7. [Derivation of the curl condition from the ADT equation](derivations/derivation_curl_condition_from_adt.md)
8. [Topological matrix and single-valued diabatic potentials](specialised_propagation_diabatisation_deepdive/spec05_topological_matrix_and_single_valued_diabatic_potentials.md)
9. [Integral formulation and path dependence of the ADT matrix](derivations/derivation_path_ordered_adt_and_closed_contours.md)
10. [Condition for single-valued diabatic potentials from the topological matrix](derivations/derivation_topological_matrix_condition_for_W.md)
11. [Two-state loop and sign change](worked_examples/adt_topology/example01_two_state_loop_and_sign_change.md)
12. [Complete versus reduced Hilbert space ADT](specialised_propagation_diabatisation_deepdive/spec06_complete_vs_reduced_hilbert_space_adt.md)
13. [Derivation of reduced sub-Hilbert-space ADT errors](derivations/derivation_reduced_subhilbert_space_errors.md)
14. [Constructing a good sub-Hilbert space](specialised_propagation_diabatisation_deepdive/spec07_constructing_a_good_subhilbert_space.md)
15. [Three-state sign flips and the topological matrix](worked_examples/adt_topology/example02_three_state_sign_flips_and_D_matrix.md)
16. [Multistate topology, sign changes, and degeneracies](specialised_propagation_diabatisation_deepdive/spec08_multistate_topology_signs_and_degeneracies.md)
<!-- 17. [Finite-subspace failure modes](worked_examples/adt_topology/finite_subspace_failure_modes.md) -->

## Core Propagation Notes

- [Propagation diabatisation](intermediates/int01_propagation_diabatisation_main.md)
- [Propagation diabatisation safety-guard breakdown](intermediates/int01_propagation_diabatisation_safetyguard_breakdown.md)
- [Procrustes diabatisation](intermediates/int02_proscrutes_diabatisation.md)

## Specialised Topics

- [Specialised topics overview](specialised_propagation_diabatisation_deepdive/)
- [ADT integrability, topology, and finite electronic subspaces](specialised_propagation_diabatisation_deepdive/spec03_adt_integrability_and_topology_overview.md)
- [Curl condition, analyticity, and uniqueness of the ADT matrix](specialised_propagation_diabatisation_deepdive/spec04_curl_condition_analyticity_and_uniqueness.md)
- [Topological matrix and single-valued diabatic potentials](specialised_propagation_diabatisation_deepdive/spec05_topological_matrix_and_single_valued_diabatic_potentials.md)
- [Complete versus reduced Hilbert space ADT](specialised_propagation_diabatisation_deepdive/spec06_complete_vs_reduced_hilbert_space_adt.md)
- [Constructing a good sub-Hilbert space](specialised_propagation_diabatisation_deepdive/spec07_constructing_a_good_subhilbert_space.md)
- [Multistate topology, sign changes, and degeneracies](specialised_propagation_diabatisation_deepdive/spec08_multistate_topology_signs_and_degeneracies.md)
- [Connections between split diabatic representations and residual couplings](specialised_propagation_diabatisation_deepdive/split_diabatic_representations_and_residual_couplings/)

## Derivations

- [Derivations overview](derivations/)
- [Transformations between adiabatic and diabatic Hamiltonians](derivations/derivations_adiab_diab_relation.md)
- [QVC path model](derivations/derivations_qvc_path_model.md)
- [Derivation of the curl condition from the ADT equation](derivations/derivation_curl_condition_from_adt.md)
- [Integral formulation and path dependence of the ADT matrix](derivations/derivation_path_ordered_adt_and_closed_contours.md)
- [Condition for single-valued diabatic potentials from the topological matrix](derivations/derivation_topological_matrix_condition_for_W.md)
- [Derivation of reduced sub-Hilbert-space ADT errors](derivations/derivation_reduced_subhilbert_space_errors.md)

## Worked Examples

- [Worked examples overview](worked_examples/)
- [ADT topology worked examples](worked_examples/adt_topology/)
- [Two-state loop and sign change](worked_examples/adt_topology/example01_example01_two_state_loop_and_sign_change.md)
- [Three-state sign flips and the topological matrix](worked_examples/adt_topology/example02_example02_three_state_sign_flips_and_D_matrix.md)
- [Finite-subspace failure modes](worked_examples/adt_topology/finite_subspace_failure_modes.md)

## Implementation Notes

- [Subroutine optqvc](code+breakdown/subroutine_optqvc.md)
- [Subroutine integap4_stepnact](code+breakdown/subroutine_integap4_stepnact.md)
- [Subroutine diabat4_2](code+breakdown/subroutine_diabat4_2.md)
- [Subroutine dddb_rd_gp](code+breakdown/subroutine_dddb_rd_gp.md)

## Flowcharts

- [Flowchart diabat4_2, concept-oriented](code+breakdown/flowchart_diabat4_2_conceptbased.md)
- [Flowchart diabat4_2, subroutine-oriented](code+breakdown/flowchart_diabat4_2_subroutinebased.md)
