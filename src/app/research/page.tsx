
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

const researchAreas = [
  {
    number: "01",
    title: "Orbital Mechanics",
    description:
      "Explore orbital motion, trajectory geometry, transfer concepts, and the mathematics governing spacecraft movement.",
    tag: "ASTRODYNAMICS",
  },
  {
    number: "02",
    title: "Space Systems",
    description:
      "Study spacecraft architecture, subsystems, system interactions, and the engineering decisions behind mission design.",
    tag: "SYSTEMS ENGINEERING",
  },
  {
    number: "03",
    title: "Propulsion",
    description:
      "Investigate propulsion principles, thrust, specific impulse, and the trade-offs that shape space transportation.",
    tag: "PROPULSION",
  },
  {
    number: "04",
    title: "Guidance & Navigation",
    description:
      "Examine trajectory guidance, position estimation, control concepts, and navigation challenges in space.",
    tag: "GNC",
  },
  {
    number: "05",
    title: "Structures & Materials",
    description:
      "Understand structural loads, material properties, thermal effects, and the constraints of aerospace environments.",
    tag: "STRUCTURES",
  },
  {
    number: "06",
    title: "Space Environment",
    description:
      "Study orbital environments, radiation, thermal conditions, and the factors that influence spacecraft design.",
    tag: "ENVIRONMENT",
  },
];

