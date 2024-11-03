import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ContactsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Контакты</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Наши контакты</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#00a046]" />
              <div>
                <p className="font-medium">Телефон</p>
                <a href="tel:+380441111111" className="text-[#00a046] hover:underline">
                  044 111 11 11
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#00a046]" />
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:support@printstand.com" className="text-[#00a046] hover:underline">
                  support@printstand.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-[#00a046]" />
              <div>
                <p className="font-medium">Режим работы</p>
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб-Вс: 10:00 - 17:00</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Наш офис</h2>
          
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-[#00a046] mt-1" />
            <div>
              <p className="font-medium">Адрес</p>
              <p>ул. Примерная, 123</p>
              <p>Киев, 01001</p>
              <p className="mt-4">
                Мы находимся в центре города, недалеко от станции метро "Центральная". 
                Вход со стороны главной улицы, второй этаж торгового центра.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
