"use client";
import React from "react";
import ProductGallery from "./product-gallery";
import ProductInfo from "./product-info";
import PurchaseSidebar from "./purchase-sidebar";
import { Item } from "@/data/items";

const DEMO_FEATURES = [
  "Hybrid Sim Slot: Supports 1Gh & 12th Gen Intel Core",
  "DDR5 Compatible: 4TSMS DMAs with IMP 3.0 Memory",
  "Commanding Power Design: Twin R1+1.2 Phase Digital VRM",
];

const DEMO_COLORS = [
  { name: "Midnight", image: "/images/items/phone.jpg", price: 35000 },
  { name: "Deep", image: "/images/items/phone.jpg", price: 35000 },
  { name: "Sand Gold", image: "/images/items/phone.jpg", price: 35499 },
];

const MEMORY_SIZES = ["64GB", "128GB", "256GB", "512GB"];

const ProductDetail = ({ item }: { item: Item }) => {
  const galleryImages = item.variants.map((v) => v.image);
  if (galleryImages.length < 3) {
    while (galleryImages.length < 3) {
      galleryImages.push(galleryImages[0]);
    }
  }

  const tag = item.tag.length > 0 && !item.discount ? item.tag[0] : undefined;

  return (
    <div className="capsule bg-white rounded-xl p-6 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.3fr_0.8fr] gap-6 lg:gap-8">
        {/* Left - Gallery */}
        <div>
          <ProductGallery
            images={galleryImages}
            productName={item.name}
            tag={tag}
          />
        </div>

        {/* Center - Product Info */}
        <div>
          <ProductInfo
            name={item.name}
            price={item.variants[0].price}
            features={DEMO_FEATURES}
            freeShipping={item.shipping === 0}
            freeGift={item.freeGift}
            colors={DEMO_COLORS}
            memorySizes={MEMORY_SIZES}
            sku={"ABC123188"}
            category={"Cell Phones & Tablets"}
            brand={"Samsung"}
          />
        </div>

        {/* Right - Purchase Sidebar */}
        <div>
          <PurchaseSidebar
            price={item.variants[0].price}
            inStock={item.variants[0].stock > 0}
            emi={"Rs. 3000/- Per Month in 12 months"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
