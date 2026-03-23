"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { n: "500+",  l: "Happy Clients",       ghost: "500" },
  { n: "10K+",  l: "Tons Collected",      ghost: "10K" },
  { n: "15+",   l: "Years in Business",   ghost: "15"  },
  { n: "100%",  l: "Transparent Pricing", ghost: "100" },
];

/* Animated count-up hook */
function useCountUp(target, duration = 1400, triggered = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    const num = parseInt(target.replace(/\D/g, ""), 10);
    if (!num) { setVal(target); return; }
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * num));
      if (p < 1) requestAnimationFrame(step);
      else setVal(target); // final value with suffix
    };
    requestAnimationFrame(step);
  }, [triggered, target, duration]);
  return val;
}

function StatItem({ stat, triggered, delay }) {
  const displayed = useCountUp(stat.n, 1400, triggered);
  return (
    <div
      className="stat-cell"
      style={{ transitionDelay: `${delay}s` }}
      data-reveal
    >
      <span className="stat-ghost">{stat.ghost}</span>
      <div className="stat-n">{triggered ? displayed : "—"}</div>
      <div className="stat-l">{stat.l}</div>
    </div>
  );
}

export default function StatsBanner() {
  const ref = useRef(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reveal
    const els = el.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.dataset.revealed = "true"; io.unobserve(e.target); }
        }),
      { threshold: 0.08 }
    );
    els.forEach((el2) => io.observe(el2));

    // Count-up trigger
    const trigger = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTriggered(true); trigger.disconnect(); } },
      { threshold: 0.3 }
    );
    trigger.observe(el);

    return () => { io.disconnect(); trigger.disconnect(); };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200;0,9..144,300;1,9..144,200&family=Outfit:wght@300;400;500;600&display=swap');
        .font-fraunces { font-family:'Fraunces',Georgia,serif; }
        .font-outfit   { font-family:'Outfit',sans-serif; }

        [data-reveal] {
          opacity:0; transform:translateY(18px);
          transition: opacity .8s cubic-bezier(.22,1,.36,1), transform .8s cubic-bezier(.22,1,.36,1);
        }
        [data-reveal][data-revealed="true"] { opacity:1!important; transform:none!important; }

        /* Stats band */
        .stats-band {
          position:relative; overflow:hidden;
          background: #8b004b;
        }
        .stats-band::before {
          content:''; position:absolute; inset:0;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
          pointer-events:none;
        }

        .stats-strip {
          display:flex; position:relative; z-index:1;
        }
        @media(max-width:600px){
          .stats-strip { flex-wrap:wrap; }
          .stat-cell { min-width:50%; border-right:none!important; border-bottom:1px solid rgba(242,240,230,0.10); }
        }

        .stat-cell {
          flex:1; padding:52px 44px;
          border-right:1px solid rgba(242,240,230,0.12);
          position:relative; overflow:hidden;
          cursor:default;
          transition: background .3s;
        }
        .stat-cell:last-child { border-right:none; }
        .stat-cell:hover { background:rgba(242,240,230,0.05); }
        .stat-cell:hover .stat-n { transform:translateY(-3px); }

        .stat-ghost {
          position:absolute; top:-8px; right:8px;
          font-family:'Fraunces',Georgia,serif;
          font-size:88px; font-weight:600;
          color:rgba(242,240,230,0.05);
          line-height:1; pointer-events:none; user-select:none;
        }

        .stat-n {
          font-family:'Fraunces',Georgia,serif;
          font-size:clamp(36px,4vw,54px); font-weight:300;
          color:#f2f0e6; line-height:1;
          margin-bottom:8px;
          transition:transform .3s cubic-bezier(.22,1,.36,1);
        }

        .stat-l {
          font-family:'Outfit',sans-serif;
          font-size:8.5px; letter-spacing:.22em; text-transform:uppercase;
          color:rgba(242,240,230,0.42);
        }

        /* Top decorative border */
        .stats-band-top {
          height:2px;
          background: linear-gradient(to right, transparent, rgba(242,240,230,0.15) 30%, rgba(242,240,230,0.15) 70%, transparent);
        }
      `}</style>

      <div ref={ref} className="stats-band font-outfit" id="stats">
        <div className="stats-band-top" />
        <div className="stats-strip">
          {STATS.map((s, i) => (
            <StatItem
              key={s.l}
              stat={s}
              triggered={triggered}
              delay={i * 0.10}
            />
          ))}
        </div>
      </div>
    </>
  );
}