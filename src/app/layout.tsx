
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import DesktopOnly from "@/components/DesktopOnly";
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
  title: "VORA — Voyage & Orbital Research Agency",
  description:
    "VORA explores aerospace research, orbital systems, and the possibilities beyond the known.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <DesktopOnly>{children}</DesktopOnly>
      </body>
    </html>
  );
}
