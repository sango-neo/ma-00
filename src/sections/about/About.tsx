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

export type AboutProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const About = (props: AboutProps) => {
  const { contents, images } = {
    ...AboutDefaults,
    ...props,
  };

  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.md\\:h-screen');
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Find which section is most visible in the viewport
      let maxVisibleSection = 0;
      let maxVisibleArea = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        
        if (visibleHeight > maxVisibleArea) {
          maxVisibleArea = visibleHeight;
          maxVisibleSection = index;
        }
      });

      setActiveSection(maxVisibleSection);
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
              <div key={index} className={cn(
                "absolute w-full transition-all duration-700 ease-in-out",
                {
                "opacity-100 translate-y-0": activeSection === index,
                "opacity-0 translate-y-4": activeSection !== index,
              })}>
                {[2, 4].includes(index) ? (
                  <div className="relative">
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 -z-10 bg-ma_blue/30 blur-3xl transform-gpu" />
                    
                    {/* Image container with overlay */}
                    <div className="relative">
                      <img
                        src={image.src}
                        className="w-full rounded-lg"
                        alt={image.alt}
                      />
                      
                    </div>
                  </div>
                ) : index === 1 ? (
                  <div className="relative">
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 -z-10 bg-ma_blue/50 blur-3xl transform-gpu" />
                    
                    {/* Video container with overlay */}
                    <div className="relative">
                      <video
                        className="w-full rounded-lg"
                        src="/assets/animated/mission.mp4"
                        preload="auto"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls={false}
                      />
                    
                    </div>
                  </div>
                ) : (
                  <img
                    src={image.src}
                    className={cn("w-full rounded-lg", {
                      "w-[80%]": index === 0,
                    })}
                    alt={image.alt}
                  />
                )}
              </div>
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
                    <img src={content.image.src} className="w-full rounded-lg" alt={content.image.alt} />
                  </div>
                  <div
                    className={cn(
                      "fixed inset-0 -z-10 transition-opacity duration-300",
                      {
                        "opacity-100": activeSection === index,
                        "opacity-0": activeSection !== index,
                        "bg-ma_altBlue/20": index === 0,
                        "bg-ma_blue/20": index === 1,
                        "bg-ma_darkBlue/20": index === 2,
                        "bg-ma_accentGreen/20": index === 3,
                        "bg-ma_accent/20": index === 4,
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

export const AboutDefaults: Props = {
  contents: [
    {
      tagline: "",
      heading: "Our Vision",
      description:
        "To make a visible and positive impact on infrastructure planning and management by exceeding service delivery goals and fostering sustainable development across Africa.",
      
      image: {
        src: "/assets/images/primary-logo.svg",
        alt: "Img-1 - Vision",
      },
    },
    {
        tagline: "",
        heading: "Our Mission",
        description:
          "To deliver professional services that facilitate, support, and implement innovative Engineering and Technology (ET) solutions, enhancing decision-making processes and improving service delivery in both the government and private sectors.",
        
        image: {
          src: "/assets/images/primary-logo.svg",
          alt: "Img-2 - Mission",
        },
      },
    {
      tagline: "",
      heading: "Who We Are",
      description:
        "MOAGO is a cutting-edge web-based application designed to revolutionize the management and maintenance of infrastructure and equipment. By delivering professional engineering services and innovative technological solutions, we cater to the needs of both public and private sectors. Our work is deeply rooted in supporting South Africa's socio-economic growth by optimizing infrastructure development and extending the lifespan of critical assets.",
      
      image: {
        src: "/assets/images/who-we-are.jpg",
        alt: "Img-3 - Who We Are",
      },
    },
    {
      tagline: "",
      heading: "What We Do",
      description:
        "We specialize in simplifying asset management through modern, web-based tools that streamline accounting, tracking, and maintenance processes. Our platform integrates innovative features such as an operational call center and maintenance management tools to ensure that tasks are completed promptly, efficiently, and by the right personnel. This robust system empowers organizations to manage their assets comprehensively, improving communication, reducing costs, and enhancing operational efficiency.",
      
      image: {
        src: "/assets/images/what-we-do.png",
        alt: "Img-4 - What We Do",
      },
    },
    {
      tagline: "",
      heading: "Our Collaborations",
      description:
        "MOAGO proudly collaborates with professional, well-established implementing agencies that play a pivotal role in the planning and construction of South Africa's infrastructure. By leveraging collective expertise and resources, we deliver exceptional services characterized by quality, reliability, professionalism, and trust.",
      
      image: {
        src: "/assets/images/collab.jpg",
        alt: "Img-5 - Our Collaborations",
      },
    },
  ],
  images: [
    {
      src: "/assets/images/primary-logo.svg",
      alt: "Img-1 - Vision",
    },
    {
      src: "/assets/images/mission.mp4",
      alt: "Img-2 - Mission",
    },
    {
      src: "/assets/images/who-we-are.jpg",
      alt: "Img-3 - Who We Are",
    },
    {
      src: "/assets/images/what-we-do.png",
      alt: "Img-4 - What We Do",
    },
    {
      src: "/assets/images/collab.jpg",
      alt: "Img-5 - Our Collaborations",
    },
    // {
    //   src: "/assets/images/primary-logo.svg",
    //   alt: "Relume placeholder image 4",
    // },
  ],
};
