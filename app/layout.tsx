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
  openGraph: { images: [{ url: "/hero-speech-therapy.avif" }] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={playfairDisplay.className}>{children}</body>
    </html>
  );
}
