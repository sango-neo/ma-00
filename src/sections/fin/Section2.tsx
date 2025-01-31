"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const useHoverState = () => {
  const [hoveredFeatureIdx, setHoveredFeatureIdx] = useState<number | null>(null);
  const handleMouseEnter = (index: number) => () => {
    setHoveredFeatureIdx(index);
  };
  const handleMouseLeave = () => {
    setHoveredFeatureIdx(null);
  };
  const startAnimation = (index: number) => {
    return hoveredFeatureIdx === index ? "visible" : "hidden";
  };
  return {
    handleMouseEnter,
    handleMouseLeave,
    startAnimation,
  };
};

export function Section2() {
  const hoverState = useHoverState();
  return (
    <section className="px-[5%] py-16 bg-gray-100 md:py-28 lg:py-40" id="data-analysis">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-14">
          <h2 className="heading-2 mb-3">
            Improved Data Analyis and Handling with MOAGO
          </h2>
          <p className="md:text-md">
            Easily share and analyse your financial information.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-8" >
          <a
            href="#data-analysis"
            className="relative flex w-full flex-col overflow-hidden rounded-[8px] md:w-1/2 lg:h-full lg:transition-all lg:duration-200 lg:hover:w-[70%]"
            onMouseOver={hoverState.handleMouseEnter(0)}
            onMouseLeave={hoverState.handleMouseLeave}
          >
            <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
              <img
                src="/assets/images/finger-tips-alt.jpg"
                alt="Financial overview with data visualization"
                className="size-full object-cover"
              />
            </div>
            <div className="group relative flex h-full min-h-[70vh] flex-col justify-end">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="z-10 p-6 md:p-8 lg:p-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:w-[75%]">
                <p className="mb-2 text-sm text-white">
                  Insight
                </p>
                <h3 className="heading-2 text-white">
                  Unlock Financial Insights with Ease
                </h3>
                <p className="text-white">
                  Transform your financial data into actionable insights with our exportable reports feature.
                </p>
                <AnimatePresence>
                  <motion.div
                    className="z-10 mt-6 md:mt-8"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={hoverState.startAnimation(0)}
                    exit="hidden"
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                  
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </a>
          <a
            href="#data-analysis"
            className="relative flex w-full flex-col overflow-hidden rounded-[8px] md:w-1/2 lg:h-full lg:transition-all lg:duration-200 lg:hover:w-[70%]"
            onMouseOver={hoverState.handleMouseEnter(1)}
            onMouseLeave={hoverState.handleMouseLeave}
          >
            <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
              <img
                src="/assets/images/fin-exp.jpg"
                alt="Relume placeholder image 2"
                className="size-full object-cover"
              />
            </div>
            <div className="group relative flex h-full min-h-[70vh] flex-col justify-end">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="z-10 p-6 md:p-8 lg:p-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:w-[75%]">
                <p className="mb-2 text-sm text-white">
                  Access
                </p>
                <h3 className="heading-2 text-white">
                  Streamline Your Reporting Process
                </h3>
                <p className="mt-5 text-white md:mt-6">
                  Simplify sharing and documentation of your financial summaries with our export functionality.
                </p>
                <AnimatePresence>
                  <motion.div
                    className="z-10 mt-6 md:mt-8"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={hoverState.startAnimation(1)}
                    exit="hidden"
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
