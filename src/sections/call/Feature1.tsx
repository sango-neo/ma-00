"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { RxChevronRight } from "react-icons/rx";

export function Layout30() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/assets/images/ma-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h1 className="heading-2">
                  Centralized Communication
                </h1>
                <p>
                  A single platform for all maintenance and operational
                  communications, enhancing collaboration.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/assets/images/ma-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h1 className="heading-2">
                  Quick Issue Resolution
                </h1>
                <p>
                  Rapid response to maintenance requests ensures minimal
                  downtime and efficient service delivery.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/assets/images/ma-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h1 className="heading-2">
                  Streamlined Requests
                </h1>
                <p>
                  Easily manage and track maintenance requests for improved
                  operational efficiency.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="/assets/images/ma-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h1 className="heading-2">
                  Always Available
                </h1>
                <p>
                  24/7 support ensures that maintenance needs are addressed
                  anytime, day or night.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
             <button className="ma-primary-btn">Learn more</button>
            </div>
          </div>
          <Dialog>
            <DialogTrigger className="relative flex w-full items-center justify-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
              <span className="absolute inset-0 z-10 bg-black/50" />
              <FaCirclePlay className="absolute z-20 size-16 text-white" />
            </DialogTrigger>
            <DialogContent>
              <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
