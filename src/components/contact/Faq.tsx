"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { EASE_IN_OUT } from "@/components/motion/easing";
import { FadeIn } from "@/components/motion/FadeIn";

type Item = { q: string; a: string };

/** Accordion with hairline rows; the plus turns into a minus as the answer opens. */
export function Faq({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();

  return (
    <ul className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <FadeIn as="li" key={item.q} delay={i * 0.07} className="border-b border-line">
            <h3>
              <button
                type="button"
                id={`${id}-q${i}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-a${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center gap-6 py-6 text-left"
              >
                <span className="w-8 shrink-0 text-[0.75rem] text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span className="display flex-1 text-[clamp(1.15rem,1.7vw,1.75rem)] !leading-[1.15]">{item.q}</span>
                <span aria-hidden className="relative block size-4 shrink-0">
                  <span className="absolute top-1/2 left-0 h-px w-full bg-ink" />
                  <span
                    className={`absolute top-0 left-1/2 h-full w-px bg-ink transition-transform duration-500 ease-[var(--ease-in-out-quart)] ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${id}-a${i}`}
                  role="region"
                  aria-labelledby={`${id}-q${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: EASE_IN_OUT }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[36rem] pb-7 pl-14 text-[0.9rem] leading-[1.6]">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </FadeIn>
        );
      })}
    </ul>
  );
}
