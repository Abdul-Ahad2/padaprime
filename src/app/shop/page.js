import ShopPage from "@/components/shop-page";
import { productCategories } from "@/data/product-images";

export default async function Shop({ searchParams }) {
  const { q = "", category = "" } = await searchParams;
  const initialCategory = productCategories.includes(category) ? category : "All Categories";
  return <ShopPage key={`${q}|${initialCategory}`} initialQuery={q} initialCategory={initialCategory} />;
}
