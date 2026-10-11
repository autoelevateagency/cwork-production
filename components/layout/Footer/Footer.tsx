"use client";

import { useEffect, useState, type ReactElement } from "react";
import { Logo } from "@/components/Logo/Logo";
import { useLocale } from "@/context/LocaleContext";
import { CONTACT, NAV_LINKS } from "@/lib/constants";

export const Footer = (): ReactElement => {
  const { dictionary } = useLocale();
  const { nav, footer } = dictionary;
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="wrap">
      <div className="fg">
        <div>
          <Logo ariaLabel={nav.homeAria} />
          <p>{footer.tagline}</p>
        </div>
        <div>
          <h3>{footer.explore}</h3>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{nav[link.key]}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>{footer.contact}</h3>
          <ul>
            <li>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phoneDisplay}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="cp">
        <span>
          © {year} CWORK Productions
        </span>
        <span>{footer.rights}</span>
      </div>
    </footer>
  );
};
