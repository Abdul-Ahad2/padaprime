import Link from "next/link";
import { Icon } from "./icons";
import { MediaFrame } from "./site-ui";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { productImages } from "@/data/product-images";

const capabilities = [
  ["Fabric Selection", "Choose from performance knits, cotton blends, spandex, fleece, and technical fabrics suited to your sport."],
  ["Design & Development", "Our team turns sketches, references, and tech packs into production-ready designs."],
  ["Printing & Embroidery", "Sublimation, screen printing, heat transfer, and embroidery for durable, vibrant branding."],
  ["Private Labeling", "Custom labels, hang tags, packaging, and size ranges for your own brand."],
  ["Low Minimums", "Flexible order quantities for startups, teams, distributors, and established brands."],
  ["Global Compliance", "Production aligned with international quality and export standards."],
];

const process = [
  ["01", "Design & Development", "Sketches, references, and tech packs are converted into detailed production specifications."],
  ["02", "Fabric Sourcing", "Performance fabrics are selected and tested for durability, comfort, and colour fastness."],
  ["03", "Cutting & Stitching", "Precision cutting and skilled stitching deliver consistent sizing and clean construction."],
  ["04", "Branding", "Sublimation, screen printing, embroidery, and private-label finishing bring your brand to life."],
  ["05", "Quality Control", "Every garment is inspected at multiple stages before it reaches final packing."],
  ["06", "Global Shipping", "Export-ready packaging and reliable logistics deliver your order on time, worldwide."],
];

const galleryIds = [65];
const gallery = galleryIds.map((id) => productImages.find((item) => item.id === id)).filter(Boolean);

export default function CustomManufacturingPage() {
  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">
      <SiteHeader />
      <main>
        <section className="dotted-section section-space">
          <div className="container-shell grid items-center gap-10 lg:grid-cols-[50%_50%] lg:gap-x-16">
            <div>
              <span className="eyebrow">Custom Manufacturing</span>
              <h1 className="mt-4 font-display text-[45px] font-semibold leading-[1.15] tracking-[0.5px] sm:text-6xl">OEM &amp; ODM Apparel Solutions</h1>
              <div className="mt-5 h-[5px] w-[70px] bg-[#f20000]" />
              <p className="mt-6 text-[15px] leading-7 text-white/85">Pada Prime offers full-service custom manufacturing for brands, teams, and distributors worldwide. From concept and sampling to bulk production and packaging, we build apparel exactly to your specifications.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact-us" className="red-button">Request Custom Quote <Icon name="arrow-right" size={16} /></Link>
                <Link href="/our-factory" className="border border-white/30 px-7 py-3 text-[15px] font-medium transition hover:border-[#f20000] hover:text-[#f20000]">Our Factory</Link>
              </div>
            </div>
            <MediaFrame src={gallery[0]?.src || productImages[0].src} alt="Custom manufacturing at Pada Prime" className="aspect-square w-full" sizes="(max-width: 1024px) 90vw, 50vw" priority />
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell">
            <div className="mx-auto max-w-[800px] text-center">
              <span className="eyebrow">Capabilities</span>
              <h2 className="section-title">What We Can Build</h2>
              <p className="section-description">A complete custom manufacturing service, from the first sample to the final export carton.</p>
            </div>
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map(([title, text]) => <article key={title} className="border border-white/[0.21] p-6"><h3 className="font-display text-2xl font-semibold text-[#f20000]">{title}</h3><p className="mt-2 text-[15px] leading-7 text-white/85">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="dotted-section section-space">
          <div className="container-shell">
            <div className="mx-auto max-w-[800px] text-center">
              <span className="eyebrow">Our Process</span>
              <h2 className="section-title">From Concept To Delivery</h2>
              <p className="section-description">Every order follows a clear production path with quality checks at each stage.</p>
            </div>
            <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {process.map(([number, title, text]) => <article key={number} className="border-l-[5px] border-[#f20000] pl-5"><span className="font-display text-3xl font-semibold text-[#f20000]">{number}</span><h3 className="mt-1 font-display text-2xl font-semibold leading-none">{title}</h3><p className="mt-2 text-[15px] leading-7 text-white/85">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell text-center">
            <span className="eyebrow">Start A Project</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">Your Design. Our Factory. Worldwide Delivery.</h2>
            <p className="mx-auto mt-4 max-w-[720px] text-[15px] leading-7 text-white/85">Send us your artwork, product type, quantity, and destination. Our team will prepare a clear factory-direct quotation.</p>
            <Link href="/contact-us" className="red-button mt-7">Request Custom Quote <Icon name="arrow-right" size={16} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
