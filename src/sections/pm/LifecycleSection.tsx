"use client";

import { Button } from "@relume_io/relume-ui";
import Link from "next/link";
import React from "react";

export function LifecycleSection() {
  return (
    <section id="lifecycle-section" className="px-[5%] py-16 md:py-24 lg:py-28 lg:pb-20">
      <div className="container">

        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="md:max-w-sm">
                <p className="mb-3 font-medium md:mb-4 text-ma_blue">Streamlined</p>
                <h1 className="heading-2">
                Comprehensive Support for Project Lifecycles
                </h1>
                <p className="mb-6 md:mb-8">
                Our Project Management module guides users seamlessly through
                every phase of a project, ensuring adherence to best practices.
                From initiation to closure, we empower teams to achieve successful
                outcomes efficiently.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 lg:gap-x-3 ">
              <div className="px-8 py-4 rounded-lg border border-ma_altBlue/50 text-sm">
                <h6 className="heading-4">
                  Lifecycle Guidance
                </h6>
                <p>
                  Navigate each project phase with confidence and clarity for
                  optimal results.
                </p>
              </div>
              <div className="px-8 py-4 rounded-lg border border-ma_altBlue/50 text-sm">
                <h6 className="heading-4">
                  Phased Approach
                </h6>
                <p>

                  Ensure every stage is meticulously planned and executed for
                  maximum efficiency.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              
              <Link href="/contact-us" className="">
                <button className="ma-primary-btn bg-ma_altBlue border-ma_altBlue w-full">Schedule consultation</button>
              </Link>
            </div>
          </div>
          <div>

            <img
              src="/assets/images/lifecycle-section.png"
              className="w-full object-cover"
              alt="Lifecycle Section Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
