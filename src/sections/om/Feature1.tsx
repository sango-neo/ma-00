import Link from "next/link";


type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  firstImage: ImageProps;
  secondImage: ImageProps;
};

export type Layout438Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout438 = (props: Layout438Props) => {
  const {heading, description, firstImage, secondImage } = {
    ...Layout438Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-28 pb-0">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-6 sm:gap-y-12 md:grid-cols-2 xl:grid-cols-[1fr_0.75fr_0.5fr] md:mt-20">
          <div className="order-last md:order-first md:self-end">
            <img
              src={firstImage.src}
              className="w-full"
              alt={firstImage.alt}
            />
          </div>
          <div className="flex h-fit flex-col gap-10 rounded-lg shadow-large shadow-gray-200/90 bg-ma_altBlue/5 p-10 md:-mt-24 md:place-self-start">
            <div>
              <div className="text-ma_darkBlue text-base text-center md:text-start">
                <p className="leading-[1.1]"><span className="text-4xl block leading-none mb-3 font-medium tracking-tight mt-4">With Moago’s integrated system,</span> you are able to implement a proactive streamlined maintenance process that is aimed at ensuring managed assets are:</p>
                <ul className="text-base mt-12 leading-[1.1]">
                  <li className="flex gap-1 justify-start"><span className="flex-shrink-0"><img src="/assets/images/checkmark-ma-blue.svg" alt="bullet icon" className="inline-block w-5 h-5" />&nbsp;-&nbsp;</span><span>Kept at satisfactory performance levels.</span></li>
                  <li className="flex gap-1 justify-start mt-4 text-start"><span className="flex-shrink-0"><img src="/assets/images/checkmark-ma-blue.svg" alt="bullet icon" className="inline-block w-5 h-5" />&nbsp;-&nbsp;</span><span className="">Repaired timeously during unexpected breakdowns {"(improved reactive maintenance)."}</span></li>
                </ul>
              </div>
            </div>
            <div className="my-10">
                <Link href={"/contact-us"} className="">
                  <button className="px-6 py-3 rounded text-white bg-ma_darkBlue w-full">Schedule consultation</button>
                </Link>
            </div>
          </div>
          <img
            src={secondImage.src}
            className="order-last aspect-square w-1/2 max-w-[120px] object-cover hidden xl:block"
            alt={secondImage.alt}
          />
        </div>
      </div>
    </section>
  );
};

export const Layout438Defaults: Props = {
  heading: "Medium length section heading goes here",
  description:
    "With Moago’s integrated system, you are able to implement a proactive streamlined maintenance process that is aimed at ensuring managed assets are kept at satisfactory performance levels while still providing the tools to react timeously to unexpected asset breakdowns.",
  firstImage: {
    src: "/assets/images/om-onsite.png",
    alt: "Maintenance man",
  },
  secondImage: {
    src: "/assets/animated/clock.gif",
    alt: "Maintenance time",
  },
};
