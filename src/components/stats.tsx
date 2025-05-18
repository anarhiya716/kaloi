'use client'

import { useState, useEffect, useRef } from 'react'

export default function Stats() {
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const [isVisible, setIsVisible] = useState(false)
  const targetCounts = [210, 975, 1346, 98]
  const containerRef = useRef<HTMLDivElement>(null)
  const animationStarted = useRef(false)
  
  const stats = [
    { label: 'Компаний-партнеров' },
    { label: 'Активных соискателей' },
    { label: 'Закрытых вакансий' },
    { label: 'Вакансий в поиске' },
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
        threshold: 0.2 // Запускаем анимацию когда 20% компонента видно
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
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
    <section className="py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          ref={containerRef}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Наша статистика
              </h2>
              <p className="text-lg text-gray-600">
                Мы помогаем раскрыть потенциал вашей карьеры и найти работу мечты
              </p>
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-4xl font-bold text-indigo-600 mb-2">
                      {counts[index]}+
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}