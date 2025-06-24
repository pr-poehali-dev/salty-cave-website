import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Indications = () => {
  const indications = [
    "Заболевания дыхательных путей (бронхит, астма, частые ОРВИ)",
    "Аллергии, поллиноз, дерматиты",
    "Снижение иммунитета, хроническая усталость",
    "Стресс, бессонница, тревожность",
    "Кожные заболевания (экзема, псориаз)",
    "Восстановление после болезни",
  ];

  const contraindications = [
    "Острые инфекции (температура, грипп)",
    "Туберкулез, тяжелая форма гипертонии",
    "Онкологические заболевания",
    "Клаустрофобия (в небольших помещениях)",
    "Кровотечения, обострение хронических болезней",
    "Беременность (только после консультации врача)",
  ];

  return (
    <section className="py-16 bg-nature-cream section-padding">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-nature-brown mb-4">
            Показания и противопоказания
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Перед посещением соляной пещеры обязательно проконсультируйтесь с
            врачом, особенно при наличии хронических заболеваний
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-green-700 flex items-center gap-2">
                ✅ Показания
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {indications.map((indication, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-gray-700">{indication}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-2xl text-red-700 flex items-center gap-2">
                ❌ Противопоказания
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {contraindications.map((contraindication, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">•</span>
                    <span className="text-gray-700">{contraindication}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              💡 Важная информация
            </h3>
            <p className="text-blue-700 text-lg">
              Эффект от галотерапии заметен после 5-7 сеансов, но для стойкого
              результата рекомендуется пройти полный курс из 10-15 процедур
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Indications;
