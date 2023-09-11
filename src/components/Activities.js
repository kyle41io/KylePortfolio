import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'
import Education from './Education'
import AnimatedText from './AnimatedText'

const Details = ({position, company, companyLink, time, address, work}) => {

  const ref = useRef(null)

  return ( 
    <li ref={ref} className='my-8 md: first:mt-0 last:mb-0 mx-auto w-[60%] md:w-[80%] sm:w-[90%] flex flex-col items-center justify-between'>
      <LiIcon reference={ref} />
      <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
        <h3 className='capitalize font-bold text-2xl text-dark dark:text-light'>{position}&nbsp;<a href={companyLink}
        target="_blank" className='text-myblue dark:text-primaryDark dark:text-shadow-DarkShadow capitalize'>@{company}</a></h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/90 '>
          {time} | {address}
        </span>
        <p className='font-medium w-full text-dark dark:text-light'>{work}</p>
      </motion.div>
    </li>)
 
}

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  
  return (
    <>
    <div id='activities' className='my-64'>
      
      <AnimatedText text="Experience" className='mb-16'/>
      <div ref={ref} className='w-[75%] mx-auto relative'>
      
        {/* <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/> */}

        <ul className='w-full flex flex-col items-start justify-between ml-10 md:ml-5 sm:ml-2'>
          <Details position="Software Engineer" company="KPIM" companyLink="https://kpim.vn"  time="3/2023 - Present" address="Tay Ho, Ha Noi"
          work="The begining period, I participated in the company's intern training program, analyzed system design and built my own idea projects based on Power Apps (MS low-code app building system). Then I joined to contribute to the company product. I was responsible for building RestFul API and Unit testing for the back-end of the E-learning system" />
        </ul>        

      </div>
    </div>
    <Education />
    </>
    
  )
}

export default Experience