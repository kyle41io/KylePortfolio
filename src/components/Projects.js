import React from 'react'
import Layout from './Layout'
import AnimatedText from './AnimatedText'
import { Link } from 'react-scroll'
import Image from 'next/image'
import { GithubIcon } from './Icons'
import project1 from '../../public/images/projects/EntranceTest_Pj.png'
import project2 from '../../public/images/projects/First_blog.png'
import project3 from '../../public/images/projects/Kyle_Audio.png'
import project4 from '../../public/images/projects/MovieAPI.png'


import { motion } from 'framer-motion'

const MotionImage = motion(Image);


const FeaturedProject = ({type, title, summary, img, link, github }) => {

  return(
    <div>
      <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light bg-light dark:bg-dark shadow-2xl p-12 relative rounded-br-2xl'> 

        <div className='absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl '/>

        <a href={link} target="_blank" className='ml-7 w-2/5 cursor-pointer overflow-hidden rounded-lg'>
          <MotionImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}}
          priority sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"/>
        </a>

        <div className='w-1/2 flex flex-col items-start justify-between pl-6'> 
          <span className='font-medium text-myblue dark:text-primaryDark dark:text-shadow-DarkShadow text-xl'>{type}</span>
          <a href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold text-dark dark:text-light'>{title}</h2>
          </a>

          <p className='my-2 font-medium text-dark dark:text-light '>{summary}</p>
          <div className='mt-2 flex items-center'>
            <a href={github} target="_blank" className='w-10'><GithubIcon /> </a>
            <a href={link} target="_blank" className='ml-12 rounded-lg bg-myblue dark:bg-primaryDark text-yellow-200 dark:text-dark/80 p-1 px-4 text-lg font-semibold'>Visit Project</a>

          </div>
        </div>
      </article>
    </div>
  )
}

const Project =({type, title, img, link, github}) => {
  return(
    <article className='w-[90%] flex flex-col items-center justify-between rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative shadow-2xl ml-4 rounded-br-2xl'>

        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl'/>

        <a href={link} target="_blank" className='ml-2 w-full cursor-pointer overflow-hidden rounded-lg'>
          <MotionImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}}/>
        </a>

        <div className='w-full flex flex-col items-start justify-between mt-4'> 
          <span className='font-medium text-myblue dark:text-primaryDark dark:text-shadow-DarkShadow text-xl'>{type}</span>
          <a href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold text-dark dark:text-light'>{title}</h2>
          </a>
          <div className='w-full mt-2 flex items-center justify-between'>
            <a href={github} target="_blank" className='w-10 ml-4'><GithubIcon /> </a>
            <a href={link} target="_blank" className='mx-4 rounded-lg bg-myblue dark:bg-primaryDark text-yellow-200 dark:text-dark/80 p-1 px-4 text-lg font-semibold'>Visit</a>

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

        <div className='grid grid-cols-12 gap-24 gap-y-32 '>

          <div className='col-span-12'>
            <FeaturedProject title="Entrance Test App by Power Apps" summary="An application so that candidates can check their competencies when applying to the company. Done using Microsoft's low-code system - Power Apps. 
            ( Admin: kien@gmail.com Password: kpim0 )" link="https://apps.powerapps.com/play/e/default-41ab42a9-381b-48cf-8a85-720464922976/a/24f9b052-e11b-4c73-aa0b-89b00d4c3470?tenantId=41ab42a9-381b-48cf-8a85-720464922976" type="Featured Project" img={project1} github="#" />
          </div>
          <div className='col-span-6'>

            <Project title="First blog" link="https://kyle41io.github.io/1stBlog/" type="Learning Project" img={project2} github="https://github.com/kyle41io/1stBlog" />

          </div>
          <div className='col-span-6'>
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