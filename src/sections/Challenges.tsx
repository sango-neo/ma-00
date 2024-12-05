"use client"

import MAIcon from "@/icons/ma-icon.svg";
import Image from "next/image";

const Challenges = () => {
  return (
    <section className="bg-gradient-to-b from-ma_darkBlue to-[#05121E] text-white py-20 px-[5%] relative">
        <Image src="/assets/images/ma-bg-africa.png" alt="ma-africa background icon" width={610} height={667} className="absolute -top-[40px] -right-[100px] w-2/3 md:w-auto" />
        <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center gap-14 ">
                {/* feature section header */}
                <div className="max-w-md xl:max-w-xl">
                    <h2 className="font-semibold text-2xl tracking-tight text-center mb-6 xl:text-3xl">A Streamlined Approach to Overcoming Asset Management Challenges</h2>
                    <p className="text-center">Moago Africa's integrated system enables you to enhance decision-making speed and confidence when addressing challenges associated with maximizing the full service potential of your managed assets.</p>
                </div>
                {/* Cards Grid */}
                <section className="relative grid grid-cols-1 justify-items-center gap-8 w-full lg:grid-cols-2 lg:grid-rows-2">
                    {challengesList && 
                        challengesList.map((card) => (
                            <ChallengesCard key={card.title} title={card.title} description={card.description} />
                        ))
                    }
                    {/* first iteration */}
                    <div className="hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:block">
                        <div className="absolute bg-ma_accent/60 rounded-full w-full h-full blur-3xl -z-10"></div>
                        <div>
                            <Image src="/assets/images/maintenance.jpg" alt="Maintenance image" className="rounded-lg aspect-square" width={315} height={315} />
                        </div>
                    </div>
                </section>
                {/* CTA */}
                <a href="/services/asset-management" className="text-white text-center py-2 px-4 bg-ma_accent rounded w-full sm:w-fit">View Services</a>
            </div>
        </div>
    </section>
  )
}


type ChallengesCardProps = {
    title: string;
    description: string;
}

const ChallengesCard = ({ title, description }: ChallengesCardProps) => {
  return (
    <div className="border-[.5px] border-white/10 rounded p-5 flex flex-col gap-5 items-center text-center max-w-[315px] hover:border-ma_accent/60 transition-all">
        <MAIcon width={51} height={51} className="fill-ma_transBlue/60" />
        <div className="text-xl font-semibold tracking-tight leading-tight">{title}</div>
        <p>{description}</p>
    </div>
  )
}


const challengesList = [
    {
        title: "Ageing Infrastructure and Equipment",
        description: "Ageing infrastructure and outdated equipment lead to frequent maintenance calls and increased operational costs, resulting in strained budgets."
    },
    {
        title: "Incomplete asset data hinders decision-making efficiency.",
        description: "Effective decision-making begins with full visibility over your assets—knowing exactly what you have, where it is, and what condition it’s in."
    },
    {
        title: "Reactive Maintenance: A Costly Gamble",
        description: "Skyrocketing costs, unplanned downtime, and shorter asset lifespans are all symptoms of reactive maintenance. Well-performing, future-proofed assets require a pro-active maintenance approach."
    },
    {
        title: "Limited Resources, Unlimited Pressure",
        description: "Proper asset management helps stretch your resources further, helping you make the optimal decision when the time to choose between maintenance and new purchases arrives (yet again)."
    },
]


export default Challenges