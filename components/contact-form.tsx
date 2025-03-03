"use client"

import React from "react"
import { useState, type FormEvent } from "react"

export default function ContactForm() {
  const [branch, setBranch] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Construct WhatsApp URL with form data
    const whatsappText = encodeURIComponent(
      `Hola, me contacto desde la web por la sucursal ${branch}.\n\nMi consulta: ${message}\n\nMi número de contacto: ${whatsapp}`,
    )

    // Determine which WhatsApp number to use based on selected branch
    let whatsappNumber = "5492216172006" // Default number

    if (branch === "La Plata") {
      whatsappNumber = "5492216172006"
    } else if (branch === "Gonnet") {
      whatsappNumber = "5492215644304"
    } else if (branch === "Quilmes") {
      whatsappNumber = "5491156238774"
    }

    // Open WhatsApp with the message
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappText}`, "_blank")

    // Reset form
    setBranch("")
    setWhatsapp("")
    setMessage("")
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="mb-4">
        <label htmlFor="branch" className="block text-sm font-medium mb-2">
          Sucursal de contacto
        </label>
        <select
          id="branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          required
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009933] text-white"
        >
          <option value="">Seleccionar sucursal</option>
          <option value="La Plata">La Plata</option>
          <option value="Gonnet">Gonnet</option>
          <option value="Quilmes">Quilmes</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="whatsapp" className="block text-sm font-medium mb-2">
          Número de WhatsApp
        </label>
        <input
          type="tel"
          id="whatsapp"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="Ej: 11 1234-5678"
          required
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009933] text-white"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Consulta
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="Escribe tu consulta aquí..."
          required
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009933] text-white resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#ef7f1a] hover:bg-[#d97416] text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ef7f1a] disabled:opacity-50"
      >
        {isSubmitting ? "Enviando..." : "Enviar Consulta"}
      </button>
    </form>
  )
}

