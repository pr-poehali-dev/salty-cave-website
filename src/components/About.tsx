import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      title: "Температура",
      value: "18-24°C",
      description: "Комфортная для расслабления",
    },
    {
      title: "Влажность",
      value: "40-60%",
      description: "Сухой воздух усиливает действие",
    },
    {
      title: "Длительность",
      value: "40 минут",
      description: "Оптимальное время сеанса",
    },
  ];

  return (
    <section className="py-16 bg-nature-cream section-padding">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-nature-brown mb-4">О нас</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Наша соляная пещера создает уникальный микроклимат, имитирующий
            природные соляные копи. Галотерапия основана на вдыхании сухого
            аэрозоля хлорида натрия, который благотворно влияет на дыхательную
            систему и общее самочувствие.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-nature-brown">
                  {feature.value}
                </CardTitle>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-nature-brown mb-4">
            Что такое галотерапия?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Галотерапия — это метод оздоровления, основанный на применении
            искусственного микроклимата соляных пещер. Мелкодисперсный солевой
            аэрозоль проникает в дыхательные пути, оказывая
            противовоспалительное, бронхолитическое и муколитическое действие.
            Процедуры проходят в расслабляющей атмосфере с приглушенным
            освещением и звуками природы.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
