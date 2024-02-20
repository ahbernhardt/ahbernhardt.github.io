/** @type {import('next').NextConfig} */
module.exports = {
  // distDir: 'build',
  output: "export",
  reactStrictMode: true,
  // basePath:"/",                                  
  images: {
    loader: 'akamai',
    path: '/',
    domains: ['ahbernhardt.github.io'],
    unoptimized: true
  },
}
