"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { 
  HamburgerMenuIcon,
  MagnifyingGlassIcon, 
  PersonIcon, 
  BackpackIcon,
  EnvelopeClosedIcon,
  MobileIcon
} from "@radix-ui/react-icons"

export function Navigation() {
  return (
    <>
      {/* Desktop Header */}
      <header className="bg-[#221f1f] text-white hidden md:block">
        {/* Top bar with contacts */}
        <div className="container mx-auto px-4 border-b border-gray-700">
          <div className="flex items-center h-10 gap-6 text-sm">
            <div className="flex items-center gap-2">
              <MobileIcon className="h-4 w-4" />
              <span>(099)623-6655</span>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeClosedIcon className="h-4 w-4" />
              <a href="mailto:sale@admart.ua" className="hover:text-gray-300">sale@admart.ua</a>
            </div>
            <Link href="/contacts" className="hover:text-gray-300">
              Контакты
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex items-center h-14 gap-4">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-white">
              ADMART
            </Link>

            {/* Catalog Button */}
            <Link href="/catalog">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent border-gray-600 hover:bg-gray-800">
                <HamburgerMenuIcon className="h-4 w-4" />
                Каталог
              </Button>
            </Link>

            {/* Search */}
            <div className="flex-grow max-w-2xl">
              <div className="relative">
                <Input 
                  type="search" 
                  placeholder="Я ищу..." 
                  className="w-full bg-white text-black pl-10 pr-4 h-9 rounded"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-6">
              <button className="hover:text-gray-300">
                RU
              </button>
              <button className="hover:text-gray-300">
                <PersonIcon className="h-[1.2rem] w-[1.2rem]" />
              </button>
              <button className="hover:text-gray-300">
                <BackpackIcon className="h-[1.2rem] w-[1.2rem]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="bg-[#221f1f] text-white md:hidden">
        {/* Top bar with contacts */}
        <div className="container mx-auto px-4 border-b border-gray-700">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-2">
              <MobileIcon className="h-4 w-4" />
              <span>(099)623-6655</span>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeClosedIcon className="h-4 w-4" />
              <a href="mailto:sale@admart.ua" className="hover:text-gray-300">sale@admart.ua</a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex items-center h-14 gap-4">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-white">
              ADMART
            </Link>

            {/* Search */}
            <div className="flex-grow">
              <div className="relative">
                <Input 
                  type="search" 
                  placeholder="Я ищу..." 
                  className="w-full bg-white text-black pl-10 pr-4 h-9 rounded"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-4">
              <button className="hover:text-gray-300">
                <PersonIcon className="h-[1.2rem] w-[1.2rem]" />
              </button>
              <button className="hover:text-gray-300">
                <BackpackIcon className="h-[1.2rem] w-[1.2rem]" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
