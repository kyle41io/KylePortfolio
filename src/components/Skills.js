import React from "react";
import { motion } from "framer-motion";
import ReactLogo from "./icons/ReactLogo";
import TailwindLogo from "./icons/TailwindLogo";
import DotNetLogo from "./icons/DotNetLogo";
import GitLogo from "./icons/GitLogo";
import PostgreLogo from "./icons/PostgreLogo";
import VueLogo from "./icons/VueLogo";
import NextLogo from "./icons/NextLogo";
import TypeLogo from "./icons/TypeLogo";
import FirebaseLogo from "./icons/FirebaseLogo";

const Skill = ({ logo, name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-slate-800 gap-2 dark:bg-light text-light dark:text-dark shadow-dark cursor-pointer absolute py-3 px-6 md:bg-transparent md:dark:bg-transparent md:text-dark md:dark:text-light md:text-sm"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {logo} {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className=" font-bold text-8xl md:text-5xl mt-64 w-full text-center text-dark/90 dark:text-light">
        Skills
      </h2>
      <div
        className="w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg
      lg:dark:bg-circularDarkLg md:bg-circularLightMd
      md:dark:bg-circularDarkMd sm:bg-circularLightSm
      sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-[#1E3A8A]  text-yellow-200 text-xl sm:text-base p-4 sm:p-2 shadow-dark dark:shadow-light cursor-pointer "
          whileHover={{
            backgroundColor: [
              "#1E3A8A",
              "rgba(131,58,180,1)",
              "rgba(253,29,29,1)",
              "rgba(252,176,69,1)",
              "rgba(131,58,180,1)",
              "#1E3A8A",
            ],
            transition: { duration: 1.5, repeat: Infinity },
          }}
        >
          Developer
        </motion.div>
        <Skill logo={<ReactLogo />} name="React Native" x="-8vw" y="-11vw" />
        <Skill logo={<GitLogo />} name="Git" x="-20vw" y="0vw" />
        <Skill name="Redux/Vuex" x="14vw" y="2vw" />
        <Skill logo={<ReactLogo />} name="ReactJS" x="1vw" y="12.5vw" />
        <Skill logo={<NextLogo />} name="NextJS" x="-24vw" y="-15vw" />
        <Skill logo={<FirebaseLogo />} name="Firebase" x="20vw" y="-12vw" />
        <Skill logo={<TailwindLogo />} name="TailwindCSS" x="-28vw" y="12vw" />
        <Skill logo={<TypeLogo />} name="TypeScript" x="35vw" y="-5vw" />
        <Skill logo={<PostgreLogo />} name="PostgreSQL" x="22vw" y="16vw" />
        <Skill logo={<VueLogo />} name="VueJS" x="2vw" y="-17vw" />
        <Skill logo={<DotNetLogo />} name=".NET" x="-10vw" y="20vw" />
      </div>
    </>
  );
};

export default Skills;
