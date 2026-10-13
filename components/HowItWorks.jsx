import React from "react";
import { Mail, Scale } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching Image 1 */}
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-[2.75rem]">
            From brief to inbox in under five minutes
          </h2>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {/* Step 1 */}
          <article className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs transition hover:shadow-md">
            {/* Visual Graphic Area */}
            <div className="relative flex h-52 sm:h-56 items-center justify-center">
              {/* Badge 1 */}
              <span className="absolute left-0 top-0 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#e11d48] text-sm sm:text-base font-bold text-white shadow-xs">
                1
              </span>

              {/* Brand Logos Grid matching reference */}
              <div className="ml-6 sm:ml-8 grid grid-cols-2 gap-2.5 sm:gap-3">
                {/* JB HI-FI */}
                <div className="flex h-14 w-24 sm:w-28 flex-col items-center justify-center rounded-xl bg-[#ffde00] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                  <span className="text-[12px] font-black italic tracking-tighter text-black leading-none">
                    JB HI-FI
                  </span>
                  <span className="mt-1 text-[6px] font-extrabold tracking-tight text-black leading-none">
                    GIFT CARD
                  </span>
                </div>

                {/* MYER */}
                <div className="flex h-14 w-24 sm:w-28 items-center justify-center rounded-xl border border-slate-200/90 bg-white font-serif text-[12px] font-bold tracking-[0.2em] text-slate-900 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                  MYER
                </div>

                {/* coles */}
                <div className="flex h-14 w-24 sm:w-28 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-base font-black lowercase text-[#e11d48] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                  coles
                </div>

                {/* HOYTS + 100 */}
                <div className="flex h-14 w-24 sm:w-28 items-center gap-1.5">
                  <div className="flex h-full flex-1 items-center justify-center rounded-xl border border-slate-200/90 bg-white text-[11px] font-black italic tracking-wider text-[#e11d48] shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                    HOYTS
                  </div>
                  <span className="flex h-9 items-center justify-center rounded-lg border border-rose-100 bg-[#fff1f4] px-1.5 text-[10px] font-extrabold text-[#e11d48]">
                    +100
                  </span>
                </div>
              </div>
            </div>

            {/* Step 1 Content */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-slate-950">Choose your gift</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Pick a single retailer or a multi-brand card that lets your recipient choose. Set the amount from $5 to $500.
              </p>
            </div>
          </article>

          {/* Step 2 */}
          <article className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs transition hover:shadow-md">
            {/* Visual Graphic Area */}
            <div className="relative flex h-52 sm:h-56 items-center justify-center">
              {/* Badge 2 */}
              <span className="absolute left-0 top-0 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#e11d48] text-sm sm:text-base font-bold text-white shadow-xs">
                2
              </span>

              {/* Laptop Screen Mockup matching reference */}
              <div className="ml-5 sm:ml-7 flex flex-col items-center">
                {/* Screen Housing */}
                <div className="w-[208px] sm:w-[226px] rounded-t-lg border-2 border-b-0 border-slate-800 bg-slate-900 p-[3px] shadow-sm">
                  {/* Inner Display */}
                  <div className="overflow-hidden rounded-t-[4px] bg-white">
                    {/* Purple Header Bar */}
                    <div className="flex h-4 items-center bg-[#581c87] px-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-white/80" />
                    </div>

                    {/* Window Content */}
                    <div className="flex h-[96px] items-stretch gap-1.5 p-2">
                      {/* Left: Input fields */}
                      <div className="flex flex-1 flex-col justify-start">
                        <div className="rounded border border-slate-200/90 bg-white px-1.5 py-0.5 text-left">
                          <span className="block text-[6px] font-medium leading-none text-slate-400">To</span>
                          <span className="mt-0.5 block text-[7.5px] font-bold leading-none text-slate-800">Alex</span>
                        </div>

                        <div className="mt-1 flex-1 rounded border border-slate-200/90 bg-white px-1.5 py-1 text-left">
                          <span className="block text-[6px] font-medium leading-none text-slate-400">Message</span>
                          <p className="mt-0.5 text-[6.5px] font-medium leading-tight text-slate-700">
                            Thanks for
                            <br />
                            all your hard work!
                          </p>
                        </div>
                      </div>

                      {/* Right: Gift Card Preview with confetti */}
                      <div className="relative flex flex-1 flex-col items-center justify-center rounded border border-slate-200/90 bg-white p-1 text-center shadow-xs">
                        {/* Confetti dots */}
                        <span className="absolute left-1 top-1 h-1 w-1 rounded-full bg-rose-400 opacity-70" />
                        <span className="absolute right-1 top-1.5 h-1 w-1 rounded-full bg-amber-400 opacity-70" />
                        <span className="absolute left-1.5 bottom-1 h-1 w-1 rounded-full bg-pink-400 opacity-70" />
                        <span className="absolute right-1.5 bottom-1.5 h-1 w-1 rounded-full bg-rose-500 opacity-70" />

                        <div className="text-[5px] font-bold uppercase tracking-wider text-slate-600 leading-none">
                          YOU&apos;VE RECEIVED A
                        </div>
                        <div className="mt-0.5 text-[6px] font-black uppercase tracking-tight text-slate-900 leading-none">
                          GIFT CARD!
                        </div>

                        {/* Yellow mini card */}
                        <div className="mt-1 flex h-6 w-14 flex-col items-center justify-center rounded bg-[#ffde00] shadow-xs">
                          <span className="text-[6.5px] font-black italic tracking-tighter text-slate-950 leading-none">
                            JB HI-FI
                          </span>
                          <span className="mt-0.5 text-[3.5px] font-bold tracking-tight text-slate-950 leading-none">
                            GIFT CARD
                          </span>
                        </div>

                        <div className="mt-1 text-[8px] font-black text-slate-950 leading-none">
                          $100
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base / Deck */}
                <div className="relative flex h-2 w-[228px] sm:w-[246px] items-start justify-center rounded-b-md bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 shadow-sm">
                  <div className="h-[2px] w-7 rounded-b bg-slate-600" />
                </div>
              </div>
            </div>

            {/* Step 2 Content */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-slate-950">Personalise &amp; upload</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Add your logo, message and greeting theme. Enter one recipient, or upload a spreadsheet for hundreds.
              </p>
            </div>
          </article>

          {/* Step 3 */}
          <article className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs transition hover:shadow-md">
            {/* Visual Graphic Area */}
            <div className="relative flex h-52 sm:h-56 items-center justify-center">
              {/* Badge 3 */}
              <span className="absolute left-0 top-0 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#e11d48] text-sm sm:text-base font-bold text-white shadow-xs">
                3
              </span>

              {/* Phone Mockup + Flight Trail matching reference */}
              <div className="relative flex items-center justify-center">
                {/* Phone Shell */}
                <div className="relative h-[154px] w-[92px] rounded-[22px] border-[3px] border-slate-900 bg-slate-900 p-[3px] shadow-lg">
                  {/* Speaker Notch */}
                  <div className="absolute left-1/2 top-1.5 z-10 h-1 w-5 -translate-x-1/2 rounded-full bg-slate-900" />

                  {/* Inner Screen */}
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-[18px] bg-white px-2 py-2 text-center shadow-inner">
                    {/* Pink Envelope Icon */}
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e11d48] text-white shadow-xs">
                      <Mail size={13} strokeWidth={2.4} />
                    </div>

                    <div className="mt-2 text-[8px] font-bold leading-tight text-slate-900">
                      You&apos;ve received
                      <br />
                      a gift card!
                    </div>

                    {/* Open gift card button */}
                    <div className="mt-2.5 rounded-full bg-[#e11d48] px-2.5 py-1 text-[6.5px] font-bold text-white shadow-xs">
                      Open gift card
                    </div>
                  </div>
                </div>

                {/* Curved flight dashed line */}
                <svg
                  className="pointer-events-none absolute -right-6 top-3 h-24 w-24 overflow-visible"
                  viewBox="0 0 100 80"
                  fill="none"
                >
                  <path
                    d="M 10 65 C 40 65, 70 50, 80 18"
                    stroke="#f43f5e"
                    strokeWidth="1.6"
                    strokeDasharray="3 3"
                  />
                </svg>

                {/* Flying pink envelope circle */}
                <div className="absolute -right-3 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#e11d48] text-white shadow-md">
                  <Mail size={13} strokeWidth={2.2} />
                </div>
              </div>
            </div>

            {/* Step 3 Content */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-slate-950">Send now or schedule</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Deliver instantly or schedule to the minute. Track deliveries and redemptions from your dashboard. [CONFIRM: dashboard reporting is live and what it shows]
              </p>
            </div>
          </article>
        </div>

        {/* Soft Pink Strip: FBT-friendly by design & GST invoicing & payment matching Image 1 */}
        <div className="mt-14 rounded-2xl border border-rose-200/70 bg-[#fff1f4] p-8 sm:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 md:divide-x md:divide-rose-200">
            {/* Left: FBT-friendly by design */}
            <div className="flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-rose-300 bg-white/70 text-[#e11d48]">
                <Scale size={30} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-950">FBT-friendly by design</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Gift cards under $300 per recipient, given infrequently, generally qualify as a minor benefit exempt from Fringe Benefits Tax. We surface the threshold at checkout so your business can gift compliantly without a spreadsheet.
                </p>
              </div>
            </div>

            {/* Right: GST invoicing & payment */}
            <div className="flex items-start gap-5 md:pl-12">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-rose-300 bg-white/70 text-[#e11d48]">
                {/* Document with $ sign icon */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M12 12v6" />
                  <path d="M10 13.5a1.5 1.5 0 0 1 3 0c0 1.5-3 1.5-3 3a1.5 1.5 0 0 0 3 0" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-950">GST invoicing &amp; payment</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  Tax invoices on every order — automatic, downloadable, ready for your bookkeeper. Pay by credit card, or apply for invoice terms if you send regularly. [CONFIRM: invoice terms policy]
                </p>
              </div>
            </div>
          </div>

          {/* Legal footer text */}
          <p className="mt-8 text-center text-xs text-slate-500">
            General information only — confirm with your tax advisor.
          </p>
        </div>
      </div>
    </section>
  );
}

