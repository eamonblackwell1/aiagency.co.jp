import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TransactionActPage() {
  return (
    <>
      <Header />
      <main>
        <div className="h-[76px]" />
        <section className="bg-[var(--bg-cream)] py-16 md:py-20">
          <div className="max-w-[800px] mx-auto px-5 md:px-10">
            <h1 className="text-[28px] md:text-[36px] font-bold text-[var(--text-dark)] mb-8">
              特定商取引法に基づく表記
            </h1>
            
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-10">
              <dl className="space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <dt className="text-sm font-semibold text-[var(--text-medium)] mb-1">販売業者</dt>
                  <dd className="text-base text-[var(--text-dark)]">GLOBAL SPACE Co., Ltd.</dd>
                </div>
                
                <div className="border-b border-gray-100 pb-4">
                  <dt className="text-sm font-semibold text-[var(--text-medium)] mb-1">運営責任者</dt>
                  <dd className="text-base text-[var(--text-dark)]">[責任者名]</dd>
                </div>
                
                <div className="border-b border-gray-100 pb-4">
                  <dt className="text-sm font-semibold text-[var(--text-medium)] mb-1">所在地</dt>
                  <dd className="text-base text-[var(--text-dark)]">〒xxx-xxxx 東京都[住所]</dd>
                </div>
                
                <div className="border-b border-gray-100 pb-4">
                  <dt className="text-sm font-semibold text-[var(--text-medium)] mb-1">電話番号</dt>
                  <dd className="text-base text-[var(--text-dark)]">xxx-xxxx-xxxx</dd>
                </div>
                
                <div className="border-b border-gray-100 pb-4">
                  <dt className="text-sm font-semibold text-[var(--text-medium)] mb-1">メールアドレス</dt>
                  <dd className="text-base text-[var(--text-dark)]">info@aiagency.co.jp</dd>
                </div>
                
                <div className="border-b border-gray-100 pb-4">
                  <dt className="text-sm font-semibold text-[var(--text-medium)] mb-1">販売価格</dt>
                  <dd className="text-base text-[var(--text-dark)]">¥19,900/月（税込）〜</dd>
                </div>
                
                <div className="border-b border-gray-100 pb-4">
                  <dt className="text-sm font-semibold text-[var(--text-medium)] mb-1">支払方法</dt>
                  <dd className="text-base text-[var(--text-dark)]">銀行振込、クレジットカード</dd>
                </div>
                
                <div className="border-b border-gray-100 pb-4">
                  <dt className="text-sm font-semibold text-[var(--text-medium)] mb-1">サービス提供時期</dt>
                  <dd className="text-base text-[var(--text-dark)]">契約成立後、速やかに提供</dd>
                </div>
                
                <div>
                  <dt className="text-sm font-semibold text-[var(--text-medium)] mb-1">返品・キャンセル</dt>
                  <dd className="text-base text-[var(--text-dark)]">
                    サービスの性質上、提供開始後のキャンセル・返金はお受けできません。
                    ご契約前に無料相談にてサービス内容をご確認ください。
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


