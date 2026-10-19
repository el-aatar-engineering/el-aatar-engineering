
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Aerodynamic estimates",
    text: "Enter airspeed, reference wing area, air density, angle of attack, and a supported airfoil profile to calculate lift and drag estimates.",
  },
  {
    number: "02",
    title: "Performance visualizations",
    text: "Generate lift-curve and drag-polar plots to inspect how the implemented model represents aerodynamic coefficients across angle of attack.",
  },
  {
    number: "03",
    title: "Profile comparison",
    text: "Compare supported airfoil profiles using generated comparison plots.",
  },
  {
    number: "04",
    title: "Reports and history",
    text: "Export a PDF report for a completed simulation and record simulation inputs and outputs in CSV history.",
  },
];

const assumptions = [
  "Lift coefficient is estimated with a linear angle-of-attack relationship.",
  "Drag coefficient uses a parabolic model: CD = CD₀ + kCL².",
  "Lift and drag are calculated from dynamic pressure and reference wing area.",
  "The model is educational and simplified; results are not validated flight-design data.",
];

const downloadUrl =
  "https://github.com/el-aatar-engineering/el-aatar-engineering/releases/tag/v1.0";

export default function AirfoilProjectDetails() {
  return (
    <div className="space-y-20 md:space-y-28">
      {/* HERO */}
      <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
            VORA ENGINEERING PROJECT · 01
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            VORA Airfoil Engineering Suite{" "}
            <span className="text-sky-300">v1.0</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            A Python desktop application for exploring simplified airfoil
            aerodynamic performance through lift and drag estimates, engineering
            plots, profile comparisons, and generated reports.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {["Python", "CustomTkinter", "Matplotlib", "ReportLab"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <p className="mt-7 text-sm leading-7 text-slate-400">
            Developed as an engineering and software portfolio project under
            the VORA identity. The tool is intended for learning and
            exploration, not operational aircraft design.
          </p>

          {/* DOWNLOAD */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={downloadUrl}
              download
              className="inline-flex items-center gap-3 rounded-lg bg-sky-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path
                  d="M12 3v12m-5-5 5 5 5-5M4 17v3h16v-3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download for Windows
            </a>

            <span className="text-xs text-slate-400">
              Version 1.0 · ZIP package
            </span>
          </div>

          <div className="mt-5 max-w-xl rounded-xl border border-white/10 bg-white/[0.025] p-4">
            <p className="text-sm font-medium text-white">
              How to run the application
            </p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-6 text-slate-400">
              <li>Download the ZIP file.</li>
              <li>Extract the entire ZIP into a folder.</li>
              <li>
                Open the extracted folder and launch the included EXE.
              </li>
              <li>
                Keep the EXE, the _internal folder, and the other application
                files together.
              </li>
            </ol>
            <p className="mt-3 text-xs leading-5 text-slate-500">
              Windows may display a security warning for an application that
              is not widely recognized. Only run software you trust, and do
              not bypass security warnings unless you have independently
              verified the file.
            </p>
          </div>

          <p className="mt-4 text-xs leading-5 text-slate-500">
            The download is hosted on GitHub. If the download does not start,
            check the v1.0 release and its attached ZIP filename.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-3 shadow-2xl shadow-sky-950/20">
          <Image
            src="/projects/vora_logo.png"
            alt="Airfoil in a wind tunnel showing airflow and turbulence around the profile"
            width={1200}
            height={760}
            className="h-auto w-full rounded-xl"
            priority
          />
          <p className="px-2 pb-2 pt-3 text-xs text-slate-500">
              Illustrative visualization of airflow behavior around an airfoil in a wind tunnel.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section>
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
            CAPABILITIES
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            From inputs to interpretable results.
          </h3>
          <p className="mt-4 leading-7 text-slate-400">
            The desktop interface brings the main simulation workflow and
            visualization tools into one place.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-7"
            >
              <p className="text-xs tracking-[0.2em] text-sky-300">
                {feature.number} / CAPABILITY
              </p>
              <h4 className="mt-5 text-xl font-semibold text-white">
                {feature.title}
              </h4>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      
      {/* VISUAL OUTPUTS */}
      <section>
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
            VISUAL OUTPUTS
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Inside the Airfoil Engineering Suite.
          </h3>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Explore the desktop interface and aerodynamic visualizations
            produced by the VORA Airfoil Engineering Suite.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-3">
            <Image
              src="/projects/airfoil/vora-desktop.png"
              alt="VORA Airfoil Engineering Suite desktop application interface"
              width={1680}
              height={900}
              className="h-auto w-full rounded-xl"
            />
            <figcaption className="px-2 py-3 text-sm text-slate-400">
              The VORA Airfoil Engineering Suite desktop interface, including
              simulation setup and flight-analysis controls.
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-3">
            <Image
              src="/projects/airfoil/vora-airfoil-graphs.png"
              alt="Airfoil geometry, lift curves, drag polars, pressure distribution, and simulation results"
              width={952}
              height={633}
              className="h-auto w-full rounded-xl"
            />
            <figcaption className="px-2 py-3 text-sm text-slate-400">
              Aerodynamic plots and comparison visualizations illustrating the
              application's modeled outputs.
            </figcaption>
          </figure>
        </div>
      </section>


      {/* MATHEMATICAL MODEL */}
      <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
            MODEL OVERVIEW
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            The equations behind the estimates.
          </h3>
          <p className="mt-4 leading-7 text-slate-400">
            The source implements a simplified coefficient model and
            calculates aerodynamic forces from dynamic pressure and reference
            area.
          </p>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Dynamic pressure
            </p>
            <p className="mt-2 font-mono text-lg text-white">q = ½ρV²</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Lift coefficient
            </p>
            <p className="mt-2 font-mono text-lg text-white">CL = a · α</p>
            <p className="mt-2 text-xs text-slate-500">
              Angle of attack α is converted to radians in the implementation.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Drag coefficient
            </p>
            <p className="mt-2 font-mono text-lg text-white">
              CD = CD₀ + kCL²
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              Aerodynamic forces
            </p>
            <p className="mt-2 font-mono text-lg text-white">
              L = qSCL <span className="px-2 text-slate-600">·</span> D = qSCD
            </p>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="rounded-2xl border border-amber-300/20 bg-amber-200/[0.04] p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
          SCOPE &amp; LIMITATIONS
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-white">
          An educational model, with its assumptions made explicit.
        </h3>

        <ul className="mt-5 space-y-3">
          {assumptions.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-7 text-slate-300"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-200" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-5 text-sm leading-7 text-slate-400">
          The implemented model does not establish validated stall behavior,
          viscous flow effects, compressibility corrections, or
          flight-worthiness. Use results for exploratory learning only.
        </p>
      </section>

      {/* PROJECT NAVIGATION */}
      <section className="flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            CONTINUE EXPLORING
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            More VORA engineering work
          </h3>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-full border border-sky-300/40 px-5 py-3 text-sm font-medium text-sky-200 transition hover:bg-sky-300/10"
        >
          Back to all projects
          <span className="ml-3" aria-hidden="true">
            →
          </span>
        </Link>
      </section>
    </div>
  );
}
