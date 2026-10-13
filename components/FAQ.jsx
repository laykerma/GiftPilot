import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const leftQuestions = [
  {
    id: "l1",
    question: "Is there a minimum order?",
    answer:
      "No. Send one card or a thousand from the same account. No subscription, no monthly commitment.",
  },
  {
    id: "l2",
    question: "Can I add my company branding?",
    answer:
      "Yes. You can add your company logo, brand colours, custom message, and sender name to the digital gift delivery email.",
  },
  {
    id: "l3",
    question: "How are gift cards delivered?",
    answer:
      "Gift cards are delivered digitally via email or SMS. The recipient clicks a secure link to view and redeem their card.",
  },
  {
    id: "l4",
    question: "Do you provide GST tax invoices?",
    answer:
      "Every order generates a GST-compliant tax invoice. Automatic, downloadable, and ready for your bookkeeper.",
  },
];

const rightQuestions = [
  {
    id: "r1",
    question: "Can I pay on invoice term?",
    answer:
      "Yes. Approved business accounts can pay on invoice terms, or pay instantly via credit card.",
  },
  {
    id: "r2",
    question: "What about Fringe Benefits Tax?",
    answer:
      "Gift cards under $300 per recipient, given infrequently, generally qualify as a minor benefit exempt from Fringe Benefits Tax.",
  },
  {
    id: "r3",
    question: "Do the gift cards expire?",
    answer:
      "Under Australian consumer law, all gift cards sold on GiftPilot come with a minimum 3-year expiry period, and many never expire.",
  },
  {
    id: "r4",
    question: "Can I bulk upload recipients?",
    answer:
      "Yes! You can upload a simple CSV or Excel spreadsheet to deliver hundreds of cards in a single flow.",
  },
];

export default function FAQ() {
  // First item open by default to match Image 1
  const [openItems, setOpenItems] = useState({ l1: true });

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderGroup = (items) => (
    <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-white divide-y divide-slate-200/90 shadow-xs">
      {items.map(({ id, question, answer }) => {
        const isOpen = !!openItems[id];
        return (
          <div key={id} className="transition-colors hover:bg-slate-50/50">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition"
              aria-expanded={isOpen}
              onClick={() => toggleItem(id)}
            >
              <span className="text-sm font-bold text-slate-900 sm:text-base">
                {question}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-slate-500 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 pt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <section id="faq" className="scroll-mt-20 bg-white pb-12 pt-8 sm:pb-16 sm:pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          Business gifting, answered
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {renderGroup(leftQuestions)}
          {renderGroup(rightQuestions)}
        </div>
      </div>
    </section>
  );
}


