'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Здесь будут храниться вакансии
// В реальном приложении их нужно будет загружать с бэкенда
const initialVacancies = [
  {
    id: 1,
    title: 'Менеджер по продажам',
    company: 'Производственная компания',
    location: 'Удалённая работа',
    salary: '150 000 - 200 000 ₽',
    type: 'Гибкий',
    description: 'Менеджер по продажам',
    fullDescription: `
      Кого мы ищем:

Активного и целеустремлённого человека, который хочет зарабатывать и развиваться в сфере продаж. Если ты общительный, готов учиться новому и не боишься ответственности — мы ждём тебя в нашей команде!

⸻

Что нужно будет делать:
 • Общаться с потенциальными клиентами (онлайн: мессенджеры, звонки);
 • Презентовать продукт или услугу (мы обучим как);
 • Сопровождать клиента до сделки;
 • Вести простую отчётность.

⸻

Что мы предлагаем:
 • Доход от 150 000 до 200 000 руб. + высокий % от сделок;
 • Удалённую работу из любой точки мира;
 • Гибкий график — работай, когда удобно;
 • Пошаговое обучение с нуля (в том числе для новичков);
 • Поддержку на всех этапах.

⸻

Важно:
 • Возраст — от 18 лет;
 • Уверенный интернет и наличие ПК или ноутбука;
 • Готовность обучаться и выполнять задачи.

⸻

Хочешь попробовать себя в продажах и получать достойный доход?
Откликайся прямо сейчас — начнём обучение уже сегодня!
    `
  },

   {
    id: 1,
    title: 'SMM-специалист',
    company: 'Производственная компания',
    location: 'Удалённая работа',
    salary: '90 000 ₽',
    type: 'Гибкий',
    description: 'SMM-специалист',
    fullDescription: `
      О нас:
Мы — Разенко, занимаемся [1-2 фразы про сферу деятельности: например, онлайн- услуги для бизнеса и т.д. Работаем с сильным продуктом и сейчас ищем в команду креативного и самостоятельного SMM-специалиста, который умеет выстраивать коммуникацию с аудиторией и делать классный контент.

⸻

Что нужно будет делать:
 • Разрабатывать и реализовывать SMM-стратегию (Instagram, VK, Telegram, возможно TikTok)
 • Вести и развивать аккаунты компании: публикации, сторис, вовлеченность
 • Писать тексты: от постов до коротких подписей
 • Работать с визуалом (в команде с дизайнером или самостоятельно — обсудим)
 • Отслеживать аналитику и оптимизировать контент
 • Работать с комментариями и сообщениями (при необходимости)

⸻

Что мы ждём от тебя:
 • Опыт в SMM от 1 года
 • Понимание, как работает органический трафик и вовлечённость
 • Умение адаптировать стиль под разные аудитории
 • Навыки написания живых, цепляющих текстов
 • Ответственность, инициативность и самостоятельность

Будет плюсом:
 • Опыт работы с таргетированной рекламой
 • Навыки в дизайне (Canva, Figma и пр.)
 • Умение снимать и монтировать Reels / Shorts

⸻

Что предлагаем:
 • Фикс — 90 000 ₽ в месяц
 • Удалёнка и гибкий график
 • Проекты, где есть свобода креатива
 • Долгосрочное сотрудничество
 • Поддержка и развитие внутри команды
    `
  },

  {
    id: 1,
    title: 'Бизнес-ассистент / Личный помощник',
    company: 'Производственная компания',
    location: 'Удалённая работа',
    salary: '120 000 ₽ + премии',
    type: 'Гибкий',
    description: 'Бизнес-ассистент / Личный помощник',
    fullDescription: `
     О позиции:
Ищу надёжного и проактивного бизнес-ассистента, который поможет мне разгрузить рутину, организовать процессы и держать всё под контролем. Работа в динамичном ритме, с задачами из разных сфер: бизнес, коммуникации, частично — личные вопросы. Идеально подойдёт человек, который умеет быть на шаг впереди, хорошо коммуницирует и не боится ответственности.

⸻

Задачи:
 • Ведение календаря, организация встреч, напоминания
 • Коммуникации с партнёрами и клиентами (почта, мессенджеры)
 • Мониторинг задач, контроль дедлайнов, отчётность
 • Работа с документами, таблицами, презентациями
 • Помощь в подготовке мероприятий, поездок, бронирований
 • Решение нестандартных, «разноплановых» задач по ходу

⸻

Что важно:
 • Опыт работы ассистентом, менеджером проекта или на аналогичной позиции от 1 года
 • Грамотная речь и письменный русский
 • Умение быстро ориентироваться в новой информации
 • Высокая степень самоорганизации и ответственности
 • Конфиденциальность, инициативность и гибкость в мышлении

Будет плюсом:
 • Знание английского
 • Навыки в Notion, Trello, Google Docs
 • Опыт в деловой переписке, переговорах или админке бизнеса

⸻

Что предлагаю:
 • Фикс — 120 000 ₽ в месяц
 • Ежемесячные премии за инициативность и результат
 • Гибкий график, работа по результату, а не по часам
 • Удалёнка, но с возможностью редких личных встреч (по договорённости)
 • Рост задач — рост дохода
    `
  },
  
]

