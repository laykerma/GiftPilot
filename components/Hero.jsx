import React from "react";
import { BadgeCheck, FileText, Mail, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center pb-0 lg:pb-16 xl:pb-20">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e11d48]">
              FOR BUSINESS
            </span>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              Send gift cards your team and clients actually want.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Reward staff, thank clients, run incentives. Choose from hundreds of Australian brands, deliver by email or SMS in seconds, and skip the corporate gifting guesswork.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-xl bg-[#e11d48] px-7 py-3.5 text-base font-bold text-white shadow-sm transition hover:bg-[#be123c]"
              >
                Get started
              </a>
              <a
                href="mailto:hello@giftpilot.com.au"
                className="inline-flex items-center justify-center rounded-xl border border-[#e11d48] bg-white px-7 py-3.5 text-base font-bold text-[#e11d48] transition hover:bg-rose-50"
              >
                Talk to our team
              </a>
            </div>

            {/* 3 Value Propositions */}
            <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8 lg:gap-10">
              <div className="flex items-center gap-3">
                <Zap size={22} className="text-[#e11d48]" strokeWidth={2} />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">Instant delivery</h4>
                  <p className="text-xs text-slate-500">Email or SMS</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <BadgeCheck size={22} className="text-[#e11d48]" strokeWidth={2} />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">Hundreds of brands</h4>
                  <p className="text-xs text-slate-500">They&apos;ll love</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FileText size={22} className="text-[#e11d48]" strokeWidth={2} />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">GST tax invoices</h4>
                  <p className="text-xs text-slate-500">On every order</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockup with Cropped Bottom */}
          <div className="relative flex items-end justify-center lg:justify-start lg:pl-6 xl:pl-10">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px] lg:max-w-[380px]">
              {/* Left Flight Path & Paper Airplane (pointing to phone) */}
              <div className="pointer-events-none absolute -left-16 top-1/2 z-10 hidden -translate-y-12 sm:block md:-left-24 lg:-left-24 xl:-left-28">
                <svg
                  width="140"
                  height="170"
                  viewBox="0 0 140 170"
                  fill="none"
                  className="overflow-visible"
                >
                  <path
                    d="M 5 150 C 25 85, 80 45, 125 10"
                    stroke="#e11d48"
                    strokeWidth="1.75"
                    strokeDasharray="4 4"
                    fill="none"
                  />
                  <g transform="translate(118, 2) rotate(22)">
                    <path
                      d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
                      fill="#e11d48"
                      className="drop-shadow-sm"
                    />
                  </g>
                </svg>
              </div>

              {/* Right Pink Envelope Badge - floating at top right */}
              <div className="absolute -right-3 top-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-[#f43f5e] text-white shadow-xl shadow-rose-500/25 sm:left-[calc(100%+14px)] sm:top-8 sm:right-auto">
                <Mail size={26} strokeWidth={2.2} className="text-white" />
              </div>

              {/* Right Flight Path (curving down from Envelope badge) */}
              <div className="pointer-events-none absolute -right-14 top-12 z-10 hidden sm:block sm:left-[calc(100%+8px)] sm:right-auto">
                <svg
                  width="110"
                  height="160"
                  viewBox="0 0 110 160"
                  fill="none"
                  className="overflow-visible"
                >
                  <path
                    d="M 30 10 C 70 35, 80 80, 40 120 C 25 138, 5 146, -15 150"
                    stroke="#e11d48"
                    strokeWidth="1.75"
                    strokeDasharray="4 4"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Floating "Delivered in seconds" Badge - positioned to the RIGHT of the phone */}
              <div className="absolute -right-2 bottom-16 z-20 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:left-[calc(100%+14px)] sm:right-auto sm:bottom-24 sm:w-max">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-[#e11d48]">
                  <Zap size={18} className="fill-[#e11d48] text-[#e11d48]" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-xs font-bold text-slate-900">Delivered in</p>
                  <p className="text-xs font-bold text-slate-900">seconds</p>
                </div>
              </div>

              {/* Smartphone Frame - Flat cut at bottom */}
              <div className="relative rounded-t-[44px] rounded-b-none border-t-[8px] border-x-[8px] border-b-0 border-slate-900 bg-slate-900 shadow-2xl">
                {/* Screen Container */}
                <div className="overflow-hidden rounded-t-[36px] rounded-b-none bg-white pt-2.5 pb-8">
                  {/* Status Bar with Classic iPhone Notch */}
                  <div className="relative flex items-center justify-between px-6 pb-2 text-[12px] font-semibold text-slate-900">
                    <span className="w-12 text-left font-bold">9:41</span>
                    {/* Notch */}
                    <div className="absolute left-1/2 top-0 flex h-5 w-32 -translate-x-1/2 items-center justify-center rounded-b-2xl bg-slate-900">
                      <div className="h-1 w-10 rounded-full bg-slate-800" />
                    </div>
                    {/* Signal, Wifi, Battery */}
                    <div className="flex w-12 items-center justify-end gap-1.5 text-slate-900">
                      <svg className="h-3 w-3 fill-current" viewBox="0 0 16 16">
                        <rect x="1" y="11" width="2" height="4" rx="0.5" />
                        <rect x="5" y="8" width="2" height="7" rx="0.5" />
                        <rect x="9" y="5" width="2" height="10" rx="0.5" />
                        <rect x="13" y="2" width="2" height="13" rx="0.5" />
                      </svg>
                      <svg className="h-3 w-3 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                        <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
                      </svg>
                      <div className="flex items-center">
                        <div className="h-2.5 w-5 rounded-[2px] border border-slate-900 p-0.5">
                          <div className="h-full w-3 rounded-[1px] bg-slate-900" />
                        </div>
                        <div className="h-1 w-0.5 rounded-r-[1px] bg-slate-900" />
                      </div>
                    </div>
                  </div>

                  {/* Step Progress Indicators */}
                  <div className="mt-2.5 flex items-center justify-center gap-4 px-4 text-[11px] font-medium text-slate-400">
                    <span className="flex items-center gap-1">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full border border-slate-300 text-[9px] font-semibold text-slate-500">1</span>
                      Choose
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full border border-slate-300 text-[9px] font-semibold text-slate-500">2</span>
                      Personalise
                    </span>
                    <span className="flex items-center gap-1 text-[#e11d48]">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#e11d48] text-[9px] font-bold text-white">3</span>
                      Send
                    </span>
                  </div>

                  {/* Main Screen Content */}
                  <div className="relative px-6">
                    {/* Screen Title */}
                    <h3 className="mt-5 text-center text-xl font-extrabold tracking-tight text-slate-900 leading-tight">
                      You&apos;ve received<br />a gift card!
                    </h3>

                    {/* JB Hi-Fi Card */}
                    <div className="mt-5 rounded-2xl bg-[#fed000] py-6 px-4 text-center shadow-lg shadow-amber-300/40">
                      <div className="text-2xl font-black tracking-tight text-black sm:text-3xl">
                        JB HI-FI
                      </div>
                      <div className="mt-1 text-xs font-black tracking-widest text-black">
                        GIFT CARD
                      </div>
                    </div>

                    {/* Confetti Dots sprinkled around */}
                    <div className="pointer-events-none relative">
                      {/* Left dots */}
                      <span className="absolute -left-2 top-2 h-1.5 w-1.5 rounded-full bg-[#e11d48]" />
                      <span className="absolute left-1 top-7 h-1 w-1 rounded-full bg-[#f59e0b]" />
                      <span className="absolute -left-1 bottom-1 h-1.5 w-1.5 rounded-full bg-[#ec4899]" />
                      
                      {/* Right dots */}
                      <span className="absolute -right-2 top-3 h-1 w-1 rounded-full bg-[#f59e0b]" />
                      <span className="absolute right-2 top-7 h-1.5 w-1.5 rounded-full bg-[#e11d48]" />
                      <span className="absolute right-0 bottom-2 h-1 w-1 rounded-full bg-[#10b981]" />
                      
                      {/* Center dots */}
                      <span className="absolute left-1/4 -top-1 h-1 w-1 rounded-full bg-[#e11d48]" />
                      <span className="absolute right-1/4 -top-1 h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />

                      {/* Amount & Sender */}
                      <div className="mt-4 text-center">
                        <p className="text-2xl font-black tracking-tight text-slate-950">$100.00</p>
                        <p className="mt-0.5 text-xs font-medium text-slate-600">from GiftPilot Pty Ltd</p>
                      </div>

                      {/* Message Box */}
                      <div className="mt-3.5 rounded-xl bg-slate-100/90 py-2.5 px-4 text-center">
                        <p className="text-xs font-semibold text-slate-700">
                          Thanks for all your hard work!
                        </p>
                      </div>

                      {/* Bottom Confetti Dots */}
                      <div className="mt-3 flex items-center justify-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#e11d48]" />
                        <span className="h-1 w-1 rounded-full bg-[#f59e0b]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#f43f5e]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
