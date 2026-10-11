"use client";

import type { ReactElement } from "react";
import { Scene } from "@/components/Scene/Scene";
import { useLocale } from "@/context/LocaleContext";

export const Hero = (): ReactElement => {
  const { dictionary } = useLocale();
  const { hero } = dictionary;

  return (
    <section className="hero wrap" aria-label={hero.introAria}>
      <Scene
        beams={14}
        color="#2cff7a"
        ariaLabel={hero.sceneAria}
        placeholder={hero.scenePlaceholder}
      />
      <div className="in">
        <h1>
          <span>
            <i>{hero.line1}</i>
          </span>
          <span>
            <i>
              {hero.line2Before}
              <b className="o">{hero.line2Accent}</b>
            </i>
          </span>
        </h1>
        <aside>
          <p>{hero.body}</p>
          <div className="row">
            <a className="btn" href="#contact">
              {hero.cta}
            </a>
            <a className="ghost" href="#productions">
              {hero.secondary}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};
