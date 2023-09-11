import Head from 'next/head'
import React from 'react'
import AnimatedText from './AnimatedText'
import Layout from './Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Skills from './Skills'

const AnimatedNumbers = ({value}) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {duration:3000});
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if(isInView){
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])
  
  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])
  
  return <span ref={ref}></span>
}

const About = () => {
  return (
    <div id='about' className='flex w-full flex-col items-center justify-center'>
      <Layout className='pt-16'>
        <AnimatedText text="To Infinity And Beyond!" className='mb-16'/>
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
          <div className='col-span-3 xl:col-span-4 md:col-span-8 flex flex-col items-start justify-start'>
            <h2 className='mb-4 text-lg font-bold uppercase text-myblue/90 dark:text-primaryDark dark:text-shadow-DarkShadow '>Biography</h2>
            <p className='font-medium text-dark md:text-center sm:text-xs dark:text-light'>- Hi, I&#39;m Kyle Nguyen, a fresher web developer. While I don&#39;t have a lot of experience yet, I am always eager to learn and grow in my field. I have worked on a few projects and have enjoyed the challenges that come with them.</p>
            <p className='font-medium text-dark md:text-center sm:text-xs dark:text-light my-4'>
            - Learning is a key part of my development as a web developer. I am constantly seeking out new opportunities to enhance my skills and knowledge. I am aware that there is still a lot for me to learn, and I am willing to put in the time and effort to keep improving.
            </p>
            <p className='font-medium text-dark md:text-center sm:text-xs dark:text-light'>- I am committed to doing my best in every project I work on, no matter how big or small. I approach each task with a sense of humility and a willingness to learn from others. I know that there is always room for improvement, and I am open to constructive feedback that can help me grow as a web developer.
            </p>
            
          </div>
          <div className='col-span-3 xl:col-span-4 md:col-span-8 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light '/>
            <Image src={profilePic} alt="Kyle Nguyen" className='w-full h-auto rounded-2xl'
            priority sizes="(max-width:768px) 80vw, (max-width:1200px) 50vw, 33vw"/>
          </div>
          <div className='col-span-2 xl:col-span-8 flex flex-col xl:flex-row  items-end justify-between'>
            <div className='flex flex-col items-end sm:items-center justify-center'>
              <span className='inline-block text-7xl md:text-6xl sm:text-4xl font-bold text-dark dark:text-light'>
                <AnimatedNumbers  value={100}/>+</span>
              <h2 className='text-xl sm:text-lg font-medium text-dark/75 dark:text-light/90'>Satisfied Clients</h2>
            </div>
            <div className='flex flex-col items-end sm:items-center justify-center'>
              <span className='inline-block text-7xl md:text-6xl sm:text-4xl font-bold text-dark dark:text-light'>
              <AnimatedNumbers  value={10}/>+</span>
              <h2 className='text-xl sm:text-lg font-medium text-dark/75 dark:text-light/90'>Projects Completed</h2>
            </div>
            <div className='flex flex-col items-end sm:items-center justify-center'>
              <span className='inline-block text-7xl md:text-6xl sm:text-4xl font-bold text-dark dark:text-light'>
              <AnimatedNumbers  value={1}/>+</span>
              <h2 className='text-xl sm:text-lg font-medium text-dark/75 dark:text-light/90'>Year Of Experience</h2>
            </div>
          </div>
        </div>
        <Skills />
      </Layout>
    </div>
  )
}

export default About