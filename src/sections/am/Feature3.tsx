import { HorizontalBarChart } from "@/components/BarChart";

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
    image: ImageProps;
    features: FeaturesProps[];
  };
  
  export type Layout209Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Layout209 = (props: Layout209Props) => {
    const { heading, description, image, features } = {
      ...Layout209Defaults,
      ...props,
    };
    return (
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-x-20">
            <div className="order-2 lg:order-1">
              <HorizontalBarChart />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-5 text-2xl font-semibold lg:mb-6 md:text-3xl tracking-tight text-ma_blue leading-[1.1]">
                {heading}
              </h2>
              <p className="mb-5 lg:mb-6 lg:text-md">{description}</p>
              <p className="mb-5 lg:mb-6 lg:text-md font-semibold text-ma_darkBlue">Key Benefits: </p>
              <div className="grid grid-cols-1 gap-4 py-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <img src={feature.icon.src} alt={feature.icon.alt} className="size-6" />
                    </div>
                    <p>{feature.paragraph}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export const Layout209Defaults: Props = {
    heading: "Prioritize Safety with Comprehensive OHS Compliance Tools",
    description:
      "Ensuring compliance with Occupational Health and Safety (OHS) standards is more than meeting legal requirements—it’s a commitment to safeguarding employee health and fostering a culture of safety. Our system integrates a robust OHS checklist to streamline safety management and embed it into daily operations, offering critical benefits for your organization.",
    image: {
      src: "/assets/images/ma-icon.svg",
      alt: "Relume placeholder image",
    },
    features: [
      {
        icon: { src: "/assets/images/ma-icon.svg", alt: "moago icon" },
        paragraph: "Ensure compliance with health and safety regulations.",
        paragraphTopic: ""
      },
      {
        icon: { src: "/assets/images/ma-icon.svg", alt: "moago icon" },
        paragraph: "Enhance workplace safety and operational efficiency.",
        paragraphTopic: ""
      },
      {
        icon: { src: "/assets/images/ma-icon.svg", alt: "moago icon" },
        paragraph: "Reduce costs through fewer incidents and improved productivity.",
        paragraphTopic: ""
      },
      {
        icon: { src: "/assets/images/ma-icon.svg", alt: "moago icon" },
        paragraph: "Build trust with a strong safety-focused reputation.",
        paragraphTopic: ""
      },
    ],
  };
  