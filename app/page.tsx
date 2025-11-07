import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Products from "@/components/products"
import About from "@/components/about"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Features />
      <Products />
      <About />
      <Footer />
    </div>
  )
}
