"use client";

import React from "react";

export function Layout12() {
  return (
    <section id="" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="heading-2">
              Transform Your Maintenance Strategy with Proactive Management
              Solutions
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              Experience unparalleled operational efficiency with real-time
              asset tracking and preventive maintenance schedules. Our priority
              maintenance feature ensures critical assets receive immediate
              attention, minimizing downtime.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/assets/images/ma-icon-alt.svg"
                    className="size-12"
                    alt=" logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Real-Time Tracking
                </h6>
                <p>
                  Monitor assets continuously to prevent unexpected breakdowns
                  and extend their lifespans.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/assets/images/ma-icon-alt.svg"
                    className="size-12"
                    alt=" logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Priority Maintenance
                </h6>
                <p>
                  Ensure urgent maintenance tasks are prioritized for swift
                  response and resolution.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/assets/images/proactive-maintenance.jpg"
              className="w-full object-cover"
              alt=" placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
