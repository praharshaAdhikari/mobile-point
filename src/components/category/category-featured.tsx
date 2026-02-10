import Image from "next/image";
import { Heading, BodyText } from "../shared/Typography";
import { Item } from "@/data/items";

const CategoryFeatured = ({ item, categoryName }: { item: Item; categoryName: string }) => {
  const discountedPrice = item.discount
    ? item.variants[0].price - item.variants[0].price * item.discount
    : 0;

  return (
    <div className="bg-gradient-to-r from-[#F5F7FB] to-[#E8E8F0] rounded-xl p-6 md:p-8 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Content */}
        <div className="space-y-4">
          <Heading variant="h2" className="font-bold">
            {item.name}
          </Heading>
          <BodyText variant="b_two" className="text-slate-600">
            {"Discover the latest in " + categoryName}
          </BodyText>

          {/* Price Section */}
          <div className="flex items-baseline gap-3 pt-4">
            {discountedPrice ? (
              <>
                <Heading variant="h2" className="text-[#F1352B] font-bold">
                  {"NRS " + discountedPrice + "/-"}
                </Heading>
                <BodyText
                  variant="b_two"
                  className="line-through text-slate-500"
                >
                  {"NRS " + item.variants[0].price + "/-"}
                </BodyText>
              </>
            ) : (
              <Heading variant="h2" className="font-bold">
                {"NRS " + item.variants[0].price + "/-"}
              </Heading>
            )}
          </div>

          <button className="bg-[#C40EDC] text-white px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-tight hover:bg-[#A80AB8] transition-colors">
            {"Explore More"}
          </button>
        </div>

        {/* Right Image */}
        <div className="relative h-64 md:h-80">
          <Image
            src={item.variants[0].image}
            alt={item.name}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryFeatured;
