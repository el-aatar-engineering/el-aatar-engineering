
import Link from "next/link";
import { notFound } from "next/navigation";

const projectDetails: Record<
  string,
  {
    number: string;
    title: string;
    category: string;
    status: string;
    summary: string;
    objectives: string[];
  }
> = {
  "orbital-systems-study": {
    number: "01",
    title: "Orbital Systems Study",
    category: "AEROSPACE · CONCEPT",
    status: "Planned",
    summary:
      "An exploration of orbital mechanics, mission parameters, and the fundamentals of designing a space mission.",
    objectives: [
      "Explore orbital mechanics fundamentals",
      "Understand orbital parameters and trajectories",
      "Investigate basic mission design considerations",
    ],
  },
  "flight-dynamics-simulation": {
    number: "02",
    title: "Flight Dynamics Simulation",
    category: "SIMULATION · PYTHON",
    status: "Planned",
    summary:
      "A planned numerical simulation exploring motion, forces, and the dynamics of aerospace vehicles.",
    objectives: [
      "Review the equations of motion",
      "Explore numerical integration methods",
      "Develop and test a basic simulation",
    ],
  },
  "propulsion-fundamentals": {
    number: "03",
    title: "Propulsion Fundamentals",
    category: "ENGINEERING · RESEARCH",
    status: "In exploration",
    summary:
      "A technical study of propulsion principles, performance parameters, and rocket engine fundamentals.",
    objectives: [
      "Review fundamental propulsion principles",
      "Study thrust and performance parameters",
      "Explore the main types of rocket propulsion",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectDetails[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#080b16] text-white">
      <header className="border-b border-white/[0.08]">
        <div className="container flex h-20 items-center justify-between">
          <Link
            href="/#home"
            className="text-sm font-semibold tracking-[0.16em]"
          >
            EA <span className="text-slate-500">/ ENGINEERING</span>
          </Link>
          <Link
            href="/#projects"
            className="text-xs text-slate-400 transition hover:text-white"
          >
            ← All projects
          </Link>
        </div>
      </header>

      <section className="hero-glow relative overflow-hidden border-b border-white/[0.06]">
        <div className="grid-overlay pointer-events-none absolute inset-0" />
        <div className="container relative py-24 sm:py-32">
          <p className="eyebrow mb-6">
            PROJECT {project.number} / {project.category}
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            {project.summary}
          </p>
          <span className="mt-8 inline-flex rounded-full border border-white/15 px-4 py-2 text-xs text-slate-300">
            Status: {project.status}
          </span>
        </div>
      </section>

      <section className="container grid gap-16 py-20 md:grid-cols-[1fr_280px]">
        <div>
          <p className="eyebrow mb-4">01 / OVERVIEW</p>
          <h2 className="text-2xl font-semibold">Project objectives</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            This section is a starting structure for documenting the project.
            As the work progresses, add your actual engineering approach,
            calculations, technical decisions, and findings here.
          </p>

          <ul className="mt-8 space-y-4">
            {project.objectives.map((objective, index) => (
              <li key={objective} className="flex items-start gap-4">
                <span className="mt-0.5 text-xs tracking-widest text-indigo-300">
                  0{index + 1}
                </span>
                <span className="text-sm leading-6 text-slate-300">
                  {objective}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-16 border-t border-white/[0.08] pt-8">
            <p className="eyebrow mb-4">02 / TECHNICAL DOCUMENTATION</p>
            <h2 className="text-2xl font-semibold">Work in progress</h2>
            <p className="mt-4 leading-7 text-slate-400">
              Technical methods, diagrams, code, calculations, and results
              will be documented here when they are available.
            </p>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
          <p className="eyebrow mb-6">PROJECT INFO</p>
          <div className="space-y-5 text-sm">
            <div>
              <p className="text-xs text-slate-500">Project number</p>
              <p className="mt-1 text-slate-200">{project.number}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Category</p>
              <p className="mt-1 text-slate-200">{project.category}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Status</p>
              <p className="mt-1 text-slate-200">{project.status}</p>
            </div>
          </div>
        </aside>
      </section>

      <footer className="border-t border-white/[0.08]">
        <div className="container flex items-center justify-between py-8">
          <span className="text-xs text-slate-500">
            EA / Engineering
          </span>
          <Link
            href="/#projects"
            className="text-xs text-slate-400 transition hover:text-white"
          >
            Back to projects ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}