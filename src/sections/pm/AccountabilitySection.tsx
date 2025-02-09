"use client";

import { Button } from "@relume_io/relume-ui";
import Link from "next/link";
import React from "react";

export function AccountabilitySection() {
  return (
    <section id="lifecycle-section" className="px-[5%] py-16 md:py-24 lg:py-28 lg:pb-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">

            <div className="relative">
                <div className="absolute top-0 left-0 -z-20 rounded-full w-[90%] h-[90%] bg-ma_blue/50 blur-3xl" />
            <img
              src="/assets/images/accountability.jpg"
              className="w-full object-cover rounded-lg md:w-[90%]"
              alt="Accountability Section Image"


            />
          </div>

          <div>
            <div className="md:max-w-sm">
                <h1 className="heading-2">
                Ensuring Accountability in Project Management
                </h1>
                <p className="mb-6 md:mb-8">
                Our Project Management module prioritises accountability and transparency. Track every decision and change throughout the project lifecycle.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 lg:gap-x-3 ">
              <div className="px-8 py-4 rounded-lg border border-ma_altBlue/50 text-sm">
                <h6 className="heading-4">
                Track Decisions
                </h6>
                <p>
                Monitor all decisions and approvals for complete project oversight and compliance.
                </p>
              </div>
              <div className="px-8 py-4 rounded-lg border border-ma_altBlue/50 text-sm">
                <h6 className="heading-4">
                Maintain Transparency
                </h6>
                <p>
                Ensure stakeholders have access to project history and performance metrics at all times.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
