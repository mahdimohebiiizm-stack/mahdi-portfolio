import React from "react";

export interface SectionHeaderProps {
  title: string;
  accentWord?: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "start";
}

export default function SectionHeader({
  title,
  accentWord,
  subtitle,
  className = "",
  align = "center",
}: SectionHeaderProps) {
  const alignmentClasses =
    align === "center"
      ? "text-center items-center"
      : "text-start items-start";

  const renderTitle = () => {
    if (!accentWord) {
      return title;
    }

    if (title.includes(accentWord)) {
      const parts = title.split(accentWord);
      return (
        <>
          {parts[0]}
          <span className="text-gold">{accentWord}</span>
          {parts.slice(1).join(accentWord)}
        </>
      );
    }

    return (
      <>
        {title} <span className="text-gold">{accentWord}</span>
      </>
    );
  };

  return (
    <div className={`flex flex-col ${alignmentClasses} ${className}`.trim()}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
        {renderTitle()}
      </h2>
      <div className="h-1 w-20 bg-gradient-to-r from-gold to-gold-dark rounded-full mt-3" />
      {subtitle && (
        <p className="text-zinc-400 text-sm md:text-base mt-3 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
