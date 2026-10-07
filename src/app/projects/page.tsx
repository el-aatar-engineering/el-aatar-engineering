import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { projects } from "@/data/projects";

const statusOrder = [
  "In progress",
  "In exploration",
  "Planned",
  "Completed",
] as const;

const statusLabel: Record<(typeof statusOrder)[number], string> = {
  "In progress": "ACTIVE",
  "In exploration": "EXPLORATION",
  Planned: "PLANNED",
  Completed: "COMPLETED",
};

export default function ProjectsPage() {
  const orderedProjects = [...projects].sort(
    (a, b) =>
      statusOrder.indexOf(a.status as (typeof statusOrder)[number]) -
      statusOrder.indexOf(b.status as (typeof statusOrder)[number]),
  );

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.09),transparent_35%)]" />

        <div className="container relative mx-auto px-6 py-24 sm:py-32 lg:py-40">
          <p className="mb-6 text-xs font-medium tracking-[0.28em] text-blue-300">
            VORA / PROJECTS
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Engineering
            <br />
            in progress.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
            A growing record of VORA's technical studies, simulations,
            explorations, and engineering projects.
          </p>
        </div>
      </section>

      {/* PROJECT STATUS */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-wrap gap-6 text-xs tracking-[0.18em] text-slate-500">
            <span>
              {projects.length.toString().padStart(2, "0")} PROJECTS
            </span>

            <span className="text-slate-700">/</span>

            <span>VORA ENGINEERING PROGRAM</span>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section>
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="space-y-6">
            {orderedProjects.map((project, index) => (
              <article
                key={project.slug}
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition hover:border-blue-300/30 hover:bg-white/[0.035]"
              >
                <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                  {/* VISUAL */}
                  <div className="relative min-h-[260px] overflow-hidden border-b border-white/[0.08] bg-[#080d1c] lg:min-h-[360px] lg:border-b-0 lg:border-r">
                    {project.cover ? (
                      <img
                        src={project.cover}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.16),transparent_55%)]" />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-br from-[#050816]/30 via-[#050816]/50 to-[#050816]/90" />

                    <div className="relative flex h-full min-h-[260px] flex-col justify-between p-7 lg:min-h-[360px] lg:p-9">
                      <div className="flex items-center justify-between">
                        <span className="text-xs tracking-[0.2em] text-blue-300">
                          VORA / {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] tracking-[0.15em] text-slate-300">
                          {statusLabel[
                            project.status as (typeof statusOrder)[number]
                          ] ?? project.status.toUpperCase()}
                        </span>
                      </div>

                      <div>
                        <p className="text-xs tracking-[0.18em] text-slate-500">
                          {project.category.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col justify-between p-7 lg:p-10">
                    <div>
                      <p className="text-xs tracking-[0.2em] text-slate-600">
                        PROJECT {String(index + 1).padStart(2, "0")}
                      </p>

                      <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                        {project.title}
                      </h2>

                      <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-blue-100"
                      >
                        View project
                        <span className="ml-2">↗</span>
                      </Link>

                      <span className="text-xs tracking-[0.12em] text-slate-600">
                        {project.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section className="border-t border-white/[0.08]">
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium tracking-[0.25em] text-blue-300">
              VORA / DEVELOPMENT
            </p>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              The project archive will grow with VORA.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              New technical work can be added as VORA develops. Each project
              can eventually include detailed documentation, research,
              simulations, results, and development history.
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
                Explore VORA's research.
              </h2>
            </div>

            <Link
              href="/research"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-blue-300 hover:bg-white/5"
            >
              Research
              <span className="ml-2">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}