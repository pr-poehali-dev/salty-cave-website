import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://cdn.poehali.dev/files/b462ef58-42f4-400d-a9d1-e4fac42c08bf.jpg')`,
      }}
    >
      <div className="text-center text-white animate-fade-in section-padding">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat">
          Соляная пещера
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-light max-w-3xl mx-auto">
          Природная галотерапия для здоровья и релаксации
        </p>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Уникальный микроклимат • 40-минутные сеансы • Температура 18-24°C
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-nature-brown hover:bg-nature-brown/90 text-white px-8 py-3 text-lg"
          >
            Записаться на сеанс
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-nature-green text-nature-green hover:bg-nature-green hover:text-white px-8 py-3 text-lg"
          >
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
