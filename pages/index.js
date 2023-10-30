import React from 'react'
import SEO from "components/seo/seo"
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
            <SEO site={site}/>
            <Nav/>

            <main className="flex flex-col my-12 sm:my-6 xl:my-6 3xl:my-12 max-w-[1422px] justify-center mx-auto">
                <div className="font-abril text-[4rem] sm:text-[4.8rem] xl:text-[5.6rem] 3xl:text-[8.4rem] text-white font-extrabold uppercase text-center leading-none">
                    Welcome
                </div>

                <div className="px-3 sm:px-0 text-center  mb-6">
                    <h3>Thank you for checking out my portfolio. This version is in-process.</h3>
                    <h3>In the mean time, please visit {' '}
                        <a href="https://anhbernhardt.com"
                           target="_blank"
                           rel="noreferrer"
                           className="text-[#FF6A67] hover:text-orange-400">
                            anhbernhart.com</a>
                    </h3>
                </div>


                <div className="w-11/12 mx-auto mt-6 sm:mt-20 ">
                    <Carousel images={images}/>
                </div>
            </main>


            <footer className="absolute bottom-0 w-full">
                <div className="w-full z-10 font-neueHaas font-thin mx-auto max-w-[1422px] py-2 px-3 sm:px-6 flex text-[10px] sm:text-xs tracking-[0.5px] border-t-[1px] border-gray-200 uppercase justify-between">
                    <div className="w-fit">
                        The personal site & portfolio
                    </div>
                    <div className="w-fit">
                        Anh Bernhardt
                    </div>
                </div>
            </footer>
        </>
    )
}
