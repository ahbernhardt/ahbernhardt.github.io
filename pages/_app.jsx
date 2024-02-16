import React from 'react'
import '/styles/globals.css'
import '/styles/fonts.css'
import '/styles/background.css'
import dynamic from 'next/dynamic'
import Script from 'next/script'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});


export default function App({ Component, pageProps }) {
  return (
      <>
        <Script src='https://cdn.jsdelivr.net/npm/pathseg@1.2.1/pathseg.min.js'/>
        <Component {...pageProps} />
          <AnimatedCursor
              color="#fff"
              innerSize={8}
              outerSize={36}
              innerScale={1}
              outerScale={2}
              outerAlpha={0}
              hasBlendMode={true}
              innerStyle={{
                  backgroundColor: '#fff'
              }}
              outerStyle={{
                  border: '1px solid #fff'
              }}
          />
      </>
  )
}
