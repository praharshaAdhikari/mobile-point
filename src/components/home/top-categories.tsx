import React from "react";
import { BodyText, Heading } from "@/components/shared/Typography";
import { CATEGORIES } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";

const TopCategories = () => {
  return (
    <div className="p-7 rounded-xl bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <Heading variant="h3" className="uppercase font-bold">
          {"Top Categories"}
        </Heading>
        <Link href={"/"} className="text-[#666666] hover:underline">
          <BodyText variant="b_small">{"View All"}</BodyText>
        </Link>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-6">
        {CATEGORIES.slice(0, 4).map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center relative h-16 sm:h-40"
          >
            <div className="relative w-full h-full">
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <BodyText variant="b_three" weight="bold">
              {cat.label}
            </BodyText>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
