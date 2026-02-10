"use client";
import { CATEGORIES } from "@/data/categories";
import React from "react";
import { BodyText } from "../shared/Typography";
import {
  Select,
  SelectItem,
  SelectPopover,
  SelectProvider,
} from "@ariakit/react";
import { ArrowDown01Icon, Search01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const SLOGANS = [
  "free shipping over NPR. 2800/-",
  "30 days money back",
  "100% secure payment",
];

const Search = () => {
  const categories = [{ label: "All Categories", link: "/" }, ...CATEGORIES];
  const [category, setCategory] = React.useState<number>(0);

  return (
    <div className="h-20 capsule rounded-xl from-[#FB7030]/60 to-[#C40EDC]/60 bg-linear-to-r shadow-sm backdrop-blur-md flex justify-between items-center">
      <div className="flex items-center flex-1 max-w-2xl bg-white rounded-lg p-1.5 shadow-inner">
        <SelectProvider
          defaultValue={categories[category].label}
          setValue={(val) => {
            const index = categories.findIndex((c) => c.label === val);
            if (index !== -1) setCategory(index);
          }}
        >
          <Select className="flex items-center gap-2 px-4 py-2 bg-slate-50 border-r border-slate-200 rounded-l-md hover:bg-slate-100 transition-colors outline-none whitespace-nowrap">
            <BodyText variant="b_two" weight="medium">
              {categories[category].label}
            </BodyText>
            <HugeiconsIcon icon={ArrowDown01Icon} size={16} />
          </Select>
          <SelectPopover
            gutter={8}
            className="min-w-50 bg-white border border-slate-200 rounded-lg shadow-xl p-1 animate-in fade-in zoom-in duration-200"
          >
            {categories.map((cat, index) => (
              <SelectItem
                key={index}
                value={cat.label}
                className="px-4 py-2 rounded-md hover:bg-slate-100 cursor-pointer text-sm font-medium text-slate-700 outline-none transition-colors aria-selected:bg-blue-50 aria-selected:text-blue-700"
              >
                {cat.label}
              </SelectItem>
            ))}
          </SelectPopover>
        </SelectProvider>
        <input
          type="text"
          placeholder="What are you looking for?"
          className="flex-1 px-4 py-2 outline-none"
        />
        <button className="grid place-items-center size-10">
          <HugeiconsIcon icon={Search01Icon} size={20} />
        </button>
      </div>

      <div className="hidden lg:flex items-center gap-8 ml-8">
        {SLOGANS.map((slogan, index) => (
          <BodyText
            key={index}
            variant="b_three"
            weight="medium"
            className="text-white uppercase whitespace-nowrap"
          >
            {slogan}
          </BodyText>
        ))}
      </div>
    </div>
  );
};

export default Search;
