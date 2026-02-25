"use client";
import { ITEMS } from "@/data/items";
import React from "react";
import { BodyText, Heading } from "../shared/Typography";
import ItemsCarousel from "./items-carousel";
import Link from "next/link";

const SEPARATED_ITEMS = ITEMS.reduce(
  (acc, item) => {
    item.tag.forEach((tag) => {
      if (!acc[tag]) {
        acc[tag] = [];
      }
      acc[tag].push(item);
    });
    return acc;
  },
  {} as { [key: string]: typeof ITEMS },
);

const TABS = Object.keys(SEPARATED_ITEMS);

const ItemsTabs = () => {
  const [activeTab, setActiveTab] = React.useState<number>(0);

  return (
    <div className="capsule bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center pb-4">
        <div className="flex gap-4 md:gap-10 overflow-x-auto">
          {TABS.map((tab, index) => (
            <div
              key={tab}
              className={`py-2 cursor-pointer whitespace-nowrap ${
                activeTab === index
                  ? "font-semibold"
                  : "text-gray-600 font-normal"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <Heading variant="h3" className="uppercase">
                {tab}
              </Heading>
            </div>
          ))}
        </div>
        <Link href={"/"} className="text-[#666666] hover:underline">
          <BodyText variant="b_small">{"View All"}</BodyText>
        </Link>
      </div>

      <ItemsCarousel items={SEPARATED_ITEMS[TABS[activeTab]]} />
    </div>
  );
};
export default ItemsTabs;
