"use client";

import { useRef, type ReactElement } from "react";
import { Scene } from "@/components/Scene/Scene";
import { useLocale } from "@/context/LocaleContext";

export const Productions = (): ReactElement => {
  const { dictionary } = useLocale();
  const { productions: p } = dictionary;
  const stripRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1): void => {
    const strip = stripRef.current;
    if (!strip) return;
    strip.scrollBy({
      left: direction * strip.clientWidth * 0.6,
      behavior: "smooth",
    });
  };

  return (
    <section className="prod" id="productions">
      <div className="wrap hd">
        <h2>
          {p.title}
          <br />
          <span className="o">{p.titleAccent}</span>
        </h2>
        <div className="ctl">
          <button
            type="button"
            aria-label={p.prevAria}
            onClick={() => scrollBy(-1)}
          >
            ←
          </button>{" "}
          <button
            type="button"
            aria-label={p.nextAria}
            onClick={() => scrollBy(1)}
          >
            →
          </button>
        </div>
      </div>
      <div
        className="strip"
        id="strip"
        ref={stripRef}
        tabIndex={0}
        aria-label={p.stripAria}
      >
        {p.items.map((item) => (
          <article className="fr" key={item.title}>
            <Scene
              beams={item.beams}
              color={item.color}
              ariaLabel={item.sceneAria}
              placeholder={item.placeholder}
            />
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
