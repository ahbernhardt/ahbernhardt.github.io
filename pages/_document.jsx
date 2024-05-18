import React from "react";
import { Html, Head, NextScript, Main } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-[#0c0c0c]">
      <Head>
        {/* eslint-disable-next-line @next/next/google-font-display */}
        <script src='https://cdn.jsdelivr.net/npm/pathseg@1.2.1/pathseg.min.js'/>
        <script src='https://cdn.jsdelivr.net/npm/poly-decomp@0.3.0/build/decomp.min.js'/>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,400;0,700;0,900;1,100;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}