import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/Shared/ThemeIcon";
import { NAME, SITE_URL, basePath, dict, keywords, locales, type Lang } from "@/lib/i18n";

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

export const dynamicParams = false;
export const generateStaticParams = () => locales.map((lang) => ({ lang }));

const isLang = (l: string): l is Lang => (locales as readonly string[]).includes(l);

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = dict[lang];
  return {
    metadataBase: new URL(SITE_URL),
    title: t.title,
    description: t.description,
    keywords,
    authors: [{ name: NAME, url: SITE_URL }],
    creator: NAME,
    alternates: {
      canonical: basePath(lang),
      languages: { id: "/", en: "/en", "x-default": "/" },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: basePath(lang),
      siteName: NAME,
      type: "profile",
      locale: lang === "en" ? "en_US" : "id_ID",
      alternateLocale: lang === "en" ? "id_ID" : "en_US",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: t.title }],
    },
    twitter: { card: "summary_large_image", title: t.title, description: t.description, images: ["/og.png"] },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: NAME,
        alternateName: "Tebing",
        jobTitle: "Full Stack Engineer",
        url: SITE_URL,
        image: `${SITE_URL}/og.png`,
        email: "mailto:tebingtsaniansyah56@gmail.com",
        address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
        knowsAbout: ["Next.js", "React", "TypeScript", "Node.js", "Supabase", "PostgreSQL", "Docker", "UI/UX Design"],
        sameAs: [
          "https://github.com/Tebing27",
          "https://www.linkedin.com/in/tebing-rizky-7ab6391ba/",
          "https://www.instagram.com/tebingtsaaa/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${NAME} – Web App Developer`,
        inLanguage: ["id-ID", "en-US"],
        image: `${SITE_URL}/icon.png`,
        publisher: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };

  return (
    <html lang={lang} className="scroll-smooth" suppressHydrationWarning>
      <body className={`${ibmMono.variable} ${jakartaSans.variable} antialiased`} suppressHydrationWarning>
        {/* apply saved theme before paint so reloads (e.g. ID/EN switch) keep it */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem("theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.classList.toggle("dark",t==="dark")}catch(e){}`}
        </Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
