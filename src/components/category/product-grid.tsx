"use client";
import React from "react";
import { BodyText } from "@/components/shared/Typography";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown01Icon,
  GridViewIcon,
  Menu01Icon,
} from "@hugeicons/core-free-icons";
import { ITEMS, Item } from "@/data/items";
import ItemCard from "@/components/home/item-card";
import {
  Select,
  SelectItem,
  SelectPopover,
  SelectProvider,
} from "@ariakit/react";

const ALL_ITEMS: Item[] = [
  ...ITEMS,
  ...ITEMS.map((item, i) => ({ ...item, id: item.id + 100 + i })),
  ...ITEMS.map((item, i) => ({ ...item, id: item.id + 200 + i })),
];

const ITEMS_PER_PAGE_OPTIONS = [24, 48, 72];
const SORT_OPTIONS = ["Default", "Price: Low to High", "Price: High to Low", "Newest", "Rating"];

const Toolbar = ({
  totalResults,
  currentPage,
  itemsPerPage,
  sortBy,
  viewMode,
  onItemsPerPageChange,
  onSortChange,
  onViewModeChange,
}: {
  totalResults: number;
  currentPage: number;
  itemsPerPage: number;
  sortBy: string;
  viewMode: "grid" | "list";
  onItemsPerPageChange: (val: number) => void;
  onSortChange: (val: string) => void;
  onViewModeChange: (val: "grid" | "list") => void;
}) => {
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalResults);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#99999933]">
      <BodyText variant="b_xs" className="text-[#666666]">
        {`${start} - ${end}`}
        <span className="text-[#999999]">{` of ${totalResults} results`}</span>
      </BodyText>

      <div className="flex items-center gap-4 flex-wrap">
        {/* Show Items */}
        <div className="flex items-center gap-2">
          <BodyText variant="b_xs" className="text-[#666666]">
            {"Show Item"}
          </BodyText>
          <div className="flex gap-1">
            {ITEMS_PER_PAGE_OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => onItemsPerPageChange(opt)}
                className={`px-2 py-0.5 rounded text-xs transition-colors ${
                  itemsPerPage === opt
                    ? "bg-foreground text-white"
                    : "text-[#666666] hover:bg-[#F5F5F5]"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <BodyText variant="b_xs" className="text-[#666666]">
            {"Show Item"}
          </BodyText>
          <SelectProvider
            defaultValue={sortBy}
            setValue={(val) => onSortChange(val as string)}
          >
            <Select className="flex items-center gap-2 px-3 py-1.5 border border-[#CCCCCC] rounded-md text-xs outline-none min-w-28">
              {sortBy}
              <HugeiconsIcon icon={ArrowDown01Icon} size={14} className="text-[#999999]" />
            </Select>
            <SelectPopover
              className="z-50 min-w-36 bg-white border border-[#CCCCCC] rounded-lg shadow-xl p-1"
              gutter={4}
            >
              {SORT_OPTIONS.map((opt) => (
                <SelectItem
                  key={opt}
                  value={opt}
                  className="px-3 py-2 rounded-md hover:bg-[#F5F5F5] cursor-pointer text-xs outline-none"
                >
                  {opt}
                </SelectItem>
              ))}
            </SelectPopover>
          </SelectProvider>
        </div>

        {/* View Mode */}
        <div className="flex items-center gap-2">
          <BodyText variant="b_xs" className="text-[#666666]">
            {"View As"}
          </BodyText>
          <div className="flex gap-1">
            <button
              onClick={() => onViewModeChange("grid")}
              className={`p-1.5 rounded transition-colors ${
                viewMode === "grid" ? "bg-foreground text-white" : "text-[#999999] hover:bg-[#F5F5F5]"
              }`}
              aria-label="Grid view"
            >
              <HugeiconsIcon icon={GridViewIcon} size={16} />
            </button>
            <button
              onClick={() => onViewModeChange("list")}
              className={`p-1.5 rounded transition-colors ${
                viewMode === "list" ? "bg-foreground text-white" : "text-[#999999] hover:bg-[#F5F5F5]"
              }`}
              aria-label="List view"
            >
              <HugeiconsIcon icon={Menu01Icon} size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-1 pt-6">
      {getVisiblePages().map((page, i) =>
        page === "..." ? (
          <span key={`ellipsis-${i}`} className="px-2 text-[#999999]">
            {"..."}
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={`min-w-8 h-8 rounded-md text-xs font-medium transition-colors ${
              currentPage === page
                ? "bg-[#C40EDC] text-white"
                : "text-[#666666] hover:bg-[#F5F5F5]"
            }`}
          >
            {page}
          </button>
        )
      )}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="px-3 h-8 rounded-md text-xs font-medium text-[#666666] hover:bg-[#F5F5F5] transition-colors"
        >
          {"Next"}
        </button>
      )}
    </div>
  );
};

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(24);
  const [sortBy, setSortBy] = React.useState("Default");
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("grid");

  const totalResults = ALL_ITEMS.length;
  const totalPages = Math.ceil(totalResults / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = ALL_ITEMS.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex-1 min-w-0">
      <Toolbar
        totalResults={totalResults}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        sortBy={sortBy}
        viewMode={viewMode}
        onItemsPerPageChange={(val) => {
          setItemsPerPage(val);
          setCurrentPage(1);
        }}
        onSortChange={setSortBy}
        onViewModeChange={setViewMode}
      />

      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-4"
            : "flex flex-col gap-2 pt-4"
        }
      >
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg border border-[#99999922] hover:shadow-md transition-shadow"
          >
            <ItemCard item={item} />
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductGrid;
