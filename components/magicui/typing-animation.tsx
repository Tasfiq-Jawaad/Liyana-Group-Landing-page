"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number; // Speed per character
  delay?: number; // Initial delay before starting
  visibleDuration?: number; // Time text stays fully visible before erasing
  as?: React.ElementType;
  startOnView?: boolean;
}

export function TypingAnimation({
  children,
  className,
  duration = 50,
  delay = 0,
  visibleDuration = 2000, // Default: Visible for 2 seconds before erasing
  as: Component = "div",
  startOnView = false,
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const [isTyping, setIsTyping] = useState(true); // Tracks typing vs erasing phase
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => setStarted(true), delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setStarted(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (!started) return;

    let i = isTyping ? 0 : children.length;
    const typingEffect = setInterval(() => {
      if (isTyping && i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else if (!isTyping && i > 0) {
        setDisplayedText(children.substring(0, i - 1));
        i--;
      } else {
        clearInterval(typingEffect);
        if (isTyping) {
          // After typing is done, wait for `visibleDuration` before erasing
          setTimeout(() => setIsTyping(false), visibleDuration);
        } else {
          // Restart typing after erasing
          setTimeout(() => setIsTyping(true), delay);
        }
      }
    }, duration);

    return () => clearInterval(typingEffect);
  }, [children, duration, started, isTyping, visibleDuration, delay]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "text-4xl font-bold leading-[5rem] tracking-[-0.02em]",
        className
      )}
      {...props}
    >
      {displayedText} |
    </MotionComponent>
  );
}
