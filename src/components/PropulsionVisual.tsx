
"use client";

const particles = [
  { x: 0, y: -28, delay: "0s", duration: "1.8s" },
  { x: 14, y: 18, delay: "0.4s", duration: "2.1s" },
  { x: -12, y: -8, delay: "0.8s", duration: "1.6s" },
  { x: 8, y: 38, delay: "1.1s", duration: "2s" },
  { x: -5, y: -42, delay: "1.4s", duration: "1.9s" },
  { x: 20, y: -18, delay: "0.6s", duration: "2.2s" },
];

export default function PropulsionVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-3xl border border-white/[0.09] bg-[#080e20]">
      <style>{`
        @keyframes exhaustPulse {
          0%, 100% { opacity: .55; transform: scaleX(.92) scaleY(.94); }
          50% { opacity: 1; transform: scaleX(1.06) scaleY(1.04); }
        }
        @keyframes particleTravel {
          0% { transform: translate(0, 0) scale(.5); opacity: 0; }
          15% { opacity: 1; }
          100% { transform: translate(0, 125px) scale(.15); opacity: 0; }
        }
        @keyframes orbitRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scanTravel {
          0% { transform: translateY(0); opacity: 0; }
          15% { opacity: .35; }
          85% { opacity: .35; }
          100% { transform: translateY(230px); opacity: 0; }
        }
        .propulsion-exhaust {
          transform-origin: center top;
          animation: exhaustPulse 2.4s ease-in-out infinite;
        }
        .propulsion-particle {
          animation-name: particleTravel;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .propulsion-orbit {
          transform-origin: center;
          animation: orbitRotate 32s linear infinite;
        }
        .propulsion-scan {
          animation: scanTravel 5s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .propulsion-exhaust, .propulsion-particle,
          .propulsion-orbit, .propulsion-scan {
            animation: none !important;
          }
        }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(30,100,210,0.17),transparent_58%)]" />

      <div className="relative flex items-center justify-between border-b border-white/[0.08] px-6 py-5">
        <div>
          <p className="text-[10px] tracking-[0.25em] text-blue-300">
            VORA / PROPULSION LAB
          </p>
          <p className="mt-1 text-sm text-slate-300">
            Nozzle flow visualization
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
          <span className="text-[9px] tracking-[0.2em] text-slate-400">
            SIMULATION
          </span>
        </div>
      </div>

      <div className="relative h-[340px] overflow-hidden sm:h-[390px]">
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(125,180,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(125,180,255,.2) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="propulsion-orbit absolute left-1/2 top-[43%] h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-300/20">
          <span className="absolute left-[18px] top-[30px] h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_12px_#67e8f9]" />
        </div>

        <div className="absolute left-1/2 top-[43%] -translate-x-1/2 -translate-y-1/2">
          <svg
            viewBox="0 0 220 255"
            className="w-[210px] sm:w-[235px]"
            fill="none"
            role="img"
            aria-label="Illustration of a rocket nozzle and glowing exhaust plume"
          >
            <defs>
              <linearGradient id="nozzleMetal" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#243750" />
                <stop offset="35%" stopColor="#c1dcf5" />
                <stop offset="58%" stopColor="#526d91" />
                <stop offset="100%" stopColor="#18283e" />
              </linearGradient>
              <linearGradient id="exhaustCore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e0fbff" />
                <stop offset="32%" stopColor="#62e9ff" />
                <stop offset="70%" stopColor="#218bff" stopOpacity=".7" />
                <stop offset="100%" stopColor="#1764ff" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="engineGlow">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity=".28" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </radialGradient>
              <filter id="exhaustBlur">
                <feGaussianBlur stdDeviation="7" />
              </filter>
            </defs>

            <ellipse cx="110" cy="160" rx="72" ry="95" fill="url(#engineGlow)" />

            <g stroke="#7394bb" strokeOpacity=".35" strokeWidth=".8">
              <path d="M15 68H65 M155 68H205" />
              <path d="M25 73H54 M166 73H195" />
              <path d="M35 201H70 M150 201H185" />
            </g>

            <path
              d="M72 32 Q73 17 110 12 Q147 17 148 32 L142 78 L128 107 L128 132 L92 132 L92 107 L78 78 Z"
              fill="url(#nozzleMetal)"
              stroke="#d1e6ff"
              strokeOpacity=".65"
              strokeWidth="1.2"
            />

            <path
              d="M84 33 Q110 43 136 33 L132 76 L121 102 L121 125 L99 125 L99 102 L88 76 Z"
              fill="#07101f"
              stroke="#94b9e9"
              strokeOpacity=".6"
            />

            <path d="M76 76 Q110 91 144 76 L132 104 L128 132 L92 132 L88 104 Z"
              fill="url(#nozzleMetal)"
              stroke="#c7e5ff"
              strokeWidth="1.2"
            />

            <ellipse cx="110" cy="132" rx="20" ry="7" fill="#07101f" stroke="#b8e2ff" strokeWidth="1.5" />

            <g className="propulsion-exhaust">
              <path
                d="M92 134 Q110 141 128 134 L146 215 Q110 250 74 215 Z"
                fill="#188bff"
                opacity=".3"
                filter="url(#exhaustBlur)"
              />
              <path
                d="M96 135 Q110 141 124 135 L135 202 Q110 232 85 202 Z"
                fill="url(#exhaustCore)"
              />
              <path
                d="M105 138 Q110 141 115 138 L120 192 Q110 211 100 192 Z"
                fill="#e0fbff"
                opacity=".9"
              />
            </g>

            <path d="M67 57H80 M140 57H153 M62 86H83 M137 86H158" stroke="#91b9e7" strokeWidth="1" />
            <circle cx="77" cy="57" r="2" fill="#67e8f9" />
            <circle cx="143" cy="57" r="2" fill="#67e8f9" />
          </svg>
        </div>

        {particles.map((particle, index) => (
          <span
            key={index}
            className="propulsion-particle absolute left-1/2 top-[57%] h-1 w-1 rounded-full bg-cyan-200 shadow-[0_0_9px_#67e8f9]"
            style={{
              marginLeft: `${particle.x}px`,
              marginTop: `${particle.y}px`,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}

        <div className="propulsion-scan pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

        <div className="absolute left-5 top-6">
          <p className="text-[9px] tracking-[0.18em] text-slate-500">FIG. 01</p>
          <p className="mt-1 text-[10px] text-slate-300">ENGINE CROSS-SECTION</p>
        </div>

        <div className="absolute right-5 top-7 text-right">
          <p className="text-[9px] tracking-[0.18em] text-slate-500">FLOW STATE</p>
          <p className="mt-1 text-xs text-cyan-200">Idealized</p>
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
          <div>
            <p className="text-[9px] tracking-[0.18em] text-slate-500">EXHAUST DIRECTION</p>
            <p className="mt-1 text-xs text-slate-300">Axial · Downstream</p>
          </div>
          <p className="text-[9px] tracking-[0.15em] text-slate-500">NOT TO SCALE</p>
        </div>
      </div>

      <div className="grid grid-cols-3 border-t border-white/[0.08]">
        {[
          ["MODEL", "Ideal nozzle"],
          ["OUTPUT", "Exhaust flow"],
          ["METHOD", "Analytical"],
        ].map(([label, value]) => (
          <div key={label} className="border-r border-white/[0.08] p-4 last:border-r-0">
            <p className="text-[9px] tracking-[0.18em] text-slate-500">{label}</p>
            <p className="mt-2 text-[11px] text-slate-200 sm:text-xs">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
