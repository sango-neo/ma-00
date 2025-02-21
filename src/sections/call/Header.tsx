"use client";
import { useHeader } from "@/contexts/HeaderContext";
import { motion } from "framer-motion";
import { useEffect } from "react";

export function Header5() {

  const { setHeaderLoaded } = useHeader();
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setHeaderLoaded(true);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, [setHeaderLoaded]);

  return (
    <section className="relative px-[5%]">
      <div className="container text-ma_darkBlue">
        <div className="flex max-h-[60rem] min-h-[80vh] items-start py-16 md:py-24 lg:py-28 relative">
          <div className="max-w-md mt-10 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-1 text-4xl lg:text-8xl"
            >
              Integrated Call Center
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
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
          alt="Relume placeholder image"
        />
        {/* <div className="absolute inset-0 bg-black/50" /> */}
      </div>
    </section>
  );
}
