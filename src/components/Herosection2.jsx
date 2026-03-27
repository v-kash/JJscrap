"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  "Home",
  "About",
  "Services",
  "Gallery",
  "Testimonials",
  "Contact",
];
const METALS = [
  "Iron",
  "Steel",
  "Copper",
  "Aluminium",
  "Brass",
  "Stainless Steel",
  "Cast Iron",
  "MS Scrap",
  "AC",
  "AC Parts",
  "Electrical Parts",
  "Batteries",
  "Iron",
  "Steel",
  "Copper",
  "Aluminium",
  "Brass",
  "Stainless Steel",
  "Cast Iron",
  "MS Scrap",
  "AC",
  "AC Parts",
  "Electrical Parts",
  "Batteries",
];
const CHIPS = [
  "Factory Clearance",
  "Doorstep Pickup",
  "Instant Payment",
  "All Metals",
];
const STATS = [
  { n: "500+", l: "Clients" },
  { n: "10K+", l: "Tons" },
  { n: "15+", l: "Years" },
];

// 4 slider images — update paths to match your /public folder
const SLIDES = [
  { src: "/hero10.jpg", alt: "Scrap metal yard" },
  { src: "/hero21.jpg", alt: "Metal collection" },
  { src: "/hero23.jpg", alt: "Industrial scrap" },
  { src: "/hero24.jpg", alt: "Copper & aluminium" },
];

