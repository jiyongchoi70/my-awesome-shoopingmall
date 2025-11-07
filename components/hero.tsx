import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 왼쪽 콘텐츠 */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-neutral-600 bg-neutral-100 rounded-full">
                2024년 최신 컬렉션
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 text-balance leading-tight">
                당신의 스타일, 우리의 패션
              </h1>
              <p className="text-lg text-neutral-600 text-balance">
                프리미엄 소재와 세련된 디자인으로 만나는 최고의 의류 컬렉션. 개성 있는 당신을 위해 특별히 준비했습니다.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors">
                지금 쇼핑하기
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-neutral-900 text-neutral-900 font-semibold rounded-lg hover:bg-neutral-50 transition-colors">
                카탈로그 보기
              </button>
            </div>
          </div>

          {/* 오른쪽 이미지 */}
          <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden bg-neutral-200">
            <img
              src="https://picsum.photos/seed/vibe-hero/1200/900"
              alt="패션 컬렉션"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
