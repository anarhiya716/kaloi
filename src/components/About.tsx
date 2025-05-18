'use client'

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'

export function About() {
  const [counts, setCounts] = useState([0, 0, 0])
  const [isVisible, setIsVisible] = useState(false)
  const targetCounts = [5, 50, 1247000]
  const statsRef = useRef<HTMLDivElement>(null)
  const animationStarted = useRef(false)

  const stats = [
    { label: 'Лет опыта' },
    { label: 'Успешных проектов' },
    { label: 'Довольных клиентов' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationStarted.current) {
          setIsVisible(true)
          animationStarted.current = true
        }
      },
      {
        threshold: 0.2
      }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const increment = targetCounts.map(target => 
      Math.ceil(target / (duration / 10))
    )

    const intervals = targetCounts.map((target, index) => {
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev]
          if(newCounts[index] < target) {
            newCounts[index] = Math.min(
              newCounts[index] + increment[index], 
              target
            )
          }
          return newCounts
        })
      }, 10)
    })

    return () => intervals.forEach(clearInterval)
  }, [isVisible])

  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="relative z-10 w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="py-24 sm:py-32">
            <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                  <Image 
                    className="rounded-xl object-cover shadow-lg" 
                    src="https://pagedone.io/asset/uploads/1717741205.png" 
                    alt="about Us image"
                    width={300}
                    height={400}
                  />
                </div>
                <div className="sm:ml-0 ml-auto">
                  <Image 
                    className="rounded-xl object-cover shadow-lg" 
                    src="https://pagedone.io/asset/uploads/1717741215.png"
                    alt="about Us image"
                    width={300}
                    height={400}
                  />
                </div>
              </div>
              <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-gray-900 text-4xl font-bold leading-normal lg:text-start text-center">
                      Находим лучших специалистов для вашего бизнеса
                    </h2>
                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      KALOI - ваш надежный партнер в поиске талантов. Мы соединяем амбициозные компании 
                      с профессионалами, которые готовы внести свой вклад в их успех. Наш опыт и 
                      инновационный подход делают процесс подбора персонала эффективным и точным.
                    </p>
                  </div>
                  <div 
                    ref={statsRef}
                    className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex"
                  >
                    {stats.map((stat, index) => (
                      <div key={index} className="flex-col justify-start items-start inline-flex">
                        <div className="text-4xl font-bold text-indigo-600 mb-2">
                          {counts[index].toLocaleString()}+
                        </div>
                        <div className="text-gray-500 text-base font-normal">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">О компании KALOI</h2>
          <p className="text-lg text-gray-500">
            KALOI - ведущая компания по подбору персонала, которая помогает бизнесу находить и привлекать лучших специалистов на рынке труда. Мы создаем прочные связи между работодателями и талантливыми профессионалами.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <figure className="border-l border-indigo-600 pl-8">
              <blockquote className="text-xl font-semibold leading-8 text-gray-900">
                <p>Мы не просто находим сотрудников - мы помогаем компаниям построить команду мечты, а специалистам - найти работу, где они смогут полностью реализовать свой потенциал.</p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <div className="text-sm leading-6">
                </div>
              </figcaption>
            </figure>
            <h2 className="mt-3 text-2xl font-bold text-gray-900">Наша экспертиза</h2>
            <p className="mt-6 text-gray-500">
              Команда KALOI состоит из опытных рекрутеров и HR-консультантов с глубоким пониманием различных индустрий. Мы постоянно следим за трендами рынка труда, совершенствуем методологии оценки и развиваем наши компетенции, чтобы предоставлять клиентам сервис высочайшего качества.
            </p>
          </div>

          <div className="max-w-xl text-base leading-7 text-gray-500 lg:col-span-7">
            <p>
              С 2025 года KALOI помогает компаниям формировать сильные команды, а специалистам - находить работу своей мечты. Мы разработали уникальную методологию оценки кандидатов, которая позволяет не только оценивать профессиональные навыки, но и определять потенциал для роста и развития.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Наши услуги</h2>
                <ul className="mt-8 space-y-8 text-gray-500">
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-indigo-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span><strong className="font-semibold text-gray-900">Поиск и подбор персонала</strong> — Комплексный подход к поиску специалистов всех уровней, от младших специалистов до топ-менеджеров.</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-indigo-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span><strong className="font-semibold text-gray-900">Оценка кандидатов</strong> — Профессиональная оценка компетенций, soft skills и потенциала для роста.</span>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-1 h-5 w-5 flex-none text-indigo-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span><strong className="font-semibold text-gray-900">HR-консалтинг</strong> — Консультации по построению HR-бренда, системы мотивации и развития персонала.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">Наши принципы</h2>
                <p className="mt-6">
                  Мы руководствуемся следующими принципами в нашей работе:
                </p>
                <div className="mt-8 space-y-6 text-gray-500">
                  <p>
                    • Индивидуальный подход к каждому клиенту<br />
                    • Глубокое понимание рынка труда<br />
                    • Этичность и конфиденциальность<br />
                    • Гарантия качества подбора<br />
                    • Долгосрочное партнерство
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;