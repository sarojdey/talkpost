import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TalkPost",
  description: "A place to connect and share.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-foreground antialiased`}>{children}</body>
    </html>
  );
}
