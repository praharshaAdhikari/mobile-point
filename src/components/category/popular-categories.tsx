import React from "react";
import { BodyText, Heading } from "@/components/shared/Typography";
import { CATEGORIES } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";

const PopularCategories = () => {
  return (
    <div className="p-7 rounded-xl bg-white shadow-sm mb-6">
      <div className="flex items-center justify-between">
        <Heading variant="h3" className="uppercase font-bold">
          {"Popular Categories"}
        </Heading>
        <Link href={"/"} className="text-[#666666] hover:underline">
          <BodyText variant="b_small">{"View All"}</BodyText>
        </Link>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-6">
        {CATEGORIES.slice(0, 4).map((cat, index) => (
          <Link
            key={index}
            href={cat.link}
            className="flex flex-col items-center justify-center relative h-16 sm:h-40 hover:opacity-80 transition-opacity"
          >
            <div className="relative w-full h-full">
              {cat.image && (
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              )}
            </div>
            <BodyText variant="b_three" weight="bold">
              {cat.label}
            </BodyText>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
