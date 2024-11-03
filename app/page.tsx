import { MainHeader } from '@/components/layout/main-header';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <MainHeader />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Мобильные стенды и широкоформатная печать</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Roll Up стенды</h2>
            <p className="text-muted-foreground">Мобильные стенды для презентаций и выставок</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">X-Banner стенды</h2>
            <p className="text-muted-foreground">Легкие и компактные рекламные конструкции</p>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Широкоформатная печать</h2>
            <p className="text-muted-foreground">Печать баннеров, плакатов и других материалов</p>
          </div>
        </div>
      </main>
    </div>
  )
}
