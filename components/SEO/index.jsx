import React from 'react'
import Head from "next/head";

const SEO = ({ site }) => {
    const title = site.title ? `${site.title} | Anh Bernhardt` : "Anh Bernhardt";
    return(
        <Head>
            <meta charSet="UTF-8" />
            <title>{title}</title>
            <meta name="description" content={site.description ? site.description : "Welcome to my portfolio - Anh Bernhardt"} />
            <meta name="author" content="Anh Bernhardt" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content={site.title ? site.title : "Anh Bernhardt"} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={site.url ? site.url :  "https://ahbernhardt.github.io/"} />
            <meta property="og:description" content={site.description ? site.description : "Welcome to my portfolio - Anh Bernhardt"} />
            <meta property="og:image" content={site.image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <link rel="icon" href="https://ahbernhardt.github.io/favicon/favicon.ico" />
        </Head>
    );
};

export default SEO;