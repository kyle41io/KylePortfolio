import { motion } from 'framer-motion';
import Link from 'next/link'
import React from 'react'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink href="/" className='w-20 h-10 text-[25px] bg-blue-900 text-yellow-200 flex items-center    justify-center rounded-md font-bold ' 
      whileHover={{scale:1.2, backgroundColor:["#1E3A8A", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#1E3A8A"], transition:{duration: 1.5, repeat: Infinity}}}
      >
        Kyle
      </MotionLink>
    </div>
  )
}

export default Logo