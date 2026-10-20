
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

const principles = [
  {
    number: "01",
    title: "Aerospace Research",
    description:
      "Explore engineering questions, aerodynamic concepts, simulations, and technical ideas connected to flight and space.",
    tag: "INVESTIGATE",
  },
  {
    number: "02",
    title: "Space Technology",
    description:
      "Build knowledge through practical projects and work toward increasingly ambitious aerospace technologies.",
    tag: "ENGINEER",
  },
  {
    number: "03",
    title: "Education",
    description:
      "Document discoveries, share technical knowledge, and make aerospace concepts easier to explore and understand.",
    tag: "UNDERSTAND",
  },
];

const milestones = [
  {
    number: "01",
    title: "Establish the foundation",
    description:
      "Define VORA's identity, purpose, digital infrastructure, and long-term direction.",
    status: "FOUNDATION",
  },
  {
    number: "02",
    title: "Build real projects",
    description:
      "Turn ideas into software, simulations, technical studies, and documented engineering work.",
    status: "BUILD & LEARN",
  },
  {
    number: "03",
    title: "Expand the horizon",
    description:
      "Develop stronger technical foundations and pursue more ambitious aerospace research over time.",
    status: "LONG-TERM VISION",
  },
];

export default function FounderPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <Navbar />

      {/* HERO — CINEMATIC MILKY WAY JOURNEY */}
      <section className="relative isolate flex min-h-[780px] items-center overflow-hidden border-b border-white/[0.08] bg-[#050816] sm:min-h-[900px]">
        {/* Static fallback image */}
        <div className="pointer-events-none absolute inset-0 -z-30">
          <Image
            src="/images/founder-space.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Animated galaxy video */}
        <video
          className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/founder-space.png"
          aria-hidden="true"
        >
          <source
            src="/videos/milky-way-zoom.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark cinematic tint */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#050816]/20" />

        {/* Protect readability around the text */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#050816]/95 via-[#050816]/65 to-[#050816]/15" />

        {/* Blend the video into the next section */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#050816] via-[#050816]/10 to-[#050816]/30" />

        <div className="container relative mx-auto px-6 py-28 sm:py-36 lg:py-40">
          <div className="max-w-4xl">
            <p className="mb-7 text-xs font-medium tracking-[0.3em] text-blue-300">
              VORA / FOUNDER
            </p>

            <h1 className="text-5xl font-semibold tracking-[-0.055em] sm:text-7xl lg:text-8xl">
              Mohamed
              <br />
              <span className="text-white">El Aatar</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Founder &amp; Initiator of VORA — Voyage &amp; Orbital Research
              Agency.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Building a foundation for aerospace research, engineering
              projects, and the exploration of what comes next.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#mission"
                className="inline-flex items-center rounded-full bg-blue-500 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-blue-400"
              >
                Explore VORA
              </Link>

              <Link
                href="/#contact"
                className="inline-flex items-center rounded-full border border-white/25 bg-[#050816]/40 px-6 py-3.5 text-sm text-white backdrop-blur-sm transition hover:border-blue-300 hover:bg-white/[0.08]"
              >
                Contact VORA
              </Link>
            </div>
          </div>

          <div className="mt-20 flex items-center gap-4 sm:mt-24">
            <div className="h-px w-12 bg-blue-400" />
            <p className="text-[10px] tracking-[0.25em] text-slate-300 sm:text-xs">
              BEYOND THE KNOWN. INTO THE POSSIBLE.
            </p>
          </div>
        </div>
      </section>
```

      {/* FOUNDER PROFILE */}
      <section className="relative border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="absolute -inset-3 rounded-2xl border border-blue-400/10" />

              <div className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-[#0b1020] shadow-2xl shadow-blue-950/20">
                <Image
                  src="/images/founder.jpg"
                  alt="Mohamed El Aatar, founder of VORA"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 38vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs tracking-[0.22em] text-blue-300">
                    VORA / FOUNDING INITIATIVE
                  </p>
                  <p className="mt-2 text-xl font-medium">
                    Mohamed El Aatar
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-[10px] tracking-[0.18em] text-slate-500">
                <span>FOUNDER PROFILE</span>
                <span>VORA — MOROCCO</span>
              </div>
            </div>

            <div>
              <p className="mb-5 text-xs font-medium tracking-[0.25em] text-blue-300">
                THE PERSON BEHIND VORA
              </p>

              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Building toward
                <br />
                what comes next.
              </h2>

              <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-slate-300">
                <p>
                  At 18, Mohamed El Aatar founded VORA with a long-term vision:
                  to build an aerospace organization focused on research, space
                  technology, and education.
                </p>

                <p>
                  VORA is being developed as a starting point for that vision —
                  a place to document ideas, explore engineering concepts,
                  build projects, and establish a foundation for increasingly
                  ambitious work in aerospace and space exploration.
                </p>

                <p>
                  The ambition extends beyond a single project. The long-term
                  goal is to grow VORA into an organization capable of pursuing
                  advanced aerospace work, with the possibility of contributing
                  to spacecraft, launch systems, and space missions in the
                  future.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-5 border-t border-white/10 pt-6">
                <div>
                  <p className="text-xs tracking-[0.18em] text-slate-500">
                    BASE
                  </p>
                  <p className="mt-2 text-lg font-medium">Morocco</p>
                </div>

                <div>
                  <p className="text-xs tracking-[0.18em] text-slate-500">
                    FOCUS
                  </p>
                  <p className="mt-2 text-lg font-medium">
                    Aerospace &amp; Space
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="relative border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(37,99,235,0.08),transparent_45%)]" />

        <div className="container relative mx-auto px-6 py-24 sm:py-32">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium tracking-[0.25em] text-blue-300">
                VORA / VISION
              </p>

              <p className="mt-5 max-w-xs text-sm leading-7 text-slate-500">
                A long-term direction shaped by learning, engineering, and
                consistent progress.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Research.
                <br />
                Technology.
                <br />
                Education.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
                Three foundations for the future of VORA. Each begins with
                curiosity and develops through documented work.
              </p>

              <div className="mt-12 grid gap-4 md:grid-cols-3">
                {principles.map((principle) => (
                  <article
                    key={principle.number}
                    className="group rounded-xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-400/[0.04]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-blue-300">
                        {principle.number}
                      </span>
                      <span className="text-lg text-slate-600 transition group-hover:text-blue-300">
                        
                      </span>
                    </div>

                    <h3 className="mt-9 text-lg font-medium">
                      {principle.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {principle.description}
                    </p>

                    <p className="mt-7 border-t border-white/10 pt-4 text-[10px] tracking-[0.2em] text-slate-500">
                      {principle.tag}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE JOURNEY */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <div>
              <p className="text-xs font-medium tracking-[0.25em] text-blue-300">
                THE JOURNEY
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                One step at a time.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                A long-term ambition becomes meaningful through the work done
                along the way.
              </p>
            </div>

            <div className="relative">
              <div className="absolute bottom-8 left-[17px] top-8 w-px bg-gradient-to-b from-blue-400/70 via-blue-400/20 to-transparent" />

              <div className="space-y-4">
                {milestones.map((milestone) => (
                  <article
                    key={milestone.number}
                    className="relative grid gap-5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 sm:grid-cols-[40px_1fr] sm:p-7"
                  >
                    <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/30 bg-[#080d20] text-xs text-blue-300">
                      {milestone.number}
                    </div>

                    <div>
                      <p className="text-[10px] tracking-[0.2em] text-blue-300">
                        {milestone.status}
                      </p>

                      <h3 className="mt-3 text-xl font-medium">
                        {milestone.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                        {milestone.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LONG-TERM AMBITION */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(37,99,235,0.16),transparent_60%)]" />

        <div className="container mx-auto px-6 py-28 sm:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium tracking-[0.25em] text-blue-300">
              LONG-TERM AMBITION
            </p>

            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              From a beginning in Morocco
              <br />
              <span className="text-slate-400">
                toward the wider universe.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-400">
              VORA begins as an ambitious initiative. Its future will be built
              step by step through research, engineering, experimentation,
              education, and collaboration.
            </p>

            <div className="mt-10 flex justify-center">
              <div className="h-px w-20 bg-blue-400/70" />
            </div>

            <p className="mt-7 text-xs tracking-[0.25em] text-slate-500">
              BEYOND THE KNOWN. INTO THE POSSIBLE.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="border-t border-white/[0.08]">
        <div className="container mx-auto flex flex-col justify-between gap-8 px-6 py-12 sm:flex-row sm:items-center sm:py-16">
          <div>
            <p className="text-xs tracking-[0.2em] text-slate-500">
              VORA / FOUNDER
            </p>

            <p className="mt-3 text-xl font-medium">Mohamed El Aatar</p>

            <p className="mt-2 text-sm text-slate-400">
              Voyage &amp; Orbital Research Agency
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:border-blue-300 hover:bg-white/[0.05]"
            >
              Explore Projects <span className="ml-2"></span>
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-400"
            >
              Get in touch <span className="ml-2"></span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
