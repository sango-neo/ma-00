"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function HeaderPM() {
  return (
    <section id="relume" className="relative px-[5%] py-24 lg:py-36">
      <div className="container">
        <div className="flex justify-center md:justify-end">
            <motion.div className="w-full max-w-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
            <motion.h1 className="heading-1 text-ma_accent"
              variants={itemVariants}
            > 
                Project Management Simplified
            </motion.h1>

            <motion.p className="text-white"
              variants={itemVariants}
            >
                Experience seamless project management from initiation to closure
                with MOAGO’s comprehensive module.
            </motion.p>
            </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/images/pm-header-bg.jpg"
          className="size-full object-cover"
          alt="Project Management Background Image"
        />
        <div className="absolute inset-0 right-0 bg-gradient-to-l from-ma_darkBlue to-transparent bg-blend-multiply" />
        <div className="absolute inset-0 right-0 bg-gradient-to-l from-ma_darkBlue to-transparent bg-blend-multiply" />
        <div className="absolute inset-0 z-20 top-[calc(50%+20px)] -translate-y-1/2 hidden lg:block lg:scale-[.88] lg:left-[calc(50%-27vw)] xl:scale-100 xl:left-[calc(50%-20vw)]">
            <img src="/assets/images/pm-header-icons.svg" alt="Illustrative PM Icons" />
        </div>
      </div>
    </section>
  );
}
