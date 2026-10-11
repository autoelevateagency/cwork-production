"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";

export const Tech = (): ReactElement => {
  const { dictionary } = useLocale();
  const { tech } = dictionary;

  return (
    <section className="tech wrap">
      <div>
        <h2>
          {tech.title}
          <br />
          {tech.titleLine2}
          <span className="o">{tech.titleAccent}</span>
        </h2>
        <p>{tech.body}</p>
      </div>
      <div className="rig">
        <svg
          viewBox="0 0 600 260"
          role="img"
          aria-label={tech.diagramAria}
        >
          <g stroke="#FB0002" strokeWidth="1.2" opacity=".8">
            <path d="M60 90 20 0M120 90 110 0M180 90 200 0M240 90 290 0M300 90 380 0M360 90 470 0" />
          </g>
          <g fill="#FF6302">
            <rect x="48" y="90" width="24" height="30" />
            <rect x="108" y="90" width="24" height="30" />
            <rect x="168" y="90" width="24" height="30" />
            <rect x="228" y="90" width="24" height="30" />
            <rect x="288" y="90" width="24" height="30" />
            <rect x="348" y="90" width="24" height="30" />
          </g>
          <g fill="#fff">
            <rect x="48" y="190" width="24" height="40" />
            <rect x="108" y="190" width="24" height="40" />
            <rect x="168" y="190" width="24" height="40" />
            <rect x="228" y="190" width="24" height="40" />
            <rect x="288" y="190" width="24" height="40" />
            <rect x="348" y="190" width="24" height="40" />
          </g>
          <g stroke="#555" fill="none">
            <path d="M390 105h50M390 210h50" />
          </g>
          <g fill="#fff" fontFamily="var(--font-body), sans-serif" fontSize="14">
            <text x="448" y="110">
              {tech.laserLabel}
            </text>
            <text x="448" y="215">
              {tech.jetLabel}
            </text>
          </g>
        </svg>
        <small>{tech.note}</small>
      </div>
    </section>
  );
};
