import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AgePrograms = () => {
  const programs = [
    {
      title: "Детские программы",
      age: "От 3 лет",
      duration: "25-30 минут",
      features: [
        "Мультфильмы и сказки во время сеанса",
        "Игровая форма проведения",
        "Специальная детская мебель",
        "Контроль температуры и влажности",
      ],
      note: "Для детей младше 3 лет — только после консультации с педиатром",
    },
    {
      title: "Подростковые сеансы",
      age: "12-17 лет",
      duration: "35-40 минут",
      features: [
        "Музыка или фильмы по выбору",
        "Групповые сеансы со сверстниками",
        "Особенно эффективно при астме",
        "Помощь в подготовке к экзаменам (снятие стресса)",
      ],
      note: "Популярно среди школьников в период простудных заболеваний",
    },
    {
      title: "Взрослые программы",
      age: "18+ лет",
      duration: "40 минут",
      features: [
        "Релакс-программы с ароматерапией",
        "Медитативные сеансы",
        "Индивидуальные и групповые форматы",
        "Корпоративные посещения",
      ],
      note: "Без возрастных ограничений при отсутствии противопоказаний",
    },
    {
      title: "Семейные сеансы",
      age: "Все возрасты",
      duration: "35 минут",
      features: [
        "Совместное посещение родителей и детей",
        "Адаптированная программа для всех",
        "Семейная релаксация",
        "Специальные праздничные программы",
      ],
      note: "Отличный способ провести время всей семьей с пользой для здоровья",
    },
  ];

  return (
    <section className="py-16 bg-white section-padding">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-nature-brown mb-4">
            Возрастные программы
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Специально разработанные программы для разных возрастных групп с
            учетом физиологических особенностей и потребностей
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="bg-nature-cream hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-xl text-nature-brown">
                  {program.title}
                </CardTitle>
                <div className="flex gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    👥 {program.age}
                  </span>
                  <span className="flex items-center gap-1">
                    ⏱️ {program.duration}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-nature-green mb-2">
                    Особенности программы:
                  </h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="text-nature-green mt-1">•</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Примечание:</strong> {program.note}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-nature-beige rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-nature-brown mb-4 text-center">
            Рекомендации по возрасту
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl mb-2">👶</div>
              <h4 className="font-semibold text-nature-brown">До 3 лет</h4>
              <p className="text-sm text-gray-600">
                Только после консультации с педиатром
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl mb-2">🧒</div>
              <h4 className="font-semibold text-nature-brown">3-12 лет</h4>
              <p className="text-sm text-gray-600">
                Игровые программы, короткие сеансы
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
              <h4 className="font-semibold text-nature-brown">Взрослые</h4>
              <p className="text-sm text-gray-600">
                Без ограничений при отсутствии противопоказаний
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgePrograms;
