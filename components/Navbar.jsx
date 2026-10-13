import React, { useState } from "react";
import { ArrowUpRight, Gift, Menu, X } from "lucide-react";

const links = [
  { label: "For business", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Brands", href: "#brands" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-20 border-b border-slate-100 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-10" aria-label="Main navigation">
        <a href="#" className="flex shrink-0 items-center gap-2.5" aria-label="GiftPilot home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-white">
            <Gift size={21} strokeWidth={2.2} />
          </span>
          <span className="text-xl font-extrabold tracking-tight">Gift<span className="text-rose-500">Pilot</span></span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-rose-600">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          <a href="#login" className="rounded-full px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:text-rose-600">Login</a>
          <a href="#get-started" className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-600">
            Get started <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute inset-x-0 top-full border-b border-slate-100 bg-white px-5 pb-5 pt-2 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-rose-50 hover:text-rose-600">
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex gap-3 border-t border-slate-100 pt-4 sm:hidden">
              <a href="#login" onClick={() => setMenuOpen(false)} className="flex-1 rounded-full border border-slate-200 px-5 py-3 text-center text-sm font-semibold text-slate-700">Login</a>
              <a href="#get-started" onClick={() => setMenuOpen(false)} className="flex-1 rounded-full bg-rose-500 px-5 py-3 text-center text-sm font-semibold text-white">Get started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
