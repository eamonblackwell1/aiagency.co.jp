import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
// import { ChatWidgetFix } from "@/components/ChatWidgetFix";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Agency Japan | Voice AI Receptionist",
  description: "AI-powered voice agents for after-hours and overflow calls. Never miss a customer again.",
  keywords: ["AI receptionist", "voice AI", "Japan", "after hours", "customer service", "automation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {/* <ChatWidgetFix /> */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69676a4e5c8c5b08b1b162fb"
        />
      </body>
    </html>
  );
}
