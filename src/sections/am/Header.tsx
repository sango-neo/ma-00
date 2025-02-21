
"use client"

import { motion } from "framer-motion";

const HeaderAM = () => {
  return (
    <section className="-z-10 px-[5%] bg-white bg-[url('/assets/images/am-hero-mobile.png')] lg:bg-[url('/assets/images/am-header.png')] bg-center lg:bg-right bg-cover bg-no-repeat h-fit md:h-[430px] min-h-fit py-20 pt-40 overflow-hidden relative">
        <div className="container">
          <motion.h1 className="heading-1 text-white lg:text-ma_darkBlue max-w-md"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
              An Advanced Asset Information System for All Your Asset Management Needs
          </motion.h1>
        </div>
    </section>
  )
}

export default HeaderAM 