"use client";

import { motion } from "framer-motion";

export function Layout30() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              {[
                {
                  title: "Centralized Communication",
                  description: "A single platform for all maintenance and operational communications, enhancing collaboration.",
                },
                {
                  title: "Quick Issue Resolution",
                  description: "Rapid response to maintenance requests ensures minimal downtime and efficient service delivery.",
                },
                {
                  title: "Streamlined Requests",
                  description: "Easily manage and track maintenance requests for improved operational efficiency.",
                },
                {
                  title: "Always Available",
                  description: "24/7 support ensures that maintenance needs are addressed anytime, day or night.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-3 md:mb-4">
                    <img
                      src="/assets/images/ma-icon.svg"
                      className="size-12"
                      alt="Relume logo 1"
                    />
                  </div>
                  <h1 className="heading-2">{feature.title}</h1>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="mt-6 flex flex-wrap items-center gap-4 md:mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="ma-primary-btn bg-ma_accent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a demo
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.img
            src="/assets/images/call-center-4.png"
            alt="Feature illustration"
            className="w-full h-auto object-cover rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
}
