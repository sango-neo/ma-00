"use client";

import Link from "next/link";




export function CTA() {
  return (
    <section id="" className="relative px-[5%] py-16 md:pTA lg:py-28">
      <div className="container max-w-[600px] text-center">
        <h2 className="heading-1 text-white lg:text-6xl">
            See the Full Suite of Features
        </h2>
        <p className="text-white/70">
            Experience seamless communication and efficient issue resolution with our integrated Call Center solution.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <Link href={"/contact-us"}><button className="ma-primary-btn border border-white text-white bg-transparent">Schedule consultation</button></Link>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/images/call-center-bg-dark.jpg"
          className="size-full object-cover"
          alt="section background image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
