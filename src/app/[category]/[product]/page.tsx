import ProductBreadcrumb from "@/components/product/product-breadcrumb";
import ProductDetail from "@/components/product/product-detail";
import FrequentlyBoughtTogether from "@/components/product/frequently-bought-together";
import ProductTabs from "@/components/product/product-tabs";
import RelatedProducts from "@/components/product/related-products";
import RecentlyViewed from "@/components/category/recently-viewed";
import { ITEMS } from "@/data/items";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) => {
  const { product } = await params;

  const productLabel = product
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  // Use the first matching item or fallback to the first item
  const item =
    ITEMS.find(
      (i) =>
        i.name.toLowerCase().replace(/\s+/g, "-").includes(product) ||
        product.includes(i.name.toLowerCase().replace(/\s+/g, "-").slice(0, 10))
    ) || ITEMS[0];

  return (
    <div>
      <div className="my-4">
        <ProductBreadcrumb productName={productLabel} />
      </div>
      <div className="my-4">
        <ProductDetail item={item} />
      </div>
      <div className="my-4">
        <FrequentlyBoughtTogether />
      </div>
      <div className="my-4">
        <ProductTabs />
      </div>
      <div className="my-4">
        <RelatedProducts />
      </div>
      <div className="my-4">
        <RecentlyViewed />
      </div>
    </div>
  );
};

export default ProductPage;
