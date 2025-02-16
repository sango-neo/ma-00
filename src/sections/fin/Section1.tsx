"use client";



export function Section1() {
  return (
    <section id="section-one" className="px-[5%] py-16 md:py-28 lg:py-48">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3 lg:gap-x-20">
          <div className="order-2 md:order-1 md:col-span-1 relative">
            <div className="absolute inset-0 rounded-full bg-ma_blue/50 blur-3xl -z-10" />
            <img
              src="/assets/images/phokeng-mafikeng-map.jpg"
              className="w-full object-contain relative rounded-[8px]"
              alt="Example Facility location map"
            />
            <img src="/assets/images/expenditure-card-fin.svg" className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4/5 z-20 rounded-[8px]" alt="facility expenditure card" />
          </div>
          <div className="order-1 md:order-2 md:col-span-2 md:ml-20">
            {/* <p className="mb-3 font-semibold md:mb-4">Overview</p> */}
            <h2 className="heading-2">
              Comprehensive Tracking of Financial Expenditures
            </h2>
            <p className="mb-6 md:mb-8">
              Our Summary of Expenditures feature provides a clear overview of
              all financial activities. It meticulously tracks daily, monthly,
              and yearly expenditures to ensure optimal budget management.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div className="p-4 border-[0.5px] rounded-xl border-ma_blue/20">
                <h6 className="mb-3 text-md font-semibold leading-[1.4] md:mb-4 md:text-lg">
                  Detailed Insights
                </h6>
                <p>
                  Gain clarity on spending patterns for informed financial
                  decision-making.
                </p>
              </div>
              <div className="p-4 border-[0.5px] rounded-xl border-ma_blue/20">
                <h6 className="mb-3 text-md font-semibold leading-[1.4] md:mb-4 md:text-lg">
                  Efficient Monitoring
                </h6>
                <p>
                  Stay on top of your budget with real-time tracking and alerts.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              
              <a href="/contact-us" className="">
                <button className="px-6 py-3 rounded text-white bg-ma_darkBlue w-full">Schedule consultation</button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
