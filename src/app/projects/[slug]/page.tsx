import PropulsionCalculator from "@/components/PropulsionCalculator";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import { projects } from "@/data/projects";
import PropulsionChart from "@/components/PropulsionChart";
import PropulsionResults from "@/components/PropulsionResults";
import PropulsionVisual from "@/components/PropulsionVisual";
import OrbitalCalculator from "@/components/OrbitalCalculator";
import OrbitalVisual from "@/components/OrbitalVisual";
import FlightDynamicsCalculator from "@/components/FlightDynamicsCalculator";
import FlightDynamicsVisual from "@/components/FlightDynamicsVisual";




type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const isAirfoilProject =
  project.slug === "vora-airfoil-engineering-suite";

const isPropulsionProject =
  project.slug === "propulsion-fundamentals";

const isOrbitalProject =
  project.slug === "orbital-systems-study";
const isFlightDynamicsProject =
  project.slug === "flight-dynamics-simulation";


if (
  !isAirfoilProject &&
  !isPropulsionProject &&
  !isOrbitalProject &&
  !isFlightDynamicsProject
) {

    return (
      <main className="min-h-screen bg-[#050816] text-white">
        <Navbar />
        <section className="container mx-auto px-6 py-24 sm:py-32">
          <Link
            href="/projects"
            className="text-xs tracking-[0.18em] text-slate-400 hover:text-white"
          >
            ← BACK TO PROJECTS
          </Link>
          <p className="mt-12 text-xs tracking-[0.25em] text-blue-300">
            VORA / PROJECT
          </p>
          <h1 className="mt-5 text-4xl font-semibold sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl leading-8 text-slate-400">
            {project.description}
          </p>
          <p className="mt-6 text-sm text-slate-500">
            Category: {project.category} · Status: {project.status}
          </p>
        </section>
      </main>
    );
  }

