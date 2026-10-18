
"use client";

import { useEffect, useRef } from "react";

export default function GalaxyVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let frame = 0;
    let animationId = 0;
    let width = 0;
    let height = 0;
    let stars: {
      x: number;
      y: number;
      radius: number;
      alpha: number;
    }[] = [];

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

      stars = Array.from({ length: Math.floor(width * height / 500) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.2,
        alpha: Math.random() * 0.65 + 0.15,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep-space background
      const background = ctx.createLinearGradient(0, 0, width, height);
      background.addColorStop(0, "#07101d");
      background.addColorStop(0.55, "#030711");
      background.addColorStop(1, "#080d18");
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      // Distant stars
      for (const star of stars) {
        const twinkle =
          star.alpha *
          (0.8 + 0.2 * Math.sin(frame * 0.025 + star.x));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,225,255,${twinkle})`;
        ctx.fill();
      }

      ctx.save();
      ctx.translate(width * 0.53, height * 0.49);
      ctx.rotate(-0.28);

      const radius = Math.min(width * 0.43, height * 0.48);
      const arms = 3;

      // Soft galactic halo
      const halo = ctx.createRadialGradient(0, 0, 2, 0, 0, radius);
      halo.addColorStop(0, "rgba(255,220,170,0.8)");
      halo.addColorStop(0.12, "rgba(255,170,115,0.32)");
      halo.addColorStop(0.38, "rgba(100,145,255,0.13)");
      halo.addColorStop(1, "rgba(35,90,180,0)");
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.ellipse(0, 0, radius, radius * 0.53, 0, 0, Math.PI * 2);
      ctx.fill();

      // Spiral arms, made from thousands of luminous particles
      for (let arm = 0; arm < arms; arm++) {
        for (let i = 0; i < 900; i++) {
          const t = i / 900;
          const distance = 5 + t * radius;
          const angle =
            arm * ((Math.PI * 2) / arms) +
            t * 5.8 -
            (reducedMotion ? 0 : frame * 0.0015);

          const scatter = 2 + t * 13;
          const jitterX = (Math.random() - 0.5) * scatter;
          const jitterY = (Math.random() - 0.5) * scatter;

          const x = Math.cos(angle) * distance + jitterX;
          const y =
            Math.sin(angle) * distance * 0.48 + jitterY * 0.48;

          const brightness = (1 - t * 0.55) * (0.25 + Math.random() * 0.65);
          const blue = 170 + Math.floor(Math.random() * 75);
          const red = t < 0.18 ? 255 : 100 + Math.floor(Math.random() * 65);

          ctx.fillStyle = `rgba(${red},${blue},255,${brightness})`;
          ctx.beginPath();
          ctx.arc(x, y, 0.35 + Math.random() * 0.85, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Bright central galactic core
      const core = ctx.createRadialGradient(0, 0, 1, 0, 0, radius * 0.23);
      core.addColorStop(0, "rgba(255,248,220,0.98)");
      core.addColorStop(0.12, "rgba(255,211,157,0.9)");
      core.addColorStop(0.4, "rgba(255,160,115,0.3)");
      core.addColorStop(1, "rgba(255,140,100,0)");
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.23, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // Fine technical frame
      ctx.strokeStyle = "rgba(125,211,252,0.14)";
      ctx.lineWidth = 1;
      ctx.strokeRect(12, 12, width - 24, height - 24);

      frame++;

      if (!reducedMotion) {
        animationId = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    const observer = new ResizeObserver(() => {
      resize();
      draw();
    });

    observer.observe(canvas);

    return () => {
      window.cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative isolate overflow-hidden border border-white/10 bg-[#030711]">
      <canvas
        ref={canvasRef}
        aria-label="Procedurally generated animated spiral galaxy"
        role="img"
        className="block aspect-[4/3] w-full"
      />

      <div className="pointer-events-none absolute left-6 top-6">
        <p className="text-[9px] tracking-[0.25em] text-sky-200">
          VORA / DEEP SPACE
        </p>
        <p className="mt-2 text-xs text-white/70">
          Galactic structures
        </p>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-6 right-6 flex items-end justify-between gap-3">
        <div>
          <p className="text-[9px] tracking-[0.25em] text-sky-200">
            COSMIC ATLAS
          </p>
          <p className="mt-2 text-lg font-medium text-white sm:text-2xl">
            Beyond our world.
          </p>
        </div>
        <span className="text-[9px] tracking-widest text-slate-400">
          PROCEDURAL VISUAL
        </span>
      </div>
    </div>
  );
}
