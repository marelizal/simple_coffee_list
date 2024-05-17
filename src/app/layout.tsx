import type { Metadata } from "next";
import "./globals.css";
import { DM_sans } from "@src/config/fonts";

export const metadata: Metadata = {
  title: "Simple coffee list",
  description: "Project for devChangelles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={DM_sans.className}>{children}</body>
    </html>
  );
}
