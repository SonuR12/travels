import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navBar";
import Footer from "@/components/shared/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bae Travels - Your Gateway to Adventure",
  description:
    "Welcome to Bae Travels! Discover breathtaking destinations, curated travel experiences, and expert guidance for your next adventure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-white">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
