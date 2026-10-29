"use client";

import { useMemo, useState } from "react";
import { Icon } from "./icons";
import { productCategories, productImages } from "@/data/product-images";
import { EmptyState, MediaFrame, ProductCard } from "./site-ui";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

const categories = ["All Categories", ...productCategories];
const shopProducts = productImages.map(({ name, category, src }) => [name, category, src, src]);

export default function ShopPage({ initialQuery = "", initialCategory = "All Categories" }) {
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState(initialQuery);
  const [sort, setSort] = useState("popular");
  const [view, setView] = useState("grid");
  const [quickView, setQuickView] = useState(null);

  const products = useMemo(() => {
    const filtered = shopProducts.filter(([name, productCategory]) => {
      const categoryMatch = category === "All Categories" || productCategory === category;
      const term = query.trim().toLowerCase();
      const queryMatch = name.toLowerCase().includes(term) || productCategory.toLowerCase().includes(term);
      return categoryMatch && queryMatch;
    });
    if (sort === "name") return [...filtered].sort(([first], [second]) => first.localeCompare(second));
    if (sort === "latest") return [...filtered].reverse();
    return filtered;
  }, [category, query, sort]);

  return <div className="min-h-screen bg-[#2a2a2a] text-white"><SiteHeader /><main className="pb-20"><div className="mx-auto w-[90%] max-w-[1200px] pt-10"><div className="ocean-toolbar"><div className="flex items-center gap-1"><button onClick={() => setView("grid")} aria-label="Grid view" className={`p-2 ${view === "grid" ? "bg-[#f20000] text-white" : "text-white"}`}><Icon name="grid" size={18} /></button><button onClick={() => setView("list")} aria-label="List view" className={`p-2 ${view === "list" ? "bg-[#f20000] text-white" : "text-white"}`}><Icon name="list" size={18} /></button></div><div className="flex flex-1 flex-wrap items-center justify-end gap-4"><span className="text-[12px] uppercase text-white/70">View: 20 / 40 / 60</span><select value={sort} onChange={(event) => setSort(event.target.value)} className="min-h-[34px] min-w-[166px] border border-white/[0.21] bg-[#2a2a2a] px-2 text-[13px] text-white outline-none"><option value="popular">Default sorting</option><option value="latest">Sort by latest</option><option value="name">Sort by name</option></select></div></div><div className="mt-5 grid gap-8 lg:grid-cols-[28%_72%]"><aside className="pr-0 lg:pr-[30px]"><div className="mb-10"><label className="flex h-11 items-center gap-2 border border-white/[0.21] bg-[#434343] px-3"><Icon name="search" size={16} className="text-white/70" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/60" /></label></div><h2 className="mb-5 border-l-[3px] border-[#f20000] pl-[15px] font-display text-[18px] font-medium uppercase leading-none">Product categories</h2><div className="space-y-1">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`block w-full border-b border-white/[0.12] px-1 py-2 text-left text-[15px] ${category === item ? "text-[#f20000]" : "text-white/80 hover:text-[#f20000]"}`}>{item}</button>)}</div></aside><section className="lg:border-r lg:border-white/[0.21] lg:pr-[30px]">{products.length === 0 ? <EmptyState title="No products found" description="Try a different search or browse another category." /> : view === "grid" ? <div className="-mx-2.5 grid grid-cols-2 gap-x-0 gap-y-8 md:grid-cols-3 lg:grid-cols-4">{products.map(([name, , src, hoverSrc], index) => <div key={`${name}-${index}`} className="px-2.5 pb-5"><ProductCard name={name} src={src} hoverSrc={hoverSrc} onQuickView={() => setQuickView({ name, src, hoverSrc })} /></div>)}</div> : <div className="px-2">{products.map(([name, , src, hoverSrc], index) => <ProductCard key={`${name}-${index}`} name={name} src={src} hoverSrc={hoverSrc} onQuickView={() => setQuickView({ name, src, hoverSrc })} list />)}</div>}</section></div></div></main><SiteFooter />{quickView && <ShopQuickView product={quickView} onClose={() => setQuickView(null)} />}</div>;
}

function ShopQuickView({ product, onClose }) {
  return <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 px-5" onClick={onClose}><div className="relative w-full max-w-[875px] bg-[#2a2a2a] p-5 sm:p-8" onClick={(event) => event.stopPropagation()}><button onClick={onClose} aria-label="Close quick view" className="absolute right-4 top-4 text-white"><Icon name="x" size={25} /></button><div className="grid gap-7 sm:grid-cols-2"><MediaFrame src={product.src} alt={product.name} className="aspect-square w-full" sizes="(max-width: 640px) 90vw, 40vw" /><div className="flex flex-col justify-center"><span className="eyebrow">Made to order</span><h2 className="mt-5 font-display text-4xl leading-none text-white">{product.name}</h2><p className="mt-4 text-[15px] leading-7 text-white/80">Ask about fabrics, sizes, branding, and wholesale pricing for this product.</p><a href="/contact-us" onClick={onClose} className="red-button mt-7 w-fit">Request Quote <Icon name="arrow-right" size={16} /></a></div></div></div></div>;
}
