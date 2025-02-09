"use client";

import React from "react";


export function ConsultantSection() {
  return (

    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-32 my-48 bg-ma_altBlue relative overflow-x-clip
      before:content-[''] before:-z-10 before:bg-ma_altBlue before:w-full before:h-[150px] before:absolute before:-top-16 before:left-0 before:-skew-y-3
      after:content-[''] after:bg-ma_altBlue after:w-full after:h-[150px] after:absolute after:-z-10 after:-bottom-16 after:left-0 after:-skew-y-3">
        <div className="absolute -top-56 -right-20 z-20">
            <img src="/assets/images/ornament.svg" alt="Illustrative Element" className="" />
        </div>
        <div className="absolute -bottom-56 -right-20 z-20">
            <img src="/assets/images/deco-dots-rings-blue.svg" alt="Illustrative Element" className="" />
        </div>
      <div className="container">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-[460px]">
            <h2 className="heading-2 text-white">
              Efficient Consultant and Contractor Management for Successful
              Project Execution
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-stretch justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12 text-center text-white">
          <div className="flex flex-col items-center justify-center p-10 rounded-lg border border-ma_accentGreen/50  shadow-xlarge shadow-ma_accentGreen/30 md:translate-y-4">
                <h3 className="heading-4 text-white">
                Streamlined Assignment and Monitoring of Project Experts
                </h3>
                <p className="text-sm">
                Our system enables seamless assignment and oversight of
                consultants and contractors.
                </p>
          </div>
          <div className="flex flex-col items-center justify-center p-10 rounded-lg border border-ma_darkBlue/20  shadow-xlarge shadow-ma_darkBlue/30 md:-translate-y-8">
                <h3 className="heading-4 text-white">
                Ensuring Quality Standards with Expert Oversight
              </h3>
              <p className="text-sm">
                We track responsibilities to ensure project stages are executed by qualified professionals.
              </p>
          </div>
          <div className="flex flex-col items-center justify-center p-10 rounded-lg border border-ma_blue/50 shadow-xlarge shadow-ma_blue/30 md:-translate-y-20">
              <h3 className="heading-4 text-white">
                Maximising Project Success through Expert Management
              </h3>
              <p className="text-sm">
                This feature guarantees that the right expertise is applied at every stage.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}


