'use client';

import { MessageCircle } from 'lucide-react';

interface FloatingChatButtonsProps {
  facebookUrl: string;
  whatsappNumber: string;
}

export default function FloatingChatButtons({ facebookUrl, whatsappNumber }: FloatingChatButtonsProps) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <>
      {/* Facebook Messenger Button */}
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on Facebook Messenger"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#0084FF] text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </>
  );
}
