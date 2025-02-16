"use client";


export function Layout16() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-medium text-ma_blue md:mb-4">Connect</p>
            <h2 className="heading-2">
              Streamlined Communication for Efficient Maintenance
            </h2>
            <p className="mb-5 text-base md:mb-6 md:text-md">
              Our integrated call center and centralized communication system
              ensure that all maintenance needs are addressed swiftly. With
              instant alerts for urgent requests, your team can respond
              effectively and keep operations running smoothly.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="/assets/images/ma-icon-alt.svg"
                    alt="Relume logo 1"
                    className="size-6"
                  />
                </div>
                <span>Quick response to maintenance needs, every time.</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="/assets/images/ma-icon.svg"
                    alt="Relume logo 1"
                    className="size-6"
                  />
                </div>
                <span>Stay informed and aligned with all stakeholders.</span>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="/assets/images/ma-icon-alt.svg"
                    alt="Relume logo 1"
                    className="size-6"
                  />
                </div>
                <span>Never miss a critical maintenance request again.</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <a href={"/contact-us"}><button className="ma-primary-btn">Schedule consultation</button></a>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
