"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { services } from "@/content/site";
import { EASE_IN_OUT, EASE_OUT } from "@/components/motion/easing";
import { FadeIn } from "@/components/motion/FadeIn";

type Table = { columns: string[]; rows: string[][] };

const tabs = [
  { key: "design", label: services.pricing.design.label },
  { key: "construction", label: services.pricing.construction.label },
] as const;

/** Designing / Construction packages, switched by tabs with a sliding underline. */
export function PricingTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("design");
  const id = useId();
  const { design, construction, note } = services.pricing;

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = active === "design" ? "construction" : "design";
    setActive(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  };

  return (
    <div>
      <FadeIn>
        <div role="tablist" aria-label="Package type" className="flex gap-8 border-b border-line md:gap-12" onKeyDown={onKey}>
          {tabs.map((t) => {
            const selected = active === t.key;
            return (
              <button
                key={t.key}
                id={`${id}-tab-${t.key}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`${id}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(t.key)}
                className={`relative pb-4 text-[0.8125rem] font-medium uppercase tracking-[0.02em] transition-colors duration-300 ${
                  selected ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {t.label}
                {selected && (
                  <motion.span
                    layoutId={`${id}-underline`}
                    className="absolute inset-x-0 -bottom-px h-px bg-ink"
                    transition={{ duration: 0.6, ease: EASE_IN_OUT }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </FadeIn>

      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} className="pt-10 md:pt-[3.5vw]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
          >
            {active === "design" ? (
              <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-[5vw]">
                <div>
                  <h3 className="display text-[clamp(1.6rem,2.45vw,2.6rem)]">{design.label}</h3>
                  <p className="mt-2 text-[0.75rem] uppercase tracking-[0.02em] text-muted">Project description</p>
                  <p className="mt-5 max-w-[32rem] text-[0.9rem] leading-[1.6]">{design.description}</p>
                  <ul className="mt-8 border-t border-line">
                    {design.includes.map((item, i) => (
                      <li key={item} className="grid grid-cols-[2.5rem_1fr] border-b border-line py-3.5 text-[0.875rem]">
                        <span className="text-[0.75rem] text-muted">{String(i + 1).padStart(2, "0")}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <PriceTable title="Budget table" table={design.table} />
              </div>
            ) : (
              <div>
                <h3 className="display text-[clamp(1.6rem,2.45vw,2.6rem)]">{construction.label}</h3>
                <p className="mt-2 text-[0.75rem] uppercase tracking-[0.02em] text-muted">
                  Services comparison — {construction.tiers.map((t) => t.name).join(" / ")}
                </p>
                <div className="mt-10 grid gap-12 lg:grid-cols-3 lg:gap-[2.4vw]">
                  {construction.tiers.map((tier, i) => (
                    <div key={tier.name} className={i > 0 ? "lg:border-l lg:border-line lg:pl-[2.4vw]" : ""}>
                      <p className="text-[0.75rem] text-muted">{String(i + 1).padStart(2, "0")}</p>
                      <h4 className="display mt-3 text-[clamp(1.4rem,2vw,2.1rem)]">{tier.name}</h4>
                      <p className="mt-3 min-h-[4.5em] text-[0.875rem] leading-[1.55]">{tier.description}</p>
                      <PriceTable table={tier} className="mt-6" />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <p className="mt-10 text-[0.8125rem] text-muted">{note}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function PriceTable({ title, table, className = "" }: { title?: string; table: Table; className?: string }) {
  return (
    <div className={className}>
      {title && <p className="eyebrow mb-4">{title}</p>}
      <table className="w-full border-collapse text-left text-[0.875rem]">
        <thead>
          <tr className="border-b border-ink/70">
            {table.columns.map((c, i) => (
              <th
                key={c}
                scope="col"
                className={`pb-3 text-[0.72rem] font-medium uppercase tracking-[0.02em] text-muted ${i > 0 ? "text-right" : ""}`}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row[0]} className="border-b border-line">
              {row.map((cell, i) =>
                i === 0 ? (
                  <th key={i} scope="row" className="py-3.5 font-normal text-body">
                    {cell}
                  </th>
                ) : (
                  <td
                    key={i}
                    className={`py-3.5 text-right tabular-nums ${cell === "Please Call" ? "text-muted italic" : "text-ink"}`}
                  >
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
