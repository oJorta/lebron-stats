import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

import icon from "@/../public/assets/icon/basketball-png.png";

export const metadata: Metadata = {
  title: "Lebron Stats",
  description: "Estatísticas de Lebron James - estudo da biblioteca Nivo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Image alt="Basketball" src={icon} width={32} height={32} />
          <h2>Estatísticas - Lebron James</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
