export type CuratedItem = {
  id: number;
  title: string;
  exerpt: string;
  image: string;
  link: string;
};

export const CURATED_ITEMS: CuratedItem[] = [
  {
    id: 1,
    title: "Zumac Steel Computer Case",
    exerpt: "And an option to upgrade every three years",
    image: "/images/curated/1.jpg",
    link: "/",
  },
  {
    id: 2,
    title: "Smart Home Devices",
    exerpt: "Make your home smarter with these devices",
    image: "/images/curated/2.jpg",
    link: "/",
  },
  {
    id: 3,
    title: "Wireless Earbuds",
    exerpt:
      "From $19.99/month for 36 months. $280.35 final payment due in month 37",
    image: "/images/curated/3.jpg",
    link: "/",
  },
  {
    id: 4,
    title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
    exerpt: "High performance laptops for gaming",
    image: "/images/curated/4.jpg",
    link: "/",
  },
  {
    id: 5,
    title: "Top 10 Smartphones of 2024",
    exerpt: "Discover the best smartphones available this year",
    image: "/images/curated/1.jpg",
    link: "/",
  },
  {
    id: 6,
    title: "Essential Accessories for Your Devices",
    exerpt: "Must-have accessories to enhance your tech experience",
    image: "/images/curated/2.jpg",
    link: "/",
  },
] as CuratedItem[];
