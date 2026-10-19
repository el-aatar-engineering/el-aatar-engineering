
"use client";

import { useMemo, useState } from "react";

const MU = 398600.4418; // Earth gravitational parameter, km³/s²
const EARTH_RADIUS = 6378.137; // km

export default function OrbitalCalculator() {
  const [altitude, setAltitude] = useState(400);

  const results = useMemo(() => {
    const radius = EARTH_RADIUS + altitude;
    const speed = Math.sqrt(MU / radius);
    const periodSeconds = 2 * Math.PI * Math.sqrt(radius ** 3 / MU);

    return {
      radius,
      speed,
      periodMinutes: periodSeconds / 60,
      periodHours: periodSeconds / 3600,
    };
  }, [altitude]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080d20]">
      <div className="border-b border-white/10 p-6 sm:p-8">
        <p className="text-xs tracking-[0.22em] text-blue-300">
          ORBITAL MODEL / 01
        </p>
        <h3 className="mt-3 text-xl font-semibold text-white">
          Circular orbit calculator
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">
          Change altitude above Earth's surface to calculate the ideal circular
          orbital speed and period using a two-body model.
        </p>
      </div>

      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="flex items-center justify-between gap-3">
            <label
              htmlFor="orbital-altitude"
              className="text-sm text-slate-300"
            >
              Orbital altitude
            </label>
            <span className="font-mono text-lg text-cyan-200">
              {altitude.toLocaleString("en-US")} km
            </span>
          </div>

          <input
            id="orbital-altitude"
            type="range"
            min="160"
            max="35786"
            step="10"
            value={altitude}
            onChange={(event) => setAltitude(Number(event.target.value))}
            className="mt-6 w-full accent-cyan-300"
          />

          <div className="mt-2 flex justify-between text-xs text-slate-500">
            <span>160 km</span>
            <span>35,786 km</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              ["LEO", 400],
              ["MEO", 20200],
              ["GEO", 35786],
            ].map(([label, value]) => (
              <button
                key={label}
                type="button"
                onClick={() => setAltitude(Number(value))}
                className={`rounded-full border px-3 py-2 text-xs transition ${
                  altitude === value
                    ? "border-cyan-300/50 bg-cyan-300/10 text-cyan-200"
                    : "border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <p className="mt-8 text-xs leading-6 text-slate-500">
            Assumes a circular orbit around a spherical Earth, with no
            atmospheric drag or third-body perturbations.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Result
            label="ORBITAL RADIUS"
            value={results.radius.toLocaleString("en-US", {
              maximumFractionDigits: 2,
            })}
            unit="km from Earth's center"
          />
          <Result
            label="CIRCULAR SPEED"
            value={results.speed.toFixed(3)}
            unit="km/s"
          />
          <Result
            label="ORBITAL PERIOD"
            value={results.periodMinutes.toFixed(2)}
            unit="minutes"
          />
          <Result
            label="PERIOD IN HOURS"
            value={results.periodHours.toFixed(3)}
            unit="hours"
          />
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 sm:px-8">
        <p className="text-xs leading-6 text-slate-500">
          Equations: r = Rₑ + h · v = √(μ/r) · T = 2π√(r³/μ)
        </p>
      </div>
    </div>
  );
}

function Result({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
      <p className="text-[10px] tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <p className="mt-4 text-2xl font-medium tracking-tight text-white">
        {value}
      </p>
      <p className="mt-2 text-xs text-slate-400">{unit}</p>
    </div>
  );
}
