import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import { cosmicObjects } from "@/data/atlas";

const visualStyles: Record<string, string> = {
  earth: "from-sky-700 via-blue-950 to-[#080d16]",
  mars: "from-orange-800 via-red-950 to-[#080d16]",
  saturn: "from-amber-700 via-slate-900 to-[#080d16]",
  andromeda: "from-violet-800 via-indigo-950 to-[#080d16]",
  nebula: "from-fuchsia-800 via-indigo-950 to-[#080d16]",
  sun: "from-amber-500 via-orange-950 to-[#080d16]",
};

export function generateStaticParams() {
  return cosmicObjects.map((object) => ({
    slug: object.slug,
  }));
}

export default async function AtlasObjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const object = cosmicObjects.find((item) => item.slug === slug);

  if (!object) notFound();

  return (
    <main className="min-h-screen overflow-hidden bg-[#080d16] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/[0.08]">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            visualStyles[object.visual] ?? "from-slate-800 to-[#080d16]"
          }`}
        />

        <div className="absolute inset-0 bg-[#050a12]/60" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(125,211,252,.15),transparent_50%)]" />

        <div className="container relative py-28 sm:py-40">
          <Link
            href="/atlas"
            className="text-xs tracking-[0.15em] text-sky-200/80 transition hover:text-white"
          >
            ← BACK TO COSMIC ATLAS
          </Link>

          <p className="mt-16 text-xs tracking-[0.3em] text-sky-200">
            VORA / {object.category.toUpperCase()} / CELESTIAL OBJECT
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
            {object.name}
          </h1>

          <p className="mt-5 text-lg text-slate-300 sm:text-xl">
            {object.subtitle}
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="container py-20 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs tracking-[0.25em] text-sky-300">
              VORA / OVERVIEW
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              A closer look
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300">
              {object.description}
            </p>

            <div className="mt-12 border-l border-sky-300/40 pl-5">
              <p className="text-xs tracking-[0.2em] text-slate-500">
                NOTABLE FEATURE
              </p>

              <p className="mt-3 text-lg text-slate-200">
                {object.notableFor}
              </p>
            </div>
          </div>

          {/* OBJECT DATA */}
          <aside className="h-fit border border-white/[0.08] bg-[#0b111c] p-6 sm:p-8">
            <p className="text-xs tracking-[0.25em] text-sky-300">
              VORA / OBJECT DATA
            </p>

            <div className="mt-6 divide-y divide-white/[0.08]">
              <div className="py-5">
                <p className="text-xs text-slate-500">Distance</p>

                <p className="mt-2 text-sm text-slate-200">
                  {object.distance}
                </p>
              </div>

              <div className="py-5">
                <p className="text-xs text-slate-500">Diameter / Size</p>

                <p className="mt-2 text-sm text-slate-200">
                  {object.diameter}
                </p>
              </div>

              <div className="py-5">
                <p className="text-xs text-slate-500">Classification</p>

                <p className="mt-2 text-sm text-slate-200">
                  {object.category}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ATLAS CTA */}
      <section className="border-t border-white/[0.08] bg-[#0b111c]">
        <div className="container flex flex-col justify-between gap-6 py-10 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs tracking-[0.2em] text-slate-500">
              VORA / COSMIC ATLAS
            </p>

            <p className="mt-2 text-sm text-slate-300">
              Continue exploring the universe.
            </p>
          </div>

          <Link
            href="/atlas"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-sky-300/50 px-6 py-3 text-sm text-white transition hover:bg-sky-300/10"
          >
            Browse all objects
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
