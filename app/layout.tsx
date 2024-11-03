import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MainHeader } from "@/components/layout/main-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PrintStand",
  description: "Мобильные стенды и широкоформатная печать",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <MainHeader />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
