// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { handleSmoothNav } from "@/utils/smoothScroll";

// const FOOTER_LINKS = [
//   { label: "Home", href: "/#home" },
//   { label: "About", href: "/about" },
//   { label: "Services", href: "/#services" },
//   { label: "Process", href: "/#process" },
//   { label: "Testimonials", href: "/#testimonials" },
//   { label: "Contact", href: "/#contact" },
// ];

// export default function Footer() {
//   const router = useRouter();

//   const linksLeft  = FOOTER_LINKS.slice(0, 3);
//   const linksRight = FOOTER_LINKS.slice(3);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,200;1,9..144,300&family=Outfit:wght@300;400;500;600&display=swap');

//         .font-fraunces { font-family: 'Fraunces', Georgia, serif; }
//         .font-outfit   { font-family: 'Outfit', sans-serif; }

//         .footer-link {
//           font-family: 'Outfit', sans-serif;
//           font-size: 10px;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           color: rgba(242,240,230,0.55);
//           text-decoration: none;
//           display: block;
//           transition: color 0.2s ease, padding-left 0.2s ease;
//           position: relative;
//         }
//         .footer-link::before {
//           content: '';
//           position: absolute;
//           left: 0; top: 50%;
//           transform: translateY(-50%);
//           width: 0; height: 1px;
//           background: #c22f7b;
//           transition: width 0.25s ease;
//         }
//         .footer-link:hover { color: rgba(242,240,230,0.80); padding-left: 12px; }
//         .footer-link:hover::before { width: 6px; }

//         .footer-bar {
//           border-top: 1px solid rgba(242,240,230,0.1);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 18px 0;
//           flex-wrap: wrap;
//           gap: 10px;
//         }

//         .footer-col-label {
//           font-family: 'Outfit', sans-serif;
//           font-size: 8.5px;
//           letter-spacing: 0.26em;
//           text-transform: uppercase;
//           color: rgba(242,240,230,0.9);
//           margin-bottom: 20px;
//           display: block;
//         }

//         /* ── Mobile divider between brand and links ── */
//         @media (max-width: 1023px) {
//           .footer-mobile-divider {
//             border-top: 1px solid rgba(242,240,230,0.08);
//             margin: 0;
//           }
//         }
//       `}</style>

//       <footer className="font-outfit bg-[#48092a]">
//         <div className="max-w-7xl mx-auto px-6 pt-12 lg:pt-16 pb-0">

//           {/*
//             LAYOUT STRATEGY
//             ─────────────────────────────────────────────────────────
//             Mobile  (< lg): 1 column stacked
//               Row 1 → Brand (full width)
//               Row 2 → Quick Links left + right (2-col mini-grid)
//               Row 3 → Find Us + Contact (2-col mini-grid)

//             Desktop (≥ lg): original 4-column grid
//               [Brand 1.6fr] [Links 0.6fr] [Links 0.6fr] [Find+Contact 1.4fr]
//             ─────────────────────────────────────────────────────────
//           */}

//           {/* ── DESKTOP: 4-col grid ── */}
//           <div className="hidden lg:grid lg:grid-cols-[1.6fr_0.6fr_0.6fr_1.4fr] gap-10">

//             {/* COL 1 — BRAND */}
//             <div>
//               <Image
//                 src="/finalfooter.png"
//                 alt="JJ Scrapbuyers Logo"
//                 width={100}
//                 height={60}
//                 className="object-contain opacity-90 hover:opacity-100 transition"
//               />
//               <p
//                 className="text-[12px] font-light leading-[1.85] mt-4"
//                 style={{ color: "rgba(242,240,230,0.55)", maxWidth: "260px" }}
//               >
//                 Quick doorstep pickup with transparent weighing and best scrap
//                 value — no hidden cuts.
//               </p>
//             </div>