const workflow = [
  {
    number: "01",
    title: "Define",
    description:
      "Frame a specific question, establish assumptions, and identify the problem to investigate.",
  },
  {
    number: "02",
    title: "Model",
    description:
      "Develop a mathematical, conceptual, or computational representation of the problem.",
  },
  {
    number: "03",
    title: "Evaluate",
    description:
      "Examine outputs, test assumptions, and identify limitations or sources of uncertainty.",
  },
  {
    number: "04",
    title: "Document",
    description:
      "Record methods, observations, references, and conclusions so the work can be reviewed.",
  },
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative border-b border-white/[0.08]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_76%_38%,rgba(37,99,235,0.18),transparent_38%),radial-gradient(ellipse_at_12%_85%,rgba(56,189,248,0.07),transparent_35%)]" />

        <div className="container relative mx-auto px-6 pb-20 pt-24 sm:pb-28 sm:pt-32 lg:pb-32 lg:pt-36">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="flex items-center gap-3 text-[10px] tracking-[0.3em] text-sky-300 sm:text-xs">
                <span className="h-px w-8 bg-sky-300" />
                VORA / RESEARCH DIVISION
              </p>

              <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
                Questions
                <br />
                beyond the
                <br />
                <span className="text-slate-500">known.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                Investigating the principles, systems, and engineering
                challenges that shape aerospace and space exploration.
                Every investigation begins with a question.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="#research-areas"
                  className="inline-flex items-center rounded-full bg-sky-300 px-6 py-3 text-sm font-medium text-[#06101d] transition hover:bg-sky-200"
                >
                  Explore research
                  <span className="ml-3">↓</span>
                </Link>

                <Link
                  href="#methodology"
                  className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm text-slate-200 transition hover:border-sky-300/50 hover:bg-white/[0.04]"
                >
                  Our methodology
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/[0.08] pt-5 text-[9px] tracking-[0.18em] text-slate-500 sm:text-[10px]">
                <span>INVESTIGATION</span>
                <span>MODELING</span>
                <span>ENGINEERING</span>
                <span>DOCUMENTATION</span>
              </div>
            </div>

            {/* ORBITAL RESEARCH VISUAL */}
            <div className="relative mx-auto w-full max-w-[470px]">
              <div className="absolute inset-8 rounded-full bg-blue-500/[0.08] blur-3xl" />

              <div className="relative aspect-square overflow-hidden rounded-full border border-sky-300/[0.12] bg-[#070d1b]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,64,175,0.18),transparent_65%)]" />

                <div className="absolute inset-[8%] rounded-full border border-dashed border-sky-300/10" />
                <div className="absolute inset-[19%] rounded-full border border-sky-300/15" />
                <div className="absolute inset-[31%] rounded-full border border-sky-300/20" />
                <div className="absolute left-1/2 top-0 h-full w-px bg-sky-200/[0.07]" />
                <div className="absolute left-0 top-1/2 h-px w-full bg-sky-200/[0.07]" />

                <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 animate-[spin_28s_linear_infinite] rounded-full border border-sky-300/30">
                  <span className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-sky-200 shadow-[0_0_14px_rgba(125,211,252,0.9)]" />
                </div>

                <div className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 animate-[spin_42s_linear_infinite_reverse] rounded-full border border-dashed border-indigo-300/20">
                  <span className="absolute right-[17%] top-[9%] h-1.5 w-1.5 rounded-full bg-indigo-200 shadow-[0_0_12px_rgba(165,180,252,0.9)]" />
                </div>

                <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-sky-200/30 bg-blue-500/10 shadow-[0_0_55px_rgba(37,99,235,0.2)]">
                  <div className="h-10 w-10 rounded-full border border-sky-200/50 bg-[radial-gradient(circle_at_30%_25%,#bae6fd,#2563eb_45%,#0b1532_78%)] shadow-[0_0_24px_rgba(56,189,248,0.2)]" />
                </div>

                <div className="absolute left-[7%] top-[20%] text-[8px] tracking-[0.18em] text-slate-500">
                  ORBITAL
                  <br />
                  GEOMETRY
                </div>

                <div className="absolute bottom-[18%] right-[7%] text-right text-[8px] tracking-[0.18em] text-slate-500">
                  SYSTEM
                  <br />
                  MODEL
                </div>

                <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] tracking-[0.2em] text-sky-200/70">
                  CONCEPTUAL VISUALIZATION
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4 text-[9px] tracking-[0.14em] text-slate-500">
                <span>VORA / RESEARCH SYSTEMS</span>
                <span>ILLUSTRATIVE MODEL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH PHILOSOPHY */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-20 sm:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
            <div>
              <p className="text-[10px] tracking-[0.28em] text-sky-300">
                01 / RESEARCH PHILOSOPHY
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Curiosity creates the question.
                <span className="text-slate-500">
                  {" "}Method turns it into understanding.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
                VORA approaches aerospace research as a structured process
                of learning, analysis, and engineering. The aim is to
                understand the principles behind a problem before exploring
                how they might be applied to a system or mission.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Understand",
                    text: "Study the underlying science and define the problem.",
                  },
                  {
                    title: "Investigate",
                    text: "Explore models, methods, evidence, and assumptions.",
                  },
                  {
                    title: "Record",
                    text: "Preserve the process, limitations, and conclusions.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="border-l border-sky-300/30 pl-5"
                  >
                    <span className="text-[10px] tracking-[0.18em] text-slate-600">
                      STEP 0{index + 1}
                    </span>
                    <h3 className="mt-3 text-lg font-medium">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section id="research-areas" className="scroll-mt-24 border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-20 sm:py-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] tracking-[0.28em] text-sky-300">
                02 / RESEARCH DOMAINS
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Areas of investigation.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-400">
              Foundational disciplines that can support future studies,
              models, and engineering projects. These are areas of focus,
              not claims of completed research.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 xl:grid-cols-3">
            {researchAreas.map((area) => (
              <article
                key={area.number}
                className="group relative min-h-[245px] overflow-hidden bg-[#070b17] p-7 transition-colors duration-300 hover:bg-[#0a1424] sm:p-8"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-sky-300/[0.06] transition-transform duration-500 group-hover:scale-125" />

                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.2em] text-sky-300">
                    {area.number}
                  </span>
                  <span className="text-[9px] tracking-[0.14em] text-slate-600">
                    {area.tag}
                  </span>
                </div>

                <h3 className="mt-9 text-xl font-medium tracking-tight sm:text-2xl">
                  {area.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
                  {area.description}
                </p>

                <div className="mt-7 h-px w-10 bg-sky-300/40 transition-all duration-300 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>
    
{/* PUBLISHED RESEARCH */}
<section
  id="publications"
  className="border-b border-white/[0.08]"
>
  <div className="container mx-auto px-6 py-20 sm:py-28">
    <p className="text-[10px] tracking-[0.28em] text-sky-300">
      03 / RESEARCH ARCHIVE
    </p>

    <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
      Research records.
    </h2>

    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
      Computational studies, documented methods, and reproducible technical work.
    </p>

    <article className="mt-10 border border-white/[0.09] bg-[#080d18] p-6 sm:p-9">
      <p className="text-[10px] tracking-[0.2em] text-sky-300">
        VORA-RES-001 / ORBITAL MECHANICS
      </p>

      <h3 className="mt-5 max-w-3xl text-2xl font-semibold sm:text-3xl">
        How Does Orbital Altitude Affect Circular Orbital Speed and Period?
      </h3>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
        A computational study examining how orbital altitude affects
        circular orbital speed and orbital period using a simplified
        Newtonian two-body model.
      </p>

      <p className="mt-4 text-xs text-slate-500">
        Initial computational study — pending final review.
      </p>

      <div className="mt-7">
        <Link
          href="/research/vora-res-001"
          className="inline-flex items-center rounded-full bg-sky-300 px-5 py-3 text-sm font-medium text-[#06101d] transition hover:bg-sky-200"
        >
          Read the study
          <span className="ml-2">↗</span>
        </Link>
      </div>
    </article>
  </div>
</section>

      {/* METHODOLOGY */}
      <section id="methodology" className="scroll-mt-24 border-b border-white/[0.08] bg-[#070b15]">
        <div className="container mx-auto px-6 py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-[10px] tracking-[0.28em] text-sky-300">
                03 / METHODOLOGY
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                From question
                <br />
                to record.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
                A useful investigation needs more than an interesting
                result. It needs a defined question, a traceable method,
                and a record of what the evidence actually supports.
              </p>
            </div>

            <div>
              {workflow.map((step, index) => (
                <article
                  key={step.number}
                  className="group grid grid-cols-[48px_1fr] gap-4 border-t border-white/[0.09] py-6 sm:grid-cols-[64px_1fr] sm:gap-6 sm:py-8"
                >
                  <span className="pt-1 font-mono text-sm text-sky-300/70">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-medium transition-colors group-hover:text-sky-200 sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
              <div className="border-t border-white/[0.09] pt-5 text-[9px] tracking-[0.18em] text-slate-500">
                DEFINE / MODEL / EVALUATE / DOCUMENT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH STATUS */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-20 sm:py-24">
          <div className="relative overflow-hidden border border-white/[0.09] bg-[#080d18] p-7 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-sky-300/[0.07]" />
            <div className="pointer-events-none absolute -right-10 -top-14 h-52 w-52 rounded-full border border-sky-300/[0.08]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[10px] tracking-[0.28em] text-sky-300">
                  04 / PROGRAM STATUS
                </p>

                <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Building the foundation for future research.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-400">
                  VORA is developing its research framework and technical
                  archive. As work progresses, this page will distinguish
                  proposed investigations from active work and documented
                  results.
                </p>
              </div>

              <div className="flex items-center gap-3 border border-sky-300/20 bg-sky-300/[0.04] px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-sky-300" />
                <span className="text-[10px] tracking-[0.15em] text-sky-200">
                  FOUNDATION IN DEVELOPMENT
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container mx-auto px-6 py-16 sm:py-20">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] tracking-[0.25em] text-slate-500">
                VORA / NEXT STEP
              </p>
              <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
                Research leads to engineering.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                Explore the projects through which research questions
                can become structured engineering work.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex shrink-0 items-center rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-sky-300/60 hover:bg-white/[0.04]"
            >
              Explore projects
              <span className="ml-3">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
