"use client";

import { useState, useEffect } from 'react';

const allVacancies = [
  { id: 1, company: 'Сбербанк', title: 'Менеджер', details: 'от 80 000 ₽' },
  { id: 2, company: 'Яндекс', title: 'Работник ПВЗ', details: 'от 35 000 ₽' },
  { id: 3, company: 'Тинькофф', title: 'HR Менеджер', details: 'от 70 000 ₽' },
  { id: 4, company: 'Wildberries', title: 'Работник ПВЗ', details: 'от 40 000 ₽' },
  { id: 5, company: 'Ozon', title: 'Работник ПВЗ', details: 'от 35 000 ₽' },
  { id: 6, company: 'Газпром', title: 'Ведущий инженер', details: 'от 90 000 ₽' },
  { id: 7, company: 'Роснефть', title: 'Заправщик', details: 'от 60 000 ₽' },
  { id: 8, company: 'Дикси', title: 'Кассир', details: 'от 45 000 ₽' },
  { id: 9, company: 'Пятерочка', title: 'Кассир', details: 'от 45 000 ₽' },
  { id: 10, company: 'DNS', title: 'Продавец консультант', details: 'от 55 000 ₽' },
];

const getRandomVacancy = (exclude: number[]) => {
  const available = allVacancies.filter(v => !exclude.includes(v.id));
  return available[Math.floor(Math.random() * available.length)];
};

export const Vacancy = () => {
  const [displayedVacancies, setDisplayedVacancies] = useState<Array<{
    vacancy: typeof allVacancies[0],
    timer: number,
    pulsing: boolean
  }>>([
    { vacancy: allVacancies[0], timer: 30, pulsing: false },
    { vacancy: allVacancies[1], timer: 20, pulsing: false },
    { vacancy: allVacancies[2], timer: 10, pulsing: false }
  ]);

  useEffect(() => {
    const intervals = displayedVacancies.map((_, index) => {
      return setInterval(() => {
        setDisplayedVacancies(prev => {
          const newVacancies = [...prev];
          const currentVacancy = newVacancies[index];
          
          if (currentVacancy.timer <= 0) {
            const usedIds = newVacancies.map(v => v.vacancy.id);
            const newVacancy = getRandomVacancy(usedIds);
            newVacancies[index] = {
              vacancy: newVacancy,
              timer: 30,
              pulsing: true
            };
            
            setTimeout(() => {
              setDisplayedVacancies(current => {
                const updated = [...current];
                updated[index] = { ...updated[index], pulsing: false };
                return updated;
              });
            }, 1000);
          } else {
            newVacancies[index] = {
              ...currentVacancy,
              timer: currentVacancy.timer - 1
            };
          }
          
          return newVacancies;
        });
      }, 1000);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const formatTime = (seconds: number) => {
    return `0:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Сейчас ищут через Kaloi:
        </h2>
        
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {displayedVacancies.map(({ vacancy, timer, pulsing }, index) => (
            <div
              key={`${vacancy.id}-${index}`}
              className={`relative rounded-2xl bg-white p-6 shadow-xl ${
                pulsing ? 'animate-pulse' : ''
              }`}
            >
              <div className="absolute right-3 top-3 text-sm text-gray-500">
                Обновление через {formatTime(timer)}
              </div>

              <div className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    [{vacancy.company}] {vacancy.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{vacancy.details}</p>
                </div>

                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full bg-indigo-600 transition-all duration-1000"
                    style={{ width: `${(timer / 30) * 100}%` }}
                  />
                </div>
              </div>

              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vacancy;