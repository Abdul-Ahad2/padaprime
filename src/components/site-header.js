"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./icons";
import { FiChevronDown } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { productCategories } from "@/data/product-images";
import { logo } from "@/data/site-images";


const navLinks = [
  ["Home", "/"],
  ["About Us", "/about-us"],
  ["Products", "/shop"],
  ["Custom Manufacturing", "/custom-manufacturing"],
  ["Our Factory", "/our-factory"],
  ["Catalog", "/catalog"],
  ["Contact Us", "/contact-us"],
];

function Logo({ mobile = false }) {
  return <Link href="/" aria-label="Pada Prime home"><Image src={logo} alt="Pada Prime" width={960} height={528} priority className={mobile ? "h-[58px] w-auto" : "h-[62px] w-auto"} /></Link>;
}

const categoryHref = (category) => `/shop?category=${encodeURIComponent(category)}`;

function ProductDropdown({ mobile = false, onNavigate }) {
  if (mobile) {
    return <div className="space-y-1 pl-3">{productCategories.map((category) => <Link key={category} href={categoryHref(category)} onClick={onNavigate} className="block py-1 text-[15px] leading-7 text-white transition hover:bg-[#f20000] hover:pl-2">{category}</Link>)}</div>;
  }

  return <div className="w-full py-2">{productCategories.map((category) => <Link key={category} href={categoryHref(category)} onClick={onNavigate} className="block border-b border-white/[0.12] px-4 py-3 text-[15px] leading-6 text-white transition last:border-b-0 hover:bg-[#f20000]">{category}</Link>)}</div>;
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, searchOpen]);

  const closeMenus = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  return <>
    <header className="sticky top-0 z-50 border-y border-white/[0.21] bg-[#2a2a2a]">
      <div className="container-shell grid min-h-[90px] grid-cols-[70%_30%] items-center xl:grid-cols-[18%_64%_18%]">
        <div className="flex h-full items-center"><Logo mobile /></div>
        <nav className="hidden h-full items-center justify-center gap-x-6 border-x border-white/[0.21] px-10 xl:flex" aria-label="Main navigation">{navLinks.map(([label, href]) => <div key={label} className="relative h-full whitespace-nowrap" onMouseEnter={() => label === "Products" && setProductsOpen(true)} onMouseLeave={() => label === "Products" && setProductsOpen(false)}>{label === "Products" ? <Link href="/shop" onClick={closeMenus} onFocus={() => setProductsOpen(true)} aria-haspopup="true" aria-expanded={productsOpen} className="nav-hover-line flex h-full items-center gap-1 px-0 font-display text-[20px] font-medium uppercase tracking-normal text-white transition hover:text-[#f20000] xl:text-[21px]">Products <FiChevronDown size={15} className={productsOpen ? "rotate-180" : ""} aria-hidden="true" /></Link> : <Link href={href} className="nav-hover-line flex h-full items-center font-display text-[20px] font-medium uppercase tracking-normal text-white transition hover:text-[#f20000] xl:text-[21px]">{label}</Link>}{label === "Products" && productsOpen && <div className="absolute left-1/2 top-[82px] w-[220px] -translate-x-1/2 overflow-hidden rounded-[10px] border border-white/[0.21] bg-[#2a2a2a] shadow-2xl"><ProductDropdown /></div>}</div>)}</nav>
        <div className="hidden items-center justify-end gap-[30px] xl:flex"><button onClick={() => setSearchOpen(true)} aria-label="Open search" className="text-white hover:text-[#f20000] [&>svg]:stroke-[3.5]"><Icon name="search" size={35} /></button><a href="https://wa.me/923356020595" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 whitespace-nowrap rounded-[5px] bg-[#25d366] px-5 py-2.5 text-[15px] font-medium leading-none text-white transition hover:bg-[#1ebe5b]"><FaWhatsapp size={18} />WhatsApp</a></div>
        <button onClick={() => setMenuOpen(true)} aria-label="Open menu" className="justify-self-end text-white xl:hidden"><Icon name="menu" size={30} /></button>
      </div>
    </header>
    {menuOpen && <div className="fixed inset-0 z-[70] overflow-y-auto bg-[#2a2a2a] px-6 py-7 text-white xl:hidden"><div className="flex items-center justify-between"><Logo mobile /><button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-white"><Icon name="x" size={30} /></button></div><nav className="mt-12 space-y-1" aria-label="Mobile navigation">{navLinks.map(([label, href]) => <div key={label}>{label === "Products" ? <button onClick={() => setProductsOpen((open) => !open)} className="flex w-full items-center justify-between border-b border-white/[0.12] py-4 text-left font-display text-[28px] uppercase tracking-[0.5px]">Products <FiChevronDown size={20} className={productsOpen ? "rotate-180" : ""} aria-hidden="true" /></button> : <Link href={href} onClick={closeMenus} className="block border-b border-white/[0.12] py-4 font-display text-[28px] uppercase tracking-[0.5px]">{label}</Link>}{label === "Products" && productsOpen && <div className="border-b border-white/[0.12] py-5"><ProductDropdown mobile onNavigate={closeMenus} /></div>}</div>)}</nav><div className="mt-10 flex gap-4"><button onClick={() => { setMenuOpen(false); setSearchOpen(true); }} className="flex items-center gap-2 border border-white/20 px-4 py-3 text-sm uppercase tracking-[0.12em]"><Icon name="search" size={18} />Search</button><a href="https://wa.me/923356020595" target="_blank" rel="noopener noreferrer" onClick={closeMenus} className="flex items-center gap-2 bg-[#25d366] px-4 py-3 text-sm uppercase tracking-[0.12em]"><FaWhatsapp size={18} />WhatsApp</a></div></div>}
    {searchOpen && <div className="fixed inset-0 z-[80] flex items-start justify-center bg-black/80 px-5 pt-28" onClick={() => setSearchOpen(false)}><div className="w-full max-w-[640px] bg-[#2a2a2a] p-7 shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="mb-6 flex items-center justify-between"><span className="font-display text-3xl text-white">Search</span><button onClick={() => setSearchOpen(false)} aria-label="Close search" className="text-white"><Icon name="x" size={24} /></button></div><form onSubmit={(event) => { event.preventDefault(); const q = new FormData(event.currentTarget).get("q").toString().trim(); setSearchOpen(false); router.push(q ? `/shop?q=${encodeURIComponent(q)}` : "/shop"); }} className="flex gap-2"><input autoFocus name="q" type="search" placeholder="Type to start searching..." className="min-w-0 flex-1 bg-[#434343] px-4 py-3 text-sm text-white outline-none placeholder:text-white/60" /><button className="bg-[#f20000] px-5 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white">Search</button></form></div></div>}
  </>;
}
