"use client";

import type { CSSProperties, ReactElement } from "react";
import { Scene } from "@/components/Scene/Scene";
import { useLocale } from "@/context/LocaleContext";

export const Capabilities = (): ReactElement => {
  const { dictionary } = useLocale();
  const { capabilities: c } = dictionary;

  return (
    <section className="cap wrap" id="capabilities">
      <div className="c1">
        <Scene
          beams={9}
          color="#b04dff"
          ariaLabel={c.laserSceneAria}
          placeholder={c.placeholder}
        />
        <div>
          <h2>
            {c.laserTitle}
            <br />
            <span className="o">{c.laserAccent}</span>
          </h2>
          <p>{c.laserBody}</p>
        </div>
      </div>

      <div className="c2">
        <div>
          <h2>
            {c.jetTitle.split(" ").slice(0, 2).join(" ")}
            <br />
            {c.jetTitle.split(" ").slice(2).join(" ")}
          </h2>
          <p style={{ marginTop: 20 }}>{c.jetBody}</p>
        </div>
        <Scene ariaLabel={c.jetSceneAria} placeholder={c.placeholder}>
          <i
            className="j"
            style={{ "--x": "20%", "--dl": "0s" } as CSSProperties}
            aria-hidden="true"
          />
          <i
            className="j"
            style={{ "--x": "50%", "--dl": ".5s" } as CSSProperties}
            aria-hidden="true"
          />
          <i
            className="j"
            style={{ "--x": "80%", "--dl": "1s" } as CSSProperties}
            aria-hidden="true"
          />
        </Scene>
      </div>

      <div className="c3">
        <h2>
          {c.liveTitle.split(" ").slice(0, 2).join(" ")}
          <br />
          {c.liveTitle.split(" ").slice(2).join(" ")}
        </h2>
        <p>{c.liveBody1}</p>
        <p>{c.liveBody2}</p>
      </div>
    </section>
  );
};
