"use client";
import React from "react";
import Image from "next/image";
import { Heading, BodyText } from "@/components/shared/Typography";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChevronLeft, ChevronRight } from "@hugeicons/core-free-icons";
import { CURATED_ITEMS } from "@/data/curated";

const BANNERS = CURATED_ITEMS.slice(0, 3);

const CategoryBanner = ({ title }: { title: string }) => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? BANNERS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === BANNERS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="capsule bg-white rounded-xl p-6 shadow-sm">
      <Heading variant="h3" className="uppercase font-bold pb-6">
        {title}
      </Heading>
      <div className="flex gap-4">
        {/* Main Banner */}
        <div className="flex-[2] relative h-56 rounded-xl overflow-hidden bg-[#2D2D2D]">
          <Image
            src={BANNERS[activeSlide].image}
            alt={BANNERS[activeSlide].title}
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-8 text-white z-10">
            <BodyText
              variant="b_small"
              weight="medium"
              className="text-white/80 uppercase tracking-wider"
            >
              {"Noise Cancelling"}
            </BodyText>
            <Heading variant="h2" className="font-bold text-white">
              {"Headphone"}
            </Heading>
            <BodyText variant="b_xs" className="text-white/70 mt-2 max-w-xs">
              {"Wire Free Cell Headphone, WiFi, Noise cancelling, Game Mode."}
            </BodyText>
            <button className="mt-4 bg-foreground text-white px-6 py-2 rounded-md text-sm font-bold uppercase w-fit hover:bg-foreground/80 transition-colors">
              {"BUY NOW"}
            </button>
          </div>
          <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
            <button
              onClick={handlePrev}
              className="bg-white/20 hover:bg-white/40 rounded-full p-1.5 transition-colors"
              aria-label="Previous slide"
            >
              <HugeiconsIcon icon={ChevronLeft} size={16} color="white" />
            </button>
            <BodyText variant="b_xs" className="text-white">
              {`${activeSlide + 1} / ${BANNERS.length}`}
            </BodyText>
            <button
              onClick={handleNext}
              className="bg-white/20 hover:bg-white/40 rounded-full p-1.5 transition-colors"
              aria-label="Next slide"
            >
              <HugeiconsIcon icon={ChevronRight} size={16} color="white" />
            </button>
          </div>
        </div>

        {/* Side Banner */}
        <div className="flex-1 hidden lg:flex relative h-56 rounded-xl overflow-hidden bg-[#F5F5F5]">
          <Image
            src={BANNERS[(activeSlide + 1) % BANNERS.length].image}
            alt="Promo"
            fill
            className="object-cover"
          />
          {/* <div className="absolute inset-0 flex flex-col justify-start px-6 pt-6 z-10">
            <Heading variant="h4" className="font-bold">
              {"redmi note 12"}
            </Heading>
            <BodyText variant="b_small" className="font-bold">
              {"Pro+ 5g"}
            </BodyText>
            <BodyText variant="b_xs" className="text-[#666666] mt-1">
              {"Rise to the challenge"}
            </BodyText>
          </div> */}
          <button className="absolute top-4 right-4 bg-[#22DD22] text-white px-4 py-1.5 rounded-md text-xs font-bold uppercase z-10 hover:bg-[#1ec51e] transition-colors">
            {"SHOP NOW"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
