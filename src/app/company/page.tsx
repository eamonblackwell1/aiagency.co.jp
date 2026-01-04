import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main>
        <div className="h-[76px]" />
        <section className="bg-[var(--bg-cream)] py-16 md:py-20">
          <div className="max-w-[800px] mx-auto px-5 md:px-10">
            <h1 className="text-[28px] md:text-[36px] font-bold text-[var(--text-dark)] mb-8">
              会社概要
            </h1>
            
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-10">
              <dl className="space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <dt className="text-sm font-semibold text-[var(--text-medium)] mb-1">会社名</dt>
                  <dd className="text-base text-[var(--text-dark)]">GLOBAL SPACE Co., Ltd. (グローバルスペース株式会社)</dd>
                </div>
                
                <div className="border-b border-gray-100 pb-4">
                  <dt className="text-sm font-semibold text-[var(--text-medium)] mb-1">代表者</dt>
                  <dd className="text-base text-[var(--text-dark)]">[代表者名]</dd>
                </div>
                
                <div className="border-b border-gray-100 pb-4">
                  <dt className="text-sm font-semibold text-[var(--text-medium)] mb-1">所在地</dt>
                  <dd className="text-base text-[var(--text-dark)]">〒xxx-xxxx 東京都[住所]</dd>
                </div>
                
                <div className="border-b border-gray-100 pb-4">
                  <dt className="text-sm font-semibold text-[var(--text-medium)] mb-1">設立</dt>
                  <dd className="text-base text-[var(--text-dark)]">[設立日]</dd>
                </div>
                
                <div className="border-b border-gray-100 pb-4">
                  <dt className="text-sm font-semibold text-[var(--text-medium)] mb-1">事業内容</dt>
                  <dd className="text-base text-[var(--text-dark)]">AI音声受付システムの開発・提供</dd>
                </div>
                
                <div>
                  <dt className="text-sm font-semibold text-[var(--text-medium)] mb-1">お問い合わせ</dt>
                  <dd className="text-base text-[var(--text-dark)]">
                    <p>TEL: xxx-xxxx-xxxx</p>
                    <p>Email: info@aiagency.co.jp</p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


