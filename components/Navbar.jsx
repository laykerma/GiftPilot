import React, { useState } from "react";
import { ChevronDown, Gift, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-30 border-b border-slate-100 bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#" className="flex shrink-0 items-center gap-2" aria-label="GiftPilot home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#e11d48] to-[#f43f5e] text-white shadow-sm">
            <Gift size={20} strokeWidth={2.2} />
          </span>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-tight text-slate-900">
              Gift<span className="text-[#e11d48]">Pilot</span>
            </span>
            <span className="text-[10px] font-medium tracking-tight text-slate-400">
              for business
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-7 lg:flex">
          <a
            href="#features"
            className="border-b-2 border-[#e11d48] pb-0.5 text-sm font-semibold text-[#e11d48]"
          >
            For business
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-600 transition hover:text-[#e11d48]"
          >
            How it works
          </a>
          <a
            href="#brands"
            className="text-sm font-medium text-slate-600 transition hover:text-[#e11d48]"
          >
            Brands
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-slate-600 transition hover:text-[#e11d48]"
          >
            Pricing
          </a>
          <button
            type="button"
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 transition hover:text-[#e11d48]"
          >
            Resources
            <ChevronDown size={14} className="text-slate-400" />
          </button>
        </div>

        {/* Right CTA / Auth */}
        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          <a
            href="#login"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
          >
            Login
          </a>
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-full bg-[#e11d48] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#be123c]"
          >
            Get started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-b border-slate-100 bg-white px-5 pb-5 pt-2 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-[#e11d48] hover:bg-rose-50"
            >
              For business
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              How it works
            </a>
            <a
              href="#brands"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Brands
            </a>
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Pricing
            </a>
            <a
              href="#resources"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Resources
            </a>
            <div className="mt-3 flex gap-3 border-t border-slate-100 pt-4 sm:hidden">
              <a
                href="#login"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-full border border-slate-200 py-2.5 text-center text-sm font-medium text-slate-700"
              >
                Login
              </a>
              <a
                href="#get-started"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-full bg-[#e11d48] py-2.5 text-center text-sm font-semibold text-white"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

