import React from 'react'
import SEO from "components/seo/seo"
import Image from "next/legacy/image"
import Nav from "/components/nav/nav";

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
    const navItems = [
        // {name: "home",link: ""},
        {name: "about",link: "about"},
        {name: "work",link: "work"},
    ]
    return (
        <>
            <SEO site={site}/>
            <main className="max-w-4xl mx-auto justify-center overflow-hidden">
                <Nav navItems={navItems}/>
                <div className={`flex h-screen flex-col items-center justify-around`}>
                    <div className="relative text-center flex flex-col place-items-center">
                        <div className="relative aspect-square w-1/3 bg-contain justify-center object-contain">
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image src="/favicon/android-chrome-192x192.png"
                                   layout="fill"
                                   objectFit="contain"/>
                        </div>
                        <h1 className="font-bold">Xin Chào or Hello</h1>
                        <h3>Thank you for checking out my portfolio. This version is in-process.</h3>

                        <h3>In the mean time, please visit {' '}
                            <a href="https://anhbernhardt.com"
                               target="_blank"
                               rel="noreferrer"
                               className="text-orange-300 hover:text-orange-400">
                                anhbernhart.com</a>
                        </h3>
                    </div>
                </div>
            </main>
        </>
    )
}
