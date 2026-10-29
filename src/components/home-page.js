"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "./icons";
import { aboutImage, certificationImages, deliveryImages, heroImages, processImages } from "@/data/site-images";
import { MediaFrame, SectionIntro } from "./site-ui";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

const whyCards = [
  ["Premium Quality", "Every product undergoes strict quality checks to ensure durability, comfort, and superior finishing."],
  ["Global Export Expertise", "We successfully supply apparel to international clients with reliable logistics and export compliance."],
  ["Custom Manufacturing", "Tailor designs, fabrics, sizing, and branding to meet your exact market requirements."],
  ["Competitive Pricing", "Factory-direct production helps us offer premium apparel at highly competitive global prices."],
];
const processSteps = [
  ["Design & Development", "Our team converts ideas into detailed designs, patterns, and technical specifications."],
  ["Fabric Selection", "We source high-quality fabrics ensuring durability, comfort, and performance standards."],
  ["Cutting & Stitching", "Precision cutting and expert stitching deliver consistent sizing and superior garment construction."],
  ["Quality Control", "Every product undergoes strict inspections at multiple stages for flawless results."],
  ["Finishing & Packaging", "Final detailing, labeling, and packaging ensure export-ready presentation."],
  ["Global Shipping", "Secure packaging and reliable logistics ensure timely worldwide delivery."],
];
const faqs = [
  ["Do you ship internationally?", "Yes, we deliver our products to clients in over 30 countries worldwide."],
  ["Can I customize my order?", "Absolutely! We offer design, size, and branding customization options for all products."],
  ["What is your return policy?", "Returns are accepted within 15 days for defective or incorrect items."],
  ["How long does production take?", "Standard production takes 10–20 business days depending on order size and customization."],
  ["Which payment methods do you accept?", "We accept wire transfers, PayPal, and major international payment options."],
];

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setHeroIndex((current) => (current + 1) % heroImages.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  return <div className="min-h-screen bg-[#2a2a2a] text-white"><SiteHeader /><main>
    <section className="relative overflow-hidden bg-[#121212]"><Image src={heroImages[heroIndex]} alt="" fill unoptimized aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25 blur-2xl" /><div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-[#121212]/50" /><div className="container-shell relative z-10 grid items-center gap-12 py-14 lg:min-h-[640px] lg:grid-cols-[52%_48%] lg:gap-x-16 lg:py-20"><div><span className="eyebrow">Premium Sportswear Manufacturer</span><h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-[0.5px] sm:text-6xl xl:text-7xl">Built To Perform.<br /><span className="text-[#f20000]">Made To Last.</span></h1><p className="mt-6 max-w-[560px] text-[15px] leading-7 text-white/85 sm:text-[16px]">Pada Prime manufactures premium sports, fitness, casual, wrestling wear, and accessories for teams, brands, and distributors worldwide. Factory-direct quality, custom branding, and reliable global delivery.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/shop" className="red-button">Explore Products <Icon name="arrow-right" size={16} /></Link><Link href="/contact-us" className="border border-white/30 px-7 py-3 text-[15px] font-medium transition hover:border-[#f20000] hover:text-[#f20000]">Get A Quote</Link></div><div className="mt-10 grid max-w-[520px] grid-cols-3 gap-4 border-t border-white/[0.18] pt-6"><Stat value="15+" label="Years Experience" /><Stat value="30+" label="Countries Served" /><Stat value="20k+" label="Products Delivered" /></div></div><div className="relative mx-auto w-full max-w-[560px] lg:ml-auto"><div className="relative aspect-square overflow-hidden border border-white/15 bg-[#1b1b1b] shadow-2xl"><Image src={heroImages[heroIndex]} alt="Pada Prime collection" fill unoptimized priority={heroIndex === 0} className="object-cover" sizes="(max-width: 1024px) 90vw, 45vw" /><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" /><span className="absolute left-4 top-4 bg-[#f20000] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">New Collection</span><div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-4"><div className="flex items-center gap-2">{heroImages.map((_, index) => <button key={index} onClick={() => setHeroIndex(index)} aria-label={`Go to slide ${index + 1}`} className={`h-2 rounded-full transition-all ${index === heroIndex ? "w-7 bg-[#f20000]" : "w-2 bg-white/50 hover:bg-white"}`} />)}</div><div className="flex gap-2"><button onClick={() => setHeroIndex((heroIndex - 1 + heroImages.length) % heroImages.length)} aria-label="Previous slide" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f20000] text-white transition hover:scale-105"><Icon name="arrow-left" size={18} /></button><button onClick={() => setHeroIndex((heroIndex + 1) % heroImages.length)} aria-label="Next slide" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f20000] text-white transition hover:scale-105"><Icon name="arrow-right" size={18} /></button></div></div></div></div></div></section>

    <section className="section-space"><div className="container-shell"><div className="grid items-center gap-5 lg:grid-cols-[45%_55%] lg:gap-x-[50px]"><div className="relative mx-auto w-full max-w-[540px]"><MediaFrame src={aboutImage} alt="Pada Prime manufacturing" className="aspect-square w-full" sizes="(max-width: 1024px) 90vw, 45vw" /><div className="absolute -left-2.5 -top-2.5 flex w-[200px] max-w-[45%] flex-col items-center justify-center bg-[#f20000] px-6 py-3 text-center text-white"><strong className="font-display text-[65px] font-semibold leading-none">15+</strong><span className="mt-2 text-[16px] font-medium">Years Experince</span></div></div><div className="flex flex-col items-start gap-5"><span className="eyebrow">Who we are</span><h2 className="font-display text-[45px] font-semibold leading-[1.2] tracking-[0.5px]">About Pada Prime</h2><p className="max-w-[600px] text-[15px] leading-[1.6] text-white">Pada Prime manufactures and exports high-quality sports, fitness, casual, and fashion apparel, trusted by global brands and teams.</p><Link href="/about-us" className="red-button">Read More <Icon name="arrow-up-right" size={18} /></Link><div className="relative z-10 mt-[-5px] grid w-full grid-cols-3 bg-[#f20000] px-3 py-4 text-white sm:px-6 sm:py-5 lg:-ml-[120px] lg:w-[calc(100%_-_20px)]"><Stat value="20k+" label="Products Sold" /><Stat value="50+" label="Employees" /><Stat value="4.8" label="Satisfaction" /></div></div></div></div></section>

    <section className="dotted-section quality-dotted-section section-space"><div className="container-shell"><div className="grid items-center gap-10 lg:grid-cols-[45%_55%] lg:gap-x-[100px]"><div><span className="eyebrow">Quality Without Compromise</span><h2 className="mt-2.5 font-display text-[45px] font-semibold leading-[1.2] tracking-[0.5px]">Why Choose Pada Prime</h2><div className="mx-auto mt-4 h-[5px] w-[70px] bg-[#f20000] lg:mx-0" /></div><div><p className="max-w-[600px] text-[15px] leading-[1.6] text-white">We deliver premium-quality apparel with reliable production, strict quality control, competitive pricing, and worldwide shipping you can trust.</p><Link href="/about-us" className="red-button mt-5">Read More <Icon name="arrow-up-right" size={18} /></Link></div></div><div className="mt-3 grid gap-5 md:grid-cols-2">{whyCards.map(([title, description]) => <article key={title} className="rounded-[5px] border border-white/[0.21] bg-[#2a2a2a] p-[25px] shadow-[0_0_10px_rgba(255,255,255,0.09)]"><h3 className="font-display text-[35px] font-semibold text-[#f20000]">{title}</h3><p className="-mt-2 text-[16px] leading-6 text-white">{description}</p></article>)}</div></div></section>

    <section className="section-space"><div className="container-shell"><SectionIntro eyebrow="From Concept to Creation" title="Our Manufacturing Process" description="Our streamlined manufacturing process ensures precision, quality control, and timely production from initial design to final packaging." /><div className="mt-2.5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{processSteps.map(([title, description], index) => <article key={title} className="flex flex-col items-center gap-2.5 rounded-[5px] border border-white/[0.21] bg-[#2a2a2a] p-[25px] text-center shadow-[0_0_5px_rgba(255,255,255,0.05)]"><MediaFrame src={processImages[index]} alt="" className="h-[100px] w-[100px] shrink-0" sizes="100px" /><div className="w-full min-w-0 text-center"><h3 className="font-display text-[30px] font-semibold leading-none text-[#f20000]">{title}</h3><p className="mt-2.5 text-[16px] leading-[23px] text-white">{description}</p></div></article>)}</div></div></section>

    <section className="dotted-section faq-dotted-section"><div className="container-shell grid items-center gap-5 lg:grid-cols-[40%_60%] lg:gap-x-[70px]"><div><span className="eyebrow">Your Questions, Answered</span><h2 className="mt-2.5 text-left font-display text-[45px] font-semibold leading-[1.2] tracking-[0.5px]">Frequently Asked Questions</h2><p className="mt-2.5 max-w-[500px] text-[15px] leading-[1.6] text-white">Find answers to common queries about our products, orders, shipping, customization, and global services for a smooth experience.</p><div className="mt-4 h-[5px] w-[70px] bg-[#f20000]" /></div><div className="space-y-3 pr-16">{faqs.map(([question, answer], index) => <div key={question} className="border-y border-white/[0.21]"><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className={`flex w-full items-center justify-between gap-4 px-[15px] py-[17px] text-left text-[17px] font-medium uppercase leading-6 ${openFaq === index ? "bg-[#f20000] text-white" : "text-white"}`} aria-expanded={openFaq === index}><span>{question}</span><Icon name="chevron" size={15} className={openFaq === index ? "rotate-180" : ""} /></button>{openFaq === index && <p className="px-[15px] py-4 text-[14px] leading-6 text-white/85">{answer}</p>}</div>)}</div></div></section>

    <section className="dotted-section quality-dotted-section section-space"><div className="container-shell"><SectionIntro eyebrow="Certified Quality. Global Delivery." title="Certifications & Delivery Partners" description="Our certified manufacturing standards and trusted global delivery partners work together to ensure quality production and reliable worldwide shipping." /><div className="mx-auto mt-10 grid max-w-[1000px] gap-10 md:grid-cols-2"><ImageCarousel items={certificationImages} /><ImageCarousel items={deliveryImages} /></div></div></section>
  </main><SiteFooter /></div>;
}

function Stat({ value, label }) {
  return <div className="text-center"><strong className="block font-display text-[40px] font-semibold leading-none sm:text-[50px]">{value}</strong><span className="mt-1 block text-[12px] sm:mt-2 sm:text-[16px]">{label}</span></div>;
}

function ImageCarousel({ items }) {
  return <div className="logo-scroll flex snap-x gap-5 overflow-x-auto pb-2">{items.map((src, index) => <div key={`${src}-${index}`} className="relative aspect-square min-w-[48%] shrink-0 snap-start border border-dashed border-white/[0.27] md:min-w-[31%] lg:min-w-[23.5%]"><MediaFrame src={src} alt="" className="absolute inset-0 bg-white" fit="contain" sizes="(max-width: 767px) 48vw, 24vw" /></div>)}</div>;
}
