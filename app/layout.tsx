import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dental Studio by Dr. Mohsin",
  description: "Premium Dental Clinic Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}