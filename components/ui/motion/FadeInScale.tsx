"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

export interface FadeInScaleProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  immediate?: boolean;
}

export default function FadeInScale({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  immediate = false,
  ...rest
}: FadeInScaleProps) {
  const motionProps = immediate
    ? {
        initial: { opacity: 0, scale: 0.95, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        transition: {
          duration,
          delay,
          ease: "easeOut" as const,
        },
      }
    : {
        initial: { opacity: 0, scale: 0.95, y: 20 },
        whileInView: { opacity: 1, scale: 1, y: 0 },
        viewport: { once: true, margin: "-10%" },
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
