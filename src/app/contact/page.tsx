import type { Metadata } from "next";
import { contact, contactPage, inquiry } from "@/content/site";
import { Hero } from "@/components/layout/Hero";
import { Footer } from "@/components/layout/Footer";
import { CtaBand } from "@/components/layout/CtaBand";
import { ContactSection } from "@/components/home/ContactSection";
import { Faq } from "@/components/contact/Faq";
import { RevealHeading } from "@/components/motion/RevealHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: contactPage.meta.title,
  description: contactPage.meta.description,
  openGraph: { title: `${contactPage.meta.title} - 6 Designs`, description: contactPage.meta.description },
};

const groupLabel = "eyebrow mb-4";
const groupItem = "text-[0.95rem] leading-[1.55] text-ink";

export default function ContactPage() {
  const { hero, details, faq } = contactPage;

  return (
    <main>
      <Hero
        variant="page"
        lines={[
          { text: hero.lines[0], from: "top", className: "md:pl-[9vw]" },
          { text: hero.lines[1], from: "bottom", className: "pl-[14vw] md:pl-[30vw]" },
        ]}
        headingClassName="text-[15vw] md:text-[min(8.4vw,9.5rem)]"
        copyOffsetClassName="ml-[14vw] md:ml-[30vw]"
        subheading={hero.subheading}
        links={[{ label: "Let's Talk", href: contact.whatsapp }]}
        image={hero.image}
      />

      {/* General enquiries, address, social */}
      <section className="relative z-10 bg-white px-gutter pt-16 pb-20 md:pt-[7vw] md:pb-[6vw]">
        <div className="grid gap-y-12 lg:grid-cols-[50%_1fr]">
          <div>
            <Eyebrow>{details.eyebrow}</Eyebrow>
            <RevealHeading lines={details.heading} className="display mt-3 text-[clamp(2.6rem,5.2vw,6rem)]" />
          </div>

          <div className="grid gap-10 self-end sm:grid-cols-3 sm:gap-[2vw]">
            <FadeIn delay={0.15}>
              <p className={groupLabel}>General enquiries</p>
              <a href={contact.phoneHref} className={`${groupItem} nav-link`}>
                {contact.phone}
              </a>
              <br />
              <a href={contact.emailHref} className={`${groupItem} nav-link`}>
                {contact.email}
              </a>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className={groupLabel}>Office address</p>
              <address className={`${groupItem} not-italic`}>
                {contact.addressLines[0]},
                <br />
                {contact.addressLines[1]}
              </address>
            </FadeIn>
            <FadeIn delay={0.35}>
              <p className={groupLabel}>Social media</p>
              <ul>
                {contact.socials.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className={`${groupItem} nav-link`}>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.2} y={24} className="mt-14 md:mt-[5vw]">
          <iframe
            title={`Map: ${contact.address}`}
            src={contact.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-[4/3] w-full border-0 grayscale-[0.85] sepia-[0.25] md:aspect-[21/8]"
          />
        </FadeIn>
      </section>

      <ContactSection id="inquiry" eyebrow={inquiry.eyebrow} heading={inquiry.heading} text={inquiry.text} variant="full" />

      {/* FAQ */}
      <section className="relative z-10 bg-cream px-gutter py-20 md:py-[7vw]">
        <div className="grid gap-y-10 lg:grid-cols-[50%_1fr]">
          <div>
            <Eyebrow>{faq.eyebrow}</Eyebrow>
            <RevealHeading lines={faq.heading} className="display mt-3 text-[clamp(2.6rem,5.2vw,6rem)]" />
          </div>
          <Faq items={faq.items} />
        </div>
      </section>

      <CtaBand href={contact.whatsapp} />
      <Footer />
    </main>
  );
}
