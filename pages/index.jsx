import React, { useRef } from "react";
import SEO from "components/seo/seo";
import Nav from "/components/nav/nav";
// import GravityContact from "/components/contact/GravityContact";
import Background from "/components/background/background";
// import { useIsVisible } from "/utils/useIsVisible";
// import { cn } from "@/lib/utils";
import { useScroll, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

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

  // const ref = useRef(null);

  return (
    <>
      <SEO site={site} />

      {/* <div className="absolute inset-0 h-full w-full bg-black bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:24px_24px]"></div> */}
      <Background />
      <Nav />
      <main className="mx-auto my-6 flex h-[100vh] flex-col justify-center">
        <Section>
          <div className="flex w-full flex-col items-center justify-center rounded-md">
            <div className="z-1 mb-6 mt-12">
              <div className="z-1 text-center text-2xl font-extrabold uppercase leading-none tracking-wide text-white md:text-4xl lg:text-7xl">
                Welcome
              </div>
              <p className="inter-var mt-4 text-center text-base font-normal text-white md:text-lg">
                Thank you for checking out my portfolio. This version is
                in-process.
              </p>
              <p className="inter-var text-center text-base font-normal text-white md:text-lg">
                In the mean time, please visit{" "}
                <a
                  href="https://anhbernhardt.com"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer text-[#FF6A67] hover:text-orange-400"
                >
                  anhbernhardt.com
                </a>
              </p>
            </div>

            <div className="w-full relative mx-auto h-6 max-w-[60rem]">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
              <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
              <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
              <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
            </div>
          </div>
        </Section>
      </main>

      <Section>
        <footer id="contact" className="w-full">
          <div className="z-10 mx-auto flex w-full justify-between px-4 py-2 font-neueHaas  tracking-[0.5px] sm:px-6 lg:px-8">
            <div className="flex w-fit gap-4 opacity-50">
              <a
                href="https://codepen.io/ahbernhardt"
                target="_blank"
                rel="nopreferrer noreopened"
              >
                <FontAwesomeIcon
                  icon={faCodepen}
                  className="aspect-square w-4 sm:w-6"
                />
              </a>
              <a
                href="https://github.com/ahbernhardt"
                target="_blank"
                rel="nopreferrer noreopened"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="aspect-square w-4 sm:w-6"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/anhbernhardt/"
                target="_blank"
                rel="nopreferrer noreopened"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="aspect-square w-4 sm:w-6"
                />
              </a>
            </div>
            <div className="my-auto w-fit flex flex-col gap-2 text-base sm:text-lg font-medium text-right">
              <p className="leading-none opacity-75">© Anh Bernhardt</p>
              <p className="font-thin leading-none text-xs sm:text-base opacity-40">Creative Web Developer</p>
            </div>
          </div>
        </footer>
      </Section>
    </>
  );
}
