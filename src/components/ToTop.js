import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const ToTop = () => {
  return (
    <div className='fixed right-4 bottom-4 md:top-0 md:bottom-auto md:right-0 flex items-center justify-center overflow-hidden z-20'>
      <div className='w-48 md:w-28 sm:w-24 h-auto flex items-center justify-center relative'>
        <CircularText className={'fill-dark dark:fill-light animate-spin-slow'} />
        <a href="#" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light text-light dark:text-dark shadow-md border border-solid border-dark dark:border-light w-20 h-20 
        sm:w-10 sm:h-10 md:text-[10px] rounded-full font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark  hover:dark:text-light scroll-smooth'>To Top</a>
      </div>
    </div>
  )
}

export default ToTop