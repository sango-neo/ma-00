"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { cn } from "@/lib/utils";

type ImageProps = {
  src: string;
  alt?: string;
};

type ContentProps = {
  tagline: string;
  heading: string;
  description: string;
  image: ImageProps;
};

type Props = {
  contents: ContentProps[];
  images: ImageProps[];
};

export type Layout348Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout348 = (props: Layout348Props) => {
  const { contents, images } = {
    ...Layout348Defaults,
    ...props,
  };

  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight;
      const currentScrollPosition = window.scrollY + sectionHeight / 2;
      const currentSection = Math.floor(currentScrollPosition / sectionHeight);
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="px-[5%] scroll-smooth">
      <div className="container">
        <div className="relative grid gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20">
          <div className="sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                className={clsx("absolute w-full", {
                  "opacity-100": activeSection === index,
                  "opacity-0": activeSection !== index,
                })}
                alt={image.alt}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-12 md:block">
            {contents.map((content, index) => (
              <div key={index}>
                <div className="flex flex-col items-start justify-center md:h-screen">
                  <p className="mb-3 font-semibold md:mb-4">{content.tagline}</p>
                  <h2 className="rb-5 mb-5 text-2xl font-semibold md:mb-6 md:text-3xl lg:text-4xl text-ma_darkBlue">
                    {content.heading}
                  </h2>
                  <p className="md:text-md">{content.description}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                   
                  </div>
                  <div className="mt-10 block w-full md:hidden">
                    <img src={content.image.src} className="w-full" alt={content.image.alt} />
                  </div>
                  <div
                    className={cn(
                      "fixed inset-0 -z-10 bg-ma_transBlue transition-opacity duration-300",
                      {
                        "opacity-100": activeSection === 0 || activeSection === 2 || activeSection === 4,
                        "opacity-0": activeSection !== 0 && activeSection !== 2,
                      },
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout348Defaults: Props = {
  contents: [
    {
      tagline: "",
      heading: "Our Vision",
      description:
        "To make a visible and positive impact on infrastructure planning and management by exceeding service delivery goals and fostering sustainable development across Africa.",
      
      image: {
        src: "/assets/images/primary-logo.svg",
        alt: "Relume placeholder image 4",
      },
    },
    {
        tagline: "",
        heading: "Our Mission",
        description:
          "To deliver professional services that facilitate, support, and implement innovative Engineering and Technology (ET) solutions, enhancing decision-making processes and improving service delivery in both the government and private sectors.",
        
        image: {
          src: "/assets/images/primary-logo.svg",
          alt: "Relume placeholder image 4",
        },
      },
    {
      tagline: "",
      heading: "Who We Are",
      description:
        "MOAGO is a cutting-edge web-based application designed to revolutionize the management and maintenance of infrastructure and equipment. By delivering professional engineering services and innovative technological solutions, we cater to the needs of both public and private sectors. Our work is deeply rooted in supporting South Africa's socio-economic growth by optimizing infrastructure development and extending the lifespan of critical assets.",
      
      image: {
        src: "/assets/images/primary-logo.svg",
        alt: "Relume placeholder image 1",
      },
    },
    {
      tagline: "",
      heading: "What We Do",
      description:
        "We specialize in simplifying asset management through modern, web-based tools that streamline accounting, tracking, and maintenance processes. Our platform integrates innovative features such as an operational call center and maintenance management tools to ensure that tasks are completed promptly, efficiently, and by the right personnel. This robust system empowers organizations to manage their assets comprehensively, improving communication, reducing costs, and enhancing operational efficiency.",
      
      image: {
        src: "/assets/images/primary-logo.svg",
        alt: "Relume placeholder image 2",
      },
    },
    {
      tagline: "",
      heading: "Our Collaborations",
      description:
        "MOAGO proudly collaborates with professional, well-established implementing agencies that play a pivotal role in the planning and construction of South Africa’s infrastructure. By leveraging collective expertise and resources, we deliver exceptional services characterized by quality, reliability, professionalism, and trust.",
      
      image: {
        src: "/assets/images/primary-logo.svg",
        alt: "Relume placeholder image 3",
      },
    },
  ],
  images: [
    {
      src: "/assets/images/primary-logo.svg",
      alt: "Relume placeholder image 1",
    },
    {
      src: "/assets/images/primary-logo.svg",
      alt: "Relume placeholder image 2",
    },
    {
      src: "/assets/images/primary-logo.svg",
      alt: "Relume placeholder image 3",
    },
    {
      src: "/assets/images/primary-logo.svg",
      alt: "Relume placeholder image 4",
    },
    {
        src: "/assets/images/primary-logo.svg",
        alt: "Relume placeholder image 4",
      },
      {
        src: "/assets/images/primary-logo.svg",
        alt: "Relume placeholder image 4",
      },
  ],
};