if (isOrbitalProject) {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_25%,rgba(59,130,246,0.2),transparent_45%),radial-gradient(ellipse_at_10%_85%,rgba(99,102,241,0.1),transparent_40%)]" />

        <div className="container relative mx-auto px-6 py-12 sm:py-20 lg:py-24">
          <Link
            href="/projects"
            className="text-xs tracking-[0.18em] text-slate-400 transition hover:text-white"
          >
            ← BACK TO PROJECTS
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:mt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <div>
              <p className="text-xs tracking-[0.28em] text-blue-300">
                VORA / ORBITAL MECHANICS
              </p>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Orbital Systems
                <span className="block text-blue-200">Study</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                Explore the mechanics of spacecraft orbits through
                gravitational models, orbital calculations, and interactive
                visualization.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Orbital mechanics",
                  "Newtonian gravity",
                  "Numerical modeling",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {[
                  ["MODEL", "Two-body dynamics"],
                  ["OUTPUT", "Speed & period"],
                  ["STATUS", "In progress"],
                ].map(([label, value]) => (
                  <div key={label} className="border-t border-white/15 pt-4">
                    <p className="text-[10px] tracking-[0.2em] text-slate-500">
                      {label}
                    </p>
                    <p className="mt-2 text-sm text-slate-200">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:pl-4">
              <OrbitalVisual />
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIVE */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto grid gap-10 px-6 py-20 lg:grid-cols-[0.65fr_1.35fr] lg:py-24">
          <div>
            <p className="text-xs tracking-[0.25em] text-blue-300">
              01 / OBJECTIVE
            </p>
            <h2 className="mt-5 text-3xl font-semibold">
              Understanding orbital motion
            </h2>
          </div>

          <div className="max-w-3xl space-y-5 leading-8 text-slate-400">
            <p>
              A spacecraft in orbit is in continuous free fall under
              gravitational influence. Its sideways velocity allows it to
              keep falling around Earth rather than directly toward the
              surface.
            </p>
            <p>
              This study examines how orbital altitude affects circular
              orbital speed and period using classical Newtonian mechanics.
            </p>
            <p>
              The model is theoretical and does not represent live spacecraft
              tracking or a validated mission trajectory.
            </p>
          </div>
        </div>
      </section>

      {/* EQUATIONS */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-20 lg:py-24">
          <p className="text-xs tracking-[0.25em] text-blue-300">
            02 / CORE RELATIONSHIPS
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            The equations of circular orbits
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            These relationships connect altitude, orbital radius, speed,
            and period under the ideal two-body approximation.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              {
                title: "Orbital radius",
                equation: "r = Rₑ + h",
                description:
                  "Add altitude above the surface to Earth's mean-equatorial reference radius used by this model.",
              },
              {
                title: "Circular speed",
                equation: "v = √(μ / r)",
                description:
                  "The ideal circular orbital speed decreases as orbital radius increases.",
              },
              {
                title: "Orbital period",
                equation: "T = 2π√(r³ / μ)",
                description:
                  "The time required for one ideal circular orbit increases with orbital radius.",
              },
            ].map((item) => (
              <article key={item.title} className="bg-[#080d20] p-7 sm:p-8">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <div className="mt-5 rounded-lg border border-blue-300/15 bg-blue-400/[0.04] px-4 py-5">
                  <code className="text-lg text-blue-200">
                    {item.equation}
                  </code>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-500">
            μ is Earth's standard gravitational parameter, approximately
            398600.4418 km³/s². Rₑ is set to 6378.137 km, and h is altitude
            above the reference surface.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-20 lg:py-24">
          <p className="text-xs tracking-[0.25em] text-blue-300">
            03 / INTERACTIVE MODEL
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Explore orbital parameters
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Adjust the orbital altitude and observe the resulting ideal
            circular orbital speed, radius, and period.
          </p>

          <div className="mt-10">
            <OrbitalCalculator />
          </div>
        </div>
      </section>
      
      {/* LIMITATIONS */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto grid gap-10 px-6 py-20 lg:grid-cols-[0.65fr_1.35fr] lg:py-24">
          <div>
            <p className="text-xs tracking-[0.25em] text-blue-300">
              04 / MODEL LIMITATIONS
            </p>
            <h2 className="mt-5 text-3xl font-semibold">
              Assumptions and boundaries
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-slate-400">
            <p>
              The calculations assume a circular orbit around Earth and use
              a simplified two-body gravitational model.
            </p>
            <p>
              Atmospheric drag, Earth's nonspherical gravity field,
              perturbations from the Moon and Sun, and spacecraft maneuvers
              are not modeled.
            </p>
            <p>
              The visualization is schematic. Its animation speed is for
              presentation and is not synchronized to the calculated orbital
              period.
            </p>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section>
        <div className="container mx-auto flex flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/projects"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            ← All projects
          </Link>
          <Link
            href="/research"
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-blue-300 hover:bg-white/5"
          >
            Explore research <span className="ml-2">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}


if (isFlightDynamicsProject) {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.2),transparent_45%),radial-gradient(ellipse_at_15%_80%,rgba(99,102,241,0.12),transparent_40%)]" />

        <div className="container relative mx-auto px-6 py-16 sm:py-24 lg:py-28">
          <Link
            href="/projects"
            className="text-xs tracking-[0.18em] text-slate-400 transition hover:text-white"
          >
            ← BACK TO PROJECTS
          </Link>

          <div className="mt-12 max-w-4xl">
            <p className="text-xs tracking-[0.28em] text-blue-300">
              VORA / FLIGHT DYNAMICS
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Flight Dynamics
              <span className="block text-blue-200">Simulation</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              An interactive study of aircraft forces, Newtonian mechanics,
              and the relationship between net force and acceleration.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Classical mechanics",
                "Force modeling",
                "Numerical analysis",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                ["MODEL", "Force balance"],
                ["OUTPUT", "Acceleration"],
                ["STATUS", "In progress"],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-white/15 pt-4">
                  <p className="text-[10px] tracking-[0.2em] text-slate-500">
                    {label}
                  </p>
                  <p className="mt-2 text-sm text-slate-200">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIVE */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto grid gap-10 px-6 py-20 lg:grid-cols-[0.65fr_1.35fr] lg:py-24">
          <div>
            <p className="text-xs tracking-[0.25em] text-blue-300">
              01 / OBJECTIVE
            </p>
            <h2 className="mt-5 text-3xl font-semibold">
              Understanding aircraft motion
            </h2>
          </div>

          <div className="max-w-3xl space-y-5 leading-8 text-slate-400">
            <p>
              Newton's second law relates the net force acting on an object
              to its mass and acceleration. In this simplified model, thrust
              and drag determine horizontal acceleration, while lift and
              weight determine vertical acceleration.
            </p>
            <p>
              The calculator allows users to change each force independently
              and observe how the resulting acceleration changes.
            </p>
            <p>
              This is a simplified force-balance model, not a complete
              six-degree-of-freedom aircraft simulation or a validated flight
              dynamics model.
            </p>
          </div>
        </div>
      </section>

      {/* EQUATIONS */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-20 lg:py-24">
          <p className="text-xs tracking-[0.25em] text-blue-300">
            02 / CORE RELATIONSHIPS
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            The equations of motion
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Horizontal force",
                equation: "Fₓ = thrust − drag",
              },
              {
                title: "Horizontal acceleration",
                equation: "aₓ = Fₓ / m",
              },
              {
                title: "Vertical force",
                equation: "Fᵧ = lift − weight",
              },
              {
                title: "Vertical acceleration",
                equation: "aᵧ = Fᵧ / m",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-[#080d20] p-6"
              >
                <h3 className="text-sm text-slate-300">{item.title}</h3>
                <p className="mt-4 font-mono text-xl text-blue-200">
                  {item.equation}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-500">
            Weight is calculated as W = mg, using g = 9.80665 m/s².
            Positive vertical acceleration is defined as upward.
          </p>
        </div>
      </section>

      {/* INTERACTIVE CALCULATOR */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-20 lg:py-24">
          <p className="text-xs tracking-[0.25em] text-blue-300">
            03 / INTERACTIVE MODEL
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Explore aircraft forces
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Adjust the example parameters and inspect the resulting horizontal
            and vertical accelerations. All calculations run in your browser.
          </p>

          <div className="mt-10">
            <FlightDynamicsCalculator />
          </div>
        </div>
      </section>

{/* FLIGHT VISUALIZATION */}
<section className="border-b border-white/[0.08]">
  <div className="container mx-auto px-6 py-20 lg:py-24">
    <p className="text-xs tracking-[0.25em] text-blue-300">
      04 / FORCE VISUALIZATION
    </p>

    <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
      See the forces acting on the aircraft
    </h2>

    <p className="mt-5 max-w-2xl leading-8 text-slate-400">
      Change thrust, drag, lift, and mass to compare force vectors with the
      calculated acceleration. The arrows are schematic and are not drawn
      to a common physical scale.
    </p>

    <div className="mt-10">
      <FlightDynamicsVisual />
    </div>
  </div>
</section>

      {/* LIMITATIONS */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto grid gap-10 px-6 py-20 lg:grid-cols-[0.65fr_1.35fr] lg:py-24">
          <div>
            <p className="text-xs tracking-[0.25em] text-blue-300">
              04 / LIMITATIONS
            </p>
            <h2 className="mt-5 text-3xl font-semibold">
              Model assumptions
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-slate-400">
            <p>
              The model treats thrust, drag, and lift as independent inputs.
              In real flight, these forces depend on speed, atmospheric
              conditions, aircraft configuration, and control inputs.
            </p>
            <p>
              It does not calculate aerodynamic coefficients, aircraft
              attitude, angular motion, or changing velocity over time.
            </p>
            <p>
              Results are theoretical examples, not measured aircraft data
              or validated flight-design predictions.
            </p>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section>
        <div className="container mx-auto flex flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/projects"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            ← All projects
          </Link>
          <Link
            href="/research"
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-blue-300 hover:bg-white/5"
          >
            Explore research <span className="ml-2">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

  
  if (isPropulsionProject) {
    const topics = [
      {
        number: "01",
        title: "Thrust",
        equation: "F = ṁvₑ + (pₑ − pₐ)Aₑ",
        description:
          "Explore how exhaust momentum and nozzle pressure contribute to rocket thrust.",
      },
      {
        number: "02",
        title: "Specific impulse",
        equation: "Isp = F / (ṁg₀)",
        description:
          "Compare propellant efficiency using specific impulse, expressed in seconds.",
      },
      {
        number: "03",
        title: "Mass ratio",
        equation: "R = m₀ / m_f",
        description:
          "Examine how initial and final mass influence ideal rocket velocity change.",
      },
      {
        number: "04",
        title: "Rocket equation",
        equation: "Δv = vₑ ln(m₀ / m_f)",
        description:
          "Estimate ideal velocity change under simplified assumptions.",
      },
    ];

    return (
      <main className="min-h-screen bg-[#050816] text-white">
        <Navbar />

        
<section className="relative overflow-hidden border-b border-white/[0.08]">
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.2),transparent_45%),radial-gradient(ellipse_at_15%_80%,rgba(99,102,241,0.12),transparent_40%)]" />

  <div className="container relative mx-auto px-6 py-12 sm:py-20 lg:py-24">
    <Link
      href="/projects"
      className="text-xs tracking-[0.18em] text-slate-400 transition hover:text-white"
    >
      ← BACK TO PROJECTS
    </Link>

    <div className="mt-10 grid items-center gap-12 lg:mt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
      <div>
        <p className="text-xs tracking-[0.28em] text-blue-300">
          VORA / PROPULSION ENGINEERING
        </p>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          Propulsion
          <span className="block text-blue-200">Fundamentals</span>
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
          An engineering study of rocket propulsion, thrust generation,
          propellant performance, and the fundamental equations governing
          ideal rocket motion.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Rocket propulsion",
            "Classical mechanics",
            "Mathematical modeling",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            ["STUDY", "Rocket fundamentals"],
            ["METHOD", "Analytical equations"],
            ["STATUS", "In progress"],
          ].map(([label, value]) => (
            <div key={label} className="border-t border-white/15 pt-4">
              <p className="text-[10px] tracking-[0.2em] text-slate-500">
                {label}
              </p>
              <p className="mt-2 text-sm text-slate-200">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative lg:pl-4">
        <PropulsionVisual />
      </div>
    </div>
  </div>
</section>


        <section className="border-b border-white/[0.08]">
          <div className="container mx-auto grid gap-10 px-6 py-20 lg:grid-cols-[0.65fr_1.35fr] lg:py-24">
            <div>
              <p className="text-xs tracking-[0.25em] text-blue-300">
                01 / OBJECTIVE
              </p>
              <h2 className="mt-5 text-3xl font-semibold">
                Understanding rocket propulsion
              </h2>
            </div>

            <div className="max-w-3xl space-y-5 leading-8 text-slate-400">
              <p>
                Rocket engines generate thrust by expelling propellant
                backward at high velocity. Conservation of momentum provides
                the foundation for understanding this process.
              </p>
              <p>
                This study organizes the central equations used to describe
                thrust, specific impulse, and ideal velocity change.
              </p>
              <p>
                This page presents a theoretical framework. It does not claim
                that VORA has built or experimentally tested a rocket engine.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.08]">
          <div className="container mx-auto px-6 py-20 lg:py-24">
            <p className="text-xs tracking-[0.25em] text-blue-300">
              02 / CORE RELATIONSHIPS
            </p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              The equations behind rocket motion
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-400">
              Four fundamental relationships connect thrust, propellant use,
              and ideal velocity change.
            </p>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {topics.map((topic) => (
                <article
                  key={topic.number}
                  className="bg-[#080d20] p-7 sm:p-9"
                >
                  <p className="text-xs tracking-[0.2em] text-blue-300">
                    {topic.number} / THEORY
                  </p>
                  <h3 className="mt-5 text-xl font-medium">{topic.title}</h3>
                  <div className="mt-5 overflow-x-auto rounded-lg border border-blue-300/15 bg-blue-400/[0.04] px-4 py-5">
                    <code className="whitespace-nowrap text-sm text-blue-200 sm:text-base">
                      {topic.equation}
                    </code>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {topic.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-white/10 p-6">
              <h3 className="text-sm font-medium text-slate-200">
                Symbols and definitions
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                F = thrust; ṁ = mass flow rate; vₑ = effective exhaust
                velocity; pₑ = nozzle exit pressure; pₐ = ambient pressure;
                Aₑ = nozzle exit area; Isp = specific impulse; g₀ = standard
                gravitational acceleration; Δv = ideal velocity change;
                m₀ = initial mass; m_f = final mass.
              </p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE CALCULATOR */}
        <section className="border-b border-white/[0.08]">
          <div className="container mx-auto px-6 py-20 lg:py-24">
            <p className="text-xs tracking-[0.25em] text-blue-300">
              03 / INTERACTIVE MODEL
            </p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              Explore rocket performance
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-400">
              Adjust the system parameters and observe how idealized
              propulsion performance changes. Calculations run locally in
              your browser.
            </p>

            <div className="mt-10">
              <PropulsionCalculator />
            </div>
          </div>
        </section>


                {/* PERFORMANCE CHART */}
        <section className="border-b border-white/[0.08]">
          <div className="container mx-auto px-6 py-20 lg:py-24">
            <p className="text-xs tracking-[0.25em] text-blue-300">
              05 / PERFORMANCE ANALYSIS
            </p>

            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              Visualize the mass-ratio effect
            </h2>

            <div className="mt-10">
              <PropulsionChart />
            </div>
          </div>
        </section>
        
        {/* REFERENCE RESULTS */}
        <section className="border-b border-white/[0.08]">
          <div className="container mx-auto px-6 py-20 lg:py-24">
            <p className="text-xs tracking-[0.25em] text-blue-300">
              06 / NUMERICAL RESULTS
            </p>

            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              Reference calculations
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-400">
              A fixed reference dataset makes the model results transparent
              and repeatable.
            </p>

            <div className="mt-10">
              <PropulsionResults />
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.08]">
          <div className="container mx-auto grid gap-10 px-6 py-20 lg:grid-cols-[0.65fr_1.35fr] lg:py-24">
            <div>
              <p className="text-xs tracking-[0.25em] text-blue-300">
                07 / METHODOLOGY
              </p>
              <h2 className="mt-5 text-3xl font-semibold">
                From theory to a reproducible model
              </h2>
            </div>

            <div className="space-y-4">
              {[
                ["01", "Define the system", "Identify the rocket, propellant flow, and assumptions."],
                ["02", "Establish parameters", "Specify mass, exhaust velocity, and mass flow."],
                ["03", "Calculate performance", "Apply equations consistently and record units."],
                ["04", "Evaluate the model", "Check dimensions and sensitivity to inputs."],
                ["05", "Document findings", "Record results, uncertainties, and limitations."],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="flex gap-5 border-b border-white/[0.08] py-5"
                >
                  <span className="pt-1 text-sm text-blue-300">{number}</span>
                  <div>
                    <h3 className="font-medium text-slate-200">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.08]">
          <div className="container mx-auto grid gap-10 px-6 py-20 lg:grid-cols-[0.65fr_1.35fr] lg:py-24">
            <div>
              <p className="text-xs tracking-[0.25em] text-blue-300">
                08 / LIMITATIONS
              </p>
              <h2 className="mt-5 text-3xl font-semibold">
                The boundaries of this study
              </h2>
            </div>

            <div className="space-y-5 leading-8 text-slate-400">
              <p>
                The ideal rocket equation does not independently predict
                combustion, nozzle-flow losses, structural constraints, or
                real engine operating conditions.
              </p>
              <p>
                Actual vehicle performance also depends on gravity losses,
                aerodynamic drag, trajectory, and staging. Ideal delta-v is
                not the same as actual achieved velocity change.
              </p>
              <p>
                Numerical calculator outputs are theoretical estimates,
                not experimental measurements or validated flight-design data.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto flex flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/projects"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              ← All projects
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-blue-300 hover:bg-white/5"
            >
              Explore research <span className="ml-2">↗</span>
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const features = [
    {
      number: "01",
      title: "Aerodynamic calculations",
      description:
        "Estimate dynamic pressure, lift coefficient, drag coefficient, lift, drag, and lift-to-drag ratio from user-defined conditions.",
    },
    {
      number: "02",
      title: "Airfoil selection",
      description:
        "Explore four supported profiles: NACA 0012, NACA 2412, NACA 4412, and NACA 23012, using their configured model parameters.",
    },
    {
      number: "03",
      title: "Aerodynamic visualization",
      description:
        "Generate lift curves, drag polars, and airfoil comparison plots to examine trends predicted by the model.",
    },
    {
      number: "04",
      title: "Engineering reports",
      description:
        "The application includes PDF report generation and simulation-history functionality. These features still require final verification.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_15%_80%,rgba(99,102,241,0.10),transparent_35%)]" />
        <div className="container relative mx-auto px-6 py-20 sm:py-28 lg:py-32">
          <Link
            href="/projects"
            className="text-xs tracking-[0.18em] text-slate-400 transition hover:text-white"
          >
            ← BACK TO PROJECTS
          </Link>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs font-medium tracking-[0.28em] text-blue-300">
                VORA / ENGINEERING SOFTWARE
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Airfoil Engineering Suite
                <span className="mt-2 block text-blue-200">Version 1.0</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                A Python desktop application for exploring airfoil
                aerodynamic performance through simplified calculations,
                numerical results, and visual comparisons.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Python", "CustomTkinter", "Matplotlib", "Aerodynamics"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <Image
                src="/projects/vora_logo.png"
                alt="VORA — Voyage and Orbital Research Agency"
                width={600}
                height={600}
                priority
                className="h-auto w-full drop-shadow-[0_0_45px_rgba(59,130,246,0.18)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto grid gap-10 px-6 py-20 lg:grid-cols-[0.65fr_1.35fr] lg:py-28">
          <div>
            <p className="text-xs tracking-[0.25em] text-blue-300">
              01 / OVERVIEW
            </p>
            <h2 className="mt-5 text-3xl font-semibold">The project</h2>
          </div>
          <div className="max-w-3xl space-y-5 text-base leading-8 text-slate-400">
            <p>
              VORA Airfoil Engineering Suite v1.0 was developed to make
              simplified aerodynamic relationships easier to explore through
              an interactive desktop interface.
            </p>
            <p>
              Users can select a supported NACA airfoil, enter airspeed,
              wing area, air density, and angle of attack, then inspect the
              resulting aerodynamic estimates and plots.
            </p>
            <p>
              The project combines engineering equations with application
              development, interface design, plotting, and report-generation
              functionality.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-20 lg:py-28">
          <p className="text-xs tracking-[0.25em] text-blue-300">
            02 / CAPABILITIES
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Built to explore aerodynamic performance
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.number} className="bg-[#080d20] p-7 sm:p-9">
                <p className="text-sm tracking-[0.2em] text-blue-300">
                  {feature.number}
                </p>
                <h3 className="mt-5 text-xl font-medium">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MODEL */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto grid gap-12 px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:py-28">
          <div>
            <p className="text-xs tracking-[0.25em] text-blue-300">
              03 / MATHEMATICAL MODEL
            </p>
            <h2 className="mt-5 text-3xl font-semibold">
              The equations behind the estimates
            </h2>
          </div>

          <div>
            <p className="mb-7 leading-8 text-slate-400">
              The current implementation uses a simplified lift model and a
              parabolic drag relationship. These equations help demonstrate
              parameter relationships; they do not represent a full CFD
              simulation.
            </p>

            <div className="space-y-3">
              {[
                ["Dynamic pressure", "q = ½ ρV²"],
                ["Lift coefficient", "CL = aα"],
                ["Drag coefficient", "CD = CD₀ + kCL²"],
                ["Lift force", "L = qSCL"],
                ["Drag force", "D = qSCD"],
              ].map(([label, equation]) => (
                <div
                  key={label}
                  className="flex flex-col gap-2 border-b border-white/[0.08] py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-sm text-slate-400">{label}</span>
                  <code className="text-sm text-blue-200">{equation}</code>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-500">
              Here, ρ is air density, V is airspeed, S is wing area, α is
              angle of attack in radians, a is lift-curve slope, CD₀ is
              zero-lift drag coefficient, and k is the model drag factor.
            </p>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-20 lg:py-28">
          <p className="text-xs tracking-[0.25em] text-blue-300">
            04 / APPLICATION
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Inside the simulator
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Screenshots from the actual desktop application will be presented
            here to show its interface, results, and visualizations.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
              <Image
                src="/projects/vora-airfoil-suite.png"
                alt="VORA Airfoil Engineering Suite desktop interface"
                width={1600}
                height={900}
                className="h-auto w-full"
              />
              <figcaption className="p-4 text-sm text-slate-400">
                Desktop application interface
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
              <Image
                src="/projects/vora-airfoil-graphs.png"
                alt="Aerodynamic graph generated by the VORA simulator"
                width={1600}
                height={900}
                className="h-auto w-full"
              />
              <figcaption className="p-4 text-sm text-slate-400">
                Aerodynamic visualization
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto grid gap-10 px-6 py-20 lg:grid-cols-[0.65fr_1.35fr] lg:py-28">
          <div>
            <p className="text-xs tracking-[0.25em] text-blue-300">
              05 / SCOPE & LIMITATIONS
            </p>
            <h2 className="mt-5 text-3xl font-semibold">
              Engineering with clear assumptions
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              This version uses predefined coefficients and simplified
              equations. It does not solve the airflow field around a
              geometry, calculate Reynolds number, or model all real-world
              effects such as flow separation and compressibility.
            </p>
            <p>
              The current predictions have not been formally validated
              against experimental measurements. Results are intended for
              educational exploration and should not be used as validated
              flight-design data.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT INFORMATION */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto grid gap-8 px-6 py-16 sm:grid-cols-3">
          {[
            ["CATEGORY", project.category],
            ["STATUS", project.status],
            ["VERSION", "1.0"],
          ].map(([label, value]) => (
            <div key={label} className="border-t border-white/10 pt-5">
              <p className="text-xs tracking-[0.18em] text-slate-500">
                {label}
              </p>
              <p className="mt-3 text-base text-slate-200">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NAVIGATION */}
      <section>
        <div className="container mx-auto flex flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/projects"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            ← All projects
          </Link>
          <Link
            href="/research"
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-blue-300 hover:bg-white/5"
          >
            Explore research <span className="ml-2">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
