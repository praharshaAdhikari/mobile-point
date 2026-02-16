"use client";
import React from "react";
import { BodyText, Heading } from "../shared/Typography";
import { ChevronDown } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";

const CategorySidebar = ({ activeCategoryLink }: { activeCategoryLink: string }) => {
  const [expandedSections, setExpandedSections] = React.useState<string[]>([
    "categories",
  ]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const filters = [
    {
      id: "categories",
      label: "All Categories",
      items: CATEGORIES.map((cat) => ({
        label: cat.label,
        link: cat.link,
      })),
    },
    {
      id: "brand",
      label: "By Brand",
      items: [
        { label: "Apple", value: "apple" },
        { label: "Samsung", value: "samsung" },
        { label: "Sony", value: "sony" },
        { label: "LG", value: "lg" },
        { label: "Dell", value: "dell" },
        { label: "HP", value: "hp" },
        { label: "Lenovo", value: "lenovo" },
        { label: "Asus", value: "asus" },
      ],
    },
    {
      id: "price",
      label: "Price Range",
      items: [
        { label: "Under NRS 5,000", value: "0-5000" },
        { label: "NRS 5,000 - NRS 10,000", value: "5000-10000" },
        { label: "NRS 10,000 - NRS 20,000", value: "10000-20000" },
        { label: "NRS 20,000 - NRS 50,000", value: "20000-50000" },
        { label: "Above NRS 50,000", value: "50000+" },
      ],
    },
    {
      id: "rating",
      label: "By Rating",
      items: [
        { label: "★★★★★ 5 Stars", value: "5" },
        { label: "★★★★☆ 4+ Stars", value: "4" },
        { label: "★★★☆☆ 3+ Stars", value: "3" },
        { label: "★★☆☆☆ 2+ Stars", value: "2" },
      ],
    },
    {
      id: "availability",
      label: "By Availability",
      items: [
        { label: "In Stock", value: "in-stock" },
        { label: "Pre Order", value: "pre-order" },
        { label: "Contact for Availability", value: "contact" },
      ],
    },
    {
      id: "color",
      label: "By Color",
      items: [
        { label: "Black", value: "black" },
        { label: "White", value: "white" },
        { label: "Silver", value: "silver" },
        { label: "Gold", value: "gold" },
        { label: "Blue", value: "blue" },
        { label: "Red", value: "red" },
      ],
    },
    {
      id: "storage",
      label: "By Storage",
      items: [
        { label: "64GB", value: "64gb" },
        { label: "128GB", value: "128gb" },
        { label: "256GB", value: "256gb" },
        { label: "512GB", value: "512gb" },
        { label: "1TB", value: "1tb" },
      ],
    },
    {
      id: "features",
      label: "By Features",
      items: [
        { label: "Free Shipping", value: "free-shipping" },
        { label: "Free Gift", value: "free-gift" },
        { label: "Warranty", value: "warranty" },
        { label: "Fast Delivery", value: "fast-delivery" },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm sticky top-20 max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar">
      <Heading variant="h4" className="font-bold uppercase mb-6">
        {"Filters"}
      </Heading>

      <div className="space-y-4">
        {filters.map((filter) => (
          <div key={filter.id} className="border-b border-slate-200 pb-4">
            <button
              onClick={() => toggleSection(filter.id)}
              className="w-full flex items-center justify-between py-2 hover:text-[#C40EDC] transition-colors"
            >
              <BodyText variant="b_two" weight="bold" className="text-slate-700">
                {filter.label}
              </BodyText>
              <HugeiconsIcon
                icon={ChevronDown}
                size={18}
                className={`transition-transform ${
                  expandedSections.includes(filter.id) ? "rotate-180" : ""
                }`}
              />
            </button>

            {expandedSections.includes(filter.id) && (
              <div className="mt-3 space-y-2 ml-2">
                {filter.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`${filter.id}-${idx}`}
                      className="w-4 h-4 rounded border-slate-300 text-[#C40EDC] cursor-pointer"
                    />
                    {(item as any).link ? (
                      <label htmlFor={`${filter.id}-${idx}`}>
                        <Link
                          href={(item as any).link}
                          className={`text-sm cursor-pointer hover:text-[#C40EDC] transition-colors ${
                            (item as any).link === activeCategoryLink
                              ? "text-[#C40EDC] font-bold"
                              : "text-slate-600"
                          }`}
                        >
                          {(item as any).label}
                        </Link>
                      </label>
                    ) : (
                      <label
                        htmlFor={`${filter.id}-${idx}`}
                        className="text-sm text-slate-600 cursor-pointer hover:text-slate-800"
                      >
                        {(item as any).label}
                      </label>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="w-full mt-6 bg-[#C40EDC] text-white py-2 rounded-lg font-bold text-sm uppercase hover:bg-[#A80AB8] transition-colors">
        {"Apply Filters"}
      </button>
    </div>
  );
};

export default CategorySidebar;
