"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  {
    label: "Mission",
    href: "/#mission",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 2v3M12 19v3M2 12h3M19 12h3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Research",
    href: "/research",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M9 3h6M10 3v6.5L5.5 17A2.5 2.5 0 0 0 7.7 21h8.6a2.5 2.5 0 0 0 2.2-4l-4.5-7.5V3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 15h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Missions",
    href: "/missions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M14.5 4.5c2.5.3 4.7 1.5 5 4l-4.3 4.3-3.5-3.5 4.3-4.3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="m11.7 9.3-3.4.8-3.6 3.6 5.6 1 1-5.4.4-.4ZM14.7 13.7l-.8 3.4-3.6 3.6-1-5.6 5.4-1 .4-.4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="16.4" cy="7.6" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Projects",
    href: "/projects",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 8h3v3H8zM13 8h3v3h-3zM8 13h3v3H8zM13 13h3v3h-3z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    ),
  },
  {
    label: "Atlas",
    href: "/atlas",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path
          d="M12 3c3.8 3 6 5.9 6 9s-2.2 6-6 9c-3.8-3-6-5.9-6-9s2.2-6 6-9Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3 12c3-2 6-3 9-3s6 1 9 3c-3 2-6 3-9 3s-6-1-9-3Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    label: "Founder",
    href: "/founder",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <circle
          cx="12"
          cy="8"
          r="3.2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M5.5 20c.7-3.4 2.8-5.2 6.5-5.2s5.8 1.8 6.5 5.2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Documentation",
    href: "/documentation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M6 3.5h8l4 4V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M14 3.5V8h4M8.5 12h7M8.5 15.5h7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "/#contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M4 12h12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="m13 7 5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="18"
          cy="12"
          r="3.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="1.5 2"
        />
      </svg>
    ),
  },
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
        {/* VORA BRAND */}
        <a
          href="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center"
          aria-label="VORA home"
        >
          <Image
            src="/vora-logo-dark.png"
            alt="VORA — Voyage & Orbital Research Agency"
            width={170}
            height={52}
            priority
            className="h-12 w-auto shrink-0 object-contain"
          />
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-2 rounded-xl border border-transparent px-3 py-2 text-xs text-slate-400 transition-all duration-200 hover:border-blue-300/15 hover:bg-white/[0.045] hover:text-white"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-slate-500 transition-all duration-200 group-hover:border-blue-300/20 group-hover:bg-blue-400/[0.08] group-hover:text-blue-200">
                {link.icon}
              </span>

              <span>{link.label}</span>
            </a>
          ))}
        </div>

        {/* CONTACT BUTTON */}
        <a
          href="/#contact"
          className="ml-4 hidden items-center rounded-full border border-blue-300/25 bg-blue-400/[0.04] px-5 py-2.5 text-xs text-slate-200 transition-all duration-200 hover:border-blue-300/50 hover:bg-blue-400/[0.1] hover:text-white sm:inline-flex"
        >
          Get in touch
          <span className="ml-2 text-blue-200">↗</span>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-blue-300/50 hover:bg-white/5 md:hidden"
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

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/[0.06] bg-[#0b0f1e] px-6 py-6 md:hidden"
        >
          <div className="container flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 text-sm text-slate-300 transition-all duration-200 hover:border-blue-300/15 hover:bg-white/[0.04] hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-slate-500 transition-all duration-200 group-hover:border-blue-300/20 group-hover:bg-blue-400/[0.08] group-hover:text-blue-200">
                  {link.icon}
                </span>

                <span>{link.label}</span>

                <span className="ml-auto text-xs text-slate-600 transition-colors group-hover:text-blue-300">
                  →
                </span>
              </a>
            ))}

            <a
              href="/#contact"
              onClick={closeMenu}
              className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-blue-300/30 bg-blue-400/[0.05] px-5 py-2.5 text-xs text-blue-100 transition hover:border-blue-300/50 hover:bg-blue-400/[0.1]"
            >
              Get in touch
              <span>↗</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}