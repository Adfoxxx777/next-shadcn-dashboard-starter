import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// В реальном приложении данные будут загружаться из API
const mockProduct = {
  id: 1,
  title: "Смартфон iPhone 13",
  price: 29999,
  description: "Apple iPhone 13 с дисплеем 6,1 дюйма, процессором A15 Bionic и двойной камерой.",
  specifications: [
    { name: "Экран", value: "6,1 дюйма, OLED" },
    { name: "Процессор", value: "A15 Bionic" },
    { name: "Память", value: "128 ГБ" },
    { name: "Камера", value: "12 Мп + 12 Мп" },
  ],
  images: [
    "/images/products/iphone-1.jpg",
    "/images/products/iphone-2.jpg",
    "/images/products/iphone-3.jpg",
  ]
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Галерея изображений */}
        <Card className="p-4">
          <div className="aspect-square bg-gray-100 rounded-lg mb-4">
            {/* Основное изображение */}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {mockProduct.images.map((image, index) => (
              <div key={index} className="aspect-square bg-gray-100 rounded cursor-pointer hover:opacity-80">
                {/* Миниатюры */}
              </div>
            ))}
          </div>
        </Card>

        {/* Информация о товаре */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{mockProduct.title}</h1>
            <p className="text-2xl font-bold text-blue-600">{mockProduct.price} ₴</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Описание</h2>
            <p className="text-gray-600">{mockProduct.description}</p>
          </div>

          <Card className="p-4">
            <h2 className="text-xl font-semibold mb-4">Характеристики</h2>
            <div className="space-y-2">
              {mockProduct.specifications.map((spec, index) => (
                <div key={index} className="flex justify-between py-2 border-b last:border-0">
                  <span className="text-gray-600">{spec.name}</span>
                  <span className="font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </Card>

          <Button size="lg" className="w-full">Добавить в корзину</Button>
        </div>
      </div>
    </div>
  )
}
