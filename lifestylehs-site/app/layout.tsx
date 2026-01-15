import "./globals.css";
import React from "react";

export const metadata = {
  title: "Lifestyle Homes & Services",
  description: "Framing, foundations, siding, and custom builds in Bonnyville, AB.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
