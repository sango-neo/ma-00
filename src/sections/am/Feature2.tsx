

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
            <p className="mb-5 md:mb-6 text-sm">{description}</p>
            <p className="mb-5">The FPI is determined by three critical factors: </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              {features.map((feature, index) => (
                <li key={index} className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <img src={feature.icon.src} alt={feature.icon.alt} className="size-6" />
                  </div>
                  <span className="text-sm"><span className="font-semibold odd:text-ma_darkBlue">{feature.paragraphTopic}: </span>{feature.paragraph}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <a href={"/contact-us"}><button className="px-6 py-3 bg-ma_darkBlue text-white rounded w-full lg:w-fit">Schedule consultation</button></a>
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
    "The FPI dashboard provides a snapshot of facilities needing decommissioning or significant refurbishment, serving as a vital tool for the infrastructure planning team to make informed asset management decisions. Government infrastructure assets should strive for an A1–B2 Functional Performance Index (FPI) rating, as stated in the National Department of Public Works’ User Asset Management Plan (UAMP). An A1 rating indicates optimal performance and suitability, while lower ratings suggest reduced reliability, possibly leading to asset surrender or disposal.",
  features: [
    {
      icon: { src: "/assets/images/ma-icon.svg", alt: "moago icon 1" },
      paragraphTopic: "Condition Rating",
      paragraph: "The condition rating is the key factor in the Facility Performance Index (FPI). Keeping facilities and equipment in good condition through preventive maintenance ensures optimal performance and efficiency.",
    },
    {
      icon: { src: "/assets/images/ma-icon.svg", alt: "moago icon 2" },
      paragraphTopic: "Performance Index",
      paragraph: "The Performance Index sets the performance standard for a facility, acting as the benchmark for evaluating its condition and functionality. It establishes the baseline for assessing if the accommodation meets operational requirements.",
    },
    {
      icon: { src: "/assets/images/ma-icon.svg", alt: "moago icon 3" },
      paragraphTopic: "Accessibility Rating",
      paragraph: "The accessibility rating indicates an asset's physical location concerning service delivery objectives. It is a critical factor when determining the location of a new facility, as ensuring easy access for the general public should be a top priority.",
    },
  ],
  image: {
    src: "/assets/images/fpi-map.jpg",
    alt: "FPI - Asset location map image",
  },
};
