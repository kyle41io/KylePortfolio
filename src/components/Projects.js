import React from 'react'
import Layout from './Layout'
import AnimatedText from './AnimatedText'
import { Link } from 'react-scroll'
import Image from 'next/image'
import { GithubIcon } from './Icons'
import project1 from '../../public/images/projects/EntranceTest_Pj.jpeg'
import project2 from '../../public/images/projects/First_blog.png'
import project3 from '../../public/images/projects/Kyle_Audio.png'
import project4 from '../../public/images/projects/MovieAPI.png'


import { motion } from 'framer-motion'

const MotionImage = motion(Image);


const FeaturedProject = ({type, title, summary, img, link, github }) => {

  return(
    <div>
      <article className='w-full md:w-[90%] flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12 relative rounded-br-2xl
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'> 

        <div className='absolute top-0 -right-3 -z-10 w-[100.5%] sm:w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl '/>

        <a href={link} target="_blank" className='ml-7 lg:ml-4 sm:ml-1 w-2/5 lg:w-full cursor-pointer overflow-hidden rounded-lg'>
          <MotionImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}}
          priority sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"/>
        </a>

        <div className='w-1/2 lg:w-full flex flex-col items-start justify-between pl-6'> 
          <span className='font-medium text-myblue dark:text-primaryDark dark:text-shadow-DarkShadow text-xl md:text-lg sm:text-base lg:pt-4 md:mt-2'>{type}</span>
          <a href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl md:text-3xl sm:text-2xl font-bold text-dark dark:text-light'>{title}</h2>
          </a>

          <p className='my-2 font-medium text-dark dark:text-light '>{summary}</p>
          <div className='mt-2 flex items-center'>
            <a href={github} target="_blank" className='w-10'><GithubIcon /> </a>
            <a href={link} target="_blank" className='ml-12 rounded-lg bg-myblue dark:bg-primaryDark text-yellow-200 dark:text-dark/80 p-1 sm:px-2 px-4 text-lg sm:text-base font-semibold'>Visit Project</a>

          </div>
        </div>
      </article>
    </div>
  )
}

const Project =({type, title, img, link, github}) => {
  return(
    <article className='w-[90%] flex flex-col items-center justify-between rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative shadow-2xl ml-5 sm:ml-2 rounded-br-2xl'>

        <div className='absolute top-0 -right-3 -z-10 w-[102%] sm:w-[102.5%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl'/>

        <a href={link} target="_blank" className='ml-2 sm:ml-1 w-full cursor-pointer overflow-hidden rounded-lg'>
          <MotionImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}}/>
        </a>

        <div className='w-full flex flex-col items-start justify-between mt-4'> 
          <span className='font-medium text-myblue dark:text-primaryDark dark:text-shadow-DarkShadow text-xl md:text-lg sm:text-base'>{type}</span>
          <a href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl md:text-2xl font-bold text-dark dark:text-light'>{title}</h2>
          </a>
          <div className='w-full mt-2 flex items-center justify-between'>
            <a href={github} target="_blank" className='w-10 ml-4'><GithubIcon /> </a>
            <a href={link} target="_blank" className='mx-4 rounded-lg bg-myblue dark:bg-primaryDark text-yellow-200 dark:text-dark/80 p-1 sm:px-2 px-4 text-lg sm:text-base font-semibold'>Visit</a>

          </div>
        </div>
    </article>
  )
}
const Projects = () => {
  return (
    <div id='projects' className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
      <Layout>
        <AnimatedText text="My Stunning Corner" className='mb-20' />

        <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 '>

          <div className='col-span-12'>
            <FeaturedProject title="Entrance Test" summary="An application so that candidates can check their competencies when applying to the company. Done using NextJS, EFFCore, PostgreSQL,... 
            ( Admin: kien@gmail.com Password: Kien@123 )" link="/" type="Featured Project" img={project1} github="https://github.com/kyle41io/EntranceTest_FE" />
          </div>
          <div className='col-span-6 md:col-span-12'>

            <Project title="First blog" link="https://kyle41io.github.io/1stBlog/" type="Learning Project" img={project2} github="https://github.com/kyle41io/1stBlog" />

          </div>
          <div className='col-span-6 md:col-span-12'>
            <Project title="Basic Audio"  link="https://kyleaudio.vercel.app/" type="Learning Project" img={project3} github="https://github.com/kyle41io/Kyle-Audio" />

          </div>
          <div className='col-span-12'>
            <FeaturedProject title="Movie API" summary="Basic project. Learning to use API from TMDB and new NextJS 13. Understanding the working flow of a fullstack project." link="https://movie-api-kyle41io.vercel.app/" type="Featured Project" img={project4} github="https://github.com/kyle41io/MovieAPI" />

          </div>

        </div>
      </Layout>
    </div>
  )
}

export default Projects