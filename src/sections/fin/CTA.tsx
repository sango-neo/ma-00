"use client";


export function CTA() {
  return (
    <section id="" className="relative px-[5%] py-16 md:pTA lg:py-28">
      <div className="container max-w-[600px] text-center">
        <h2 className="heading-2 text-white lg:text-5xl">
          Unlock Enhanced Financial Control Today
        </h2>
        <p className="text-white/70">
          Discover how MOAGO can transform your financial management with real-time insights and accountability.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <a href={"/contact-us"}><button className="ma-primary-btn border border-white text-white bg-transparent">Schedule consultation</button></a>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/images/call-center-bg-dark.jpg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
