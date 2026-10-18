import Image from "next/image";
import Link from "next/link";
import { contact, footer, nav } from "@/content/site";
import { Swash, plain } from "@/components/motion/Swash";
import { FadeIn } from "@/components/motion/FadeIn";

const colLabel = "eyebrow !text-[0.75rem] !text-muted";
const colItem = "text-[0.8125rem] font-semibold uppercase leading-[1.35] tracking-[0.01em] text-ink";

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden bg-cream text-ink">
      <div className="grid gap-y-12 px-gutter pt-14 pb-12 md:pt-[4.5vw] lg:grid-cols-[34%_1fr]">
        <FadeIn className="max-w-[17rem]">
          <Link href="/" aria-label="6 Designs — home" className="inline-block">
            <Image src="/brand/logo-dark.png" alt="6 Designs" width={900} height={316} className="h-12 w-auto" />
          </Link>
          <p className="mt-6 text-[0.8125rem] leading-[1.55]">{footer.about}</p>
          <p className="mt-6 text-[0.75rem] text-muted">{footer.copyright}</p>
        </FadeIn>

        <div className="grid gap-y-10 sm:grid-cols-3">
          <FadeIn delay={0.05} className="grid grid-cols-[6.5rem_1fr] gap-x-4 sm:grid-cols-[38%_1fr] lg:grid-cols-[40%_1fr]">
            <p className={colLabel}>Menu</p>
            <ul className="space-y-[0.95rem]">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={`${colItem} nav-link`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.12} className="grid grid-cols-[6.5rem_1fr] gap-x-4 sm:grid-cols-[38%_1fr] lg:grid-cols-[40%_1fr]">
            <p className={colLabel}>Follow us</p>
            <ul className="space-y-[0.95rem]">
              {contact.socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className={`${colItem} nav-link`}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.19} className="grid grid-cols-[6.5rem_1fr] gap-x-4 sm:grid-cols-[38%_1fr] lg:grid-cols-[30%_1fr]">
            <p className={colLabel}>Contact</p>
            <address className="space-y-[0.95rem] not-italic">
              <p className={colItem}>
                {contact.addressLines[0]},
                <br />
                {contact.addressLines[1]}
              </p>
              <p>
                <a href={contact.emailHref} className={`${colItem} nav-link`}>
                  {contact.email}
                </a>
              </p>
              <p>
                <a href={contact.phoneHref} className={`${colItem} nav-link`}>
                  {contact.phone}
                </a>
              </p>
            </address>
          </FadeIn>
        </div>
      </div>

      <Marquee />
    </footer>
  );
}

function Marquee() {
  const items = Array.from({ length: 4 });
  const group = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((_, i) => (
        <span key={i} className="flex items-center">
          <span className="display whitespace-nowrap !leading-[1.2] !text-taupe">
            <Swash text={footer.marquee} />
          </span>
          <span className="mx-[0.45em] inline-block size-[0.09em] rounded-full bg-taupe" />
        </span>
      ))}
    </div>
  );

  return (
    <Link
      href="/contact"
      aria-label={plain(footer.marquee)}
      className="group block pb-3 text-[clamp(3rem,5.8vw,6.75rem)]"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {group(true)}
        {group(true)}
      </div>
    </Link>
  );
}
