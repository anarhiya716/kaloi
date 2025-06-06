'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Здесь будут храниться вакансии
// В реальном приложении их нужно будет загружать с бэкенда
const initialVacancies = [
  {
    id: 1,
    title: 'Грузчик, разнорабочий',
    company: 'Производственная компания',
    location: 'Московская обл., г.о. Лыткарино, территория промзона Тураево, вл4',
    salary: '100 000 - 130 000 ₽',
    type: 'Полная занятость',
    description: 'Погрузка и разгрузка грузов, работа на складе. Возможность карьерного роста до оператора производственной линии.',
    fullDescription: `
      Требования к кандидату:
      • Физическая выносливость и готовность к выполнению физических работ
      • Знание основных правил и процедур безопасности при работе с грузами
      • Отличные коммуникативные навыки и способность работать в команде

      Обязанности:
      • Погрузка и разгрузка грузов с использованием соответствующего оборудования
      • Перемещение и укладка грузов на складе в соответствии с указаниями
      • Поддержание чистоты и порядка на складе и прилегающих территориях
      • Соблюдение правил и процедур безопасности при выполнении работ

      Условия работы:
      • График работы: 5/2 с 08:00 до 20:00
      • Оформление по трудовому договору
      • Совокупный доход: от 100 000 до 130 000 ₽
      • Возможность карьерного роста до оператора производственной линии с обучением
      • Предоставление спецодежды и СИЗ
      • Дружелюбная рабочая атмосфера

      Дополнительно:
      • Сфера деятельности: Производство непродовольственных потребительских товаров
      • Предоставляется: Униформа, Парковка
      • Подходит для кандидатов: Без опыта, Старше 45 лет, Студенты
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
