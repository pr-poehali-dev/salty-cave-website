import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Indications from "@/components/Indications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Indications />
      <Contact />
    </div>
  );
};

export default Index;
