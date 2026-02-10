import CategoryFeatured from "@/components/category/category-featured";
import CategoryProducts from "@/components/category/category-products";
import CategorySidebar from "@/components/category/category-sidebar";
import PopularCategories from "@/components/category/popular-categories";
import { ITEMS } from "@/data/items";
import { CATEGORIES } from "@/data/categories";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    category: category.link.replace("/", ""),
  }));
}

export function generateMetadata({ params }: CategoryPageProps) {
  const resolvedParams = params instanceof Promise ? params : Promise.resolve(params);
  const categoryName = resolvedParams.then((p) => {
    const category = CATEGORIES.find((c) =>
      c.link === "/" + p.category
    );
    return category?.label || "Category";
  });

  return {
    title: `${categoryName} | Mobile Point`,
  };
}

async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const categoryLink = "/" + resolvedParams.category;
  const categoryName =
    CATEGORIES.find((c) => c.link === categoryLink)?.label || "Products";

  // Use all items for the category (in a real app, you'd filter by category)
  const categoryItems = ITEMS;

  // Get featured item (first best seller or first item)
  const featuredItem = categoryItems.find(
    (item) => item.tag.includes("Best Seller")
  ) || categoryItems[0];

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-600 mb-4">
        <a href="/" className="hover:text-[#C40EDC] transition-colors">
          Home
        </a>
        <span className="mx-2">/</span>
        <span className="text-slate-900 font-medium">{categoryName}</span>
      </div>

      {/* Featured Section */}
      <CategoryFeatured item={featuredItem} categoryName={categoryName} />

      {/* Popular Categories Section */}
      <PopularCategories />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <CategorySidebar activeCategoryLink={categoryLink} />
        </div>

        {/* Products */}
        <div className="lg:col-span-3">
          <CategoryProducts items={categoryItems} />
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
