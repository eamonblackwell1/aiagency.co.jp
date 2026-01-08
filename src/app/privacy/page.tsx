import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <div className="h-[76px]" />
        <section className="bg-[var(--bg-cream)] py-16 md:py-20">
          <div className="max-w-[800px] mx-auto px-5 md:px-10">
            <h1 className="text-[28px] md:text-[36px] font-bold text-[var(--text-dark)] mb-8">
              プライバシーポリシー
            </h1>
            
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 prose prose-gray max-w-none">
              <p className="text-[var(--text-medium)] mb-6">
                AI Agency Japan（以下「当社」）は、お客様の個人情報の保護に努め、以下のプライバシーポリシーに従って個人情報を取り扱います。
              </p>
              
              <h2 className="text-xl font-bold text-[var(--text-dark)] mt-8 mb-4">1. 収集する情報</h2>
              <p className="text-[var(--text-medium)] mb-4">
                当社は、サービスの提供にあたり、以下の情報を収集することがあります：
              </p>
              <ul className="list-disc pl-6 text-[var(--text-medium)] mb-4 space-y-2">
                <li>氏名、クリニック名</li>
                <li>メールアドレス、電話番号</li>
                <li>お問い合わせ内容</li>
                <li>サービス利用に関する情報</li>
              </ul>
              
              <h2 className="text-xl font-bold text-[var(--text-dark)] mt-8 mb-4">2. 情報の利用目的</h2>
              <p className="text-[var(--text-medium)] mb-4">
                収集した情報は、以下の目的で利用します：
              </p>
              <ul className="list-disc pl-6 text-[var(--text-medium)] mb-4 space-y-2">
                <li>サービスの提供・運営</li>
                <li>お問い合わせへの対応</li>
                <li>サービスの改善・開発</li>
                <li>重要なお知らせの送付</li>
              </ul>
              
              <h2 className="text-xl font-bold text-[var(--text-dark)] mt-8 mb-4">3. 情報の管理</h2>
              <p className="text-[var(--text-medium)] mb-4">
                当社は、お客様の個人情報を適切に管理し、不正アクセス、紛失、破壊、改ざん、漏洩等を防止するための必要な措置を講じます。
              </p>
              
              <h2 className="text-xl font-bold text-[var(--text-dark)] mt-8 mb-4">4. 第三者への提供</h2>
              <p className="text-[var(--text-medium)] mb-4">
                当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
              </p>
              
              <h2 className="text-xl font-bold text-[var(--text-dark)] mt-8 mb-4">5. お問い合わせ</h2>
              <p className="text-[var(--text-medium)] mb-4">
                本ポリシーに関するお問い合わせは、以下までご連絡ください：
                <br />
                Email: privacy@aiagency.co.jp
              </p>
              
              <p className="text-sm text-[var(--text-light)] mt-8">
                制定日：2026年1月1日
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}





