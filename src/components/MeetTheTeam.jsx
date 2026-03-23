"use client";

import { useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    name: "Ramesh Nair",
    location: "Adyar, Chennai",
    since: "Customer since 2021",
    quote:
      "Called them at 10 in the morning, they were at my door by noon. Took everything — old AC, iron rods, newspapers. Paid on the spot without any haggling. Never felt so respected handing over scrap.",
  },
  {
    name: "Sunita Krishnamoorthy",
    location: "T. Nagar, Chennai",
    since: "Customer since 2019",
    quote:
      "I was skeptical at first — most kabadiwalas give you a number and then try to talk it down at the door. These people stuck to every rupee they quoted. That kind of honesty is rare.",
  },
  {
    name: "Mohammed Farhan",
    location: "Tambaram, Chennai",
    since: "Customer since 2022",
    quote:
      "We cleared out an entire office after shifting. The team handled everything — dismantling, sorting, hauling. Zero mess left behind. I've already referred them to two other businesses.",
  },
];

export default function Testimonials() {
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
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200;0,9..144,300;1,9..144,200;1,9..144,300&family=Outfit:wght@300;400;500;600&display=swap');
        .font-fraunces { font-family:'Fraunces',Georgia,serif; }
        .font-outfit   { font-family:'Outfit',sans-serif; }

        [data-reveal] {
          opacity:0; transform:translateY(26px);
          transition: opacity .85s cubic-bezier(.22,1,.36,1), transform .85s cubic-bezier(.22,1,.36,1);
        }
        [data-reveal][data-revealed="true"] { opacity:1!important; transform:none!important; }
        [data-d="1"]{ transition-delay:.05s; }
        [data-d="2"]{ transition-delay:.14s; }
        [data-d="3"]{ transition-delay:.24s; }
        [data-d="4"]{ transition-delay:.34s; }
        [data-d="5"]{ transition-delay:.44s; }

        /* Testimonial card */
        .testi-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(139,0,75,0.12);
          background: #f2f0e6;
          padding: 36px 30px 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 28px;
          transition: border-color .3s, transform .35s cubic-bezier(.22,1,.36,1);
          cursor: default;
        }
        .testi-card:hover {
          border-color: rgba(139,0,75,0.35);
          transform: translateY(-6px);
        }

        /* Accent bar on hover */
        .testi-card::after {
          content:''; position:absolute;
          bottom:0; left:0;
          height:2px; width:0; background:#8b004b;
          transition: width .4s cubic-bezier(.22,1,.36,1);
        }
        .testi-card:hover::after { width:100%; }

        /* Large decorative quote mark */
        .testi-deco-quote {
          position: absolute;
          top: 18px; right: 22px;
          font-family: 'Fraunces', Georgia, serif;
          font-size: 90px;
          font-weight: 200;
          line-height: 1;
          color: rgba(139,0,75,0.08);
          user-select: none;
          pointer-events: none;
          transition: color .3s;
        }
        .testi-card:hover .testi-deco-quote {
          color: rgba(139,0,75,0.14);
        }

        /* Quote text */
        .testi-quote {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 15px;
          font-weight: 300;
          font-style: italic;
          line-height: 1.8;
          color: #3a1a2a;
          position: relative;
          z-index: 1;
        }
        .testi-quote::before {
          content: '\u201C';
          font-size: 22px;
          color: #8b004b;
          line-height: 0;
          vertical-align: -6px;
          margin-right: 4px;
        }

        /* Author block */
        .testi-author {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-top: 20px;
          border-top: 1px solid rgba(139,0,75,0.10);
        }

        .testi-since {
          font-family: 'Outfit', sans-serif;
          font-size: 8.5px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #8b004b;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .testi-since::before {
          content: '';
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #8b004b;
          flex-shrink: 0;
        }

        .testi-name {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 20px;
          font-weight: 300;
          color: #1a0010;
          line-height: 1.2;
        }
        .testi-location {
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          font-weight: 300;
          letter-spacing: .06em;
          color: #9a8585;
        }

        /* Grid */
        .testi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 56px;
        }
        @media(max-width:860px){ .testi-grid { grid-template-columns: 1fr 1fr; } }
        @media(max-width:560px){ .testi-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section
        ref={revealRef}
        className="font-outfit bg-[#f2f0e6] border-t border-[#8b004b]/10 py-16"
        id="testimonials"
      >
        <div className="max-w-7xl mx-auto px-8 lg:px-10">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4" data-reveal data-d="1">
                <span className="w-[5px] h-[5px] rounded-full bg-[#8b004b]" />
                <span className="font-outfit text-[9px] tracking-[0.30em] uppercase text-[#8b004b]">What People Say</span>
              </div>
              <h2
                className="font-fraunces font-light text-[#1a0010] leading-[1.12]"
                style={{ fontSize: "clamp(32px,4vw,50px)" }}
                data-reveal
                data-d="2"
              >
                Words from the people<br />
                <em className="italic font-extralight text-[#8b004b]">who trusted us.</em>
              </h2>
            </div>

            <p
              className="font-outfit text-[12.5px] font-light leading-[1.85] text-[#9a8585] max-w-[300px] lg:text-right"
              data-reveal
              data-d="3"
            >
              Real customers, real experiences — no scripts, no incentives.
            </p>
          </div>

          {/* Cards */}
          <div className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="testi-card" data-reveal data-d={`${i + 2}`}>
                <div className="testi-deco-quote">"</div>
                <p className="testi-quote">{t.quote}</p>
                <div className="testi-author">
                  <div className="testi-since">{t.since}</div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-location">{t.location}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <p
            className="font-outfit text-[10px] tracking-[0.12em] text-[#c4b8b8] mt-8 text-center"
            data-reveal
            data-d="4"
          >
            + Hundreds more happy customers across Chennai
          </p>
        </div>
      </section>
    </>
  );
}