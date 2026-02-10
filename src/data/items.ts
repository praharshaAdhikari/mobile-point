export type Item = {
  id: number;
  name: string;
  discount: number;
  shipping: number;
  freeGift: boolean;
  preOrder: boolean;
  contact: boolean;
  tag: string[];
  category: string;
  variants: {
    color: string;
    price: number;
    stock: number;
    image: string;
  }[];
};

export const ITEMS = [
  {
    id: 1,
    name: "BOSO 2 Wireless On Ear Headphone",
    discount: 0,
    shipping: 0,
    freeGift: true,
    preOrder: false,
    contact: false,
    tag: ["Best Seller", "New In", "Popular"],
    category: "audio",
    variants: [
      {
        color: "Black",
        price: 3500,
        stock: 152,
        image: "/images/items/headphone.jpg",
      },
      {
        color: "White",
        price: 3500,
        stock: 122,
        image: "/images/items/headphone2.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
    discount: 0.15,
    shipping: 0,
    preOrder: false,
    contact: false,
    freeGift: false,
    tag: ["Best Seller", "New In", "Popular"],
    category: "tablets",
    variants: [
      {
        color: "Default",
        price: 3000,
        stock: 52,
        image: "/images/items/phone.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "BOSO 2 Wireless On Ear Headphone",
    discount: 0,
    shipping: 0,
    freeGift: true,
    preOrder: false,
    contact: false,
    tag: ["Best Seller", "New In"],
    category: "audio",
    variants: [
      {
        color: "Black",
        price: 3500,
        stock: 152,
        image: "/images/items/headphone.jpg",
      },
      {
        color: "White",
        price: 3500,
        stock: 152,
        image: "/images/items/headphone2.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
    discount: 0.15,
    shipping: 0,
    freeGift: false,
    preOrder: false,
    contact: false,
    tag: ["Best Seller", "Popular"],
    category: "mobile-phones",
    variants: [
      {
        color: "Default",
        price: 3000,
        stock: 0,
        image: "/images/items/phone.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "BOSO 2 Wireless On Ear Headphone",
    discount: 0,
    shipping: 0,
    freeGift: true,
    preOrder: false,
    contact: true,
    tag: ["New In", "Popular"],
    category: "audio",
    variants: [
      {
        color: "Black",
        price: 3500,
        stock: 0,
        image: "/images/items/headphone.jpg",
      },
      {
        color: "White",
        price: 3500,
        stock: 152,
        image: "/images/items/headphone2.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
    discount: 0.15,
    shipping: 0,
    freeGift: false,
    preOrder: false,
    contact: false,
    tag: ["Best Seller"],
    category: "tablets",
    variants: [
      {
        color: "Default",
        price: 3000,
        stock: 152,
        image: "/images/items/phone.jpg",
      },
    ],
  },
  {
    id: 7,
    name: "BOSO 2 Wireless On Ear Headphone",
    discount: 0,
    shipping: 0,
    freeGift: true,
    preOrder: false,
    contact: false,
    tag: ["Best Seller", "New In", "Popular"],
    category: "audio",
    variants: [
      {
        color: "Black",
        price: 3500,
        stock: 152,
        image: "/images/items/headphone.jpg",
      },
      {
        color: "White",
        price: 3500,
        stock: 152,
        image: "/images/items/headphone2.jpg",
      },
    ],
  },
  {
    id: 8,
    name: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
    discount: 0.15,
    shipping: 0,
    freeGift: false,
    preOrder: true,
    contact: false,
    tag: ["Best Seller", "Popular"],
    category: "tablets",
    variants: [
      {
        color: "Default",
        price: 3000,
        stock: 0,
        image: "/images/items/phone.jpg",
      },
    ],
  },
] as Item[];
