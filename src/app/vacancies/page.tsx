import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import VacanciesList from "@/components/vacanciesList";


export default function VacanciesPage() {
  return (
    <div>
      <Navbar />
      <div className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Доступные вакансии
          </h1>
          <VacanciesList />
        </div>
      </div>
      <Footer />
    </div>
  );
}