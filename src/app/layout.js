import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Casa de Dios Shekinah - Isaías 35",
  description: "Casa de Dios Shekinah, iglesia cristiana evangélica en Cantón Cara Sucia, Ahuachapán, El Salvador. Servicios, mensajes, oración y más. Isaías 35.",
  keywords: ["Casa de Dios Shekinah", "iglesia", "Ahuachapán", "Cara Sucia", "El Salvador", "iglesia cristiana", "Isaías 35"],
  openGraph: {
    title: "Casa de Dios Shekinah - Isaías 35",
    description: "Iglesia cristiana evangélica en Cantón Cara Sucia, Ahuachapán, El Salvador.",
    url: "https://casadediosshekinah.vercel.app",
    siteName: "Casa de Dios Shekinah",
    images: ["/logo shekinah.PNG"],
    locale: "es_SV",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}