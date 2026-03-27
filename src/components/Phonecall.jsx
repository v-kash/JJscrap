"use client";

import { FaPhoneAlt } from "react-icons/fa";

export default function CallButton() {
  return (
    <a
      href="tel:+919789075963"
      aria-label="Call Now"
      className="
        fixed bottom-6 left-6
        bg-[#0066FF] text-white
        w-12 h-12
        rounded-full
        shadow-lg
        flex items-center justify-center
        hover:scale-110
        transition
        z-50
      "
    >
      <FaPhoneAlt className="text-lg" />
    </a>
  );
}