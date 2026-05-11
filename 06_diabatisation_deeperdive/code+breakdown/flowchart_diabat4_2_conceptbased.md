``` mermaid
flowchart TD
    A[New GWP geometry q_plus] --> B[Read / predict diabatic model from QC database]
    B --> C[Diagonalise predicted diabatic matrix]
    C --> D[Build predicted adiabatic gradients and derivative data]
    D --> E{QC calculation available?}

    E -->|No / failed| F[Use predicted data and mark interpolation fallback]
    E -->|Yes| G[Compare predicted and raw QC data]

    G --> H{Derivative-coupling overlap acceptable?}
    H -->|Poor| I[Flag possible intruder state]
    H -->|Opposite sign but good magnitude| J[Flip coupling sign]
    H -->|Good| K[Continue]

    K --> L{Diabatic ordering changed or gap too small?}
    L -->|Yes| M[Use QVC / cubic path model fallback]
    L -->|No| N[Integrate NACV along path]

    N --> O[Propagate ADT matrix]
    M --> P[Obtain fallback transformation]
    O --> Q[Transform actual QC adiabatic data]
    P --> Q
    F --> Q

    Q --> R[Store diabatic W, gradients, Hessians, and raw QC data]
```