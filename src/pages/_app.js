import '@/styles/globals.css'
import Head from 'next/head'
import {Montserrat} from "next/font/google"
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import About from '@/components/About'
import ToTop from '@/components/ToTop'
import Experience from '@/components/Activities'
import Projects from '@/components/Projects'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} !scroll-smooth font-mont bg-light w-full min-h-screen dark:bg-dark overflow-x-hidden`}>
        <NavBar />
        <Component {...pageProps} />
        <About />
        <Experience />
        <Projects />
        <ToTop />
        <Footer />
      </main>
    </>
    
    )

 
}
