import Image from "next/image";
import { Icon } from "./icons";

export function MediaFrame({ src, hoverSrc, className = "", alt = "", label = "Image loading", sizes = "(max-width: 768px) 100vw, 50vw", priority = false, fit = "cover" }) {
  const isAbsolute = className.includes("absolute");
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";
  return (
    <div className={`${isAbsolute ? "" : "relative"} overflow-hidden ${className}`}>
      {src ? (
        <>
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} unoptimized className={`${fitClass} transition-opacity duration-300 ${hoverSrc ? "opacity-100 group-hover:opacity-0" : ""}`} style={{ objectFit: fit, objectPosition: "center" }} />
          {hoverSrc && <Image src={hoverSrc} alt="" fill sizes={sizes} unoptimized className={`${fitClass} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />}
        </>
      ) : (
        <div className="skeleton-image absolute inset-0"><span className="skeleton-label">{label}</span></div>
      )}
    </div>
  );
}

export function SkeletonImage({ className = "", label = "Image loading" }) {
  return <div className={`skeleton-image ${className}`}><span className="skeleton-label">{label}</span></div>;
}

export function SectionIntro({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-[800px] text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export function ProductCard({ name, src, hoverSrc, onQuickView, list = false }) {
  if (list) {
    return (
      <div className="group flex gap-5 border-b border-white/[0.21] py-5">
        <MediaFrame src={src} hoverSrc={hoverSrc} alt={name} label={name} className="h-32 w-32 shrink-0" sizes="128px" />
        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <h3 className="font-display text-2xl text-white">{name}</h3>
          <button onClick={onQuickView} className="mt-4 w-fit border-b border-[#f20000] pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-white hover:text-[#f20000]">Quick View</button>
        </div>
      </div>
    );
  }

  return (
    <article className="group min-w-0">
      <div className="relative overflow-hidden">
        <MediaFrame src={src} hoverSrc={hoverSrc} alt={name} label={name} className="aspect-square w-full" sizes="(max-width: 768px) 50vw, 20vw" />
        <button onClick={onQuickView} className="absolute bottom-0 left-0 right-0 z-10 flex translate-y-2 items-center justify-center gap-2 bg-black/60 py-2.5 text-[12px] font-semibold uppercase tracking-[0.04em] text-white opacity-0 transition hover:bg-black/90 group-hover:translate-y-0 group-hover:opacity-100"><Icon name="search" size={15} />Quick View</button>
      </div>
      <h3 className="mt-3 text-center text-sm font-normal leading-6 text-white transition group-hover:text-[#f20000]">{name}</h3>
    </article>
  );
}

export function PageHero({ eyebrow, title, description }) {
  return (
    <section className="dotted-section px-5 py-20 text-center text-white sm:px-8 sm:py-28">
      <div className="container-shell">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-7 font-display text-5xl font-semibold leading-none tracking-[0.02em] sm:text-6xl">{title}</h1>
        {description && <p className="mx-auto mt-5 max-w-[800px] text-[15px] leading-7 text-white">{description}</p>}
      </div>
    </section>
  );
}

export function EmptyState({ title, description }) {
  return <div className="border border-dashed border-white/30 px-6 py-16 text-center"><h2 className="font-display text-3xl text-white">{title}</h2><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/70">{description}</p><a href="/shop" className="red-button mt-6">Browse Products <Icon name="arrow-right" size={16} /></a></div>;
}
