import React from "react";
import FooterMockup from "./FooterMockup";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Two-tone background extending 100% full width of the browser */}
      <div className="absolute inset-x-0 top-0 bottom-[22%] bg-[#e11d48]" />
      <div className="absolute inset-x-0 bottom-0 h-[22%] bg-[#fed6e2]" />

      {/* Content aligned with the website container */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-4 py-5 sm:px-6 md:py-6 lg:flex-row lg:items-center lg:gap-6 lg:px-8 lg:py-6 xl:py-7">
        
        {/* Left: 3D Pink Gift Box + Laptop Dashboard sitting on the pink floor */}
        <div className="relative flex shrink-0 items-end justify-center lg:justify-start">
          <FooterMockup />
        </div>

        {/* Center: Title & Description */}
        <div className="text-center lg:max-w-lg xl:max-w-xl">
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-[28px] md:leading-snug">
            Ready to make gifting the easy<br className="hidden sm:inline" /> part?
          </h2>
          <div className="mt-2 space-y-0.5 text-xs font-normal leading-relaxed text-white sm:text-sm md:text-base">
            <p>Set up a business account in minutes.</p>
            <p>No subscription, no monthly minimums, no lock-in.</p>
          </div>
        </div>

        {/* Right: CTA Action Pill Buttons */}
        <div className="flex w-full max-w-xs shrink-0 flex-col gap-2.5 sm:w-auto">
          <a
            href="#get-started"
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-2.5 text-center text-xs font-bold text-[#e11d48] shadow-sm transition hover:bg-rose-50 hover:shadow sm:py-3 sm:text-sm md:text-base"
          >
            Create business account
          </a>
          <a
            href="#demo"
            className="inline-flex w-full items-center justify-center rounded-full border border-white bg-[#e11d48] px-6 py-2.5 text-center text-xs font-semibold text-white transition hover:bg-white/10 sm:py-3 sm:text-sm md:text-base"
          >
            Book a 15-minute demo
          </a>
        </div>

      </div>
    </footer>
  );
}



