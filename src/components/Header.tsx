"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "製品", href: "#product" },
    // { label: "料金", href: "#pricing" },
    // { label: "Information", href: "#info" },
    { label: "お問い合わせ", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[1000] bg-white border-b border-[var(--border-gray)]"
        style={{ boxShadow: "var(--shadow-sm)" }}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-[76px]">
            {/* Logo - Left */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              {/* Phone/AI icon placeholder */}
              <svg 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-[var(--brand-teal)]"
              >
                <path 
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M14.5 2a7.5 7.5 0 017.5 7.5" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M14.5 6A3.5 3.5 0 0118 9.5" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-2xl font-bold text-[var(--text-dark)]">
                AI Agency Japan
              </span>
            </Link>

            {/* Center Navigation - Desktop */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[16px] font-medium text-[var(--text-dark)] hover:text-[var(--brand-teal)] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Side - CTA Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              {/* <Link href="#download" className="btn-primary">
                資料ダウンロード
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </Link> */}
              <Link href="#contact" className="btn-secondary">
                お問い合わせ
              </Link>
            </div>

            {/* Mobile: CTA + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center px-4 py-2 bg-[var(--brand-teal)] text-white text-[13px] font-semibold rounded-full whitespace-nowrap hover:bg-[var(--brand-teal-hover)] transition-colors"
              >
                お問い合わせ
              </Link>
              <button
                className="p-3 -mr-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="メニュー"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="var(--text-dark)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-[1001] animate-fade-in-backdrop md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Slide-in Menu */}
          <div className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[300px] bg-white z-[1002] animate-slide-in-right md:hidden">
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2"
                aria-label="閉じる"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-dark)" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-5 text-[16px] font-medium text-[var(--text-dark)] border-b border-[var(--border-gray)] hover:bg-[var(--brand-teal-light)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              {/* <div className="p-6">
                <Link 
                  href="#download" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full"
                >
                  資料ダウンロード
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </Link>
              </div> */}
            </nav>
          </div>
        </>
      )}
    </>
  );
}
