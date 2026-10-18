import type { Metadata } from "next";
import { contact, inquiry, services } from "@/content/site";
import { Hero } from "@/components/layout/Hero";
import { Footer } from "@/components/layout/Footer";
import { CtaBand } from "@/components/layout/CtaBand";
import { CoreServices } from "@/components/services/CoreServices";
import { PricingTabs } from "@/components/services/PricingTabs";
import { ContactSection } from "@/components/home/ContactSection";
import { RevealHeading } from "@/components/motion/RevealHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: services.meta.title,
  description: services.meta.description,
  openGraph: { title: `${services.meta.title} - 6 Designs`, description: services.meta.description },
};

function NumberedList({ title, items, delay = 0 }: { title: string; items: string[]; delay?: number }) {
  return (
    <div>
      <FadeIn as="h3" delay={delay} className="display text-[clamp(1.5rem,2.2vw,2.4rem)]">
        {title}
      </FadeIn>
      <ul className="mt-6 border-t border-line">
        {items.map((item, i) => (
          <FadeIn
            as="li"
            key={item}
            delay={delay + 0.1 + i * 0.06}
            className="grid grid-cols-[2.5rem_1fr] border-b border-line py-3.5 text-[0.875rem] leading-[1.5]"
          >
            <span className="text-[0.75rem] text-muted">{String(i + 1).padStart(2, "0")}</span>
            {item}
          </FadeIn>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  const { hero, technical, finishes, pricing, deliverables, scope, closing } = services;

  return (
    <main>
      <Hero
        variant="page"
        lines={[
          { text: hero.lines[0], from: "top", className: "md:pl-[9vw]" },
          { text: hero.lines[1], from: "bottom", className: "pl-[10vw] md:pl-[30vw]" },
        ]}
        headingClassName="text-[15vw] md:text-[min(8.4vw,9.5rem)]"
        copyOffsetClassName="ml-[10vw] md:ml-[30vw] md:max-w-[24rem]"
        subheading={hero.subheading}
        links={hero.buttons}
        image={hero.image}
      />

      <CoreServices />

      {/* Technical & site services + Finishes & furnishings */}
      <section className="relative z-10 bg-white px-gutter py-20 md:py-[7vw]">
        <div className="grid gap-14 md:grid-cols-2 md:gap-[4vw]">
          <NumberedList title={technical.title} items={technical.items} />
          <NumberedList title={finishes.title} items={finishes.items} delay={0.12} />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 bg-cream px-gutter py-20 md:py-[7vw]">
        <Eyebrow>{pricing.eyebrow}</Eyebrow>
        <RevealHeading lines={pricing.heading} className="display mt-3 mb-12 text-[clamp(2.6rem,5.3vw,6rem)] md:mb-[4vw]" />
        <PricingTabs />
      </section>

      {/* Deliverables + Scope clarification */}
      <section className="relative z-10 bg-white px-gutter py-20 md:py-[7vw]">
        <div className="grid gap-14 md:grid-cols-2 md:gap-[4vw]">
          <NumberedList title={deliverables.title} items={deliverables.items} />
          <div>
            <FadeIn as="h3" delay={0.12} className="display text-[clamp(1.5rem,2.2vw,2.4rem)]">
              {scope.title}
            </FadeIn>
            <dl className="mt-6 border-t border-line">
              {scope.items.map((s, i) => (
                <FadeIn
                  key={s.label}
                  delay={0.22 + i * 0.06}
                  className="grid gap-1 border-b border-line py-3.5 text-[0.875rem] sm:grid-cols-[13rem_1fr]"
                >
                  <dt className="text-[0.75rem] uppercase tracking-[0.02em] text-muted sm:pt-0.5">{s.label}</dt>
                  <dd>{s.text}</dd>
                </FadeIn>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <ContactSection
        id="inquiry"
        eyebrow={inquiry.eyebrow}
        heading={closing.heading}
        text={inquiry.text}
        variant="full"
      >
        <FadeIn delay={0.4} className="mt-8">
          <ArrowLink href={contact.emailHref} className="text-ink">
            {contact.email}
          </ArrowLink>
        </FadeIn>
      </ContactSection>

      <CtaBand href={contact.whatsapp} />
      <Footer />
    </main>
  );
}
