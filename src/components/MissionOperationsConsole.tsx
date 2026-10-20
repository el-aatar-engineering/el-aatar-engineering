
"use client";

import { useState } from "react";

const timeline = [
  {
    id: "01",
    title: "Orbital research",
    detail: "Reference calculations and research",
    status: "Complete",
  },
  {
    id: "02",
    title: "Simulation design",
    detail: "Define model inputs and assumptions",
    status: "In development",
  },
  {
    id: "03",
    title: "Validation",
    detail: "Check results and model limitations",
    status: "Planned",
  },
  {
    id: "04",
    title: "Mission documentation",
    detail: "Record methods and conclusions",
    status: "Planned",
  },
];

const chartData = {
  velocity: {
    label: "CIRCULAR VELOCITY",
    unit: "km/s",
    values: "7.78 · 6.90 · 3.08",
    points: "0,26 28,30 56,34 84,39 112,43 140,46 168,50 196,53 224,56 252,59 280,62 308,64",
    description: "Modeled velocity decreases with increasing altitude.",
  },
  period: {
    label: "ORBITAL PERIOD",
    unit: "minutes",
    values: "88.49 · 127.20 · 1436.04",
    points: "0,66 28,63 56,59 84,55 112,50 140,44 168,38 196,31 224,24 252,16 280,9 308,2",
    description: "Modeled orbital period increases with altitude.",
  },
};

