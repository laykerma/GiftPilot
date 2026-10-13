import React from "react";
import { CalendarClock, Check, CreditCard, Gift, Upload, UserRound } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Gift,
    title: "Choose your gift",
    description: "Pick a gift card or let recipients choose from brands they already love.",
  },
  {
    number: "02",
    icon: Upload,
    title: "Personalise & upload",
    description: "Add your message and brand, then upload recipient details in one go.",
  },
  {
    number: "03",
    icon: CalendarClock,
    title: "Send now or schedule",
    description: "Deliver instantly or schedule your gifts for the perfect moment.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-rose-500 sm:text-sm">
            Easy as one, two, three
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            From brief to inbox in under five minutes
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            A simpler way to send thoughtful gifts, whether you are celebrating one person or your whole team.
          </p>
        </div>

        <div className="relative mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:mt-16">
          <div className="absolute left-[18%] right-[18%] top-8 hidden border-t-2 border-dashed border-rose-200 md:block" aria-hidden="true" />
          {steps.map(({ number, icon: Icon, title, description }) => (
            <article key={number} className="relative flex flex-col items-center px-3 text-center">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-white bg-rose-500 text-white shadow-lg shadow-rose-500/20">
                <Icon size={25} strokeWidth={1.9} />
              </div>
              <span className="mt-5 rounded-full bg-rose-50 px-3 py-1 text-xs font-extrabold tracking-wider text-rose-600">
                STEP {number}
              </span>
              <h3 className="mt-3 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-rose-100 bg-rose-50">
          <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8 lg:p-10">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-rose-500 shadow-sm">
                <UserRound size={22} />
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-slate-950">FBT-friendly by design</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Make more confident gifting decisions with a platform designed to help Australian businesses keep FBT considerations in view.
                </p>
              </div>
            </div>

            <div className="hidden h-16 border-l border-rose-200 md:block" aria-hidden="true" />

            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-rose-500 shadow-sm">
                <CreditCard size={22} />
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-slate-950">FBT invoicing & payment</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Keep gifting admin together with straightforward payment and invoicing support for your team.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 border-t border-rose-100 bg-white/60 px-5 py-3 text-xs font-semibold text-rose-700 sm:text-sm">
            <Check size={16} /> Thoughtful gifts, with the practical details considered
          </div>
        </div>
      </div>
    </section>
  );
}
