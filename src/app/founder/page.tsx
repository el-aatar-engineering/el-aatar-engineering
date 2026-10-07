import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(59,130,246,0.16),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.10),transparent_35%)]" />

        <div className="container relative mx-auto px-6 py-24 sm:py-32 lg:py-40">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-medium tracking-[0.28em] text-blue-300">
              VORA / FOUNDER
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
              Mohamed
              <br />
              El Aatar
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Founder &amp; Initiator of VORA — Voyage &amp; Orbital Research
              Agency.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#mission"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-blue-100"
              >
                Explore VORA
                <span className="ml-2">↗</span>
              </Link>

              <Link
                href="/#contact"
                className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:border-blue-300 hover:bg-white/5"
              >
                Contact VORA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto grid gap-16 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:py-32">
          {/* PORTRAIT PLACEHOLDER */}
          <div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[0.10] bg-[#0b1020]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.18),transparent_38%)]" />

              <div className="relative flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-blue-300/20 bg-blue-300/5 text-2xl text-blue-200">
                    ME
                  </div>

                  <p className="text-xs tracking-[0.25em] text-slate-500">
                    FOUNDER PORTRAIT
                  </p>

                  <p className="mt-2 text-sm text-slate-600">
                    Portrait to be added
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* INTRODUCTION */}
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-xs font-medium tracking-[0.25em] text-blue-300">
              THE PERSON BEHIND VORA
            </p>

            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
              Building toward what comes next.
            </h2>

            <div className="mt-8 max-w-2xl space-y-6 text-base leading-8 text-slate-300">
              <p>
                At 18, Mohamed El Aatar founded VORA with a long-term vision:
                to build an aerospace organization focused on research, space
                technology, and education.
              </p>

              <p>
                VORA is being developed as a starting point for that vision —
                a place to document ideas, explore engineering concepts, build
                projects, and create a foundation for increasingly ambitious
                work in aerospace and space exploration.
              </p>

              <p>
                The objective is not to remain a single project. The ambition
                is to grow VORA into an organization capable of pursuing
                increasingly advanced aerospace work, with the long-term
                possibility of contributing to spacecraft, launch systems, and
                space missions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-medium tracking-[0.25em] text-blue-300">
                VORA / VISION
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Research.
                <br />
                Technology.
                <br />
                Education.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                Three foundations for the future of VORA.
              </p>

              <div className="mt-12 grid gap-8 sm:grid-cols-3">
                <div className="border-t border-white/10 pt-5">
                  <p className="text-sm font-medium text-white">01</p>
                  <h3 className="mt-4 text-lg font-medium">
                    Aerospace Research
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Exploring questions, concepts, simulations, and technical
                    ideas connected to aerospace and space.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <p className="text-sm font-medium text-white">02</p>
                  <h3 className="mt-4 text-lg font-medium">
                    Space Technology
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Working toward increasingly ambitious engineering projects
                    and future space technologies.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <p className="text-sm font-medium text-white">03</p>
                  <h3 className="mt-4 text-lg font-medium">Education</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Making aerospace knowledge and exploration accessible
                    through projects, documentation, and learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LONG-TERM AMBITION */}
      <section>
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium tracking-[0.25em] text-blue-300">
              LONG-TERM AMBITION
            </p>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-6xl">
              From a beginning in Morocco
              <br />
              toward the wider universe.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-400">
              VORA begins as an ambitious initiative. Its future will be built
              step by step through research, engineering, experimentation,
              education, and collaboration.
            </p>

            <div className="mt-12">
              <p className="text-sm tracking-[0.18em] text-slate-500">
                BEYOND THE KNOWN. INTO THE POSSIBLE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="border-t border-white/[0.08]">
        <div className="container mx-auto flex flex-col items-start justify-between gap-8 px-6 py-16 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-slate-400">VORA / FOUNDER</p>
            <p className="mt-2 text-xl font-medium text-white">
              Mohamed El Aatar
            </p>
          </div>

          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:border-blue-300 hover:bg-white/5"
          >
            Get in touch
            <span className="ml-2">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}