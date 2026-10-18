import { FadeIn } from "@/components/motion/FadeIn";

/** Small uppercase section label ("ABOUT US", "PORTFOLIO"). */
export function Eyebrow({
  children,
  className = "",
  light = false,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <FadeIn as="p" y={0} duration={1} className={`eyebrow ${light ? "!text-white/75" : ""} ${className}`}>
      {children}
    </FadeIn>
  );
}
