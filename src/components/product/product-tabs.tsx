"use client";
import React from "react";
import Image from "next/image";
import { Heading, BodyText } from "@/components/shared/Typography";

const TABS = ["DESCRIPTION", "REVIEWS (5)", "ADDITIONAL INFORMATION"];

const DescriptionContent = () => {
  return (
    <div className="space-y-6">
      {/* Main description */}
      <div>
        <BodyText variant="b_small" className="text-[#666666] leading-relaxed!">
          {
            "Built for ultra-fast performance, the thin and lightweight Samsung Galaxy Tab S2 goes anywhere you go. Photos, movies and documents pop on a crisp, clear Super AMOLED display. Expandable memory lets you enjoy more of your favorite content. And connecting and sharing between all your Samsung devices is easier than ever. Welcome to life with the reimagined Samsung Galaxy Tab S2. Watch then world come to life on your tablet's "
          }
          <span className="font-bold text-foreground">
            {"Super AMOLED display *"}
          </span>
          {
            " . With deep contrast, rich colors and crisp details, you won't miss a thing."
          }
        </BodyText>
      </div>

      {/* Product image in description */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden bg-[#F8F8F8]">
        <Image
          src="/images/items/phone.jpg"
          alt="Samsung Galaxy Tab S2 display"
          fill
          className="object-contain"
        />
      </div>
      <BodyText variant="b_xs" className="text-[#999999] text-center italic">
        {
          "* The Galaxy Tab S2's 9 - 3 ratio display provides an ideal environment for performing office tasks."
        }
      </BodyText>

      {/* From the manufacturer */}
      <div className="pt-4">
        <Heading variant="h4" className="font-bold pb-3">
          {"From the manufacturer"}
        </Heading>
        <BodyText variant="b_small" className="text-[#666666] leading-relaxed!">
          {
            "Dive into the blockbuster movies you can't wait to see. Switch between your favorite apps quickly and easily. The new and improved octa-core processor gives you the power and speed you need to see more and do more. Expand your tablet's memory from 32GB to up to an additional 128GB and enjoy more of your favorite music, photos, movies and games on the go with a microSD card. With Quick Connect, start a show on your Smart TV and, with the touch of a button, take it with you by moving it to your Galaxy Tab S2."
          }
        </BodyText>
        <BodyText
          variant="b_small"
          className="text-[#666666] leading-relaxed! pt-3"
        >
          {
            "Or send videos and photos from your tablet screen to your TV screen to share with everyone in the room. Work effortlessly between your Samsung tablet and Samsung smartphone with SideSync. Quickly drag and drop photos between devices. And even respond to a call from your smartphone right on your tablet screen."
          }
        </BodyText>
      </div>

      {/* Manufacturer images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <div className="relative h-48 bg-[#F8F8F8] rounded-lg overflow-hidden">
          <Image
            src="/images/items/phone.jpg"
            alt="Product showcase 1"
            fill
            className="object-contain p-4"
          />
        </div>
        <div className="relative h-48 bg-[#F8F8F8] rounded-lg overflow-hidden">
          <Image
            src="/images/items/headphone.jpg"
            alt="Product showcase 2"
            fill
            className="object-contain p-4"
          />
        </div>
        <div className="relative h-48 bg-[#F8F8F8] rounded-lg overflow-hidden">
          <Image
            src="/images/items/headphone2.jpg"
            alt="Product showcase 3"
            fill
            className="object-contain p-4"
          />
        </div>
      </div>

      {/* Variant info */}
      <div className="pt-4">
        <Heading variant="h4" className="font-bold pb-3">
          {"Samsung Galaxy Tab S2, 8-Inch, White"}
        </Heading>
        <BodyText variant="b_small" className="text-[#666666] leading-relaxed!">
          {
            "The Samsung Galaxy Tab S2 offers dual cameras: a rear facing 8-megapixel camera with Auto Focus and a 2.1-megapixel camera on the front. Take high-quality pictures and video or video chat with friends, family, and colleagues. Customize your Galaxy Tab S2 with the apps you use most. The Samsung Galaxy Essentials widget provides a collection of premium complimentary apps optimized for your tablet screen. Select and download the apps you want to instantly upgrade your mobile experience."
          }
        </BodyText>
      </div>

      {/* Show more */}
      <button className="text-[#C40EDC] hover:underline cursor-pointer pt-2">
        <BodyText variant="b_small" weight="bold">
          {"SHOW MORE"}
        </BodyText>
      </button>
    </div>
  );
};

const ReviewsContent = () => {
  return (
    <div className="space-y-6">
      <BodyText variant="b_small" className="text-[#666666]">
        {"No reviews yet. Be the first to write a review!"}
      </BodyText>
      <button className="px-6 py-2.5 border border-[#C40EDC] text-[#C40EDC] rounded-lg hover:bg-[#C40EDC]/5 transition-colors cursor-pointer">
        <BodyText variant="b_small" weight="bold">
          {"Write a Review"}
        </BodyText>
      </button>
    </div>
  );
};

const AdditionalInfoContent = () => {
  const specs = [
    { label: "Weight", value: "265 g" },
    { label: "Dimensions", value: "198.6 x 134.8 x 5.6 mm" },
    { label: "Display", value: '8.0" Super AMOLED' },
    { label: "Resolution", value: "2048 x 1536 pixels" },
    { label: "Processor", value: "Qualcomm Snapdragon 652" },
    { label: "RAM", value: "3 GB" },
    { label: "Storage", value: "32 GB (expandable up to 128 GB)" },
    { label: "Battery", value: "4000 mAh" },
    { label: "OS", value: "Android 7.0 Nougat" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <tbody>
          {specs.map((spec, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-[#F8F8F8]" : "bg-white"}
            >
              <td className="py-2.5 px-4 w-48">
                <BodyText variant="b_small" weight="bold">
                  {spec.label}
                </BodyText>
              </td>
              <td className="py-2.5 px-4">
                <BodyText variant="b_small" className="text-[#666666]">
                  {spec.value}
                </BodyText>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ProductTabs = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabContent = [
    <DescriptionContent key="desc" />,
    <ReviewsContent key="reviews" />,
    <AdditionalInfoContent key="additional" />,
  ];

  return (
    <div className="capsule bg-white rounded-xl p-6 shadow-sm">
      {/* Tab headers */}
      <div className="flex gap-4 sm:gap-8 border-b border-[#E5E5E5] overflow-x-auto">
        {TABS.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`pb-3 text-sm font-bold uppercase transition-colors cursor-pointer relative ${
              activeTab === index
                ? "text-foreground"
                : "text-[#999999] hover:text-[#666666]"
            }`}
            aria-selected={activeTab === index}
            role="tab"
          >
            {tab}
            {activeTab === index && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="pt-6" role="tabpanel">
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default ProductTabs;
