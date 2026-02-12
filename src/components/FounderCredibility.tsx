"use client";

export function FounderCredibility() {
  return (
    <section className="bg-white py-12 md:py-14 lg:py-16">
      <div className="max-w-[900px] mx-auto px-5 md:px-8 lg:px-10">
        <div className="bg-[var(--brand-teal-light)] rounded-xl border border-[rgba(0,160,160,0.18)] p-6 md:p-8">
          <h2 className="text-[24px] md:text-[28px] font-bold text-[var(--text-dark)] mb-3">
            創業者について
          </h2>
          <p className="text-[15px] md:text-base text-[var(--text-medium)] leading-relaxed">
            AI Agency Japanは、共同創業者の渡邉珠理（2021年ミス・ジャパン）とエイモン・ブラックウェル（Eamon Blackwell）によって東京で設立されました。
            美容業界での豊富なネットワークとAI技術の専門知識を活かし、サロン・クリニック向けに最適なAIソリューションをご提供しています。
          </p>
        </div>
      </div>
    </section>
  );
}
