
"use client";

import { useEffect, useState } from "react";

export default function DesktopOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.matchMedia("(min-width: 1024px)").matches);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isDesktop === null) {
    return <div className="min-h-screen bg-[#050816]" />;
  }

  if (!isDesktop) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6 text-center text-white">
        <div className="max-w-md">
          <p className="text-sm font-medium tracking-[0.3em] text-blue-300">
            VORA / DESKTOP PREVIEW
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight">
            Built for the bigger picture.
          </h1>

          <p className="mt-5 leading-7 text-slate-400">
            VORA is currently optimized for desktop screens while we refine
            the mobile experience. Please visit us on a laptop or desktop
            computer.
          </p>

          <p className="mt-8 text-xs tracking-widest text-slate-500">
            BEYOND THE KNOWN. INTO THE POSSIBLE.
          </p>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}
