"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  stagger = false,
  staggerDelay = 100,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (stagger) {
              const kids = entry.target.querySelectorAll(".stagger");
              kids.forEach((kid, i) => {
                (kid as HTMLElement).style.animationDelay = `${delay + i * staggerDelay}ms`;
                kid.classList.add("animate-fade-up");
              });
            }
            entry.target.classList.add("animate-fade-up");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, stagger, staggerDelay]);

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
}
