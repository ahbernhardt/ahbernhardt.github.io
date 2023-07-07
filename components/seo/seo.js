import React from 'react'
import Head from "next/head";

const seo = ({ site }) => {
    const title = `${site.title} | Anh Bernhardt`;
    return site ? (
        <Head>
            <meta charSet="UTF-8" />
            <title>{title}</title>
            <meta name="description" content={site.description} />
            <meta name="author" content="Anh Bernhardt" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content={site.title} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={site.url} />
            <meta property="og:description" content={site.description} />
            <meta property="og:image" content={site.image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="twitter:image" content={site.image} />
            <link rel="icon" href="/favicon/favicon.ico" />
        </Head>
    ) : (
        <Head>
            <meta charSet="UTF-8" />
            <title>Anh Bernhardt</title>
            <meta name="description" content="Welcome to my portfolio - Anh Bernhardt" />
            <meta name="author" content="Anh Bernhardt" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content="Welcome to my portfolio - Anh Bernhardt" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://ahbernhardt.github.io/" />
            <meta property="og:description" content="Welcome to my portfolio - Anh Bernhardt" />
            <link
                rel="icon"
                href="https://ahbernhardt.github.io/favicon/favicon.ico"
            />
        </Head>
    );
};

export default seo;