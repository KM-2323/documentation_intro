```mermaid
graph TD

    TDSE["Time-dependent Schrodinger equation"]
    BO["Born--Oppenheimer expansion"]
    ADREP["Adiabatic representation"]
    NAC["Nonadiabatic coupling terms"]
    CI["Conical intersections and topology"]
    DIAB["Diabatic / quasi-diabatic representation"]

    MCTDH["MCTDH"]
    ML["ML-MCTDH"]
    GMCTDH["G-MCTDH"]
    VMCG["vMCG"]
    DDVMCG["DD-vMCG"]

    DD["Direct dynamics"]
    QCDB["Quantum chemistry database"]
    LHA["Local harmonic approximation"]
    SHEP["Shepard interpolation"]

    ADT["Adiabatic-to-diabatic transformation"]
    PROP["Propagation diabatisation"]
    REG["Regularisation diabatisation"]
    PHASE["Phase conventions and signs"]

    QUANTICS["Quantics workflows"]
   %% CODEMAP["Quantics code map"]

    %%REG -->CODEMAP
    TDSE --> BO
    BO --> ADREP
    ADREP --> NAC
    NAC --> CI
    NAC --> DIAB
    DIAB --> ADT
    ADT --> PROP
    ADT --> REG
    PROP --> PHASE

    TDSE --> MCTDH
    MCTDH --> ML
    MCTDH --> GMCTDH
    GMCTDH --> VMCG
    VMCG --> DDVMCG

    DDVMCG --> DD
    DD --> QCDB
    QCDB --> LHA
    QCDB --> SHEP
    DDVMCG --> PROP

    DDVMCG --> QUANTICS
    %%QUANTICS --> CODEMAP
    %%PROP --> CODEMAP
    %%QCDB --> CODEMAP

    %% Setting up internal links to the nodes
    click BO "../02_Born_Oppenheimer_and_Nonadiabaticity/01_bornhuang_expansion.html" "View Born-Oppenheimer Derivation"
```

## Directory Links
Use the links below to jump directly to any of the topics outlined in the knowledge map.

[Born--Oppenheimer expansion](../02_Born_Oppenheimer_and_Nonadiabaticity/01_bornhuang_expansion.md)  
