"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const MAP_IMAGE = "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80";

const AREAS = [
  "Madipakkam",    "Velachery",       "Pallikaranai",  "Perungudi",
  "Sholinganallur", "Medavakkam",     "Tambaram",      "Chrompet",
  "Adyar",         "Guindy",          "Anna Nagar",    "T. Nagar",
  "Porur",         "Ambattur",        "Avadi",         "Poonamallee",
];

export default function ServiceAreas() {
  const revealRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const els = revealRef.current?.querySelectorAll("[data-reveal]");
    if (!els?.length) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.dataset.revealed = "true"; io.unobserve(e.target); }
        }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200;0,9..144,300;1,9..144,200;1,9..144,300&family=Outfit:wght@300;400;500;600&display=swap');
        .font-fraunces { font-family:'Fraunces',Georgia,serif; }
        .font-outfit   { font-family:'Outfit',sans-serif; }

        [data-reveal] {
          opacity:0; transform:translateY(26px);
          transition: opacity .85s cubic-bezier(.22,1,.36,1), transform .85s cubic-bezier(.22,1,.36,1);
        }
        [data-reveal="left"]  { transform:translateX(-22px); }
        [data-reveal="right"] { transform:translateX(22px);  }
        [data-reveal][data-revealed="true"] { opacity:1!important; transform:none!important; }
        [data-d="1"]{ transition-delay:.05s; }
        [data-d="2"]{ transition-delay:.15s; }
        [data-d="3"]{ transition-delay:.26s; }
        [data-d="4"]{ transition-delay:.38s; }
        [data-d="5"]{ transition-delay:.50s; }

        /* Areas grid */
        .areas-grid {
          display:grid;
          grid-template-columns:repeat(4,1fr);
          border:1px solid rgba(139,0,75,0.10);
          margin-top:40px;
        }
        /* Tablet: 2 columns */
        @media(max-width:860px){ .areas-grid { grid-template-columns:repeat(2,1fr); } }
        /* Mobile: 2 columns still (compact enough) */
        @media(max-width:480px){ .areas-grid { grid-template-columns:repeat(2,1fr); margin-top:28px; } }

        .area-cell {
          padding:16px 22px;
          background: #ede9da;
          border-right:1px solid rgba(139,0,75,0.10);
          border-bottom:1px solid rgba(139,0,75,0.10);
          font-family:'Outfit',sans-serif;
          font-size:12px; font-weight:300;
          color: rgba(26,0,16,0.55);
          display:flex; align-items:center; gap:9px;
          cursor:default; letter-spacing:.03em;
          transition: color .2s, background .2s;
        }
        /* On mobile, tighten cell padding */
        @media(max-width:480px){
          .area-cell { padding:13px 14px; font-size:11px; gap:7px; }
        }

        /* Border fix: 4-col layout */
        .area-cell:nth-child(4n){ border-right:none; }
        /* Border fix: 2-col layout (tablet + mobile) */
        @media(max-width:860px){
          .area-cell:nth-child(4n){ border-right:1px solid rgba(139,0,75,0.10); }
          .area-cell:nth-child(2n){ border-right:none; }
        }

        .area-cell:hover { color:#1a0010; background: #e8e3d0; }
        .area-cell.lit  { color:#1a0010; background: #e8e3d0; }

        .area-dot {
          width:3px; height:3px; border-radius:50%;
          background:#8b004b; flex-shrink:0;
          transition:opacity .2s, transform .2s;
        }
        .area-cell:hover .area-dot { transform:scale(1.6); }

        /* Map panel */
        .map-panel {
          position:relative; overflow:hidden;
          height:100%; min-height:360px;
        }
        /* On mobile the map stacks below and gets a fixed height */
        @media(max-width:768px){
          .map-panel { min-height:240px; height:240px; }
        }
        .map-panel img {
          transition: transform .8s cubic-bezier(.22,1,.36,1);
        }
        .map-panel:hover img { transform:scale(1.05); }

        /* Deep vignette */
        .map-vignette {
          position:absolute; inset:0; z-index:2; pointer-events:none;
          box-shadow:
            inset 0   0   35px 10px rgba(26,0,16,0.80),
            inset 0   0   80px 28px rgba(26,0,16,0.55),
            inset 0   0  150px 50px rgba(26,0,16,0.30),
            inset 0   0  240px 75px rgba(26,0,16,0.14);
        }

        /* Border frame */
        .map-frame {
          position:absolute; inset:0; z-index:3; pointer-events:none;
          border:1.5px solid rgba(26,0,16,0.45);
          box-shadow:
            0  2px 18px rgba(26,0,16,0.12),
            0  8px 40px rgba(26,0,16,0.08);
        }

        /* Header row */
        .header-row {
          display:flex;
          flex-direction:row;
          align-items:flex-start;
          justify-content:space-between;
          gap:32px;
          margin-bottom:0;
        }
        @media(max-width:640px){
          .header-row { flex-direction:column; align-items:flex-start; gap:10px; }
        }

        /* Two-column content grid */
        .content-grid {
          display:grid;
          grid-template-columns:1.4fr 1fr;
          gap:40px;
          margin-top:0;
        }
        /* Stack on tablet and below */
        @media(max-width:768px){
          .content-grid {
            grid-template-columns:1fr;
            gap:28px;
          }
        }

        /* On mobile, reset reveal side-animations to vertical only */
        @media(max-width:768px){
          [data-reveal="left"]  { transform:translateY(20px); }
          [data-reveal="right"] { transform:translateY(20px); }
        }

        /* Section padding */
        .areas-section {
          padding-top: 64px;
          padding-bottom: 64px;
        }
        @media(max-width:640px){
          .areas-section {
            padding-top: 48px;
            padding-bottom: 48px;
          }
        }

        /* Inner container padding */
        .areas-inner {
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
          padding-left: 40px;
          padding-right: 40px;
          position: relative;
          z-index: 2;
        }
        @media(max-width:640px){
          .areas-inner {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      `}</style>

      <section
        ref={revealRef}
        className="areas-section font-outfit relative overflow-hidden"
        style={{ backgroundColor: "#F2F0E6", borderTop: "1px solid rgba(139,0,75,0.10)" }}
        id="areas"
      >

        <div className="areas-inner">

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4" data-reveal data-d="1">
            <span className="font-outfit text-[9px] tracking-[0.30em] uppercase" style={{ color: "#8b004b" }}>
              Where We Operate
            </span>
          </div>

          {/* H2 + P on same row (stacks on mobile) */}
          <div className="header-row">
            <h2
              className="font-fraunces font-light leading-[1.12]"
              style={{ fontSize: "clamp(28px,4vw,50px)", color: "#1a0010" }}
              data-reveal data-d="2"
            >
              Serving all of<br />
              <em className="italic font-extralight" style={{ color: "#8b004b" }}>Chennai.</em>
            </h2>

            <p
              className="font-outfit font-light leading-[1.85]"
              style={{ fontSize: "12.5px", color: "#9a8585", maxWidth: "280px" }}
              data-reveal data-d="3"
            >
              We cover every major zone. Don't see yours? Call us — we'll come anyway.
            </p>
          </div>

          {/* Two-column: areas grid + image */}
          <div className="content-grid">

            {/* LEFT: areas */}
            <div data-reveal="left" data-d="4">
              <div className="areas-grid">
                {AREAS.map((area, i) => (
                  <div
                    key={area}
                    className={`area-cell ${hovered === i ? "lit" : ""}`}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <span className="area-dot" />
                    {area}
                  </div>
                ))}
              </div>

              <p className="font-outfit tracking-[0.12em] mt-5" style={{ fontSize: "10px", color: "rgba(26,0,16,0.28)" }}>
                + Additional areas on request — just call us.
              </p>
            </div>

            {/* RIGHT: image with deep vignette */}
            <div className="map-panel" data-reveal="right" data-d="4">
              <Image
                src={MAP_IMAGE}
                alt="Chennai city — JJ Scrapbuyers service area"
                fill
                className="object-cover"
              />

              <div className="map-vignette" />
              <div className="map-frame" />

              {/* Badge */}
              <div
                className="absolute top-5 left-5 z-[4] flex items-center gap-2 px-3 py-2"
                style={{
                  background: "rgba(26,0,16,0.55)",
                  border: "1px solid rgba(139,0,75,0.45)",
                }}
              >
                <span className="w-[4px] h-[4px] rounded-full" style={{ background: "#8b004b" }} />
                <span
                  className="font-outfit tracking-[0.18em] uppercase"
                  style={{ fontSize: "8px", color: "rgba(242,240,230,0.90)" }}
                >
                  Chennai, Tamil Nadu
                </span>
              </div>

              {/* Bottom caption */}
              <div className="absolute bottom-0 left-0 right-0 z-[4] px-6 pb-5">
                <div
                  className="font-fraunces font-light italic"
                  style={{ fontSize: "13px", color: "rgba(242,240,230,0.70)" }}
                >
                  16 zones and counting.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}