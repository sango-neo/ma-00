"use client";

import MAIcon from "@/icons/ma-icon.svg";
import { ValueAnimationTransition, animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Challenges = () => {
    const [hoveredCard, setHoveredCard] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const startInterval = () => {
            intervalRef.current = setInterval(() => {
                if (isHovered) return;
                setHoveredCard((prev) => (prev + 1) % challengesList.length);
            }, 11000);
        };

        startInterval();

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isHovered]);

    const handleMouseEnter = (idx: number) => {
        setHoveredCard(idx);
        setIsHovered(true);
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <section className="bg-gradient-to-b from-ma_darkBlue to-[#05121E] text-white py-20 px-[5%] relative overflow-clip lg:py-36">
            <Image
                src="/assets/images/ma-bg-africa.png"
                alt="ma-africa background icon"
                width={610}
                height={667}
                className="absolute -top-[40px] -right-[100px] w-2/3 md:w-auto"
            />
            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center gap-14 ">
                    {/* feature section header */}
                    <div className="max-w-[800px]">
                        <h2 className="font-semibold text-2xl tracking-tight text-center mb-6 xl:text-3xl max-w-md mx-auto">
                            Discover MOAGO’s Integrated Management Solutions
                        </h2>
                        <p className="text-center text-white/85">
                        MOAGO seamlessly integrates all your asset management needs into one powerful system. Experience enhanced efficiency and collaboration across operations, finance, and project management.
                        </p>
                    </div>
                    {/* Cards Grid */}
                    <section className="relative grid grid-cols-1 justify-items-center gap-8 w-full lg:grid-cols-2 lg:grid-rows-2">
                        {challengesList.map((card, cardIdx) => (
                            <Card
                                key={card.title}
                                {...card}
                                selected={hoveredCard === cardIdx}
                                onMouseEnter={() => handleMouseEnter(cardIdx)}
                                onMouseLeave={handleMouseLeave}
                            />
                        ))}
                        {/* first iteration */}
                        <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:block">
                            <div className="absolute bg-ma_accent/60 rounded-full w-full h-full blur-3xl -z-10"></div>
                            <div>
                                {challengesList.map((card, idx) => (
                                    <Image
                                        key={card.title}
                                        src={card.image}
                                        alt={`${card.title} image`}
                                        className={`rounded-xl aspect-square transition-opacity duration-300 ${
                                            hoveredCard === idx ? 'opacity-100' : 'opacity-0'
                                        } ${idx === 0 ? '' : 'absolute top-0 left-0'}`}
                                        width={280}
                                        height={280}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                    {/* CTA */}
                    <Link href="/services/asset-management" className="text-white text-center py-3 px-6 bg-ma_accent rounded w-full sm:w-fit">
                        View Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

const challengesList = [
    {
        title: "Complete Asset Register",
        description: "Maintain a comprehensive record of all assets for better tracking and management.",
        image: "/assets/images/asset-map.jpg"
    },
    {
        title: "Operations and Maintenance",
        description: "Streamline maintenance tasks and enhance operational efficiency with proactive management tools.",
        image: "/assets/images/maintenance.jpg"
    },
    {
        title: "Integrated Call Center",
        description: "Address maintenance and support queries in real-time for improved communication and responsiveness.",
        image: "/assets/images/cc-square.jpg"
    },
    {
        title: "Supplier Database Management",
        description: "Efficiently manage supplier relationships, ensure timely execution of work to meet quality standards, and monitor supplier performance.",
        image: "/assets/images/am-tracking.jpg"
    },
];

// Challenges Card with Framer Motion border effects:

const Card = (props: (typeof challengesList)[number] & { selected: boolean; onMouseEnter: () => void; onMouseLeave: () => void }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const xPercentage = useMotionValue(50);
    const yPercentage = useMotionValue(50);

    const maskImage = useMotionTemplate`radial-gradient(280px 280px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

    useEffect(() => {
        if (!cardRef.current || !props.selected) return;

        xPercentage.set(0);
        yPercentage.set(0);

        const { height, width } = cardRef.current.getBoundingClientRect();
        const circumference = height * 2 + width * 2;

        const times = [0, width / circumference, (width + height) / circumference, (width * 2 + height) / circumference, 1];

        const options: ValueAnimationTransition = {
            times,
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
        };

        animate(xPercentage, [0, 100, 100, 0, 0], options);
        animate(yPercentage, [0, 0, 100, 100, 0], options);
    }, [props.selected]);

    return (
        <div
            ref={cardRef}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            className="border border-white/15 flex flex-col p-5 rounded-xl gap-5 items-center text-center max-w-[315px] relative transition-all"
        >
            {props.selected && (
                <motion.div
                    className="absolute transition-all inset-0 -m-px border border-ma_accent rounded-xl"
                    style={{
                        maskImage,
                        WebkitMaskImage: maskImage
                    }}
                ></motion.div>
            )}
            <MAIcon width={51} height={51} className="fill-ma_transBlue/60" />
            <div className="text-xl font-semibold tracking-tight leading-tight">{props.title}</div>
            <p>{props.description}</p>
        </div>
    );
};

export default Challenges;
