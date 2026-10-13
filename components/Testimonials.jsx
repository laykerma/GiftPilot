import React from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We used to spend days organising end-of-year gifts. Now our whole team can choose something they actually love, and the process takes minutes.",
    name: "Olivia Martin",
    role: "People & Culture Manager, Northstar",
    initials: "OM",
    avatar: "bg-rose-100 text-rose-700",
  },
  {
    quote:
      "GiftPilot has made it so easy to thank clients at the right moment. It feels personal for them and wonderfully simple for our team.",
    name: "James Chen",
    role: "Customer Success Lead, Orbit",
    initials: "JC",
    avatar: "bg-sky-100 text-sky-700",
  },
  {
    quote:
      "From welcome gifts to sales rewards, we can run every campaign in one place. Our people love having the freedom to pick their own gift.",
    name: "Sophie Williams",
    role: "Head of Operations, Brightly",
    initials: "SW",
    avatar: "bg-amber-100 text-amber-700",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-20 bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-rose-500 sm:text-sm">
            Kind words, real impact
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Trusted by Australian teams
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-7"
            >
              <div
                className="flex items-center gap-1 text-amber-400"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
                <span className="sr-only">5 out of 5 stars</span>
              </div>
              <Quote size={25} className="mt-6 text-rose-200" />
              <blockquote className="mt-2 flex-1 text-sm leading-7 text-slate-700">
                “{testimonial.quote}”
              </blockquote>
              <div className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${testimonial.avatar}`}
                  aria-label={`${testimonial.name} avatar`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
