import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "How does GiftPilot work?",
    answer:
      "Choose a gift, personalise your message, add recipients, then send immediately or schedule delivery for later.",
  },
  {
    question: "Can recipients choose their own gift?",
    answer:
      "Yes. You can send a gift card from a specific brand or let recipients select from available brands they know and love.",
  },
  {
    question: "Can I send gifts to multiple people at once?",
    answer:
      "Absolutely. Upload your recipient list to prepare a bulk campaign, personalise the message, and send gifts together.",
  },
  {
    question: "Can I schedule gifts in advance?",
    answer:
      "Yes. Set a future delivery date so birthday, seasonal and recognition gifts arrive at the right time.",
  },
  {
    question: "Can I add my company's branding?",
    answer:
      "You can personalise gifting communications with your business details and a message that feels like it came from your team.",
  },
  {
    question: "How do invoices and FBT work?",
    answer:
      "GiftPilot provides business gifting and invoicing support. FBT treatment depends on your circumstances, so check with your accountant or tax adviser for advice specific to your business.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-rose-500 sm:text-sm">
            Frequently asked questions
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Business gifting, answered
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Everything you need to know to make your next gifting moment easier.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-8 md:grid-cols-2">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article
                key={item.question}
                className="border-b border-slate-200"
              >
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-sm font-bold leading-6 text-slate-900 sm:text-base">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-rose-500 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={answerId}
                    className="pb-5 pr-8 text-sm leading-6 text-slate-600"
                  >
                    {item.answer}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
