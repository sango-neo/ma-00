"use client";

import { cn } from "@/lib/utils";
import { color } from "framer-motion";
import React from "react";

export function SupplierSummary() {
  return (
    <section id="supplier-summary" className="px-[5%] py-16 md:py-24 lg:py-28 max-w-xxl mx-auto">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 w-full max-w-md text-center md:mb-18 lg:mb-24">
            <h2 className="heading-2 mb-4">
                Streamlined Supplier Management for Optimal Performance
            </h2>
            <p className="">
            With centralised critical information on suppliers, MOAGO’s system ensures timely execution of maintenance tasks and boosts accountability.</p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12 mb-16">
            {SummaryCardContent.map((card, index) => (
                <SummaryCard key={index} title={card.title} description={card.description} icon={card.icon} color={card.color} />
            ))}
          </div>
          <button className="ma-primary-btn bg-ma_blue border-ma_blue">Schedule consultation</button>
        </div>

      </div>
    </section>

  );
}

const SummaryCard = ({title, description, icon, color}: {title: string, description: string, icon: string, color: string}) => {
  return (
    <div className={cn("flex w-full flex-col items-center text-center border border-ma_altBlue rounded-lg px-8 py-6 max-w-[320px]", `border-${color}`)}>
      <div className="rb-5 mb-5 md:mb-6">
        <img src={icon} alt={title} className="size-12" />
      </div>
      <h3 className={cn("mb-5 text-xl font-medium md:mb-6", `text-${color}`)}>
        {title}
      </h3>
      <p>
        {description}
      </p>
    </div>
  )
}

const SummaryCardContent = [
    {
        title: "Centralised Supplier Information for Quick Access",
        description: "Easily store and retrieve detailed supplier profiles.",
        icon: "/assets/images/supplier-list.svg",
        color: "ma_blue"
    },
    {
        title: "Efficient Contract Management for Transparency",
        description: "Monitor contract compliance and execution progress seamlessly.",
        icon: "/assets/images/contracts.svg",
        color: "ma_altBlue"
    },
    {
        title: "Performance Monitoring for Continuous Improvement",
        description: "Track supplier performance and drive accountability effectively.",
        icon: "/assets/images/performance-check.svg",
        color: "ma_darkBlue"
    }


]