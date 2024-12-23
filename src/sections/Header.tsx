import Image from "next/image";

const Header = () => {
  return (
    <section className="px-[5%] py-20  mx-auto bg-ma_transBlue/5 pt-40">
        <div className="container w-full mx-auto max-w-7xl">
          <div className="w-full flex flex-col gap-6 md:flex-row md:justify-between max-w-5xl mx-auto text-[#444]">
            <div className="md:max-w-lg md:w-full">
              <h1 className="text-[1.75rem] font-semibold tracking-tight leading-tight xl:text-[2rem]">An Asset Management Solutions System for <span className="text-ma_blue">Service Delivery</span> Excellence.</h1>
            </div>
            <div className="md:max-w-xl md:w-full">
              <p>Moago Africa presents a cutting-edge, innovative system that provides a comprehensive solution for optimizing both movable and immovable assets while enhancing operational efficiency.</p>
              <a href="/contact" className="mt-8 text-center block py-2 text-white bg-ma_blue w-full rounded md:w-fit md:px-4 md:mt-4">Get started</a>
            </div>
          </div>
          <div className="mt-10 md:mt-20">
            <Image
              src={"/assets/images/hero-img.jpg"}
              alt="Hero Image - IAM System Illustration"
              className="w-full rounded-lg shadow-ma_darkBlue/10 shadow-2xl object-cover object-left-bottom aspect-[3/2] sm:aspect-auto sm:object-center"
              width={1280}
              height={394}
            />
          </div>
        </div>
    </section>
  )
}

export default Header