"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import BranchCard from "../components/branch-card"
import ServiceCard from "../components/service-card"
import ReviewCarousel from "../components/review-carousel"
import ContactForm from "../components/contact-form"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      {/* Header - Ahora con un sutil degradado */}
      <header className="container mx-auto p-6 flex justify-between items-center bg-gradient-to-b from-black to-transparent relative">
        <div className="flex items-center">
          <Image
            src="npwhite.png"
            alt="Nuevo Parket Logo"
            width={64}
            height={64}
            className="mr-2 opacity-95"
          />
        </div>
        <nav className="hidden md:flex space-x-6 font-bold text-[#f5f5f5]">
          <Link href="#servicios" className="relative hover:text-[#ef7f1a] transition-colors group">
            Servicios
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ef7f1a] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#sucursales" className="relative hover:text-[#ef7f1a] transition-colors group">
            Sucursales
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ef7f1a] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#opiniones" className="relative hover:text-[#ef7f1a] transition-colors group">
            Opiniones
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ef7f1a] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#contacto" className="relative hover:text-[#ef7f1a] transition-colors group">
            Contacto
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ef7f1a] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40">
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              <Link 
                href="#servicios" 
                className="text-2xl text-[#f5f5f5]/90 hover:text-[#ef7f1a] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                href="#sucursales" 
                className="text-2xl text-[#f5f5f5]/90 hover:text-[#ef7f1a] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sucursales
              </Link>
              <Link 
                href="#opiniones" 
                className="text-2xl text-[#f5f5f5]/90 hover:text-[#ef7f1a] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Opiniones
              </Link>
              <Link 
                href="#contacto" 
                className="text-2xl text-[#f5f5f5]/90 hover:text-[#ef7f1a] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-stretch justify-center">
            <div className="w-full md:w-1/2 flex items-center justify-center p-4">
              <div className="w-full max-w-[600px]">
                <Image
                  src="/logo-header.png"
                  alt="Nuevo Parket Logo"
                  width={1000}
                  height={250}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center px-8">
              <div className="flex flex-1 items-center">
                <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center p-4">
              <div className="w-full max-w-[400px] flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-[#ef7f1a] text-center whitespace-nowrap">
                  Creamos Bienestar
                </h2>
                <p className="text-lg md:text-xl text-center font-bold text-[#f5f5f5]">
                  En Nuevo Parket simplificamos tu obra estando en cada detalle
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Separator */}
        <div className="flex justify-center">
          <hr className="my-12 h-0.5 w-[60%] border-t-0 bg-neutral-100 dark:bg-white/10" />
        </div>
      </section>

      
      {/* Branches Section */}
      <section id="sucursales" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestras Sucursales</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BranchCard
              name="Sucursal La Plata"
              image="laplata.jpg"
              mapUrl="https://maps.app.goo.gl/dnawk5p1RQQyMnoJ9"
              whatsappUrl="https://w.app/nuevoparketlaplata"
            />

            <BranchCard
              name="Sucursal Gonnet"
              image="gonnet.jpg"
              mapUrl="https://maps.app.goo.gl/fkA29KJ6mSNY1nu96"
              whatsappUrl="https://w.app/nuevoparketgonnet"
            />

            <BranchCard
              name="Sucursal Quilmes"
              image="quilmes.jpg"
              mapUrl="https://maps.app.goo.gl/kmheZu61GLdVik727"
              whatsappUrl="https://w.app/nuevoparketquilmes"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Piso vinílico SPC"
              description="Pisos vinílicos de alta resistencia, impermeables y fáciles de instalar."
              image="spc-flooring.jpg"
            />

            <ServiceCard
              title="Piso laminado"
              description="Elegancia y durabilidad con nuestros pisos laminados de alta calidad."
              image="laminated.jpg"
            />

            <ServiceCard
              title="Deck WPC"
              description="Decks resistentes a la intemperie, ideales para exteriores."
              image="wpc-deck.jpg"
            />

            <ServiceCard
              title="Piso de madera"
              description="La calidez y elegancia natural de los pisos de madera maciza."
              image="wood-floor.jpg"
            />

            <ServiceCard
              title="Revestimientos"
              description="Soluciones para interior y exterior que transforman tus espacios."
              image="wpc-exterior.jpg"
            />

            <ServiceCard
              title="Restauración"
              description="Restauración y reparaciones profesionales de pisos de madera."
              image="pulido.jpg"
            />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="opiniones" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">¿Qué dicen de nosotros?</h2>

          <ReviewCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contactanos</h2>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image
                src="npwhite.png"
                alt="Nuevo Parket Logo"
                width={60}
                height={60}
                className="mb-4 mx-auto md:mx-0"
              />
              <p className="text-gray-400 text-center md:text-left">
                © {new Date().getFullYear()} Nuevo Parket. Todos los derechos reservados.
              </p>
            </div>

            <div className="flex space-x-6">
              <Link
                href="https://instagram.com/nuevoparket"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ef7f1a] transition-colors"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://wa.me/5492216172006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ef7f1a] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link
                href="https://www.facebook.com/pisosnuevoparket/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ef7f1a] transition-colors"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

