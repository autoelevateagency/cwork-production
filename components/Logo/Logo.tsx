import type { ReactElement } from "react";

type LogoProps = {
  href?: string;
  className?: string;
  ariaLabel: string;
};

export const Logo = ({
  href = "#top",
  className = "logo",
  ariaLabel,
}: LogoProps): ReactElement => {
  return (
    <a className={className} href={href} aria-label={ariaLabel}>
      <svg viewBox="0 0 300 90" role="img" aria-label={ariaLabel}>
        <use href="#lg" />
      </svg>
    </a>
  );
};

export const LogoDefs = (): ReactElement => {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      aria-hidden="true"
    >
      <defs>
        <symbol id="lg" viewBox="0 0 300 90">
          <g stroke="#FB0002" strokeWidth="3" strokeLinecap="round">
            <path d="M18 52 8 14M24 50 26 6M30 52 48 14M33 56 62 36" />
          </g>
          <circle cx="26" cy="56" r="7" fill="#FF6302" />
          <text
            x="70"
            y="62"
            fontFamily="var(--font-display), Arial Narrow, Impact, sans-serif"
            fontWeight="900"
            fontSize="64"
            fill="#FF6302"
            textLength="220"
            lengthAdjust="spacingAndGlyphs"
          >
            CWORK
          </text>
          <rect x="70" y="70" width="220" height="7" fill="#FB0002" />
          <text
            x="70"
            y="88"
            fontFamily="var(--font-body), sans-serif"
            fontWeight="600"
            fontSize="10"
            letterSpacing="6"
            fill="#fff"
          >
            PRODUCTIONS
          </text>
        </symbol>
      </defs>
    </svg>
  );
};
