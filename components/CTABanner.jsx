import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="get-started" className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-700 via-violet-700 to-fuchsia-600 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
        <div className="absolute -left-16 -top-28 h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute -bottom-36 -right-10 h-80 w-80 rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-2 text-xs font-bold sm:text-sm"><Sparkles size={15} /> Món quà ý nghĩa bắt đầu từ đây</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">Sẵn sàng tạo niềm vui?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-violet-100 sm:text-base">Tạo chiến dịch quà tặng tiếp theo dễ dàng hơn — để bạn tập trung vào những điều quan trọng nhất.</p>
          <a href="mailto:hello@giftpilot.example" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-violet-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-violet-50">
            Trao đổi với GiftPilot <ArrowRight size={17} />
          </a>
          <p className="mt-4 text-xs text-violet-200">Không ràng buộc · Đội ngũ luôn sẵn sàng hỗ trợ</p>
        </div>
      </div>
    </section>
  );
}
