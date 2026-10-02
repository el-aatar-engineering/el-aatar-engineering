
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070b16] px-6 text-center">
      <div className="max-w-lg">
        <p className="font-mono text-sm tracking-[0.3em] text-blue-400">
          ERROR / 404 MEANING NOT FOUND
        </p>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white md:text-7xl">
          Lost in <span className="text-blue-400">space.</span>
        </h1>

        <p className="mt-6 leading-7 text-slate-400">
          This page doesn't exist or may have moved. Return to the main
          portfolio to continue exploring.
        </p>

        <Link
          href="/"
          className="mt-9 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-3 text-sm text-blue-200 transition hover:bg-blue-500/20"
        >
          Back to homepage ↗
        </Link>
      </div>
    </main>
  );
}