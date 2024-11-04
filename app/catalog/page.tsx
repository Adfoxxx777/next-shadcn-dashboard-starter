import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

const mockProducts = [
  {
    id: 1,
    title: "Смартфон iPhone 13",
    price: 29999,
    image: "/images/products/iphone.jpg",
  },
  {
    id: 2,
    title: "Ноутбук MacBook Pro",
    price: 49999,
    image: "/images/products/macbook.jpg",
  },
  // Можно добавить больше товаров
]

export default function CatalogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Фильтры */}
        <div className="w-full md:w-64 space-y-6">
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Цена</h3>
            <div className="flex gap-2">
              <Input type="number" placeholder="От" />
              <Input type="number" placeholder="До" />
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-4">Категории</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="phones" />
                <label htmlFor="phones">Телефоны</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="laptops" />
                <label htmlFor="laptops">Ноутбуки</label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="tablets" />
                <label htmlFor="tablets">Планшеты</label>
              </div>
            </div>
          </Card>
        </div>

        {/* Список товаров */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gray-100">
                    {/* Здесь будет изображение товара */}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{product.title}</h3>
                    <p className="text-lg font-bold mt-2">{product.price} ₴</p>
                    <Button className="w-full mt-4">Подробнее</Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
