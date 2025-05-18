'use client'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    stars: 5,
    text: "Нашел работу за 3 дня! Очень удобный сервис, все прозрачно и честно. Рекомендую всем, кто ищет работу.",
    author: "Александр С.",
    role: "Кассир",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    stars: 4,
    text: "Приятно удивлена скоростью отклика работодателей. За неделю получила три оффера, выбрала лучший.",
    author: "Мария К.",
    role: "HR-специалист",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    stars: 5,
    text: "После года поисков работы через другие сервисы, здесь нашел позицию мечты за 5 дней.",
    author: "Дмитрий В.",
    role: "Администратор фитнес-клуба",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    stars: 3,
    text: "Отличная платформа для поиска работы. Всё хорошо, но сам работадатель попался не очень.",
    author: "Елена П.",
    role: "Сборщик заказов",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    stars: 4,
    text: "Понравилось, что можно сразу видеть актуальные вакансии без спама и рекламы. Нашел работу за 4 дня.",
    author: "Игорь М.",
    role: "Ведущий инженер",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    stars: 5,
    text: "Очень быстро и удобно! Всего за 2 дня вышла на работу!",
    author: "Анна Р.",
    role: "Сборщик заказов",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    stars: 4,
    text: "Удобный интерфейс и быстрый отклик поддержки. Особенно порадовало, что все вакансии реальные и актуальные.",
    author: "Сергей Л.",
    role: "Java разработчик",
    image: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    stars: 5,
    text: "За месяц работы с сервисом получила больше релевантных предложений, чем за полгода на других платформах.",
    author: "Ольга Н.",
    role: "Менеджер по продажам",
    image: "https://randomuser.me/api/portraits/women/8.jpg"
  }
];

export default function Feedbacks() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setSlidesPerView(1)
      else if (window.innerWidth < 1024) setSlidesPerView(2)
      else setSlidesPerView(3)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getVisibleSlides = () => {
    const start = currentSlide % testimonials.length
    return Array.from({ length: slidesPerView }, (_, i) => 
      (start + i) % testimonials.length
    )
  }

  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col items-center justify-between sm:flex-row max-sm:gap-8">
          <h2 className="text-4xl font-bold text-gray-900">Отзывы</h2>
          
          <div className="flex items-center gap-8">
            <button
              onClick={prevSlide}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-indigo-600 transition-all duration-500 hover:bg-indigo-600"
            >
              <svg 
                className="h-6 w-6 text-indigo-600 group-hover:text-white" 
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-indigo-600 transition-all duration-500 hover:bg-indigo-600"
            >
              <svg 
                className="h-6 w-6 text-indigo-600 group-hover:text-white" 
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex overflow-hidden">
          <div className="flex w-full transition-transform duration-500 ease-in-out"
               style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex-shrink-0 p-4 transition-all duration-300 ${
                  getVisibleSlides().includes(index)
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-90 pointer-events-none'
                }`}
                style={{ width: `${100 / slidesPerView}%` }}
              >
                <div className={`group h-full border bg-white p-6 transition-all duration-300 ${
                  currentSlide === index 
                    ? 'border-indigo-600' 
                    : 'border-gray-300 hover:border-indigo-600'
                } rounded-2xl`}>
                  <div className={`mb-6 flex gap-2 text-amber-500 transition-colors duration-300 ${
                    currentSlide === index ? 'text-indigo-600' : 'group-hover:text-indigo-600'
                  }`}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < testimonial.stars} />
                    ))}
                  </div>
                  
                  <div className="min-h-[120px] mb-6">
                    <p className="text-lg leading-7 text-gray-500 transition-colors duration-300 group-hover:text-gray-800">
                      {testimonial.text}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-5 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h5 className={`font-medium transition-colors duration-300 ${
                        currentSlide === index 
                          ? 'text-indigo-600' 
                          : 'text-gray-900 group-hover:text-indigo-600'
                      }`}>
                        {testimonial.author}
                      </h5>
                      <span className="text-sm text-gray-500">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg 
    className={`h-5 w-5 ${filled ? 'text-amber-500' : 'text-gray-300'}`} 
    viewBox="0 0 18 17" 
    fill="currentColor"
  >
    <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"/>
  </svg>
)