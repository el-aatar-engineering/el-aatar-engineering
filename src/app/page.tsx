import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import HeroVideo from "@/components/HeroVideo";
import { projects } from "@/data/projects";

const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full border border-sky-300/50 bg-slate-950/40 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-sky-200 hover:bg-sky-300/10 hover:shadow-[0_0_24px_rgba(56,189,248,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300";

const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-slate-950/30 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

/* =========================================================
   PROJECT VISUALS
========================================================= */

function ProjectVisual({ type }: { type: string }) {
  if (type === "orbit") {
    return (
      <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-[#0a1424]">
        <div className="absolute h-48 w-48 rounded-full border border-sky-300/20" />

        <div className="absolute h-36 w-64 rotate-[-25deg] rounded-[50%] border border-sky-300/30" />

        <div className="absolute h-28 w-56 rotate-[35deg] rounded-[50%] border border-blue-300/20" />

        <div className="absolute h-20 w-20 rounded-full bg-blue-400/10 blur-xl" />

        <div className="absolute h-2 w-2 rounded-full bg-sky-200 shadow-[0_0_20px_5px_rgba(125,211,252,0.5)]" />

        <div className="absolute left-[68%] top-[28%] h-2 w-2 rounded-full bg-white" />

        <span className="absolute bottom-5 left-5 text-[10px] tracking-[0.25em] text-slate-400">
          ORBITAL MECHANICS
        </span>
      </div>
    );
  }

  if (type === "simulation") {
    return (
      <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-[#0a1424]">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.2)_1px,transparent_1px)] [background-size:28px_28px]" />

        <svg
          viewBox="0 0 320 180"
          className="relative w-full max-w-sm px-5"
        >
          <path
            d="M20 145 Q85 130 130 90 T300 28"
            fill="none"
            stroke="#7dd3fc"
            strokeWidth="2"
            strokeDasharray="5 5"
          />

          <path
            d="M20 145 Q85 155 150 112 T300 78"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="2"
          />

          <circle cx="130" cy="90" r="4" fill="#7dd3fc" />

          <circle cx="150" cy="112" r="4" fill="#bfdbfe" />
        </svg>

        <span className="absolute bottom-5 left-5 text-[10px] tracking-[0.25em] text-slate-400">
          DYNAMICS &amp; SIMULATION
        </span>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-[#0a1424]">
      <div className="absolute h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />

      <svg
        viewBox="0 0 320 180"
        className="relative h-44 w-full max-w-sm"
      >
        <path
          d="M160 25 178 66 170 120 160 150 150 120 142 66 160 25Z"
          fill="#263c58"
          stroke="#9dbfe0"
          strokeWidth="1.5"
        />

        <path
          d="M142 66 115 108 150 120"
          fill="#1b2d46"
          stroke="#9dbfe0"
          strokeWidth="1.5"
        />

        <path
          d="M178 66 205 108 170 120"
          fill="#1b2d46"
          stroke="#9dbfe0"
          strokeWidth="1.5"
        />

        <path
          d="M154 120 160 150 166 120"
          fill="#67e8f9"
          opacity=".8"
        />

        <path
          d="M156 151 160 169 164 151"
          stroke="#67e8f9"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <span className="absolute bottom-5 left-5 text-[10px] tracking-[0.25em] text-slate-400">
        PROPULSION CONCEPT
      </span>
    </div>
  );
}

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080d16] text-white">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-[#070b12]"
      >
        <HeroVideo />

        <div className="absolute inset-0 bg-gradient-to-r from-[#070b12]/55 via-[#070b12]/20 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#070b12]/55 via-transparent to-[#070b12]/10" />

        <div className="container relative z-10 py-32">
          <div className="max-w-5xl">
            <p className="mb-7 text-xs font-medium tracking-[0.35em] text-sky-200">
              VORA / VOYAGE &amp; ORBITAL RESEARCH AGENCY
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
              Beyond the known.
              <br />
              <span className="text-sky-200">
                Into the possible.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Exploring aerospace engineering, orbital systems, and the
              science behind humanity&apos;s journey beyond Earth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/projects" className={primaryButton}>
                Explore VORA
              </Link>

              <Link href="/atlas" className={secondaryButton}>
                Explore the cosmos
              </Link>

              <a href="#mission" className={secondaryButton}>
                MISSION
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden text-[10px] tracking-[0.25em] text-white/70 sm:block">
          EXPLORATION
        </div>

        <div className="absolute bottom-8 left-8 flex items-center gap-3 text-[10px] tracking-[0.25em] text-white/70">
          <span className="h-8 w-px bg-sky-200/70" />
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* =========================================================
          WHAT IS VORA?
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#080d16] py-28 sm:py-36">
        <div className="container">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24">

            {/* TEXT */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-10 bg-sky-300/70" />

                <p className="text-xs font-medium tracking-[0.3em] text-sky-300">
                  WHAT IS VORA?
                </p>
              </div>

              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                An independent aerospace
                <span className="block text-sky-200">
                  research initiative.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                VORA explores aerospace engineering, orbital mechanics,
                space systems, propulsion, simulation, and the technologies
                required to move beyond Earth.
              </p>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500">
                Starting from research and technical exploration, VORA is
                building a foundation for increasingly ambitious aerospace
                projects and, eventually, real missions.
              </p>

              <Link
                href="/research"
                className={`${secondaryButton} mt-9`}
              >
                Explore our research
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            {/* ORBITAL VISUAL */}
            <div className="relative mx-auto w-full max-w-[34rem]">
              <div className="vora-system">

                {/* STARS */}
                <div
                  className="vora-stars"
                  aria-hidden="true"
                />

                {/* ORBIT PATHS */}
                <div
                  className="vora-orbit"
                  aria-hidden="true"
                />

                <div
                  className="vora-orbit vora-orbit-large"
                  aria-hidden="true"
                />

                {/* MOON ORBIT */}
                <div
                  className="vora-moon-orbit"
                  aria-hidden="true"
                >
                  <div className="vora-moon" />
                </div>

                {/* EARTH GLOW */}
                <div
                  className="vora-earth-glow"
                  aria-hidden="true"
                />

                {/* EARTH */}
                <div
                  className="vora-earth"
                  aria-hidden="true"
                >
                  <div className="vora-land" />
                  <div className="vora-clouds" />
                  <div className="vora-night" />
                  <div className="vora-atmosphere" />
                </div>

                {/* ISS ORBIT */}
                <div
                  className="vora-iss-orbit"
                  aria-hidden="true"
                />

                {/* ISS */}
                <div
                  className="vora-iss-track"
                  aria-hidden="true"
                >
                  <div className="vora-iss">
                    <span className="vora-iss-panel left" />
                    <span className="vora-iss-body" />
                    <span className="vora-iss-panel right" />
                  </div>
                </div>

                {/* TECHNICAL LABELS */}
                <div className="vora-label vora-label-earth">
                  EARTH / LEO
                </div>

                <div className="vora-label vora-label-iss">
                  ISS / ORBIT
                </div>

                <div className="vora-label vora-label-moon">
                  LUNAR SYSTEM
                </div>
              </div>

              <div className="mt-5 text-center">
                <span className="text-[9px] tracking-[0.35em] text-slate-600">
                  VORA / ORBITAL SYSTEMS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW VORA WORKS
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#060b13] py-28 sm:py-36">
        <div className="container">

          {/* HEADER */}
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-sky-300/70" />

              <p className="text-xs font-medium tracking-[0.3em] text-sky-300">
                HOW VORA WORKS
              </p>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              From questions
              <span className="block text-sky-200">
                to aerospace systems.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              VORA approaches aerospace through a cycle of research,
              engineering, experimentation, and documentation.
            </p>
          </div>

          {/* PROCESS */}
          <div className="relative mt-20">

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {/* ASK */}
              <div className="group relative min-w-0">
                <div className="flex h-full flex-col border border-white/[0.08] bg-[#0a111b]/80 p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-300/30">

                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.3em] text-sky-300">
                      01
                    </span>

                    <span className="text-xs text-slate-600">
                      QUESTION
                    </span>
                  </div>

                  <div className="mb-7 flex h-14 w-14 items-center justify-center border border-sky-300/20 bg-sky-300/[0.04]">
                    <span className="text-xl text-sky-200">
                      ?
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold">
                    ASK
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    Start with a technical question worth investigating.
                  </p>
                </div>
              </div>

              {/* MODEL */}
              <div className="group relative min-w-0">
                <div className="flex h-full flex-col border border-white/[0.08] bg-[#0a111b]/80 p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-300/30">

                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.3em] text-sky-300">
                      02
                    </span>

                    <span className="text-xs text-slate-600">
                      ANALYZE
                    </span>
                  </div>

                  <div className="mb-7 flex h-14 w-14 items-center justify-center border border-sky-300/20 bg-sky-300/[0.04]">
                    <span className="text-lg text-sky-200">
                      ∑
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold">
                    MODEL
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    Turn the question into mathematics, physics, and simulations.
                  </p>
                </div>
              </div>

              {/* BUILD */}
              <div className="group relative min-w-0">
                <div className="flex h-full flex-col border border-white/[0.08] bg-[#0a111b]/80 p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-300/30">

                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.3em] text-sky-300">
                      03
                    </span>

                    <span className="text-xs text-slate-600">
                      ENGINEER
                    </span>
                  </div>

                  <div className="mb-7 flex h-14 w-14 items-center justify-center border border-sky-300/20 bg-sky-300/[0.04]">
                    <span className="text-lg text-sky-200">
                      ◇
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold">
                    BUILD
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    Turn ideas and models into technical systems and prototypes.
                  </p>
                </div>
              </div>

              {/* TEST */}
              <div className="group relative min-w-0">
                <div className="flex h-full flex-col border border-white/[0.08] bg-[#0a111b]/80 p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-300/30">

                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.3em] text-sky-300">
                      04
                    </span>

                    <span className="text-xs text-slate-600">
                      VALIDATE
                    </span>
                  </div>

                  <div className="mb-7 flex h-14 w-14 items-center justify-center border border-sky-300/20 bg-sky-300/[0.04]">
                    <span className="text-lg text-sky-200">
                      ✓
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold">
                    TEST
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    Compare results, identify errors, and learn from experiments.
                  </p>
                </div>
              </div>

              {/* DOCUMENT */}
              <div className="group relative min-w-0">
                <div className="flex h-full flex-col border border-white/[0.08] bg-[#0a111b]/80 p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-300/30">

                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.3em] text-sky-300">
                      05
                    </span>

                    <span className="text-xs text-slate-600">
                      ARCHIVE
                    </span>
                  </div>

                  <div className="mb-7 flex h-14 w-14 items-center justify-center border border-sky-300/20 bg-sky-300/[0.04]">
                    <span className="text-lg text-sky-200">
                      ≡
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold">
                    DOCUMENT
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    Record the process, results, failures, and lessons learned.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* PRINCIPLE */}
          <div className="mt-20 border-t border-white/[0.06] pt-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs tracking-[0.28em] text-slate-500">
                VORA ENGINEERING PRINCIPLE
              </p>

              <p className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Build it. Record it. Learn from it.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          MISSION
      ========================================================= */}
      <section
        id="mission"
        className="relative overflow-hidden border-b border-white/[0.06] bg-[#080d16] py-28 sm:py-36"
      >
        <div className="container">

          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

            {/* TEXT */}
            <div>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-10 bg-sky-300/70" />

                <p className="text-xs font-medium tracking-[0.3em] text-sky-300">
                  VORA / MISSION
                </p>
              </div>

              <h2 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Every mission
                <span className="block text-sky-200">
                  begins as a question.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                VORA is being built from the ground up. Research comes
                first, followed by engineering studies, simulations,
                experiments, and increasingly ambitious systems.
              </p>

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500">
                The long-term direction is simple: transform knowledge
                into real aerospace capability.
              </p>

              <Link
                href="/missions"
                className={`${secondaryButton} mt-9`}
              >
                Explore missions
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            {/* MISSION PIPELINE */}
            <div className="relative">
              <div className="border border-white/[0.08] bg-[#0a111b] p-8 sm:p-10">

                <p className="text-[10px] tracking-[0.3em] text-slate-500">
                  MISSION DEVELOPMENT
                </p>

                <div className="mt-10 space-y-0">

                  {[
                    ["01", "CONCEPT"],
                    ["02", "DESIGN"],
                    ["03", "SIMULATION"],
                    ["04", "TEST"],
                    ["05", "MISSION"],
                  ].map(([number, label], index) => (
                    <div
                      key={label}
                      className="relative flex items-center gap-6"
                    >
                      {index < 4 && (
                        <span
                          aria-hidden="true"
                          className="absolute left-[13px] top-8 h-12 w-px bg-sky-300/20"
                        />
                      )}

                      <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-sky-300/30 bg-[#080d16] text-[9px] text-sky-200">
                        {number}
                      </div>

                      <div className="py-5">
                        <p className="text-sm font-medium tracking-[0.2em] text-slate-200">
                          {label}
                        </p>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}
      <section
        id="projects"
        className="bg-[#080d16] text-white"
      >
        <div className="container pb-16 pt-28">

          <p className="text-xs font-medium tracking-[0.3em] text-sky-300">
            ENGINEERING EXPLORATIONS
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            Pushing the boundaries
            <br />
            of what is possible.
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            VORA projects turn aerospace questions into technical studies,
            simulations, experiments, and documented engineering work.
          </p>
        </div>

        <div className="space-y-5">

          {featuredProjects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative block min-h-[580px] overflow-hidden border-y border-white/[0.08] bg-[#0a1422] sm:min-h-[680px]"
            >

              {/* VISUAL */}
              <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[1.025]">
                <ProjectVisual type={project.visual} />
              </div>

              {/* OVERLAYS */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#050a12]/90 via-[#050a12]/50 to-[#050a12]/10" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050a12]/80 via-transparent to-[#050a12]/10" />

              {/* CONTENT */}
              <div className="container relative z-10 flex min-h-[580px] flex-col justify-end py-16 sm:min-h-[680px] sm:justify-center">

                <div className="max-w-2xl">

                  <p className="mb-5 text-xs tracking-[0.25em] text-sky-200">
                    {project.category}
                  </p>

                  <h3 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                    {project.title}
                  </h3>

                  <p className="mt-6 max-w-lg text-base leading-7 text-slate-200 sm:text-lg">
                    {project.description}
                  </p>

                  <div className="mt-9 flex flex-wrap items-center gap-4">

                    <span className="inline-flex items-center gap-3 border border-white/50 px-6 py-3 text-xs font-semibold tracking-wider transition-all duration-300 group-hover:border-sky-200 group-hover:bg-sky-200 group-hover:text-[#07101c]">
                      EXPLORE PROJECT

                      <span
                        className="text-base"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </span>

                    <span className="text-xs text-slate-300">
                      {project.status}
                    </span>
                  </div>

                </div>
              </div>

              {/* PROJECT NUMBER */}
              <div className="absolute right-8 top-8 hidden text-xs tracking-[0.2em] text-white/60 sm:block">
                VORA / {String(index + 1).padStart(2, "0")}
              </div>

            </Link>
          ))}

        </div>

        <div className="container flex justify-center py-16">
          <Link
            href="/projects"
            className={secondaryButton}
          >
            Explore all projects
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section
        id="about"
        className="container py-28 sm:py-36"
      >
        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          {/* TEXT */}
          <div>
            <p className="mb-4 text-xs tracking-[0.25em] text-sky-300">
              ABOUT VORA
            </p>

            <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
              Learning by
              <br />
              building and exploring.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              VORA is an evolving aerospace research and engineering
              initiative focused on learning through technical studies,
              experiments, simulations, and exploration.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
              The organization is intentionally being built step by step:
              establish the research foundation, document the work, develop
              technical capability, and grow toward increasingly ambitious
              aerospace systems.
            </p>
          </div>

          {/* AREAS */}
          <div className="grid grid-cols-2 gap-3">

            {[
              {
                label: "Aerospace engineering",
                symbol: "◉",
              },
              {
                label: "Space systems",
                symbol: "◇",
              },
              {
                label: "Numerical simulation",
                symbol: "∑",
              },
              {
                label: "Technical research",
                symbol: "+",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="group flex min-h-40 flex-col justify-between border border-white/[0.08] bg-[#0b111c] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:bg-[#101b2a] hover:shadow-[0_0_25px_rgba(56,189,248,0.07)]"
              >
                <div className="flex h-9 w-9 items-center justify-center border border-sky-300/20 text-lg text-sky-300 transition-transform duration-300 group-hover:scale-110">
                  {item.symbol}
                </div>

                <p className="mt-8 text-sm font-medium leading-6 text-slate-200 transition-colors group-hover:text-white">
                  {item.label}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          COSMIC ATLAS CTA
      ========================================================= */}
      <section className="border-y border-white/[0.06] bg-[#060b13] py-24">
        <div className="container">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>
              <p className="text-xs tracking-[0.3em] text-sky-300">
                VORA / COSMIC ATLAS
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Study the universe.
                <span className="block text-sky-200">
                  Object by object.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-slate-400">
                A growing visual database of planets, stars, galaxies,
                nebulae, and other objects across the cosmos.
              </p>
            </div>

            <Link
              href="/atlas"
              className={primaryButton}
            >
              Open Cosmic Atlas
              <span aria-hidden="true">↗</span>
            </Link>

          </div>
        </div>
      </section>

      {/* =========================================================
          DOCUMENTATION CTA
      ========================================================= */}
      <section className="container py-24">
        <div className="border border-white/[0.08] bg-[#0a111b] p-8 sm:p-12">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>
              <p className="text-xs tracking-[0.3em] text-sky-300">
                TECHNICAL ARCHIVE
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                Build it.
                <span className="text-sky-200">
                  {" "}Record it.
                </span>
                {" "}Learn from it.
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                Research, projects, simulations, experiments, and
                development records belong to the VORA archive.
              </p>
            </div>

            <Link
              href="/documentation"
              className={secondaryButton}
            >
              Open documentation
              <span aria-hidden="true">↗</span>
            </Link>

          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/[0.06] bg-[#0b111c] py-28"
      >
        <div className="container relative">

          <div className="mx-auto max-w-3xl text-center">

            <p className="mb-4 text-xs tracking-[0.25em] text-sky-300">
              GET IN TOUCH
            </p>

            <h2 className="text-4xl font-semibold leading-tight sm:text-6xl">
              Let&apos;s talk
              <br />
              <span className="text-sky-200">
                engineering.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-slate-400">
              Interested in aerospace, space systems, engineering projects,
              research, or technical collaboration?
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className={primaryButton}
              >
                Explore VORA
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/documentation"
                className={secondaryButton}
              >
                View documentation
              </Link>
            </div>

            <p className="mt-8 text-xs tracking-[0.2em] text-slate-600">
              VORA / VOYAGE &amp; ORBITAL RESEARCH AGENCY
            </p>

          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-white/[0.08] bg-[#050a11]">

        <div className="container py-16 sm:py-20">

          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">

            {/* BRAND */}
            <div>

              <div className="mb-7 flex h-12 w-12 items-center justify-center border border-sky-300/20 bg-sky-300/[0.03]">
                <span className="text-sm font-semibold tracking-[0.2em] text-sky-200">
                  V
                </span>
              </div>

              <p className="text-sm font-semibold tracking-[0.18em] text-white">
                VORA
              </p>

              <p className="mt-2 text-[10px] tracking-[0.2em] text-sky-300/80">
                VOYAGE &amp; ORBITAL RESEARCH AGENCY
              </p>

              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                Exploring aerospace engineering, orbital systems, and the
                technologies that push humanity beyond the known.
              </p>

              <p className="mt-6 text-xs tracking-[0.2em] text-sky-300/80">
                BEYOND THE KNOWN. INTO THE POSSIBLE.
              </p>

            </div>

            {/* EXPLORE */}
            <div>

              <p className="text-[10px] font-semibold tracking-[0.25em] text-slate-500">
                EXPLORE
              </p>

              <div className="mt-6 flex flex-col gap-4">

                <a
                  href="#home"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Home
                </a>

                <a
                  href="#mission"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Mission
                </a>

                <a
                  href="#projects"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Projects
                </a>

                <Link
                  href="/research"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Research
                </Link>

                <Link
                  href="/atlas"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Cosmic Atlas
                </Link>

                <Link
                  href="/documentation"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Documentation
                </Link>

                <a
                  href="#contact"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Contact
                </a>

              </div>
            </div>

            {/* ENGINEERING */}
            <div>

              <p className="text-[10px] font-semibold tracking-[0.25em] text-slate-500">
                ENGINEERING
              </p>

              <div className="mt-6 flex flex-col gap-4">

                <Link
                  href="/projects"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Engineering Explorations
                </Link>

                <span className="text-sm text-slate-500">
                  Orbital Systems
                </span>

                <span className="text-sm text-slate-500">
                  Flight Dynamics
                </span>

                <span className="text-sm text-slate-500">
                  Propulsion
                </span>

                <span className="text-sm text-slate-500">
                  Space Systems
                </span>

                <span className="text-sm text-slate-500">
                  Simulation
                </span>

              </div>
            </div>

            {/* VORA */}
            <div>

              <p className="text-[10px] font-semibold tracking-[0.25em] text-slate-500">
                VORA
              </p>

              <div className="mt-6 flex flex-col gap-4">

                <Link
                  href="/founder"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Founder
                </Link>

                <Link
                  href="/research"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Research
                </Link>

                <Link
                  href="/missions"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Missions
                </Link>

                <Link
                  href="/projects"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Projects
                </Link>

                <Link
                  href="/documentation"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Technical Archive
                </Link>

              </div>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="my-12 h-px bg-white/[0.08]" />

          {/* BOTTOM */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex flex-col gap-2">

              <p className="text-xs text-slate-500">
                © 2026 VORA — Voyage &amp; Orbital Research Agency.
              </p>

              <p className="text-[10px] tracking-[0.18em] text-slate-600">
                SPACE &amp; AEROSPACE / ENGINEERING / EXPLORATION
              </p>

            </div>

            <a
              href="#home"
              className="group flex w-fit items-center gap-3 text-xs tracking-[0.15em] text-slate-400 transition-colors hover:text-sky-200"
            >
              BACK TO TOP

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-sky-300/50 group-hover:bg-sky-300/10">
                ↑
              </span>
            </a>

          </div>

        </div>
      </footer>
    </main>
  );
}