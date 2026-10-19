# VORA Research 001
## How Does Orbital Altitude Affect Circular Orbital Speed and Period?

**Record:** VORA-RES-001  
**Document status:** Initial computational study — ready for internal review  
**Discipline:** Orbital mechanics / astrodynamics

## Abstract
This study calculates circular orbital speed and period at five selected altitudes using the Newtonian two-body model. The results show that, within the model, circular orbital speed decreases as orbital radius increases, while orbital period increases. The outputs are mathematical calculations, not measurements from a real spacecraft.

## Research question
How do circular orbital speed and orbital period vary with altitude above Earth's equatorial reference radius in an idealized two-body model?

## Hypothesis
As altitude increases, circular orbital speed decreases and orbital period increases.

## Model and assumptions
- The orbit is circular.
- Earth is represented by a spherical-body approximation.
- Earth's gravitational parameter is constant.
- Atmospheric drag, Earth's nonspherical gravity field, and third-body perturbations are neglected.
- Altitude is measured above the adopted equatorial radius.
- The 35,786 km case is a conventional approximate geostationary altitude; the model's period is compared with a sidereal day, not a solar day.

## Constants and sources
- Earth gravitational parameter: μ = 398600.4 km³/s². The JPL Solar System Dynamics astrodynamic parameters page lists Earth's GM as 398600.435507 km³/s² [1]. The study uses 398600.4 km³/s², rounded to one decimal place.
- Earth equatorial radius: Rₑ = 6378.137 km, as listed in NASA's Earth Fact Sheet [2].

## Equations
Orbital radius:
r = Rₑ + h

Circular orbital speed:
v = √(μ / r)

Circular orbital period:
T = 2π √(r³ / μ)

Here h is altitude, r is distance from Earth's center, v is circular orbital speed, and T is orbital period. NASA's orbital mechanics equations reference gives the same circular-orbit speed and period relationships [3].

## Method
For each selected altitude, calculate orbital radius, circular speed, and period using the equations above. Convert the period from seconds to minutes and hours. The accompanying Python script reproduces the calculations and writes a CSV table.

## Results

| Altitude (km) | Orbital radius (km) | Speed (km/s) | Period (min) | Period (hours) |
|---:|---:|---:|---:|---:|
| 200 | 6578.137 | 7.784 | 88.49 | 1.4749 |\n| 400 | 6778.137 | 7.669 | 92.56 | 1.5427 |\n| 800 | 7178.137 | 7.452 | 100.87 | 1.6812 |\n| 2000 | 8378.137 | 6.898 | 127.20 | 2.1200 |\n| 35786 | 42164.137 | 3.075 | 1436.07 | 23.9344 |\n
## Results interpretation
The calculated circular speed decreases with increasing orbital radius because v varies with r⁻¹ᐟ². The orbital period increases because T varies with r³ᐟ². The five computed cases therefore support the stated hypothesis within the assumptions of this model.

At 35,786 km altitude, the calculated period is approximately 23.934 hours, close to Earth's sidereal rotation period. A geostationary orbit requires more than matching a period: it must also be circular, equatorial, and prograde. This study's simplified calculation is a comparison, not a full geostationary-orbit design.

## Limitations
This is a simplified analytical calculation, not a numerical propagation of a real spacecraft and not an experimental measurement. Real orbits can be affected by atmospheric drag, Earth's oblateness and other gravity-field variations, lunar and solar gravity, solar radiation pressure, and nonzero eccentricity. The study does not assess launch requirements, station-keeping, satellite lifetime, or mission suitability.

## Reproducibility
Run the supplied script with Python 3:
`python vora_res001_calculate.py`

The script writes `vora_res001_results.csv`. The plots visualize only the selected calculated sample points; they are not observational data.

## References
1. NASA/JPL Solar System Dynamics. “Astrodynamic Parameters.” https://ssd.jpl.nasa.gov/astro_par.html
2. NASA Goddard Space Flight Center, National Space Science Data Center. “Earth Fact Sheet.” https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html
3. Chitwood, D. “Appendix B: Orbital Mechanics Equations.” NASA Technical Reports Server. https://ntrs.nasa.gov/api/citations/19950006116/downloads/19950006116.pdf

**Publication note:** Before public release, a reviewer should check the report text, source links, code output, graph labels, and displayed rounding. This report is an introductory computational study and should not be presented as a novel scientific discovery.
