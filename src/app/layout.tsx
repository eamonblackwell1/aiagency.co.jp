import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
        {/* Chat widget removed from global layout - only on demo pages */}
        {/* <ChatWidgetFix /> */}
      </body>
    </html>
  );
}
