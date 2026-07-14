import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

export default function CountUp({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const obj = { n: 0 };
          animate(obj, {
            n: to,
            duration: duration * 1000,
            ease: "outCubic",
            onUpdate: () => setVal(Math.round(obj.n)),
          });
          animate(el, {
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 700,
            ease: "outExpo",
          });
        }
      });
    }, { rootMargin: "-100px" });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} style={{ opacity: 0 }} className="font-display text-5xl font-bold text-glow md:text-6xl">
      {val}{suffix}
    </span>
  );
}
