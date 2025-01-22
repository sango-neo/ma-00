import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Link from "next/link";

type ImageProps = {
  src: string;
  alt?: string;
};

type SubHeadingProps = {
  title: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  subHeadings: SubHeadingProps[];
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Layout61Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout61 = (props: Layout61Props) => {
  const { heading, description, subHeadings, tagline, image } = {
    ...Layout61Defaults,
    ...props,
  };
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28 h-fit">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white/60 text-sm md:mb-4">{tagline}</p>
            <h2 className="text-white text-3xl lg:text-4xl mb-5">
              {heading}
            </h2>
          </div>
          <div>
            <p className="mb-6 text-white md:mb-8">{description}</p>
            <div className="mt-10 md:mt-0 grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {subHeadings.map((subHeading, index) => (
                <div key={index}>
                  <h6 className="mb-3 text-md font-semibold leading-[1.4] text-white md:mb-4 md:text-xl">
                    {subHeading.title}
                  </h6>
                  <p className="text-white">{subHeading.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link href={"/contact-us"}><button className="px-6 py-3 w-full md:w-fit rounded bg-ma_accent text-white">Schedule consultation</button></Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <img src={image.src} className="size-full object-cover" alt={image.alt} />
        </div>
      </div>
    </section>
  );
};

export const Layout61Defaults: Props = {
  tagline: "SPACE UTILISATION",
  heading: "Facility Layouts that Increase Operational Efficiencies",
  description:
    "From understanding current occupancy patterns to designing layouts that improve workflows, we empower you to make the most of your available space.",
  subHeadings: [
    {
      title: "Detailed Space Utilisation Reports and Services",
      description:
        "Facility layout assessments yielding space utilisation strategies that help you adapt your assets to meet evolving demands. ",
    },
    {
      title: "Layout Plans",
      description:
        "Use Facility Layout Plans to drive decisions that improve operational efficiencies and how people work. ",
    },
  ],
  buttons: [
    { title: "Button", variant: "secondary-alt" },
    {
      title: "Button",
      variant: "link-alt",
      size: "link",
    },
  ],
  image: {
    src: "/assets/images/bg-layouts.jpg",
    alt: "placeholder image",
  },
};
