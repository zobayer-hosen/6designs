"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { contact, inquiry } from "@/content/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { EASE_OUT } from "@/components/motion/easing";
import { Arrow } from "./ArrowLink";

type Props = {
  /** "simple" matches the reference contact form; "full" adds the project fields. */
  variant?: "simple" | "full";
};

/**
 * Inquiry form. There is no mail server behind the site yet, so sending opens the
 * visitor's email app with every field filled in, addressed to the studio.
 */
export function InquiryForm({ variant = "simple" }: Props) {
  const id = useId();
  const [service, setService] = useState("");
  const [pkg, setPkg] = useState("");
  const [area, setArea] = useState("");
  const [tier, setTier] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const name = get("name");
    const phone = get("phone");
    const email = get("email");

    if (!name) return setError("Please add your name.");
    if (!phone && !email) return setError("Please add a phone number or an email address.");
    setError("");

    const isCustom = pkg === "Custom";
    const fields: [string, string][] = [
      ["Name", name],
      ["Phone", phone],
      ["Email", email],
      ["Service type", service],
      ["SFT count", get("sft")],
      ["Package", pkg],
      ["Custom area", isCustom ? area : ""],
      ["Custom tier", isCustom ? tier : ""],
    ];
    const body = [
      ...fields.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`),
      "",
      get("message"),
    ].join("\n");

    const subject = `Website inquiry from ${name}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <div className="grid gap-x-[1.4vw] gap-y-9 sm:grid-cols-2">
        <Field id={`${id}-name`} name="name" label="Name" autoComplete="name" className="sm:col-span-2" delay={0} />
        <Field id={`${id}-phone`} name="phone" label="Phone" type="tel" autoComplete="tel" delay={0.06} />
        <Field id={`${id}-email`} name="email" label="Email" type="email" autoComplete="email" delay={0.12} />

        {variant === "full" && (
          <>
            <Choice
              legend="Service type"
              options={inquiry.serviceTypes}
              value={service}
              onChange={(v) => {
                setService(v);
                if (v !== "Construction") setPkg("");
              }}
            />
            <Field id={`${id}-sft`} name="sft" label="SFT count" type="number" inputMode="numeric" min={0} delay={0.18} />

            <AnimatePresence initial={false}>
              {service === "Construction" && (
                <Collapse key="pkg" className="sm:col-span-2">
                  <Choice legend="Package" options={inquiry.packages} value={pkg} onChange={setPkg} />
                </Collapse>
              )}
              {service === "Construction" && pkg === "Custom" && (
                <Collapse key="custom" className="grid gap-x-[1.4vw] gap-y-9 sm:col-span-2 sm:grid-cols-2">
                  <Choice legend="Custom area" options={inquiry.customAreas} value={area} onChange={setArea} />
                  <Choice legend="Custom tier" options={inquiry.customTiers} value={tier} onChange={setTier} />
                </Collapse>
              )}
            </AnimatePresence>
          </>
        )}

        <FadeIn delay={0.2} className="sm:col-span-2">
          <label htmlFor={`${id}-message`} className="sr-only">
            Message
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={variant === "full" ? 5 : 4}
            placeholder="Message"
            className="field field-box"
          />
        </FadeIn>
      </div>

      <FadeIn delay={0.28} className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
        <button type="submit" className="arrow-link text-ink">
          <span>{variant === "full" ? inquiry.button : "Send Request"}</span>
          <Arrow />
        </button>
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link text-[0.75rem] uppercase tracking-[0.02em] text-muted"
        >
          or message us on WhatsApp
        </a>
      </FadeIn>

      <div aria-live="polite" className="min-h-6 pt-4 text-[0.8125rem]">
        {error && <p className="text-[#9a3b2a]">{error}</p>}
        {sent && !error && (
          <p className="text-body">
            Thank you — your email app should now open with the inquiry ready to send to {contact.email}.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  className = "",
  delay = 0,
  ...input
}: { id: string; label: string; className?: string; delay?: number } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <FadeIn delay={delay} className={className}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input id={id} placeholder={label} className="field" {...input} />
    </FadeIn>
  );
}

function Choice({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  const name = useId();
  return (
    <fieldset>
      <legend className="mb-3 text-[0.875rem] text-body">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <label
            key={o}
            className={`cursor-pointer rounded-full border px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.03em] transition-colors duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-1 has-[:focus-visible]:outline-offset-2 ${
              value === o ? "border-ink bg-ink text-white" : "border-field text-ink hover:border-ink"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={o}
              checked={value === o}
              onChange={() => onChange(o)}
              className="sr-only"
            />
            {o}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Collapse({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
