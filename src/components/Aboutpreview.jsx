"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const STATS = [
  { n: "500+", l: "Happy Clients" },
  { n: "10K+", l: "Tons Collected" },
  { n: "15+", l: "Years in Business" },
  { n: "100%", l: "Transparent Pricing" },
];

const VALUES = [
  "No hidden deductions — weight is measured in front of you.",
  "Same-day pickup, no rescheduling, no excuses.",
  "Fair market rates, updated daily.",
];

export default function AboutPreview() {
  const boxRef = useRef(null);
  const bgRef = useRef(null);
  const overlayRef = useRef(null);
  const revealRef = useRef(null);
  const hasRevealed = useRef(false);

  /* ── Parallax on scroll ── */
  useEffect(() => {
    const onScroll = () => {
      const box = boxRef.current;
      const bg = bgRef.current;
      if (!box || !bg) return;

      const rect = box.getBoundingClientRect();
      const winH = window.innerHeight;
      const centre = rect.top + rect.height / 2;
      const progress = (centre - winH / 2) / (winH / 2);
      const shift = progress * 80;
      bg.style.transform = `translateY(${shift}px) scale(1.12)`;

      if (!hasRevealed.current && rect.top < winH * 0.85) {
        hasRevealed.current = true;
        const overlay = overlayRef.current;
        if (overlay) {
          overlay.style.transition = "opacity 1.6s cubic-bezier(0.22,1,0.36,1)";
          overlay.style.opacity = "0.30";
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Text reveals ── */
  useEffect(() => {
    const els = revealRef.current?.querySelectorAll("[data-reveal]");
    if (!els?.length) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = parseInt(e.target.dataset.d || "1") * 160 + 400;
            setTimeout(() => {
              e.target.dataset.revealed = "true";
            }, delay);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
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
        [data-d="2"] { transition-delay: 0.18s; }
        [data-d="3"] { transition-delay: 0.30s; }
        [data-d="4"] { transition-delay: 0.42s; }
        [data-d="5"] { transition-delay: 0.54s; }

        /* ── Stats strip ── */
        .stats-strip {
          display: flex;
          flex-wrap: wrap;
          border-top: 1px solid rgba(242,240,230,0.08);
        }

        .stat-cell {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 14px 16px;
          border-right: 1px solid rgba(242,240,230,0.08);
          border-bottom: 1px solid rgba(242,240,230,0.08);
          cursor: default;
          box-sizing: border-box;
        }

        /* Mobile: right column — no right border */
        .stats-strip .stat-cell:nth-child(2n) {
          border-right: none;
        }
        /* Mobile: bottom row — no bottom border */
        .stats-strip .stat-cell:nth-child(3),
        .stats-strip .stat-cell:nth-child(4) {
          border-bottom: none;
        }

        .stat-cell:hover .stat-num { color: #8b004b !important; }

        /* Desktop: single row of 4 */
        @media (min-width: 1024px) {
          .stat-cell {
            flex: 1;
            max-width: none;
            padding: 20px 24px;
            border-right: 1px solid rgba(242,240,230,0.08);
            border-bottom: none !important;
          }
          .stats-strip .stat-cell:nth-child(2n) {
            border-right: 1px solid rgba(242,240,230,0.08);
          }
          .stats-strip .stat-cell:first-child { padding-left: 44px; }
          .stats-strip .stat-cell:last-child  { border-right: none; padding-right: 44px; }
        }

        /* ── Value rows ── */
        .value-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 7px 0;
        }

        /* ── About link ── */
        .about-link {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(242,240,230,0.75);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid rgba(242,240,230,0.25);
          padding-bottom: 2px;
          transition: gap 0.25s ease, color 0.25s ease, border-color 0.25s ease;
        }
        .about-link:hover {
          gap: 16px;
          color: #f2f0e6;
          border-color: rgba(242,240,230,0.6);
        }
      `}</style>

      <section
        id="about"
        className="font-outfit bg-[#f2f0e6] border-t border-[#8b004b]/10 py-12 lg:py-16"
        aria-label="About JJ Scrapbuyers Chennai scrap buyers company with 15 years experience"
      >
        <p className="sr-only">
          JJ Scrapbuyers is one of the most trusted scrap buyers in Chennai with
          over 15 years of experience in buying iron, steel, copper, aluminium,
          AC, batteries and electrical scrap with transparent pricing and
          doorstep pickup services.
        </p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* ── Eyebrow ── */}
          <div className="flex items-center gap-2.5 mb-6">
            <span className="font-outfit text-[10px] tracking-[0.30em] uppercase text-[#8b004b]">
              About JJ Scrapbuyers
            </span>
          </div>

          {/* ══ THE RECTANGLE BOX ══ */}
          <div
            ref={boxRef}
            className="relative overflow-hidden"
            style={{ minHeight: "clamp(300px, 60vw, 430px)" }}
          >
            {/* BG parallax layer */}
            <div
              ref={bgRef}
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "-15% 0",
                backgroundImage: "url('/aboutscrap.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                willChange: "transform",
                transform: "scale(1.12)",
              }}
            />

            {/* Dark overlay */}
            <div
              ref={overlayRef}
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, #1a0010 0%, #2a000e 50%, #1a0010 100%)",
                opacity: 0.95,
                willChange: "opacity",
              }}
            />

            {/* Extra dim layer */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.4)",
                pointerEvents: "none",
                zIndex: 1,
              }}
            />

            {/* ══ CONTENT ══ */}
            <div
              ref={revealRef}
              className="relative flex flex-col justify-between h-full"
              style={{ zIndex: 2 }}
            >
              {/* TOP — headline + para + values */}
              <div className="p-6 sm:p-9 lg:p-11">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-6 lg:gap-16">
                  {/* Left — headline */}
                  <div>
                    <h2
                      className="font-fraunces text-[26px] sm:text-[32px] lg:text-[42px] font-light leading-[1.15]"
                      style={{ color: "#f2f0e6" }}
                      data-reveal
                      data-d="1"
                    >
                      <span className="sr-only">
                        About JJ Scrapbuyers – Trusted Scrap Buyers in Chennai
                      </span>
                      We don't just
                      <br />
                      buy scrap —
                      <br />
                      <em
                        className="italic font-extralight"
                        style={{ color: "rgba(242,240,230,0.80)" }}
                      >
                        we do it right.
                      </em>
                    </h2>

                    <div
                      style={{
                        width: "36px",
                        height: "1px",
                        background: "rgba(242,240,230,0.35)",
                        margin: "16px 0 0",
                      }}
                      data-reveal
                      data-d="2"
                    />
                  </div>

                  {/* Right — para + values + link */}
                  <div className="flex flex-col justify-center">
                    <p
                      className="font-outfit text-[13px] font-light leading-[1.9] mb-5"
                      style={{ color: "rgba(242,240,230,0.85)" }}
                      data-reveal
                      data-d="3"
                    >
                      JJ Scrapbuyers has been Chennai's most trusted scrap
                      partner for over 15 years. What sets us apart isn't just
                      our prices — it's how we treat every client: with honesty,
                      speed, and zero complications.
                    </p>

                    <div data-reveal data-d="4">
                      {VALUES.map((v, i) => (
                        <div key={i} className="value-row">
                          <span
                            className="flex-shrink-0 rounded-full"
                            style={{
                              width: "4px",
                              height: "4px",
                              background: "rgba(242,240,230,0.30)",
                              marginTop: "7px",
                            }}
                          />
                          <span
                            className="font-outfit text-[12px] font-light leading-[1.75]"
                            style={{ color: "rgba(242,240,230,0.80)" }}
                          >
                            {v}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7" data-reveal data-d="5">
                      <Link href="/about" className="about-link">
                        Our full story
                        <span
                          style={{
                            position: "relative",
                            display: "inline-block",
                            width: "22px",
                            height: "1px",
                            background: "currentColor",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              right: 0,
                              top: "-3px",
                              width: "6px",
                              height: "6px",
                              borderRight: "1px solid currentColor",
                              borderTop: "1px solid currentColor",
                              transform: "rotate(45deg)",
                              display: "inline-block",
                            }}
                          />
                        </span>
                        <span className="sr-only">
                          Learn more about JJ Scrapbuyers Chennai scrap buying
                          company
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM — stats strip */}
              <div className="stats-strip" data-reveal data-d="4">
                {STATS.map((s) => (
                  <div key={s.l} className="stat-cell">
                    <div
                      className="stat-num font-fraunces text-[24px] sm:text-[28px] lg:text-[30px] font-light leading-none mb-1"
                      style={{
                        color: "#f2f0e6",
                        transition: "color 0.35s ease",
                      }}
                    >
                      {s.n}
                    </div>
                    <div
                      className="font-outfit text-[8px] sm:text-[8.5px] tracking-[0.14em] uppercase"
                      style={{ color: "rgba(242,240,230,0.55)" }}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* ══ END RECTANGLE ══ */}
        </div>
      </section>
    </>
  );
}
