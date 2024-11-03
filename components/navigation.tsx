"use client";

import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, User } from "lucide-react";

export function Navigation() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <nav className="flex items-center space-x-8">
          <a href="/" className="text-xl font-semibold">LoveWear</a>
          
          <NavigationMenu>
            <ul className="flex space-x-6">
              <li><a href="/catalog/bra">Бюстгальтеры</a></li>
              <li><a href="/catalog/panties">Трусики</a></li>
              <li><a href="/catalog/sets">Комплекты</a></li>
              <li><a href="/size-calculator">Подбор размера</a></li>
            </ul>
          </NavigationMenu>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

