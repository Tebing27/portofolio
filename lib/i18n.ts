export const locales = ["id", "en"] as const;
export type Lang = (typeof locales)[number];

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tebing.vercel.app";
export const NAME = "Tebing Rizky Tsaniansyah";

// "/" serves Indonesian (rewritten to /id), "/en" serves English
export const basePath = (lang: Lang) => (lang === "en" ? "/en" : "/");

export const dict = {
  id: {
    title: `${NAME} – Web App Developer | Portofolio`,
    description:
      "Portofolio Tebing Rizky Tsaniansyah, Full Stack Engineer asal Jakarta. Membangun aplikasi web modern dengan Next.js, React, TypeScript, Node.js, dan Supabase.",
    nav: { home: "Beranda", work: "Portofolio", contact: "Kontak" },
    hello: "Hai, Saya Tebing 👋",
    tagline:
      "Mengubah ide menjadi aplikasi web modern yang cepat, responsif, dan mudah digunakan.",
    contactTagline: "Mari terhubung dan berkolaborasi!",
    more: "selengkapnya",
    less: "lebih sedikit",
    share: "Bagikan",
    copy: "Salin link",
    copied: "Tersalin ✓",
  },
  en: {
    title: `${NAME} – Web App Developer | Portfolio`,
    description:
      "Portfolio of Tebing Rizky Tsaniansyah, a Jakarta-based Full Stack Engineer building modern web apps with Next.js, React, TypeScript, Node.js, and Supabase.",
    nav: { home: "Home", work: "Portfolio", contact: "Contact" },
    hello: "Hi, I'm Tebing 👋",
    tagline:
      "Turning ideas into modern web apps that are fast, responsive, and easy to use.",
    contactTagline: "Let's connect and collaborate!",
    more: "read more",
    less: "show less",
    share: "Share",
    copy: "Copy link",
    copied: "Copied ✓",
    rights: "All rights reserved.",
  },
} satisfies Record<Lang, unknown>;

export const keywords = [
  NAME,
  `${NAME} Full Stack Engineer`,
  "Tebing Full Stack Engineer",
  "Tebing Rizky Full Stack Engineer",
  `${NAME} Web App Developer`,
  "Web App Developer Jakarta",
  "Tebing Rizky",
  "Tebing Tsaniansyah",
  "Full Stack Engineer Jakarta",
  "Full Stack Engineer Indonesia",
  "Next.js Developer",
  "React Developer",
  "Portfolio",
  "Portofolio",
];