//             {/* COL 2 — LINKS 1–3 */}
//             <div>
//               <span className="footer-col-label">Quick Links</span>
//               <div className="flex flex-col gap-4">
//                 {linksLeft.map((l) => (
//                   <Link
//                     key={l.label}
//                     href={l.href}
//                     onClick={(e) => handleSmoothNav(e, l.href, router)}
//                     className="footer-link"
//                   >
//                     {l.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* COL 3 — LINKS 4–6 */}
//             <div>
//               <span className="footer-col-label opacity-0 select-none">·</span>
//               <div className="flex flex-col gap-4">
//                 {linksRight.map((l) => (
//                   <Link
//                     key={l.label}
//                     href={l.href}
//                     onClick={(e) => handleSmoothNav(e, l.href, router)}
//                     className="footer-link"
//                   >
//                     {l.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* COL 4 — FIND US + CONTACT */}
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <span className="footer-col-label">Find Us</span>
//                 <address className="not-italic">
//                   <p className="text-[12px] font-light leading-[1.9]" style={{ color: "rgba(242,240,230,0.55)" }}>
//                     No 120, Rajajinagar Main Road
//                     <br />Madipakkam, Chennai
//                     <br />Tamil Nadu – 600091
//                   </p>
//                   <a
//                     href="https://maps.app.goo.gl/9x3ATeUcWcE9xik99"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-[9px] tracking-[0.14em] uppercase mt-3 inline-block text-[#c22f7b]"
//                     style={{ textDecoration: "none", borderBottom: "1px solid rgba(139,0,75,0.55)" }}
//                   >
//                     View on Maps →
//                   </a>
//                 </address>
//               </div>
//               <div>
//                 <span className="footer-col-label">Contact</span>
//                 <p className="text-[12px] font-light" style={{ color: "rgba(242,240,230,0.55)" }}>
//                   +91 97890 75963
//                 </p>
//                 <p className="text-[12px] font-light mt-2" style={{ color: "rgba(242,240,230,0.55)" }}>
//                   jjscrapbuyers@gmail.com
//                 </p>
//               </div>
//             </div>

//           </div>{/* end desktop grid */}

//           {/* ── MOBILE: stacked layout ── */}
//           <div className="flex flex-col gap-10 lg:hidden">

//             {/* ROW 1 — Brand */}
//             <div>
//               <Image
//                 src="/finalfooter.png"
//                 alt="JJ Scrapbuyers Logo"
//                 width={90}
//                 height={54}
//                 className="object-contain opacity-90"
//               />
//               <p
//                 className="text-[12px] font-light leading-[1.85] mt-4"
//                 style={{ color: "rgba(242,240,230,0.55)", maxWidth: "280px" }}
//               >
//                 Quick doorstep pickup with transparent weighing and best scrap
//                 value — no hidden cuts.
//               </p>
//             </div>

//             <div className="footer-mobile-divider" />

//             {/* ROW 2 — Quick Links (2-col) */}
//             <div>
//               <span className="footer-col-label">Quick Links</span>
//               <div className="grid grid-cols-2 gap-x-6 gap-y-4">
//                 {FOOTER_LINKS.map((l) => (
//                   <Link
//                     key={l.label}
//                     href={l.href}
//                     onClick={(e) => handleSmoothNav(e, l.href, router)}
//                     className="footer-link"
//                   >
//                     {l.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             <div className="footer-mobile-divider" />

//             {/* ROW 3 — Find Us + Contact (2-col) */}
//             <div className="grid grid-cols-2 gap-6">

//               {/* Find Us */}
//               <div>
//                 <span className="footer-col-label">Find Us</span>
//                 <address className="not-italic">
//                   <p className="text-[12px] font-light leading-[1.9]" style={{ color: "rgba(242,240,230,0.55)" }}>
//                     No 120, Rajajinagar Main Road
//                     <br />Madipakkam, Chennai
//                     <br />Tamil Nadu – 600091
//                   </p>
//                   <a
//                     href="https://maps.app.goo.gl/9x3ATeUcWcE9xik99"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="text-[9px] tracking-[0.14em] uppercase mt-3 inline-block text-[#c22f7b]"
//                     style={{ textDecoration: "none", borderBottom: "1px solid rgba(139,0,75,0.55)" }}
//                   >
//                     View on Maps →
//                   </a>
//                 </address>
//               </div>

//               {/* Contact */}
//               <div>
//                 <span className="footer-col-label">Contact</span>
//                 <p className="text-[12px] font-light" style={{ color: "rgba(242,240,230,0.55)" }}>
//                   +91 97890 75963
//                 </p>
//                 <p className="text-[12px] font-light mt-2" style={{ color: "rgba(242,240,230,0.55)" }}>
//                   jjscrapbuyers@gmail.com
//                 </p>
//               </div>

