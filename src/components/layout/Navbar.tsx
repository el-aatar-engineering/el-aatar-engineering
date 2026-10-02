
"use client";

import { useState } from "react";

const links = [
  { label: "Mission", href: "#mission" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080b16]/85 backdrop-blur-xl">
      <nav
        className="container flex h-20 items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-3"
          aria-label="El Aatar Engineering home"
        >
          <svg
            viewBox="0 0 48 48"
            className="h-9 w-9 shrink-0"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M23 3 3 39h17c5 0 8-2 11-7l9-16L23 3Z"
              fill="url(#nav-gradient)"
            />
            <path d="m34 25-8 14h19L34 25Z" fill="#79CFFF" />
            <defs>
              <linearGradient
                id="nav-gradient"
                x1="9"
                y1="36"
                x2="37"
                y2="5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#70D5FF" />
                <stop offset="1" stopColor="#7283FF" />
              </linearGradient>
            </defs>
          </svg>

          <span className="truncate text-xs font-semibold tracking-[0.12em] sm:text-sm sm:tracking-[0.19em]">
            EL AATAR{" "}
            <span className="text-slate-500">ENGINEERING</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-xs text-slate-300 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-2 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="ml-4 hidden rounded-full border border-white/20 px-5 py-2.5 text-xs transition duration-200 hover:border-blue-300 hover:bg-white/5 sm:inline-flex"
        >
          Get in touch <span className="ml-2">↗</span>
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-indigo-300/60 hover:bg-white/5 md:hidden"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/[0.06] bg-[#0b0f1e] px-6 py-6 md:hidden"
        >
          <div className="container flex flex-col gap-5 text-sm text-slate-300">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="py-1 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-300/40 px-5 py-2.5 text-xs text-indigo-200 transition hover:bg-indigo-300/10"
            >
              Get in touch <span>↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}