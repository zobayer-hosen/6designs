"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { contact, nav } from "@/content/site";
import { EASE_IN_OUT, EASE_OUT } from "@/components/motion/easing";
import { MaskLine } from "@/components/motion/RevealHeading";
import { useLenis } from "./Providers";

/**
 * Transparent header that sits on the hero image.
 * Intro: logo fades in, the hairline draws left to right, links arrive one by one.
 */
export function Header({ ready = true }: { ready?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open, lenis]);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="relative flex h-16 items-center px-gutter md:h-[4.5rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ duration: 0.8, ease: EASE_OUT }}
        >
          <Link href="/" aria-label="6 Designs — home" className="block">
            <Image
              src="/brand/logo-light.png"
              alt="6 Designs"
              width={900}
              height={316}
              preload
              className="h-9 w-auto md:h-11"
            />
          </Link>
        </motion.div>

        <nav aria-label="Primary" className="ml-auto hidden md:block lg:absolute lg:left-1/2 lg:ml-0">
          <ul className="flex items-center gap-7 text-[0.78rem] font-medium uppercase tracking-[0.02em] lg:gap-9">
            {nav.map((item, i) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={ready ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.7, delay: 0.13 + i * 0.13, ease: EASE_OUT }}
              >
                <Link
                  href={item.href}
                  className="nav-link"
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link ml-9 hidden text-[0.78rem] font-medium uppercase tracking-[0.02em] md:inline-block lg:ml-auto"
          initial={{ opacity: 0, y: -8 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, delay: 0.13 + nav.length * 0.13, ease: EASE_OUT }}
        >
          Let&apos;s Talk
        </motion.a>

        <motion.button
          type="button"
          onClick={() => setOpen(true)}
          className="ml-auto text-[0.78rem] font-medium uppercase tracking-[0.04em] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : undefined}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Menu
        </motion.button>

        {/* hairline under the bar, drawn left → right */}
        <motion.span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-white/45"
          initial={{ scaleX: 0 }}
          animate={ready ? { scaleX: 1 } : undefined}
          transition={{ duration: 1.2, ease: EASE_IN_OUT }}
        />
      </div>

      <AnimatePresence>
        {open && <MobileMenu onClose={() => setOpen(false)} isActive={isActive} />}
      </AnimatePresence>
    </header>
  );
}

function MobileMenu({
  onClose,
  isActive,
}: {
  onClose: () => void;
  isActive: (href: string) => boolean;
}) {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);

  return (
    <motion.div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-50 flex flex-col bg-night px-gutter text-white"
      initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
      animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
      exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
      transition={{ duration: 0.8, ease: EASE_IN_OUT }}
    >
      <div className="flex h-16 items-center border-b border-white/20">
        <Image src="/brand/logo-light.png" alt="6 Designs" width={900} height={316} className="h-9 w-auto" />
        <button
          type="button"
          onClick={onClose}
          className="ml-auto text-[0.78rem] font-medium uppercase tracking-[0.04em]"
          autoFocus
        >
          Close
        </button>
      </div>
      <nav aria-label="Mobile" className="mt-14">
        <ul className="space-y-3">
          {nav.map((item, i) => (
            <li key={item.href} className="display text-[2.6rem] text-white">
              <MaskLine show={show} delay={0.35 + i * 0.08}>
                <Link href={item.href} onClick={onClose} aria-current={isActive(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </MaskLine>
            </li>
          ))}
        </ul>
      </nav>
      <motion.div
        className="mt-auto space-y-1 pb-10 text-sm text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="block uppercase tracking-[0.04em] text-white">
          Let&apos;s Talk on WhatsApp
        </a>
        <a href={contact.phoneHref} className="block">{contact.phone}</a>
        <a href={contact.emailHref} className="block">{contact.email}</a>
      </motion.div>
    </motion.div>
  );
}
