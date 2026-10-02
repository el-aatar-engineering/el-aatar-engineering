
export default function AboutSection() {
  const interests = [
    "Aerospace engineering",
    "Space systems",
    "Flight dynamics",
    "Numerical simulation",
  ];

  return (
    <section id="about" className="container py-28">
      <div className="mb-14">
        <p className="eyebrow mb-4">03 / ABOUT</p>
        <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
          The mind behind
          <br />
          <span className="gradient-text">the engineering.</span>
        </h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
        {/* Profile visual */}
        <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101a36]">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.15)_1px,transparent_1px)] [background-size:32px_32px]" />

          <div className="absolute h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

          <svg
            viewBox="0 0 240 240"
            className="relative w-52 text-indigo-300"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="120"
              cy="120"
              r="88"
              stroke="currentColor"
              strokeOpacity=".18"
            />
            <circle
              cx="120"
              cy="120"
              r="68"
              stroke="currentColor"
              strokeOpacity=".28"
              strokeDasharray="3 7"
            />
            <path
              d="M120 43 164 158H76L120 43Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M120 81 145 143H95L120 81Z"
              fill="currentColor"
              fillOpacity=".12"
              stroke="currentColor"
              strokeOpacity=".7"
            />
            <path
              d="M120 112V184"
              stroke="#72d3ff"
              strokeWidth="1.5"
            />
          </svg>

          <span className="absolute bottom-5 left-5 text-[10px] tracking-[0.2em] text-slate-500">
            PERSONAL PROFILE
          </span>
        </div>

        {/* Biography */}
        <div className="flex flex-col justify-between gap-10">
          <div>
            <p className="text-xl font-medium leading-8 text-slate-200">
              Driven by curiosity about flight, space, and the engineering
              systems that make exploration possible.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              I'm building my knowledge and experience in aerospace
              engineering through learning, technical exploration, and
              hands-on projects. This portfolio is a place to document
              that journey and share the ideas, methods, and results
              behind my work.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              As my experience grows, this section will evolve to reflect
              my actual background, education, skills, and achievements.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5">AREAS OF INTEREST</p>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs text-slate-300 transition hover:border-indigo-300/40 hover:text-white"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}