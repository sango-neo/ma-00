"use client";
import { motion, useMotionTemplate, useMotionValue, useInView, animate, ValueAnimationTransition } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};

export type ProjectManagementOverviewProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ProjectManagementOverview = (props: ProjectManagementOverviewProps) => {
  const { heading, description, image } = {
    ...ProjectManagementOverviewDefaults,
    ...props,
  };

  const decorativeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(decorativeRef, { once: true, margin: "-100px" });
  
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(250px 250px at ${xPercentage}% ${yPercentage}%, black, transparent)`;


  useEffect(() => {
    if (!decorativeRef.current || !isInView) return;

    const { height, width } = decorativeRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [0, width / circumference, (width + height) / circumference, (width * 2 + height) / circumference, 1];

    const options:ValueAnimationTransition = {
      times,
      duration: 2.5,
      ease: "easeInOut",
    };

    // Animate the border drawing
    xPercentage.set(0);
    yPercentage.set(0);

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [isInView]);
  
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-48">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          
        <div className="">
            <div className="relative w-full inline-flex justify-end items-center">
                <img 
                  src={image.src} 
                  className="w-full object-cover rounded-2xl z-0" 
                  alt={image.alt} 
                />
                <motion.div 
                  ref={decorativeRef}
                  className="hidden border-[3px] border-ma_accent rounded-xl w-full absolute right-[10%] h-[80%] -z-20 md:block"
                  style={{
                    maskImage,
                    WebkitMaskImage: maskImage
                  }}
                />
                <div 
                  className="hidden bg-ma_darkBlue rounded-xl w-full absolute right-[5%] h-[120%] -z-10 md:block" 
                />
            </div>
          </div>
          
          <div className="max-w-md mx-auto text-center md:text-start md:max-w-none md:mx-0">
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
          
        </div>
      </div>
    </section>
  );
};

export const ProjectManagementOverviewDefaults: Props = {
  heading: "Enhanced Project Management Support for An Optimised Execution of Capital Projects",
  description:
    "MOAGO’s Project Management module streamlines the governance of capital projects, ensuring compliance and transparency. Our solution supports every phase in the project lifecycle, from initiation to closure, empowering teams to deliver successful outcomes.",
  image: {
    src: "/assets/images/feature1.jpg",
    alt: "Suited man looking at tablet device.",
  },
};
