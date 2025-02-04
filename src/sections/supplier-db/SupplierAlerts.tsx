"use client";

import { motion } from "framer-motion";

export function SupplierAlerts() {
  return (
    <section id="supplier-alerts" className="px-[5%] py-16 md:py-24 lg:py-36 relative">
        <img src="/assets/images/moago-bg-deco-icon.png" alt="Moago Icon" className="absolute top-1/2 -translate-y-1/2 right-0 w-[20vw] object-cover" />
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="/assets/images/email-noti.png"
              className="w-[80%] object-cover relative"
              alt="Supplier Alerts Image"
            />


          </motion.div>
          
          <div className="max-w-md">
            <motion.p className="text-ma_blue text-sm font-medium mb-1"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Always Updated
            </motion.p>
            <motion.h2 

              className="heading-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}

              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Stay Ahead with Automated Email Notifications
            </motion.h2>
            
            <motion.p 
              className="mt-4 text-gray-600"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Automated Email Notifications play a crucial role in enhancing communication efficiency. By notifying suppliers of upcoming maintenance tasks, we ensure that they are well-prepared to meet deadlines.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
