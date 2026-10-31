import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`w-full max-w-7xl mx-auto px-6 lg:px-8 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
