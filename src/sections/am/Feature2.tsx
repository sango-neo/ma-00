import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Link from "next/link";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeaturesProps = {
  icon: ImageProps;
  paragraph: string;
  paragraphTopic: string;
};

type Props = {
  heading: string;
  description: string;
  tagline: string;
  features: FeaturesProps[];
  image: ImageProps;
};

export type Layout16Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout16 = (props: Layout16Props) => {
  const { tagline, heading, description, features, image } = {
    ...Layout16Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-ma_transBlue/20">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4 text-ma_blue">{tagline}</p>
            <h2 className="mb-5 text-2xl font-semibold md:mb-6 md:text-3xl tracking-tight text-ma_darkBlue leading-[1.1]">{heading}</h2>
            <p className="mb-5 text-base md:mb-6 md:text-md">{description}</p>
            <p className="mb-5">The FPI is determined by three critical factors: </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              {features.map((feature, index) => (
                <li key={index} className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <img src={feature.icon.src} alt={feature.icon.alt} className="size-6" />
                  </div>
                  <span><span className="font-semibold odd:text-ma_darkBlue">{feature.paragraphTopic}: </span>{feature.paragraph}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link href={"/contact-us"}><button className="px-6 py-3 bg-ma_darkBlue text-white rounded w-full lg:w-fit">Schedule consultation</button></Link>
            </div>
          </div>
          <div>
            <img src={image.src} className="w-full object-cover rounded-xl" alt={image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout16Defaults: Props = {
  tagline: "FUNCTIONAL PERFORMANCE INDEX",
  heading: "Optimize Asset Performance with Functional Ratings",
  description:
    "Government infrastructure assets should aim to maintain an A1-B2 Functional Performance Index (FPI) rating, as outlined by the National Department of Public Works’ User Asset Management Plan (UAMP). An A1 rating signifies optimal performance and full suitability for the asset’s intended purpose, while lower ratings indicate reduced reliability and efficiency, potentially leading to the asset’s surrender or disposal.",
  features: [
    {
      icon: { src: "/assets/images/ma-icon.svg", alt: "moago icon 1" },
      paragraphTopic: "Condition Rating",
      paragraph: "Ensures assets remain functional through effective planning and preventative maintenance.",
    },
    {
      icon: { src: "/assets/images/ma-icon.svg", alt: "moago icon 2" },
      paragraphTopic: "Performance Index",
      paragraph: "Tracks how well assets meet their intended operational goals.",
    },
    {
      icon: { src: "/assets/images/ma-icon.svg", alt: "moago icon 3" },
      paragraphTopic: "Accessibility Rating",
      paragraph: "Measures the usability and accessibility of assets for their intended users.",
    },
  ],
  image: {
    src: "/assets/images/fpi-map.jpg",
    alt: "FPI - Asset location map image",
  },
};
