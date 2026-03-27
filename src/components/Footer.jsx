"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { handleSmoothNav } from "@/utils/smoothScroll";
import { MapPin, Phone, Mail } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const router = useRouter();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,200;1,9..144,300&family=Outfit:wght@300;400;500;600&display=swap');

        .font-outfit { font-family: 'Outfit', sans-serif; }

        .footer-link {
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(242,240,230,0.55);
          display: block;
          transition: all 0.2s ease;
          position: relative;
        }
        .footer-link:hover {
          color: rgba(242,240,230,0.85);
          padding-left: 10px;
        }

        .footer-col-label {
          font-size: 8.5px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: rgba(242,240,230,0.9);
          margin-bottom: 18px;
          display: block;
        }

        .footer-bar {
          border-top: 1px solid rgba(242,240,230,0.1);
          padding: 18px 0;
          text-align: center;
        }

        /* Mobile divider between sections */
        .mobile-section {
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(242,240,230,0.08);
        }
        .mobile-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
      `}</style>

      <footer className="font-outfit bg-[#48092a]">
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-0">
          {/* ── DESKTOP (untouched) ── */}
          <div className="hidden lg:grid lg:grid-cols-[1.6fr_1.2fr_1fr_1fr] gap-6">
            {/* BRAND */}
            <div>
              <Image
                src="/finalfooter.png"
                alt="Logo"
                width={100}
                height={60}
                className="opacity-90"
              />
              <p
                className="text-[12px] mt-2 leading-[1.8] max-w-[260px] line-clamp-2"
                style={{ color: "rgba(242,240,230,0.55)" }}
              >
                Quick doorstep pickup with transparent weighing and best scrap
                value — no hidden cuts.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <span className="footer-col-label">Quick Links</span>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {FOOTER_LINKS.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={(e) => handleSmoothNav(e, l.href, router)}
                    className="footer-link"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* FIND US */}
            <div>
              <span className="footer-col-label">Find Us</span>
              <address className="not-italic space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-[3px] text-[#c22f7b]" />
                  <p
                    className="text-[12px] leading-[1.8]"
                    style={{ color: "rgba(242,240,230,0.55)" }}
                  >
                    No 120, Rajajinagar Main Road
                    <br />
                    Madipakkam, Chennai
                    <br />
                    Tamil Nadu – 600091
                  </p>
                </div>
                <a
                  href="https://maps.app.goo.gl/9x3ATeUcWcE9xik99"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[9px] uppercase text-[#c22f7b] ml-[22px]"
                  style={{ borderBottom: "1px solid rgba(139,0,75,0.55)" }}
                >
                  View on Maps →
                </a>
              </address>
            </div>

            {/* CONTACT */}
            <div>
              <span className="footer-col-label">Contact</span>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#c22f7b]" />
                  <p
                    className="text-[12px]"
                    style={{ color: "rgba(242,240,230,0.55)" }}
                  >
                    +91 97890 75963
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#c22f7b]" />
                  <p
                    className="text-[12px]"
                    style={{ color: "rgba(242,240,230,0.55)" }}
                  >
                    +91 94441 00307
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-[#c22f7b]" />
                  <p
                    className="text-[12px]"
                    style={{ color: "rgba(242,240,230,0.55)" }}
                  >
                    jjscrapbuyers@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── MOBILE ── */}
          <div className="flex flex-col gap-6 lg:hidden">
            {/* Brand */}
            <div className="mobile-section">
              <Image src="/finalfooter.png" alt="Logo" width={90} height={54} />
              <p
                className="text-[12px] mt-3 leading-[1.8]"
                style={{ color: "rgba(242,240,230,0.55)" }}
              >
                Quick doorstep pickup with transparent weighing and best scrap
                value — no hidden cuts.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mobile-section">
              <span className="footer-col-label">Quick Links</span>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {FOOTER_LINKS.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={(e) => handleSmoothNav(e, l.href, router)}
                    className="footer-link"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Find Us + Contact — side by side on mobile */}
            <div className="mobile-section grid grid-cols-2 gap-6">
              {/* Find Us */}
              <div>
                <span className="footer-col-label">Find Us</span>
                <address className="not-italic space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin
                      size={13}
                      className="mt-[3px] text-[#c22f7b] flex-shrink-0"
                    />
                    <p
                      className="text-[11px] leading-[1.8]"
                      style={{ color: "rgba(242,240,230,0.55)" }}
                    >
                      No 120, Rajajinagar Main Road, Madipakkam, Chennai, Tamil
                      Nadu – 600091
                    </p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/9x3ATeUcWcE9xik99"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[9px] uppercase text-[#c22f7b] ml-[21px]"
                    style={{ borderBottom: "1px solid rgba(139,0,75,0.55)" }}
                  >
                    View on Maps →
                  </a>
                </address>
              </div>

              {/* Contact */}
              <div>
                <span className="footer-col-label">Contact</span>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="text-[#c22f7b] flex-shrink-0" />
                    <p
                      className="text-[11px]"
                      style={{ color: "rgba(242,240,230,0.55)" }}
                    >
                      +91 97890 75963
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="text-[#c22f7b] flex-shrink-0" />
                    <p
                      className="text-[11px]"
                      style={{ color: "rgba(242,240,230,0.55)" }}
                    >
                      +91 94441 00307
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail
                      size={13}
                      className="text-[#c22f7b] flex-shrink-0 mt-[2px]"
                    />
                    <p
                      className="text-[11px] break-all"
                      style={{ color: "rgba(242,240,230,0.55)" }}
                    >
                      jjscrapbuyers@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── BOTTOM BAR (shared) ── */}
          <div className="footer-bar mt-10">
            <span
              className="text-[12px]"
              style={{ color: "rgba(242,240,230,0.55)" }}
            >
              © {new Date().getFullYear()} JJ Scrapbuyers. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
