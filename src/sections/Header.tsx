"use client"

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.1,
    }
  }
};

const letterVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    rotateX: 40,
    transition: {
      type: "spring",
      damping: 12
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

const Header = () => {
  return (
    <section className="px-[5%] py-40 mx-auto bg-ma_darkBlue pt-40 overflow-x-clip" id="home-header-section">
        <div className="container w-full mx-auto max-w-7xl">
          <div className="w-full flex flex-col gap-6 md:flex-row md:justify-between max-w-5xl mx-auto text-[#444]">
            <motion.div 
              className="md:max-w-lg md:w-full text-white"
            >
              <motion.h1 
                className="text-[1.75rem] font-semibold tracking-tight leading-tight xl:text-[2rem]"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                {Array.from("An Asset Management Solutions System for ").map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
                <span className="text-ma_blue">
                  {Array.from("Service Delivery").map((char, index) => (
                    <motion.span key={`service-${index}`} variants={letterVariants}>
                      {char}
                    </motion.span>
                  ))}
                </span>
                {Array.from(" Excellence.").map((char, index) => (
                  <motion.span key={`end-${index}`} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>
            <motion.div 
              className="md:max-w-xl md:w-full text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p>
                Moago Africa presents a cutting-edge, innovative system that provides a comprehensive solution for optimizing both movable and immovable assets while enhancing operational efficiency.
              </p>
              <motion.a 
                href="#service-overview" 
                className="mt-8 text-center py-2 text-white bg-ma_blue w-full rounded md:w-fit md:px-4 md:mt-4 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More <span><ChevronDown strokeWidth={1.5} className="w-4 h-4 text-white" /></span>
              </motion.a>
            </motion.div>
          </div>
          <motion.div 
            className="mt-10 md:mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="relative w-full rounded-xl bg-white shadow-xxlarge shadow-ma_blue/80 ">
            <video
              autoPlay={true}
              controls={false}
              src={"/assets/animated/ma-home-hero_3.mp4"}
              preload="auto"
              className="w-full rounded-lg z-20 relative"
              width={1280}
              height={395}
                        muted
                        playsInline
            />
            
            </div>
          </motion.div>
        </div>
    </section>
  )
}

export default Header