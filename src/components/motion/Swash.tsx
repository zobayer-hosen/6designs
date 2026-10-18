import { Fragment } from "react";

/**
 * Renders "{S}paces" as a swash script capital followed by the rest of the word.
 * Any number of `{X}` markers may appear in a string.
 */
export function Swash({ text }: { text: string }) {
  const parts = text.split(/(\{[^}]\})/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        /^\{.\}$/.test(part) ? (
          <span key={i} className="swash">
            {part[1]}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/** Plain-text version of a swash string, for aria-labels and alt text. */
export function plain(text: string | string[]) {
  const joined = Array.isArray(text) ? text.join(" ") : text;
  return joined.replace(/\{(.)\}/g, "$1");
}
