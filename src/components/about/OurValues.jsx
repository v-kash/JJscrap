"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const VALUES = [
  {
    tag: "INTEGRITY",
    sub: "Transparent pricing, always.",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          stroke="rgba(242,240,230,0.8)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Honesty First",
    desc: "We quote what we pay. No bait-and-switch pricing, no post-weighing surprises. Every transaction is transparent from the first call to the final payment.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    imgAlt: "Handshake representing honesty",
  },
  {
    tag: "EFFICIENCY",
    sub: "Same-day. Every day.",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="rgba(242,240,230,0.8)"
          strokeWidth="1.8"
        />
        <path
          d="M12 6v6l4 2"
          stroke="rgba(242,240,230,0.8)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Speed as Respect",
    desc: "Your time matters. Same-day service, instant payment, and fast responses aren't perks — they're our baseline. We show up when we say we will.",
    img: "/delivery3.jpg",
    imgAlt: "Clock representing speed and efficiency",
  },
  {
    tag: "LEGACY",
    sub: "Chennai built. Chennai proud.",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          stroke="rgba(242,240,230,0.8)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Community Roots",
    desc: "We're a Chennai business serving Chennai families and factories. Every ton we collect feeds back into the local recycling ecosystem we've built over 15 years.",
    img: "/community.jpg",
    imgAlt: "Community and city representing local roots",
  },
];

