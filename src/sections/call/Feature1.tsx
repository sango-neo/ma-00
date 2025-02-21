"use client";



export function Layout30() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              {[
                {
                  title: "Centralized Communication",
                  description: "A single platform for all maintenance and operational communications, enhancing collaboration.",
                },
                {
                  title: "Quick Issue Resolution",
                  description: "Rapid response to maintenance requests ensures minimal downtime and efficient service delivery.",
                },
                {
                  title: "Streamlined Requests",
                  description: "Easily manage and track maintenance requests for improved operational efficiency.",
                },
                {
                  title: "Always Available",
                  description: "24/7 support ensures that maintenance needs are addressed anytime, day or night.",
                },
              ].map((feature, index) => (
                <div key={index}>
                  <div className="mb-3 md:mb-4">
                    <img
                      src="/assets/images/ma-icon.svg"
                      className="size-10"
                      alt="Moago Icon"
                    />
                  </div>
                  <h1 className="heading-2">{feature.title}</h1>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
            <div 
              className="mt-6 flex flex-wrap items-center gap-4 md:mt-8"
            >
              <button 
                className=""
              >
                <a className="ma-primary-btn-accent" href="/contact-us">Schedule a consultation</a>
              </button>
            </div>
          </div>
          <img
            src="/assets/images/call-center-4.png"
            alt="Feature illustration"
            className="w-full h-auto object-cover rounded-lg"
            
          />
        </div>
      </div>
    </section>
  );
}
