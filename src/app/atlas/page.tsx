"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { atlasCategories, cosmicObjects } from "@/data/atlas";
import AtlasGlobe from "@/components/AtlasGlobe";


const visualStyles: Record<string, string> = {
  earth:
    "bg-[radial-gradient(circle_at_50%_48%,#4389ad_0%,#24527a_30%,#10243c_48%,#080d16_70%)]",
  mars:
    "bg-[radial-gradient(circle_at_50%_48%,#d67a48_0%,#8c3e2e_30%,#3d2025_52%,#080d16_72%)]",
  saturn:
    "bg-[radial-gradient(ellipse_at_50%_50%,#bca779_0%,#796746_28%,#292b35_48%,#080d16_72%)]",
  andromeda:
    "bg-[radial-gradient(ellipse_at_50%_50%,#b7a9d9_0%,#665b91_18%,#292747_40%,#080d16_72%)]",
  nebula:
    "bg-[radial-gradient(ellipse_at_45%_45%,#c06a9e_0%,#6e426f_25%,#27304f_50%,#080d16_75%)]",
  sun:
    "bg-[radial-gradient(circle_at_50%_48%,#fff0a8_0%,#f9b94e_24%,#b95723_42%,#351c20_60%,#080d16_75%)]",
};

function ObjectVisual({ visual }: { visual: string }) {
  return (
    <div
      className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden ${
        visualStyles[visual] ?? "bg-[#0a1424]"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(4,8,16,.35)_100%)]" />

      <div className="absolute h-[42%] w-[42%] rounded-full border border-white/10 shadow-[0_0_50px_rgba(125,211,252,0.12)]" />

      {visual === "saturn" && (
        <div className="absolute h-[18%] w-[65%] rotate-[-18deg] rounded-[50%] border-[10px] border-[#c9b58b]/60 shadow-[0_0_20px_rgba(230,210,160,.15)]" />
      )}

      {visual === "andromeda" && (
        <>
          <div className="absolute h-[12%] w-[65%] rotate-[-25deg] rounded-[50%] bg-violet-200/20 blur-xl" />
          <div className="absolute h-[8%] w-[55%] rotate-[20deg] rounded-[50%] bg-sky-100/20 blur-lg" />
        </>
      )}

      {visual === "nebula" && (
        <div className="absolute h-[50%] w-[65%] rotate-[-20deg] rounded-full bg-fuchsia-300/10 blur-2xl" />
      )}

      <span className="absolute bottom-4 left-4 text-[9px] tracking-[0.25em] text-white/50">
        VORA / COSMIC ATLAS
      </span>
    </div>
  );
}

