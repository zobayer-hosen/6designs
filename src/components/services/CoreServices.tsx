"use client";

import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { services } from "@/content/site";
import { RevealHeading } from "@/components/motion/RevealHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { IN_VIEW_MARGIN } from "@/components/motion/easing";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { InfoCard } from "@/components/ui/InfoCard";

/** Six core services as hover cards over a dark, slowly drifting photograph. */
export function CoreServices() {
  const { core, quickFacts } = services;
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: IN_VIEW_MARGIN });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={sectionRef} id="core-services" className="relative z-10 overflow-hidden bg-umber text-white">
      <motion.div aria-hidden className="absolute -inset-y-[10%] inset-x-0" style={{ y: bgY }}>
        <Image src="/images/corridor-partition.jpg" alt="" fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div aria-hidden className="absolute inset-0 bg-[rgba(30,22,16,0.72)]" />

      <div className="relative px-gutter py-16 md:py-[5vw]">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <Eyebrow light>{core.eyebrow}</Eyebrow>
            <RevealHeading lines={core.heading} className="display mt-3 text-[clamp(2.6rem,5.3vw,6rem)] !text-white" />
          </div>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {quickFacts.map((fact, i) => (
              <FadeIn
                as="li"
                key={fact}
                delay={0.2 + i * 0.07}
                className="grid grid-cols-[2rem_1fr] border-t border-white/25 pt-3 text-[0.8125rem] leading-[1.45] text-white/85"
              >
                <span className="text-[0.7rem] text-white/55">{String(i + 1).padStart(2, "0")}</span>
                {fact}
              </FadeIn>
            ))}
          </ul>
        </div>

        <div ref={gridRef} className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-[4vw] lg:grid-cols-3 lg:gap-[2vw]">
          {core.items.map((item, i) => (
            <InfoCard
              key={item.title}
              number={String(i + 1).padStart(2, "0")}
              title={item.title}
              description={item.text}
              meta="Request a quote"
              href="#inquiry"
              image={item.image}
              show={inView}
              delay={0.1 + (i % 3) * 0.15 + Math.floor(i / 3) * 0.2}
              className="lg:[&_.card]:aspect-[1.02]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
