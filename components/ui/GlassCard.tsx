import React from "react";

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl bg-navy-light/10 backdrop-blur-md border border-gold/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-navy-dark/50 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
