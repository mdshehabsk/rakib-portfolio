import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const kornofuli = localFont({
  src: [
    {
      path: "../font/Kornofuli-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/Kornofuli-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artova - Your Vision is Our Creation",
  description: "Designed and developed by Md. Rakib Khan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased overflow-x-hidden ">
      <body className={` min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
