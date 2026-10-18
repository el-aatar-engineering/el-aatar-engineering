
"use client";

import { useEffect, useState } from "react";

const stages = [
  { name: "CONCEPT", detail: "Define mission objectives", progress: "01" },
  { name: "DESIGN", detail: "Develop system architecture", progress: "02" },
  { name: "SIMULATION", detail: "Evaluate mission scenarios", progress: "03" },
  { name: "TEST", detail: "Verify system behavior", progress: "04" },
  { name: "MISSION", detail: "Prepare for execution", progress: "05" },
];

export default function MissionVisualization() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStage((current) => (current + 1) % stages.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="mission-visual">
      <div className="mission-visual-header">
        <div>
          <span className="mission-eyebrow">VORA / FLIGHT SYSTEMS</span>
          <h3>MISSION CONTROL</h3>
        </div>
        <span className="mission-status">
          <span className="mission-status-dot" />
          CONCEPT MODE
        </span>
      </div>

      <div className="mission-orbit-scene">
        <div className="mission-coordinate">
          <span>TRAJECTORY</span>
          <strong>EARTH → ORBIT</strong>
        </div>

        <svg
          className="mission-orbit-svg"
          viewBox="0 0 600 340"
          fill="none"
          role="img"
          aria-label="Illustrative spacecraft following a trajectory from Earth toward orbit"
        >
          <defs>
            <linearGradient id="missionEarth" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7dd3fc" />
              <stop offset="100%" stopColor="#164e85" />
            </linearGradient>
            <linearGradient id="missionTrail" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.95" />
            </linearGradient>
            <radialGradient id="missionGlow">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="145" cy="287" r="112" fill="url(#missionGlow)" />
          <circle cx="145" cy="310" r="88" fill="url(#missionEarth)" />
          <ellipse
            cx="145"
            cy="310"
            rx="116"
            ry="36"
            stroke="#7dd3fc"
            strokeOpacity=".35"
            transform="rotate(-24 145 310)"
          />
          <path
            d="M61 288 Q91 266 110 287 T157 286 T217 276"
            stroke="#b9e7ff"
            strokeOpacity=".45"
            strokeWidth="2"
          />
          <path
            d="M77 326 Q106 302 129 322 T183 318"
            stroke="#b9e7ff"
            strokeOpacity=".3"
            strokeWidth="2"
          />

          <path
            d="M105 242 Q226 80 395 109 T535 66"
            stroke="#64748b"
            strokeOpacity=".4"
            strokeDasharray="4 8"
          />
          <path
            className="mission-trajectory"
            d="M105 242 Q226 80 395 109 T535 66"
            stroke="url(#missionTrail)"
            strokeWidth="2"
            strokeDasharray="7 9"
          />

          <ellipse
            cx="395"
            cy="109"
            rx="105"
            ry="39"
            stroke="#38bdf8"
            strokeOpacity=".35"
            transform="rotate(-22 395 109)"
          />
          <ellipse
            cx="395"
            cy="109"
            rx="130"
            ry="52"
            stroke="#38bdf8"
            strokeOpacity=".14"
            transform="rotate(-22 395 109)"
          />

          <g className="mission-spacecraft" transform="translate(395 109) rotate(-22)">
            <path d="M-19 -5 L-7 -5 L0 -13 L7 -5 L19 -5 L14 5 L-14 5 Z" fill="#dbeafe" />
            <path d="M-5 -5 L0 -13 L5 -5 L0 7 Z" fill="#38bdf8" />
            <path d="M-19 -2 L-34 -8 L-34 8 L-14 4" stroke="#7dd3fc" strokeWidth="2" />
            <path d="M19 -2 L34 -8 L34 8 L14 4" stroke="#7dd3fc" strokeWidth="2" />
            <path d="M-5 7 L0 17 L5 7" fill="#38bdf8" fillOpacity=".65" />
          </g>

          <circle cx="395" cy="109" r="28" fill="url(#missionGlow)" />
          <circle cx="395" cy="109" r="4" fill="#e0f2fe" />

          <circle cx="105" cy="242" r="4" fill="#7dd3fc" />
          <circle cx="535" cy="66" r="4" fill="#7dd3fc" />

          <g fill="#94a3b8" fontSize="10" letterSpacing="1.5">
            <text x="42" y="220">LAUNCH POINT</text>
            <text x="430" y="151">SPACECRAFT</text>
            <text x="458" y="44">ORBITAL TARGET</text>
          </g>
          <g stroke="#64748b" strokeOpacity=".7">
            <path d="M105 226 V238" />
            <path d="M422 141 L402 119" />
            <path d="M523 49 L535 62" />
          </g>
        </svg>

        <div className="mission-readout mission-readout-left">
          <span>MISSION PHASE</span>
          <strong>{stages[activeStage].name}</strong>
        </div>
        <div className="mission-readout mission-readout-right">
          <span>SEQUENCE</span>
          <strong>{stages[activeStage].progress} / 05</strong>
        </div>
      </div>

      <div className="mission-stage-track">
        {stages.map((stage, index) => (
          <div
            key={stage.name}
            className={`mission-stage ${index === activeStage ? "is-active" : ""}`}
          >
            <span className="mission-stage-number">{stage.progress}</span>
            <span className="mission-stage-name">{stage.name}</span>
            <span className="mission-stage-line" />
          </div>
        ))}
      </div>

      <div className="mission-visual-footer">
        <span>{stages[activeStage].detail}</span>
        <span>ILLUSTRATIVE / NOT LIVE FLIGHT DATA</span>
      </div>
    </div>
  );
}