export default function HeroSection() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const revealRef = useRef(null);

  /* ── Auto-advance every 3s ── */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  /* Scroll-triggered reveal */
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
      { threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ── Google Fonts (Fraunces + Outfit) ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,200;1,9..144,300&family=Outfit:wght@300;400;500;600&display=swap');

        /* Reveal animation */
        [data-reveal] {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                      transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        [data-reveal="right"] { transform: translateX(20px); }
        [data-reveal][data-revealed="true"] { opacity: 1 !important; transform: none !important; }

        [data-d="1"] { transition-delay: 0.08s; }
        [data-d="2"] { transition-delay: 0.18s; }
        [data-d="3"] { transition-delay: 0.28s; }
        [data-d="4"] { transition-delay: 0.40s; }
        [data-d="5"] { transition-delay: 0.52s; }

        /* Font families */
        .font-fraunces { font-family: 'Fraunces', Georgia, serif; }
        .font-outfit    { font-family: 'Outfit', sans-serif; }

        /* Ken Burns */
        @keyframes kb { from { transform: scale(1); } to { transform: scale(1.08) translateX(-1%); } }

        /* All slides stacked — active crossfades in quickly */
        .slide-item {
          position: absolute; inset: 0;
          opacity: 0;
          transition: opacity 0.5s ease;
          animation: kb 20s ease-in-out infinite alternate;
        }
        .slide-item.active { opacity: 1; z-index: 2; }

        /* Underline hover effect for nav */
        .nav-link::after {
          content: ''; display: block; height: 1px;
          width: 0; background: #8b004b;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: #8b004b; }

        /* Slider dots */
        .slider-dot {
          width: 18px; height: 2px;
          background: rgba(255,255,255,0.3);
          transition: all 0.4s ease;
          cursor: pointer; border: none; padding: 0;
        }
        .slider-dot.active { width: 32px; background: #8b004b; }

        /* ── METALS MARQUEE ── */
        .metals-strip {
          position: relative;
          background: #8b004b;
          overflow: hidden;
          white-space: nowrap;
          padding: 10px 0;
        }

        .metals-track {
          display: inline-flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }

        .metal-item {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(242,240,230,0.8);
          padding: 0 24px;
        }

        .metal-sep {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(242,240,230,0.4);
          margin: 0 10px;
        }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .metals-strip:hover .metals-track {
          animation-play-state: paused;
        }
      `}</style>

      <div ref={revealRef} className="font-outfit bg-[#f2f0e6]">
        {/* ════════════════════════════════════
            NAVBAR
        ════════════════════════════════════ */}
        {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f2f0e6] border-b border-[#8b004b]/10 h-16">
          <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-[#8b004b]/40 to-transparent" />

          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            <a href="/" className="flex items-center pt-3">
              <Image
                src="/logo3.png"
                alt="JJ Scrapbuyers"
                width={120}
                height={70}
                priority
                className="object-contain"
              />
            </a>

            <ul className="hidden md:flex items-center gap-7 list-none">
              {NAV_LINKS.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="nav-link font-outfit text-[10.5px] font-normal tracking-[0.14em] uppercase text-[#9a8585] no-underline transition-colors duration-200"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919789075963"
                className="hidden md:inline font-outfit text-[10px] tracking-[0.12em] uppercase text-[#8b004b] border-b border-[#8b004b] pb-px no-underline hover:opacity-60 transition-opacity"
              >
                WhatsApp
              </a>
              <button className="font-outfit text-[10px] font-semibold tracking-[0.16em] uppercase px-5 py-2.5 bg-[#8b004b] text-[#f2f0e6] hover:bg-[#5a0030] transition-colors">
                Get Quote
              </button>
              <button
                className="flex md:hidden flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <span className="block w-[22px] h-[1.5px] bg-[#1a0010]" />
                <span className="block w-[22px] h-[1.5px] bg-[#1a0010]" />
                <span className="block w-[22px] h-[1.5px] bg-[#1a0010]" />
              </button>
            </div>
          </div>
        </nav> */}

        {/* Mobile dropdown */}
        {/* {mobileOpen && (
          <div className="fixed top-16 left-0 right-0 z-40 bg-[#f2f0e6] border-b border-[#8b004b]/12 flex flex-col px-8 py-6 gap-5">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-outfit text-[12px] tracking-[0.14em] uppercase text-[#9a8585] no-underline"
                onClick={() => setMobileOpen(false)}
              >
                {l}
              </a>
            ))}
          </div>
        )}  */}

        {/* ════════════════════════════════════
            HERO  (compact — not full-screen)
        ════════════════════════════════════ */}
        <section id="home" className="pt-16 min-h-[calc(100vh-4rem)] ">
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] h-full">
            {/* ── LEFT: Cream content panel ── */}
            <div className="relative flex flex-col justify-between px-10 py-19 h-full border-r border-[#8b004b]/10 overflow-hidden">
              {/* Vertical accent bar */}
              <div className="absolute left-0 top-[20%] bottom-[20%] w-[2px] bg-gradient-to-b from-transparent via-[#8b004b]/50 to-transparent" />

              <div>
                {/* Eyebrow */}
                <div
                  className="flex items-center gap-2.5 mb-5"
                  data-reveal
                  data-d="1"
                >
                  <span className="w-[5px] h-[5px] rounded-full bg-[#8b004b] flex-shrink-0" />
                  <span className="font-outfit text-[9px] font-medium tracking-[0.26em] uppercase text-[#8b004b]">
                    Chennai's Trusted Scrap Partner
                  </span>
                </div>

                {/* Title */}
                <h1
                  className="font-fraunces text-[42px] lg:text-[50px] font-light leading-[1.1] text-[#1a0010] tracking-[-0.01em] mb-0"
                  data-reveal
                  data-d="2"
                >
                  Turn Scrap
                  <br />
                  into{" "}
                  <em className="not-italic font-extralight text-[#8b004b] italic">
                    Value.
                  </em>
                  <br />
                  <span className="font-extralight italic text-[#8b004b]">
                    At the Best Price
                  </span>
                </h1>

                {/* Divider rule */}
                <div
                  className="w-11 h-px bg-[#8b004b]/50 my-5"
                  data-reveal
                  data-d="3"
                />

                {/* Description */}
                <p
                  className="font-outfit text-[13px] font-light leading-[1.85] text-[#9a8585] max-w-[290px]"
                  data-reveal
                  data-d="3"
                >
                  From factory floors to household clearances — we buy all kinds
                  of metal scrap across Chennai with transparent pricing and
                  doorstep pickup.
                </p>
              </div>

              {/* Bottom block: stats + CTAs */}
              <div className="mt-8">
                {/* Stats */}
                <div
                  className="flex border-t border-[#8b004b]/08 pt-5 mb-6"
                  data-reveal
                  data-d="4"
                >
                  {STATS.map((s, i) => (
                    <div
                      key={s.l}
                      className={`flex-1 ${i > 0 ? "border-l border-[#8b004b]/08 pl-4" : ""}`}
                    >
                      <div className="font-fraunces text-[26px] font-light text-[#8b004b] leading-none mb-1">
                        {s.n}
                      </div>
                      <div className="font-outfit text-[8px] font-normal tracking-[0.16em] uppercase text-[#c4b8b8]">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex items-center gap-5" data-reveal data-d="5">
                  <a
                    href="#contact"
                    className="font-outfit text-[10px] font-semibold tracking-[0.18em] uppercase px-7 py-3 bg-[#8b004b] text-[#f2f0e6] no-underline hover:bg-[#5a0030] transition-colors"
                  >
                    Request Pickup
                  </a>
                  <a
                    href="#services"
                    className="font-outfit text-[10px] font-normal tracking-[0.14em] uppercase text-[#9a8585] no-underline flex items-center gap-2.5 hover:text-[#8b004b] transition-colors group"
                  >
                    <span className="relative block w-7 h-px bg-current">
                      <span className="absolute right-0 top-[-3px] w-[7px] h-[7px] border-r border-t border-current rotate-45 inline-block" />
                    </span>
                    Our Services
                  </a>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Hero image SLIDER panel ── */}
            <div className="relative overflow-hidden bg-[#1a0010] min-h-[400px] lg:min-h-0 flex flex-col justify-end">
              {/* All slides always rendered — crossfade via opacity */}
              {SLIDES.map((slide, i) => (
                <div
                  key={slide.src}
                  className={`slide-item ${i === current ? "active" : ""}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={i === 0}
                    className="object-cover"
                  />
                </div>
              ))}

              {/* Overlay — same as original */}
              <div className="absolute inset-0 bg-black/65 z-[3]" />

              {/* Location badge */}
              <div
                className="absolute top-5 right-5 z-[5] flex items-center gap-2 bg-[#1a0010]/50 backdrop-blur-sm border border-white/10 px-3 py-2"
                data-reveal="right"
                data-d="2"
              >
                <span className="w-[4px] h-[4px] rounded-full bg-[#8b004b] flex-shrink-0" />
                <span className="font-outfit text-[8px] tracking-[0.15em] uppercase text-white/45">
                  Madipakkam, Chennai
                </span>
              </div>

              {/* Caption block — identical to original, dots added after chips */}
              <div className="relative z-[4] px-10 pb-10 pt-6">
                <div
                  className="flex items-center gap-2 mb-3.5"
                  data-reveal
                  data-d="2"
                >
                  <span className="w-[4px] h-[4px] rounded-full bg-[#8b004b]" />
                  <span className="font-outfit text-[8.5px] tracking-[0.22em] uppercase text-white/45">
                    Industrial &amp; Household Scrap
                  </span>
                </div>

                <h2
                  className="font-fraunces text-[clamp(24px,3vw,36px)] font-extralight italic text-[#f2f0e6] leading-[1.2] mb-3"
                  data-reveal
                  data-d="3"
                >
                  <strong className="not-italic font-semibold">
                    Doorstep Pickup.
                  </strong>
                  <br />
                  Competitive Rates.
                </h2>

                <div
                  className="w-8 h-px bg-[#8b004b] mb-3"
                  data-reveal
                  data-d="3"
                />

                <p
                  className="font-outfit text-[12.5px] font-light leading-[1.75] text-white/55 max-w-[360px] mb-5"
                  data-reveal
                  data-d="4"
                >
                  Transparent weighing, instant payment, and professional
                  service — from small household scrap to bulk industrial
                  clearances.
                </p>

                {/* Service chips */}
                <div
                  className="flex flex-wrap gap-2 mb-5"
                  data-reveal
                  data-d="5"
                >
                  {CHIPS.map((c) => (
                    <span
                      key={c}
                      className="font-outfit text-[8.5px] tracking-[0.12em] uppercase px-3 py-1.5 border border-white/18 text-white/55 bg-white/[0.03] backdrop-blur-sm hover:border-[#8b004b]/60 hover:text-white/90 transition-colors cursor-default"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {/* ── Slider dots (only new addition) ── */}
                <div className="flex items-center gap-2">
                  {SLIDES.map((_, i) => (
                    <button
                      key={i}
                      className={`slider-dot ${i === current ? "active" : ""}`}
                      onClick={() => setCurrent(i)}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── METALS MARQUEE ── */}
        <div className="metals-strip">
          <div className="metals-track">
            {[...METALS, ...METALS].map((m, i) => (
              <span key={i} className="flex items-center">
                <span className="metal-item">{m}</span>
                <span className="metal-sep" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
