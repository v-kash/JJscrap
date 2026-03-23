"use client";

import { useEffect } from "react";
import { smoothScrollTo } from "@/utils/smoothScroll";

export default function ScrollHandler() {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const el = document.querySelector(hash);

      if (el) {
        setTimeout(() => {
          const y =
            el.getBoundingClientRect().top +
            window.scrollY -
            70;

          smoothScrollTo(y);
        }, 100);
      }
    }
  }, []);

  return null;
}