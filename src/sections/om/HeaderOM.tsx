"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  image: ImageProps;
};

export type Header139Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header139 = (props: Header139Props) => {
  const { heading, image } = {
    ...Header139Defaults,
    ...props,
  };

  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const { scrollYProgress } = useScroll();

  const containerMotion = {
    y: useTransform(scrollYProgress, [0, 0.4], ["0vh", "-5vh"]),
    width: useTransform(scrollYProgress, [0, 0.4], ["90%", "120%"]),
    height: useTransform(scrollYProgress, [0, 0.4], ["70vh", "100vh"]),
  };

  const imageTranslate = {
    y: useTransform(scrollYProgress, [0.4, 1], ["0%", "70%"]),
  };

  const videoDialogTranslate = {
    y: useTransform(scrollYProgress, [0.3, 0.4], ["0%", "200%"]),
  };

  return (
    <section id="relume" className="relative flex h-fit flex-col items-center">
      <motion.div
        className="sticky z-10 mb-[-5vh] flex h-[70vh] w-[90%] flex-col items-start justify-center overflow-hidden"
        style={containerMotion}
      >
        <div className="px-[5%] py-16 md:py-24 lg:py-28">
          <div className="container">
            <div className="max-w-[600px]">
              <h1 className="mb-5 text-3xl text-white lg:text-6xl text-center md:text-start mt-20">
                {heading}
              </h1>
            </div>
          </div>
        </div>
        <motion.div className="absolute inset-0 -z-10" style={imageTranslate}>
          <img src={image.src} alt={image.alt} className="size-full object-cover" />
          <div className="absolute inset-0 bg-ma_darkBlue/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-ma_darkBlue to-transparent" />
        </motion.div>
        {/* <Dialog>
          <DialogTrigger className="hidden md:flex" asChild>
            <motion.button
              className="absolute bottom-[5%] right-[5%] flex w-full items-center justify-center md:max-w-[14rem] lg:max-w-xxs"
              style={videoDialogTranslate}
            >
              <img src={videoImage.src} alt={videoImage.alt} className="size-full object-cover" />
              <FaCirclePlay className="absolute z-20 size-16 text-white" />
            </motion.button>
          </DialogTrigger>
          <DialogContent>
            {!isIframeLoaded && <CgSpinner className="mx-auto size-16 animate-spin text-white" />}
            <iframe
              className={clsx("z-0 mx-auto aspect-video size-full md:w-[738px] lg:w-[940px]", {
                visible: isIframeLoaded,
                hidden: !isIframeLoaded,
              })}
              src={video}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsIframeLoaded(true)}
            ></iframe>
          </DialogContent>
        </Dialog> */}
      </motion.div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
};

export const Header139Defaults: Props = {
  heading: "Proactive Maintenance: Improve Operational Efficiency. Reduce Costs.",
  image: {
    src: "/assets/images/o&m-hero.webp",
    alt: "Operations and Maintenance Hero Image",
  },
};

{
  /* 
        <motion.div
          className="absolute inset-0 -z-10 h-full bg-[repeat,no-repeat] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg)] bg-[size:auto,cover] bg-fixed bg-[position:0_0,50%]"
          style={imageTranslate}
        /> */
}
