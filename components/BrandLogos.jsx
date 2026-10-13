import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const brands = [
  { name: "Coles", style: "font-black lowercase tracking-tight text-red-600" },
  { name: "JB Hi-Fi", style: "font-black tracking-tight text-slate-950" },
  { name: "Myer", style: "font-serif font-bold tracking-wide text-blue-900" },
  { name: "rebel", style: "font-black italic lowercase tracking-tight text-slate-800" },
  { name: "THE ICONIC", style: "font-black tracking-[0.08em] text-slate-900" },
  { name: "HOYTS", style: "font-black italic tracking-wide text-red-700" },
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
    <section id="brands" className="scroll-mt-20 border-y border-slate-100 bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-400 sm:text-sm">
          HUNDREDS OF BRANDS YOUR RECIPIENTS LOVE
        </p>
        <div className="mt-7 flex items-center gap-3 sm:gap-5">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Scroll brands left"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-rose-300 hover:text-rose-600 sm:h-10 sm:w-10"
          >
            <ArrowLeft size={18} />
          </button>
          <div
            ref={carouselRef}
            className="flex min-w-0 flex-1 snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
          >
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex h-20 min-w-[9.5rem] snap-center items-center justify-center rounded-xl border border-slate-100 bg-white px-5 text-xl transition hover:border-slate-200 hover:shadow-sm sm:min-w-0 sm:flex-1"
                aria-label={brand.name}
              >
                <span className={brand.style}>{brand.name}</span>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Scroll brands right"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-rose-300 hover:text-rose-600 sm:h-10 sm:w-10"
          >
            <ArrowRight size={18} />
          </button>
        </div>
        <div className="mt-4 flex justify-center gap-2 sm:hidden" aria-hidden="true">
          <span className="h-1.5 w-6 rounded-full bg-rose-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
        </div>
      </div>
    </section>
  );
}
