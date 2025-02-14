import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import type React from "react"; // Added import for React

const playfairDisplay = Playfair_Display({
  subsets: ["latin"], // Especifica los subconjuntos de caracteres que necesitas
  weight: ["400", "700"], // Opcional: Especifica los pesos de fuente que quieres usar
});

export const metadata: Metadata = {
  title: "Terapia de Lenguaje para Niños",
  description:
    "Especialistas en terapia de lenguaje para niños, ayudando a mejorar la comunicación y el desarrollo del habla.",
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
