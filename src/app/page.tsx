import Hero from "@/components/Hero";
import Divisions from "@/components/Divisions";
import AILayer from "@/components/AILayer";
import Brands from "@/components/Brands";
import Capabilities from "@/components/Capabilities";
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
        <Divisions />
        <AILayer />
        <Brands />
        <Capabilities />
        <Compliance />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
