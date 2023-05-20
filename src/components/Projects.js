import React from 'react'
import Layout from './Layout'
import AnimatedText from './AnimatedText'
import { Link } from 'react-scroll'
import Image from 'next/image'
import { GithubIcon } from './Icons'
import project1 from '../../public/images/projects/EntranceTest_Pj.png'
import project2 from '../../public/images/projects/First_blog.png'
import project3 from '../../public/images/projects/Kyle_Audio.png'

import { motion } from 'framer-motion'

const MotionImage = motion(Image);


const FeaturedProject = ({type, title, summary, img, link, github }) => {

  return(
    <div>
      <article className='w-ful flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl'> 

        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl '/>

        <Link href={link} target="_blank" className='ml-7 w-2/5 cursor-pointer overflow-hidden rounded-lg'>
          <MotionImage src={img} alt={title} className='w-full h-auto ' whileHover={{scale:1.05}}/>
        </Link>

        <div className='w-1/2 flex flex-col items-start justify-between pl-6'> 
          <span className='font-medium text-myblue text-xl'>{type}</span>
          <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
          </Link>

          <p className='my-2 font-medium text-dark '>{summary}</p>
          <div className='mt-2 flex items-center'>
            <Link href={github} target="_blank" className='w-10'><GithubIcon /> </Link>
            <Link href={link} target="_blank" className='ml-4 rounded-lg bg-myblue text-yellow-200 p-1 px-4 text-lg font-semibold'>Visit Project</Link>

          </div>
        </div>
      </article>
    </div>
  )
}

const Project =({type, title, img, link, github}) => {
  return(
    <article className='w-[90%] flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative shadow-2xl ml-4 rounded-br-2xl'>

        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl'/>

        <Link href={link} target="_blank" className='ml-2 w-full cursor-pointer overflow-hidden rounded-lg'>
          <MotionImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}}/>
        </Link>

        <div className='w-full flex flex-col items-start justify-between mt-4'> 
          <span className='font-medium text-myblue text-xl'>{type}</span>
          <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
          </Link>
          <div className='w-full mt-2 flex items-center justify-between'>
            <Link href={github} target="_blank" className='w-10 ml-4'><GithubIcon /> </Link>
            <Link href={link} target="_blank" className='mx-4 rounded-lg bg-myblue text-yellow-200 p-1 px-4 text-lg font-semibold'>Visit</Link>

          </div>
        </div>
    </article>
  )
}
const Projects = () => {
  return (
    <div id='projects' className='w-full mb-16 flex flex-col items-center justify-center'>
      <Layout>
        <AnimatedText text="My Stunning Corner" className='mb-20' />

        <div className='grid grid-cols-12 gap-24 gap-y-32 '>

          <div className='col-span-12'>
            <FeaturedProject title="Entrance Test App by Power Apps" summary="An application so that candidates can check their competencies when applying to the company. Done using Microsoft's low-code system - Power Apps." link="https://apps.powerapps.com/play/e/default-41ab42a9-381b-48cf-8a85-720464922976/a/24f9b052-e11b-4c73-aa0b-89b00d4c3470?tenantId=41ab42a9-381b-48cf-8a85-720464922976" type="Featured Project" img={project1} github="/" />
          </div>
          <div className='col-span-6'>

            <Project title="First blog" link="https://kyle41io.github.io/1stBlog/" type="Learning Project" img={project2} github="https://github.com/kyle41io/1stBlog" />

          </div>
          <div className='col-span-6'>
            <Project title="Basic Audio"  link="https://kyleaudio.vercel.app/" type="Learning Project" img={project3} github="https://github.com/kyle41io/Kyle-Audio" />

          </div>
          <div className='col-span-12'>
            <FeaturedProject title="Entrance Test App by Power Apps" summary="An application so that candidates can check their competencies when applying to the company. Done using Microsoft's low-code system - Power Apps." link="https://apps.powerapps.com/play/e/default-41ab42a9-381b-48cf-8a85-720464922976/a/24f9b052-e11b-4c73-aa0b-89b00d4c3470?tenantId=41ab42a9-381b-48cf-8a85-720464922976" type="Featured Project" img={project1} github="/" />

          </div>

        </div>
      </Layout>
    </div>
  )
}

export default Projects