export default function OurValues() {
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
      { threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200;0,9..144,300;1,9..144,200;1,9..144,300&family=Outfit:wght@300;400;500&display=swap');

        [data-reveal] {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity .85s cubic-bezier(.22,1,.36,1), transform .85s cubic-bezier(.22,1,.36,1);
        }
        [data-reveal][data-revealed="true"] { opacity: 1 !important; transform: none !important; }
        [data-d="1"] { transition-delay: .05s; }
        [data-d="2"] { transition-delay: .15s; }
        [data-d="3"] { transition-delay: .26s; }
        [data-d="4"] { transition-delay: .38s; }
        [data-d="5"] { transition-delay: .50s; }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(139,0,75,0.10);
          margin-top: 56px;
        }
        @media(max-width: 860px) { .values-grid { grid-template-columns: 1fr; } }

        /* Card */
        .val-card {
          background: #ede9da;
          position: relative;
          overflow: hidden;
          cursor: default;
        }
        .val-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: #8b004b;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .4s cubic-bezier(.22,1,.36,1);
        }
        .val-card:hover::after { transform: scaleX(1); }
        .val-card:hover .val-content-pad { background: #e8e3d0; }

        /* Image panel */
        .val-img-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        .val-img-wrap img {
          transition: transform .7s cubic-bezier(.22,1,.36,1);
        }
        .val-card:hover .val-img-wrap img { transform: scale(1.06); }

        .val-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(26,0,16,0.65) 0%, rgba(26,0,16,0.15) 50%, transparent 100%);
          z-index: 1;
          transition: opacity .4s;
        }
        .val-card:hover .val-img-overlay { opacity: 0.85; }

        /* Tag — top left, solid background so it's always readable */
        .val-img-tag {
          position: absolute;
          top: 12px; right: 12px;
          z-index: 3;
          font-family: 'Outfit', sans-serif;
          font-size: 8px;
          font-weight: 400;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: rgba(242,240,230,0.9);
          background: rgba(26,0,16,0.55);
          border: 1px solid rgba(139,0,75,0.45);
          padding: 4px 10px;
          transition: background .3s, border-color .3s, color .3s;
        }
        .val-card:hover .val-img-tag {
          background: rgba(139,0,75,0.55);
          border-color: rgba(139,0,75,0.9);
          color: #f2f0e6;
        }

        /* Corner angle brackets ON the image */
        /* top-left bracket */
        .val-br-tl {
          position: absolute;
          top: 12px; left: 12px;
          z-index: 3;
          width: 16px; height: 16px;
          border-top: 1.5px solid #8b004b;
          border-left: 1.5px solid #8b004b;
          opacity: 0.5;
          transition: width .4s cubic-bezier(.22,1,.36,1), height .4s cubic-bezier(.22,1,.36,1), opacity .4s, border-color .4s;
        }
        .val-card:hover .val-br-tl {
          width: 22px; height: 22px;
          opacity: 1;
          border-color: #8b004b;
        }

        /* bottom-right bracket */
        .val-br-br {
          position: absolute;
          bottom: 12px; right: 12px;
          z-index: 3;
          width: 16px; height: 16px;
          border-bottom: 1.5px solid #8b004b;
          border-right: 1.5px solid #8b004b;
          opacity: 0.5;
          transition: width .4s cubic-bezier(.22,1,.36,1), height .4s cubic-bezier(.22,1,.36,1), opacity .4s, border-color .4s;
        }
        .val-card:hover .val-br-br {
          width: 22px; height: 22px;
          opacity: 1;
          border-color: #8b004b;
        }

        /* Icon circle — bottom left on image */
        .val-img-icon {
          position: absolute;
          bottom: 12px; left: 12px;
          z-index: 3;
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(139,0,75,0.4);
          background: rgba(26,0,16,0.45);
          display: flex; align-items: center; justify-content: center;
          transition: border-color .4s, transform .5s cubic-bezier(.22,1,.36,1), background .4s;
        }
        .val-card:hover .val-img-icon {
          border-color: rgba(139,0,75,0.9);
          background: rgba(139,0,75,0.4);
          transform: scale(1.1);
        }

        /* Content */
        .val-content-pad {
          padding: 28px 24px 28px;
          position: relative;
          background: #ede9da;
          transition: background .4s;
        }
        .val-accent-line {
          width: 36px; height: 1px;
          background: #8b004b;
          margin-bottom: 12px;
          transition: width .4s cubic-bezier(.22,1,.36,1);
        }
        .val-card:hover .val-accent-line { width: 54px; }

        .val-sub {
          font-family: 'Outfit', sans-serif;
          font-size: 9px; font-weight: 400;
          letter-spacing: .18em;
          color: #8b004b;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .val-title {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 26px; font-weight: 300;
          line-height: 1.15; color: #1a0010;
          margin-bottom: 14px;
          transition: color .3s;
        }
        .val-card:hover .val-title { color: #3a0020; }

        .val-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 12px; font-weight: 300;
          line-height: 1.9;
          color: rgba(26,0,16,0.55);
        }

        /* Header */
        .vs-eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .vs-eyebrow-dot { width: 5px; height: 5px; border-radius: 50%; background: #8b004b; flex-shrink: 0; }
        .vs-eyebrow-label {
          font-family: 'Outfit', sans-serif;
          font-size: 9px; letter-spacing: .30em;
          text-transform: uppercase; color: #8b004b;
        }
        .vs-heading {
          font-family: 'Fraunces', Georgia, serif;
          font-size: clamp(32px, 4vw, 50px);
          font-weight: 300; color: #1a0010;
          line-height: 1.12; margin: 0;
        }
        .vs-heading em { font-style: italic; font-weight: 200; color: #8b004b; }
        .vs-sub {
          font-family: 'Outfit', sans-serif;
          font-size: 12.5px; font-weight: 300;
          line-height: 1.85; color: #9a8585;
          max-width: 300px;
        }
      `}</style>

      <section
        ref={revealRef}
        style={{
          background: "#F2F0E6",
          borderTop: "1px solid rgba(139,0,75,0.10)",
        }}
        id="values"
        className="py-16"
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 24,
            }}
          >
            <div>
              <div className="vs-eyebrow" data-reveal data-d="1">
                <span className="vs-eyebrow-label">Our Values</span>
              </div>
              <h2 className="vs-heading" data-reveal data-d="2">
                What we <em>stand for.</em>
              </h2>
            </div>
            <p className="vs-sub" data-reveal data-d="3">
              Three principles that guide every pickup, every payment, every
              interaction.
            </p>
          </div>

          {/* Cards */}
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="val-card"
                data-reveal
                data-d={`${i + 3}`}
              >
                {/* Image panel */}
                <div className="val-img-wrap">
                  <Image
                    src={v.img}
                    alt={v.imgAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="val-img-overlay" />

                  {/* Tag — top left */}
                  <span className="val-img-tag">{v.tag}</span>

                  {/* Corner brackets */}
                  <div className="val-br-tl" />
                  <div className="val-br-br" />

                  {/* Icon — bottom left */}
                </div>

                {/* Content */}
                <div className="val-content-pad">
                  <div className="val-accent-line" />
                  <div className="val-sub">{v.sub}</div>
                  <div className="val-title">{v.title}</div>
                  <div className="val-desc">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
