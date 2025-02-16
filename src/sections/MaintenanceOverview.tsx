

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};

export type MaintenanceOverviewProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const MaintenanceOverview = (props: MaintenanceOverviewProps) => {
  const {heading, description, image } = {
    ...MaintenanceOverviewDefaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-48 bg-ma_darkBlue text-white relative overflow-hidden">
        <div className="absolute right-0 bottom-0 rotate-180">
            <img src="/assets/images/bg-ring-sm.png" alt="decorative illustration" />
        </div>
        <div className="absolute left-0 top-0 rotate-180">
            <img src="/assets/images/bg-ring-lg.png" alt="decorative illustration" />
        </div>
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="md:order-2">
            <div className="relative w-full inline-flex justify-end items-center">
                
                <div className="hidden bg-gradient-to-br from-ma_accent via-transparent to-transparent rounded-2xl w-full absolute right-[10%] h-[140%] md:block" />
                <div className="hidden bg-ma_darkBlue rounded-2xl w-full absolute right-[5%] h-[120%] md:block" />
                <img src={image.src} className="w-full object-cover object-left-bottom rounded-2xl z-0" alt={image.alt} />
            </div>
          </div>
          <div className="max-w-md mx-auto text-center md:text-start md:max-w-none md:mx-0 z-0">
            <h2 className="rb-5 mb-5 text-2xl font-semibold tracking-tight md:mb-6 xl:text-3xl">
              {heading}
            </h2>
            <p className="">{description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8 ">
                <a href={"/contact-us"} className="ma-primary-btn bg-ma_accent border-ma_accent rounded mx-auto md:mx-0">
                  Schedule consultation
                </a>
                <a href={"/services/operations-maintenance"} className="ma-primary-btn-alt-white mx-auto md:mx-0">
                  Learn more
                </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export const MaintenanceOverviewDefaults: Props = {
  heading: "Proactive Maintenance Guided by a Priority-Based Approach",
  description:
    "A priority-based approach that ensures the most critical assets are maintained first, reducing downtime and associated costs.",
  image: {
    src: "/assets/images/o&m-overview.jpg",
    alt: "Suited man looking at tablet device.",
  },
};
