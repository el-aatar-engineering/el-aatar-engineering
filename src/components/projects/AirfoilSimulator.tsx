
"use client";

import { useMemo, useState } from "react";

const AIRFOILS = {
  "NACA 0012": {
    clSlope: 2 * 3.14159,
    cd0: 0.020,
    k: 0.045,
    stallAngle: 15,
  },
  "NACA 2412": {
    clSlope: 2 * 3.14159,
    cd0: 0.018,
    k: 0.040,
    stallAngle: 16,
  },
  "NACA 4412": {
    clSlope: 2 * 3.14159,
    cd0: 0.022,
    k: 0.042,
    stallAngle: 17,
  },
  "NACA 23012": {
    clSlope: 2 * 3.14159,
    cd0: 0.019,
    k: 0.041,
    stallAngle: 16,
  },
} as const;

type AirfoilName = keyof typeof AIRFOILS;

type SimulationResult =
  | { valid: false; error: string }
  | {
      valid: true;
      q: number;
      cl: number;
      cd: number;
      lift: number;
      drag: number;
      ld: number | null;
      stallAngle: number;
      aboveStallAngle: boolean;
    };

const inputClass =
  "mt-2 w-full rounded-xl border border-white/10 bg-[#080d20] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400";

const cardClass =
  "rounded-2xl border border-white/10 bg-white/[0.035] p-5";

function ResultCard({
  label,
  value,
  unit,
}: {
  label: string;
  value: string;
  unit: string;
}) {
  return (
    <div className={cardClass}>
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-white">
        {value}
      </p>
      <p className="mt-1 text-xs text-slate-500">{unit}</p>
    </div>
  );
}

