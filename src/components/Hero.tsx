"use client";

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-[var(--bg-cream)] py-12 md:py-20 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Left Column - Content */}
          <div className="w-full lg:w-[55%] lg:max-w-[540px]">
            
            {/* Badge */}
            <div className="mb-6 animate-fade-in">
              <span className="inline-block bg-[var(--brand-teal)] text-white text-sm font-semibold px-4 py-2 rounded">
                歯科医院向け
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[32px] md:text-[38px] lg:text-[42px] font-bold text-[var(--text-dark)] leading-[1.3] mb-5 animate-fade-in-delay-1">
              受付業務を<span className="bg-[var(--brand-teal-light)] px-1">AIで自動化</span>。
              <br />
              予約電話を逃さない、
              <br />
              患者満足度が上がる
            </h1>

            {/* Supporting Text */}
            <p className="text-[15px] md:text-base text-[var(--text-medium)] leading-[1.7] mb-8 max-w-[520px] animate-fade-in-delay-2">
              診療中の電話対応、休診日の予約受付、スタッフ不足...
              <br />
              AI音声受付が自然な日本語で応答し、予約を自動管理。
              <br />
              忙しいクリニックの業務効率化を実現します。
            </p>

            {/* Benefit Circles */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-fade-in-delay-3">
              <BenefitCircle 
                icon={<PhoneIcon />}
                text="24時間365日対応"
              />
              <BenefitCircle 
                icon={<CalendarIcon />}
                text="予約自動管理"
              />
              <BenefitCircle 
                icon={<SpeechIcon />}
                text="自然な日本語"
              />
            </div>

            {/* Mobile Hero Image - Shows only on mobile, before CTAs */}
            <div className="lg:hidden w-full my-8 animate-fade-in-delay-2">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/hero-receptionist.png"
                  alt="AI音声受付サービス - プロフェッショナルな受付対応"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="100vw"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
              {/* Download Button */}
              <div className="flex flex-col items-center sm:items-start">
                <span className="inline-block bg-[var(--yellow-badge)] text-[var(--text-dark)] text-[13px] font-bold px-3 py-1.5 rounded-full mb-2">
                  今すぐ確認！
                </span>
                <Link 
                  href="#download"
                  className="w-full sm:w-[240px] inline-flex items-center justify-center gap-2 bg-[var(--btn-black)] text-white text-base font-semibold px-8 py-4 rounded-lg hover:bg-[var(--btn-black-hover)] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  資料ダウンロード
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </Link>
              </div>

              {/* Contact Button */}
              <div className="flex flex-col items-center sm:items-start">
                <span className="inline-block bg-[var(--yellow-badge)] text-[var(--text-dark)] text-[13px] font-bold px-3 py-1.5 rounded-full mb-2">
                  30秒で問い合わせ！
                </span>
                <Link 
                  href="#contact"
                  className="w-full sm:w-[240px] inline-flex items-center justify-center gap-2 bg-white text-[var(--text-dark)] text-base font-semibold px-8 py-4 rounded-lg border-2 border-[var(--text-dark)] hover:bg-[var(--btn-black)] hover:text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  お問い合わせ
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image (Desktop only) */}
          <div className="hidden lg:block w-full lg:w-[45%] animate-fade-in-delay-2">
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/hero-receptionist.png"
                alt="AI音声受付サービス - プロフェッショナルな受付対応"
                fill
                className="object-cover object-top"
                priority
                sizes="45vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Benefit Circle Component
function BenefitCircle({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center p-4">
      <div className="text-[var(--brand-teal)] mb-2">
        {icon}
      </div>
      <span className="text-[12px] md:text-[13px] font-semibold text-[var(--text-dark)] text-center leading-tight">
        {text}
      </span>
    </div>
  );
}

// Icon Components
function PhoneIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      <path d="M14.5 2a7.5 7.5 0 017.5 7.5" />
      <path d="M14.5 6A3.5 3.5 0 0118 9.5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function SpeechIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <path d="M8 10h.01" />
      <path d="M12 10h.01" />
      <path d="M16 10h.01" />
    </svg>
  );
}
