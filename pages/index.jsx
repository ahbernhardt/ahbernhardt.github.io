import React, { Fragment } from "react";
import SmoothScroll from "/components/SmoothScroll";
import SEO from "components/SEO";
import Nav from "/components/Nav";
import { Section } from "/components/Section";
import Projects from "/components/Projects";
import MaskText from "/components/MaskText";
import Footer from "/components/Footer";
import Background from "/components/Background";
import About from "/components/About";
import Contact from "/components/Contact";

export default function Home() {
  const site = {
    title: "Home",
    author: "Anh Bernhardt",
    description: "Welcome to my portfolio",
    url: "https://ahbernhardt.github.io/",
    social: {
      cardType: "summary_large_image",
      url: "https://ahbernhardt.github.io",
    },
    image: "",
  };

  return (
    <SmoothScroll>
      <SEO site={site} />
      <Nav />
      <Background />
      <Section className="flex mt-[10vh] h-[35vh] justify-center">
        <MaskText
          words="Welcome"
          className="z-1 text-center text-3xl font-extrabold uppercase leading-none tracking-[.75rem] sm:text-5xl lg:text-7xl 3xl:text-9xl"
        />
        <div className="my-auto flex w-full flex-col items-center justify-center px-[12px] sm:px-[24px]">
          <p className="inter-var mt-4 text-center text-base font-normal text-[#dedede] md:text-lg">
            Thank you for checking out my portfolio. This version is in-process.
          </p>
          <p className="inter-var text-center text-base font-normal text-[#dedede] md:text-lg">
            In the mean time, please visit{" "}
            <a
              href="https://anhbernhardt.com"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-sky-500 hover:text-[#455CE9]"
            >
              anhbernhardt.com
            </a>
          </p>

          <div className="relative mt-6 h-6 w-full max-w-[50vw]">
            <div className="absolute inset-x-10 top-0 h-[5px] w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
            <div className="absolute inset-x-10 top-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            <div className="inset-x-50 absolute top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
            <div className="inset-x-50 absolute top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
          </div>
        </div>
      </Section>
      <Section className="my-[24vh]">
        <About />
      </Section>

      <Section className="mt-[30vh]">
        <Projects />
      </Section>
      

      <Section className="mt-[30vh]">
        <Contact />
      </Section>
    </SmoothScroll>
  );
}
