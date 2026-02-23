"use client";
import React from "react";
import { Heading, BodyText } from "@/components/shared/Typography";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChevronLeft, ChevronRight } from "@hugeicons/core-free-icons";
import { ITEMS, Item } from "@/data/items";
import { CATEGORIES } from "@/data/categories";
import ItemCard from "@/components/home/item-card";

const SIDEBAR_CATEGORIES = [
  "All",
  "iPhone",
  "Samsung",
  "Xiaomi",
  "Acer",
  "Oppo",
  "Gaming Smartphone",
  "Sony",
  "Window Tablets",
  "eReader",
  "Smartphone Accessories",
  "5G Support Smartphone",
  "Smartphone Accessories",
  "Tablets Accessories",
  "Cell Phones",
];

const BEST_SELLER_ITEMS = ITEMS.filter((item) =>
  item.tag.includes("Best Seller")
);

const CategorySidebar = ({
  activeCategory,
  onCategoryChange,
}: {
  activeCategory: number;
  onCategoryChange: (index: number) => void;
}) => {
  return (
    <div className="w-full">
      <Heading variant="h4" className="uppercase font-bold text-[#F1352B] pb-4">
        {"Categories"}
      </Heading>
      <button className="mb-4 px-4 py-2 border border-foreground rounded-full">
        <BodyText variant="b_small" weight="bold">
          {"All Categories"}
        </BodyText>
      </button>
      <div className="pb-2">
        <BodyText variant="b_small" weight="bold">
          {"Cell Phones & Tablets"}
        </BodyText>
      </div>
      <nav className="flex flex-col">
        {SIDEBAR_CATEGORIES.map((cat, index) => (
          <button
            key={index}
            onClick={() => onCategoryChange(index)}
            className={`text-left py-1.5 px-3 rounded-md transition-colors ${
              activeCategory === index
                ? "text-[#C40EDC] font-medium"
                : "text-[#666666] hover:text-foreground"
            }`}
          >
            <BodyText variant="b_small" weight={activeCategory === index ? "medium" : "normal"}>
              {cat}
            </BodyText>
          </button>
        ))}
      </nav>
    </div>
  );
};

const BestSellers = () => {
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [carouselIndex, setCarouselIndex] = React.useState(0);
  const visibleItems = 4;
  const maxIndex = Math.max(0, BEST_SELLER_ITEMS.length - visibleItems);

  const handlePrev = () => {
    if (carouselIndex > 0) setCarouselIndex((p) => p - 1);
  };
  const handleNext = () => {
    if (carouselIndex < maxIndex) setCarouselIndex((p) => p + 1);
  };

  return (
    <div className="capsule bg-white rounded-xl p-6 shadow-sm">
      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="hidden lg:block w-52 shrink-0 border-r border-[#99999933] pr-6">
          <CategorySidebar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Products */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between pb-4">
            <Heading variant="h3" className="uppercase font-bold">
              {"Best Seller in This Category"}
            </Heading>
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                disabled={carouselIndex === 0}
                className={`bg-[#EBEDF3] px-2 py-0.5 rounded-tl-full rounded-bl-full transition-all ${
                  carouselIndex === 0
                    ? "opacity-30 cursor-not-allowed"
                    : "cursor-pointer hover:bg-[#dfe1e9]"
                }`}
                aria-label="Previous best sellers"
              >
                <HugeiconsIcon icon={ChevronLeft} size={20} color="#B3B3B3" />
              </button>
              <button
                onClick={handleNext}
                disabled={carouselIndex >= maxIndex}
                className={`bg-[#EBEDF3] px-2 py-0.5 rounded-tr-full rounded-br-full transition-all ${
                  carouselIndex >= maxIndex
                    ? "opacity-30 cursor-not-allowed"
                    : "cursor-pointer hover:bg-[#dfe1e9]"
                }`}
                aria-label="Next best sellers"
              >
                <HugeiconsIcon icon={ChevronRight} size={20} color="#B3B3B3" />
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${carouselIndex * (100 / visibleItems)}%)`,
              }}
            >
              {BEST_SELLER_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="shrink-0"
                  style={{
                    width: `calc((100% - ${(visibleItems - 1) * 16}px) / ${visibleItems})`,
                  }}
                >
                  <ItemCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
