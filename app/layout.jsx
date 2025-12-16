"use client";
import Head from "next/head";
import React from "react";
import "./globals.css";
import "./styles/fonts.css";
import "./styles/background.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-hexNight">
      <Head />
      <body>{children}</body>
    </html>
  );
}
