import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Индивидуальные сеансы",
      description:
        "Персональные процедуры для максимального комфорта и уединения",
      duration: "40 минут",
      capacity: "1 человек",
      price: "от 600 ₽",
    },
    {
      title: "Групповые сеансы",
      description: "Процедуры в общей комнате с релакс-зонами",
      duration: "40 минут",
      capacity: "до 6 человек",
      price: "от 450 ₽",
    },
    {
      title: "Детские программы",
      description: "Специальные сеансы для детей с мультфильмами и играми",
      duration: "25-30 минут",
      capacity: "до 4 детей",
      price: "от 600 ₽",
    },
    {
      title: "Семейные посещения",
      description: "Совместные сеансы для родителей и детей",
      duration: "35 минут",
      capacity: "семья до 5 человек",
      price: "от 1500 ₽",
    },
  ];

  return (
    <section className="py-16 bg-white section-padding">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-nature-brown mb-4">
            Виды процедур
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Выберите подходящий формат галотерапии для максимального
            оздоровительного эффекта
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-nature-cream hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-xl text-nature-brown">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{service.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-nature-green">⏱️</span>
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-nature-green">👥</span>
                    <span>{service.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-nature-green">💰</span>
                    <span className="font-semibold text-nature-brown">
                      {service.price}
                    </span>
                  </div>
                </div>
                <Button className="w-full bg-nature-brown hover:bg-nature-brown/90">
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-nature-beige rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-nature-brown mb-4 text-center">
            Курсы процедур
          </h3>
          <p className="text-center text-gray-700 mb-6">
            Для достижения стойкого оздоровительного эффекта рекомендуется
            пройти полный курс из 10-15 сеансов
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-nature-green hover:bg-nature-green/90"
            >
              Узнать о курсах
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
