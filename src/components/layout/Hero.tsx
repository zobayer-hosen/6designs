"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Header } from "./Header";
import { RevealHeading, type HeadingLine } from "@/components/motion/RevealHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowLink } from "@/components/ui/ArrowLink";

type Props = {
  lines: HeadingLine[];
  subheading: string;
  links: { label: string; href: string }[];
  image: { src: string; alt: string };
  /** "home" fills the screen; "page" is a slightly shorter hero for inner pages. */
  variant?: "home" | "page";
  /** Left offset of the copy block so it lines up under the last heading line. */
  copyOffsetClassName?: string;
  headingClassName?: string;
};

const SHADE = "rgba(19, 13, 9, 0.6)";
const SHADE_LIT = "rgba(19, 13, 9, 0.16)";

/**
 * Full-bleed hero. It stays pinned (sticky) while the next section slides over it,
 * and a soft pool of warm light follows the cursor across the photograph.
 */
export function Hero({
  lines,
  subheading,
  links,
  image,
  variant = "home",
  copyOffsetClassName = "md:ml-[36vw]",
  headingClassName = "",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  // the intro plays once the photograph is on screen (as in the reference), never later than 1.4s
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1400);
    return () => clearTimeout(t);
  }, []);

  // cursor light
  const x = useMotionValue(-999);
  const y = useMotionValue(-999);
  const radius = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 140, damping: 24, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 140, damping: 24, mass: 0.6 });
  const sr = useSpring(radius, { stiffness: 90, damping: 20 });
  const shade = useMotionTemplate`radial-gradient(circle ${sr}px at ${sx}px ${sy}px, ${SHADE_LIT} 0%, ${SHADE} 100%)`;
  const glow = useMotionTemplate`radial-gradient(circle ${sr}px at ${sx}px ${sy}px, rgba(255, 205, 150, 0.22) 0%, rgba(255, 205, 150, 0) 70%)`;

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const move = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
      radius.set(Math.max(220, Math.min(rect.width, 1600) * 0.19));
    };
    const leave = () => radius.set(0);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [x, y, radius]);

  return (
    <section
      ref={ref}
      className={`sticky top-0 isolate overflow-hidden bg-night text-white ${
        variant === "home" ? "h-svh min-h-[34rem]" : "h-[88svh] min-h-[32rem]"
      }`}
    >
      <motion.div
        className="absolute inset-0 -z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          preload
          sizes="100vw"
          className="object-cover"
          onLoad={() => setReady(true)}
        />
      </motion.div>
      <motion.div aria-hidden className="absolute inset-0 -z-10" style={{ background: shade }} />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 mix-blend-screen"
        style={{ background: glow }}
      />
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/30 to-transparent" />

      <Header ready={ready} />

      <div className="flex h-full flex-col justify-center px-gutter pt-[9vh]">
        <RevealHeading
          as="h1"
          show={ready}
          delay={0.25}
          stagger={0.2}
          duration={0.9}
          lines={lines}
          className={`display text-white ${headingClassName}`}
        />

        <div className={`mt-6 max-w-[19rem] md:mt-[2.4vw] ${copyOffsetClassName}`}>
          <FadeIn as="p" show={ready} delay={0.85} className="text-[0.875rem] leading-[1.5] text-white/90">
            {subheading}
          </FadeIn>
          <FadeIn show={ready} delay={1} className="mt-8 flex flex-wrap gap-x-8 gap-y-5 md:mt-[3vw]">
            {links.map((l) => (
              <ArrowLink key={l.href} href={l.href} className="text-white">
                {l.label}
              </ArrowLink>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
