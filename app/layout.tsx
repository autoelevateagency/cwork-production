import type { Metadata } from "next";
import { Big_Shoulders, Instrument_Sans } from "next/font/google";
import { LocaleProvider } from "@/context/LocaleContext";
import { LogoDefs } from "@/components/Logo/Logo";
import { getDictionary, DEFAULT_LOCALE } from "@/data/dictionary";
import "./globals.css";

const display = Big_Shoulders({
  weight: ["800", "900"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Instrument_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const dictionary = getDictionary(DEFAULT_LOCALE);

export const metadata: Metadata = {
  title: dictionary.meta.title,
  description: dictionary.meta.description,
  openGraph: {
    title: dictionary.meta.ogTitle,
    description: dictionary.meta.ogDescription,
    type: "website",
  },
  other: {
    "theme-color": "#000000",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable}`}
    >
      <body>
        <LocaleProvider initialLocale={DEFAULT_LOCALE}>
          <LogoDefs />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
