import type { Metadata } from "next";
import { Geist, Geist_Mono, Saira } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";
import { NavbarProvider } from "@/hooks/navbar-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Ansari Transport & Enterprises W.L.L.",
  description: "Heavy Equipment Rental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${saira.className} antialiased`}
      >
        <NavbarProvider>
          <Navbar />
          {children}
          <Footer />
        </NavbarProvider>
      </body>
    </html>
  );
}
