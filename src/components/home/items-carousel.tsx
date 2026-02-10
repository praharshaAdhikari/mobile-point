"use client";
import React from "react";
import ItemCard from "./item-card";
import { Item } from "@/data/items";
import { ChevronLeft, ChevronRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const ItemsCarousel = ({ items }: { items: Item[] }) => {
  const CAROUSEL_VISIBLE_ITEMS = 5;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const totalItems = items.length;
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
    <div className="relative group">
      {/* Left Navigation Button */}
      <button
        onClick={handlePrevious}
        disabled={isPrevDisabled}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#EDEFF6] px-1 py-4 transition-all duration-200 rounded-md ${
          isPrevDisabled
            ? "opacity-30 cursor-not-allowed"
            : "hover:scale-110 active:scale-95 cursor-pointer"
        }`}
        aria-label="Previous items"
      >
        <HugeiconsIcon icon={ChevronLeft} size={32} color="#CCCCCC" />
      </button>

      {/* Carousel Container */}
      <div className="w-full px-12">
        <div className="overflow-hidden" ref={carouselRef}>
          <div
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / CAROUSEL_VISIBLE_ITEMS)}%)`,
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="shrink-0 my-1"
                style={{
                  width: `calc((100% - ${(CAROUSEL_VISIBLE_ITEMS - 1) * 16}px) / ${CAROUSEL_VISIBLE_ITEMS})`,
                }}
              >
                <ItemCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Navigation Button */}
      <button
        onClick={handleNext}
        disabled={isNextDisabled}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#EDEFF6] px-1 py-4 transition-all duration-200 rounded-md ${
          isNextDisabled
            ? "opacity-30 cursor-not-allowed"
            : "hover:scale-110 active:scale-95 cursor-pointer"
        }`}
        aria-label="Next items"
      >
        <HugeiconsIcon icon={ChevronRight} size={32} color="#CCCCCC" />
      </button>
    </div>
  );
};

export default ItemsCarousel;
