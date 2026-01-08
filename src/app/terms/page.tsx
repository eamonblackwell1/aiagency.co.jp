import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <div className="h-[76px]" />
        <section className="bg-[var(--bg-cream)] py-16 md:py-20">
          <div className="max-w-[800px] mx-auto px-5 md:px-10">
            <h1 className="text-[28px] md:text-[36px] font-bold text-[var(--text-dark)] mb-8">
              利用規約
            </h1>
            
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 prose prose-gray max-w-none">
              <p className="text-[var(--text-medium)] mb-6">
                本利用規約（以下「本規約」）は、AI Agency Japan（以下「当社」）が提供するAI音声受付サービス（以下「本サービス」）の利用条件を定めるものです。
              </p>
              
              <h2 className="text-xl font-bold text-[var(--text-dark)] mt-8 mb-4">第1条（適用）</h2>
              <p className="text-[var(--text-medium)] mb-4">
                本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
              </p>
              
              <h2 className="text-xl font-bold text-[var(--text-dark)] mt-8 mb-4">第2条（利用登録）</h2>
              <p className="text-[var(--text-medium)] mb-4">
                登録希望者が当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。
              </p>
              
              <h2 className="text-xl font-bold text-[var(--text-dark)] mt-8 mb-4">第3条（禁止事項）</h2>
              <p className="text-[var(--text-medium)] mb-4">
                ユーザーは、本サービスの利用にあたり、法令または公序良俗に違反する行為、当社のサービスの運営を妨害する行為等を行ってはなりません。
              </p>
              
              <h2 className="text-xl font-bold text-[var(--text-dark)] mt-8 mb-4">第4条（サービスの提供の停止等）</h2>
              <p className="text-[var(--text-medium)] mb-4">
                当社は、メンテナンスや緊急事態等の理由により、事前の通知なくサービスの全部または一部の提供を停止または中断することがあります。
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





