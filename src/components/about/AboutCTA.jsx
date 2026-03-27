"use client";

import { useEffect, useRef, useState } from "react";
import { Phone } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutCTA() {
  const revealRef = useRef(null);
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(checkMobile);
  }, []);

  const handleClick = (e) => {
    if (!isMobile) {
      e.preventDefault();
      router.push("/#contact"); // ✅ key fix
    }
  };

  useEffect(() => {
    const el = revealRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          e.target.setAttribute("data-revealed", "true");
          io.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200;0,9..144,300;1,9..144,200;1,9..144,300&family=Outfit:wght@300;400;500;600&display=swap');
        .font-fraunces { font-family:'Fraunces',Georgia,serif; }
        .font-outfit   { font-family:'Outfit',sans-serif; }

        [data-reveal] {
          opacity:0; transform:translateY(20px);
          transition: opacity .85s cubic-bezier(.22,1,.36,1), transform .85s cubic-bezier(.22,1,.36,1);
        }
        [data-reveal][data-revealed="true"] { opacity:1!important; transform:none!important; }

        /* CTA wrapper */
        .cta-wrap {
          position:relative; overflow:hidden;
          background:#1a0010;
        }

        /* Grain */
        .cta-wrap::before {
          content:''; position:absolute; inset:0; pointer-events:none;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          background-size:256px; opacity:.55;
        }

        /* Orbs */
        .cta-orb-l {
          position:absolute; width:400px; height:400px; border-radius:50%;
          background:radial-gradient(circle, rgba(139,0,75,0.22) 0%, transparent 65%);
          top:-100px; left:-60px; pointer-events:none;
        }
        .cta-orb-r {
          position:absolute; width:300px; height:300px; border-radius:50%;
          background:radial-gradient(circle, rgba(139,0,75,0.12) 0%, transparent 65%);
          bottom:-60px; right:10%; pointer-events:none;
        }

        .cta-inner {
          position:relative; z-index:2;
          max-width:1280px; margin:0 auto;
          padding:72px 40px;
          display:grid;
          grid-template-columns:1fr auto;
          align-items:center; gap:40px;
        }
        @media(max-width:700px){
          .cta-inner { grid-template-columns:1fr; padding:52px 24px; }
          .cta-actions { flex-wrap:wrap; }
        }

        /* Decorative top border */
        .cta-top-rule {
          height:1px;
          background:linear-gradient(to right, transparent, rgba(139,0,75,0.40) 30%, rgba(139,0,75,0.40) 70%, transparent);
        }

        .cta-headline {
          font-family:'Fraunces',Georgia,serif;
          font-size:clamp(26px,3.5vw,38px); font-weight:300;
          color:#f2f0e6; line-height:1.22;
          margin-bottom:10px;
        }
        .cta-headline em {
          font-style:italic; font-weight:200;
          color:rgba(242,240,230,0.50);
        }

        .cta-sub {
          font-family:'Outfit',sans-serif;
          font-size:10.5px; letter-spacing:.14em; text-transform:uppercase;
          color:rgba(242,240,230,0.30); margin-top:6px;
        }

        .cta-actions {
          display:flex; align-items:center; gap:20px; flex-shrink:0;
        }

        /* Primary button */
        .cta-btn-primary {
          font-family:'Outfit',sans-serif;
          font-size:10px; font-weight:600; letter-spacing:.18em; text-transform:uppercase;
          padding:14px 30px;
          background:#8b004b; color:#f2f0e6;
          text-decoration:none;
          display:inline-flex; align-items:center; gap:10px;
          position:relative; overflow:hidden;
          transition: background .25s;
        }
        .cta-btn-primary::before {
          content:''; position:absolute;
          inset:0; background:rgba(242,240,230,0.06);
          transform:translateX(-100%);
          transition:transform .35s cubic-bezier(.22,1,.36,1);
        }
        .cta-btn-primary:hover { background:#6a0039; }
        .cta-btn-primary:hover::before { transform:translateX(0); }
        .cta-btn-primary svg { transition:transform .25s; }
        .cta-btn-primary:hover svg { transform:translateX(3px); }

        /* Ghost button */
        .cta-btn-ghost {
          font-family:'Outfit',sans-serif;
          font-size:10px; font-weight:400; letter-spacing:.14em; text-transform:uppercase;
          color:rgba(242,240,230,0.40); text-decoration:none;
          display:inline-flex; align-items:center; gap:9px;
          transition:color .2s, gap .25s;
          white-space:nowrap;
        }
        .cta-btn-ghost:hover { color:rgba(242,240,230,0.85); gap:14px; }

        .ghost-arrow {
          display:inline-block; width:22px; height:1px;
          background:currentColor; position:relative; flex-shrink:0;
        }
        .ghost-arrow::after {
          content:''; position:absolute;
          right:0; top:-3px; width:7px; height:7px;
          border-right:1px solid currentColor;
          border-top:1px solid currentColor;
          transform:rotate(45deg);
        }

        /* Trust strip at bottom */
        .trust-strip {
          position:relative; z-index:2;
          border-top:1px solid rgba(242,240,230,0.06);
          display:flex; gap:0;
        }
        .trust-item {
          flex:1; padding:18px 24px;
          border-right:1px solid rgba(242,240,230,0.06);
          display:flex; align-items:center; gap:8px;
        }
        .trust-item:last-child { border-right:none; }
        .trust-dot { width:3px; height:3px; border-radius:50%; background:#8b004b; flex-shrink:0; }
        .trust-text {
          font-family:'Outfit',sans-serif;
          font-size:9px; letter-spacing:.12em; text-transform:uppercase;
          color:rgba(242,240,230,0.28);
        }
        @media(max-width:600px){
          .trust-strip { flex-wrap:wrap; }
          .trust-item { min-width:50%; }
        }
      `}</style>

      <section
        className="font-outfit bg-[#f2f0e6] border-t border-[#8b004b]/10"
        id="contact-cta"
      >
        <div className="cta-wrap">
          <div className="cta-top-rule" />
          <div className="cta-orb-l" />
          <div className="cta-orb-r" />

          {/* Main CTA */}
          <div ref={revealRef} className="cta-inner" data-reveal>
            {/* Left */}
            <div>
              <div className="cta-headline">
                Ready to clear your scrap?
                <br />
                <em>Let's make it happen today.</em>
              </div>
              <div className="cta-sub">
                Call or WhatsApp — we respond within minutes
              </div>
            </div>

            {/* Right */}
            <div className="cta-actions">
              <a
                href={isMobile ? "tel:+919789075963" : "/#contact"}
                onClick={handleClick}
                className="cta-btn-primary"
              >
                <Phone size={14} strokeWidth={1.5} />
                <span>{isMobile ? "Call Now" : "Contact Us"}</span>
              </a>
              <a href="https://wa.me/919789075963" className="cta-btn-ghost">
                <span className="ghost-arrow" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Trust strip */}
          {/* <div className="trust-strip">
            {["Free Doorstep Pickup", "Instant UPI / Cash Payment", "Same-Day Service", "Transparent Weighing"].map((t) => (
              <div key={t} className="trust-item">
                <span className="trust-dot" />
                <span className="trust-text">{t}</span>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
}
