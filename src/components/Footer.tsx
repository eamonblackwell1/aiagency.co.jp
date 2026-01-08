import Link from "next/link";

export function Footer() {
  const footerLinks = [
    { label: "会社情報", href: "/company" },
    { label: "利用規約", href: "/terms" },
    { label: "プライバシーポリシー", href: "/privacy" },
    { label: "特定商取引法に基づく表記", href: "/transaction-act" },
  ];

  return (
    <footer className="bg-[#f9fafb] border-t border-[#e5e7eb]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-[#6b7280] order-2 md:order-1">
            © AI Agency Japan
          </p>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-x-1 gap-y-2 order-1 md:order-2">
            {footerLinks.map((link, index) => (
              <span key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className="text-[13px] md:text-sm text-[#4b5563] underline hover:text-[var(--brand-teal)] transition-colors duration-200"
                >
                  {link.label}
                </Link>
                {index < footerLinks.length - 1 && (
                  <span className="mx-2 md:mx-3 text-[#d1d5db]">|</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}





