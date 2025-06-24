import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Адрес",
      content: "г. Москва, ул. Здоровья, 15",
      description: "Рядом с метро Парк Культуры",
    },
    {
      icon: "📞",
      title: "Телефон",
      content: "+7 (495) 123-45-67",
      description: "Звоните с 9:00 до 20:00",
    },
    {
      icon: "📧",
      title: "Email",
      content: "info@saltcave.ru",
      description: "Ответим в течение часа",
    },
    {
      icon: "🕐",
      title: "Режим работы",
      content: "Пн-Пт: 9:00-20:00",
      description: "Сб-Вс: 10:00-21:00",
    },
  ];

  return (
    <section className="py-16 bg-white section-padding">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-nature-brown mb-4">
            Контакты
          </h2>
          <p className="text-lg text-gray-700">
            Свяжитесь с нами для записи на процедуры или получения консультации
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <Card
              key={index}
              className="bg-nature-cream text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="text-4xl mb-2">{item.icon}</div>
                <CardTitle className="text-lg text-nature-brown">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-gray-800 mb-1">
                  {item.content}
                </p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Форма обратной связи */}
          <Card className="bg-nature-cream">
            <CardHeader>
              <CardTitle className="text-2xl text-nature-brown">
                Записаться на консультацию
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-brown focus:border-transparent"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-brown focus:border-transparent"
                  placeholder="+7 (XXX) XXX-XX-XX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Тип процедуры
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-brown focus:border-transparent">
                  <option>Выберите тип процедуры</option>
                  <option>Индивидуальный сеанс</option>
                  <option>Групповой сеанс</option>
                  <option>Детская программа</option>
                  <option>Семейное посещение</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <textarea
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-brown focus:border-transparent"
                  placeholder="Дополнительная информация или вопросы"
                />
              </div>
              <Button className="w-full bg-nature-brown hover:bg-nature-brown/90">
                Отправить заявку
              </Button>
            </CardContent>
          </Card>

          {/* Карта и дополнительная информация */}
          <div className="space-y-6">
            <Card className="bg-gray-100">
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p>Карта проезда</p>
                    <p className="text-sm">г. Москва, ул. Здоровья, 15</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-nature-beige">
              <CardHeader>
                <CardTitle className="text-xl text-nature-brown">
                  🚇 Как добраться
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>На метро:</strong>
                    <p className="text-gray-700">
                      Станция "Парк Культуры", выход №2, пешком 3 минуты
                    </p>
                  </div>
                  <div>
                    <strong>На автомобиле:</strong>
                    <p className="text-gray-700">
                      Есть парковка для посетителей (бесплатно)
                    </p>
                  </div>
                  <div>
                    <strong>На автобусе:</strong>
                    <p className="text-gray-700">
                      Остановка "Улица Здоровья", маршруты: 15, 42, 158
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
