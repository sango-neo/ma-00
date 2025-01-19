import Link from "next/link";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};

export type Feature3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Feature3 = (props: Feature3Props) => {
  const {heading, description, image } = {
    ...Feature3Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-48 bg-ma_darkBlue text-white relative overflow-hidden">
        <div className="absolute left-0 top-0">
            <img src="/assets/images/bg-ring-sm.png" alt="decorative illustration" />
        </div>
        <div className="absolute right-0 bottom-0">
            <img src="/assets/images/bg-ring-lg.png" alt="decorative illustration" />
        </div>
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
            <div>
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
                <Link href={"/contact-us"} className="bg-ma_accent text-black font-semibold py-2 px-4 rounded mx-auto md:mx-0">
                  Schedule consultation
                </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export const Feature3Defaults: Props = {
  heading: "Transform Infrastructure Challenges into Opportunities",
  description:
    "A streamlined issue reporting, tracking, and completion feature that allows every stakeholder to stay updated on relevant information.",
  image: {
    src: "/assets/images/feature3.jpg",
    alt: "Suited man looking at tablet device.",
  },
};
