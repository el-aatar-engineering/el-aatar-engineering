import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

const missionStages = [
  {
    number: "01",
    title: "Concept",
    description:
      "Early ideas and mission concepts exploring what VORA could pursue in the future.",
  },
  {
    number: "02",
    title: "Planned",
    description:
      "Mission concepts that have been defined further and are being prepared for future development.",
  },
  {
    number: "03",
    title: "Active",
    description:
      "Missions currently being developed, researched, simulated, or tested.",
  },
  {
    number: "04",
    title: "Completed",
    description:
      "Missions and projects that have reached a documented conclusion.",
  },
];

export default function MissionsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(59,130,246,0.16),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.09),transparent_35%)]" />

        <div className="container relative mx-auto px-6 py-24 sm:py-32 lg:py-40">
          <p className="mb-6 text-xs font-medium tracking-[0.28em] text-blue-300">
            VORA / MISSIONS
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            From concepts
            <br />
            to missions.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            A structured record of VORA's mission concepts, development work,
            experiments, and future aerospace ambitions.
          </p>
        </div>
      </section>

      {/* MISSION PHILOSOPHY */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto grid gap-14 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:py-32">
          <div>
            <p className="text-xs font-medium tracking-[0.25em] text-blue-300">
              MISSION DEVELOPMENT
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Every mission begins with an idea.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
              VORA's mission system is designed to document the progression
              from an initial concept to increasingly detailed engineering
              work. As VORA grows, each mission can develop its own research,
              simulations, documentation, and technical objectives.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION STAGES */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <p className="text-xs font-medium tracking-[0.25em] text-blue-300">
            MISSION STATUS
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {missionStages.map((stage) => (
              <article
                key={stage.number}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition hover:border-blue-300/30 hover:bg-white/[0.035]"
              >
                <span className="text-xs tracking-[0.2em] text-blue-300">
                  {stage.number}
                </span>

                <h2 className="mt-6 text-2xl font-medium">{stage.title}</h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT STATE */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium tracking-[0.25em] text-blue-300">
              CURRENT STATE
            </p>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Building the foundation first.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              VORA is currently establishing its technical and organizational
              foundation. Mission concepts will be added as they are actually
              developed and documented.
            </p>
          </div>
        </div>
      </section>

      {/* FUTURE VISION */}
      <section>
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium tracking-[0.25em] text-blue-300">
              LONG-TERM VISION
            </p>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-6xl">
              One day, missions will
              <br />
              leave the screen.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-400">
              The long-term ambition of VORA is to progress from research and
              engineering concepts toward increasingly advanced aerospace
              systems and, eventually, real space missions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.08]">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-slate-500">VORA / NEXT</p>

              <h2 className="mt-2 text-2xl font-medium">
                Explore VORA's engineering work.
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