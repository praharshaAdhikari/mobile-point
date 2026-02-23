import Breadcrumb from "@/components/category/breadcrumb";
import CategoryBanner from "@/components/category/category-banner";
import PopularCategories from "@/components/category/popular-categories";
import BestSellers from "@/components/category/best-sellers";
import ProductListing from "@/components/category/product-listing";
import RecentlyViewed from "@/components/category/recently-viewed";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;
  const categoryLabel = category
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div>
      <div className="my-4">
        <Breadcrumb />
      </div>
      <div className="my-4">
        <CategoryBanner title={"Top " + categoryLabel} />
      </div>
      <div className="my-4">
        <PopularCategories />
      </div>
      <div className="my-4">
        <BestSellers />
      </div>
      <div className="my-4">
        <ProductListing />
      </div>
      <div className="my-4">
        <RecentlyViewed />
      </div>
    </div>
  );
};
export default CategoryPage;
