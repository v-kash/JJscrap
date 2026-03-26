"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919789075963"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6
        bg-[#25D366] text-white
        w-12 h-12
        rounded-full
        shadow-lg 
        flex items-center justify-center
        hover:scale-110
        transition
        z-50
      "
    >
      <FaWhatsapp className="text-xl" />
    </a>
  );
}
//9c3a6d