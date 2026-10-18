import { RevealHeading, type HeadingLine } from "@/components/motion/RevealHeading";
import { RevealImage } from "@/components/motion/RevealImage";
import { FadeIn } from "@/components/motion/FadeIn";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Eyebrow } from "@/components/ui/Eyebrow";

type Img = { src: string; alt: string };

type Props = {
  id?: string;
  eyebrow: string;
  heading: HeadingLine[];
  paragraphs: string[];
  link?: { label: string; href: string };
  images: [Img, Img];
  children?: React.ReactNode;
};

/**
 * "Design with intention" layout: label top-left, heading and copy anchored to the
 * bottom of a tall portrait, with a smaller image beside it.
 */
export function IntroSplit({ id, eyebrow, heading, paragraphs, link, images, children }: Props) {
  const [tall, small] = images;

  return (
    <section id={id} className="relative z-10 bg-white px-gutter pt-16 pb-20 md:pt-[7vw] md:pb-[6vw]">
      <div className="grid gap-y-12 lg:grid-cols-[50%_27.4%_1fr]">
        <div className="flex flex-col justify-between gap-12 lg:pr-[4vw]">
          <Eyebrow>{eyebrow}</Eyebrow>

          <div>
            <RevealHeading lines={heading} className="display text-[clamp(2.6rem,5.2vw,6rem)]" />
            <div className="mt-6 max-w-[34rem] space-y-4 md:mt-[1.8vw]">
              {paragraphs.map((p, i) => (
                <FadeIn key={i} as="p" delay={0.25 + i * 0.1} className="text-[0.9rem] leading-[1.55]">
                  {p}
                </FadeIn>
              ))}
            </div>
            {link && (
              <FadeIn delay={0.45} className="mt-9 md:mt-[2.6vw]">
                <ArrowLink href={link.href} className="text-ink">
                  {link.label}
                </ArrowLink>
              </FadeIn>
            )}
          </div>
        </div>

        <RevealImage
          src={tall.src}
          alt={tall.alt}
          sizes="(min-width: 1024px) 28vw, 100vw"
          delay={0.35}
          className="aspect-[4/5] lg:aspect-[0.67]"
        />

        <div className="hidden lg:block lg:pl-[2.2vw]">
          <RevealImage src={small.src} alt={small.alt} sizes="18vw" delay={0.8} duration={0.9} className="aspect-[0.87]" />
        </div>
      </div>

      {children}
    </section>
  );
}
