import type { Metadata } from "next";
import "./globals.scss";
import { Arimo, Pixelify_Sans } from "next/font/google";

import { TranslationProvider } from "@/context/TranslationContext";
// import LanguageSwitcher from "@/components/LanguageSwitcher";

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // você escolhe os pesos que vai usar
  variable: "--font-arimo"
});

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-pixelify"
})

export const metadata: Metadata = {
  title: "Nathallia Vieira - Portfólio",
  description: "Portfólio",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arimo.variable} ${pixelifySans.variable}`}>
        <TranslationProvider>
          {/* <LanguageSwitcher /> */}

          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
