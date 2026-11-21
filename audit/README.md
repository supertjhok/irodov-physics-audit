# Published-answer audit

[Project overview](../README.md)

Edition audited: I. E. Irodov, *Problems in General Physics*, Mir Publishers, English translation 1981, third printing 1988. The page citations below use the printed pagination.

The independent solutions were prepared from the problem statements and reference data. The published answers were consulted in a later audit. Numerical screening located candidates. Individual comparison checked the printed pages and used algebra, numerical evaluation, dimensional analysis, or reconstruction of the model to resolve discrepancies.

Machine-readable comparisons by part: [1](1.json) · [2](2.json) · [3](3.json) · [4](4.json) · [5](5.json) · [6](6.json)

A finding can concern one subpart of a problem. The comparison for 6.261 covers part (a).

## Amendments to the independent work

- [1.304](../chapters/1.6.md#1304) · For Fig. 1.79’s square geometry and ν=0.29, use the thin-plate corner coefficient 1.024 in the quasistatic model with centrifugal prestress neglected. The saved 1.10 is the beam-strip approximation.
- [1.352](../chapters/1.8.md#1352) · If the marking condition in part (b) means the absolute coordinate difference, a second interval is possible. Mark A first and B later by (1+1/γ)L₀/v. The original interval, marking B first and A later by (1−1/γ)L₀/v, applies to the signed difference and also remains valid for the absolute difference.
- [1.369](../chapters/1.8.md#1369) · Use 0.60c as the result under the book’s stated density definition, invariant rest mass per observed volume. Our saved solution gives 0.60c as an alternative and incorrectly labels the primary 0.447c as the book’s convention. Keep 0.447c under the energy-equivalent-mass definition.
- [1.375](../chapters/1.8.md#1375) · Correct the kinetic energy in the problem transcription from 560 MeV to 500 MeV and use p=1.090 GeV/c. The derivation of p(T) is valid.
- [2.181](../chapters/2.5.md#2181) · For reversible isothermal compression of a fixed gas amount, add pV ln(p/p₀) to the film-formation work F, with p=p₀+4α/R and V=4πR³/3. A device-work convention that also credits ambient displacement instead adds pV ln(p/p₀)−(p−p₀)V. State the work boundary before comparing these expressions.
- [5.182](../chapters/5.4.md#5182) · Keep the same signed retardation and fixed fast-axis orientation as at nominal 530 nm to obtain 692.3 and 428.6 nm. The 600.0 and 473.7 nm settings reverse that signed retardation.
- [6.60](../chapters/6.2.md#660) · If the 30° angle is measured from the crystal face, as in the book’s Bragg-angle convention, the voltage is 150.26 V. If measured from the normal, the independent result is 50.09 V.
- [6.201](../chapters/6.4.md#6201) · For the mean interval counting each spin-degenerate spatial orbital once, use 2/G(E_F)=1.7893×10⁻²² eV. The spin-resolved value is half as large.

## Error in the independent record

### 1.369

**Published answer** · Defines density as invariant rest mass divided by observed volume and gives 0.60c.

**Independent answer** · Gives 0.60c under the same definition. The primary answer incorrectly labels the alternative 0.447c as the book’s convention.

The contracted volume is V₀/γ, so rest mass divided by observed volume grows by γ. An increase of 25% requires γ=1.25, or v=0.60c. Energy-equivalent mass divided by the observed volume instead grows by γ² and gives v=c/√5.

Printed answer page 296. [Worked solution](../chapters/1.8.md#1369)

### 1.375

**Published answer** · The correct general formula and a proton momentum of 1.09 GeV/c.

**Independent answer** · The general formula agrees. The numerical result 1.168 GeV/c used the OCR transcription 560 MeV for the proton kinetic energy.

The problem scan reads 500 MeV. Substitution into pc=√[T(T+2mₚc²)] with the Appendix rest energy 938.074 MeV gives 1,090 MeV, consistent with the printed answer. The old numerical answer is correct for the misread input.

Printed answer page 296. Problem page 73. [Worked solution](../chapters/1.8.md#1375)


## Printed error

### 1.21

**Published answer** · The printed position formula is correct. It gives the requested positions as 0.24, 0 and −4.0 m.

**Independent answer** · The positions are 0.24, 0 and −2.0 m. The crossing times and both traveled distances agree at the book’s rounding.

At t=20 s the printed formula gives x=(0.100 m/s)(20 s)[1−20/(2×5)]=−2.00 m. This numerical error is visible in the scan.

Printed answer page 282. [Worked solution](../chapters/1.1.md#121)

### 1.71

**Published answer** · Shaft numerator(m1−m2)g+2m2w0; car-relative factor(g−w0); ceiling force4m1m2(g−w0)/(sum).

**Independent answer** · Correct upward-positive shaft numerator(m2−m1)g+2m2w0; relative factor(g+w0); ceiling force4m1m2(g+w0)/(sum).

Problem scan explicitly says elevator accelerates upward. Effective gravity isg+w0. Usinga1+a2=2w0 andT−mig=miai givesT=2m1m2(g+w0)/(sum), ceiling load2T. No axis choice reverses tension dependence: at equal masses andw0=g book predicts zero support rather than4mg. Book shaft and relative expressions also do not form a consistent transformation for upward car acceleration.

Printed answer page 284. Problem page 23. [Worked solution](../chapters/1.2.md#171)

### 1.130

**Published answer** · Published answer: applied-force work 3mg/(4a), potential increment mg/(2a).

**Independent answer** · Retains the scanned force F=2mg(ay−1), identifies the missing/invalid ascent data, and supplies W_half=mg(aH²/4−H), ΔU_half=mgH/2 for a separately specified total height H.

Both problem and answer scans checked. The book potential increment fixes the half-ascent endpoint y=1/(2a); direct integration of the printed force gives −3mg/(4a), opposite the book work. The published positive pair follows instead from F=2mg(1−ay), starting from rest with total height1/a. This is a confirmed book-source sign inconsistency, not an independent-solution error.

Printed answer page 286. Problem page 32. [Worked solution](../chapters/1.3.md#1130)

### 1.158

**Published answer** · Correct formulaJ=m sqrt(2gh)(η+1)/(η−1), but printed.2kg·m/s.

**Independent answer** · Same formula evaluates1.993251kg·m/s, approximately2.0.

Each bounce gives impulsemvn(1+1/η), with incomingvn=sqrt(2gh)/η^n. Sum geometric series to getm sqrt(2gh)(η+1)/(η−1). For.050kg,1 m,η1.25 the factor is 9 and initialm sqrt(2gh)=.221472kg·m/s. Printed value is wrong by factor10, despite correct symbolic formula.

Printed answer page 287. [Worked solution](../chapters/1.3.md#1158)

### 1.225

**Published answer** · SpeedΩR+sqrt(GM/R),7.0 km/s, correct. Acceleration prints(GM/R²)[1+ΩR sqrt(R/(GM))] without squaring bracket, then4.9 m/s².

**Independent answer** · Correct speed7.03223 km/s and acceleration(GM/R²)[1+ΩR sqrt(R/(GM))]²=4.945232 m/s².

In Earth frame relative orbit angular speed is−(sqrt(μ/R³)+Ω); circular coordinate acceleration isv_relative²/R. Printed unsquared expression gives 4.433834 m/s². Book numeric4.9 agrees with squared independent expression, exposing missing exponent2 rather than an alternate frame convention.

Printed answer page 290. Problem page 46. [Worked solution](../chapters/1.4.md#1225)

### 1.232

**Published answer** · The actual scan prints a PLUS: A≈Gm(M_E/R_E+M_M/R_M)=1.3×10^8 kJ.

**Independent answer** · Provides distinct static-model quantities: positive barrier supply1.22272×10^11 J, reversible endpoint work1.17109×10^11 J, and Earth-only leading escape estimate1.24814×10^11 J.

Both scans checked. The book plus expression evaluates1.30410×10^11 J but treats lunar binding as an extra positive cost. For ordinary net mechanical work, arriving at the lunar surface contributes negative potential energy, not positive. The independent potentialΦ=−μ_E/x−μ_M/(d−x) also supplies a constructive lower positive-work transfer through its barrier, contradicting the book value as a minimum. A sum of acceleration/braking work magnitudes would be a separately specified resource metric; it is not the stated minimum net work.

Printed answer page 291. Problem page 47. [Worked solution](../chapters/1.4.md#1232)

### 1.254

**Published answer** · Relative cylinder acceleration2(g−w0)/3 and ceiling loadm(g−w0)/3.

**Independent answer** · Correct downward relative acceleration2(g+w0)/3 and downward ceiling loadm(g+w0)/3.

Problem crop explicitly says elevator starts going up with accelerationw0. Effective downward gravity in car isg+w0. Standard two-thread cylinder balances withI=mr²/2 then give the independent values. Atw0=g book incorrectly predicts zero tension and zero relative acceleration, so this is not an axis-sign convention.

Printed answer page 291. Problem page 51. [Worked solution](../chapters/1.5.md#1254)

### 1.255

**Published answer** · Formulaa=g sinα/[1+I/(mr²)] is correct, but printed numerical1.6 m/s².

**Independent answer** · Same formula with stated data gives 1.40143 m/s².

Question, Fig1.61 and answer scans checked. Smooth-plane translationma=mg sinα−T, torqueIε=Tr and fixed-thread constrainta=rε yield the common expression. I=.45 g m²=.00045kg m², mr²=.00018kg m², so denominator3.5 and a=4.905/3.5=1.40143. Neither g≈10 nor ordinary rounding gives 1.6; this is a book numeric error.

Printed answer page 291. Problem page 51. [Worked solution](../chapters/1.5.md#1255)

### 1.304

**Published answer** · The scan prints the coefficient 9/5 on ρβl⁵/(Eh²).

**Independent answer** · The original derivation explicitly used a beam-strip approximation, giving 11/10. The full thin-plate model gives about 1.024 at the free corner indicated in Fig. 1.79.

The tangential inertia load per unit width is ρhβx. The beam free-end response integral ∫₀ˡq(x)x²(3l−x)/(6EI) dx gives 11/10 with I=bh³/12. For a square Kirchhoff–Love plate clamped along the axle and free at the other three edges, minimizing its bending energy with ν=0.29 gives dimensionless upper and lower corner deflection ≈1.024 and free-edge midpoint ≈1.040. Tested orders 6–10 converge. The book’s 1.8 does not follow from either quasistatic model.

Printed answer page 293. [Worked solution](../chapters/1.6.md#1304)

### 1.363

**Published answer** · Prints tanθ′=sqrt(1−β²)sinθ/(cosθ−V/c),β=V/c.

**Independent answer** · Correct denominator cosθ−V/v, or vcosθ−V before cancelingv.

Velocity boost hasv′y=v sinθ/[Γ(1−Vvcosθ/c²)] andv′x=(vcosθ−V)/(1−Vvcosθ/c²). Their ratio proves independent result. Scan denominator is valid only for a lightlike particlev=c, not arbitrary stated particle speed.

Printed answer page 295. [Worked solution](../chapters/1.8.md#1363)

### 1.380

**Published answer** · Prints transverseF=m0w sqrt(1−β²); longitudinalF=m0w/(1−β²)^(3/2).

**Independent answer** · Longitudinal matches; transverse must beF=m0w/sqrt(1−β²).

For transverse accelerationv·w=0, differentiatingp=γm0v givesF=γm0w. Printed transverse factor is reciprocal and tends to zero rather than diverging at fixed transverse acceleration asv→c. General direction criteria match apart from trivialv=0 qualification.

Printed answer page 296. [Worked solution](../chapters/1.8.md#1380)

### 2.2

**Published answer** · Formula p=[p1T2/T1−Δp]/2 is correct, but the printed evaluation is 0.10atm.

**Independent answer** · The same formula with27°C,107°C,p1=1.00atm,Δp=1.10atm gives 0.0832667atm.

Both scans checked. Identical volumes and conserved molecules give pA+pB=p1T2/T1=1.266533atm; the valve leaves pB−pA=1.10atm. Their half-difference is 0.0832667atm. The book numeric cannot be obtained without excessively early rounding of the nearly cancelling pressures.

Printed answer page 296. Problem page 75. [Worked solution](../chapters/2.1.md#22)

### 2.22

**Published answer** · Symbolic10%-error formula matches the independent derivation, but numericalT=133 K andp=9.9atm.

**Independent answer** · With Appendix N₂ a=1.35atmL²/mol² andb=.039L/mol, T=125.093 K and physicalvdWpressure9.33345atm; the separate ideal prediction is 10.2668atm.

Problem and answer scans plus Appendix383 checked. Applying |pid−pvdW|/pvdW=.10 yields the common printed formula. Its N₂ constants produce the independent result. Replacing only b by the O₂-row value .032L/mol gives 132.687 K and 9.9atm, explaining both book numbers as a likely wrong-row property substitution.

Printed answer page 297. Problem page 77. [Worked solution](../chapters/2.1.md#222)

### 2.23

**Published answer** · The parameter formulas are correct. The scan prints a=185 atm·L²/mol² and b=0.042 L/mol.

**Independent answer** · The stated data give a=1.875 atm·L²/mol² and b=0.04482 L/mol.

The pressure line at fixed volume is p=(0.400 atm/K)T−30.0 atm. Thus a=30.0(0.250)²=1.875 atm·L²/mol², and b=0.250−0.08207/0.400=0.0448 L/mol. The 185 printed in the scan is about 99 times too high.

Printed answer page 297. [Worked solution](../chapters/2.1.md#223)

### 2.95

**Published answer** · Correct sqrt[2 m/(πkT)] followed by printed equality4π⟨v⟩.

**Independent answer** · Correct comparison ⟨1/v⟩=4/[π⟨v⟩].

Direct Maxwell integral gives first formula; multiplying it by⟨v⟩=sqrt[8kT/(πm)] yields4/π. Printed final product has speed units rather than inverse-speed units. High-resolution scan confirms missing reciprocals, not OCR.

Printed answer page 300. [Worked solution](../chapters/2.3.md#295)

### 2.101

**Published answer** · Flux densityπ[m/(2πkT)]^(3/2)exp(−mv²/(2kT))v³dv, without concentrationn.

**Independent answer** · Same expression multiplied byn.

Incident rate is(n/4)v f_speed(v)dv; normalized Maxwell speed density yields prefactornπ. Printed expression independent of gas density cannot be a molecule count per area-time and has incorrect dimensions; high-resolution scan confirms omission.

Printed answer page 300. [Worked solution](../chapters/2.3.md#2101)

### 2.128

**Published answer** · Claims all stated cycles strictly less efficient than Carnot and derivesη<1−Tmin/Tmax.

**Independent answer** · Correct general boundη≤1−Tmin/Tmax, with explicit strictness/equality conditions.

Clausius inequality only becomes strict when entropy is produced or external heat exchange occurs away from endpoint temperatures. A reversible engine exchanging heat only atTmax andTmin saturates; Carnot itself and reversible perfectly regenerated composite cycles disprove unconditional strictness. The printed proof replaces non-strict inequality by strict without establishing that condition.

Printed answer page 301. [Worked solution](../chapters/2.4.md#2128)

### 2.135

**Published answer** · Correct formulaνR[lnα−lnβ/(γ−1)], but displayed1.0 J/K.

**Independent answer** · For monatomicheliumγ5/3 and statedν1.2,α2,β1.5 the result is .847524 J/K.

Problem and answer scans checked. Energy-state entropy difference isνCvln(T2/T1)+νRln(V2/V1)=1.2R[ln2−1.5ln1.5]. This yields.847524, not1.0. Early rough logarithm rounding(.7−1.5×.4≈.1) could explain the book number, but the independent numerical result is the accurate evaluation of the common formula.

Printed answer page 302. Problem page 90. [Worked solution](../chapters/2.4.md#2135)

### 2.152

**Published answer** · Correct weighted-final-temperature and entropy-log formulas, but numericalΔS=4.4 J/K.

**Independent answer** · Tf=299.832243 K andΔS=3.731176 J/K using AppendixcCu390,cwater4180 J/(kgK).

Question scan confirms300gCu at 97°C and 100gwater at 7°C. Energy balance gives Tf=[117(370.15)+418(280.15)]/535. Then117ln(Tf/370.15)+418ln(Tf/280.15)=3.731176 J/K. No hidden calorimeter term is allowed by the statement; the book numeric is not the evaluation of its own formula with its Appendix data.

Printed answer page 302. Problem page 92. [Worked solution](../chapters/2.4.md#2152)

### 2.168

**Published answer** · Scan explicitly α=[ρgh+p0*l/(l−h)]d/(4cosθ).

**Independent answer** · Correct α=[ρgh+p0*h/(l−h)]d/(4cosθ).

Initial trapped air is at outsidep0, so pg=p0l/(l−h). Young–Laplace gives 4αcosθ/d=pg−p0+ρgh. Book omitted subtraction of outsidep0. Its formula gives nonzero inferredα even whenh→0; the independent result has the correct zero-rise limit.

Printed answer page 303. [Worked solution](../chapters/2.5.md#2168)

### 2.185

**Published answer** · The correct symbolic expression ΔmRT/M is followed by 1.2 J.

**Independent answer** · The expression gives 120.65 J of compression work.

The input is 0.70 g at 373.15 K. With M=18.0 g/mol, (0.70/18.0)×8.314×373.15=120.65 J. The printed number is low by about a factor of 100.

Printed answer page 303. [Worked solution](../chapters/2.6.md#2185)

### 2.190

**Published answer** · h=(Q−mcΔT)/{p0S[1+qM/(RT)]}, approximately20 cm, callingq the specific heat of vaporization.

**Independent answer** · Uses constant-pressure latent heat from Appendix16 to get m_v=(Q−mcΔT)/L_v and h≈.214683 m (or .214557 m with liquid volume retained).

Scans and Appendix footnote checked:2250 kJ/kg is the atmospheric latent heat, an enthalpy difference. Constant-pressure heat balance already includes expansion work in L_v, so adding the book denominator’s extra1 double-counts pΔV. Its formula would be coherent if q meant internal vaporization energyΔu=L_v−RT/M; using that q reduces it to the independent expression. With the actual tabulated L_v inserted as q it instead gives .199408 m. The displayed20 cm alone is too coarse to expose the convention error.

Printed answer page 303. Problem page 97. [Worked solution](../chapters/2.6.md#2190)

### 2.216

**Published answer** · Correct symbolic partial-/complete-melting branches, but printed entropy numbers9.2 J/K and 18 J/K.

**Independent answer** · The corresponding branches give8.814694 J/K and 19.941586 J/K, withTf,b280.317464 K usingcp4180 J/(kgK),L_f333000 J/kg.

Scans confirm equal100 g masses, ice0°C and hot-water60°C/94°C. Branch(a):ΔS=.1cp[60/273.15−ln(333.15/273.15)], independent of latent heat because only part melts. Branch(b):energy balance fixesTf thenΔS=.1L_f/273.15+.1cp ln(Tf/273.15)+.1cp ln(Tf/367.15). These reproduce independent values; book formulas agree but their two numeric evaluations do not.

Printed answer page 304. Problem page 99. [Worked solution](../chapters/2.6.md#2216)

### 2.233

**Published answer** · The values are 23 J/(mol K) for constant rate per volume and 29 J/(mol K) for constant total rate.

**Independent answer** · The respective results are 11R/4=22.86 and 3R=24.94 J/(mol K).

The total rate of pair collisions scales as N²√T/V. At fixed N a constant total rate requires T∝V², hence p dV=νR dT/2. Adding that work term to the rigid-diatomic heat capacity 5R/2 gives 3R. The published upper value is 7R/2 and erroneously uses the constant-pressure work increment.

Printed answer page 305. [Worked solution](../chapters/2.7.md#2233)

### 2.243

**Published answer** · The printed viscosity contains (1/R₂²−1/R₁²) with positive torque.

**Independent answer** · The independent viscosity contains (1/R₁²−1/R₂²).

The problem specifies R₁<R₂ and the outer cylinder turning positively. Torque balance N₁=2πηr³ dω/dr gives ω=N₁(1/R₁²−1/R₂²)/(4πη). The printed order would make the viscosity negative.

Printed answer page 305. [Worked solution](../chapters/2.7.md#2243)

### 3.10

**Published answer** · Leading far field3qR²/(4πε0x⁴).

**Independent answer** · Leading magnitude3|q|R²/(8πε0x⁴), half the printed coefficient.

The actual source PDF 113 has a point charge q and a ring charge −q, with observation distance x≫R. Exact axial field is Kq[1/x²−x/(x²+R²)^(3/2)] for x>0. Expanding (1+R²/x²)^(−3/2) gives 3KqR²/(2x⁴), not3KqR²/x⁴. Source and enlarged answer scans confirm the factor-of-two discrepancy.

Printed answer page 306. [Worked solution](../chapters/3.1.md#310)

### 3.36

**Published answer** · Part(a) field−2a(xi−yj) is correct; part(b) prints−a(yi−xj). Fig16(b) shows the saddle pattern appropriate to−a(yi+xj).

**Independent answer** · Part(a) agrees; part(b) is−ay ex−ax ey, with field lines x²−y²=constant.

Source PDF 116 explicitly has potentialφ=axy in part(b). Its negative gradient requires a negative y component−ax. The printed minus sign inside the bracket instead gives+ax, nonzero curl2a and circular streamlines, contradicting an electrostatic potential and the book own saddle drawing. The independent formula and both field-line constructions are correct.

Printed answer page 307. [Worked solution](../chapters/3.1.md#336)

### 3.40

**Published answer** · Correct projections Ez=Kp(3cos²θ−1)/r³ and Eperp=3Kp sinθcosθ/r³, but cone angles54.7° and 123.5°.

**Independent answer** · Same projections; perpendicular-field cone angles54.7356° and 125.2644°.

The actual enlarged PDF 315 scan prints 123.5°. Setting Ez=0 gives cosθ=±1/sqrt(3), so the second angle must be180°−54.7356°=125.2644°. Both field projections and the stated on-cone magnitude sqrt(2)Kp/r³ otherwise agree.

Printed answer page 308. [Worked solution](../chapters/3.1.md#340)

### 3.43

**Published answer** · Main potential Kqlx/(R²+x²)^(3/2), field−Kql(R²−2x²)/(R²+x²)^(5/2), and Fig17 are correct. Far limits claimed for|x|≫R omit signs: φ≈Kql/x² and Ex≈2Kql/x³.

**Independent answer** · Main formulas and graph agree; correct two-sided limits are φ≈Kql sgn(x)/x² and Ex≈2Kql/|x|³.

Source Fig3.6 has+q above−q and+x upward. The exact potential is odd and its field even; the printed Fig17 also has these parities. The stated negative-x far limits violate both parities, reversing potential and field there. Printed far expressions are valid only forx>0, despite the explicit|x|≫R condition.

Printed answer page 308. [Worked solution](../chapters/3.1.md#343)

### 3.60

**Published answer** · The printed force magnitude agrees, but the surface density is given as +λl/[π(l²+x²)].

**Independent answer** · The independent signed density is −λl/[π(l²+x²)].

The image line carries −λ. At the plane the normal components from the real and image lines both point into the conductor for λ>0. The integral of the printed density gives +λ per length; the boundary condition requires −λ.

Printed answer page 309. [Worked solution](../chapters/3.2.md#360)

### 3.61

**Published answer** · Both printed surface densities have the same sign as λ.

**Independent answer** · The independent densities are −λ/(2πl) at O and −λ/[2π√(r²+l²)] generally.

Integrate the normal-field contribution of each positively charged line element and its negative image. Every contribution points into the conductor at a positive λ.

Printed answer page 309. [Worked solution](../chapters/3.2.md#361)

### 3.62

**Published answer** · The field magnitude and potential at the ring center agree. The printed charge density on the conductor has a plus sign.

**Independent answer** · The independent signed surface density is −ql/[2π(R²+l²)^(3/2)].

At the point under the ring the horizontal field cancels by symmetry, and all normal contributions from the ring and its negative image point into the conductor for q>0.

Printed answer page 309. [Worked solution](../chapters/3.2.md#362)

### 3.97

**Published answer** · The scan prints E₀=E−P/(3ε₀) for the field in the spherical cavity.

**Independent answer** · The independent result is E₀=E+P/(3ε₀).

The uniformly polarized ball in 3.96 contributes −P/(3ε₀) inside itself. Forming the cavity removes this contribution, which adds +P/(3ε₀), so the book’s minus sign applies to adding the ball rather than removing it.

Printed answer page 311. [Worked solution](../chapters/3.2.md#397)

### 3.108

**Published answer** · The key multiplies πε₀ by ln(b/a).

**Independent answer** · The independent mutual capacitance per length is πε₀/ln(b/a).

Oppositely charged thin wires have ΔV≈(λ/πε₀)ln(b/a). Dividing λ by ΔV puts the logarithm in the denominator. The printed form would increase with wire separation.

Printed answer page 312. [Worked solution](../chapters/3.3.md#3108)

### 3.125

**Published answer** · All three printed potentials reverse the signs set by the drawn battery symbols.

**Independent answer** · The independent result is V_i=E_i−ΣC_jE_j/ΣC_j.

The long lines in Fig. 3.27 (problem PDF 128) are on the right. Therefore V_i−V_L=+E_i and V_i−V_j=E_i−E_j. The key gives its negative for each pair. For equal capacitances and emfs (3,1,1) V, the drawn V₁−V₂ is +2 V, while the printed expressions give −2 V.

Printed answer page 312. [Worked solution](../chapters/3.3.md#3125)

### 3.131

**Published answer** · Correct formula −V²C1C2/[2(C1+C2)], but −.03 m J.

**Independent answer** · Energy increment−.030 J; dissipation.030 J.

Source PDF 129 confirms1µF,2µF,300 V. Initial energy.045 J, final.015 J. Printed millijoule prefix is a factor1000 error.

Printed answer page 312. [Worked solution](../chapters/3.3.md#3131)

### 3.183

**Published answer** · NumeratorΕ(R2+R3)−Ε0R3 overR(R2+R3)+R2R3.

**Independent answer** · Same denominator but numeratorΕ(R2+R3)+Ε0R3.

ActualFig3.46 PDF 137 enlarged: the left sourceΕ0 has its positive long plate at the bottom, while the right sourceΕ is positive at the top. Thus both sources drive the bottom resistor current in the same direction. Taking the bottom central node zero, the left upper node is−Ε0; supernode balance givesI=[Ε(R2+R3)+Ε0R3]/[R(R2+R3)+R2R3]. Reversing the current reference would reverse both source terms, so it cannot explain the printed relative minus sign.

Printed answer page 314. [Worked solution](../chapters/3.4.md#3183)

### 3.210

**Published answer** · Correct formulas E=I/(2πε0r)√[m/(2e V)] andΔφ=I/(4πε0)√[m/(2e V)], but numerical32 V/m and 0.80 V.

**Independent answer** · E≈1.67715e4 V/m; axis-minus-surface potential≈41.9289 V.

Both source141 and answer322 were inspected. Proton600kV,50 m A,r5 mm implyspeed≈1.07e7 m/s and charge/length I/v. Gauss law gives E=I/(2πε0vr); integration inside the uniform beam givesΔφ=Er/2. The printed numerical pair even hasΔφ/E=.025 m, inconsistent withr/2=.0025 m. Its symbolic formulas agree; the evaluations are wrong.

Printed answer page 315. [Worked solution](../chapters/3.4.md#3210)

### 3.219

**Published answer** · Centre6.3µT; axial field formulaμ0IR²/[2(R²+x²)^(3/2)] but number2.3µT.

**Independent answer** · Same centre6.28319µT; axial2.22144µT.

Both exact formulas agree. With I=1.00 A and x=R=0.100 m, the printed axial formula evaluates2.22144µT, which rounds to 2.2 rather than2.3µT. This is a small numerical discrepancy, not a different field law.

Printed answer page 315. [Worked solution](../chapters/3.5.md#3219)

### 3.223

**Published answer** · Part(a) matches; part(b) isμ0I[3π/(4a)+sqrt(2)/b]/(4π).

**Independent answer** · Part(b) isμ0I[3π/(2a)+sqrt(2)/b]/(4π).

ActualFig3.60(b) contains a three-quarter circle of radiusa, angle3π/2, so its field is(μ0I/(4π))3π/(2a). The two nonradial straight sides give sqrt(2)/b and radial segments give zero. The published arc coefficient is too small by two; part(a) otherwise agrees.

Printed answer page 315. [Worked solution](../chapters/3.5.md#3223)

### 3.228

**Published answer** · Part(a),(b) formulas match, but numbers0.30 and 0.34µT; part(c) gives onlysqrt(2)μ0I/(4πR)=0.11µT.

**Independent answer** · Magnitudes29.7935,34.0849 and 39.3602µT; part(c) coefficientsqrt(2+9π²/4).

SourceFig3.63 and its I=8.0 A,R=100 mm were inspected. Common scaleμ0I/(4πR)=8µT makes(a),(b)100 times the printed numbers. In(c), the actual three-quarter circular wire also contributes3π/2 along the axis, orthogonal to both straight-arm contributions, giving sqrt(2+9π²/4), notsqrt(2). The printed(c) number is additionally100 times below its own incomplete formula.

Printed answer page 315. [Worked solution](../chapters/3.5.md#3228)

### 3.255

**Published answer** · Force.40 µN; half-turn work.10 µJ, with correct symbolic formulas.

**Independent answer** · Force.450 µN; work.099813 µJ.

Source PDF 149 confirms I=.90 A,I0=5.0 A,η=1.5. μ0II0/[2π(η²−1/4)]=4.50e−7 N; printed.40 µN does not follow its own formula. Work agrees. Initial current sense sets the force direction and work sign.

Printed answer page 316. [Worked solution](../chapters/3.5.md#3255)

### 3.266

**Published answer** · Correct Hall-model formulaμ0I²/(4π²R²ne), but value2pV.

**Independent answer** · Same formula, value220.773pV, with explicit surface-minus-axis sign.

SourcePDF150 confirmsI=50 A,R=5.0 mm,n=0.9e23 cm−3=9e28 m−3. Direct substitution gives 2.20773e−10 V, about 110 times2pV. Electron radial magnetic balance and integrating the interior field independently give the same baseline value.

Printed answer page 317. [Worked solution](../chapters/3.5.md#3266)

### 3.292

**Published answer** · Emf half(−1)^n B a βt, with sign changes at sqrt(2πn/β) and Fig25.

**Independent answer** · Same sign changes and graph shape, but amplitude half B a² βt.

SourcePDF155 explicitly definesa as the semicircle radius. The changing field-overlap area has angular derivative magnitudea²/2, so Faraday emf magnitude isB(a²/2)ω=B a²βt/2. The enlarged actual answer scan has only one power ofa, which gives the wrong dimensions and misses a radius factor. Its switching times and alternating-sign Fig25 otherwise agree.

Printed answer page 318. [Worked solution](../chapters/3.6.md#3292)

### 3.295

**Published answer** · Prints half(ωa³B³+2mg sinωt)/(aB).

**Independent answer** · Signed source law Bωa²/2−mgR sin(ωt)/(Ba), with positive source emf driving inward rod current.

ActualFig3.83 setsωt clockwise from the upward vertical. Gravity aids that rotation, so torque balance requires inward-reference currentI=−mg sin(ωt)/(Ba); the motional back emf isBωa²/2 and source emf is that plusRI. The printed expression lacksR in the gravity term and containsB³ in its first term, making it dimensionally incompatible with an emf as printed. Its gravity sign also conflicts with the displayed angle under the stated reference; a global current reversal cannot repair the dimensional omissions.

Printed answer page 318. [Worked solution](../chapters/3.6.md#3295)

### 3.298

**Published answer** · Mean power half(πωa²B)²/R.

**Independent answer** · Mean powerπ²B²ω²a⁴/(8R), one quarter of the printed value.

ActualFig3.85 shows a rotating semicircular wire about its diameter and a fixed return. The varying projected area isπa²/2, so emf amplitudeBωπa²/2 and period-mean heating half its square/R. The book formula uses full-circle areaπa² instead, producing a factor-of-four error.

Printed answer page 318. [Worked solution](../chapters/3.6.md#3298)

### 3.309

**Published answer** · Correct formula I_ring=μ0 n S d dot I/(4ρ), evaluated as2 m A.

**Independent answer** · 0.1963495 A≈0.20 A.

Source159 clearly givesn20turns/cm=2000 m^-1,d.05 m,S1e-6m², dot I100 A/s. Faraday emf=μ0n dot I πd²/4, copper ring resistanceρπd/S; their ratio is .19635 A with bookρ16nΩm. The printed2 m A is 100times too small despite a correct symbolic formula.

Printed answer page 318. [Worked solution](../chapters/3.6.md#3309)

### 3.325

**Published answer** · Correct flux-conservation formula πa B/[μ0(ln(8a/b)−2)], but50 A.

**Independent answer** · 15.6584 A.

Source PDF 161 confirmsa=.050 m,b=.001 m,B=.00050T. Substitution gives 15.6584 A; printed50 A is approximately an extra factorπ. Formula and physical flux conservation agree.

Printed answer page 319. [Worked solution](../chapters/3.6.md#3325)

### 3.337

**Published answer** · W=BHπ²a²b=2.0 J.

**Independent answer** · Reversible nonlinear graph integral U=V∫H d B≈.85413 J.

Actual answer326 and source Figure3.76 were viewed. H=NI/(2πb)=497.359 A/m,B≈1.40779T,V=.005684892m³. Fresh PCHIP integration gives∫_0^H Bdh=549.93274 J/m³, so U=V[HB−∫Bdh]=.85413 J. The printed2.0 J equalslinearhalf BHvolume1.99022 J, invalid for its explicitly nonlinear supplied graph. Hysteretic recoverable energy remains a separate qualification.

Printed answer page 319. [Worked solution](../chapters/3.6.md#3337)

### 3.351

**Published answer** · Prints jd=half Bddot r inside andhalf Bddot R²/r outside, defining its Bddot factor asμ0nImω²sinωt.

**Independent answer** · Both expressions require an additionalε0: jdφ=ε0μ0nImω²sinωt timesr/2 orR²/(2r).

ActualPDF327 enlarged. Faraday field isEφ=−μ0nImωcosωt timesr/2 inside, so vacuum displacement currentε0∂tEφ gives the independent result. The printed formula omitsε0 and therefore lacks current-density units. The time/space profile otherwise agrees.

Printed answer page 320. [Worked solution](../chapters/3.6.md#3351)

### 3.361

**Published answer** · Correct symbolicρ=−2ε0ωB andσ=ε0aωB, but numbers−0.08nC/m³ and 2pC/m².

**Independent answer** · Same formulas; values −0.007965nC/m³ and 0.199125pC/m².

Actual sourcePDF165 givesB=10mT,ω=45rad/s,a=5.0 cm. Substitution into both correct printed formulas gives the independent values, each about 10 times smaller than its printed numerical result. Volume/surface neutralityρπa²+σ2πa=0 independently checks their relative factors.

Printed answer page 320. [Worked solution](../chapters/3.6.md#3361)

### 3.368

**Published answer** · Generated electric fieldβBsinα/[c sqrt(1−β²)]=1.4nV/m; transformed magnetic field approximately0.9T tilted51°.

**Independent answer** · Electric fieldγβcBsinα=1.27194e8 V/m; magnetic magnitude0.905539T and angle51.3402° agree.

ActualPDF328 enlarged confirms denominatorc and nanovolt unit. For a purely magnetic initial field, Lorentz transformation isEprime=γ(v×B), so its magnitude isγβcBsinα, notγβBsinα/c. The published electric formula differs byc² and has incorrect SI dimensions; it appears copied from the magnetic field generated by an electric field. The magnetic part remains correct.

Printed answer page 321. [Worked solution](../chapters/3.6.md#3368)

### 3.377

**Published answer** · Part(a) tangent agrees; part(b) usesvx=v0/[1+(1−v0²/c²)(eEt/(mc²))²]^(1/2).

**Independent answer** · Correctvx=v0/[1+(1−v0²/c²)(eEt/(mc))²]^(1/2).

The enlarged actualPDF328 scan clearly hasmc² in the denominator inside the last squared factor. Electric impulseeEt has momentum units, so division bymc is required. Conservedpx=γ0mv0 andpy=eEt givevx=px c/sqrt(m²c²+px²+py²), proving the independent expression. Part(a) remains correct.

Printed answer page 321. [Worked solution](../chapters/3.7.md#3377)

### 3.391

**Published answer** · Prints q/m=a(a+2b)B²/(2EΔx).

**Independent answer** · Correct q/m=2EΔx/[B²a(a+2b)].

Actual sourceFig3.103 andPDF329 answer inspected. With selected speedv=E/B, electric deflection isΔx=(q/m)Ea(a+2b)/(2v²). Solving gives the independent formula; the published expression is its reciprocal and has unitsm/q, notq/m. The curved field-region outline requires the same paraxial/fixed-exit approximation for either formula.

Printed answer page 322. [Worked solution](../chapters/3.7.md#3391)

### 3.393

**Published answer** · Cutoff voltage[2e/m] (μ0I/(4π))² ln(a/b), first power of the logarithm.

**Independent answer** · Same prefactor but ln²(a/b).

SourcePDF170 has heating current along the cylinder axis, producingBφ=μ0I/(2πr). WithAz=−μ0I ln(r/b)/(2π), conserved axial canonical momentum givespz=−eμ0I ln(r/b)/(2π). At the threshold radial momentum vanishes at the anode, soeV=pz²/(2 m), which requires the squared logarithm. EnlargedPDF329 confirms its missing square.

Printed answer page 322. [Worked solution](../chapters/3.7.md#3393)

### 3.398

**Published answer** · Correct time formula π²mνr²/(e V), but17 µs; distance.74 km.

**Independent answer** · 29.4687 µs and 740.628 m.

For the stated He+ mass,10MHz,.60 m and 50kV the printed time formula evaluates29.47 µs. The printed distance agrees with (2/3)vf t at this time;17 µs would imply mean speed above final speed37.70Mm/s. Both formulas agree, time number does not.

Printed answer page 323. [Worked solution](../chapters/3.7.md#3398)

### 4.17

**Published answer** · T=4πa√(ma/b²).

**Independent answer** · T=4π√(2ma³)/b².

At the minimum x₀=2a/b, U″=b⁴/(8a³). The printed square-root dependence on b gives the wrong dimensions for a period, and the correct curvature gives the independent result.

Printed answer page 324. [Worked solution](../chapters/4.1.md#417)

### 4.36

**Published answer** · y=(mg/κ)(1−cos ωt), with tensions 0 and 2mg.

**Independent answer** · y=−(mg/κ)cos ωt when y is measured downward from equilibrium. Tension extrema agree.

The printed y is displacement from the initial unstretched position. The statement explicitly sets its origin at equilibrium, so y(0)=−mg/κ and the constant mg/κ must be removed.

Printed answer page 325. [Worked solution](../chapters/4.1.md#436)

### 4.39

**Published answer** · Amax=mg/k=10 cm; E=m²g²/(2k)=4.8 m J.

**Independent answer** · Amax=.0981 m and E=.24059025 J.

Source179 confirmsm.50kg,k50 N/m; answer332 visibly prints 4.8 m J. The amplitude condition prevents slack and agrees. Independently E=kA²/2=(.5²*9.81²)/(2*50)=.24059 J, so the energy evaluation is wrong by about 50, while its displayed algebraic formula is correct.

Printed answer page 325. [Worked solution](../chapters/4.1.md#439)

### 4.68

**Published answer** · The derivatives in part (a) agree. Part (b) lists all roots of angular acceleration with increments π/ω.

**Independent answer** · For signed angular-velocity maxima use tₖ=[3π/2−2arctan(β/ω)+2πk]/ω, k≥0.

Successive roots of φ̈=0 alternate minima and maxima of φ̇. At β=0, for example, the printed first root π/(2ω) has φ̇=−ωφ₀, its minimum. Choose the positive extrema and repeat every 2π/ω.

Printed answer page 326, 327. [Worked solution](../chapters/4.1.md#468)

### 4.97

**Published answer** · Slow plate-separation work (η²−1)W.

**Independent answer** · Adiabatic work (η−1)W.

Source PDF 188 explicitly says the plates are drawn apart slowly. Averaging mechanical work gives dW/W=−dC/(2C)=dω/ω, so W/ω is invariant and Wfinal=ηW. The printed η² law would require retaining fixed capacitor charge throughout the change, which is incompatible with averaging over many LC cycles.

Printed answer page 328. [Worked solution](../chapters/4.2.md#497)

### 4.106

**Published answer** · Correct formula Q lnη/(πν), evaluated as0.5 s.

**Independent answer** · 0.0005014445 s=.5014 ms.

Source189 confirms Q5000,frequency2.2MHz,η2. Answer scan has0.5 s with no milli-prefix. The formula gives 5000ln2/(π*2.2e6)=5.014e-4 s, a1000-fold numerical/unit mistake.

Printed answer page 328. [Worked solution](../chapters/4.2.md#4106)

### 4.113

**Published answer** · Correct mean-power formula RI_m²/2, but20mW.

**Independent answer** · 0.2025mW.

Source PDF 190 confirms R=.45Ω and current amplitude30 m A. .45×.030²/2=.0002025 W. Printed20mW is approximately100 times too large.

Printed answer page 329. [Worked solution](../chapters/4.2.md#4113)

### 4.115

**Published answer** · Frequency sqrt[1/(LC)−1/(4R²C²)], but oscillation condition R<half sqrt(L/C).

**Independent answer** · Same frequency, with the opposite inequality R>half sqrt(L/C).

Actual source Fig4.30 is a parallel RLC circuit. A positive printed radicand itself requires R²>L/(4C). The voltage equation vddot+vdot/(RC)+v/(LC)=0 independently confirms the condition. For L=C=1, R=1 oscillates although it violates the printed inequality; R=0.1 obeys the printed inequality but is overdamped.

Printed answer page 329. [Worked solution](../chapters/4.2.md#4115)

### 4.116

**Published answer** · Only reciprocal-sum rules1/L1+1/L2=1/L and 1/R1+1/R2=1/R.

**Independent answer** · Adds equal coil time constants for exact circuit equivalence, and gives general oscillatory-root matching conditions.

Printed rules alone are insufficient. Counterexample C=1,L1=1,L2=2,R1=.1,R2=.8 gives L=2/3,R=.0888889. Parallel poles−.098015±1.212768i and −.303969 differ from series poles−.066667±1.222929i. Equal Rj/Lj is a sufficient additional condition and is required for exact parallel-to-series RL impedance identity.

Printed answer page 329. [Worked solution](../chapters/4.2.md#4116)

### 4.119

**Published answer** · Series-RC current uses cos(ωt−φ)−cosφ exp(−t/(RC)), with positive tanφ=1/(ωRC).

**Independent answer** · Steady RC current leads: proportional to cos[ωt+arctan(1/(ωRC))]; transient depends on initial capacitor voltage.

The printed steady-state phase has the wrong sign for a series capacitor. The current equation RC Idot+I=−ωCVm sin(ωt) requires cosine coefficient Vm(ωRC)²/[R(1+(ωRC)²)] and sine coefficient −VmωRC/[R(1+(ωRC)²)]. The printed lag gives a positive sine coefficient and fails this differential equation for any initial charge. For an initially uncharged capacitor it also incorrectly gives I(0)=0 instead of Vm/R.

Printed answer page 329. [Worked solution](../chapters/4.2.md#4119)

### 4.144

**Published answer** · Fig32(a),(b) are the expected parallel-branch current sums; Fig32(c) depicts separate upward capacitor and downward inductor currents.

**Independent answer** · Panels(a),(b) match. Source panel(c) is R parallel to one SERIES-LC branch, so its capacitor and inductor carry one identical phasor, ILC=−iV/(ωL−1/(ωC)).

Actual source Fig4.35(c), PDF 194, clearly places C and L in series in the lower branch. Published Fig32(c), PDF 337, instead shows distinct oppositely directed IC and IL and adds them with IR, a three-parallel-element construction. This violates series-current continuity for the printed circuit. The independent construction correctly uses only IR and the common reactive branch current, downward when total current lags.

Printed answer page 330. [Worked solution](../chapters/4.2.md#4144)

### 4.179

**Published answer** · Correct fractional decrease2u/(v+u), evaluated as2.0percent.

**Independent answer** · Decrease.1998002percent.

Source199 clearlyu33 cm/s=.33 m/s andv330 m/s. Moving-wall double Doppler givesλref/λinc=(v−u)/(v+u), so percentage decrease200*.33/330.33=.1998percent, tenfold below the printed evaluation.

Printed answer page 333. [Worked solution](../chapters/4.3.md#4179)

### 4.194

**Published answer** · Small-loop formula2πνl²Em/c, evaluated as13mV.

**Independent answer** · Small-loop13.0987µV; finite-phase13.0972µV.

Source201 clearly Em.50mV/m,ν5MHz,l.50 m and thexy-loop figure. Answer340 visibly usesmV. In SI the displayed formula gives 1.30987e-5 V=13.1µV; exactintegration2l Em sin(πνl/c) gives 1.30972e-5 V. Thus the1000-fold unit error is not explained by the negligible finite-phase correction.

Printed answer page 333. [Worked solution](../chapters/4.4.md#4194)

### 5.28

**Published answer** · Numeric reflected intensity2000cd; formula visibly prints rho I0 f squared(f−s) squared, with no division.

**Independent answer** · Independent rho I0 f squared/(f−s) squared=2000cd is correct.

The paraxial ray cone gives an angular-magnification/intensity factor f squared/(f−s) squared. Substituting25 cm and 20 cm gives 25, then rho I0 times25=2000cd. Multiplying by(f−s) squared would have dimensions cd times length fourth, so the absent division is a typographic formula error confirmed at high resolution.

Printed answer page 335. [Worked solution](../chapters/5.1.md#528)

### 5.55

**Published answer** · Principal-plane offset magnitudes5.0 and 2.5 cm; the prose places them on the convex-surface side.

**Independent answer** · The baseline offset magnitudes agree, but signed planes areH=+5.0 cm,H′=+5.5 cm when the convex first vertex isx0 and concave second vertexx3 cm.

ForR1+.10 m,R2+.05 m,n1.5,d.03 m,Φ1=5D,Φ2=−10D,Φ=−4D. H=dΦ2/(nΦ)=+.05 m andH′=d−dΦ1/(nΦ)=+.055 m. Both are beyond the concave side, opposite the source side-description. The key also does not numerically supply the requested focal points. The plane magnitudes alone are correct.

Printed answer page 337. [Worked solution](../chapters/5.1.md#555)

### 5.92

**Published answer** · The formula gives 1.3 mm with index k=5.

**Independent answer** · The fifth dark ring is 1.175 mm, at index k=4.

Both reflections here are from lower to higher index, so the center is bright. The first dark ring satisfies 2n₂t=λ/2 and has k=0 in the book’s formula. The fifth observed dark ring has k=4; k=5 selects the sixth.

Printed answer page 339. [Worked solution](../chapters/5.2.md#592)

### 5.169

**Published answer** · Reflectance formula prints[(n squared−1)/(n squared+1)]sin squared(phi) without squaring the bracket; its numerical value is .038.

**Independent answer** · Independent.0385563 is correct. It uses the square of the s-field Fresnel amplitude.

At Brewster incidence only the incident s fraction sin squared(phi) reflects. Its power reflectance is Rs=[(n squared−1)/(n squared+1)] squared, so rho=Rs sin squared(phi). The unsquared printed formula would give about .139 for water1.33 and phi45degrees, inconsistent with the key own numeric. The missing square is confirmed in the scan.

Printed answer page 343. [Worked solution](../chapters/5.4.md#5169)

### 5.171

**Published answer** · Part(a) correctly starts I4=I0(1−rho) squared, then prints 16I0 n fourth/(1+n squared) squared=.725I0. Part(b) gives polarization about .16.

**Independent answer** · The independent direct-beam intensity.726025I0 and degree.158732 are correct. The expanded denominator in the key must have power4, not2.

At Brewster incidence1−Rs=4n squared/(1+n squared) squared. Two selected surface transmissions square this factor, giving16n fourth/(1+n squared) fourth. The key numeric and part(b) are consistent with this fourth power; the displayed expansion is a typographic exponent error, confirmed at high resolution.

Printed answer page 343. [Worked solution](../chapters/5.4.md#5171)

### 5.188

**Published answer** · Part(a) visibly printsΔx=(λ/2)(ne−no)Θ; part(b) gives the correct signed retardation slope.

**Independent answer** · BaselineΔx=λ/[2(ne−no)Θ] is correct.

For the opposing wedges the retardation gradient magnitude is 2(ne−no)Θ. Adjacent same-kind fringes need retardation incrementλ, hence their separation isλ divided by that gradient. The scan multiplies where the denominator is required, contradicting its own part(b).

Printed answer page 345. [Worked solution](../chapters/5.4.md#5188)

### 5.213

**Published answer** · The printed geometric sum adds the powers of successive internally reflected beams and gives the phase-averaged transmission.

**Independent answer** · For the specified monochromatic wave the independent solution adds complex amplitudes and obtains phase-dependent transmission. It also gives the book’s phase average.

For a transparent plate with reflectance ρ=1/2 the book gives (1−ρ)/(1+ρ)=1/3. At a round-trip phase of 0 the coherent sum gives unity transmission, as required for a lossless symmetric resonant plate. The printed result needs an unmentioned incoherence or phase-averaging assumption.

Printed answer page 346. [Worked solution](../chapters/5.5.md#5213)

### 5.245

**Published answer** · The formula isγ=ncosθ/√(n²cos²θ−1), but the printed kinetic energy is .23 MeV.

**Independent answer** · Baseline .289583 MeV is consistent with the formula and givenn1.50,θ30degrees.

ncos30=1.299038,γ=√(27/11)=1.566699. ThereforeT=(γ−1)(.511)=.289583 MeV. The printed .23 is a numerical source error; it is not the preceding5.244threshold answer.

Printed answer page 348. [Worked solution](../chapters/5.6.md#5245)

### 6.32

**Published answer** · Only 97.3, 102.6 and 121.6 nm are listed.

**Independent answer** · The independent four-line set also includes the admitted 1 to 5 line at 94.95594 nm.

The problem scan explicitly gives the interval 94.5 to 130.0 nm. Lyman wavelengths from lambda=1/[Rw(1−1/n squared)] for n=2,3,4,5 are approximately 121.54,102.55,97.23,94.96 nm, all inside the interval. The n=6 line is about 93.76 nm and is outside. Thus the key omits Lyman delta; the fourth line is not a rounding-boundary issue.

Printed answer page 351. [Worked solution](../chapters/6.1.md#632)

### 6.69

**Published answer** · The high-resolution scan reads delta t approximately eta m l squared/hbar, followed by approximately 1e−16 s.

**Independent answer** · The symbolic eta dependence agrees with the independent estimate, but eta m l squared/hbar is about 8.64e−16 s, of order 1e−15 s. Explicit independent Gaussian benchmarks are 8.60e−16 s or 1.72e−15 s depending on width definition.

With l=.10 nm and eta=10, m l squared/hbar=8.64e−17 s, so multiplying by eta gives 8.64e−16 s. The printed numerical exponent is roughly a decade low, whereas the formula is correct. This entry corrects the earlier low-resolution reading that mistakenly claimed eta was absent. The unspecified width shape still prevents a universal exact coefficient.

Printed answer page 352. [Worked solution](../chapters/6.2.md#669)

### 6.85

**Published answer** · Matching equation tan(z)=−k/kappa and sine graph with negative-tangent branches; first onset pi squared hbar squared/(8 m), but nth onset printed (2n−1)pi squared hbar squared/(8 m).

**Independent answer** · The independent matching/branch filtering and first onset agree. Its nth onset has the required square (2n−1) squared, missing from the printed key.

Fig.6.2 is a hard wall at 0, bottom0 until l and exterior U0. At threshold kappa tends to 0, so z0=(n−1/2)pi. Since l squared U0=hbar squared z0 squared/(2 m), the critical product is pi squared hbar squared(2n−1) squared/(8 m). Actual bound levels require strict exceedance; equality has a nonnormalizable constant tail.

Printed answer page 354. [Worked solution](../chapters/6.2.md#685)

### 6.95

**Published answer** · Rectangle exponent−2l sqrt[2 m(U0−E)]/hbar; ramp exponent−8l sqrt(2 m)(U0−E)^(3/2)/(3hbar U0).

**Independent answer** · Rectangle agrees. The independent ramp coefficient4 is correct for the single ramp of Fig.6.5; the printed coefficient8 doubles its action.

Fig.6.5 rises linearly from0 to U0 across width l and then drops abruptly. Its forbidden interval is x from lE/U0 to l. Thus S=integral sqrt[2 m(U0 x/l−E)]dx=2l sqrt(2 m)(U0−E)^(3/2)/(3U0); D approximately exp(−2S/hbar) has coefficient4. A coefficient8 would require two such slopes, absent from the scan. Both expressions are leading WKB exponentials, not uniformly exact transmission coefficients.

Printed answer page 356. [Worked solution](../chapters/6.2.md#695)

### 6.105

**Published answer** · QuartetP moments include hbar sqrt(32)/2 as the largest; quintetD moments are 0, sqrt(2), sqrt(6), sqrt(12), sqrt(20) timeshbar.

**Independent answer** · Independent quartet maximum hbar sqrt(35)/2 is correct; the other quartet and all quintet values agree.

For quartetP,L=1 andS=3/2, allowedJ are 1/2,3/2,5/2. The largest magnitude is sqrt[J(J+1)]hbar=sqrt(35)hbar/2, notsqrt(32)hbar/2. The scan clearly prints 32; this is not a quantum-number-convention issue.

Printed answer page 357. [Worked solution](../chapters/6.3.md#6105)

### 6.130

**Published answer** · Part(a) prints[exp(hbar omega/kT)−1]^−1 approximately10^−34 at 3000 K; part(b)1.7e5 K.

**Independent answer** · The formula and part(b) agree, but the independent part(a) value8.10964e−18, of order10^−17, is correct.

For the2P-to 1S transition hbar omega=3B_H/4 approximately10.17 eV and kT approximately.2584 eV. Thus the exponent is about 39.35, whose exponential inverse is about 8e−18, not10^−34. Equality of induced and spontaneous rates requires exponent ln2, yielding the correct1.70325e5 K. The scan really prints −34.

Printed answer page 357. [Worked solution](../chapters/6.3.md#6130)

### 6.155

**Published answer** · Gradient formula 2 T delta/[gJ muB l1(l1+2 l2)] followed by 15 kG/cm.

**Independent answer** · The formula agrees but the literal printed 22 MeV produces 1.44836e11 T/m, not 150 T/m.

Substituting the problem scan energy 22 MeV in the displayed formula gives a result larger by about 1e9. The printed 15 kG/cm is consistent with 22 meV, indicating an energy-prefix inconsistency between question and numeric answer. The independent record preserves MeV and warns that the implied field excursion about 2.1e7 T invalidates weak-field LS coupling; it does not silently change the energy.

Printed answer page 358. [Worked solution](../chapters/6.3.md#6155)

### 6.178

**Published answer** · The scan gives the reciprocal-wavelength shift formula, followed by 423 nm for the red line and 387 nm for the violet line.

**Independent answer** · At the printed inputs the independent values are 424.3 and 386.8 nm.

Set 1/λ_S=1/404.7 nm−ω/(2πc), with ω=2.15×10¹⁴ s⁻¹. This gives 424.3 nm, which rounds to 424 nm at the key’s precision. The 423 nm value is close to a first-order expansion, while the supplied formula gives 424 nm.

Printed answer page 359. [Worked solution](../chapters/6.4.md#6178)

### 6.220

**Published answer** · Decay constant 1.1e−5 per second, mean lifetime 1.0 year.

**Independent answer** · The decay constant agrees, but the independent mean lifetime is 24.4966 hours, approximately one day.

Retention 0.96 after 3600 seconds implies lambda=−ln(0.96)/3600=1.13394e−5 per second. Its reciprocal is 88187.8 seconds. A one-year reciprocal is incompatible even with the key own printed decay constant; the lifetime unit is erroneous.

Printed answer page 361. [Worked solution](../chapters/6.5.md#6220)

### 6.227

**Published answer** · The published half-lives are 1.6 h and 9.8 h, with slow-to-fast initial nucleus ratio 10.

**Independent answer** · A joint fit to all nine log-activity measurements gives 0.99 h and 10.84 h, with slow-to-fast initial ratio 1.83. There is no exact two-exponential fit at the printed precision.

The book tuple fixes the initial fast-to-slow activity ratio at (9.8/1.6)/10=0.6125. It predicts a log-activity drop of only 0.502 by t=3 h, while the table shows 1.50. A positive sum of distinct exponentials also has strictly convex log activity, incompatible with the exactly collinear first four central values. The book’s tuple cannot fit the printed table.

Printed answer page 361. [Worked solution](../chapters/6.5.md#6227)

### 6.247

**Published answer** · The equation isv=gh/c, but the printed numerical result is 65micrometres/s.

**Independent answer** · Independentv=.654436micrometres/s for h=20 m.

Using g=9.81 m/s²,c=2.998e8 m/s givesv=196.2/2.998e8=6.54436e−7 m/s=.654436micrometres/s. The source formula and direction are right; its number is about 100times too large. Actual scan inspected.

Printed answer page 362. [Worked solution](../chapters/6.5.md#6247)

### 6.249

**Published answer** · A squared-cosine recoil formula gives 6.0 MeV for the printed60degree divergence.

**Independent answer** · The baseline correctly finds no literal outgoing-vector solution at 60degrees;6 MeV is conditional on120degrees.

From elastic energy and momentum,2pPcosΘ=(m/M−1)P². Since alpha massm<Li6 massM, a nonzero recoil requirescosΘ<0. Squaring loses this sign and accepts60degrees spuriously. The problem scan explicitly says outgoing divergence60degrees; an acute unoriented-track-angle interpretation is a different convention.

Printed answer page 362. [Worked solution](../chapters/6.6.md#6249)

### 6.252

**Published answer** · Numbers about 2e11kg/cm³ and 1e38nucleons/cm³ are printed.

**Independent answer** · The literal0.13pm radius gives 1.8038e11kg/m³ and 1.08663e38 m⁻³.

Forr0=1.3e−13 m,ρ=3u/(4πr0³) andn=3/(4πr0³). The published numerical magnitudes correspond to per cubic metre, so the printed cm³ units are wrong by10⁶. The problem radius itself is unusually large but is not silently corrected.

Printed answer page 362. [Worked solution](../chapters/6.6.md#6252)

### 6.253

**Published answer** · The scan prints ¹⁷F in part (b). The other answers are d, α and ³⁷Cl.

**Independent answer** · Part (b) requires ¹⁸F. The three other identifications agree.

In ¹⁷O(d,n)X, nucleon conservation gives A_X=17+2−1=18 and charge conservation gives Z_X=8+1=9. The printed isotope fails nucleon conservation.

Printed answer page 362. [Worked solution](../chapters/6.6.md#6253)

### 6.262

**Published answer** · The entry prints 5.74e7 kJ and 2e4kg coal.

**Independent answer** · The baseline generic D-to-He heat balance gives 5.74895e8 kJ and 1.91632e4kg coal.

Two D atoms forming He4 release(2MD−MHe)c²≈23.84 MeV per product. For1 g He this is≈5.75e11 J=5.75e8 kJ. Independently, the source coal amount2e4kg at 30 kJ/g implies6e8 kJ. The heat exponent is therefore a factor10 source error, not OCR. Only the tight6.262 line crop was used;6.261 is excluded.

Printed answer page 362. [Worked solution](../chapters/6.6.md#6262)

### 6.285

**Published answer** · Part(a) prints t≈η/(σJ)=3e6 years; part(b) about 1e13Au198 nuclei.

**Independent answer** · Part(a) should be≈325 years; the independent finite-burnup maximum1.00856e13 agrees with part(b) quasi-saturation.

Jσ=(1e10)(98e−24)=9.8e−13 s⁻¹. For1percent loss,t=−ln.99/(Jσ)=1.02554e10 s≈325 years, or≈323 years after linearizingη. The high-resolution scan genuinely prints 10⁶years, a numeric factor10⁴ error. Product saturation is valid before significant target depletion, with the exact finite peak included in the baseline.

Printed answer page 363. [Worked solution](../chapters/6.6.md#6285)

### 6.291

**Published answer** · Kinetic energies are printed .05,.4,9 GeV.

**Independent answer** · The independent values are .0053144,.433017,9.10573 GeV.

T=√[(pc)²+(mpc²)²]−mpc². Atpc=.10 GeV andmpc²≈.938 GeV,T≈.00531 GeV, so the first printed value is about 10times too large. The remaining two agree at coarse precision.

Printed answer page 363. [Worked solution](../chapters/6.7.md#6291)


## Partial agreement

### 1.53

**Published answer** · The key provides magnitudes for the three velocities and three accelerations.

**Independent answer** · The six magnitudes agree at rounding, and the independent solution also gives vector components.

For example the independent magnitude at A is √(5²+2.5²)=5.59 cm/s², matching 5.6 cm/s².

Printed answer page 283. [Worked solution](../chapters/1.1.md#153)

### 1.60

**Published answer** · Sliding acceleration[m0−k(m1+m2)]g/(sum); tension(1+k)m0m2 g/(sum).

**Independent answer** · Same moving equal-mass branch, plus rest and static tension range.

Release slides only fork<1/2. Fork≥1/2 acceleration is zero, not the negative continuation of book formula; static friction need not saturate. Printed answer omits requested cases.

Printed answer page 283. [Worked solution](../chapters/1.2.md#160)

### 1.63

**Published answer** · Downward above sinα+kcosα; upward below sinα−kcosα; rest strictly between.

**Independent answer** · Same moving conditions; equilibrium includes limiting equalities.

Static friction can attain its bound without motion, so independent closed rest interval is correct. Positive-mass restriction and absent upward branch where its bound is negative are explicit.

Printed answer page 283. [Worked solution](../chapters/1.2.md#163)

### 1.67

**Published answer** · tanβ=k; Tmin=mg(sinα+kcosα)/sqrt(1+k²).

**Independent answer** · Matches ordinary branch; adds steep-plane contact boundaryβ=π/2−α,T=mg.

Optimization givesβ=atan k, but normalmgcosα−Tsinβ is nonnegative only forα+atan k≤π/2. Book omits remaining domain.

Printed answer page 283. [Worked solution](../chapters/1.2.md#167)

### 1.79

**Published answer** · Minimumg(1−k)/(1+k).

**Independent answer** · Matches fork<1; correct minimum zero fork≥1 and complete sticking interval supplied.

Static bounds |ma−T|≤kmg and|mg−T|≤kma must overlap. Book becomes negative for k>1 and misses the physical zero minimum.

Printed answer page 284. [Worked solution](../chapters/1.2.md#179)

### 1.82

**Published answer** · Wedge accelerationmg sinα/[M+2 m(1−cosα)].

**Independent answer** · Same contact branch; adds contact criterion and initial lift-off branch.

Computed normal is nonnegative only whenMcosα≥m(1−cosα)². Outside that unspecified mass-angle domain the book contact expression is unphysical.

Printed answer page 284. [Worked solution](../chapters/1.2.md#182)

### 1.84

**Published answer** · Bottom, top, side weights2.1,.7,1.5kN.

**Independent answer** · Corresponding total support-force magnitudes2.0867,.7133,1.55935kN.

Problem and answer scans confirm the same data and all three locations. Bottom/top agree at book precision. Constant-speed side motion needs bothmv²/R radial andmg upward, giving√[(1400 N)²+(686.7 N)²]=1559.35 N. Book1.5kN is a coarse/slightly low numeric value; it is much closer to the total support force than to radial-only1400 N and does not indicate a missing force in the independent solution.

Printed answer page 284. Problem page 25. [Worked solution](../chapters/1.2.md#184)

### 1.200

**Published answer** · Period2πGM/v³,225days; printedM matches symbol defined as planet mass in problem.

**Independent answer** · Correct2πGM_S/v³,224.7937days; optional finite-mass correction usesM_S+M.

Circular balance givesr=GM_S/v² thenT=2πr/v. Numerical book value uses solar mass, so result agrees after correcting its conflictingM notation. Literal planetaryM in the printed formula is incorrect.

Printed answer page 288. Problem page 44. [Worked solution](../chapters/1.4.md#1200)

### 1.202

**Published answer** · T=πsqrt[(r+R)³/(2GM)], withM conflicting with planet mass defined in statement.

**Independent answer** · Same expression withM_S in denominator and optionalM_S+M correction.

Relative ellipse semimajor axis(r+R)/2 givesT=2πsqrt[a³/(GM_S)]. Book explanation and functional form agree, butM must mean solar mass rather than its literal definition in the problem.

Printed answer page 288. Problem page 44. [Worked solution](../chapters/1.4.md#1202)

### 1.218

**Published answer** · First-order formulaΔt≈[2πr^(3/2)/√(GM)]/[3Δr/(2r)+δ], δ=0or2, gives 4.5days and .84h.

**Independent answer** · Exact co-rotating4.44711days and counter-rotating.804493h; both orbit-direction choices explicitly supplied.

Problem and answer scans checked. Book’s first-order formula evaluated with the statedr7000 km,Δr70 km andAppendixEarth constants gives 4.50335days and .804569h. Its4.5day estimate is correct; its.84h is a small numeric discrepancy and does not equal the formula’s evaluation. The candidate compared the two different direction branches; neither independent branch is wrong.

Printed answer page 290. Problem page 45. [Worked solution](../chapters/1.4.md#1218)

### 1.228

**Published answer** · Lunar surface orbital1.67 km/s and escape2.37 km/s; no explicit Earth comparison printed.

**Independent answer** · Same1.67282 and 2.36573 km/s, plus requested Earth values 7.89980 and 11.17201 km/s and ratio.211755.

Circular speed sqrt(μ/R) and escape sqrt(2μ/R) give both. Independent fully answers the comparison requested by the statement; print supplies lunar values only.

Printed answer page 290. [Worked solution](../chapters/1.4.md#1228)

### 1.240

**Published answer** · Prints disc diameter-axis inertia mR²/4; no separate proof of perpendicular-axis identity.

**Independent answer** · Disc result matches, and independent also supplies requested identityI1+I2=I3 proof.

For every mass element in plate plane, squared distances to two in-plane axes add to squared distance to normal axis. Disc symmetry makes each diameter inertia half of axialmR²/2.

Printed answer page 291. [Worked solution](../chapters/1.5.md#1240)

### 1.259

**Published answer** · Hanging acceleration3 g(M+3 m)/(M+9 m+I/R²).

**Independent answer** · Same taut-thread branch, plus free-fall aA=g whenI<2MR² makes the thread slack.

Supporting-thread constraint givesvA=3vB and kinetic effective massM+9 m+I/R². Computed hanging tensionm(g−aA)=mg(I/R²−2M)/(M+9 m+I/R²) must be nonnegative. Book formula without its domain predicts a downward acceleration exceedingg and negative thread tension below threshold.

Printed answer page 291. [Worked solution](../chapters/1.5.md#1259)

### 1.265

**Published answer** · Prints v0=sqrt(8gR).

**Independent answer** · Same upper threshold, with full allowed interval0≤v0≤sqrt(8gR).

Book gives boundary rather than the full requested range. Energy and vertical centre-of-mass acceleration give nonnegative normal throughout for the stated interval; finite Coulomb friction cannot sustain the marginal endpoint.

Printed answer page 291. [Worked solution](../chapters/1.5.md#1265)

### 1.354

**Published answer** · Fig12 gives K-simultaneous clock hands:K clocks zero, movingK′ clocks ahead at left and behind at right.

**Independent answer** · Same K pattern and additionally requested K′-simultaneous reciprocal pattern.

Lorentz t′=γ(t−Vx/c²) gives depicted sign ordering at t=0. Book does not draw the other requested frame; independent supplies it with opposite gradient.

Printed answer page 295. [Worked solution](../chapters/1.8.md#1354)

### 1.376

**Published answer** · Gives total beam forceI sqrt[T(T+2m0c²)]/(ec) and deposited powerIT/e.

**Independent answer** · Same force and power; pressure requires additional footprint areaS and isF/S.

Momentum per absorbed particle times arrival rateI/e gives force. Book labels its answerF, thereby answering force rather than literal requested pressure; independent explicitly identifies missing area.

Printed answer page 296. [Worked solution](../chapters/1.8.md#1376)

### 2.12

**Published answer** · The printed minimum is 2R√(αT₀).

**Independent answer** · The independent result is identical and also provides the requested curve.

The extremum satisfies V²=T₀/α; the answer key does not supply a plot to compare.

Printed answer page 297. [Worked solution](../chapters/2.1.md#212)

### 2.42

**Published answer** · Terminal continuum expression v=√[2γRT/((γ−1)M)], printed3.3 km/s.

**Independent answer** · Its primary terminal-continuum answer is the same expression; with helium γ=5/3 and Appendix R,M it gives 3.22374 km/s. Alternative throat and effusion speeds are explicitly labelled different observables.

Both scans checked. Adiabatic steady-flow energy gives v²/2=CpT and hence the identical formula. The book numerical3.3 km/s is about 2.4% above the supplied-constant evaluation, a small numerical discrepancy, not a derivation error. The answer refers to terminal continuum expansion rather than speed at a finite-pressure hole.

Printed answer page 298. Problem page 80. [Worked solution](../chapters/2.2.md#242)

### 2.99

**Published answer** · Beam modes sqrt(3kT/m) and kinetic energykT; vessel comparison not explicitly printed.

**Independent answer** · Both modes agree, plus required speed-mode ratio sqrt(3/2) relative to vessel.

Differentiatev³exp(−mv²/(2kT)) for speed mode, then transform density bydv/dε for energy mode. Book omits explicit comparison requested in part(a).

Printed answer page 300. [Worked solution](../chapters/2.3.md#299)

### 2.112

**Published answer** · Layer-energy count(2πn0/a^(3/2))sqrtU e^(−U/kT)dU and modekT/2.

**Independent answer** · Same two results; additionallyU(r_modal)=kT=2U_modal.

Transformr²=U/a with Jacobian; energy mode differs from radius mode because of this Jacobian. Printed answer does not explicitly supply the requested comparison.

Printed answer page 301. [Worked solution](../chapters/2.3.md#2112)

### 2.186

**Published answer** · Correct lever-rule expression m_v=(V−m v_l)/(v_v−v_l), then approximately20 g vapour occupying1.0L.

**Independent answer** · Derives the same formula and obtains20.4082 g,1.02041L with the explicitly approximate standard liquid density1000kg/m³; also diagnoses the stated250°C saturated mixture as physically inconsistent using temperature-specific liquid data.

Book and problem scans checked. Its numeric values match v_l≈1L/kg, not saturated liquid at 250°C. The already sourced primary saturation value v_l=.00125173m³/kg means even5kg entirely liquid occupies6.25865L>6.0L, so no nonnegative two-phase solution exists for the literal state. General formula and disclosed textbook approximation agree; the published answer does not resolve the source-state defect.

Printed answer page 303. Problem page 96. [Worked solution](../chapters/2.6.md#2186)

### 2.253

**Published answer** · Mean free path23 mm and printed1/6-law heat fluxp<v>ΔT/[6T(γ−1)]=22 W/m², explicitlyT=(T1+T2)/2.

**Independent answer** · Mean free path23.3073 mm; the same printed-law flux20.99645 W/m². A separately labelled full-accommodation Maxwell alternative42 W/m² is not the primary book model.

Problem and answer scans checked. AtT=300.15 K,M=.004kg/mol,γ=5/3 the visible book formula evaluates20.99645, not22. Its displayed22 can be obtained by using about 273 K in the flux formula, despite its stated mean temperature. Model formula and free path agree; the small book numeric difference is not evidence for the alternative factor-two model.

Printed answer page 306. Problem page 103. [Worked solution](../chapters/2.7.md#2253)

### 3.89

**Published answer** · The negative interface density and its net charge agree; the limiting text says the density tends to zero at fixed distance.

**Independent answer** · The independent solution gives both the same pointwise limit away from the origin and the missing distributional delta charge.

The narrowing induced-charge footprint retains its integrated charge as the point approaches the interface.

Printed answer page 311. [Worked solution](../chapters/3.2.md#389)

### 3.92

**Published answer** · The bound plane density matches and the key gives the fixed-radius zero limit.

**Independent answer** · The independent solution also derives the finite total bound charge and the delta limit.

The pointwise limit away from the approaching source does not commute with integration over the plane.

Printed answer page 311. [Worked solution](../chapters/3.2.md#392)

### 3.96

**Published answer** · The printed answer gives the uniform interior field −P/(3ε₀).

**Independent answer** · The independent derivation agrees and proves the specified exterior dipole result.

A uniformly polarized sphere has exactly the cosine surface harmonic of a point dipole outside.

Printed answer page 311. [Worked solution](../chapters/3.2.md#396)

### 4.85

**Published answer** · The displacement-resonance frequency and amplitude are given for a positive-frequency peak.

**Independent answer** · Agrees for 0<λ<2π, with static maximum for λ≥2π and unbounded undamped resonance for λ=0.

The square of the printed resonance frequency changes sign at λ=2π. Thereafter the forcing response decreases from its static value, which is the relevant maximum.

Printed answer page 327. [Worked solution](../chapters/4.1.md#485)

### 4.92

**Published answer** · Percentage decrease 100/(η²−1).

**Independent answer** · Same for η>√2. For η≤√2 there is no positive-frequency displacement resonance.

The printed percentage comes from evaluation at ω_res²=ω₀²−2β², which must be positive. If the static displacement maximum is admitted, its power is zero.

Printed answer page 328. [Worked solution](../chapters/4.1.md#492)

### 4.185

**Published answer** · Part(a) derives Δp=−ρv²∂xξ; no separate part(b) derivation is printed.

**Independent answer** · Samepart(a), and independently derives harmonic intensityp_m²/(2ρv).

Actualprinted proof checked line by line: Newton law plus wave equation integrates to the same pressure-strain law. Source also askspart(b), which this answer section omits, so published comparison of that requested part is unavailable.

Printed answer page 333. [Worked solution](../chapters/4.3.md#4185)

### 5.23

**Published answer** · Minimum deviation in water8.7degrees.

**Independent answer** · Literal independent inference from the printed37degree air deviation gives 8.54432degrees; using the rounded generic glass index1.50 instead gives about 8.65degrees and the key8.7.

Infer n_glass=sin48.5degrees/sin30degrees from the air datum, then use2arcsin[n_glass sin30degrees/1.33]−60degrees. The small difference is consistent with replacing inferred1.4979 by representative1.50, within the coarse air-angle precision.

Printed answer page 335. [Worked solution](../chapters/5.1.md#523)

### 5.122

**Published answer** · Zeroth-order deviation7.9degrees; full central width7.3degrees, using the correct first-zero condition.

**Independent answer** · Independent7.84432degrees agrees in(a); its exact first-minimum width7.46880degrees differs slightly from the key7.3.

The rear-face outgoing zeros satisfy sin(r_plus/minus)=1.5sin15degrees plus/minus.60/10. Their angles19.16129 and 26.63009degrees differ by7.46880degrees. Even linearization gives 7.46069degrees; the correct printed condition does not yield7.3, a small numeric discrepancy.

Printed answer page 341. [Worked solution](../chapters/5.3.md#5122)

### 5.211

**Published answer** · The key gives a three-harmonic-component hint without carrying through the requested demonstration.

**Independent answer** · The independent solution proves the shifted waveform recurrence for an arbitrary spectrum.

Use ω=ak+2πb, so each Fourier component gains a full cycle after 1/b in a frame moving with speed a.

Printed answer page 346. [Worked solution](../chapters/5.5.md#5211)

### 5.268

**Published answer** · Maximum angular deflection about 0.5 degrees; an approximate sine half-angle formula is supplied.

**Independent answer** · Independent 0.501762 degrees agrees. It also answers the explicit energy-origin question, absent from the terse key, through the tiny reflected-pulse redshift.

The pulse gives momentum approximately 2E/c and mirror energy approximately 2E squared/(mc squared). Equating this to 2mgl sin squared(theta/2) gives sin(theta/2) approximately E/(mc sqrt(gl)). Energy conservation requires the outgoing pulse energy to be smaller by the mirror kinetic energy.

Printed answer page 349. [Worked solution](../chapters/5.7.md#5268)

### 6.28

**Published answer** · First Balmer wavelengths 657, 487, 434 nm; resolving power approximately 1.5e3.

**Independent answer** · Wavelengths agree with independent 656.34, 486.17, 434.08 nm. Exact resolving-power values are 1230 for mutual resolution of the first 20, or 1411 to isolate line 20 from line 21 as well.

The closest listed pair has upper levels 21 and 22, and the closer following neighbor has 22 and 23. Evaluate lambda/delta lambda directly for each pair. The key is a coarse asymptotic/neighbor convention; it does not distinguish mutual first-20 resolution from isolation against the next line.

Printed answer page 351. [Worked solution](../chapters/6.1.md#628)

### 6.84

**Published answer** · Continuity of psi_prime proved by integrating the stationary Schrodinger equation over a shrinking interval.

**Independent answer** · The conclusion and independent proof agree. The key displayed integral has the sign of(E−U) opposite the standard jump equation, but that integral still tends to zero.

The correct jump is psi_prime(right)−psi_prime(left)=(2 m/hbar squared) integral(U−E)psi dx. For bounded nonsingular U this vanishes as the interval shrinks. Thus the intermediate sign typo does not change the claimed derivative continuity; a finite psi jump is likewise forbidden without a singular potential.

Printed answer page 354. [Worked solution](../chapters/6.2.md#684)

### 6.94

**Published answer** · Step reflection R=(k1−k2) squared/(k1+k2) squared and probability e-fold penetration1/(2kappa).

**Independent answer** · Both requested formulas match the independent results and Fig.6.3. A prose amplitude label in the key says reflected b2 where its equations correctly use b1.

Continuity at x=0 for above-step incident plus reflected waves gives b1/a1=(k1−k2)/(k1+k2). Below the step, psi decays as exp(−kappa x), so probability density decays as exp(−2kappa x). The penetration distance is therefore half the amplitude-decay length.

Printed answer page 356. [Worked solution](../chapters/6.2.md#694)

### 6.199

**Published answer** · Free electrons per atom 0.93.

**Independent answer** · Literal independent value is 0.962614, while both infer approximately one free electron per sodium atom.

The free-electron density is (2 m EF)^(3/2)/(3 pi squared hbar cubed); dividing by rho NA/M with the printed rho=0.97 g/cm cubed gives 0.9626. The key 0.93 is close to what results from rounding rho to 1.0 g/cm cubed, but that substitution is not stated. This is a small numeric mismatch, not a distinct valence conclusion.

Printed answer page 360. [Worked solution](../chapters/6.4.md#6199)

### 6.261

**Published answer** · Part (a) gives 8.2×10¹⁰ kJ and a coal equivalent of 2.7×10⁶ kg.

**Independent answer** · Part (a) gives 8.2133×10¹³ J and 2.7378×10⁶ kg.

Convert the independently calculated energy to kJ and round both results to two significant figures. The isolated scan excerpt matches both quantities.

Printed answer page 362. [Worked solution](../chapters/6.6.md#6261)

### 6.267

**Published answer** · The book lists product speeds 0.92×10⁷ and 0.53×10⁷ m/s.

**Independent answer** · The independent magnitudes agree and its requested separation rate is 1.45×10⁷ m/s.

The two product velocities are antiparallel for the nearly stationary entrance channel. The separation speed is their sum.

Printed answer page 362. [Worked solution](../chapters/6.6.md#6267)

### 6.284

**Published answer** · T½=(w/k)ln2 and yieldw≈2e−3.

**Independent answer** · The independent finite-irradiation valuew=.00198548 agrees with2e−3. The part(a) formula needs negligible decay during production or a pulse-yield convention.

With constant beamRb overti, Aend=wRb(1−e^(−λti)), so k=w(1−e^(−λti))/ti. This tends toλw only forλti≪1. The given2h irradiation versus53d half-life satisfies that approximation closely. No exponent/source typo found.

Printed answer page 363. [Worked solution](../chapters/6.6.md#6284)

### 6.296

**Published answer** · The neutron-energy formula gives a printed19.5 MeV.

**Independent answer** · The formula agrees; modern property masses used independently give19.6545 MeV.

Two-body decay yieldsTn=[(MΣ−Mn)²−Mπ²]/(2MΣ). The .15 MeV numeric difference is consistent with coarse historical mass choices; there is no formula error. OCR that appends the52.5 MeV muon answer from6.297 must be rejected.

Printed answer page 363. [Worked solution](../chapters/6.7.md#6296)

### 6.297

**Published answer** · The formula isTmax=(Mμ−Me)²/(2Mμ), with numerical52.5 MeV.

**Independent answer** · Baseline uses the same formula and modern muon data to obtain52.3194 MeV.

The endpoint occurs when the two-neutrino invariant mass tends to zero. The formula is exact under massless-neutrino kinematics; the printed number differs by .18 MeV and its old mass convention is not specified. Do not label the independent formula wrong or use the truncated OCR entry.

Printed answer page 363. [Worked solution](../chapters/6.7.md#6297)

### 6.300

**Published answer** · Missing neutral mass≈.94 GeV, neutron.

**Independent answer** · Baseline941.258 MeV/c² agrees at the coarse source precision.

At the stated lab right angle, mX²=MΣ²+Mπ²−2EΣEπ. Rounded kinetic energies320 and 42 MeV make the reconstructed mass slightly above the precise neutron value; no algebraic disagreement is present.

Printed answer page 364. [Worked solution](../chapters/6.7.md#6300)


## Convention or model difference

### 1.17

**Published answer** · The book gives l/√(η²−1) for the distance before D.

**Independent answer** · The independent solution gives the same interior optimum and adds a boundary optimum at A if the stationary turn lies before A.

The distance before D is constrained to [0,AD] for the depicted route. Minimizing time on this interval clips the interior optimum to AD.

Printed answer page 282. [Worked solution](../chapters/1.1.md#117)

### 1.22

**Published answer** · The book selects motion starting immediately and gives v=α²t/2, w=α²/2 and mean α√s/2.

**Independent answer** · The independent derivation gives these results for immediate motion and describes delayed departures.

The equation dx/dt=α√x is non-Lipschitz at x=0. A finite waiting time before the same moving branch also satisfies the specified initial coordinate.

Printed answer page 282. [Worked solution](../chapters/1.1.md#122)

### 1.46

**Published answer** · The book gives mean and final angular-acceleration magnitudes 6 and 12 rad/s².

**Independent answer** · Along increasing φ, the independent values are −6 and −12 rad/s². The mean angular speed is 4 rad/s in both.

Twice differentiating φ=at−bt³ gives −6bt, which points opposite the positive initial angular velocity. The printed values are magnitudes.

Printed answer page 283. [Worked solution](../chapters/1.1.md#146)

### 1.105

**Published answer** · Speed2F|sin(ωt/2)|/(mω); distance8F/(mω²); mean4F/(πmω).

**Independent answer** · Same speed and distance. Printed mean matches independent mean speed; vector meanF ey/(mω) also given.

Integrate rotating force toF[sinωt ex+(1−cosωt)ey]/(mω). Over one stop-to-stop interval, pathlength/time differs from displacement/time. Book uses scalar mean-speed convention.

Printed answer page 285. [Worked solution](../chapters/1.2.md#1105)

### 1.109

**Published answer** · Steady circular motion forn<1.

**Independent answer** · Same restoring stability criterion; neutraln=1 and mere existence distinguished.

Perpendicular force preserves speed. Linear radial restoring coefficient is proportional1−n; exact circular existence alone does not selectn.

Printed answer page 285. [Worked solution](../chapters/1.2.md#1109)

### 1.127

**Published answer** · Mean friction power−kmgv0/2=−2 W; printedPmax=−mv0²sqrt(αg)/2.

**Independent answer** · Same mean−1.986525 W and negative dissipation extremum; literal maximum signed power0 also supplied.

For variable frictionv²=v0²−αgx². Product−mαgx sqrt(v0²−αgx²) has a negative minimum of the printed value; maximum dissipative magnitude is its positive modulus. Book calls the negative extremum maximum power.

Printed answer page 286. [Worked solution](../chapters/1.3.md#1127)

### 1.205

**Published answer** · Separation [GM(T/2π)²]^(1/3).

**Independent answer** · Same circular separation and general relative semimajor axis.

Period fixes semimajor axis for any elliptic binary, but instantaneous separation needs eccentricity and phase. Book implicitly uses circular motion.

Printed answer page 288. [Worked solution](../chapters/1.4.md#1205)

### 1.271

**Published answer** · Separation of resultants ka/2.

**Independent answer** · Same horizontal separation of weight and normal reaction; full contact-resultant line interpretation separately noted.

Zero rotational acceleration about cube centre requires normal-load offsetδmg=(kmg)a/2. Gravity and shifted normal then supply the decreasing ground-axis angular momentum.

Printed answer page 292. [Worked solution](../chapters/1.5.md#1271)

### 1.282

**Published answer** · M=mωl²sinθ/12, Mz=Msinθ; |ΔM|=mωl²sin2θ/12; torque magnitude mω²l²sin2θ/24.

**Independent answer** · Same formulas for vector increment and support-torque magnitude; literal increase of modulus is zero.

The constant-length angular-momentum vector precesses. A half-turn reverses its horizontal component, giving the printed increment, while its modulus does not increase. The scanned problem wording asks increase of modulus, so the independent record correctly distinguishes the quantities.

Printed answer page 292. [Worked solution](../chapters/1.5.md#1282)

### 1.315

**Published answer** · p1>p2,v1<v2; streamlines more closely spaced near point2.

**Independent answer** · Same usual irrotational-flow comparisons with explicit inlet-vorticity assumption.

Outer-wall pressure exceeds inner-wall pressure by normal centripetal balance. A common Bernoulli constant then gives larger inner speed; inviscid rotational inlet data alone would not fix this speed comparison.

Printed answer page 293. [Worked solution](../chapters/1.7.md#1315)

### 1.328

**Published answer** · Flow reaction momentρlQ²/(πr²),0.7Nm.

**Independent answer** · Same flow-induced0.700282Nm, with static water-weight contributions separated.

Outflow carries angular momentum fluxρQlv=ρlQ²/A aboutO. This fixes jet-recoil moment; complete wall load also contains water-weight moments requiring the full outlet-leg volume, which source does not dimension.

Printed answer page 294. [Worked solution](../chapters/1.7.md#1328)

### 1.334

**Published answer** · Q=πv0R²/2; kinetic energyπlR²ρv0²/6; wall friction4πηlv0; pressure difference4ηlv0/R².

**Independent answer** · All first three parts identical. Last matches independent horizontal/piezometric pressure drop; independent adds gravity head for unspecified tube orientation.

Direct area integrals ofv andv² and wall shear give(a)–(c). Fully developed balance fixesΔ(p+ρgz)=4ηlv0/R². Book implicitly assumes equal endpoint elevations for actual pressure difference.

Printed answer page 294. [Worked solution](../chapters/1.7.md#1334)

### 1.335

**Published answer** · Extra inlet head5 cm, conventional speed sqrt(2gΔh)=1.0 m/s.

**Independent answer** · Sameα=1/no-extra-entrance-loss0.990454 m/s; profile-dependent alternatives explicitly qualified.

Equal pipe-segment head drops extrapolate to head excessh3−2h2+h1=.05 m. Turning this into mean velocity needs kinetic-energy coefficient and entrance-loss model; book adopts unit coefficient. Independent distinguishes this from parabolic-profile mean0.700357 m/s.

Printed answer page 294. [Worked solution](../chapters/1.7.md#1335)

### 1.343

**Published answer** · Uses the cone half-angle convention:tanθ′=γtanθ,θ′=59°,S=S0√(1−β²cos²θ)=3.3m².

**Independent answer** · Contains exactly that half-angle alternative:59.0362° and 3.29848m². Its preferred full-apex convention instead gives 69.239° and 2.69437m² and is explicitly distinguished.

Problem and answer scans checked. The term taper angle is ambiguous by itself; the published answer establishes that this book intends the angle between cone side and axis. Lorentz contraction leavesradiusfixed andshortensheight, giving the same half-angle formula andarea alternative already present. Preferred presentation may be reordered without discarding the full-angle qualification.

Printed answer page 294. Problem page 68. [Worked solution](../chapters/1.8.md#1343)

### 1.352

**Published answer** · Both marking intervals for absolute coordinate differenceL0: tA−tB=(1−1/γ)L0/v or tB−tA=(1+1/γ)L0/v.

**Independent answer** · Part(a) identical; part(b) explicitly solves signedxA−xB=L0 and gives first branch only.

For arbitrary offsetΔt, xA−xB=L0/γ+vΔt. Requiring positive signed difference gives independent branch. Requiring its absolute magnitudeL0 also allows negative difference and second printed branch. Recommend adding this explicitly labeled absolute-difference interpretation; existing signed answer is correct.

Printed answer page 294, 295. [Worked solution](../chapters/1.8.md#1352)

### 2.132

**Published answer** · EntropyνRlnn=20 J/K.

**Independent answer** · Same19.8525 J/K for cooling isochorically then isobaric expansion back to initial temperature.

Source says isobaric expansion lowers temperature back to initial, but ideal-gas expansion at fixed pressure heats. Book result and independent both use physical return to initial temperature, with final volume multiplied by3.3; literal lowering during expansion is inconsistent wording.

Printed answer page 301. [Worked solution](../chapters/2.4.md#2132)

### 2.142

**Published answer** · Absolute entropyS=aT³/3.

**Independent answer** · Same under perfect-crystal third-lawS(0)=0; generalS(0)+aT³/3 also supplied.

Heat-capacity law determinesdS/dT=aT², hence only entropy difference. Book implicitly chooses zero residual entropy; independent retains normalization condition rather than assuming it fromC alone.

Printed answer page 302. [Worked solution](../chapters/2.4.md#2142)

### 2.150

**Published answer** · Fast insulated expansion leaves higher final equilibrium pressure.

**Independent answer** · Generalpfast≥pslow, strict if rapid path produces entropy; no unique value from speed alone.

At given final volume ideal-gas entropy growth raises finalT andp above reversible adiabatic reference. Book assumes irreversible rapid expansion; equality remains possible if no entropy is produced. Independent states the necessary condition.

Printed answer page 302. [Worked solution](../chapters/2.4.md#2150)

### 2.153

**Published answer** · ΔS=CVln[(T1+T2)²/(4T1T2)]>0.

**Independent answer** · Identical entropy expression.

Energy conservation givesTf=(T1+T2)/2 and no same-species mixing term. AM-GM makesΔS≥0, strictly positive forT1≠T2; at equal initial temperatures it is zero. Book strictness assumes unequal temperatures, while independent formula retains that equality limit.

Printed answer page 302. [Worked solution](../chapters/2.4.md#2153)

### 2.154

**Published answer** · Specified-half probability2^(−N); N≈log(t/τ)/log2≈80 withτ≈10^(−5)s.

**Independent answer** · Same specified-half probability; explicit300 K independent-snapshot estimateN≈75 and separately defined crossing-episode estimateN≈80; distinguishes expected occurrence from guarantee.

Scans checked. With10^10 years≈3.16×10^17 s andτ=10^(−5)s, the book logarithmic formula evaluates74.74, which may be rounded coarsely to about 80. Its printed formula is the snapshot model, so its80 must not be used to identify the independent episode model as the same derivation. The event-time and one-expected-event assumptions are not uniquely given.

Printed answer page 302. Problem page 92, 93. [Worked solution](../chapters/2.4.md#2154)

### 2.172

**Published answer** · The scan explicitly uses an approximation sign: R2−R1≈ρgh³/(8α)=0.20 mm.

**Independent answer** · Contains the same conditional weak-deformation estimate0.204381 mm, while distinguishing it from an exact radius difference and from the auxiliary reciprocal-radius relation.

The published answer agrees numerically and algebraically with the independent nearly spherical estimate: use 2α(1/Rb−1/Rt)=ρgh, then RtRb≈h²/4. It is an approximate model answer, not evidence that terminal motion alone specifies both radii or the missing flow stresses. Preserve the qualification; do not classify its matching estimate as an independent error.

Printed answer page 303. Problem page 94. [Worked solution](../chapters/2.5.md#2172)

### 2.178

**Published answer** · Liberated heat2πα²/(ρg).

**Independent answer** · Same conventional dissipated mechanical energy, plus full thermal expression with interfacial temperature coefficient.

Capillary free-energy drop is twice the gravitational rise energy; their difference is 2πα²/(ρg). Identifying it with all released heat neglects interfacial entropy. The independent record correctly qualifies this and uses temperature derivative when total isothermal heat is requested.

Printed answer page 303. [Worked solution](../chapters/2.5.md#2178)

### 2.181

**Published answer** · A′=F+pVln(p/p0), F=8παR², p=p0+4α/R, V=4πR³/3.

**Independent answer** · Independent gives bubble-side boundary workp0 V+F and extra workF, and explicitly says pump work needs gas-handling convention. It does not presently list book’s closed-gas convention.

For a closed selected ideal gas initially atp0, Vi=pV/p0. Reversible isothermal gas compression costsΔFgas=pVln(p/p0); adding film free energy gives bookA′. This is distinct from bubble-side expanding-boundary work with changing gas amount. Device-only work with an ambient reservoir would further subtract(p−p0)V. Recommend adding the explicitly defined closed-gas convention to independent solution; statement alone supplies no thermal/system prescription, so neither existing boundary-work formula can simply replace the other.

Printed answer page 303. [Worked solution](../chapters/2.5.md#2181)

### 2.184

**Published answer** · ΔS=−2α′Δσ; ΔU=2(α−Tα′)Δσ.

**Independent answer** · Exactly matches explicitly supplied one-face area convention; total physical-area convention has no extra2.

Bookσ counts geometric film area of one face. With total physical liquid-gas areaA=2σ, S=−Aα′ andU=A(α−Tα′). Both requested parts agree once the area definition is fixed.

Printed answer page 303. [Worked solution](../chapters/2.5.md#2184)

### 2.211

**Published answer** · Melted fractionη≈cTΔT/L_f²≈.03, withT≈273 K an input/reference, not the answer.

**Independent answer** · Computes melting-point drop4.7787 K and the same conditional insulated melted fraction.0299924; literal unspecified thermal conditions remain identified.

The numeric screen compared the book reference temperature to a different requested/calculated quantity. In the standard insulated caloric approximation released sensible heatmcΔT melts fractioncΔT/L_f≈.03, matching independent; pressure alone does not specify arbitrary thermal histories.

Printed answer page 304. [Worked solution](../chapters/2.6.md#2211)

### 2.226

**Published answer** · The book gives 5.5 GHz.

**Independent answer** · The independent result is 5.508 GHz for the same formal cutoff criterion.

At the wavelength-to-free-path threshold, ordinary continuum acoustics is already marginal, so the value is a kinetic estimate.

Printed answer page 305. [Worked solution](../chapters/2.7.md#2226)

### 2.242

**Published answer** · The book gives the continuum narrow-gap torque and a pressure threshold of 0.7 Pa.

**Independent answer** · The independent continuum torque agrees. Its diameter-based pressure is 0.707 Pa and its viscosity-normalized pressure is 0.892 Pa.

The tabulated effective diameter and viscosity are independent inputs and yield different coefficients under this simplified kinetic model. The book uses the diameter.

Printed answer page 305. [Worked solution](../chapters/2.7.md#2242)

### 2.249

**Published answer** · The key gives T₁(T₂/T₁)^(x/l) and a flux proportional to ln(T₂/T₁).

**Independent answer** · The independent temperature agrees and its flux component along positive x is (α/l)ln(T₁/T₂).

Fourier’s law sets the sign opposite the temperature gradient. The two expressions are the same for opposite flux orientations.

Printed answer page 305. [Worked solution](../chapters/2.7.md#2249)

### 2.252

**Published answer** · The elementary hard-sphere mean-free-path model gives 40 W/m².

**Independent answer** · Using Appendix 15’s tabulated helium conductivity gives 113.2 W/m² at constant conductivity and about 120.6 W/m² with the stated √T model.

Insert the Appendix diameter 0.20 nm into the textbook’s kinetic formula 2iR^(3/2)(T₂^(3/2)−T₁^(3/2))/(9π^(3/2)ℓd²N_A√M) to recover 39.79 W/m². Inserting the independently tabulated conductivity into Fourier’s law reproduces the independent values. The difference is a transport-coefficient model choice.

Printed answer page 306. [Worked solution](../chapters/2.7.md#2252)

### 3.3

**Published answer** · Positive leak-rate magnitude(3a/2)sqrt(2πε0mg/l).

**Independent answer** · dq/dt is the negative of this magnitude for positive decaying charge; separate single-sphere-speed convention doubles it.

Equilibrium givesq∝x^(3/2). With relative approach speed−dx/dt=a/sqrt(x), differentiation agrees in magnitude. Printed positive quantity is charge-loss rate rather than signed charge derivative.

Printed answer page 306. [Worked solution](../chapters/3.1.md#33)

### 3.66

**Published answer** · Gap-field magnitudes Δφ/(2d),Δφ/d,Δφ/(2d), with plate-charge magnitudes ε0Δφ/(2d) and 3ε0Δφ/(2d).

**Independent answer** · Same conventional solution, plus common-mode-charge family.

All printed magnitudes agree for neutral connected exterior plates and zero external field. Voltage differences alone do not fix externally supplied common-mode charge; baseline labels this boundary assumption.

Printed answer page 309. [Worked solution](../chapters/3.2.md#366)

### 3.67

**Published answer** · Induced charges −q(1−x/l) and−qx/l.

**Independent answer** · Identical fixed-potential/grounded answer, with isolated-neutral total-charge caveat.

Both image-charge integrated fractions agree. An isolated neutral conductor can have compensating remote-surface charge, so net charge requires boundary convention; the book gives the customary fixed-potential result.

Printed answer page 309, 310. [Worked solution](../chapters/3.2.md#367)

### 3.79

**Published answer** · FluxπR²E0cosθ(ε−1)/ε; drawn circulation−ε0(ε−1)l E0sinθ.

**Independent answer** · Both formulas agree whenl is the horizontal leg length shown in Figure3.11.

Source122 labels the horizontal spanl but its wording callsl the closed-path length. Actual circulation is−ε0(ε−1)E0sinθ times each horizontal-leg length; ifl literally means full perimeter, height is also needed. The signed formula and part(a) match the scan.

Printed answer page 310. [Worked solution](../chapters/3.2.md#379)

### 3.129

**Published answer** · The key gives the literal final-state Coulomb cross term −q²/(8πε₀l).

**Independent answer** · The saved solution reports that cross term and also the relaxed assembly energy −q²/(16πε₀l).

The induced charge changes with the real charge. Its self-energy cancels half the cross term. Differentiating the complete relaxed energy gives the image force, while the printed interaction term answers the literal pair-energy wording.

Printed answer page 312. [Worked solution](../chapters/3.3.md#3129)

### 3.141

**Published answer** · Workq²(x2−x1)/(2ε0S) andε0SV²(x2−x1)/(2x1x2).

**Independent answer** · Identical fixed-charge and fixed-voltage work formulas.

The source callsq a capacitance, but both the dimensions and printed answer identifyq as fixed charge. Under that explicit source emendation both printed parts agree; a literal fixed-capacitance changing-gap problem is inconsistent.

Printed answer page 313. [Worked solution](../chapters/3.3.md#3141)

### 3.143

**Published answer** · Δp=ε0 ε(ε−1)(V/d)²/2≈7k Pa≈0.07atm.

**Independent answer** · Conditional dielectric-uptake stress88.5Pa; thermodynamic pressure requiresρ(∂ε/∂ρ)_T.

Source PDF 131 asks liquid-water pressure, which is not automatically the same observable as incompressible dielectric uptake stress. With ε=81,V/d=5e5 V/m the book extra ε factor gives 7168.5Pa, while uptake gives 88.5Pa. A thermodynamic model needsΔp≈ε0ρ ε_ρ E²/2; the book amounts to ρ ε_ρ=ε(ε−1), while the alternate uptake approximation usesε−1. A single supplied ε does not determine that material derivative, so this is a constitutive/quantity interpretation rather than a demonstrated arithmetic error.

Printed answer page 313. [Worked solution](../chapters/3.3.md#3143)

### 3.172

**Published answer** · Current magnitude[(η−1)Ε/R]exp[−ηt/(RC)].

**Independent answer** · Same magnitude; signed current in the normal charging direction is its negative.

Abruptly reducing capacitance conserves instantaneous charge and raises voltage toηΕ, driving reverse charging current. The printed answer supplies no current-reference arrow, so its positive scalar is a magnitude rather than a conflicting signed component.

Printed answer page 314. [Worked solution](../chapters/3.4.md#3172)

### 3.189

**Published answer** · Heat4Rq²/(3Δt) and Rq²ln2/(2Δt).

**Independent answer** · Same linear-ramp and exponential-decay results; separately gives a discrete staircase alternative.

Both printed formulas checked. Continuous exponential decay is the common interpretation of repeatedly halving current, whereas only the sampled half-life rule does not uniquely fix the waveform.

Printed answer page 314. [Worked solution](../chapters/3.4.md#3189)

### 3.190

**Published answer** · Optimum resistor R=3R0.

**Independent answer** · Same optimum for external load heating; total including internal dissipation has no finite positive optimum.

The book and baseline agree on load-only power. Including source internal heating changes the objective, which the baseline makes explicit.

Printed answer page 314. [Worked solution](../chapters/3.4.md#3190)

### 3.208

**Published answer** · Path=enl〈v〉/j, of order10^7 m, using mean thermal electron speed.

**Independent answer** · Same symbolic path=v_mean*n e l/j; drift time135.14 s. Conditional MB300 K path1.44e7 m and degenerate Fermi example2.12e8 m.

The printed formula agrees. The problem supplies neither temperature nor a microscopic speed distribution, so its numerical10^7 m is an implicit classical thermal-speed estimate rather than a uniquely inferable path. No mismatch should be declared by comparing that estimate with the separately labeled Fermi example.

Printed answer page 315. [Worked solution](../chapters/3.4.md#3208)

### 3.237

**Published answer** · Fieldμ0nI[1−x/sqrt(x²+R²)]/2, x positive outside; distance for 1% deficit approximately5R.

**Independent answer** · Same curve with x positive inside, hence plus sign; distance4.92469R.

ActualFig23 uses the book exterior-positive coordinate. Reversing that coordinate gives the independent formula and graph. Both use the same exact depth(1−2η)R/[2sqrt(η(1−η))].

Printed answer page 316. [Worked solution](../chapters/3.5.md#3237)

### 3.240

**Published answer** · Flux per metreμ0I/(4π)=1.0µWb/m.

**Independent answer** · Same 1.0µWb/m through a radial-longitudinal half-cut; zero through a literal transverse cross-section.

The answer scan confirmsµWb, notp Wb. Azimuthal B has no normal component through a transverse wire cross-section, whereas integrating its internal field along a radial sheet givesμ0I/(4π). The source mixes cross-section with per-metre longitudinal wording; the published answer selects the latter surface.

Printed answer page 316. [Worked solution](../chapters/3.5.md#3240)

### 3.250

**Published answer** · Magnetic/electric force ratioμ0ε0v²=(v/c)²≈1e−6.

**Independent answer** · Same1.00091e−6 for side-by-side parallel proton tracks.

The result assumes transverse separation; collinear motion would have zero magnetic interaction. Under the customary side-by-side geometry both exact formulas and numbers agree.

Printed answer page 316. [Worked solution](../chapters/3.5.md#3250)

### 3.260

**Published answer** · All three panels have force density(B1²−B2²)/(2μ0) directed right and current into page.

**Independent answer** · Same(a),(b); for(c) gives invariant sheet jump/force laws and the common tangent-field perspective interpretation.

For sheet normaln, K=n×(B2−B1)/μ0 andf=K×(B1+B2)/2. If Bn=0, the book normal-pressure formula follows. If oblique strokes in(c) are literal nonzero normal components, a tangential force also exists. Scan projection is not labeled sufficiently to remove this interpretation issue.

Printed answer page 316. [Worked solution](../chapters/3.5.md#3260)

### 3.267

**Published answer** · Carrier concentration2.5e28, unit printedm−1; approximately one electron per atom.

**Independent answer** · Same2.49688e28 m−3 and 0.98235 electron per atom.

The Hall formulajB/(eE) has volume-density unitsm−3; the printedm−1 is a unit typo. Both numerical concentration and atom ratio agree.

Printed answer page 317. [Worked solution](../chapters/3.5.md#3267)

### 3.290

**Published answer** · Rotation-only potential difference magnitude3.0nV; magnetic contribution approximatelyωBa²/2=20mV.

**Independent answer** · Same magnitudes; explicitly gives rim-minus-centre signs and both axial field orientations, retaining the tiny inertial correction.

The book leaves the voltage ordering and relative directions ofω andB implicit. Rim-minus-centre is−meω²a²/(2e) withoutB andωBa²/2 minus that correction for parallelω,B. Both printed magnitudes match.

Printed answer page 317. [Worked solution](../chapters/3.6.md#3290)

### 3.310

**Published answer** · One field magnitude half ab(η−1)/(η+1).

**Independent answer** · Total wire fieldsab/(η+1) andηab/(η+1); uniform nonconservative componentab/2.

The printed single value is precisely the magnitude of the conservative charge-redistribution correction, obtained by subtractingab/2 from either total field. Source asks electric field in the ring without specifying this decomposition. The independent primary answer gives the physically relevant total tangential fields in the two different-resistance halves; the printed value vanishes atη=1 although the total Faraday field does not. Treat this as a quantity/decomposition interpretation, not an arithmetic mismatch.

Printed answer page 318. [Worked solution](../chapters/3.6.md#3310)

### 3.334

**Published answer** · Secondary-current scalarαM[1−exp(−Rt/L2)]/R.

**Independent answer** · Same magnitude; signed current is negative for positive mutual-flux referenceM.

The source does not specify the loop-current reference. L2 I2dot+RI2=−Mα gives the independent negative signed current, while the printed positive scalar is its magnitude or the oppositely referenced winding current.

Printed answer page 319. [Worked solution](../chapters/3.6.md#3334)

### 3.336

**Published answer** · W=NIΦ/2=.5 J.

**Independent answer** · Same.500 J under a linear reversible constitutive approximation; general W=∫I d(NΦ).

The supplied single iron operating point does not fix nonlinear magnetic energy, but the printed half-product matches the independent explicitly linear branch. It is not an arithmetic discrepancy; the extra constitutive assumption must be retained.

Printed answer page 319. [Worked solution](../chapters/3.6.md#3336)

### 3.338

**Published answer** · Wgap/Wmag≈μb/(πd)=3.0; L≈μ0SN²/[b+πd/μ]=.15H.

**Independent answer** · Linear-model branch2.97721 and .150508H, retaining magnetic lengthπd−b.

Both scanned numerical results agree within the thin-gap approximation. Energy-method equivalence additionally requires linear reversibleμ; a single operating-point permeability only fixes secant flux inductance in general. No numeric error is indicated.

Printed answer page 319. [Worked solution](../chapters/3.6.md#3338)

### 3.347

**Published answer** · Displacement-current density equals minus conduction current; scalar discharge displacement currentq/(ρεε0).

**Independent answer** · Identical cancellation, with total outward displacement current−q/(ρεε0).

The vector identity fixes opposition unambiguously. The positive scalar in the second printed part is a magnitude; the independent signed result states the outward normal convention.

Printed answer page 319. [Worked solution](../chapters/3.6.md#3347)

### 3.353

**Published answer** · Maximum displacement-current-density magnitude atx=0, |j|max=qv/(4πa³).

**Independent answer** · Identical magnitude branch; also distinguishes the maximum of an oppositely chosen signed axial component.

Differentiating the ring axial field gives absolute maximum at the center. Signed component extrema atx=a sqrt(3/2) are not larger vector magnitudes, so the printed answer agrees with the baseline magnitude branch.

Printed answer page 320. [Worked solution](../chapters/3.6.md#3353)

### 3.360

**Published answer** · Surface densityε0v B=.40p C/m².

**Independent answer** · Same conductor value.398p C/m² and opposite-face signs.

Both formulas/numbers agree for a conducting non-ferromagnetic plate in steady charge equilibrium. Non-ferromagnetic alone does not specify conductivity or dielectric response; baseline explicitly flags this extra material assumption.

Printed answer page 320. [Worked solution](../chapters/3.6.md#3360)

### 3.374

**Published answer** · Turning distance2E0/a and acceleration quantityw=qE0/m.

**Independent answer** · Same turning distance for positive charge; signed acceleration there−qE0/m. Negative charge has no later turning point.

At the turning locationE=−E0. The printed positivew is consistent with an acceleration magnitude forq>0, whereas the independent result explicitly supplies its opposite-to-initial-motion direction and the missing charge-sign branch. It would be a sign error ifw were intended as the signed+x component.

Printed answer page 321. [Worked solution](../chapters/3.7.md#3374)

### 3.395

**Published answer** · x=a(sinωt−ωtcosωt)/(2ω²),y=at sinωt/(2ω), expanding spiral, a=q Em/m.

**Independent answer** · Same zero-initial-velocity branch, withu=a/ω; adds arbitrary initial velocities.

All printed motion formulas and asymptotic shape agree. The statement gives initial position but only implicitly suggests initial rest through starts-moving wording.

Printed answer page 322. [Worked solution](../chapters/3.7.md#3395)

### 3.396

**Published answer** · Minimum voltage2π²ν²mrΔr/e≈.10MV.

**Independent answer** · Identical primary full-turn/same-dee neighboring-trace spacing; a half-turn-spacing alternative doubles the threshold.

Energy increases by2e V per revolution. Thusm(2πν)²rΔr≈2e V gives the printed formula. Scan wording does not label which neighboring traces are compared; baseline preserves that convention.

Printed answer page 322, 323. [Worked solution](../chapters/3.7.md#3396)

### 3.399

**Published answer** · Crossing count2πνW/(e Bc²)=9.

**Independent answer** · Same≈9 when W is acquired kinetic energy;≈8 if W denotes final total energy.

A one-period synchronism increment requiresΔE=e Bc²/(2πν). Printed formula and primary answer agree; ambiguity is energy origin/injection, not a different dynamical calculation.

Printed answer page 323. [Worked solution](../chapters/3.7.md#3399)

### 3.400

**Published answer** · Frequencyω=ω0/sqrt(1+at), ω0=qB/m and a=qBΔW/(πm²c²).

**Independent answer** · Identical initially resting law, with general initial total-energy expression also supplied.

The smooth per-turn energy gain obeys dE/dt=ΔW|q|Bc²/(2πE), soE² grows linearly. The book chooses the initial-rest anchor, while the source does not explicitly specify injection energy; the independent result labels that convention.

Printed answer page 323. [Worked solution](../chapters/3.7.md#3400)

### 3.405

**Published answer** · Prints derivative d E/dr=Bdot(r0)−half its area-average=0.

**Independent answer** · Proves the same stationarity and explains why a strict local extremum is not automatic.

The printed derivative identity agrees. The source asks for an extremum, while a smooth degenerate stationary inflection profile is possible; baseline supplies a counterexample to that stronger universal claim.

Printed answer page 323. [Worked solution](../chapters/3.7.md#3405)

### 4.9

**Published answer** · Position density1/[πsqrt(a²−x²)].

**Independent answer** · Identical arcsine density for uniform temporal sampling.

The time fraction2dx/(T|velocity|) gives the same normalized density. Normalization alone does not impose a sampling distribution; uniform phase is the common implicit convention.

Printed answer page 324. [Worked solution](../chapters/4.1.md#49)

### 4.16

**Published answer** · The radical uses U₀ without an absolute value.

**Independent answer** · Use |U₀|, taking the stable minimum of the cosine potential.

The expressions agree for U₀>0. If U₀<0 the stable equilibrium moves by π/a and the positive curvature is a²|U₀|.

Printed answer page 324. [Worked solution](../chapters/4.1.md#416)

### 4.19

**Published answer** · Buoyancy-corrected pendulum period2πsqrt(ηl/[g(η−1)])≈1.1 s.

**Independent answer** · Same buoyancy-only model; adds inviscid added-mass alternative.

Printed formula exactly agrees when fluid only changes gravity through buoyancy. Neglecting resistance does not itself exclude reversible added inertia, a separate model caveat.

Printed answer page 325. [Worked solution](../chapters/4.1.md#419)

### 4.21

**Published answer** · Return-to-correct-time formula sqrt(2h/w)[sqrt(1+w/g)−sqrt(1−w/g)]/[1−sqrt(1−w/g)].

**Independent answer** · Identical formula.

Both integrate the usual instantaneous clock rate proportional to sqrt(effectiveg). Abrupt acceleration reversal can require phase information for a fully dynamical real clock; common ideal rate model agrees.

Printed answer page 325. [Worked solution](../chapters/4.1.md#421)

### 4.32

**Published answer** · Friction coefficient4π²a/(g T²)=.4.

**Independent answer** · Identical conditional formula, numerical.40243.

Source PDF 177–178 literally says the amplitude becomes less than T=1 s; dimensions and acceleration threshold require reading this as period. Both book and baseline make this emendation.

Printed answer page 325. [Worked solution](../chapters/4.1.md#432)

### 4.48

**Published answer** · Small-oscillation period4π/ω.

**Independent answer** · Same limiting infinitesimal-release value; includes nonzero-initial-push alternative.

Energy drop from inverted to stable position is 2mgl. With vanishing initial angular speed,ω²=4mgl/I and T0=4π/ω. Exact rest at unstable equilibrium cannot start without a perturbation.

Printed answer page 326. [Worked solution](../chapters/4.1.md#448)

### 4.65

**Published answer** · The printed sinusoid assumes no initial circuit current.

**Independent answer** · The same sinusoid for I₀=0, plus a branch for an initially energized loop.

Flux conservation fixes LI−Blx=LI₀ in a consistent current orientation, so a nonzero I₀ shifts the oscillator equilibrium. The ordinary quiescent initial state agrees with the key.

Printed answer page 326. [Worked solution](../chapters/4.1.md#465)

### 4.66

**Published answer** · Fall lawx=g(1−cosωt)/ω²,ω=l B/sqrt(m L).

**Independent answer** · Identical ideal zero-resistance motion, plus finite-resistance equation.

The printed result follows flux conservation and gravity; resistance was not specified even though copper conductors are mentioned. Baseline correctly labels the lossless limit.

Printed answer page 326. [Worked solution](../chapters/4.1.md#466)

### 4.75

**Published answer** · Q=πn/ln η≈500.

**Independent answer** · Agrees for Q=ω_d/(2β), with Q₀=ω₀/(2β) also stated.

The two frequency conventions differ by Q₀²−Q²=1/4 and agree at printed precision.

Printed answer page 327. [Worked solution](../chapters/4.1.md#475)

### 4.83

**Published answer** · x=(F0/m)(cosω0t−cosωt)/(ω²−ω0²).

**Independent answer** · Identical zero-initial-velocity response, plus arbitrary-velocity family and resonant limit.

The apparent sign changes cancel between numerator and denominator. Initial equilibrium position alone does not mathematically specify initial velocity; printed answer takes rest.

Printed answer page 327. [Worked solution](../chapters/4.1.md#483)

### 4.84

**Published answer** · During pulsex=(F/k)(1−cosω0t); after-pulse amplitude(2F/k)|sin(ω0τ/2)|.

**Independent answer** · Same pulse response and amplitude for initially resting particle, with initial-velocity qualification.

Continuity of position/velocity produces identical amplitude; source only explicitly says initially at equilibrium. All printed motion equations and amplitude checked.

Printed answer page 327. [Worked solution](../chapters/4.1.md#484)

### 4.93

**Published answer** · Part (a) agrees. The printed quality factor uses the damped free frequency.

**Independent answer** · Gives both the printed Q and the natural-frequency convention Q₀.

Expansion of the printed numerator square gives 4D²+4D cos α−sin²α. The two Q definitions obey Q₀²−Q²=1/4.

Printed answer page 328. [Worked solution](../chapters/4.1.md#493)

### 4.94

**Published answer** · Plasma angular frequency sqrt(ne²/(ε0 m))≈1.65e16 s−1.

**Independent answer** · Same formula and≈1.64e16 s−1 for volume density8.5e28 m−3.

Source PDF 188 clearly misprints concentration unitm−1. Both solutions implicitly emend to volumetricm−3; formula and numerical value agree to historical constants/rounding.

Printed answer page 328. [Worked solution](../chapters/4.2.md#494)

### 4.101

**Published answer** · Envelope contacts nπ/ω; extremum times[arctan(−β/ω)+πn]/ω.

**Independent answer** · Identical envelope contacts and nonnegative-time local maxima; also gives global maximum and zero minima.

Both printed time sequences agree after excluding the negative n=0 derivative root. Distinguishing envelope amplitude from actual extrema resolves the unusual wording.

Printed answer page 328. [Worked solution](../chapters/4.2.md#4101)

### 4.102

**Published answer** · Initial voltage divided by peak value sqrt(1−R²C/(4L)).

**Independent answer** · Same instantaneous-envelope ratio; literal maximum attained after release gives 1.

Atinitial current0 the envelope exceeds initial displacement voltage. The book uses peak to mean oscillation envelope amplitude, which is also the baseline primary branch.

Printed answer page 328. [Worked solution](../chapters/4.2.md#4102)

### 4.125

**Published answer** · Voltage peaks at ωC=sqrt(ω0²−2β²) and ωL=ω0²/sqrt(ω0²−2β²).

**Independent answer** · Identical finite-peak frequencies, with explicit requirement 0<R²<2L/C and boundary extrema outside that range.

The printed finite-frequency formulas assume a real positive radicand. The independent result correctly notes that larger damping moves the capacitor maximum to zero frequency and the ideal-inductor supremum to infinite frequency; R=0 is the singular lossless resonance limit.

Printed answer page 329. [Worked solution](../chapters/4.2.md#4125)

### 4.129

**Published answer** · Q=sqrt(η²−1/4).

**Independent answer** · Same book-Q at series-current resonance; separately gives conventional Q0=η and capacitor-peak alternative.

Printed formula followsη=ω0L/R atω0=1/sqrt(LC), with Qbook=ωd L/R. A capacitor-voltage resonance peak is a different frequency; baseline distinguishes it.

Printed answer page 329. [Worked solution](../chapters/4.2.md#4129)

### 4.134

**Published answer** · Charging timeπt0/2.

**Independent answer** · Identical for ideal half-sinusoidal charging current; general time I0t0/Imean.

Half-wave sine has Irms=Im/2 and Imean=Im/π. RMS current alone does not fix arbitrary battery/rectifier conduction waveform, which is the baseline qualification.

Printed answer page 330. [Worked solution](../chapters/4.2.md#4134)

### 4.145

**Published answer** · Phase-zero resonance sqrt[1/(LC)−R²/L²]≈3e4rad/s; RMS source current VRC/L≈3mA and branch currents approximately1 A.

**Independent answer** · Identical phase-zero frequency and current formulas: 31622.62rad/s,3.10mA,0.980306 A,0.980301 A; also gives the slightly different exact impedance-peak frequency.

The printed resonance means zero input phase, not the nearby minimum source-current frequency. The source asks effective currents and the common interpretation takes31 V as RMS. Under those conventions all four printed results match.

Printed answer page 330. [Worked solution](../chapters/4.2.md#4145)

### 4.149

**Published answer** · Printed Fx=+I0²ω²L2 M Mprime/[2(R²+ω²L2²)].

**Independent answer** · For the force on coil2 toward increasing separation, the coefficient has a minus sign; ordinary decreasing positive coupling therefore gives repulsion.

The source Fig4.36 labels separation x but does not specify which coil the quoted projection acts on or a spatial force-axis arrow. Independent phasor calculation gives <I1I2>=−I0²ω²ML2/[2(R²+ω²L2²)] and force on coil2 = Mprime<I1I2>. The printed opposite sign can represent the equal-and-opposite force on coil1 along the same laboratory axis; it would be wrong if intended as the generalized force increasing separation. This directional convention must be resolved before calling it a book error.

Printed answer page 330. [Worked solution](../chapters/4.2.md#4149)

### 4.157

**Published answer** · Phase difference−2πln(1−η)/(γλ)≈.3rad.

**Independent answer** · Same larger-amplitude-reference result.300705rad; alternate denominator convention.297713rad.

Both agree to stated precision; baseline labels which amplitude defines the one-percent difference.

Printed answer page 331. [Worked solution](../chapters/4.3.md#4157)

### 4.166

**Published answer** · Maximum amplitude5 mm, third overtone.

**Independent answer** · 4.94975 mm, fourthharmonic/third overtone for uniformly spaced successive crossings.

Both requested numbers agree. Equal15 cm spacings for all successive3.5 mm-amplitude crossings requireλ=.60 m and crossing amplitudeamax/sqrt2; two isolated points alone would not determine the mode.

Printed answer page 332. [Worked solution](../chapters/4.3.md#4166)

### 4.168

**Published answer** · Frequency increases sqrt(1+ΔT/T)/(1+Δl/l)≈2times.

**Independent answer** · Same 2.005908 increase for unchanged material linear density; separately gives 1.617215 if all mass is retained.

The standard shortening of vibrating span matches the printed formula. Compression of an unchanged mass would be a different preparation.

Printed answer page 332. [Worked solution](../chapters/4.3.md#4168)

### 4.190

**Published answer** · Phase travel time2l(sqrtε1−sqrtε2)/[c ln(ε1/ε2)].

**Independent answer** · Identical optical-slowness integral under the eikonal/local-index approximation.

Integrating sqrt(ε(x))/c along the exponential profile reproduces the printed formula and uniform limit. Arbitrarily sharp graded slabs require full-wave reflection/phase analysis, which the statement does not specify.

Printed answer page 333. [Worked solution](../chapters/4.4.md#4190)

### 4.216

**Published answer** · K=K0 exp(−αt), α=e⁴B²/(3πε0c³m³); numerical times 2.5 s for an electron and 1.6e10 s for a proton.

**Independent answer** · Identical decay coefficient; τe=2.57997(1 T/B)² s and τp=1.59503e10(1 T/B)² s.

The actual problem scan PDF 204 supplies no numerical field. The printed numbers therefore implicitly use B=1 T; the independent result retains the necessary B−2 factor. Proton/electron time ratio and the printed symbolic exponential agree.

Printed answer page 334. [Worked solution](../chapters/4.4.md#4216)

### 4.223

**Published answer** · Bound-electron ratio μ0²(e²/m)²ω⁴/[6π(ω0²−ω²)²].

**Independent answer** · Same off-resonant reradiation cross-section; distinguishes zero irreversible heat in the ideal frictionless oscillator.

Both retain the forced periodic response and neglect damping only in that response. The printed dissipated-power result means energy scattered as radiation. Exact resonance has no finite undamped steady response, and literal zero-damping material heat is a different quantity.

Printed answer page 335. [Worked solution](../chapters/4.4.md#4223)

### 5.5

**Published answer** · Cone flux pi L deltaS sin squared(theta); exitance pi L.

**Independent answer** · Matches the independent cone-half-angle branch; baseline additionally gives sin squared(theta/2) if aperture denotes full vertex angle.

Lambertian flux is L deltaS integral cos(theta)dOmega. The key uses theta as half-angle, while the wording aperture angle can denote the full opening; both conventions are explicit in the independent record.

Printed answer page 335. [Worked solution](../chapters/5.1.md#55)

### 5.8

**Published answer** · Wall maximum.21lx at vertical dropR/sqrt(3).

**Independent answer** · Independent centred-spot maximum.206748lx and 1.15470 m agree; the baseline explicitly notes the centred-spot assumption and gives the off-centre generalization.

Lambertian ceiling spot radiance is rho E/pi. Wall illumination at drop z is rho ES Rz/[pi(R squared+z squared) squared], maximized at z=R/sqrt(3). A location of the spot is otherwise needed; the key assumes the ceiling centre.

Printed answer page 335. [Worked solution](../chapters/5.1.md#58)

### 5.18

**Published answer** · Apparent depth h n squared cos cubed(theta)/(n squared−sin squared(theta))^(3/2).

**Independent answer** · Matches the independent meridional-bundle depth. The baseline separately gives the conventional vertical-intercept/sagittal depth h cos(theta)/sqrt(n squared−sin squared(theta)).

At oblique refraction a point produces an astigmatic bundle. Differentiating nearby rays within the incidence plane gives the key meridional image; back-projecting the central ray to the object vertical gives the other depth. Both reduce to h/n at normal viewing, so the key is an image-definition choice.

Printed answer page 335. [Worked solution](../chapters/5.1.md#518)

### 5.49

**Published answer** · Matching magnification15; constant-illuminance rangeGamma≤15.

**Independent answer** · Both key results are explicit in the independent record, which flags the problem objective-stop phrase as incompatible with that constant range.

The exit-pupil diameter is 2 l_best NA/Gamma and equals 4 mm atGamma15. Below15 the eye pupil limits accepted rays and retinal radiance is constant. In the literal objective-limited rangeGamma≥15, irradiance falls asGamma^−2; there is no nontrivial constant interval under that restriction.

Printed answer page 337. [Worked solution](../chapters/5.1.md#549)

### 5.69

**Published answer** · Wavelength0.6 micrometre from2 delta_x delta_h/[l(eta−1)].

**Independent answer** · Matches the independent conditional value when l is the actual source-screen distance. The baseline flags the problem wording calling it source-mirror distance.

Lloyd virtual-source spacing is 2h, so fringe width=lambda L/(2h). The spacing ratio fixes h=delta_h/(eta−1)=1.2 mm and lambda=2delta_x delta_h/[L(eta−1)]. A source-mirror distance along the apparatus does not by itself specify L; the key uses the intended screen-distance convention.

Printed answer page 338. [Worked solution](../chapters/5.2.md#569)

### 5.83

**Published answer** · lambda approximately d(r_i squared−r_k squared)/[4n l squared(i−k)].

**Independent answer** · Matches the independent thin-plate leading formula, which additionally notes the unstated material index and supplies a finite-d/l paraxial refinement.

For reflected equal-inclination rings, the source-to-screen return geometry gives radius approximately2l theta. Successive dark orders differ by lambda, yielding the factor4l squared. Finite plate displacement changes the denominator to 4n l(l+d/n); n must still be known.

Printed answer page 339. [Worked solution](../chapters/5.2.md#583)

### 5.85

**Published answer** · Wedge angle3arcmin; relative bandwidth delta_lambda/lambda approximately0.014.

**Independent answer** · Matches independent8.73016e−4rad and 0.014 conditional bandwidth estimate.

Successive fringes give alpha=lambda/(2n delta_x). At distance l the path delay is 2n alpha l; assigning disappearance to one coherence beat gives delta_lambda/lambda approximately delta_x/l. Actual visibility thresholds depend on spectral shape and coherence criterion, explicitly qualified in the baseline.

Printed answer page 339. [Worked solution](../chapters/5.2.md#585)

### 5.86

**Published answer** · Ring width approximately lambda R/(4r).

**Independent answer** · Matches the independent bright-to-dark half-period alternative. Its full same-type-extremum period is lambda R/(2r).

Ring phase varies with2t approximately r squared/R. Adjacent bright and dark extrema differ by phase pi and give dr=lambda R/(4r); successive maxima differ by2pi and double this distance. The word width in the key denotes one bright/dark band, not a complete interference period.

Printed answer page 339. [Worked solution](../chapters/5.2.md#586)

### 5.89

**Published answer** · Wavelength0.50micrometre from the diameter/order differences.

**Independent answer** · Matches independent500 nm. The baseline also identifies that the absolute labels do not describe zero-gap contact.

Subtracting dark-ring equations gives lambda=(d2 squared−d1 squared)/[4R(k2−k1)]. Each absolute ring equation then requires a centre gap1.50micrometres. If ideal actual contact and visible ordinal tenth/fifteenth rings are both required, the input data are inconsistent; the key only uses the difference.

Printed answer page 339. [Worked solution](../chapters/5.2.md#589)

### 5.95

**Published answer** · The angular fringe width isλ/(2dsinθ), and rings get narrower outward.

**Independent answer** · Agrees with the baseline inter-order spacing; physical bright-line FWHM additionally needs reflectivity/finesse.

Differentiating2dcosθ=mλ by one order yields the free-spectral-range spacing. At fixed finesse the actual FWHM has the same order scaling but an additional factor1/finesse; near the axis the local1/sinθ form needs the exact nonlinear profile.

Printed answer page 339. [Worked solution](../chapters/5.2.md#595)

### 5.109

**Published answer** · Primary zone-plate focal length.6 m, while noting other foci.

**Independent answer** · Matches independent primary.60 m and its image-order qualification.

The primary zone-plate lens law1/a+1/b=1/f gives .6 m. A binary amplitude zone plate also has odd-order foci, so an unspecified higher-order image does not uniquely identify the primary f; the key explicitly selects the principal focus.

Printed answer page 340. [Worked solution](../chapters/5.3.md#5109)

### 5.111

**Published answer** · The Cornu-spiral estimates are intensity ratio about 1.7 and wavelength 0.7 μm.

**Independent answer** · Numerically evaluated Fresnel extrema give ratio 1.76 and wavelength 0.625 μm.

The formula for wavelength is the same. With Δx=0.63 mm and b=1 m the printed wavelength implies a Cornu-parameter interval of 1.065, versus 1.127 from numerical extrema. The wavelength scales as the inverse square of that interval, magnifying graphical reading error.

Printed answer page 340. [Worked solution](../chapters/5.3.md#5111)

### 5.115

**Published answer** · The key givesI2/I1 about 1.9.

**Independent answer** · The independent answer gives the requested-order ratioI1/I2=.541588, reciprocalI2/I1=1.84642, agreeing atCornu-plot accuracy.

Fig.5.23 interchanges a half-plane contribution and an opposite-edge tail at points1,2. Choose the phase ledge to maximizeI2 and evaluate both at that same phase. The apparent factor difference is a reciprocal ratio convention, with a small graphical approximation.

Printed answer page 340. [Worked solution](../chapters/5.3.md#5115)

### 5.123

**Published answer** · Optical wavelength about .6micrometre.

**Independent answer** · Matches independent co-propagating grazing branch.609080micrometre. The baseline also separates the reversed-tangential branch.

For ordinary grazing diffraction, m lambda=d[cos(alpha0)−cos(alpha)] approximately d(alpha squared−alpha0 squared)/2. Reversing the outgoing tangential direction changes the cosine difference into a sum and gives a different far-infrared wavelength, not another sign of the same solution.

Printed answer page 341. [Worked solution](../chapters/5.3.md#5123)

### 5.127

**Published answer** · Wavelength about .54micrometre from the same-side first/second-order separation.

**Independent answer** · Matches independent primary.534162micrometre. The baseline explicitly gives the opposite-side alternative.191254micrometre.

Solve d sin(theta1)=lambda and d sin(theta1+15degrees)=2lambda for the conventional branch. If the given angular separation instead spans opposite sides of zero, the sine angles add to 15degrees and yield the other wavelength.

Printed answer page 341. [Worked solution](../chapters/5.3.md#5127)

### 5.130

**Published answer** · Zero and first orders−18.5degrees,0; highest emerging order6 at +78.5degrees.

**Independent answer** · Baseline mirrored signed convention gives +18.59degrees,0 and −78.59degrees for strict highest order6, plus a formal tangent order7.

Reversing the wedge orientation reverses all signed angles and order labels. The common physical angle magnitudes agree. At exactly|sinθout|=1 the formal order7 is tangent with no outward-normal flux; the key counts only strictly emerging order6.

Printed answer page 341. [Worked solution](../chapters/5.3.md#5130)

### 5.133

**Published answer** · Double-star separation about .06arcsec.

**Independent answer** · Independent fundamental null.0597082arcsec agrees, with explicit projected-baseline and unknown-null-order qualifications.

Each incoherent star produces its own two-slit fringe system. For the fundamental cancellation their shift is half a fringe, giving d psi=lambda/2. Higher nulls and a nonaligned slit baseline require the independent qualifications.

Printed answer page 341. [Worked solution](../chapters/5.3.md#5133)

### 5.141

**Published answer** · Pitch.05 mm and required width6 cm.

**Independent answer** · Matches independent conventional just-resolved estimates. The baseline additionally gives the actual integer-line-count interval because beginning in fifth order does not impose equality.

Fifth resolves while fourth fails:4 N<lambda/delta_lambda≤5 N. IntegerN bounds the allowed pitch for the10 mm width. For the460 nm/.13 nm doublet in third order, N_new at least1180, so l_new=1180d. Equality at the first data threshold gives the conventional approximately6 cm upper-end estimate, not a unique exact pitch.

Printed answer page 341. [Worked solution](../chapters/5.3.md#5141)

### 5.151

**Published answer** · Angles26,60,84,107,134degrees.

**Independent answer** · Matches independent directed outgoing cone angles25.8419,60,84.2608,107.4576,134.427degrees. The question incorrectly asks angles of incidence despite fixing the incident direction.

For a chain, conservation of tangential phase gives cos(beta)=cos60degrees+m lambda/a=.5+.4 m. Physical cosines admit m−3 through1; azimuth around the chain is unconstrained. These are scattered directions, with the zero-order cone containing the incident ray.

Printed answer page 342. [Worked solution](../chapters/5.3.md#5151)

### 5.182

**Published answer** · The published wavelengths are 690 nm and 430 nm.

**Independent answer** · The absolute quarter-wave behavior also occurs near 600 and 474 nm. The listed solutions depend on whether the sign of retardation is fixed.

The odd integer q=9000 nm/λ gives phase qπ/2. At 530 nm, q≈17, or 1 modulo 4. Restricting to that signed phase selects q=13 and 21, reproducing the book. q=15 and 19 give the opposite signed quarter-wave phase and the opposite circular handedness for the same incident orientation.

Printed answer page 344. [Worked solution](../chapters/5.4.md#5182)

### 5.183

**Published answer** · Minimum conventional thickness about .25 mm, selecting k=4.

**Independent answer** · Independent.250056 mm agrees and quantifies the residual564 nm leakage.0009383 relative to the prepared-line intensity.

A643 nm maximum requires d delta_n=(k−1/2)643 nm. The first deep approximate564 nm suppression is k=4; exact extinction is impossible because643q=1128j has no odd-q solution. The qualitative phrase greatly reducing does not uniquely define a minimum without a leakage threshold; the baseline states that qualification.

Printed answer page 344. [Worked solution](../chapters/5.4.md#5183)

### 5.187

**Published answer** · Quarter-wave plate followed by a Polaroid can distinguish ellipticity and rotation; named clockwise senses use a viewing convention.

**Independent answer** · Agrees with the independent apparatus and the specified axes. The independent record declares a propagation/viewing convention rather than assigning an unqualified clockwise sign.

A quarter-wave plate can convert the two orthogonal quadrature components to a linear state for the appropriate axis orientation. Rotating the analyzer then tests extinction; the helicity label reverses if the direction of observation is reversed.

Printed answer page 345. [Worked solution](../chapters/5.4.md#5187)

### 5.190

**Published answer** · Transmission is periodic in sample thickness; x is counted from an intensity maximum.

**Independent answer** · Matches the independent period (rotation rate 20.7846 degrees/mm, rounded to 21 in the key), with the independent phase offset making the choice of maximum explicit.

The analyzer intensity depends on the relative entrance polarization phase and on the optical rotation. Shifting the origin to a maximum removes that phase; doing so does not determine an unprepared entrance phase.

Printed answer page 345. [Worked solution](../chapters/5.4.md#5190)

### 5.192

**Published answer** · The answer is 8.7 mm.

**Independent answer** · The corresponding incident-unpolarized normalization gives 8.675 mm. Relative to the light after the first Nicol, the approximate minimum is 4.337 mm.

The 436 nm extinction permits d=n×180°/41.5. At n=2 the 497 nm rotation is 269.78°, so the analyzer passes essentially all the light surviving the first Nicol, or half the unpolarized incident intensity. At n=1 its post-first-Nicol transmission is about 0.502. Both designs use rounded rotation coefficients.

Printed answer page 345. [Worked solution](../chapters/5.4.md#5192)

### 5.197

**Published answer** · Total rotation (alpha−N V H)l with N=5 passes.

**Independent answer** · Matches the independent primary named clockwise-looking-toward-source convention and five-pass result. The independent invariant form is alpha l+5 betaF.

Reciprocal natural rotation cancels on each round trip and leaves one net forward traversal. Faraday rotation is nonreciprocal and accumulates in all five passes. Its signed contribution depends on the named viewing/positive-V convention; the key and independent primary convention agree.

Printed answer page 345. [Worked solution](../chapters/5.4.md#5197)

### 5.205

**Published answer** · The book uses exp[i(ωt−kx)], so its attenuating solution has negative Im n in that convention. A purely imaginary index gives an evanescent, non-propagating field.

**Independent answer** · The independent solution uses exp[i(kx−ωt)] and positive Im n for passive attenuation. It also computes the zero average normal power flow of the evanescent field.

Changing the time-exponential convention conjugates the complex constitutive coefficients. Both real fields decay exponentially with the same attenuation rate.

Printed answer page 346. [Worked solution](../chapters/5.5.md#5205)

### 5.210

**Published answer** · The phase and group speeds are 1.83×10⁸ and 1.70×10⁸ m/s. The displayed group formula uses the in-medium wavelength derivative form.

**Independent answer** · The independent values are 1.83×10⁸ and about 1.69×10⁸ m/s, with alternative local derivative estimates.

The three spectral samples do not fix a unique derivative. If the tabulated wavelengths are vacuum wavelengths, use u=c/(n−λ₀dn/dλ₀). The paraxial-in-dispersion expansion and numerical derivative choice explain the small speed spread.

Printed answer page 346. [Worked solution](../chapters/5.5.md#5210)

### 5.218

**Published answer** · Passband2λ0√[lnη/(αd)].

**Independent answer** · Matches the baseline direct-beam inverse-transmission definition.

The ratioT(λ)/T(λ0)=exp[−αd(1−λ/λ0)²] reaches1/η at the edges. Additional coherent/multiple-reflection and optical-depth meanings require more assumptions; they are explicitly separated in the baseline.

Printed answer page 347. [Worked solution](../chapters/5.5.md#5218)

### 5.226

**Published answer** · The leading Doppler term is about −26 nm.

**Independent answer** · The exact laboratory relativistic transformation gives −24.93 nm.

Expanding γ(1−β cos θ)−1 through first order gives −β cos θ. The omitted positive second-order term is about λ₀β²/2=1.10 nm, explaining the difference.

Printed answer page 347. [Worked solution](../chapters/5.6.md#5226)

### 5.228

**Published answer** · Star separation about 3e7 km; each mass about 2.9e29 kg.

**Independent answer** · Matches the independent circular, edge-on minimum separation 2.968e10 m and each mass 2.880e29 kg. The independent record also gives the projection factors.

Successive maximum absolute splittings occur twice per orbit, so P=2 tau=60 days. Equal masses give delta lambda/lambda=2v sin(i)/c, a sin(i)=c Delta tau/pi and m sin(i) cubed=c cubed Delta cubed tau/(2 pi G). The key silently adopts a circular edge-on orbit.

Printed answer page 347. [Worked solution](../chapters/5.6.md#5228)

### 5.237

**Published answer** · Grating-induced dipole radiation with lambda=d(c/v−cos(theta)); at 45 degrees and v approximately c, about 0.6 micrometre.

**Independent answer** · Matches the independent fundamental-order relation and conditional ultrarelativistic value 0.585786 micrometre. The independent record also supplies higher orders and retains the unspecified speed.

Fig. 5.38 measures theta from the forward electron path. Successive groove contributions have arrival delay d/v−d cos(theta)/c. Setting this to m optical periods gives lambda_m=d(c/v−cos(theta))/m. The key assumes m=1 and additionally v approximately c; merely comparable speed does not fix a unique numeric wavelength.

Printed answer page 347, 348. [Worked solution](../chapters/5.6.md#5237)

### 5.242

**Published answer** · The transformed polar angle is θ′=8°.

**Independent answer** · The boundary polar angle is 8.11°, and the full opening angle is 16.22°.

At the forward hemisphere’s edge cos θ=0, so aberration gives cos θ′=0.990. The book gives the half-angle. The full angle between opposite boundary rays is twice that value.

Printed answer page 348. [Worked solution](../chapters/5.6.md#5242)

### 5.250

**Published answer** · The value is about 2×10⁷ K, from the cube root of 3cRρ/(σM), with M called the molar mass of hydrogen.

**Independent answer** · Counting protons and electrons explicitly gives about 1.87×10⁷ K.

With Appendix molecular hydrogen molar mass M_H₂≈2M_p, the gas pressure of a fully ionized sample is 4ρRT/M_H₂. Equating this to 4σT⁴/(3c) gives the printed expression. If M is instead the proton molar mass, the formula includes an extra 2 in the denominator. The key and baseline are equivalent under their respective mass conventions.

Printed answer page 348. [Worked solution](../chapters/5.7.md#5250)

### 5.261

**Published answer** · Beam momentum transported per time Phi_e/c.

**Independent answer** · Matches the independent beam momentum flux; the independent record additionally specifies Phi_e/c for absorption and 2Phi_e/c for ideal normal reflection.

Every photon has p=E/c, so summing a parallel beam gives flux/c regardless of spectrum. The momentum actually imparted to a target also depends on its interaction, an implicit absorption convention in reading the key as a force.

Printed answer page 349. [Worked solution](../chapters/5.7.md#5261)

### 5.266

**Published answer** · The inline expression is printed F=P/2c (1+eta squared), with ambiguous solidus grouping.

**Independent answer** · The independent force is P/[2c(1+eta squared)]. This is the physically meaningful denominator interpretation of the key.

Integrating reflected axial momentum gives F=(P/2c)sin squared(alpha_max), with tan(alpha_max)=1/eta. Thus F falls to zero as the source distance grows. A multiplicative reading of the inline parenthesis would grow with distance and is invalid; the scan has no clear full fraction bar, so this is recorded as typography ambiguity.

Printed answer page 349. [Worked solution](../chapters/5.7.md#5266)

### 5.269

**Published answer** · Signed shift exp[−GM/(Rc squared)]−1, negative.

**Independent answer** · Matches the independent leading weak-field shift −GM/(Rc squared), but not its optional exact static Schwarzschild expression sqrt[1−2GM/(Rc squared)]−1. No independent correction is warranted.

Treating photon gravitational mass as E/c squared in a Newtonian differential energy-loss heuristic yields the book exponential. That heuristic is valid only to leading weak-field order and is not an exact general-relativistic redshift. For chi=GM/(Rc squared), it gives −chi+chi squared/2, whereas static Schwarzschild gives −chi−chi squared/2; they already differ at second order.

Printed answer page 349. [Worked solution](../chapters/5.7.md#5269)

### 5.292

**Published answer** · A positive Compton displacement magnitude≈1.2pm is listed.

**Independent answer** · Baseline correctly gives the signed shiftλ′−λ=−1.21266pm and the same positive magnitude.

With the electron at rest in the final state, M(E′−E)=EE′(1−cosθ), henceλ′−λ=−λC(1−cosθ). The photon gains energy. The key can agree only if its positiveΔλ denotes the magnitude of the decrease, not the usual signed outgoing-minus-incoming convention.

Printed answer page 350. [Worked solution](../chapters/5.7.md#5292)

### 6.3

**Published answer** · Closest distances 0.59 pm for Pb and 0.034 pm for free lithium-7.

**Independent answer** · Independent fixed-heavy-Pb value 0.590600 pm and free-Li value 0.0339337 pm agree; the baseline explicitly distinguishes free-target recoil.

At head-on turning, relative kinetic energy becomes Coulomb energy. A free target reduces the available relative energy by M/(m+M), multiplying the fixed-centre distance by 1+m/M. The key uses a fixed heavy Pb approximation and includes the specified light-target recoil.

Printed answer page 350. [Worked solution](../chapters/6.1.md#63)

### 6.9

**Published answer** · Detector fraction 3.3e−5.

**Independent answer** · Matches the independent incident-normalized fraction 3.35195e−5 (finite-inlet refinement 3.36264e−5).

Areal target density times Rutherford d sigma/dOmega times detector solid angle A/r squared gives the key. The literal wording fraction of scattered particles needs a finite angular/screening definition; the standard key and independent numerical answer instead divide by incident particles.

Printed answer page 350. [Worked solution](../chapters/6.1.md#69)

### 6.14

**Published answer** · Forward fraction about 0.6 from one minus the integrated hard-scattering probability.

**Independent answer** · Matches the independent formal single-scattering estimate 0.600170, with its stated marginal optical-depth limitation.

For alpha particles sigma(theta>theta0)=pi[Z ke e squared/T] squared cot squared(theta0/2). The target gives optical depth .39983. Subtracting it from one gives the key; multiple scattering is not parametrically negligible, and a Poisson no-hard-collision probability is not itself an exact net-deflection answer.

Printed answer page 350. [Worked solution](../chapters/6.1.md#614)

### 6.24

**Published answer** · Magnetic moment magnitude n e hbar/(2mc), moment-to-angular-momentum magnitude e/(2mc), first-orbit moment muB in Gaussian units.

**Independent answer** · Matches the independent Gaussian magnitudes and SI conversions; the baseline additionally specifies that the electron magnetic moment vector is opposite its mechanical angular momentum.

The circular current magnetic moment equals charge times angular momentum divided by 2 m, with the Gaussian 1/c. The key quotes positive magnitudes, so its unsigned ratio is not a claim that the two electron vectors are parallel.

Printed answer page 351. [Worked solution](../chapters/6.1.md#624)

### 6.29

**Published answer** · The key uses a large-n approximation and gives approximately 60°.

**Independent answer** · The exact 50th-to -51st adjacent separation at nominal width gives 87.6°. The preceding neighbor gives 70.6°.

The key substitutes n≈50 into n³/(2R l), yielding sin θ≈0.86. The 50th Balmer line actually has upper level 52; with levels 52 and 53 the exact required width is 6.5942 mm, just below the quoted 6.6 mm. Near grazing, the approximation to sin θ changes the angle by tens of degrees, and the width precision limits the nominal angle.

Printed answer page 351. [Worked solution](../chapters/6.1.md#629)

### 6.31

**Published answer** · Number of lines n(n−1)/2.

**Independent answer** · Matches the independent conventional ensemble transition-pair count. The baseline separately qualifies single-atom photon count and accidental equal-frequency degeneracies.

Each upper/lower pair among levels 1 through n gives a possible downward transition. One atom follows only one cascade with at most n−1 photons; at sufficiently high n different Bohr transitions can have coincident frequencies, so pair count need not equal exact distinct frequencies.

Printed answer page 351. [Worked solution](../chapters/6.1.md#631)

### 6.44

**Published answer** · Slow-atom first-order speed about 0.7e6 m/s.

**Independent answer** · Matches the independent slow-branch estimate 697661 m/s. The baseline additionally resolves displacement sign and exact high-speed branches.

The key uses absolute first-order delta lambda/lambda approximately v cos(theta)/c. At 45 degrees a slow approaching atom gives a blueshift. The exact factor gamma(1−beta cos(theta)) is nonmonotonic, so an unsigned .20 nm shift does not mathematically specify one relativistic speed; the independent qualifications are necessary for a literal all-branches reading.

Printed answer page 351. [Worked solution](../chapters/6.1.md#644)

### 6.53

**Published answer** · Wavelength at the most probable molecular speed about 128 pm.

**Independent answer** · Independent 126.298 pm at its explicitly assumed room temperature 300 K agrees with a room-temperature convention near 293 K for the key.

Maxwell speed mode is sqrt(2kT/m), so lambda(v_mode)=h/sqrt(2mkT). The statement has no numeric room temperature; changing 300 K to 293 K raises the value to about 127.8 pm.

Printed answer page 352. [Worked solution](../chapters/6.2.md#653)

### 6.56

**Published answer** · T=(sqrt(2)−1)mc squared, about 0.21 MeV.

**Independent answer** · This matches the independent full-Compton alternative 0.211711 MeV, not its primary reduced-Compton result 2.74074 MeV. Both conventions are explicitly present in the baseline.

De Broglie wavelength is h/p. Equating it to h/(mc) gives p=mc and the key. Earlier book usage, including 5.280 and the Appendix reduced Compton length, calls hbar/(mc) Compton wavelength; equality to that length instead gives p=2pi mc. The disagreement is a book naming-convention change, not an independent kinematic error.

Printed answer page 352. [Worked solution](../chapters/6.2.md#656)

### 6.60

**Published answer** · Initial voltage about 0.15 kV, using sin(theta) in the Bragg denominator.

**Independent answer** · The independent primary 50.0851 V uses an incidence angle of 30 degrees from the normal. Its limitations note that a plane-measured angle changes the voltage, but no explicit 150.255 V alternative is in its answers.

Successive maxima give sqrt(eta)=(j+1)/j=1.5, hence j=2. If 30 degrees is a glancing angle from the planes, lambda=d sin30 degrees and V=h squared/[2me e d squared sin squared30]=150.255 V, agreeing with the key. If measured from the normal, lambda=d cos30 degrees and V=50.085 V. The key follows the crystallographic glancing convention; an explicit numerical alternative would improve the independent record.

Printed answer page 352. [Worked solution](../chapters/6.2.md#660)

### 6.75

**Published answer** · Optimum slit scale sqrt[hbar L/(mv)], about 0.01 mm.

**Independent answer** · Matches independent 10.2470 micrometres, which explicitly treats this as a characteristic uncertainty estimate rather than a unique hard-slit full-width prediction.

The key models image width as delta+hbar L/(p delta), whose minimum is at the stated square-root scale. Exact widths depend on aperture and image-width definitions; the baseline separately gives Gaussian RMS and full-density-width benchmarks.

Printed answer page 353. [Worked solution](../chapters/6.2.md#675)

### 6.91

**Published answer** · Energy −me e fourth/(8hbar squared), the n=2 state.

**Independent answer** · Matches the independent intended nonconstant-polynomial2 s branch. The baseline also includes the literal a=0 ground-state possibility.

Substituting (1+ar)exp(−alpha r) in the radial Coulomb equation fixes alpha=1/(2aB) and a=−alpha for a nonzero linear term. If the problem does not forbid a=0, the pure exponential ground state also fits the stated form; the key implicitly takes a nonzero.

Printed answer page 356. [Worked solution](../chapters/6.2.md#691)

### 6.113

**Published answer** · Same LS term labels as6.112.

**Independent answer** · Matches the independent full-core-term LS parentage list. The baseline additionally gives strictly fixed coreJc=3/2 channels and warns that the whole parentage list is not a pure-LS basis of that restricted subspace.

Coupling coreL=1,S=1/2 with thed electron produces the key singlet/tripletP,D,F labels if the full core term participates. Keeping onlyJc=3/2 instead gives channels(3/2,3/2) withJ=0..3 and(3/2,5/2) withJ=1..4; their magnetic dimension40 is smaller than the unrestricted60. The question wording names a fixed core fine-structure level, so the distinction is substantive.

Printed answer page 357. [Worked solution](../chapters/6.3.md#6113)

### 6.131

**Published answer** · Net absorption coefficient kappa approximatelykappa0[1−exp(−hbar omega/kT)], using an undepleted lower population.

**Independent answer** · Matches the independent stated chapter approximation and its exact stimulated factor. The baseline also provides the finite-temperature lower-population denominator at fixed total density.

Einstein detailed balance gives net absorption proportional toN1B12[1−exp(−x)]. ReplacingN1 by its zero-temperature value is justified to leading order atx≫1. If one retains first exponential corrections at fixed total two-level density, kappa/kappa0=(1−exp(−x))/[1+(g2/g1)exp(−x)], explicitly separated in the baseline.

Printed answer page 357. [Worked solution](../chapters/6.3.md#6131)

### 6.154

**Published answer** · Force magnitude about 3e−26 N.

**Independent answer** · Agrees with the independent magnitude, which explicitly distinguishes upper and lower electronic Zeeman projections and resulting opposite force directions.

Fz=g mJ muB dB/dz in the stated electronic convention. An unprepared atom is not assigned a unique sign merely by naming the term. At the very weak field, hyperfine preparation can also matter; the key is the conditional textbook electronic magnitude.

Printed answer page 358. [Worked solution](../chapters/6.3.md#6154)

### 6.158

**Published answer** · Cases (a), (c), (d) called normal, case (b) anomalous.

**Independent answer** · The independent record gives the same component patterns; it calls (c), (d) triplets with noncanonical spacings rather than assuming unit normal-Zeeman spacing.

Equal upper and lower g factors collapse allowed shifts to three values 0 and plus/minus g muB B/h. In (c) and (d), g is 1/2 and 9/10. The book uses normal to describe triplet shape; the stricter unit-spacing use of normal would reserve the name for g=1. This is terminology, not a changed spectrum.

Printed answer page 358. [Worked solution](../chapters/6.3.md#6158)

### 6.172

**Published answer** · The book estimates about 33 lines by √(2Iω/ℏ).

**Independent answer** · The independent derivation gives an unbounded ideal rotor absent a cutoff. It gives 33 levels or 32 intervals for a strict rotational-level cutoff at the first vibrational excitation.

A vibrational energy scale is not a dynamical upper bound on pure rotational transitions. Equating the rotational energy to ℏω supplies a heuristic truncation only.

Printed answer page 359. [Worked solution](../chapters/6.4.md#6172)

### 6.201

**Published answer** · The printed formula gives 2×10⁻²² eV for the mean interval.

**Independent answer** · The primary numerical result was 8.95×10⁻²³ eV per spin-resolved state. The notes mention the factor of two for spatial-orbital counting, but give no separate orbital number.

State counting gives g(E_F)=Vm k_F/(π²ℏ²) including both spins. Counting a twofold spin-degenerate orbital once halves g and doubles the interval to 1.79×10⁻²² eV, which rounds to the book's number. Spatial degeneracies and exact finite-volume gaps remain boundary-dependent.

Printed answer page 361. [Worked solution](../chapters/6.4.md#6201)

### 6.209

**Published answer** · Graphical gap energies 1.2 eV and 0.06 eV.

**Independent answer** · Independent calibrated warm slope gives 1.2206 eV; cold slope gives conductivity activation 0.02612 eV and uncompensated donor binding 0.05225 eV.

The warm branch has slope −Eg/(2k) versus 1/T. The key also applies the factor two to the cold branch, appropriate to the uncompensated freeze-out carrier law; compensation could instead make activation equal the binding energy. The 0.06 eV figure is a coarse graph reading close to the independent cold-slope range, not a precise disagreement.

Printed answer page 361. [Worked solution](../chapters/6.4.md#6209)

### 6.212

**Published answer** · Mobility-difference Hall relation and result 0.20.

**Independent answer** · Matches the independent low-field mobility-difference magnitude 0.20 m squared/(V s); the independent Hall-angle magnitude is 0.10. The independent record also supplies the finite-field correction.

For equal electron and hole densities and zero transverse current, Ey/Ex=(mu_h−mu_e)B/[1+mu_e mu_h B squared]. At weak field the printed |Ey/Ex|=0.10 and B=0.50 T imply |mu_h−mu_e|=0.20 m squared/(V s). Its sign requires a transverse polarity; exact finite-field inversion also needs the mobility product.

Printed answer page 361. [Worked solution](../chapters/6.4.md#6212)

### 6.213

**Published answer** · Mobility ratio 4.

**Independent answer** · Matches the independent weak-field answer.

Zero weak-field Hall field requires p mu_h squared=n mu_e squared. With mu_e/mu_h=2 this gives p/n=4. At finite field, the cancellation instead uses each carrier Drude denominator, as the independent record explains.

Printed answer page 361. [Worked solution](../chapters/6.4.md#6213)

### 6.216

**Published answer** · The key reports 1.2×10¹⁵ beta particles.

**Independent answer** · Integrating the rate gives about 1.13×10¹⁵. Holding the initial rate constant gives about 1.160×10¹⁵.

The finite-time count includes the decay of the source during the hour. The constant-initial-activity estimate rounds to the printed value.

Printed answer page 361. [Worked solution](../chapters/6.5.md#6216)

### 6.240

**Published answer** · Approximately5MJ heat.

**Independent answer** · Agrees with the independent idealized mass-Q/3 beta-only value4.96285MJ, not a unique real total deposited heat.

The given15h half-life gives Nd=1.68267e19 decays in 24h. Multiplying by the ideal ground-state atomic Q/3 gives 4.96MJ. Actual beta branches, neutrino escape and gamma deposition need separate treatment; the published number implicitly uses only that ideal beta-energy estimate.

Printed answer page 362. [Worked solution](../chapters/6.5.md#6240)

### 6.286

**Published answer** · N(t)=Jnσ(1−e^(−λt))/λ.

**Independent answer** · Agrees with the independent undepleted-target formula; the baseline also gives the finite-target Bateman extension.

Constant target inventory makes productionJnσ constant. For finite initialn, parent depletion yieldsN=n a(e^(−at)−e^(−λt))/(λ−a), a=Jσ. Thus the source expression is a standard small-burnup approximation, not an arbitrary-time finite-inventory identity.

Printed answer page 363. [Worked solution](../chapters/6.6.md#6286)

### 6.288

**Published answer** · The scan usesN=N0 k^(i−1), numerical1.3e5.

**Independent answer** · The baseline uses the namedN0 as generation0, giving131501; its explicit first-generation alternative gives 125239. Both round to 1.3e5.

There are 100multiplication steps if the seed is generation0,99if it is called generation1. The source formula uses the latter convention. The printed exponent5 in the numerical answer is correct; OCR6 is wrong.

Printed answer page 363. [Worked solution](../chapters/6.6.md#6288)

### 6.290

**Published answer** · Growth factor4e2 and periodτ/(k−1)=10 s.

**Independent answer** · Matches the baseline continuous exponential-lifetime model; its primary fixed-generation model gives 391.583 and 10.0499 s.

Discrete generation steps giveN/N0=k^(t/τ), periodτ/lnk. A constant-rate mean-lifetime branching model givesexp[(k−1)t/τ] andτ/(k−1). Sincek−1=.010, the source and discrete envelope agree approximately; the differing idealizations are explicitly retained.

Printed answer page 363. [Worked solution](../chapters/6.6.md#6290)

## Problems without a separately numbered answer

1.144, 1.157, 1.165, 1.177, 1.197, 1.268, 1.325, 1.381, 2.44, 2.183, 2.197, 3.75, 3.164, 3.191, 3.342, 3.345, 3.363, 3.366, 3.369, 4.132, 4.148, 4.154, 4.195, 4.203, 4.206, 4.210, 5.19, 5.20, 5.25, 5.26, 5.34, 5.52, 5.53, 5.62, 5.64, 5.70, 5.124, 5.137, 5.138, 5.174, 5.186, 5.207, 5.241, 5.246, 6.20, 6.26, 6.65, 6.68, 6.79, 6.192, 6.254, 6.271, 6.302.
