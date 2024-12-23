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

export type Feature1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Feature1 = (props: Feature1Props) => {
  const {heading, description, image } = {
    ...Feature1Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container  max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="text-center md:text-start">
            <h2 className="rb-5 mb-5 text-2xl font-semibold text-ma_darkBlue tracking-tighter md:mb-6 xl:text-3xl">
              {heading}
            </h2>
            <p className="">{description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8 ">
                <Link href={"/services/project-management"} className="bg-ma_darkBlue text-white py-2 px-4 rounded mx-auto md:mx-0">
                  Learn more
                </Link>
            </div>
          </div>
          <div>
            <div className="relative w-full inline-flex justify-end items-center">
                <img src={image.src} className="w-full object-cover rounded-lg z-0" alt={image.alt} />
                <div className="hidden border-2 border-ma_accent rounded-xl w-full absolute right-[10%] h-[80%] -z-20 md:block" />
                <div className="hidden bg-ma_darkBlue rounded-xl w-full absolute right-[5%] h-[120%] -z-10 md:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Feature1Defaults: Props = {
  heading: "Gain access to a network of experienced industry practitioners",
  description:
    "Moago Africa provides a system with streamlined access to the expertise spanning different industries, helping you make decisions with confidence and greater accuracy.",
  image: {
    src: "/assets/images/feature1.jpg",
    alt: "Suited man looking at tablet device.",
  },
};
