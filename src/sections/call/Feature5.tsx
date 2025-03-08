"use client";

import React from "react";

export function Layout16() {
  return (
    <section id="cc-connected-section" className="px-[5%] py-16 md:py-24 lg:py-28 my-48 bg-ma_darkBlue text-white relative overflow-x-clip
      before:content-[''] before:bg-ma_darkBlue before:w-full before:h-[150px] before:absolute before:-top-16 before:left-0 before:-skew-y-3
      after:content-[''] after:bg-ma_darkBlue after:w-full after:h-[150px] after:absolute after:-bottom-16 after:left-0 after:-skew-y-3">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          
          <div className="relative">
            <div
              className="relative z-20"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-ma_blue/50 rounded-full blur-[50px] z-10" />
              <img
                src="/assets/images/cc-phone.png"
                className="w-full object-cover relative z-20"
                alt="Moago Call Center Ticket Alert Ilustration"
              />
            </div>
            <div className="w-full absolute -bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-[1]">
              <img src="/assets/images/cc-soundwaves-sm.svg" alt="Soundwaves Illustration" className="w-full object-cover opacity-50"/>
            </div>
          </div>
          <div
           
          >
            <div>
              <p className="mb-3 font-medium text-ma_blue md:mb-4">Connected</p>
              <h2 className="heading-2 text-white">
                Streamlined Communication for Efficient Maintenance
              </h2>
              <p className="mb-5 text-base md:mb-6 md:text-md text-white/70 font-light">
                Our integrated call center and centralized communication system
                ensure that all maintenance needs are addressed swiftly. With
                instant alerts for urgent requests, your team can respond
                effectively and keep operations running smoothly.
              </p>
              <ul className="grid grid-cols-1 gap-4 py-2">
                <li className="flex self-start items-stretch">
                  <div className="mr-4 flex-none self-start">
                    <img
                      src="/assets/images/checkmark-ma-blue.svg"
                      alt="Checkmark bullet point"
                      className="size-6 self-end"
                    />
                  </div>
                  <span className="self-center">Quick response to maintenance needs, every time.</span>
                </li>
                <li className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <img
                      src="/assets/images/checkmark-ma-blue.svg"
                      alt="Checkmark bullet point"
                      className="size-6"
                    />
                  </div>
                  <span>Stay informed and aligned with all stakeholders.</span>
                </li>
                <li className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <img
                      src="/assets/images/checkmark-ma-blue.svg"
                      alt="Checkmark bullet point"
                      className="size-6"
                    />
                  </div>
                  <span>Never miss a critical maintenance request again.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
