import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Teacher Day Card",
  description: "Owned by VECTR",
};

const BaskervvilleSC = localFont({
  src: "../fonts/Baskervville_SC/BaskervvilleSC-Regular.ttf",
  variable: "--font-basker",
});
const PlayFairDisplay = localFont({
  src: "../fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-playfair",
});
const MeowScript = localFont({
  src: "../fonts/Meow_Script/MeowScript-Regular.ttf",
  variable: "--font-meow",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={`${BaskervvilleSC.variable} ${PlayFairDisplay.variable} ${MeowScript.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