export default function AtlasPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredObjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return cosmicObjects.filter((object) => {
      const matchesCategory =
        category === "All" || object.category === category;

      const matchesSearch =
        !query ||
        object.name.toLowerCase().includes(query) ||
        object.subtitle.toLowerCase().includes(query) ||
        object.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);
const [globeRotation, setGlobeRotation] = useState({
  x: -18,
  y: 24,
});

const dragRef = useRef<{
  x: number;
  y: number;
  rotationX: number;
  rotationY: number;
} | null>(null);

function handleGlobePointerDown(
  event: React.PointerEvent<HTMLDivElement>
) {
  dragRef.current = {
    x: event.clientX,
    y: event.clientY,
    rotationX: globeRotation.x,
    rotationY: globeRotation.y,
  };

  event.currentTarget.setPointerCapture(event.pointerId);
}

function handleGlobePointerMove(
  event: React.PointerEvent<HTMLDivElement>
) {
  if (!dragRef.current) return;

  setGlobeRotation({
    x: Math.max(
      -65,
      Math.min(
        65,
        dragRef.current.rotationX +
          (event.clientY - dragRef.current.y) * 0.45
      )
    ),
    y:
      dragRef.current.rotationY +
      (event.clientX - dragRef.current.x) * 0.45,
  });
}

function handleGlobePointerUp() {
  dragRef.current = null;
}
  return (
    <main className="min-h-screen overflow-hidden bg-[#080d16] text-white">
      <Navbar />
    
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/[0.08] bg-[#060b13]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_40%,rgba(56,130,190,.18),transparent_42%),radial-gradient(ellipse_at_20%_100%,rgba(56,189,248,.06),transparent_40%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(125,211,252,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,.15)_1px,transparent_1px)] [background-size:60px_60px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />

        <div className="container relative grid min-h-[560px] items-center gap-10 py-24 sm:py-28 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-sky-300" />
              <p className="text-[10px] tracking-[0.3em] text-sky-300">
                VORA / COSMIC ATLAS
              </p>
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
              A universe
              <br />
              <span className="text-sky-200">to investigate.</span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-slate-400 sm:text-base">
              Explore the celestial objects, planetary systems, and
              cosmic structures that help us understand the universe
              and our place within it.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#atlas-database"
                className="inline-flex items-center gap-3 border border-sky-200/40 bg-sky-200/[0.08] px-5 py-3 text-xs text-sky-100 transition hover:border-sky-200/70 hover:bg-sky-200/[0.14]"
              >
                Explore the database
                <span aria-hidden="true">↓</span>
              </a>

              <span className="text-[10px] tracking-[0.15em] text-slate-600">
                PLANETS / STARS / GALAXIES
              </span>
            </div>
          </div>

                    {/* FEATURED 3D COSMIC VISUAL */}
<div className="relative mx-auto w-full max-w-[460px]">
  <div className="absolute inset-[10%] rounded-full bg-sky-400/10 blur-3xl" />

  <AtlasGlobe />

  <div className="pointer-events-none absolute left-0 top-[22%] border-l border-sky-300/50 pl-3">
    <p className="text-[9px] tracking-[0.2em] text-slate-500">
      OBSERVATION
    </p>
    <p className="mt-1 text-[10px] text-slate-200">
      Planetary systems
    </p>
  </div>

  <div className="pointer-events-none absolute bottom-[17%] right-0 border-r border-sky-300/50 pr-3 text-right">
    <p className="text-[9px] tracking-[0.2em] text-slate-500">
      REFERENCE BODY
    </p>
    <p className="mt-1 text-[10px] text-slate-200">
      Earth / Sol III
    </p>
  </div>

  <p className="pointer-events-none absolute bottom-[2%] left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] tracking-[0.25em] text-slate-500">
    VORA / CELESTIAL REFERENCE
  </p>
</div>
        </div>
      </section>


      {/* DATABASE */}
      <section id="atlas-database" className="container py-16 sm:py-20">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs tracking-[0.25em] text-sky-300">
                VORA / CELESTIAL DATABASE
              </p>

              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Explore the universe
              </h2>
            </div>

            <label className="w-full lg:max-w-sm">
              <span className="sr-only">Search celestial objects</span>

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search objects..."
                className="w-full rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/50"
              />
            </label>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-2">
            {atlasCategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full border px-4 py-2 text-xs transition ${
                  category === item
                    ? "border-sky-200/60 bg-sky-200/10 text-sky-100"
                    : "border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* OBJECT GRID */}
        {filteredObjects.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredObjects.map((object, index) => (
              <Link
                key={object.slug}
                href={`/atlas/${object.slug}`}
                className="group overflow-hidden border border-white/[0.08] bg-[#0b111c] transition duration-300 hover:-translate-y-1 hover:border-sky-300/30 hover:shadow-[0_15px_50px_rgba(0,0,0,.2)]"
              >
                <ObjectVisual visual={object.visual} />

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] tracking-[0.2em] text-sky-300">
                      {object.category.toUpperCase()}
                    </p>

                    <span className="text-[10px] text-slate-600">
                      VORA / {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold transition group-hover:text-sky-100">
                    {object.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {object.subtitle}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4">
                    <span className="text-xs text-slate-500">
                      Explore object
                    </span>

                    <span className="text-sky-300 transition group-hover:translate-x-1">
                      
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-16 border border-white/10 py-16 text-center">
            <p className="text-slate-300">No objects found.</p>

            <p className="mt-2 text-sm text-slate-500">
              Try another search or category.
            </p>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08]">
        <div className="container flex flex-col justify-between gap-4 py-8 sm:flex-row sm:items-center">
          <Link href="/" className="text-xs tracking-[0.15em] text-slate-400">
            VORA / COSMIC ATLAS
          </Link>

          <p className="text-xs text-slate-500">
            Beyond the known. Into the possible.
          </p>

          <Link
            href="/"
            className="text-xs text-slate-400 transition hover:text-white"
          >
            Back home ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}
