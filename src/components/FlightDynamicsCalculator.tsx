
"use client";

import { useMemo, useState } from "react";

export default function FlightDynamicsCalculator() {
  const [mass, setMass] = useState(1200);
  const [thrust, setThrust] = useState(4000);
  const [drag, setDrag] = useState(1000);
  const [lift, setLift] = useState(11772);

  const results = useMemo(() => {
    const netHorizontalForce = thrust - drag;
    const horizontalAcceleration = netHorizontalForce / mass;
    const netVerticalForce = lift - mass * 9.80665;
    const verticalAcceleration = netVerticalForce / mass;

    return {
      netHorizontalForce,
      horizontalAcceleration,
      netVerticalForce,
      verticalAcceleration,
      weight: mass * 9.80665,
    };
  }, [mass, thrust, drag, lift]);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080d20]">
      <div className="border-b border-white/10 p-6 sm:p-8">
        <p className="text-xs tracking-[0.22em] text-blue-300">
          FLIGHT MODEL / 01
        </p>
        <h3 className="mt-3 text-xl font-semibold text-white">
          Aircraft force and acceleration calculator
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">
          Adjust the example aircraft parameters to explore how horizontal
          thrust and drag, and vertical lift and weight, affect acceleration.
        </p>
      </div>

      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-7">
          <Parameter
            label="Aircraft mass"
            value={mass}
            min={500}
            max={10000}
            step={100}
            unit="kg"
            onChange={setMass}
          />
          <Parameter
            label="Thrust"
            value={thrust}
            min={0}
            max={30000}
            step={250}
            unit="N"
            onChange={setThrust}
          />
          <Parameter
            label="Drag"
            value={drag}
            min={0}
            max={15000}
            step={250}
            unit="N"
            onChange={setDrag}
          />
          <Parameter
            label="Lift"
            value={lift}
            min={0}
            max={30000}
            step={250}
            unit="N"
            onChange={setLift}
          />

          <button
            type="button"
            onClick={() => {
              setMass(1200);
              setThrust(4000);
              setDrag(1000);
              setLift(11772);
            }}
            className="rounded-full border border-white/15 px-4 py-2 text-xs text-slate-300 transition hover:border-blue-300/50 hover:text-white"
          >
            Reset example values
          </button>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-slate-500">
            CALCULATED OUTPUTS
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Result
              label="NET HORIZONTAL FORCE"
              value={results.netHorizontalForce.toLocaleString("en-US")}
              unit="N"
            />
            <Result
              label="HORIZONTAL ACCELERATION"
              value={results.horizontalAcceleration.toFixed(3)}
              unit="m/s²"
            />
            <Result
              label="WEIGHT"
              value={results.weight.toLocaleString("en-US", {
                maximumFractionDigits: 1,
              })}
              unit="N"
            />
            <Result
              label="NET VERTICAL FORCE"
              value={results.netVerticalForce.toLocaleString("en-US", {
                maximumFractionDigits: 1,
              })}
              unit="N"
            />
            <Result
              label="VERTICAL ACCELERATION"
              value={results.verticalAcceleration.toFixed(3)}
              unit="m/s²"
            />
            <Result
              label="GRAVITY"
              value="9.807"
              unit="m/s² downward"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 sm:px-8">
        <p className="text-xs leading-6 text-slate-500">
          Model: aₓ = (thrust − drag) / mass; aᵧ = (lift − weight) / mass.
          Positive vertical acceleration is upward. Forces are treated as
          independent, user-specified inputs.
        </p>
      </div>
    </div>
  );
}

function Parameter({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <label className="text-sm text-slate-300">{label}</label>
        <span className="font-mono text-sm text-cyan-200">
          {value.toLocaleString("en-US")} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-4 w-full accent-cyan-300"
      />
      <div className="mt-1 flex justify-between text-xs text-slate-500">
        <span>{min.toLocaleString("en-US")}</span>
        <span>{max.toLocaleString("en-US")} {unit}</span>
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
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 sm:p-5">
      <p className="text-[9px] tracking-[0.15em] text-slate-500">{label}</p>
      <p className="mt-3 break-words text-2xl font-medium tracking-tight text-white">
        {value}
      </p>
      <p className="mt-1 text-xs text-slate-400">{unit}</p>
    </div>
  );
}
