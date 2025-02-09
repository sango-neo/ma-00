"use client";

import Link from "next/link";

export function DataDriven() {
  return (
    <section id="" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="heading-1">
              Data-driven Insights
            </h2>
            <p className="md:text-md">
              Our integrated Call Center collects detailed call logs and support
              trends, enabling you to optimize resources effectively. With
              comprehensive maintenance data, you can predict future needs and
              enhance service delivery.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <button className="ma-primary-btn-accent">
                    <Link href="/contact-us">Schedule a consultation</Link>
                </button>
            </div>

          </div>
          <div>

            <img
              src="/assets/images/cc-data-insights.png"
              className="w-full object-cover"
              alt="Data-driven Insights Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
