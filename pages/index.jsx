import React, { useRef } from "react";
import SEO from "components/seo/seo";
import Nav from "/components/nav/nav";
// import Carousel from "/components/carousel/Carousel";
// import CapsuleBox from '/components/capsuleBox/CapsuleBox';
import Contact from "/components/contact/Contact";
// import Background from "/components/background/background";
// import { cn } from "@/lib/utils";

import { useScroll, useTransform } from "framer-motion";
// import { WavyBackground } from "/components/ui/wavy-background";
// import { LampContainer } from "/components/ui/lamp";
import { Sparkles } from "/components/ui/sparkle";


const images = [
    "https://duruthemes.com/demo/html/fd/images/slider/01.jpg",
    "https://duruthemes.com/demo/html/fd/images/slider/02.jpg",
    "https://duruthemes.com/demo/html/fd/images/slider/03.jpg",
];

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

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <>
      <SEO site={site} />

      {/* <Background /> */}

      <Nav />

      <div className="absolute inset-0 h-full w-full bg-black bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <main className="mx-auto my-6 flex h-fit max-w-[1422px] flex-col justify-center">
        <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="z-1 mt-12 mb-6">
            <div className="z-1 text-center text-2xl font-extrabold uppercase leading-none tracking-wide text-white md:text-4xl lg:text-7xl">
              Welcome
            </div>
            <p className="inter-var mt-4 text-center text-base font-normal text-white md:text-lg">
              Thank you for checking out my portfolio. This version is in-process.
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
          
          <div className="relative h-6 w-[60rem] mx-auto">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
            <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
            <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
          </div>
        </div>

        {/* <WavyBackground className="max-w-4xl mx-auto my-auto"></WavyBackground> */}

        {/* <div className="w-11/12 mx-auto mt-6">
            <Carousel images={images}/>
        </div>  */}

        {/* <CapsuleBox /> */}
        <div className="absolute bottom-8 mx-auto w-full max-w-[1422px]">
          <Contact />
        </div>
      </main>

      <footer className="absolute bottom-0 w-full">
        <div className="z-10 mx-auto flex w-full max-w-[1422px] justify-between border-t-[1px] border-gray-200 px-3 py-2 font-neueHaas text-[10px] font-thin uppercase tracking-[0.5px] sm:px-6 sm:text-xs">
          <div className="w-fit">The personal site & portfolio</div>
          <div className="w-fit">Anh Bernhardt</div>
        </div>
      </footer>
    </>
  );
}
