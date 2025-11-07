export default function Products() {
  const products = [
    {
      id: 1,
      name: "프리미엄 캐주얼 셔츠",
      category: "상의",
      price: "79,000원",
      image: "https://picsum.photos/seed/vibe-shirt/600/600",
    },
    {
      id: 2,
      name: "슬림핏 청바지",
      category: "바지",
      price: "99,000원",
      image: "https://picsum.photos/seed/vibe-jeans/600/600",
    },
    {
      id: 3,
      name: "미니멀 드레스",
      category: "드레스",
      price: "89,000원",
      image: "https://picsum.photos/seed/vibe-dress/600/600",
    },
    {
      id: 4,
      name: "오버사이즈 후드",
      category: "아우터",
      price: "119,000원",
      image: "https://picsum.photos/seed/vibe-hoodie/600/600",
    },
  ]

  return (
    <section id="products" className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 text-balance">인기 제품</h2>
          <p className="text-lg text-neutral-600 text-balance">이번 시즌의 가장 인기 있는 아이템들을 만나보세요</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-neutral-200 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-neutral-500 uppercase">{product.category}</span>
                <h3 className="text-lg font-bold text-neutral-900 mt-2">{product.name}</h3>
                <p className="text-2xl font-bold text-neutral-900 mt-4">{product.price}</p>
                <button className="w-full mt-6 px-4 py-2 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors">
                  자세히 보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
