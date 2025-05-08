import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import "../styles.css"

export default function NosotrosPage() {
  return (
    <main className="main-container">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">Nosotros</h1>
      </header>

      {/* Main content */}
      <section className="about-content">
        <h2 className="header-title">Nuestra historia</h2>

        <div className="about-container">
          <div className="founders-image-container">
            <Image
              src="/images/founders.png"
              alt="Founders of Mr Coffe"
              width={200}
              height={200}
              className="founders-image"
            />
          </div>

          <p className="about-text">
            Todo empezó por nosotras dos con el sueño de abrir una cafetería y después de tantos sacrificios pudimos
            abrir mr coffe, le agradecemos muchos a todas las personas que nos apoyaron y creyeron en nosotras haesta el
            final.
          </p>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section">
        <div className="social-icons">
          <Link href="https://w.app/mrcoffe" aria-label="WhatsApp" className="social-icon" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </Link>
         <Link href="https://www.instagram.com/padrecoffeeroasters" aria-label="Instagram" className="social-icon" target="_blank" rel="noopener noreferrer">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
          <Link href="https://www.facebook.com/tiendadecafe" aria-label="Facebook" className="social-icon" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </Link>
          <Link href="https://twitter.com/cafeteriaEpcc" aria-label="Twitter" className="social-icon" target="_blank" rel="noopener noreferrer">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </Link>
        </div>
        <h2 className="social-title">Redes sociales</h2>
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
          <Link href="/nosotros" className="nav-item active">
            <Star className="nav-icon filled" />
            <span className="nav-text">Nosotros</span>
          </Link>
        </nav>
      </footer>
    </main>
  )
}
