import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function CompanyPage() {
  const companyInfo = [
    { label: "会社名", value: "有限会社グローバルスペース (Global Space LLC)" },
    { label: "屋号", value: "AI Agency Japan" },
    { label: "所在地", value: "東京都目黒区緑が丘二丁目12番3号" },
    { label: "代表者", value: "渡辺泰三" },
    { label: "設立", value: "1991年9月6日" },
    {
      label: "事業内容",
      value: "サロン・クリニック向けAIコミュニケーションサービスの提供",
    },
    { label: "URL", value: "https://aiagency.co.jp" },
  ];

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

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <table className="w-full border-collapse">
                <tbody>
                  {companyInfo.map((item) => (
                    <tr key={item.label} className="border-b border-gray-100 last:border-b-0">
                      <th
                        scope="row"
                        className="w-[34%] px-5 py-4 md:px-8 md:py-5 text-left text-sm font-semibold text-[var(--text-medium)] align-top bg-gray-50/70"
                      >
                        {item.label}
                      </th>
                      <td className="px-5 py-4 md:px-8 md:py-5 text-base text-[var(--text-dark)] break-words">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}





