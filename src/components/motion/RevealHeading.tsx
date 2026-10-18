"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, type ElementType } from "react";
import { EASE_OUT, IN_VIEW_MARGIN } from "./easing";
import { Swash, plain } from "./Swash";

export type HeadingLine =
  | string
  | {
      text: string;
      /** Direction the line travels in from: "top" slides down, "bottom" slides up. */
      from?: "top" | "bottom";
      className?: string;
    };

type Props = {
  as?: ElementType;
  lines: HeadingLine[];
  className?: string;
  /** Seconds before the first line starts. */
  delay?: number;
  /** Seconds between lines. */
  stagger?: number;
  duration?: number;
  /** Play on mount instead of when scrolled into view. */
  immediate?: boolean;
  /** Controlled trigger; overrides both `immediate` and the in-view check. */
  show?: boolean;
};

/**
 * Display heading whose lines slide into place from behind a mask,
 * the signature text motion of the reference design.
 */
export function RevealHeading({
  as: Tag = "h2",
  lines,
  className,
  delay = 0,
  stagger = 0.13,
  duration = 0.85,
  immediate = false,
  show: controlled,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: IN_VIEW_MARGIN });
  const show = controlled ?? (immediate || inView);
  const normalized = lines.map((l) => (typeof l === "string" ? { text: l } : l));

  return (
    <Tag ref={ref} className={className} aria-label={plain(normalized.map((l) => l.text))}>
      {normalized.map((line, i) => (
        <MaskLine
          key={i}
          ariaHidden
          show={show}
          from={line.from ?? "top"}
          delay={delay + i * stagger}
          duration={duration}
          className={line.className}
        >
          <Swash text={line.text} />
        </MaskLine>
      ))}
    </Tag>
  );
}

type MaskLineProps = {
  show: boolean;
  from?: "top" | "bottom";
  delay?: number;
  duration?: number;
  className?: string;
  /** Hide from assistive tech when the parent already carries an aria-label. */
  ariaHidden?: boolean;
  children: React.ReactNode;
};

/** One masked line. Padding on the mask leaves room for swash loops. */
export function MaskLine({
  show,
  from = "top",
  delay = 0,
  duration = 0.85,
  className,
  ariaHidden,
  children,
}: MaskLineProps) {
  const [done, setDone] = useState(false);
  const offset = from === "top" ? "-135%" : "135%";

  return (
    <span
      aria-hidden={ariaHidden || undefined}
      className={`-mx-[0.3em] -mt-[0.2em] -mb-[0.25em] block px-[0.3em] pt-[0.2em] pb-[0.25em] ${
        done ? "overflow-visible" : "overflow-hidden"
      }`}
    >
      <motion.span
        className={`block will-change-transform ${className ?? ""}`}
        initial={{ y: offset }}
        animate={show ? { y: "0%" } : { y: offset }}
        transition={{ duration, delay, ease: EASE_OUT }}
        onAnimationComplete={() => show && setDone(true)}
      >
        {children}
      </motion.span>
    </span>
  );
}
