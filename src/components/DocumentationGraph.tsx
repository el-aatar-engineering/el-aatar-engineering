
"use client";

import { useEffect, useRef } from "react";

export default function DocumentationGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    let animationId = 0;
    let startTime = 0;
    let width = 0;
    let height = 0;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      if (!startTime) startTime = time;

      const elapsed = reducedMotion ? 0 : (time - startTime) / 1000;
      ctx.clearRect(0, 0, width, height);

      // Background
      ctx.fillStyle = "#060b13";
      ctx.fillRect(0, 0, width, height);

      const left = 28;
      const right = width - 18;
      const top = 18;
      const bottom = height - 28;
      const plotWidth = right - left;
      const plotHeight = bottom - top;

      // Technical grid
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(125,211,252,0.10)";

      for (let i = 0; i <= 8; i++) {
        const x = left + (plotWidth * i) / 8;
        ctx.beginPath();
        ctx.moveTo(x, top);
        ctx.lineTo(x, bottom);
        ctx.stroke();
      }

      for (let i = 0; i <= 5; i++) {
        const y = top + (plotHeight * i) / 5;
        ctx.beginPath();
        ctx.moveTo(left, y);
        ctx.lineTo(right, y);
        ctx.stroke();
      }

      // Illustrative curve
      const points: { x: number; y: number }[] = [];

      for (let i = 0; i <= 180; i++) {
        const t = i / 180;
        const x = left + t * plotWidth;
        const curve =
          0.82 -
          0.63 * t +
          0.11 * Math.sin(t * 5.5 + elapsed * 0.5) +
          0.035 * Math.sin(t * 15);

        const y = top + curve * plotHeight;
        points.push({ x, y });
      }

      // Soft curve glow
      ctx.beginPath();
      points.forEach((point, index) => {
        if (index === 0) ctx.moveTo(point.x, point.y);
        else ctx.lineTo(point.x, point.y);
      });

      ctx.strokeStyle = "rgba(56,189,248,0.18)";
      ctx.lineWidth = 9;
      ctx.stroke();

      // Main curve
      ctx.beginPath();
      points.forEach((point, index) => {
        if (index === 0) ctx.moveTo(point.x, point.y);
        else ctx.lineTo(point.x, point.y);
      });

      ctx.strokeStyle = "#7dd3fc";
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // Moving scan marker
      const scanPosition = reducedMotion
        ? 0.65
        : (elapsed * 0.12) % 1;

      const markerIndex = Math.floor(scanPosition * (points.length - 1));
      const marker = points[markerIndex];

      ctx.setLineDash([3, 5]);
      ctx.strokeStyle = "rgba(186,230,253,0.55)";
      ctx.beginPath();
      ctx.moveTo(marker.x, top);
      ctx.lineTo(marker.x, bottom);
      ctx.stroke();
      ctx.setLineDash([]);

      // Marker glow
      const glow = ctx.createRadialGradient(
        marker.x,
        marker.y,
        1,
        marker.x,
        marker.y,
        17
      );

      glow.addColorStop(0, "rgba(125,211,252,0.32)");
      glow.addColorStop(1, "rgba(125,211,252,0)");

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(marker.x, marker.y, 17, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#e0f2fe";
      ctx.beginPath();
      ctx.arc(marker.x, marker.y, 3, 0, Math.PI * 2);
      ctx.fill();

      // Axis labels
      ctx.fillStyle = "#64748b";
      ctx.font = "9px monospace";
      ctx.fillText("0", left - 2, bottom + 15);
      ctx.fillText("SAMPLE INDEX", left, height - 7);
      ctx.fillText("MODEL RESPONSE", left, 11);

      if (!reducedMotion) {
        animationId = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw(0);

    const observer = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });

    observer.observe(canvas);

    return () => {
      window.cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative overflow-hidden border border-white/[0.09] bg-[#060b13]">
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Illustrative animated engineering graph with a moving scan marker"
        className="block h-[230px] w-full sm:h-[300px]"
      />

      <div className="pointer-events-none absolute right-4 top-4 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_8px_rgba(125,211,252,.8)]" />
        <span className="text-[9px] tracking-[0.16em] text-slate-400">
          VISUALIZATION ACTIVE
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] px-4 py-3 sm:px-5">
        <span className="text-[9px] tracking-[0.15em] text-slate-500">
          VORA / TECHNICAL ARCHIVE
        </span>
        <span className="text-[9px] tracking-[0.12em] text-sky-300/70">
          ILLUSTRATIVE DATA · NOT EXPERIMENTAL RESULTS
        </span>
      </div>
    </div>
  );
}
