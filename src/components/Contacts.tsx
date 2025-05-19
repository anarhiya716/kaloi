'use client'

import { useState } from 'react'

export function Contacts() {
  const [form, setForm] = useState({ name: '', telegram: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)

    try {
      const response = await fetch('/api/submit-resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
        setForm({ name: '', telegram: '', message: '' })
      } else {
        alert(data.error || 'Ошибка отправки')
      }
    } catch (error) {
      alert('Произошла ошибка при отправке формы.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Контакты</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="contact-info">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Наши контакты</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-indigo-600 mb-2">Адрес</h3>
                  <p className="text-gray-600">
                    Юридический адрес: 125363, Москва, Cходненская ул, дом 7б, строение 3, помещение 5/1
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-indigo-600 mb-2">Телефон</h3>
                  <p className="text-gray-600">+7 (996) 555-46-20</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-indigo-600 mb-2">Email</h3>
                  <p className="text-gray-600">shvotak.tanya@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Напишите нам</h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 text-gray-900 placeholder:text-gray-400"
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="telegram" className="block text-sm font-medium text-gray-700 mb-2">Telegram</label>
                  <input
                    type="text"
                    id="telegram"
                    value={form.telegram}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 text-gray-900 placeholder:text-gray-400"
                    placeholder="@username"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 text-gray-900 placeholder:text-gray-400"
                    placeholder="Ваше сообщение"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 disabled:opacity-50"
                >
                  {loading ? 'Отправка...' : 'Отправить'}
                </button>
                {success && (
                  <p className="text-green-600 font-medium pt-2">✅ Сообщение успешно отправлено!</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
