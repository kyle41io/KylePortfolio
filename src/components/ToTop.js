import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const ToTop = () => {
  return (
    <div className='fixed right-4 bottom-4 flex items-center justify-center overflow-hidden z-0'>
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText className={'fill-dark animate-spin-slow'} />
        <Link href="/" className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark scroll-smooth'>To Top</Link>
      </div>
    </div>
  )
}

export default ToTop