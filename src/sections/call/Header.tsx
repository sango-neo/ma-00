"use client";

import React from "react";

export function Header64() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 relative">
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/images/call-center-bg-dark.jpg"
          alt="Call center background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="container max-w-lg text-center mt-20 text-white">
        <h1 className="heading-1 text-white font-medium">
          Streamlined Call Center
        </h1>
        <p className="md:text-md">
          Experience seamless communication and swift issue resolution with
          MOAGO's integrated Call Center function.
        </p>
      </div>
    </section>
  );
}
