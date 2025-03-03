"use client"

import React from "react"
import { useState, type FormEvent } from "react"

export default function ContactForm() {
  return (
    <form className="space-y-6 p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="nombre">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ef7f1a] transition-colors"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ef7f1a] transition-colors"
            placeholder="tu@email.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="mensaje">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          rows={4}
          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#ef7f1a] transition-colors"
          placeholder="¿En qué podemos ayudarte?"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="w-full px-8 py-3 bg-[#191919] border-2 border-[#ef7f1a] rounded-xl text-white font-medium hover:bg-[#ef7f1a] transform hover:-translate-y-0.5 transition-all duration-200"
        >
          Enviar mensaje
        </button>
      </div>
    </form>
  )
}

