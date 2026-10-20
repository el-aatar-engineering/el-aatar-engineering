
export default function MissionTelemetry() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070d1c] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(37,99,235,0.13),transparent_65%)]" />

      <div className="relative flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] px-5 py-4 sm:px-7">
        <div>
          <p className="text-[10px] tracking-[0.22em] text-blue-300">
            VORA FLIGHT DYNAMICS LAB
          </p>
          <h2 className="mt-2 text-sm font-medium sm:text-base">
            Orbital mission visualization
          </h2>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/[0.06] px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
          <span className="text-[9px] tracking-[0.15em] text-blue-200">
            SIMULATION
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.5fr_0.8fr]">
        {/* Orbital visualization */}
        <div className="relative min-w-0 border-b border-white/[0.08] lg:border-b-0 lg:border-r">
          <div className="absolute left-5 top-5 z-10">
            <p className="text-[9px] tracking-[0.18em] text-slate-500">
              ORBITAL VIEW
            </p>
            <p className="mt-1 text-xs text-slate-300">
              Earth / Low orbit
            </p>
          </div>

          <svg
            viewBox="0 0 520 390"
            role="img"
            aria-label="Animated conceptual satellite orbiting Earth"
            className="block w-full"
          >
            <defs>
              <radialGradient id="mission-earth">
                <stop offset="0%" stopColor="#3276bb" />
                <stop offset="65%" stopColor="#124276" />
                <stop offset="100%" stopColor="#061326" />
              </radialGradient>

              <linearGradient id="mission-atmosphere" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity=".6" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity=".05" />
              </linearGradient>

              <clipPath id="mission-earth-clip">
                <circle cx="260" cy="205" r="91" />
              </clipPath>

              <filter id="mission-glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Stars */}
            {Array.from({ length: 48 }, (_, i) => {
              const x = (i * 83 + 29) % 510;
              const y = (i * 47 + 13) % 380;

              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={i % 5 === 0 ? 1.2 : 0.65}
                  fill="#cbd5e1"
                  opacity={i % 3 === 0 ? 0.65 : 0.28}
                />
              );
            })}

            {/* Orbit paths */}
            <ellipse
              cx="260"
              cy="205"
              rx="166"
              ry="120"
              fill="none"
              stroke="#60a5fa"
              strokeOpacity=".14"
              strokeDasharray="3 7"
            />

            <ellipse
              cx="260"
              cy="205"
              rx="144"
              ry="103"
              fill="none"
              stroke="#60a5fa"
              strokeOpacity=".65"
              strokeWidth="1"
            />

            <ellipse
              cx="260"
              cy="205"
              rx="120"
              ry="145"
              transform="rotate(35 260 205)"
              fill="none"
              stroke="#94a3b8"
              strokeOpacity=".23"
              strokeDasharray="4 8"
            />

            {/* Earth */}
            <circle
              cx="260"
              cy="205"
              r="96"
              fill="none"
              stroke="url(#mission-atmosphere)"
              strokeWidth="5"
              opacity=".65"
            />

            <circle
              cx="260"
              cy="205"
              r="91"
              fill="url(#mission-earth)"
            />

            <g clipPath="url(#mission-earth-clip)" opacity=".9">
              <path
                d="M174 155 L198 145 216 153 221 169 207 181 213 196 197 207 185 190 171 186Z"
                fill="#479779"
                opacity=".8"
              />
              <path
                d="M234 126 L255 139 262 157 251 170 266 185 254 203 270 224 260 249 244 263 232 243 238 221 224 201 230 182 214 163Z"
                fill="#6ab18b"
                opacity=".75"
              />
              <path
                d="M290 145 L311 150 323 165 343 170 350 187 335 199 320 189 302 202 290 187 275 178Z"
                fill="#4e9c7d"
                opacity=".75"
              />
              <path
                d="M285 215 L304 222 314 241 300 256 288 245 276 230Z"
                fill="#5aa782"
                opacity=".8"
              />
              <path
                d="M168 205 Q260 184 352 211"
                fill="none"
                stroke="#93c5fd"
                strokeOpacity=".15"
                strokeWidth="13"
              />
              <path
                d="M170 160 Q260 140 350 170 M169 240 Q260 260 351 238"
                fill="none"
                stroke="#bfdbfe"
                strokeOpacity=".1"
              />
            </g>

            <ellipse
              cx="260"
              cy="205"
              rx="91"
              ry="30"
              fill="none"
              stroke="#93c5fd"
              strokeOpacity=".22"
            />

            {/* Moving spacecraft */}
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 260 205"
                to="360 260 205"
                dur="18s"
                repeatCount="indefinite"
              />

              <g transform="translate(404 205)">
                <circle
                  r="12"
                  fill="#60a5fa"
                  opacity=".12"
                  filter="url(#mission-glow)"
                />

                <g
                  fill="#dbeafe"
                  stroke="#93c5fd"
                  strokeWidth="1"
                >
                  <rect x="-5" y="-4" width="10" height="8" rx="1" />
                  <rect x="-17" y="-5" width="10" height="10" fill="#2563eb" />
                  <rect x="7" y="-5" width="10" height="10" fill="#2563eb" />
                  <path d="M-1 -4 L0 -10 2 -4 M0 4 L0 9" fill="none" />
                </g>

                <circle r="3" fill="#fff" />
              </g>
            </g>

            {/* Technical labels */}
            <g fill="#94a3b8" fontSize="9" letterSpacing="1.4">
              <text x="24" y="340">REFERENCE BODY: EARTH</text>
              <text x="24" y="355">ORBIT: CIRCULAR / IDEALIZED</text>
            </g>

            <path
              d="M355 103 L388 77 L453 77"
              fill="none"
              stroke="#60a5fa"
              strokeOpacity=".55"
            />

            <circle cx="355" cy="103" r="2" fill="#60a5fa" />

            <text
              x="390"
              y="68"
              fill="#93c5fd"
              fontSize="9"
              letterSpacing="1"
            >
              SPACECRAFT
            </text>
          </svg>

          <div className="flex flex-wrap justify-between gap-3 border-t border-white/[0.06] px-5 py-4 text-[9px] tracking-[0.12em] text-slate-500 sm:px-7">
            <span>CONCEPTUAL VISUALIZATION</span>
            <span>NOT LIVE SPACECRAFT DATA</span>
          </div>
        </div>

        {/* Simulated telemetry */}
        <div className="flex flex-col">
          <div className="border-b border-white/[0.08] px-5 py-5 sm:px-7">
            <p className="text-[9px] tracking-[0.2em] text-slate-500">
              MODEL PARAMETERS
            </p>
            <p className="mt-2 text-xs text-slate-300">
              Circular Earth orbit
            </p>
          </div>

          <div className="grid flex-1 grid-cols-1 divide-y divide-white/[0.07]">
            <div className="px-5 py-5 sm:px-7">
              <p className="text-[9px] tracking-[0.17em] text-slate-500">
                ORBITAL ALTITUDE
              </p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-light tracking-tight">400</span>
                <span className="text-xs text-slate-400">km</span>
              </div>
              <p className="mt-2 text-[10px] text-slate-500">
                Above mean Earth radius
              </p>
            </div>

            <div className="px-5 py-5 sm:px-7">
              <p className="text-[9px] tracking-[0.17em] text-slate-500">
                ORBITAL VELOCITY
              </p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-light tracking-tight">7.67</span>
                <span className="text-xs text-slate-400">km/s</span>
              </div>
              <p className="mt-2 text-[10px] text-slate-500">
                Calculated circular speed
              </p>
            </div>

            <div className="px-5 py-5 sm:px-7">
              <p className="text-[9px] tracking-[0.17em] text-slate-500">
                ORBITAL PERIOD
              </p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-light tracking-tight">92.56</span>
                <span className="text-xs text-slate-400">min</span>
              </div>
              <p className="mt-2 text-[10px] text-slate-500">
                Idealized two-body model
              </p>
            </div>
          </div>

          <div className="border-t border-white/[0.08] bg-white/[0.02] px-5 py-4 sm:px-7">
            <p className="text-[9px] tracking-[0.17em] text-slate-500">
              MODEL STATUS
            </p>
            <p className="mt-2 text-xs text-blue-200">
              Analytical reference values
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
