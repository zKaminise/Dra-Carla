"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

export default function MotionRevealAnimated({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
}: Props) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const offsetMap = {
    up:    { y: 20, x: 0 },
    down:  { y: -20, x: 0 },
    left:  { y: 0, x: 20 },
    right: { y: 0, x: -20 },
    none:  { y: 0, x: 0 },
  };
  const { x, y } = offsetMap[direction];

  const variants: Variants = {
    hidden:  { opacity: 0, x, y },
    visible: {
      opacity: 1, x: 0, y: 0,
      transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
