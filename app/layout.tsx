import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider"

const playfair = Playfair_Display({
  // subsets: ["latin"],
  // variable: "--font-serif",
  // display: "swap",
  subsets: ["latin"],
  // weight: ["400", "700"],
});

export const metadata: Metadata = {
  title:
    "Coming soon | Talk & Bloom | Helping Kids Communicate, Connect, and Thrive",
  description:
    "Talk & Bloom helps kids communicate, connect, and thrive with personalized therapy, expert guidance, and a nurturing environment.",
  icons: {
    icon: [{ url: "/logo/favicon/favicon.ico" }],
  },
  keywords: [
    "speech therapy",
    "language therapy",
    "speech-language pathology",
    "communication disorders",
    "speech development in children",
    "language disorders",
    "speech pathology",
  ],
  authors: [{ name: "Talk & Bloom" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Talk & Bloom",
    title: "Talk & Bloom | Helping Kids Communicate, Connect, and Thrive",
    description:
      "Talk & Bloom helps kids communicate, connect, and thrive with personalized therapy, expert guidance, and a nurturing environment.",
    images: [
      {
        url: "/logo/og_logo.png",
        width: 1200,
        height: 630,
        alt: "Talk & Bloom - Speech Therapy for Children",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talk & Bloom | Speech Therapy for Children",
    description:
      "Specialized speech therapy helping children communicate and develop.",
    images: ["/logo/og_logo.png"],
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
