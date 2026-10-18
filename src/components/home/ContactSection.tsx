import { RevealHeading, type HeadingLine } from "@/components/motion/RevealHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { InquiryForm } from "@/components/ui/InquiryForm";

type Props = {
  id?: string;
  eyebrow: string;
  heading: HeadingLine[];
  text: string;
  variant?: "simple" | "full";
  children?: React.ReactNode;
};

/** Two-column contact block: heading and copy on the left, the form on the right. */
export function ContactSection({ id = "contact", eyebrow, heading, text, variant = "simple", children }: Props) {
  return (
    <section id={id} className="relative z-10 scroll-mt-0 bg-white px-gutter pt-16 pb-24 md:pt-[6vw] md:pb-[11vw]">
      <div className="grid gap-y-14 lg:grid-cols-[50%_1fr]">
        <div className="lg:pr-[4vw]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <RevealHeading lines={heading} className="display mt-3 text-[clamp(2.6rem,5.2vw,6rem)]" />
          <FadeIn as="p" delay={0.3} className="mt-6 max-w-[23rem] text-[0.875rem] leading-[1.5] md:mt-[2vw]">
            {text}
          </FadeIn>
          {children}
        </div>
        <div className="lg:pt-1">
          <InquiryForm variant={variant} />
        </div>
      </div>
    </section>
  );
}
