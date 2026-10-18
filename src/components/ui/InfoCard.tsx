"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { EASE_SOFT } from "@/components/motion/easing";
import { Arrow } from "./ArrowLink";

type Props = {
  number: string;
  title: string;
  description: string;
  meta?: string;
  href: string;
  image: { src: string; alt: string };
  show: boolean;
  delay?: number;
  className?: string;
};

/**
 * White card used for services and packages.
 * Resting: large image top-right, title bottom-left.
 * Hover: image shrinks toward its corner while the title lifts to reveal copy and an arrow.
 */
export function InfoCard({ number, title, description, meta, href, image, show, delay = 0, className = "" }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
      animate={{ clipPath: show ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)" }}
      transition={{ duration: 0.95, delay, ease: EASE_SOFT }}
    >
      <Link href={href} className="card relative block aspect-[0.854] bg-white text-ink">
        <span className="absolute top-[6%] left-[7%] text-[0.6875rem] text-muted">{number}</span>

        <span className="card-media absolute top-[6.5%] right-[7%] block h-[60%] w-[55%] overflow-hidden">
          <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 13vw, 50vw" className="object-cover" />
        </span>

        <span className="absolute inset-x-[7%] bottom-[6%] block">
          <span className="display block text-[clamp(1.15rem,1.7vw,1.75rem)] !leading-[1.05]">{title}</span>
          <span className="card-reveal">
            <span>
              <span className="block pt-3 text-[0.78rem] leading-[1.45] text-body">{description}</span>
              <span className="flex items-end justify-between gap-4 pt-3">
                {meta && <span className="text-[0.6875rem] text-muted">{meta}</span>}
                <Arrow className="card-arrow ml-auto text-ink" />
              </span>
            </span>
          </span>
        </span>
      </Link>
    </motion.div>
  );
}
