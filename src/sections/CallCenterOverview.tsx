"use client";

import React from "react";

export function CallCenterOverview() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-ma_transBlue">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="heading-2">
              An Integrated Call Center for
              Efficient Operations
            </h2>
            <p className="mb-6 md:mb-8">
              Our integrated Call Center is designed to address maintenance and
              operational queries in real-time. This ensures that every request
              is handled promptly by the appropriate personnel, enhancing
              overall efficiency.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-semibold md:mb-4 md:text-lg">
                  Real-Time Support
                </h6>
                <p>
                  Experience seamless communication and immediate assistance for
                  all your operational needs.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-semibold md:mb-4 md:text-lg">
                  Enhanced Efficiency
                </h6>
                <p>
                  Our Call Center ensures timely responses, improving
                  maintenance operations and user satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/assets/images/call-center-4.png"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
