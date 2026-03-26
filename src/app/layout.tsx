import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "HxOpSec | Cybersecurity Portfolio",
  description: "Immersive cybersecurity portfolio for HxOpSec (Umed), aspiring SOC analyst.",
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
