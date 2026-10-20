import Link from "next/link";

import DocumentationGraph from "@/components/DocumentationGraph";

const records = [
  {
    id: "VORA-001",
    title: "Organization Foundation",
    category: "FOUNDATION",
    description:
      "The founding structure, purpose, identity, and long-term direction of VORA.",
    status: "Established",
  },
  {
    id: "VORA-002",
    title: "Digital Infrastructure",
    category: "DEVELOPMENT",
    description:
      "The development of VORA's public digital platform and technical website infrastructure.",
    status: "Active",
  },
  {
    id: "VORA-003",
    title: "Cosmic Atlas",
    category: "EXPLORATION",
    description:
      "A structured celestial database created as part of VORA's exploration and educational platform.",
    status: "Active",
  },
  {
    id: "VORA-004",
    title: "Aerospace Project Framework",
    category: "ENGINEERING",
    description:
      "The framework for developing, documenting, and tracking VORA engineering projects.",
    status: "Active",
  },
];

const archiveAreas = [
  {
    number: "01",
    title: "Research",
    description:
      "Scientific and engineering studies developed through VORA.",
  },
  {
    number: "02",
    title: "Projects",
    description:
      "Technical projects, prototypes, simulations, and engineering explorations.",
  },
  {
    number: "03",
    title: "Missions",
    description:
      "Mission concepts, planning records, objectives, and future mission development.",
  },
  {
    number: "04",
    title: "Simulations",
    description:
      "Numerical models and computational experiments used to explore aerospace systems.",
  },
  {
    number: "05",
    title: "Experiments",
    description:
      "Physical and digital experiments conducted as VORA develops its technical capabilities.",
  },
  {
    number: "06",
    title: "Development Log",
    description:
      "A chronological record of important decisions, milestones, and progress.",
  },
];

