"use client";

export function ProductModules() {
  const modules = [
    {
      title: "ウェブサイトチャットボット",
      icon: <ChatIcon />,
      points: [
        "ウェブサイトに埋め込むAIアシスタント",
        "24時間365日、お客様の質問に自動対応",
        "来訪者を予約導線へスムーズに案内",
        "日本語・英語・中国語など多言語対応",
      ],
    },
    {
      title: "Instagram DMアシスタント",
      icon: <InstagramIcon />,
      points: [
        "Instagram DMのお問い合わせに自動応答",
        "メニュー・料金・空き状況の質問に対応",
        "よくある質問を即時に一次対応",
        "DM会話を予約につなげる導線を自動化",
      ],
    },
    {
      title: "電話AI受付エージェント",
      icon: <PhoneIcon />,
      points: [
        "電話を自動で受けるAI受付スタッフ",
        "営業時間外・混雑時の取りこぼしを削減",
        "自然な日本語で違和感のない会話",
        "伝言受付とよくある質問対応を自動化",
      ],
    },
  ];

  return (
    <section id="product" className="bg-white py-14 md:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-10">
        <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[var(--brand-teal)] text-center mb-10 md:mb-12 lg:mb-14">
          3つのAIソリューション
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-7">
          {modules.map((module) => (
            <article
              key={module.title}
              className="bg-white border border-[var(--border-gray)] rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6 md:p-7"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--brand-teal-light)] text-[var(--brand-teal)] flex items-center justify-center mb-4">
                {module.icon}
              </div>
              <h3 className="text-[20px] md:text-[22px] font-bold text-[var(--text-dark)] mb-4 leading-snug">
                {module.title}
              </h3>
              <ul className="space-y-2.5">
                {module.points.map((point) => (
                  <li
                    key={point}
                    className="text-[15px] md:text-base text-[var(--text-medium)] leading-relaxed"
                  >
                    ・{point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a8.5 8.5 0 0 1-8.5 8.5H7l-4 3V12a8.5 8.5 0 1 1 18 0Z" />
      <path d="M8.5 10.5h7" />
      <path d="M8.5 14h4.5" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.2 18.85a19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
