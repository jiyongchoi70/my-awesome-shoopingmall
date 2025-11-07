import { Sparkles, Truck, Shield, RotateCcw } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "프리미엄 품질",
      description: "최고 품질의 소재로 제작된 의류로 오래 입어도 변하지 않는 품질을 보장합니다.",
    },
    {
      icon: Truck,
      title: "빠른 배송",
      description: "전국 어디나 2-3일 내 배송됩니다. 빠르고 안전한 배송 서비스를 제공합니다.",
    },
    {
      icon: Shield,
      title: "안전한 쇼핑",
      description: "안전한 결제 시스템과 개인정보 보호로 믿을 수 있는 쇼핑 경험을 제공합니다.",
    },
    {
      icon: RotateCcw,
      title: "무료 반품",
      description: "마음에 들지 않으면 30일 이내 무료로 반품하고 환불받을 수 있습니다.",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 text-balance">왜 우리를 선택하나요?</h2>
          <p className="text-lg text-neutral-600 text-balance">
            고객 만족을 최우선으로 하는 우리의 서비스를 경험해보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="p-8 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition-colors group">
                <Icon className="w-12 h-12 text-neutral-900 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
