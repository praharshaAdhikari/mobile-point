"use client";
import React from "react";
import Image from "next/image";
import { Heading, BodyText } from "@/components/shared/Typography";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon } from "@hugeicons/core-free-icons";

const CATEGORIES_LIST = [
  "All Categories",
  "Cell Phones & Tablets",
  "All",
  "iPhone",
  "Samsung",
  "Xiaomi",
  "Asus",
  "Oppo",
  "Gaming Smartphone",
  "iPad",
  "Window Tablets",
  "eReader",
  "Smartphone Chargers",
  "5G Support Smartphone",
  "Smartphone Accessories",
  "Tablets Accessories",
  "Cell Phones",
];

const BRANDS = [
  { name: "envato", count: 14, logo: "/placeholder.svg?height=20&width=60" },
  { name: "Sketchicon", count: 6, logo: "/placeholder.svg?height=20&width=60" },
  {
    name: "kleeberries",
    count: 7,
    logo: "/placeholder.svg?height=20&width=60",
  },
  {
    name: "photodevice",
    count: 16,
    logo: "/placeholder.svg?height=20&width=60",
  },
  {
    name: "mixblearrow",
    count: 1,
    logo: "/placeholder.svg?height=20&width=60",
  },
];

const RATINGS = [5, 4, 3, 2, 1];

const SCREEN_SIZES = ['7" & Under', '7" - 8.9"', '9" - 10.9"', '11" & Greater'];

const COLORS = [
  "#C63D3D",
  "#2C3E7F",
  "#3BA5A0",
  "#1A1A1A",
  "#22DD22",
  "#666666",
  "#7B4FB5",
];

const MEMORY_OPTIONS = [
  { label: "12GB", count: 4 },
  { label: "1.5GB", count: 1 },
  { label: "8GB", count: 3 },
  { label: "1GB", count: 1 },
  { label: "6GB", count: 12 },
  { label: "512MB", count: 2 },
  { label: "4GB", count: 8 },
  { label: "3GB", count: 7 },
];

const CONDITIONS = [
  { label: "New", count: 21 },
  { label: "Like New", count: 2 },
  { label: "Open Box", count: 38 },
];

const FilterSection = ({
  title,
  children,
  showResetAll = false,
  onResetAll,
}: {
  title: string;
  children: React.ReactNode;
  showResetAll?: boolean;
  onResetAll?: () => void;
}) => (
  <div className="py-4 border-b border-[#E8E8E8]">
    <div className="flex items-center justify-between pb-3">
      <BodyText
        variant="b_small"
        weight="bold"
        className="uppercase text-[#1A1A1A]"
      >
        {title}
      </BodyText>
      {showResetAll && (
        <button
          onClick={onResetAll}
          className="text-[#666666] hover:text-[#1A1A1A] transition-colors"
        >
          <BodyText variant="b_xs" className="underline">
            Reset All
          </BodyText>
        </button>
      )}
    </div>
    {children}
  </div>
);

