"use client";

import React from "react";

export function HeaderNews() {
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container relative z-10">

        <div className="flex max-h-[60rem] items-center justify-start py-16 md:py-24 lg:py-36">
          <div className="w-full max-w-lg mt-10">
            <h1 className="heading-1 text-white">
              Stay Ahead with News & Insights
            </h1>
            <p className="text-white">
              Explore the latest trends and insights in infrastructure
              management. Our expert commentary and resources will keep you
              informed and empowered.

            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/insights.jpg"
          className="size-full object-cover"
          alt="background image"
        />

        <div className="absolute inset-0 bg-ma_darkBlue/50" />
      </div>
    </section>

  );
}
