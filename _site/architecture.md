```
quantics-knowledge-base/
|
|-- README.md
|-- CONTRIBUTING.md
|-- STYLE_GUIDE.md
|-- CITATION_GUIDE.md
|-- references.bib
|
|-- 00_Project_Overview/
|   |-- project_aims.md
|   |-- how_to_read_this_textbook.md
|   |-- knowledge_map.md
|   \-- roadmap.md
|
|-- 01_Mathematical_Preliminaries/
|   |-- notation.md
|   |-- hilbert_spaces.md
|   |-- basis_expansions.md
|   |-- variational_principles.md
|   |-- matrix_notation.md
|   |-- gaussian_integrals.md
|   \-- gaussian_integrals_code.md
|
|-- 02_Born_Oppenheimer_and_Nonadiabaticity/
|   |-- born_oppenheimer_expansion.md
|   |-- born_oppenheimer_expansion_code.md (not sure if this is needed here; 
|       prob more suited when detailing specific implementation)
|   |-- adiabatic_representation.md
|   |-- nonadiabatic_coupling_terms.md
|   |-- conical_intersections.md
|   |-- topology_and_geometric_phase.md
|   \-- diabatic_representation.md
|
|-- 03_MCTDH_Family/
|   |-- mctdh_overview.md
|   |-- standard_mctdh.md
|   |-- standard_mctdh_code.md
|   |-- rho_mctdh.md
|   |-- rho_mctdh_code.md
|   |-- ml_mctdh.md
|   |-- ml_mctdh_code.md
|   |-- g_mctdh.md
|   |-- g_mctdh_code.md
|   \-- method_relationships.md
|
|-- 04_Gaussian_Wavepacket_Methods/
|   |-- gaussian_wavepackets.md
|   |-- gaussian_wavepackets_code.md
|   |-- vmcg.md
|   |-- vmcg_code.md
|   |-- dd_vmcg.md
|   |-- dd_vmcg_code.md
|   |-- aims.md
|   |-- trajectory_surface_hopping.md
|   \-- method_comparison.md
|
|-- 05_Direct_Dynamics/
|   |-- direct_dynamics_principle.md
|   |-- direct_dynamics_code.md
|   |-- quantum_chemistry_database.md
|   |-- quantum_chemistry_database_code.md: More about sqlite etc
|   |-- local_harmonic_approximation.md
|   |-- local_harmonic_approximation_code.md
|   |-- shepard_interpolation.md
|   |-- shepard_interpolation_code.md
|   |-- hessian_updating.md
|   \-- hessian_updating_code.md
|
|-- 06_Diabatisation/
|   |-- diabatisation_schemes.md
|   |-- why_diabatise.md
|   |-- adiabatic_to_diabatic_transformation.md
|   |-- adiabatic_to_diabatic_transformation_code.md
|   |-- line_integral_formulation.md
|   |-- propagation_diabatisation.md
|   |-- propagation_diabatisation_code.md
|   |-- regularisation_diabatisation.md
|   |-- regularisation_diabatisation_code.md
|   |-- multistate_diabatisation.md
|   |-- multistate_diabatisation_code.md
|   |-- phase_conventions_and_signs.md
|   |-- phase_conventions_and_signs_code.md
|   \-- topology_and_curl_conditions.md
|
|-- 07_Quantics_Workflows/
|   |-- quantics_overview.md
|   |-- input_file_anatomy.md
|   |-- running_mctdh.md
|   |-- running_vmcg.md
|   |-- running_dd_vmcg.md
|   |-- using_makedb.md
|   |-- using_vcham.md
|   |-- reading_output.md
|   \-- troubleshooting.md
|
|-- 08_Quantics_Code_Map/
|   |-- code_map_overview.md
|   |-- directory_structure.md
|   |-- naming_conventions.md
|   |-- data_flow.md
|   |-- equation_to_code_mapping_template.md
|   |-- vmcg_code_pathway.md
|   |-- dd_vmcg_code_pathway.md
|   |-- diabatisation_code_pathway.md
|   |-- database_code_pathway.md
|   \-- future_code_inspection_tasks.md
|
|-- 09_Worked_Examples(computational and mathematical)/
|   |-- two_state_avoided_crossing.md
|   |-- conical_intersection_toy_model.md
|   |-- butatriene_cation.md
|   |-- allene_cation.md
|   |-- harmonic_oscillators.md
|   \-- example_input_files/
|
|-- 10_Reference_Guides/
|   |-- symbols_and_notation.md
|   |-- acronym_glossary.md
|   |-- method_comparison_table.md
|   |-- common_misconceptions.md
|   |-- reading_list.md
|   \-- bibliography_notes.md
|
\-- derivations/
    |-- derivation_bo_coupled_equations.md
    |-- derivation_dirac_frenkel_to_mctdh.md
    |-- derivation_vmcg_equations_of_motion.md
    |-- derivation_dd_vmcg_database_interpolation.md
    |-- derivation_adt_equation.md
    |-- derivation_line_integral_adt.md
    |-- derivation_curl_condition.md
    |-- derivation_gaussian_matrix_elements.md
    \-- derivation_phase_and_sign_conventions.md