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
];

export default function BrandLogos() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: direction * carouselRef.current.clientWidth * 0.75,
      behavior: "smooth",
    });
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
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-rose-300 hover:text-[#e11d48]"
          >
            <ChevronLeft size={18} />
          </button>

          <div
            ref={carouselRef}
            className="flex min-w-0 flex-1 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex h-16 min-w-[8.5rem] snap-center items-center justify-center rounded-xl border border-slate-200/80 bg-white px-5 shadow-xs transition hover:border-slate-300 sm:min-w-0 sm:flex-1"
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
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-rose-300 hover:text-[#e11d48]"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

