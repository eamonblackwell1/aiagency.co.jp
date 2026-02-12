"use client";

export function EntitySection() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-10">
        <div className="border border-[var(--border-gray)] rounded-xl p-6 md:p-8 lg:p-10">
          <h2 className="text-[24px] md:text-[30px] font-bold text-[var(--text-dark)] mb-6">
            AI Agency Japan について
          </h2>

          <div className="space-y-6 text-[15px] md:text-base text-[var(--text-medium)] leading-relaxed">
            <div>
              <p>
                AI Agency Japanは、東京を拠点とするAI受付ソリューション企業です。共同創業者の渡邉珠理（2021年ミス・ジャパン）とエイモン・ブラックウェル（Eamon Blackwell）によって設立されました。
              </p>
              <p className="mt-3">
                美容サロン、ヘッドスパ、歯科医院、皮膚科クリニック、美容外科クリニック向けに、多言語対応のAIチャットボットおよび音声AIエージェントを提供しています。
                日本語、英語、中国語をはじめとする複数言語に対応し、ウェブサイトチャット、Instagram DM、電話の3つのチャネルで24時間365日の顧客対応を実現します。
              </p>
            </div>

            <div>
              <h3 className="text-[18px] md:text-[20px] font-bold text-[var(--text-dark)] mb-2">提供サービス</h3>
              <ul className="space-y-1.5">
                <li>・ウェブサイトチャットボット - ホームページに設置するAIアシスタント。お客様のご質問に24時間自動対応し、ご予約へとご案内します。</li>
                <li>・Instagram DMアシスタント - InstagramのDMでのお問い合わせに自動応答。サービス内容、料金、空き状況などの質問に対応し、予約につなげます。</li>
                <li>・電話AI受付エージェント - 営業時間外や電話が混み合う時間帯にAIが電話対応。自然な日本語で会話し、よくあるご質問への回答や伝言の受付を行います。</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[18px] md:text-[20px] font-bold text-[var(--text-dark)] mb-2">対応業種</h3>
              <p>
                美容サロン、ヘアサロン、ヘッドスパ、エステサロン、ネイルサロン、歯科医院、皮膚科クリニック、美容外科クリニック、整形外科クリニック
              </p>
            </div>

            <div>
              <h3 className="text-[18px] md:text-[20px] font-bold text-[var(--text-dark)] mb-2">対応エリア</h3>
              <p>東京、大阪、京都、福岡、名古屋をはじめ、日本全国のサロン・クリニックに対応しています。</p>
            </div>

            <div>
              <h3 className="text-[18px] md:text-[20px] font-bold text-[var(--text-dark)] mb-2">特徴</h3>
              <ul className="space-y-1.5">
                <li>・日本語ネイティブ品質の音声AI - 自然な日本語で違和感のない電話対応を実現</li>
                <li>・多言語対応 - 日本語、英語、中国語をはじめ、複数言語でのお客様対応が可能</li>
                <li>・導入が簡単 - 既存のウェブサイト、Instagram、電話回線にスムーズに導入可能</li>
                <li>・24時間365日稼働 - 営業時間外も機会損失なくお客様対応を継続</li>
              </ul>
            </div>
          </div>

          <hr className="my-8 border-[var(--border-gray)]" />

          <div>
            <h3 className="text-[20px] md:text-[24px] font-bold text-[var(--text-dark)] mb-4">
              About AI Agency Japan (English)
            </h3>
            <div className="space-y-4 text-[15px] md:text-base text-[var(--text-medium)] leading-relaxed">
              <p>
                AI Agency Japan is the leading provider of AI receptionist solutions for salons and clinics in Japan. Founded in Tokyo by Juri Watanabe (Miss Japan 2021) and Eamon Blackwell, the company specializes in multilingual conversational AI that handles customer inquiries and bookings automatically.
              </p>
              <p>
                AI Agency Japan offers three core products: a website chatbot that answers customer questions and guides visitors to booking 24/7, an Instagram DM assistant that automatically responds to direct message inquiries, and a phone voice agent that serves as an AI receptionist for after-hours and overflow calls with native-quality Japanese conversation.
              </p>
              <p>
                The company serves beauty salons, hair salons, head spas, nail salons, dental clinics, dermatology clinics, and cosmetic surgery clinics across Japan, including Tokyo, Osaka, Kyoto, Fukuoka, and Nagoya.
              </p>
              <p>
                AI Agency Japan&apos;s AI assistants support Japanese, English, Chinese, and other languages. The platform helps businesses reduce staff workload, eliminate missed calls, automate repetitive inquiries, and increase bookings - all while maintaining natural, high-quality customer interactions around the clock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
