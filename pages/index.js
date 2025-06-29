import React from "react";
import SEO from "components/seo/seo";
import Nav from "/components/nav/nav";
import Carousel from "/components/carousel/Carousel";

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

  return (
    <>
      <SEO site={site} />
      <Nav />

      <main className="mx-auto my-12 flex max-w-[1422px] flex-col justify-center items-center sm:my-6 xl:my-6 3xl:my-12">
        <div className="flex flex-col h-fit my-auto">
          <div className="z-1 text-center font-abril text-[4rem] font-extrabold uppercase leading-none text-white sm:text-[4.8rem] xl:text-[5.6rem] 3xl:text-[8.4rem]">
            Welcome
          </div>

          <div className="z-1 mb-6 px-3 text-center sm:px-0">
            <h3>
              Thank you for checking out my portfolio. This version is in-process.
            </h3>
            <h3>
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
        </div>


        {/*<div className="mx-auto mt-6 w-11/12 sm:mt-20 ">*/}
        {/*  <Carousel images={images} />*/}
        {/*</div>*/}
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
