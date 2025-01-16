"use client";

import React from "react";

export function Layout3() {
  return (
    <section id="" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt=" placeholder image"
            />
          </div>
          <div>
            <h2 className="heading-2">
              Maximize Efficiency with Cost-Effective Maintenance Solutions
              Tailored for Your Needs
            </h2>
            <p className="md:text-md">
              Our system ensures timely and precise maintenance interventions,
              significantly reducing operational costs. By tracking asset
              expenditures and identifying maintenance patterns, we enable
              smarter resource allocation for your organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
