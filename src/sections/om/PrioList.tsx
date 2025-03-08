"use client";

export function PrioList() {
  return (
    <section id="om-priority-list-section" className="px-[5%] py-16 md:py-24 lg:py-28 bg-ma_darkBlue relative">
        <div className="absolute right-0 bottom-0 opacity-90">
            <img src="/assets/images/bg-ring-lg.png" alt="decorative illustration" />
        </div>
      <div className="container text-white">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
        <div className="">
            <img
              src="/assets/images/om-prio-list.png"
              className="w-full object-cover"
              alt="System Priority List Feature"
            />
          </div>
          <div>
            <h2 className="heading-2 text-white tracking-normal">
              Smart Prioritization of Maintenance Work
            </h2>
            <p className="md:text-md">
              Tailor our system to your industry needs and unlock smarter, more
              effective maintenance prioritization for every sector of your organization.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
