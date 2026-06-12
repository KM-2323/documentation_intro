# Quantics Dynamics Knowledge Base and Code Manual

This repository is an internal knowledge base for quantum dynamics theory, Quantics usage, and selected Quantics implementation notes within the Graham Worth group.

The aim is to record how the mathematical objects used in quantum dynamics are defined, derived, interpreted, and represented in calculations. The notes are intended to support both learning and development: they should help new users understand the theory behind the methods, and help experienced users or developers trace how those ideas enter practical Quantics workflows.

The site is written as a modular textbook and code manual. Some pages introduce physical concepts and derivations. Others document algorithms, input/output quantities, implementation choices, or source-code mappings. Where a code mapping has not yet been checked against the source, this should be stated explicitly.

---

## Project aims

This project has three main aims.

First, it provides structured notes on the theory used in quantum dynamics. Topics include the Born--Huang expansion, adiabatic and diabatic representations, nonadiabatic coupling terms, conical intersections, MCTDH-family methods, vMCG, DD-vMCG, trajectory surface hopping, ab initio multiple spawning, and related methods.

Second, it connects theory to implementation where possible. Mathematical objects such as wavefunction coefficients, potential matrices, derivative couplings, adiabatic-to-diabatic transformation matrices, and database quantities should be linked to the corresponding variables, routines, or data structures in Quantics when the source code has been inspected.

Third, it provides a maintainable reference for users and developers. The notes should help with setting up calculations, interpreting outputs, checking assumptions, understanding numerical safeguards, and modifying implementation details without losing sight of the underlying theory.

---

## How the site is organised

The repository separates conceptual explanation, derivation, and code documentation.

- **Theory notes**  
  These files introduce the physical picture, notation, mathematical formulation, assumptions, dimensional checks, examples, and interpretation.  
  Example: `int01_propagation_diabatisation_main.md`.

- **Derivation notes**  
  These files contain longer algebraic derivations that would interrupt the flow of the main text.  
  Example: `derivation_gauge_covariant_operator_transformation.md`.

- **Code notes**  
  These files describe algorithmic flow, relevant routines, important variables, input/output quantities, numerical safeguards, and equation-to-code mappings.  
  Example: `subroutine_diabat4_2.md`.

- **Specialised deep dives**  
  These files collect topics that require more detailed discussion, such as finite-subspace assumptions, ADT topology, sign conventions, path dependence, or multistate diabatisation.

This separation is intentional. The main theory pages should remain readable, while derivation and code pages provide the additional detail needed for verification or implementation work.

---

## Reference and local development guide

The [Reference Guides](10_References_Guides/) directory contains material for maintaining and extending the site.

- **Glossary and notation guide**  
  Central definitions of symbols, notation conventions, terminology, and recurrent method names.

- **Site customisation**  
  Notes on layout, styling, MathJax configuration, and shared site components.

- **Local testing with Jekyll**  
  Instructions for building and previewing the site locally before deployment. Markdown editors are often forgiving, but the static site generator is less tolerant of broken links, malformed front matter, or invalid syntax.

- **Version control**  
  Notes on `.gitignore`, build artefacts, local test outputs, and temporary files that should not be committed.

---

## Overall structure

- [System Architecture](architecture.md)  
  Structural map of the documentation and high-level table of contents.

- [00 Project Overview](00_project_overview/)  
  Project aims, knowledge map, and guidance on how to use the site.

- [01 Primer](01_Primer/)  
  Short refreshers on mathematical tools and background concepts used throughout the notes.

- [02 Born-Oppenheimer and Nonadiabaticity](02_Born_Oppenheimer_and_Nonadiabaticity/)  
  Foundational material on the Born--Huang expansion, adiabatic approximations, diabatic representations, nonadiabatic coupling terms, and conical intersections.

- [03 MCTDH Family](03_MCTDH_Family/)  
  Notes, derivations, and diagrams for the MCTDH family of methods.

- [04 vMCG Family](04_vMCG/)  
  Notes and diagrams for vMCG, DD-vMCG, and related Gaussian-wavepacket methods.

- [05 Direct Dynamics](05_Direct_Dynamics/)  
  Notes on direct-dynamics machinery, quantum-chemistry database usage, interpolation, and related code paths.

- [06 Diabatisation Deep Dive](06_diabatisation_deeperdive/)  
  Theory, implementation notes, flowcharts, derivations, and specialised topics for diabatisation schemes.

- [09 Electronic Structure Methods](09_electronic_structure_methods/)  
  Notes on electronic-structure methods and interfaces relevant to the dynamics workflows.

- [Site Maintenance Guide](10_References_Guides/)  
  Guides for maintaining the site and its infrastructure.

- [Jekyll Site Maintenance](10_References_Guides/Jekyll_site_maintenance.md)  
  How GitHub Pages builds the site, how to preview locally, and how to update shared layouts, navigation, and MathJax configuration.

- [Notation and Symbols Glossary](10_References_Guides/Symbols_and_notations.md)  
  Definitions of mathematical symbols and notation used throughout the knowledge base.

- [Glossary](10_References_Guides/glossary.md)  
  Definitions of recurrent words, phrases, method names, and code routines.