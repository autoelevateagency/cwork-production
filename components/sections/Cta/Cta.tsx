"use client";

import type { ReactElement } from "react";
import { Scene } from "@/components/Scene/Scene";
import { useLocale } from "@/context/LocaleContext";

export const Cta = (): ReactElement => {
  const { dictionary } = useLocale();
  const { cta } = dictionary;

  return (
    <section className="cta wrap" aria-label={cta.aria}>
      <Scene beams={10} role="presentation" randomizeBeamX />
      <div className="in">
        <h2>
          {cta.title}
          <br />
          {cta.titleLine2}
          <span className="o">{cta.titleAccent}</span>
        </h2>
        <p>{cta.body}</p>
        <a className="btn" href="#contact">
          {cta.button}
        </a>
      </div>
    </section>
  );
};
