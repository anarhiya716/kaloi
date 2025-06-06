"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">RAZENKO</span>
            </Link>
          </div>
          
          {/* Десктопная навигация */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Главная
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              О нас
            </Link>
            <Link href="/vacancies" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Вакансии
            </Link>
            <Link href="/contacts" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Контакты
            </Link>
            <Link 
              href="/submit-resume" 
              className="inline-flex items-center justify-center py-2 px-4 text-base font-medium text-white rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Отправить резюме
            </Link>
          </div>

          {/* Мобильная навигация - кнопка */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Открыть меню</span>
              {/* Иконка гамбургер/закрыть */}
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
          <Link 
            href="/" 
            className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Главная
          </Link>
          <Link 
            href="/about" 
            className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            О нас
          </Link>
          <Link 
            href="/vacancies" 
            className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Вакансии
          </Link>
          <Link 
            href="/contacts" 
            className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Контакты
          </Link>
          <Link 
            href="/submit-resume" 
            className="flex items-center justify-center py-2 px-4 text-base font-medium text-white rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Отправить резюме
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
