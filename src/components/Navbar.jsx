"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { handleSmoothNav } from "@/utils/smoothScroll";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" }, // ✅ page
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }

        .nav-link::after {
          content: ''; display: block; height: 1px;
          width: 0; background: #8b004b;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: #8b004b; }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f2f0e6] border-b border-[#8b004b]/10 h-16 font-outfit">
        <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-[#8b004b]/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center pt-3">
            <Image
              src="/logo3.png"
              alt="JJ Scrapbuyers"
              width={120}
              height={70}
              priority
            />
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-7 list-none">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={(e) => handleSmoothNav(e, l.href, router)}
                  className="nav-link text-[10.5px] tracking-[0.14em] uppercase text-[#9a8585]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919789075963"
              target="_blank"
              className="hidden md:inline text-[10px] tracking-[0.12em] uppercase text-[#8b004b] border-b border-[#8b004b]"
            >
              WhatsApp
            </a>

            <Link
              href="/#contact"
              className="text-[10px] font-semibold tracking-[0.16em] uppercase px-5 py-2.5 bg-[#8b004b] text-[#f2f0e6] hover:bg-[#5a0030] inline-block"
            >
              Get Quote
            </Link>

            {/* Mobile */}
            <button
              className="flex md:hidden flex-col gap-[5px]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="w-[22px] h-[1.5px] bg-[#1a0010]" />
              <span className="w-[22px] h-[1.5px] bg-[#1a0010]" />
              <span className="w-[22px] h-[1.5px] bg-[#1a0010]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-[#f2f0e6] px-8 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={(e) => {
                setMobileOpen(false);
                handleSmoothNav(e, l.href, router);
              }}
              className="text-[12px] tracking-[0.14em] uppercase text-[#9a8585]"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
