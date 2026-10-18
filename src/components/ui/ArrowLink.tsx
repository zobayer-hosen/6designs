import Link from "next/link";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      aria-hidden
      className={`h-[0.75rem] w-[1.1rem] shrink-0 ${className}`}
    >
      <path d="M0 6h16.5M11.5 1l5 5-5 5" />
    </svg>
  );
}

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

/** Uppercase label with a full-width hairline and a trailing arrow ("GET IN TOUCH →"). */
export function ArrowLink({ href, children, className = "", onClick }: Props) {
  const content = (
    <>
      <span>{children}</span>
      <Arrow />
    </>
  );
  const cls = `arrow-link ${className}`;

  if (isExternal(href)) {
    return (
      <a
        href={href}
        className={cls}
        onClick={onClick}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} onClick={onClick}>
      {content}
    </Link>
  );
}
