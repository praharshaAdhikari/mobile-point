import Link from "next/link";
import { BodyText, Heading } from "../shared/Typography";
import Image from "next/image";

const CATEGORIES = [
  {
    id: 1,
    name: "Audios and Cameras",
    link: "/",
    image: "/images/banners/two.jpg",
    groups: [
      {
        id: 2,
        name: "Speakers",
        link: "/",
        image: "/images/top/seven.png",
        items: 120,
      },
      {
        id: 3,
        name: "Headphones",
        link: "/",
        image: "/images/top/eight.png",
        items: 85,
      },
      {
        id: 4,
        name: "Cameras",
        link: "/",
        image: "/images/top/nine.png",
        items: 45,
      },
      {
        id: 5,
        name: "Microphones",
        link: "/",
        image: "/images/top/ten.png",
        items: 62,
      },
    ],
  },
  {
    id: 6,
    name: "Gaming",
    link: "/",
    image: "/images/banners/three.jpg",
    groups: [
      {
        id: 7,
        name: "Monitors",
        link: "/",
        image: "/images/top/eleven.png",
        items: 34,
      },
      {
        id: 8,
        name: "Keyboards",
        link: "/",
        image: "/images/top/twelve.png",
        items: 78,
      },
      {
        id: 9,
        name: "Mice",
        link: "/",
        image: "/images/top/thirteen.png",
        items: 92,
      },
      {
        id: 10,
        name: "Controllers",
        link: "/",
        image: "/images/top/fourteen.png",
        items: 56,
      },
    ],
  },
  {
    id: 11,
    name: "Office Equipments",
    link: "/",
    image: "/images/banners/four.jpg",
    groups: [
      {
        id: 12,
        name: "Printers",
        link: "/",
        image: "/images/top/fifteen.png",
        items: 9,
      },
      {
        id: 13,
        name: "Scanners",
        link: "/",
        image: "/images/top/sixteen.png",
        items: 15,
      },
      {
        id: 14,
        name: "Projectors",
        link: "/",
        image: "/images/top/seventeen.png",
        items: 23,
      },
      {
        id: 15,
        name: "Shredders",
        link: "/",
        image: "/images/top/eighteen.png",
        items: 12,
      },
    ],
  },
];

const CategoryItem = ({
  category,
}: {
  category: (typeof CATEGORIES)[number];
}) => {
  return (
    <div className="rounded-lg p-8 bg-white shadow-sm">
      <div className="flex items-center justify-between pb-8">
        <Heading variant="h3" className="uppercase font-bold">
          {category.name}
        </Heading>
        <Link href={category.link} className="text-[#666666] hover:underline">
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
        {category.groups.map((group) => (
          <Link
            key={group.id}
            href={group.link}
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
              {group.items} items
            </BodyText>
          </Link>
        ))}
      </div>
    </div>
  );
};

const CategoryGrid = () => {
  return (
    <div className="capsule px-0! grid grid-cols-3 gap-x-2">
      {CATEGORIES.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryGrid;
