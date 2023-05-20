import React from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import { useRouter } from 'next/router'
import {LinkedInIcon, GithubIcon, FacebookIcon, SunIcon, MoonIcon} from './Icons'
import {motion} from "framer-motion"
import useThemeSwitcher from './hooks/useThemeSwitcher'


const CustomLink = ({className="", href="", title }) => {
  const router = useRouter();
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-[2px] group-hover:w-full transition-[width] ease duration-300 dark:bg-light
      ${router.asPath === href ? 'w-full' : 'w-0'}`}>
        &nbsp;
      </span>
    </Link>
  )
}
const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
      <nav>
        <CustomLink href="/" title="Home" className='mr-4'/>
        <CustomLink href="#about" title="About" className='mx-4'/>
        <CustomLink href="#activities" title="Activities" className='mx-4'/>
        <CustomLink href="#projects" title="Projects" className='ml-4'/>
      </nav>
      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href="https://www.facebook.com/kinekine41" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.8}} className='w-8 mx-3'><FacebookIcon /></motion.a>
        <motion.a href="https://github.com/kyle41io" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.8}} className='w-8 mx-3'><GithubIcon /></motion.a>
        <motion.a href="https://www.linkedin.com/in/kyleincontact" target={"_blank"} whileHover={{y:-2}} whileTap={{scale:0.8}} className='w-7 mx-3'><LinkedInIcon /></motion.a>

        <button onClick={() => setMode( mode === "light" ? "dark" : "light")}
        className={`ml-5 flex items-center justify-center rounded-full p-1.5 ${mode === "light" ?"bg-dark text-light" : "bg-light text-dark"}`}>
          {mode === "dark" ? <MoonIcon className={"fill-dark"} /> :
          <SunIcon className={"fill-dark"} />}
        </button>

      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'><Logo /></div>
    </header>
  )
}

export default NavBar