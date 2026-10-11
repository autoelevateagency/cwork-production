import type { ReactElement } from "react";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { Hero } from "@/components/sections/Hero/Hero";
import { Statement } from "@/components/sections/Statement/Statement";
import { Capabilities } from "@/components/sections/Capabilities/Capabilities";
import { Productions } from "@/components/sections/Productions/Productions";
import { Tech } from "@/components/sections/Tech/Tech";
import { Process } from "@/components/sections/Process/Process";
import { Cta } from "@/components/sections/Cta/Cta";
import { Enquiry } from "@/components/sections/Enquiry/Enquiry";

const Home = (): ReactElement => {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Statement />
        <Capabilities />
        <Productions />
        <Tech />
        <Process />
        <Cta />
        <Enquiry />
      </main>
      <Footer />
    </>
  );
};

export default Home;
