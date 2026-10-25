import Link from "next/link";
import { Icon } from "./icons";
import { MediaFrame } from "./site-ui";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { productImages } from "@/data/product-images";

const stats = [
  ["30+", "Countries served"],
  ["18+", "Years of experience"],
  ["100%", "Quality inspected"],
  ["Low", "Minimum order quantity"],
];

const points = [
  ["Cutting & Stitching", "Modern cutting tables and industrial stitching lines produce consistent, precise garments."],
  ["Printing & Embroidery Unit", "In-house sublimation, screen printing, and embroidery for full branding control."],
  ["Quality Control", "Multi-stage inspection verifies fabric, measurements, stitching, and finishing before packing."],
  ["Production Capacity", "Scalable capacity handles small custom runs and large bulk export orders alike."],
  ["Skilled Workforce", "Experienced craftspeople dedicated to detail, comfort, and durability."],
  ["Packing & Logistics", "Professional packing and coordination for reliable global shipping."],
];

const galleryIds = [1, 21, 27, 78, 103, 115, 130, 147];
const gallery = galleryIds.map((id) => productImages.find((item) => item.id === id)).filter(Boolean);

export default function OurFactoryPage() {
  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">
      <SiteHeader />
      <main>
        <section className="dotted-section section-space">
          <div className="container-shell grid items-center gap-10 lg:grid-cols-[52%_48%] lg:gap-x-16">
            <div>
              <span className="eyebrow">Our Factory</span>
              <h1 className="mt-4 font-display text-[45px] font-semibold leading-[1.15] tracking-[0.5px] sm:text-6xl">Inside Our Production Facility</h1>
              <div className="mt-5 h-[5px] w-[70px] bg-[#f20000]" />
              <p className="mt-6 text-[15px] leading-7 text-white/85">Our factory in Sialkot, Pakistan combines modern machinery with skilled craftsmanship to produce premium sports, fitness, casual, and wrestling apparel and accessories for clients around the world.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/custom-manufacturing" className="red-button">Custom Manufacturing <Icon name="arrow-right" size={16} /></Link>
                <Link href="/contact-us" className="border border-white/30 px-7 py-3 text-[15px] font-medium transition hover:border-[#f20000] hover:text-[#f20000]">Contact The Factory</Link>
              </div>
            </div>
            <MediaFrame src={gallery[0]?.src || productImages[0].src} alt="Pada Prime production facility" className="aspect-square w-full" sizes="(max-width: 1024px) 90vw, 48vw" priority />
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map(([value, label]) => <div key={label} className="border border-white/[0.21] p-5 text-center"><span className="block font-display text-4xl font-semibold text-[#f20000]">{value}</span><span className="mt-2 block text-[12px] uppercase tracking-[0.1em] text-white/80">{label}</span></div>)}
          </div>
        </section>

        <section className="dotted-section section-space">
          <div className="container-shell">
            <div className="mx-auto max-w-[800px] text-center">
              <span className="eyebrow">Inside The Facility</span>
              <h2 className="section-title">Where Every Order Comes Together</h2>
              <p className="section-description">From fabric inspection and cutting to stitching, branding, quality control, and export packing.</p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {gallery.map((item, index) => <MediaFrame key={item.id} src={item.src} alt={`Pada Prime factory production ${index + 1}`} className="aspect-square w-full" sizes="(max-width: 768px) 45vw, 25vw" />)}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell">
            <div className="mx-auto max-w-[800px] text-center">
              <span className="eyebrow">Our Capabilities</span>
              <h2 className="section-title">Built For Quality And Scale</h2>
            </div>
            <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {points.map(([title, text]) => <article key={title} className="border-l-[5px] border-[#f20000] pl-5"><h3 className="font-display text-2xl font-semibold text-white">{title}</h3><p className="mt-2 text-[15px] leading-7 text-white/85">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="dotted-section section-space">
          <div className="container-shell text-center">
            <span className="eyebrow">Visit Or Partner With Us</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">Let&apos;s Manufacture Something Great</h2>
            <p className="mx-auto mt-4 max-w-[720px] text-[15px] leading-7 text-white/85">Share your product requirements and our team will guide you from sampling through production and worldwide delivery.</p>
            <Link href="/contact-us" className="red-button mt-7">Request A Quote <Icon name="arrow-right" size={16} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
