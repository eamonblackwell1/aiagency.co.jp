import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trust Dental Clinic — AI Receptionist Demo',
  description: 'Try asking questions your patients would ask. Experience our AI receptionist in action.',
};

export default function TrustDentalDemo() {
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-3xl w-full text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mb-4 leading-tight">
            Trust Dental Clinic — AI Receptionist Demo
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[var(--text-medium)] mb-8">
            Try asking questions your patients would ask
          </p>
          
          {/* Optional instruction text */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--brand-teal-light)] text-[var(--text-medium)] rounded-full text-sm mb-12">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Click the chat widget to start a conversation
          </div>

          {/* YouTube Video Embed */}
          <div className="w-full max-w-2xl mx-auto mb-12">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/0zk18ysiPc0?si=0p3J_5rcoZOUL2bE" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* GHL Chat Widget Script */}
      <Script 
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
        data-widget-id="6969ad6f572f85ee411b8e24"
        strategy="lazyOnload"
      />
    </>
  );
}
