import  Portfolio  from "@/components/Portfolio";
import Features from "@/components/Features";
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import StatsBanner from "@/components/StatsBanner";
import  Footer  from "@/components/Footer";
import Image from "next/image";

const New = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <Features/>
    <Image src='/another.jpeg' alt="logo iamge" width={1000} height={200} className="w-full   " />
    <Founder/>
    <Portfolio/>
    <StatsBanner/>

    <Footer/>
    </>
  );
};

export default New;
