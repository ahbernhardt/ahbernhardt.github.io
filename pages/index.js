import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import SEO from "components/seo/seo"
import Image from "next/image"

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
        <main
          className={`flex min-h-screen flex-col items-center justify-around ${inter.className}`}
        >
          <div className="relative text-center flex flex-col place-items-center before:absolute before:aspect-square before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:aspect-square after:w-[240px] after:translate-x-1/4 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">

              <div className="relative aspect-square w-1/3 bg-contain justify-center object-contain">
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
        </main>
        </>
  )
}
