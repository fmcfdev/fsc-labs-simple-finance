import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProvider from "./_contexts/ClientProvider";
import React from "react";
import { Toaster } from "sonner";
import { AuthContextProvider } from "./_contexts/auth";
import { ThemeProvider } from "next-themes";

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
    <html lang="pt-BR"suppressHydrationWarning>
      <body className={`${inter.className}`} cz-shortcut-listen="false">
        <ThemeProvider
        attribute="class"
        defaultTheme="System">
        
      
      
        <ClientProvider>
          <AuthContextProvider>
            <Toaster />
            <div
              className="max-w-[390px] p-[30px]"
              style={{ margin: "0 auto" }}
            >
               
              {children}
              
            
            </div>
          </AuthContextProvider>
        </ClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
