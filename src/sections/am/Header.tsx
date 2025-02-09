import Image from "next/image";

const HeaderAM = () => {
  return (
    <section className="-z-10 px-[5%] bg-white bg-[url('/assets/images/am-hero-mobile.png')] lg:bg-[url('/assets/images/am-header.png')] bg-center lg:bg-right bg-cover bg-no-repeat h-fit md:h-[430px] min-h-fit py-20 pt-40 overflow-hidden relative">
        <div className="container">
          <h1 className="heading-1 text-white lg:text-ma_darkBlue max-w-md">
              An Advanced Asset Information System for All Your Asset Management Needs
          </h1>
        </div>
    </section>
  )
}

export default HeaderAM 