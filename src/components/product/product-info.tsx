"use client";
import React from "react";
import Image from "next/image";
import { Heading, BodyText } from "@/components/shared/Typography";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Share01Icon,
  Facebook01Icon,
  InstagramIcon,
  YoutubeIcon,
  TwitterSquareIcon,
  PinterestIcon,
} from "@hugeicons/core-free-icons";

type ColorOption = {
  name: string;
  image: string;
  price: number;
};

type ProductInfoProps = {
  name: string;
  price: number;
  originalPrice?: number;
  features: string[];
  freeShipping: boolean;
  freeGift: boolean;
  colors: ColorOption[];
  memorySizes: string[];
  sku: string;
  category: string;
  brand: string;
};

const ColorSelector = ({
  colors,
  selected,
  onSelect,
}: {
  colors: ColorOption[];
  selected: number;
  onSelect: (i: number) => void;
}) => {
  return (
    <div className="pt-5">
      <BodyText variant="b_small" weight="bold">
        {"COLOR: "}
        <span className="font-normal text-[#666666]">{colors[selected]?.name}</span>
      </BodyText>
      <div className="flex gap-3 pt-2">
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`flex flex-col items-center gap-1 p-1.5 rounded-lg border-2 transition-all cursor-pointer ${
              selected === index
                ? "border-[#C40EDC]"
                : "border-[#E5E5E5] hover:border-[#999999]"
            }`}
            aria-label={`Select ${color.name}`}
          >
            <div className="relative size-10 rounded overflow-hidden">
              <Image
                src={color.image}
                alt={color.name}
                fill
                className="object-contain"
              />
            </div>
            <BodyText variant="b_xs" className="text-[#666666] whitespace-nowrap">
              {color.name}
            </BodyText>
            <BodyText variant="b_xs" weight="bold" className="whitespace-nowrap">
              {"Rs. " + color.price.toLocaleString() + "/-"}
            </BodyText>
          </button>
        ))}
      </div>
    </div>
  );
};

const MemorySelector = ({
  sizes,
  selected,
  onSelect,
}: {
  sizes: string[];
  selected: number;
  onSelect: (i: number) => void;
}) => {
  return (
    <div className="pt-5">
      <BodyText variant="b_small" weight="bold">
        {"MEMORY SIZE: "}
        <span className="font-normal text-[#666666]">{sizes[selected]}</span>
      </BodyText>
      <div className="flex gap-2 pt-2 flex-wrap">
        {sizes.map((size, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`px-4 py-1.5 rounded-full border text-sm transition-all cursor-pointer ${
              selected === index
                ? "border-[#C40EDC] bg-[#C40EDC]/5 text-[#C40EDC] font-medium"
                : "border-[#E5E5E5] text-[#666666] hover:border-[#999999]"
            }`}
            aria-label={`Select ${size}`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

const PromoBanner = () => {
  return (
    <div className="mt-5 bg-[#FFF9E6] border border-[#FFE066] rounded-lg p-3 flex gap-3 items-start">
      <div className="size-8 shrink-0 rounded-full bg-[#FFD700] flex items-center justify-center text-white text-sm font-bold">
        {"!"}
      </div>
      <div>
        <BodyText variant="b_small" weight="medium">
          {"Buy "}
          <span className="text-[#F1352B] font-bold">{"02"}</span>
          {" boxes get a "}
          <span className="font-bold">{"Snack Tray"}</span>
        </BodyText>
        <BodyText variant="b_small" weight="medium">
          {"Buy "}
          <span className="text-[#F1352B] font-bold">{"04"}</span>
          {" boxes get a free "}
          <span className="font-bold">{"Block Toys"}</span>
        </BodyText>
        <BodyText variant="b_xs" className="text-[#999999] pt-1">
          {"Promotion will expires in: 09:00pm, 25/8/2025"}
        </BodyText>
      </div>
    </div>
  );
};

const SocialLinks = () => {
  const icons = [
    { icon: Share01Icon, label: "Share" },
    { icon: Facebook01Icon, label: "Facebook" },
    { icon: InstagramIcon, label: "Instagram" },
    { icon: YoutubeIcon, label: "YouTube" },
    { icon: TwitterSquareIcon, label: "Twitter" },
    { icon: PinterestIcon, label: "Pinterest" },
  ];

  return (
    <div className="flex gap-2 pt-4">
      {icons.map(({ icon, label }) => (
        <button
          key={label}
          className="size-8 rounded-full bg-[#F0F0F0] flex items-center justify-center hover:bg-[#E0E0E0] transition-colors cursor-pointer"
          aria-label={label}
        >
          <HugeiconsIcon icon={icon} size={16} color="#666666" />
        </button>
      ))}
    </div>
  );
};

const ProductInfo = ({
  name,
  price,
  originalPrice,
  features,
  freeShipping,
  freeGift,
  colors,
  memorySizes,
  sku,
  category,
  brand,
}: ProductInfoProps) => {
  const [selectedColor, setSelectedColor] = React.useState(0);
  const [selectedMemory, setSelectedMemory] = React.useState(1);

  return (
    <div className="flex flex-col">
      {/* Stock count */}
      <BodyText variant="b_xs" className="text-[#999999]">
        {"(5)"}
      </BodyText>

      {/* Product name */}
      <Heading variant="h3" className="font-bold pt-1 text-balance">
        {name}
      </Heading>

      {/* Price */}
      <div className="pt-3">
        <Heading variant="h2" className="font-bold">
          {"Rs. " + price.toLocaleString() + "/-"}
        </Heading>
      </div>

      {/* Feature bullets */}
      <ul className="pt-4 space-y-1.5 list-disc list-inside">
        {features.map((feature, index) => (
          <li key={index} className="text-[#666666]">
            <BodyText variant="b_xs" className="inline text-[#666666]">
              {feature}
            </BodyText>
          </li>
        ))}
      </ul>

      {/* Badges */}
      <div className="flex gap-2 pt-4 text-sm font-medium uppercase">
        {freeShipping && (
          <span className="px-2.5 py-1 rounded-md bg-[#C40EDC]/5 text-[#C40EDC]">
            {"Free Shipping"}
          </span>
        )}
        {freeGift && (
          <span className="px-2.5 py-1 rounded-md bg-[#F1352B]/5 text-[#F1352B]">
            {"Free Gift"}
          </span>
        )}
      </div>

      {/* Color selector */}
      {colors.length > 0 && (
        <ColorSelector
          colors={colors}
          selected={selectedColor}
          onSelect={setSelectedColor}
        />
      )}

      {/* Memory selector */}
      {memorySizes.length > 0 && (
        <MemorySelector
          sizes={memorySizes}
          selected={selectedMemory}
          onSelect={setSelectedMemory}
        />
      )}

      {/* Promo banner */}
      <PromoBanner />

      {/* SKU / Category / Brand */}
      <div className="pt-5 space-y-1">
        <BodyText variant="b_xs">
          <span className="font-bold">{"SKU: "}</span>
          <span className="text-[#666666]">{sku}</span>
        </BodyText>
        <BodyText variant="b_xs">
          <span className="font-bold">{"CATEGORY: "}</span>
          <span className="text-[#666666]">{category}</span>
        </BodyText>
        <BodyText variant="b_xs">
          <span className="font-bold">{"BRAND: "}</span>
          <span className="text-[#C40EDC] underline cursor-pointer">{brand}</span>
        </BodyText>
      </div>

      {/* Social links */}
      <SocialLinks />
    </div>
  );
};

export default ProductInfo;
