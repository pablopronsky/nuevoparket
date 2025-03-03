"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import React from "react"

// Mock data for reviews
const reviews = [
  {
    id: 1,
    name: "María González",
    rating: 5,
    text: "Excelente servicio y calidad en los productos. Instalaron el piso vinílico en mi casa y quedó perfecto. Muy recomendable.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    rating: 5,
    text: "Muy buena atención en la sucursal de La Plata. El asesoramiento fue clave para elegir el piso adecuado para mi hogar.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Laura Martínez",
    rating: 4,
    text: "Compramos deck WPC para nuestra terraza y estamos muy satisfechos con el resultado. Buena relación calidad-precio.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "Juan Pérez",
    rating: 5,
    text: "Restauraron el piso de madera de mi casa y quedó como nuevo. Profesionales y puntuales. Muy recomendable.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 5,
    name: "Ana López",
    rating: 5,
    text: "Excelente atención en la sucursal de Quilmes. Los pisos laminados que instalaron son de primera calidad.",
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Handle autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay])

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  return (
    <div className="relative max-w-3xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
        <div className="flex items-center mb-4">
          <img
            src={reviews[currentIndex].image || "/placeholder.svg"}
            alt={reviews[currentIndex].name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-bold">{reviews[currentIndex].name}</h4>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill={i < reviews[currentIndex].rating ? "currentColor" : "none"} />
              ))}
            </div>
          </div>
        </div>

        <p className="text-gray-300 italic">"{reviews[currentIndex].text}"</p>

        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-[#ef7f1a]" : "bg-gray-600"}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        onClick={goToPrevious}
        aria-label="Previous review"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        onClick={goToNext}
        aria-label="Next review"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}

