import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  firstImage: ImageProps;
  secondImage: ImageProps;
};

export type Layout438Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout438 = (props: Layout438Props) => {
  const {heading, description, firstImage, secondImage } = {
    ...Layout438Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-28 pb-0">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-16 gap-y-6 sm:gap-y-12 md:grid-cols-[1fr_0.75fr_0.5fr]">
          <div className="order-last md:order-first">
            <img
              src={firstImage.src}
              className="w-full"
              alt={firstImage.alt}
            />
          </div>
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-ma_darkBlue text-xl text-center md:text-start">{description}</p>
            </div>
          </div>
          <img
            src={secondImage.src}
            className="order-last aspect-square w-1/2 object-cover hidden md:block"
            alt={secondImage.alt}
          />
        </div>
      </div>
    </section>
  );
};

export const Layout438Defaults: Props = {
  heading: "Medium length section heading goes here",
  description:
    "With Moago’s integrated system, you are able to implement a proactive streamlined maintenance process that is aimed at ensuring managed assets are kept at satisfactory performance levels while still providing the tools to react timeously to unexpected asset breakdowns.",
  firstImage: {
    src: "/assets/images/o&m-opman.png",
    alt: "Maintenance man",
  },
  secondImage: {
    src: "/assets/images/clock-unscreen.gif",
    alt: "Maintenance time",
  },
};
