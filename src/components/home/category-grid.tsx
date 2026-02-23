"use client";
import Link from "next/link";
import { BodyText, Heading } from "../shared/Typography";
import Image from "next/image";
import useCategory from "@/api/hooks/useCategory";
import { Category } from "@/api/endpoints/category";
import { CATEGORIES } from "@/data/categories";

const CategoryItem = ({ category }: { category: Category }) => {
  return (
    <div className="rounded-lg p-8 bg-white shadow-sm">
      <div className="flex items-center justify-between pb-8">
        <Heading variant="h3" className="uppercase font-bold">
          {category.name}
        </Heading>
        <Link href={category.slug} className="text-[#666666] hover:underline">
          <BodyText variant="b_small">{"View All"}</BodyText>
        </Link>
      </div>
      <div className="border-b border-[#99999944] pb-8 mb-4">
        <div className="h-48 relative">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-2">
        {category.children.map((group) => (
          <Link
            key={group.id}
            href={group.slug}
            className="flex flex-col items-center justify-between py-4 hover:outline hover:outline-[#E2E4EB] rounded-lg"
          >
            <div className="size-30 relative">
              <Image
                src={group.image}
                alt={group.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <Heading
              variant="h4"
              className="font-bold leading-6! line-clamp-2 pt-2"
            >
              {group.name}
            </Heading>
            <BodyText
              variant="b_small"
              className="text-[#666666] leading-4! line-clamp-2"
            >
              {group.total_products} items
            </BodyText>
          </Link>
        ))}
      </div>
    </div>
  );
};

const CategoryGrid = () => {
  // const { data, isLoading, isError } = useCategory();

  // if (isLoading) {
  //   return (
  //     <div className="capsule px-0! grid grid-cols-3 gap-x-2">
  //       <BodyText variant="b_small">{"Loading..."}</BodyText>
  //     </div>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <div className="capsule px-0! grid grid-cols-3 gap-x-2">
  //       <BodyText variant="b_small">{"Error loading categories"}</BodyText>
  //     </div>
  //   );
  // }
  const data = CATEGORIES;

  return (
    <div className="capsule px-0! grid grid-cols-3 gap-x-2">
      {data?.results.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryGrid;
