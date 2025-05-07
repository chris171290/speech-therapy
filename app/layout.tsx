import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider"

const playfair = Playfair_Display({
  // subsets: ["latin"],
  // variable: "--font-serif",
  // display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Coming Soon | Wellness Studio",
  description:
    "Our new wellness platform is launching soon. Sign up to be notified when we go live.",
  openGraph: {
    title: "Coming Soon | Wellness Studio",
    description:
      "Our new wellness platform is launching soon. Sign up to be notified when we go live.",
    url: "https://wellnessstudio.com",
    siteName: "Wellness Studio",
    images: [
      {
        url: "https://wellnessstudio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wellness Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={playfair.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
