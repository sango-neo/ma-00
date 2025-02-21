"use client";
import { motion } from "framer-motion";

export function HeaderFin() {
  return (
    <section
      className="grid grid-cols-1 items-center gap-y-16 pt-24 lg:grid-cols-2 lg:pt-0 overflow-x-hidden scroll-smooth max-w-[1600px] mx-auto"
    >
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <motion.h1 className="heading-1"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Your Asset Finance Management: Transformed with MOAGO
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
        Gain control over your finances with MOAGO's Financial Management Product. Our system offers real-time tracking and insightful reporting, enabling informed financial decisions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <a href="#section-one" className="ma-primary-btn bg-ma_darkBlue">Learn more &nbsp; <span>
                <svg className="inline-block fill-current" xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="16" height="16">
                  <path d="M0,8.057l9.52,9.507a3.507,3.507,0,0,0,4.948,0L24,8.046,21.879,5.929l-9.531,9.517a.5.5,0,0,1-.707,0L2.121,5.94Z"/>
                </svg>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
      <div className="relative flex items-center">
        <div className="absolute w-[45%] pl-[5%] lg:pl-0">
          <img
            src="/assets/images/fin-hero-dash.jpg"
            alt=" placeholder image 1"
            className="aspect-[2/3] w-full object-cover lg:h-full rounded-xl shadow-xlarge shadow-ma_darkBlue/30"
          />
        </div>
        <div className="ml-[10%]">
          <img
            src="/assets/images/hospital-infra-lg.jpg"
            alt=" placeholder image 2"
            className="w-full object-cover lg:h-screen lg:max-h-[60rem] rounded-l-xl"
          />
        </div>
      </div>
    </section>
  );
}
