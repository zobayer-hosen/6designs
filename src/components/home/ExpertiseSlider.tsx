"use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useCallback, useRef, useState } from "react";
import { home } from "@/content/site";
import { RevealHeading } from "@/components/motion/RevealHeading";
import { RevealImage } from "@/components/motion/RevealImage";
import { FadeIn } from "@/components/motion/FadeIn";
import { EASE_OUT, IN_VIEW_MARGIN } from "@/components/motion/easing";
import { Eyebrow } from "@/components/ui/Eyebrow";

const pad = (n: number) => String(n).padStart(2, "0");

export function ExpertiseSlider() {
  const { expertise } = home;
  const slides = expertise.slides;
  const [index, setIndex] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { once: true, margin: IN_VIEW_MARGIN });
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + slides.length) % slides.length),
    [slides.length],
  );

  return (
    <section
      id="expertise"
      aria-roledescription="carousel"
      aria-label={expertise.eyebrow}
      className="relative z-10 bg-white px-gutter pt-14 pb-20 md:pt-[2.4vw] md:pb-[6vw]"
    >
      <div className="text-center">
        <Eyebrow>{expertise.eyebrow}</Eyebrow>
        <RevealHeading lines={[expertise.heading]} className="display mt-4 text-[clamp(2.4rem,5.3vw,6rem)]" />
      </div>

      <div
        ref={stageRef}
        className="mt-10 md:mt-[4vw]"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <Slide key={index} index={index} total={slides.length} show={inView} />
        </AnimatePresence>

        {/* warm the cache so a slide's photographs are ready before its wipe plays */}
        {inView && (
          <div aria-hidden className="hidden">
            {slides.map((s) => (
              <span key={s.title}>
                <Image src={s.image.src} alt="" width={10} height={10} sizes="(min-width: 1024px) 48vw, 100vw" loading="eager" />
                <Image src={s.detail.src} alt="" width={10} height={10} sizes="(min-width: 1024px) 18vw, 40vw" loading="eager" />
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex justify-end gap-3 lg:-mt-[clamp(2.75rem,4.2vw,3.75rem)]">
          <ArrowButton dir={-1} onClick={() => go(-1)} label="Previous service" />
          <ArrowButton dir={1} onClick={() => go(1)} label="Next service" />
        </div>
      </div>
    </section>
  );
}

function Slide({ index, total, show }: { index: number; total: number; show: boolean }) {
  const slide = home.expertise.slides[index];
  const fade = (delay: number) => ({ show, delay, y: 0, duration: 0.7 });

  return (
    <motion.div
      className="grid gap-y-6 lg:grid-cols-[47.6%_1fr] lg:gap-x-[2.2vw]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: EASE_OUT }}
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${total}`}
    >
      <div>
        <RevealImage
          src={slide.image.src}
          alt={slide.image.alt}
          sizes="(min-width: 1024px) 48vw, 100vw"
          show={show}
          duration={0.9}
          className="aspect-square lg:aspect-[1.03]"
        />
      </div>

      <div className="flex min-h-full flex-col">
        <div className="flex items-start justify-between text-[0.75rem] text-muted">
          <FadeIn as="p" {...fade(0.1)}>{slide.tag}</FadeIn>
          <FadeIn as="p" {...fade(0.1)} aria-label={`Slide ${index + 1} of ${total}`}>
            {pad(index + 1)}/{pad(total)}
          </FadeIn>
        </div>

        <div className="mt-8 grid flex-1 gap-8 sm:grid-cols-[1fr_38%] lg:mt-[5.6%]">
          <div className="sm:pt-[12%]">
            <FadeIn as="h3" {...fade(0.25)} className="display text-[clamp(1.6rem,2.45vw,2.6rem)] !leading-[1.05]">
              {slide.title}
            </FadeIn>
            <FadeIn as="p" {...fade(0.35)} className="mt-3 max-w-[17rem] text-[0.8125rem] leading-[1.5]">
              {slide.description}
            </FadeIn>
          </div>

          <div className="max-w-[16rem] sm:max-w-none">
            <RevealImage
              src={slide.detail.src}
              alt={slide.detail.alt}
              sizes="(min-width: 1024px) 18vw, 40vw"
              show={show}
              delay={0.35}
              duration={0.8}
              className="aspect-[0.84]"
            />
            <FadeIn as="p" {...fade(0.6)} className="mt-3 max-w-[13rem] text-[0.75rem] leading-[1.45] text-body">
              {slide.accent}
            </FadeIn>
          </div>
        </div>

        <FadeIn as="p" {...fade(0.5)} className="mt-8 max-w-[13rem] text-[0.75rem] leading-[1.45] text-body lg:mt-6">
          {slide.note}
        </FadeIn>
      </div>
    </motion.div>
  );
}

function ArrowButton({ dir, onClick, label }: { dir: 1 | -1; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="relative z-10 grid size-[clamp(2.75rem,4.2vw,3.75rem)] place-items-center rounded-full border border-ink/25 text-ink transition-colors duration-500 hover:border-sand hover:bg-sand"
    >
      <svg
        viewBox="0 0 18 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        className={`h-3 w-[1.1rem] ${dir === -1 ? "rotate-180" : ""}`}
        aria-hidden
      >
        <path d="M0 6h16.5M11.5 1l5 5-5 5" />
      </svg>
    </button>
  );
}
