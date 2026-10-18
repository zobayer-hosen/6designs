"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { EASE_SOFT, IN_VIEW_MARGIN } from "./easing";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
  delay?: number;
  duration?: number;
  preload?: boolean;
  /** Controlled trigger; when omitted the wipe plays on scroll into view. */
  show?: boolean;
  children?: React.ReactNode;
};

/** Image revealed by a curtain wipe from the top edge down. */
export function RevealImage({
  src,
  alt,
  sizes,
  className = "",
  imageClassName = "",
  delay = 0,
  duration = 1.1,
  preload,
  show,
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: IN_VIEW_MARGIN });
  const visible = show ?? inView;

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
      animate={{ clipPath: visible ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)" }}
      transition={{ duration, delay, ease: EASE_SOFT }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        className={`object-cover ${imageClassName}`}
      />
      {children}
    </motion.div>
  );
}
