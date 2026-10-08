import Contact from "@/components/Content/Contact/Contact";
import Footer from "@/components/Content/Footer/Footer";
import Hero from "@/components/Content/Hero/Hero";
import Portfolio from "@/components/Content/Projects/Portfolio";
import Navbar from "@/components/Shared/Navbar";
import type { Lang } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Lang;
  return (
    <>
      <Navbar lang={lang} />
      <main>
        <Hero lang={lang} />
        <Portfolio lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
