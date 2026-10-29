"use client";

import Link from "next/link";
import { Icon } from "./icons";
import { MediaFrame } from "./site-ui";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { categoryShowcase, productCategories, productImages } from "@/data/product-images";

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">
      <SiteHeader />
      <main>
        <section className="dotted-section px-5 py-20 text-center sm:px-8 sm:py-24">
          <div className="container-shell">
            <span className="eyebrow">Catalog</span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-none tracking-[0.02em] sm:text-6xl">Product Catalog</h1>
            <p className="mx-auto mt-5 max-w-[800px] text-[15px] leading-7 text-white/85">Browse our full range of soccer kits, winter wool uppers, bubble jackets, shorts, and tracksuits.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/contact-us" className="red-button">Request Full Catalog <Icon name="arrow-right" size={16} /></Link>
              <Link href="/shop" className="border border-white/30 px-7 py-3 text-[15px] font-medium transition hover:border-[#f20000] hover:text-[#f20000]">Shop Products</Link>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell">
            <div className="mx-auto max-w-[800px] text-center">
              <span className="eyebrow">Categories</span>
              <h2 className="section-title">Explore Our Range</h2>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {productCategories.map((name) => <Link key={name} href={`/shop?category=${encodeURIComponent(name)}`} className="group flex w-[calc(50%-12px)] flex-col sm:w-[calc(33.333%-16px)] lg:w-[calc(20%-19.2px)]"><div className="relative aspect-square overflow-hidden border border-white/[0.18] bg-white transition duration-300 group-hover:border-[#f20000]"><MediaFrame src={categoryShowcase[name]} alt={name} fit="contain" className="absolute inset-0 h-full w-full p-3 transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" /></div><span className="mt-4 text-center font-display text-[22px] font-semibold leading-tight text-white transition group-hover:text-[#f20000]">{name}</span><span className="mt-1 text-center text-[12px] uppercase tracking-[0.14em] text-white/55">{productImages.filter((item) => item.category === name).length} Products</span></Link>)}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
