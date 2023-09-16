import React from 'react'
import '/styles/globals.css'
import '/styles/fonts.css'
import '/styles/parallaxBG.css'

export default function App({ Component, pageProps }) {
  return (
      <>
        <Component {...pageProps} />
      </>
  )
}
