import AboutSection from "@/components/sections/AboutSection";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import SkillsSection from "@/components/sections/SkillsSection";

const projects = [
  {
    number: "01",
    slug: "orbital-systems-study",
    category: "AEROSPACE · CONCEPT",
    title: "Orbital Systems Study",
    description:
      "An exploration of orbital mechanics, mission parameters, and the fundamentals of designing a space mission.",
    status: "Planned",
    visual: "orbit",
  },
  {
    number: "02",
    slug: "flight-dynamics-simulation",
    category: "SIMULATION · PYTHON",
    title: "Flight Dynamics Simulation",
    description:
      "A planned numerical simulation exploring motion, forces, and the dynamics of aerospace vehicles.",
    status: "Planned",
    visual: "simulation",
  },
  {
    number: "03",
    slug: "propulsion-fundamentals",
    category: "ENGINEERING · RESEARCH",
    title: "Propulsion Fundamentals",
    description:
      "A technical study of propulsion principles, performance parameters, and rocket engine fundamentals.",
    status: "In exploration",
    visual: "propulsion",
  },
];

function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M32 5 56 49H8L32 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M32 19 44 42H20L32 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M32 29V53"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "orbit") {
    return (
      <div className="relative flex min-h-52 items-center justify-center overflow-hidden bg-[#101a36]">
        <div className="absolute h-52 w-52 rounded-full border border-indigo-300/20" />
        <div className="absolute h-36 w-36 scale-x-150 rotate-[-28deg] rounded-full border border-indigo-300/30" />
        <div className="absolute h-24 w-24 scale-x-150 rotate-45 rounded-full border border-cyan-300/30" />
        <div className="absolute h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_24px_6px_rgba(103,232,249,0.45)]" />
        <div className="absolute left-[63%] top-[29%] h-2 w-2 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.5)]" />
        <span className="absolute bottom-4 left-5 text-[10px] tracking-[0.25em] text-slate-400">
          ORBITAL MECHANICS
        </span>
      </div>
    );
  }

  if (type === "simulation") {
    return (
      <div className="relative flex min-h-52 items-center justify-center overflow-hidden bg-[#101a36]">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.2)_1px,transparent_1px)] [background-size:24px_24px]" />
        <svg viewBox="0 0 320 180" className="relative w-full max-w-sm px-5">
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
            stroke="#818cf8"
            strokeWidth="2"
          />
          <circle cx="130" cy="90" r="4" fill="#7dd3fc" />
          <circle cx="150" cy="112" r="4" fill="#a5b4fc" />
        </svg>
        <span className="absolute bottom-4 left-5 text-[10px] tracking-[0.25em] text-slate-400">
          DYNAMICS &amp; SIMULATION
        </span>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-52 items-center justify-center overflow-hidden bg-[#101a36]">
      <div className="absolute h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
      <svg viewBox="0 0 320 180" className="relative h-40 w-full max-w-sm">
        <path
          d="M160 25 178 66 170 120 160 150 150 120 142 66 160 25Z"
          fill="#27345f"
          stroke="#9db5ff"
          strokeWidth="1.5"
        />
        <path
          d="M142 66 115 108 150 120"
          fill="#1b2850"
          stroke="#9db5ff"
          strokeWidth="1.5"
        />
        <path
          d="M178 66 205 108 170 120"
          fill="#1b2850"
          stroke="#9db5ff"
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
      <span className="absolute bottom-4 left-5 text-[10px] tracking-[0.25em] text-slate-400">
        PROPULSION CONCEPT
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="hero-glow relative flex min-h-[85vh] items-center overflow-hidden"
      >
        <div className="grid-overlay pointer-events-none absolute inset-0" />

        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 900 700"
            className="h-full min-h-[600px] w-full min-w-[700px] max-w-[1100px] opacity-70"
            fill="none"
          >
            <defs>
              <radialGradient id="planetGlow">
                <stop offset="0%" stopColor="#7188ff" stopOpacity=".28" />
                <stop offset="100%" stopColor="#7188ff" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="orbitLine" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#72d3ff" stopOpacity="0" />
                <stop offset="50%" stopColor="#72d3ff" stopOpacity=".4" />
                <stop offset="100%" stopColor="#7385ff" stopOpacity="0" />
              </linearGradient>
            </defs>

            <circle cx="450" cy="350" r="245" fill="url(#planetGlow)" />
            <ellipse
              cx="450"
              cy="350"
              rx="310"
              ry="112"
              stroke="url(#orbitLine)"
              strokeWidth="1"
              transform="rotate(-28 450 350)"
            />
            <ellipse
              cx="450"
              cy="350"
              rx="235"
              ry="160"
              stroke="#8ca2ff"
              strokeOpacity=".15"
              strokeWidth="1"
              transform="rotate(38 450 350)"
            />
            <ellipse
              cx="450"
              cy="350"
              rx="355"
              ry="215"
              stroke="#8ca2ff"
              strokeOpacity=".12"
              strokeWidth="1"
              transform="rotate(18 450 350)"
              strokeDasharray="3 9"
            />
            <circle cx="450" cy="350" r="82" fill="#121b3b" fillOpacity=".7" />
            <circle
              cx="450"
              cy="350"
              r="82"
              stroke="#9baeff"
              strokeOpacity=".22"
            />
            <path
              d="M415 363 450 288 485 363 450 346 415 363Z"
              fill="#7385ff"
              fillOpacity=".15"
              stroke="#91a8ff"
              strokeOpacity=".6"
              strokeWidth="1.2"
            />
            <circle cx="238" cy="265" r="3" fill="#72d3ff" />
            <circle cx="675" cy="420" r="3" fill="#9baeff" />
            <circle cx="568" cy="180" r="2" fill="#72d3ff" />
            <circle cx="310" cy="510" r="2" fill="#9baeff" />
            <g stroke="#72d3ff" strokeOpacity=".7" strokeWidth="1.2">
              <path d="M238 257v16M230 265h16" />
              <path d="M675 412v16M667 420h16" />
            </g>
          </svg>
        </div>

        <div className="container relative z-10 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <LogoMark className="h-16 w-16 text-indigo-300 drop-shadow-[0_0_22px_rgba(115,133,255,0.35)]" />
            </div>

            <p className="eyebrow mb-6">
              AEROSPACE · SPACE SYSTEMS · ENGINEERING
            </p>

            <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight sm:text-7xl lg:text-8xl">
              Engineering the
              <br />
              <span className="gradient-text">next frontier.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Exploring aerospace engineering through technical studies,
              simulations, and a growing collection of engineering projects.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-indigo-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(99,102,241,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-400"
              >
                Explore projects <span aria-hidden="true">↗</span>
              </a>
              <a
                href="#about"
                className="rounded-full border border-white/20 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-slate-200 transition duration-300 hover:border-white/40 hover:bg-white/5"
              >
                About me
              </a>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] tracking-[0.2em] text-slate-500">
              <span>ENGINEERING</span>
              <span className="text-indigo-300/70">✦</span>
              <span>EXPLORATION</span>
              <span className="text-indigo-300/70">✦</span>
              <span>INNOVATION</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] tracking-[0.25em] text-slate-400 sm:flex">
          SCROLL TO EXPLORE
          <div className="h-10 w-px bg-gradient-to-b from-indigo-300/70 to-transparent" />
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="container py-28">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="eyebrow mb-4">01 / THE MISSION</p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Curiosity,
              <br />
              built into engineering.
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-slate-300">
              Aerospace engineering is where mathematics, physics, and
              creativity meet. This portfolio is a space to document that
              process—from foundational learning and technical exploration
              to simulations and practical engineering projects.
            </p>
            <p className="mt-5 leading-7 text-slate-500">
              Every project will reflect its actual stage of development,
              with an emphasis on transparent methods, technical learning,
              and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-y border-white/[0.06] bg-[#0b1020] py-28"
      >
        <div className="container">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-4">02 / SELECTED WORK</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Projects &amp; explorations
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                A growing collection of engineering work, studies, and
                technical experiments.
              </p>
            </div>
            <span className="text-xs tracking-widest text-slate-500">
              PORTFOLIO / 2026
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.number}
                href={`/projects/${project.slug}`}
                className="group block overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e1427] transition duration-300 hover:-translate-y-1 hover:border-indigo-300/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-300"
              >
                <ProjectVisual type={project.visual} />
                <div className="p-6">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="text-[10px] tracking-[0.16em] text-indigo-300">
                      {project.category}
                    </span>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-slate-400">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4 text-xs text-slate-500">
                    <span>PROJECT {project.number}</span>
                    <span className="transition group-hover:translate-x-1 group-hover:text-indigo-300">
                      Explore ↗
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-6 text-xs leading-5 text-slate-500">
            These are illustrative project entries. Update their descriptions
            and statuses as your actual work develops.
          </p>
        </div>
      </section>
          <SkillsSection />
      <AboutSection />
      <section id="about" className="container py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-4">03 / ABOUT</p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Learning by
              <br />
              building and exploring.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              This portfolio documents an ongoing engineering journey.
              It will grow with each new technical study, experiment,
              simulation, and completed project.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              ["01", "Aerospace engineering"],
              ["02", "Space systems"],
              ["03", "Numerical simulation"],
              ["04", "Technical research"],
            ].map(([number, label]) => (
              <div
                key={number}
                className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5"
              >
                <span className="text-xs tracking-widest text-indigo-300">
                  {number}
                </span>
                <p className="mt-8 text-sm font-medium text-slate-200">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      
      <section id="contact" className="relative overflow-hidden py-24 md:py-32">
        <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] px-7 py-16 text-center md:px-16 md:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-2xl">
        <p className="eyebrow">Get in touch / 04</p>

        <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Let's build something <span className="gradient-text">remarkable.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400">
          Interested in aerospace engineering, technical collaboration,
          or exchanging ideas? Feel free to reach out.
        </p>

        <a
          href="mailto:your.email@example.com"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-blue-500 px-7 py-4 text-sm font-medium text-white transition hover:bg-blue-400"
        >
          Contact me
          <span aria-hidden="true">↗</span>
              </a>
          </div>
          </div>
          </div>
        </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08]">
        <div className="container flex flex-col justify-between gap-6 py-8 sm:flex-row sm:items-center">
          <a href="#home" className="flex items-center gap-3">
            <LogoMark className="h-8 w-8 text-indigo-300" />
            <span className="text-sm font-semibold tracking-wide text-slate-200">
              EA{" "}
              <span className="font-normal text-slate-500">
                / Engineering
              </span>
            </span>
          </a>

          <p className="text-xs text-slate-500">
            Built with curiosity. Developed through engineering.
          </p>

          <a
            href="#home"
            className="text-xs text-slate-400 transition hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}