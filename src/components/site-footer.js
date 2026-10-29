import Image from "next/image";
import Link from "next/link";
import { Icon } from "./icons";
import { FaCcMastercard, FaCcVisa, FaInstagram, FaPaypal } from "react-icons/fa";
import { productCategories } from "@/data/product-images";
import { logo } from "@/data/site-images";

const quickLinks = [["Home", "/"], ["About Us", "/about-us"], ["How To Order", "/how-to-order"], ["FAQ's", "/faqs"], ["Contact Us", "/contact-us"]];
const categories = [...productCategories.map((category) => [category, `/shop?category=${encodeURIComponent(category)}`]), ["All Categories", "/shop"]];

export default function SiteFooter() {
  return <footer className="border-t border-white/[0.21] bg-[#2a2a2a] px-5 py-[5%] text-white sm:px-8 lg:px-[5%]"><div className="mx-auto max-w-[1280px]"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-[35fr_25fr_20fr_20fr] lg:gap-[50px]"><div className="border-b border-white/[0.21] pb-8 md:border-b-0 md:border-r md:border-white/[0.21] md:pb-0 md:pr-10"><Link href="/" aria-label="Pada Prime home"><Image src={logo} alt="Pada Prime" width={960} height={528} className="h-[90px] w-auto" /></Link><p className="mt-7 max-w-sm text-[16px] leading-7 text-white">Pada Prime is a global exporter of premium sports, fitness, casual, wrestling wear, fashion jackets, and accessories worldwide.</p><div className="mt-6 flex gap-2.5"><a href="https://www.instagram.com/padaamericanx" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center bg-[#3c3c3c] text-white hover:bg-[#f20000]"><FaInstagram size={22} /></a></div></div><FooterColumn title="Get In Touch" className="border-b border-white/[0.21] pb-8 md:border-b-0 md:border-r md:border-white/[0.21] md:pr-10"><p className="flex gap-2"><Icon name="pin" size={14} className="mt-1 shrink-0 text-[#f20000]" />Talwara Mughlan Ban Phatak 51310</p><a href="https://wa.me/923356020595" className="flex gap-2"><Icon name="phone" size={14} className="mt-1 shrink-0 text-[#f20000]" />+92 335 6020595</a></FooterColumn><FooterColumn title="Quick Links" className="border-b border-white/[0.21] pb-8 md:border-b-0 md:border-r md:border-white/[0.21] md:pr-10">{quickLinks.map(([label, href]) => <Link key={label} href={href} className="block hover:text-[#f20000]">{label}</Link>)}</FooterColumn><FooterColumn title="Our Categories">{categories.map(([category, href]) => <Link key={category} href={href} className="block hover:text-[#f20000]">{category}</Link>)}</FooterColumn></div><div className="mt-14 flex min-h-[70px] flex-col items-center justify-between gap-5 border-t border-white/[0.21] pt-5 text-center text-[16px] sm:flex-row sm:text-left"><p>Copyright © 2026 - All rights reserved.</p><div className="flex items-center gap-2.5 text-white" aria-label="Accepted payment methods"><FaCcVisa size={25} /><FaPaypal size={25} /><FaCcMastercard size={25} /></div></div></div></footer>;
}

function FooterColumn({ title, children, className = "" }) {
  return <div className={className}><h2 className="mb-5 font-display text-[26px] font-semibold leading-none tracking-[0.5px]">{title}</h2><div className="space-y-1 text-[16px] leading-6 text-white">{children}</div></div>;
}
