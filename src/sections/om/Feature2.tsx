

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};

export type Feature2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Feature2 = (props: Feature2Props) => {
  const {heading, description, image } = {
    ...Feature2Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-48 bg-ma_altBlue">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="max-w-md mx-auto text-center md:text-start md:max-w-none md:mx-0">
            <h2 className="rb-5 mb-5 text-2xl font-semibold text-ma_darkBlue tracking-tighter md:mb-6 xl:text-3xl">
              {heading}
            </h2>
            <p className="">{description}</p>
          
          </div>
          <div>
            <div className="relative w-full inline-flex justify-end items-center">
                <img src={image.src} className="w-full object-cover rounded-lg z-10" alt={image.alt} />
                <div className="hidden border-2 border-white/80 rounded-xl w-full absolute right-[10%] h-[80%] md:block" />
                <div className="hidden bg-ma_darkBlue rounded-xl w-full absolute right-[5%] h-[120%] md:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Feature2Defaults: Props = {
  heading: "Auto-alert Stakeholders on Priority Maintenance Work",
  description:
    "Improve and expedite communication between relevant personnel on pending maintenance work, its progress and quality.",
  image: {
    src: "/assets/images/o&m-finance.jpg",
    alt: "Looking at tablet device.",
  },
};
