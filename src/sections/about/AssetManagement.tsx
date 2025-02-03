"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { ButtonProps } from "@relume_io/relume-ui";
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ImageProps = {
  src: string;
  alt?: string;
};

type CardProps = {
  image: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps & { url: string };
};

type Props = {
  image: ImageProps;
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  cards: CardProps[];
};

export type AssetManagementProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const AssetManagement = (props: AssetManagementProps) => {
  const { image, tagline, heading, description, buttons, cards } = {
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
      <section id="asset-register" className="relative px-[5%] py-16 md:py-24 lg:py-36 xl:py-48">
        <div className="relative mb-6 flex items-center justify-center px-6 py-16 md:mb-8 md:px-8 md:py-24">
          <div className="max-w-md text-center text-text-alternative">

            <p className="mb-3 font-medium md:mb-4 text-sm">{tagline}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 -z-10">
            <img src={image.src} className="size-full object-cover" alt={image.alt} />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-8">
          {cards.map((card, index) => {
            return (
              <div key={index} className="flex border border-border-primary p-8 text-center">
                <div className="mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
                  <div className="mb-3 md:mb-4">
                    <img
                      src={card.image.src}
                      className="size-12 object-cover"
                      alt={card.image.alt}
                    />
                  </div>
                  <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl">
                    {card.heading}
                  </h3>
                  <p>{card.description}</p>
                  <Button {...card.button} className="mt-6 md:mt-8" asChild>
                    <a href={card.button.url}>{card.button.title}</a>
                  </Button>
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
      id="relume"
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
              <div className="absolute inset-0 bg-gradient-to-t from-ma_darkBlue/90 via-ma_darkBlue/50 to-ma_darkBlue/30" />
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
                    
                      <Link href={card.button.url} className={cn("ma-primary-btn mt-6", index % 2 === 0 ? "ma-primary-btn" : "ma-primary-btn-alt")}>{card.button.title}</Link>
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
  buttons: [
    { title: "Button", variant: "secondary-alt" },
    {
      title: "Button",
      variant: "link-alt",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
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
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
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
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
