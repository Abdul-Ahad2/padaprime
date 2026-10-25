import Link from "next/link";
import { Icon } from "./icons";
import { MediaFrame } from "./site-ui";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { categoryShowcase, productCategories, productImages } from "@/data/product-images";

const stats = [
  ["15+", "Years of experience"],
  ["30+", "Countries served"],
  ["20k+", "Products delivered"],
  ["100%", "Quality inspected"],
];

const values = [
  ["Premium Quality", "Every product undergoes strict quality checks for durability, comfort, and performance."],
  ["Global Reach", "We successfully export to over 30 countries with reliable logistics and compliance."],
  ["Customization Options", "Tailor-made solutions for designs, sizes, fabrics, and branding."],
  ["Sustainable Practices", "We prioritize ethical sourcing and eco-friendly production methods."],
  ["Skilled Workforce", "Experienced craftspeople dedicated to detail, comfort, and durability."],
  ["On-Time Delivery", "Secure packaging and reliable logistics ensure timely worldwide delivery."],
];

const galleryImages = [4, 12, 28, 47, 79, 104, 116, 131, 148, 152].map((id) => productImages.find((item) => item.id === id)?.src).filter(Boolean);

export default function AboutPage() {
  const categoryCards = [
    ...productCategories.map((name) => [name, categoryShowcase[name]]),
    ["Custom Manufacturing", productImages[20]?.src || productImages[0].src],
  ];

  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">
      <SiteHeader />
      <main>
        <section className="dotted-section section-space">
          <div className="container-shell grid items-center gap-10 lg:grid-cols-[48%_52%] lg:gap-x-16">
            <div>
              <span className="eyebrow">About Us</span>
              <h1 className="mt-4 font-display text-[45px] font-semibold leading-[1.15] tracking-[0.5px] sm:text-6xl">About Pada Prime</h1>
              <div className="mt-5 h-[5px] w-[70px] bg-[#f20000]" />
              <div className="mt-6 space-y-5 text-[15px] leading-7 text-white">
                <p>Pada Prime is a leading exporter of premium sports, fitness, casual, wrestling wear, fashion jackets, and accessories worldwide. With decades of experience and a commitment to quality, we combine innovation, craftsmanship, and global standards to serve clients across multiple continents.</p>
                <p>From our factory in Sialkot, Pakistan, we manufacture performance apparel for teams, brands, distributors, and retailers in more than 30 countries.</p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/shop" className="red-button">Explore Products <Icon name="arrow-right" size={16} /></Link>
                <Link href="/contact-us" className="border border-white/30 px-7 py-3 text-[15px] font-medium transition hover:border-[#f20000] hover:text-[#f20000]">Get In Touch</Link>
              </div>
            </div>
            <div className="relative">
              <MediaFrame src={productImages[1].src} alt="Pada Prime apparel" className="aspect-square w-full" sizes="(max-width: 1024px) 90vw, 48vw" priority />
              <div className="absolute -bottom-5 -left-5 hidden bg-[#f20000] px-6 py-5 sm:block">
                <strong className="block font-display text-5xl font-semibold leading-none">15+</strong>
                <span className="mt-1 block text-sm">Years of Craftsmanship</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([value, label]) => <div key={label} className="border border-white/[0.21] bg-[#2a2a2a] p-6 text-center shadow-[0_0_10px_rgba(255,255,255,0.05)]"><strong className="block font-display text-5xl font-semibold leading-none text-[#f20000]">{value}</strong><span className="mt-2 block text-[13px] uppercase tracking-[0.1em] text-white/75">{label}</span></div>)}
          </div>
        </section>

        <section className="dotted-section section-space">
          <div className="container-shell grid gap-6 lg:grid-cols-2">
            <article className="border border-white/[0.21] p-7">
              <h2 className="font-display text-3xl font-semibold text-[#f20000]">Our Mission</h2>
              <p className="mt-3 text-[15px] leading-7 text-white/85">To provide high-quality, performance-driven apparel that empowers athletes, fitness enthusiasts, and fashion-conscious individuals globally.</p>
            </article>
            <article className="border border-white/[0.21] p-7">
              <h2 className="font-display text-3xl font-semibold text-[#f20000]">Our Vision</h2>
              <p className="mt-3 text-[15px] leading-7 text-white/85">To become the most trusted and innovative global sportswear brand, delivering exceptional products and services to every client.</p>
            </article>
          </div>
          <div className="container-shell mt-10">
            <div className="text-center">
              <span className="eyebrow">What Sets Us Apart</span>
              <h2 className="section-title">Built On Quality And Trust</h2>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {values.map(([title, text]) => <article key={title} className="border border-white/[0.21] p-6"><h3 className="font-display text-2xl font-semibold text-[#f20000]">{title}</h3><p className="mt-2 text-[15px] leading-7 text-white/85">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell">
            <div className="mx-auto max-w-[800px] text-center">
              <span className="eyebrow">What We Make</span>
              <h2 className="section-title">Our Product Categories</h2>
              <p className="section-description">A complete range of custom apparel and accessories, manufactured for teams, brands, and distributors around the world.</p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {categoryCards.map(([name, image]) => <Link key={name} href={name === "Custom Manufacturing" ? "/custom-manufacturing" : "/shop"} className="group relative aspect-[4/3] overflow-hidden border border-white/[0.18]"><MediaFrame src={image} alt={name} className="absolute inset-0 h-full w-full transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, 25vw" /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" /><div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4"><span className="font-display text-2xl font-semibold leading-none text-white sm:text-3xl">{name}</span><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f20000] text-white"><Icon name="arrow-up-right" size={18} /></span></div></Link>)}
            </div>
          </div>
        </section>

        <section className="dotted-section section-space">
          <div className="container-shell">
            <div className="mx-auto max-w-[800px] text-center">
              <span className="eyebrow">Inside Pada Prime</span>
              <h2 className="section-title">Crafted With Precision</h2>
              <p className="section-description">A closer look at the products, details, and finishing that define Pada Prime.</p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
              {galleryImages.map((src, index) => <MediaFrame key={src} src={src} alt={`Pada Prime product ${index + 1}`} className="aspect-square w-full" sizes="(max-width: 768px) 45vw, 20vw" />)}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell flex flex-col items-center gap-5 text-center">
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">Let&apos;s Build Your Next Collection</h2>
            <p className="max-w-[720px] text-[15px] leading-7 text-white/85">Share your product requirements and our team will guide you from design and sampling through production and global delivery.</p>
            <Link href="/contact-us" className="red-button">Request A Quote <Icon name="arrow-right" size={16} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
