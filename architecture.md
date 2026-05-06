``` mermaid
flowchart LR
    root["quantics-knowledge-base/"]

    %% Root Files
    root --> f1["README.md"]
    root --> f2["CONTRIBUTING.md"]
    root --> f3["STYLE_GUIDE.md"]
    root --> f4["CITATION_GUIDE.md"]
    root --> f5["references.bib"]

    %% 00_Project_Overview
    root --> d00["00_Project_Overview/"]
    d00 --> d00f1["project_aims.md"]
    d00 --> d00f2["how_to_read_this_textbook.md"]
    d00 --> d00f3["knowledge_map.md"]
    d00 --> d00f4["roadmap.md"]

    %% 01_Mathematical_Preliminaries
    root --> d01["01_Mathematical_Preliminaries/"]
    d01 --> d01f1["notation.md"]
    d01 --> d01f2["hilbert_spaces.md"]
    d01 --> d01f3["basis_expansions.md"]
    d01 --> d01f4["variational_principles.md"]
    d01 --> d01f5["matrix_notation.md"]
    d01 --> d01f6["gaussian_integrals.md"]
    d01 --> d01f7["gaussian_integrals_code.md"]

    %% 02_Born_Oppenheimer_and_Nonadiabaticity
    root --> d02["02_Born_Oppenheimer_and_Nonadiabaticity/"]
    d02 --> d02f1["bornhuang_expansion.md"]
    %% d02 --> d02f2["born_oppenheimer_expansion_code.md"]
    d02 --> d02f2["adiabatic_representation.md"]
    %%d02 --> d02f4["nonadiabatic_coupling_terms.md"]
    d02 --> d02f3["diabatic_representation.md"]

    d02 --> d02f5["conical_intersections.md"]
    d02 --> d02f6["symmetry_of_conical_intersections.md"]

    %% 03_MCTDH_Family
    root --> d03["03_MCTDH_Family/"]
    d03 --> d03f1["mctdh_overview.md"]
    d03 --> d03f2["standard_mctdh.md"]
    d03 --> d03f3["standard_mctdh_code.md"]
    d03 --> d03f4["rho_mctdh.md"]
    d03 --> d03f5["rho_mctdh_code.md"]
    d03 --> d03f6["ml_mctdh.md"]
    d03 --> d03f7["ml_mctdh_code.md"]
    d03 --> d03f8["g_mctdh.md"]
    d03 --> d03f9["g_mctdh_code.md"]
    d03 --> d03f10["method_relationships.md"]

    %% 04_Gaussian_Wavepacket_Methods
    root --> d04["04_Gaussian_Wavepacket_Methods/"]
    d04 --> d04f1["gaussian_wavepackets.md"]
    d04 --> d04f2["gaussian_wavepackets_code.md"]
    d04 --> d04f3["vmcg.md"]
    d04 --> d04f4["vmcg_code.md"]
    d04 --> d04f5["dd_vmcg.md"]
    d04 --> d04f6["dd_vmcg_code.md"]
    d04 --> d04f7["aims.md"]
    d04 --> d04f8["trajectory_surface_hopping.md"]
    d04 --> d04f9["method_comparison.md"]

    %% 05_Direct_Dynamics
    root --> d05["05_Direct_Dynamics/"]
    d05 --> d05f1["direct_dynamics_principle.md"]
    d05 --> d05f2["direct_dynamics_code.md"]
    d05 --> d05f3["quantum_chemistry_database.md"]
    d05 --> d05f4["quantum_chemistry_database_code.md"]
    d05 --> d05f5["local_harmonic_approximation.md"]
    d05 --> d05f6["local_harmonic_approximation_code.md"]
    d05 --> d05f7["shepard_interpolation.md"]
    d05 --> d05f8["shepard_interpolation_code.md"]
    d05 --> d05f9["hessian_updating.md"]
    d05 --> d05f10["hessian_updating_code.md"]

    %% 06_Diabatisation
    root --> d06["06_Diabatisation/"]
    d06 --> d06f1["diabatisation_schemes.md"]
    d06 --> d06f2["why_diabatise.md"]
    d06 --> d06f3["adiabatic_to_diabatic_transformation.md"]
    d06 --> d06f4["adiabatic_to_diabatic_transformation_code.md"]
    d06 --> d06f5["line_integral_formulation.md"]
    d06 --> d06f6["propagation_diabatisation.md"]
    d06 --> d06f7["propagation_diabatisation_code.md"]
    d06 --> d06f8["regularisation_diabatisation.md"]
    d06 --> d06f9["regularisation_diabatisation_code.md"]
    d06 --> d06f10["multistate_diabatisation.md"]
    d06 --> d06f11["multistate_diabatisation_code.md"]
    d06 --> d06f12["phase_conventions_and_signs.md"]
    d06 --> d06f13["phase_conventions_and_signs_code.md"]
    d06 --> d06f14["topology_and_curl_conditions.md"]

    %% 07_Quantics_Workflows
    root --> d07["07_Quantics_Workflows/"]
    d07 --> d07f1["quantics_overview.md"]
    d07 --> d07f2["input_file_anatomy.md"]
    d07 --> d07f3["running_mctdh.md"]
    d07 --> d07f4["running_vmcg.md"]
    d07 --> d07f5["running_dd_vmcg.md"]
    d07 --> d07f6["using_makedb.md"]
    d07 --> d07f7["using_vcham.md"]
    d07 --> d07f8["reading_output.md"]
    d07 --> d07f9["troubleshooting.md"]

    %% 08_Quantics_Code_Map
    root --> d08["08_Quantics_Code_Map/"]
    d08 --> d08f1["code_map_overview.md"]
    d08 --> d08f2["directory_structure.md"]
    d08 --> d08f3["naming_conventions.md"]
    d08 --> d08f4["data_flow.md"]
    d08 --> d08f5["equation_to_code_mapping_template.md"]
    d08 --> d08f6["vmcg_code_pathway.md"]
    d08 --> d08f7["dd_vmcg_code_pathway.md"]
    d08 --> d08f8["diabatisation_code_pathway.md"]
    d08 --> d08f9["database_code_pathway.md"]
    d08 --> d08f10["future_code_inspection_tasks.md"]

    %% 09_Worked_Examples
    root --> d09["09_Worked_Examples/"]
    d09 --> d09f1["two_state_avoided_crossing.md"]
    d09 --> d09f2["conical_intersection_toy_model.md"]
    d09 --> d09f3["butatriene_cation.md"]
    d09 --> d09f4["allene_cation.md"]
    d09 --> d09f5["harmonic_oscillators.md"]
    d09 --> d09f6["example_input_files/"]

    %% 10_Reference_Guides
    root --> d10["10_Reference_Guides/"]
    d10 --> d10f1["symbols_and_notation.md"]
    d10 --> d10f2["acronym_glossary.md"]
    d10 --> d10f3["method_comparison_table.md"]
    d10 --> d10f4["common_misconceptions.md"]
    d10 --> d10f5["reading_list.md"]
    d10 --> d10f6["bibliography_notes.md"]

    %% derivations
    root --> d11["derivations/"]
    d11 --> d11f1["derivation_bo_coupled_equations.md"]
    d11 --> d11f2["derivation_dirac_frenkel_to_mctdh.md"]
    d11 --> d11f3["derivation_vmcg_equations_of_motion.md"]
    d11 --> d11f4["derivation_dd_vmcg_database_interpolation.md"]
    d11 --> d11f5["derivation_adt_equation.md"]
    d11 --> d11f6["derivation_line_integral_adt.md"]
    d11 --> d11f7["derivation_curl_condition.md"]
    d11 --> d11f8["derivation_gaussian_matrix_elements.md"]
    d11 --> d11f9["derivation_phase_and_sign_conventions.md"]

```