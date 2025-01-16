import Image from "next/image";

const HeaderAM = () => {
  return (
    <section className="-z-10 px-[5%] bg-white bg-[url('/assets/images/am-hero-mobile.png')] lg:bg-[url('/assets/images/am-header.png')] bg-center lg:bg-right bg-cover bg-no-repeat h-fit md:h-[430px] min-h-fit py-20 pt-40 overflow-hidden relative">
        <div className="container">
          <h1 className="text-white lg:text-ma_darkBlue text-center md:text-start font-semibold w-full md:w-fit tracking-[-0.0125em] leading-[1.1] text-4xl md:text-6xl max-w-[80%] mx-auto md:mx-0 md:max-w-[38rem]">
              An Advanced Asset Information System for All Your Asset Management Needs
          </h1>
        </div>
    </section>
  )
}

export default HeaderAM 