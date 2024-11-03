import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center space-y-8 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
            Добро пожаловать в нашу платформу
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Управляйте вашим бизнесом эффективно с помощью нашей современной
            админ-панели
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild>
              <Link href="/dashboard">Войти в панель управления</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/auth/signin">Войти в аккаунт</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
