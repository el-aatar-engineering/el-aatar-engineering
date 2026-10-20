
"use client";

import { useState } from "react";

type SimulationSample = {
  time_s: number;
  altitude_m: number;
  speed_m_s: number;
  mass_kg: number;
};

type SimulationResult = {
  samples: SimulationSample[];
  peak_altitude_m: number;
  maximum_speed_m_s: number;
  final_mass_kg: number;
  message?: string;
};

const inputClass =
  "mt-2 w-full rounded-lg border border-white/10 bg-[#080d20] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400";

export default function AerodyneMissionDetails() {
  const [initialMass, setInitialMass] = useState("12");
  const [dryMass, setDryMass] = useState("8");
  const [thrust, setThrust] = useState("180");
  const [burnDuration, setBurnDuration] = useState("2");
  const [timeStep, setTimeStep] = useState("0.02");
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function runSimulation() {
    setError("");
    setResult(null);

    const values = [
      Number(initialMass),
      Number(dryMass),
      Number(thrust),
      Number(burnDuration),
      Number(timeStep),
    ];

    if (
      values.some((value) => !Number.isFinite(value)) ||
      Number(initialMass) <= 0 ||
      Number(dryMass) <= 0 ||
      Number(dryMass) > Number(initialMass) ||
      Number(thrust) < 0 ||
      Number(burnDuration) <= 0 ||
      Number(timeStep) <= 0 ||
      Number(timeStep) > 0.1
    ) {
      setError(
        "Check your inputs. Masses and burn duration must be positive, dry mass cannot exceed initial mass, thrust cannot be negative, and the time step must be above zero and at most 0.1 seconds."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/aerodyne/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          initial_mass_kg: Number(initialMass),
          dry_mass_kg: Number(dryMass),
          thrust_n: Number(thrust),
          burn_duration_s: Number(burnDuration),
          time_step_s: Number(timeStep),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "The simulation service returned an error."
        );
      }

      if (
        !Array.isArray(data.samples) ||
        data.samples.length === 0 ||
        !Number.isFinite(data.peak_altitude_m) ||
        !Number.isFinite(data.maximum_speed_m_s) ||
        !Number.isFinite(data.final_mass_kg)
      ) {
        throw new Error("The simulation returned an invalid result.");
      }

      setResult(data as SimulationResult);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to reach the simulation service."
      );
    } finally {
      setLoading(false);
    }
  }

  function downloadCSV() {
    if (!result) return;

    const header = "time_s,altitude_m,speed_m_s,mass_kg";
    const rows = result.samples.map((sample) =>
      [
        sample.time_s,
        sample.altitude_m,
        sample.speed_m_s,
        sample.mass_kg,
      ].join(",")
    );

    const blob = new Blob([[header, ...rows].join("\n")], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "aerodyne-mission-001-trajectory.csv";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  const maxAltitude =
    result && result.samples.length
      ? Math.max(
          1,
          ...result.samples.map((sample) => sample.altitude_m)
        )
      : 1;

  const maxTime =
    result && result.samples.length
      ? Math.max(
          1,
          ...result.samples.map((sample) => sample.time_s)
        )
      : 1;

  return (
    <>
      {/* Mission hero */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_25%,rgba(37,99,235,0.2),transparent_45%),radial-gradient(ellipse_at_10%_90%,rgba(99,102,241,0.12),transparent_45%)]" />

        <div className="container relative mx-auto px-6 py-20 sm:py-28">
          <a
            href="/projects"
            className="text-xs tracking-[0.18em] text-slate-400 transition hover:text-white"
          >
            ← BACK TO PROJECTS
          </a>

          <div className="mt-12 max-w-4xl">
            <p className="text-xs tracking-[0.28em] text-blue-300">
              VORA / MISSION 001 / VORA-FD-001
            </p>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
              AERODYNE
              <span className="mt-3 block text-2xl font-normal text-blue-200 sm:text-3xl">
                Flight Dynamics & Trajectory Simulation
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Developing a configurable computational model to explore
              research-rocket motion, propulsion, atmospheric drag, and
              trajectory evolution.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "3D point-mass model",
                "Configurable thrust",
                "Atmospheric drag",
                "Numerical integration",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                ["MISSION", "VORA-FD-001"],
                ["METHOD", "Computational modeling"],
                ["STATUS", "In development"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="border-t border-white/15 pt-4"
                >
                  <p className="text-[10px] tracking-[0.2em] text-slate-500">
                    {label}
                  </p>
                  <p className="mt-2 text-sm text-slate-200">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objective and model */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto grid gap-10 px-6 py-20 lg:grid-cols-[0.65fr_1.35fr] lg:py-24">
          <div>
            <p className="text-xs tracking-[0.25em] text-blue-300">
              01 / MISSION OBJECTIVE
            </p>
            <h2 className="mt-5 text-3xl font-semibold">
              Model the trajectory. Verify the results.
            </h2>
          </div>

          <div className="max-w-3xl space-y-5 leading-8 text-slate-400">
            <p>
              AERODYNE aims to simulate the translational motion of a
              research-rocket model under prescribed thrust, gravity,
              atmospheric density, aerodynamic drag, and propellant
              consumption.
            </p>
            <p>
              The model uses a local East-North-Up coordinate frame and
              numerical integration to calculate how position, velocity,
              and mass change over time.
            </p>
            <p>
              This is a computational research project, not a real flight.
              Its results must pass verification and remain within documented
              model limits before they can be considered reliable for any
              intended application.
            </p>
          </div>
        </div>
      </section>

      {/* Equations */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-20 lg:py-24">
          <p className="text-xs tracking-[0.25em] text-blue-300">
            02 / MATHEMATICAL MODEL
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Governing relationships
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Translational motion",
                equation: "dr/dt = v",
                description: "Position changes according to velocity.",
              },
              {
                title: "Acceleration",
                equation: "dv/dt = Fnet / m",
                description:
                  "Net thrust, drag, and gravity determine acceleration.",
              },
              {
                title: "Aerodynamic drag",
                equation: "FD = −½ ρ CD A |vrel| vrel",
                description:
                  "Drag opposes velocity relative to the modeled air.",
              },
              {
                title: "Propellant consumption",
                equation: "dm/dt = −T / (Isp g₀)",
                description:
                  "Mass decreases during powered flight according to the modeled thrust and specific impulse.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/10 bg-[#080d20] p-6 sm:p-8"
              >
                <h3 className="text-lg font-medium">{item.title}</h3>
                <div className="mt-5 overflow-x-auto rounded-lg border border-blue-300/15 bg-blue-400/[0.04] px-4 py-5">
                  <code className="whitespace-nowrap text-blue-200">
                    {item.equation}
                  </code>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive simulator */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto px-6 py-20 lg:py-24">
          <p className="text-xs tracking-[0.25em] text-blue-300">
            03 / INTERACTIVE SIMULATOR
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Configure a simulation
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Set the model inputs below. Results will appear once the
            simulation backend is connected and returns verified output.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-2xl border border-white/10 bg-[#080d20] p-6 sm:p-8">
              <h3 className="text-lg font-medium">Scenario parameters</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Illustrative software-test inputs only. These are not
                recommended real-rocket design values.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="text-sm text-slate-300">
                  Initial mass (kg)
                  <input
                    className={inputClass}
                    type="number"
                    min="0.01"
                    step="0.1"
                    value={initialMass}
                    onChange={(e) => setInitialMass(e.target.value)}
                  />
                </label>

                <label className="text-sm text-slate-300">
                  Dry mass (kg)
                  <input
                    className={inputClass}
                    type="number"
                    min="0.01"
                    step="0.1"
                    value={dryMass}
                    onChange={(e) => setDryMass(e.target.value)}
                  />
                </label>

                <label className="text-sm text-slate-300">
                  Thrust (N)
                  <input
                    className={inputClass}
                    type="number"
                    min="0"
                    step="1"
                    value={thrust}
                    onChange={(e) => setThrust(e.target.value)}
                  />
                </label>

                <label className="text-sm text-slate-300">
                  Burn duration (s)
                  <input
                    className={inputClass}
                    type="number"
                    min="0.01"
                    step="0.1"
                    value={burnDuration}
                    onChange={(e) => setBurnDuration(e.target.value)}
                  />
                </label>

                <label className="text-sm text-slate-300 sm:col-span-2">
                  Integration time step (s)
                  <input
                    className={inputClass}
                    type="number"
                    min="0.001"
                    max="0.1"
                    step="0.005"
                    value={timeStep}
                    onChange={(e) => setTimeStep(e.target.value)}
                  />
                  <span className="mt-2 block text-xs text-slate-500">
                    Smaller steps increase computation time.
                  </span>
                </label>
              </div>

              <button
                type="button"
                onClick={runSimulation}
                disabled={loading}
                className="mt-8 w-full rounded-full bg-blue-500 px-6 py-4 text-sm font-medium text-white transition hover:bg-blue-400 disabled:cursor-wait disabled:opacity-60"
              >
                {loading ? "Running simulation..." : "Run simulation"}
              </button>

              {error && (
                <p
                  role="alert"
                  className="mt-5 rounded-lg border border-red-400/20 bg-red-400/[0.06] p-4 text-sm leading-6 text-red-200"
                >
                  {error}
                </p>
              )}
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#080d20] p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-medium">Simulation output</h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Computed results will appear here.
                  </p>
                </div>
                <span className="rounded-full border border-amber-300/20 px-3 py-1.5 text-xs text-amber-200">
                  Backend required
                </span>
              </div>

              {!result ? (
                <div className="mt-8 flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-white/10 px-6 text-center">
                  <div className="text-4xl text-blue-300/70">∿</div>
                  <p className="mt-4 font-medium text-slate-300">
                    Awaiting simulation data
                  </p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    The interface is ready, but the API must be implemented
                    and connected before numerical results can be generated.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {[
                      [
                        "PEAK ALTITUDE",
                        `${result.peak_altitude_m.toFixed(2)} m`,
                      ],
                      [
                        "MAXIMUM SPEED",
                        `${result.maximum_speed_m_s.toFixed(2)} m/s`,
                      ],
                      ["FINAL MASS", `${result.final_mass_kg.toFixed(2)} kg`],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-xl border border-white/10 p-4"
                      >
                        <p className="text-[10px] tracking-wider text-slate-500">
                          {label}
                        </p>
                        <p className="mt-3 text-lg font-medium text-blue-200">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-xl border border-white/10 p-4">
                    <p className="text-sm text-slate-300">
                      Altitude history
                    </p>
                    <svg
                      viewBox="0 0 600 220"
                      role="img"
                      aria-label="Calculated altitude versus time"
                      className="mt-4 w-full"
                    >
                      <path
                        d="M40 15 V185 H580"
                        fill="none"
                        stroke="#475569"
                        strokeWidth="1"
                      />
                      {[55, 95, 135, 175].map((y) => (
                        <line
                          key={y}
                          x1="40"
                          x2="580"
                          y1={y}
                          y2={y}
                          stroke="#334155"
                          strokeDasharray="4 5"
                        />
                      ))}
                      <polyline
                        points={result.samples
                          .map((sample) => {
                            const x =
                              40 + (sample.time_s / maxTime) * 530;
                            const y =
                              175 - (sample.altitude_m / maxAltitude) * 155;
                            return `${x},${y}`;
                          })
                          .join(" ")}
                        fill="none"
                        stroke="#60a5fa"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-xs text-slate-500">
                      Time (s) along the horizontal axis; altitude (m) is
                      scaled vertically.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={downloadCSV}
                    className="mt-5 rounded-full border border-white/15 px-5 py-3 text-sm transition hover:border-blue-300"
                  >
                    Export trajectory CSV
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Assumptions */}
      <section className="border-b border-white/[0.08]">
        <div className="container mx-auto grid gap-10 px-6 py-20 lg:grid-cols-[0.65fr_1.35fr] lg:py-24">
          <div>
            <p className="text-xs tracking-[0.25em] text-blue-300">
              04 / LIMITATIONS
            </p>
            <h2 className="mt-5 text-3xl font-semibold">
              Defined model boundaries
            </h2>
          </div>
          <div className="space-y-4 leading-8 text-slate-400">
            <p>
              The planned model uses prescribed thrust direction, a
              simplified atmospheric density model, constant drag
              coefficient and reference area, and a local coordinate frame.
            </p>
            <p>
              It does not currently model vehicle attitude, aerodynamic lift,
              Earth rotation, wind, staging, or active guidance. Its
              assumptions limit how its outputs should be interpreted.
            </p>
            <p>
              Software tests are not equivalent to flight validation.
              Results must be checked against analytical cases, numerical
              convergence tests, and documented model limitations.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto flex flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/projects"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            ← All projects
          </a>
          <a
            href="/research"
            className="text-sm text-slate-400 transition hover:text-white"
          >
            Explore VORA research →
          </a>
        </div>
      </section>
    </>
  );
}
