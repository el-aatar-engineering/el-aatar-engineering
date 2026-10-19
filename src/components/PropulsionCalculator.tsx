
"use client";

import { useState } from "react";

export default function PropulsionCalculator() {
  const [massFlow, setMassFlow] = useState("5");
  const [exhaustVelocity, setExhaustVelocity] = useState("2500");
  const [initialMass, setInitialMass] = useState("1000");
  const [finalMass, setFinalMass] = useState("600");

  const flow = Number(massFlow);
  const velocity = Number(exhaustVelocity);
  const initial = Number(initialMass);
  const final = Number(finalMass);

  const valid =
    massFlow.trim() !== "" &&
    exhaustVelocity.trim() !== "" &&
    initialMass.trim() !== "" &&
    finalMass.trim() !== "" &&
    Number.isFinite(flow) &&
    Number.isFinite(velocity) &&
    Number.isFinite(initial) &&
    Number.isFinite(final) &&
    flow > 0 &&
    velocity > 0 &&
    initial > 0 &&
    final > 0 &&
    final < initial;

  const thrust = valid ? flow * velocity : 0;
  const specificImpulse = valid ? velocity / 9.80665 : 0;
  const deltaV = valid ? velocity * Math.log(initial / final) : 0;

  const fields = [
    {
      label: "Propellant mass flow",
      unit: "kg/s",
      value: massFlow,
      setter: setMassFlow,
      step: "0.1",
    },
    {
      label: "Effective exhaust velocity",
      unit: "m/s",
      value: exhaustVelocity,
      setter: setExhaustVelocity,
      step: "10",
    },
    {
      label: "Initial vehicle mass",
      unit: "kg",
      value: initialMass,
      setter: setInitialMass,
      step: "10",
    },
    {
      label: "Final vehicle mass",
      unit: "kg",
      value: finalMass,
      setter: setFinalMass,
      step: "10",
    },
  ];

  const results = [
    {
      label: "Ideal thrust",
      value: valid ? (thrust / 1000).toFixed(3) : "—",
      unit: "kN",
      equation: "F = ṁvₑ",
    },
    {
      label: "Specific impulse",
      value: valid ? specificImpulse.toFixed(2) : "—",
      unit: "s",
      equation: "Isp = vₑ / g₀",
    },
    {
      label: "Ideal delta-v",
      value: valid ? (deltaV / 1000).toFixed(3) : "—",
      unit: "km/s",
      equation: "Δv = vₑ ln(m₀/mf)",
    },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-2xl border border-white/10 bg-[#080d20] p-6 sm:p-8">
        <p className="text-xs tracking-[0.22em] text-blue-300">
          MODEL INPUTS
        </p>

        <h3 className="mt-4 text-xl font-medium">
          Define the propulsion system
        </h3>

        <div className="mt-7 space-y-6">
          {fields.map((field) => (
            <label key={field.label} className="block">
              <span className="text-sm text-slate-300">
                {field.label}
              </span>

              <div className="mt-2 flex items-center rounded-lg border border-white/10 bg-white/[0.03] focus-within:border-blue-300/60">
                <input
                  type="number"
                  min="0"
                  step={field.step}
                  value={field.value}
                  onChange={(event) => field.setter(event.target.value)}
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-white outline-none"
                />
                <span className="px-4 text-sm text-slate-500">
                  {field.unit}
                </span>
              </div>
            </label>
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            setMassFlow("5");
            setExhaustVelocity("2500");
            setInitialMass("1000");
            setFinalMass("600");
          }}
          className="mt-7 rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-300 transition hover:border-blue-300 hover:text-white"
        >
          Reset example values
        </button>
      </div>

      <div className="rounded-2xl border border-blue-300/15 bg-blue-400/[0.03] p-6 sm:p-8">
        <p className="text-xs tracking-[0.22em] text-blue-300">
          COMPUTED OUTPUTS
        </p>

        <h3 className="mt-4 text-xl font-medium">
          Propulsion performance
        </h3>

        {!valid && (
          <p
            role="alert"
            className="mt-5 rounded-lg border border-amber-300/20 bg-amber-300/[0.05] p-4 text-sm leading-6 text-amber-200"
          >
            Enter positive values for every input. Final vehicle mass must
            be smaller than initial vehicle mass.
          </p>
        )}

        <div className="mt-7 space-y-4">
          {results.map((result) => (
            <div
              key={result.label}
              className="rounded-xl border border-white/[0.08] bg-[#050816]/70 p-5"
            >
              <p className="text-sm text-slate-400">
                {result.label}
              </p>

              <div className="mt-3 flex flex-wrap items-baseline gap-2">
                <span className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {result.value}
                </span>
                <span className="text-sm text-blue-200">
                  {result.unit}
                </span>
              </div>

              <code className="mt-3 block text-xs text-slate-500">
                {result.equation}
              </code>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm leading-7 text-slate-400">
          These are idealized estimates. Thrust excludes nozzle pressure
          thrust, and delta-v assumes constant effective exhaust velocity
          with no gravity or aerodynamic losses.
        </p>
      </div>
    </div>
  );
}
