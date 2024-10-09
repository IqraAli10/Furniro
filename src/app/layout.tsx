// src/app/layout.tsx

"use client";
import { useEffect, useState } from 'react';
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingPage from './loading/page'; // Loading page ko import karo
import Head from "next/head";
import { metadata } from './metadata'; // Metadata ko import karo

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // 3 seconds baad loading ko false karega
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Clean up function
  }, []);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favico.png" /> {/* Favicon */}
        <title>{metadata.title}</title> {/* Title */}
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {loading ? <LoadingPage /> : children} {/* Agar loading hai to loading page dikhaye, nahi to children */}
        <Footer />
      </body>
    </html>
  );
}
