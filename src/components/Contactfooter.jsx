"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const CONTACT_DETAILS = [
  {
    label: "Call Us",
    value: "+91 98765 43210",
    sub: "Mon – Sat, 9 AM – 7 PM",
    href: "tel:+919876543210",
  },
  {
    label: "WhatsApp",
    value: "+91 98765 43210",
    sub: "Quick response guaranteed",
    href: "https://wa.me/919876543210",
  },
  {
    label: "Address",
    value: "2nd Floor, President Plaza",
    sub: "SG Highway, Thaltej, Ahmedabad – 380054",
    href: "https://maps.google.com/?q=President+Plaza+SG+Highway+Thaltej+Ahmedabad",
  },
];

const FOOTER_LINKS = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Services",     href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Gallery",      href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact",      href: "#contact" },
];

const METALS = ["Iron", "Steel", "Copper", "Aluminium", "Brass", "Stainless Steel", "Cast Iron", "MS Scrap"];

export default function ContactFooter() {
  const revealRef = useRef(null);

  useEffect(() => {
    const els = revealRef.current?.querySelectorAll("[data-reveal]");
    if (!els?.length) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.dataset.revealed = "true";
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,200;1,9..144,300&family=Outfit:wght@300;400;500;600&display=swap');

        .font-fraunces { font-family: 'Fraunces', Georgia, serif; }
        .font-outfit    { font-family: 'Outfit', sans-serif; }

        [data-reveal] {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1),
                      transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        [data-reveal][data-revealed="true"] {
          opacity: 1 !important;
          transform: none !important;
        }
        [data-d="1"] { transition-delay: 0.05s; }
        [data-d="2"] { transition-delay: 0.15s; }
        [data-d="3"] { transition-delay: 0.25s; }
        [data-d="4"] { transition-delay: 0.35s; }
        [data-d="5"] { transition-delay: 0.46s; }

        /* ── Contact card ── */
        .contact-card {
          position: relative;
          padding: 28px 0;
          border-bottom: 1px solid rgba(242,240,230,0.10);
          display: flex;
          align-items: flex-start;
          gap: 20px;
          text-decoration: none;
          transition: padding-left 0.3s ease;
          cursor: pointer;
        }
        .contact-card:first-child { border-top: 1px solid rgba(242,240,230,0.10); }
        .contact-card::before {
          content: '';
          position: absolute;
          left: 0; top: 50%;
          transform: translateY(-50%);
          width: 0; height: 2px;
          background: #f2f0e6;
          transition: width 0.3s ease;
        }
        .contact-card:hover { padding-left: 14px; }
        .contact-card:hover::before { width: 8px; }

        /* ── Big CTA button ── */
        .wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: #8b004b;
          background: #f2f0e6;
          text-decoration: none;
          padding: 16px 32px;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .wa-btn:hover {
          background: #1a0010;
          color: #f2f0e6;
        }

        /* ── Footer nav links ── */
        .footer-link {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(242,240,230,0.40);
          text-decoration: none;
          transition: color 0.2s ease;
          display: block;
        }
        .footer-link:hover { color: rgba(242,240,230,0.90); }

        /* ── Footer bottom bar ── */
        .footer-bar {
          border-top: 1px solid rgba(242,240,230,0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0;
          flex-wrap: wrap;
          gap: 10px;
        }

        /* ── Marquee metals strip (footer version) ── */
        .footer-metals {
          overflow: hidden;
          white-space: nowrap;
          border-top: 1px solid rgba(242,240,230,0.08);
          border-bottom: 1px solid rgba(242,240,230,0.08);
          padding: 10px 0;
          margin: 32px 0;
        }
        .footer-metals-track {
          display: inline-flex;
          animation: fmarquee 20s linear infinite;
        }
        .footer-metals-track:hover { animation-play-state: paused; }
        .footer-metal-item {
          font-family: 'Outfit', sans-serif;
          font-size: 9px;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: rgba(242,240,230,0.25);
          padding: 0 20px;
        }
        .footer-metal-sep {
          width: 3px; height: 3px;
          border-radius: 50%;
          background: rgba(242,240,230,0.15);
          margin: 0 8px;
          align-self: center;
          flex-shrink: 0;
        }
        @keyframes fmarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div ref={revealRef} className="font-outfit">

        {/* ════════════════════════════════
            CONTACT SECTION
        ════════════════════════════════ */}
        <section
          id="contact"
          style={{ background: "#8b004b" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-20">

            {/* Top row — label + headline + CTA */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-end mb-14">

              <div>
                {/* Eyebrow */}
                <div className="flex items-center gap-2.5 mb-5" data-reveal data-d="1">
                  <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: "rgba(242,240,230,0.35)" }} />
                  <span className="font-outfit text-[9px] tracking-[0.30em] uppercase" style={{ color: "rgba(242,240,230,0.40)" }}>
                    Get in Touch
                  </span>
                </div>

                {/* Headline */}
                <h2
                  className="font-fraunces text-[40px] lg:text-[52px] font-light leading-[1.1]"
                  style={{ color: "#f2f0e6" }}
                  data-reveal data-d="2"
                >
                  Ready to sell
                  <br />
                  your scrap?
                  <br />
                  <em className="italic font-extralight" style={{ color: "rgba(242,240,230,0.55)" }}>
                    We're one call away.
                  </em>
                </h2>
              </div>

              {/* WhatsApp CTA */}
              <div data-reveal data-d="3">
                <a href="https://wa.me/919876543210" className="wa-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.099 1.514 5.829L.057 23.571l5.886-1.473A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.37l-.359-.214-3.722.931.976-3.564-.234-.375A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Divider */}
            <div
              className="w-full h-px mb-0"
              style={{ background: "rgba(242,240,230,0.08)" }}
              data-reveal data-d="2"
            />

            {/* Contact cards */}
            <div data-reveal data-d="3">
              {CONTACT_DETAILS.map((c) => (
                <a key={c.label} href={c.href} className="contact-card" target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {/* Label */}
                  <div style={{ width: "90px", flexShrink: 0 }}>
                    <span
                      className="font-outfit text-[9px] tracking-[0.20em] uppercase"
                      style={{ color: "rgba(242,240,230,0.35)" }}
                    >
                      {c.label}
                    </span>
                  </div>

                  {/* Value + sub */}
                  <div>
                    <div
                      className="font-fraunces text-[22px] font-light leading-none mb-1"
                      style={{ color: "#f2f0e6" }}
                    >
                      {c.value}
                    </div>
                    <div
                      className="font-outfit text-[11px] font-light"
                      style={{ color: "rgba(242,240,230,0.40)" }}
                    >
                      {c.sub}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="ml-auto" style={{ color: "rgba(242,240,230,0.25)" }}>
                    <span style={{
                      display: "inline-block", width: "20px", height: "1px",
                      background: "currentColor", position: "relative", verticalAlign: "middle"
                    }}>
                      <span style={{
                        position: "absolute", right: 0, top: "-3px",
                        width: "6px", height: "6px",
                        borderRight: "1px solid currentColor",
                        borderTop: "1px solid currentColor",
                        transform: "rotate(45deg)",
                        display: "inline-block",
                      }} />
                    </span>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </section>

        {/* ════════════════════════════════
            FOOTER
        ════════════════════════════════ */}
        <footer style={{ background: "#6b0039" }}>
          <div className="max-w-7xl mx-auto px-6 pt-16 pb-6">

            {/* Top grid — brand + nav + tagline */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-12 mb-0" data-reveal data-d="4">

              {/* Brand col */}
              <div>
                <div className="font-fraunces text-[36px] font-light leading-none mb-3" style={{ color: "#f2f0e6" }}>
                  JJ
                  <em className="italic font-extralight" style={{ color: "rgba(242,240,230,0.45)" }}> Scrapbuyers</em>
                </div>
                <p className="font-outfit text-[11px] font-light leading-[1.85]" style={{ color: "rgba(242,240,230,0.38)", maxWidth: "240px" }}>
                  Chennai's trusted scrap buyers since 2009. Doorstep pickup, transparent weighing, instant payment.
                </p>

                {/* Social / contact pill */}
                <div className="flex gap-3 mt-6">
                  <a
                    href="tel:+919876543210"
                    className="font-outfit text-[9px] tracking-[0.14em] uppercase px-4 py-2"
                    style={{
                      border: "1px solid rgba(242,240,230,0.18)",
                      color: "rgba(242,240,230,0.55)",
                      textDecoration: "none",
                      transition: "border-color 0.2s, color 0.2s",
                    }}
                  >
                    Call
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    className="font-outfit text-[9px] tracking-[0.14em] uppercase px-4 py-2"
                    style={{
                      border: "1px solid rgba(242,240,230,0.18)",
                      color: "rgba(242,240,230,0.55)",
                      textDecoration: "none",
                      transition: "border-color 0.2s, color 0.2s",
                    }}
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Nav links col */}
              <div>
                <p className="font-outfit text-[9px] tracking-[0.24em] uppercase mb-5" style={{ color: "rgba(242,240,230,0.25)" }}>
                  Navigation
                </p>
                <div className="flex flex-col gap-3">
                  {FOOTER_LINKS.map((l) => (
                    <a key={l.label} href={l.href} className="footer-link">{l.label}</a>
                  ))}
                </div>
              </div>

              {/* Address + hours col */}
              <div>
                <p className="font-outfit text-[9px] tracking-[0.24em] uppercase mb-5" style={{ color: "rgba(242,240,230,0.25)" }}>
                  Find Us
                </p>
                <address className="not-italic">
                  <p className="font-outfit text-[12px] font-light leading-[1.85]" style={{ color: "rgba(242,240,230,0.55)" }}>
                    2nd Floor, President Plaza<br />
                    SG Highway, Thaltej<br />
                    Ahmedabad – 380054
                  </p>
                </address>
                <div className="mt-5">
                  <p className="font-outfit text-[9px] tracking-[0.24em] uppercase mb-2" style={{ color: "rgba(242,240,230,0.25)" }}>
                    Working Hours
                  </p>
                  <p className="font-outfit text-[11px] font-light" style={{ color: "rgba(242,240,230,0.45)" }}>
                    Mon – Sat &nbsp;·&nbsp; 9 AM – 7 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Metals marquee strip */}
            <div className="footer-metals">
              <div className="footer-metals-track">
                {[...METALS, ...METALS, ...METALS, ...METALS].map((m, i) => (
                  <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
                    <span className="footer-metal-item">{m}</span>
                    <span className="footer-metal-sep" />
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bar">
              <span className="font-outfit text-[9px] tracking-[0.14em] uppercase" style={{ color: "rgba(242,240,230,0.20)" }}>
                © {new Date().getFullYear()} JJ Scrapbuyers. All rights reserved.
              </span>
              <span className="font-outfit text-[9px] tracking-[0.14em] uppercase" style={{ color: "rgba(242,240,230,0.20)" }}>
                Ahmedabad · Gujarat · India
              </span>
            </div>

          </div>
        </footer>

      </div>
    </>
  );
}