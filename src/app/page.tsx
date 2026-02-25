import Brands from "@/components/home/brands";
import Browse from "@/components/home/browse";
import CategoryGrid from "@/components/home/category-grid";
import CuratedItems from "@/components/home/curated-items";
import DealsOfTheDay from "@/components/home/deals-of-the-day";
import ItemsCarousel from "@/components/home/items-carousel";
import ItemsTabs from "@/components/home/items-tabs";
import RecentlyViewed from "@/components/home/recently-viewed";
import Search from "@/components/home/search";
import TopCategories from "@/components/home/top-categories";
import TopItems from "@/components/home/top-items";

const Homepage = () => {
  return (
    <div>
      <div className="my-4">
        <Browse />
      </div>
      <div className="capsule my-4 grid gap-4 grid-cols-2 px-0">
        <Brands />
        <TopCategories />
      </div>
      <div className="my-4">
        <DealsOfTheDay />
      </div>
      <div className="my-4">
        <ItemsTabs />
      </div>
      <div className="my-4">
        <CuratedItems />
      </div>
      <div className="my-4">
        <TopItems />
      </div>
      <div className="my-4">
        <CategoryGrid />
      </div>
      <div className="my-4">
        <RecentlyViewed />
      </div>
    </div>
  );
};

export default Homepage;
