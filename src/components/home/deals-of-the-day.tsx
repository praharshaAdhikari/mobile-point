"use client";
import React, { useState, useEffect } from "react";
import { Heading, BodyText } from "@/components/shared/Typography";

const DealsOfTheDay = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 20, seconds: 52 });

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
    <div className="capsule bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* Left Section - Magenta Banner */}
        <div className="md:col-span-1 bg-[#D911F5] p-6 flex items-center justify-center min-h-[300px]">
          <Heading
            variant="h3"
            className="text-white font-bold text-center writing-mode-vertical"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              whiteSpace: "nowrap",
              textOrientation: "mixed",
            }}
          >
            DEALS OF THE DAY
          </Heading>
        </div>

        {/* Center Section - Product Details */}
        <div className="md:col-span-5 p-6 flex flex-col justify-center">
          {/* Save Badge */}
          <div className="inline-flex items-center gap-2 bg-[#D911F5] text-white rounded-full px-3 py-1 w-fit mb-4">
            <BodyText variant="b_xs" weight="bold">
              SAVE
            </BodyText>
            <BodyText variant="b_small" weight="bold">
              Rs. 1000/-
            </BodyText>
          </div>

          {/* Product Title */}
          <Heading variant="h3" className="font-bold mb-4">
            Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
          </Heading>

          {/* Price */}
          <div className="flex items-center gap-4 mb-4">
            <Heading variant="h2" className="text-[#FF4444] font-bold">
              Rs. 2500/-
            </Heading>
            <BodyText variant="b_small" className="text-[#999999] line-through">
              Rs. 3500
            </BodyText>
          </div>

          {/* Product Specs */}
          <div className="space-y-2 mb-4">
            <div className="flex items-start gap-2">
              <span className="text-[#D911F5] mt-1">•</span>
              <BodyText variant="b_small">
                Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
              </BodyText>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#D911F5] mt-1">•</span>
              <BodyText variant="b_small">
                DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory
              </BodyText>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#D911F5] mt-1">•</span>
              <BodyText variant="b_small">
                Commanding Power Design: Twin 16+1+2 Phases Digital VRM
              </BodyText>
            </div>
          </div>

          {/* Badges */}
          <div className="flex gap-2 mb-4">
            <div className="bg-[#FFE0FF] text-[#D911F5] px-3 py-1 rounded-md">
              <BodyText variant="b_xs" weight="bold">
                FREE SHIPPING
              </BodyText>
            </div>
            <div className="bg-[#FFE0FF] text-[#D911F5] px-3 py-1 rounded-md">
              <BodyText variant="b_xs" weight="bold">
                FREE GIFT
              </BodyText>
            </div>
          </div>

          {/* Timer Section */}
          <div className="mb-4">
            <BodyText variant="b_small" weight="bold" className="mb-3">
              HURRY UP! PROMOTION WILL EXPIRES IN
            </BodyText>
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-1">
                <div className="bg-[#F0F0F0] rounded-md px-4 py-2 min-w-[60px] text-center">
                  <Heading variant="h2" className="font-bold">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </Heading>
                </div>
                <BodyText variant="b_xs">H</BodyText>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="bg-[#F0F0F0] rounded-md px-4 py-2 min-w-[60px] text-center">
                  <Heading variant="h2" className="font-bold">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </Heading>
                </div>
                <BodyText variant="b_xs">M</BodyText>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="bg-[#F0F0F0] rounded-md px-4 py-2 min-w-[60px] text-center">
                  <Heading variant="h2" className="font-bold">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </Heading>
                </div>
                <BodyText variant="b_xs">S</BodyText>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="w-full bg-[#F0F0F0] rounded-full h-2 overflow-hidden">
              <div
                className="bg-[#D911F5] h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <BodyText variant="b_xs" className="text-[#666666]">
              Sold: {soldItems}/{totalItems}
            </BodyText>
          </div>
        </div>

        {/* Right Section - Images Placeholder */}
        <div className="md:col-span-6 p-6">
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="bg-[#F5F5F5] rounded-lg flex items-center justify-center min-h-[250px]">
              <BodyText variant="b_small" className="text-[#999999]">
                Image 1
              </BodyText>
            </div>
            <div className="bg-[#F5F5F5] rounded-lg flex items-center justify-center min-h-[250px]">
              <BodyText variant="b_small" className="text-[#999999]">
                Image 2
              </BodyText>
            </div>
            <div className="bg-[#F5F5F5] rounded-lg flex items-center justify-center min-h-[250px]">
              <BodyText variant="b_small" className="text-[#999999]">
                Image 3
              </BodyText>
            </div>
            <div className="bg-[#F5F5F5] rounded-lg flex items-center justify-center min-h-[250px]">
              <BodyText variant="b_small" className="text-[#999999]">
                Image 4
              </BodyText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsOfTheDay;
