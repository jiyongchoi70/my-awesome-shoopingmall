"use client"

import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-neutral-900" />
            <span className="text-xl font-bold text-neutral-900">LUXE</span>
          </div>

          {/* 네비게이션 - 데스크톱 */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              특징
            </a>
            <a
              href="#products"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              제품
            </a>
            <a href="#about" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
              회사소개
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              문의
            </a>
          </nav>

          {/* 버튼 - 데스크톱 */}
          <div className="hidden md:flex gap-4">
            <button className="px-6 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors">
              로그인
            </button>
            <button className="px-6 py-2 text-sm font-medium bg-neutral-900 text-white hover:bg-neutral-800 rounded-lg transition-colors">
              구매하기
            </button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* 모바일 네비게이션 */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#features" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">
              특징
            </a>
            <a href="#products" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">
              제품
            </a>
            <a href="#about" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">
              회사소개
            </a>
            <a href="#contact" className="text-sm font-medium text-neutral-600 hover:text-neutral-900">
              문의
            </a>
            <button className="w-full px-6 py-2 text-sm font-medium bg-neutral-900 text-white rounded-lg">
              구매하기
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
