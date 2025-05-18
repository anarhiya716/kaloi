"use client";

import { useState } from 'react';

export default function SubmitResume() {
  const [formData, setFormData] = useState({
    name: '',
    telegram: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    file: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        file: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formPayload = new FormData();
      formPayload.append('name', formData.name);
      formPayload.append('telegram', formData.telegram);
      formPayload.append('phone', formData.phone);
      formPayload.append('position', formData.position);
      formPayload.append('experience', formData.experience);
      formPayload.append('message', formData.message);

      const response = await fetch('/api/submit-resume', {
        method: 'POST',
        body: formPayload,
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Ошибка при отправке резюме:', error); // 🔍 лог
        throw new Error(error.error || 'Ошибка при отправке');
      }      

      setSubmitStatus({
        type: 'success',
        message: 'Резюме успешно отправлено! Мы свяжемся с вами в ближайшее время.'
      });

      // Очищаем форму после успешной отправки
      setFormData({
        name: '',
        telegram: '',
        phone: '',
        position: '',
        experience: '',
        message: '',
        file: null
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Произошла ошибка при отправке резюме. Пожалуйста, попробуйте позже.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Отправить резюме</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="info-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Почему стоит работать с нами</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-indigo-600 mb-2">Быстрый отклик</h3>
                  <p className="text-gray-600">
                    Мы рассматриваем все резюме в течение 24 часов и связываемся с подходящими кандидатами
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-indigo-600 mb-2">Лучшие работодатели</h3>
                  <p className="text-gray-600">
                    Мы сотрудничаем только с проверенными компаниями, предлагающими достойные условия
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-indigo-600 mb-2">Поддержка на всех этапах</h3>
                  <p className="text-gray-600">
                    Помогаем подготовиться к собеседованиям и консультируем по всем вопросам
                  </p>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Заполните форму</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 text-gray-900 placeholder:text-gray-400"
                    placeholder="Ваше полное имя"
                  />
                </div>

                <div>
                  <label htmlFor="telegram" className="block text-sm font-medium text-gray-700 mb-2">Telegram</label>
                  <input
                    type="text"
                    id="telegram"
                    name="telegram"
                    required
                    value={formData.telegram}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 text-gray-900 placeholder:text-gray-400"
                    placeholder="@username"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 text-gray-900 placeholder:text-gray-400"
                    placeholder="+7 (999) 999-99-99"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">Желаемая работа</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 text-gray-900 placeholder:text-gray-400"
                    placeholder="Например: Кассир, Официант, Водитель"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">Опыт работы</label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 text-gray-900 placeholder:text-gray-400"
                  >
                    <option value="">Выберите опыт работы</option>
                    <option value="Нет опыта">Нет опыта</option>
                    <option value="До 1 года">До 1 года</option>
                    <option value="1-3 года">1-3 года</option>
                    <option value="3-5 лет">3-5 лет</option>
                    <option value="Более 5 лет">Более 5 лет</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Сопроводительное письмо</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 text-gray-900 placeholder:text-gray-400"
                    placeholder="Расскажите немного о себе и своих ожиданиях"
                  ></textarea>
                </div>

                {submitStatus.type && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full md:w-auto px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить резюме'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}