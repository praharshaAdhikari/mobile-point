"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heading, BodyText } from "@/components/shared/Typography";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChevronLeft, ChevronRight } from "@hugeicons/core-free-icons";
import { ITEMS } from "@/data/items";

const RECENTLY_VIEWED = ITEMS.slice(0, 4);

const RecentlyViewed = () => {
  return (
    <div className="capsule bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between pb-6">
        <div className="flex items-center gap-4">
          <Heading variant="h3" className="uppercase font-bold">
            {"Your Recently Viewed"}
          </Heading>
          <Link href="/" className="text-[#666666] hover:underline">
            <BodyText variant="b_small">{"View All"}</BodyText>
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <button
            className="bg-[#EBEDF3] px-2 py-0.5 rounded-tl-full rounded-bl-full cursor-pointer hover:bg-[#dfe1e9] transition-all"
            aria-label="Previous recently viewed"
          >
            <HugeiconsIcon icon={ChevronLeft} size={20} color="#B3B3B3" />
          </button>
          <button
            className="bg-[#EBEDF3] px-2 py-0.5 rounded-tr-full rounded-br-full cursor-pointer hover:bg-[#dfe1e9] transition-all"
            aria-label="Next recently viewed"
          >
            <HugeiconsIcon icon={ChevronRight} size={20} color="#B3B3B3" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {RECENTLY_VIEWED.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 cursor-pointer hover:bg-[#F5F5F5] rounded-lg p-2 transition-colors"
          >
            <div className="size-16 relative shrink-0">
              <Image
                src={item.variants[0].image}
                alt={item.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="min-w-0">
              <BodyText
                variant="b_xs"
                weight="medium"
                className="line-clamp-2"
              >
                {item.name}
              </BodyText>
              <BodyText variant="b_small" weight="bold" className="text-[#F1352B] mt-1">
                {"Rs. " + item.variants[0].price + "/-"}
              </BodyText>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
