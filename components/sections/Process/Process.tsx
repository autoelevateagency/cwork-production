"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";

export const Process = (): ReactElement => {
  const { dictionary } = useLocale();
  const { process } = dictionary;

  return (
    <section className="proc wrap">
      <h2>
        {process.title}
        <br />
        <span className="o">{process.titleAccent}</span>
      </h2>
      <ol className="tl">
        {process.steps.map((step) => (
          <li key={step.number}>
            <b>{step.number}</b>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};
