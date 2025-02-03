"use client";


export function Overview() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background ellipses */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-ma_darkBlue/30 blur-[150px]" />
        <div className="absolute -right-32 top-1/2 h-96 w-96 rounded-full bg-ma_blue/30 blur-[150px]" />
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-ma_accent/20 blur-[150px]" />
      </div>
      
      {/* Content wrapper with relative positioning to appear above the background */}
      <div className="relative z-10">
        <div className="container">

          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="mx-auto w-full max-w-md">
              <h2 className="heading-2">
                Uncover the Potential of MOAGO's Comprehensive Asset Management
                Solutions.

              </h2>

            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex flex-col items-center text-center h-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="/assets/images/ma-icon-alt.svg"
                  alt="Relume logo"
                  className="size-12"
                />
              </div>
              <div className="flex flex-col flex-grow items-center">
                <h3 className="font-semibold md:mb-6 text-lg text-ma_darkBlue">
                  Streamline Operations with Our Integrated Maintenance Management
                  System.
                </h3>
                <p>
                  Our system ensures proactive maintenance, enhancing efficiency and
                  reducing downtime.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <button className="ma-primary-btn">Learn more</button>
              </div>
            </div>
            <div className="flex flex-col items-center text-center h-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="/assets/images/ma-icon-alt.svg"
                  alt="Moago Africa Icon"
                  className="size-12"
                />
              </div>
              <div className="flex flex-col flex-grow items-center">
                <h3 className="font-semibold md:mb-6 text-lg text-ma_darkBlue">
                  Enhance Supplier Relationships with Our Comprehensive Procurement
                  Database.
                </h3>
                <p>
                  Centralised supplier information promotes transparency and
                  accountability in procurement processes.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <button className="ma-primary-btn">Learn more</button>
              </div>
            </div>
            <div className="flex flex-col items-center text-center h-full">
              <div className="mb-5 md:mb-6">
                <img
                  src="/assets/images/ma-icon-alt.svg"
                  alt="Moago Africa Icon"
                  className="size-12"
                />
              </div>
              <div className="flex flex-col flex-grow items-center">
                <h3 className="font-semibold md:mb-6 text-lg text-ma_darkBlue">
                  Experience Real-Time Support with Our Integrated Call Center
                  Functionality.
                </h3>
                <p>
                  Our dedicated call centre ensures timely responses to all
                  operational queries.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <button className="ma-primary-btn">Learn more</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
