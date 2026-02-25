"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Heading, BodyText } from "@/components/shared/Typography";

const PRODUCT_THUMBNAILS = [
  "/images/items/phone.jpg",
  "/images/items/phone.jpg",
  "/images/items/phone.jpg",
];

const DealsOfTheDay = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 20,
    seconds: 52,
  });

  const [selectedThumb, setSelectedThumb] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds -= 1;
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
          if (minutes < 0) {
            minutes = 59;
            hours -= 1;
            if (hours < 0) {
              hours = 0;
              minutes = 0;
              seconds = 0;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const soldItems = 26;
  const totalItems = 75;
  const progressPercent = (soldItems / totalItems) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden capsule px-0!">
      {/* Top magenta bar */}
      <div className="bg-[#D911F5] px-6 py-3">
        <Heading variant="h4" className="text-white font-bold tracking-wide">
          DEALS OF THE DAY
        </Heading>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Main content area */}
        <div className="flex-1 flex flex-col md:flex-row p-5 gap-5">
          {/* Product image section */}
          <div className="flex gap-3 shrink-0">
            {/* Thumbnails column */}
            <div className="flex flex-col gap-2">
              {PRODUCT_THUMBNAILS.map((thumb, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedThumb(idx)}
                  className={`w-14 h-14 rounded-md overflow-hidden border-2 transition-colors cursor-pointer ${
                    selectedThumb === idx
                      ? "border-[#D911F5]"
                      : "border-[#E5E5E5] hover:border-[#ccc]"
                  }`}
                >
                  <Image
                    src={thumb}
                    alt={`Thumbnail ${idx + 1}`}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main product image */}
            <div className="relative w-[180px] h-[230px] sm:w-[220px] sm:h-[280px]">
              {/* Save badge */}
              <div className="absolute top-3 left-3 z-10 bg-[#D911F5] text-white rounded-full px-3 py-1.5">
                <BodyText variant="b_xs" weight="bold" className="leading-none">
                  SAVE Rs. 1000/-
                </BodyText>
                {/* <BodyText
                  variant="b_small"
                  weight="bold"
                  className="leading-none"
                >
                </BodyText> */}
              </div>
              <Image
                src={PRODUCT_THUMBNAILS[selectedThumb]}
                alt="Product main"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Product details section */}
          <div className="flex flex-col justify-center flex-1 min-w-0">
            {/* Product Title */}
            <Heading variant="h3" className="font-bold mb-3">
              Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
            </Heading>

            {/* Price */}
            <div className="flex items-center gap-4 mb-3">
              <Heading variant="h2" className="text-[#FF4444] font-bold">
                Rs. 2500/-
              </Heading>
              <BodyText
                variant="b_small"
                className="text-[#999999] line-through"
              >
                Rs. 3500
              </BodyText>
            </div>

            {/* Product Specs */}
            <div className="space-y-1.5 mb-3">
              <div className="flex items-start gap-2">
                <span className="text-[#D911F5] mt-0.5 text-lg leading-none">
                  •
                </span>
                <BodyText variant="b_small">
                  Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
                </BodyText>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#D911F5] mt-0.5 text-lg leading-none">
                  •
                </span>
                <BodyText variant="b_small">
                  DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory
                </BodyText>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#D911F5] mt-0.5 text-lg leading-none">
                  •
                </span>
                <BodyText variant="b_small">
                  Commanding Power Design: Twin 16+1+2 Phases Digital VRM
                </BodyText>
              </div>
            </div>

            {/* Badges */}
            <div className="flex gap-2 mb-4">
              <div className="border border-[#D911F5] text-[#D911F5] px-3 py-1 rounded-md">
                <BodyText variant="b_xs" weight="bold">
                  FREE SHIPPING
                </BodyText>
              </div>
              <div className="border border-[#D911F5] text-[#D911F5] px-3 py-1 rounded-md">
                <BodyText variant="b_xs" weight="bold">
                  FREE GIFT
                </BodyText>
              </div>
            </div>

            {/* Timer Section */}
            <div className="mb-4">
              <div className="flex items-center gap-4">
                <BodyText variant="b_small" weight="bold" className="shrink-0">
                  HURRY UP!
                  <br />
                  PROMOTION WILL
                  <br />
                  EXPIRES IN
                </BodyText>
                <div className="flex gap-2">
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="border border-[#E5E5E5] rounded-md px-3 py-1.5 min-w-[48px] text-center">
                      <Heading variant="h3" className="font-bold">
                        {String(timeLeft.hours).padStart(2, "0")}
                      </Heading>
                    </div>
                    <BodyText variant="b_xs" className="text-[#999]">
                      H
                    </BodyText>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="border border-[#E5E5E5] rounded-md px-3 py-1.5 min-w-[48px] text-center">
                      <Heading variant="h3" className="font-bold">
                        {String(timeLeft.minutes).padStart(2, "0")}
                      </Heading>
                    </div>
                    <BodyText variant="b_xs" className="text-[#999]">
                      M
                    </BodyText>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="border border-[#E5E5E5] rounded-md px-3 py-1.5 min-w-[48px] text-center">
                      <Heading variant="h3" className="font-bold">
                        {String(timeLeft.seconds).padStart(2, "0")}
                      </Heading>
                    </div>
                    <BodyText variant="b_xs" className="text-[#999]">
                      S
                    </BodyText>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1.5">
              <div className="w-full bg-[#F0F0F0] rounded-full h-2 overflow-hidden">
                <div
                  className="bg-linear-to-r from-[#D911F5] to-[#8B11F5] h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <BodyText variant="b_xs" className="text-[#666666]">
                Sold: <strong>{soldItems}</strong>/{totalItems}
              </BodyText>
            </div>
          </div>
        </div>

        {/* Right side banner images */}
        <div className="hidden lg:flex flex-col gap-2 w-[220px] shrink-0 p-3 pl-0">
          <div className="relative flex-1 rounded-lg overflow-hidden min-h-[100px]">
            <Image
              src="/images/banners/five.jpg"
              alt="Promo banner 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative flex-1 rounded-lg overflow-hidden min-h-[100px]">
            <Image
              src="/images/banners/six.jpg"
              alt="Promo banner 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative flex-1 rounded-lg overflow-hidden min-h-[100px]">
            <Image
              src="/images/banners/seven.jpg"
              alt="Promo banner 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsOfTheDay;
