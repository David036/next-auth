import type { Metadata } from "next";
import "./globals.css";
import { josefinSans } from "@/styles/fonts";
import Nav from "./components/nav";

export const metadata: Metadata = {
  title: "Next Template",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        <Nav />
        <div>{children}</div>
      </body>
    </html>
  );
}
