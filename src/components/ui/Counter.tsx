"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { EASE_OUT, IN_VIEW_MARGIN } from "@/components/motion/easing";

/** Number that counts up from zero the first time it scrolls into view. */
export function Counter({ value, suffix = "", delay = 0 }: { value: number; suffix?: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: IN_VIEW_MARGIN });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      delay,
      ease: EASE_OUT,
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, delay]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      <span aria-hidden>
        {n}
        {suffix}
      </span>
    </span>
  );
}
