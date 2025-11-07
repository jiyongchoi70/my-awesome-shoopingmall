import { Award, Users, Globe } from "lucide-react"

export default function About() {
  const stats = [
    { icon: Users, label: "고객 만족도", value: "98%" },
    { icon: Globe, label: "전국 배송", value: "365일" },
    { icon: Award, label: "상패", value: "5개" },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 왼쪽 이미지 */}
          <div className="relative h-96 rounded-2xl overflow-hidden bg-neutral-200">
            <img
              src="https://picsum.photos/seed/vibe-about/1200/900"
              alt="회사소개"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 오른쪽 콘텐츠 */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 text-balance">
                LUXE에 대해 알아보세요
              </h2>
              <p className="text-lg text-neutral-600 text-balance leading-relaxed">
                2010년부터 시작한 LUXE는 패션에 대한 열정과 고객 만족을 최우선으로 하는 의류 전문 브랜드입니다. 우리는
                단순히 옷을 파는 것이 아니라, 라이프스타일을 함께 하는 파트너가 되기를 원합니다.
              </p>
            </div>

            {/* 통계 */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="p-4 bg-neutral-50 rounded-lg">
                    <Icon className="w-6 h-6 text-neutral-900 mb-2" />
                    <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                    <p className="text-xs text-neutral-600 mt-1">{stat.label}</p>
                  </div>
                )
              })}
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-neutral-900">우리의 약속</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-neutral-900 font-bold mt-1">•</span>
                  <span className="text-neutral-600">최고 품질의 소재와 디자인으로 최고의 제품을 제공</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-neutral-900 font-bold mt-1">•</span>
                  <span className="text-neutral-600">합리적인 가격으로 모든 고객에게 프리미엄 경험 제공</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-neutral-900 font-bold mt-1">•</span>
                  <span className="text-neutral-600">환경을 생각하는 지속 가능한 패션 추구</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