export default function AirfoilSimulator() {
  const [airfoil, setAirfoil] =
    useState<AirfoilName>("NACA 2412");
  const [velocity, setVelocity] = useState("50");
  const [wingArea, setWingArea] = useState("20");
  const [density, setDensity] = useState("1.225");
  const [angle, setAngle] = useState("5");
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo<SimulationResult>(() => {
    const v = Number(velocity);
    const area = Number(wingArea);
    const rho = Number(density);
    const alpha = Number(angle);

    if (
      velocity.trim() === "" ||
      wingArea.trim() === "" ||
      density.trim() === "" ||
      angle.trim() === "" ||
      !Number.isFinite(v) ||
      !Number.isFinite(area) ||
      !Number.isFinite(rho) ||
      !Number.isFinite(alpha) ||
      v <= 0 ||
      area <= 0 ||
      rho <= 0 ||
      alpha < 0 ||
      alpha > 90
    ) {
      return {
        valid: false,
        error:
          "Enter valid values. Velocity, wing area, and density must be positive. Angle of attack must be between 0° and 90°.",
      };
    }

    const model = AIRFOILS[airfoil];
    const alphaRad = (alpha * Math.PI) / 180;
    const q = 0.5 * rho * v ** 2;
    const cl = model.clSlope * alphaRad;
    const cd = model.cd0 + model.k * cl ** 2;
    const lift = q * area * cl;
    const drag = q * area * cd;
    const ld = drag !== 0 ? lift / drag : null;

    return {
      valid: true,
      q,
      cl,
      cd,
      lift,
      drag,
      ld,
      stallAngle: model.stallAngle,
      aboveStallAngle: alpha > model.stallAngle,
    };
  }, [airfoil, velocity, wingArea, density, angle]);

  function calculate() {
    setSubmitted(true);
  }

  return (
    <section className="border-y border-white/[0.08] bg-[#050816] text-white">
      <div className="container mx-auto px-6 py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-[0.25em] text-blue-300">
            VORA / INTERACTIVE TOOL
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
            Airfoil Simulator
          </h2>

          <p className="mt-5 leading-8 text-slate-400">
            Explore how airspeed, wing area, air density, angle of attack,
            and airfoil selection affect the estimates produced by our
            simplified aerodynamic model.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* FLIGHT CONDITIONS */}
          <div className={cardClass}>
            <h3 className="text-lg font-medium">Flight conditions</h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Set your parameters and calculate the predicted values.
            </p>

            <div className="mt-6 space-y-5">
              <label className="block text-sm text-slate-300">
                Airfoil profile
                <select
                  className={inputClass}
                  value={airfoil}
                  onChange={(event) =>
                    setAirfoil(event.target.value as AirfoilName)
                  }
                >
                  {Object.keys(AIRFOILS).map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-sm text-slate-300">
                Airspeed (m/s)
                <input
                  className={inputClass}
                  type="number"
                  min="0.01"
                  step="any"
                  value={velocity}
                  onChange={(event) => setVelocity(event.target.value)}
                />
              </label>

              <label className="block text-sm text-slate-300">
                Wing area (m²)
                <input
                  className={inputClass}
                  type="number"
                  min="0.01"
                  step="any"
                  value={wingArea}
                  onChange={(event) => setWingArea(event.target.value)}
                />
              </label>

              <label className="block text-sm text-slate-300">
                Air density (kg/m³)
                <input
                  className={inputClass}
                  type="number"
                  min="0.001"
                  step="any"
                  value={density}
                  onChange={(event) => setDensity(event.target.value)}
                />
              </label>

              <label className="block text-sm text-slate-300">
                Angle of attack (degrees)
                <input
                  className={inputClass}
                  type="number"
                  min="0"
                  max="90"
                  step="any"
                  value={angle}
                  onChange={(event) => setAngle(event.target.value)}
                />
              </label>

              <button
                type="button"
                onClick={calculate}
                className="w-full rounded-xl bg-blue-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Calculate aerodynamic performance
              </button>
            </div>
          </div>

          {/* SIMULATION OUTPUT */}
          <div>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs tracking-[0.2em] text-slate-500">
                  SIMULATION OUTPUT
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  Predicted results
                </h3>
              </div>

              <span className="rounded-full border border-blue-300/20 bg-blue-300/5 px-3 py-2 text-xs text-blue-200">
                {airfoil}
              </span>
            </div>

            {!submitted ? (
              <div className="mt-6 flex min-h-72 items-center justify-center rounded-2xl border border-dashed border-white/15 p-8 text-center">
                <div>
                  <p className="text-lg font-medium text-slate-200">
                    Ready to calculate
                  </p>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">
                    Choose an airfoil, adjust the flight conditions, and
                    calculate to display the aerodynamic estimates here.
                  </p>
                </div>
              </div>
            ) : !result.valid ? (
              <div
                role="alert"
                className="mt-6 rounded-xl border border-red-400/30 bg-red-400/5 p-5 text-sm leading-7 text-red-200"
              >
                {result.error}
              </div>
            ) : (
              <>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <ResultCard
                    label="Dynamic pressure"
                    value={result.q.toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })}
                    unit="Pa"
                  />

                  <ResultCard
                    label="Lift coefficient (CL)"
                    value={result.cl.toFixed(4)}
                    unit="Dimensionless"
                  />

                  <ResultCard
                    label="Drag coefficient (CD)"
                    value={result.cd.toFixed(4)}
                    unit="Dimensionless"
                  />

                  <ResultCard
                    label="Lift force"
                    value={result.lift.toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })}
                    unit="N"
                  />

                  <ResultCard
                    label="Drag force"
                    value={result.drag.toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })}
                    unit="N"
                  />

                  <ResultCard
                    label="Lift-to-drag ratio"
                    value={
                      result.ld === null
                        ? "N/A"
                        : result.ld.toFixed(3)
                    }
                    unit="L / D"
                  />
                </div>

                {result.aboveStallAngle && (
                  <div className="mt-5 rounded-xl border border-amber-300/20 bg-amber-300/5 p-4 text-sm leading-6 text-amber-100">
                    The entered angle exceeds the configured stall-angle
                    parameter of {result.stallAngle}°. The equations still
                    return a mathematical estimate, but this linear lift
                    model does not model post-stall behavior.
                  </div>
                )}
              </>
            )}

            <p className="mt-6 text-xs leading-6 text-slate-500">
              Educational model only. These equations do not solve the
              airflow field or account for all real-world aerodynamic
              effects. Results are not validated flight-design data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
