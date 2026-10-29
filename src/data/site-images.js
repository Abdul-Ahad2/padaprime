import { productImages } from "./product-images";

const localProduct = (fileName) => productImages.find((item) => item.src.endsWith(fileName))?.src || productImages[0].src;

export const heroImages = [
  localProduct("product-057.png"),
  localProduct("product-085.png"),
  localProduct("product-087.png"),
  localProduct("product-047.png"),
  "/categories/track-top.png",
];

export const processImages = [
  "/assets/art.png",
  "/assets/spool.png",
  "/assets/scissors.png",
  "/assets/secure-shield.png",
  "/assets/price-tag.png",
  "/assets/worldwide.png",
];

export const certificationImages = [
  "/assets/FBR.png",
  "/assets/FDA.png",
  "/assets/GMP.png",
  "/assets/ISO-9001.png",
  "/assets/SCCI.jpg",
  "/assets/white-bg.jpg",
];

export const deliveryImages = [
  "/assets/1-dhl.png",
  "/assets/2-fedex.png",
  "/assets/3-ups.png",
  "/assets/4-sky-net.png",
  "/assets/5-dpd.png",
];

export const logo = "/pada-prime-logo-v4.png";
export const aboutImage = localProduct("product-014.png");
