"use client";

import { motion } from "framer-motion";

type Props = {
    heading: string;
    description: string;
  };
  
  export type Header64Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Header64 = (props: Header64Props) => {
    const { heading, description } = {
      ...Header64Defaults,
      ...props,
    };

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

    return (
      <section id="about-header" className="px-[5%] bg-[#f9f9f9] py-28 lg:py-36">
        <motion.div 
          className="container max-w-md text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 
            variants={itemVariants}
            className="mb-5 text-3xl font-semibold md:mb-6 md:text-4xl lg:text-5xl text-ma_darkBlue"
          >
            {heading}
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="md:text-md"
          >
            {description}
          </motion.p>
          <motion.p 
            variants={itemVariants}
            className="italic text-ma_blue mt-12 font-serif text-md"
          >
            "Building together, shaping Africa's future."
          </motion.p>
        </motion.div>
      </section>
    );
  };
  
  export const Header64Defaults: Props = {
    heading: "Your Partner in Smart Asset Management",
    description:
      "MOAGO is a smart web-based application designed for the efficient management and maintenance of infrastructure and equipment.",
  };
