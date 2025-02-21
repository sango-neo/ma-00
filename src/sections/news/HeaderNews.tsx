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

export function HeaderNews() {
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container relative z-10">

        <div className="flex max-h-[60rem] items-center justify-start py-16 md:py-24 lg:py-36">
          <motion.div className="w-full max-w-lg mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h1 className="heading-1 text-white"
              variants={itemVariants}
            >
              Stay Ahead with News & Insights
            </motion.h1>
            <motion.p className="text-white"
              variants={itemVariants}
            >
              Explore the latest trends and insights in infrastructure
              management. Our expert commentary and resources will keep you
              informed and empowered.

            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/insights.jpg"
          className="size-full object-cover"
          alt="background image"
        />

        <div className="absolute inset-0 bg-ma_darkBlue/50" />
      </div>
    </section>

  );
}
