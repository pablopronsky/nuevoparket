import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import BranchCard from "../components/branch-card"
import ServiceCard from "../components/service-card"
import ReviewCarousel from "../components/review-carousel"
import ContactForm from "../components/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto p-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="npwhite.png"
            alt="Nuevo Parket Logo"
            width={64}
            height={64}
            className="mr-2"
          />
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#servicios" className="hover:text-[#ef7f1a] transition-colors">
            Servicios
          </Link>
          <Link href="#sucursales" className="hover:text-[#ef7f1a] transition-colors">
            Sucursales
          </Link>
          <Link href="#opiniones" className="hover:text-[#ef7f1a] transition-colors">
            Opiniones
          </Link>
          <Link href="#contacto" className="hover:text-[#ef7f1a] transition-colors">
            Contacto
          </Link>
        </nav>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Nuevo Parket <br></br> <span className="text-[#ef7f1a]">Creamos Bienestar</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Venta y colocación de pisos y revestimientos de alta calidad.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-800 rounded-lg p-6 transform transition-transform hover:scale-105">
              <Image
                src="quality.jpg"
                alt="Calidad"
                width={300}
                height={200}
                className="mx-auto mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">Calidad Premium</h3>
              <p className="text-gray-300">
                Trabajamos con los mejores materiales del mercado para garantizar durabilidad y belleza.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 transform transition-transform hover:scale-105">
              <Image
                src="professional.png"
                alt="Experiencia"
                width={300}
                height={200}
                className="mx-auto mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">Experiencia Profesional</h3>
              <p className="text-gray-300">
                Nuestro equipo cuenta con años de experiencia en instalación y asesoramiento.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 transform transition-transform hover:scale-105">
              <Image
                src="/warranty.jpg"
                alt="Garantía"
                width={300}
                height={200}
                className="mx-auto mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">Garantía Asegurada</h3>
              <p className="text-gray-300">
                Todos nuestros productos e instalaciones cuentan con garantía certificada.
              </p>
            </div>
          </div>
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

