import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/data/categories";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { BodyText, Heading } from "../shared/Typography";

const SALE = "40% OFF";

const Browse = () => {
  return (
    <div className="capsule p-0 grid grid-cols-1 md:grid-cols-4 md:grid-rows-9 gap-4 h-screen max-h-212.5">
      {/* Categories Menu */}
      <div className="order-1 md:col-span-1 md:row-span-6 bg-white border border-white/50 rounded-xl p-6 shadow-sm flex flex-col overflow-hidden">
        <BodyText
          variant="b_one"
          weight="bold"
          className="uppercase mb-6 text-slate-800 shrink-0"
        >
          {"Browse Categories"}
        </BodyText>
        <nav className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          <div className="flex flex-col gap-1">
            {CATEGORIES.map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="group flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50 transition-all duration-300"
              >
                <BodyText
                  variant="b_two"
                  weight="medium"
                  className="text-slate-600 group-hover:text-blue-600 transition-colors"
                >
                  {category.label}
                </BodyText>
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={18}
                  className="text-slate-300 group-hover:text-blue-600 transition-all transform group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Sale Indicator */}
      <div className="order-5 md:col-span-1 md:row-span-3 bg-linear-to-r from-[#FB7030] to-[#C40EDC] rounded-xl p-6 text-white shadow-lg relative overflow-hidden group border border-white/20">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={80}
            className="rotate-45"
          />
        </div>
        <div className="relative flex flex-col h-full justify-between">
          <div>
            <BodyText
              variant="b_xs"
              weight="bold"
              className="uppercase tracking-widest opacity-80 mb-1"
            >
              {"Seasonal Offer"}
            </BodyText>
            <div className="flex items-baseline gap-2">
              <Heading
                variant="h1"
                className="text-4xl lg:text-5xl font-extrabold"
              >
                {SALE}
              </Heading>
            </div>
          </div>

          <button className="bg-white text-slate-900 px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-tight self-end hover:bg-slate-100 transition-colors shadow-sm whitespace-nowrap">
            {"Shop Now"}
          </button>
        </div>
      </div>

      {/* Image Grid Items */}
      <div className="order-2 bg-[#EBEEF6] rounded-xl md:col-span-2 md:row-span-6 relative group overflow-hidden">
        <Image
          src="/images/browse/one.jpg"
          alt="one"
          sizes=""
          fill
          className="rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="order-3 bg-[#EBEEF6] rounded-xl md:col-span-1 md:row-span-4 relative group overflow-hidden">
        <Image
          src="/images/browse/two.jpg"
          alt="two"
          fill
          className="rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="order-4 bg-[#EBEEF6] rounded-xl md:col-span-1 md:row-span-5 relative group overflow-hidden">
        <Image
          src="/images/browse/five.jpg"
          alt="five"
          fill
          className="rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="order-6 bg-[#EBEEF6] rounded-xl md:col-span-1 md:row-span-3 relative group overflow-hidden">
        <Image
          src="/images/browse/three.jpg"
          alt="three"
          fill
          className="rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="order-7 bg-[#EBEEF6] rounded-xl md:col-span-1 md:row-span-3 relative group overflow-hidden">
        <Image
          src="/images/browse/four.jpg"
          alt="four"
          fill
          className="rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default Browse;
