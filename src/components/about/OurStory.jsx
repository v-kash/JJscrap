"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const STORY_IMAGE =
  "/hero-scarp3.jpg";

const TIMELINE = [
  {
    year: "2009",
    title: "Founded",
    desc: "Started as a small doorstep pickup operation in Madipakkam, Chennai with one vehicle and a handshake promise.",
  },
  {
    year: "2013",
    title: "Expanded",
    desc: "Grew to serve industrial clients — factories, warehouses, and construction sites across South Chennai.",
  },
  {
    year: "2017",
    title: "10K Tons",
    desc: "Crossed 10,000 tons of scrap collected. Built a reputation for transparent weighing and same-day payment.",
  },
  {
    year: "2024",
    title: "500+ Clients",
    desc: "Now Chennai's most trusted scrap partner, serving 500+ households and businesses across the city.",
  },
];

export default function OurStory() {
  const [active, setActive] = useState(0);
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
      { threshold: 0.08 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const fillPct = ((active + 1) / TIMELINE.length) * 100;

  return (
    <>
      {/* 🔥 REVEAL STYLES */}
      <style>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity .85s cubic-bezier(.22,1,.36,1),
                      transform .85s cubic-bezier(.22,1,.36,1);
        }

        [data-reveal="left"] {
          transform: translateX(-30px);
        }

        [data-reveal="right"] {
          transform: translateX(30px);
        }

        [data-reveal][data-revealed="true"] {
          opacity: 1 !important;
          transform: none !important;
        }

        [data-d="1"] { transition-delay: .05s; }
        [data-d="2"] { transition-delay: .15s; }
        [data-d="3"] { transition-delay: .25s; }
        [data-d="4"] { transition-delay: .35s; }
      `}</style>

      <section
        ref={revealRef}
        className="bg-[#f2f0e6] border-t border-[#8b004b]/10 py-16"
         aria-label="History of JJ Scrapbuyers Chennai scrap company from 2009 to present"
      >
        <p className="sr-only">
  JJ Scrapbuyers started in 2009 as a small scrap buying service in Chennai and has grown into a trusted scrap dealer handling industrial, household and metal scrap including iron, copper, aluminium, AC and batteries.
</p>
        <div className="max-w-7xl mx-auto px-8 lg:px-10">
          {/* HEADER */}
          <div
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
            data-reveal
            data-d="1"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-[5px] h-[5px] rounded-full bg-[#8b004b]" />
                <span className="text-[9px] tracking-[0.30em] uppercase text-[#8b004b]">
                  Our Story
                </span>
              </div>

              <h2 className="font-fraunces font-light text-[#1a0010] text-[40px] leading-tight">
                <span className="sr-only">
    Our Story – Scrap Buyers in Chennai Journey and Growth
  </span>
                How we got <em className="italic text-[#8b004b]">here.</em>
              </h2>
            </div>

            <p className="text-[12.5px] font-light leading-[1.85] text-[#9a8585] max-w-[320px] lg:text-right">
              JJ Scrapbuyers was founded on a simple idea: scrap dealers can
              operate with complete integrity.
            </p>
          </div>

          {/* GRID */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* IMAGE */}
            <div
              className="relative h-[360px] w-full max-w-[540px]"
              data-reveal="left"
              data-d="2"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#8b004b]/30 z-[1]" />
              <div className="absolute top-4 left-4 w-full h-full bg-[#8b004b]/5 z-[0]" />

              <div className="relative w-full h-full overflow-hidden z-[2]">
                <Image
                  src="/hero-scrap3.jpg"
alt="JJ Scrapbuyers Chennai scrap yard metal collection and recycling"                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0010]/70 via-transparent to-transparent z-[1]" />

                <div className="absolute top-5 right-5 z-[2] flex items-center gap-2 bg-black/40 px-3 py-2">
                  <span className="w-[4px] h-[4px] bg-[#8b004b] rounded-full" />
                  <span className="text-[8px] uppercase text-white/40">
                    Est. 2009
                  </span>
                </div>

                <div className="absolute bottom-6 left-6">
                  <p className="text-[14px] italic text-white/60 font-fraunces">
                    One van. One handshake.
                  </p>
                </div>
              </div>
            </div>

            {/* TIMELINE */}
            <div
              className="flex flex-col h-[360px] pt-[4px]"
              data-reveal="right"
              data-d="3"
            >
              <div className="relative flex-1 overflow-hidden">
                <div className="absolute left-[1px] top-0 bottom-0 w-[2px] bg-[#8b004b]/10" />

                <div
                  className="absolute left-[1px] top-0 w-[2px] bg-[#8b004b] transition-all duration-500"
                  style={{ height: `${fillPct}%` }}
                />

                {TIMELINE.map((item, i) => (
                  <div
                    key={item.year}
                    className={`flex gap-5 pl-8 py-5 border-b border-[#8b004b]/10 cursor-pointer ${
                      active === i ? "bg-[#8b004b]/[0.02]" : ""
                    }`}
                    onClick={() => setActive(i)}
                  >
                    {active === i && (
                      <div className="absolute left-[-6px] mt-3 w-[12px] h-[12px] bg-[#8b004b] rounded-full border-2 border-[#f2f0e6]" />
                    )}

                    <div
                      className={`font-fraunces ${
                        active === i
                          ? "text-[#8b004b] text-[22px]"
                          : "text-[#c4b8b8] text-[14px]"
                      }`}
                      style={{ width: "60px" }}
                    >
                      {item.year}
                    </div>

                    <div>
                      <div className="text-[11px] uppercase tracking-[0.15em] mb-1">
                        {item.title}
                      </div>

                      {active === i && (
                        <p className="text-[13px] text-[#9a8585] leading-[1.8]">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
