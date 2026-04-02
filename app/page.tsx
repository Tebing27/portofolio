import Contact from "@/components/Content/Contact/Contact";
import Footer from "@/components/Content/Footer/Footer";
import Hero from "@/components/Content/Hero/Hero";
import Portfolio from "@/components/Content/Projects/Portfolio";
import Navbar from "@/components/Shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
