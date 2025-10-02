import type { Metadata } from "next";
import { Julius_Sans_One, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const julius = Julius_Sans_One({
  weight: ["400"], // Julius Sans One supporta solo il weight 400
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "hivesoft placeholder website",
  description: "This page works as a placeholder website, in the meantime we are taking care of publishing the real website",
  icons: "favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${julius.className} ${montserrat.className} flex flex-col min-h-screen text-gray-900 bg-cover bg-top-right antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
