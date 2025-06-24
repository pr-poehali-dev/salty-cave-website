import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы
    setTimeout(() => {
      alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
      setFormData({ name: "", phone: "", service: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Адрес",
      content: "г. Электросталь, улица Тевосяна 25, 4 этаж",
      description: "Удобное расположение в центре города",
    },
    {
      icon: "📞",
      title: "Телефон",
      content: "+79150007687",
      description: "Звоните с 12:00 до 20:00",
    },
    {
      icon: "📧",
      title: "Email",
      content: "Dukanichy93@gmail.com",
      description: "Ответим в течение часа",
    },
    {
      icon: "🕐",
      title: "Режим работы",
      content: "Пн-Вс: 12:00-20:00",
      description: "Работаем каждый день",
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
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-brown focus:border-transparent"
                    placeholder="Введите ваше имя"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-brown focus:border-transparent"
                    placeholder="+7 (XXX) XXX-XX-XX"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Тип процедуры
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-brown focus:border-transparent"
                    required
                  >
                    <option value="">Выберите тип процедуры</option>
                    <option value="individual">Индивидуальный сеанс</option>
                    <option value="group">Групповой сеанс</option>
                    <option value="children">Детская программа</option>
                    <option value="family">Семейное посещение</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nature-brown focus:border-transparent"
                    placeholder="Дополнительная информация или вопросы"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-nature-brown hover:bg-nature-brown/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправляем..." : "Отправить заявку"}
                </Button>
              </form>
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
                    <p className="text-sm">
                      г. Электросталь, ул. Тевосяна 25, 4 этаж
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-nature-beige">
              <CardHeader>
                <CardTitle className="text-xl text-nature-brown">
                  📍 Дополнительная информация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Удобства:</strong>
                    <p className="text-gray-700">
                      Комфортная зона ожидания, кондиционер
                    </p>
                  </div>
                  <div>
                    <strong>Парковка:</strong>
                    <p className="text-gray-700">
                      Бесплатная парковка для посетителей
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
