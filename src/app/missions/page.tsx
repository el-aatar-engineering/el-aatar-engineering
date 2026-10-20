
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import MissionTelemetry from "@/components/MissionTelemetry";
import MissionOperationsConsole from "@/components/MissionOperationsConsole";

const missionStages = [
  {
    number: "01",
    title: "Concept",
    description:
      "Initial mission ideas, research questions, and feasibility studies.",
    detail: "IDEATION",
  },
  {
    number: "02",
    title: "Planned",
    description:
      "Defined objectives, preliminary requirements, and a documented development plan.",
    detail: "PREPARATION",
  },
  {
    number: "03",
    title: "In development",
    description:
      "Mission-related engineering, analysis, simulations, or experimental work.",
    detail: "EXECUTION",
  },
  {
    number: "04",
    title: "Completed",
    description:
      "Work that has concluded with documented results and a recorded outcome.",
    detail: "DOCUMENTATION",
  },
];

const principles = [
  {
    number: "01",
    title: "Define the objective",
    description:
      "Establish the question, engineering goal, and criteria for evaluating the work.",
  },
  {
    number: "02",
    title: "Develop the system",
    description:
      "Translate the objective into models, simulations, designs, or practical experiments.",
  },
  {
    number: "03",
    title: "Record the results",
    description:
      "Document methods, assumptions, limitations, and findings so the work can be reviewed.",
  },
];

export default function MissionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative isolate border-b border-white/[0.08]">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_28%,rgba(37,99,235,0.19),transparent_38%),radial-gradient(ellipse_at_15%_85%,rgba(56,189,248,0.07),transparent_38%)]"
        />

        <div
          aria-hidden="true"
          className="absolute right-[-140px] top-24 -z-10 h-[340px] w-[340px] rounded-full border border-blue-300/[0.10] sm:right-[-100px] sm:h-[480px] sm:w-[480px]"
        >
          <div className="absolute inset-[12%] rounded-full border border-white/[0.06]" />
          <div className="absolute inset-[26%] rounded-full border border-blue-300/[0.08]" />
          <div className="absolute left-[17%] top-[19%] h-2 w-2 rounded-full bg-blue-300/70 shadow-[0_0_18px_rgba(96,165,250,0.7)]" />
        </div>

        <div className="container mx-auto px-6 pb-24 pt-24 sm:pb-32 sm:pt-32 lg:pb-40 lg:pt-36">
          <div className="max-w-5xl">
            <div className="mb-8 flex flex-wrap items-center gap-3 text-[11px] font-medium tracking-[0.24em] text-blue-300">
              <span>VORA</span>
              <span className="h-px w-8 bg-blue-300/50" />
              <span>MISSION DIRECTORATE</span>
            </div>

            <h1 className="text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              From concepts
              <br />
              <span className="text-slate-400">to missions.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              The mission framework of VORA — documenting objectives,
              engineering development, research, and the path from an idea
              toward a validated result.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#mission-registry"
                className="inline-flex items-center rounded-full bg-blue-500 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-blue-400"
              >
                Explore mission registry
              </Link>

              <Link
                href="#development"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3.5 text-sm text-slate-200 transition hover:border-blue-300/50 hover:bg-white/[0.04]"
              >
                Development framework
              </Link>
            </div>

            <div className="mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-slate-500">
                  PROGRAM
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Aerospace research
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.2em] text-slate-500">
                  APPROACH
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Model. Test. Document.
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="text-[10px] tracking-[0.2em] text-slate-500">
                  RECORDS
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Evidence-led development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section className="border-b border-white/[0.08]">
  <div className="container mx-auto px-6 py-20 sm:py-28">
    <div className="mb-8 max-w-3xl">
      <p className="text-[11px] tracking-[0.24em] text-blue-300">
        FLAGSHIP MISSION / 001
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
        ORBITAL
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
        A computational research concept investigating the relationship
        between orbital altitude, circular velocity, and orbital period.
      </p>
    </div>

    <MissionOperationsConsole />
  </div>
</section>
    {/* FLAGSHIP MISSION */}
<section className="border-b border-white/[0.08]">
  <div className="container mx-auto px-6 py-20 sm:py-28">
    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="text-[11px] tracking-[0.24em] text-blue-300">
          FLAGSHIP RESEARCH MISSION / 001
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
          ORBITAL
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          Orbital mechanics and mission design. A computational research
          concept studying the relationships between altitude, orbital
          velocity, and period.
        </p>
      </div>

      <span className="w-fit rounded-full border border-amber-300/20 bg-amber-300/[0.05] px-3 py-2 text-[10px] tracking-[0.14em] text-amber-200">
        CONCEPT / SIMULATION
      </span>
    </div>

    <MissionTelemetry />

    <div className="mt-5 flex flex-col gap-3 text-xs leading-6 text-slate-500 sm:flex-row sm:justify-between">
      <p>DESIGNATION: VORA-ORBIT-001</p>
      <p>MODELED VALUES · NOT FLIGHT TELEMETRY</p>
    </div>
  </div>
