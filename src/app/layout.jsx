import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toast } from "../components/layout/Toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Globalis Bank",
  description: "A Global Banking Platform Worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toast />
        {children}
      </body>
    </html>
  );
}
