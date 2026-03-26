import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Noblesse Portfolio",
  description: "Premium dark mystical portfolio with galaxy-inspired interactivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
