import { cta } from "@/content/site";
import { RevealHeading } from "@/components/motion/RevealHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** "Make an Impact Today → Get Started" band shown before the footer on inner pages. */
export function CtaBand({ href = cta.button.href }: { href?: string }) {
  return (
    <section className="relative z-10 border-t border-line bg-white px-gutter py-24 text-center md:py-[10vw]">
      <Eyebrow>Let&apos;s talk</Eyebrow>
      <RevealHeading lines={cta.heading} className="display mx-auto mt-5 text-[clamp(2.6rem,5.4vw,6rem)]" />
      <FadeIn delay={0.3} className="mt-10 md:mt-12">
        <ArrowLink href={href} className="text-ink">
          {cta.button.label}
        </ArrowLink>
      </FadeIn>
    </section>
  );
}
