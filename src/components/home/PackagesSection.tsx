"use client";

import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { home } from "@/content/site";
import { RevealHeading } from "@/components/motion/RevealHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { IN_VIEW_MARGIN } from "@/components/motion/easing";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { InfoCard } from "@/components/ui/InfoCard";

// desktop placement: staggered 2×2 block sitting in columns 2–4
const placement = [
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-4 lg:row-start-1",
  "lg:col-start-2 lg:row-start-2",
  "lg:col-start-3 lg:row-start-2",
];

export function PackagesSection() {
  const { packages } = home;
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: IN_VIEW_MARGIN });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={sectionRef} id="packages" className="relative z-10 overflow-hidden bg-umber text-white">
      <motion.div aria-hidden className="absolute -inset-y-[10%] inset-x-0" style={{ y: bgY }}>
        <Image src={packages.background.src} alt="" fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-[rgba(30,22,16,0.66)]" />

      <div
        ref={gridRef}
        className="relative grid gap-5 px-gutter py-16 sm:grid-cols-2 md:py-[2.6vw] lg:grid-cols-4 lg:gap-[2vw]"
      >
        <div className="sm:col-span-2 lg:col-start-1 lg:row-start-1">
          <Eyebrow light>{packages.eyebrow}</Eyebrow>
          <RevealHeading lines={packages.heading} className="display mt-3 text-[clamp(2.6rem,5.3vw,6rem)] !text-white" />
          <FadeIn as="p" delay={0.3} className="mt-6 max-w-[19rem] text-[0.8125rem] leading-[1.5] text-white/85 md:mt-[2vw]">
            {packages.intro}
          </FadeIn>
          <FadeIn delay={0.4} className="mt-8 mb-6 md:mt-[3vw]">
            <ArrowLink href={packages.link.href} className="text-white">
              {packages.link.label}
            </ArrowLink>
          </FadeIn>
        </div>

        {packages.cards.map((card, i) => (
          <InfoCard
            key={card.title}
            number={String(i + 1).padStart(2, "0")}
            title={card.title}
            description={card.description}
            meta={card.price}
            href="/services#pricing"
            image={card.image}
            show={inView}
            delay={0.15 + i * 0.15}
            className={placement[i]}
          />
        ))}

        <FadeIn
          as="p"
          delay={0.8}
          className="self-end text-[0.78rem] leading-[1.45] text-white/85 sm:col-span-2 lg:col-span-1 lg:col-start-4 lg:row-start-2 lg:pl-[18%] lg:text-right"
        >
          {packages.note}
        </FadeIn>
      </div>
    </section>
  );
}