//             </div>

//           </div>{/* end mobile layout */}

//           {/* BOTTOM BAR — shared */}
//           <div className="footer-bar mt-10">
//             <span
//               className="text-[9px] tracking-[0.12em] uppercase"
//               style={{ color: "rgba(242,240,230,0.55)" }}
//             >
//               © {new Date().getFullYear()} JJ Scrapbuyers. All rights reserved.
//             </span>
//           </div>

//         </div>
//       </footer>
//     </>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { handleSmoothNav } from "@/utils/smoothScroll";
import { MapPin, Phone, Mail } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const router = useRouter();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,200;1,9..144,300&family=Outfit:wght@300;400;500;600&display=swap');

        .font-outfit { font-family: 'Outfit', sans-serif; }

        .footer-link {
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(242,240,230,0.55);
          display: block;
          transition: all 0.2s ease;
          position: relative;
        }
        .footer-link:hover {
          color: rgba(242,240,230,0.85);
          padding-left: 10px;
        }

        .footer-col-label {
          font-size: 8.5px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: rgba(242,240,230,0.9);
          margin-bottom: 18px;
          display: block;
        }

        .footer-bar {
          border-top: 1px solid rgba(242,240,230,0.1);
          padding: 18px 0;
          text-align: center;
        }
      `}</style>

      <footer className="font-outfit bg-[#48092a]">
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-0">
          {/* DESKTOP */}
          <div className="hidden lg:grid lg:grid-cols-[1.6fr_1.2fr_1fr_1fr] gap-6">
            {/* BRAND */}
            <div>
              <Image
                src="/finalfooter.png"
                alt="Logo"
                width={100}
                height={60}
                className="opacity-90"
              />
              <p
                className="text-[12px] mt-2 leading-[1.8] max-w-[260px] line-clamp-2"
                style={{ color: "rgba(242,240,230,0.55)" }}
              >
                Quick doorstep pickup with transparent weighing and best scrap
                value — no hidden cuts.
              </p>
            </div>

            {/* QUICK LINKS (2 columns inside) */}
            <div>
              <span className="footer-col-label">Quick Links</span>

              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {FOOTER_LINKS.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={(e) => handleSmoothNav(e, l.href, router)}
                    className="footer-link"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* FIND US */}
            <div>
              <span className="footer-col-label">Find Us</span>

              <address className="not-italic space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-[3px] text-[#c22f7b]" />
                  <p
                    className="text-[12px] leading-[1.8]"
                    style={{ color: "rgba(242,240,230,0.55)" }}
                  >
                    No 120, Rajajinagar Main Road
                    <br />
                    Madipakkam, Chennai
                    <br />
                    Tamil Nadu – 600091
                  </p>
                </div>

                <a
                  href="https://maps.app.goo.gl/9x3ATeUcWcE9xik99"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[9px] uppercase text-[#c22f7b] ml-[22px]"
                  style={{ borderBottom: "1px solid rgba(139,0,75,0.55)" }}
                >
                  View on Maps →
                </a>
              </address>
            </div>

            {/* CONTACT */}
            <div>
              <span className="footer-col-label">Contact</span>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#c22f7b]" />
                  <p
                    className="text-[12px]"
                    style={{ color: "rgba(242,240,230,0.55)" }}
                  >
                    +91 97890 75963
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-[#c22f7b]" />
                  <p
                    className="text-[12px]"
                    style={{ color: "rgba(242,240,230,0.55)" }}
                  >
                    jjscrapbuyers@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE */}
          <div className="flex flex-col gap-10 lg:hidden">
            <div>
              <Image src="/finalfooter.png" alt="Logo" width={90} height={54} />
              <p
                className="text-[12px] mt-4"
                style={{ color: "rgba(242,240,230,0.55)" }}
              >
                Quick doorstep pickup with transparent weighing.
              </p>
            </div>

            <div>
              <span className="footer-col-label">Quick Links</span>
              <div className="grid grid-cols-2 gap-4">
                {FOOTER_LINKS.map((l) => (
                  <Link key={l.label} href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="footer-bar mt-10">
            <span
              className="text-[9px]"
              style={{ color: "rgba(242,240,230,0.55)" }}
            >
              © {new Date().getFullYear()} JJ Scrapbuyers. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
