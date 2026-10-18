"use client";

import Link from "next/link";
import { useInView } from "motion/react";
import { useRef } from "react";
import { home } from "@/content/site";
import { RevealHeading } from "@/components/motion/RevealHeading";
import { RevealImage } from "@/components/motion/RevealImage";
import { FadeIn } from "@/components/motion/FadeIn";
import { IN_VIEW_MARGIN } from "@/components/motion/easing";
import { Arrow } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Item = (typeof home.furniture.items)[number];

export function FurnitureSection() {
  const { furniture } = home;
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: IN_VIEW_MARGIN });
  const [a, b, c, d] = furniture.items;

  return (
    <section id="furniture" className="relative z-10 bg-white px-gutter pt-16 pb-20 md:pt-[4.5vw] md:pb-[5vw]">
      <div className="text-center">
        <Eyebrow>{furniture.eyebrow}</Eyebrow>
        <RevealHeading lines={[furniture.heading]} className="display mt-4 text-[clamp(2.4rem,5.3vw,6rem)]" />
        <FadeIn as="p" delay={0.2} className="mx-auto mt-6 max-w-[34rem] text-[0.875rem] leading-[1.55] lg:hidden">
          {furniture.text}
        </FadeIn>
      </div>

      <div
        ref={gridRef}
        className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-[4vw] lg:grid-cols-[1.41fr_1fr_1fr_1fr] lg:gap-x-[2.1vw]"
      >
        <Tile item={a} show={inView} delay={0} className="col-span-2 sm:col-span-1" aspect="aspect-[0.734]" large />
        <Tile item={b} show={inView} delay={0.12} aspect="aspect-[0.836]" />
        <div>
          <FadeIn
            as="p"
            show={inView}
            delay={0.5}
            className="hidden min-h-[15vw] pb-8 text-[0.8125rem] leading-[1.55] lg:block"
          >
            {furniture.text}
          </FadeIn>
          <Tile item={c} show={inView} delay={0.24} aspect="aspect-[0.836]" />
        </div>
        <Tile item={d} show={inView} delay={0.36} aspect="aspect-[0.836]" />
      </div>
    </section>
  );
}

function Tile({
  item,
  show,
  delay,
  aspect,
  large = false,
  className = "",
}: {
  item: Item;
  show: boolean;
  delay: number;
  aspect: string;
  large?: boolean;
  className?: string;
}) {
  const href = home.furniture.link.href;

  return (
    <article className={className}>
      <Link href={href} className="group block" aria-label={`${item.title.join(" ")} — ${item.description}`}>
        <RevealImage
          src={item.image.src}
          alt={item.image.alt}
          sizes={large ? "(min-width: 1024px) 29vw, 100vw" : "(min-width: 1024px) 21vw, 50vw"}
          show={show}
          delay={delay}
          duration={1}
          className={aspect}
          imageClassName="transition-transform duration-[1.4s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
        >
          {/* hover card */}
          <span
            aria-hidden
            className="absolute inset-[4%] flex scale-[0.92] flex-col items-center justify-center bg-white px-[8%] text-center opacity-0 transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)] group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100"
          >
            <span className={`display ${large ? "text-[clamp(1.4rem,2.3vw,2.5rem)]" : "text-[clamp(1.1rem,1.7vw,1.8rem)]"} !leading-[1.1]`}>
              {item.title.join(" ")}
            </span>
            <span className="mt-4 block max-w-[15rem] text-[0.75rem] leading-[1.5] text-body">{item.description}</span>
            <span className="mt-7 inline-flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.02em] text-ink">
              {home.furniture.link.label}
              <Arrow />
            </span>
          </span>
        </RevealImage>
      </Link>
      <FadeIn
        as="h3"
        show={show}
        delay={delay + 0.45}
        y={0}
        className="display mt-3 text-[clamp(1.05rem,1.6vw,1.6rem)] !leading-[1.05]"
      >
        {item.title.map((t) => (
          <span key={t} className="block">
            {t}
          </span>
        ))}
      </FadeIn>
    </article>
  );
}
