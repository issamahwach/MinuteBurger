import Image from "next/image";
import HeroSection from "./components/HeroSection";
import HomeMenu from "./components/HomeMenu";
import Contact from "./components/Contact";
import Specialities from "./components/Specialities";

export default function Home() {
  return (
    <div className="w-full flex flex-col px-4 pt-36 lg:px-24 space-y-36">
      <HeroSection />
      <HomeMenu />
      <Specialities />
      <Contact />
    </div>
  );
}
