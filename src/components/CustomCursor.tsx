import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 768px)").matches) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement | null;
      const isInteractive = !!target?.closest("a,button,[role='button'],input,textarea,select,label,.cursor-target");
      setHover(isInteractive);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          left: pos.x, top: pos.y,
          transform: `translate(-50%, -50%) scale(${hover ? 2.2 : 1})`,
          transition: "transform 0.2s ease, width 0.2s, height 0.2s",
          width: 12, height: 12,
          borderRadius: 999,
          background: "rgba(190, 255, 90, 0.95)",
          boxShadow: "0 0 20px rgba(190, 255, 90, 0.8), 0 0 40px rgba(255, 140, 80, 0.4)",
          mixBlendMode: "screen",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed z-[9998] hidden md:block"
        style={{
          left: pos.x, top: pos.y,
          transform: "translate(-50%, -50%)",
          width: hover ? 60 : 32, height: hover ? 60 : 32,
          borderRadius: 999,
          border: "1px solid rgba(0, 245, 255, 0.4)",
          transition: "width 0.25s ease, height 0.25s ease, transform 0.15s ease-out",
        }}
      />
    </>
  );
}
