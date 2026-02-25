"use client";
import React from "react";
import Image from "next/image";
import { Heading, BodyText } from "@/components/shared/Typography";
import { TOP_CATEGORIES } from "@/data/top-categories";
import { useRouter } from "next/navigation";

const EXTENDED_CATEGORIES = [
  ...TOP_CATEGORIES,
  { id: 7, name: "Apple Tablets", image: "/images/top/one.png", items: 33 },
  {
    id: 8,
    name: "Smartphone Chargers",
    image: "/images/top/two.png",
    items: 15,
  },
  { id: 9, name: "Samsung Tablets", image: "/images/top/three.png", items: 28 },
  { id: 10, name: "eReader", image: "/images/top/four.png", items: 8 },
];

const PopularCategories = () => {
  const router = useRouter();

  const handleCategoryClick = (name: string) => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    router.push(`/${slug}`);
  };

  return (
    <div className="capsule bg-white rounded-xl p-6 shadow-sm">
      <Heading variant="h3" className="uppercase font-bold pb-6">
        {"Popular Categories"}
      </Heading>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {EXTENDED_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => handleCategoryClick(cat.name)}
            className="flex items-center gap-3 cursor-pointer hover:bg-[#F5F5F5] rounded-lg p-2 transition-colors"
          >
            <div className="space-y-0.5 flex-1 min-w-0">
              <BodyText variant="b_small" weight="bold" className="truncate">
                {cat.name}
              </BodyText>
              <BodyText variant="b_xs" className="text-[#666666]">
                {cat.items + " items"}
              </BodyText>
            </div>
            <div className="size-10 relative shrink-0">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
