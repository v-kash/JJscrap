"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const PILLS = [
  "500+ Clients",
  "Est. 2009",
  "Same-day Pickup",
  "₹0 Hidden Fees",
];

const MARQUEE_ITEMS = [
  "Iron",
  "Copper",
  "Aluminium",
  "Steel",
  "Brass",
  "Paper",
  "Plastic",
  "E-Waste",
  "Batteries",
  "Cables",
];

const NAV_H = 64;

export default function AboutHeroRust() {
  const [mounted, setMounted] = useState(false);

  /* Small delay so CSS animations always fire fresh on page visit */
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200;0,9..144,300;0,9..144,600;1,9..144,200;1,9..144,300&family=Outfit:wght@300;400;500;600&display=swap');

        .ar-root  { font-family: 'Outfit', sans-serif; }
        .ar-serif { font-family: 'Fraunces', Georgia, serif; }

        /* ── Background textures ── */
        .ar-lines {
          position:absolute; inset:0; pointer-events:none;
          background-image: repeating-linear-gradient(
            0deg, transparent, transparent 3px,
            rgba(242,240,230,0.022) 3px, rgba(242,240,230,0.022) 4px
          );
        }
        .ar-bloom {
          position:absolute; top:0; right:0; bottom:0; width:50%; pointer-events:none;
          background: linear-gradient(to left, rgba(139,0,75,0.16) 0%, rgba(139,0,75,0.05) 50%, transparent 100%);
        }
        .ar-grain::after {
          content:''; position:absolute; inset:0; pointer-events:none; z-index:20;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          background-size:200px; opacity:0.5;
        }
        .ar-hatch { position:absolute; top:0; right:0; width:200px; height:200px; pointer-events:none; overflow:hidden; }
        .ar-hatch::before {
          content:''; position:absolute; inset:-20px;
          background-image:repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(139,0,75,.08) 8px, rgba(139,0,75,.08) 9px);
        }

        /* ── Ambient animations ── */
        @keyframes borderDraw { from{width:0} to{width:100%} }
        .ar-top-border {
          position:absolute; top:0; left:0; height:2px; background:#8b004b;
          animation:borderDraw 1.2s cubic-bezier(.22,1,.36,1) .08s both;
        }
        @keyframes scanLine {
          0%  { transform:translateY(-100%); opacity:0; }
          6%  { opacity:1; } 94%{ opacity:1; }
          100%{ transform:translateY(160%); opacity:0; }
        }
        .ar-scan {
          position:absolute; left:0; right:0; height:1px; pointer-events:none;
          background:linear-gradient(to right,transparent,rgba(139,0,75,.5) 40%,rgba(139,0,75,.5) 60%,transparent);
          animation:scanLine 10s linear infinite;
        }
        .ar-bottom-rule {
          position:absolute; bottom:0; left:0; right:0; height:1px;
          background:linear-gradient(to right,#8b004b,rgba(139,0,75,.2),transparent);
        }
        @keyframes kb { from{transform:scale(1)} to{transform:scale(1.07) translateX(-1%)} }
        .ar-kb { animation:kb 24s ease-in-out infinite alternate; }

        /* ══════════════════════════════════════════════
           ENTRANCE ANIMATION KEYFRAMES
        ══════════════════════════════════════════════ */

        /* Slide down — navbar meta bar */
        @keyframes slideDown {
          from { opacity:0; transform:translateY(-18px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* Fade + rise — eyebrow, deck, CTAs, marquee */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(26px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* Clip wipe left→right — headline lines */
        @keyframes clipReveal {
          from { clip-path:inset(0 100% 0 0); opacity:1; }
          to   { clip-path:inset(0 0%   0 0); opacity:1; }
        }

        /* Maroon rule draws from centre outward */
        @keyframes ruleDraw {
          from { transform:scaleX(0); opacity:0; }
          to   { transform:scaleX(1); opacity:1; }
        }

        /* Wing hairlines fade in */
        @keyframes wingIn {
          from { opacity:0; transform:scaleX(0.2); }
          to   { opacity:1; transform:scaleX(1); }
        }

        /* Pills bounce-pop */
        @keyframes pillPop {
          from { opacity:0; transform:scale(0.85) translateY(10px); }
          60%  { transform:scale(1.04) translateY(-2px); }
          to   { opacity:1; transform:scale(1) translateY(0); }
        }

        /* Fade only */
        @keyframes fadeIn {
          from { opacity:0; }
          to   { opacity:1; }
        }

        /* ══════════════════════════════════════════════
           ANIMATION CLASSES  (animation-fill-mode:both
           keeps elements invisible before delay fires)
        ══════════════════════════════════════════════ */

        .an-meta      { opacity:0; animation:slideDown  .75s cubic-bezier(.22,1,.36,1) both; }
        .an-eyebrow   { opacity:0; animation:fadeUp     .75s cubic-bezier(.22,1,.36,1) both; }
        .an-line      { display:block; clip-path:inset(0 100% 0 0);
                        animation:clipReveal .9s cubic-bezier(.22,1,.36,1) both; }
        .an-rule-bar  { transform-origin:left center; opacity:0;
                        animation:ruleDraw   .65s cubic-bezier(.22,1,.36,1) both; }
        .an-rule-wing { transform-origin:center; opacity:0;
                        animation:wingIn     .5s  ease both; }
        .an-deck      { opacity:0; animation:fadeIn  .9s ease both; }
        .an-pill      { opacity:0; animation:pillPop .6s cubic-bezier(.34,1.56,.64,1) both; }
        .an-cta       { opacity:0; animation:fadeUp  .75s cubic-bezier(.22,1,.36,1) both; }
        .an-marquee   { opacity:0; animation:fadeIn  .8s ease both; }

        /* ── Interactive styles ── */
        .ar-pill {
          border:.5px solid rgba(242,240,230,0.18);
          background:rgba(14,0,8,0.42);
          backdrop-filter:blur(6px); -webkit-backdrop-filter:blur(6px);
          transition:border-color .22s, color .22s;
        }
        .ar-pill:hover { border-color:#8b004b; color:rgba(242,240,230,0.90)!important; }

        .ar-cta-primary { background:#8b004b; transition:background .2s,letter-spacing .2s; }
        .ar-cta-primary:hover { background:#5a0030; letter-spacing:.20em; }

        .ar-cta-ghost {
          border:.5px solid rgba(242,240,230,.28);
          background:rgba(14,0,8,0.38);
          backdrop-filter:blur(4px); -webkit-backdrop-filter:blur(4px);
          transition:border-color .2s,color .2s;
        }
        .ar-cta-ghost:hover { border-color:#8b004b; color:#f2f0e6!important; }

        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .ar-marquee-track { animation:marquee 24s linear infinite; display:flex; gap:0; white-space:nowrap; }
        .ar-marquee-track:hover { animation-play-state:paused; }

        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .ar-blink { animation:blink 1.06s step-start infinite; }

        .ar-page-chip {
          border:.5px solid rgba(139,0,75,.45); background:rgba(139,0,75,.18);
          backdrop-filter:blur(4px); -webkit-backdrop-filter:blur(4px);
        }
        .ar-bc-pill {
          background:rgba(14,0,8,0.48); border:.5px solid rgba(242,240,230,.10);
          backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px);
        }
        .ar-status-pill {
          background:rgba(14,0,8,0.42);
          backdrop-filter:blur(4px); -webkit-backdrop-filter:blur(4px);
        }
        .ar-marquee-strip {
          background:rgba(14,0,8,0.60);
          backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px);
        }
      `}</style>

      <section
        className="ar-root ar-grain relative overflow-hidden bg-[#1a0010] flex flex-col"
        style={{
          marginTop: `${NAV_H}px`,
          height: `calc(75vh - ${NAV_H}px)`,
          minHeight: "480px",
        }}
        id="about-hero"
        aria-label="About JJ Scrapbuyers"
      >
        {/* ── z0: BG image ── */}
        <div className="ar-kb absolute inset-0" style={{ zIndex: 0 }}>
          <Image
            src="/abouthero2.jpg"
            alt="JJ Scrapbuyers scrap yard"
            fill
            priority
            className="object-cover"
          />
        </div>
{/* Clean contrast overlay */}
<div
  className="absolute inset-0"
  style={{
    zIndex: 1,
    background: `
      linear-gradient(
        rgba(0,0,0,0.55) 
      )
    `,
  }}
/>


        {/* ── z10: Content ── */}
        <div
          className="relative flex flex-col flex-1 min-h-0 overflow-hidden"
          style={{ zIndex: 10 }}
        >
          {/* TOP META BAR — slides down from above */}
          <div
            className={`flex items-center justify-between px-8 lg:px-14 pt-5 flex-shrink-0 ${mounted ? "an-meta" : "opacity-0"}`}
            style={{ animationDelay: "0.10s" }}
          >
            <div className="ar-bc-pill flex items-center px-3 py-1.5">
              <span
                className="ar-serif text-[8.5px] tracking-[0.16em] uppercase font-light"
                style={{ color: "rgba(242,240,230,0.48)" }}
              >
                JJ Scrapbuyers
              </span>
              <span
                className="text-[8.5px] mx-2 font-light"
                style={{ color: "rgba(242,240,230,0.22)" }}
              >
                /
              </span>
              <span
                className="ar-serif text-[8.5px] tracking-[0.16em] uppercase font-light"
                style={{ color: "rgba(242,240,230,0.82)" }}
              >
                About
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              
              <div className="ar-status-pill hidden sm:flex items-center gap-2 border border-[rgba(242,240,230,0.10)] px-3 py-1.5">
                <span className="ar-blink w-[4px] h-[4px] rounded-full bg-[#8b004b] flex-shrink-0" />
                <span
                  className="text-[7.5px] tracking-[0.12em] uppercase"
                  style={{ color: "rgba(242,240,230,0.50)" }}
                >
                  Open for pickup
                </span>
              </div>
            </div>
          </div>

          {/* ── MAIN BODY — centred ── */}
          <div className="flex flex-1 items-center justify-center px-6 text-center">
            <div className="max-w-3xl w-full">
              {/* Eyebrow — fades up */}
              <div
                className={`flex items-center justify-center gap-3 mb-6 ${mounted ? "an-eyebrow" : "opacity-0"}`}
                style={{ animationDelay: "0.28s" }}
              >
                <div className="w-8 h-px bg-[#8b004b]" />
                <span
                  className="text-[10px] tracking-[0.28em] uppercase"
                  style={{ color: "rgba(242,240,230,0.55)" }}
                >
                  Est. 2009 · Chennai
                </span>
                <div className="w-8 h-px bg-[#8b004b]" />
              </div>

              {/* Headline — line 1 wipes in, line 2 follows */}
              <h1
                className="ar-serif  text-[#f2f0e6] leading-[1.1] font-light"
                style={{ fontSize: "clamp(42px, 6vw, 82px)" }}
              >
                <span
                  className={`pb-1 ${mounted ? "an-line" : "opacity-0"}`}
                  style={{ animationDelay: "0.42s" }}
                >
                  We don&apos;t buy scrap
                </span>
                <span
                  className={`text-[#f2f0e6] font-medium ${mounted ? "an-line" : "opacity-0"}`}
                  style={{ animationDelay: "0.64s" }}
                >
                  We unlock its worth
                </span>
              </h1>

              {/* Ornament rule — bar draws first, wings fade in after */}
              <div
                className="flex items-center justify-center gap-3 mt-6 mb-6"
                aria-hidden="true"
              >
                <div
                  className={mounted ? "an-rule-wing" : "opacity-0"}
                  style={{
                    animationDelay: "1.00s",
                    width: "2.5rem",
                    height: "1px",
                    background: "rgba(242,240,230,0.12)",
                    transformOrigin: "right center",
                  }}
                />
                <div
                  className={mounted ? "an-rule-bar" : "opacity-0"}
                  style={{
                    animationDelay: "0.88s",
                    width: "2.5rem",
                    height: "2px",
                    background: "#8b004b",
                  }}
                />
                <div
                  className={mounted ? "an-rule-wing" : "opacity-0"}
                  style={{
                    animationDelay: "1.00s",
                    width: "2.5rem",
                    height: "1px",
                    background: "rgba(242,240,230,0.12)",
                    transformOrigin: "left center",
                  }}
                />
              </div>

              {/* Deck — fades in */}
              <p
                className={`text-[13px] leading-[1.9] max-w-[520px] mx-auto ${mounted ? "an-deck" : "opacity-0"}`}
                style={{
                  color: "rgba(242,240,230,0.60)",
                  animationDelay: "1.05s",
                }}
              >
                15 years of honest scrap collection, fair pricing, and fast
                payouts — trusted by 500+ clients across Chennai.
              </p>

              {/* Pills — each pops in staggered */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {PILLS.map((p, i) => (
                  <span
                    key={p}
                    className={`ar-pill text-[8px] tracking-[0.16em] uppercase px-4 py-1.5 ${mounted ? "an-pill" : "opacity-0"}`}
                    style={{
                      color: "rgba(242,240,230,0.55)",
                      animationDelay: `${1.18 + i * 0.09}s`,
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>

              {/* Spacer to preserve CTA space */}
              <div className="mt-8 h-[52px]" />
            </div>
          </div>

          {/* MARQUEE — fades in last */}
        </div>
      </section>
    </>
  );
}
