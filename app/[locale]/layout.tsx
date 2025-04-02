import "../globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type LanguageCode = "es" | "en";

const metadataByLocale: Record<LanguageCode, Metadata> = {
  en: {
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
  },
  es: {
    title:
      "Talk & Bloom | Ayudando a los Niños a Comunicarse, Conectar y Prosperar",
    description:
      "Talk & Bloom ayuda a los niños a comunicarse, conectar y prosperar con terapia personalizada, orientación experta y un entorno de apoyo.",
    keywords: [
      "terapia del habla",
      "terapia del lenguaje",
      "patología del habla y lenguaje",
      "trastornos de comunicación",
      "desarrollo del habla en niños",
      "trastornos del lenguaje",
      "patología del habla",
    ],
    authors: [{ name: "Talk & Bloom" }],
    robots: "index, follow",
    openGraph: {
      type: "website",
      locale: "es_ES",
      siteName: "Talk & Bloom",
      title:
        "Talk & Bloom | Ayudando a los Niños a Comunicarse, Conectar y Prosperar",
      description:
        "Talk & Bloom ayuda a los niños a comunicarse, conectar y prosperar con terapia personalizada, orientación experta y un entorno de apoyo.",
      images: [
        {
          url: "/hero-speech-therapy.avif",
          width: 1200,
          height: 630,
          alt: "Talk & Bloom - Terapia del Habla para Niños",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Talk & Bloom | Terapia del Habla para Niños",
      description:
        "Terapia del habla especializada que ayuda a los niños a comunicarse y desarrollarse.",
      images: ["/hero-speech-therapy.avif"],
    },
  },
};

type RootLayoutProps = {
  children: ReactNode;
  params: {
    locale: LanguageCode;
  };
};

export default function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = params;
  let messages;
  try {
    messages = require(`../messages/${locale}.json`);
  } catch (error) {
    console.log(error);
  }

  const metadata = metadataByLocale[locale];

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={playfairDisplay.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const generateMetadata = ({
  params,
}: {
  params: { locale: LanguageCode };
}) => {
  const { locale } = params;
  return metadataByLocale[locale];
};
