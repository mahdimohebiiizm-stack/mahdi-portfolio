import React from "react";

const HAS_PERSIAN_CHAR = /[\u0600-\u06FF]/;
const LATIN_TECH_TERM =
  /([A-Za-z0-9][A-Za-z0-9.+/#_-]*(?:\s+[A-Za-z0-9.+/#_-]+)*[A-Za-z0-9+]|\b[A-Za-z0-9]\b)/g;

export interface HighlightedTextProps {
  text: string;
  className?: string;
}

export default function HighlightedText({
  text,
  className = "",
}: HighlightedTextProps) {
  if (!HAS_PERSIAN_CHAR.test(text)) {
    return <span className={className}>{text}</span>;
  }

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  const regex = new RegExp(LATIN_TECH_TERM);
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <span
        key={match.index}
        dir="ltr"
        className="inline-block text-gold/90 font-medium tracking-wide"
      >
        {match[0]}
      </span>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <span className={className}>{parts}</span>;
}
