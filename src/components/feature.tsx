import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-6">
            Мы - не просто команда, мы движение
          </h2>
          <p className="text-lg font-normal text-gray-500 max-w-2xl mx-auto">
            Работа в RAZENKO - это свобода выбирать, где и как ты работаешь.
            Удалёнка, гибкий график, и реальные рузультаты. Мы даём тебе инструменты,
            ты - результат.
          </p>
        </div>

        {/* Карточки преимуществ */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Карточка 1: Анализ профиля */}
          <div className="group relative bg-gray-50 rounded-2xl p-8 transition-all duration-500 hover:bg-indigo-600 hover:shadow-xl hover:-translate-y-2">
            <div className="bg-indigo-100 rounded-full flex justify-center items-center mb-6 w-16 h-16 group-hover:bg-white">
              <svg className="w-8 h-8 text-indigo-600 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white">
              Анализ профиля
            </h3>
            <p className="text-gray-600 group-hover:text-white">
              Мы оцениваем ваш потенциал, а не шаблонное резюме
            </p>
          </div>

          {/* Карточка 2: Доступ к скрытому рынку */}
          <div className="group relative bg-gray-50 rounded-2xl p-8 transition-all duration-500 hover:bg-indigo-600 hover:shadow-xl hover:-translate-y-2">
            <div className="bg-indigo-100 rounded-full flex justify-center items-center mb-6 w-16 h-16 group-hover:bg-white">
              <svg className="w-8 h-8 text-indigo-600 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white">
              Вся информация конфиденциальна
            </h3>
            <p className="text-gray-600 group-hover:text-white">
              Прямые контакты HR-менеджерами
            </p>
          </div>

          {/* Карточка 3: Карьерный адвокат */}
          <div className="group relative bg-gray-50 rounded-2xl p-8 transition-all duration-500 hover:bg-indigo-600 hover:shadow-xl hover:-translate-y-2">
            <div className="bg-indigo-100 rounded-full flex justify-center items-center mb-6 w-16 h-16 group-hover:bg-white">
              <svg className="w-8 h-8 text-indigo-600 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white">
              Карьерный адвокат
            </h3>
            <p className="text-gray-600 group-hover:text-white">
              Мы заранее проводим переговоры о зарплате за вас
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
