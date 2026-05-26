# Quantics Dynamics Knowledge Base & Code Manual

Welcome to the living internal textbook and code manual for the Graham Worth group. 

This repository is designed to bridge the gap between rigorous quantum dynamics theory and its practical implementation within the Quantics suite. It serves as a comprehensive, modular, and pedagogical resource tailored for researchers at all levels—from incoming master's students to experienced postdoctoral researchers. 

## Project Aims

The primary objective of this project is to provide a cohesive knowledge base that demystifies both the underlying physics and the underlying code architecture. This resource aims to:
* **Explain from First Principles:** Break down complex mathematical theories, including standard MCTDH, rho-MCTDH, ML-MCTDH, G-MCTDH, vMCG, and DD-vMCG, alongside methods like trajectory surface hopping and ab initio multiple spawning.
* **Connect Theory to Implementation:** Directly map theoretical objects, equations, and derivations to their specific representations, subroutines, and variables within the Quantics source code.
* **Foster Reproducibility and Development:** Provide robust, citation-rich documentation to assist users in running reliable simulations and to guide developers in confidently modifying or expanding the codebase.

## What the Site Entails

To maintain clarity, the repository logically separates conceptual physics from software engineering by utilising a paired-file structure for major topics:

* **Theory Documentation (e.g., `propagation_diabatisation.md`):** Focuses on the physical picture, mathematical formulation, complete derivations, dimensional checks, and toy models. 
* **Code Mapping Documentation (e.g., `propagation_diabatisation_code.md`):** Details algorithmic flow, relevant input keywords, output quantities, and explicit equation-to-code mapping. Where deep source-code inspection is pending, structured placeholders are clearly maintained.

## Reference & Local Development Guide

The [References Guides](10_References_Guides)directory contains essential guidelines and infrastructure documentation for contributing to and maintaining this site:

* **Glossary and Notation Guide:** A centralised reference for the mathematical notation, variable naming conventions, and terminology used throughout the textbook.
* **Site Customisation:** Detailed guides covering how to modify the site's layout and styling using HTML, SCSS, and JavaScript.
* **Local Testing with Jekyll:** While basic Markdown editors are highly forgiving of formatting anomalies, static site generators require strict syntax. This section provides instructions for using Jekyll to build and test the site locally, ensuring structural integrity before deployment. It includes a guide on how to serve the Jekyll-built site locally using a standard Python HTTP server.
* **Version Control:** Explanations of the repository's `.gitignore` configuration, ensuring that build artefacts, local test outputs, and temporary files remain out of the version history.

## Overall Structure

- [System Architecture](architecture.md)
  - A structural map of the documentation and a high-level table of contents for the guide.

- [00 Project Overview](00_project_overview/)
  - Essential reading before starting: project aims, the knowledge map, and guidance on how to use the textbook.

- [01 Primer](01_Primer/)
  - Short refreshers on mathematical concepts and background tools used throughout the notes.

- [02 Born-Oppenheimer And Nonadiabaticity](02_Born_Oppenheimer_and_Nonadiabaticity/)
  - Foundational theory covering the Born-Huang expansion, adiabatic approximations, diabatic representations, nonadiabatic couplings, and conical intersections.

- [03 MCTDH Family](03_MCTDH_Family/)
  - Notes and diagrams for the MCTDH family of methods.

- [04 vMCG family](04_vMCG/)
  - Note and diagras for the vMCG family of methods

- [05 Direct Dynamics](05_Direct_Dynamics/)
  - Implementation notes for direct-dynamics machinery and related code paths.

- [06 Diabatisation Deep Dive](06_diabatisation_deeperdive/)
  - Theory, implementation notes, flowcharts, derivations, and specialised topics for implemented diabatisation schemes.

- [Electronc Methods](09_electronic_methods)


- [Site Maintenance Guide](10_References_Guides/)

- [Jekyll Site Maintenance](10_References_Guides/Jekyll_site_maintenance.md)
  - How GitHub Pages builds the site, how to preview locally, and how to update shared layouts, navigation, and MathJax config.

- [Notation And Symbols Glossary](10_References_Guides/Symbols_and_notations.md)
  - Definitions of the symbols and notation used throughout the knowledge base.

- [Glossary](10_References_Guides/glossary.md)
    - Definitions of recurrent words,  phrases or code routines