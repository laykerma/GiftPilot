import React from "react";
import {
  CalendarDays,
  Gift,
  HeartHandshake,
  Palette,
  ReceiptText,
  Send,
  ShieldCheck,
  Sparkles,
  UsersRound,
  WalletCards,
  Zap,
} from "lucide-react";

const giftingMoments = [
  {
    icon: HeartHandshake,
    title: "Employee recognition",
    description: "Celebrate the people who make your business better, every day.",
  },
  {
    icon: Gift,
    title: "Client gifts",
    description: "Build stronger relationships with a thoughtful thank-you.",
  },
  {
    icon: Sparkles,
    title: "Sales incentives & rewards",
    description: "Motivate your team and recognise every win along the way.",
  },
  {
    icon: CalendarDays,
    title: "EOY, Christmas & seasonal",
    description: "Make every milestone and seasonal moment one to remember.",
  },
];

const platformFeatures = [
  {
    icon: WalletCards,
    title: "Recipient choice",
    description: "Give recipients the freedom to choose a gift they genuinely love.",
  },
  {
    icon: Zap,
    title: "Instant delivery",
    description: "Send gifts straight to inboxes in minutes, not days.",
  },
  {
    icon: Send,
    title: "Send one or one thousand",
    description: "Send a one-off thank-you or launch a large campaign with ease.",
  },
  {
    icon: Palette,
    title: "Your brand",
    description: "Make every gift feel personal with your brand and message.",
  },
  {
    icon: ReceiptText,
    title: "Proper Tax Invoices",
    description: "Keep business gifting organised with clear tax invoices.",
  },
  {
    icon: ShieldCheck,
    title: "FBT-aware by design",
    description: "Gift with confidence using a platform built with FBT in mind.",
  },
];

function FeatureCard({ icon: Icon, title, description, compact = false }) {
  return (
    <article className={`rounded-2xl border border-slate-100 bg-white transition hover:-translate-y-1 hover:border-rose-100 hover:shadow-xl hover:shadow-rose-900/5 ${compact ? "p-5 sm:p-6" : "p-6 sm:p-7"}`}>
      <div className={`flex items-center justify-center rounded-xl bg-rose-50 text-rose-500 ${compact ? "h-11 w-11" : "h-12 w-12"}`}>
        <Icon size={compact ? 21 : 23} strokeWidth={1.9} />
      </div>
      <h3 className={`font-bold text-slate-900 ${compact ? "mt-4 text-base" : "mt-5 text-lg"}`}>{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-rose-500 sm:text-sm">
            One platform, every occasion
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            One platform. Every gifting moment
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            From everyday appreciation to the biggest celebrations, make every gift count.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
          {giftingMoments.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>

      <div className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-rose-500 sm:text-sm">
              Thoughtful gifting, without the admin
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Built for the way Australian businesses actually gift
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Everything you need to send the right gift, keep your brand front and centre, and stay on top of the details.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {platformFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} compact />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
