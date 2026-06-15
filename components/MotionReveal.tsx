"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

export default function MotionReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
}: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  // Começa como false no SSR e no primeiro render do cliente
  // Só passa a true depois que o JS carregou E a tela é desktop
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Anima apenas em telas maiores que 768px (tablet/desktop)
    if (window.innerWidth >= 768 && !prefersReducedMotion) {
      setShouldAnimate(true);
    }
  }, [prefersReducedMotion]);

  // Mobile, SSR ou reduced-motion: renderiza visível, sem animação
  if (!shouldAnimate) {
    return <div className={className}>{children}</div>;
  }

  const offsetMap = {
    up:    { y: 20, x: 0 },
    down:  { y: -20, x: 0 },
    left:  { y: 0, x: 20 },
    right: { y: 0, x: -20 },
    none:  { y: 0, x: 0 },
  };
  const offset = offsetMap[direction];

  const variants: Variants = {
    hidden: { opacity: 0, x: offset.x, y: offset.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
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
