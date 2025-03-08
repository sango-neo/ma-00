"use client";
import { motion } from "framer-motion";

export function Header5() {
  return (
    <section id="cc-header-section" className="relative px-[5%]">
      <div className="container text-ma_darkBlue">
        <div className="flex max-h-[60rem] min-h-[80vh] items-center lg:items-start
         py-16 md:py-24 lg:py-28 relative">
          <div className="max-w-sm lg:max-w-md mt-10 z-10 -translate-y-16 sm:-translate-y-20 lg:translate-y-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-1 text-4xl lg:text-8xl"
            >
              Integrated Call Center
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:text-md"
            >
              Experience seamless communication and swift issue resolution with MOAGO's integrated Call Center function.
            </motion.p>
            
          </div>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8 absolute bottom-10 left-0">
              <img src="/assets/images/cc-soundwaves.svg" alt="Illustrative Soundwaves" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/images/cc-hero-img.jpg"
          className="size-full object-cover"
          alt="cc-hero background image"
        />
        {/* <div className="absolute inset-0 bg-black/50" /> */}
      </div>
    </section>
  );
}
