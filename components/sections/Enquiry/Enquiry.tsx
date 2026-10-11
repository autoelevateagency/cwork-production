"use client";

import { useState, type FormEvent, type ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { CONTACT, FORM_ENDPOINT } from "@/lib/constants";

type FormErrors = {
  name: string;
  email: string;
};

export const Enquiry = (): ReactElement => {
  const { dictionary } = useLocale();
  const { enquiry: e } = dictionary;
  const [errors, setErrors] = useState<FormErrors>({ name: "", email: "" });
  const [status, setStatus] = useState<{
    text: string;
    bad: boolean;
    html?: string;
  } | null>(null);

  const onSubmit = async (ev: FormEvent<HTMLFormElement>): Promise<void> => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<
      string,
      string
    >;

    const nextErrors: FormErrors = { name: "", email: "" };
    let ok = true;

    if (!data.name?.trim()) {
      nextErrors.name = e.nameError;
      ok = false;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email || "")) {
      nextErrors.email = e.emailError;
      ok = false;
    }

    setErrors(nextErrors);

    if (!ok) {
      setStatus({ text: e.fixFields, bad: true });
      const firstInvalid = form.querySelector<HTMLElement>("[aria-invalid=true]");
      firstInvalid?.focus();
      return;
    }

    if (!FORM_ENDPOINT) {
      const body = Object.entries(data)
        .filter(([, v]) => v)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
      const href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
        `Event enquiry from ${data.name}`
      )}&body=${encodeURIComponent(body)}`;

      setStatus({
        text: "",
        bad: true,
        html: `${e.mailtoFallback} <a href="${href}" style="color:#FF6302">${CONTACT.email}</a>`,
      });
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("send failed");
      form.reset();
      setErrors({ name: "", email: "" });
      setStatus({
        text: e.sendSuccess.replace("{email}", data.email),
        bad: false,
      });
    } catch {
      setStatus({ text: e.sendFail, bad: true });
    }
  };

  return (
    <section className="enq wrap" id="contact">
      <div>
        <h2>
          {e.title.split(" ")[0]}
          <br />
          {e.title.split(" ").slice(1).join(" ")}
        </h2>
        <p>{e.body}</p>
        <div className="dir">
          <a href={`mailto:${e.email}`}>{e.email}</a>
          <a href={`tel:${e.phoneHref}`}>{e.phone}</a>
        </div>
      </div>
      <form id="fm" noValidate onSubmit={onSubmit}>
        <div className="f">
          <label htmlFor="n">{e.name}</label>
          <input
            id="n"
            name="name"
            autoComplete="name"
            required
            aria-invalid={errors.name ? true : undefined}
          />
          <span className="err" id="en">
            {errors.name}
          </span>
        </div>
        <div className="f">
          <label htmlFor="e">{e.emailLabel}</label>
          <input
            id="e"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={errors.email ? true : undefined}
          />
          <span className="err" id="ee">
            {errors.email}
          </span>
        </div>
        <div className="f">
          <label htmlFor="c">
            {e.company} <small>{e.companyHint}</small>
          </label>
          <input id="c" name="company" autoComplete="organization" />
        </div>
        <div className="f">
          <label htmlFor="t">
            {e.eventType} <small>{e.eventTypeHint}</small>
          </label>
          <select id="t" name="type" defaultValue="">
            <option value="">Select</option>
            {e.eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="f">
          <label htmlFor="d">
            {e.eventDate} <small>{e.eventDateHint}</small>
          </label>
          <input id="d" name="date" type="date" />
        </div>
        <div className="f">
          <label htmlFor="v">
            {e.venue} <small>{e.venueHint}</small>
          </label>
          <input id="v" name="venue" />
        </div>
        <div className="f">
          <label htmlFor="a">
            {e.audience} <small>{e.audienceHint}</small>
          </label>
          <input id="a" name="audience" inputMode="numeric" />
        </div>
        <div className="f">
          <label htmlFor="r">
            {e.needs} <small>{e.needsHint}</small>
          </label>
          <input
            id="r"
            name="needs"
            placeholder={e.needsPlaceholder}
          />
        </div>
        <div className="f w">
          <label htmlFor="m">
            {e.details} <small>{e.detailsHint}</small>
          </label>
          <textarea id="m" name="details" />
        </div>
        <div className="f w">
          <button
            className="btn"
            type="submit"
            style={{ justifySelf: "start" }}
          >
            {e.submit}
          </button>
        </div>
        {status?.html ? (
          <div
            className={`status-msg show${status.bad ? " bad" : ""}`}
            role="status"
            aria-live="polite"
            dangerouslySetInnerHTML={{ __html: status.html }}
          />
        ) : (
          <div
            className={`status-msg${status ? " show" : ""}${status?.bad ? " bad" : ""}`}
            role="status"
            aria-live="polite"
          >
            {status?.text}
          </div>
        )}
      </form>
    </section>
  );
};
