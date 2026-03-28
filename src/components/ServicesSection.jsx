"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Factory, Home, Recycle, Truck } from "lucide-react";

const SERVICES = [
  {
    title: "Industrial Scrap",
    desc: "We collect scrap from factories, warehouses, and construction sites.",
    points: ["Factory clearance", "Machinery scrap", "Bulk metal pickup"],
    icon: Factory,
    img: "/services/industrial.jpg",
    alt: "Industrial scrap buyers in Chennai factory clearance",
  },
  {
    title: "Household Scrap",
    desc: "Doorstep pickup for old utensils and appliances.",
    points: ["Old appliances", "Metal furniture", "Home clearance"],
    icon: Home,
    img: "/services/household.jpg",
    alt: "Industrial scrap buyers in Chennai factory clearance",
  },
  {
    title: "All Metal Scrap",
    desc: "We buy all types of metal scrap at best price.",
    points: ["Iron & Steel", "Copper & Aluminium", "Brass & SS"],
    icon: Recycle,
    img: "/services/metals.jpg",
    alt: "Industrial scrap buyers in Chennai factory clearance",
  },
  {
    title: "Doorstep Pickup",
    desc: "Quick pickup with instant payment.",
    points: ["Same-day service", "No hidden charges", "UPI / Cash"],
    icon: Truck,
    img: "/doorpickup.jpg",
    alt: "Industrial scrap buyers in Chennai factory clearance",
  },
];

export default function PremiumTabsInsane() {
  const [active, setActive] = useState(0);
  const prevIndexRef = useRef(0);
  const revealRef = useRef(null);
  const intervalRef = useRef(null);

  prevIndexRef.current = active;

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
      { threshold: 0.12 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Auto-rotate tabs every 5 seconds
  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SERVICES.length);
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Reset timer on manual tab click
  const handleTabClick = (i) => {
    setActive(i);
    clearInterval(intervalRef.current);
    startInterval();
  };

  return (
    <>
      <style>{`
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
      `}</style>

      <section
        ref={revealRef}
        id="services"
        className="bg-[#f2f0e6] py-12 sm:py-14 lg:py-16 border-t border-[#8b004b]/10"
         aria-label="Scrap buying services in Chennai including industrial, household and metal scrap"
      >
        <p className="sr-only">
          JJ Scrapbuyers provides scrap buying services in Chennai including
          iron, steel, copper, aluminium, AC, batteries and electrical scrap
          with doorstep pickup and instant payment.
        </p>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* LEFT */}
          <div>
            <p
              data-reveal
              data-d="1"
              className="text-[10px] tracking-[0.3em] uppercase text-[#8b004b] mb-3"
            >
              Services
            </p>

            <h2
              data-reveal
              data-d="2"
              className="font-fraunces text-[28px] sm:text-[34px] lg:text-[40px] font-light text-[#1a0010] mb-8"
            >
              <span className="sr-only">Scrap Buying Services in Chennai</span>
              What We Offer
            </h2>

            {/* TABS */}
            <div
              data-reveal
              data-d="3"
              className="relative grid grid-cols-2 gap-y-4 gap-x-6 mb-8 border-b border-[#8b004b]/10 pb-4 lg:flex lg:gap-6"
            >
              {SERVICES.map((s, i) => {
                const Icon = s.icon;

                return (
                  <button
                    key={i}
                    onClick={() => handleTabClick(i)}
                    className={`relative flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] transition-colors ${
                      active === i
                        ? "text-[#8b004b]"
                        : "text-[#9a8585] hover:text-[#8b004b]"
                    }`}
                  >
                    <Icon size={20} />
                    {s.title}
                  </button>
                );
              })}

              {/* Underline ONLY desktop */}
              <motion.div
                className="absolute bottom-0 h-[2px] bg-[#8b004b] hidden lg:block"
                animate={{
                  width: `${100 / SERVICES.length}%`,
                  left: `${(100 / SERVICES.length) * active}%`,
                }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* CONTENT */}
            <motion.div
              data-reveal
              data-d="4"
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="font-fraunces text-[20px] sm:text-[24px] text-[#1a0010] mb-3">
                {SERVICES[active].title}
              </h3>

              <p className="text-[12px] sm:text-[13px] text-[#9a8585] leading-[1.8] mb-4 max-w-md">
                {SERVICES[active].desc}
              </p>

              <ul className="space-y-2">
                {SERVICES[active].points.map((p, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[12px]">
                    <span className="w-[5px] h-[5px] bg-[#8b004b] rounded-full" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            data-reveal
            data-d="5"
            className="relative h-[260px] sm:h-[320px] lg:h-[360px] w-full max-w-[500px] mx-auto lg:ml-auto"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#8b004b]/30 z-[1]" />
            <div className="absolute top-4 left-4 w-full h-full bg-[#8b004b]/5 z-[0]" />

            <div className="relative w-full h-full overflow-hidden shadow-xl z-[2]">
              <AnimatePresence>
                {SERVICES.map(
                  (s, i) =>
                    i === active && (
                      <motion.div
                        key={s.img}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute inset-0"
                      >
                        <motion.div
                          className="absolute inset-0"
                          whileHover={{ scale: 1.03 }}
                          initial={{ opacity: 0, scale: 1.06 }}
                          animate={{ opacity: 1, scale: 1 }}
                        >
                          <Image
                            src={s.img}
                            alt={s.alt}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0010]/50 to-transparent z-[2]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
