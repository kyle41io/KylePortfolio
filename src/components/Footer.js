import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link);
const Footer = () => {
  return (
    <footer className='w-full border-solid border-dark dark:border-light border-t-2 font-medium text-dark dark:text-light'>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center'>
          Build With <span className='text-primary text-2xl px-1'>&#9825;</span> By&nbsp; <MotionLink href="/" className='font-semibold text-[#1E3A8A] dark:text-primaryDark dark:text-shadow-DarkShadow' whileHover={{y:-2}}>Kyle Nguyen</MotionLink>
        </div>

      </Layout>
    </footer>
  )
}

export default Footer