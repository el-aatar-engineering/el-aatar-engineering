
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

const results = [
  { altitude: "200", radius: "6,578.137", speed: "7.784", period: "88.49" },
  { altitude: "400", radius: "6,778.137", speed: "7.669", period: "92.56" },
  { altitude: "800", radius: "7,178.137", speed: "7.452", period: "100.87" },
  { altitude: "2,000", radius: "8,378.137", speed: "6.898", period: "127.20" },
  { altitude: "35,786", radius: "42,164.137", speed: "3.075", period: "1,436.04" },
];

export default function VoraResearch001Page() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      {/* HEADER */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(37,99,235,0.17),transparent_42%)]" />

        <div className="container relative mx-auto px-6 py-20 sm:py-28">
          <Link
            href="/research"
            className="text-xs text-slate-400 transition hover:text-sky-300"
          >
            ← Back to Research
          </Link>

          <p className="mt-10 text-[10px] tracking-[0.28em] text-sky-300">
            VORA / RESEARCH RECORD 001
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-6xl">
            How Does Orbital Altitude Affect Circular Orbital Speed and Period?
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
            A computational study of circular orbital motion using
            Newtonian two-body mechanics.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-[10px] tracking-[0.13em]">
            <span className="border border-sky-300/20 bg-sky-300/[0.05] px-3 py-2 text-sky-200">
              INITIAL COMPUTATIONAL STUDY
            </span>
            <span className="border border-white/10 px-3 py-2 text-slate-400">
              ORBITAL MECHANICS
            </span>
          </div>
        </div>
      </section>

      {/* ABSTRACT */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
            <p className="text-[10px] tracking-[0.25em] text-sky-300">
              01 / ABSTRACT
            </p>

            <div>
              <p className="text-base leading-8 text-slate-300">
                This study calculates circular orbital speed and orbital
                period at five selected altitudes using an idealized
                Newtonian two-body model. The calculations examine how
                orbital speed and period change as orbital radius increases.
                The results are mathematical model outputs, not measurements
                from an actual spacecraft.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="border border-white/[0.08] bg-white/[0.02] p-5">
                  <p className="text-[10px] tracking-[0.18em] text-slate-500">
                    RESEARCH QUESTION
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    How does altitude affect circular orbital speed and
                    orbital period?
                  </p>
                </div>

                <div className="border border-white/[0.08] bg-white/[0.02] p-5">
                  <p className="text-[10px] tracking-[0.18em] text-slate-500">
                    HYPOTHESIS
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Higher circular orbits have lower orbital speeds and
                    longer orbital periods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODEL */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
            <p className="text-[10px] tracking-[0.25em] text-sky-300">
              02 / MATHEMATICAL MODEL
            </p>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Equations of circular motion.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                The model first converts altitude above Earth's reference
                radius into distance from Earth's centre.
              </p>

              <div className="mt-8 space-y-4">
                <div className="border border-white/[0.08] bg-[#080d18] p-5 sm:p-7">
                  <p className="text-[10px] tracking-[0.18em] text-slate-500">
                    ORBITAL RADIUS
                  </p>
                  <p className="mt-3 font-mono text-xl text-sky-200 sm:text-2xl">
                    r = Rₑ + h
                  </p>
                </div>

                <div className="border border-white/[0.08] bg-[#080d18] p-5 sm:p-7">
                  <p className="text-[10px] tracking-[0.18em] text-slate-500">
                    CIRCULAR ORBITAL SPEED
                  </p>
                  <p className="mt-3 font-mono text-xl text-sky-200 sm:text-2xl">
                    v = √(μ / r)
                  </p>
                </div>

                <div className="border border-white/[0.08] bg-[#080d18] p-5 sm:p-7">
                  <p className="text-[10px] tracking-[0.18em] text-slate-500">
                    ORBITAL PERIOD
                  </p>
                  <p className="mt-3 font-mono text-xl text-sky-200 sm:text-2xl">
                    T = 2π √(r³ / μ)
                  </p>
                </div>
              </div>

              <div className="mt-6 text-sm leading-7 text-slate-400">
                <p><span className="text-slate-200">r</span> — orbital radius, km</p>
                <p><span className="text-slate-200">h</span> — altitude above the reference radius, km</p>
                <p><span className="text-slate-200">Rₑ</span> — adopted Earth equatorial radius, 6,378.137 km</p>
                <p><span className="text-slate-200">μ</span> — Earth gravitational parameter, 398,600.4 km³/s²</p>
                <p><span className="text-slate-200">v</span> — circular orbital speed, km/s</p>
                <p><span className="text-slate-200">T</span> — orbital period, seconds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-16 sm:py-20">
          <p className="text-[10px] tracking-[0.25em] text-sky-300">
            03 / CALCULATED RESULTS
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Five orbital conditions.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Values are calculated using the model above and rounded for
            display. They represent idealized circular orbits.
          </p>

          <div className="mt-8 overflow-x-auto border border-white/[0.09]">
            <table className="w-full min-w-[620px] border-collapse text-left text-sm">
              <thead className="bg-white/[0.035] text-[10px] tracking-[0.12em] text-slate-400">
                <tr>
                  <th className="px-4 py-4">ALTITUDE (KM)</th>
                  <th className="px-4 py-4">RADIUS (KM)</th>
                  <th className="px-4 py-4">SPEED (KM/S)</th>
                  <th className="px-4 py-4">PERIOD (MIN)</th>
                </tr>
              </thead>
              <tbody>
                {results.map((row) => (
                  <tr
                    key={row.altitude}
                    className="border-t border-white/[0.07] text-slate-300"
                  >
                    <td className="px-4 py-4">{row.altitude}</td>
                    <td className="px-4 py-4">{row.radius}</td>
                    <td className="px-4 py-4 text-sky-200">{row.speed}</td>
                    <td className="px-4 py-4">{row.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <figure className="border border-white/[0.08] bg-[#080d18] p-3">
              <img
                src="/research/vora-res-001/vora_res001_speed_vs_altitude.png"
                alt="Calculated circular orbital speed versus altitude"
                className="h-auto w-full"
              />
              <figcaption className="px-2 pb-2 text-xs leading-6 text-slate-500">
                Figure 1. Circular orbital speed versus altitude.
                Calculated values, not spacecraft observations.
              </figcaption>
            </figure>

            <figure className="border border-white/[0.08] bg-[#080d18] p-3">
              <img
                src="/research/vora-res-001/vora_res001_period_vs_altitude.png"
                alt="Calculated orbital period versus altitude"
                className="h-auto w-full"
              />
              <figcaption className="px-2 pb-2 text-xs leading-6 text-slate-500">
                Figure 2. Orbital period versus altitude.
                Calculated values, not spacecraft observations.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* DISCUSSION */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
            <p className="text-[10px] tracking-[0.25em] text-sky-300">
              04 / DISCUSSION
            </p>

            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                What do the results tell us?
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-8 text-slate-400">
                <p>
                  The calculated speed decreases as orbital radius increases,
                  consistent with the relationship v ∝ r⁻¹ᐟ². The period
                  increases with radius, consistent with T ∝ r³ᐟ².
                </p>
                <p>
                  A higher circular orbit is larger and requires a lower
                  circular speed, yet the satellite travels around a much
                  larger path. The resulting orbital period is therefore
                  longer.
                </p>
                <p>
                  The 35,786 km case produces a period close to one sidereal
                  day. A geostationary orbit also requires a circular,
                  equatorial, prograde orbit; matching the period alone
                  is not sufficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
            <p className="text-[10px] tracking-[0.25em] text-sky-300">
              05 / LIMITATIONS
            </p>

            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Understanding the model's boundaries.
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-400">
                This is a simplified analytical calculation, not an
                experimental measurement or a propagated real-spacecraft
                trajectory. It neglects atmospheric drag, Earth's
                nonspherical gravity field, third-body gravitational effects,
                solar radiation pressure, and orbital eccentricity.
                The study does not establish mission suitability or
                real-spacecraft performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REPRODUCIBILITY AND REFERENCES */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
            <p className="text-[10px] tracking-[0.25em] text-sky-300">
              06 / REPRODUCIBILITY
            </p>

            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Inspect and reproduce the calculations.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                The Python script uses the standard library and writes
                the calculated results to a CSV file.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/research/vora-res-001/VORA_RES001_final_draft.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-sky-300 px-5 py-3 text-sm font-medium text-[#06101d] transition hover:bg-sky-200"
                >
                  Open report PDF 
                </a>

                <a
                  href="/research/vora-res-001/vora_res001_calculate.py"
                  download
                  className="rounded-full border border-white/20 px-5 py-3 text-sm transition hover:border-sky-300/50"
                >
                  Download Python script
                </a>

                <a
                  href="/research/vora-res-001/vora_res001_results.csv"
                  download
                  className="rounded-full border border-white/20 px-5 py-3 text-sm transition hover:border-sky-300/50"
                >
                  Download results CSV
                </a>
              </div>

              <h3 className="mt-12 text-lg font-medium">References</h3>

              <ol className="mt-5 list-decimal space-y-4 pl-5 text-sm leading-7 text-slate-400">
                <li>
                  NASA/JPL Solar System Dynamics. Astrodynamic Parameters.
                  <br />
                  <a
                    href="https://ssd.jpl.nasa.gov/astro_par.html"
                    target="_blank"
                    rel="noreferrer"
                    className="break-all text-sky-300 hover:text-sky-200"
                  >
                    https://ssd.jpl.nasa.gov/astro_par.html
                  </a>
                </li>
                <li>
                  NASA Goddard Space Flight Center, NSSDC. Earth Fact Sheet.
                  <br />
                  <a
                    href="https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html"
                    target="_blank"
                    rel="noreferrer"
                    className="break-all text-sky-300 hover:text-sky-200"
                  >
                    https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html
                  </a>
                </li>
                <li>
                  Chitwood, D. Appendix B: Orbital Mechanics Equations.
                  NASA Technical Reports Server.
                  <br />
                  <a
                    href="https://ntrs.nasa.gov/api/citations/19950006116/downloads/19950006116.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="break-all text-sky-300 hover:text-sky-200"
                  >
                    NASA technical report
                  </a>
                </li>
              </ol>

              <p className="mt-8 border-l border-sky-300/30 pl-4 text-xs leading-6 text-slate-500">
                Publication status: initial computational study pending
                final review. The listed sources should be checked against
                the equations and constants before this record is treated
                as finalized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section>
        <div className="container mx-auto px-6 py-12">
          <Link
            href="/research"
            className="text-sm text-slate-400 transition hover:text-sky-300"
          >
            ← Return to VORA Research
          </Link>
        </div>
      </section>
    </main>
  );
}
