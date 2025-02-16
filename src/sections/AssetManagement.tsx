"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type ImageProps = {
  src: string;
  alt?: string;
};

type CardProps = {
  image: ImageProps;
  heading: string;
  description: string;
  button: {
    url: string;
    title: string;
  }
};

type Props = {
  image: ImageProps;
  tagline: string;
  heading: string;
  description: string;
  cards: CardProps[];
};

export type AssetManagementProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const AssetManagement = (props: AssetManagementProps) => {
  const { image, tagline, heading, description, cards } = {
    ...AssetManagementDefaults,
    ...props,
  };
  const isMobile = useMediaQuery("(max-width: 991px)");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const heroWidth = useTransform(scrollYProgress, [0, 1], ["100vw", "55vw"]);
  const scaleHeight = useTransform(scrollYProgress, [0, 1], ["100vh", "90vh"]);
  const position = useTransform(scrollYProgress, [0, 1], ["-5%", "0%"]);
  const cardsXPosition = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const cardsWidth = useTransform(scrollYProgress, [0, 1], ["100vw", "35vw"]);

  const cardPositions = cards.map((_, index) =>
    useTransform(
      scrollYProgress,
      [0, 0 + index * 0.01, 0.2 + index * 0.5, 1],
      ["100%", "100%", "0%", "0%"],
    ),
  );

  const motionHeroStyles = {
    width: heroWidth,
    height: scaleHeight,
    y: position,
    x: position,
  };

  const motionCardsStyles = {
    width: cardsWidth,
    height: scaleHeight,
    y: position,
    x: cardsXPosition,
  };

  if (isMobile) {
    return (
      <section id="asset-register" className="relative pb-24">
        <div className="relative mb-6 flex items-end justify-center px-6 py-32 md:mb-8 md:px-8 md:py-24 min-h-[90vh] lg:min-h-fit pb-12">
          <div className="max-w-md text-center text-white">
            <p className="mb-3 font-medium text-sm tracking-wide">{tagline}</p>
            <h2 className="heading-2 text-white mb-4 text-shadow-lg">{heading}</h2>
            <p className="leading-relaxed">{description}</p>
          </div>
          <div className="absolute inset-0 -z-10">
            <img src={image.src} className="size-full object-cover sm:object-cover object-bottom sm:object-center" alt={image.alt} />
            <div className="absolute inset-0 bg-gradient-to-t from-ma_darkBlue/90 to-transparent" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-8 px-[5%] pt-12">
          {cards.map((card, index) => {
            return (
              <div key={index} 

              className={cn("flex border bg-ma_blue/10 border-ma_blue rounded-xl p-8 text-center lg:max-w-[640px] ", index % 2 === 0 ? "bg-ma_blue/10" : "bg-ma_blue/15")}>
                <div className="mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
                  <div className="mb-3 md:mb-4">
                    <img

                      src={card.image.src}
                      className="size-6 object-cover"
                      alt={card.image.alt}
                    />
                  </div>
                  <h3 className="heading-3">
                    {card.heading}
                  </h3>
                  <p>{card.description}</p>
                  <a href={card.button.url} className={cn("ma-primary-btn mt-6", index % 2 === 0 ? "ma-primary-btn" : "ma-primary-btn-alt")}>{card.button.title}</a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section
      id="asset-register"
      ref={containerRef}
      className="relative py-16 md:py-24 lg:h-[250vh] lg:py-0"
    >
      <div className="mx-auto w-[90vw] lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-full lg:items-center lg:justify-center lg:overflow-hidden">
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-8 lg:h-[90vh] lg:w-[90vw] lg:grid-cols-[55vw_35vw] lg:gap-y-0">
          <motion.div
            style={motionHeroStyles}
            className="relative flex items-end justify-center px-6 py-16 md:px-8 md:py-24 lg:p-3"
          >
            <div className="max-w-md text-center text-white mb-24 relative z-10">
              <p className="mb-3 font-medium text-sm tracking-wide">{tagline}</p>
              <h2 className="heading-2 text-white mb-4 text-shadow-lg">{heading}</h2>
              <p className="leading-relaxed font-medium">{description}</p>
            </div>

            <div className="absolute inset-0 -z-10">
              <img src={image.src} className="size-full object-cover" alt={image.alt} />
              <div className="absolute inset-0 bg-gradient-to-t from-ma_darkBlue/90 to-transparent" />
            </div>
          </motion.div>
          <motion.div
            style={motionCardsStyles}
            className="grid grid-cols-1 gap-y-6 md:gap-y-8 lg:pl-8"
          >
            {cards.map((card, index) => {
              const motionCardStyles = {
                x: cardPositions[index],
              };

              return (
                <motion.div
                  key={index}
                  style={motionCardStyles}
                  className={cn("flex border bg-ma_blue/10 border-ma_blue rounded-xl p-8 text-center lg:max-w-[640px] ", index % 2 === 0 ? "bg-ma_blue/10" : "bg-ma_blue/15")}
                >
                  <div className="mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
                    <div className="mb-8 w-full">
                      <div className="px-6 py-3 bg-ma_blue/5 border border-ma_blue rounded-lg">
                      <h3 className="heading-3 text-ma_darkBlue mb-0">
                        {card.heading}
                        </h3>
                      </div>
                    </div>
                    <p className="text-slate-600">{card.description}</p>
                    
                      <a href={card.button.url} className={cn("ma-primary-btn mt-6", index % 2 === 0 ? "ma-primary-btn" : "ma-primary-btn-alt")}>{card.button.title}</a>
                  </div>
                </motion.div>


              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const AssetManagementDefaults: Props = {
  image: {
    src: "/assets/images/asset-reg.jpg",
    alt: "Relume placeholder image",
  },
  tagline: "Advanced Asset Register",
  heading: "A Fully-featured Centralised Asset Register with Real-Time Data",
  description:
    "Our comprehensive Asset Register feature centralises all your asset information in one web-based system. Enjoy real-time tracking and up-to-date condition data to optimise your asset management.",
  cards: [
    {
      image: {
        src: "/assets/images/ma-icon-alt.svg",
        alt: "Moago placeholder image 1",
      },
      heading: "Asset Overview",
      description:
        "Consolidate your assets for better management and operational efficiency with our integrated system.",
      button: {
        url: "./services/asset-management",
        title: "Learn more",
      },

    },
    {
      image: {
        src: "/assets/images/ma-icon-alt.svg",
        alt: "Moago placeholder image 2",
      },
      heading: "Real-Time Tracking",
      description:

        "Stay informed with real-time performance tracking and condition updates for all your assets.",
      button: {
        url: "./contact-us",
        title: "Get in touch",
      },
    },
  ],
};
