
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import { projects } from "@/data/projects";

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

  if (!isAirfoilProject) {
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
