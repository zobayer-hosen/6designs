import { home } from "@/content/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Counter } from "@/components/ui/Counter";
import { IntroSplit } from "@/components/sections/IntroSplit";

export function AboutSection() {
  const { about } = home;

  return (
    <IntroSplit
      id="about"
      eyebrow={about.eyebrow}
      heading={about.heading}
      paragraphs={about.paragraphs}
      link={about.link}
      images={[about.images[0], about.images[1]]}
    >
      <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-10 md:mt-[6vw] md:grid-cols-4 md:pt-[2.6vw]">
        {about.stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.08} className="flex flex-col-reverse gap-3">
            <dt className="eyebrow">{s.label}</dt>
            <dd className="display text-[clamp(2.4rem,3.6vw,4rem)]">
              <Counter value={s.value} suffix={s.suffix} delay={0.15 + i * 0.08} />
            </dd>
          </FadeIn>
        ))}
      </dl>
    </IntroSplit>
  );
}
