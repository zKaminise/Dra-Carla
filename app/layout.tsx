import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { dentistInfo } from "@/lib/data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

// Substitua pela URL real do site quando publicar
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://seudominio.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${dentistInfo.name} — Cirurgiã-Dentista em ${dentistInfo.city}`,
    template: `%s | ${dentistInfo.name}`,
  },
  description: `${dentistInfo.name}, cirurgiã-dentista em ${dentistInfo.cityFull}. Atendimento odontológico individualizado com foco em saúde bucal, estética e planejamento personalizado. Particular e convênios selecionados. Agende sua avaliação.`,
  keywords: [
    `dentista em ${dentistInfo.city}`,
    `cirurgiã-dentista em ${dentistInfo.city}`,
    `clínica odontológica em ${dentistInfo.city}`,
    `avaliação odontológica em ${dentistInfo.city}`,
    `clareamento dental em ${dentistInfo.city}`,
    `tratamento de canal em ${dentistInfo.city}`,
    `atendimento odontológico particular e convênios em ${dentistInfo.city}`,
    "dentista",
    "cirurgiã-dentista",
    "odontologia estética",
    "saúde bucal",
  ],
  authors: [{ name: dentistInfo.name }],
  creator: dentistInfo.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: dentistInfo.name,
    title: `${dentistInfo.name} — Cirurgiã-Dentista em ${dentistInfo.city}`,
    description: `Atendimento odontológico personalizado em ${dentistInfo.cityFull}. Particular e convênios selecionados. Agende sua avaliação pelo WhatsApp.`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${dentistInfo.name} — Cirurgiã-Dentista`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${dentistInfo.name} — Cirurgiã-Dentista em ${dentistInfo.city}`,
    description: `Atendimento odontológico personalizado em ${dentistInfo.cityFull}.`,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// JSON-LD Schema para SEO local
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: dentistInfo.name,
  description: `Cirurgiã-dentista em ${dentistInfo.cityFull}. Atendimento odontológico individualizado com foco em saúde bucal, estética e planejamento personalizado.`,
  url: SITE_URL,
  telephone: dentistInfo.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: dentistInfo.address,
    addressLocality: dentistInfo.city,
    addressRegion: dentistInfo.state,
    addressCountry: "BR",
  },
  openingHours: dentistInfo.hours,
  areaServed: {
    "@type": "City",
    name: dentistInfo.city,
  },
  medicalSpecialty: "Dentistry",
  sameAs: [dentistInfo.instagram],
  hasMap: dentistInfo.googleMapsUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
