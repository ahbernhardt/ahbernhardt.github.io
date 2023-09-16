import React from 'react'
import SEO from "components/seo/seo"
// import Image from "next/legacy/image"
import Nav from "/components/nav/nav";
import Parallax from "/components/parallax/parallax";

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

            <Parallax />

            <main className="parallax__layer parallax__layer--foreground">
                <Nav/>
                <section className="w-full h-fit mx-auto text-center my-44">
                    <div className="font-josef text-[5.6rem] sm:text-[9rem] 3xl:text-[8.4rem] text-[#7B8898] font-bold italic uppercase">
                        Welcome
                    </div>

                    <div className="h-fit z-2">
                        <h3>Thank you for checking out my portfolio. This version is in-process.</h3>
                        <h3>In the mean time, please visit {' '}
                            <a href="https://anhbernhardt.com"
                               target="_blank"
                               rel="noreferrer"
                               className="text-[#FF6A67] hover:text-orange-400">
                                anhbernhart.com</a>
                        </h3>
                    </div>

                </section>
                <section className="w-full h-fit mx-auto text-center ">
                    {/*<div className="font-josef text-[5.6rem] sm:text-[9rem] 3xl:text-[8.4rem] text-[#7B8898] font-bold italic uppercase">*/}
                    {/*    Welcome*/}
                    {/*</div>*/}

                    {/*<div className="h-fit z-2">*/}
                    {/*    <h3>Thank you for checking out my portfolio. This version is in-process.</h3>*/}
                    {/*    <h3>In the mean time, please visit {' '}*/}
                    {/*        <a href="https://anhbernhardt.com"*/}
                    {/*           target="_blank"*/}
                    {/*           rel="noreferrer"*/}
                    {/*           className="text-[#FF6A67] hover:text-orange-400">*/}
                    {/*            anhbernhart.com</a>*/}
                    {/*    </h3>*/}
                    {/*</div>*/}

                    <div className="mt-6 flex py-2 w-full text-xs tracking-[0.5px] font-neueHaas font-thin border-t-[1px] border-gray-200 uppercase justify-between">
                       <div className="w-fit">
                           The personal site & portfolio
                       </div>
                        <div className="w-fit">
                            Anh Bernhardt
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
