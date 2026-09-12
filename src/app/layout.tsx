import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HatchGrow Poultry | Custom Egg Hatching & Day-Old Chicks in Chiredzi",
  description:
    "HatchGrow Poultry offers professional custom egg incubation and day-old chick sales in Chiredzi. Submit your fertile eggs and we handle hatching from setting to hatch day.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-cream">{children}</body>
    </html>
  );
}
