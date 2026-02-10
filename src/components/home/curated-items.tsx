"use client";
import { ChevronLeft, ChevronRight } from "@hugeicons/core-free-icons";
import { Heading } from "../shared/Typography";
import { HugeiconsIcon } from "@hugeicons/react";
import CuratedCarousel from "./curated-carousel";
import React from "react";
import { CURATED_ITEMS } from "@/data/curated";

const CuratedItems = () => {
  const CAROUSEL_VISIBLE_ITEMS = 4;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const totalItems = CURATED_ITEMS.length;
  const maxIndex = Math.max(0, totalItems - CAROUSEL_VISIBLE_ITEMS);

  const handlePrevious = () => {
    if (currentIndex > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  React.useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= maxIndex;

  return (
    <div className="capsule bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center pb-6">
        <Heading variant="h3" className="flex-1 uppercase font-bold">
          {"Curated for you"}
        </Heading>
        <div className="flex items-center justify-between">
          <button
            className={`bg-[#EBEDF3] px-2 py-0.5 rounded-tl-full rounded-bl-full transition-all ${
              isPrevDisabled
                ? "opacity-30 cursor-not-allowed"
                : "cursor-pointer hover:bg-[#dfe1e9]"
            }`}
            onClick={handlePrevious}
            disabled={isPrevDisabled}
            aria-label="Previous curated items"
          >
            <HugeiconsIcon icon={ChevronLeft} size={20} color="#B3B3B3" />
          </button>
          <button
            className={`bg-[#EBEDF3] px-2 py-0.5 rounded-tr-full rounded-br-full transition-all ${
              isNextDisabled
                ? "opacity-30 cursor-not-allowed"
                : "cursor-pointer hover:bg-[#dfe1e9]"
            }`}
            onClick={handleNext}
            disabled={isNextDisabled}
            aria-label="Next curated items"
          >
            <HugeiconsIcon icon={ChevronRight} size={20} color="#B3B3B3" />
          </button>
        </div>
      </div>
      <CuratedCarousel currentIndex={currentIndex} />
    </div>
  );
};
export default CuratedItems;
