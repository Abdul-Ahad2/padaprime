"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Icon } from "./icons";
import { MediaFrame } from "./site-ui";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { categoryShowcase, productCategories, productImages } from "@/data/product-images";

const filters = ["All Products", ...productCategories];

export default function CatalogPage() {
  const [active, setActive] = useState("All Products");

  const visible = useMemo(() => active === "All Products" ? productImages : productImages.filter((item) => item.category === active), [active]);

  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">
      <SiteHeader />
      <main>
        <section className="dotted-section px-5 py-20 text-center sm:px-8 sm:py-24">
          <div className="container-shell">
            <span className="eyebrow">Catalog</span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-none tracking-[0.02em] sm:text-6xl">Product Catalog</h1>
            <p className="mx-auto mt-5 max-w-[800px] text-[15px] leading-7 text-white/85">Browse our full range of custom sportswear, fitness wear, casual wear, wrestling wear, fashion jackets, gloves, and accessories.</p>
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
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {productCategories.map((name) => <Link key={name} href="/shop" className="group relative aspect-[4/3] overflow-hidden border border-white/[0.18]"><MediaFrame src={categoryShowcase[name]} alt={name} className="absolute inset-0 h-full w-full transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 90vw, 25vw" /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" /><span className="absolute inset-x-0 bottom-0 p-4 font-display text-2xl font-semibold leading-none">{name}</span></Link>)}
            </div>
          </div>
        </section>

        <section className="dotted-section section-space">
          <div className="container-shell">
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <span className="eyebrow">Lookbook</span>
                <h2 className="mt-3 font-display text-4xl font-semibold leading-none sm:text-5xl">Catalog Images</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => <button key={filter} onClick={() => setActive(filter)} className={`border px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition ${active === filter ? "border-[#f20000] bg-[#f20000] text-white" : "border-white/25 text-white hover:border-[#f20000] hover:text-[#f20000]"}`}>{filter}</button>)}
              </div>
            </div>
            <p className="mt-3 text-[13px] uppercase tracking-[0.12em] text-white/60">{visible.length} products</p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {visible.map((product) => <article key={product.id} className="group min-w-0">
                <div className="relative overflow-hidden border border-white/[0.12]">
                  <MediaFrame src={product.src} alt={product.name} label={product.name} className="aspect-square w-full transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 20vw" />
                  <Link href="/contact-us" className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-center gap-2 bg-black/65 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"><Icon name="arrow-right" size={14} />Request Quote</Link>
                </div>
                <h3 className="mt-3 text-center text-[13px] leading-5 text-white transition group-hover:text-[#f20000]">{product.name}</h3>
                <p className="mt-0.5 text-center text-[10px] uppercase tracking-[0.1em] text-white/50">{product.category}</p>
              </article>)}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
