"use client";

import { Button } from "@relume_io/relume-ui";
import { animate, motion, useInView, useMotionTemplate, useMotionValue, ValueAnimationTransition } from "framer-motion";
import React, { useEffect, useRef } from "react";

export function Section6() {
  const decorativeRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(decorativeRef, { once: true, margin: "-100px" });

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(250px 250px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!decorativeRef.current || !isInView) return;

    const { height, width } = decorativeRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [0, width / circumference, (width + height) / circumference, (width * 2 + height) / circumference, 1];

    const options:ValueAnimationTransition = {
      times,
      duration: 2.5,
      ease: "easeInOut",
    };

    // Animate the border drawing
    xPercentage.set(0);
    yPercentage.set(0);

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [isInView]);

  return (
    <section id="fin-audit-section" className="px-[5%] py-16 md:py-28 lg:py-48">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <div>
              <div className="relative w-full inline-flex justify-end items-center">
                  <img 
                    src="/assets/images/audit.jpg"
                    className="w-full object-cover rounded-2xl z-0" 
                    alt="Image of Paperwork" 
                  />
                  <motion.div 
                    ref={decorativeRef}
                    className="hidden border-[3px] border-ma_blue rounded-xl w-full absolute right-[5%] h-[80%] -z-20 md:block"
                    style={{
                      maskImage,
                      WebkitMaskImage: maskImage
                    }}
                  />
                  <div 
                    className="hidden bg-ma_altBlue rounded-xl w-full absolute -right-[5%] h-[115%] -z-10 md:block" 
                  />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="heading-2">
              Simplify Your Audit Process with MOAGO’s Financial Management Solution
            </h2>
            <p className="">
              Our streamlined audit process simplifies access to financial
              records, ensuring compliance with regulatory standards. By
              providing clear documentation and an organised audit trail, we
              enhance the credibility of your financial practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
