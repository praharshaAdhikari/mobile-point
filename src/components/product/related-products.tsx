"use client";
import React from "react";
import { Heading } from "@/components/shared/Typography";
import { ITEMS } from "@/data/items";
import ItemCard from "@/components/home/item-card";

const RELATED = ITEMS.slice(0, 5);

const RelatedProducts = () => {
  return (
    <div className="capsule bg-white rounded-xl p-6 shadow-sm">
      <Heading variant="h3" className="uppercase font-bold pb-6">
        {"Related Products"}
      </Heading>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {RELATED.map((item) => (
          <div key={item.id} className="border border-[#99999922] rounded-lg">
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
