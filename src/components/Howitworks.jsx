"use client";

import { useEffect, useRef, useState } from "react";
import { Phone } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Call or WhatsApp Us",
    desc: "Share your scrap details — type, quantity, and location. We'll give you an instant price estimate with zero obligations.",
    detail: "Available 8 AM – 11 PM, Mon–Sun",
    accent: "Quick Response",
  },
  {
    num: "02",
    title: "We Come to You",
    desc: "Our team arrives at your doorstep at your preferred time. We handle all loading — no effort needed from your side.",
    detail: "Same-day or next-day pickup",
    accent: "Free Pickup",
  },
  {
    num: "03",
    title: "Weigh & Get Paid",
    desc: "Transparent weighing done right in front of you. Instant payment via UPI, NEFT, or cash — no delays, no deductions.",
    detail: "UPI / NEFT / Cash accepted",
    accent: "Instant Payment",
  },
];

export default function HowItWorks() {
  const revealRef = useRef(null);
  const ctaRef = useRef(null);
  const [activeStep, setActiveStep] = useState(null);

    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
  }, []);

  const handleClick = (e) => {
    if (!isMobile) {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    } }

  useEffect(() => {
    // Main section reveals
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
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));

    // CTA bar — separate observer, fires as soon as top edge enters viewport
    const ctaEl = ctaRef.current;
    const ctaIo = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.dataset.revealed = "true";
            ctaIo.unobserve(e.target);
          }
        }),
      { threshold: 0.05 },
    );
    if (ctaEl) ctaIo.observe(ctaEl);

    return () => {
      io.disconnect();
      ctaIo.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,200;1,9..144,300&family=Outfit:wght@300;400;500;600&display=swap');

        .font-fraunces { font-family: 'Fraunces', Georgia, serif; }
        .font-outfit    { font-family: 'Outfit', sans-serif; }

        [data-reveal] {
          opacity: 0;
          transform: translateY(28px);
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
        [data-d="4"] { transition-delay: 0.38s; }
        [data-d="5"] { transition-delay: 0.50s; }
        [data-d="6"] { transition-delay: 0.62s; }

        /* Step card */
        .step-card {
          position: relative;
          border: 1px solid rgba(139,0,75,0.10);
          background: #f2f0e6;
          padding: 40px 36px 36px;
          cursor: default;
          transition: border-color 0.3s ease, transform 0.3s ease;
          overflow: hidden;
        }
        .step-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(139,0,75,0.04) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .step-card:hover::before { opacity: 1; }
        .step-card:hover {
          border-color: rgba(139,0,75,0.30);
          transform: translateY(-4px);
        }

        /* Connector line between steps */
        .step-connector {
          position: absolute;
          top: 48px;
          right: -1px;
          width: 1px;
          height: calc(100% - 96px);
          background: linear-gradient(to bottom, transparent, rgba(139,0,75,0.25), transparent);
        }

        /* Step number ghost */
        .step-ghost-num {
          position: absolute;
          top: -6px;
          right: 4px;
          font-family: 'Fraunces', Georgia, serif;
          font-size: 80px;
          font-weight: 600;
          color: rgba(139,0,75,0.04);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        /* Accent pill */
        .accent-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Outfit', sans-serif;
          font-size: 8px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #8b004b;
          border: 1px solid rgba(139,0,75,0.25);
          padding: 4px 10px;
          margin-bottom: 20px;
        }
        .accent-pill::before {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #8b004b;
          flex-shrink: 0;
        }

        /* Progress dots */
        .progress-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(139,0,75,0.15);
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .progress-dot.active {
          background: #8b004b;
          transform: scale(1.4);
        }

        /* Bottom CTA bar */
        .cta-bar {
          background: #8b004b;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 40px;
          gap: 20px;
          flex-wrap: wrap;
        }

.cta-btn {
  font-family: 'Outfit', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;

  padding: 12px 22px;
  background: #f2f0e6;
  color: #8b004b;

  display: inline-flex;
  align-items: center;
  gap: 10px;

  border: none;
  cursor: pointer;
  text-decoration: none;

  transition: all 0.25s ease;
  position: relative;
}

/* Top & Bottom borders */
.cta-btn::before,
.cta-btn::after {
  content: "";
  position: absolute;
  width: 0;
  height: 1px;
  background: white;
  transition: width 0.3s ease;
}

.cta-btn::before {
  top: 0;
  left: 0;
}

.cta-btn::after {
  bottom: 0;
  right: 0;
}

/* Side borders */
.cta-btn span::before,
.cta-btn span::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 0;
  background: white;
  transition: height 0.3s ease 0.3s;
}

.cta-btn span::before {
  left: 0;
  bottom: 0;
}

.cta-btn span::after {
  right: 0;
  top: 0;
}

/* Hover */
.cta-btn:hover {
  background: #8b004b;
  color: #f2f0e6;
}

/* Animate border */
.cta-btn:hover::before,
.cta-btn:hover::after {
  width: 100%;
}

.cta-btn:hover span::before,
.cta-btn:hover span::after {
  height: 100%;
}

/* Icon animation */
.cta-btn svg {
  transition: transform 0.25s ease;
}

.cta-btn:hover svg {
  transform: translateX(4px);
}

        .cta-ghost-btn {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(242,240,230,0.55);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: color 0.2s ease;
        }
        .cta-ghost-btn:hover { color: rgba(242,240,230,0.9); }

        /* Horizontal rule divider */
        .section-rule {
          width: 44px;
          height: 1px;
          background: rgba(139,0,75,0.45);
          margin: 16px 0 24px;
        }
      `}</style>

      <section
        ref={revealRef}
        className="font-outfit  bg-[#f2f0e6] border-t border-[#8b004b]/10"
        id="process"
      >
        {/* ── TOP HEADER ── */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            {/* Left label + title */}
            <div>
              <div data-reveal data-d="1">
                <span className="font-outfit text-[10px] tracking-[0.30em] uppercase text-[#8b004b]">
                  Process
                </span>
              </div>

              <h2
                className="font-fraunces text-[40px] lg:text-[48px] font-light text-[#1a0010] leading-[1.1] mt-3"
                data-reveal
                data-d="2"
              >
                How It
                <em className="italic font-extralight text-[#8b004b]">
                  {" "}
                  Works
                </em>
                <br />
              </h2>
            </div>

            {/* Right descriptor */}
            <p
              className="font-outfit text-[13px] font-light leading-[1.85] text-[#9a8585] max-w-[320px] lg:text-right"
              data-reveal
              data-d="3"
            >
              Three easy steps — from your first call to cash in hand. No
              paperwork, no waiting, no hassle.
            </p>
          </div>

          {/* Decorative rule */}
          <div
            className="w-full h-px bg-gradient-to-r from-[#8b004b]/20 via-[#8b004b]/08 to-transparent mt-10"
            data-reveal
            data-d="3"
          />
        </div>

        {/* ── STEPS GRID ── */}
        <div className="max-w-7xl mx-auto px-6 pb-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="step-card"
                data-reveal
                data-d={`${i + 3}`}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
                style={{
                  borderRight:
                    i < STEPS.length - 1
                      ? "none"
                      : "1px solid rgba(139,0,75,0.10)",
                }}
              >
                {/* Ghost number */}
                <span className="step-ghost-num">{step.num}</span>

                {/* Accent pill */}
                <div className="accent-pill">{step.accent}</div>

                {/* Step number */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-fraunces text-[13px] font-light text-[#8b004b] tracking-[0.1em]">
                    {step.num}
                  </span>
                  <span className="flex-1 h-px bg-[#8b004b]/15" />
                </div>

                {/* Title */}
                <h3 className="font-fraunces text-[22px] font-light text-[#1a0010] leading-[1.25] mb-4">
                  {step.title}
                </h3>

                {/* Desc */}
                <p className="font-outfit text-[12.5px] font-light leading-[1.85] text-[#9a8585] mb-6">
                  {step.desc}
                </p>

                {/* Detail line */}
                <div className="flex items-center gap-2">
                  <span className="w-[4px] h-[4px] rounded-full bg-[#8b004b]/60 flex-shrink-0" />
                  <span className="font-outfit text-[10px] tracking-[0.12em] uppercase text-[#956161]">
                    {step.detail}
                  </span>
                </div>

                {/* Right connector (hidden on last) */}
                {i < STEPS.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "44px",
                      right: 0,
                      width: "1px",
                      bottom: "44px",
                      background:
                        "linear-gradient(to bottom, transparent, rgba(139,0,75,0.18), transparent)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div
            className="flex items-center justify-center gap-3 py-8 border-t border-[#8b004b]/08"
            data-reveal
            data-d="5"
          >
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`progress-dot ${activeStep === i ? "active" : ""}`}
              />
            ))}
          </div>
        </div>

        {/* ── BOTTOM CTA BAR ── */}
        <div ref={ctaRef} data-reveal style={{ transitionDelay: "0.08s" }}>
          <div className="cta-bar">
            {/* Left text */}
            <div>
              <p className="font-fraunces text-[20px] font-light italic text-[#f2f0e6] leading-[1.3]">
                Ready to get started?
              </p>
              <p className="font-outfit text-[10px] tracking-[0.12em] uppercase text-[rgba(242,240,230,0.45)] mt-1">
                Call us or drop a WhatsApp — we respond within minutes
              </p>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-5 flex-wrap">
              <a
                href={isMobile ? "tel:+919789075963" : "/#contact"}
                onClick={handleClick}
                className="cta-btn"
              >
                <Phone size={14} strokeWidth={1.5} />
                <span>{isMobile ? "Call Now" : "Contact Us"}</span>
              </a>
              <a href="https://wa.me/919789075963" className="cta-ghost-btn">
                <span
                  style={{
                    display: "inline-block",
                    width: "28px",
                    height: "1px",
                    background: "rgba(242,240,230,0.35)",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      right: 0,
                      top: "-3px",
                      width: "7px",
                      height: "7px",
                      borderRight: "1px solid rgba(242,240,230,0.35)",
                      borderTop: "1px solid rgba(242,240,230,0.35)",
                      transform: "rotate(45deg)",
                      display: "inline-block",
                    }}
                  />
                </span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
