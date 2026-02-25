"use client";
import React from "react";
import { Heading, BodyText } from "@/components/shared/Typography";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface RecentlyViewedItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: "NEW" | "SAVE";
  discountPercentage?: number;
}

const RECENTLY_VIEWED_ITEMS: RecentlyViewedItem[] = [
  {
    id: "1",
    name: "Xomie Remit 8 Sport Water Resistance Watch",
    price: 4200,
    image: "/placeholder.svg?height=180&width=160",
    badge: "NEW",
  },
  {
    id: "2",
    name: "Microte Surface 2.0 Laptop",
    price: 94000,
    image: "/placeholder.svg?height=180&width=160",
    badge: "NEW",
  },
  {
    id: "3",
    name: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB",
    price: 12000,
    image: "/placeholder.svg?height=180&width=160",
  },
  {
    id: "4",
    name: "SROK Smart Phone 128GB, Oled Retina",
    price: 20000,
    originalPrice: 25000,
    image: "/placeholder.svg?height=180&width=160",
    badge: "SAVE",
    discountPercentage: 20,
  },
  {
    id: "5",
    name: "Xomie Remit 8 Sport Water Resistance Watch",
    price: 4200,
    image: "/placeholder.svg?height=180&width=160",
  },
];

const RecentlyViewed = () => {
  const CAROUSEL_VISIBLE_ITEMS = 5;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const totalItems = RECENTLY_VIEWED_ITEMS.length;
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
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-4">
        <Heading variant="h3" className="font-bold text-[#1A1A1A] uppercase">
          Your Recently Viewed
        </Heading>
        <button className="text-[#666666] hover:text-[#1A1A1A] transition-colors">
          <BodyText variant="b_small" className="text-[#666666]">
            View All
          </BodyText>
        </button>
      </div>

      {/* Carousel Container */}
      <div className="relative group px-4">
        {/* Left Navigation Button */}
        <button
          onClick={handlePrevious}
          disabled={isPrevDisabled}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#F0F0F0] p-2 transition-all duration-200 rounded-md ${
            isPrevDisabled
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-[#E0E0E0] cursor-pointer"
          }`}
          aria-label="Previous items"
        >
          <HugeiconsIcon icon={ChevronLeft} size={20} color="#999999" />
        </button>

        {/* Carousel */}
        <div className="overflow-hidden px-8" ref={carouselRef}>
          <div
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / CAROUSEL_VISIBLE_ITEMS)}%)`,
            }}
          >
            {RECENTLY_VIEWED_ITEMS.map((item) => (
              <div
                key={item.id}
                className="shrink-0 my-1 flex flex-col items-center"
                style={{
                  width: `calc((100% - ${(CAROUSEL_VISIBLE_ITEMS - 1) * 16}px) / ${CAROUSEL_VISIBLE_ITEMS})`,
                }}
              >
                {/* Product Image Container */}
                <div className="relative w-full h-40 mb-3 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                  {/* Badge */}
                  {item.badge && (
                    <div
                      className={`absolute top-2 left-2 px-2 py-1 rounded-md text-white text-xs font-bold ${
                        item.badge === "NEW"
                          ? "bg-[#1A1A1A]"
                          : "bg-[#D500D5]"
                      }`}
                    >
                      {item.badge === "NEW" && "NEW"}
                      {item.badge === "SAVE" && `SAVE ${item.discountPercentage}%`}
                    </div>
                  )}
                </div>

                {/* Product Name */}
                <BodyText
                  variant="b_small"
                  weight="normal"
                  className="text-center text-[#1A1A1A] line-clamp-2 mb-2 h-8"
                  title={item.name}
                >
                  {item.name}
                </BodyText>

                {/* Price */}
                <div className="flex items-baseline gap-2 justify-center">
                  <BodyText
                    variant="b_small"
                    weight="bold"
                    className={item.originalPrice ? "text-[#F1352B]" : "text-[#1A1A1A]"}
                  >
                    Rs. {item.price}/-
                  </BodyText>
                  {item.originalPrice && (
                    <BodyText
                      variant="b_xs"
                      className="line-through text-[#999999]"
                    >
                      Rs. {item.originalPrice}/-
                    </BodyText>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Navigation Button */}
        <button
          onClick={handleNext}
          disabled={isNextDisabled}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#F0F0F0] p-2 transition-all duration-200 rounded-md ${
            isNextDisabled
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-[#E0E0E0] cursor-pointer"
          }`}
          aria-label="Next items"
        >
          <HugeiconsIcon icon={ChevronRight} size={20} color="#999999" />
        </button>
      </div>
    </div>
  );
};

export default RecentlyViewed;
