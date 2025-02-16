"use client";



export function Section4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-32 bg-ma_darkBlue text-white/90 relative">
    
      <div className="absolute right-0 bottom-0">
            <img src="/assets/images/bg-ring-lg.png" alt="decorative illustration" />
      </div>
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20 text-white">
          <p className="mb-3 font-medium md:mb-4 text-sm">Control</p>
          <h2 className="heading-2 text-white">
            Stay Ahead with Budget Monitoring Alerts
          </h2>
          <p className="max-w-lg text-white">
            Our Budget Monitoring and Alerts feature automatically compares your
            actual expenditures against planned budgets. Receive timely alerts
            to maintain financial control and avoid overspending.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          <div className="border border-ma_blue rounded-xl p-8 text-center">
            <p className="mb-8 font-semibold text-4xl md:text-5xl px-6 py-3 rounded-xl bg-ma_blue/25 w-full text-ma_altBlue border border-ma_blue text-center">
              -25% <span className="text-sm font-medium">from last year</span>
              &nbsp;
              <span>
                <svg width="162" height="89" viewBox="0 0 162 89" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-fit inline-flex justify-center items-center fill-ma_blue">
                  <path d="M162 72.0425V21.1698H141.692V54.2642L87.5359 -1.3862e-06L46.9191 40.6981L14.358 8.0718L0 22.4586L46.9191 69.4717L87.5359 28.7736L127.334 68.6509H94.3054V89H145.076C154.411 89 162 81.3962 162 72.0425Z" fill="currentColor"/>
                </svg>
              </span>
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Key Financial Metrics
            </h3>
            <p className="mt-2">Track your asset performance effectively.</p>
          </div>
          <div className="border border-ma_altBlue rounded-xl p-8 text-center">
            <p className="mb-8 font-semibold text-4xl md:text-5xl px-6 py-3 rounded-xl bg-ma_altBlue/25 w-full text-ma_altBlue border border-ma_altBlue text-center">
              +12% <span className="text-sm font-medium">over monthly budget</span>
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl">
              Budget Compliance Rate
            </h3>
            <p className="mt-2">Ensure adherence to financial plans.</p>
          </div>
          

          <div className="border border-[#059088] p-8 text-center rounded-xl">
            <p className="mb-8 font-semibold text-4xl md:text-5xl px-6 py-3 rounded-xl bg-[#059088]/25 w-full text-[#059088] border border-[#059088] text-center">
              95% <span className="text-sm font-medium">of facilities are tracked</span>
            </p>
            <h3 className="text-md font-bold leading-[1.4] md:text-xl ">
              Expenditure Tracking Accuracy
            </h3>
            <p className="mt-2">Improve your financial reporting.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4 md:mt-14 lg:mt-16">
          <a href="/contact-us" className="">
            <button className="ma-primary-btn-accent w-full">Schedule consultation</button>
          </a>
        </div>
      </div>
    </section>


  );
}
