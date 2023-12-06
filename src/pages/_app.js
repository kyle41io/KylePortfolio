import React from "react";
import { Montserrat } from "next/font/google";

import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import ToTop from "@/components/ToTop";
import Experience from "@/components/Activities";
import Projects from "@/components/Projects";
import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});
export default function App({ Component, pageProps }) {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} !scroll-smooth font-mont bg-light w-full min-h-screen dark:bg-dark overflow-x-hidden`}
      >
        <NavBar />
        <Component {...pageProps} />
        <About />
        <Experience />
        <Projects />
        {scrollPosition > 300 && <ToTop />}
        <Footer />
      </main>
    </>
  );
}
