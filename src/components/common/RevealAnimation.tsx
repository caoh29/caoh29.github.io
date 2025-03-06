
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-right" | "fade-in-left" | "scale-in" | "blur-in";
  delay?: number;
  threshold?: number;
  once?: boolean;
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once, threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        {
          [`opacity-0`]: !isVisible,
          [`animate-${animation}`]: isVisible,
          "opacity-100": isVisible,
        },
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "both" }}
    >
      {children}
    </div>
  );
};

export default RevealAnimation;
