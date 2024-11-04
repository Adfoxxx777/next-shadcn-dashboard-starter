import { Card } from "@/components/ui/card"
import { 
  EnvelopeClosedIcon,
  MobileIcon,
  HomeIcon,
  ClockIcon
} from "@radix-ui/react-icons"

export default function ContactsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Контакты</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Наши контакты</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MobileIcon className="h-5 w-5" />
              <div>
                <p className="font-medium">Телефон:</p>
                <a href="tel:+380996236655" className="text-blue-600 hover:text-blue-800">
                  (099) 623-66-55
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <EnvelopeClosedIcon className="h-5 w-5" />
              <div>
                <p className="font-medium">Email:</p>
                <a href="mailto:sale@admart.ua" className="text-blue-600 hover:text-blue-800">
                  sale@admart.ua
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <HomeIcon className="h-5 w-5" />
              <div>
                <p className="font-medium">Адрес:</p>
                <p>г. Киев, ул. Крещатик, 1</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ClockIcon className="h-5 w-5" />
              <div>
                <p className="font-medium">Режим работы:</p>
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб-Вс: выходной</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Карта проезда</h2>
          <div className="aspect-video bg-gray-100 rounded-lg">
            {/* Здесь можно добавить карту Google Maps */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Карта
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
