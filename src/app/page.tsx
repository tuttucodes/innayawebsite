import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import AILayer from "@/components/AILayer";
import Brands from "@/components/Brands";
import Sustainability from "@/components/Sustainability";
import Compliance from "@/components/Compliance";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";

export default function Home() {
  return (
    <>
      <Schema />
      <Nav />
      <main className="overflow-x-clip">
        <Hero />
        <Marquee />
        <About />
        <Capabilities />
        <AILayer />
        <Brands />
        <Sustainability />
        <Compliance />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
