import { Heebo, Teko } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["latin"],
  variable: "--font-heebo",
  display: "swap",
});

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
  display: "swap",
});

export const metadata = {
  title: "Pada Prime | Manufacturers and Exporters",
  description: "Pada Prime manufactures and exports premium sports, fitness, casual, wrestling, and fashion apparel worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${heebo.variable} ${teko.variable}`}>
      <body>{children}</body>
    </html>
  );
}
