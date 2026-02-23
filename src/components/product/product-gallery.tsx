"use client";
import React from "react";
import Image from "next/image";

const ProductGallery = ({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) => {
  const [selectedImage, setSelectedImage] = React.useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-white rounded-lg border border-[#99999922] overflow-hidden">
        <Image
          src={images[selectedImage]}
          alt={productName}
          fill
          className="object-contain p-4"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative size-16 rounded-md border-2 overflow-hidden transition-all cursor-pointer ${
              selectedImage === index
                ? "border-[#C40EDC]"
                : "border-[#99999933] hover:border-[#999999]"
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              fill
              className="object-contain p-1"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
