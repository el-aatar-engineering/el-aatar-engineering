import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(59,130,246,0.16),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.10),transparent_35%)]" />

        <div className="container relative mx-auto px-6 py-24 sm:py-32 lg:py-40">
          <Link
            href="/projects"
            className="inline-flex items-center text-xs tracking-[0.18em] text-slate-500 transition hover:text-white"
          >
            ← BACK TO PROJECTS
          </Link>

          <div className="mt-12">
            <p className="text-xs font-medium tracking-[0.28em] text-blue-300">
              VORA / PROJECT
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              {project.title}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="rounded-full border border-white/10 px-4 py-2 text-xs tracking-[0.12em] text-slate-300">
                {project.category}
              </span>

              <span className="rounded-full border border-blue-300/20 bg-blue-300/5 px-4 py-2 text-xs tracking-[0.12em] text-blue-200">
                {project.status.toUpperCase()}
              </span>
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto grid gap-14 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:py-32">
          <div>
            <p className="text-xs font-medium tracking-[0.25em] text-blue-300">
              PROJECT / OVERVIEW
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Project overview
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
              {project.description}
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="border-t border-white/[0.08] pt-5">
                <p className="text-xs tracking-[0.18em] text-slate-600">
                  CATEGORY
                </p>

                <p className="mt-3 text-base text-slate-200">
                  {project.category}
                </p>
              </div>

              <div className="border-t border-white/[0.08] pt-5">
                <p className="text-xs tracking-[0.18em] text-slate-600">
                  STATUS
                </p>

                <p className="mt-3 text-base text-slate-200">
                  {project.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTATION PLACEHOLDER */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium tracking-[0.25em] text-blue-300">
              TECHNICAL RECORD
            </p>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Documentation will grow with the project.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400">
              Detailed objectives, methodology, simulations, experiments,
              results, technical notes, and development history can be added
              here as this project develops.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT STATUS */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs tracking-[0.2em] text-slate-600">
                CURRENT STATUS
              </p>

              <p className="mt-3 text-2xl font-medium">
                {project.status}
              </p>
            </div>

            <div className="max-w-md text-sm leading-7 text-slate-500">
              This status reflects the current state recorded in the VORA
              project archive and can be updated as development progresses.
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section>
        <div className="container mx-auto flex flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm text-slate-400 transition hover:text-white"
          >
            ← All projects
          </Link>

          <Link
            href="/research"
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm transition hover:border-blue-300 hover:bg-white/5"
          >
            Explore research
            <span className="ml-2">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}