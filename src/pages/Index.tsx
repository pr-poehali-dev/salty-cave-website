import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Indications from "@/components/Indications";
import AgePrograms from "@/components/AgePrograms";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Indications />
      <AgePrograms />
      <Schedule />
      <Contact />
    </div>
  );
};

export default Index;
