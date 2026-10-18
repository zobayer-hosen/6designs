import type { Metadata } from "next";
import { about } from "@/content/site";
import { Hero } from "@/components/layout/Hero";
import { Footer } from "@/components/layout/Footer";
import { CtaBand } from "@/components/layout/CtaBand";
import { IntroSplit } from "@/components/sections/IntroSplit";
import { RevealHeading } from "@/components/motion/RevealHeading";
import { RevealImage } from "@/components/motion/RevealImage";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { FadeIn } from "@/components/motion/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: about.meta.title,
  description: about.meta.description,
  openGraph: { title: `${about.meta.title} - 6 Designs`, description: about.meta.description },
};

export default function AboutPage() {
  const { hero, intro, values, portfolio, vision, mission } = about;

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
        links={[{ label: "What we do", href: "/services" }]}
        image={hero.image}
      />

      <IntroSplit
        eyebrow={intro.eyebrow}
        heading={intro.heading}
        paragraphs={[intro.text]}
        link={{ label: "Get in touch", href: "/contact" }}
        images={[intro.images[0], intro.images[1]]}
      />

      {/* Innovation + Detail Orientation */}
      <section className="relative z-10 bg-white px-gutter pb-24 md:pb-[8vw]">
        <div className="border-t border-line pt-14 text-center md:pt-[5vw]">
          <Eyebrow>Our approach</Eyebrow>
          <RevealHeading
            lines={[`{I}nnovation & detail`]}
            className="display mt-4 text-[clamp(2.2rem,5.3vw,6rem)]"
          />
        </div>

        <div className="mt-12 grid gap-14 md:mt-[5vw] md:grid-cols-2 md:gap-[2.1vw] lg:px-[8vw]">
          {values.map((v, i) => (
            <article key={v.title} className={i === 1 ? "md:mt-[12vw]" : ""}>
              <RevealImage
                src={v.image.src}
                alt={v.image.alt}
                sizes="(min-width: 768px) 40vw, 100vw"
                delay={i * 0.15}
                className="aspect-[0.84]"
              />
              <div className="mt-6 grid grid-cols-[3rem_1fr] gap-x-4">
                <FadeIn as="p" delay={0.3} className="pt-1.5 text-[0.75rem] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </FadeIn>
                <div>
                  <FadeIn as="h3" delay={0.35} className="display text-[clamp(1.6rem,2.45vw,2.6rem)]">
                    {v.title}
                  </FadeIn>
                  <FadeIn as="p" delay={0.45} className="mt-3 max-w-[24rem] text-[0.875rem] leading-[1.55]">
                    {v.text}
                  </FadeIn>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ParallaxImage src={portfolio.src} alt={portfolio.alt} caption={portfolio.alt} />

      {/* Vision + Mission */}
      <section className="relative z-10 bg-cream px-gutter py-24 md:py-[8vw]">
        <div className="grid gap-16 md:grid-cols-2 md:gap-[4vw]">
          {[vision, mission].map((item, i) => (
            <div key={item.title} className={`md:pt-2 ${i === 1 ? "md:border-l md:border-taupe/60 md:pl-[4vw]" : ""}`}>
              <Eyebrow>{item.title}</Eyebrow>
              <RevealHeading
                as="p"
                delay={0.1 + i * 0.15}
                lines={[item.text]}
                className="display mt-6 text-[clamp(1.7rem,2.9vw,3.2rem)] !leading-[1.08]"
              />
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  );
}
