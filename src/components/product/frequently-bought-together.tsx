"use client";
import React from "react";
import Image from "next/image";
import { Heading, BodyText } from "@/components/shared/Typography";
import { HugeiconsIcon } from "@hugeicons/react";
import { FavouriteIcon, Add01Icon } from "@hugeicons/core-free-icons";
import { ITEMS } from "@/data/items";

const BUNDLE_ITEMS = ITEMS.slice(0, 3);
const BUNDLE_TOTAL = BUNDLE_ITEMS.reduce(
  (sum, item) => sum + item.variants[0].price,
  0,
);

const PROMO_ITEMS = ITEMS.slice(3, 5);

const FrequentlyBoughtTogether = () => {
  return (
    <div className="capsule bg-white rounded-xl p-6 shadow-sm">
      <Heading variant="h3" className="uppercase font-bold pb-6">
        {"Frequently Bought Together"}
      </Heading>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Products with plus signs */}
        <div className="flex-1">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {BUNDLE_ITEMS.map((item, index) => (
              <React.Fragment key={item.id}>
                <div className="flex flex-col items-center">
                  <div className="relative size-28 bg-[#F8F8F8] rounded-lg border border-[#E5E5E5] overflow-hidden">
                    <Image
                      src={item.variants[0].image}
                      alt={item.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>
                {index < BUNDLE_ITEMS.length - 1 && (
                  <div className="flex items-center justify-center size-7 rounded-full bg-[#F0F0F0]">
                    <HugeiconsIcon icon={Add01Icon} size={16} color="#666666" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Bundle items list */}
          <div className="pt-4 border-t border-[#E5E5E5] mt-4 space-y-1.5">
            {BUNDLE_ITEMS.map((item, index) => (
              <div key={item.id} className="flex items-baseline gap-1.5">
                <input
                  type="checkbox"
                  defaultChecked
                  className="accent-[#C40EDC] size-3.5 shrink-0"
                  aria-label={`Include ${item.name}`}
                />
                <BodyText variant="b_xs" className="text-[#666666]">
                  {index === 0 ? "This Item: " : ""}
                  <span className="text-foreground">{item.name}</span>
                  {" ( "}
                  <span className="font-bold text-[#F1352B]">
                    {"Rs. " + item.variants[0].price.toLocaleString() + "/-"}
                  </span>
                  {" )"}
                </BodyText>
              </div>
            ))}
          </div>
        </div>

        {/* Price + Add to Cart */}
        <div className="flex flex-col items-center justify-center gap-4 lg:w-52">
          <div className="text-center">
            <BodyText variant="b_xs" className="text-[#999999] uppercase">
              {"Total Price:"}
            </BodyText>
            <Heading variant="h2" className="font-bold">
              {"Rs. " + BUNDLE_TOTAL.toLocaleString() + "/-"}
            </Heading>
          </div>
          <button className="w-full py-3 bg-[#22DD22] hover:bg-[#1ec41e] text-white font-bold rounded-lg transition-colors cursor-pointer uppercase text-sm tracking-wide">
            {"Add to Cart"}
          </button>
          <button className="flex items-center gap-2 text-[#666666] hover:text-[#C40EDC] transition-colors cursor-pointer">
            <HugeiconsIcon icon={FavouriteIcon} size={16} />
            <BodyText variant="b_small" weight="medium">
              {"Add all to Wishlist"}
            </BodyText>
          </button>
        </div>

        {/* Side promo banner */}
        {/* <div className="hidden xl:flex flex-col gap-3 w-56 shrink-0">
          {PROMO_ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative h-32 rounded-lg overflow-hidden bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] cursor-pointer"
            >
              <div className="absolute inset-0 p-3 flex flex-col justify-between">
                <div>
                  <BodyText variant="b_xs" weight="bold" className="text-white uppercase">
                    {"SALE"}
                  </BodyText>
                  <BodyText variant="b_xs" weight="bold" className="text-[#FFE066]">
                    {"50%"}
                  </BodyText>
                </div>
                <BodyText variant="b_xs" weight="bold" className="text-white">
                  {item.name}
                </BodyText>
              </div>
              <Image
                src={item.variants[0].image}
                alt={item.name}
                fill
                className="object-contain p-4 opacity-30"
              />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default FrequentlyBoughtTogether;