export default function DocumentationPage() {
  return (
    <main className="min-h-screen bg-[#070b12] text-white">
      
      {/* HEADER */}
      <section className="relative isolate overflow-hidden border-b border-white/[0.08] bg-[#060b13]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_32%,rgba(56,130,190,.16),transparent_42%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(125,211,252,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,.14)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />

        <div className="container relative py-24 sm:py-32 lg:py-36">
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-3 text-xs tracking-[0.2em] text-slate-500 transition-colors hover:text-sky-200"
          >
            <span aria-hidden="true">←</span>
            VORA / HOME
          </Link>

          <div className="grid items-end gap-12 lg:grid-cols-[1fr_280px]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-sky-300" />
                <p className="text-[10px] tracking-[0.3em] text-sky-300">
                  VORA / TECHNICAL ARCHIVE
                </p>
              </div>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[1.04] tracking-tight sm:text-7xl lg:text-8xl">
                Every detail.
                <br />
                <span className="text-sky-200">
                  Documented.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
                A structured record of VORA&apos;s development, engineering
                projects, research, and lessons learned—preserving the
                process behind the work, not just the outcome.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {["ENGINEERING", "RESEARCH", "PROJECT RECORDS"].map((item) => (
                  <span
                    key={item}
                    className="border border-white/[0.09] bg-white/[0.02] px-4 py-2 text-[9px] tracking-[0.18em] text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* ARCHIVE INDEX */}
            <div className="relative border border-white/[0.1] bg-[#080e18]/90 p-6 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <p className="text-[9px] tracking-[0.22em] text-sky-300">
                  ARCHIVE INDEX
                </p>
                <span className="text-[9px] text-slate-600">
                  V / 001
                </span>
              </div>

              <div className="space-y-5 py-6">
                {[
                  ["01", "Foundation"],
                  ["02", "Development"],
                  ["03", "Exploration"],
                  ["04", "Engineering"],
                ].map(([number, label]) => (
                  <div
                    key={number}
                    className="flex items-center gap-4"
                  >
                    <span className="text-[10px] tracking-widest text-sky-300/70">
                      {number}
                    </span>
                    <span className="h-px flex-1 bg-white/[0.08]" />
                    <span className="text-xs text-slate-300">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/[0.08] pt-4">
                <p className="text-[9px] leading-5 tracking-[0.12em] text-slate-600">
                  STRUCTURED RECORDS
                  <br />
                  UPDATED AS WORK DEVELOPS
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      
      {/* ENGINEERING DATA VISUALIZATION */}
      <section className="border-b border-white/[0.06] bg-[#080d16]">
        <div className="container py-16 sm:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-sky-300">
                VORA / DATA ANALYSIS
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Every result
                <br />
                <span className="text-slate-500">
                  starts with a question.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                Engineering depends on careful analysis, clear records,
                and transparent assumptions. VORA&apos;s archive is being
                developed to preserve that process as its work grows.
              </p>
            </div>

            <DocumentationGraph />
          </div>
        </div>
      </section>


      {/* ARCHIVE AREAS */}
      <section className="border-b border-white/[0.06] bg-[#0a101a]">
        <div className="container py-24 sm:py-32">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs tracking-[0.3em] text-sky-300">
              ARCHIVE STRUCTURE
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              How VORA records its work.
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Every future technical activity can be placed into a structured
              record so that ideas, decisions, results, and lessons are not
              lost.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
            {archiveAreas.map((area) => (
              <div
                key={area.number}
                className="group min-h-52 bg-[#0a101a] p-7 transition-colors duration-300 hover:bg-[#0e1724]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.25em] text-sky-300/70">
                    {area.number}
                  </span>

                  <span className="text-slate-700 transition-colors group-hover:text-sky-300/60">
                    
                  </span>
                </div>

                <h3 className="mt-10 text-xl font-medium text-white">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL RECORDS */}
      <section className="bg-[#080d16]">
        <div className="container py-24 sm:py-32">
          <div className="flex flex-col justify-between gap-8 border-b border-white/[0.08] pb-10 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs tracking-[0.3em] text-sky-300">
                TECHNICAL RECORDS
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                VORA archive
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              These records describe work that has actually been established.
              Future research and engineering work will be added as it is
              developed.
            </p>
          </div>

          <div className="mt-10 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {records.map((record) => (
              <article
                key={record.id}
                className="group grid gap-6 py-8 transition-colors duration-300 hover:bg-white/[0.02] sm:grid-cols-[120px_1fr_auto] sm:items-center"
              >
                <div>
                  <p className="text-xs font-medium tracking-[0.2em] text-sky-300">
                    {record.id}
                  </p>

                  <p className="mt-2 text-[9px] tracking-[0.2em] text-slate-600">
                    {record.category}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white transition-colors group-hover:text-sky-200">
                    {record.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                    {record.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 sm:justify-end">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-300/70" />

                  <span className="text-[10px] tracking-[0.18em] text-slate-500">
                    {record.status.toUpperCase()}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PRINCIPLE */}
      <section className="border-t border-white/[0.06] bg-[#0a101a]">
        <div className="container py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-xs tracking-[0.3em] text-sky-300">
                DOCUMENTATION PRINCIPLE
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
                Build it.
                <br />
                Record it.
                <br />
                Learn from it.
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-slate-300">
                VORA&apos;s documentation will grow alongside its technical
                work. The goal is to preserve not only successful results, but
                also the questions, assumptions, calculations, decisions, and
                failures that lead to better engineering.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="border border-white/[0.08] bg-[#080d16] p-5">
                  <p className="text-[10px] tracking-[0.2em] text-sky-300">
                    01
                  </p>

                  <p className="mt-5 text-sm text-slate-300">
                    Define the question.
                  </p>
                </div>

                <div className="border border-white/[0.08] bg-[#080d16] p-5">
                  <p className="text-[10px] tracking-[0.2em] text-sky-300">
                    02
                  </p>

                  <p className="mt-5 text-sm text-slate-300">
                    Develop and test.
                  </p>
                </div>

                <div className="border border-white/[0.08] bg-[#080d16] p-5">
                  <p className="text-[10px] tracking-[0.2em] text-sky-300">
                    03
                  </p>

                  <p className="mt-5 text-sm text-slate-300">
                    Record the result.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] bg-[#050a11]">
        <div className="container py-20">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs tracking-[0.3em] text-sky-300">
                NEXT STEP
              </p>

              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Explore VORA&apos;s engineering work.
              </h2>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-3 rounded-full border border-sky-300/40 px-6 py-3 text-sm text-slate-200 transition-all duration-300 hover:border-sky-200 hover:bg-sky-300/10 hover:text-white"
            >
              View projects
              <span aria-hidden="true"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08] bg-[#050a11]">
        <div className="container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-white">
              VORA
            </p>

            <p className="mt-2 text-[9px] tracking-[0.2em] text-slate-600">
              VOYAGE &amp; ORBITAL RESEARCH AGENCY
            </p>
          </div>

          <Link
            href="/"
            className="text-xs tracking-[0.15em] text-slate-500 transition-colors hover:text-sky-200"
          >
            RETURN TO VORA
          </Link>
        </div>
      </footer>
    </main>
  );
}