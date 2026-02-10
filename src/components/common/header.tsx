"use client";
import React from "react";

import {
  Call02Icon,
  ArrowDown01Icon,
  User02Icon,
  ShoppingCart02Icon,
  Menu01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { BodyText } from "@/components/shared/Typography";
import Link from "next/link";
import {
  Disclosure,
  DisclosureContent,
  DisclosureProvider,
  Hovercard,
  HovercardAnchor,
  HovercardProvider,
  Select,
  SelectItem,
  SelectPopover,
  SelectProvider,
} from "@ariakit/react";
import Image from "next/image";

const PHONE = "+977 1 5357875";
const TOP_ROUTES = [
  {
    label: "Sell on Mobile Point",
    link: "/",
  },
  {
    label: "Track Order",
    link: "/",
  },
];

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

const NAV_ITEMS = [
  {
    label: "Home",
    expandable: false,
    link: "/",
  },
  {
    label: "Products",
    expandable: true,
    items: [
      {
        label: "Mobile Phones",
        link: "/",
      },
      {
        label: "Accessories",
        link: "/",
      },
      {
        label: "Tablets",
        link: "/",
      },
    ],
  },
  {
    label: "Hot Sales",
    expandable: true,
    items: [
      {
        label: "Refrigerators",
        link: "/",
      },
      {
        label: "Air Conditioners",
        link: "/",
      },
      {
        label: "Washing Machines",
        link: "/",
      },
      {
        label: "Water Dispensers",
        link: "/",
      },
    ],
  },
  {
    label: "Contact",
    expandable: false,
    link: "/",
  },
];

const CART_DETAILS = {
  totalItems: 5,
  totalPrice: 3000,
};

const Header = () => {
  const [language, setLanguage] = React.useState<number>(0);
  const [currency, setCurrency] = React.useState<number>(0);

  // const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="py-4 bg-background sticky top-0 z-50">
      <div className="capsule rounded-xl bg-white/65 border border-white/50 shadow-sm">
        <div className="h-15 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 bg-[#EBEEF6] px-3 py-1.5 rounded-xl hover:bg-[#dfe3ee] transition-colors group">
              <HugeiconsIcon
                icon={Call02Icon}
                size={20}
                className="text-slate-600 group-hover:text-slate-900"
              />
              <BodyText
                variant="b_small"
                className="hidden sm:block text-slate-600 group-hover:text-slate-900 font-medium"
              >
                {"Hotline 24/7"}
              </BodyText>
            </button>
            <BodyText
              variant="b_small"
              weight="bold"
              className="cursor-pointer hover:text-blue-600 transition-colors hidden sm:block"
            >
              {PHONE}
            </BodyText>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <nav className="hidden lg:flex items-center gap-6 border-r border-slate-200 pr-4">
              {TOP_ROUTES.map((route, index) => (
                <Link key={index} href={route.link}>
                  <BodyText variant="b_three">{route.label}</BodyText>
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Currency Selector */}
              <SelectProvider
                defaultValue={CURRENCIES[currency]}
                setValue={(val) => {
                  const index = CURRENCIES.indexOf(val as string);
                  if (index !== -1) setCurrency(index);
                }}
              >
                <Select className="flex items-center gap-1 sm:gap-2 px-2 sm:pl-4 sm:w-20 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors text-xs sm:text-sm font-medium text-slate-700 outline-none">
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
                <Select className="flex items-center gap-1 sm:gap-2 px-2 sm:pl-4 sm:w-32 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors text-xs sm:text-sm font-medium text-slate-700 outline-none">
                  <Image
                    src={LANGUAGES[language].icon}
                    alt={LANGUAGES[language].label}
                    width={20}
                    height={20}
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm"
                  />
                  <span className="hidden sm:inline">
                    {LANGUAGES[language].label}
                  </span>
                  <span className="sm:hidden">
                    {LANGUAGES[language].label.slice(0, 2)}
                  </span>
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
        </div>
        <div className="flex justify-between items-center h-16 sm:h-22">
          <div className="flex gap-4 sm:gap-24 items-center">
            <div className="flex w-32 sm:w-36 items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={51}
                height={40}
                className="w-8 h-6 sm:w-12 sm:h-10"
              />
              <BodyText
                variant="b_three"
                weight="bold"
                className="md:leading-4!"
              >
                {"MOBILE POINT"}
              </BodyText>
            </div>
            <div className="hidden xl:flex items-center gap-8 lg:gap-12">
              {NAV_ITEMS.map((item, index) =>
                !item.expandable ? (
                  <Link href={item.link!} key={index}>
                    <BodyText
                      variant="b_three"
                      weight="bold"
                      className="uppercase hover:text-blue-600 transition-colors whitespace-nowrap"
                    >
                      {item.label}
                    </BodyText>
                  </Link>
                ) : (
                  <HovercardProvider
                    key={index}
                    showTimeout={100}
                    hideTimeout={200}
                  >
                    <HovercardAnchor render={<Link href={item.link || "#"} />}>
                      <div className="flex items-center gap-1 group outline-none cursor-pointer">
                        <BodyText
                          variant="b_three"
                          weight="bold"
                          className="uppercase group-hover:text-blue-600 transition-colors whitespace-nowrap"
                        >
                          {item.label}
                        </BodyText>
                        <HugeiconsIcon
                          icon={ArrowDown01Icon}
                          size={16}
                          className="text-slate-400 group-hover:text-blue-600 transition-colors"
                        />
                      </div>
                    </HovercardAnchor>
                    <Hovercard
                      gutter={8}
                      className="z-50 min-w-50 bg-gray-100  border border-slate-200 rounded-lg shadow-xl p-1 animate-in fade-in zoom-in duration-200 outline-none"
                    >
                      <div className="flex flex-col">
                        {item.items?.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.link}
                            className="block px-4 py-2 rounded-md hover:bg-slate-200 cursor-pointer outline-none transition-colors"
                          >
                            <BodyText
                              variant="b_three"
                              weight="bold"
                              className="uppercase"
                            >
                              {subItem.label}
                            </BodyText>
                          </Link>
                        ))}
                      </div>
                    </Hovercard>
                  </HovercardProvider>
                ),
              )}
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-4">
              <div className="grid place-items-center size-8 sm:size-10 rounded-full bg-[#EBEEF6]">
                <HugeiconsIcon
                  icon={User02Icon}
                  size={20}
                  className="sm:size-6 text-[#B3B3B7]"
                />
              </div>
              <div className="hidden md:block *:leading-5! uppercase">
                <BodyText variant="b_xs" className="text-[#666666]">
                  {"Welcome"}
                </BodyText>
                <BodyText variant="b_three" weight="bold">
                  {"Log In / Register"}
                </BodyText>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="grid place-items-center size-8 sm:size-10 rounded-full bg-[#EBEEF6] relative">
                <HugeiconsIcon
                  icon={ShoppingCart02Icon}
                  size={20}
                  className="sm:size-6 text-[#B3B3B7]"
                />
                <div className="absolute -bottom-1 -right-1 flex items-center justify-center size-4 sm:size-5 rounded-full bg-[#C40EDC]">
                  <BodyText
                    variant="b_xs"
                    className="text-white/80 scale-75 sm:scale-100"
                  >
                    {CART_DETAILS.totalItems}
                  </BodyText>
                </div>
              </div>
              <div className="hidden md:block *:leading-5! uppercase">
                <BodyText variant="b_xs" className="text-[#666666]">
                  {"cart"}
                </BodyText>
                <BodyText variant="b_three" weight="bold">
                  {CURRENCIES[currency] + " " + CART_DETAILS.totalPrice + "/-"}
                </BodyText>
              </div>
            </div>
            <button
              className="xl:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <HugeiconsIcon
                icon={isMobileMenuOpen ? Cancel01Icon : Menu01Icon}
                size={24}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white border border-slate-200 mt-2 rounded-xl shadow-2xl p-4 overflow-y-auto max-h-[80vh] animate-in slide-in-from-top duration-300 z-70">
            <div className="flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                {NAV_ITEMS.map((item, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    {!item.expandable ? (
                      <Link
                        href={item.link!}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 hover:bg-slate-50 rounded-lg transition-colors"
                      >
                        <BodyText
                          variant="b_two"
                          weight="bold"
                          className="uppercase"
                        >
                          {item.label}
                        </BodyText>
                      </Link>
                    ) : (
                      <DisclosureProvider>
                        <Disclosure>
                          <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                            <BodyText
                              variant="b_two"
                              weight="bold"
                              className="uppercase"
                            >
                              {item.label}
                            </BodyText>
                            <HugeiconsIcon icon={ArrowDown01Icon} size={20} />
                          </div>
                        </Disclosure>
                        <DisclosureContent className="pl-4 flex flex-col gap-2 animate-in slide-in-from-left duration-200">
                          {item.items?.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.link}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="p-2 hover:bg-slate-50 rounded-lg transition-colors"
                            >
                              <BodyText
                                variant="b_three"
                                weight="medium"
                                className="uppercase text-slate-600"
                              >
                                {subItem.label}
                              </BodyText>
                            </Link>
                          ))}
                        </DisclosureContent>
                      </DisclosureProvider>
                    )}
                  </div>
                ))}
              </nav>

              <div className="h-px bg-slate-100" />

              <nav className="flex flex-col gap-4">
                <BodyText
                  variant="b_xs"
                  weight="bold"
                  className="uppercase text-slate-400 px-2 font-black italic"
                >
                  Quick Links
                </BodyText>
                {TOP_ROUTES.map((route, index) => (
                  <Link
                    key={index}
                    href={route.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    <BodyText variant="b_three" weight="medium">
                      {route.label}
                    </BodyText>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
