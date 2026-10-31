import React from "react";

export type ButtonVariant = "primary" | "outline";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  type = "button",
  ...rest
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50";

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-gold text-navy-dark font-bold hover:bg-gold-light hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/20 active:translate-y-0",
    outline:
      "bg-transparent border border-gold/40 text-white hover:bg-gold/10 hover:border-gold hover:-translate-y-1 hover:shadow-md hover:shadow-gold/10 active:translate-y-0",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}
