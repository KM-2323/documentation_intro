``` mermaid
flowchart TD
    A[larger diabatisation driver] --> B[diabat4_2]

    B --> C[1.dddb_rd]
    C --> D[dddb_rd_gp]
    D --> E[distdb_gp]
    E --> F[distdb1]
    D --> |step < than threshold| G[shiftdd]
    D --> |step > than threshold| H[Shepard interpolation of shifted LHAs]

    B --> I[2. sign / overlap checks]
    B --> J{3. lflip or small gap?}

    J -->|yes| K[optqvc]
    J -->|no| L[intengap4]
    L --> M[stepnact4]
    M --> N[propadt]

    K --> O[transform]
    N --> O
    B --> O
```

1. `diabat4_2` acts as the main driver for the propagation diabatisation step.
2. `dddb_rd` and `dddb_rd_gp` read or interpolate the local database model.
3. `distdb_gp`, `distdb1`, and `shiftdd` support the distance and local-shift operations used in database prediction.
4. `intengap4` and `stepnact4` construct the one-dimensional path information needed to integrate the coupling.
5. `propadt` propagates the transformation matrix.
6. `optqvc` handles the fallback path model when the normal branch is judged unreliable.
7. `transform` applies the final transformation to the quantum-chemistry adiabatic data.