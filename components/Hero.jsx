import React from "react";
import { ArrowRight, Check, Gift, Sparkles } from "lucide-react";

const benefits = ["1-5 min delivery", "Hundreds of brands", "B2F Tax friendly"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf9]">
      <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-rose-100/80 blur-3xl" />
      <div className="absolute -bottom-48 left-1/3 h-80 w-80 rounded-full bg-orange-100/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white px-4 py-2 text-xs font-bold text-rose-600 shadow-sm sm:text-sm">
            <Sparkles size={15} /> The smarter way to send business gifts
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Send gift cards your team and clients actually want.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Make every thank-you count. Send thoughtful digital gift cards in minutes, with effortless delivery and rewards recipients can choose for themselves.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#get-started" className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-500/20 transition hover:-translate-y-0.5 hover:bg-rose-600">
              Get started <ArrowRight size={17} />
            </a>
            <a href="mailto:hello@giftpilot.example" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-rose-300 hover:text-rose-600">
              Talk to our team
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-slate-600">
            {benefits.map((benefit) => (
              <li key={benefit} className="inline-flex items-center gap-2">
                <Check size={16} className="text-emerald-600" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-12 top-20 h-32 w-32 rounded-full bg-rose-200/70 blur-3xl" />
          <div className="absolute -right-12 bottom-20 h-40 w-40 rounded-full bg-orange-200/70 blur-3xl" />

          <div className="relative mx-auto max-w-[19rem] rounded-[2.7rem] border-[8px] border-slate-900 bg-slate-900 p-2 shadow-2xl shadow-rose-900/20 sm:max-w-[21rem]">
            <div className="overflow-hidden rounded-[2rem] bg-white">
              <div className="flex items-center justify-between bg-white px-5 pb-3 pt-5 text-[11px] font-bold text-slate-900">
                <span>9:41</span>
                <span className="h-4 w-20 rounded-full bg-slate-900" aria-hidden="true" />
                <span>•••</span>
              </div>

              <div className="bg-[#fffaf9] px-5 pb-6 pt-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500 text-white"><Gift size={16} /></span>
                    <span className="text-sm font-extrabold text-slate-900">GiftPilot</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-400">•••</span>
                </div>

                <div className="mt-7 rounded-2xl bg-gradient-to-br from-rose-500 via-pink-500 to-orange-400 p-5 text-white shadow-lg shadow-rose-500/20">
                  <div className="flex items-start justify-between">
                    <span className="rounded-lg bg-white/20 p-2"><Sparkles size={16} /></span>
                    <span className="text-[9px] font-bold tracking-[0.16em] text-white/80">A LITTLE THANK YOU</span>
                  </div>
                  <p className="mt-7 text-xs font-medium text-white/80">You&apos;ve got a gift!</p>
                  <p className="mt-1 text-xl font-extrabold">Thanks for being amazing.</p>
                  <div className="mt-5 flex items-center justify-between border-t border-white/25 pt-3">
                    <span className="text-xs font-semibold">Gift card value</span>
                    <span className="text-lg font-extrabold">$50</span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">Choose your favorite</span>
                  <span className="text-[10px] font-bold text-rose-500">See all</span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="flex h-16 items-center justify-center rounded-xl bg-emerald-50 text-xs font-extrabold text-emerald-700">coles</div>
                  <div className="flex h-16 items-center justify-center rounded-xl bg-slate-900 text-center text-[10px] font-extrabold leading-tight text-yellow-300">JB<br />Hi-Fi</div>
                  <div className="flex h-16 items-center justify-center rounded-xl bg-blue-50 text-xs font-extrabold text-blue-800">MYER</div>
                </div>
                <button type="button" className="mt-5 w-full rounded-full bg-slate-900 py-3 text-xs font-bold text-white">Redeem gift card</button>
              </div>
            </div>
          </div>

          <div className="absolute -right-1 top-16 hidden items-center gap-2.5 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:flex sm:-right-8">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><Check size={18} /></span>
            <span><span className="block text-xs font-bold text-slate-900">Gift delivered!</span><span className="mt-0.5 block text-[10px] text-slate-500">Right to their inbox</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
