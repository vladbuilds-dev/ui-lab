import type { Metadata } from "next";
import "./globals.css";
import { DemoToolbar } from "@/components/demo-toolbar";

export const metadata: Metadata = {
  title: "UI Lab — Vlad build veb",
  description:
    "Библиотека интегрированных UI-компонентов из «Промты ui.txt»: 11 демо на Next.js + Tailwind + TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="antialiased">
        {children}
        <DemoToolbar />
      </body>
    </html>
  );
}
