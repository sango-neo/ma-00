"use client";

import { motion } from "framer-motion";

export function SupplierCompliance() {
  const listVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="supplier-compliance" className="px-[5%] py-16 md:py-24 lg:py-28 bg-ma_altBlue/10">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <motion.h1 
              className="heading-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Enhanced Transparency and Compliance
            </motion.h1>
            
            <ul className="grid grid-cols-1 gap-4 py-2">
              {[0, 1].map((index) => (
                <motion.li
                  key={index}
                  className="flex self-start"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={listVariants}
                >
                  <div className="mr-4 flex-none self-start">
                    <img
                      src="/assets/images/ma-icon-alt.svg"
                      alt="moago africa alternative icon"
                      className="size-6"
                    />
                  </div>
                  <span>
                    {index === 0 
                      ? "Keeps a comprehensive record of supplier interactions, ensuring all actions taken are documented for auditing and compliance purposes"
                      : "Supports audits by providing clear, accessible data on supplier performance and contract compliance"
                    }
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <div 
              className="relative"
            
            >
              <div className="absolute inset-0 -z-10 bg-ma_blue blur-3xl opacity-20 scale-80" />
              <img
                src="/assets/images/compliance-img.png"
                className="w-full object-cover relative"
                alt="Supplier Compliance Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
