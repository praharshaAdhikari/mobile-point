"use client";
import Link from "next/link";
import { BodyText, Heading } from "../shared/Typography";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown01Icon,
  Facebook02Icon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons";
import Image from "next/image";
import React from "react";
import {
  Select,
  SelectItem,
  SelectPopover,
  SelectProvider,
} from "@ariakit/react";

const LANGUAGES = [
  {
    label: "English",
    icon: "/icons/us-flag-icon.svg",
  },
  {
    label: "Nepali",
    icon: "/icons/nepal-flag-icon.svg",
  },
];

const CURRENCIES = ["NPR", "INR", "USD"];

const Footer = () => {
  const [language, setLanguage] = React.useState<number>(0);
  const [currency, setCurrency] = React.useState<number>(0);

  const topCategories = [
    { name: "Laptops", link: "/" },
    { name: "PC & Computers", link: "/" },
    { name: "Cell Phones", link: "/" },
    { name: "Tablets", link: "/" },
    { name: "Gaming & VR", link: "/" },
    { name: "Networks", link: "/" },
    { name: "Cameras", link: "/" },
    { name: "Sounds", link: "/" },
    { name: "Office", link: "/" },
  ];

  const company = [
    { name: "About Swoo", link: "/" },
    { name: "Contact", link: "/" },
    { name: "Career", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Sitemap", link: "/" },
    { name: "Store Locations", link: "/" },
  ];

  const helpCenter = [
    { name: "Customer Service", link: "/" },
    { name: "Policy", link: "/" },
    { name: "Terms & Conditions", link: "/" },
    { name: "Trach Order", link: "/" },
    { name: "FAQs", link: "/" },
    { name: "My Account", link: "/" },
    { name: "Product Support", link: "/" },
  ];

  const partner = [
    { name: "Become Seller", link: "/" },
    { name: "Affiliate", link: "/" },
    { name: "Advertise", link: "/" },
    { name: "Partnership", link: "/" },
  ];

  const paymentMethods = [
    { name: "PayPal", image: "/images/footer/paypal.png" },
    { name: "Mastercard", image: "/images/footer/mastercard.png" },
    { name: "Visa", image: "/images/footer/visa.png" },
    { name: "Stripe", image: "/images/footer/stripe.png" },
    { name: "Khalti-Esewa", image: "/images/footer/khalti-esewa.png" },
  ];

  return (
    <footer className="bg-[#FFFFFF] pt-12 pb-6">
      <div className="capsule">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-8 border-b border-gray-200">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Heading variant="h3" className="uppercase font-bold mb-8">
              {"MOBILE POINT SHOP"}
            </Heading>
            <div className="space-y-3">
              <div className="mb-10">
                <BodyText variant="b_small" className="text-gray-600">
                  {"HOTLINE 24/7"}
                </BodyText>
                <Link href="tel:+9779015357875">
                  <Heading variant="h2" className="text-[#C40EDC] font-bold">
                    {"+977 1 5357875"}
                  </Heading>
                </Link>
              </div>
              <div>
                <BodyText variant="b_small" className="leading-6!">
                  {"New Road"}
                </BodyText>
                <BodyText variant="b_small" className="leading-6!">
                  {"Kathmandu, Nepal"}
                </BodyText>
                <Link href="mailto:contact@mobilepoint.shop">
                  <BodyText
                    variant="b_small"
                    className="leading-6! hover:text-[#C40EDC]"
                  >
                    {"contact@mobilepoint.shop"}
                  </BodyText>
                </Link>
              </div>
              {/* Social Media Icons */}
              <div className="flex gap-2 pt-2">
                <Link
                  href="/"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-300 hover:bg-[#C40EDC] hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <HugeiconsIcon icon={TwitterIcon} size={16} />
                </Link>
                <Link
                  href="/"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-300 hover:bg-[#C40EDC] hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <HugeiconsIcon icon={Facebook02Icon} size={16} />
                </Link>
                <Link
                  href="/"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-300 hover:bg-[#C40EDC] hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <HugeiconsIcon icon={InstagramIcon} size={16} />
                </Link>
                <Link
                  href="/"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-300 hover:bg-[#C40EDC] hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <HugeiconsIcon icon={YoutubeIcon} size={16} />
                </Link>
                <Link
                  href="/"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-300 hover:bg-[#C40EDC] hover:text-white transition-colors"
                  aria-label="Pinterest"
                >
                  <HugeiconsIcon icon={PinterestIcon} size={16} />
                </Link>
              </div>
            </div>
            <div className="pt-6 flex gap-4 mt-12">
              {/* Currency Selector */}
              <SelectProvider
                defaultValue={CURRENCIES[currency]}
                setValue={(val) => {
                  const index = CURRENCIES.indexOf(val as string);
                  if (index !== -1) setCurrency(index);
                }}
              >
                <Select className="flex items-center gap-2 px-4 w-24 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700 outline-none">
                  {CURRENCIES[currency]}
                  <HugeiconsIcon
                    icon={ArrowDown01Icon}
                    size={16}
                    className="text-slate-400"
                  />
                </Select>
                <SelectPopover
                  className="z-60 min-w-25 bg-white border border-slate-200 rounded-lg shadow-xl p-1 animate-in fade-in zoom-in duration-200"
                  gutter={8}
                >
                  {CURRENCIES.map((cur, index) => (
                    <SelectItem
                      key={index}
                      value={cur}
                      className="px-3 py-2 rounded-md hover:bg-slate-100 cursor-pointer outline-none transition-colors aria-selected:bg-blue-50 aria-selected:text-blue-700"
                    >
                      <BodyText variant="b_small">{cur}</BodyText>
                    </SelectItem>
                  ))}
                </SelectPopover>
              </SelectProvider>

              {/* Language Selector */}
              <SelectProvider
                defaultValue={LANGUAGES[language].label}
                setValue={(val) => {
                  const index = LANGUAGES.findIndex((l) => l.label === val);
                  if (index !== -1) setLanguage(index);
                }}
              >
                <Select className="flex items-center gap-2 px-4 w-36 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700 outline-none">
                  <Image
                    src={LANGUAGES[language].icon}
                    alt={LANGUAGES[language].label}
                    width={20}
                    height={20}
                    className="w-5 h-5 rounded-sm"
                  />
                  {LANGUAGES[language].label}
                  <HugeiconsIcon
                    icon={ArrowDown01Icon}
                    size={16}
                    className="text-slate-400"
                  />
                </Select>
                <SelectPopover
                  className="z-60 min-w-35 bg-white border border-slate-200 rounded-lg shadow-xl p-1 animate-in fade-in zoom-in duration-200"
                  gutter={8}
                >
                  {LANGUAGES.map((lang, index) => (
                    <SelectItem
                      key={index}
                      value={lang.label}
                      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-100 cursor-pointer text-sm font-medium text-slate-700 outline-none transition-colors aria-selected:bg-blue-50 aria-selected:text-blue-700"
                    >
                      <Image
                        src={lang.icon}
                        alt={lang.label}
                        width={20}
                        height={20}
                      />
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectPopover>
              </SelectProvider>
            </div>
          </div>

          {/* Top Categories */}
          <div>
            <Heading variant="h3" className="font-bold mb-4 uppercase">
              {"TOP CATEGORIES"}
            </Heading>
            <ul className="space-y-2">
              {topCategories.map((category) => (
                <li key={category.name}>
                  <Link href={category.link}>
                    <BodyText
                      variant="b_small"
                      className="text-gray-600 hover:text-[#C40EDC] transition-colors"
                    >
                      {category.name}
                    </BodyText>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <Heading variant="h3" className="font-bold mb-4 uppercase">
              {"COMPANY"}
            </Heading>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.link}>
                    <BodyText
                      variant="b_small"
                      className="text-gray-600 hover:text-[#C40EDC] transition-colors"
                    >
                      {item.name}
                    </BodyText>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <Heading variant="h3" className="font-bold mb-4 uppercase">
              {"HELP CENTER"}
            </Heading>
            <ul className="space-y-2">
              {helpCenter.map((item) => (
                <li key={item.name}>
                  <Link href={item.link}>
                    <BodyText
                      variant="b_small"
                      className="text-gray-600 hover:text-[#C40EDC] transition-colors"
                    >
                      {item.name}
                    </BodyText>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner */}
          <div>
            <Heading variant="h3" className="font-bold mb-4 uppercase">
              {"PARTNER"}
            </Heading>
            <ul className="space-y-2">
              {partner.map((item) => (
                <li key={item.name}>
                  <Link href={item.link}>
                    <BodyText
                      variant="b_small"
                      className="text-gray-600 hover:text-[#C40EDC] transition-colors"
                    >
                      {item.name}
                    </BodyText>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-b border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Heading variant="h5" className="font-bold">
              SUBSCRIBE & GET <span className="text-[#F1352B]">10% OFF</span>{" "}
              FOR YOUR FIRST ORDER
            </Heading>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 md:w-80 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#C40EDC]"
              />
              <button className="px-6 py-2 bg-[#C40EDC] text-white rounded-lg font-medium hover:bg-[#a30cb8] transition-colors whitespace-nowrap">
                <BodyText variant="b_small" weight="medium">
                  SUBSCRIBE
                </BodyText>
              </button>
            </div>
          </div>
          <BodyText variant="b_xs" className="text-gray-600 mt-2">
            By subscribing, you're accepted the our{" "}
            <Link href="/" className="underline hover:text-[#C40EDC]">
              Policy
            </Link>
          </BodyText>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <BodyText variant="b_small" className="text-gray-600">
            © 2024 <span className="font-semibold">mobilepoint</span>. All
            Rights Reserved
          </BodyText>

          {/* Payment Methods */}
          <div className="flex items-center gap-3">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="w-10 h-6 relative"
                title={method.name}
              >
                <Image
                  src={method.image}
                  alt={method.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <Link href="/">
            <BodyText
              variant="b_small"
              className="text-[#C40EDC] hover:underline"
            >
              Mobile App
            </BodyText>
          </Link>
        </div>

        {/* Language and Currency Selector */}
      </div>
    </footer>
  );
};

export default Footer;
