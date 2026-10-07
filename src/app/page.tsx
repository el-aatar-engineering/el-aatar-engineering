import React from "react";
import Link from "next/link";

import { projects } from "@/data/projects";
import Navbar from "@/components/layout/Navbar";

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

      <svg viewBox="0 0 320 180" className="relative h-44 w-full max-w-sm">
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

const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full border border-sky-300/50 bg-slate-950/40 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-sky-200 hover:bg-sky-300/10 hover:shadow-[0_0_24px_rgba(56,189,248,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300";

const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-slate-950/30 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export default function Home() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  const projectVisuals: string[] = ["orbit", "simulation", "default"];

  return (
    <main className="min-h-screen overflow-hidden bg-[#080d16] text-white">
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-[#070b12]"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/videos/earth-orbit.mp4" type="video/mp4" />
        </video>

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
              <span className="text-sky-200">Into the possible.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Exploring aerospace engineering, orbital systems, and the
              science behind humanity&apos;s journey beyond Earth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/projects" className={primaryButton}>
                Explore VORA
                <span aria-hidden="true">↗</span>
              </Link>

              <Link href="/atlas" className={secondaryButton}>
                Explore the cosmos
                <span aria-hidden="true">↗</span>
              </Link>

              <a href="#mission" className={secondaryButton}>
                Mission
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden text-[10px] tracking-[0.25em] text-white/70 sm:block">
          EXPLORATION
        </div>

        <a
          href="#mission"
          className="absolute bottom-8 left-8 flex items-center gap-3 text-[10px] tracking-[0.25em] text-white/70 transition-colors hover:text-sky-200"
        >
          <span className="h-8 w-px bg-sky-200/70" />
          SCROLL TO EXPLORE
        </a>
      </section>

      {/* MISSION */}
      <section
        id="mission"
        className="relative isolate overflow-hidden border-y border-white/[0.06] bg-[#0a1422] py-28 sm:py-36"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-sky-400/[0.06] blur-[100px]"
        />

        <div className="container relative">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-10 bg-sky-300/70" />

                <p className="text-xs font-medium tracking-[0.3em] text-sky-300">
                  OUR MISSION
                </p>
              </div>

              <h2 className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                Engineering the future of flight.
                <span className="mt-2 block text-sky-200">
                  Exploring the boundaries of possibility.
                </span>
              </h2>

              <p className="mt-9 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                At VORA, our mission is to explore the science, engineering,
                and systems that make flight and space exploration possible.
                Through research, simulation, and engineering projects, we aim
                to turn curiosity into understanding and ideas into meaningful
                technical explorations.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6">
                <span className="text-[10px] font-medium tracking-[0.2em] text-slate-400">
                  FLIGHT
                </span>

                <span className="h-1 w-1 rounded-full bg-sky-300/60" />

                <span className="text-[10px] font-medium tracking-[0.2em] text-slate-400">
                  ORBIT
                </span>

                <span className="h-1 w-1 rounded-full bg-sky-300/60" />

                <span className="text-[10px] font-medium tracking-[0.2em] text-slate-400">
                  PROPULSION
                </span>
              </div>
            </div>

            {/* Orbital visual */}
            <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
              <div
                aria-hidden="true"
                className="absolute inset-[12%] rounded-full bg-sky-300/[0.07] blur-3xl"
              />

              <div
                aria-hidden="true"
                className="absolute inset-[9%] rounded-full border border-sky-200/[0.12]"
              />

              <div
                aria-hidden="true"
                className="absolute inset-[20%] rotate-[-32deg] rounded-[50%] border border-sky-300/25"
              />

              <div
                aria-hidden="true"
                className="absolute inset-[28%] rotate-[48deg] rounded-[50%] border border-blue-300/20"
              />

              <div className="absolute left-1/2 top-1/2 h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-gradient-to-br from-[#6ca6c9] via-[#244b70] to-[#07101d] shadow-[0_0_70px_rgba(56,189,248,0.18)]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_25%_25%,rgba(219,242,255,0.45),transparent_55%)]"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full bg-[linear-gradient(120deg,transparent_35%,rgba(3,9,19,0.75)_100%)]"
                />
              </div>

              <div
                aria-hidden="true"
                className="absolute left-[72%] top-[23%] h-2 w-2 rounded-full bg-sky-200 shadow-[0_0_16px_4px_rgba(125,211,252,0.5)]"
              />

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] tracking-[0.25em] text-slate-500 sm:bottom-5">
                EXPLORING WHAT&apos;S NEXT
              </div>

              <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-[9px] tracking-[0.2em] text-slate-500 [writing-mode:vertical-rl] sm:block">
                VORA / 001
              </div>
            </div>
          </div>

          <div className="mt-20 flex items-center gap-4">
            <span className="h-px flex-1 bg-white/[0.08]" />

            <p className="text-center text-[10px] tracking-[0.25em] text-slate-500">
              BEYOND THE KNOWN. INTO THE POSSIBLE.
            </p>

            <span className="h-px flex-1 bg-white/[0.08]" />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-[#080d16] text-white">
        <div className="container pb-16 pt-28">
          <p className="text-xs font-medium tracking-[0.3em] text-sky-300">
            ENGINEERING EXPLORATIONS
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            Pushing the boundaries
            <br />
            of what is possible.
          </h2>
        </div>

        <div className="space-y-5">
          {featuredProjects.map((project, index) => {
            const visualType =
              project.visual && projectVisuals.includes(project.visual)
                ? project.visual
                : projectVisuals[index] ?? "default";

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative block min-h-[580px] overflow-hidden border-y border-white/[0.08] bg-[#0a1422] sm:min-h-[680px]"
              >
                <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[1.025]">
                  <ProjectVisual type={visualType} />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-[#050a12]/90 via-[#050a12]/50 to-[#050a12]/10" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050a12]/70 via-transparent to-[#050a12]/10" />

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

                    <div className="mt-9 flex items-center gap-4">
                      <span className="inline-flex items-center gap-3 border border-white/50 px-6 py-3 text-xs font-semibold tracking-wider transition-all duration-300 group-hover:border-sky-200 group-hover:bg-sky-200 group-hover:text-[#07101c]">
                        EXPLORE PROJECT

                        <span className="text-base" aria-hidden="true">
                          ↗
                        </span>
                      </span>

                      <span className="text-xs text-slate-300">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute right-8 top-8 hidden text-xs tracking-[0.2em] text-white/60 sm:block">
                  VORA / {String(index + 1).padStart(2, "0")}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="container flex justify-center py-16">
          <Link href="/projects" className={secondaryButton}>
            Explore all projects
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
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

            <Link
              href="/founder"
              className="mt-8 inline-flex items-center gap-2 text-sm text-sky-200 transition-colors hover:text-white"
            >
              Meet the founder
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              {
                label: "Aerospace engineering",
                icon: "orbit",
              },
              {
                label: "Space systems",
                icon: "satellite",
              },
              {
                label: "Numerical simulation",
                icon: "simulation",
              },
              {
                label: "Technical research",
                icon: "research",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="group flex min-h-40 flex-col justify-between border border-white/[0.08] bg-[#0b111c] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:bg-[#101b2a] hover:shadow-[0_0_25px_rgba(56,189,248,0.07)]"
              >
                <div className="flex h-9 w-9 items-center justify-center text-sky-300 transition-transform duration-300 group-hover:scale-110">
                  {item.icon === "orbit" && (
                    <svg
                      viewBox="0 0 32 32"
                      className="h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    >
                      <circle cx="16" cy="16" r="4" />
                      <ellipse
                        cx="16"
                        cy="16"
                        rx="14"
                        ry="6"
                        transform="rotate(-35 16 16)"
                      />
                      <circle
                        cx="27"
                        cy="9"
                        r="1.5"
                        fill="currentColor"
                      />
                    </svg>
                  )}

                  {item.icon === "satellite" && (
                    <svg
                      viewBox="0 0 32 32"
                      className="h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="12"
                        y="12"
                        width="8"
                        height="8"
                        transform="rotate(45 16 16)"
                      />
                      <path d="m10 10-6-6m18 18 6 6M4 12l8-8M20 28l8-8" />
                      <path d="M2 5h6v6H2zM24 21h6v6h-6z" />
                    </svg>
                  )}

                  {item.icon === "simulation" && (
                    <svg
                      viewBox="0 0 32 32"
                      className="h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    >
                      <path d="M3 25h26M5 22l6-8 6 3 10-12" />

                      <circle
                        cx="11"
                        cy="14"
                        r="1.5"
                        fill="currentColor"
                      />

                      <circle
                        cx="17"
                        cy="17"
                        r="1.5"
                        fill="currentColor"
                      />

                      <circle
                        cx="27"
                        cy="5"
                        r="1.5"
                        fill="currentColor"
                      />
                    </svg>
                  )}

                  {item.icon === "research" && (
                    <svg
                      viewBox="0 0 32 32"
                      className="h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    >
                      <circle cx="14" cy="14" r="9" />
                      <path d="m21 21 7 7M10 14h8M14 10v8" />
                    </svg>
                  )}
                </div>

                <p className="mt-8 text-sm font-medium leading-6 text-slate-200 transition-colors group-hover:text-white">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
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
              <span className="text-sky-200">engineering.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-slate-400">
              Interested in aerospace, space systems, engineering projects,
              research, or technical collaboration? Feel free to get in touch.
            </p>

            <a
              href="mailto:mr.el.aatar.1@gmail.com"
              className={`${primaryButton} mt-9`}
            >
              Contact VORA
              <span aria-hidden="true">↗</span>
            </a>

            <p className="mt-4 text-xs text-slate-500">
              mr.el.aatar.1@gmail.com
              <br />
              <br />
              +212 764-878193
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08] bg-[#050a11]">
        <div className="container py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            {/* BRAND */}
            <div>
              <Link
                href="/"
                className="group inline-flex items-center"
                aria-label="VORA home"
              >
                <div className="flex h-12 items-center rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 transition-all duration-300 group-hover:border-sky-300/30 group-hover:bg-sky-300/[0.04]">
                  <span className="text-lg font-semibold tracking-[0.25em] text-white">
                    VORA
                  </span>
                </div>
              </Link>

              <p className="mt-5 text-[10px] tracking-[0.2em] text-sky-300/80">
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
                <Link
                  href="/"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Home
                </Link>

                <Link
                  href="/#mission"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Mission
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
              </div>
            </div>

            {/* DISCOVER */}
            <div>
              <p className="text-[10px] font-semibold tracking-[0.25em] text-slate-500">
                DISCOVER
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <Link
                  href="/atlas"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Cosmic Atlas
                </Link>

                <Link
                  href="/founder"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Founder
                </Link>

                <Link
                  href="/documentation"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Documentation
                </Link>

                <Link
                  href="/projects"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Engineering Explorations
                </Link>
              </div>
            </div>

            {/* CONNECT */}
            <div>
              <p className="text-[10px] font-semibold tracking-[0.25em] text-slate-500">
                CONNECT
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="mailto:mr.el.aatar.1@gmail.com"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Email
                </a>

                <a
                  href="/#contact"
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-sky-200"
                >
                  Get in touch
                </a>

                <span className="text-sm text-slate-500">
                  Morocco
                </span>
              </div>
            </div>
          </div>

          <div className="my-12 h-px bg-white/[0.08]" />

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-xs text-slate-500">
                © 2026 VORA — Voyage &amp; Orbital Research Agency. All rights
                reserved.
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