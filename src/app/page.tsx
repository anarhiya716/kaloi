"use client";

import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import { Vacancy } from "@/components/vacancy";
import Feedbacks from "@/components/feedbacks";
import Stats from "@/components/stats";
import InteractiveCTA from "@/components/InteractiveCTA";
import BentoFAQ from "@/components/bentoFAQ";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") === "true") {
      setShowModal(true);

      const url = new URL(window.location.href);
      url.searchParams.delete("submitted");
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Feature />
      <Vacancy />
      <Feedbacks />
      <Stats />
      <InteractiveCTA />
      <BentoFAQ />
      <Footer />

      {/* Модальное окно */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">Спасибо!</h2>
            <p className="text-gray-700 mb-4">Ваше резюме успешно отправлено.</p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