export default function MissionOperationsConsole() {
  const [chart, setChart] = useState<"velocity" | "period">("velocity");
  const selected = chartData[chart];

  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#080d19] text-white shadow-2xl shadow-black/20">
      {/* Dossier header */}
      <header className="relative border-b border-white/10 px-5 py-5 sm:px-7 sm:py-6">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.10),transparent_70%)]" />

        <div className="relative flex flex-wrap items-start justify-between gap-5">
          <div className="flex gap-4">
            <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center border border-blue-300/25 bg-blue-300/[0.05]">
              <span className="text-[9px] tracking-[0.2em] text-blue-300">
                V
              </span>
              <span className="text-xl font-light tracking-tight">001</span>
            </div>

            <div>
              <p className="text-[9px] tracking-[0.24em] text-blue-300">
                MISSION DOSSIER / VORA
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
                ORBITAL
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Orbital mechanics & mission design
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 sm:items-end">
            <span className="inline-flex items-center gap-2 border border-amber-300/20 bg-amber-300/[0.05] px-3 py-2 text-[9px] tracking-[0.13em] text-amber-200">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              CONCEPT / SIMULATION
            </span>
            <span className="text-[9px] tracking-[0.12em] text-slate-500">
              VORA-ORBIT-001
            </span>
          </div>
        </div>
      </header>

      {/* Mission summary */}
      <div className="grid divide-y divide-white/[0.08] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div className="px-5 py-4 sm:px-7">
          <p className="text-[9px] tracking-[0.18em] text-slate-500">
            RESEARCH DOMAIN
          </p>
          <p className="mt-2 text-sm text-slate-200">Orbital mechanics</p>
        </div>
        <div className="px-5 py-4 sm:px-7">
          <p className="text-[9px] tracking-[0.18em] text-slate-500">
            REFERENCE BODY
          </p>
          <p className="mt-2 text-sm text-slate-200">Earth</p>
        </div>
        <div className="px-5 py-4 sm:px-7">
          <p className="text-[9px] tracking-[0.18em] text-slate-500">
            DATA SOURCE
          </p>
          <p className="mt-2 text-sm text-slate-200">Analytical model</p>
        </div>
      </div>

      {/* Operations interface */}
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        {/* Animated chart */}
        <div className="min-w-0 border-t border-white/10 p-5 sm:p-7 lg:border-r">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[9px] tracking-[0.2em] text-blue-300">
                ANALYSIS / 001
              </p>
              <h3 className="mt-2 text-sm font-medium">
                Orbital model output
              </h3>
            </div>

            <div className="flex rounded-lg border border-white/10 p-1">
              <button
                type="button"
                onClick={() => setChart("velocity")}
                aria-pressed={chart === "velocity"}
                className={`rounded-md px-3 py-2 text-[10px] transition ${
                  chart === "velocity"
                    ? "bg-blue-400/15 text-blue-200"
                    : "text-slate-500 hover:text-white"
                }`}
              >
                Velocity
              </button>
              <button
                type="button"
                onClick={() => setChart("period")}
                aria-pressed={chart === "period"}
                className={`rounded-md px-3 py-2 text-[10px] transition ${
                  chart === "period"
                    ? "bg-blue-400/15 text-blue-200"
                    : "text-slate-500 hover:text-white"
                }`}
              >
                Period
              </button>
            </div>
          </div>

          <div className="mt-7 border border-white/[0.07] bg-[#050916] p-3 sm:p-4">
            <div className="flex flex-wrap justify-between gap-2">
              <p className="text-[9px] tracking-[0.14em] text-slate-400">
                {selected.label}
              </p>
              <p className="text-[9px] text-slate-500">
                UNIT: {selected.unit}
              </p>
            </div>

            <svg
              viewBox="0 0 320 100"
              role="img"
              aria-label={selected.description}
              className="mt-4 w-full overflow-visible"
            >
              {Array.from({ length: 6 }, (_, i) => (
                <line
                  key={`h${i}`}
                  x1="0"
                  y1={8 + i * 16}
                  x2="310"
                  y2={8 + i * 16}
                  stroke="#64748b"
                  strokeOpacity=".16"
                  strokeDasharray="3 4"
                />
              ))}

              {Array.from({ length: 9 }, (_, i) => (
                <line
                  key={`v${i}`}
                  x1={i * 38}
                  y1="4"
                  x2={i * 38}
                  y2="88"
                  stroke="#64748b"
                  strokeOpacity=".12"
                />
              ))}

              <polyline
                points={selected.points}
                fill="none"
                stroke="#60a5fa"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="500"
                className="mission-trace"
              />

              <circle r="3" fill="#bfdbfe">
                <animateMotion
                  dur="5s"
                  repeatCount="indefinite"
                  path={
                    chart === "velocity"
                      ? "M0 26 L28 30 L56 34 L84 39 L112 43 L140 46 L168 50 L196 53 L224 56 L252 59 L280 62 L308 64"
                      : "M0 66 L28 63 L56 59 L84 55 L112 50 L140 44 L168 38 L196 31 L224 24 L252 16 L280 9 L308 2"
                  }
                />
              </circle>
            </svg>

            <div className="mt-3 flex justify-between text-[9px] text-slate-500">
              <span>200 KM</span>
              <span>2,000 KM</span>
              <span>35,786 KM</span>
            </div>
          </div>

          <p className="mt-4 text-xs leading-6 text-slate-400">
            {selected.description}
          </p>

          <p className="mt-3 text-[9px] leading-5 tracking-[0.08em] text-slate-500">
            ILLUSTRATIVE TREND · ANALYTICAL RESEARCH VALUES
          </p>
        </div>

        {/* Milestones */}
        <div className="border-t border-white/10 p-5 sm:p-7">
          <p className="text-[9px] tracking-[0.2em] text-blue-300">
            DEVELOPMENT CONTROL
          </p>
          <h3 className="mt-2 text-sm font-medium">Mission milestones</h3>

          <div className="mt-6">
            {timeline.map((item, index) => (
              <div key={item.id} className="relative flex gap-4 pb-7 last:pb-0">
                {index !== timeline.length - 1 && (
                  <span className="absolute left-[13px] top-7 h-[calc(100%-12px)] w-px bg-white/10" />
                )}

                <span
                  className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center border text-[9px] ${
                    item.status === "Complete"
                      ? "border-blue-300/40 bg-blue-300/10 text-blue-200"
                      : "border-white/10 bg-[#080d19] text-slate-500"
                  }`}
                >
                  {item.id}
                </span>

                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-medium text-slate-200">
                      {item.title}
                    </p>
                    <span
                      className={`text-[9px] ${
                        item.status === "Complete"
                          ? "text-blue-300"
                          : "text-slate-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] leading-5 text-slate-500">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col gap-2 border-t border-white/10 bg-white/[0.015] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <p className="text-[9px] tracking-[0.12em] text-slate-500">
          VORA / RESEARCH & ENGINEERING
        </p>
        <p className="text-[9px] text-slate-500">
          SIMULATED INTERFACE · NOT FLIGHT OPERATIONS
        </p>
      </footer>
    </section>
  );
}
