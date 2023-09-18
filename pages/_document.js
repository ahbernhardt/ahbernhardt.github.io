import React from 'react'
import { Html, Head, NextScript } from 'next/document'
import Background from "/components/background/background";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
          {/* eslint-disable-next-line @next/next/google-font-display */}
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Josefin+Slab&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Background/>
        {/*<Main />*/}
        <NextScript />
      </body>
    </Html>
  )
}
