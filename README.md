# Irodov general physics solutions and answer audit

Independent worked solutions indexed against I. E. Irodov’s *Problems in General Physics* (Mir Publishers, English translation 1981, third printing 1988). The project covers **1,878 problems in 40 chapters**. It includes derivations, confidence ratings, limitations, and 143 generated figures.

[Open the searchable site](https://supertjhok.github.io/irodov-physics-audit/) · [Browse the chapters](#chapters) · [Read the answer audit](audit/README.md) · [Machine-readable index](index.json)

## What the audit found

The audit compared **1,825 entries** with independently written solutions. The published answer section contains a mix of final values, formulas, diagrams and worked explanations. The solution and audit for 6.261 cover part (a).

| Comparison result | Problems |
| --- | ---: |
| Agreement | 1,539 |
| Printed error | 94 |
| Error in the independent record | 2 |
| Convention or model difference | 148 |
| Partial agreement | 42 |
| No separately numbered answer | 53 |

- **1.375** · A transcription error in our input changed 500 MeV to 560 MeV. The correct proton momentum is **1.09 GeV/c**. [Finding](audit/README.md#1375)
- **1.369** · Our labels assigned the book’s density convention to the wrong branch. Its definition gives **0.60c**. [Finding](audit/README.md#1369)
- **2.185** · The published formula evaluates to **120.65 J**. The printed numerical answer is **1.2 J**. [Finding](audit/README.md#2185)
- **3.337** · Integration along the supplied nonlinear magnetization curve gives **about 0.85 J**. The book obtains **2.0 J** using the linear-material expression. [Finding](audit/README.md#3337)
- **6.253(b)** · Conservation of nucleon number requires **¹⁸F**. The book prints **¹⁷F**. [Finding](audit/README.md#6253)

## How to use the material

The chapter files pair the problem statements with independent derivations. Source page and figure numbers refer to the cited edition. Confidence ratings reflect derivation and input quality. Three records are provisional and one is partial. Audit amendments appear with the worked solutions and in the structured records. The audit report preserves the pre-audit results for comparison.

Each chapter has a readable Markdown page and JSON records. The audit JSON uses the problem ID as its key and records the verdict, available printed page references, and the reasoning. A Python lookup works without third-party dependencies.

```console
python lookup.py 1.375
python lookup.py 3.337 --audit
```

To preview the GitHub Pages site locally, run `python -m http.server 8000` from this folder and open the server address in a browser.

## Chapters

| Chapter | Problems | Data |
| --- | ---: | --- |
| [1.1 Kinematics](chapters/1.1.md) | 58 | [JSON](chapters/1.1.json) |
| [1.2 The Fundamental Equation of Dynamics](chapters/1.2.md) | 59 | [JSON](chapters/1.2.json) |
| [1.3 Laws of Conservation of Energy, Momentum, and Angular Momentum](chapters/1.3.md) | 82 | [JSON](chapters/1.3.json) |
| [1.4 Universal Gravitation](chapters/1.4.md) | 34 | [JSON](chapters/1.4.json) |
| [1.5 Dynamics of a Solid Body](chapters/1.5.md) | 56 | [JSON](chapters/1.5.json) |
| [1.6 Elastic Deformations of a Solid Body](chapters/1.6.md) | 25 | [JSON](chapters/1.6.json) |
| [1.7 Hydrodynamics](chapters/1.7.md) | 25 | [JSON](chapters/1.7.json) |
| [1.8 Relativistic Mechanics](chapters/1.8.md) | 49 | [JSON](chapters/1.8.json) |
| [2.1 Equation of the Gas State. Processes](chapters/2.1.md) | 25 | [JSON](chapters/2.1.json) |
| [2.2 The First Law of Thermodynamics. Heat Capacity](chapters/2.2.md) | 36 | [JSON](chapters/2.2.json) |
| [2.3 Kinetic Theory of Gases. Boltzmann's Law and Maxwell's Distribution](chapters/2.3.md) | 51 | [JSON](chapters/2.3.json) |
| [2.4 The Second Law of Thermodynamics. Entropy](chapters/2.4.md) | 47 | [JSON](chapters/2.4.json) |
| [2.5 Liquids. Capillary Effects](chapters/2.5.md) | 25 | [JSON](chapters/2.5.json) |
| [2.6 Phase Transformations](chapters/2.6.md) | 35 | [JSON](chapters/2.6.json) |
| [2.7 Transport Phenomena](chapters/2.7.md) | 38 | [JSON](chapters/2.7.json) |
| [3.1 Constant Electric Field in Vacuum](chapters/3.1.md) | 53 | [JSON](chapters/3.1.json) |
| [3.2 Conductors and Dielectrics in an Electric Field](chapters/3.2.md) | 47 | [JSON](chapters/3.2.json) |
| [3.3 Electric Capacitance. Energy of an Electric Field](chapters/3.3.md) | 46 | [JSON](chapters/3.3.json) |
| [3.4 Electric Current](chapters/3.4.md) | 72 | [JSON](chapters/3.4.json) |
| [3.5 Constant Magnetic Field. Magnetics](chapters/3.5.md) | 69 | [JSON](chapters/3.5.json) |
| [3.6 Electromagnetic Induction. Maxwell's Equations](chapters/3.6.md) | 84 | [JSON](chapters/3.6.json) |
| [3.7 Motion of Charged Particles in Electric and Magnetic Fields](chapters/3.7.md) | 36 | [JSON](chapters/3.7.json) |
| [4.1 Mechanical Oscillations](chapters/4.1.md) | 93 | [JSON](chapters/4.1.json) |
| [4.2 Electric Oscillations](chapters/4.2.md) | 56 | [JSON](chapters/4.2.json) |
| [4.3 Elastic Waves. Acoustics](chapters/4.3.md) | 39 | [JSON](chapters/4.3.json) |
| [4.4 Electromagnetic Waves. Radiation](chapters/4.4.md) | 36 | [JSON](chapters/4.4.json) |
| [5.1 Photometry and Geometrical Optics](chapters/5.1.md) | 63 | [JSON](chapters/5.1.json) |
| [5.2 Interference of Light](chapters/5.2.md) | 33 | [JSON](chapters/5.2.json) |
| [5.3 Diffraction of Light](chapters/5.3.md) | 60 | [JSON](chapters/5.3.json) |
| [5.4 Polarization of Light](chapters/5.4.md) | 43 | [JSON](chapters/5.4.json) |
| [5.5 Dispersion and Absorption of Light](chapters/5.5.md) | 24 | [JSON](chapters/5.5.json) |
| [5.6 Optics of Moving Sources](chapters/5.6.md) | 22 | [JSON](chapters/5.6.json) |
| [5.7 Thermal Radiation. Quantum Nature of Light](chapters/5.7.md) | 47 | [JSON](chapters/5.7.json) |
| [6.1 Scattering of Particles. Rutherford-Bohr Atom](chapters/6.1.md) | 48 | [JSON](chapters/6.1.json) |
| [6.2 Wave Properties of Particles. Schrodinger Equation](chapters/6.2.md) | 48 | [JSON](chapters/6.2.json) |
| [6.3 Properties of Atoms. Spectra](chapters/6.3.md) | 70 | [JSON](chapters/6.3.json) |
| [6.4 Molecules and Crystals](chapters/6.4.md) | 47 | [JSON](chapters/6.4.json) |
| [6.5 Radioactivity](chapters/6.5.md) | 35 | [JSON](chapters/6.5.json) |
| [6.6 Nuclear Reactions](chapters/6.6.md) | 42 | [JSON](chapters/6.6.json) |
| [6.7 Elementary Particles](chapters/6.7.md) | 20 | [JSON](chapters/6.7.json) |
