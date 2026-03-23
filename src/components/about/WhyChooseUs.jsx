"use client";

import { useEffect, useRef } from "react";

const WHY_US = [
  {
    num: "01",
    title: "Transparent Weighing",
    desc: "Every gram weighed right in front of you. No shortcuts, no deductions, no surprises — ever.",
    img: "/weigt3.jpg",
  },
  {
    num: "02",
    title: "Instant Payment",
    desc: "UPI, NEFT, or cash — paid the moment we're done. Zero delays, zero paperwork.",
    img: "/payment.jpg",
  },
  {
    num: "03",
    title: "Same-Day Pickup",
    desc: "Call by noon, we're there the same day. Our fleet covers every major Chennai zone.",
    img: "/truck.jpg",
  },
  {
    num: "04",
    title: "All Metal Types",
    desc: "Iron, copper, aluminium, brass, stainless steel — we buy everything at best market rates.",
    img: "/metalss3.jpg",
  },
  {
    num: "05",
    title: "No Hidden Charges",
    desc: "Free pickup, free weighing. What we quote is exactly what you receive. Period.",
    img: "/charges.jpg",
  },
  {
    num: "06",
    title: "15+ Years Trust",
    desc: "A decade and a half of honest service has made us Chennai's most recommended scrap buyer.",
    img: "/handshake.jpg",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  /* ── Scroll-reveal ── */
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll("[data-reveal]");
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

  /* ── 3-D magnetic tilt ── */
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".why-card");
    if (!cards?.length) return;
    const handleMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const rotX = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
      const rotY = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
      card.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
    };
    const handleLeave = (e) => {
      e.currentTarget.style.transform =
        "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
    };
    cards.forEach((c) => {
      c.addEventListener("mousemove", handleMove);
      c.addEventListener("mouseleave", handleLeave);
    });
    return () => {
      cards.forEach((c) => {
        c.removeEventListener("mousemove", handleMove);
        c.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200;1,9..144,200&family=Outfit:wght@300;400;500;600&display=swap');

        .wcu-section {
          font-family: 'Outfit', sans-serif;
          background-color: #F2F0E6;
          position: relative;
          overflow: hidden;
        }
        .wcu-section::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 20h40M20 0v40' stroke='%238B004B' stroke-width='0.3' stroke-opacity='0.10'/%3E%3Cpath d='M0 0l40 40M40 0L0 40' stroke='%238B004B' stroke-width='0.25' stroke-opacity='0.05'/%3E%3C/svg%3E");
          background-size: 40px 40px;
        }
        .wcu-section::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 70% 60% at 10% 0%, rgba(139,0,75,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 90% 100%, rgba(139,0,75,0.05) 0%, transparent 65%);
        }

        /* ── Scroll reveal ── */
        [data-reveal] {
          opacity: 0;
          transform: rotateX(-18deg) translateY(30px);
          transform-origin: top center;
          transition: opacity .75s cubic-bezier(.22,1,.36,1), transform .75s cubic-bezier(.22,1,.36,1);
        }
        [data-reveal][data-revealed="true"] { opacity: 1 !important; transform: rotateX(0deg) translateY(0) !important; }
        [data-d="1"]{ transition-delay:.04s; } [data-d="2"]{ transition-delay:.12s; }
        [data-d="3"]{ transition-delay:.20s; } [data-d="4"]{ transition-delay:.28s; }
        [data-d="5"]{ transition-delay:.36s; } [data-d="6"]{ transition-delay:.44s; }
        [data-d="7"]{ transition-delay:.52s; } [data-d="8"]{ transition-delay:.60s; }

        /* ── Grid ── */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(139,0,75,0.12);
        }
        @media(max-width:900px){ .why-grid { grid-template-columns: repeat(2,1fr); } }
        @media(max-width:560px){ .why-grid { grid-template-columns: 1fr; } }

        /* ── Card ── */
        .why-card {
          position: relative;
          overflow: hidden;
          padding: 42px 36px;
          border-right: 1px solid rgba(139,0,75,0.10);
          border-bottom: 1px solid rgba(139,0,75,0.10);
          cursor: default;
          transition: transform .2s ease;
          will-change: transform;
        }
        .why-card:nth-child(3n) { border-right: none; }
        @media(max-width:900px){
          .why-card:nth-child(3n) { border-right: 1px solid rgba(139,0,75,0.10); }
          .why-card:nth-child(2n) { border-right: none; }
        }

        /* ── IMAGE: covers full card, slides in left→right via clip-path ── */
        .why-card-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          clip-path: inset(0 100% 0 0);
          transition: clip-path .65s cubic-bezier(.22,1,.36,1);
          pointer-events: none;
          z-index: 1;
        }
        .why-card:hover .why-card-img {
          clip-path: inset(0 0% 0 0);
        }

        /* ── OVERLAY: dark gradient, fades in with image ── */
        .why-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            150deg,
            rgba(10,0,6,0.50) 0%,
            rgba(10,0,6,0.70) 45%,
            rgba(10,0,6,0.88) 100%
          );
          opacity: 0;
          transition: opacity .65s cubic-bezier(.22,1,.36,1);
          pointer-events: none;
          z-index: 2;
        }
        .why-card:hover .why-card-overlay { opacity: 1; }

        /* ── Content always on top ── */
        .why-card-content { position: relative; z-index: 3; }

        /* Text flips to white when image is behind */
        .why-card:hover .why-num    { color: rgba(255,255,255,0.16) !important; }
        .why-card:hover .why-divider{ background: rgba(255,160,160,0.65) !important; opacity: 1 !important; }
        .why-card:hover .why-title  { color: #ffffff !important; }
        .why-card:hover .why-desc   { color: rgba(255,255,255,0.70) !important; }

        /* ── Bottom purple sweep — same curve & duration as image ── */
        .why-card::after {
          content: '';
          position: absolute; bottom: 0; left: 0;
          height: 2px; width: 0;
          background: #8B004B;
          transition: width .65s cubic-bezier(.22,1,.36,1);
          z-index: 4;
        }
        .why-card:hover::after { width: 100%; }

        /* ── Card internals (default state) ── */
        .why-num {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 54px; font-weight: 200;
          color: rgba(139,0,75,0.12);
          line-height: 1; margin-bottom: 16px;
          transition: color .45s;
          user-select: none;
        }
        .why-divider {
          width: 28px; height: 1px;
          background: #8B004B; opacity: 0.4;
          margin-bottom: 14px;
          transition: background .45s, opacity .45s;
        }
        .why-title {
          font-size: 10px; font-weight: 600;
          letter-spacing: .2em; text-transform: uppercase;
          color: #1a0010; margin-bottom: 10px;
          transition: color .45s;
        }
        .why-desc {
          font-size: 13px; font-weight: 300;
          line-height: 1.85; color: rgba(26,0,16,0.52);
          transition: color .45s;
        }

        /* ── Header ── */
        .stamp-ring {
          width: 90px; height: 90px;
          border: 1.5px solid rgba(139,0,75,0.18);
          border-radius: 50%;
          position: absolute; top: 28px; right: 28px;
          display: flex; align-items: center; justify-content: center;
        }
        .stamp-ring::before {
          content: '★ SINCE 2009 ★';
          font-size: 7px; letter-spacing: .18em;
          color: rgba(139,0,75,0.35); text-align: center;
          line-height: 1.5; max-width: 56px;
        }
        .eyebrow-tag {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 5px 12px;
          border: 1px solid rgba(139,0,75,0.20);
          border-radius: 2px;
        }
      `}</style>

      <section ref={sectionRef} className="wcu-section" id="why-us">
        {/* ── Header ── */}
        <div className="max-w-[1280px] mx-auto px-10 py-16">
          <div
            className="stamp-ring"
            style={{ position: "absolute", top: 40, right: 40 }}
          />

          <div
            className="eyebrow-tag"
            style={{ marginBottom: "20px" }}
            data-reveal
            data-d="1"
          >
            <span
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: "9px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(26,0,16,0.40)",
              }}
            >
              Why Choose Us
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <h2
              data-reveal
              data-d="2"
              style={{
                fontFamily: "'Fraunces',Georgia,serif",
                fontWeight: 200,
                fontSize: "clamp(30px,3.8vw,50px)",
                lineHeight: 1.12,
                color: "#1a0010",
                margin: 0,
              }}
            >
              Six reasons clients
              <br />
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 200,
                  color: "#8B004B",
                }}
              >
                keep coming back.
              </em>
            </h2>

            <p
              data-reveal
              data-d="3"
              style={{
                fontFamily: "'Outfit',sans-serif",
                fontSize: "12.5px",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "rgba(26,0,16,0.42)",
                maxWidth: "280px",
                margin: 0,
              }}
            >
              Every point below is something we prove on every single visit —
              not just a promise on a website.
            </p>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="why-grid" style={{ position: "relative", zIndex: 1 }}>
          {WHY_US.map((card, i) => (
            <div
              key={card.num}
              className="why-card"
              data-reveal
              data-d={`${Math.min(i + 3, 8)}`}
            >
              {/* Full-card image — clip-path slides it from left */}
              <img
                className="why-card-img"
                src={card.img}
                alt={card.title}
                loading="lazy"
              />

              {/* Dark gradient overlay — text stays readable */}
              <div className="why-card-overlay" />

              {/* Text content — always above image & overlay */}
              <div className="why-card-content">
                <div className="why-num">{card.num}</div>
                <div className="why-divider" />
                <div className="why-title">{card.title}</div>
                <div className="why-desc">{card.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
