import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-700 to-blue-700 text-white">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Широкоформатная печать и мобильные стенды
          </h1>
          <p className="text-xl mb-8">
            Качественная печать любых форматов для вашего бизнеса
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100">
            Заказать печать
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">Широкоформатная печать</h3>
              <p className="text-gray-600">Баннеры, плакаты, постеры любых размеров с высоким качеством печати</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">Мобильные стенды</h3>
              <p className="text-gray-600">Roll-Up, X-баннеры и другие мобильные конструкции для выставок и презентаций</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">Интерьерная печать</h3>
              <p className="text-gray-600">Высококачественная печать для оформления интерьеров и создания рекламных материалов</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
