"use client";

import { useEffect, useRef, type ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";

export const Statement = (): ReactElement => {
  const { dictionary } = useLocale();
  const { statement } = dictionary;
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("v");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stmt wrap" id="about">
      <div className="ln" ref={lineRef} aria-hidden="true" />
      <h2>
        {statement.title}
        <em>{statement.titleEm}</em>
      </h2>
      <p>{statement.body}</p>
    </section>
  );
};
