"use client";

import Link from "next/link";



export function PlanningSection() {
  return (
    <section id="planning-section" className="px-[5%] py-16 md:py-24 lg:py-36">
      <div className="container">

        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="max-w-sm">
            <h2 className="heading-2">
              Streamlined Planning and Design for Projects
            </h2>

            <p className="my-10 text-base">
              Our Project Management module simplifies the planning and design
              phases by integrating essential tools for scheduling, budgeting,
              and resource allocation. This ensures that every project aspect is
              meticulously planned, promoting collaboration and efficiency.
            </p>
            <Link href="/contact-us" className="ma-primary-btn">Schedule consultation</Link>
          </div>
          <div className="relative w-full inline-flex justify-end items-center mt-4">
            <img
              src="/assets/images/planning&design.jpg"
              className="w-fullll md:w-[90%] aspect-square rounded-lg object-cover z-10"
              alt="Planning and Design Image"
            />

            <div className="hidden border-2 border-ma_accent/80 rounded-xl w-full absolute right-[10%] h-[80%] md:block" />
            <div className="hidden bg-ma_darkBlue rounded-xl w-[95%] absolute right-[5%] h-[110%] md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
