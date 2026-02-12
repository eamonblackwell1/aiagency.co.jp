"use client";

import Image from "next/image";

export function Benefits() {
  const benefitRows = [
    {
      label: "24時間対応",
      benefits: ["診療時間外・営業時間外の予約にも対応", "休診日・定休日・夜間も自動受付", "機会損失を防止"],
      stat: "📊 年間700万円以上の予約機会を確保",
    },
    {
      label: "業務効率化",
      benefits: ["診療中・施術中の電話対応を削減", "スタッフが本来業務に集中"],
      stat: "📊 受付スタッフの電話対応時間を50%削減",
    },
    {
      label: "予約管理",
      benefits: ["自然な日本語で応答", "予約システムと連携可能", "ダブルブッキング防止"],
      stat: "📊 音声認識精度95%以上の自然な会話",
    },
    {
      label: "ウェブチャット",
      benefits: ["ホームページに簡単設置", "Instagram連携対応", "よくある質問を自動回答"],
      stat: "📊 ウェブからの問い合わせ対応を80%自動化",
    },
  ];

  return (
    <section className="bg-white py-14 md:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-10">
        {/* Section Headline */}
        <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[var(--brand-teal)] text-center mb-10 md:mb-12 lg:mb-14">
          AI音声受付＆チャットボットで実現できること
        </h2>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          
          {/* Left Column: Animated GIF */}
          <div className="w-full lg:w-[45%] order-1 lg:order-1">
            <div className="relative w-full max-w-[600px] mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/AI_Dental_Receptionist_GIF_Creation.gif"
                alt="AI音声受付システムがリアルタイムで電話対応し、予約カレンダーに自動登録するデモンストレーション"
                width={600}
                height={400}
                className="w-full h-auto"
                unoptimized
                priority
              />
            </div>
          </div>

          {/* Right Column: Benefits List */}
          <div className="w-full lg:w-[55%] order-2 lg:order-2">
            <div className="flex flex-col gap-6 md:gap-8">
              {benefitRows.map((row, index) => (
                <BenefitRow 
                  key={index} 
                  label={row.label} 
                  benefits={row.benefits}
                  stat={row.stat}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitRow({ 
  label, 
  benefits, 
  stat 
}: { 
  label: string; 
  benefits: string[]; 
  stat: string;
}) {
  return (
    <div className="flex flex-col">
      {/* Arrow Label + Benefits Text Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        {/* Arrow Label */}
        <div className="shrink-0">
          <span className="inline-flex items-center bg-[var(--brand-teal)] text-white text-sm md:text-base font-bold px-5 md:px-6 py-2.5 md:py-3 rounded-r-full">
            {label}
            <svg 
              className="ml-2 w-4 h-4" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </div>

        {/* Benefit Text */}
        <div className="flex-1">
          <p className="text-[15px] md:text-base text-[var(--text-dark)] leading-relaxed">
            {benefits.map((benefit, index) => (
              <span key={index}>
                {benefit}
                {index < benefits.length - 1 && (
                  <span className="mx-2 md:mx-3 text-[var(--text-light)]">/</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* ROI Stat */}
      <div className="mt-3">
        <div className="inline-block bg-[var(--brand-teal-light)] border-l-4 border-[var(--brand-teal)] px-3 md:px-4 py-2.5 md:py-3 rounded-r">
          <span className="text-sm md:text-[15px] font-bold text-[var(--brand-teal)]">
            {stat}
          </span>
        </div>
      </div>
    </div>
  );
}
