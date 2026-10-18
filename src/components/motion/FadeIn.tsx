"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ElementType } from "react";
import { EASE_OUT, IN_VIEW_MARGIN } from "./easing";

type Props = {
  as?: "div" | "p" | "span" | "li" | "ul" | "section" | "form" | "h3" | "h4" | "dd" | "dt";
  className?: string;
  delay?: number;
  duration?: number;
  /** Vertical travel in px. */
  y?: number;
  immediate?: boolean;
  show?: boolean;
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLElement>, "children">;

const tags = {
  div: motion.div,
  p: motion.p,
  span: motion.span,
  li: motion.li,
  ul: motion.ul,
  section: motion.section,
  form: motion.form,
  h3: motion.h3,
  h4: motion.h4,
  dd: motion.dd,
  dt: motion.dt,
} satisfies Record<string, ElementType>;

/** Soft opacity fade with a short rise, used for body copy and links. */
export function FadeIn({
  as = "div",
  className,
  delay = 0,
  duration = 0.9,
  y = 14,
  immediate,
  show,
  children,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: IN_VIEW_MARGIN });
  const visible = show ?? (immediate || inView);
  const MotionTag = tags[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref as React.Ref<HTMLDivElement>}
      className={className}
      initial={{ opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: EASE_OUT }}
      {...(rest as React.ComponentProps<typeof motion.div>)}
    >
      {children}
    </MotionTag>
  );
}
