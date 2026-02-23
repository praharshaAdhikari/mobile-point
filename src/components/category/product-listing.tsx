"use client";
import { Heading } from "@/components/shared/Typography";
import FiltersSidebar from "./filters-sidebar";
import ProductGrid from "./product-grid";

const ProductListing = () => {
  return (
    <div className="capsule bg-white rounded-xl p-6 shadow-sm">
      <div className="flex gap-6">
        {/* Filters Sidebar */}
        <div className="hidden lg:block w-56 shrink-0">
          <FiltersSidebar />
        </div>

        {/* Product Grid */}
        <ProductGrid />
      </div>
    </div>
  );
};

export default ProductListing;
