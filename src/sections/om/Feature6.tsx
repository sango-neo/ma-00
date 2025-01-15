"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Layout201() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="heading-2">
              Optimize Your Resource Utilization Effortlessly
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              Our system streamlines resource allocation, eliminating
              duplication and waste. Gain actionable insights through
              data-driven analytics to enhance your operations.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/assets/images/ma-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Resource Allocation
                </h6>
                <p>
                  Maximize efficiency by prioritizing critical tasks with our
                  smart resource management.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/assets/images/ma-icon.svg"
                    className="size-12"
                    alt="Relume logo"
                  />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Data Insights
                </h6>
                <p>
                  Leverage analytics to make informed decisions and optimize
                  your maintenance strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
