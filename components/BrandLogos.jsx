import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const brands = [
  { name: "Coles", render: () => <span className="text-xl font-black lowercase tracking-tight text-[#e11d48]">coles</span> },
  {
    name: "JB Hi-Fi",
    render: () => (
      <span className="rounded bg-[#ffde00] px-3 py-1 text-base font-black italic tracking-tighter text-slate-950">
        JB HI-FI
      </span>
    ),
  },
  { name: "MYER", render: () => <span className="font-serif text-lg font-bold tracking-widest text-slate-900">MYER</span> },
  { name: "rebel", render: () => <span className="text-xl font-black italic tracking-tight text-slate-900">rebel</span> },
  { name: "THE ICONIC", render: () => <span className="text-sm font-black tracking-[0.14em] text-slate-900">THE ICONIC</span> },
  { name: "HOYTS", render: () => <span className="text-xl font-black italic tracking-wide text-[#e11d48]">HOYTS</span> },
  { name: "Woolworths", render: () => <span className="text-lg font-black tracking-tight text-[#168339]">woolworths</span> },
  { name: "Bunnings", render: () => <span className="text-base font-black tracking-wider text-[#0e5257]">BUNNINGS</span> },
  { name: "David Jones", render: () => <span className="font-serif text-sm font-bold tracking-[0.18em] text-slate-900">DAVID JONES</span> },
  {
    name: "Uber Eats",
    render: () => (
      <span className="text-base font-bold text-slate-950">
        Uber <span className="font-extrabold text-[#06c167]">Eats</span>
      </span>
    ),
  },
  { name: "SEPHORA", render: () => <span className="text-sm font-medium tracking-[0.24em] text-slate-950">SEPHORA</span> },
  { name: "Flight Centre", render: () => <span className="text-xs font-black tracking-wider text-[#e11d48]">FLIGHT CENTRE</span> },
];

export default function BrandLogos() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollDistance = Math.max(220, container.clientWidth * 0.7);
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (direction === 1) {
      if (container.scrollLeft >= maxScrollLeft - 15) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollDistance, behavior: "smooth" });
      }
    } else {
      if (container.scrollLeft <= 15) {
        container.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -scrollDistance, behavior: "smooth" });
      }
    }
  };

  return (
    <section id="brands" className="scroll-mt-20 border-y border-slate-100 bg-[#fafafa] py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-[#e11d48]">
          HUNDREDS OF BRANDS YOUR RECIPIENTS LOVE
        </p>

        <div className="mt-7 flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Scroll brands left"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-xs transition hover:border-rose-300 hover:bg-rose-50/50 hover:text-[#e11d48] active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={carouselRef}
            className="flex min-w-0 flex-1 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex h-16 w-40 shrink-0 snap-start items-center justify-center rounded-xl border border-slate-200/80 bg-white px-5 shadow-xs transition hover:border-slate-300 hover:shadow-sm sm:w-48 select-none"
                aria-label={brand.name}
              >
                {brand.render()}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Scroll brands right"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-xs transition hover:border-rose-300 hover:bg-rose-50/50 hover:text-[#e11d48] active:scale-95"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

