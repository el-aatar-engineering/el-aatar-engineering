
"use client";

import { useState } from "react";
import Link from "next/link";

const AIRFOILS = {
  "NACA 0012": { clSlope: 2 * 3.14159, cd0: 0.020, k: 0.045 },
  "NACA 2412": { clSlope: 2 * 3.14159, cd0: 0.018, k: 0.040 },
  "NACA 4412": { clSlope: 2 * 3.14159, cd0: 0.022, k: 0.042 },
  "NACA 23012": { clSlope: 2 * 3.14159, cd0: 0.019, k: 0.041 },
};

type AirfoilName = keyof typeof AIRFOILS;

export default function AirfoilSimulatorPage() {
  const [airfoil, setAirfoil] = useState<AirfoilName>("NACA 2412");
  const [velocity, setVelocity] = useState("50");
  const [wingArea, setWingArea] = useState("30");
  const [density, setDensity] = useState("1.225");
  const [angle, setAngle] = useState("5");
  const [error, setError] = useState("");
  const [result, setResult] = useState<null | {
    q: number;
    cl: number;
    cd: number;
    lift: number;
    drag: number;
    ratio: number;
  }>(null);

  function calculate() {
    const v = Number(velocity);
    const s = Number(wingArea);
    const rho = Number(density);
    const degrees = Number(angle);

    if (
      ![v, s, rho, degrees].every(Number.isFinite) ||
      v <= 0 ||
      s <= 0 ||
      rho <= 0
    ) {
      setError("Enter valid numbers. Speed, wing area, and air density must be greater than zero.");
      setResult(null);
      return;
    }

    const model = AIRFOILS[airfoil];
    const q = 0.5 * rho * v ** 2;
    const alpha = (degrees * Math.PI) / 180;
    const cl = model.clSlope * alpha;
    const cd = model.cd0 + model.k * cl ** 2;

    setResult({
      q,
      cl,
      cd,
      lift: q * s * cl,
      drag: q * s * cd,
      ratio: cd > 0 ? cl / cd : 0,
    });
    setError("");
  }

  const model = AIRFOILS[airfoil];
  const curve = Array.from({ length: 24 }, (_, i) => {
    const a = -5 + i;
    return {
      angle: a,
      cl: model.clSlope * (a * Math.PI) / 180,
    };
  });

  const points = curve
    .map((p, i) => {
      const x = 42 + ((p.angle + 5) / 23) * 400;
      const y = 155 - ((p.cl + 0.7) / 2.2) * 125;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const inputClass =
    "mt-2 w-full rounded-lg border border-white/15 bg-[#080d20] px-3 py-3 text-white outline-none focus:border-blue-400";

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
        <Link
          href="/projects/vora-airfoil-engineering-suite"
          className="text-sm text-slate-400 transition hover:text-white"
        >
          ← Back to project
        </Link>

        <p className="mt-10 text-xs tracking-[0.28em] text-blue-300">
          VORA / ENGINEERING SOFTWARE
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          Airfoil Engineering Suite
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          Explore simplified aerodynamic relationships by changing airfoil
          profiles and flight parameters. Calculations run in your browser.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
            <h2 className="text-xl font-medium">Simulation parameters</h2>

            <label className="mt-6 block text-sm text-slate-300">
              Airfoil profile
              <select
                value={airfoil}
                onChange={(e) => {
                  setAirfoil(e.target.value as AirfoilName);
                  setResult(null);
                }}
                className={inputClass}
              >
                {Object.keys(AIRFOILS).map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </label>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-300">
                Airspeed (m/s)
                <input
                  className={inputClass}
                  type="number"
                  min="0.01"
                  step="any"
                  value={velocity}
                  onChange={(e) => setVelocity(e.target.value)}
                />
              </label>
              <label className="text-sm text-slate-300">
                Wing area (m²)
                <input
                  className={inputClass}
                  type="number"
                  min="0.01"
                  step="any"
                  value={wingArea}
                  onChange={(e) => setWingArea(e.target.value)}
                />
              </label>
              <label className="text-sm text-slate-300">
                Air density (kg/m³)
                <input
                  className={inputClass}
                  type="number"
                  min="0.01"
                  step="any"
                  value={density}
                  onChange={(e) => setDensity(e.target.value)}
                />
              </label>
              <label className="text-sm text-slate-300">
                Angle of attack (°)
                <input
                  className={inputClass}
                  type="number"
                  step="any"
                  value={angle}
                  onChange={(e) => setAngle(e.target.value)}
                />
              </label>
            </div>

            {error && (
              <p role="alert" className="mt-4 text-sm text-red-300">
                {error}
              </p>
            )}

            <button
              onClick={calculate}
              className="mt-6 w-full rounded-lg bg-blue-500 px-5 py-3 font-medium text-white transition hover:bg-blue-400"
            >
              Run simulation →
            </button>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
            <h2 className="text-xl font-medium">Simulation results</h2>
            <p className="mt-2 text-sm text-slate-500">
              {result ? `Profile: ${airfoil}` : "Run a simulation to calculate results."}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ["Dynamic pressure", result ? `${result.q.toFixed(2)} Pa` : "—"],
                ["Lift coefficient (CL)", result ? result.cl.toFixed(4) : "—"],
                ["Drag coefficient (CD)", result ? result.cd.toFixed(4) : "—"],
                ["Lift-to-drag ratio", result ? result.ratio.toFixed(3) : "—"],
                ["Lift", result ? `${result.lift.toFixed(2)} N` : "—"],
                ["Drag", result ? `${result.drag.toFixed(2)} N` : "—"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-[#080d20] p-4"
                >
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-2 break-words text-lg font-medium text-blue-200">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium">Simplified lift curve</h3>
              <p className="mt-1 text-xs text-slate-500">
                Lift coefficient versus angle of attack
              </p>
              <svg
                viewBox="0 0 470 190"
                role="img"
                aria-label={`Simplified lift coefficient curve for ${airfoil}`}
                className="mt-4 w-full overflow-visible"
              >
                {[30, 70, 110, 150].map((y) => (
                  <line
                    key={y}
                    x1="42"
                    y1={y}
                    x2="442"
                    y2={y}
                    stroke="rgba(255,255,255,0.10)"
                  />
                ))}
                <line x1="42" y1="12" x2="42" y2="155" stroke="#64748b" />
                <line x1="42" y1="155" x2="442" y2="155" stroke="#64748b" />
                <path d={points} fill="none" stroke="#60a5fa" strokeWidth="2.5" />
                <text x="42" y="178" fill="#94a3b8" fontSize="10">-5°</text>
                <text x="228" y="178" fill="#94a3b8" fontSize="10">5°</text>
                <text x="425" y="178" fill="#94a3b8" fontSize="10">18°</text>
                <text x="45" y="10" fill="#94a3b8" fontSize="10">CL</text>
              </svg>
            </div>
          </section>
        </div>

        <p className="mt-8 rounded-xl border border-amber-300/20 bg-amber-200/[0.04] p-4 text-sm leading-6 text-slate-400">
          Educational model only. This simulator uses predefined coefficients
          and simplified equations; it does not solve airflow using CFD and
          has not been validated for real aircraft design. Predictions can be
          inaccurate, especially near stall and outside the model assumptions.
        </p>
      </div>
    </main>
  );
}
