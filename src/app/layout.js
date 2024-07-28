import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
