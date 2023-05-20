import React from 'react'
import {motion} from "framer-motion"

const Skill = ({name, x, y}) => {

  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light shadow-dark cursor-pointer absolute py-3 px-6' whileHover={{scale:1.1}} 
    initial={{x:0,y:0}} whileInView={{x:x, y:y}} transition={{duration:1}} viewport={{once:true}} > {name}</motion.div>)
}

const Skills = () => {
  return (
    <>
    <h2 className=' font-bold text-6xl mt-64 w-full text-center text-dark/80'>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
      <motion.div className='flex items-center justify-center rounded-full font-semibold bg-[#1E3A8A] text-yellow-200 text-xl p-4 shadow-dark cursor-pointer ' whileHover={{ backgroundColor:["#1E3A8A", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#1E3A8A"], transition:{duration: 1.5, repeat: Infinity}}}
      >Developer</motion.div>
      <Skill name="CSS" x="-8vw" y="-10vw" />
      <Skill name="HTML" x="-19vw" y="0vw" />
      <Skill name="JavaScript" x="12vw" y="2vw" />
      <Skill name="ReactJS" x="-1vw" y="11.5vw" />
      <Skill name="NextJS" x="-20vw" y="-15vw" />
      <Skill name="Figma" x="15vw" y="-12vw" />
      <Skill name="TailwindCSS" x="-28vw" y="8vw" />
      <Skill name="Java" x="31vw" y="-5vw" />
      <Skill name="PostgreSQL" x="22vw" y="14vw" />
      <Skill name="C/C++" x="-2vw" y="-19vw" />
      <Skill name=".NET" x="-10vw" y="18vw" />

    </div>
      
    </>
  )
}

export default Skills