'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function InteractiveCTA() {
  const router = useRouter()
  const [salary, setSalary] = useState(50)
  const [boostedSalary, setBoostedSalary] = useState(0)
  const [showGraph, setShowGraph] = useState(false)
  const graphRef = useRef<HTMLDivElement>(null)

  // Рассчитываем увеличенную зарплату
  const calculateBoostedSalary = (base: number) => {
    return Math.round(base * (1.5 + Math.random() * 0.5)) * 1000
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSalary = parseInt(e.target.value)
    setSalary(newSalary)
    setBoostedSalary(calculateBoostedSalary(newSalary))
    
    // Показываем график только при первом изменении
    if (!showGraph) {
      setShowGraph(true)
    }
  }

  // Анимация появления графика
  useEffect(() => {
    if (showGraph && graphRef.current) {
      const elements = graphRef.current.querySelectorAll('div > div')
      elements.forEach((el, index) => {
        const element = el as HTMLElement
        element.style.transform = 'translateY(20px)'
        element.style.opacity = '0'
        
        setTimeout(() => {
          element.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out'
          element.style.transform = 'translateY(0)'
          element.style.opacity = '1'
        }, index * 100)
      })
    }
  }, [showGraph, salary])

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
            На сколько вы недооценены? <span className="text-indigo-600">→</span> Передвиньте ползунок
          </h2>
        </div>

        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Текущая зарплата</span>
            <span className="font-medium text-gray-900">{salary} тыс. ₽</span>
          </div>
          
          <input
            type="range"
            min="30"
            max="300"
            value={salary}
            onChange={handleSliderChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>30k</span>
            <span>300k</span>
          </div>
        </div>

        {showGraph && (
          <div ref={graphRef} className="mb-8">
            <div className="mb-4 text-xl font-medium text-gray-900 text-center">
              С Kaloi вы могли бы получать <span className="text-indigo-600 font-bold">₽{boostedSalary.toLocaleString()}</span>
            </div>
            
            <div className="flex items-end h-48 gap-8 mb-4 max-w-2xl mx-auto">
              <div className="flex-1 flex flex-col items-center">
                <div className="mb-2 font-medium text-gray-900">
                  {salary} тыс. ₽
                </div>
                <div 
                  className="w-full bg-gray-200 transition-all duration-1000 ease-out"
                  style={{ 
                    height: `${(salary / 300) * 100}%`
                  }}
                />
                <span className="mt-2 text-sm text-gray-600">Сейчас</span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="mb-2 font-medium text-indigo-600">
                  {Math.round(boostedSalary/1000)} тыс. ₽
                </div>
                <div 
                  className="w-full bg-indigo-600 transition-all duration-1000 ease-out"
                  style={{ 
                    height: `${(boostedSalary/1000 / 300) * 100}%`
                  }}
                />
                <span className="mt-2 text-sm text-indigo-600">С Kaloi</span>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-md mx-auto">
          <button
            onClick={() => router.push('/vacancies')}
            className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300"
          >
            Забрать свою новую зарплату
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  )
}