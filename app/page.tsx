import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero секция */}
      <section className="mb-12">
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <img 
            src="/hero-image.jpg" 
            alt="Коллекция нижнего белья" 
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
            <div className="text-white p-12">
              <h1 className="text-5xl font-bold mb-4">Идеальное белье для каждой</h1>
              <p className="text-xl mb-6">Подберите свой размер с нашим удобным калькулятором</p>
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Подобрать размер
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Категории */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-2">Бюстгальтеры</h2>
          <p className="text-gray-600 mb-4">Широкий выбор моделей для любого случая</p>
          <Button variant="outline">Смотреть все</Button>
        </Card>
        {/* Добавьте аналогичные карточки для других категорий */}
      </section>
    </div>
  );
}