export default function VacanciesList() {
  const [vacancies, setVacancies] = useState(initialVacancies)
  const [filter, setFilter] = useState('')
  const [selectedVacancy, setSelectedVacancy] = useState<typeof initialVacancies[0] | null>(null)

  const filteredVacancies = vacancies.filter(vacancy =>
    vacancy.title.toLowerCase().includes(filter.toLowerCase()) ||
    vacancy.company.toLowerCase().includes(filter.toLowerCase())
  )

  const router = useRouter()

  return (
    <div className="relative">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Поиск по названию или компании..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-black focus:placeholder:text-transparent"
        />
      </div>

      <div className="grid gap-6">
        {filteredVacancies.map(vacancy => (
          <div 
            key={vacancy.id}
            onClick={() => setSelectedVacancy(vacancy)}
            className="bg-white p-6 rounded-lg border border-gray-200 hover:border-indigo-500 transition-all duration-200 cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  {vacancy.title}
                </h2>
                <p className="text-gray-600">{vacancy.company}</p>
              </div>
              <span className="text-indigo-600 font-medium">
                {vacancy.salary}
              </span>
            </div>

            <div className="flex gap-4 mb-4">
              <span className="text-sm text-gray-500">📍 {vacancy.location}</span>
              <span className="text-sm text-gray-500">💼 {vacancy.type}</span>
            </div>

            <p className="text-gray-700 mb-4">
              {vacancy.description}
            </p>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/submit-resume?id=${vacancy.id}&title=${encodeURIComponent(vacancy.title)}`);
              }}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Откликнуться
            </button>
          </div>
        ))}
      </div>

      {/* Модальное окно */}
      {selectedVacancy && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center p-4 z-50">
          <div 
            className="bg-white/95 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 rounded-t-xl backdrop-blur-md bg-white/90">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedVacancy.title}
                  </h2>
                  <p className="text-lg text-gray-600">{selectedVacancy.company}</p>
                </div>
                <button
                  onClick={() => setSelectedVacancy(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex gap-4 mb-6">
                <span className="text-sm text-gray-500">📍 {selectedVacancy.location}</span>
                <span className="text-sm text-gray-500">💼 {selectedVacancy.type}</span>
                <span className="text-sm font-medium text-indigo-600">{selectedVacancy.salary}</span>
              </div>

              <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-gray-700">
                  {selectedVacancy.fullDescription}
                </pre>
              </div>

              <div className="mt-8 flex justify-end">
                <button 
                  onClick={(e) => {
                    router.push(`/submit-resume?id=${selectedVacancy.id}&title=${encodeURIComponent(selectedVacancy.title)}`);
                  }}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Откликнуться на вакансию
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 
