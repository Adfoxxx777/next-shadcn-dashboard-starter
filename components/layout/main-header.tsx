"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export function MainHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold inline-block text-xl">PrintStand</span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="w-full max-w-xl flex items-center space-x-2">
            <Input
              type="search"
              placeholder="Поиск..."
              className="h-9 w-full"
            />
            <Button type="submit" size="sm" className="h-9">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/catalog">Каталог</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/about">О нас</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/contacts">Контакты</Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
