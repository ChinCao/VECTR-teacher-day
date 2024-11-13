import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VECTR's Teacher Day",
  description: "Owned by VECTR",
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