const FiltersSidebar = () => {
  const [selectedBrands, setSelectedBrands] = React.useState<string[]>([]);
  const [priceRange, setPriceRange] = React.useState<[number, number]>([
    2500, 10000,
  ]);
  const [selectedRating, setSelectedRating] = React.useState<number | null>(
    null,
  );
  const [selectedScreenSizes, setSelectedScreenSizes] = React.useState<
    string[]
  >([]);
  const [selectedColors, setSelectedColors] = React.useState<string[]>([]);
  const [selectedMemory, setSelectedMemory] = React.useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = React.useState<string[]>(
    [],
  );

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  const toggleScreenSize = (size: string) => {
    setSelectedScreenSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    );
  };

  const toggleMemory = (mem: string) => {
    setSelectedMemory((prev) =>
      prev.includes(mem) ? prev.filter((m) => m !== mem) : [...prev, mem],
    );
  };

  const toggleCondition = (cond: string) => {
    setSelectedConditions((prev) =>
      prev.includes(cond) ? prev.filter((c) => c !== cond) : [...prev, cond],
    );
  };

  const handleResetAll = () => {
    setSelectedBrands([]);
    setPriceRange([2500, 10000]);
    setSelectedRating(null);
    setSelectedScreenSizes([]);
    setSelectedColors([]);
    setSelectedMemory([]);
    setSelectedConditions([]);
  };

  return (
    <div className="w-full bg-[#F9F9F9] rounded-lg p-4">
      {/* Categories Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#E8E8E8]">
        <Heading variant="h4" className="uppercase font-bold text-[#1A1A1A]">
          Categories
        </Heading>
      </div>

      {/* Categories List */}
      <div className="py-4 border-b border-[#E8E8E8]">
        {CATEGORIES_LIST.map((cat, i) => (
          <button
            key={i}
            className={`block w-full text-left py-2 transition-colors ${
              i === 0
                ? "font-bold text-[#1A1A1A]"
                : "text-[#666666] hover:text-[#1A1A1A]"
            }`}
          >
            <BodyText
              variant={i === 0 ? "b_small" : "b_small"}
              weight={i === 0 ? "bold" : "normal"}
              className={i === 0 ? "text-[#1A1A1A]" : ""}
            >
              {cat}
            </BodyText>
          </button>
        ))}
      </div>

      {/* Active Filters Tags */}
      {(priceRange[0] > 0 ||
        priceRange[1] < 10000 ||
        selectedScreenSizes.length > 0) && (
        <div className="py-4 border-b border-[#E8E8E8] space-y-2">
          <div className="flex flex-wrap gap-2">
            {priceRange[0] > 0 && (
              <span className="px-3 py-1 bg-white border border-[#E8E8E8] rounded-full">
                <BodyText variant="b_xs">Min. Rs. {priceRange[0]}/-</BodyText>
              </span>
            )}
            {selectedScreenSizes.map((size) => (
              <span
                key={size}
                className="px-3 py-1 bg-white border border-[#E8E8E8] rounded-full"
              >
                <BodyText variant="b_xs">{size}</BodyText>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* By Brands */}
      <FilterSection title="By Brands">
        <div className="flex flex-col gap-2">
          {BRANDS.map((brand) => (
            <label
              key={brand.name}
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand.name)}
                onChange={() => toggleBrand(brand.name)}
                className="sr-only"
              />
              <div
                className={`size-4 rounded border-2 flex items-center justify-center transition-colors ${
                  selectedBrands.includes(brand.name)
                    ? "bg-[#22DD22] border-[#22DD22]"
                    : "border-[#CCCCCC]"
                }`}
              >
                {selectedBrands.includes(brand.name) && (
                  <HugeiconsIcon
                    icon={Tick02Icon}
                    size={10}
                    color="white"
                    strokeWidth={4}
                  />
                )}
              </div>
              <BodyText
                variant="b_xs"
                weight="normal"
                className="text-[#1A1A1A]"
              >
                {brand.name}
              </BodyText>
              <BodyText variant="b_xs" className="text-[#999999] ml-auto">
                {`(${brand.count})`}
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
            onChange={(e) =>
              setPriceRange([priceRange[0], parseInt(e.target.value)])
            }
            className="w-full accent-[#22DD22]"
          />
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-1 border border-[#CCCCCC] rounded text-center flex-1 bg-white">
              <BodyText variant="b_xs" className="text-[#666666]">
                Rs.
              </BodyText>
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])
                }
                className="w-full text-xs outline-none bg-transparent text-[#1A1A1A]"
              />
            </div>
            <div className="flex items-center gap-1 px-2 py-1 border border-[#CCCCCC] rounded text-center flex-1 bg-white">
              <BodyText variant="b_xs" className="text-[#666666]">
                Rs.
              </BodyText>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value) || 0])
                }
                className="w-full text-xs outline-none bg-transparent text-[#1A1A1A]"
              />
            </div>
            <button className="bg-[#22DD22] text-[#1A1A1A] px-3 py-1.5 rounded text-xs font-bold hover:bg-[#1fc41f] transition-colors">
              Go
            </button>
          </div>
        </div>
      </FilterSection>

      {/* By Rating */}
      <FilterSection title="By Rating">
        <div className="flex flex-col gap-1.5">
          {RATINGS.map((rating) => (
            <label
              key={rating}
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            >
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
                    ? "border-[#22DD22]"
                    : "border-[#CCCCCC]"
                }`}
              >
                {selectedRating === rating && (
                  <div className="size-1.5 rounded-full bg-[#22DD22]" />
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
                {`(${rating * 25 + 12})`}
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
                  ? "bg-[#22DD22] text-[#1A1A1A] border-[#22DD22] font-medium"
                  : "border-[#CCCCCC] text-[#666666] bg-white hover:border-[#999999]"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* By Color */}
      <FilterSection title="By Color">
        <div className="flex flex-wrap gap-3">
          {COLORS.map((color) => (
            <button
              key={color}
              onClick={() => toggleColor(color)}
              className={`size-8 rounded-md transition-all ${
                selectedColors.includes(color)
                  ? "ring-2 ring-[#22DD22] ring-offset-2"
                  : "hover:scale-110"
              }`}
              style={{
                backgroundColor: color,
                border: color === "#EEEEEE" ? "1px solid #CCCCCC" : "none",
              }}
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
                  ? "bg-[#22DD22] text-[#1A1A1A] border-[#22DD22] font-medium"
                  : "border-[#CCCCCC] text-[#666666] bg-white hover:border-[#999999]"
              }`}
            >
              {mem.label}
              <span className="text-[#999999] ml-0.5">{`(${mem.count})`}</span>
            </button>
          ))}
        </div>
      </FilterSection>

      {/* By Conditions */}
      <FilterSection title="By Conditions">
        <div className="flex flex-col gap-2">
          {CONDITIONS.map((cond) => (
            <label
              key={cond.label}
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <input
                type="checkbox"
                checked={selectedConditions.includes(cond.label)}
                onChange={() => toggleCondition(cond.label)}
                className="sr-only"
              />
              <div
                className={`size-4 rounded border-2 flex items-center justify-center transition-colors ${
                  selectedConditions.includes(cond.label)
                    ? "bg-[#22DD22] border-[#22DD22]"
                    : "border-[#CCCCCC]"
                }`}
              >
                {selectedConditions.includes(cond.label) && (
                  <HugeiconsIcon
                    icon={Tick02Icon}
                    size={10}
                    color="white"
                    strokeWidth={4}
                  />
                )}
              </div>
              <BodyText variant="b_xs" className="text-[#1A1A1A]">
                {cond.label}
              </BodyText>
              <BodyText variant="b_xs" className="text-[#999999] ml-auto">
                {`(${cond.count})`}
              </BodyText>
            </label>
          ))}
        </div>
      </FilterSection>
    </div>
  );
};

export default FiltersSidebar;
