import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_lib/components/header";

const inter = Inter({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Simple Finance",
  description: "FSC - Labs - Simple Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`} cz-shortcut-listen="false">
        <div
          className="h-screen max-w-[390px] p-[30px]"
          style={{ margin: "0 auto" }}
        >
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
