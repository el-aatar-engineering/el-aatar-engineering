
"use client";

import { useMemo, useState } from "react";

export default function PropulsionChart() {
  const [exhaustVelocity, setExhaustVelocity] = useState("2500");
  const [initialMass, setInitialMass] = useState("1000");

  const velocity = Number(exhaustVelocity);
  const mass = Number(initialMass);

  const valid =
    exhaustVelocity.trim() !== "" &&
    initialMass.trim() !== "" &&
    Number.isFinite(velocity) &&
    Number.isFinite(mass) &&
    velocity > 0 &&
    mass > 0;

  const points = useMemo(() => {
    if (!valid) return [];

    return [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9].map(
      (fraction) => ({
        fraction,
        finalMass: mass * fraction,
        deltaV: (velocity * Math.log(1 / fraction)) / 1000,
      })
    );
  }, [valid, velocity, mass]);

  const maxDeltaV = Math.max(...points.map((point) => point.deltaV), 1);

  return (
    <div className="rounded-2xl border border-white/10 bg-[#080d20] p-6 sm:p-8">
      <p className="text-xs tracking-[0.22em] text-blue-300">
        PERFORMANCE EXPLORER
      </p>

      <h3 className="mt-4 text-xl font-medium">
        Mass ratio vs. ideal delta-v
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        Explore how the remaining vehicle mass affects ideal velocity change
        when effective exhaust velocity is held constant.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-slate-300">
            Exhaust velocity (m/s)
          </span>
          <input
            type="number"
            min="1"
            value={exhaustVelocity}
            onChange={(event) => setExhaustVelocity(event.target.value)}
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-blue-300/60"
          />
        </label>

        <label className="block">
          <span className="text-sm text-slate-300">
            Initial mass (kg)
          </span>
          <input
            type="number"
            min="1"
            value={initialMass}
            onChange={(event) => setInitialMass(event.target.value)}
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-blue-300/60"
          />
        </label>
      </div>

      {!valid ? (
        <p className="mt-6 text-sm text-amber-200">
          Enter positive values for both inputs to display the chart.
        </p>
      ) : (
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between text-xs text-slate-500">
            <span>FINAL MASS / INITIAL MASS</span>
            <span>IDEAL Δv (km/s)</span>
          </div>

          <div className="space-y-5">
            {points.map((point) => (
              <div key={point.fraction}>
                <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                  <span className="text-slate-300">
                    {(point.fraction * 100).toFixed(0)}% remaining
                  </span>
                  <span className="font-medium tabular-nums text-blue-200">
                    {point.deltaV.toFixed(3)} km/s
                  </span>
                </div>

                <div
                  className="h-2.5 overflow-hidden rounded-full bg-white/[0.07]"
                  role="img"
                  aria-label={`${(point.fraction * 100).toFixed(0)} percent remaining: ${point.deltaV.toFixed(3)} kilometers per second ideal delta-v`}
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-300 transition-all duration-300"
                    style={{
                      width: `${(point.deltaV / maxDeltaV) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-7 text-xs leading-6 text-slate-500">
            The initial mass is held constant. Each bar represents an ideal
            calculation using Δv = vₑ ln(m₀/mf). The model excludes gravity,
            atmospheric drag, and engine-performance losses.
          </p>
        </div>
      )}
    </div>
  );
}
