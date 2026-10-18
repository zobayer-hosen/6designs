"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { useLenis } from "./Providers";

export function ScrollToTop() {
  const lenis = useLenis();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setVisible(v > window.innerHeight * 1.2));

  const toTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.6 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Scroll to top"
          className="fixed right-gutter bottom-6 z-40 grid size-12 place-items-center rounded-full border border-ink/25 bg-white/90 text-ink backdrop-blur transition-colors duration-300 hover:bg-sand"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg viewBox="0 0 12 18" fill="none" stroke="currentColor" strokeWidth="1.1" className="h-4 w-3" aria-hidden>
            <path d="M6 17.5V1M1 6l5-5 5 5" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
