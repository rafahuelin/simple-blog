import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html data-theme="coffee" lang="en" className={`${inter.className}`}>
      <body>{children}</body>
    </html>
  );
}
