import type { Metadata } from "next";
import "./universal.scss";
import { primary, secondary } from "@/public/fonts/fonts";

export const metadata: Metadata = {
  title: "The Raj Dharma - keep yourself ahead",
  description: "Generated by create next app",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${primary.className} ${secondary.variable}`}>{children}</body>
    </html>
  );
}
