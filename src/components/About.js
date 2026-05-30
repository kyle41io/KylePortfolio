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
            <h2 className='mb-4 text-lg font-bold uppercase text-myblue/90 dark:text-primaryDark dark:text-shadow-DarkShadow'>Biography</h2>
            <p className='font-medium text-dark md:text-center sm:text-xs dark:text-light'>
              - Hi, I&#39;m Kyle Nguyen, a software engineer based in Hanoi with 4+ years of experience
              building web applications. I&#39;ve worked across the stack — from React and Node.js on
              the front end to ASP.NET, Django, and Python on the back end — across multiple
              companies and real-world products.
            </p>
            <p className='font-medium text-dark md:text-center sm:text-xs dark:text-light my-4'>
              - I bring discipline and strong logical thinking to everything I build. I care about
              writing clean, maintainable code and I&#39;m always looking to improve — whether through
              code reviews, new frameworks, or courses. Recently I completed CS50x from Harvard and
              earned a certificate in Building with the Claude API from Anthropic.
            </p>
            <p className='font-medium text-dark md:text-center sm:text-xs dark:text-light'>
              - I enjoy working in collaborative teams where ideas are shared openly. I approach every
              project with curiosity and a willingness to take ownership — not just completing tasks,
              but contributing to the product as a whole. There&#39;s always more to learn, and that&#39;s
              exactly what keeps me motivated.
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
                <AnimatedNumbers  value={1000}/>+</span>
              <h2 className='text-xl sm:text-lg font-medium text-dark/75 dark:text-light/90'>Satisfied Clients</h2>
            </div>
            <div className='flex flex-col items-end sm:items-center justify-center'>
              <span className='inline-block text-7xl md:text-6xl sm:text-4xl font-bold text-dark dark:text-light'>
              <AnimatedNumbers  value={30}/>+</span>
              <h2 className='text-xl sm:text-lg font-medium text-dark/75 dark:text-light/90'>Projects Completed</h2>
            </div>
            <div className='flex flex-col items-end sm:items-center justify-center'>
              <span className='inline-block text-7xl md:text-6xl sm:text-4xl font-bold text-dark dark:text-light'>
              <AnimatedNumbers  value={4}/>+</span>
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