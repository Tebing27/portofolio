import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Shared/ThemeIcon";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Menlo", "Consolas", "monospace"],
});

export const metadata: Metadata = {
  title: "Tebing Rizky T – Web Developer & UI/UX Designer | Portfolio",
  description:
    "Portfolio Tebing Rizky T, Web Developer & UI/UX Designer asal Jakarta. Proyek Next.js, React, dan Figma: landing page, website lomba, dan desain UI/UX.",
  keywords: ["web developer", "UI/UX designer", "Next.js", "React", "portfolio", "Jakarta"],
  authors: [{ name: "Tebing Rizky T" }],
  openGraph: {
    title: "Tebing Rizky T – Web Developer & UI/UX Designer",
    description: "Portfolio proyek web dan desain UI/UX oleh Tebing Rizky T.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${ibmMono.variable} ${jakartaSans.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
