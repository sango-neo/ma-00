"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MotionValue, useMotionValue, motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "@/utils/utils";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt: string;
};

type FeatureSectionProps = {
  heading: string;
  description: string;
  image: ImageProps;
  classNames: string;
};

type Props = {
  heading: string;
  description: string;
  featureSections: FeatureSectionProps[];
};

export type Feature2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const calculateScales = (totalSections: number, scrollYProgress: MotionValue<number>) => {
  return Array.from({ length: totalSections }, (_, index) => {
    const sectionFraction = 1 / totalSections;
    const start = sectionFraction * index;
    const end = sectionFraction * (index + 1);

    return index < totalSections - 1
      ? useTransform(scrollYProgress, [start, end], [1, 0.8])
      : useMotionValue(1);
  });
};

export const Feature2 = (props: Feature2Props) => {
  const { heading, description, featureSections } = {
    ...Feature2Defaults,
    ...props,
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 70%"],
  });

  const scales = calculateScales(featureSections.length, scrollYProgress);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-ma_transBlue">
      <div className="container max-w-7xl mx-auto">
        <div className="mx-auto mb-12 w-full max-w-xs text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-2xl font-semibold text-ma_darkBlue tracking-tighter md:mb-6 lg:text-3xl xl:text-4xl">{heading}</h2>
          {/* <p className="md:text-md">{description}</p> */}
        </div>
        <div ref={containerRef} className="sticky top-0 grid grid-cols-1 gap-6 md:gap-0">
          {featureSections.map((featureSection, index) => (
            <FeatureSection key={index} {...featureSection} scale={scales[index]} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureSection = ({
  scale,
  index,
  ...featureSection
}: FeatureSectionProps & {
  scale: MotionValue<number>;
  index: number;
}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <React.Fragment>
      {isMobile ? (
        <div className="static grid grid-cols-1 content-center overflow-hidden rounded-2xl bg-white shadow-xl shadow-black/5 md:mx-16 min-w-44">
          <div className={cn("m-6 border rounded-lg grid content-center grid-cols-1 shadow-md shadow-black/5",
            featureSection.classNames
          )}>
            <FeatureSectionContent {...featureSection} />
          </div>
        </div>
      ) : (
        <motion.div
          className={cn("static overflow-hidden flex md:sticky md:top-[10%] md:mb-[10vh] md:h-[70vh]",
            "rounded-2xl bg-white shadow-xl shadow-black/5 md:mx-16 min-w-44"
          )}
          style={{ scale }}
        >
          <div className={cn("m-6 border border-black rounded-lg grid content-center grid-cols-1 md:grid-cols-2 shadow-md shadow-black/5",
            featureSection.classNames
          )}>
            <FeatureSectionContent {...featureSection} />
          </div>
        </motion.div>
      )}
    </React.Fragment>
  );
};

const FeatureSectionContent = ({
  ...featureSection
}: FeatureSectionProps) => (
  <React.Fragment>
    <div
      className="flex flex-col items-center justify-center mt-4 md:mt-0"
    >
      <Image src={featureSection.image.src} alt={featureSection.image.alt} width={200} height={200} />
    </div>
    <div
      className={cn(
        "flex flex-col justify-center p-6 md:p-8 lg:p-12",
        "bg"
      )}
    >
      <div className="text-center my-4 flex flex-col items-center gap-x-4 md:items-start md:my-0 md:text-start">
        <h2 className="font-semibold text-2xl lg:text-3xl tracking-tight mb-4">{featureSection.heading}</h2>
        <p className="lg:text-xl">{featureSection.description}</p>
      </div>
    </div>
  </React.Fragment>
);

export const Feature2Defaults: Props = {
  heading: "Leverage Real-time Asset Tracking Capabilities",
  description: "",
  featureSections: [
    {
      heading: "Eliminate unnecessary costs",
      description:
        "Stay well within budget. With a holistic view of all assets, align and coordinate expenditure according to organisational priorities.",
      image: {
        src: "/assets/animated/save-money.gif",
        alt: "save-money benefit image",
      },
      classNames: "bg-ma_transBlue border-ma_blue text-black",
    },
    {
      heading: "Optimize resource utilisation",
      description:
        "Quickly identify overburdened or underutilised equipment and infrastructure so that you can allocate  resources appropriately and maximize asset lifecycles.",
      image: {
        src: "/assets/animated/resources.gif",
        alt: "resources benefit image",
      },
      classNames: "bg-ma_blue border-[#33CCCC] text-white",
    },
    {
      heading: "Enhanced Asset Visibility and Control",
      description:
        "With an encompassing view of asset performance, you will acquire greater control over planning for future resource requirements for your asset portfolio.",
      image: {
        src: "/assets/animated/control.gif",
        alt: "control and visibility benefit image",
      },
      classNames: "bg-white border-ma_accent text-black",
      
    },
  ],
};
