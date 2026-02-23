"use client";
import React from "react";
import Image from "next/image";
import { Heading, BodyText } from "@/components/shared/Typography";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon } from "@hugeicons/core-free-icons";

const BRANDS = [
  { name: "samsung", count: 18, logo: "/placeholder.svg?height=20&width=60" },
  { name: "Scodasonic", count: 9, logo: "/placeholder.svg?height=20&width=60" },
  { name: "xiaomi", count: 17, logo: "/placeholder.svg?height=20&width=60" },
  { name: "photobase", count: 12, logo: "/placeholder.svg?height=20&width=60" },
  { name: "microteam", count: 11, logo: "/placeholder.svg?height=20&width=60" },
];

const RATINGS = [5, 4, 3, 2, 1];

const SCREEN_SIZES = [
  '7" & Under',
  '7" - 8.9"',
  '9" - 10.9"',
  '11" & Greater',
];

const COLORS = [
  "#1A1A1A",
  "#F1352B",
  "#2B35F1",
  "#22DD22",
  "#C40EDC",
  "#FB7030",
  "#EEEEEE",
];

const MEMORY_OPTIONS = [
  { label: "12GB", count: 4 },
  { label: "1.5GB", count: 11 },
  { label: "8GB", count: 3 },
  { label: "1GB", count: 0 },
  { label: "6GB", count: 13 },
  { label: "512MB", count: 1 },
  { label: "4GB", count: 1 },
  { label: "3GB", count: 7 },
];

const CONDITIONS = [
  { label: "New", count: 127 },
  { label: "Like New", count: 5 },
  { label: "Open Box", count: 20 },
];

const FILTER_CATEGORIES = [
  "Cell Phones & Tablets",
  "Laptops",
  "Audio",
  "Cameras",
  "Gaming",
];

const FilterSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="py-4 border-b border-[#99999933]">
    <BodyText variant="b_small" weight="bold" className="pb-3 uppercase">
      {title}
    </BodyText>
    {children}
  </div>
);

