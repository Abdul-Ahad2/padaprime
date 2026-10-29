import Link from "next/link";
import { Icon } from "./icons";
import { MediaFrame } from "./site-ui";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import { productImages } from "@/data/product-images";

const stats = [
  ["15+", "Years of experience"],
  ["30+", "Countries served"],
  ["20k+", "Products delivered"],
  ["100%", "Quality inspected"],
];

const productRange = [
  "Soccer Balls",
  "American Footballs",
  "Baseballs",
  "Basketballs",
  "Soccer Jerseys",
  "American Football Uniforms",
  "Baseball Apparel",
  "Basketball Uniforms",
  "Tracksuits",
  "Hoodies",
  "Coach Jackets",
  "Varsity Jackets",
  "Custom Teamwear",
];

const values = [
  ["Quality", "Products made to meet our clients' specific requirements, with attention to detail at every stage."],
  ["Fair Pricing", "Competitive pricing with both premium and standard quality options to suit different needs and budgets."],
  ["Full Customization", "Custom designs, logos, labels, printing, and packaging to help teams and businesses bring their ideas to life."],
  ["Reliable Communication", "Clear, responsive communication so you always know where your order stands."],
  ["Dependable Delivery", "Reliable production and delivery you can plan your season and business around."],
  ["Long-Term Partnerships", "We aim to build lasting relationships with clients worldwide, supporting your business as it grows."],
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">
      <SiteHeader />
      <main>
        <section className="dotted-section section-space">
          <div className="container-shell grid items-center gap-10 lg:grid-cols-[48%_52%] lg:gap-x-16">
            <div>
              <span className="eyebrow">About Us</span>
              <h1 className="mt-4 font-display text-[45px] font-semibold leading-[1.15] tracking-[0.5px] sm:text-6xl">PADA AMERICAN &amp; PRIME</h1>
              <div className="mt-5 h-[5px] w-[70px] bg-[#f20000]" />
              <p className="mt-6 font-display text-2xl font-semibold leading-snug text-[#f20000]">Your Trusted Partner for Custom Sportswear &amp; Sporting Goods</p>
              <div className="mt-4 space-y-5 text-[15px] leading-7 text-white">
                <p>PADA AMERICAN &amp; PRIME is a sportswear and sporting goods manufacturing business based in Sialkot, Pakistan, specializing in customized products for American sports clubs, teams, schools, retailers, distributors, and brands.</p>
                <p>Our focus is on delivering products that meet our clients&apos; specific requirements. From custom designs and logos to labels, printing, and packaging, we provide flexible solutions to help teams and businesses bring their ideas to life.</p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/shop" className="red-button">Explore Products <Icon name="arrow-right" size={16} /></Link>
                <Link href="/contact-us" className="border border-white/30 px-7 py-3 text-[15px] font-medium transition hover:border-[#f20000] hover:text-[#f20000]">Get In Touch</Link>
              </div>
            </div>
            <div className="relative">
              <MediaFrame src={productImages[35].src} alt="Pada Prime apparel" className="aspect-square w-full" sizes="(max-width: 1024px) 90vw, 48vw" priority />
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
          <div className="container-shell mt-14">
            <div className="mx-auto max-w-[800px] text-center">
              <span className="eyebrow">What We Make</span>
              <h2 className="section-title">Sportswear &amp; Sporting Goods</h2>
              <p className="section-description">We offer a wide range of products for teams, schools, retailers, distributors, and brands, all available with your custom designs and branding.</p>
            </div>
            <ul className="mx-auto mt-8 flex max-w-[960px] flex-wrap justify-center gap-3">
              {productRange.map((item) => <li key={item} className="border border-white/[0.21] px-4 py-2 text-[14px] text-white/90">{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="dotted-section section-space">
          <div className="container-shell grid gap-6 lg:grid-cols-2">
            <article className="border border-white/[0.21] p-7">
              <h2 className="font-display text-3xl font-semibold text-[#f20000]">Our Mission</h2>
              <p className="mt-3 text-[15px] leading-7 text-white/85">To provide quality sportswear and sporting goods with customization, competitive pricing, and reliable service while building lasting relationships with clients worldwide.</p>
            </article>
            <article className="border border-white/[0.21] p-7">
              <h2 className="font-display text-3xl font-semibold text-[#f20000]">Our Vision</h2>
              <p className="mt-3 text-[15px] leading-7 text-white/85">To become a trusted international partner for sportswear and sporting goods, helping teams, businesses, and brands access products that match their identity and performance needs.</p>
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
            <p className="mx-auto mt-8 max-w-[800px] text-center text-[15px] leading-7 text-white/85">At PADA AMERICAN &amp; PRIME, we believe that a successful business relationship is built on quality, fair pricing, reliable communication, and dependable delivery.</p>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell flex flex-col items-center gap-5 text-center">
            <span className="eyebrow">Your Vision, Our Commitment</span>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">Let&apos;s Build Your Next Collection</h2>
            <p className="max-w-[720px] text-[15px] leading-7 text-white/85">Whether you are a sports team looking for customized uniforms, a retailer expanding your product range, or a brand developing its own collection, we are ready to discuss your requirements and offer suitable solutions.</p>
            <p className="max-w-[720px] text-[15px] leading-7 text-white/85">At PADA AMERICAN &amp; PRIME, we look forward to building long-term partnerships and supporting your business with products tailored to your needs.</p>
            <Link href="/contact-us" className="red-button">Request A Quote <Icon name="arrow-right" size={16} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
