"use client";

import { useEffect, useState, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

// Guarda a referência do componente após primeiro carregamento — evita re-import
let CachedAnimated: React.ComponentType<Props> | null = null;

export default function MotionReveal({ children, className, delay = 0, direction = "up", duration = 0.5 }: Props) {
  const [Animated, setAnimated] = useState<React.ComponentType<Props> | null>(
    () => CachedAnimated
  );

  useEffect(() => {
    // Mobile: nunca carrega Framer Motion
    if (window.innerWidth < 768) return;
    // Desktop: carrega FM dinamicamente (não bloqueia carregamento inicial)
    if (CachedAnimated) return;
    import("./MotionRevealAnimated").then((mod) => {
      CachedAnimated = mod.default;
      setAnimated(() => mod.default);
    });
  }, []);

  // Sempre renderiza conteúdo visível — em mobile ou enquanto FM carrega
  if (!Animated) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Animated className={className} delay={delay} direction={direction} duration={duration}>
      {children}
    </Animated>
  );
}
