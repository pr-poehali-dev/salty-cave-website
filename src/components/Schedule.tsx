import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Schedule = () => {
  const schedule = [
    {
      time: "09:00",
      type: "Детский сеанс",
      duration: "30 мин",
      available: true,
    },
    { time: "10:00", type: "Групповой", duration: "40 мин", available: true },
    {
      time: "11:00",
      type: "Индивидуальный",
      duration: "40 мин",
      available: false,
    },
    { time: "12:00", type: "Семейный", duration: "35 мин", available: true },
    {
      time: "13:00",
      type: "Обеденный перерыв",
      duration: "60 мин",
      available: false,
    },
    { time: "14:00", type: "Групповой", duration: "40 мин", available: true },
    {
      time: "15:00",
      type: "Индивидуальный",
      duration: "40 мин",
      available: true,
    },
    {
      time: "16:00",
      type: "Детский сеанс",
      duration: "30 мин",
      available: true,
    },
    { time: "17:00", type: "Групповой", duration: "40 мин", available: false },
    {
      time: "18:00",
      type: "Релакс-программа",
      duration: "45 мин",
      available: true,
    },
    {
      time: "19:00",
      type: "Индивидуальный",
      duration: "40 мин",
      available: true,
    },
  ];

  const weekDays = [
    { day: "Понедельник", hours: "09:00 - 20:00" },
    { day: "Вторник", hours: "09:00 - 20:00" },
    { day: "Среда", hours: "09:00 - 20:00" },
    { day: "Четверг", hours: "09:00 - 20:00" },
    { day: "Пятница", hours: "09:00 - 21:00" },
    { day: "Суббота", hours: "10:00 - 21:00" },
    { day: "Воскресенье", hours: "10:00 - 20:00" },
  ];

  return (
    <section className="py-16 bg-nature-cream section-padding">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-nature-brown mb-4">
            Расписание и режим работы
          </h2>
          <p className="text-lg text-gray-700">
            Выберите удобное время для посещения соляной пещеры
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Режим работы */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-nature-brown">
                📅 Режим работы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {weekDays.map((day, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                  >
                    <span className="font-medium text-gray-800">{day.day}</span>
                    <span className="text-nature-brown font-semibold">
                      {day.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-nature-beige rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Примечание:</strong> В праздничные дни режим работы
                  может изменяться. Уточняйте информацию по телефону.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Расписание на сегодня */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-nature-brown">
                🕐 Расписание на сегодня
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {schedule.map((slot, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg border ${
                      slot.type === "Обеденный перерыв"
                        ? "bg-gray-100 border-gray-200"
                        : slot.available
                          ? "bg-green-50 border-green-200"
                          : "bg-red-50 border-red-200"
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-nature-brown">
                          {slot.time}
                        </span>
                        <span className="text-sm text-gray-600">
                          ({slot.duration})
                        </span>
                      </div>
                      <div className="text-sm font-medium text-gray-800">
                        {slot.type}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {slot.type === "Обеденный перерыв" ? (
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                          Перерыв
                        </span>
                      ) : slot.available ? (
                        <Button
                          size="sm"
                          className="bg-nature-green hover:bg-nature-green/90 text-xs"
                        >
                          Записаться
                        </Button>
                      ) : (
                        <span className="text-xs bg-red-200 text-red-700 px-2 py-1 rounded">
                          Занято
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-nature-brown mb-4">
              Запись на процедуры
            </h3>
            <p className="text-gray-700 mb-6">
              Для записи на сеанс галотерапии звоните по телефону или
              используйте онлайн-форму
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-nature-brown hover:bg-nature-brown/90"
              >
                📞 Позвонить: +7 (XXX) XXX-XX-XX
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-nature-brown text-nature-brown hover:bg-nature-brown hover:text-white"
              >
                📝 Онлайн запись
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
