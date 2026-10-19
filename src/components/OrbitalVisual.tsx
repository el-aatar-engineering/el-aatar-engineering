
"use client";

export default function OrbitalVisual() {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/[0.09] bg-[#070d1c]">
      <style>{`
        @keyframes orbitalSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes earthGlow {
          0%, 100% { opacity: .45; }
          50% { opacity: .8; }
        }
        @keyframes orbitalScan {
          0% { transform: translateY(0); opacity: 0; }
          15% { opacity: .35; }
          85% { opacity: .35; }
          100% { transform: translateY(310px); opacity: 0; }
        }
        .orbital-spin {
          transform-origin: 160px 165px;
          animation: orbitalSpin 24s linear infinite;
        }
        .earth-glow {
          animation: earthGlow 4s ease-in-out infinite;
        }
        .orbital-scan {
          animation: orbitalScan 6s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .orbital-spin, .earth-glow, .orbital-scan {
            animation: none !important;
          }
        }
      `}</style>

      <div className="relative flex items-center justify-between border-b border-white/[0.08] px-5 py-5 sm:px-6">
        <div>
          <p className="text-[10px] tracking-[0.25em] text-blue-300">
            VORA / ORBITAL LAB
          </p>
          <p className="mt-1 text-sm text-slate-300">
            Circular orbit visualization
          </p>
        </div>
        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1.5 text-[9px] tracking-[0.16em] text-cyan-200">
          TWO-BODY MODEL
        </span>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,rgba(25,91,194,0.18),transparent_60%)]" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(125,180,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(125,180,255,.18) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <svg
          viewBox="0 0 320 350"
          className="relative z-10 mx-auto block w-full max-w-[440px]"
          role="img"
          aria-label="Animated spacecraft following a circular orbit around Earth"
        >
          <defs>
            <radialGradient id="orbitalEarth" cx="32%" cy="25%" r="80%">
              <stop offset="0%" stopColor="#4f9dff" />
              <stop offset="55%" stopColor="#1453a3" />
              <stop offset="100%" stopColor="#07172e" />
            </radialGradient>
            <radialGradient id="orbitalAtmosphere">
              <stop offset="65%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="84%" stopColor="#38bdf8" stopOpacity=".13" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </radialGradient>
            <clipPath id="orbitalEarthClip">
              <circle cx="160" cy="165" r="57" />
            </clipPath>
            <filter id="orbitalGlow">
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>

          {Array.from({ length: 42 }, (_, i) => {
            const x = (i * 71 + 17) % 310 + 5;
            const y = (i * 43 + 23) % 330 + 8;
            const r = i % 6 === 0 ? 1.2 : 0.6;

            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={r}
                fill={i % 3 === 0 ? "#7dd3fc" : "#dbeafe"}
                opacity={i % 4 === 0 ? 0.8 : 0.35}
              />
            );
          })}

          <circle
            className="earth-glow"
            cx="160"
            cy="165"
            r="83"
            fill="url(#orbitalAtmosphere)"
          />

          <ellipse
            cx="160"
            cy="165"
            rx="122"
            ry="82"
            fill="none"
            stroke="#60a5fa"
            strokeOpacity=".15"
            strokeDasharray="3 7"
            transform="rotate(-28 160 165)"
          />

          <ellipse
            cx="160"
            cy="165"
            rx="111"
            ry="76"
            fill="none"
            stroke="#7dd3fc"
            strokeOpacity=".8"
            strokeWidth="1.1"
            transform="rotate(-28 160 165)"
          />

          <g clipPath="url(#orbitalEarthClip)">
            <circle cx="160" cy="165" r="57" fill="url(#orbitalEarth)" />

            <g
              fill="#54b8a0"
              opacity=".75"
              stroke="#83e3c2"
              strokeWidth=".7"
            >
              <path d="M128 121 L143 116 L151 126 L145 137 L153 145 L146 157 L133 150 L128 137 L119 132 Z" />
              <path d="M158 149 L171 143 L182 151 L179 164 L189 171 L180 182 L169 175 L165 163 Z" />
              <path d="M200 190 L212 186 L218 196 L210 204 L199 200 Z" />
              <path d="M126 178 L137 173 L143 185 L137 198 L129 190 Z" />
            </g>

            <g stroke="#93c5fd" strokeOpacity=".15" fill="none">
              <ellipse cx="160" cy="165" rx="29" ry="57" />
              <ellipse cx="160" cy="165" rx="47" ry="57" />
              <path d="M103 165H217 M111 144H209 M111 186H209" />
            </g>
          </g>

          <circle
            cx="160"
            cy="165"
            r="59"
            fill="none"
            stroke="#7dd3fc"
            strokeOpacity=".6"
          />

          <circle cx="160" cy="165" r="66" fill="none" stroke="#60a5fa" strokeOpacity=".12" />

          <g>
            <animateMotion
              dur="12s"
              repeatCount="indefinite"
              rotate="auto"
              path="M 258,165 A 98,68 -28 1 1 62,165 A 98,68 -28 1 1 258,165"
            />
            <g transform="scale(1)">
              <path
                d="M-5 -4 L-13 -8 L-13 8 L-5 4 Z"
                fill="#3b82f6"
                stroke="#93c5fd"
                strokeWidth=".8"
              />
              <path
                d="M5 -4 L13 -8 L13 8 L5 4 Z"
                fill="#3b82f6"
                stroke="#93c5fd"
                strokeWidth=".8"
              />
              <path
                d="M-5 -3 L-3 -7 L4 -7 L6 -3 L6 4 L3 7 L-3 7 L-5 4 Z"
                fill="#e0f2fe"
                stroke="#ffffff"
                strokeWidth=".8"
              />
              <rect x="-2" y="-5" width="4" height="10" rx="1" fill="#0f3b70" />
              <circle cx="0" cy="0" r="2" fill="#67e8f9" />
            </g>
          </g>

          <g stroke="#7dd3fc" strokeOpacity=".65" strokeWidth=".8" fill="none">
            <path d="M224 90 L246 69 H285" />
            <path d="M60 230 L39 249 H18" />
          </g>

          <g fill="#bfdbfe" fontSize="8" letterSpacing="1">
            <text x="247" y="62">ORBIT PATH</text>
            <text x="18" y="262">EARTH</text>
          </g>

          <circle cx="224" cy="90" r="2" fill="#67e8f9" />
          <circle cx="60" cy="230" r="2" fill="#67e8f9" />
        </svg>

        <div className="orbital-scan pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

        <div className="relative z-20 flex items-center justify-between px-5 pb-5 text-[9px] tracking-[0.16em] text-slate-500 sm:px-6">
          <span>EARTH-CENTERED FRAME</span>
          <span>SCHEMATIC · NOT TO SCALE</span>
        </div>
      </div>

      <div className="grid grid-cols-3 border-t border-white/[0.08]">
        {[
          ["BODY", "Earth"],
          ["TRAJECTORY", "Circular"],
          ["DYNAMICS", "Two-body"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="border-r border-white/[0.08] p-4 last:border-r-0 sm:p-5"
          >
            <p className="text-[9px] tracking-[0.16em] text-slate-500">
              {label}
            </p>
            <p className="mt-2 text-xs text-slate-200">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
