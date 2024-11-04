import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haerim's portfoilo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
