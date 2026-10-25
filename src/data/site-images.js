import { featuredImages, productImages } from "./product-images";

const localProduct = (fileName) => productImages.find((item) => item.src.endsWith(fileName))?.src || productImages[0].src;

export const heroImages = [
  localProduct("product-002.jpg"),
  localProduct("product-022.jpg"),
  localProduct("product-079.jpg"),
  localProduct("product-104.jpg"),
  localProduct("product-131.jpg"),
  localProduct("product-148.jpg"),
];

export const categoryImages = [
  ["Sports Wear", localProduct("product-002.jpg")],
  ["Fitness Wear", localProduct("product-104.jpg")],
  ["Casual Wear", localProduct("product-079.jpg")],
  ["Wrestling Wear", localProduct("product-131.jpg")],
  ["Fashion Jackets", localProduct("product-148.jpg")],
  ["Sports Gloves", localProduct("product-028.jpg")],
  ["Accessories", localProduct("product-152.jpg")],
];

export const featuredProducts = featuredImages.map(({ name, src }) => [name, "", src, src]);

export const bestSellers = [
  ["Wrestling Uniform", "Wrestling Wear", localProduct("product-131.jpg"), localProduct("product-131.jpg")],
  ["Track Suit", "Casual Wear", localProduct("product-148.jpg"), localProduct("product-148.jpg")],
  ["Rash Guard", "Fitness Wear", localProduct("product-116.jpg"), localProduct("product-116.jpg")],
  ["Performance Shorts", "Casual Wear", localProduct("product-079.jpg"), localProduct("product-079.jpg")],
  ["Hoodie", "Casual Wear", localProduct("product-152.jpg"), localProduct("product-152.jpg")],
  ["V-Neck Team Jersey", "Sports Wear", localProduct("product-002.jpg"), localProduct("product-002.jpg")],
  ["Basketball Uniform", "Sports Wear", localProduct("product-022.jpg"), localProduct("product-022.jpg")],
  ["American Football Gloves", "Sports Gloves", localProduct("product-028.jpg"), localProduct("product-028.jpg")],
  ["Custom Sports Cap", "Accessories", localProduct("product-155.jpg"), localProduct("product-155.jpg")],
  ["7v7 Uniform", "Sports Wear", localProduct("product-138.jpg"), localProduct("product-138.jpg")],
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

export const logo = "/pada-prime-logo.svg";
export const aboutImage = localProduct("product-116.jpg");
