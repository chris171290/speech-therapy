import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import type React from "react"; // Added import for React

const playfairDisplay = Playfair_Display({
  subsets: ["latin"], // Especifica los subconjuntos de caracteres que necesitas
  weight: ["400", "700"], // Opcional: Especifica los pesos de fuente que quieres usar
});

export const metadata: Metadata = {
  title: "Talk & Bloom | Helping Kids Communicate, Connect, and Thrive",
  description:
    "Talk & Bloom helps kids communicate, connect, and thrive with personalized therapy, expert guidance, and a nurturing environment.",
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
        url: "/hero-speech-therapy.avif",
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
    images: ["/hero-speech-therapy.avif"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={playfairDisplay.className}>{children}</body>
    </html>
  );
}
