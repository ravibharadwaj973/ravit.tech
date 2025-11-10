import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import {
  Montserrat,
  Poppins,
  Inter,
  Lato,
  Raleway,
  Open_Sans,
  Source_Sans_3,
  Urbanist,
  Outfit,
  Manrope
} from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'] 
});
const inter = Inter({ subsets: ['latin'] });
const lato = Lato({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'] 
});
const raleway = Raleway({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });
const sourceSans3 = Source_Sans_3({ subsets: ['latin'] });
const urbanist = Urbanist({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'] });
const manrope = Manrope({ subsets: ['latin'] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ravi.tech",
  description: "Welcome to Ravi.tech — Web Development and DevOps Solutions.",
  icons: {
    icon: "/code.jpg",        // 👈 Add your custom favicon here
    shortcut: "/code.jpg",
    apple: "/code.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
