import React from 'react'
import SEO from "components/seo/seo"
import Nav from "/components/nav/nav";
import Carousel from "/components/carousel/Carousel";


const images = [
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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

            <div className="relative flex flex-col my-12 max-w-[1422px] justify-center mx-auto">
                <div className="font-josef text-[4.2rem] sm:text-[9rem] 3xl:text-[8.4rem] text-[#7B8898] font-extrabold uppercase text-center">
                    Welcome
                </div>

                <div className="px-3 sm:px-0 text-center">
                    <h3>Thank you for checking out my portfolio. This version is in-process.</h3>
                    <h3>In the mean time, please visit {' '}
                        <a href="https://anhbernhardt.com"
                           target="_blank"
                           rel="noreferrer"
                           className="text-[#FF6A67] hover:text-orange-400">
                            anhbernhart.com</a>
                    </h3>
                </div>


                <div className="max-w-[1422px] h-11/12 sm:h-2/3 mt-6 sm:my-12 3xl:my-12">
                    <Carousel images={images}/>
                </div>
            </div>


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
