import React from "react";
import { BodyText, Heading } from "@/components/shared/Typography";
import { CATEGORIES } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";

const PopularCategories = () => {
  return (
    <div className="p-7 rounded-xl bg-white shadow-sm mb-6">
      <div className="flex items-center justify-between mb-6">
        <Heading variant="h3" className="uppercase font-bold">
          {"Categories"}
        </Heading>
      </div>

      <div className="w-full space-y-2">
        {CATEGORIES.slice(0, 8).map((cat, index) => (
          <Link
            key={index}
            href={cat.link}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
          >
            {cat.image && (
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            )}
            <BodyText
              variant="b_two"
              weight="medium"
              className="text-slate-700 hover:text-[#C40EDC] transition-colors flex-grow"
            >
              {cat.label}
            </BodyText>
            <BodyText variant="b_small" className="text-slate-400">
              →
            </BodyText>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
