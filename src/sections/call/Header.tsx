"use client";

export function Header5() {
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container text-ma_darkBlue">
        <div className="flex max-h-[60rem] min-h-[80vh] items-start py-16 md:py-24 lg:py-28 relative">
          <div className="max-w-md mt-10 z-10">
            <h1 className="heading-1 text-4xl lg:text-8xl">
              Integrated Call Center
            </h1>
            <p className="md:text-md">
              Experience seamless communication and swift issue resolution with MOAGO's integrated Call Center function.
            </p>
            
          </div>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8 absolute bottom-10 left-0">
              <img src="/assets/images/cc-soundwaves.svg" alt="Illustrative Soundwaves" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/images/cc-hero-img.jpg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        {/* <div className="absolute inset-0 bg-black/50" /> */}
      </div>
    </section>
  );
}
