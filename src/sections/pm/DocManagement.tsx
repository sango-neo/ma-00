"use client";

import React from "react";

export function DocManagementSection() {

  return (
    <section id="doc-management-section" className="px-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <img
              src="/assets/images/doc-management.png"
              className="w-full object-cover lg:-translate-x-10"
              alt="Document Management Image"
            />
          </div>
          <div className="order-1 md:order-2 text-center">
            <div className="max-w-sm mx-auto">
                <h2 className="heading-2">
                Centralised Document Management for Projects
                </h2>
                <p className="mb-5 md:mb-6">
                Our Document Management and Storage feature provides a centralised
                repository for all project documentation. This ensures that
                critical documents are easily accessible throughout the project
                lifecycle, promoting efficient management and decision-making.
                </p>
            </div>
            <ul className="grid grid-cols-1 gap-4 py-2 w-full">
              <li className="self-start p-4 border border-ma_blue/50 text-ma_blue rounded-lg text-center">
                <p className="w-full">Store and access vital project documents seamlessly.</p>


              </li>
                <li className="self-start p-4 border border-ma_accentGreen text-ma_accentGreen rounded-lg text-center">
                <p className="w-full">Enhance collaboration with organised document storage.</p>
              </li>


              <li className="self-start p-4 border border-ma_darkBlue text-ma_darkBlue rounded-lg text-center">
                <p className="w-full">Simplify project management with easy document retrieval.</p>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}
