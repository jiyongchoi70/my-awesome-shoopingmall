import { ShoppingBag, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          {/* 브랜드 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-6 h-6" />
              <span className="text-xl font-bold">LUXE</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">당신의 스타일을 표현하는 프리미엄 의류 브랜드</p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="font-bold mb-4">빠른 링크</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  홈
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  제품
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  회사소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  블로그
                </a>
              </li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div>
            <h4 className="font-bold mb-4">고객지원</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  배송 안내
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  반품 정책
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  연락처
                </a>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="font-bold mb-4">연락처</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex gap-2 items-start">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>02-1234-5678</span>
              </li>
              <li className="flex gap-2 items-start">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@luxe.com</span>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>서울시 강남구 테헤란로 123</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <p>&copy; 2025 LUXE. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                개인정보 처리방침
              </a>
              <a href="#" className="hover:text-white transition-colors">
                이용약관
              </a>
              <a href="#" className="hover:text-white transition-colors">
                사이트맵
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
