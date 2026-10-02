
const skillGroups = [
  {
    number: "01",
    title: "Aerospace Engineering",
    description:
      "Fundamental disciplines behind the design and analysis of aerospace systems.",
    skills: [
      "Orbital Mechanics",
      "Flight Dynamics",
      "Aerodynamics",
      "Propulsion",
    ],
  },
  {
    number: "02",
    title: "Engineering & Design",
    description:
      "Design methods and engineering principles for developing technical solutions.",
    skills: [
      "CAD Design",
      "Technical Drawing",
      "Engineering Analysis",
      "System Design",
    ],
  },
  {
    number: "03",
    title: "Programming & Simulation",
    description:
      "Computational methods for modeling, analyzing, and simulating engineering problems.",
    skills: [
      "Python",
      "MATLAB",
      "Numerical Simulation",
      "Data Analysis",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Technical profile / 03</p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Skills & <span className="gradient-text">interests.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
              A growing collection of engineering disciplines, technical
              tools, and areas of exploration shaping my aerospace journey.
            </p>
          </div>

          <div className="hidden items-center gap-3 pb-2 text-xs tracking-[0.2em] text-slate-500 md:flex">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            CONTINUOUS LEARNING
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.045] md:p-8"
            >
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04] transition-transform duration-500 group-hover:scale-150" />

              <div className="relative mb-10 flex items-center justify-between">
                <span className="font-mono text-sm tracking-widest text-blue-300">
                  {group.number}
                </span>

                <div className="h-px w-12 bg-gradient-to-r from-blue-400/60 to-transparent" />
              </div>

              <h3 className="relative text-xl font-medium leading-snug text-white md:text-2xl">
                {group.title}
              </h3>

              <p className="relative mt-4 text-sm leading-7 text-slate-400">
                {group.description}
              </p>

              <div className="relative mt-auto flex flex-wrap gap-2 pt-8">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/[0.08] bg-slate-950/40 px-3 py-2 text-xs text-slate-300 transition-colors duration-200 group-hover:border-blue-400/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Engineering knowledge is built through practice and exploration.</p>
          <p className="font-mono tracking-wider">EA / TECHNICAL PROFILE</p>
        </div>
      </div>
    </section>
  );
}