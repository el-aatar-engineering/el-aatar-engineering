
"use client";

import { useState } from "react";

export default function FlightDynamicsVisual() {
  const [thrust, setThrust] = useState(4000);
  const [drag, setDrag] = useState(1000);
  const [lift, setLift] = useState(11772);
  const [mass, setMass] = useState(1200);

  const weight = mass * 9.80665;
  const horizontalNet = thrust - drag;
  const verticalNet = lift - weight;
  const horizontalAcceleration = horizontalNet / mass;
  const verticalAcceleration = verticalNet / mass;

  const horizontalLength = Math.min(Math.abs(horizontalNet) / 120, 90);
  const verticalLength = Math.min(Math.abs(verticalNet) / 120, 90);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080d20]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 p-5 sm:p-6">
        <div>
          <p className="text-[10px] tracking-[0.22em] text-blue-300">
            FLIGHT MODEL / 02
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">
            Aircraft force visualization
          </h3>
        </div>
        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1.5 text-[9px] tracking-[0.15em] text-cyan-200">
          IDEALIZED MODEL
        </span>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(125,180,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(125,180,255,.18) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <svg
          viewBox="0 0 520 310"
          className="relative z-10 w-full"
          role="img"
          aria-label="Aircraft illustration with thrust, drag, lift, and weight vectors"
        >
          <defs>
            <linearGradient id="aircraftMetal" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#eff6ff" />
              <stop offset="48%" stopColor="#8daed5" />
              <stop offset="100%" stopColor="#38567d" />
            </linearGradient>
            <filter id="aircraftGlow">
              <feGaussianBlur stdDeviation="4" />
            </filter>
            <marker
              id="thrustArrow"
              markerWidth="7"
              markerHeight="7"
              refX="5"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L6,3 L0,6 Z" fill="#67e8f9" />
            </marker>
            <marker
              id="dragArrow"
              markerWidth="7"
              markerHeight="7"
              refX="5"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L6,3 L0,6 Z" fill="#fb7185" />
            </marker>
            <marker
              id="liftArrow"
              markerWidth="7"
              markerHeight="7"
              refX="5"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L6,3 L0,6 Z" fill="#4ade80" />
            </marker>
            <marker
              id="weightArrow"
              markerWidth="7"
              markerHeight="7"
              refX="5"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24" />
            </marker>
          </defs>

          {Array.from({ length: 13 }, (_, i) => (
            <g key={i} opacity=".25">
              <circle
                cx={20 + i * 40}
                cy={35 + ((i * 31) % 235)}
                r={i % 3 === 0 ? 1.5 : 0.8}
                fill="#93c5fd"
              />
            </g>
          ))}

          <line
            x1="30"
            y1="155"
            x2="490"
            y2="155"
            stroke="#94a3b8"
            strokeOpacity=".18"
            strokeDasharray="5 7"
          />

          {/* Aircraft silhouette */}
          <g transform="translate(260 155)">
            <ellipse
              cx="0"
              cy="0"
              rx="95"
              ry="48"
              fill="#60a5fa"
              opacity=".08"
              filter="url(#aircraftGlow)"
            />

            <path
              d="M-94 -5 L-48 -10 L-20 -62 L-7 -65 L-15 -9 L53 -4 L76 -22 L85 -21 L78 -2 L85 9 L76 11 L53 5 L-15 9 L-7 65 L-20 62 L-48 10 L-94 5 Z"
              fill="url(#aircraftMetal)"
              stroke="#dbeafe"
              strokeWidth="1.2"
            />

            <path
              d="M-83 -2 L-28 -2 L-17 -48 L-12 -48 L-16 -2 L54 -2 L73 -15 L76 -14 L69 0 L76 14 L73 15 L54 2 L-16 2 L-12 48 L-17 48 L-28 2 L-83 2 Z"
              fill="#3d5d85"
              opacity=".6"
            />

            <path
              d="M-94 -5 L-103 -1 L-103 1 L-94 5 Z"
              fill="#fb7185"
            />

            <circle cx="24" cy="0" r="3" fill="#67e8f9" />
          </g>

          {/* Thrust vector */}
          <line
            x1="165"
            y1="155"
            x2={165 - Math.max(20, horizontalLength)}
            y2="155"
            stroke="#67e8f9"
            strokeWidth="2.5"
            markerEnd="url(#thrustArrow)"
            opacity={thrust > 0 ? 1 : 0.25}
          />
          <text x="62" y="140" fill="#67e8f9" fontSize="12">
            THRUST
          </text>

          {/* Drag vector */}
          <line
            x1="355"
            y1="155"
            x2={355 + Math.max(20, Math.min(drag / 120, 90))}
            y2="155"
            stroke="#fb7185"
            strokeWidth="2.5"
            markerEnd="url(#dragArrow)"
            opacity={drag > 0 ? 1 : 0.25}
          />
          <text x="386" y="140" fill="#fb7185" fontSize="12">
            DRAG
          </text>

          {/* Lift vector */}
          <line
            x1="260"
            y1="112"
            x2={260}
            y2={112 - Math.max(20, verticalLength)}
            stroke="#4ade80"
            strokeWidth="2.5"
            markerEnd="url(#liftArrow)"
            opacity={lift > 0 ? 1 : 0.25}
          />
          <text x="273" y="82" fill="#4ade80" fontSize="12">
            LIFT
          </text>

          {/* Weight vector */}
          <line
            x1="260"
            y1="198"
            x2={260}
            y2={198 + Math.max(20, Math.min(weight / 180, 80))}
            stroke="#fbbf24"
            strokeWidth="2.5"
            markerEnd="url(#weightArrow)"
          />
          <text x="273" y="252" fill="#fbbf24" fontSize="12">
            WEIGHT
          </text>

          <text x="20" y="24" fill="#64748b" fontSize="9" letterSpacing="1.4">
            FORCE VECTOR SCHEMATIC
          </text>
          <text x="500" y="292" fill="#64748b" fontSize="9" textAnchor="end">
            NOT TO SCALE
          </text>
        </svg>
      </div>

      <div className="grid gap-6 border-t border-white/10 p-5 sm:p-6 lg:grid-cols-2">
        <div className="space-y-5">
          <Parameter
            label="Thrust"
            value={thrust}
            max={30000}
            step={250}
            unit="N"
            onChange={setThrust}
          />
          <Parameter
            label="Drag"
            value={drag}
            max={15000}
            step={250}
            unit="N"
            onChange={setDrag}
          />
          <Parameter
            label="Lift"
            value={lift}
            max={30000}
            step={250}
            unit="N"
            onChange={setLift}
          />
          <Parameter
            label="Mass"
            value={mass}
            max={10000}
            step={100}
            unit="kg"
            onChange={setMass}
          />
        </div>

        <div className="grid content-start gap-3 sm:grid-cols-2">
          <Metric
            label="HORIZONTAL NET FORCE"
            value={`${horizontalNet.toLocaleString("en-US")} N`}
          />
          <Metric
            label="HORIZONTAL ACCELERATION"
            value={`${horizontalAcceleration.toFixed(3)} m/s²`}
          />
          <Metric
            label="VERTICAL NET FORCE"
            value={`${verticalNet.toLocaleString("en-US", {
              maximumFractionDigits: 1,
            })} N`}
          />
          <Metric
            label="VERTICAL ACCELERATION"
            value={`${verticalAcceleration.toFixed(3)} m/s²`}
          />
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-4 sm:px-6">
        <p className="text-xs leading-6 text-slate-500">
          Arrow lengths are illustrative and capped for display. Values show
          the force-balance model, not a full aerodynamic or flight simulation.
        </p>
      </div>
    </div>
  );
}

function Parameter({
  label,
  value,
  max,
  step,
  unit,
  onChange,
}: {
  label: string;
  value: number;
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
        min={0}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-3 w-full accent-cyan-300"
      />
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
      <p className="text-[9px] tracking-[0.12em] text-slate-500">{label}</p>
      <p className="mt-3 break-words text-lg font-medium text-white">{value}</p>
    </div>
  );
}
