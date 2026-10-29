import { productImages } from "./product-images";

const localProduct = (fileName) => productImages.find((item) => item.src.endsWith(fileName))?.src || productImages[0].src;

export const heroImages = [
  localProduct("product-057.webp"),
  localProduct("product-085.webp"),
  localProduct("product-087.webp"),
  localProduct("product-047.webp"),
  "/categories/track-top.webp",
];

export const processImages = [
  "/assets/art.webp",
  "/assets/spool.webp",
  "/assets/scissors.webp",
  "/assets/secure-shield.webp",
  "/assets/price-tag.webp",
  "/assets/worldwide.webp",
];

export const certificationImages = [
  "/assets/FBR.webp",
  "/assets/FDA.webp",
  "/assets/GMP.webp",
  "/assets/ISO-9001.webp",
  "/assets/SCCI.jpg",
  "/assets/white-bg.jpg",
];

export const deliveryImages = [
  "/assets/1-dhl.webp",
  "/assets/2-fedex.webp",
  "/assets/3-ups.webp",
  "/assets/4-sky-net.webp",
  "/assets/5-dpd.webp",
];

export const logo = "/pada-prime-logo-v4.webp";
export const aboutImage = localProduct("product-014.webp");
