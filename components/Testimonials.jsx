import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "“We sent 240 cards for our EOFY thank-you campaign in a single afternoon. Our office manager used to spend two weeks on this.”",
    name: "Sarah T",
    role: "People & Culture Manager, Sydney",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "“We ran a Q3 sprint, launched Monday, first cards were in reps’ hands by lunch. The team was chasing target the same afternoon.”",
    name: "Mark R",
    role: "National Sales Manager, Melbourne",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "“The FBT threshold flag alone has saved our finance team hours every quarter.”",
    name: "Priya K",
    role: "Finance Manager, Brisbane",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          Trusted by Australian teams
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-xs transition hover:border-slate-300 hover:shadow-md"
            >
              <div>
                {/* 5 Yellow Stars matching Image 1 */}
                <div className="flex items-center gap-1 text-amber-400" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} size={17} fill="currentColor" stroke="none" />
                  ))}
                </div>

                <p className="mt-5 text-sm font-medium leading-relaxed text-slate-800">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-11 w-11 shrink-0 rounded-full object-cover shadow-xs"
                />
                <div>
                  <p className="text-sm font-bold text-slate-950">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

