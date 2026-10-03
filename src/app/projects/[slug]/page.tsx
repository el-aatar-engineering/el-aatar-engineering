
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080d16] text-white">
      <Navbar />

      {/* INTRO */}
      <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#070b12]">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-sky-400/[0.06] blur-3xl" />
        <div className="container relative py-32 sm:py-40">
          <p className="mb-6 text-xs tracking-[0.35em] text-sky-300">
            EL AATAR ENGINEERING / PROJECT ARCHIVE
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
            Engineering
            <br />
            <span className="text-sky-200">explorations.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              A growing collection of aerospace studies,
              simulations, research, and engineering projects.
              Each exploration documents a step forward.
            </p>

            <p className="text-xs tracking-[0.2em] text-slate-500">
              {projects.length.toString().padStart(2, "0")} PROJECTS
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT LIBRARY */}
      <section className="container py-20 sm:py-28">
        <div className="mb-10 flex flex-col gap-6 border-b border-white/[0.08] pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs tracking-[0.3em] text-sky-300">
              THE COLLECTION
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Project library
            </h2>
          </div>

          <p className="text-sm text-slate-500">
            Showing {filteredProjects.length} of {projects.length}
          </p>
        </div>

        {/* FILTERS */}
        <div className="mb-12 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-xs tracking-wide transition ${
                  isActive
                    ? "border-sky-300 bg-sky-300/10 text-sky-200"
                    : "border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
                }`}
              >
                {category === "All" ? "All projects" : category}
              </button>
            );
          })}
        </div>

        {/* GRID */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex flex-col overflow-hidden border border-white/[0.08] bg-[#0b111c] transition duration-500 hover:-translate-y-1 hover:border-sky-300/30 hover:shadow-[0_15px_50px_rgba(0,0,0,0.25)]"
              >
                {/* VISUAL */}
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#0a1424]">
                  <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.15)_1px,transparent_1px)] [background-size:28px_28px]" />

                  {project.visual === "orbit" && (
                    <div className="relative flex h-full w-full items-center justify-center transition-transform duration-700 group-hover:scale-110">
                      <div className="absolute h-40 w-40 rounded-full border border-sky-300/20" />
                      <div className="absolute h-24 w-56 rotate-[-25deg] rounded-[50%] border border-sky-300/40" />
                      <div className="absolute h-20 w-48 rotate-[35deg] rounded-[50%] border border-blue-300/30" />
                      <div className="h-16 w-16 rounded-full bg-sky-400/10 blur-xl" />
                      <div className="absolute h-2 w-2 rounded-full bg-sky-200 shadow-[0_0_18px_5px_rgba(125,211,252,0.4)]" />
                    </div>
                  )}

                  {project.visual === "simulation" && (
                    <svg
                      viewBox="0 0 320 180"
                      className="relative w-full max-w-sm px-5 transition-transform duration-700 group-hover:scale-110"
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
                  )}

                  {project.visual === "propulsion" && (
                    <svg
                      viewBox="0 0 320 180"
                      className="relative h-40 w-full max-w-sm transition-transform duration-700 group-hover:scale-110"
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
                    </svg>
                  )}

                  <span className="absolute left-5 top-5 text-[10px] tracking-[0.2em] text-white/40">
                    EA / {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="absolute bottom-5 right-5 text-xs text-sky-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    VIEW PROJECT ↗
                  </span>
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[10px] tracking-[0.2em] text-sky-300">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-xl font-semibold leading-snug transition-colors group-hover:text-sky-100">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-white/[0.08] pt-5">
                    <span className="text-[10px] tracking-wider text-slate-500">
                      {project.status.toUpperCase()}
                    </span>

                    <span className="text-sm text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-sky-200">
                      ↗
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="border border-white/[0.08] py-20 text-center">
            <p className="text-slate-400">
              No projects in this category yet.
            </p>
          </div>
        )}
      </section>

      {/* FOOTER CTA */}
      <section className="border-t border-white/[0.08] bg-[#0b111c]">
        <div className="container flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-medium">
              Beyond the known. Into the possible.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Every project is another step into exploration.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-3 text-sm text-slate-300 transition hover:text-sky-200"
          >
            Back to home
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
