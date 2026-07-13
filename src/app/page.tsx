import { About } from "@/components/About";
import Hero from "@/components/Hero";

import { Contact } from "@/components/Contact";
import { Coverage } from "@/components/Coverage";
import { Footer } from "@/components/Footer";

import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Service";
import { Testimonials } from "@/components/Testimonail";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" overflow-x-hidden ">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Services />
        <Portfolio />
        <Coverage />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </main>
  );
}
