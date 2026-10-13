import React from "react";
import { ArrowRight, ArrowUpRight, Gift, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "For business", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Brands", href: "#brands" },
    { label: "FAQs", href: "#faq" },
  ],
  Solutions: [
    { label: "Employee recognition", href: "#features" },
    { label: "Client gifts", href: "#features" },
    { label: "Sales rewards", href: "#features" },
    { label: "Seasonal gifting", href: "#features" },
  ],
};

function GiftIllustration() {
  return (
    <div
      className="relative mx-auto h-40 w-48 sm:h-48 sm:w-56"
      role="img"
      aria-label="Illustration of a pink gift box with a bow"
    >
      <div className="absolute bottom-4 left-1/2 h-5 w-44 -translate-x-1/2 rounded-full bg-rose-900/10 blur-md" />
      <div className="absolute bottom-7 left-1/2 h-24 w-32 -translate-x-1/2 rounded-b-xl border border-white/50 bg-gradient-to-br from-rose-300 to-pink-400 shadow-xl sm:h-28 sm:w-36" />
      <div className="absolute bottom-7 left-1/2 h-24 w-5 -translate-x-1/2 bg-rose-100/90 sm:h-28" />
      <div className="absolute bottom-[6.2rem] left-1/2 h-5 w-36 -translate-x-1/2 rounded-md border border-white/50 bg-gradient-to-r from-rose-200 via-pink-300 to-rose-300 shadow-md sm:bottom-[7.2rem] sm:h-6 sm:w-40" />
      <div className="absolute bottom-[6.2rem] left-1/2 h-5 w-5 -translate-x-1/2 bg-white/80 sm:bottom-[7.2rem] sm:h-6" />
      <div className="absolute bottom-[7.45rem] left-[calc(50%-0.6rem)] h-7 w-10 -rotate-12 rounded-[70%_35%_65%_35%] border-[5px] border-rose-100 sm:bottom-[8.55rem] sm:h-8 sm:w-12" />
      <div className="absolute bottom-[7.45rem] right-[calc(50%-0.6rem)] h-7 w-10 rotate-12 rounded-[35%_70%_35%_65%] border-[5px] border-pink-100 sm:bottom-[8.55rem] sm:h-8 sm:w-12" />
      <span className="absolute right-4 top-7 text-rose-100"><Gift size={20} /></span>
      <span className="absolute left-4 top-12 text-pink-100"><Gift size={14} /></span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <section
        id="get-started"
        className="scroll-mt-20 px-5 pb-14 pt-8 sm:px-8 sm:pb-16 lg:px-10"
      >
        <div className="relative mx-auto grid max-w-7xl items-center gap-5 overflow-hidden rounded-[2rem] bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 px-6 py-8 text-white sm:px-10 sm:py-10 lg:grid-cols-[0.7fr_1.3fr] lg:px-14">
          <div className="relative order-2 lg:order-1">
            <GiftIllustration />
          </div>
          <div className="relative order-1 text-center lg:order-2 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-2 text-xs font-bold sm:text-sm">
              <Gift size={15} /> Make every moment count
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Ready to make gifting the easy part?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-rose-50 sm:text-base sm:leading-7 lg:mx-0">
              Spend less time organising gifts and more time making people feel appreciated.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="mailto:hello@giftpilot.example?subject=Create%20a%20business%20account"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-rose-600 shadow-lg transition hover:-translate-y-0.5 hover:bg-rose-50"
              >
                Create business account <ArrowRight size={16} />
              </a>
              <a
                href="mailto:hello@giftpilot.example?subject=Book%20a%2015-minute%20demo"
                className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
              >
                Book a 15-minute demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 pb-8 sm:px-8 lg:px-10">
        <div className="grid gap-10 border-t border-slate-100 py-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#" className="inline-flex items-center gap-2.5" aria-label="GiftPilot home">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500 text-white">
                <Gift size={21} />
              </span>
              <span className="text-xl font-extrabold tracking-tight">
                Gift<span className="text-rose-500">Pilot</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              Business gifting that makes it easy to show people they matter.
            </p>
          </div>
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-bold text-slate-900">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 transition hover:text-rose-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-sm font-bold text-slate-900">Get in touch</h3>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Our team is here to help you find the right gifting solution.
            </p>
            <a
              href="mailto:hello@giftpilot.example"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-rose-600 hover:text-rose-700"
            >
              <Mail size={16} /> hello@giftpilot.example <ArrowUpRight size={14} />
            </a>
            <a
              href="https://www.linkedin.com/"
              aria-label="GiftPilot on LinkedIn"
              className="mt-4 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-rose-200 hover:text-rose-600"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} GiftPilot. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#privacy" className="hover:text-slate-600">Privacy policy</a>
            <a href="#terms" className="hover:text-slate-600">Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
