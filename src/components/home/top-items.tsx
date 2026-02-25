import Link from "next/link";
import { BodyText, Heading } from "../shared/Typography";
import Image from "next/image";
import ItemsCarousel from "./items-carousel";
import { ITEMS } from "@/data/items";
import { TOP_CATEGORIES } from "@/data/top-categories";

const TopItems = () => {
  return (
    <div className="capsule p-7 rounded-xl bg-white shadow-sm">
      <div className="flex items-center justify-between pb-8">
        <Heading variant="h3" className="uppercase font-bold">
          {"Top cellphones and tablets"}
        </Heading>
        <Link href={"/"} className="text-[#666666] hover:underline">
          <BodyText variant="b_small">{"View All"}</BodyText>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12 border-b border-[#99999944] pb-8">
        <div className="w-full md:flex-1 shrink-0 h-50 relative">
          <Image
            src={"/images/banners/one.jpg"}
            alt={"Top cellphones and tablets"}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
      <div className="">
        <ItemsCarousel items={ITEMS} />
      </div>
    </div>
  );
};
export default TopItems;