</section>
      {/* MISSION REGISTRY */}
      <section
        id="mission-registry"
        className="scroll-mt-24 border-b border-white/[0.08]"
      >
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-medium tracking-[0.25em] text-blue-300">
                MISSION DATABASE / 001
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Mission registry
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                A central record for defined VORA missions, their objectives,
                development status, and documented outcomes.
              </p>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-[10px] tracking-[0.16em] text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
              REGISTRY IN DEVELOPMENT
            </span>
          </div>

          <div className="mt-10 rounded-2xl border border-dashed border-white/15 bg-white/[0.015] px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-blue-300/20 bg-blue-300/[0.06]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 text-blue-300"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <circle cx="12" cy="12" r="8" />
                <ellipse
                  cx="12"
                  cy="12"
                  rx="11"
                  ry="4"
                  transform="rotate(-35 12 12)"
                />
                <circle cx="18.5" cy="6.5" r="1.3" fill="currentColor" />
              </svg>
            </div>

            <h3 className="mt-6 text-xl font-medium sm:text-2xl">
              The registry starts with verified work.
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
              No mission entries are published here yet. New records will be
              added as mission objectives are defined and their supporting
              work is documented.
            </p>

            <Link
              href="/#projects"
              className="mt-8 inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm text-slate-200 transition hover:border-blue-300/50 hover:bg-white/[0.04]"
            >
              Explore current engineering projects
            </Link>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT FRAMEWORK */}
      <section
        id="development"
        className="scroll-mt-24 border-b border-white/[0.08]"
      >
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="text-[11px] font-medium tracking-[0.25em] text-blue-300">
              DEVELOPMENT FRAMEWORK
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Every mission needs a method.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              VORA aims to connect mission objectives to engineering work
              through a repeatable process. Each stage should produce
              something that can be examined, tested, or documented.
            </p>
          </div>

          <div className="mt-14 grid gap-0 md:grid-cols-3">
            {principles.map((principle, index) => (
              <article
                key={principle.number}
                className={`border-t border-white/10 py-8 md:pr-8 ${
                  index > 0 ? "md:border-l md:pl-8" : ""
                }`}
              >
                <p className="text-xs tracking-[0.2em] text-blue-300">
                  PHASE {principle.number}
                </p>

                <h3 className="mt-5 text-xl font-medium">
                  {principle.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION LIFECYCLE */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <p className="text-[11px] font-medium tracking-[0.25em] text-blue-300">
            STATUS DEFINITIONS
          </p>

          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            A clear path from idea to result.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {missionStages.map((stage) => (
              <article
                key={stage.number}
                className="group rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 transition duration-300 hover:border-blue-300/30 hover:bg-blue-300/[0.025] sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs tracking-[0.2em] text-blue-300">
                    STAGE {stage.number}
                  </span>

                  <span className="text-[10px] tracking-[0.16em] text-slate-500">
                    {stage.detail}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-medium tracking-tight">
                  {stage.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-xs leading-6 text-slate-500">
            These are proposed VORA status definitions, not a claim that
            missions currently occupy every stage. Each published record
            should reflect its actual documented progress.
          </p>
        </div>
      </section>

      {/* LONG-TERM DIRECTION */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(37,99,235,0.14),transparent_60%)]"
        />

        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[11px] font-medium tracking-[0.25em] text-blue-300">
              LONG-TERM DIRECTION
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">
              Engineering today.
              <br />
              Expanding tomorrow.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
              VORA's ambition is to progress through increasingly advanced
              aerospace research and engineering. Each step begins with
              disciplined work, transparent limitations, and results that
              can be reviewed.
            </p>

            <p className="mt-8 text-xs tracking-[0.18em] text-slate-500">
              BEYOND THE KNOWN. INTO THE POSSIBLE.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT STEP */}
      <section className="border-t border-white/[0.08]">
        <div className="container mx-auto px-6 py-12 sm:py-16">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-slate-500">
                VORA / ENGINEERING
              </p>

              <h2 className="mt-3 text-xl font-medium sm:text-2xl">
                Explore the work behind the ambition.
              </h2>
            </div>

            <Link
              href="/#projects"
              className="inline-flex w-fit items-center rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-blue-300 hover:bg-white/[0.05]"
            >
              View engineering projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
