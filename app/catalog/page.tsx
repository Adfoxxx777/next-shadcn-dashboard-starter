import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const categories = [
  {
    title: "Компьютеры и ноутбуки",
    items: ["Ноутбуки", "Компьютеры", "Мониторы", "Комплектующие"]
  },
  {
    title: "Смартфоны и планшеты",
    items: ["Телефоны", "Планшеты", "Аксессуары", "Чехлы"]
  },
  {
    title: "Бытовая техника",
    items: ["Холодильники", "Стиральные машины", "Пылесосы", "Микроволновки"]
  },
  {
    title: "ТВ и Развлечения",
    items: ["Телевизоры", "Приставки", "Проекторы", "Аудиотехника"]
  }
]

export default function CatalogPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Каталог товаров</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card key={category.title} className="p-6">
            <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
            <div className="space-y-2">
              {category.items.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="w-full justify-start hover:bg-gray-100"
                >
                  {item}
                </Button>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </>
  )
}
