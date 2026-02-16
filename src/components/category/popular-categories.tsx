import { BodyText, Heading } from "@/components/shared/Typography";
import { TOP_CATEGORIES } from "@/data/top-categories";
import Image from "next/image";

const PopularCategories = () => {
  return (
    <div className="p-7 rounded-xl bg-white shadow-sm mb-6">
      <div className="flex items-center justify-between pb-6">
        <Heading variant="h3" className="uppercase font-bold">
          {"Popular Categories"}
        </Heading>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {TOP_CATEGORIES.map((category) => (
          <div
            key={category.id}
            className="flex justify-between cursor-pointer hover:outline hover:outline-[#E2E4EB] rounded-xl p-2"
          >
            <div className="space-y-2">
              <Heading
                variant="h4"
                className="font-bold leading-6! line-clamp-2"
              >
                {category.name}
              </Heading>
              <BodyText
                variant="b_small"
                className="text-[#666666] leading-4! line-clamp-2"
              >
                {category.items} items
              </BodyText>
            </div>
            <div className="size-12.5 relative">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
