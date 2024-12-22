"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, ComponentPropsWithoutRef, Fragment,  } from "react";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type SubMenuLink = {
  url: string;
  image: ImageProps;
  title: string;
  description: string;
  animation: string;
};

type LinkGroup = {
  subMenuLinks: SubMenuLink[];
};

type DropdownFooter = {
  title: string;
  link: string;
  url: string;
};

type MegaMenuProps = {
  linkGroups: LinkGroup[];
  dropdownFooter: DropdownFooter;
};

type NavLink = {
  url: string;
  title: string;
  megaMenu?: MegaMenuProps;
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
};

export type Navbar9Props = ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Navbar9 = (props: Navbar9Props) => {
  const { logo, navLinks } = {
    ...Navbar9Defaults,
    ...props,
  } as Props;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1281px)");

  return (
    <nav className="relative z-[999] flex min-h-20 w-full items-center bg-white px-[5%] md:min-h-18 shadow-2xl shadow-gray-400/10">
      <div className="mx-auto flex size-full max-w-7xl items-center justify-between">
        <a href={logo.url}>
          <Image src={logo.src} alt={logo.alt!} width={150} height={36} />
        </a>
        <div className="absolute hidden h-[calc(100vh-80px)] overflow-auto bg-white px-[5%] pb-24 pt-4 md:pb-0 xl:static xl:ml-6 xl:flex xl:h-auto xl:flex-1 xl:items-center xl:justify-end xl:gap-32 xl:border-none xl:bg-none xl:px-0 xl:pt-0">
          <div className="flex flex-col items-center xl:flex-row">
            {navLinks.map((navLink, index) => (
              <div key={index}>
                {navLink.megaMenu ? (
                  <SubMenu megaMenu={navLink.megaMenu} title={navLink.title} isMobile={isMobile} />
                ) : (
                  <a
                    href={navLink.url}
                    className="relative block w-auto py-3 text-md xl:inline-block xl:px-4 xl:py-6 xl:text-base"
                  >
                    {navLink.title}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="border border-ma_darkBlue py-2 px-4 rounded">Contact Us</button>
          </div>
        </div>
        <button
          className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center xl:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
            variants={topLineVariants}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={isMobileMenuOpen ? "open" : "closed"}
            variants={middleLineVariants}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
            variants={bottomLineVariants}
          />
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={{
              open: { height: "80dvh" },
              close: { height: "auto" },
            }}
            animate={isMobileMenuOpen ? "open" : "close"}
            initial="close"
            exit="close"
            className="absolute left-0 right-0 top-full w-full overflow-hidden xl:hidden"
            transition={{ duration: 0.4 }}
          >
            <motion.div
              variants={{
                open: { y: 0 },
                close: { y: "-100%" },
              }}
              animate={isMobileMenuOpen ? "open" : "close"}
              initial="close"
              exit="close"
              transition={{ duration: 0.4 }}
              className="absolute left-0 right-0 top-0 block h-dvh overflow-auto bg-white px-[5%] pb-8 pt-4"
            >
              <div className="flex flex-col">
                {navLinks.map((navLink, index) => (
                  <div key={index}>
                    {navLink.megaMenu ? (
                      <SubMenu
                        megaMenu={navLink.megaMenu}
                        title={navLink.title}
                        isMobile={isMobile}
                      />
                    ) : (
                      <a href={navLink.url} className="block py-3 text-md">
                        {navLink.title}
                      </a>
                    )}
                  </div>
                ))}
                <div className="mt-6 flex flex-col gap-4">
                    <button className="border border-ma_darkBlue py-2 px-4 rounded">Contact Us</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SubMenu = ({
  title,
  megaMenu,
  isMobile,
}: {
  title: string;
  megaMenu: MegaMenuProps;
  isMobile: boolean;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className="relative flex w-full items-center justify-between whitespace-nowrap py-3 text-md xl:w-auto xl:justify-start xl:gap-2 xl:px-4 xl:py-6 xl:text-base"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <motion.span
          animate={isDropdownOpen ? "rotated" : "initial"}
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z" />
            </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.nav
            variants={{
              open: {
                opacity: 1,
                height: "var(--height-open, auto)",
              },
              close: {
                opacity: 0,
                height: "var(--height-close, 0)",
              },
            }}
            animate={isDropdownOpen ? "open" : "close"}
            initial="close"
            exit="close"
            transition={{ duration: 0.2 }}
            className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-white xl:absolute xl:w-screen xl:border-b xl:border-border-primary xl:px-[5%] xl:[--height-close:auto] shadow-xl shadow-ma_darkBlue/5"
          >
            <div className="mx-auto flex size-full max-w-full items-center justify-between">
              <div className="flex w-full flex-col xl:flex-row">
                <div className="grid flex-1 grid-cols-1 content-start items-start gap-x-8 gap-y-2 py-4 md:grid-cols-2 md:gap-y-6 md:py-8 xl:auto-cols-fr xl:grid-cols-4 xl:content-stretch xl:items-stretch xl:gap-y-0">
                  {megaMenu.linkGroups.map((linkGroup, index) => (
                    <Fragment key={index}>
                      {linkGroup.subMenuLinks.map((subMenuLink, index) => (
                        <a
                          key={index}
                          href={subMenuLink.url}
                          className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2 xl:border-r xl:border-r-gray-200 xl:last:border-none xl:pr-3"
                        >
                          <div className="flex size-6 flex-col items-center justify-center">
                            <Image
                              src={subMenuLink.image.src}
                              alt={subMenuLink.image.alt!}
                              className="shrink-0"
                              width={50}
                              height={50}
                            />
                          </div>
                          <div className="flex flex-col items-start justify-center">
                            <h5 className="font-semibold">{subMenuLink.title}</h5>
                            <p className="hidden text-sm md:block">{subMenuLink.description}</p>
                          </div>
                          <div className="self-end justify-self-stretch">
                          <video src={subMenuLink.animation} width={60} height={60} muted controls={false} autoPlay></video>
                          </div>
                        </a>
                      ))}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mb-6 flex w-full flex-col items-start justify-between p-6 sm:items-center xl:mb-0 xl:flex-row xl:px-0 xl:py-3">
              <div className="absolute -left-[50vw] -right-[50vw] bottom-0 top-0 w-[200vw] bg-background-secondary" />
              <div className="relative z-10 mr-auto flex flex-col gap-y-4 sm:mx-auto sm:grid sm:auto-cols-fr sm:grid-cols-[max-content_max-content] sm:gap-x-1">
                <p>{megaMenu.dropdownFooter.title}</p>
                <a href={megaMenu.dropdownFooter.url} className="underline">
                  {megaMenu.dropdownFooter.link}
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navbar9Defaults: Navbar9Props = {
  logo: {
    url: "/",
    src: "/assets/images/primary-logo.svg",
    alt: "Moago Logo",
  },
  navLinks: [
    { title: "Home", url: "/" },
    {
    title: "Products & Services",
    url: "#",
    megaMenu: {
        linkGroups: [
        {
            subMenuLinks: [
            {
                url: "/services/asset-management",
                image: {
                src: "/assets/images/ma-icon.svg",
                alt: "Icon 1",
                },
                title: "Asset Management",
                description: "Fixed and Movable Asset Management solutions.",
                animation: "/assets/animated/project.mp4",
            },
            ],
        },
        {
            subMenuLinks: [
            {
                url: "/services/operations-maintenance",
                image: {
                src: "/assets/images/ma-icon.svg",
                alt: "Icon 2",
                },
                title: "Operations and Maintenance",
                description: "Financial Facility Management services",
                animation: "/assets/animated/gears.mp4",
            },
            ],
        },
        {
            subMenuLinks: [
            {
                url: "/services/project-management",
                image: {
                src: "/assets/images/ma-icon.svg",
                alt: "Icon 3",
                },
                title: "Integrated Services and Support",
                description: "Financial management services and more.",
                animation: "/assets/animated/chart.mp4"
            },
            ],
        },
        {
            subMenuLinks: [
            {
                url: "/services/wis",
                image: {
                src: "/assets/images/ma-icon.svg",
                alt: "Icon 4",
                },
                title: "WIS - Web-based Integrated System",
                description: "Integrated Call Centre and Other Support services.",
                animation: "/assets/animated/cloud.mp4"
            },
            ],
        },
        ],
        dropdownFooter: {
        title: "",
        link: "",
        url: "#",
        },
    },
    },
    { title: "About Moago", url: "/about" },
    { title: "News & Insights", url: "/resources/news-insights" },
  ],
};

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};
