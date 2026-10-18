
export default function EngineeringWireframe() {
  return (
    <div
      className="engineering-visual relative mx-auto mt-16 w-full max-w-5xl overflow-hidden border border-sky-300/15 bg-[#070e19]"
      role="img"
      aria-label="Animated conceptual spacecraft wireframe with engineering guides"
    >
      <div className="absolute inset-0 engineering-grid" aria-hidden="true" />
      <div className="engineering-scan" aria-hidden="true" />

      <div className="relative grid min-h-[360px] items-center md:min-h-[430px] md:grid-cols-[1fr_220px]">
        <div className="relative flex items-center justify-center px-3 py-8">
          <svg
            viewBox="0 0 640 400"
            className="engineering-craft w-full max-w-[650px]"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="craftGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#bae6fd" />
                <stop offset="55%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
              <radialGradient id="craftAura">
                <stop offset="0%" stopColor="#0284c7" stopOpacity=".2" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx="320" cy="195" r="150" fill="url(#craftAura)" />
            <ellipse className="engineering-orbit" cx="320" cy="195" rx="250" ry="82" />
            <ellipse className="engineering-orbit engineering-orbit-two" cx="320" cy="195" rx="190" ry="125" />

            {/* Measurement guides */}
            <g className="engineering-guides" stroke="#38bdf8" strokeOpacity=".3" strokeWidth=".8">
              <path d="M55 195H585 M320 28V365" strokeDasharray="4 7" />
              <path d="M110 180V210 M160 185V205 M480 185V205 M530 180V210" />
              <path d="M305 55H335 M305 335H335" />
              <circle cx="320" cy="195" r="112" strokeDasharray="2 8" />
            </g>

            {/* Solar arrays assemble from the outside */}
            <g className="engineering-part engineering-panels" stroke="url(#craftGlow)" strokeWidth="1.4">
              <path d="M238 168L125 139L99 164L220 192Z" />
              <path d="M402 168L515 139L541 164L420 192Z" />
              <path d="M125 139L125 166L220 213L220 192" />
              <path d="M515 139L515 166L420 213L420 192" />
              {[0, 1, 2, 3].map((i) => (
                <g key={i}>
                  <path d={`M${130 + i * 22} ${153 + i * 7}l-5 25`} />
                  <path d={`M${510 - i * 22} ${153 + i * 7}l5 25`} />
                </g>
              ))}
            </g>

            {/* Main spacecraft body */}
            <g className="engineering-part engineering-body" stroke="url(#craftGlow)" strokeWidth="1.8" strokeLinejoin="round">
              <path d="M320 82L350 145L350 222L320 270L290 222L290 145Z" />
              <path d="M320 82V270 M290 145L350 145 M290 222L350 222" />
              <path d="M290 145L252 173L290 190 M350 145L388 173L350 190" />
              <path d="M290 222L267 244L320 270L373 244L350 222" />
              <path d="M305 120L320 105L335 120L320 145Z" />
              <path d="M305 163L320 151L335 163L320 182Z" />
              <path d="M306 203H334L320 220Z" />
            </g>

            {/* Antenna and engine */}
            <g className="engineering-part engineering-details" stroke="#bae6fd" strokeWidth="1.5">
              <path d="M320 82V54 M309 54H331 M315 270V293 M325 270V293" />
              <path d="M308 293H332L320 309Z" />
              <circle cx="320" cy="47" r="7" />
              <path d="M313 47H327 M320 40V54" />
            </g>

            {/* Moving signal point */}
            <circle className="engineering-beacon" cx="320" cy="47" r="3" fill="#e0f2fe" />

            {/* Technical callouts */}
            <g className="engineering-guides" stroke="#7dd3fc" strokeWidth="1" strokeOpacity=".65">
              <path d="M290 145L205 104H155" />
              <path d="M350 222L425 268H480" />
              <path d="M320 293L320 330H390" />
            </g>
            <g className="engineering-labels" fill="#bae6fd" fontSize="10" letterSpacing="2">
              <text x="150" y="96">STRUCTURE</text>
              <text x="430" y="260">SYSTEMS</text>
              <text x="395" y="334">PROPULSION</text>
            </g>
          </svg>
        </div>

        {/* Technical readout */}
        <div className="relative z-10 border-t border-sky-300/10 bg-[#070e19]/80 p-6 md:border-l md:border-t-0 md:self-stretch md:flex md:flex-col md:justify-center">
          <p className="text-[9px] tracking-[0.28em] text-sky-300">
            ENGINEERING / 001
          </p>
          <h3 className="mt-3 text-lg font-medium text-white">
            Concept development
          </h3>
          <p className="mt-3 text-xs leading-6 text-slate-400">
            From initial geometry to a structured technical model.
          </p>

          <div className="mt-7 space-y-4">
            {[
              ["GEOMETRY", "01"],
              ["STRUCTURE", "02"],
              ["SYSTEMS", "03"],
            ].map(([label, number], index) => (
              <div key={label}>
                <div className="flex justify-between text-[9px] tracking-[0.16em]">
                  <span className="text-slate-400">{label}</span>
                  <span className="text-sky-300">{number}</span>
                </div>
                <div className="mt-2 h-px bg-white/10">
                  <div
                    className="engineering-progress h-px bg-sky-300"
                    style={{ "--progress-delay": `${index * 0.8}s` } as React.CSSProperties}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-7 text-[9px] tracking-[0.18em] text-slate-600">
            CONCEPTUAL VISUALIZATION
          </p>
        </div>
      </div>
    </div>
  );
}
