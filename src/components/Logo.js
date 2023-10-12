import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        href="/"
        className="w-20 lg:w-18 sm:w-16 h-10 lg:h-9 sm:h-8 text-[25px] lg:text-[22px] sm:text-xl bg-blue-900 text-yellow-200 flex items-center justify-center rounded-md font-bold dark:shadow-sm"
        whileHover={{
          scale: 1.2,
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
        Kyle
      </MotionLink>
    </div>
  );
};

export default Logo;
