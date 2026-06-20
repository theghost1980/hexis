import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title:
    "200 CVs enviados. 200 rechazos. Probé otra cosa y funcionó | Método Hexis",
  description:
    "El mercado tech 2026 cambió. Los ATS te vuelven invisible aunque seas buen dev. Este sistema te pone frente al CTO en menos de 24 horas. Sin IA genérica, sin PDFs clonados.",
  authors: [{ name: "Saturno Mangieri", url: "https://github.com/theghost1980" }],
  alternates: {
    canonical: "https://hexis.fyi",
  },
  openGraph: {
    title: "200 CVs enviados. 200 rechazos. Probé otra cosa y funcionó",
    description:
      "Los ATS te descartan en 3 segundos. El Método Hexis te pone frente al CTO en menos de 24 horas. Para developers en 2026.",
    url: "https://hexis.fyi",
    siteName: "Método Hexis",
    images: [
      {
        url: "https://hexis.fyi/metadata-saturno-mangieri-consigue-job-tech-2026.png",
        width: 1200,
        height: 630,
        alt: "Método Hexis - Consigue empleo tech en 2026",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "200 CVs enviados. 200 rechazos. Probé otra cosa y funcionó",
    description:
      "Los ATS te descartan en 3 segundos. El Método Hexis te pone frente al CTO en menos de 24 horas.",
    images: [
      "https://hexis.fyi/metadata-saturno-mangieri-consigue-job-tech-2026.png",
    ],
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
  icons: {
    icon: { url: "/favicon.ico", type: "image/x-icon" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Método Hexis",
              url: "https://hexis.fyi",
              description:
                "Sistema para developers que buscan empleo tech internacional en 2026 sin ser filtrados por ATS.",
              author: {
                "@type": "Person",
                name: "Saturno Mangieri",
                url: "https://github.com/theghost1980",
              },
              inLanguage: "es",
              dateModified: "2026-06-20",
            }),
          }}
        />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="ac4386af-833f-4037-8935-a73d331041be"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
