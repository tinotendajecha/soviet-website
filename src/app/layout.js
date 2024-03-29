import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Soviet Auto And Body",
  description: "Soviet auto and body is a workshop which speacialises with repairing cars and also vehicle sales located along Mutare road in Harare, Zimbabwe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="_6CPX4cA8LbnYDiBcb8deG7euB00LoTKRCd0pMwA3bQ" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
