"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

export interface FadeInUpProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  viewportMargin?: string;
  immediate?: boolean;
}

export default function FadeInUp({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  viewportMargin = "-10%",
  immediate = false,
  ...rest
}: FadeInUpProps) {
  const motionProps = immediate
    ? {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration,
          delay,
          ease: "easeOut" as const,
        },
      }
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: viewportMargin },
        transition: {
          duration,
          delay,
          ease: "easeOut" as const,
        },
      };

  return (
    <motion.div className={className} {...motionProps} {...rest}>
      {children}
    </motion.div>
  );
}
