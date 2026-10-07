import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

const researchAreas = [
  {
    number: "01",
    title: "Studies",
    description:
      "Technical investigations and written research exploring aerospace, space systems, and related scientific concepts.",
  },
  {
    number: "02",
    title: "Simulations",
    description:
      "Computer-based exploration of orbital, flight, and engineering concepts before they become physical systems.",
  },
  {
    number: "03",
    title: "Experiments",
    description:
      "Practical work, prototypes, measurements, and experiments developed as VORA grows.",
  },
];

const futureAreas = [
  "Orbital Mechanics",
  "Space Systems",
  "Propulsion",
  "Guidance, Navigation & Control",
  "Structures & Materials",
  "Space Environment",
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.10),transparent_35%)]" />

        <div className="container relative mx-auto px-6 py-24 sm:py-32 lg:py-40">
          <p className="mb-6 text-xs font-medium tracking-[0.28em] text-blue-300">
            VORA / RESEARCH
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Exploring the
            <br />
            science behind flight.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            VORA explores aerospace and space-related questions through
            studies, simulations, experiments, and technical investigation.
          </p>
        </div>
      </section>

      {/* RESEARCH APPROACH */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-medium tracking-[0.25em] text-blue-300">
                RESEARCH APPROACH
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Learn. Investigate. Build.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
                Research at VORA begins with curiosity and develops through
                structured investigation. The goal is to turn questions into
                knowledge, knowledge into engineering understanding, and
                understanding into future projects.
              </p>

              <div className="mt-14 grid gap-6 md:grid-cols-3">
                {researchAreas.map((area) => (
                  <article
                    key={area.number}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition hover:border-blue-300/30 hover:bg-white/[0.035]"
                  >
                    <span className="text-xs tracking-[0.2em] text-blue-300">
                      {area.number}
                    </span>

                    <h3 className="mt-6 text-xl font-medium">{area.title}</h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {area.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <p className="text-xs font-medium tracking-[0.25em] text-blue-300">
            FUTURE RESEARCH AREAS
          </p>

          <div className="mt-8 grid gap-x-10 gap-y-0 md:grid-cols-2">
            {futureAreas.map((area, index) => (
              <div
                key={area}
                className="flex items-center justify-between border-t border-white/[0.08] py-6"
              >
                <div className="flex items-center gap-5">
                  <span className="text-xs text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-base text-slate-200">{area}</span>
                </div>

                <span className="text-xs tracking-[0.15em] text-slate-600">
                  FUTURE
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATUS */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium tracking-[0.25em] text-blue-300">
              VORA / STATUS
            </p>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              The research program is just beginning.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              VORA is currently developing its research foundation. New
              studies, simulations, experiments, and technical work will be
              documented here as they are actually developed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <p className="text-sm text-slate-500">VORA / EXPLORE</p>

              <h2 className="mt-2 text-2xl font-medium">
                Explore what VORA is building.
              </h2>
            </div>

            <Link
              href="/#projects"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-blue-300 hover:bg-white/5"
            >
              View projects
              <span className="ml-2">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}