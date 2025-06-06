import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RAZENKO</h3>
            <p className="text-gray-300 mb-4">Открываем двери в топовые компании России</p>
            <p className="text-gray-300">© 2025 RAZENKO. Все права защищены.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Главная</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">О нас</Link></li>
              <li><Link href="/vacancies" className="text-gray-300 hover:text-white transition-colors">Вакансии</Link></li>
              <li><Link href="/contacts" className="text-gray-300 hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <p className="text-gray-300 mb-4">+7 (996) 555-46-20</p>
            <p className="text-gray-300">ООО "Разенко.инфо"</p>
            <p className="text-gray-300">ИНН: 240800235475</p>
            <p className="text-gray-300">ОГРН: 325246800071755</p>
            <p className="text-gray-300">Юридический адрес: 125363, Москва, Cходненская ул, дом 7б, строение 3, помещение 5/1</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
