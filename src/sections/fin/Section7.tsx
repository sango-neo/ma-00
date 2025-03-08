"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Section7() {
  return (
    <section id="fin-cta-section" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Unlock Enhanced Financial Control Today
        </h2>
        <p className="md:text-md">
          Discover how MOAGO can transform your financial management with
          real-time insights and accountability.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Learn More">Learn More</Button>
          <Button title="Sign Up" variant="secondary">
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
}
