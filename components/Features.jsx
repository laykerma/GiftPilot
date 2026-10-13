import React from "react";
import {
  CalendarDays,
  FileText,
  Gift,
  Handshake,
  Palette,
  ShieldCheck,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const giftingMoments = [
  {
    icon: Users,
    iconColor: "text-rose-400",
    title: "Employee recognition",
    description:
      "Say thanks for a win, a milestone, or just a hard week. Same-day delivery, personal message, and a card that lets them pick what they actually want.",
  },
  {
    icon: Handshake,
    iconColor: "text-indigo-400",
    title: "Client gifts",
    description:
      "Skip the branded merch nobody keeps. Send a gift card with your logo and a note, and be the one they remember.",
  },
  {
    icon: Trophy,
    iconColor: "text-emerald-500",
    title: "Sales incentives & rewards",
    description:
      "Run promos, spiffs, and channel incentives without warehouse logistics. Order in bulk, schedule delivery, track redemption.",
  },
  {
    icon: CalendarDays,
    iconColor: "text-orange-400",
    title: "EOY, Christmas & seasonal",
    description:
      "Handle five recipients or five hundred from the same dashboard. Batch-send, schedule ahead, and stay under the $300 FBT minor benefit threshold.",
  },
];

const platformFeatures = [
  {
    icon: Gift,
    title: "1. Recipient choice",
    description:
      "Nobody re-gifts a gift card they picked themselves. Instead of guessing whether your recipient drinks wine or wears size M, let them choose from hundreds of retailers across fashion, tech, food, travel and home.",
  },
  {
    icon: Zap,
    title: "2. Instant delivery",
    description:
      "Email or SMS in seconds. Schedule ahead for birthdays, work anniversaries, and end-of-year sends. No shipping, no lead times, no \"did it arrive yet?\"",
  },
  {
    icon: Users,
    title: "3. Send one or one thousand",
    description:
      "No minimums, no subscriptions. Send a single card, or upload a spreadsheet of recipients and deliver hundreds in one flow.",
  },
  {
    icon: Palette,
    title: "4. Your brand, their inbox",
    description:
      "Add your logo, pick a themed greeting card, write a personal message. The gift feels like it came from you, not from a platform.",
  },
  {
    icon: FileText,
    title: "5. Proper tax invoices",
    description:
      "Every order generates a GST-compliant tax invoice. Pay by card, or apply for invoice terms if you send regularly.",
  },
  {
    icon: ShieldCheck,
    title: "6. FBT-aware by design",
    highlight: true,
    description:
      "We flag when your per-recipient spend approaches the $300 minor benefit threshold, so your finance team doesn't have to chase you for a spreadsheet.",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 bg-white">
      {/* Part 1: One platform. Every gifting moment */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="text-center text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          One platform. Every gifting moment
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {giftingMoments.map(({ icon: Icon, iconColor, title, description }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition hover:border-slate-300 hover:shadow-md"
            >
              <div className={iconColor}>
                <Icon size={34} strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-base font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Part 2: Built for the way Australian businesses actually gift */}
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6 sm:pb-24 lg:px-8">
        <h2 className="text-center text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          Built for the way Australian businesses actually gift
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platformFeatures.map(({ icon: Icon, title, description, highlight }) => (
            <article
              key={title}
              className={`flex flex-col rounded-2xl p-7 transition ${
                highlight
                  ? "border border-rose-100 bg-[#fff1f2] hover:border-rose-200"
                  : "border border-slate-200/80 bg-white shadow-xs hover:border-slate-300 hover:shadow-md"
              }`}
            >
              <div className="text-rose-400">
                <Icon size={34} strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-base font-bold text-slate-900">{title}</h3>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

