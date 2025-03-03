import Image from "next/image"
import Link from "next/link"
import { MapPin, MessageCircle } from "lucide-react"
import React from "react"

interface BranchCardProps {
  name: string
  image: string
  mapUrl: string
  whatsappUrl: string
}

export default function BranchCard({ name, image, mapUrl, whatsappUrl }: BranchCardProps) {
  return (
    <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        width={400}
        height={400}
        className="w-full h-full object-cover"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold mb-4 text-center text-white">{name}</h3>

        <div className="flex flex-row space-x-4 justify-center">
          <Link
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2 rounded-xl text-white 
            bg-[#191919] border-2 border-[#ef7f1a] hover:bg-[#ef7f1a]
            shadow-lg shadow-[#ef7f1a]/20 transform hover:-translate-y-0.5 
            transition-all duration-200 ease-out"
          >
            <MapPin size={16} className="stroke-2" />
            <span className="font-medium text-sm">Ubicación</span>
          </Link>

          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2 rounded-xl text-white 
            bg-[#191919] border-2 border-[#016425] hover:bg-[#016425]
            shadow-lg shadow-[#016425]/20 transform hover:-translate-y-0.5 
            transition-all duration-200 ease-out"
          >
            <MessageCircle size={16} className="stroke-2" />
            <span className="font-medium text-sm">Contacto</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

