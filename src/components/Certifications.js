import React from "react";
import { motion } from "framer-motion";
import Layout from "./Layout";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import cs50xImage from "../../public/images/certs/CS50x.png";
import claudeImage from "../../public/images/certs/ClaudeCode.png";
import awsSaaImage from "../../public/images/certs/AWS-SAA-C03.png";

const CertificationCard = ({ title, image, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <article className="group w-[90%] flex flex-col items-center justify-between rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative shadow-2xl ml-5 sm:ml-2 rounded-br-2xl">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] sm:w-[102.5%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />

        <div className="ml-2 sm:ml-1 w-full cursor-pointer overflow-hidden rounded-lg border border-dark/5 bg-[#f8f8f8] p-2">
          <div className="overflow-hidden rounded-[0.9rem]">
            <Image
              src={image}
              alt={title}
              className="w-full h-auto rounded-[0.9rem] transition-transform duration-500 group-hover:scale-[1.03]"
              priority
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-between mt-4 gap-4">
          <h2 className="my-2 w-full text-left text-3xl md:text-2xl font-bold text-dark dark:text-light whitespace-nowrap">
            {title}
          </h2>
          <span className="shrink-0 rounded-lg bg-myblue dark:bg-primaryDark text-yellow-200 dark:text-dark/80 p-1 sm:px-2 px-4 text-lg sm:text-base font-semibold">
            Visit
          </span>
        </div>
      </article>
    </a>
  );
};

const Certifications = () => {
  return (
    <div
      id="certs"
      className="w-full mb-16 flex flex-col items-center justify-center dark:text-light"
    >
      <Layout>
        <AnimatedText text="Certifications" className="mb-20" />

        <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <div className="col-span-6 md:col-span-12">
            <CertificationCard
              title="CS50x"
              image={cs50xImage}
              link="https://certificates.cs50.io/230da271-6a80-48bb-bcf3-f5e4146f09b7.pdf"
            />
          </div>
          <div className="col-span-6 md:col-span-12">
            <CertificationCard
              title="Claude Code"
              image={claudeImage}
              link="https://verify.skilljar.com/c/rxs2ys9vgkqx"
            />
          </div>
          <div className="col-span-6 md:col-span-12">
            <CertificationCard
              title="AWS SAA-C03"
              image={awsSaaImage}
              link="https://www.credly.com/badges/07ca0c16-5d91-4c8d-95a4-647348c17540/public_url"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Certifications;
