import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MEET AI",
  description: "Meet-ai ai video calling app - saas ",
  icons: "/logo.svg"
};

/**
 * Application root layout that establishes global HTML structure and provides TRPC context.
 *
 * Wraps the app's UI with the TRPC React provider, sets the page language to English, and
 * applies the global font and antialiasing to the document body.
 *
 * @param children - React nodes rendered as the document body content
 * @returns The root HTML structure for the application
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TRPCReactProvider>
      <html lang="en">
        <body
          className={`${inter.className}  antialiased`}
        >
          {children}
        </body>
      </html>
    </TRPCReactProvider>
  );
}
