import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import "./styles.css"

export default function Home() {
  return (
    <main className="main-container">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">Mr coffe</h1>
      </header>

      {/* Main content */}
      <section className="content">
        {/* Main image */}
        <div className="main-image-container">
          <Image
            src="/images/latte-art.png"
            alt="Barista pouring milk into coffee cup creating latte art"
            fill
            className="image-cover"
            priority
          />
        </div>

        {/* Two column images */}
        <div className="two-column-grid">
          <div className="image-container">
            <Image src="/images/coffee-shop.png" alt="Coffee shop interior" fill className="image-cover" />
          </div>
          <div className="image-container">
            <Image src="/images/coffee-beans.png" alt="Coffee beans with scoop" fill className="image-cover" />
          </div>
        </div>

        {/* "The new" section */}
        <div className="section-header">
          <h2 className="section-title">The new</h2>
        </div>

        {/* Products grid */}
        <div className="products-grid">
          <div className="product-item">
            <div className="product-image-container">
              <Image
                src="/images/milkshake.png"
                alt="Strawberry milkshake"
                fill
                className="image-cover product-image"
              />
            </div>
            <p className="product-name">Milshake</p>
          </div>
          <div className="product-item">
            <div className="product-image-container">
              <Image
                src="/images/cake-pink.png"
                alt="Pink cake with strawberries"
                fill
                className="image-cover product-image"
              />
            </div>
            <p className="product-name">Cake pink</p>
          </div>
          <div className="product-item">
            <div className="product-image-container">
              <Image
                src="/images/chocotorta.png"
                alt="Chocolate torta dessert"
                fill
                className="image-cover product-image"
              />
            </div>
            <p className="product-name">Chocotorta</p>
          </div>
          <div className="product-item">
            <div className="product-image-container">
              <Image
                src="/images/affogato.png"
                alt="Affogato coffee dessert"
                fill
                className="image-cover product-image"
              />
            </div>
            <p className="product-name">Affogato</p>
          </div>
        </div>
      </section>

      {/* Bottom navigation */}
      <footer className="footer">
        <nav className="nav-bar">
          <Link href="/" className="nav-item">
            <Star className="nav-icon" />
            <span className="nav-text">Menu</span>
          </Link>
          <Link href="/productos" className="nav-item">
            <Star className="nav-icon" />
            <span className="nav-text">Productos</span>
          </Link>
          <Link href="/nosotros" className="nav-item">
            <Star className="nav-icon" />
            <span className="nav-text">Nosotros</span>
          </Link>
        </nav>
      </footer>
    </main>
  )
}