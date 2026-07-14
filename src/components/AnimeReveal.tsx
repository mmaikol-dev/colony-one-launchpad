import { useEffect, useRef, type ReactNode, type ElementType } from "react";
import { animate } from "animejs";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
};

export default function AnimeReveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  y = 24,
  duration = 800,
  once = true,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animate(el, {
            opacity: [0, 1],
            translateY: [y, 0],
            duration,
            delay,
            ease: "outExpo",
          });
          if (once) obs.disconnect();
        }
      });
    }, { rootMargin: "-80px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, y, duration, once]);

  return (
    <Tag ref={ref as never} className={className} style={{ opacity: 0 }}>
      {children}
    </Tag>
  );
}
