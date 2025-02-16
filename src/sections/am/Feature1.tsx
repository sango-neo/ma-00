"use client";

import clsx from "clsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type VideoProps = {
  image: ImageProps;
  url: string;
};

type TabProps = {
  heading: string;
  description: string;
  image?: ImageProps;
  video?: VideoProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  tabs: TabProps[];
  buttons: ButtonProps[];
};

export type Layout494Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout494 = (props: Layout494Props) => {
  const { tagline, heading, description, tabs, buttons } = {
    ...Layout494Defaults,
    ...props,
  };
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-36">
      <div className="container">
        <div className="relative flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-6 lg:pr-10">
            <div className="mb-8 text-center md:hidden">
              <p className="mb-3 font-medium md:mb-4 text-sm text-gray-300">{tagline}</p>
              <h2 className="mb-5 text-2xl leading-[1.1] font-semibold md:mb-6 md:text-3xl tracking-tight text-ma_darkBlue">{heading}</h2>
              <p className="md:text-md">{description}</p>
            </div>
            <AnimatePresence mode="wait" initial={false}>
              {tabs.map((tab, index) => {
                if (activeTab !== index) return null;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="relative flex size-full items-center justify-center"
                  >
                    {tab.image && (
                      <img
                        src={tab.image.src}
                        alt={tab.image.alt}
                        className="mb-6 w-full md:mb-0 rounded-lg"
                      />
                    )}
                    {/* {tab.video && (
                      <Dialog>
                        <DialogTrigger className="relative flex w-full items-center justify-center">
                          <img
                            src={tab.video.image.src}
                            alt={tab.video.image.alt}
                            className="size-full object-cover rounded-lg"
                          />
                          <FaCirclePlay className="absolute z-20 size-16 text-white" />
                          <span className="absolute inset-0 z-10 bg-black/50" />
                        </DialogTrigger>
                        <DialogContent>
                          <VideoIframe video={tab.video.url} />
                        </DialogContent>
                      </Dialog>
                    )} */}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          <div className="w-full md:w-1/2 md:pl-6 lg:pl-10">
            <div className="mb-8 hidden md:block">
              <p className="mb-3 font-medium md:mb-4 text-sm text-gray-400">{tagline}</p>
              <h2 className="mb-5 text-2xl font-semibold md:mb-6 md:text-3xl lg:text-4xl tracking-tight text-ma_darkBlue leading-[1.1]">{heading}</h2>
              <p className="md:text-md">{description}</p>
            </div>
            <div className="static flex flex-col flex-wrap justify-stretch md:block">
              <div className="relative grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:mb-0 md:items-stretch">
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={clsx("cursor-pointer border-b border-ma_blue py-4", {
                      "opacity-100": activeTab === index,
                      "opacity-25": activeTab !== index,
                    })}
                  >
                    <h2 className="text-xl font-semibold md:text-2xl text-ma_blue tracking-tight">{tab.heading}</h2>
                    <motion.div
                      initial={false}
                      animate={{
                        height: activeTab === index ? "auto" : 0,
                        opacity: activeTab === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-2">{tab.description}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <a href={"/contact-us"}><button className="w-full md:w-fit mt-5 px-6 py-3 rounded bg-ma_blue text-white font-medium">Schedule consultation</button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout494Defaults: Props = {
  tagline: "ASSET REGISTER",
  heading: "More than a Spreadsheet",
  description:
    "",
  tabs: [
    {
      heading: "Comprehensive Asset Tracking",
      description:
        "Our integrated system provides real-time updates, allowing you to monitor asset locations, conditions, and usage effortlessly. Eliminate inefficiencies, reduce losses, and make smarter decisions with accurate, centralized data.",
      image: {
        src: "/assets/images/am-tracking.jpg",
        alt: "placeholder image 1",
      },
    },
    {
      heading: "A Suite of Performance Insights",
      description:
        "Our system provides detailed analytics on asset performance, lifecycle costs, and maintenance trends, empowering you to make informed decisions that align with your goals.",
        image: {
          src: "/assets/images/am-performance.jpg",
          alt: "placeholder image 2",
        },
    },
    {
      heading: "Resource-saving Proactive Maintenance",
      description:
        "Proactive maintenance prevents costly breakdowns by addressing issues early, reducing unplanned downtime, repair costs, and resource waste while extending equipment lifespan, which ultimately improves operational efficiency.",
      image: {
        src: "/assets/images/am-maintenance.jpg",
        alt: "placeholder image 3",
      },
    },
  ],
  buttons: [
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
      variant: "link",
      size: "link",
    },
  ],
};
