import React from "react";
import { BodyText, Heading } from "@/components/shared/Typography";
import Image from "next/image";
import Link from "next/link";

const BRANDS = [
  {
    label: "One",
    icon: "/logos/featured/logo1.png",
  },
  {
    label: "Two",
    icon: "/logos/featured/logo2.png",
  },
  {
    label: "Three",
    icon: "/logos/featured/logo3.png",
  },
  {
    label: "Four",
    icon: "/logos/featured/logo4.png",
  },
  {
    label: "Five",
    icon: "/logos/featured/logo5.png",
  },
  {
    label: "Six",
    icon: "/logos/featured/logo6.png",
  },
  {
    label: "Seven",
    icon: "/logos/featured/logo7.png",
  },
  {
    label: "Eight",
    icon: "/logos/featured/logo8.png",
  },
  {
    label: "Nine",
    icon: "/logos/featured/logo9.png",
  },
  {
    label: "Ten",
    icon: "/logos/featured/logo10.png",
  },
];

const Brands = () => {
  return (
    <div className="p-7 rounded-xl bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <Heading variant="h3" className="uppercase font-bold">
          {"Featured Brands"}
        </Heading>
        <Link href={"/"} className="text-[#666666] hover:underline">
          <BodyText variant="b_small">{"View All"}</BodyText>
        </Link>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-8 mt-6">
        {BRANDS.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center relative h-12 sm:h-16"
          >
            <Image
              src={brand.icon}
              alt={brand.label}
              fill
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
