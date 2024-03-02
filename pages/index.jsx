import React, { Fragment } from "react";
import SEO from "components/seo/seo";
import Nav from "/components/nav/nav";
// import Carousel from "/components/carousel/Carousel";
// import CapsuleBox from '/components/capsuleBox/CapsuleBox';
import Contact from "/components/contact/Contact";
import Background from "/components/background/background";
import { DotBackground } from "/components/background/dotgrid";
import { cn } from "@/lib/utils";

// const images = [
//     "https://duruthemes.com/demo/html/fd/images/slider/01.jpg",
//     "https://duruthemes.com/demo/html/fd/images/slider/02.jpg",
//     "https://duruthemes.com/demo/html/fd/images/slider/03.jpg",
// ];

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
    <>
      <SEO site={site} />

      {/* <Background /> */}

      <Nav />

      <div class="absolute inset-0 h-full w-full bg-black bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <main className="mx-auto my-6 flex h-fit max-w-[1422px] flex-col justify-center">
        <div className="z-1 text-center text-[2rem] font-extrabold uppercase leading-none text-white sm:text-[2.8rem] lg:text-[3.2rem] tracking-wide">
          Welcome
        </div>

        <div className="z-1 mb-6 px-3 text-center sm:px-0">
          <h3 className="text-[12px] sm:text-base">
            Thank you for checking out my portfolio. This version is in-process.
          </h3>
          <h3 className="text-[12px] sm:text-base">
            In the mean time, please visit{" "}
            <a
              href="https://anhbernhardt.com"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-[#FF6A67] hover:text-orange-400"
            >
              anhbernhardt.com
            </a>
          </h3>
        </div>

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
