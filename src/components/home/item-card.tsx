import React from "react";
import { Item } from "@/data/items";
import Image from "next/image";
import { BodyText } from "../shared/Typography";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Call02Icon,
  Cancel01Icon,
  DeliveredSentIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";

const CURRENCY = "NRS";

const ItemTag = ({
  shipping,
  gift,
  stock,
  preOrder,
  contact,
}: {
  shipping: number;
  gift: boolean;
  stock: number;
  preOrder: boolean;
  contact: boolean;
}) => {
  const shippingTag = (
    <div
      className={`px-2.5 py-1 rounded-md whitespace-nowrap ${shipping === 0 ? "bg-[#C40EDC]/5 text-[#C40EDC]" : "bg-[#222222]/5 text-[#222222]"}`}
    >
      {shipping === 0 ? "Free Shipping" : CURRENCY + shipping + "/- Shipping"}
    </div>
  );

  const giftTag = (
    <div className="px-2.5 py-1 rounded-md bg-[#F1352B]/5 text-[#F1352B] whitespace-nowrap">
      {"Free Gift"}
    </div>
  );

  const bottomTag =
    stock !== 0 ? (
      <div className="flex gap-2 items-center">
        <HugeiconsIcon
          icon={Tick02Icon}
          className="p-0.5 rounded-full bg-[#C40EDC]"
          size={16}
          strokeWidth={4}
          color="white"
        />
        <BodyText variant="b_small" weight="normal">
          {"In Stock"}
        </BodyText>
      </div>
    ) : preOrder ? (
      <div className="flex gap-2 items-center">
        <HugeiconsIcon
          icon={DeliveredSentIcon}
          className="p-0.5 rounded-full bg-[#eecb41]"
          size={16}
          strokeWidth={4}
          color="white"
        />
        <BodyText variant="b_small" weight="normal">
          {"Pre Order"}
        </BodyText>
      </div>
    ) : contact ? (
      <div className="flex gap-2 items-center">
        <HugeiconsIcon
          icon={Call02Icon}
          className="p-0.5 rounded-full bg-[#2b35f1]"
          size={16}
          strokeWidth={2}
          color="white"
        />
        <BodyText variant="b_small" weight="normal">
          {"Contact"}
        </BodyText>
      </div>
    ) : (
      <div className="flex gap-2 items-center">
        <HugeiconsIcon
          icon={Cancel01Icon}
          className="p-0.5 rounded-full bg-[#F1352B]"
          size={16}
          strokeWidth={4}
          color="white"
        />
        <BodyText variant="b_small" weight="normal">
          {"Out of stock"}
        </BodyText>
      </div>
    );

  return (
    <div className="space-y-2">
      <div className="flex gap-2 pt-5 uppercase text-sm font-medium">
        {shippingTag}
        {gift && giftTag}
      </div>
      {bottomTag}
    </div>
  );
};

const ItemVariant = ({
  variants,
  selectedVariant,
  onVariantChange,
}: {
  variants: Item["variants"];
  selectedVariant: number;
  onVariantChange: (index: number) => void;
}) => {
  return (
    <div className="flex gap-2 pt-4">
      {variants.map((variant, index) => (
        <button
          key={index}
          onClick={(e) => {
            e.stopPropagation();
            onVariantChange(index);
          }}
          className={`w-6 h-6 rounded-full overflow-hidden transition-all cursor-pointer ${
            selectedVariant === index
              ? "ring-2 ring-[#C40EDC] ring-offset-1"
              : "border border-gray-300 hover:border-gray-400"
          }`}
          aria-label={`Select ${variant.color} variant`}
        >
          <Image
            src={variant.image}
            alt={variant.color}
            width={24}
            height={24}
            className="object-cover"
          />
        </button>
      ))}
    </div>
  );
};

const ItemCard = ({ item }: { item: Item }) => {
  const [currentVariant, setCurrentVariant] = React.useState<number>(0);

  const discountedPrice = item.discount
    ? item.variants[currentVariant].price -
      item.variants[currentVariant].price * item.discount
    : 0;

  return (
    <div className="hover:outline hover:outline-[#E2E4EB] rounded-lg p-2 cursor-pointer">
      <div className="h-50 w-full relative space-y-4">
        <Image
          src={item.variants[currentVariant].image}
          alt={item.name}
          fill
          className="object-contain border-b border-[#999999]/30"
        />
        {item.discount !== 0 && (
          <div className="inset-0 absolute top-4 left-7 w-16 h-fit bg-[#C40EDC] text-white text-left rounded-md px-2 py-1">
            <BodyText variant="b_xs" className="leading-4!" weight="normal">
              {"SAVE"}
            </BodyText>
            <BodyText variant="b_small" className="leading-4!" weight="bold">
              {item.discount * 100 + "%"}
            </BodyText>
          </div>
        )}
      </div>
      {
        <BodyText
          variant="b_small"
          className={`text-center text-[#666666] pt-4 ${item.variants[currentVariant].stock === 0 ? "opacity-0" : ""}`}
        >
          {"(" + item.variants[currentVariant].stock + ")"}
        </BodyText>
      }
      <BodyText
        variant="b_three"
        weight="bold"
        className="line-clamp-2 pt-2 leading-5! h-12"
        title={item.name}
        aria-label={item.name}
      >
        {item.name}
      </BodyText>
      {discountedPrice ? (
        <div className="flex justify-between items-end pt-4">
          <BodyText variant="b_one" className="text-[#F1352B]" weight="bold">
            {CURRENCY + " " + discountedPrice + "/-"}
          </BodyText>
          <BodyText
            variant="b_small"
            className="line-through text-[#666666]"
            weight="bold"
          >
            {CURRENCY + " " + item.variants[currentVariant].price + "/-"}
          </BodyText>
        </div>
      ) : (
        <BodyText variant="b_one" className="pt-4" weight="bold">
          {CURRENCY + " " + item.variants[currentVariant].price + "/-"}
        </BodyText>
      )}
      <ItemTag
        shipping={item.shipping}
        gift={item.freeGift}
        stock={item.variants[currentVariant].stock}
        preOrder={item.preOrder}
        contact={item.contact}
      />
      {item.variants.length > 1 && (
        <ItemVariant
          variants={item.variants}
          selectedVariant={currentVariant}
          onVariantChange={setCurrentVariant}
        />
      )}
    </div>
  );
};

export default ItemCard;
