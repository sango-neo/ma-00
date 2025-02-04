"use client";

import Link from "next/link";
import React from "react";

export function CTAHome() {
  return (
    <section id="" className="relative px-[5%] py-16 md:pTA lg:py-28">
      <div className="container">
        <div className="mb-10">
          <h2 className="heading-2 text-white mb-10 text-center mx-auto">
            Discover More of MOAGO's Services
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-16">
          <article className="text-center w-full h-full min-h-[330px] border-[0.25px] border-white/50 rounded-lg py-4 px-6 lg:py-10 lg:px-16 flex flex-col items-center justify-center">
            <h2 className="heading-3 text-white max-w-xxs">
              Unlock Enhanced Financial Control Today
            </h2>
            <p className="text-white/70">
              Our Finance Management Product empowers users to effectively oversee financial expenditure and budgeting for infrastructure and equipment assets
            </p>
            <div className="flex flex-wrap items-center justify-start gap-4 mt-8">
              <Link href={"/services/finance-management"}><button className="ma-primary-btn border border-white text-white bg-transparent hover:bg-white/10 transition-all duration-300">Learn more</button></Link>
            </div>
          </article>
          <article className="text-center w-full h-full min-h-[330px] border-[0.25px] border-white/50 rounded-lg py-4 px-6 lg:py-10 lg:px-16 flex flex-col items-center justify-center">
            <h2 className="heading-3 text-white">
              Supplier's Database Feature and Procurement Support Services
            </h2>

            <p className="text-white/70">
              Manage stakeholder relationships, centralise documentation, monitor performance, ensure compliance and adherence to quality standards.
            </p>
            <div className="flex flex-wrap items-center justify-start gap-4 mt-8">
              <Link href={"/services/procurement-support"}><button className="ma-primary-btn border border-white text-white bg-transparent hover:bg-white/10 transition-all duration-300">Schedule consultation</button></Link>
            </div>
          </article>

        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/images/call-center-bg-dark.jpg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
