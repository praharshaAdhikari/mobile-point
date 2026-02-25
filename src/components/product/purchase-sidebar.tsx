"use client";
import React from "react";
import { Heading, BodyText } from "@/components/shared/Typography";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FavouriteIcon,
  ArrowTurnBackwardIcon,
  Tick02Icon,
  // LocationPinpoint01Icon,
  MinusSignSquareIcon,
  AddSquareIcon,
} from "@hugeicons/core-free-icons";

type PurchaseSidebarProps = {
  price: number;
  inStock: boolean;
  emi?: string;
};

const QuantitySelector = ({
  quantity,
  onIncrease,
  onDecrease,
}: {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}) => {
  return (
    <div className="flex items-center border border-[#E5E5E5] rounded-lg overflow-hidden">
      <button
        onClick={onDecrease}
        className="px-3 py-2 hover:bg-[#F0F0F0] transition-colors cursor-pointer"
        aria-label="Decrease quantity"
      >
        <HugeiconsIcon icon={MinusSignSquareIcon} size={18} color="#666666" />
      </button>
      <span className="px-4 py-2 text-sm font-semibold min-w-[40px] text-center border-x border-[#E5E5E5]">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        className="px-3 py-2 hover:bg-[#F0F0F0] transition-colors cursor-pointer"
        aria-label="Increase quantity"
      >
        <HugeiconsIcon icon={AddSquareIcon} size={18} color="#666666" />
      </button>
    </div>
  );
};

const SafeCheckoutBadges = () => {
  const badges = ["Visa", "Mastercard", "PayPal", "Stripe", "Khalti"];
  return (
    <div className="pt-5 border-t border-[#E5E5E5]">
      <BodyText
        variant="b_xs"
        weight="bold"
        className="text-[#666666] text-center pb-2"
      >
        {"Guaranteed Safe Checkout"}
      </BodyText>
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {badges.map((badge) => (
          <div
            key={badge}
            className="px-2.5 py-1 bg-[#F5F5F5] rounded text-[10px] font-medium text-[#666666] border border-[#E5E5E5]"
          >
            {badge}
          </div>
        ))}
      </div>
    </div>
  );
};

const PurchaseSidebar = ({ price, inStock, emi }: PurchaseSidebarProps) => {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <div className="border border-[#E5E5E5] rounded-xl p-5 bg-white flex flex-col gap-4">
      {/* Total price */}
      <div>
        <BodyText variant="b_xs" className="text-[#999999] uppercase">
          {"Total Price"}
        </BodyText>
        <Heading variant="h2" className="font-bold">
          {"Rs. " + (price * quantity).toLocaleString() + "/-"}
        </Heading>
      </div>

      {/* EMI info */}
      {emi && (
        <BodyText variant="b_xs" className="text-[#C40EDC]">
          {emi} <span className="underline cursor-pointer">{"See more"}</span>
        </BodyText>
      )}

      {/* Stock status */}
      <div className="flex items-center gap-1.5">
        <HugeiconsIcon
          icon={Tick02Icon}
          className="p-0.5 rounded-full bg-[#22DD22]"
          size={16}
          strokeWidth={4}
          color="white"
        />
        <BodyText
          variant="b_small"
          weight="medium"
          className={inStock ? "text-[#22DD22]" : "text-[#F1352B]"}
        >
          {inStock ? "In stock" : "Out of stock"}
        </BodyText>
      </div>

      {/* Quantity */}
      <QuantitySelector
        quantity={quantity}
        onIncrease={() => setQuantity((q) => q + 1)}
        onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
      />

      {/* Add to Cart */}
      <button className="w-full py-3 bg-[#22DD22] hover:bg-[#1ec41e] text-white font-bold rounded-lg transition-colors cursor-pointer uppercase text-sm tracking-wide">
        {"Add to Cart"}
      </button>

      {/* Buy with PayPal */}
      <button className="w-full py-3 bg-[#FFC439] hover:bg-[#f0b82e] text-[#253B80] font-bold rounded-lg transition-colors cursor-pointer text-sm">
        {"Buy with PayPal"}
      </button>

      {/* Wishlist / Compare */}
      <div className="flex items-center justify-center gap-6">
        <button className="flex items-center gap-1.5 text-[#666666] hover:text-[#C40EDC] transition-colors cursor-pointer">
          <HugeiconsIcon icon={FavouriteIcon} size={16} />
          <BodyText variant="b_xs">{"Wishlist added"}</BodyText>
        </button>
        <button className="flex items-center gap-1.5 text-[#666666] hover:text-[#C40EDC] transition-colors cursor-pointer">
          <HugeiconsIcon icon={ArrowTurnBackwardIcon} size={16} />
          <BodyText variant="b_xs">{"Compare"}</BodyText>
        </button>
      </div>

      {/* Safe Checkout */}
      <SafeCheckoutBadges />

      {/* Quick Order */}
      <div className="pt-2">
        <button className="w-full py-2.5 bg-[#C40EDC] hover:bg-[#a80cba] text-white font-bold rounded-lg transition-colors cursor-pointer text-sm">
          {"Quick Order 24/7"}
        </button>
        <div className="text-center pt-2">
          <Heading variant="h3" className="font-bold">
            {"9764578611"}
          </Heading>
        </div>
      </div>

      {/* Ships from */}
      <div className="flex items-center gap-1.5 pt-2 border-t border-[#E5E5E5]">
        {/* <HugeiconsIcon
          icon={LocationPinpoint01Icon}
          size={16}
          color="#999999"
        /> */}
        <BodyText variant="b_xs" className="text-[#999999]">
          {"Ships from "}
          <span className="text-[#C40EDC] underline cursor-pointer">
            {"Kathmandu"}
          </span>
        </BodyText>
      </div>
    </div>
  );
};

export default PurchaseSidebar;
