import type { Metadata } from "next";
import { ThemeModeScript } from "flowbite-react";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import FooterComponents from "@/components/footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT Adimukti Energi Nusantara | Solusi Terpadu Industri Migas",
  description:
    "PT Adimukti Energi Nusantara adalah mitra terpercaya di industri minyak dan gas, menyediakan layanan engineering, manpower supply, fabrication, dan material supply dengan integritas dan profesionalisme.",
  keywords: [
    "PT Adimukti Energi Nusantara",
    "Engineering",
    "Manpower Supply",
    "Fabrication",
    "Material Supply",
    "Perusahaan Migas",
    "Jasa Industri Energi",
    "Oil and Gas Indonesia",
    "Solusi Teknik",
  ],
  authors: [{ name: "PT Adimukti Energi Nusantara" }],
  creator: "PT Adimukti Energi Nusantara",
  publisher: "PT Adimukti Energi Nusantara",
  openGraph: {
    title: "PT Adimukti Energi Nusantara | Solusi Terpadu Industri Migas",
    description:
      "Kami menyediakan layanan engineering, tenaga kerja, fabrikasi, dan penyediaan material berkualitas untuk mendukung proyek-proyek di sektor energi.",
    url: "", // ganti dengan domain asli kamu
    siteName: "PT Adimukti Energi Nusantara",
    images: [
      {
        url: "/images/og-banner.jpg", // siapkan gambar ini di public/images
        width: 1200,
        height: 630,
        alt: "PT AEN - Mitra Terpercaya Industri Migas",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Adimukti Energi Nusantara",
    description:
      "Solusi teknik dan penyediaan kebutuhan industri migas secara terpadu dengan integritas dan dedikasi.",
    images: ["/images/og-banner.jpg"], // harus match dengan OG
    creator: "@ptaen", // jika ada akun Twitter perusahaan
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${openSans.variable} antialiased`}>
        {children}
        <FooterComponents />
      </body>
    </html>
  );
}
