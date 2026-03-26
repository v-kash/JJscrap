"use client";

import { useEffect, useRef, useState } from "react";

const CONTACT_DETAILS = [
  {
    label: "Call Us",
    value: "+91 97890 75963",
    sub: "Mon – Sun, 8 AM – 11 PM",
    href: "tel:+919789075963",
    cta: "Call Now →",
  },
  {
    label: "Call Us",
    value: "+91 94441 00307",
    sub: "Alternate Mobile Number",
    href: "tel:+919444100307",
    cta: "Call Now →",
  },
  {
    label: "WhatsApp",
    value: "+91 97890 75963",
    sub: "Quick response guaranteed",
    href: "https://wa.me/919789075963",
    cta: "Chat Now →",
  },
  {
    label: "Address",
    value: "No 120, Rajajinagar Main Road",
    sub: "Madipakkam, Chennai Tamil Nadu – 600091",
    href: "https://maps.app.goo.gl/9x3ATeUcWcE9xik99",
    cta: "Location →",
  },
];

export default function Contact() {
  const revealRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const els = revealRef.current?.querySelectorAll("[data-reveal]");
    if (!els?.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.dataset.revealed = "true"; io.unobserve(e.target); }
      }),
      { threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,200;1,9..144,300&family=Outfit:wght@300;400;500;600&display=swap');

        .font-fraunces { font-family: 'Fraunces', Georgia, serif; }
        .font-outfit    { font-family: 'Outfit', sans-serif; }

        [data-reveal] {
          opacity: 0; transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        [data-reveal][data-revealed="true"] { opacity: 1 !important; transform: none !important; }
        [data-d="1"] { transition-delay: 0.05s; }
        [data-d="2"] { transition-delay: 0.15s; }
        [data-d="3"] { transition-delay: 0.25s; }
        [data-d="4"] { transition-delay: 0.35s; }

        /* ── Contact cards ── */
        .contact-card {
          position: relative;
          padding: 16px 0;
          border-bottom: 1px solid rgba(26,0,16,0.07);
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: padding-left 0.3s ease;
        }
        .contact-card:first-child { border-top: 1px solid rgba(26,0,16,0.07); }
        .contact-card::before {
          content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%);
          width: 0; height: 2px; background: #8b004b; transition: width 0.3s ease;
        }
        .contact-card:hover { padding-left: 12px; }
        .contact-card:hover::before { width: 8px; }

        /* Label — hide on phones narrower than 380px to save space */
        .card-label {
          width: 62px;
          flex-shrink: 0;
          padding-top: 2px;
        }
        @media (max-width: 379px) { .card-label { display: none; } }

        .card-body { flex: 1 1 0; min-width: 0; overflow: hidden; }

        /* CTA — always fixed width, always on the right */
        .card-cta {
          font-family: 'Outfit', sans-serif;
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 9px 0;
          width: 92px;
          text-align: center;
          background: #8b004b;
          color: #f2f0e6;
          border: 1px solid transparent;
          cursor: pointer;
          flex-shrink: 0;
          display: inline-block;
          white-space: nowrap;
          transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }
        @media (min-width: 480px) {
          .card-cta { font-size: 9px; width: 110px; padding: 10px 0; letter-spacing: 0.17em; }
        }
        .card-cta:hover { background: #f2f0e6; color: #8b004b; border-color: #8b004b; }
        .contact-card:hover .card-cta { transform: translateX(3px); }

        /* ── Form ── */
        .mf-label {
          font-family: 'Outfit', sans-serif; font-size: 10px; letter-spacing: 0.22em;
          text-transform: uppercase; color: rgba(242,240,230,0.55); display: block; margin-bottom: 4px;
        }
        .mf-input {
          width: 100%; background: transparent; border: none;
          border-bottom: 1px solid rgba(242,240,230,0.35); padding: 10px 0;
          font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 300;
          color: #f2f0e6; outline: none; transition: border-color 0.3s ease;
          caret-color: #f2f0e6; box-sizing: border-box;
          /* Prevents iOS zoom on focus (needs font-size >= 16px on iOS — handled below) */
        }
        @media (max-width: 640px) {
          /* iOS Safari zooms in if input font-size < 16px */
          .mf-input { font-size: 16px; }
        }
        .mf-input::placeholder { color: rgba(242,240,230,0.22); font-weight: 300; }
        .mf-input:focus { border-bottom-color: rgba(242,240,230,0.65); }
        textarea.mf-input { resize: none; min-height: 80px; }

        .mf-submit {
          width: 100%; font-family: 'Outfit', sans-serif;
          font-size: 9px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase;
          color: #8b004b; background: #f2f0e6; border: none; padding: 15px 0;
          cursor: pointer; transition: background 0.25s ease, color 0.25s ease, opacity 0.25s ease;
          margin-top: 4px; position: relative;
          /* Larger tap target on mobile */
          min-height: 48px;
        }
        .mf-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        .mf-submit::before, .mf-submit::after {
          content: ""; position: absolute; width: 0; height: 1px;
          background: white; transition: width 0.3s ease;
        }
        .mf-submit::before { top: 0; left: 0; }
        .mf-submit::after  { bottom: 0; right: 0; }
        .mf-submit span { position: absolute; display: block; background: white; }
        .mf-submit span:nth-child(1) { width: 1px; height: 0; left: 0; bottom: 0; transition: height 0.3s ease 0.3s; }
        .mf-submit span:nth-child(2) { width: 1px; height: 0; right: 0; top: 0; transition: height 0.3s ease 0.3s; }
        .mf-submit:not(:disabled):hover { background: #8b004b; color: #f2f0e6; }
        .mf-submit:not(:disabled):hover::before,
        .mf-submit:not(:disabled):hover::after { width: 100%; }
        .mf-submit:not(:disabled):hover span:nth-child(1),
        .mf-submit:not(:disabled):hover span:nth-child(2) { height: 100%; }

        .mf-error {
          font-family: 'Outfit', sans-serif; font-size: 11px;
          color: rgba(242,240,230,0.65); letter-spacing: 0.05em; line-height: 1.5;
        }

        /* ── Map responsive height ── */
        .map-frame {
          position: relative;
          overflow: hidden;
          border: 1.5px solid #1a001112;
          height: 240px;
        }
        @media (min-width: 480px) { .map-frame { height: 300px; } }
        @media (min-width: 768px) { .map-frame { height: 380px; } }

        .map-frame iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          border: none;
        }

        .map-tint {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: rgba(242,240,230,0.18); mix-blend-mode: lighten;
        }
      `}</style>

      {/* ══════════════ CONTACT SECTION ══════════════ */}
      <section
        ref={revealRef}
        id="contact"
        className="font-outfit bg-[#f2f0e6] border-t border-[#8b004b]/10 pt-10 sm:pt-12 lg:pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-5 sm:mb-6" data-reveal data-d="1">
            <span className="font-outfit text-[10px] tracking-[0.30em] uppercase text-[#8b004b]">
              Contact Us
            </span>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] items-start gap-8 lg:gap-10">

            {/* LEFT */}
            <div>
              <h2
                className="font-fraunces font-light leading-[1.15] mb-7 lg:mb-10"
                style={{ color: "#1a0010", fontSize: "clamp(26px, 7vw, 46px)" }}
                data-reveal data-d="2"
              >
                Ready to sell<br />your scrap?<br />
                <em className="italic font-extralight" style={{ color: "#8b004b" }}>
                  We're one call away.
                </em>
              </h2>

              <div data-reveal data-d="3">
                {CONTACT_DETAILS.map((c, i) => (
                  <a
                    key={`${c.value}-${i}`}
                    href={c.href}
                    className="contact-card"
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    <div className="card-label">
                      <span className="font-outfit text-[10px] text-[#b38787] tracking-[0.15em] uppercase leading-none">
                        {c.label}
                      </span>
                    </div>
                    <div className="card-body">
                      <div
                        className="font-fraunces font-light leading-tight mb-1 text-[#1a0010] truncate"
                        style={{ fontSize: "clamp(14px, 4vw, 20px)" }}
                      >
                        {c.value}
                      </div>
                      <div className="font-outfit text-[11px] font-light text-[#9a8585]">
                        {c.sub}
                      </div>
                    </div>
                    <span className="card-cta">{c.cta}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT — Form */}
            <div
              data-reveal data-d="4"
              style={{ background: "#8b004b", padding: "clamp(20px, 5vw, 32px) clamp(18px, 5vw, 28px)" }}
            >
              <div className="mb-7">
                <span
                  className="font-outfit text-[12px] tracking-[0.26em] uppercase"
                  style={{ color: "rgba(242,240,230,0.55)" }}
                >
                  Send a message
                </span>
                <div style={{ width: "48px", height: "1px", background: "rgba(242,240,230,0.35)", marginTop: "10px" }} />
              </div>

              {submitted ? (
                <div style={{ paddingTop: "16px" }}>
                  <div className="font-fraunces text-[26px] font-light" style={{ color: "#f2f0e6", marginBottom: "12px" }}>
                    Thank you.
                  </div>
                  <p className="font-outfit text-[12px] font-light leading-[1.8]" style={{ color: "rgba(242,240,230,0.50)", marginBottom: "24px" }}>
                    We've received your message and will be in touch shortly. A confirmation has been sent to your email.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", message: "" }); }}
                    className="mf-submit"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                    <div>
                      <label className="mf-label">Name</label>
                      <input type="text" className="mf-input" placeholder="Your full name"
                        value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                    </div>
                    <div>
                      <label className="mf-label">Phone</label>
                      <input type="tel" className="mf-input" placeholder="+91 98765 43210"
                        value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                    </div>
                    <div>
                      <label className="mf-label">Email</label>
                      <input type="email" className="mf-input" placeholder="you@example.com"
                        value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    </div>
                    <div>
                      <label className="mf-label">Message</label>
                      <textarea className="mf-input" placeholder="What scrap do you have?"
                        value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                    </div>
                    {error && <p className="mf-error">{error}</p>}
                    <button type="submit" className="mf-submit" disabled={sending}>
                      {sending ? "Sending…" : "Request Pickup →"}<span></span><span></span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ MAP SECTION ══════════════ */}
      <section style={{ background: "#f2f0e6", padding: "36px 0 48px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div style={{ marginBottom: "14px" }}>
            <span style={{
              fontFamily: "'Outfit', sans-serif", fontSize: "10px",
              letterSpacing: "0.30em", textTransform: "uppercase", color: "#8b004b"
            }}>
              Find Us
            </span>
          </div>

          <div className="map-frame">
            <div className="map-tint" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.1512881695553!2d80.20308117507628!3d12.962169387352336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU3JzQzLjgiTiA4MMKwMTInMjAuNCJF!5e0!3m2!1sen!2sin!4v1774514975248!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            />
          </div>

          <div style={{ marginTop: "12px", display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "'Outfit', sans-serif", fontSize: "10px",
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#b38787", flexShrink: 0
            }}>
              Address
            </span>
            <span style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(13px, 3vw, 15px)",
              fontWeight: 300, color: "#1a0010", lineHeight: 1.5
            }}>
              No 120, Rajajinagar Main Road, Madipakkam, Chennai – 600091
            </span>
          </div>

        </div>
      </section>
    </>
  );
}