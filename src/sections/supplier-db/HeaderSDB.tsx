"use client";

import { motion } from "framer-motion";

export function HeaderSDB() {
  return (
    <section id="header-sdb" className="px-[5%] py-28 lg:pt-48 bg-ma_darkBlue">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-5 md:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h1 className="heading-1 text-ma_accent max-w-sm">
              Enhanced Supplier Management
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          >
            <p className="text-white/70">


              Our Supplier Database and Procurement Support feature revolutionises the way organisations manage supplier relationships. By centralising critical information, tracking performance and enhancing communication, it significantly boosts work quality and procurement efficiency.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
