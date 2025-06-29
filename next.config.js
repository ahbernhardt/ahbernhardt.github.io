/** @type {import('next').NextConfig} */
module.exports = {
  // distDir: 'build',
  output: "export",
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
    domains: ['ahbernhardt.github.io'],
    unoptimized: true
  },
}
