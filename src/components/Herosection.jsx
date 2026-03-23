"use client";

import { useEffect, useRef, useState } from "react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80";

const NAV_LINKS = ["Home", "About", "Services", "Gallery", "Testimonials", "Contact"];

function useCounter(target, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return value;
}

function StatCounter({ target, suffix, label, animate }) {
  const count = useCounter(target, 1600, animate);
  return (
    <div className="stat-item">
      <div className="stat-number">
        {count}
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

const STATS = [
  { target: 500, suffix: "+",  label: "Clients Served" },
  { target: 10,  suffix: "K+", label: "Tons Processed" },
  { target: 15,  suffix: "+",  label: "Years Experience" },
];

const METALS = [
  "Iron","Steel","Copper","Aluminium","Brass","Stainless Steel","Cast Iron","MS Scrap",
  "Iron","Steel","Copper","Aluminium","Brass","Stainless Steel","Cast Iron","MS Scrap",
];

const PANELS = [
  { eye: "Industrial",  title: "Bulk Scrap Collection",  desc: "Factory & warehouse clearances, any scale." },
  { eye: "Doorstep",    title: "We Come to You",          desc: "Scheduled pickup with our own fleet." },
  { eye: "Pricing",     title: "Best Market Rates",       desc: "Daily updated. Paid on spot, no deductions." },
  { eye: "Location",    title: "Madipakkam, Chennai",     desc: "No. 120 Rajajinagar Main Road — 600091" },
];

export default function HeroSection() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #f2f0e6; color: #1a1210; overflow-x: hidden; }

        :root {
          --magenta:       #8b004b;
          --magenta-dark:  #6a0039;
          --cream:         #f2f0e6;
          --ink:           #1a1210;
          --ink-soft:      #5c4f4a;
          --ink-muted:     #a09590;
          --border-soft:   rgba(26,18,16,0.08);
        }

        /* ── NAVBAR ── */
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          height: 68px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 56px;
          transition: background 0.35s, box-shadow 0.35s;
        }
        .navbar.scrolled {
          background: rgba(242,240,230,0.94);
          backdrop-filter: blur(14px);
          box-shadow: 0 1px 0 var(--border-soft);
        }
        .logo-wrap  { display: flex; flex-direction: column; line-height: 1.1; }
        .logo-main  {
          font-family: 'Playfair Display', serif;
          font-size: 20px; font-weight: 700;
          color: #f2f0e6; transition: color 0.35s;
        }
        .navbar.scrolled .logo-main { color: var(--ink); }
        .logo-sub   {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px; font-weight: 500; letter-spacing: 0.24em;
          text-transform: uppercase; color: rgba(242,240,230,0.5);
          transition: color 0.35s;
        }
        .navbar.scrolled .logo-sub { color: var(--ink-muted); }
        .nav-links  { display: flex; gap: 32px; list-style: none; }
        .nav-links a {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px; font-weight: 500; letter-spacing: 0.12em;
          text-transform: uppercase; text-decoration: none;
          color: rgba(242,240,230,0.7); transition: color 0.2s;
        }
        .navbar.scrolled .nav-links a { color: var(--ink-soft); }
        .nav-links a:hover { color: var(--magenta) !important; }
        .nav-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 500; letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 10px 24px;
          background: var(--magenta); color: var(--cream);
          border: none; cursor: pointer;
          transition: background 0.2s, transform 0.15s;
        }
        .nav-cta:hover { background: var(--magenta-dark); transform: translateY(-1px); }
        .hamburger {
          display: none; background: none; border: none;
          cursor: pointer; flex-direction: column; gap: 5px; padding: 4px;
        }
        .hamburger span {
          display: block; width: 22px; height: 1.5px;
          background: #f2f0e6; transition: background 0.35s;
        }
        .navbar.scrolled .hamburger span { background: var(--ink); }
        .mobile-nav {
          display: none; position: fixed; top: 68px; left: 0; right: 0; z-index: 199;
          background: var(--cream); border-bottom: 1px solid var(--border-soft);
          flex-direction: column; padding: 24px 32px; gap: 20px;
        }
        .mobile-nav.open { display: flex; }
        .mobile-nav a {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 500; letter-spacing: 0.14em;
          text-transform: uppercase; text-decoration: none; color: var(--ink-soft);
        }

        /* ── HERO ── */
        .hero {
          position: relative; min-height: 100vh;
          display: flex; flex-direction: column; justify-content: flex-end;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0; z-index: 0;
          background-image: url('${HERO_IMAGE}');
          background-size: cover; background-position: center 30%;
        }
        .hero-bg::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(8,2,5,0.40) 0%,
            rgba(8,2,5,0.18) 38%,
            rgba(8,2,5,0.62) 72%,
            rgba(8,2,5,0.90) 100%
          );
        }
        .hero-bg::after {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 55% 45% at 8% 85%, rgba(139,0,75,0.28) 0%, transparent 68%);
        }
        .hero-content {
          position: relative; z-index: 1;
          display: grid; grid-template-columns: 1fr 380px;
          gap: 0 56px; align-items: end;
          padding: 0 80px 72px;
          min-height: 100vh;
        }
        .hero-left {
          display: flex; flex-direction: column; justify-content: flex-end;
        }

        /* Eyebrow */
        .eyebrow {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 22px;
          opacity: 0; transform: translateY(18px);
          animation: revealUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.25s forwards;
        }
        .eyebrow-line { width: 28px; height: 1px; background: var(--magenta); flex-shrink: 0; }
        .eyebrow-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; font-weight: 500; letter-spacing: 0.26em;
          text-transform: uppercase; color: rgba(215,170,195,0.85);
        }

        /* Headline with per-line stagger */
        .hero-headline {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: clamp(50px, 7.5vw, 92px);
          line-height: 1.0;
          color: var(--cream);
          margin-bottom: 26px;
        }
        .hline { display: block; overflow: hidden; }
        .hline span {
          display: block;
          opacity: 0; transform: translateY(104%);
        }
        .hline:nth-child(1) span { animation: slideUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.45s forwards; }
        .hline:nth-child(2) span { animation: slideUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.60s forwards; }
        .hline:nth-child(3) span { animation: slideUp 0.75s cubic-bezier(0.22,1,0.36,1) 0.75s forwards; }
        .hl-italic { font-style: italic; color: rgba(218,155,190,0.92); }

        /* Desc + actions */
        .hero-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px; font-weight: 300; line-height: 1.85;
          color: rgba(242,240,230,0.60);
          max-width: 460px; margin-bottom: 40px;
          opacity: 0; transform: translateY(16px);
          animation: revealUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.95s forwards;
        }
        .hero-actions {
          display: flex; align-items: center; gap: 20px;
          opacity: 0; transform: translateY(14px);
          animation: revealUp 0.65s cubic-bezier(0.22,1,0.36,1) 1.1s forwards;
        }
        .btn-primary {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 500; letter-spacing: 0.18em;
          text-transform: uppercase; padding: 15px 38px;
          background: var(--magenta); color: var(--cream);
          border: none; cursor: pointer;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-primary:hover { background: var(--magenta-dark); transform: translateY(-2px); }
        .btn-outline {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 500; letter-spacing: 0.16em;
          text-transform: uppercase; padding: 14px 30px;
          background: transparent;
          border: 1px solid rgba(242,240,230,0.35);
          color: rgba(242,240,230,0.80);
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, transform 0.15s;
        }
        .btn-outline:hover {
          border-color: rgba(242,240,230,0.7); color: var(--cream);
          transform: translateY(-2px);
        }

        /* Right panels */
        .hero-right {
          display: flex; flex-direction: column;
          opacity: 0; transform: translateX(28px);
          animation: revealRight 0.75s cubic-bezier(0.22,1,0.36,1) 0.85s forwards;
        }
        .info-panel {
          background: rgba(242,240,230,0.05);
          border: 1px solid rgba(242,240,230,0.10);
          border-bottom: none;
          backdrop-filter: blur(10px);
          padding: 18px 22px;
          transition: background 0.25s, border-color 0.25s;
          cursor: default;
        }
        .info-panel:last-child { border-bottom: 1px solid rgba(242,240,230,0.10); }
        .info-panel:hover {
          background: rgba(139,0,75,0.14);
          border-color: rgba(139,0,75,0.32);
        }
        .panel-eye {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px; font-weight: 500; letter-spacing: 0.24em;
          text-transform: uppercase; color: rgba(215,155,190,0.75);
          margin-bottom: 4px;
        }
        .panel-title {
          font-family: 'Playfair Display', serif;
          font-size: 15px; font-weight: 700; color: var(--cream);
          margin-bottom: 3px;
        }
        .panel-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 11.5px; font-weight: 300; line-height: 1.65;
          color: rgba(242,240,230,0.48);
        }

        /* Decorative vertical text */
        .hero-vert {
          position: absolute; left: 22px; bottom: 130px; z-index: 2;
          writing-mode: vertical-rl; transform: rotate(180deg);
          font-family: 'DM Sans', sans-serif;
          font-size: 8.5px; font-weight: 500; letter-spacing: 0.26em;
          text-transform: uppercase; color: rgba(242,240,230,0.22);
          opacity: 0; animation: revealUp 0.5s ease 1.45s forwards;
        }
        .scroll-hint {
          position: absolute; right: 32px; bottom: 80px; z-index: 2;
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          opacity: 0; animation: revealUp 0.5s ease 1.5s forwards;
        }
        .scroll-word {
          font-family: 'DM Sans', sans-serif;
          font-size: 8px; font-weight: 500; letter-spacing: 0.26em;
          text-transform: uppercase; color: rgba(242,240,230,0.28);
          writing-mode: vertical-rl;
        }
        .scroll-line-el {
          width: 1px; height: 44px;
          background: linear-gradient(to bottom, rgba(242,240,230,0.30), transparent);
        }

        /* ── METALS MARQUEE ── */
        .metals-strip {
          position: relative; z-index: 10;
          background: var(--magenta);
          overflow: hidden; white-space: nowrap; padding: 11px 0;
        }
        .metals-track {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
        .metal-item {
          font-family: 'DM Sans', sans-serif;
          font-size: 9.5px; font-weight: 500; letter-spacing: 0.24em;
          text-transform: uppercase; color: rgba(242,240,230,0.70);
          display: inline-block; padding: 0 26px;
        }
        .metal-sep {
          display: inline-block; width: 3px; height: 3px;
          border-radius: 50%; background: rgba(242,240,230,0.30);
          vertical-align: middle;
        }

        /* ── STATS ── */
        .stats-strip {
          position: relative; z-index: 10;
          background: var(--cream);
          border-top: 2px solid var(--magenta);
          display: grid; grid-template-columns: repeat(3,1fr);
          padding: 0 80px;
        }
        .stat-item {
          padding: 36px 0 36px 40px;
          border-right: 1px solid var(--border-soft);
          display: flex; flex-direction: column; gap: 6px;
          opacity: 0; transform: translateY(22px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .stat-item:first-child { padding-left: 0; }
        .stat-item:last-child  { border-right: none; }
        .stat-item.vis { opacity: 1; transform: translateY(0); }
        .stat-item:nth-child(1) { transition-delay: 0s; }
        .stat-item:nth-child(2) { transition-delay: 0.14s; }
        .stat-item:nth-child(3) { transition-delay: 0.28s; }
        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 44px; font-weight: 700; line-height: 1; color: var(--ink);
        }
        .stat-suffix { font-size: 22px; color: var(--magenta); }
        .stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10.5px; font-weight: 500; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--ink-muted);
        }

        /* ── KEYFRAMES ── */
        @keyframes revealUp  { to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp   { to { opacity: 1; transform: translateY(0); } }
        @keyframes revealRight { to { opacity: 1; transform: translateX(0); } }
        @keyframes marquee   { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .navbar { padding: 0 24px; }
          .nav-links, .nav-cta { display: none; }
          .hamburger { display: flex; }
          .hero-content { grid-template-columns: 1fr; padding: 0 24px 80px; gap: 36px 0; }
          .hero-right   { display: none; }
          .stats-strip  { padding: 0 24px; }
          .stat-item    { padding-left: 20px; }
          .stat-item:first-child { padding-left: 0; }
          .hero-vert, .scroll-hint { display: none; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="logo-wrap">
          <span className="logo-main">JJ Scrapbuyers</span>
          <span className="logo-sub">Chennai · Metal Traders</span>
        </div>
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>
        <button className="nav-cta">Get Quote</button>
        <button className="hamburger" onClick={() => setMobileOpen((p) => !p)}>
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-nav${mobileOpen ? " open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMobileOpen(false)}>{l}</a>
        ))}
      </div>

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="hero-bg" />

        <span className="hero-vert">Chennai · Est. Metal Traders</span>
        <div className="scroll-hint">
          <span className="scroll-word">Scroll</span>
          <div className="scroll-line-el" />
        </div>

        <div className="hero-content">
          {/* Left */}
          <div className="hero-left">
            <div className="eyebrow">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Chennai's Trusted Scrap Partner</span>
            </div>

            <h1 className="hero-headline">
              <span className="hline"><span>We Buy</span></span>
              <span className="hline"><span className="hl-italic">Every Metal.</span></span>
              <span className="hline"><span>Every Scale.</span></span>
            </h1>

            <p className="hero-desc">
              From factory floors to warehouse clearances — professional scrap
              collection, competitive pricing, and doorstep pickup across Chennai.
            </p>

            <div className="hero-actions">
              <button className="btn-primary">Request Pickup</button>
              <button className="btn-outline">Our Services</button>
            </div>
          </div>

          {/* Right */}
          <div className="hero-right">
            {PANELS.map((p) => (
              <div className="info-panel" key={p.eye}>
                <div className="panel-eye">{p.eye}</div>
                <div className="panel-title">{p.title}</div>
                <div className="panel-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METALS MARQUEE ── */}
      <div className="metals-strip">
        <div className="metals-track">
          {METALS.map((m, i) => (
            <span key={i}>
              <span className="metal-item">{m}</span>
              {i < METALS.length - 1 && <span className="metal-sep" />}
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="stats-strip" ref={statsRef}>
        {STATS.map((s, i) => (
          <div key={s.label} className={`stat-item${statsVisible ? " vis" : ""}`}>
            <div className="stat-number">
              <StatCounter {...s} animate={statsVisible} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}