const FiltersSidebar = () => {
  const [selectedBrands, setSelectedBrands] = React.useState<string[]>([]);
  const [priceRange, setPriceRange] = React.useState<[number, number]>([0, 10000]);
  const [selectedRating, setSelectedRating] = React.useState<number | null>(null);
  const [selectedScreenSizes, setSelectedScreenSizes] = React.useState<string[]>([]);
  const [selectedColors, setSelectedColors] = React.useState<string[]>([]);
  const [selectedMemory, setSelectedMemory] = React.useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = React.useState<string[]>([]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleScreenSize = (size: string) => {
    setSelectedScreenSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const toggleMemory = (mem: string) => {
    setSelectedMemory((prev) =>
      prev.includes(mem) ? prev.filter((m) => m !== mem) : [...prev, mem]
    );
  };

  const toggleCondition = (cond: string) => {
    setSelectedConditions((prev) =>
      prev.includes(cond) ? prev.filter((c) => c !== cond) : [...prev, cond]
    );
  };

  return (
    <div className="w-full">
      {/* Categories Header */}
      <div className="flex items-center justify-between pb-3">
        <Heading variant="h4" className="uppercase font-bold text-[#F1352B]">
          {"Categories"}
        </Heading>
        <button className="text-[#666666] hover:text-foreground transition-colors">
          <BodyText variant="b_xs">{"Reset All"}</BodyText>
        </button>
      </div>

      {/* Active Filters Tags */}
      <div className="flex flex-wrap gap-2 pb-4">
        <span className="px-3 py-1 bg-[#F5F5F5] rounded-full">
          <BodyText variant="b_xs">{"Min. Rs. 2500/-"}</BodyText>
        </span>
        <span className="px-3 py-1 bg-[#F5F5F5] rounded-full">
          <BodyText variant="b_xs">{"10.9 inch"}</BodyText>
        </span>
      </div>
      <div className="flex flex-wrap gap-2 pb-4">
        <span className="px-3 py-1 bg-[#F5F5F5] rounded-full">
          <BodyText variant="b_xs">{"Color: Red"}</BodyText>
        </span>
        <span className="px-3 py-1 bg-[#F5F5F5] rounded-full">
          <BodyText variant="b_xs">{"128GB"}</BodyText>
        </span>
      </div>

      {/* Categories List */}
      <div className="py-4 border-b border-[#99999933]">
        {FILTER_CATEGORIES.map((cat, i) => (
          <button
            key={i}
            className="block w-full text-left py-1.5 text-[#666666] hover:text-foreground transition-colors"
          >
            <BodyText variant="b_small">{cat}</BodyText>
          </button>
        ))}
      </div>

      {/* By Brands */}
      <FilterSection title="By Brands">
        <div className="flex flex-col gap-2">
          {BRANDS.map((brand) => (
            <label
              key={brand.name}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand.name)}
                onChange={() => toggleBrand(brand.name)}
                className="sr-only"
              />
              <div
                className={`size-4 rounded border flex items-center justify-center transition-colors ${
                  selectedBrands.includes(brand.name)
                    ? "bg-[#C40EDC] border-[#C40EDC]"
                    : "border-[#CCCCCC]"
                }`}
              >
                {selectedBrands.includes(brand.name) && (
                  <HugeiconsIcon icon={Tick02Icon} size={10} color="white" strokeWidth={4} />
                )}
              </div>
              <BodyText variant="b_xs" weight="medium">
                {brand.name}
              </BodyText>
              <BodyText variant="b_xs" className="text-[#999999] ml-auto">
                {"(" + brand.count + ")"}
              </BodyText>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* By Price */}
      <FilterSection title="By Price">
        <div className="flex flex-col gap-3">
          <input
            type="range"
            min={0}
            max={10000}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full accent-[#C40EDC]"
          />
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-1 border border-[#CCCCCC] rounded text-center flex-1">
              <BodyText variant="b_xs">{"Rs."}</BodyText>
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                className="w-full text-xs outline-none bg-transparent"
              />
            </div>
            <div className="flex items-center gap-1 px-2 py-1 border border-[#CCCCCC] rounded text-center flex-1">
              <BodyText variant="b_xs">{"Rs."}</BodyText>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 0])}
                className="w-full text-xs outline-none bg-transparent"
              />
            </div>
            <button className="bg-[#C40EDC] text-white px-3 py-1.5 rounded text-xs font-bold hover:bg-[#a30cb8] transition-colors">
              {"Go"}
            </button>
          </div>
        </div>
      </FilterSection>

      {/* By Rating */}
      <FilterSection title="By Rating">
        <div className="flex flex-col gap-1.5">
          {RATINGS.map((rating) => (
            <label key={rating} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={selectedRating === rating}
                onChange={() => setSelectedRating(rating)}
                className="sr-only"
              />
              <div
                className={`size-3.5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  selectedRating === rating
                    ? "border-[#C40EDC]"
                    : "border-[#CCCCCC]"
                }`}
              >
                {selectedRating === rating && (
                  <div className="size-1.5 rounded-full bg-[#C40EDC]" />
                )}
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`size-3 ${i < rating ? "text-[#FFB800]" : "text-[#CCCCCC]"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <BodyText variant="b_xs" className="text-[#999999]">
                {"(" + (rating * 25 + 12) + ")"}
              </BodyText>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* By Screen Size */}
      <FilterSection title="By Screen Size">
        <div className="flex flex-wrap gap-2">
          {SCREEN_SIZES.map((size) => (
            <button
              key={size}
              onClick={() => toggleScreenSize(size)}
              className={`px-3 py-1.5 rounded-md border text-xs transition-colors ${
                selectedScreenSizes.includes(size)
                  ? "bg-[#C40EDC] text-white border-[#C40EDC]"
                  : "border-[#CCCCCC] text-[#666666] hover:border-[#999999]"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* By Color */}
      <FilterSection title="By Color">
        <div className="flex flex-wrap gap-2">
          {COLORS.map((color) => (
            <button
              key={color}
              onClick={() => toggleColor(color)}
              className={`size-7 rounded-md transition-all ${
                selectedColors.includes(color)
                  ? "ring-2 ring-[#C40EDC] ring-offset-1"
                  : "hover:scale-110"
              }`}
              style={{ backgroundColor: color, border: color === "#EEEEEE" ? "1px solid #CCCCCC" : "none" }}
              aria-label={`Select color ${color}`}
            />
          ))}
        </div>
      </FilterSection>

      {/* By Memory */}
      <FilterSection title="By Memory">
        <div className="flex flex-wrap gap-2">
          {MEMORY_OPTIONS.map((mem) => (
            <button
              key={mem.label}
              onClick={() => toggleMemory(mem.label)}
              className={`px-3 py-1.5 rounded-md border text-xs transition-colors ${
                selectedMemory.includes(mem.label)
                  ? "bg-[#C40EDC] text-white border-[#C40EDC]"
                  : "border-[#CCCCCC] text-[#666666] hover:border-[#999999]"
              }`}
            >
              {mem.label}
              <span className="text-[#999999] ml-0.5">{"(" + mem.count + ")"}</span>
            </button>
          ))}
        </div>
      </FilterSection>

      {/* By Conditions */}
      <FilterSection title="By Conditions">
        <div className="flex flex-col gap-1.5">
          {CONDITIONS.map((cond) => (
            <label key={cond.label} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedConditions.includes(cond.label)}
                onChange={() => toggleCondition(cond.label)}
                className="sr-only"
              />
              <div
                className={`size-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                  selectedConditions.includes(cond.label)
                    ? "border-[#C40EDC]"
                    : "border-[#CCCCCC]"
                }`}
              >
                {selectedConditions.includes(cond.label) && (
                  <div className="size-1.5 rounded-full bg-[#C40EDC]" />
                )}
              </div>
              <BodyText variant="b_xs">
                {cond.label}
              </BodyText>
              <BodyText variant="b_xs" className="text-[#999999] ml-auto">
                {"(" + cond.count + ")"}
              </BodyText>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Promo Banner */}
      <div className="mt-6 rounded-xl overflow-hidden relative h-64 bg-[#2D2D2D]">
        <Image
          src="/placeholder.svg?height=256&width=220"
          alt="Promo"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
          <BodyText variant="b_small" weight="bold" className="text-white">
            {"OKODo hero 11+"}
          </BodyText>
          <BodyText variant="b_small" weight="bold" className="text-white">
            {"5K wireless"}
          </BodyText>
          <div className="mt-2 bg-[#22DD22] text-white px-3 py-1 rounded-md w-fit">
            <BodyText variant="b_xs" weight="bold">{"FROM"}</BodyText>
          </div>
          <BodyText variant="b_one" weight="bold" className="text-[#F1352B] mt-1">
            {"Rs. 20000/-"}
          </BodyText>
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
