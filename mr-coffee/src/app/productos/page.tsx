import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import "../styles.css"

export default function ProductosPage() {
  return (
    <main className="main-container">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">Productos</h1>
      </header>

      {/* Main content */}
      <section className="content">
        {/* Dulce section */}
        <div className="category-header">
          <h2 className="category-title">Dulce</h2>
        </div>
        <div className="category-grid">
          <div className="category-item">
            <div className="category-image-container">
              <Image
                src="/images/chocotorta.png"
                alt="Chocolate torta dessert"
                width={120}
                height={120}
                className="category-image"
              />
            </div>
            <p className="category-name">chocotorta</p>
          </div>
          <div className="category-item">
            <div className="category-image-container">
              <Image
                src="/images/tiramisu.png"
                alt="Tiramisu dessert"
                width={120}
                height={120}
                className="category-image"
              />
            </div>
            <p className="category-name">Tiramisu</p>
          </div>
          <div className="category-item">
            <div className="category-image-container">
              <Image
                src="/images/cheesecake.png"
                alt="Cheesecake dessert"
                width={120}
                height={120}
                className="category-image"
              />
            </div>
            <p className="category-name">Cheesecake</p>
          </div>
          <div className="category-item">
            <div className="category-image-container">
              <Image
                src="/images/lemon-pie.png"
                alt="Lemon pie dessert"
                width={120}
                height={120}
                className="category-image"
              />
            </div>
            <p className="category-name">Lemon pie</p>
          </div>
        </div>

        {/* Salado section */}
        <div className="category-header">
          <h2 className="category-title">Salado</h2>
        </div>
        <div className="category-grid">
          <div className="category-item">
            <div className="category-image-container">
              <Image
                src="/images/medialunas.png"
                alt="Medialunas pastries"
                width={120}
                height={120}
                className="category-image"
              />
            </div>
            <p className="category-name">Medialunas [x2]</p>
          </div>
          <div className="category-item">
            <div className="category-image-container">
              <Image src="/images/tostadas.png" alt="Toast" width={120} height={120} className="category-image" />
            </div>
            <p className="category-name">Tostadas</p>
          </div>
        </div>

        {/* Bebidas section */}
        <div className="category-header">
          <h2 className="category-title">Bebidas</h2>
        </div>
        <div className="category-grid">
          <div className="category-item">
            <div className="category-image-container">
              <Image
                src="/images/macchiato.png"
                alt="Macchiato coffee"
                width={120}
                height={120}
                className="category-image"
              />
            </div>
            <p className="category-name">Macchiato</p>
          </div>
          <div className="category-item">
            <div className="category-image-container">
              <Image
                src="/images/submarino.png"
                alt="Submarino hot chocolate"
                width={120}
                height={120}
                className="category-image"
              />
            </div>
            <p className="category-name">Submarino</p>
          </div>
          <div className="category-item">
            <div className="category-image-container">
              <Image src="/images/latte.png" alt="Latte coffee" width={120} height={120} className="category-image" />
            </div>
            <p className="category-name">Latte</p>
          </div>
          <div className="category-item">
            <div className="category-image-container">
              <Image src="/images/frappe.png" alt="Frappé coffee" width={120} height={120} className="category-image" />
            </div>
            <p className="category-name">Frappé</p>
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
          <Link href="/productos" className="nav-item active">
            <Star className="nav-icon filled" />
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
