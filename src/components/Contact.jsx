"use client";

import { useEffect, useRef, useState } from "react";

const CONTACT_DETAILS = [
  {
    label: "Call Us",
    value: "+91 97890 75963",
    sub: "Mon – Sat, 9 AM – 7 PM",
    href: "tel:+919789075963",
  },
  {
    label: "WhatsApp",
    value: "+91 97890 75963",
    sub: "Quick response guaranteed",
    href: "https://wa.me/919789075963",
  },
  {
    label: "Address",
    value: "No 120, Rajajinagar Main Road",
    sub: "Madipakkam, Chennai Tamil Nadu – 600091",
    href: "https://maps.app.goo.gl/9x3ATeUcWcE9xik99",
  },
];

export default function Contact() {
  const revealRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,200;1,9..144,300&family=Outfit:wght@300;400;500;600&display=swap');

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

        /* ── Contact detail rows ── */
        .contact-card {
          position: relative;
          padding: 22px 0;
          border-bottom: 1px solid rgba(26,0,16,0.07);
          display: flex;
          align-items: flex-start;
          gap: 16px;
          text-decoration: none;
          transition: padding-left 0.3s ease;
        }
        .contact-card:first-child { border-top: 1px solid rgba(26,0,16,0.07); }
        .contact-card::before {
          content: '';
          position: absolute;
          left: 0; top: 50%;
          transform: translateY(-50%);
          width: 0; height: 2px;
          background: #8b004b;
          transition: width 0.3s ease;
        }
        .contact-card:hover { padding-left: 14px; }
        .contact-card:hover::before { width: 8px; }

        /* ── Address card: stack on mobile ── */
        .contact-card-address {
          flex-wrap: wrap;
        }
        .contact-card-address .card-body {
          flex: 1 1 160px;
          min-width: 0;
        }
        .contact-card-address .address-cta-wrap {
          /* On mobile: full row below label+body */
          width: 100%;
          margin-top: 12px;
          padding-left: 0;
        }
        @media (min-width: 480px) {
          .contact-card-address .address-cta-wrap {
            width: auto;
            margin-top: 0;
            margin-left: auto;
            align-self: center;
            padding-left: 0;
            flex-shrink: 0;
          }
        }

        /* ── "View Location" CTA ── */
        .address-cta {
          font-family: 'Outfit', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 10px 16px;
          background: #8b004b;
          color: #f2f0e6;
          border: none;
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease, border 0.25s ease;
          display: inline-block;
          white-space: nowrap;
        }
        .address-cta:hover {
          background: #f2f0e6;
          color: #8b004b;
          border: 1px solid #8b004b;
        }
        .contact-card:hover .address-cta {
          transform: translateX(4px);
          transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;
        }

        /* ── Form inputs ── */
        .mf-label {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(242,240,230,0.55);
          display: block;
          margin-bottom: 4px;
        }
        .mf-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(242,240,230,0.35);
          padding: 10px 0;
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #f2f0e6;
          outline: none;
          transition: border-color 0.3s ease;
          caret-color: #f2f0e6;
          box-sizing: border-box;
        }
        .mf-input::placeholder {
          color: rgba(242,240,230,0.22);
          font-weight: 300;
        }
        .mf-input:focus { border-bottom-color: rgba(242,240,230,0.65); }
        textarea.mf-input { resize: none; min-height: 80px; }

        /* ── Submit button ── */
        .mf-submit {
          width: 100%;
          font-family: 'Outfit', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #8b004b;
          background: #f2f0e6;
          border: none;
          padding: 14px 0;
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease;
          margin-top: 4px;
          position: relative;
        }
        .mf-submit::before,
        .mf-submit::after {
          content: "";
          position: absolute;
          width: 0;
          height: 1px;
          background: white;
          transition: width 0.3s ease;
        }
        .mf-submit::before { top: 0; left: 0; }
        .mf-submit::after  { bottom: 0; right: 0; }
        .mf-submit span { position: absolute; display: block; background: white; }
        .mf-submit span:nth-child(1) {
          width: 1px; height: 0;
          left: 0; bottom: 0;
          transition: height 0.3s ease 0.3s;
        }
        .mf-submit span:nth-child(2) {
          width: 1px; height: 0;
          right: 0; top: 0;
          transition: height 0.3s ease 0.3s;
        }
        .mf-submit:hover { background: #8b004b; color: #f2f0e6; }
        .mf-submit:hover::before,
        .mf-submit:hover::after { width: 100%; }
        .mf-submit:hover span:nth-child(1),
        .mf-submit:hover span:nth-child(2) { height: 100%; }
      `}</style>

      <section
        ref={revealRef}
        id="contact"
        className="font-outfit bg-[#f2f0e6] border-t border-[#8b004b]/10 py-12 lg:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* ── Eyebrow ── */}
          <div className="flex items-center gap-2.5 mb-6" data-reveal data-d="1">
            <span className="font-outfit text-[10px] tracking-[0.30em] uppercase text-[#8b004b]">
              Contact Us
            </span>
          </div>

          {/* ── Main grid: stacked on mobile, side-by-side on lg ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] items-start gap-10 lg:gap-10">

            {/* ══ LEFT — Headline + contact details ══ */}
            <div>
              <h2
                className="font-fraunces text-[32px] sm:text-[40px] lg:text-[46px] font-light leading-[1.1] mb-8 lg:mb-10"
                style={{ color: "#1a0010" }}
                data-reveal
                data-d="2"
              >
                Ready to sell
                <br />
                your scrap?
                <br />
                <em className="italic font-extralight" style={{ color: "#8b004b" }}>
                  We're one call away.
                </em>
              </h2>

              {/* Detail rows */}
              <div data-reveal data-d="3">
                {CONTACT_DETAILS.map((c) => {
                  const isAddress = c.label === "Address";
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      className={`contact-card${isAddress ? " contact-card-address" : ""}`}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                    >
                      {/* Label column */}
                      <div style={{ width: "72px", flexShrink: 0, paddingTop: "3px" }}>
                        <span className="font-outfit text-[10px] text-[#b38787] tracking-[0.18em] uppercase">
                          {c.label}
                        </span>
                      </div>

                      {/* Content */}
                      <div className={isAddress ? "card-body" : ""}>
                        <div className="font-fraunces text-[18px] sm:text-[20px] font-light leading-none mb-1.5 text-[#1a0010]">
                          {c.value}
                        </div>
                        <div className="font-outfit text-[11px] font-light text-[#9a8585]">
                          {c.sub}
                        </div>
                      </div>

                      {/* Address CTA — wraps below on xs, floats right on sm+ */}
                      {isAddress ? (
                        <div className="address-cta-wrap">
                          <span className="address-cta">View Location →</span>
                        </div>
                      ) : (
                        <div className="ml-auto self-center flex-shrink-0 text-[rgba(26,0,16,0.18)]">
                          →
                        </div>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* ══ RIGHT — Maroon form panel ══ */}
            <div
              data-reveal
              data-d="4"
              style={{ background: "#8b004b", padding: "32px 28px" }}
            >
              {/* Form header */}
              <div className="mb-8">
                <span
                  className="font-outfit text-[12px] tracking-[0.26em] uppercase"
                  style={{ color: "rgba(242,240,230,0.55)" }}
                >
                  Send a message
                </span>
                <div
                  style={{
                    width: "48px",
                    height: "1px",
                    background: "rgba(242,240,230,0.35)",
                    marginTop: "10px",
                  }}
                />
              </div>

              {submitted ? (
                <div style={{ paddingTop: "16px" }}>
                  <div
                    className="font-fraunces text-[26px] font-light"
                    style={{ color: "#f2f0e6", marginBottom: "12px" }}
                  >
                    Thank you.
                  </div>
                  <p
                    className="font-outfit text-[12px] font-light leading-[1.8]"
                    style={{ color: "rgba(242,240,230,0.50)", marginBottom: "24px" }}
                  >
                    We'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mf-submit"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div>
                      <label className="mf-label">Name</label>
                      <input
                        type="text"
                        className="mf-input"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="mf-label">Email</label>
                      <input
                        type="email"
                        className="mf-input"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="mf-label">Message</label>
                      <textarea
                        className="mf-input"
                        placeholder="What scrap do you have?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <button type="submit" className="mf-submit">
                      Request Pickup →<span></span><span></span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}