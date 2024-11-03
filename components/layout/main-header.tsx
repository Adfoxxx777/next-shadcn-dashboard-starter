"use client"

import { Search, ShoppingCart, Menu, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export function MainHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#221f1f]">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-white">PrintStand</span>
          </Link>
          
          <Button variant="ghost" className="text-white hover:bg-[#3e3e3e] flex items-center gap-2">
            <Menu className="h-5 w-5" />
            <span>Каталог</span>
          </Button>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-4 px-4">
          <div className="w-full max-w-xl flex items-center">
            <Input
              type="search"
              placeholder="Я ищу..."
              className="h-10 rounded-r-none"
            />
            <Button type="submit" className="h-10 rounded-l-none bg-[#00a046] hover:bg-[#00bc52]">
              <Search className="h-5 w-5" />
            </Button>
          </div>
          
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" asChild className="text-white hover:bg-[#3e3e3e]">
              <Link href="/contacts">Контакты</Link>
            </Button>
            
            <Button variant="ghost" className="text-white hover:bg-[#3e3e3e]">
              <Globe className="h-5 w-5" />
            </Button>

            <Button variant="ghost" className="text-white hover:bg-[#3e3e3e]">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
