"use client";

import { useEffect, useRef, useState, type ReactElement } from "react";
import { Logo } from "@/components/Logo/Logo";
import { useLocale } from "@/context/LocaleContext";
import { NAV_LINKS } from "@/lib/constants";

export const Header = (): ReactElement => {
  const { dictionary } = useLocale();
  const { nav } = dictionary;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onPointerDown = (event: PointerEvent): void => {
      const target = event.target as Node | null;
      if (target && menuButtonRef.current?.contains(target)) return;
      setMenuOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [menuOpen]);

  return (
    <header id="hd" className={scrolled ? "s" : undefined}>
      <Logo ariaLabel={nav.homeAria} />
      <button
        ref={menuButtonRef}
        className="mt"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="nv"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {nav.menu}
      </button>
      <nav
        id="nv"
        className={menuOpen ? "open" : undefined}
        aria-label={nav.mainAria}
      >
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {nav[link.key]}
          </a>
        ))}
        <a className="btn" href="#contact">
          {nav.enquiry}
        </a>
      </nav>
    </header>
  );
};
