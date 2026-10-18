"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/** Full-bleed photograph that drifts slower than the page while it scrolls past. */
export function ParallaxImage({
  src,
  alt,
  caption,
  className = "h-[70svh] md:h-[86svh]",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const clip = useTransform(scrollYProgress, [0, 0.35], ["inset(8% 6% 8% 6%)", "inset(0% 0% 0% 0%)"]);

  return (
    <figure ref={ref} className={`relative z-10 overflow-hidden bg-white ${className}`}>
      <motion.div className="absolute inset-0 overflow-hidden" style={{ clipPath: clip }}>
        <motion.div className="absolute -inset-y-[14%] inset-x-0" style={{ y }}>
          <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
        </motion.div>
      </motion.div>
      {caption && (
        <figcaption className="absolute bottom-5 left-gutter text-[0.75rem] uppercase tracking-[0.02em] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
