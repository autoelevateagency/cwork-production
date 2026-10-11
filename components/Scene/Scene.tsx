"use client";

import { useEffect, useId, useRef, type CSSProperties, type ReactElement } from "react";

type SceneProps = {
  beams?: number;
  color?: string;
  ariaLabel?: string;
  placeholder?: string;
  className?: string;
  role?: "img" | "presentation";
  randomizeBeamX?: boolean;
  children?: React.ReactNode;
};

export const Scene = ({
  beams = 0,
  color,
  ariaLabel,
  placeholder,
  className = "scene",
  role = "img",
  randomizeBeamX = false,
  children,
}: SceneProps): ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reactId = useId();

  useEffect(() => {
    const sc = containerRef.current;
    if (!sc || beams <= 0) return;

    const existing = sc.querySelectorAll(".beam");
    existing.forEach((el) => el.remove());

    for (let i = 0; i < beams; i++) {
      const b = document.createElement("i");
      b.className = "beam";
      b.setAttribute("aria-hidden", "true");
      const a = -55 + (110 * i) / (beams - 1 || 1);
      const x = randomizeBeamX
        ? `${10 + Math.random() * 80}%`
        : `${42 + (i % 5) * 4}%`;
      b.style.cssText = `--a:${a}deg;--k:${(i % 2 ? 1 : -1) * (6 + (i % 4) * 3)}deg;--s:${5 + (i % 5) * 1.3}s;--x:${x};animation-delay:-${i * 0.7}s`;
      sc.prepend(b);
    }

    return () => {
      sc.querySelectorAll(".beam").forEach((el) => el.remove());
    };
  }, [beams, randomizeBeamX, reactId]);

  const style = color
    ? ({ ["--c" as string]: color } as CSSProperties)
    : undefined;

  return (
    <div
      ref={containerRef}
      className={className}
      style={style}
      role={role}
      aria-label={role === "img" ? ariaLabel : undefined}
      aria-hidden={role === "presentation" ? true : undefined}
    >
      {placeholder ? <span className="ph">{placeholder}</span> : null}
      {children}
    </div>
  );
};
