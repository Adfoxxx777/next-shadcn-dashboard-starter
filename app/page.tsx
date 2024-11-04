import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/20 to-background px-4 py-20 text-center md:px-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <h1 className="text-4xl font-bold md:text-6xl">
            Инновационные решения для вашего бизнеса
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Мы помогаем компаниям расти и развиваться, предоставляя передовые
            технологические решения
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/dashboard">
              <Button size="lg">Начать работу</Button>
            </Link>
            <Button variant="outline" size="lg">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Наши преимущества
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6">
              <h3 className="mb-3 text-xl font-semibold">Инновации</h3>
              <p className="text-muted-foreground">
                Используем передовые технологии и современные подходы в
                разработке
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="mb-3 text-xl font-semibold">Надежность</h3>
              <p className="text-muted-foreground">
                Гарантируем стабильную работу и безопасность ваших данных
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="mb-3 text-xl font-semibold">Поддержка</h3>
              <p className="text-muted-foreground">
                Предоставляем круглосуточную техническую поддержку
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted/50 px-4 py-20 md:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-3xl font-bold">Свяжитесь с нами</h2>
          <p className="mb-8 text-xl text-muted-foreground">
            Готовы обсудить ваш проект? Мы всегда на связи
          </p>
          <Button size="lg" variant="default">
            Связаться
          </Button>
        </div>
      </section>
    </div>
  );
}
