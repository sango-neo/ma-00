"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";


export function CCFAQ() {
  return (
    <section id="" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#F5F5F5]">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="heading-1">
            FAQs
          </h2>
          <p>
            Discover answers to your questions about MOAGO's Call Center feature
            and its benefits.
          </p>
        </div>
        <Accordion type="multiple" defaultValue={["item-0"]} className="space-y-4">
          <AccordionItem value="item-0" className="rounded-xl px-4 py-3 bg-ma_blue/5 border border-ma_blue">
            <AccordionTrigger className="md:py-2 md:text-md">
              What is the Call Center?
            </AccordionTrigger>
            <AccordionContent className="md:pb-3">
              MOAGO's Call Center is an integrated platform designed to
              streamline communication for maintenance and support. It ensures
              that all operational queries are addressed in real-time by the
              appropriate personnel. This enhances user satisfaction and
              operational efficiency.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1" className="rounded-xl px-4 py-3 bg-ma_blue/5 border border-ma_blue">
            <AccordionTrigger className="md:py-2 md:text-md">
              How does it work?
            </AccordionTrigger>
            <AccordionContent className="md:pb-3">
              The Call Center function connects users with the right team
              members for swift issue resolution. It operates through a
              centralized system, ensuring that no request goes unnoticed. This
              real-time interaction improves response times significantly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="rounded-xl px-4 py-3 bg-ma_blue/5 border border-ma_blue">
            <AccordionTrigger className="md:py-2 md:text-md">
              Who can use it?
            </AccordionTrigger>
            <AccordionContent className="md:pb-3">
              The Call Center feature is designed for both private and
              government sectors. Any organization utilizing MOAGO's system can
              benefit from this feature. It is particularly useful for teams
              managing maintenance and operational queries.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="rounded-xl px-4 py-3 bg-ma_blue/5 border border-ma_blue">
            <AccordionTrigger className="md:py-2 md:text-md">
              What are its benefits?
            </AccordionTrigger>
            <AccordionContent className="md:pb-3">
              The Call Center enhances communication, ensuring timely responses
              to maintenance requests. It promotes accountability by documenting
              all interactions. This leads to improved service delivery and user
              satisfaction.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="rounded-xl px-4 py-3 bg-ma_blue/5 border border-ma_blue">
            <AccordionTrigger className="md:py-2 md:text-md">
              Is it customizable?
            </AccordionTrigger>
            <AccordionContent className="md:pb-3">
              Yes, MOAGO's Call Center can be tailored to meet the specific
              needs of different sectors. Organizations can customize workflows
              and response protocols. This ensures that urgent requests are
              prioritized effectively.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
